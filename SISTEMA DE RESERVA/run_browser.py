#!/usr/bin/env python3
import subprocess
import time
import json
import sys

def exec_js(js_code):
    script = f'''
tell application "Google Chrome"
    tell active tab of window 1
        execute javascript "{js_code}"
    end tell
end tell
'''
    # We can pass the script via stdin to osascript to avoid shell quoting hell!
    p = subprocess.Popen(['osascript'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = p.communicate(input=script)
    return p.returncode, out.strip(), err.strip()

if __name__ == '__main__':
    # Test execution
    ret, out, err = exec_js("window.location.href")
    print(f"Current URL: {out}")
    if err:
        print(f"Error: {err}")

