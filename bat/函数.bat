@echo off  
echo.��ʼ���ú���  
::call:myDosFunc  
::echo.�Ӻ�������myDosFunc
set cc=hello 
call:for cc %cc%
echo %cc%
echo %0
echo %~d0
echo %~p0
echo %~dp0
echo %~n0
echo.&pause&goto:eof  
::--------------------------------------------------------  
::-- �������ֿ�ʼ  
::--------------------------------------------------------  
:myDosFunc    - here starts my function identified by it`s label  
echo.  here the myDosFunc function is executing a group of commands  
echo.  it could do a lot of things  
goto:eof  
:test
echo %%1=%1
echo %%2=%2
set "%1=�޸���"
goto:eof
:for
SETLOCAL 
set "a=%%"
set "b=j"
for  /f "skip=1 tokens=3*" %%i in ('dir') do (
	if not "%%i"=="<DIR>" if not "%%j"=="�ֽ�" if not "%%j"=="�����ֽ�" (
	    echo %%j
	)
)
goto:eof