@echo off
chcp 65001 > nul
echo 正在啟動「Meanwhile · 此刻的世界」本地網站...
start http://localhost:3000
node server.js
pause
