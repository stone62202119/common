@echo off
title  ����������
set sencha="C:\Users\RFD\bin\Sencha\Cmd\6.5.2.15\sencha.exe"
:menu
echo --------------------------------------------------------------
echo  1 ���������� 2 �رշ����� 3.clear Site 4 bulid Site 5 to Site 6 ����
echo --------------------------------------------------------------
set /p option=���������ѡ��:
if %option% == 1 goto open
if %option% == 2 goto close
if %option% == 3 goto clean
if %option% == 4 goto build
if %option% == 5 goto site
if %option% == 6 goto restart
goto end
:open 
echo ִ������������
E:
cd \soft\nginx-1.13.4\
tasklist /nh|find /i "nginx.exe" >nul
if ERRORLEVEL 1 start nginx.exe
echo ������������
ping -n 2 127.0.0.1>nul
tasklist /nh|find /i "chrome.exe" >nul
if ERRORLEVEL 1 "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"   "http://product/Site/index.html#app"
goto menu
:close
E:
cd \soft\nginx-1.13.4\
nginx.exe -s quit
goto menu
:clean
call:toSite
sencha app refresh -build classic
goto menu
:build
call:toSite
start build
goto menu
:toSite
E:
cd E:\work\Asloop\Site
goto:eof
:site
call:toSite
start cmd
goto menu
:restart
E:
cd \soft\nginx-1.13.4\
nginx.exe -s quit
ping -n 2 127.0.0.1>nul
tasklist /nh|find /i "nginx.exe" >nul
if ERRORLEVEL 1 start nginx.exe
echo ������������
goto menu
:end
pause