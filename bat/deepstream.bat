@echo off
title  服务器管理
E:
cd node/deepstream
:menu
echo -----------------------------
echo  1 启动web服务器 2 启动两服务器 3 启动deepstream.io
echo -----------------------------
set/p option=请输入你的选择:
if %option% == 1 call:webStart
if %option% == 2 call:test
if %option% == 3 call:deepStart
goto menu
:deepStart
start npm run test
goto:eof
:webStart
start npm run webserver
goto:eof
:test
call:deepStart
call:webStart
pause
goto:eof
:end