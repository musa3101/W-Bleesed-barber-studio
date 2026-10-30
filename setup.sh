#!/usr/bin/env bash
set -e

echo "=== [MYNEXT] Iniciando Protocolo de Setup ==="

# 1. Asegurar rama dev
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "")
if [ "$CURRENT_BRANCH" != "dev" ]; then
    echo "Garantizando rama dev..."
    git checkout dev 2>/dev/null || git checkout -b dev
fi

# 2. Configurar automatizaciones Keep-Alive de Supabase si existe .env
if [ -f ".env" ]; then
    SUPABASE_URL=$(grep -E '^VITE_SUPABASE_URL=' .env | cut -d '=' -f2- | tr -d '"' | tr -d "'" | tr -d '[:space:]')
    SUPABASE_KEY=$(grep -E '^VITE_SUPABASE_ANON_KEY=' .env | cut -d '=' -f2- | tr -d '"' | tr -d "'" | tr -d '[:space:]')

    if [ -n "$SUPABASE_URL" ]; then
        echo "Detectada URL de Supabase: $SUPABASE_URL"
        
        # GitHub Actions Keep-Alive
        mkdir -p .github/workflows
        if [ ! -f ".github/workflows/keep-alive.yml" ]; then
            echo "Creando .github/workflows/keep-alive.yml..."
            cat <<EOF > .github/workflows/keep-alive.yml
name: Supabase Keep-Alive

on:
  schedule:
    # Ejecutar cada martes y viernes a las 06:00 UTC
    - cron: '0 6 * * 2,5'
  workflow_dispatch:

jobs:
  ping-supabase:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Supabase Health Endpoint
        run: |
          curl -s -f -X GET "${SUPABASE_URL}/auth/v1/health" \
            -H "apikey: ${SUPABASE_KEY}" || true
          echo "Ping de salud completado a Supabase."
EOF
        fi

        # GitLab CI Keep-Alive
        if [ ! -f ".gitlab-ci.yml" ]; then
            echo "Creando .gitlab-ci.yml..."
            cat <<EOF > .gitlab-ci.yml
stages:
  - keep-alive

supabase-ping:
  stage: keep-alive
  image: curlimages/curl:latest
  rules:
    - if: '\$CI_PIPELINE_SOURCE == "schedule"'
    - if: '\$CI_PIPELINE_SOURCE == "web"'
  script:
    - curl -s -f -X GET "${SUPABASE_URL}/auth/v1/health" -H "apikey: ${SUPABASE_KEY}" || true
    - echo "Ping de salud completado a Supabase."
EOF
        fi
    fi
fi

# 3. Instalar dependencias si existe package.json
if [ -f "package.json" ]; then
    echo "Instalando dependencias de Node.js..."
    npm install
fi

echo "=== [MYNEXT] Setup completado exitosamente ==="

