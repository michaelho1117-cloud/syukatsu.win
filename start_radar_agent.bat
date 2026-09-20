@echo off
chcp 65001 >nul
title 就勝 syukatsu.win - Local Radar Agent (本地扫描网桥)
color 0b

echo =======================================================
echo   📡 就勝 syukatsu.win - 本地真实扫描网桥助手
echo =======================================================
echo.
echo 正在启动本地网桥服务 (端口: 3028)...
echo.

cd /d "%~dp0"
node radar-agent/server.js

pause
