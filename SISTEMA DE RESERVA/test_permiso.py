#!/usr/bin/env python3
import subprocess
import time
import json
import sys

def run_js_in_chrome(js_code):
    # Escapar comillas dobles y barras para AppleScript
    escaped = js_code.replace('\\', '\\\\').replace('"', '\\"')
    cmd = f'osascript -e "tell application \\"Google Chrome\\" to tell active tab of front window to execute javascript \\"{escaped}\\""'
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return res.returncode, res.stdout.strip(), res.stderr.strip()

def check_permission():
    code, out, err = run_js_in_chrome("1+1")
    if code == 0:
        return True
    return False

if __name__ == '__main__':
    if not check_permission():
        print("PERMISSION_REQUIRED")
        sys.exit(1)
    print("READY")

