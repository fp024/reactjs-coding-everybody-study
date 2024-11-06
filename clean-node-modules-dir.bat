@echo off
setlocal

REM 현재 파일의 위치를 루트 디렉터리로 설정
set "ROOT_DIR=%~dp0"

REM 어떤 경로 이하의 node_modules 디렉토리가 전부 삭제될 것인지 출력합니다
echo Deleting all node_modules directories under: %ROOT_DIR%

REM 루트 디렉토리 확인
echo Press Enter key to continue...
set /p dummyVar=""

REM 모든 하위 프로젝트의 node_modules 폴더를 삭제합니다
for /r "%ROOT_DIR%" %%d in (node_modules) do (
    if exist "%%d" (
        echo Deleting %%d
        rd /s /q "%%d"
    )
)

echo Press Enter key to exit...
set /p dummyVar=""

endlocal
