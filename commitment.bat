@echo off
IF "%~1" == "" GOTO unavailable

git pull
git add .
git commit -m %1
git push

:unavailable
echo No commit message specified
exit