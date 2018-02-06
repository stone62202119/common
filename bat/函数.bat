@echo off  
echo.开始调用函数  
::call:myDosFunc  
::echo.从函数返回myDosFunc
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
::-- 函数部分开始  
::--------------------------------------------------------  
:myDosFunc    - here starts my function identified by it`s label  
echo.  here the myDosFunc function is executing a group of commands  
echo.  it could do a lot of things  
goto:eof  
:test
echo %%1=%1
echo %%2=%2
set "%1=修改了"
goto:eof
:for
SETLOCAL 
set "a=%%"
set "b=j"
for  /f "skip=1 tokens=3*" %%i in ('dir') do (
	if not "%%i"=="<DIR>" if not "%%j"=="字节" if not "%%j"=="可用字节" (
	    echo %%j
	)
)
goto:eof