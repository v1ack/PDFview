@echo off
call set APP_TYPE=pro
echo ------- Clear build folder
call rm build/* -rf
echo ------- Build js package
call npm run build
echo ------- Build Tizen project
call tizen build-web -e coursework.pdf -- build
echo ------- Build Tizen package
call tizen package -t wgt -- build\.buildResult -o dist

call set APP_TYPE=demo
echo ------- Build js package
call npm run build
echo ------- Build Tizen project
call tizen build-web -e coursework.pdf -- build
echo ------- Build Tizen package
call tizen package -t wgt -- build\.buildResult -o dist
