@echo off
cd /d "%~dp0"

start "" cmd /k "npm.cmd run dev"

timeout /t 4 /nobreak >nul

start "" "http://localhost:5173/"

exit