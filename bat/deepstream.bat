@echo off
title  ����������
E:
cd node/deepstream
:menu
echo -----------------------------
echo  1 ����web������ 2 ������������ 3 ����deepstream.io
echo -----------------------------
set/p option=���������ѡ��:
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