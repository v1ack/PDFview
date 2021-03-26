call set APP_TYPE=pro
echo ------- Clear build folder
call rm build/* -rf
echo ------- Build js package
call npm run build
echo ------- Build Tizen project
call tizen build-web -e coursework.pdf -- build
echo ------- Build Tizen package
call tizen package -t wgt -- build\.buildResult -o dist
echo ------- Install Tizen package
call tizen install -n "Docs View.wgt" -- dist
echo ------- Run app
call tizen run -p docviewpro
