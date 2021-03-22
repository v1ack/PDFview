echo ------- Build js package
call npm run build
echo ------- Build Tizen project
call tizen build-web -e coursework.pdf -- build
echo ------- Build Tizen package
call tizen package -t wgt -- build\.buildResult
echo ------- Install Tizen package
call tizen install -n pdfview.wgt -- build\.buildResult
echo ------- Run app
call tizen run -p docviewpro
