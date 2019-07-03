!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],factory):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=factory():root["pdfjs-dist/build/pdf"]=root.pdfjsLib=factory()}(this,function(){return function(modules){function __w_pdfjs_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports
var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}}
modules[moduleId].call(module.exports,module,module.exports,__w_pdfjs_require__)
module.l=!0
return module.exports}var installedModules={}
__w_pdfjs_require__.m=modules
__w_pdfjs_require__.c=installedModules
__w_pdfjs_require__.d=function(exports,name,getter){__w_pdfjs_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})}
__w_pdfjs_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})
Object.defineProperty(exports,"__esModule",{value:!0})}
__w_pdfjs_require__.t=function(value,mode){1&mode&&(value=__w_pdfjs_require__(value))
if(8&mode)return value
if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value
var ns=Object.create(null)
__w_pdfjs_require__.r(ns)
Object.defineProperty(ns,"default",{enumerable:!0,value:value})
if(2&mode&&"string"!=typeof value)for(var key in value)__w_pdfjs_require__.d(ns,key,function(key){return value[key]}.bind(null,key))
return ns}
__w_pdfjs_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module}
__w_pdfjs_require__.d(getter,"a",getter)
return getter}
__w_pdfjs_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)}
__w_pdfjs_require__.p=""
return __w_pdfjs_require__(__w_pdfjs_require__.s=0)}([function(module,exports,__w_pdfjs_require__){"use strict"
var pdfjsSharedUtil=__w_pdfjs_require__(1),pdfjsDisplayAPI=__w_pdfjs_require__(146),pdfjsDisplayTextLayer=__w_pdfjs_require__(162),pdfjsDisplayAnnotationLayer=__w_pdfjs_require__(163),pdfjsDisplayDOMUtils=__w_pdfjs_require__(151),pdfjsDisplaySVG=__w_pdfjs_require__(164),pdfjsDisplayWorkerOptions=__w_pdfjs_require__(156),pdfjsDisplayAPICompatibility=__w_pdfjs_require__(153),isNodeJS=__w_pdfjs_require__(4)
if(isNodeJS()){var PDFNodeStream=__w_pdfjs_require__(165).PDFNodeStream
pdfjsDisplayAPI.setPDFNetworkStreamFactory(function(params){return new PDFNodeStream(params)})}else if("undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream){var PDFFetchStream=__w_pdfjs_require__(168).PDFFetchStream
pdfjsDisplayAPI.setPDFNetworkStreamFactory(function(params){return new PDFFetchStream(params)})}else{var PDFNetworkStream=__w_pdfjs_require__(169).PDFNetworkStream
pdfjsDisplayAPI.setPDFNetworkStreamFactory(function(params){return new PDFNetworkStream(params)})}exports.build=pdfjsDisplayAPI.build
exports.version=pdfjsDisplayAPI.version
exports.getDocument=pdfjsDisplayAPI.getDocument
exports.LoopbackPort=pdfjsDisplayAPI.LoopbackPort
exports.PDFDataRangeTransport=pdfjsDisplayAPI.PDFDataRangeTransport
exports.PDFWorker=pdfjsDisplayAPI.PDFWorker
exports.renderTextLayer=pdfjsDisplayTextLayer.renderTextLayer
exports.AnnotationLayer=pdfjsDisplayAnnotationLayer.AnnotationLayer
exports.createPromiseCapability=pdfjsSharedUtil.createPromiseCapability
exports.PasswordResponses=pdfjsSharedUtil.PasswordResponses
exports.InvalidPDFException=pdfjsSharedUtil.InvalidPDFException
exports.MissingPDFException=pdfjsSharedUtil.MissingPDFException
exports.SVGGraphics=pdfjsDisplaySVG.SVGGraphics
exports.NativeImageDecoding=pdfjsSharedUtil.NativeImageDecoding
exports.CMapCompressionType=pdfjsSharedUtil.CMapCompressionType
exports.PermissionFlag=pdfjsSharedUtil.PermissionFlag
exports.UnexpectedResponseException=pdfjsSharedUtil.UnexpectedResponseException
exports.OPS=pdfjsSharedUtil.OPS
exports.VerbosityLevel=pdfjsSharedUtil.VerbosityLevel
exports.UNSUPPORTED_FEATURES=pdfjsSharedUtil.UNSUPPORTED_FEATURES
exports.createValidAbsoluteUrl=pdfjsSharedUtil.createValidAbsoluteUrl
exports.createObjectURL=pdfjsSharedUtil.createObjectURL
exports.removeNullCharacters=pdfjsSharedUtil.removeNullCharacters
exports.shadow=pdfjsSharedUtil.shadow
exports.Util=pdfjsSharedUtil.Util
exports.ReadableStream=pdfjsSharedUtil.ReadableStream
exports.URL=pdfjsSharedUtil.URL
exports.RenderingCancelledException=pdfjsDisplayDOMUtils.RenderingCancelledException
exports.getFilenameFromUrl=pdfjsDisplayDOMUtils.getFilenameFromUrl
exports.LinkTarget=pdfjsDisplayDOMUtils.LinkTarget
exports.addLinkAttributes=pdfjsDisplayDOMUtils.addLinkAttributes
exports.loadScript=pdfjsDisplayDOMUtils.loadScript
exports.GlobalWorkerOptions=pdfjsDisplayWorkerOptions.GlobalWorkerOptions
exports.apiCompatibilityParams=pdfjsDisplayAPICompatibility.apiCompatibilityParams},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}function setVerbosityLevel(level){Number.isInteger(level)&&(verbosity=level)}function getVerbosityLevel(){return verbosity}function info(msg){verbosity>=VerbosityLevel.INFOS&&console.log("Info: "+msg)}function warn(msg){verbosity>=VerbosityLevel.WARNINGS&&console.log("Warning: "+msg)}function deprecated(details){console.log("Deprecated API usage: "+details)}function unreachable(msg){throw new Error(msg)}function assert(cond,msg){cond||unreachable(msg)}function isSameOrigin(baseUrl,otherUrl){try{var base=new _url_polyfill.URL(baseUrl)
if(!base.origin||"null"===base.origin)return!1}catch(e){return!1}var other=new _url_polyfill.URL(otherUrl,base)
return base.origin===other.origin}function _isValidProtocol(url){if(!url)return!1
switch(url.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}function createValidAbsoluteUrl(url,baseUrl){if(!url)return null
try{var absoluteUrl=baseUrl?new _url_polyfill.URL(url,baseUrl):new _url_polyfill.URL(url)
if(_isValidProtocol(absoluteUrl))return absoluteUrl}catch(ex){}return null}function shadow(obj,prop,value){Object.defineProperty(obj,prop,{value:value,enumerable:!0,configurable:!0,writable:!1})
return value}function getLookupTableFactory(initializer){var lookup
return function(){if(initializer){lookup=Object.create(null)
initializer(lookup)
initializer=null}return lookup}}function removeNullCharacters(str){if("string"!=typeof str){warn("The argument for removeNullCharacters must be a string.")
return str}return str.replace(NullCharactersRegExp,"")}function bytesToString(bytes){assert(null!==bytes&&"object"===_typeof(bytes)&&void 0!==bytes.length,"Invalid argument for bytesToString")
var length=bytes.length,MAX_ARGUMENT_COUNT=8192
if(MAX_ARGUMENT_COUNT>length)return String.fromCharCode.apply(null,bytes)
for(var strBuf=[],i=0;length>i;i+=MAX_ARGUMENT_COUNT){var chunkEnd=Math.min(i+MAX_ARGUMENT_COUNT,length),chunk=bytes.subarray(i,chunkEnd)
strBuf.push(String.fromCharCode.apply(null,chunk))}return strBuf.join("")}function stringToBytes(str){assert("string"==typeof str,"Invalid argument for stringToBytes")
for(var length=str.length,bytes=new Uint8Array(length),i=0;length>i;++i)bytes[i]=255&str.charCodeAt(i)
return bytes}function arrayByteLength(arr){if(void 0!==arr.length)return arr.length
assert(void 0!==arr.byteLength)
return arr.byteLength}function arraysToBytes(arr){if(1===arr.length&&arr[0]instanceof Uint8Array)return arr[0]
var i,item,itemLength,resultLength=0,ii=arr.length
for(i=0;ii>i;i++){item=arr[i]
itemLength=arrayByteLength(item)
resultLength+=itemLength}var pos=0,data=new Uint8Array(resultLength)
for(i=0;ii>i;i++){item=arr[i]
item instanceof Uint8Array||(item="string"==typeof item?stringToBytes(item):new Uint8Array(item))
itemLength=item.byteLength
data.set(item,pos)
pos+=itemLength}return data}function string32(value){return String.fromCharCode(value>>24&255,value>>16&255,value>>8&255,255&value)}function log2(x){return 0>=x?0:Math.ceil(Math.log2(x))}function readInt8(data,start){return data[start]<<24>>24}function readUint16(data,offset){return data[offset]<<8|data[offset+1]}function readUint32(data,offset){return(data[offset]<<24|data[offset+1]<<16|data[offset+2]<<8|data[offset+3])>>>0}function isLittleEndian(){var buffer8=new Uint8Array(4)
buffer8[0]=1
var view32=new Uint32Array(buffer8.buffer,0,1)
return 1===view32[0]}function isEvalSupported(){try{new Function("")
return!0}catch(e){return!1}}function getInheritableProperty(_ref){for(var values,dict=_ref.dict,key=_ref.key,_ref$getArray=_ref.getArray,getArray=void 0===_ref$getArray?!1:_ref$getArray,_ref$stopWhenFound=_ref.stopWhenFound,stopWhenFound=void 0===_ref$stopWhenFound?!0:_ref$stopWhenFound,LOOP_LIMIT=100,loopCount=0;dict;){var value=getArray?dict.getArray(key):dict.get(key)
if(void 0!==value){if(stopWhenFound)return value
values||(values=[])
values.push(value)}if(++loopCount>LOOP_LIMIT){warn('getInheritableProperty: maximum loop count exceeded for "'.concat(key,'"'))
break}dict=dict.get("Parent")}return values}function toRomanNumerals(number){var lowerCase=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!1
assert(Number.isInteger(number)&&number>0,"The number should be a positive integer.")
for(var pos,romanBuf=[];number>=1e3;){number-=1e3
romanBuf.push("M")}pos=number/100|0
number%=100
romanBuf.push(ROMAN_NUMBER_MAP[pos])
pos=number/10|0
number%=10
romanBuf.push(ROMAN_NUMBER_MAP[10+pos])
romanBuf.push(ROMAN_NUMBER_MAP[20+number])
var romanStr=romanBuf.join("")
return lowerCase?romanStr.toLowerCase():romanStr}function stringToPDFString(str){var i,n=str.length,strBuf=[]
if("þ"===str[0]&&"ÿ"===str[1])for(i=2;n>i;i+=2)strBuf.push(String.fromCharCode(str.charCodeAt(i)<<8|str.charCodeAt(i+1)))
else for(i=0;n>i;++i){var code=PDFStringTranslateTable[str.charCodeAt(i)]
strBuf.push(code?String.fromCharCode(code):str.charAt(i))}return strBuf.join("")}function stringToUTF8String(str){return decodeURIComponent(escape(str))}function utf8StringToString(str){return unescape(encodeURIComponent(str))}function isEmptyObj(obj){for(var key in obj)return!1
return!0}function isBool(v){return"boolean"==typeof v}function isNum(v){return"number"==typeof v}function isString(v){return"string"==typeof v}function isArrayBuffer(v){return"object"===_typeof(v)&&null!==v&&void 0!==v.byteLength}function isSpace(ch){return 32===ch||9===ch||13===ch||10===ch}function createPromiseCapability(){var capability=Object.create(null),isSettled=!1
Object.defineProperty(capability,"settled",{get:function(){return isSettled}})
capability.promise=new Promise(function(resolve,reject){capability.resolve=function(data){isSettled=!0
resolve(data)}
capability.reject=function(reason){isSettled=!0
reject(reason)}})
return capability}Object.defineProperty(exports,"__esModule",{value:!0})
exports.toRomanNumerals=toRomanNumerals
exports.arrayByteLength=arrayByteLength
exports.arraysToBytes=arraysToBytes
exports.assert=assert
exports.bytesToString=bytesToString
exports.createPromiseCapability=createPromiseCapability
exports.deprecated=deprecated
exports.getInheritableProperty=getInheritableProperty
exports.getLookupTableFactory=getLookupTableFactory
exports.getVerbosityLevel=getVerbosityLevel
exports.info=info
exports.isArrayBuffer=isArrayBuffer
exports.isBool=isBool
exports.isEmptyObj=isEmptyObj
exports.isNum=isNum
exports.isString=isString
exports.isSpace=isSpace
exports.isSameOrigin=isSameOrigin
exports.createValidAbsoluteUrl=createValidAbsoluteUrl
exports.isLittleEndian=isLittleEndian
exports.isEvalSupported=isEvalSupported
exports.log2=log2
exports.readInt8=readInt8
exports.readUint16=readUint16
exports.readUint32=readUint32
exports.removeNullCharacters=removeNullCharacters
exports.setVerbosityLevel=setVerbosityLevel
exports.shadow=shadow
exports.string32=string32
exports.stringToBytes=stringToBytes
exports.stringToPDFString=stringToPDFString
exports.stringToUTF8String=stringToUTF8String
exports.utf8StringToString=utf8StringToString
exports.warn=warn
exports.unreachable=unreachable
Object.defineProperty(exports,"ReadableStream",{enumerable:!0,get:function(){return _streams_polyfill.ReadableStream}})
Object.defineProperty(exports,"URL",{enumerable:!0,get:function(){return _url_polyfill.URL}})
exports.createObjectURL=exports.FormatError=exports.XRefParseException=exports.XRefEntryException=exports.Util=exports.UnknownErrorException=exports.UnexpectedResponseException=exports.TextRenderingMode=exports.StreamType=exports.PermissionFlag=exports.PasswordResponses=exports.PasswordException=exports.NativeImageDecoding=exports.MissingPDFException=exports.MissingDataException=exports.InvalidPDFException=exports.AbortException=exports.CMapCompressionType=exports.ImageKind=exports.FontType=exports.AnnotationType=exports.AnnotationFlag=exports.AnnotationFieldFlag=exports.AnnotationBorderStyleType=exports.UNSUPPORTED_FEATURES=exports.VerbosityLevel=exports.OPS=exports.IDENTITY_MATRIX=exports.FONT_IDENTITY_MATRIX=void 0
__w_pdfjs_require__(2)
var _streams_polyfill=__w_pdfjs_require__(142),_url_polyfill=__w_pdfjs_require__(144),IDENTITY_MATRIX=[1,0,0,1,0,0]
exports.IDENTITY_MATRIX=IDENTITY_MATRIX
var FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0]
exports.FONT_IDENTITY_MATRIX=FONT_IDENTITY_MATRIX
var NativeImageDecoding={NONE:"none",DECODE:"decode",DISPLAY:"display"}
exports.NativeImageDecoding=NativeImageDecoding
var PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048}
exports.PermissionFlag=PermissionFlag
var TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4}
exports.TextRenderingMode=TextRenderingMode
var ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3}
exports.ImageKind=ImageKind
var AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26}
exports.AnnotationType=AnnotationType
var AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512}
exports.AnnotationFlag=AnnotationFlag
var AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864}
exports.AnnotationFieldFlag=AnnotationFieldFlag
var AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5}
exports.AnnotationBorderStyleType=AnnotationBorderStyleType
var StreamType={UNKNOWN:0,FLATE:1,LZW:2,DCT:3,JPX:4,JBIG:5,A85:6,AHX:7,CCF:8,RL:9}
exports.StreamType=StreamType
var FontType={UNKNOWN:0,TYPE1:1,TYPE1C:2,CIDFONTTYPE0:3,CIDFONTTYPE0C:4,TRUETYPE:5,CIDFONTTYPE2:6,TYPE3:7,OPENTYPE:8,TYPE0:9,MMTYPE1:10}
exports.FontType=FontType
var VerbosityLevel={ERRORS:0,WARNINGS:1,INFOS:5}
exports.VerbosityLevel=VerbosityLevel
var CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
exports.CMapCompressionType=CMapCompressionType
var OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
exports.OPS=OPS
var UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"}
exports.UNSUPPORTED_FEATURES=UNSUPPORTED_FEATURES
var PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
exports.PasswordResponses=PasswordResponses
var verbosity=VerbosityLevel.WARNINGS,PasswordException=function(){function PasswordException(msg,code){this.name="PasswordException"
this.message=msg
this.code=code}PasswordException.prototype=new Error
PasswordException.constructor=PasswordException
return PasswordException}()
exports.PasswordException=PasswordException
var UnknownErrorException=function(){function UnknownErrorException(msg,details){this.name="UnknownErrorException"
this.message=msg
this.details=details}UnknownErrorException.prototype=new Error
UnknownErrorException.constructor=UnknownErrorException
return UnknownErrorException}()
exports.UnknownErrorException=UnknownErrorException
var InvalidPDFException=function(){function InvalidPDFException(msg){this.name="InvalidPDFException"
this.message=msg}InvalidPDFException.prototype=new Error
InvalidPDFException.constructor=InvalidPDFException
return InvalidPDFException}()
exports.InvalidPDFException=InvalidPDFException
var MissingPDFException=function(){function MissingPDFException(msg){this.name="MissingPDFException"
this.message=msg}MissingPDFException.prototype=new Error
MissingPDFException.constructor=MissingPDFException
return MissingPDFException}()
exports.MissingPDFException=MissingPDFException
var UnexpectedResponseException=function(){function UnexpectedResponseException(msg,status){this.name="UnexpectedResponseException"
this.message=msg
this.status=status}UnexpectedResponseException.prototype=new Error
UnexpectedResponseException.constructor=UnexpectedResponseException
return UnexpectedResponseException}()
exports.UnexpectedResponseException=UnexpectedResponseException
var MissingDataException=function(){function MissingDataException(begin,end){this.begin=begin
this.end=end
this.message="Missing data ["+begin+", "+end+")"}MissingDataException.prototype=new Error
MissingDataException.prototype.name="MissingDataException"
MissingDataException.constructor=MissingDataException
return MissingDataException}()
exports.MissingDataException=MissingDataException
var XRefEntryException=function(){function XRefEntryException(msg){this.message=msg}XRefEntryException.prototype=new Error
XRefEntryException.prototype.name="XRefEntryException"
XRefEntryException.constructor=XRefEntryException
return XRefEntryException}()
exports.XRefEntryException=XRefEntryException
var XRefParseException=function(){function XRefParseException(msg){this.message=msg}XRefParseException.prototype=new Error
XRefParseException.prototype.name="XRefParseException"
XRefParseException.constructor=XRefParseException
return XRefParseException}()
exports.XRefParseException=XRefParseException
var FormatError=function(){function FormatError(msg){this.message=msg}FormatError.prototype=new Error
FormatError.prototype.name="FormatError"
FormatError.constructor=FormatError
return FormatError}()
exports.FormatError=FormatError
var AbortException=function(){function AbortException(msg){this.name="AbortException"
this.message=msg}AbortException.prototype=new Error
AbortException.constructor=AbortException
return AbortException}()
exports.AbortException=AbortException
var NullCharactersRegExp=/\x00/g,Util=function(){function Util(){}var rgbBuf=["rgb(",0,",",0,",",0,")"]
Util.makeCssRgb=function(r,g,b){rgbBuf[1]=r
rgbBuf[3]=g
rgbBuf[5]=b
return rgbBuf.join("")}
Util.transform=function(m1,m2){return[m1[0]*m2[0]+m1[2]*m2[1],m1[1]*m2[0]+m1[3]*m2[1],m1[0]*m2[2]+m1[2]*m2[3],m1[1]*m2[2]+m1[3]*m2[3],m1[0]*m2[4]+m1[2]*m2[5]+m1[4],m1[1]*m2[4]+m1[3]*m2[5]+m1[5]]}
Util.applyTransform=function(p,m){var xt=p[0]*m[0]+p[1]*m[2]+m[4],yt=p[0]*m[1]+p[1]*m[3]+m[5]
return[xt,yt]}
Util.applyInverseTransform=function(p,m){var d=m[0]*m[3]-m[1]*m[2],xt=(p[0]*m[3]-p[1]*m[2]+m[2]*m[5]-m[4]*m[3])/d,yt=(-p[0]*m[1]+p[1]*m[0]+m[4]*m[1]-m[5]*m[0])/d
return[xt,yt]}
Util.getAxialAlignedBoundingBox=function(r,m){var p1=Util.applyTransform(r,m),p2=Util.applyTransform(r.slice(2,4),m),p3=Util.applyTransform([r[0],r[3]],m),p4=Util.applyTransform([r[2],r[1]],m)
return[Math.min(p1[0],p2[0],p3[0],p4[0]),Math.min(p1[1],p2[1],p3[1],p4[1]),Math.max(p1[0],p2[0],p3[0],p4[0]),Math.max(p1[1],p2[1],p3[1],p4[1])]}
Util.inverseTransform=function(m){var d=m[0]*m[3]-m[1]*m[2]
return[m[3]/d,-m[1]/d,-m[2]/d,m[0]/d,(m[2]*m[5]-m[4]*m[3])/d,(m[4]*m[1]-m[5]*m[0])/d]}
Util.apply3dTransform=function(m,v){return[m[0]*v[0]+m[1]*v[1]+m[2]*v[2],m[3]*v[0]+m[4]*v[1]+m[5]*v[2],m[6]*v[0]+m[7]*v[1]+m[8]*v[2]]}
Util.singularValueDecompose2dScale=function(m){var transpose=[m[0],m[2],m[1],m[3]],a=m[0]*transpose[0]+m[1]*transpose[2],b=m[0]*transpose[1]+m[1]*transpose[3],c=m[2]*transpose[0]+m[3]*transpose[2],d=m[2]*transpose[1]+m[3]*transpose[3],first=(a+d)/2,second=Math.sqrt((a+d)*(a+d)-4*(a*d-c*b))/2,sx=first+second||1,sy=first-second||1
return[Math.sqrt(sx),Math.sqrt(sy)]}
Util.normalizeRect=function(rect){var r=rect.slice(0)
if(rect[0]>rect[2]){r[0]=rect[2]
r[2]=rect[0]}if(rect[1]>rect[3]){r[1]=rect[3]
r[3]=rect[1]}return r}
Util.intersect=function(rect1,rect2){function compare(a,b){return a-b}var orderedX=[rect1[0],rect1[2],rect2[0],rect2[2]].sort(compare),orderedY=[rect1[1],rect1[3],rect2[1],rect2[3]].sort(compare),result=[]
rect1=Util.normalizeRect(rect1)
rect2=Util.normalizeRect(rect2)
if(!(orderedX[0]===rect1[0]&&orderedX[1]===rect2[0]||orderedX[0]===rect2[0]&&orderedX[1]===rect1[0]))return!1
result[0]=orderedX[1]
result[2]=orderedX[2]
if(!(orderedY[0]===rect1[1]&&orderedY[1]===rect2[1]||orderedY[0]===rect2[1]&&orderedY[1]===rect1[1]))return!1
result[1]=orderedY[1]
result[3]=orderedY[2]
return result}
return Util}()
exports.Util=Util
var ROMAN_NUMBER_MAP=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],PDFStringTranslateTable=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364],createObjectURL=function(){var digits="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return function(data,contentType){var forceDataSchema=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!1
if(!forceDataSchema&&_url_polyfill.URL.createObjectURL){var blob=new Blob([data],{type:contentType})
return _url_polyfill.URL.createObjectURL(blob)}for(var buffer="data:"+contentType+";base64,",i=0,ii=data.length;ii>i;i+=3){var b1=255&data[i],b2=255&data[i+1],b3=255&data[i+2],d1=b1>>2,d2=(3&b1)<<4|b2>>4,d3=ii>i+1?(15&b2)<<2|b3>>6:64,d4=ii>i+2?63&b3:64
buffer+=digits[d1]+digits[d2]+digits[d3]+digits[d4]}return buffer}}()
exports.createObjectURL=createObjectURL},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}var globalScope=__w_pdfjs_require__(3)
if(!globalScope._pdfjsCompatibilityChecked){globalScope._pdfjsCompatibilityChecked=!0
var isNodeJS=__w_pdfjs_require__(4),hasDOM="object"===("undefined"==typeof window?"undefined":_typeof(window))&&"object"===("undefined"==typeof document?"undefined":_typeof(document))
!function(){!globalScope.btoa&&isNodeJS()&&(globalScope.btoa=function(chars){return Buffer.from(chars,"binary").toString("base64")})}()
!function(){!globalScope.atob&&isNodeJS()&&(globalScope.atob=function(input){return Buffer.from(input,"base64").toString("binary")})}()
!function(){hasDOM&&"undefined"==typeof Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}()
!function(){if(hasDOM&&!isNodeJS()){var div=document.createElement("div")
div.classList.add("testOne","testTwo")
if(div.classList.contains("testOne")!==!0||div.classList.contains("testTwo")!==!0){var OriginalDOMTokenListAdd=DOMTokenList.prototype.add,OriginalDOMTokenListRemove=DOMTokenList.prototype.remove
DOMTokenList.prototype.add=function(){for(var _len=arguments.length,tokens=new Array(_len),_key=0;_len>_key;_key++)tokens[_key]=arguments[_key]
for(var _i=0;_i<tokens.length;_i++){var token=tokens[_i]
OriginalDOMTokenListAdd.call(this,token)}}
DOMTokenList.prototype.remove=function(){for(var _len2=arguments.length,tokens=new Array(_len2),_key2=0;_len2>_key2;_key2++)tokens[_key2]=arguments[_key2]
for(var _i2=0;_i2<tokens.length;_i2++){var token=tokens[_i2]
OriginalDOMTokenListRemove.call(this,token)}}}}}()
!function(){if(hasDOM&&!isNodeJS()){var div=document.createElement("div")
div.classList.toggle("test",0)!==!1&&(DOMTokenList.prototype.toggle=function(token){var force=arguments.length>1?!!arguments[1]:!this.contains(token)
return this[force?"add":"remove"](token),force})}}()
!function(){String.prototype.startsWith||__w_pdfjs_require__(5)}()
!function(){String.prototype.endsWith||__w_pdfjs_require__(35)}()
!function(){String.prototype.includes||__w_pdfjs_require__(37)}()
!function(){Array.prototype.includes||__w_pdfjs_require__(39)}()
!function(){Array.from||__w_pdfjs_require__(46)}()
!function(){Object.assign||__w_pdfjs_require__(69)}()
!function(){Math.log2||(Math.log2=__w_pdfjs_require__(74))}()
!function(){Number.isNaN||(Number.isNaN=__w_pdfjs_require__(76))}()
!function(){Number.isInteger||(Number.isInteger=__w_pdfjs_require__(78))}()
!function(){globalScope.Promise&&globalScope.Promise.prototype&&globalScope.Promise.prototype["finally"]||(globalScope.Promise=__w_pdfjs_require__(81))}()
!function(){globalScope.WeakMap||(globalScope.WeakMap=__w_pdfjs_require__(101))}()
!function(){globalScope.WeakSet||(globalScope.WeakSet=__w_pdfjs_require__(118))}()
!function(){String.codePointAt||(String.codePointAt=__w_pdfjs_require__(122))}()
!function(){String.fromCodePoint||(String.fromCodePoint=__w_pdfjs_require__(124))}()
!function(){globalScope.Symbol||__w_pdfjs_require__(126)}()
!function(){String.prototype.padStart||__w_pdfjs_require__(133)}()
!function(){String.prototype.padEnd||__w_pdfjs_require__(137)}()
!function(){Object.values||(Object.values=__w_pdfjs_require__(139))}()}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:{}},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}module.exports=function(){return"object"===("undefined"==typeof process?"undefined":_typeof(process))&&process+""=="[object process]"&&!process.versions.nw}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(6)
module.exports=__w_pdfjs_require__(9).String.startsWith},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),toLength=__w_pdfjs_require__(25),context=__w_pdfjs_require__(27),STARTS_WITH="startsWith",$startsWith=""[STARTS_WITH]
$export($export.P+$export.F*__w_pdfjs_require__(34)(STARTS_WITH),"String",{startsWith:function(searchString){var that=context(this,searchString,STARTS_WITH),index=toLength(Math.min(arguments.length>1?arguments[1]:void 0,that.length)),search=String(searchString)
return $startsWith?$startsWith.call(that,search,index):that.slice(index,index+search.length)===search}})},function(module,exports,__w_pdfjs_require__){"use strict"
var global=__w_pdfjs_require__(8),core=__w_pdfjs_require__(9),hide=__w_pdfjs_require__(10),redefine=__w_pdfjs_require__(20),ctx=__w_pdfjs_require__(23),PROTOTYPE="prototype",$export=function $export(type,name,source){var key,own,out,exp,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,target=IS_GLOBAL?global:IS_STATIC?global[name]||(global[name]={}):(global[name]||{})[PROTOTYPE],exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE]||(exports[PROTOTYPE]={})
IS_GLOBAL&&(source=name)
for(key in source){own=!IS_FORCED&&target&&void 0!==target[key]
out=(own?target:source)[key]
exp=IS_BIND&&own?ctx(out,global):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out
target&&redefine(target,key,out,type&$export.U)
exports[key]!=out&&hide(exports,key,exp)
IS_PROTO&&expProto[key]!=out&&(expProto[key]=out)}}
global.core=core
$export.F=1
$export.G=2
$export.S=4
$export.P=8
$export.B=16
$export.W=32
$export.U=64
$export.R=128
module.exports=$export},function(module,exports,__w_pdfjs_require__){"use strict"
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()
"number"==typeof __g&&(__g=global)},function(module,exports,__w_pdfjs_require__){"use strict"
var core=module.exports={version:"2.6.2"}
"number"==typeof __e&&(__e=core)},function(module,exports,__w_pdfjs_require__){"use strict"
var dP=__w_pdfjs_require__(11),createDesc=__w_pdfjs_require__(19)
module.exports=__w_pdfjs_require__(15)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){object[key]=value
return object}},function(module,exports,__w_pdfjs_require__){"use strict"
var anObject=__w_pdfjs_require__(12),IE8_DOM_DEFINE=__w_pdfjs_require__(14),toPrimitive=__w_pdfjs_require__(18),dP=Object.defineProperty
exports.f=__w_pdfjs_require__(15)?Object.defineProperty:function(O,P,Attributes){anObject(O)
P=toPrimitive(P,!0)
anObject(Attributes)
if(IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!")
"value"in Attributes&&(O[P]=Attributes.value)
return O}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13)
module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!")
return it}},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}module.exports=function(it){return"object"===_typeof(it)?null!==it:"function"==typeof it}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=!__w_pdfjs_require__(15)&&!__w_pdfjs_require__(16)(function(){return 7!=Object.defineProperty(__w_pdfjs_require__(17)("div"),"a",{get:function(){return 7}}).a})},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=!__w_pdfjs_require__(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13),document=__w_pdfjs_require__(8).document,is=isObject(document)&&isObject(document.createElement)
module.exports=function(it){return is?document.createElement(it):{}}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13)
module.exports=function(it,S){if(!isObject(it))return it
var fn,val
if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val
if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val
if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val
throw TypeError("Can't convert object to primitive value")}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},function(module,exports,__w_pdfjs_require__){"use strict"
var global=__w_pdfjs_require__(8),hide=__w_pdfjs_require__(10),has=__w_pdfjs_require__(21),SRC=__w_pdfjs_require__(22)("src"),TO_STRING="toString",$toString=Function[TO_STRING],TPL=(""+$toString).split(TO_STRING)
__w_pdfjs_require__(9).inspectSource=function(it){return $toString.call(it)};(module.exports=function(O,key,val,safe){var isFunction="function"==typeof val
isFunction&&(has(val,"name")||hide(val,"name",key))
if(O[key]!==val){isFunction&&(has(val,SRC)||hide(val,SRC,O[key]?""+O[key]:TPL.join(String(key))))
if(O===global)O[key]=val
else if(safe)O[key]?O[key]=val:hide(O,key,val)
else{delete O[key]
hide(O,key,val)}}})(Function.prototype,TO_STRING,function(){return"function"==typeof this&&this[SRC]||$toString.call(this)})},function(module,exports,__w_pdfjs_require__){"use strict"
var hasOwnProperty={}.hasOwnProperty
module.exports=function(it,key){return hasOwnProperty.call(it,key)}},function(module,exports,__w_pdfjs_require__){"use strict"
var id=0,px=Math.random()
module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},function(module,exports,__w_pdfjs_require__){"use strict"
var aFunction=__w_pdfjs_require__(24)
module.exports=function(fn,that,length){aFunction(fn)
if(void 0===that)return fn
switch(length){case 1:return function(a){return fn.call(that,a)}
case 2:return function(a,b){return fn.call(that,a,b)}
case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!")
return it}},function(module,exports,__w_pdfjs_require__){"use strict"
var toInteger=__w_pdfjs_require__(26),min=Math.min
module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},function(module,exports,__w_pdfjs_require__){"use strict"
var ceil=Math.ceil,floor=Math.floor
module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},function(module,exports,__w_pdfjs_require__){"use strict"
var isRegExp=__w_pdfjs_require__(28),defined=__w_pdfjs_require__(33)
module.exports=function(that,searchString,NAME){if(isRegExp(searchString))throw TypeError("String#"+NAME+" doesn't accept regex!")
return String(defined(that))}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13),cof=__w_pdfjs_require__(29),MATCH=__w_pdfjs_require__(30)("match")
module.exports=function(it){var isRegExp
return isObject(it)&&(void 0!==(isRegExp=it[MATCH])?!!isRegExp:"RegExp"==cof(it))}},function(module,exports,__w_pdfjs_require__){"use strict"
var toString={}.toString
module.exports=function(it){return toString.call(it).slice(8,-1)}},function(module,exports,__w_pdfjs_require__){"use strict"
var store=__w_pdfjs_require__(31)("wks"),uid=__w_pdfjs_require__(22),_Symbol=__w_pdfjs_require__(8).Symbol,USE_SYMBOL="function"==typeof _Symbol,$exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:uid)("Symbol."+name))}
$exports.store=store},function(module,exports,__w_pdfjs_require__){"use strict"
var core=__w_pdfjs_require__(9),global=__w_pdfjs_require__(8),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});(module.exports=function(key,value){return store[key]||(store[key]=void 0!==value?value:{})})("versions",[]).push({version:core.version,mode:__w_pdfjs_require__(32)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=!1},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it)
return it}},function(module,exports,__w_pdfjs_require__){"use strict"
var MATCH=__w_pdfjs_require__(30)("match")
module.exports=function(KEY){var re=/./
try{"/./"[KEY](re)}catch(e){try{re[MATCH]=!1
return!"/./"[KEY](re)}catch(f){}}return!0}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(36)
module.exports=__w_pdfjs_require__(9).String.endsWith},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),toLength=__w_pdfjs_require__(25),context=__w_pdfjs_require__(27),ENDS_WITH="endsWith",$endsWith=""[ENDS_WITH]
$export($export.P+$export.F*__w_pdfjs_require__(34)(ENDS_WITH),"String",{endsWith:function(searchString){var that=context(this,searchString,ENDS_WITH),endPosition=arguments.length>1?arguments[1]:void 0,len=toLength(that.length),end=void 0===endPosition?len:Math.min(toLength(endPosition),len),search=String(searchString)
return $endsWith?$endsWith.call(that,search,end):that.slice(end-search.length,end)===search}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(38)
module.exports=__w_pdfjs_require__(9).String.includes},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),context=__w_pdfjs_require__(27),INCLUDES="includes"
$export($export.P+$export.F*__w_pdfjs_require__(34)(INCLUDES),"String",{includes:function(searchString){return!!~context(this,searchString,INCLUDES).indexOf(searchString,arguments.length>1?arguments[1]:void 0)}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(40)
module.exports=__w_pdfjs_require__(9).Array.includes},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),$includes=__w_pdfjs_require__(41)(!0)
$export($export.P,"Array",{includes:function(el){return $includes(this,el,arguments.length>1?arguments[1]:void 0)}})
__w_pdfjs_require__(45)("includes")},function(module,exports,__w_pdfjs_require__){"use strict"
var toIObject=__w_pdfjs_require__(42),toLength=__w_pdfjs_require__(25),toAbsoluteIndex=__w_pdfjs_require__(44)
module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toAbsoluteIndex(fromIndex,length)
if(IS_INCLUDES&&el!=el)for(;length>index;){value=O[index++]
if(value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0
return!IS_INCLUDES&&-1}}},function(module,exports,__w_pdfjs_require__){"use strict"
var IObject=__w_pdfjs_require__(43),defined=__w_pdfjs_require__(33)
module.exports=function(it){return IObject(defined(it))}},function(module,exports,__w_pdfjs_require__){"use strict"
var cof=__w_pdfjs_require__(29)
module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},function(module,exports,__w_pdfjs_require__){"use strict"
var toInteger=__w_pdfjs_require__(26),max=Math.max,min=Math.min
module.exports=function(index,length){index=toInteger(index)
return 0>index?max(index+length,0):min(index,length)}},function(module,exports,__w_pdfjs_require__){"use strict"
var UNSCOPABLES=__w_pdfjs_require__(30)("unscopables"),ArrayProto=Array.prototype
void 0==ArrayProto[UNSCOPABLES]&&__w_pdfjs_require__(10)(ArrayProto,UNSCOPABLES,{})
module.exports=function(key){ArrayProto[UNSCOPABLES][key]=!0}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(47)
__w_pdfjs_require__(62)
module.exports=__w_pdfjs_require__(9).Array.from},function(module,exports,__w_pdfjs_require__){"use strict"
var $at=__w_pdfjs_require__(48)(!0)
__w_pdfjs_require__(49)(String,"String",function(iterated){this._t=String(iterated)
this._i=0},function(){var point,O=this._t,index=this._i
if(index>=O.length)return{value:void 0,done:!0}
point=$at(O,index)
this._i+=point.length
return{value:point,done:!1}})},function(module,exports,__w_pdfjs_require__){"use strict"
var toInteger=__w_pdfjs_require__(26),defined=__w_pdfjs_require__(33)
module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length
if(0>i||i>=l)return TO_STRING?"":void 0
a=s.charCodeAt(i)
return 55296>a||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536}}},function(module,exports,__w_pdfjs_require__){"use strict"
var LIBRARY=__w_pdfjs_require__(32),$export=__w_pdfjs_require__(7),redefine=__w_pdfjs_require__(20),hide=__w_pdfjs_require__(10),Iterators=__w_pdfjs_require__(50),$iterCreate=__w_pdfjs_require__(51),setToStringTag=__w_pdfjs_require__(59),getPrototypeOf=__w_pdfjs_require__(60),ITERATOR=__w_pdfjs_require__(30)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this}
module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next)
var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind]
switch(kind){case KEYS:return function(){return new Constructor(this,kind)}
case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME?proto.entries||$native:$native
if($anyNative){IteratorPrototype=getPrototypeOf($anyNative.call(new Base))
if(IteratorPrototype!==Object.prototype&&IteratorPrototype.next){setToStringTag(IteratorPrototype,TAG,!0)
LIBRARY||"function"==typeof IteratorPrototype[ITERATOR]||hide(IteratorPrototype,ITERATOR,returnThis)}}if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=!0
$default=function(){return $native.call(this)}}LIBRARY&&!FORCED||!BUGGY&&!VALUES_BUG&&proto[ITERATOR]||hide(proto,ITERATOR,$default)
Iterators[NAME]=$default
Iterators[TAG]=returnThis
if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries}
if(FORCED)for(key in methods)key in proto||redefine(proto,key,methods[key])
else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods)}return methods}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports={}},function(module,exports,__w_pdfjs_require__){"use strict"
var create=__w_pdfjs_require__(52),descriptor=__w_pdfjs_require__(19),setToStringTag=__w_pdfjs_require__(59),IteratorPrototype={}
__w_pdfjs_require__(10)(IteratorPrototype,__w_pdfjs_require__(30)("iterator"),function(){return this})
module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)})
setToStringTag(Constructor,NAME+" Iterator")}},function(module,exports,__w_pdfjs_require__){"use strict"
var anObject=__w_pdfjs_require__(12),dPs=__w_pdfjs_require__(53),enumBugKeys=__w_pdfjs_require__(57),IE_PROTO=__w_pdfjs_require__(56)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",_createDict=function(){var iframeDocument,iframe=__w_pdfjs_require__(17)("iframe"),i=enumBugKeys.length,lt="<",gt=">"
iframe.style.display="none"
__w_pdfjs_require__(58).appendChild(iframe)
iframe.src="javascript:"
iframeDocument=iframe.contentWindow.document
iframeDocument.open()
iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt)
iframeDocument.close()
_createDict=iframeDocument.F
for(;i--;)delete _createDict[PROTOTYPE][enumBugKeys[i]]
return _createDict()}
module.exports=Object.create||function(O,Properties){var result
if(null!==O){Empty[PROTOTYPE]=anObject(O)
result=new Empty
Empty[PROTOTYPE]=null
result[IE_PROTO]=O}else result=_createDict()
return void 0===Properties?result:dPs(result,Properties)}},function(module,exports,__w_pdfjs_require__){"use strict"
var dP=__w_pdfjs_require__(11),anObject=__w_pdfjs_require__(12),getKeys=__w_pdfjs_require__(54)
module.exports=__w_pdfjs_require__(15)?Object.defineProperties:function(O,Properties){anObject(O)
for(var P,keys=getKeys(Properties),length=keys.length,i=0;length>i;)dP.f(O,P=keys[i++],Properties[P])
return O}},function(module,exports,__w_pdfjs_require__){"use strict"
var $keys=__w_pdfjs_require__(55),enumBugKeys=__w_pdfjs_require__(57)
module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},function(module,exports,__w_pdfjs_require__){"use strict"
var has=__w_pdfjs_require__(21),toIObject=__w_pdfjs_require__(42),arrayIndexOf=__w_pdfjs_require__(41)(!1),IE_PROTO=__w_pdfjs_require__(56)("IE_PROTO")
module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[]
for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key)
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key))
return result}},function(module,exports,__w_pdfjs_require__){"use strict"
var shared=__w_pdfjs_require__(31)("keys"),uid=__w_pdfjs_require__(22)
module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(module,exports,__w_pdfjs_require__){"use strict"
var document=__w_pdfjs_require__(8).document
module.exports=document&&document.documentElement},function(module,exports,__w_pdfjs_require__){"use strict"
var def=__w_pdfjs_require__(11).f,has=__w_pdfjs_require__(21),TAG=__w_pdfjs_require__(30)("toStringTag")
module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})}},function(module,exports,__w_pdfjs_require__){"use strict"
var has=__w_pdfjs_require__(21),toObject=__w_pdfjs_require__(61),IE_PROTO=__w_pdfjs_require__(56)("IE_PROTO"),ObjectProto=Object.prototype
module.exports=Object.getPrototypeOf||function(O){O=toObject(O)
return has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null}},function(module,exports,__w_pdfjs_require__){"use strict"
var defined=__w_pdfjs_require__(33)
module.exports=function(it){return Object(defined(it))}},function(module,exports,__w_pdfjs_require__){"use strict"
var ctx=__w_pdfjs_require__(23),$export=__w_pdfjs_require__(7),toObject=__w_pdfjs_require__(61),call=__w_pdfjs_require__(63),isArrayIter=__w_pdfjs_require__(64),toLength=__w_pdfjs_require__(25),createProperty=__w_pdfjs_require__(65),getIterFn=__w_pdfjs_require__(66)
$export($export.S+$export.F*!__w_pdfjs_require__(68)(function(iter){Array.from(iter)}),"Array",{from:function(arrayLike){var length,result,step,iterator,O=toObject(arrayLike),C="function"==typeof this?this:Array,aLen=arguments.length,mapfn=aLen>1?arguments[1]:void 0,mapping=void 0!==mapfn,index=0,iterFn=getIterFn(O)
mapping&&(mapfn=ctx(mapfn,aLen>2?arguments[2]:void 0,2))
if(void 0==iterFn||C==Array&&isArrayIter(iterFn)){length=toLength(O.length)
for(result=new C(length);length>index;index++)createProperty(result,index,mapping?mapfn(O[index],index):O[index])}else for(iterator=iterFn.call(O),result=new C;!(step=iterator.next()).done;index++)createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],!0):step.value)
result.length=index
return result}})},function(module,exports,__w_pdfjs_require__){"use strict"
var anObject=__w_pdfjs_require__(12)
module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){var ret=iterator["return"]
void 0!==ret&&anObject(ret.call(iterator))
throw e}}},function(module,exports,__w_pdfjs_require__){"use strict"
var Iterators=__w_pdfjs_require__(50),ITERATOR=__w_pdfjs_require__(30)("iterator"),ArrayProto=Array.prototype
module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayProto[ITERATOR]===it)}},function(module,exports,__w_pdfjs_require__){"use strict"
var $defineProperty=__w_pdfjs_require__(11),createDesc=__w_pdfjs_require__(19)
module.exports=function(object,index,value){index in object?$defineProperty.f(object,index,createDesc(0,value)):object[index]=value}},function(module,exports,__w_pdfjs_require__){"use strict"
var classof=__w_pdfjs_require__(67),ITERATOR=__w_pdfjs_require__(30)("iterator"),Iterators=__w_pdfjs_require__(50)
module.exports=__w_pdfjs_require__(9).getIteratorMethod=function(it){return void 0!=it?it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]:void 0}},function(module,exports,__w_pdfjs_require__){"use strict"
var cof=__w_pdfjs_require__(29),TAG=__w_pdfjs_require__(30)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(e){}}
module.exports=function(it){var O,T,B
return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=tryGet(O=Object(it),TAG))?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},function(module,exports,__w_pdfjs_require__){"use strict"
var ITERATOR=__w_pdfjs_require__(30)("iterator"),SAFE_CLOSING=!1
try{var riter=[7][ITERATOR]()
riter["return"]=function(){SAFE_CLOSING=!0}
Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return!1
var safe=!1
try{var arr=[7],iter=arr[ITERATOR]()
iter.next=function(){return{done:safe=!0}}
arr[ITERATOR]=function(){return iter}
exec(arr)}catch(e){}return safe}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(70)
module.exports=__w_pdfjs_require__(9).Object.assign},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7)
$export($export.S+$export.F,"Object",{assign:__w_pdfjs_require__(71)})},function(module,exports,__w_pdfjs_require__){"use strict"
var getKeys=__w_pdfjs_require__(54),gOPS=__w_pdfjs_require__(72),pIE=__w_pdfjs_require__(73),toObject=__w_pdfjs_require__(61),IObject=__w_pdfjs_require__(43),$assign=Object.assign
module.exports=!$assign||__w_pdfjs_require__(16)(function(){var A={},B={},S=Symbol(),K="abcdefghijklmnopqrst"
A[S]=7
K.split("").forEach(function(k){B[k]=k})
return 7!=$assign({},A)[S]||Object.keys($assign({},B)).join("")!=K})?function(target,source){for(var T=toObject(target),aLen=arguments.length,index=1,getSymbols=gOPS.f,isEnum=pIE.f;aLen>index;)for(var key,S=IObject(arguments[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key])
return T}:$assign},function(module,exports,__w_pdfjs_require__){"use strict"
exports.f=Object.getOwnPropertySymbols},function(module,exports,__w_pdfjs_require__){"use strict"
exports.f={}.propertyIsEnumerable},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(75)
module.exports=__w_pdfjs_require__(9).Math.log2},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7)
$export($export.S,"Math",{log2:function(x){return Math.log(x)/Math.LN2}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(77)
module.exports=__w_pdfjs_require__(9).Number.isNaN},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7)
$export($export.S,"Number",{isNaN:function(number){return number!=number}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(79)
module.exports=__w_pdfjs_require__(9).Number.isInteger},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7)
$export($export.S,"Number",{isInteger:__w_pdfjs_require__(80)})},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13),floor=Math.floor
module.exports=function(it){return!isObject(it)&&isFinite(it)&&floor(it)===it}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(82)
__w_pdfjs_require__(47)
__w_pdfjs_require__(83)
__w_pdfjs_require__(86)
__w_pdfjs_require__(99)
__w_pdfjs_require__(100)
module.exports=__w_pdfjs_require__(9).Promise},function(module,exports,__w_pdfjs_require__){"use strict"
var classof=__w_pdfjs_require__(67),test={}
test[__w_pdfjs_require__(30)("toStringTag")]="z"
test+""!="[object z]"&&__w_pdfjs_require__(20)(Object.prototype,"toString",function(){return"[object "+classof(this)+"]"},!0)},function(module,exports,__w_pdfjs_require__){"use strict"
for(var $iterators=__w_pdfjs_require__(84),getKeys=__w_pdfjs_require__(54),redefine=__w_pdfjs_require__(20),global=__w_pdfjs_require__(8),hide=__w_pdfjs_require__(10),Iterators=__w_pdfjs_require__(50),wks=__w_pdfjs_require__(30),ITERATOR=wks("iterator"),TO_STRING_TAG=wks("toStringTag"),ArrayValues=Iterators.Array,DOMIterables={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},collections=getKeys(DOMIterables),i=0;i<collections.length;i++){var key,NAME=collections[i],explicit=DOMIterables[NAME],Collection=global[NAME],proto=Collection&&Collection.prototype
if(proto){proto[ITERATOR]||hide(proto,ITERATOR,ArrayValues)
proto[TO_STRING_TAG]||hide(proto,TO_STRING_TAG,NAME)
Iterators[NAME]=ArrayValues
if(explicit)for(key in $iterators)proto[key]||redefine(proto,key,$iterators[key],!0)}}},function(module,exports,__w_pdfjs_require__){"use strict"
var addToUnscopables=__w_pdfjs_require__(45),step=__w_pdfjs_require__(85),Iterators=__w_pdfjs_require__(50),toIObject=__w_pdfjs_require__(42)
module.exports=__w_pdfjs_require__(49)(Array,"Array",function(iterated,kind){this._t=toIObject(iterated)
this._i=0
this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++
if(!O||index>=O.length){this._t=void 0
return step(1)}return"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values")
Iterators.Arguments=Iterators.Array
addToUnscopables("keys")
addToUnscopables("values")
addToUnscopables("entries")},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(done,value){return{value:value,done:!!done}}},function(module,exports,__w_pdfjs_require__){"use strict"
var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper,LIBRARY=__w_pdfjs_require__(32),global=__w_pdfjs_require__(8),ctx=__w_pdfjs_require__(23),classof=__w_pdfjs_require__(67),$export=__w_pdfjs_require__(7),isObject=__w_pdfjs_require__(13),aFunction=__w_pdfjs_require__(24),anInstance=__w_pdfjs_require__(87),forOf=__w_pdfjs_require__(88),speciesConstructor=__w_pdfjs_require__(89),task=__w_pdfjs_require__(90).set,microtask=__w_pdfjs_require__(92)(),newPromiseCapabilityModule=__w_pdfjs_require__(93),perform=__w_pdfjs_require__(94),userAgent=__w_pdfjs_require__(95),promiseResolve=__w_pdfjs_require__(96),PROMISE="Promise",TypeError=global.TypeError,process=global.process,versions=process&&process.versions,v8=versions&&versions.v8||"",$Promise=global[PROMISE],isNode="process"==classof(process),empty=function(){},newPromiseCapability=newGenericPromiseCapability=newPromiseCapabilityModule.f,USE_NATIVE=!!function(){try{var promise=$Promise.resolve(1),FakePromise=(promise.constructor={})[__w_pdfjs_require__(30)("species")]=function(exec){exec(empty,empty)}
return(isNode||"function"==typeof PromiseRejectionEvent)&&promise.then(empty)instanceof FakePromise&&0!==v8.indexOf("6.6")&&-1===userAgent.indexOf("Chrome/66")}catch(e){}}(),isThenable=function(it){var then
return isObject(it)&&"function"==typeof(then=it.then)?then:!1},notify=function(promise,isReject){if(!promise._n){promise._n=!0
var chain=promise._c
microtask(function(){for(var value=promise._v,ok=1==promise._s,i=0,run=function(reaction){var result,then,exited,handler=ok?reaction.ok:reaction.fail,resolve=reaction.resolve,reject=reaction.reject,domain=reaction.domain
try{if(handler){if(!ok){2==promise._h&&onHandleUnhandled(promise)
promise._h=1}if(handler===!0)result=value
else{domain&&domain.enter()
result=handler(value)
if(domain){domain.exit()
exited=!0}}result===reaction.promise?reject(TypeError("Promise-chain cycle")):(then=isThenable(result))?then.call(result,resolve,reject):resolve(result)}else reject(value)}catch(e){domain&&!exited&&domain.exit()
reject(e)}};chain.length>i;)run(chain[i++])
promise._c=[]
promise._n=!1
isReject&&!promise._h&&onUnhandled(promise)})}},onUnhandled=function(promise){task.call(global,function(){var result,handler,console,value=promise._v,unhandled=isUnhandled(promise)
if(unhandled){result=perform(function(){isNode?process.emit("unhandledRejection",value,promise):(handler=global.onunhandledrejection)?handler({promise:promise,reason:value}):(console=global.console)&&console.error&&console.error("Unhandled promise rejection",value)})
promise._h=isNode||isUnhandled(promise)?2:1}promise._a=void 0
if(unhandled&&result.e)throw result.v})},isUnhandled=function(promise){return 1!==promise._h&&0===(promise._a||promise._c).length},onHandleUnhandled=function(promise){task.call(global,function(){var handler
isNode?process.emit("rejectionHandled",promise):(handler=global.onrejectionhandled)&&handler({promise:promise,reason:promise._v})})},$reject=function(value){var promise=this
if(!promise._d){promise._d=!0
promise=promise._w||promise
promise._v=value
promise._s=2
promise._a||(promise._a=promise._c.slice())
notify(promise,!0)}},$resolve=function $resolve(value){var then,promise=this
if(!promise._d){promise._d=!0
promise=promise._w||promise
try{if(promise===value)throw TypeError("Promise can't be resolved itself")
if(then=isThenable(value))microtask(function(){var wrapper={_w:promise,_d:!1}
try{then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1))}catch(e){$reject.call(wrapper,e)}})
else{promise._v=value
promise._s=1
notify(promise,!1)}}catch(e){$reject.call({_w:promise,_d:!1},e)}}}
if(!USE_NATIVE){$Promise=function(executor){anInstance(this,$Promise,PROMISE,"_h")
aFunction(executor)
Internal.call(this)
try{executor(ctx($resolve,this,1),ctx($reject,this,1))}catch(err){$reject.call(this,err)}}
Internal=function(executor){this._c=[]
this._a=void 0
this._s=0
this._d=!1
this._v=void 0
this._h=0
this._n=!1}
Internal.prototype=__w_pdfjs_require__(97)($Promise.prototype,{then:function(onFulfilled,onRejected){var reaction=newPromiseCapability(speciesConstructor(this,$Promise))
reaction.ok="function"==typeof onFulfilled?onFulfilled:!0
reaction.fail="function"==typeof onRejected&&onRejected
reaction.domain=isNode?process.domain:void 0
this._c.push(reaction)
this._a&&this._a.push(reaction)
this._s&&notify(this,!1)
return reaction.promise},"catch":function(onRejected){return this.then(void 0,onRejected)}})
OwnPromiseCapability=function(){var promise=new Internal
this.promise=promise
this.resolve=ctx($resolve,promise,1)
this.reject=ctx($reject,promise,1)}
newPromiseCapabilityModule.f=newPromiseCapability=function(C){return C===$Promise||C===Wrapper?new OwnPromiseCapability(C):newGenericPromiseCapability(C)}}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise})
__w_pdfjs_require__(59)($Promise,PROMISE)
__w_pdfjs_require__(98)(PROMISE)
Wrapper=__w_pdfjs_require__(9)[PROMISE]
$export($export.S+$export.F*!USE_NATIVE,PROMISE,{reject:function(r){var capability=newPromiseCapability(this),$$reject=capability.reject
$$reject(r)
return capability.promise}})
$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{resolve:function(x){return promiseResolve(LIBRARY&&this===Wrapper?$Promise:this,x)}})
$export($export.S+$export.F*!(USE_NATIVE&&__w_pdfjs_require__(68)(function(iter){$Promise.all(iter)["catch"](empty)})),PROMISE,{all:function(iterable){var C=this,capability=newPromiseCapability(C),resolve=capability.resolve,reject=capability.reject,result=perform(function(){var values=[],index=0,remaining=1
forOf(iterable,!1,function(promise){var $index=index++,alreadyCalled=!1
values.push(void 0)
remaining++
C.resolve(promise).then(function(value){if(!alreadyCalled){alreadyCalled=!0
values[$index]=value;--remaining||resolve(values)}},reject)});--remaining||resolve(values)})
result.e&&reject(result.v)
return capability.promise},race:function(iterable){var C=this,capability=newPromiseCapability(C),reject=capability.reject,result=perform(function(){forOf(iterable,!1,function(promise){C.resolve(promise).then(capability.resolve,reject)})})
result.e&&reject(result.v)
return capability.promise}})},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||void 0!==forbiddenField&&forbiddenField in it)throw TypeError(name+": incorrect invocation!")
return it}},function(module,exports,__w_pdfjs_require__){"use strict"
var ctx=__w_pdfjs_require__(23),call=__w_pdfjs_require__(63),isArrayIter=__w_pdfjs_require__(64),anObject=__w_pdfjs_require__(12),toLength=__w_pdfjs_require__(25),getIterFn=__w_pdfjs_require__(66),BREAK={},RETURN={},_exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var length,step,iterator,result,iterFn=ITERATOR?function(){return iterable}:getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0
if("function"!=typeof iterFn)throw TypeError(iterable+" is not iterable!")
if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++){result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index])
if(result===BREAK||result===RETURN)return result}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){result=call(iterator,f,step.value,entries)
if(result===BREAK||result===RETURN)return result}}
_exports.BREAK=BREAK
_exports.RETURN=RETURN},function(module,exports,__w_pdfjs_require__){"use strict"
var anObject=__w_pdfjs_require__(12),aFunction=__w_pdfjs_require__(24),SPECIES=__w_pdfjs_require__(30)("species")
module.exports=function(O,D){var S,C=anObject(O).constructor
return void 0===C||void 0==(S=anObject(C)[SPECIES])?D:aFunction(S)}},function(module,exports,__w_pdfjs_require__){"use strict"
var defer,channel,port,ctx=__w_pdfjs_require__(23),invoke=__w_pdfjs_require__(91),html=__w_pdfjs_require__(58),cel=__w_pdfjs_require__(17),global=__w_pdfjs_require__(8),process=global.process,setTask=global.setImmediate,clearTask=global.clearImmediate,MessageChannel=global.MessageChannel,Dispatch=global.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(){var id=+this
if(queue.hasOwnProperty(id)){var fn=queue[id]
delete queue[id]
fn()}},listener=function(event){run.call(event.data)}
if(!setTask||!clearTask){setTask=function(fn){for(var args=[],i=1;arguments.length>i;)args.push(arguments[i++])
queue[++counter]=function(){invoke("function"==typeof fn?fn:Function(fn),args)}
defer(counter)
return counter}
clearTask=function(id){delete queue[id]}
if("process"==__w_pdfjs_require__(29)(process))defer=function(id){process.nextTick(ctx(run,id,1))}
else if(Dispatch&&Dispatch.now)defer=function(id){Dispatch.now(ctx(run,id,1))}
else if(MessageChannel){channel=new MessageChannel
port=channel.port2
channel.port1.onmessage=listener
defer=ctx(port.postMessage,port,1)}else if(global.addEventListener&&"function"==typeof postMessage&&!global.importScripts){defer=function(id){global.postMessage(id+"","*")}
global.addEventListener("message",listener,!1)}else defer=ONREADYSTATECHANGE in cel("script")?function(id){html.appendChild(cel("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this)
run.call(id)}}:function(id){setTimeout(ctx(run,id,1),0)}}module.exports={set:setTask,clear:clearTask}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(fn,args,that){var un=void 0===that
switch(args.length){case 0:return un?fn():fn.call(that)
case 1:return un?fn(args[0]):fn.call(that,args[0])
case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1])
case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2])
case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3])}return fn.apply(that,args)}},function(module,exports,__w_pdfjs_require__){"use strict"
var global=__w_pdfjs_require__(8),macrotask=__w_pdfjs_require__(90).set,Observer=global.MutationObserver||global.WebKitMutationObserver,process=global.process,Promise=global.Promise,isNode="process"==__w_pdfjs_require__(29)(process)
module.exports=function(){var head,last,notify,flush=function(){var parent,fn
isNode&&(parent=process.domain)&&parent.exit()
for(;head;){fn=head.fn
head=head.next
try{fn()}catch(e){head?notify():last=void 0
throw e}}last=void 0
parent&&parent.enter()}
if(isNode)notify=function(){process.nextTick(flush)}
else if(!Observer||global.navigator&&global.navigator.standalone)if(Promise&&Promise.resolve){var promise=Promise.resolve(void 0)
notify=function(){promise.then(flush)}}else notify=function(){macrotask.call(global,flush)}
else{var toggle=!0,node=document.createTextNode("")
new Observer(flush).observe(node,{characterData:!0})
notify=function(){node.data=toggle=!toggle}}return function(fn){var task={fn:fn,next:void 0}
last&&(last.next=task)
if(!head){head=task
notify()}last=task}}},function(module,exports,__w_pdfjs_require__){"use strict"
function PromiseCapability(C){var resolve,reject
this.promise=new C(function($$resolve,$$reject){if(void 0!==resolve||void 0!==reject)throw TypeError("Bad Promise constructor")
resolve=$$resolve
reject=$$reject})
this.resolve=aFunction(resolve)
this.reject=aFunction(reject)}var aFunction=__w_pdfjs_require__(24)
module.exports.f=function(C){return new PromiseCapability(C)}},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(exec){try{return{e:!1,v:exec()}}catch(e){return{e:!0,v:e}}}},function(module,exports,__w_pdfjs_require__){"use strict"
var global=__w_pdfjs_require__(8),navigator=global.navigator
module.exports=navigator&&navigator.userAgent||""},function(module,exports,__w_pdfjs_require__){"use strict"
var anObject=__w_pdfjs_require__(12),isObject=__w_pdfjs_require__(13),newPromiseCapability=__w_pdfjs_require__(93)
module.exports=function(C,x){anObject(C)
if(isObject(x)&&x.constructor===C)return x
var promiseCapability=newPromiseCapability.f(C),resolve=promiseCapability.resolve
resolve(x)
return promiseCapability.promise}},function(module,exports,__w_pdfjs_require__){"use strict"
var redefine=__w_pdfjs_require__(20)
module.exports=function(target,src,safe){for(var key in src)redefine(target,key,src[key],safe)
return target}},function(module,exports,__w_pdfjs_require__){"use strict"
var global=__w_pdfjs_require__(8),dP=__w_pdfjs_require__(11),DESCRIPTORS=__w_pdfjs_require__(15),SPECIES=__w_pdfjs_require__(30)("species")
module.exports=function(KEY){var C=global[KEY]
DESCRIPTORS&&C&&!C[SPECIES]&&dP.f(C,SPECIES,{configurable:!0,get:function(){return this}})}},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),core=__w_pdfjs_require__(9),global=__w_pdfjs_require__(8),speciesConstructor=__w_pdfjs_require__(89),promiseResolve=__w_pdfjs_require__(96)
$export($export.P+$export.R,"Promise",{"finally":function(onFinally){var C=speciesConstructor(this,core.Promise||global.Promise),isFunction="function"==typeof onFinally
return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then(function(){return x})}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then(function(){throw e})}:onFinally)}})},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),newPromiseCapability=__w_pdfjs_require__(93),perform=__w_pdfjs_require__(94)
$export($export.S,"Promise",{"try":function(callbackfn){var promiseCapability=newPromiseCapability.f(this),result=perform(callbackfn);(result.e?promiseCapability.reject:promiseCapability.resolve)(result.v)
return promiseCapability.promise}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(82)
__w_pdfjs_require__(83)
__w_pdfjs_require__(102)
__w_pdfjs_require__(114)
__w_pdfjs_require__(116)
module.exports=__w_pdfjs_require__(9).WeakMap},function(module,exports,__w_pdfjs_require__){"use strict"
var InternalMap,each=__w_pdfjs_require__(103)(0),redefine=__w_pdfjs_require__(20),meta=__w_pdfjs_require__(107),assign=__w_pdfjs_require__(71),weak=__w_pdfjs_require__(108),isObject=__w_pdfjs_require__(13),fails=__w_pdfjs_require__(16),validate=__w_pdfjs_require__(109),WEAK_MAP="WeakMap",getWeak=meta.getWeak,isExtensible=Object.isExtensible,uncaughtFrozenStore=weak.ufstore,tmp={},wrapper=function(get){return function(){return get(this,arguments.length>0?arguments[0]:void 0)}},methods={get:function(key){if(isObject(key)){var data=getWeak(key)
return data===!0?uncaughtFrozenStore(validate(this,WEAK_MAP)).get(key):data?data[this._i]:void 0}},set:function(key,value){return weak.def(validate(this,WEAK_MAP),key,value)}},$WeakMap=module.exports=__w_pdfjs_require__(110)(WEAK_MAP,wrapper,methods,weak,!0,!0)
if(fails(function(){return 7!=(new $WeakMap).set((Object.freeze||Object)(tmp),7).get(tmp)})){InternalMap=weak.getConstructor(wrapper,WEAK_MAP)
assign(InternalMap.prototype,methods)
meta.NEED=!0
each(["delete","has","get","set"],function(key){var proto=$WeakMap.prototype,method=proto[key]
redefine(proto,key,function(a,b){if(isObject(a)&&!isExtensible(a)){this._f||(this._f=new InternalMap)
var result=this._f[key](a,b)
return"set"==key?this:result}return method.call(this,a,b)})})}},function(module,exports,__w_pdfjs_require__){"use strict"
var ctx=__w_pdfjs_require__(23),IObject=__w_pdfjs_require__(43),toObject=__w_pdfjs_require__(61),toLength=__w_pdfjs_require__(25),asc=__w_pdfjs_require__(104)
module.exports=function(TYPE,$create){var IS_MAP=1==TYPE,IS_FILTER=2==TYPE,IS_SOME=3==TYPE,IS_EVERY=4==TYPE,IS_FIND_INDEX=6==TYPE,NO_HOLES=5==TYPE||IS_FIND_INDEX,create=$create||asc
return function($this,callbackfn,that){for(var val,res,O=toObject($this),self=IObject(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=IS_MAP?create($this,length):IS_FILTER?create($this,0):void 0;length>index;index++)if(NO_HOLES||index in self){val=self[index]
res=f(val,index,O)
if(TYPE)if(IS_MAP)result[index]=res
else if(res)switch(TYPE){case 3:return!0
case 5:return val
case 6:return index
case 2:result.push(val)}else if(IS_EVERY)return!1}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}},function(module,exports,__w_pdfjs_require__){"use strict"
var speciesConstructor=__w_pdfjs_require__(105)
module.exports=function(original,length){return new(speciesConstructor(original))(length)}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13),isArray=__w_pdfjs_require__(106),SPECIES=__w_pdfjs_require__(30)("species")
module.exports=function(original){var C
if(isArray(original)){C=original.constructor
"function"!=typeof C||C!==Array&&!isArray(C.prototype)||(C=void 0)
if(isObject(C)){C=C[SPECIES]
null===C&&(C=void 0)}}return void 0===C?Array:C}},function(module,exports,__w_pdfjs_require__){"use strict"
var cof=__w_pdfjs_require__(29)
module.exports=Array.isArray||function(arg){return"Array"==cof(arg)}},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}var META=__w_pdfjs_require__(22)("meta"),isObject=__w_pdfjs_require__(13),has=__w_pdfjs_require__(21),setDesc=__w_pdfjs_require__(11).f,id=0,isExtensible=Object.isExtensible||function(){return!0},FREEZE=!__w_pdfjs_require__(16)(function(){return isExtensible(Object.preventExtensions({}))}),setMeta=function(it){setDesc(it,META,{value:{i:"O"+ ++id,w:{}}})},fastKey=function(it,create){if(!isObject(it))return"symbol"==_typeof(it)?it:("string"==typeof it?"S":"P")+it
if(!has(it,META)){if(!isExtensible(it))return"F"
if(!create)return"E"
setMeta(it)}return it[META].i},getWeak=function(it,create){if(!has(it,META)){if(!isExtensible(it))return!0
if(!create)return!1
setMeta(it)}return it[META].w},onFreeze=function(it){FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META)&&setMeta(it)
return it},meta=module.exports={KEY:META,NEED:!1,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze}},function(module,exports,__w_pdfjs_require__){"use strict"
var redefineAll=__w_pdfjs_require__(97),getWeak=__w_pdfjs_require__(107).getWeak,anObject=__w_pdfjs_require__(12),isObject=__w_pdfjs_require__(13),anInstance=__w_pdfjs_require__(87),forOf=__w_pdfjs_require__(88),createArrayMethod=__w_pdfjs_require__(103),$has=__w_pdfjs_require__(21),validate=__w_pdfjs_require__(109),arrayFind=createArrayMethod(5),arrayFindIndex=createArrayMethod(6),id=0,uncaughtFrozenStore=function(that){return that._l||(that._l=new UncaughtFrozenStore)},UncaughtFrozenStore=function(){this.a=[]},findUncaughtFrozen=function(store,key){return arrayFind(store.a,function(it){return it[0]===key})}
UncaughtFrozenStore.prototype={get:function(key){var entry=findUncaughtFrozen(this,key)
return entry?entry[1]:void 0},has:function(key){return!!findUncaughtFrozen(this,key)},set:function(key,value){var entry=findUncaughtFrozen(this,key)
entry?entry[1]=value:this.a.push([key,value])},"delete":function(key){var index=arrayFindIndex(this.a,function(it){return it[0]===key})
~index&&this.a.splice(index,1)
return!!~index}}
module.exports={getConstructor:function(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,"_i")
that._t=NAME
that._i=id++
that._l=void 0
void 0!=iterable&&forOf(iterable,IS_MAP,that[ADDER],that)})
redefineAll(C.prototype,{"delete":function(key){if(!isObject(key))return!1
var data=getWeak(key)
return data===!0?uncaughtFrozenStore(validate(this,NAME))["delete"](key):data&&$has(data,this._i)&&delete data[this._i]},has:function(key){if(!isObject(key))return!1
var data=getWeak(key)
return data===!0?uncaughtFrozenStore(validate(this,NAME)).has(key):data&&$has(data,this._i)}})
return C},def:function(that,key,value){var data=getWeak(anObject(key),!0)
data===!0?uncaughtFrozenStore(that).set(key,value):data[that._i]=value
return that},ufstore:uncaughtFrozenStore}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13)
module.exports=function(it,TYPE){if(!isObject(it)||it._t!==TYPE)throw TypeError("Incompatible receiver, "+TYPE+" required!")
return it}},function(module,exports,__w_pdfjs_require__){"use strict"
var global=__w_pdfjs_require__(8),$export=__w_pdfjs_require__(7),redefine=__w_pdfjs_require__(20),redefineAll=__w_pdfjs_require__(97),meta=__w_pdfjs_require__(107),forOf=__w_pdfjs_require__(88),anInstance=__w_pdfjs_require__(87),isObject=__w_pdfjs_require__(13),fails=__w_pdfjs_require__(16),$iterDetect=__w_pdfjs_require__(68),setToStringTag=__w_pdfjs_require__(59),inheritIfRequired=__w_pdfjs_require__(111)
module.exports=function(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=global[NAME],C=Base,ADDER=IS_MAP?"set":"add",proto=C&&C.prototype,O={},fixMethod=function(KEY){var fn=proto[KEY]
redefine(proto,KEY,"delete"==KEY?function(a){return IS_WEAK&&!isObject(a)?!1:fn.call(this,0===a?0:a)}:"has"==KEY?function(a){return IS_WEAK&&!isObject(a)?!1:fn.call(this,0===a?0:a)}:"get"==KEY?function(a){return IS_WEAK&&!isObject(a)?void 0:fn.call(this,0===a?0:a)}:"add"==KEY?function(a){fn.call(this,0===a?0:a)
return this}:function(a,b){fn.call(this,0===a?0:a,b)
return this})}
if("function"==typeof C&&(IS_WEAK||proto.forEach&&!fails(function(){(new C).entries().next()}))){var instance=new C,HASNT_CHAINING=instance[ADDER](IS_WEAK?{}:-0,1)!=instance,THROWS_ON_PRIMITIVES=fails(function(){instance.has(1)}),ACCEPT_ITERABLES=$iterDetect(function(iter){new C(iter)}),BUGGY_ZERO=!IS_WEAK&&fails(function(){for(var $instance=new C,index=5;index--;)$instance[ADDER](index,index)
return!$instance.has(-0)})
if(!ACCEPT_ITERABLES){C=wrapper(function(target,iterable){anInstance(target,C,NAME)
var that=inheritIfRequired(new Base,target,C)
void 0!=iterable&&forOf(iterable,IS_MAP,that[ADDER],that)
return that})
C.prototype=proto
proto.constructor=C}if(THROWS_ON_PRIMITIVES||BUGGY_ZERO){fixMethod("delete")
fixMethod("has")
IS_MAP&&fixMethod("get")}(BUGGY_ZERO||HASNT_CHAINING)&&fixMethod(ADDER)
IS_WEAK&&proto.clear&&delete proto.clear}else{C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER)
redefineAll(C.prototype,methods)
meta.NEED=!0}setToStringTag(C,NAME)
O[NAME]=C
$export($export.G+$export.W+$export.F*(C!=Base),O)
IS_WEAK||common.setStrong(C,NAME,IS_MAP)
return C}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13),setPrototypeOf=__w_pdfjs_require__(112).set
module.exports=function(that,target,C){var P,S=target.constructor
S!==C&&"function"==typeof S&&(P=S.prototype)!==C.prototype&&isObject(P)&&setPrototypeOf&&setPrototypeOf(that,P)
return that}},function(module,exports,__w_pdfjs_require__){"use strict"
var isObject=__w_pdfjs_require__(13),anObject=__w_pdfjs_require__(12),check=function(O,proto){anObject(O)
if(!isObject(proto)&&null!==proto)throw TypeError(proto+": can't set as prototype!")}
module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(test,buggy,set){try{set=__w_pdfjs_require__(23)(Function.call,__w_pdfjs_require__(113).f(Object.prototype,"__proto__").set,2)
set(test,[])
buggy=!(test instanceof Array)}catch(e){buggy=!0}return function(O,proto){check(O,proto)
buggy?O.__proto__=proto:set(O,proto)
return O}}({},!1):void 0),check:check}},function(module,exports,__w_pdfjs_require__){"use strict"
var pIE=__w_pdfjs_require__(73),createDesc=__w_pdfjs_require__(19),toIObject=__w_pdfjs_require__(42),toPrimitive=__w_pdfjs_require__(18),has=__w_pdfjs_require__(21),IE8_DOM_DEFINE=__w_pdfjs_require__(14),gOPD=Object.getOwnPropertyDescriptor
exports.f=__w_pdfjs_require__(15)?gOPD:function(O,P){O=toIObject(O)
P=toPrimitive(P,!0)
if(IE8_DOM_DEFINE)try{return gOPD(O,P)}catch(e){}return has(O,P)?createDesc(!pIE.f.call(O,P),O[P]):void 0}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(115)("WeakMap")},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7)
module.exports=function(COLLECTION){$export($export.S,COLLECTION,{of:function(){for(var length=arguments.length,A=new Array(length);length--;)A[length]=arguments[length]
return new this(A)}})}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(117)("WeakMap")},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),aFunction=__w_pdfjs_require__(24),ctx=__w_pdfjs_require__(23),forOf=__w_pdfjs_require__(88)
module.exports=function(COLLECTION){$export($export.S,COLLECTION,{from:function(source){var mapping,A,n,cb,mapFn=arguments[1]
aFunction(this)
mapping=void 0!==mapFn
mapping&&aFunction(mapFn)
if(void 0==source)return new this
A=[]
if(mapping){n=0
cb=ctx(mapFn,arguments[2],2)
forOf(source,!1,function(nextItem){A.push(cb(nextItem,n++))})}else forOf(source,!1,A.push,A)
return new this(A)}})}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(82)
__w_pdfjs_require__(83)
__w_pdfjs_require__(119)
__w_pdfjs_require__(120)
__w_pdfjs_require__(121)
module.exports=__w_pdfjs_require__(9).WeakSet},function(module,exports,__w_pdfjs_require__){"use strict"
var weak=__w_pdfjs_require__(108),validate=__w_pdfjs_require__(109),WEAK_SET="WeakSet"
__w_pdfjs_require__(110)(WEAK_SET,function(get){return function(){return get(this,arguments.length>0?arguments[0]:void 0)}},{add:function(value){return weak.def(validate(this,WEAK_SET),value,!0)}},weak,!1,!0)},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(115)("WeakSet")},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(117)("WeakSet")},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(123)
module.exports=__w_pdfjs_require__(9).String.codePointAt},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),$at=__w_pdfjs_require__(48)(!1)
$export($export.P,"String",{codePointAt:function(pos){return $at(this,pos)}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(125)
module.exports=__w_pdfjs_require__(9).String.fromCodePoint},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),toAbsoluteIndex=__w_pdfjs_require__(44),fromCharCode=String.fromCharCode,$fromCodePoint=String.fromCodePoint
$export($export.S+$export.F*(!!$fromCodePoint&&1!=$fromCodePoint.length),"String",{fromCodePoint:function(x){for(var code,res=[],aLen=arguments.length,i=0;aLen>i;){code=+arguments[i++]
if(toAbsoluteIndex(code,1114111)!==code)throw RangeError(code+" is not a valid code point")
res.push(65536>code?fromCharCode(code):fromCharCode(((code-=65536)>>10)+55296,code%1024+56320))}return res.join("")}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(127)
__w_pdfjs_require__(82)
module.exports=__w_pdfjs_require__(9).Symbol},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}var global=__w_pdfjs_require__(8),has=__w_pdfjs_require__(21),DESCRIPTORS=__w_pdfjs_require__(15),$export=__w_pdfjs_require__(7),redefine=__w_pdfjs_require__(20),META=__w_pdfjs_require__(107).KEY,$fails=__w_pdfjs_require__(16),shared=__w_pdfjs_require__(31),setToStringTag=__w_pdfjs_require__(59),uid=__w_pdfjs_require__(22),wks=__w_pdfjs_require__(30),wksExt=__w_pdfjs_require__(128),wksDefine=__w_pdfjs_require__(129),enumKeys=__w_pdfjs_require__(130),isArray=__w_pdfjs_require__(106),anObject=__w_pdfjs_require__(12),isObject=__w_pdfjs_require__(13),toIObject=__w_pdfjs_require__(42),toPrimitive=__w_pdfjs_require__(18),createDesc=__w_pdfjs_require__(19),_create=__w_pdfjs_require__(52),gOPNExt=__w_pdfjs_require__(131),$GOPD=__w_pdfjs_require__(113),$DP=__w_pdfjs_require__(11),$keys=__w_pdfjs_require__(54),gOPD=$GOPD.f,dP=$DP.f,gOPN=gOPNExt.f,$Symbol=global.Symbol,$JSON=global.JSON,_stringify=$JSON&&$JSON.stringify,PROTOTYPE="prototype",HIDDEN=wks("_hidden"),TO_PRIMITIVE=wks("toPrimitive"),isEnum={}.propertyIsEnumerable,SymbolRegistry=shared("symbol-registry"),AllSymbols=shared("symbols"),OPSymbols=shared("op-symbols"),ObjectProto=Object[PROTOTYPE],USE_NATIVE="function"==typeof $Symbol,QObject=global.QObject,setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild,setSymbolDesc=DESCRIPTORS&&$fails(function(){return 7!=_create(dP({},"a",{get:function(){return dP(this,"a",{value:7}).a}})).a})?function(it,key,D){var protoDesc=gOPD(ObjectProto,key)
protoDesc&&delete ObjectProto[key]
dP(it,key,D)
protoDesc&&it!==ObjectProto&&dP(ObjectProto,key,protoDesc)}:dP,wrap=function(tag){var sym=AllSymbols[tag]=_create($Symbol[PROTOTYPE])
sym._k=tag
return sym},isSymbol=USE_NATIVE&&"symbol"==_typeof($Symbol.iterator)?function(it){return"symbol"==_typeof(it)}:function(it){return it instanceof $Symbol},$defineProperty=function(it,key,D){it===ObjectProto&&$defineProperty(OPSymbols,key,D)
anObject(it)
key=toPrimitive(key,!0)
anObject(D)
if(has(AllSymbols,key)){if(D.enumerable){has(it,HIDDEN)&&it[HIDDEN][key]&&(it[HIDDEN][key]=!1)
D=_create(D,{enumerable:createDesc(0,!1)})}else{has(it,HIDDEN)||dP(it,HIDDEN,createDesc(1,{}))
it[HIDDEN][key]=!0}return setSymbolDesc(it,key,D)}return dP(it,key,D)},$defineProperties=function(it,P){anObject(it)
for(var key,keys=enumKeys(P=toIObject(P)),i=0,l=keys.length;l>i;)$defineProperty(it,key=keys[i++],P[key])
return it},$create=function(it,P){return void 0===P?_create(it):$defineProperties(_create(it),P)},$propertyIsEnumerable=function(key){var E=isEnum.call(this,key=toPrimitive(key,!0))
return this===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key)?!1:E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:!0},$getOwnPropertyDescriptor=function(it,key){it=toIObject(it)
key=toPrimitive(key,!0)
if(it!==ObjectProto||!has(AllSymbols,key)||has(OPSymbols,key)){var D=gOPD(it,key)
!D||!has(AllSymbols,key)||has(it,HIDDEN)&&it[HIDDEN][key]||(D.enumerable=!0)
return D}},$getOwnPropertyNames=function(it){for(var key,names=gOPN(toIObject(it)),result=[],i=0;names.length>i;)has(AllSymbols,key=names[i++])||key==HIDDEN||key==META||result.push(key)
return result},$getOwnPropertySymbols=function(it){for(var key,IS_OP=it===ObjectProto,names=gOPN(IS_OP?OPSymbols:toIObject(it)),result=[],i=0;names.length>i;)has(AllSymbols,key=names[i++])&&(IS_OP?has(ObjectProto,key):!0)&&result.push(AllSymbols[key])
return result}
if(!USE_NATIVE){$Symbol=function(){if(this instanceof $Symbol)throw TypeError("Symbol is not a constructor!")
var tag=uid(arguments.length>0?arguments[0]:void 0),$set=function $set(value){this===ObjectProto&&$set.call(OPSymbols,value)
has(this,HIDDEN)&&has(this[HIDDEN],tag)&&(this[HIDDEN][tag]=!1)
setSymbolDesc(this,tag,createDesc(1,value))}
DESCRIPTORS&&setter&&setSymbolDesc(ObjectProto,tag,{configurable:!0,set:$set})
return wrap(tag)}
redefine($Symbol[PROTOTYPE],"toString",function(){return this._k})
$GOPD.f=$getOwnPropertyDescriptor
$DP.f=$defineProperty
__w_pdfjs_require__(132).f=gOPNExt.f=$getOwnPropertyNames
__w_pdfjs_require__(73).f=$propertyIsEnumerable
__w_pdfjs_require__(72).f=$getOwnPropertySymbols
DESCRIPTORS&&!__w_pdfjs_require__(32)&&redefine(ObjectProto,"propertyIsEnumerable",$propertyIsEnumerable,!0)
wksExt.f=function(name){return wrap(wks(name))}}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol})
for(var es6Symbols="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),j=0;es6Symbols.length>j;)wks(es6Symbols[j++])
for(var wellKnownSymbols=$keys(wks.store),k=0;wellKnownSymbols.length>k;)wksDefine(wellKnownSymbols[k++])
$export($export.S+$export.F*!USE_NATIVE,"Symbol",{"for":function(key){return has(SymbolRegistry,key+="")?SymbolRegistry[key]:SymbolRegistry[key]=$Symbol(key)},keyFor:function(sym){if(!isSymbol(sym))throw TypeError(sym+" is not a symbol!")
for(var key in SymbolRegistry)if(SymbolRegistry[key]===sym)return key},useSetter:function(){setter=!0},useSimple:function(){setter=!1}})
$export($export.S+$export.F*!USE_NATIVE,"Object",{create:$create,defineProperty:$defineProperty,defineProperties:$defineProperties,getOwnPropertyDescriptor:$getOwnPropertyDescriptor,getOwnPropertyNames:$getOwnPropertyNames,getOwnPropertySymbols:$getOwnPropertySymbols})
$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){var S=$Symbol()
return"[null]"!=_stringify([S])||"{}"!=_stringify({a:S})||"{}"!=_stringify(Object(S))})),"JSON",{stringify:function(it){for(var replacer,$replacer,args=[it],i=1;arguments.length>i;)args.push(arguments[i++])
$replacer=replacer=args[1]
if((isObject(replacer)||void 0!==it)&&!isSymbol(it)){isArray(replacer)||(replacer=function(key,value){"function"==typeof $replacer&&(value=$replacer.call(this,key,value))
return isSymbol(value)?void 0:value})
args[1]=replacer
return _stringify.apply($JSON,args)}}})
$Symbol[PROTOTYPE][TO_PRIMITIVE]||__w_pdfjs_require__(10)($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf)
setToStringTag($Symbol,"Symbol")
setToStringTag(Math,"Math",!0)
setToStringTag(global.JSON,"JSON",!0)},function(module,exports,__w_pdfjs_require__){"use strict"
exports.f=__w_pdfjs_require__(30)},function(module,exports,__w_pdfjs_require__){"use strict"
var global=__w_pdfjs_require__(8),core=__w_pdfjs_require__(9),LIBRARY=__w_pdfjs_require__(32),wksExt=__w_pdfjs_require__(128),defineProperty=__w_pdfjs_require__(11).f
module.exports=function(name){var $Symbol=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{})
"_"==name.charAt(0)||name in $Symbol||defineProperty($Symbol,name,{value:wksExt.f(name)})}},function(module,exports,__w_pdfjs_require__){"use strict"
var getKeys=__w_pdfjs_require__(54),gOPS=__w_pdfjs_require__(72),pIE=__w_pdfjs_require__(73)
module.exports=function(it){var result=getKeys(it),getSymbols=gOPS.f
if(getSymbols)for(var key,symbols=getSymbols(it),isEnum=pIE.f,i=0;symbols.length>i;)isEnum.call(it,key=symbols[i++])&&result.push(key)
return result}},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}var toIObject=__w_pdfjs_require__(42),gOPN=__w_pdfjs_require__(132).f,toString={}.toString,windowNames="object"==("undefined"==typeof window?"undefined":_typeof(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],getWindowNames=function(it){try{return gOPN(it)}catch(e){return windowNames.slice()}}
module.exports.f=function(it){return windowNames&&"[object Window]"==toString.call(it)?getWindowNames(it):gOPN(toIObject(it))}},function(module,exports,__w_pdfjs_require__){"use strict"
var $keys=__w_pdfjs_require__(55),hiddenKeys=__w_pdfjs_require__(57).concat("length","prototype")
exports.f=Object.getOwnPropertyNames||function(O){return $keys(O,hiddenKeys)}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(134)
module.exports=__w_pdfjs_require__(9).String.padStart},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),$pad=__w_pdfjs_require__(135),userAgent=__w_pdfjs_require__(95)
$export($export.P+$export.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent),"String",{padStart:function(maxLength){return $pad(this,maxLength,arguments.length>1?arguments[1]:void 0,!0)}})},function(module,exports,__w_pdfjs_require__){"use strict"
var toLength=__w_pdfjs_require__(25),repeat=__w_pdfjs_require__(136),defined=__w_pdfjs_require__(33)
module.exports=function(that,maxLength,fillString,left){var S=String(defined(that)),stringLength=S.length,fillStr=void 0===fillString?" ":String(fillString),intMaxLength=toLength(maxLength)
if(stringLength>=intMaxLength||""==fillStr)return S
var fillLen=intMaxLength-stringLength,stringFiller=repeat.call(fillStr,Math.ceil(fillLen/fillStr.length))
stringFiller.length>fillLen&&(stringFiller=stringFiller.slice(0,fillLen))
return left?stringFiller+S:S+stringFiller}},function(module,exports,__w_pdfjs_require__){"use strict"
var toInteger=__w_pdfjs_require__(26),defined=__w_pdfjs_require__(33)
module.exports=function(count){var str=String(defined(this)),res="",n=toInteger(count)
if(0>n||n==1/0)throw RangeError("Count can't be negative")
for(;n>0;(n>>>=1)&&(str+=str))1&n&&(res+=str)
return res}},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(138)
module.exports=__w_pdfjs_require__(9).String.padEnd},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),$pad=__w_pdfjs_require__(135),userAgent=__w_pdfjs_require__(95)
$export($export.P+$export.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent),"String",{padEnd:function(maxLength){return $pad(this,maxLength,arguments.length>1?arguments[1]:void 0,!1)}})},function(module,exports,__w_pdfjs_require__){"use strict"
__w_pdfjs_require__(140)
module.exports=__w_pdfjs_require__(9).Object.values},function(module,exports,__w_pdfjs_require__){"use strict"
var $export=__w_pdfjs_require__(7),$values=__w_pdfjs_require__(141)(!1)
$export($export.S,"Object",{values:function(it){return $values(it)}})},function(module,exports,__w_pdfjs_require__){"use strict"
var getKeys=__w_pdfjs_require__(54),toIObject=__w_pdfjs_require__(42),isEnum=__w_pdfjs_require__(73).f
module.exports=function(isEntries){return function(it){for(var key,O=toIObject(it),keys=getKeys(O),length=keys.length,i=0,result=[];length>i;)isEnum.call(O,key=keys[i++])&&result.push(isEntries?[key,O[key]]:O[key])
return result}}},function(module,exports,__w_pdfjs_require__){"use strict"
var isReadableStreamSupported=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(controller){controller.close()}})
isReadableStreamSupported=!0}catch(e){}isReadableStreamSupported?exports.ReadableStream=ReadableStream:exports.ReadableStream=__w_pdfjs_require__(143).ReadableStream},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof2(obj){_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof2(obj)}!function(e,a){for(var i in a)e[i]=a[i]}(exports,function(modules){function __w_pdfjs_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports
var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}}
modules[moduleId].call(module.exports,module,module.exports,__w_pdfjs_require__)
module.l=!0
return module.exports}var installedModules={}
__w_pdfjs_require__.m=modules
__w_pdfjs_require__.c=installedModules
__w_pdfjs_require__.i=function(value){return value}
__w_pdfjs_require__.d=function(exports,name,getter){__w_pdfjs_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})}
__w_pdfjs_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module}
__w_pdfjs_require__.d(getter,"a",getter)
return getter}
__w_pdfjs_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)}
__w_pdfjs_require__.p=""
return __w_pdfjs_require__(__w_pdfjs_require__.s=7)}([function(module,exports,__w_pdfjs_require__){function IsPropertyKey(argument){return"string"==typeof argument||"symbol"===("undefined"==typeof argument?"undefined":_typeof(argument))}function Call(F,V,args){if("function"!=typeof F)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(F,V,args)}var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(obj){return _typeof2(obj)}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj)},_require=__w_pdfjs_require__(1),assert=_require.assert
exports.typeIsObject=function(x){return"object"===("undefined"==typeof x?"undefined":_typeof(x))&&null!==x||"function"==typeof x}
exports.createDataProperty=function(o,p,v){assert(exports.typeIsObject(o))
Object.defineProperty(o,p,{value:v,writable:!0,enumerable:!0,configurable:!0})}
exports.createArrayFromList=function(elements){return elements.slice()}
exports.ArrayBufferCopy=function(dest,destOffset,src,srcOffset,n){new Uint8Array(dest).set(new Uint8Array(src,srcOffset,n),destOffset)}
exports.CreateIterResultObject=function(value,done){assert("boolean"==typeof done)
var obj={}
Object.defineProperty(obj,"value",{value:value,enumerable:!0,writable:!0,configurable:!0})
Object.defineProperty(obj,"done",{value:done,enumerable:!0,writable:!0,configurable:!0})
return obj}
exports.IsFiniteNonNegativeNumber=function(v){return Number.isNaN(v)?!1:v===1/0?!1:0>v?!1:!0}
exports.InvokeOrNoop=function(O,P,args){assert(void 0!==O)
assert(IsPropertyKey(P))
assert(Array.isArray(args))
var method=O[P]
return void 0!==method?Call(method,O,args):void 0}
exports.PromiseInvokeOrNoop=function(O,P,args){assert(void 0!==O)
assert(IsPropertyKey(P))
assert(Array.isArray(args))
try{return Promise.resolve(exports.InvokeOrNoop(O,P,args))}catch(returnValueE){return Promise.reject(returnValueE)}}
exports.PromiseInvokeOrPerformFallback=function(O,P,args,F,argsF){assert(void 0!==O)
assert(IsPropertyKey(P))
assert(Array.isArray(args))
assert(Array.isArray(argsF))
var method=void 0
try{method=O[P]}catch(methodE){return Promise.reject(methodE)}if(void 0===method)return F.apply(null,argsF)
try{return Promise.resolve(Call(method,O,args))}catch(e){return Promise.reject(e)}}
exports.TransferArrayBuffer=function(O){return O.slice()}
exports.ValidateAndNormalizeHighWaterMark=function(highWaterMark){highWaterMark=Number(highWaterMark)
if(Number.isNaN(highWaterMark)||0>highWaterMark)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN")
return highWaterMark}
exports.ValidateAndNormalizeQueuingStrategy=function(size,highWaterMark){if(void 0!==size&&"function"!=typeof size)throw new TypeError("size property of a queuing strategy must be a function")
highWaterMark=exports.ValidateAndNormalizeHighWaterMark(highWaterMark)
return{size:size,highWaterMark:highWaterMark}}},function(module,exports,__w_pdfjs_require__){function rethrowAssertionErrorRejection(e){e&&e.constructor===AssertionError&&setTimeout(function(){throw e},0)}function AssertionError(message){this.name="AssertionError"
this.message=message||""
this.stack=(new Error).stack}function assert(value,message){if(!value)throw new AssertionError(message)}AssertionError.prototype=Object.create(Error.prototype)
AssertionError.prototype.constructor=AssertionError
module.exports={rethrowAssertionErrorRejection:rethrowAssertionErrorRejection,AssertionError:AssertionError,assert:assert}},function(module,exports,__w_pdfjs_require__){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function AcquireWritableStreamDefaultWriter(stream){return new WritableStreamDefaultWriter(stream)}function IsWritableStream(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_writableStreamController")?!0:!1}function IsWritableStreamLocked(stream){assert(IsWritableStream(stream)===!0,"IsWritableStreamLocked should only be used on known writable streams")
return void 0===stream._writer?!1:!0}function WritableStreamAbort(stream,reason){var state=stream._state
if("closed"===state)return Promise.resolve(void 0)
if("errored"===state)return Promise.reject(stream._storedError)
var error=new TypeError("Requested to abort")
if(void 0!==stream._pendingAbortRequest)return Promise.reject(error)
assert("writable"===state||"erroring"===state,"state must be writable or erroring")
var wasAlreadyErroring=!1
if("erroring"===state){wasAlreadyErroring=!0
reason=void 0}var promise=new Promise(function(resolve,reject){stream._pendingAbortRequest={_resolve:resolve,_reject:reject,_reason:reason,_wasAlreadyErroring:wasAlreadyErroring}})
wasAlreadyErroring===!1&&WritableStreamStartErroring(stream,error)
return promise}function WritableStreamAddWriteRequest(stream){assert(IsWritableStreamLocked(stream)===!0)
assert("writable"===stream._state)
var promise=new Promise(function(resolve,reject){var writeRequest={_resolve:resolve,_reject:reject}
stream._writeRequests.push(writeRequest)})
return promise}function WritableStreamDealWithRejection(stream,error){var state=stream._state
if("writable"!==state){assert("erroring"===state)
WritableStreamFinishErroring(stream)}else WritableStreamStartErroring(stream,error)}function WritableStreamStartErroring(stream,reason){assert(void 0===stream._storedError,"stream._storedError === undefined")
assert("writable"===stream._state,"state must be writable")
var controller=stream._writableStreamController
assert(void 0!==controller,"controller must not be undefined")
stream._state="erroring"
stream._storedError=reason
var writer=stream._writer
void 0!==writer&&WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer,reason)
WritableStreamHasOperationMarkedInFlight(stream)===!1&&controller._started===!0&&WritableStreamFinishErroring(stream)}function WritableStreamFinishErroring(stream){assert("erroring"===stream._state,"stream._state === erroring")
assert(WritableStreamHasOperationMarkedInFlight(stream)===!1,"WritableStreamHasOperationMarkedInFlight(stream) === false")
stream._state="errored"
stream._writableStreamController.__errorSteps()
for(var storedError=stream._storedError,i=0;i<stream._writeRequests.length;i++){var writeRequest=stream._writeRequests[i]
writeRequest._reject(storedError)}stream._writeRequests=[]
if(void 0!==stream._pendingAbortRequest){var abortRequest=stream._pendingAbortRequest
stream._pendingAbortRequest=void 0
if(abortRequest._wasAlreadyErroring!==!0){var promise=stream._writableStreamController.__abortSteps(abortRequest._reason)
promise.then(function(){abortRequest._resolve()
WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)},function(reason){abortRequest._reject(reason)
WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)})}else{abortRequest._reject(storedError)
WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)}}else WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)}function WritableStreamFinishInFlightWrite(stream){assert(void 0!==stream._inFlightWriteRequest)
stream._inFlightWriteRequest._resolve(void 0)
stream._inFlightWriteRequest=void 0}function WritableStreamFinishInFlightWriteWithError(stream,error){assert(void 0!==stream._inFlightWriteRequest)
stream._inFlightWriteRequest._reject(error)
stream._inFlightWriteRequest=void 0
assert("writable"===stream._state||"erroring"===stream._state)
WritableStreamDealWithRejection(stream,error)}function WritableStreamFinishInFlightClose(stream){assert(void 0!==stream._inFlightCloseRequest)
stream._inFlightCloseRequest._resolve(void 0)
stream._inFlightCloseRequest=void 0
var state=stream._state
assert("writable"===state||"erroring"===state)
if("erroring"===state){stream._storedError=void 0
if(void 0!==stream._pendingAbortRequest){stream._pendingAbortRequest._resolve()
stream._pendingAbortRequest=void 0}}stream._state="closed"
var writer=stream._writer
void 0!==writer&&defaultWriterClosedPromiseResolve(writer)
assert(void 0===stream._pendingAbortRequest,"stream._pendingAbortRequest === undefined")
assert(void 0===stream._storedError,"stream._storedError === undefined")}function WritableStreamFinishInFlightCloseWithError(stream,error){assert(void 0!==stream._inFlightCloseRequest)
stream._inFlightCloseRequest._reject(error)
stream._inFlightCloseRequest=void 0
assert("writable"===stream._state||"erroring"===stream._state)
if(void 0!==stream._pendingAbortRequest){stream._pendingAbortRequest._reject(error)
stream._pendingAbortRequest=void 0}WritableStreamDealWithRejection(stream,error)}function WritableStreamCloseQueuedOrInFlight(stream){return void 0===stream._closeRequest&&void 0===stream._inFlightCloseRequest?!1:!0}function WritableStreamHasOperationMarkedInFlight(stream){return void 0===stream._inFlightWriteRequest&&void 0===stream._inFlightCloseRequest?!1:!0}function WritableStreamMarkCloseRequestInFlight(stream){assert(void 0===stream._inFlightCloseRequest)
assert(void 0!==stream._closeRequest)
stream._inFlightCloseRequest=stream._closeRequest
stream._closeRequest=void 0}function WritableStreamMarkFirstWriteRequestInFlight(stream){assert(void 0===stream._inFlightWriteRequest,"there must be no pending write request")
assert(0!==stream._writeRequests.length,"writeRequests must not be empty")
stream._inFlightWriteRequest=stream._writeRequests.shift()}function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream){assert("errored"===stream._state,'_stream_.[[state]] is `"errored"`')
if(void 0!==stream._closeRequest){assert(void 0===stream._inFlightCloseRequest)
stream._closeRequest._reject(stream._storedError)
stream._closeRequest=void 0}var writer=stream._writer
if(void 0!==writer){defaultWriterClosedPromiseReject(writer,stream._storedError)
writer._closedPromise["catch"](function(){})}}function WritableStreamUpdateBackpressure(stream,backpressure){assert("writable"===stream._state)
assert(WritableStreamCloseQueuedOrInFlight(stream)===!1)
var writer=stream._writer
if(void 0!==writer&&backpressure!==stream._backpressure)if(backpressure===!0)defaultWriterReadyPromiseReset(writer)
else{assert(backpressure===!1)
defaultWriterReadyPromiseResolve(writer)}stream._backpressure=backpressure}function IsWritableStreamDefaultWriter(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_ownerWritableStream")?!0:!1}function WritableStreamDefaultWriterAbort(writer,reason){var stream=writer._ownerWritableStream
assert(void 0!==stream)
return WritableStreamAbort(stream,reason)}function WritableStreamDefaultWriterClose(writer){var stream=writer._ownerWritableStream
assert(void 0!==stream)
var state=stream._state
if("closed"===state||"errored"===state)return Promise.reject(new TypeError("The stream (in "+state+" state) is not in the writable state and cannot be closed"))
assert("writable"===state||"erroring"===state)
assert(WritableStreamCloseQueuedOrInFlight(stream)===!1)
var promise=new Promise(function(resolve,reject){var closeRequest={_resolve:resolve,_reject:reject}
stream._closeRequest=closeRequest})
stream._backpressure===!0&&"writable"===state&&defaultWriterReadyPromiseResolve(writer)
WritableStreamDefaultControllerClose(stream._writableStreamController)
return promise}function WritableStreamDefaultWriterCloseWithErrorPropagation(writer){var stream=writer._ownerWritableStream
assert(void 0!==stream)
var state=stream._state
if(WritableStreamCloseQueuedOrInFlight(stream)===!0||"closed"===state)return Promise.resolve()
if("errored"===state)return Promise.reject(stream._storedError)
assert("writable"===state||"erroring"===state)
return WritableStreamDefaultWriterClose(writer)}function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer,error){"pending"===writer._closedPromiseState?defaultWriterClosedPromiseReject(writer,error):defaultWriterClosedPromiseResetToRejected(writer,error)
writer._closedPromise["catch"](function(){})}function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer,error){"pending"===writer._readyPromiseState?defaultWriterReadyPromiseReject(writer,error):defaultWriterReadyPromiseResetToRejected(writer,error)
writer._readyPromise["catch"](function(){})}function WritableStreamDefaultWriterGetDesiredSize(writer){var stream=writer._ownerWritableStream,state=stream._state
return"errored"===state||"erroring"===state?null:"closed"===state?0:WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController)}function WritableStreamDefaultWriterRelease(writer){var stream=writer._ownerWritableStream
assert(void 0!==stream)
assert(stream._writer===writer)
var releasedError=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer,releasedError)
WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer,releasedError)
stream._writer=void 0
writer._ownerWritableStream=void 0}function WritableStreamDefaultWriterWrite(writer,chunk){var stream=writer._ownerWritableStream
assert(void 0!==stream)
var controller=stream._writableStreamController,chunkSize=WritableStreamDefaultControllerGetChunkSize(controller,chunk)
if(stream!==writer._ownerWritableStream)return Promise.reject(defaultWriterLockException("write to"))
var state=stream._state
if("errored"===state)return Promise.reject(stream._storedError)
if(WritableStreamCloseQueuedOrInFlight(stream)===!0||"closed"===state)return Promise.reject(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===state)return Promise.reject(stream._storedError)
assert("writable"===state)
var promise=WritableStreamAddWriteRequest(stream)
WritableStreamDefaultControllerWrite(controller,chunk,chunkSize)
return promise}function WritableStreamDefaultControllerClose(controller){EnqueueValueWithSize(controller,"close",0)
WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller)}function WritableStreamDefaultControllerGetChunkSize(controller,chunk){var strategySize=controller._strategySize
if(void 0===strategySize)return 1
try{return strategySize(chunk)}catch(chunkSizeE){WritableStreamDefaultControllerErrorIfNeeded(controller,chunkSizeE)
return 1}}function WritableStreamDefaultControllerGetDesiredSize(controller){return controller._strategyHWM-controller._queueTotalSize}function WritableStreamDefaultControllerWrite(controller,chunk,chunkSize){var writeRecord={chunk:chunk}
try{EnqueueValueWithSize(controller,writeRecord,chunkSize)}catch(enqueueE){WritableStreamDefaultControllerErrorIfNeeded(controller,enqueueE)
return}var stream=controller._controlledWritableStream
if(WritableStreamCloseQueuedOrInFlight(stream)===!1&&"writable"===stream._state){var backpressure=WritableStreamDefaultControllerGetBackpressure(controller)
WritableStreamUpdateBackpressure(stream,backpressure)}WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller)}function IsWritableStreamDefaultController(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_underlyingSink")?!0:!1}function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller){var stream=controller._controlledWritableStream
if(controller._started!==!1&&void 0===stream._inFlightWriteRequest){var state=stream._state
if("closed"!==state&&"errored"!==state)if("erroring"!==state){if(0!==controller._queue.length){var writeRecord=PeekQueueValue(controller)
"close"===writeRecord?WritableStreamDefaultControllerProcessClose(controller):WritableStreamDefaultControllerProcessWrite(controller,writeRecord.chunk)}}else WritableStreamFinishErroring(stream)}}function WritableStreamDefaultControllerErrorIfNeeded(controller,error){"writable"===controller._controlledWritableStream._state&&WritableStreamDefaultControllerError(controller,error)}function WritableStreamDefaultControllerProcessClose(controller){var stream=controller._controlledWritableStream
WritableStreamMarkCloseRequestInFlight(stream)
DequeueValue(controller)
assert(0===controller._queue.length,"queue must be empty once the final write record is dequeued")
var sinkClosePromise=PromiseInvokeOrNoop(controller._underlyingSink,"close",[])
sinkClosePromise.then(function(){WritableStreamFinishInFlightClose(stream)},function(reason){WritableStreamFinishInFlightCloseWithError(stream,reason)})["catch"](rethrowAssertionErrorRejection)}function WritableStreamDefaultControllerProcessWrite(controller,chunk){var stream=controller._controlledWritableStream
WritableStreamMarkFirstWriteRequestInFlight(stream)
var sinkWritePromise=PromiseInvokeOrNoop(controller._underlyingSink,"write",[chunk,controller])
sinkWritePromise.then(function(){WritableStreamFinishInFlightWrite(stream)
var state=stream._state
assert("writable"===state||"erroring"===state)
DequeueValue(controller)
if(WritableStreamCloseQueuedOrInFlight(stream)===!1&&"writable"===state){var backpressure=WritableStreamDefaultControllerGetBackpressure(controller)
WritableStreamUpdateBackpressure(stream,backpressure)}WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller)},function(reason){WritableStreamFinishInFlightWriteWithError(stream,reason)})["catch"](rethrowAssertionErrorRejection)}function WritableStreamDefaultControllerGetBackpressure(controller){var desiredSize=WritableStreamDefaultControllerGetDesiredSize(controller)
return 0>=desiredSize}function WritableStreamDefaultControllerError(controller,error){var stream=controller._controlledWritableStream
assert("writable"===stream._state)
WritableStreamStartErroring(stream,error)}function streamBrandCheckException(name){return new TypeError("WritableStream.prototype."+name+" can only be used on a WritableStream")}function defaultWriterBrandCheckException(name){return new TypeError("WritableStreamDefaultWriter.prototype."+name+" can only be used on a WritableStreamDefaultWriter")}function defaultWriterLockException(name){return new TypeError("Cannot "+name+" a stream using a released writer")}function defaultWriterClosedPromiseInitialize(writer){writer._closedPromise=new Promise(function(resolve,reject){writer._closedPromise_resolve=resolve
writer._closedPromise_reject=reject
writer._closedPromiseState="pending"})}function defaultWriterClosedPromiseInitializeAsRejected(writer,reason){writer._closedPromise=Promise.reject(reason)
writer._closedPromise_resolve=void 0
writer._closedPromise_reject=void 0
writer._closedPromiseState="rejected"}function defaultWriterClosedPromiseInitializeAsResolved(writer){writer._closedPromise=Promise.resolve(void 0)
writer._closedPromise_resolve=void 0
writer._closedPromise_reject=void 0
writer._closedPromiseState="resolved"}function defaultWriterClosedPromiseReject(writer,reason){assert(void 0!==writer._closedPromise_resolve,"writer._closedPromise_resolve !== undefined")
assert(void 0!==writer._closedPromise_reject,"writer._closedPromise_reject !== undefined")
assert("pending"===writer._closedPromiseState,"writer._closedPromiseState is pending")
writer._closedPromise_reject(reason)
writer._closedPromise_resolve=void 0
writer._closedPromise_reject=void 0
writer._closedPromiseState="rejected"}function defaultWriterClosedPromiseResetToRejected(writer,reason){assert(void 0===writer._closedPromise_resolve,"writer._closedPromise_resolve === undefined")
assert(void 0===writer._closedPromise_reject,"writer._closedPromise_reject === undefined")
assert("pending"!==writer._closedPromiseState,"writer._closedPromiseState is not pending")
writer._closedPromise=Promise.reject(reason)
writer._closedPromiseState="rejected"}function defaultWriterClosedPromiseResolve(writer){assert(void 0!==writer._closedPromise_resolve,"writer._closedPromise_resolve !== undefined")
assert(void 0!==writer._closedPromise_reject,"writer._closedPromise_reject !== undefined")
assert("pending"===writer._closedPromiseState,"writer._closedPromiseState is pending")
writer._closedPromise_resolve(void 0)
writer._closedPromise_resolve=void 0
writer._closedPromise_reject=void 0
writer._closedPromiseState="resolved"}function defaultWriterReadyPromiseInitialize(writer){writer._readyPromise=new Promise(function(resolve,reject){writer._readyPromise_resolve=resolve
writer._readyPromise_reject=reject})
writer._readyPromiseState="pending"}function defaultWriterReadyPromiseInitializeAsRejected(writer,reason){writer._readyPromise=Promise.reject(reason)
writer._readyPromise_resolve=void 0
writer._readyPromise_reject=void 0
writer._readyPromiseState="rejected"}function defaultWriterReadyPromiseInitializeAsResolved(writer){writer._readyPromise=Promise.resolve(void 0)
writer._readyPromise_resolve=void 0
writer._readyPromise_reject=void 0
writer._readyPromiseState="fulfilled"}function defaultWriterReadyPromiseReject(writer,reason){assert(void 0!==writer._readyPromise_resolve,"writer._readyPromise_resolve !== undefined")
assert(void 0!==writer._readyPromise_reject,"writer._readyPromise_reject !== undefined")
writer._readyPromise_reject(reason)
writer._readyPromise_resolve=void 0
writer._readyPromise_reject=void 0
writer._readyPromiseState="rejected"}function defaultWriterReadyPromiseReset(writer){assert(void 0===writer._readyPromise_resolve,"writer._readyPromise_resolve === undefined")
assert(void 0===writer._readyPromise_reject,"writer._readyPromise_reject === undefined")
writer._readyPromise=new Promise(function(resolve,reject){writer._readyPromise_resolve=resolve
writer._readyPromise_reject=reject})
writer._readyPromiseState="pending"}function defaultWriterReadyPromiseResetToRejected(writer,reason){assert(void 0===writer._readyPromise_resolve,"writer._readyPromise_resolve === undefined")
assert(void 0===writer._readyPromise_reject,"writer._readyPromise_reject === undefined")
writer._readyPromise=Promise.reject(reason)
writer._readyPromiseState="rejected"}function defaultWriterReadyPromiseResolve(writer){assert(void 0!==writer._readyPromise_resolve,"writer._readyPromise_resolve !== undefined")
assert(void 0!==writer._readyPromise_reject,"writer._readyPromise_reject !== undefined")
writer._readyPromise_resolve(void 0)
writer._readyPromise_resolve=void 0
writer._readyPromise_reject=void 0
writer._readyPromiseState="fulfilled"}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){protoProps&&defineProperties(Constructor.prototype,protoProps)
staticProps&&defineProperties(Constructor,staticProps)
return Constructor}}(),_require=__w_pdfjs_require__(0),InvokeOrNoop=_require.InvokeOrNoop,PromiseInvokeOrNoop=_require.PromiseInvokeOrNoop,ValidateAndNormalizeQueuingStrategy=_require.ValidateAndNormalizeQueuingStrategy,typeIsObject=_require.typeIsObject,_require2=__w_pdfjs_require__(1),assert=_require2.assert,rethrowAssertionErrorRejection=_require2.rethrowAssertionErrorRejection,_require3=__w_pdfjs_require__(3),DequeueValue=_require3.DequeueValue,EnqueueValueWithSize=_require3.EnqueueValueWithSize,PeekQueueValue=_require3.PeekQueueValue,ResetQueue=_require3.ResetQueue,WritableStream=function(){function WritableStream(){var underlyingSink=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},size=_ref.size,_ref$highWaterMark=_ref.highWaterMark,highWaterMark=void 0===_ref$highWaterMark?1:_ref$highWaterMark
_classCallCheck(this,WritableStream)
this._state="writable"
this._storedError=void 0
this._writer=void 0
this._writableStreamController=void 0
this._writeRequests=[]
this._inFlightWriteRequest=void 0
this._closeRequest=void 0
this._inFlightCloseRequest=void 0
this._pendingAbortRequest=void 0
this._backpressure=!1
var type=underlyingSink.type
if(void 0!==type)throw new RangeError("Invalid type is specified")
this._writableStreamController=new WritableStreamDefaultController(this,underlyingSink,size,highWaterMark)
this._writableStreamController.__startSteps()}_createClass(WritableStream,[{key:"abort",value:function(reason){return IsWritableStream(this)===!1?Promise.reject(streamBrandCheckException("abort")):IsWritableStreamLocked(this)===!0?Promise.reject(new TypeError("Cannot abort a stream that already has a writer")):WritableStreamAbort(this,reason)}},{key:"getWriter",value:function(){if(IsWritableStream(this)===!1)throw streamBrandCheckException("getWriter")
return AcquireWritableStreamDefaultWriter(this)}},{key:"locked",get:function(){if(IsWritableStream(this)===!1)throw streamBrandCheckException("locked")
return IsWritableStreamLocked(this)}}])
return WritableStream}()
module.exports={AcquireWritableStreamDefaultWriter:AcquireWritableStreamDefaultWriter,IsWritableStream:IsWritableStream,IsWritableStreamLocked:IsWritableStreamLocked,WritableStream:WritableStream,WritableStreamAbort:WritableStreamAbort,WritableStreamDefaultControllerError:WritableStreamDefaultControllerError,WritableStreamDefaultWriterCloseWithErrorPropagation:WritableStreamDefaultWriterCloseWithErrorPropagation,WritableStreamDefaultWriterRelease:WritableStreamDefaultWriterRelease,WritableStreamDefaultWriterWrite:WritableStreamDefaultWriterWrite,WritableStreamCloseQueuedOrInFlight:WritableStreamCloseQueuedOrInFlight}
var WritableStreamDefaultWriter=function(){function WritableStreamDefaultWriter(stream){_classCallCheck(this,WritableStreamDefaultWriter)
if(IsWritableStream(stream)===!1)throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance")
if(IsWritableStreamLocked(stream)===!0)throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=stream
stream._writer=this
var state=stream._state
if("writable"===state){WritableStreamCloseQueuedOrInFlight(stream)===!1&&stream._backpressure===!0?defaultWriterReadyPromiseInitialize(this):defaultWriterReadyPromiseInitializeAsResolved(this)
defaultWriterClosedPromiseInitialize(this)}else if("erroring"===state){defaultWriterReadyPromiseInitializeAsRejected(this,stream._storedError)
this._readyPromise["catch"](function(){})
defaultWriterClosedPromiseInitialize(this)}else if("closed"===state){defaultWriterReadyPromiseInitializeAsResolved(this)
defaultWriterClosedPromiseInitializeAsResolved(this)}else{assert("errored"===state,"state must be errored")
var storedError=stream._storedError
defaultWriterReadyPromiseInitializeAsRejected(this,storedError)
this._readyPromise["catch"](function(){})
defaultWriterClosedPromiseInitializeAsRejected(this,storedError)
this._closedPromise["catch"](function(){})}}_createClass(WritableStreamDefaultWriter,[{key:"abort",value:function(reason){return IsWritableStreamDefaultWriter(this)===!1?Promise.reject(defaultWriterBrandCheckException("abort")):void 0===this._ownerWritableStream?Promise.reject(defaultWriterLockException("abort")):WritableStreamDefaultWriterAbort(this,reason)}},{key:"close",value:function(){if(IsWritableStreamDefaultWriter(this)===!1)return Promise.reject(defaultWriterBrandCheckException("close"))
var stream=this._ownerWritableStream
return void 0===stream?Promise.reject(defaultWriterLockException("close")):WritableStreamCloseQueuedOrInFlight(stream)===!0?Promise.reject(new TypeError("cannot close an already-closing stream")):WritableStreamDefaultWriterClose(this)}},{key:"releaseLock",value:function(){if(IsWritableStreamDefaultWriter(this)===!1)throw defaultWriterBrandCheckException("releaseLock")
var stream=this._ownerWritableStream
if(void 0!==stream){assert(void 0!==stream._writer)
WritableStreamDefaultWriterRelease(this)}}},{key:"write",value:function(chunk){return IsWritableStreamDefaultWriter(this)===!1?Promise.reject(defaultWriterBrandCheckException("write")):void 0===this._ownerWritableStream?Promise.reject(defaultWriterLockException("write to")):WritableStreamDefaultWriterWrite(this,chunk)}},{key:"closed",get:function(){return IsWritableStreamDefaultWriter(this)===!1?Promise.reject(defaultWriterBrandCheckException("closed")):this._closedPromise}},{key:"desiredSize",get:function(){if(IsWritableStreamDefaultWriter(this)===!1)throw defaultWriterBrandCheckException("desiredSize")
if(void 0===this._ownerWritableStream)throw defaultWriterLockException("desiredSize")
return WritableStreamDefaultWriterGetDesiredSize(this)}},{key:"ready",get:function(){return IsWritableStreamDefaultWriter(this)===!1?Promise.reject(defaultWriterBrandCheckException("ready")):this._readyPromise}}])
return WritableStreamDefaultWriter}(),WritableStreamDefaultController=function(){function WritableStreamDefaultController(stream,underlyingSink,size,highWaterMark){_classCallCheck(this,WritableStreamDefaultController)
if(IsWritableStream(stream)===!1)throw new TypeError("WritableStreamDefaultController can only be constructed with a WritableStream instance")
if(void 0!==stream._writableStreamController)throw new TypeError("WritableStreamDefaultController instances can only be created by the WritableStream constructor")
this._controlledWritableStream=stream
this._underlyingSink=underlyingSink
this._queue=void 0
this._queueTotalSize=void 0
ResetQueue(this)
this._started=!1
var normalizedStrategy=ValidateAndNormalizeQueuingStrategy(size,highWaterMark)
this._strategySize=normalizedStrategy.size
this._strategyHWM=normalizedStrategy.highWaterMark
var backpressure=WritableStreamDefaultControllerGetBackpressure(this)
WritableStreamUpdateBackpressure(stream,backpressure)}_createClass(WritableStreamDefaultController,[{key:"error",value:function(e){if(IsWritableStreamDefaultController(this)===!1)throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
var state=this._controlledWritableStream._state
"writable"===state&&WritableStreamDefaultControllerError(this,e)}},{key:"__abortSteps",value:function(reason){return PromiseInvokeOrNoop(this._underlyingSink,"abort",[reason])}},{key:"__errorSteps",value:function(){ResetQueue(this)}},{key:"__startSteps",value:function(){var _this=this,startResult=InvokeOrNoop(this._underlyingSink,"start",[this]),stream=this._controlledWritableStream
Promise.resolve(startResult).then(function(){assert("writable"===stream._state||"erroring"===stream._state)
_this._started=!0
WritableStreamDefaultControllerAdvanceQueueIfNeeded(_this)},function(r){assert("writable"===stream._state||"erroring"===stream._state)
_this._started=!0
WritableStreamDealWithRejection(stream,r)})["catch"](rethrowAssertionErrorRejection)}}])
return WritableStreamDefaultController}()},function(module,exports,__w_pdfjs_require__){var _require=__w_pdfjs_require__(0),IsFiniteNonNegativeNumber=_require.IsFiniteNonNegativeNumber,_require2=__w_pdfjs_require__(1),assert=_require2.assert
exports.DequeueValue=function(container){assert("_queue"in container&&"_queueTotalSize"in container,"Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].")
assert(container._queue.length>0,"Spec-level failure: should never dequeue from an empty queue.")
var pair=container._queue.shift()
container._queueTotalSize-=pair.size
container._queueTotalSize<0&&(container._queueTotalSize=0)
return pair.value}
exports.EnqueueValueWithSize=function(container,value,size){assert("_queue"in container&&"_queueTotalSize"in container,"Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]].")
size=Number(size)
if(!IsFiniteNonNegativeNumber(size))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
container._queue.push({value:value,size:size})
container._queueTotalSize+=size}
exports.PeekQueueValue=function(container){assert("_queue"in container&&"_queueTotalSize"in container,"Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].")
assert(container._queue.length>0,"Spec-level failure: should never peek at an empty queue.")
var pair=container._queue[0]
return pair.value}
exports.ResetQueue=function(container){assert("_queue"in container&&"_queueTotalSize"in container,"Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].")
container._queue=[]
container._queueTotalSize=0}},function(module,exports,__w_pdfjs_require__){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function AcquireReadableStreamBYOBReader(stream){return new ReadableStreamBYOBReader(stream)}function AcquireReadableStreamDefaultReader(stream){return new ReadableStreamDefaultReader(stream)}function IsReadableStream(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_readableStreamController")?!0:!1}function IsReadableStreamDisturbed(stream){assert(IsReadableStream(stream)===!0,"IsReadableStreamDisturbed should only be used on known readable streams")
return stream._disturbed}function IsReadableStreamLocked(stream){assert(IsReadableStream(stream)===!0,"IsReadableStreamLocked should only be used on known readable streams")
return void 0===stream._reader?!1:!0}function ReadableStreamTee(stream,cloneForBranch2){assert(IsReadableStream(stream)===!0)
assert("boolean"==typeof cloneForBranch2)
var reader=AcquireReadableStreamDefaultReader(stream),teeState={closedOrErrored:!1,canceled1:!1,canceled2:!1,reason1:void 0,reason2:void 0}
teeState.promise=new Promise(function(resolve){teeState._resolve=resolve})
var pull=create_ReadableStreamTeePullFunction()
pull._reader=reader
pull._teeState=teeState
pull._cloneForBranch2=cloneForBranch2
var cancel1=create_ReadableStreamTeeBranch1CancelFunction()
cancel1._stream=stream
cancel1._teeState=teeState
var cancel2=create_ReadableStreamTeeBranch2CancelFunction()
cancel2._stream=stream
cancel2._teeState=teeState
var underlyingSource1=Object.create(Object.prototype)
createDataProperty(underlyingSource1,"pull",pull)
createDataProperty(underlyingSource1,"cancel",cancel1)
var branch1Stream=new ReadableStream(underlyingSource1),underlyingSource2=Object.create(Object.prototype)
createDataProperty(underlyingSource2,"pull",pull)
createDataProperty(underlyingSource2,"cancel",cancel2)
var branch2Stream=new ReadableStream(underlyingSource2)
pull._branch1=branch1Stream._readableStreamController
pull._branch2=branch2Stream._readableStreamController
reader._closedPromise["catch"](function(r){if(teeState.closedOrErrored!==!0){ReadableStreamDefaultControllerError(pull._branch1,r)
ReadableStreamDefaultControllerError(pull._branch2,r)
teeState.closedOrErrored=!0}})
return[branch1Stream,branch2Stream]}function create_ReadableStreamTeePullFunction(){function f(){var reader=f._reader,branch1=f._branch1,branch2=f._branch2,teeState=f._teeState
return ReadableStreamDefaultReaderRead(reader).then(function(result){assert(typeIsObject(result))
var value=result.value,done=result.done
assert("boolean"==typeof done)
if(done===!0&&teeState.closedOrErrored===!1){teeState.canceled1===!1&&ReadableStreamDefaultControllerClose(branch1)
teeState.canceled2===!1&&ReadableStreamDefaultControllerClose(branch2)
teeState.closedOrErrored=!0}if(teeState.closedOrErrored!==!0){var value1=value,value2=value
teeState.canceled1===!1&&ReadableStreamDefaultControllerEnqueue(branch1,value1)
teeState.canceled2===!1&&ReadableStreamDefaultControllerEnqueue(branch2,value2)}})}return f}function create_ReadableStreamTeeBranch1CancelFunction(){function f(reason){var stream=f._stream,teeState=f._teeState
teeState.canceled1=!0
teeState.reason1=reason
if(teeState.canceled2===!0){var compositeReason=createArrayFromList([teeState.reason1,teeState.reason2]),cancelResult=ReadableStreamCancel(stream,compositeReason)
teeState._resolve(cancelResult)}return teeState.promise}return f}function create_ReadableStreamTeeBranch2CancelFunction(){function f(reason){var stream=f._stream,teeState=f._teeState
teeState.canceled2=!0
teeState.reason2=reason
if(teeState.canceled1===!0){var compositeReason=createArrayFromList([teeState.reason1,teeState.reason2]),cancelResult=ReadableStreamCancel(stream,compositeReason)
teeState._resolve(cancelResult)}return teeState.promise}return f}function ReadableStreamAddReadIntoRequest(stream){assert(IsReadableStreamBYOBReader(stream._reader)===!0)
assert("readable"===stream._state||"closed"===stream._state)
var promise=new Promise(function(resolve,reject){var readIntoRequest={_resolve:resolve,_reject:reject}
stream._reader._readIntoRequests.push(readIntoRequest)})
return promise}function ReadableStreamAddReadRequest(stream){assert(IsReadableStreamDefaultReader(stream._reader)===!0)
assert("readable"===stream._state)
var promise=new Promise(function(resolve,reject){var readRequest={_resolve:resolve,_reject:reject}
stream._reader._readRequests.push(readRequest)})
return promise}function ReadableStreamCancel(stream,reason){stream._disturbed=!0
if("closed"===stream._state)return Promise.resolve(void 0)
if("errored"===stream._state)return Promise.reject(stream._storedError)
ReadableStreamClose(stream)
var sourceCancelPromise=stream._readableStreamController.__cancelSteps(reason)
return sourceCancelPromise.then(function(){})}function ReadableStreamClose(stream){assert("readable"===stream._state)
stream._state="closed"
var reader=stream._reader
if(void 0!==reader){if(IsReadableStreamDefaultReader(reader)===!0){for(var i=0;i<reader._readRequests.length;i++){var _resolve=reader._readRequests[i]._resolve
_resolve(CreateIterResultObject(void 0,!0))}reader._readRequests=[]}defaultReaderClosedPromiseResolve(reader)}}function ReadableStreamError(stream,e){assert(IsReadableStream(stream)===!0,"stream must be ReadableStream")
assert("readable"===stream._state,"state must be readable")
stream._state="errored"
stream._storedError=e
var reader=stream._reader
if(void 0!==reader){if(IsReadableStreamDefaultReader(reader)===!0){for(var i=0;i<reader._readRequests.length;i++){var readRequest=reader._readRequests[i]
readRequest._reject(e)}reader._readRequests=[]}else{assert(IsReadableStreamBYOBReader(reader),"reader must be ReadableStreamBYOBReader")
for(var _i=0;_i<reader._readIntoRequests.length;_i++){var readIntoRequest=reader._readIntoRequests[_i]
readIntoRequest._reject(e)}reader._readIntoRequests=[]}defaultReaderClosedPromiseReject(reader,e)
reader._closedPromise["catch"](function(){})}}function ReadableStreamFulfillReadIntoRequest(stream,chunk,done){var reader=stream._reader
assert(reader._readIntoRequests.length>0)
var readIntoRequest=reader._readIntoRequests.shift()
readIntoRequest._resolve(CreateIterResultObject(chunk,done))}function ReadableStreamFulfillReadRequest(stream,chunk,done){var reader=stream._reader
assert(reader._readRequests.length>0)
var readRequest=reader._readRequests.shift()
readRequest._resolve(CreateIterResultObject(chunk,done))}function ReadableStreamGetNumReadIntoRequests(stream){return stream._reader._readIntoRequests.length}function ReadableStreamGetNumReadRequests(stream){return stream._reader._readRequests.length}function ReadableStreamHasBYOBReader(stream){var reader=stream._reader
return void 0===reader?!1:IsReadableStreamBYOBReader(reader)===!1?!1:!0}function ReadableStreamHasDefaultReader(stream){var reader=stream._reader
return void 0===reader?!1:IsReadableStreamDefaultReader(reader)===!1?!1:!0}function IsReadableStreamBYOBReader(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_readIntoRequests")?!0:!1}function IsReadableStreamDefaultReader(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_readRequests")?!0:!1}function ReadableStreamReaderGenericInitialize(reader,stream){reader._ownerReadableStream=stream
stream._reader=reader
if("readable"===stream._state)defaultReaderClosedPromiseInitialize(reader)
else if("closed"===stream._state)defaultReaderClosedPromiseInitializeAsResolved(reader)
else{assert("errored"===stream._state,"state must be errored")
defaultReaderClosedPromiseInitializeAsRejected(reader,stream._storedError)
reader._closedPromise["catch"](function(){})}}function ReadableStreamReaderGenericCancel(reader,reason){var stream=reader._ownerReadableStream
assert(void 0!==stream)
return ReadableStreamCancel(stream,reason)}function ReadableStreamReaderGenericRelease(reader){assert(void 0!==reader._ownerReadableStream)
assert(reader._ownerReadableStream._reader===reader)
"readable"===reader._ownerReadableStream._state?defaultReaderClosedPromiseReject(reader,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):defaultReaderClosedPromiseResetToRejected(reader,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"))
reader._closedPromise["catch"](function(){})
reader._ownerReadableStream._reader=void 0
reader._ownerReadableStream=void 0}function ReadableStreamBYOBReaderRead(reader,view){var stream=reader._ownerReadableStream
assert(void 0!==stream)
stream._disturbed=!0
return"errored"===stream._state?Promise.reject(stream._storedError):ReadableByteStreamControllerPullInto(stream._readableStreamController,view)}function ReadableStreamDefaultReaderRead(reader){var stream=reader._ownerReadableStream
assert(void 0!==stream)
stream._disturbed=!0
if("closed"===stream._state)return Promise.resolve(CreateIterResultObject(void 0,!0))
if("errored"===stream._state)return Promise.reject(stream._storedError)
assert("readable"===stream._state)
return stream._readableStreamController.__pullSteps()}function IsReadableStreamDefaultController(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_underlyingSource")?!0:!1}function ReadableStreamDefaultControllerCallPullIfNeeded(controller){var shouldPull=ReadableStreamDefaultControllerShouldCallPull(controller)
if(shouldPull!==!1)if(controller._pulling!==!0){assert(controller._pullAgain===!1)
controller._pulling=!0
var pullPromise=PromiseInvokeOrNoop(controller._underlyingSource,"pull",[controller])
pullPromise.then(function(){controller._pulling=!1
if(controller._pullAgain===!0){controller._pullAgain=!1
return ReadableStreamDefaultControllerCallPullIfNeeded(controller)}},function(e){ReadableStreamDefaultControllerErrorIfNeeded(controller,e)})["catch"](rethrowAssertionErrorRejection)}else controller._pullAgain=!0}function ReadableStreamDefaultControllerShouldCallPull(controller){var stream=controller._controlledReadableStream
if("closed"===stream._state||"errored"===stream._state)return!1
if(controller._closeRequested===!0)return!1
if(controller._started===!1)return!1
if(IsReadableStreamLocked(stream)===!0&&ReadableStreamGetNumReadRequests(stream)>0)return!0
var desiredSize=ReadableStreamDefaultControllerGetDesiredSize(controller)
return desiredSize>0?!0:!1}function ReadableStreamDefaultControllerClose(controller){var stream=controller._controlledReadableStream
assert(controller._closeRequested===!1)
assert("readable"===stream._state)
controller._closeRequested=!0
0===controller._queue.length&&ReadableStreamClose(stream)}function ReadableStreamDefaultControllerEnqueue(controller,chunk){var stream=controller._controlledReadableStream
assert(controller._closeRequested===!1)
assert("readable"===stream._state)
if(IsReadableStreamLocked(stream)===!0&&ReadableStreamGetNumReadRequests(stream)>0)ReadableStreamFulfillReadRequest(stream,chunk,!1)
else{var chunkSize=1
if(void 0!==controller._strategySize){var strategySize=controller._strategySize
try{chunkSize=strategySize(chunk)}catch(chunkSizeE){ReadableStreamDefaultControllerErrorIfNeeded(controller,chunkSizeE)
throw chunkSizeE}}try{EnqueueValueWithSize(controller,chunk,chunkSize)}catch(enqueueE){ReadableStreamDefaultControllerErrorIfNeeded(controller,enqueueE)
throw enqueueE}}ReadableStreamDefaultControllerCallPullIfNeeded(controller)}function ReadableStreamDefaultControllerError(controller,e){var stream=controller._controlledReadableStream
assert("readable"===stream._state)
ResetQueue(controller)
ReadableStreamError(stream,e)}function ReadableStreamDefaultControllerErrorIfNeeded(controller,e){"readable"===controller._controlledReadableStream._state&&ReadableStreamDefaultControllerError(controller,e)}function ReadableStreamDefaultControllerGetDesiredSize(controller){var stream=controller._controlledReadableStream,state=stream._state
return"errored"===state?null:"closed"===state?0:controller._strategyHWM-controller._queueTotalSize}function IsReadableByteStreamController(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_underlyingByteSource")?!0:!1}function IsReadableStreamBYOBRequest(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_associatedReadableByteStreamController")?!0:!1}function ReadableByteStreamControllerCallPullIfNeeded(controller){var shouldPull=ReadableByteStreamControllerShouldCallPull(controller)
if(shouldPull!==!1)if(controller._pulling!==!0){assert(controller._pullAgain===!1)
controller._pulling=!0
var pullPromise=PromiseInvokeOrNoop(controller._underlyingByteSource,"pull",[controller])
pullPromise.then(function(){controller._pulling=!1
if(controller._pullAgain===!0){controller._pullAgain=!1
ReadableByteStreamControllerCallPullIfNeeded(controller)}},function(e){"readable"===controller._controlledReadableStream._state&&ReadableByteStreamControllerError(controller,e)})["catch"](rethrowAssertionErrorRejection)}else controller._pullAgain=!0}function ReadableByteStreamControllerClearPendingPullIntos(controller){ReadableByteStreamControllerInvalidateBYOBRequest(controller)
controller._pendingPullIntos=[]}function ReadableByteStreamControllerCommitPullIntoDescriptor(stream,pullIntoDescriptor){assert("errored"!==stream._state,"state must not be errored")
var done=!1
if("closed"===stream._state){assert(0===pullIntoDescriptor.bytesFilled)
done=!0}var filledView=ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor)
if("default"===pullIntoDescriptor.readerType)ReadableStreamFulfillReadRequest(stream,filledView,done)
else{assert("byob"===pullIntoDescriptor.readerType)
ReadableStreamFulfillReadIntoRequest(stream,filledView,done)}}function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor){var bytesFilled=pullIntoDescriptor.bytesFilled,elementSize=pullIntoDescriptor.elementSize
assert(bytesFilled<=pullIntoDescriptor.byteLength)
assert(bytesFilled%elementSize===0)
return new pullIntoDescriptor.ctor(pullIntoDescriptor.buffer,pullIntoDescriptor.byteOffset,bytesFilled/elementSize)}function ReadableByteStreamControllerEnqueueChunkToQueue(controller,buffer,byteOffset,byteLength){controller._queue.push({buffer:buffer,byteOffset:byteOffset,byteLength:byteLength})
controller._queueTotalSize+=byteLength}function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller,pullIntoDescriptor){var elementSize=pullIntoDescriptor.elementSize,currentAlignedBytes=pullIntoDescriptor.bytesFilled-pullIntoDescriptor.bytesFilled%elementSize,maxBytesToCopy=Math.min(controller._queueTotalSize,pullIntoDescriptor.byteLength-pullIntoDescriptor.bytesFilled),maxBytesFilled=pullIntoDescriptor.bytesFilled+maxBytesToCopy,maxAlignedBytes=maxBytesFilled-maxBytesFilled%elementSize,totalBytesToCopyRemaining=maxBytesToCopy,ready=!1
if(maxAlignedBytes>currentAlignedBytes){totalBytesToCopyRemaining=maxAlignedBytes-pullIntoDescriptor.bytesFilled
ready=!0}for(var queue=controller._queue;totalBytesToCopyRemaining>0;){var headOfQueue=queue[0],bytesToCopy=Math.min(totalBytesToCopyRemaining,headOfQueue.byteLength),destStart=pullIntoDescriptor.byteOffset+pullIntoDescriptor.bytesFilled
ArrayBufferCopy(pullIntoDescriptor.buffer,destStart,headOfQueue.buffer,headOfQueue.byteOffset,bytesToCopy)
if(headOfQueue.byteLength===bytesToCopy)queue.shift()
else{headOfQueue.byteOffset+=bytesToCopy
headOfQueue.byteLength-=bytesToCopy}controller._queueTotalSize-=bytesToCopy
ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller,bytesToCopy,pullIntoDescriptor)
totalBytesToCopyRemaining-=bytesToCopy}if(ready===!1){assert(0===controller._queueTotalSize,"queue must be empty")
assert(pullIntoDescriptor.bytesFilled>0)
assert(pullIntoDescriptor.bytesFilled<pullIntoDescriptor.elementSize)}return ready}function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller,size,pullIntoDescriptor){assert(0===controller._pendingPullIntos.length||controller._pendingPullIntos[0]===pullIntoDescriptor)
ReadableByteStreamControllerInvalidateBYOBRequest(controller)
pullIntoDescriptor.bytesFilled+=size}function ReadableByteStreamControllerHandleQueueDrain(controller){assert("readable"===controller._controlledReadableStream._state)
0===controller._queueTotalSize&&controller._closeRequested===!0?ReadableStreamClose(controller._controlledReadableStream):ReadableByteStreamControllerCallPullIfNeeded(controller)}function ReadableByteStreamControllerInvalidateBYOBRequest(controller){if(void 0!==controller._byobRequest){controller._byobRequest._associatedReadableByteStreamController=void 0
controller._byobRequest._view=void 0
controller._byobRequest=void 0}}function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller){assert(controller._closeRequested===!1)
for(;controller._pendingPullIntos.length>0;){if(0===controller._queueTotalSize)return
var pullIntoDescriptor=controller._pendingPullIntos[0]
if(ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller,pullIntoDescriptor)===!0){ReadableByteStreamControllerShiftPendingPullInto(controller)
ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream,pullIntoDescriptor)}}}function ReadableByteStreamControllerPullInto(controller,view){var stream=controller._controlledReadableStream,elementSize=1
view.constructor!==DataView&&(elementSize=view.constructor.BYTES_PER_ELEMENT)
var ctor=view.constructor,pullIntoDescriptor={buffer:view.buffer,byteOffset:view.byteOffset,byteLength:view.byteLength,bytesFilled:0,elementSize:elementSize,ctor:ctor,readerType:"byob"}
if(controller._pendingPullIntos.length>0){pullIntoDescriptor.buffer=TransferArrayBuffer(pullIntoDescriptor.buffer)
controller._pendingPullIntos.push(pullIntoDescriptor)
return ReadableStreamAddReadIntoRequest(stream)}if("closed"===stream._state){var emptyView=new view.constructor(pullIntoDescriptor.buffer,pullIntoDescriptor.byteOffset,0)
return Promise.resolve(CreateIterResultObject(emptyView,!0))}if(controller._queueTotalSize>0){if(ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller,pullIntoDescriptor)===!0){var filledView=ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor)
ReadableByteStreamControllerHandleQueueDrain(controller)
return Promise.resolve(CreateIterResultObject(filledView,!1))}if(controller._closeRequested===!0){var e=new TypeError("Insufficient bytes to fill elements in the given buffer")
ReadableByteStreamControllerError(controller,e)
return Promise.reject(e)}}pullIntoDescriptor.buffer=TransferArrayBuffer(pullIntoDescriptor.buffer)
controller._pendingPullIntos.push(pullIntoDescriptor)
var promise=ReadableStreamAddReadIntoRequest(stream)
ReadableByteStreamControllerCallPullIfNeeded(controller)
return promise}function ReadableByteStreamControllerRespondInClosedState(controller,firstDescriptor){firstDescriptor.buffer=TransferArrayBuffer(firstDescriptor.buffer)
assert(0===firstDescriptor.bytesFilled,"bytesFilled must be 0")
var stream=controller._controlledReadableStream
if(ReadableStreamHasBYOBReader(stream)===!0)for(;ReadableStreamGetNumReadIntoRequests(stream)>0;){var pullIntoDescriptor=ReadableByteStreamControllerShiftPendingPullInto(controller)
ReadableByteStreamControllerCommitPullIntoDescriptor(stream,pullIntoDescriptor)}}function ReadableByteStreamControllerRespondInReadableState(controller,bytesWritten,pullIntoDescriptor){if(pullIntoDescriptor.bytesFilled+bytesWritten>pullIntoDescriptor.byteLength)throw new RangeError("bytesWritten out of range")
ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller,bytesWritten,pullIntoDescriptor)
if(!(pullIntoDescriptor.bytesFilled<pullIntoDescriptor.elementSize)){ReadableByteStreamControllerShiftPendingPullInto(controller)
var remainderSize=pullIntoDescriptor.bytesFilled%pullIntoDescriptor.elementSize
if(remainderSize>0){var end=pullIntoDescriptor.byteOffset+pullIntoDescriptor.bytesFilled,remainder=pullIntoDescriptor.buffer.slice(end-remainderSize,end)
ReadableByteStreamControllerEnqueueChunkToQueue(controller,remainder,0,remainder.byteLength)}pullIntoDescriptor.buffer=TransferArrayBuffer(pullIntoDescriptor.buffer)
pullIntoDescriptor.bytesFilled-=remainderSize
ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream,pullIntoDescriptor)
ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller)}}function ReadableByteStreamControllerRespondInternal(controller,bytesWritten){var firstDescriptor=controller._pendingPullIntos[0],stream=controller._controlledReadableStream
if("closed"===stream._state){if(0!==bytesWritten)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")
ReadableByteStreamControllerRespondInClosedState(controller,firstDescriptor)}else{assert("readable"===stream._state)
ReadableByteStreamControllerRespondInReadableState(controller,bytesWritten,firstDescriptor)}}function ReadableByteStreamControllerShiftPendingPullInto(controller){var descriptor=controller._pendingPullIntos.shift()
ReadableByteStreamControllerInvalidateBYOBRequest(controller)
return descriptor}function ReadableByteStreamControllerShouldCallPull(controller){var stream=controller._controlledReadableStream
return"readable"!==stream._state?!1:controller._closeRequested===!0?!1:controller._started===!1?!1:ReadableStreamHasDefaultReader(stream)===!0&&ReadableStreamGetNumReadRequests(stream)>0?!0:ReadableStreamHasBYOBReader(stream)===!0&&ReadableStreamGetNumReadIntoRequests(stream)>0?!0:ReadableByteStreamControllerGetDesiredSize(controller)>0?!0:!1}function ReadableByteStreamControllerClose(controller){var stream=controller._controlledReadableStream
assert(controller._closeRequested===!1)
assert("readable"===stream._state)
if(controller._queueTotalSize>0)controller._closeRequested=!0
else{if(controller._pendingPullIntos.length>0){var firstPendingPullInto=controller._pendingPullIntos[0]
if(firstPendingPullInto.bytesFilled>0){var e=new TypeError("Insufficient bytes to fill elements in the given buffer")
ReadableByteStreamControllerError(controller,e)
throw e}}ReadableStreamClose(stream)}}function ReadableByteStreamControllerEnqueue(controller,chunk){var stream=controller._controlledReadableStream
assert(controller._closeRequested===!1)
assert("readable"===stream._state)
var buffer=chunk.buffer,byteOffset=chunk.byteOffset,byteLength=chunk.byteLength,transferredBuffer=TransferArrayBuffer(buffer)
if(ReadableStreamHasDefaultReader(stream)===!0)if(0===ReadableStreamGetNumReadRequests(stream))ReadableByteStreamControllerEnqueueChunkToQueue(controller,transferredBuffer,byteOffset,byteLength)
else{assert(0===controller._queue.length)
var transferredView=new Uint8Array(transferredBuffer,byteOffset,byteLength)
ReadableStreamFulfillReadRequest(stream,transferredView,!1)}else if(ReadableStreamHasBYOBReader(stream)===!0){ReadableByteStreamControllerEnqueueChunkToQueue(controller,transferredBuffer,byteOffset,byteLength)
ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller)}else{assert(IsReadableStreamLocked(stream)===!1,"stream must not be locked")
ReadableByteStreamControllerEnqueueChunkToQueue(controller,transferredBuffer,byteOffset,byteLength)}}function ReadableByteStreamControllerError(controller,e){var stream=controller._controlledReadableStream
assert("readable"===stream._state)
ReadableByteStreamControllerClearPendingPullIntos(controller)
ResetQueue(controller)
ReadableStreamError(stream,e)}function ReadableByteStreamControllerGetDesiredSize(controller){var stream=controller._controlledReadableStream,state=stream._state
return"errored"===state?null:"closed"===state?0:controller._strategyHWM-controller._queueTotalSize}function ReadableByteStreamControllerRespond(controller,bytesWritten){bytesWritten=Number(bytesWritten)
if(IsFiniteNonNegativeNumber(bytesWritten)===!1)throw new RangeError("bytesWritten must be a finite")
assert(controller._pendingPullIntos.length>0)
ReadableByteStreamControllerRespondInternal(controller,bytesWritten)}function ReadableByteStreamControllerRespondWithNewView(controller,view){assert(controller._pendingPullIntos.length>0)
var firstDescriptor=controller._pendingPullIntos[0]
if(firstDescriptor.byteOffset+firstDescriptor.bytesFilled!==view.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(firstDescriptor.byteLength!==view.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
firstDescriptor.buffer=view.buffer
ReadableByteStreamControllerRespondInternal(controller,view.byteLength)}function streamBrandCheckException(name){return new TypeError("ReadableStream.prototype."+name+" can only be used on a ReadableStream")}function readerLockException(name){return new TypeError("Cannot "+name+" a stream using a released reader")}function defaultReaderBrandCheckException(name){return new TypeError("ReadableStreamDefaultReader.prototype."+name+" can only be used on a ReadableStreamDefaultReader")}function defaultReaderClosedPromiseInitialize(reader){reader._closedPromise=new Promise(function(resolve,reject){reader._closedPromise_resolve=resolve
reader._closedPromise_reject=reject})}function defaultReaderClosedPromiseInitializeAsRejected(reader,reason){reader._closedPromise=Promise.reject(reason)
reader._closedPromise_resolve=void 0
reader._closedPromise_reject=void 0}function defaultReaderClosedPromiseInitializeAsResolved(reader){reader._closedPromise=Promise.resolve(void 0)
reader._closedPromise_resolve=void 0
reader._closedPromise_reject=void 0}function defaultReaderClosedPromiseReject(reader,reason){assert(void 0!==reader._closedPromise_resolve)
assert(void 0!==reader._closedPromise_reject)
reader._closedPromise_reject(reason)
reader._closedPromise_resolve=void 0
reader._closedPromise_reject=void 0}function defaultReaderClosedPromiseResetToRejected(reader,reason){assert(void 0===reader._closedPromise_resolve)
assert(void 0===reader._closedPromise_reject)
reader._closedPromise=Promise.reject(reason)}function defaultReaderClosedPromiseResolve(reader){assert(void 0!==reader._closedPromise_resolve)
assert(void 0!==reader._closedPromise_reject)
reader._closedPromise_resolve(void 0)
reader._closedPromise_resolve=void 0
reader._closedPromise_reject=void 0}function byobReaderBrandCheckException(name){return new TypeError("ReadableStreamBYOBReader.prototype."+name+" can only be used on a ReadableStreamBYOBReader")}function defaultControllerBrandCheckException(name){return new TypeError("ReadableStreamDefaultController.prototype."+name+" can only be used on a ReadableStreamDefaultController")}function byobRequestBrandCheckException(name){return new TypeError("ReadableStreamBYOBRequest.prototype."+name+" can only be used on a ReadableStreamBYOBRequest")}function byteStreamControllerBrandCheckException(name){return new TypeError("ReadableByteStreamController.prototype."+name+" can only be used on a ReadableByteStreamController")}function ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise){try{Promise.prototype.then.call(promise,void 0,function(){})}catch(e){}}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){protoProps&&defineProperties(Constructor.prototype,protoProps)
staticProps&&defineProperties(Constructor,staticProps)
return Constructor}}(),_require=__w_pdfjs_require__(0),ArrayBufferCopy=_require.ArrayBufferCopy,CreateIterResultObject=_require.CreateIterResultObject,IsFiniteNonNegativeNumber=_require.IsFiniteNonNegativeNumber,InvokeOrNoop=_require.InvokeOrNoop,PromiseInvokeOrNoop=_require.PromiseInvokeOrNoop,TransferArrayBuffer=_require.TransferArrayBuffer,ValidateAndNormalizeQueuingStrategy=_require.ValidateAndNormalizeQueuingStrategy,ValidateAndNormalizeHighWaterMark=_require.ValidateAndNormalizeHighWaterMark,_require2=__w_pdfjs_require__(0),createArrayFromList=_require2.createArrayFromList,createDataProperty=_require2.createDataProperty,typeIsObject=_require2.typeIsObject,_require3=__w_pdfjs_require__(1),assert=_require3.assert,rethrowAssertionErrorRejection=_require3.rethrowAssertionErrorRejection,_require4=__w_pdfjs_require__(3),DequeueValue=_require4.DequeueValue,EnqueueValueWithSize=_require4.EnqueueValueWithSize,ResetQueue=_require4.ResetQueue,_require5=__w_pdfjs_require__(2),AcquireWritableStreamDefaultWriter=_require5.AcquireWritableStreamDefaultWriter,IsWritableStream=_require5.IsWritableStream,IsWritableStreamLocked=_require5.IsWritableStreamLocked,WritableStreamAbort=_require5.WritableStreamAbort,WritableStreamDefaultWriterCloseWithErrorPropagation=_require5.WritableStreamDefaultWriterCloseWithErrorPropagation,WritableStreamDefaultWriterRelease=_require5.WritableStreamDefaultWriterRelease,WritableStreamDefaultWriterWrite=_require5.WritableStreamDefaultWriterWrite,WritableStreamCloseQueuedOrInFlight=_require5.WritableStreamCloseQueuedOrInFlight,ReadableStream=function(){function ReadableStream(){var underlyingSource=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},size=_ref.size,highWaterMark=_ref.highWaterMark
_classCallCheck(this,ReadableStream)
this._state="readable"
this._reader=void 0
this._storedError=void 0
this._disturbed=!1
this._readableStreamController=void 0
var type=underlyingSource.type,typeString=String(type)
if("bytes"===typeString){void 0===highWaterMark&&(highWaterMark=0)
this._readableStreamController=new ReadableByteStreamController(this,underlyingSource,highWaterMark)}else{if(void 0!==type)throw new RangeError("Invalid type is specified")
void 0===highWaterMark&&(highWaterMark=1)
this._readableStreamController=new ReadableStreamDefaultController(this,underlyingSource,size,highWaterMark)}}_createClass(ReadableStream,[{key:"cancel",value:function(reason){return IsReadableStream(this)===!1?Promise.reject(streamBrandCheckException("cancel")):IsReadableStreamLocked(this)===!0?Promise.reject(new TypeError("Cannot cancel a stream that already has a reader")):ReadableStreamCancel(this,reason)}},{key:"getReader",value:function(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},mode=_ref2.mode
if(IsReadableStream(this)===!1)throw streamBrandCheckException("getReader")
if(void 0===mode)return AcquireReadableStreamDefaultReader(this)
mode=String(mode)
if("byob"===mode)return AcquireReadableStreamBYOBReader(this)
throw new RangeError("Invalid mode is specified")}},{key:"pipeThrough",value:function(_ref3,options){var writable=_ref3.writable,readable=_ref3.readable,promise=this.pipeTo(writable,options)
ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise)
return readable}},{key:"pipeTo",value:function(dest){var _this=this,_ref4=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},preventClose=_ref4.preventClose,preventAbort=_ref4.preventAbort,preventCancel=_ref4.preventCancel
if(IsReadableStream(this)===!1)return Promise.reject(streamBrandCheckException("pipeTo"))
if(IsWritableStream(dest)===!1)return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"))
preventClose=Boolean(preventClose)
preventAbort=Boolean(preventAbort)
preventCancel=Boolean(preventCancel)
if(IsReadableStreamLocked(this)===!0)return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"))
if(IsWritableStreamLocked(dest)===!0)return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"))
var reader=AcquireReadableStreamDefaultReader(this),writer=AcquireWritableStreamDefaultWriter(dest),shuttingDown=!1,currentWrite=Promise.resolve()
return new Promise(function(resolve,reject){function pipeLoop(){currentWrite=Promise.resolve()
return shuttingDown===!0?Promise.resolve():writer._readyPromise.then(function(){return ReadableStreamDefaultReaderRead(reader).then(function(_ref5){var value=_ref5.value,done=_ref5.done
done!==!0&&(currentWrite=WritableStreamDefaultWriterWrite(writer,value)["catch"](function(){}))})}).then(pipeLoop)}function waitForWritesToFinish(){var oldCurrentWrite=currentWrite
return currentWrite.then(function(){return oldCurrentWrite!==currentWrite?waitForWritesToFinish():void 0})}function isOrBecomesErrored(stream,promise,action){"errored"===stream._state?action(stream._storedError):promise["catch"](action)["catch"](rethrowAssertionErrorRejection)}function isOrBecomesClosed(stream,promise,action){"closed"===stream._state?action():promise.then(action)["catch"](rethrowAssertionErrorRejection)}function shutdownWithAction(action,originalIsError,originalError){function doTheRest(){action().then(function(){return finalize(originalIsError,originalError)},function(newError){return finalize(!0,newError)})["catch"](rethrowAssertionErrorRejection)}if(shuttingDown!==!0){shuttingDown=!0
"writable"===dest._state&&WritableStreamCloseQueuedOrInFlight(dest)===!1?waitForWritesToFinish().then(doTheRest):doTheRest()}}function shutdown(isError,error){if(shuttingDown!==!0){shuttingDown=!0
"writable"===dest._state&&WritableStreamCloseQueuedOrInFlight(dest)===!1?waitForWritesToFinish().then(function(){return finalize(isError,error)})["catch"](rethrowAssertionErrorRejection):finalize(isError,error)}}function finalize(isError,error){WritableStreamDefaultWriterRelease(writer)
ReadableStreamReaderGenericRelease(reader)
isError?reject(error):resolve(void 0)}isOrBecomesErrored(_this,reader._closedPromise,function(storedError){preventAbort===!1?shutdownWithAction(function(){return WritableStreamAbort(dest,storedError)},!0,storedError):shutdown(!0,storedError)})
isOrBecomesErrored(dest,writer._closedPromise,function(storedError){preventCancel===!1?shutdownWithAction(function(){return ReadableStreamCancel(_this,storedError)},!0,storedError):shutdown(!0,storedError)})
isOrBecomesClosed(_this,reader._closedPromise,function(){preventClose===!1?shutdownWithAction(function(){return WritableStreamDefaultWriterCloseWithErrorPropagation(writer)}):shutdown()})
if(WritableStreamCloseQueuedOrInFlight(dest)===!0||"closed"===dest._state){var destClosed=new TypeError("the destination writable stream closed before all data could be piped to it")
preventCancel===!1?shutdownWithAction(function(){return ReadableStreamCancel(_this,destClosed)},!0,destClosed):shutdown(!0,destClosed)}pipeLoop()["catch"](function(err){currentWrite=Promise.resolve()
rethrowAssertionErrorRejection(err)})})}},{key:"tee",value:function(){if(IsReadableStream(this)===!1)throw streamBrandCheckException("tee")
var branches=ReadableStreamTee(this,!1)
return createArrayFromList(branches)}},{key:"locked",get:function(){if(IsReadableStream(this)===!1)throw streamBrandCheckException("locked")
return IsReadableStreamLocked(this)}}])
return ReadableStream}()
module.exports={ReadableStream:ReadableStream,IsReadableStreamDisturbed:IsReadableStreamDisturbed,ReadableStreamDefaultControllerClose:ReadableStreamDefaultControllerClose,ReadableStreamDefaultControllerEnqueue:ReadableStreamDefaultControllerEnqueue,ReadableStreamDefaultControllerError:ReadableStreamDefaultControllerError,ReadableStreamDefaultControllerGetDesiredSize:ReadableStreamDefaultControllerGetDesiredSize}
var ReadableStreamDefaultReader=function(){function ReadableStreamDefaultReader(stream){_classCallCheck(this,ReadableStreamDefaultReader)
if(IsReadableStream(stream)===!1)throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance")
if(IsReadableStreamLocked(stream)===!0)throw new TypeError("This stream has already been locked for exclusive reading by another reader")
ReadableStreamReaderGenericInitialize(this,stream)
this._readRequests=[]}_createClass(ReadableStreamDefaultReader,[{key:"cancel",value:function(reason){return IsReadableStreamDefaultReader(this)===!1?Promise.reject(defaultReaderBrandCheckException("cancel")):void 0===this._ownerReadableStream?Promise.reject(readerLockException("cancel")):ReadableStreamReaderGenericCancel(this,reason)}},{key:"read",value:function(){return IsReadableStreamDefaultReader(this)===!1?Promise.reject(defaultReaderBrandCheckException("read")):void 0===this._ownerReadableStream?Promise.reject(readerLockException("read from")):ReadableStreamDefaultReaderRead(this)}},{key:"releaseLock",value:function(){if(IsReadableStreamDefaultReader(this)===!1)throw defaultReaderBrandCheckException("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
ReadableStreamReaderGenericRelease(this)}}},{key:"closed",get:function(){return IsReadableStreamDefaultReader(this)===!1?Promise.reject(defaultReaderBrandCheckException("closed")):this._closedPromise}}])
return ReadableStreamDefaultReader}(),ReadableStreamBYOBReader=function(){function ReadableStreamBYOBReader(stream){_classCallCheck(this,ReadableStreamBYOBReader)
if(!IsReadableStream(stream))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source")
if(IsReadableByteStreamController(stream._readableStreamController)===!1)throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
if(IsReadableStreamLocked(stream))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
ReadableStreamReaderGenericInitialize(this,stream)
this._readIntoRequests=[]}_createClass(ReadableStreamBYOBReader,[{key:"cancel",value:function(reason){return IsReadableStreamBYOBReader(this)?void 0===this._ownerReadableStream?Promise.reject(readerLockException("cancel")):ReadableStreamReaderGenericCancel(this,reason):Promise.reject(byobReaderBrandCheckException("cancel"))}},{key:"read",value:function(view){return IsReadableStreamBYOBReader(this)?void 0===this._ownerReadableStream?Promise.reject(readerLockException("read from")):ArrayBuffer.isView(view)?0===view.byteLength?Promise.reject(new TypeError("view must have non-zero byteLength")):ReadableStreamBYOBReaderRead(this,view):Promise.reject(new TypeError("view must be an array buffer view")):Promise.reject(byobReaderBrandCheckException("read"))}},{key:"releaseLock",value:function(){if(!IsReadableStreamBYOBReader(this))throw byobReaderBrandCheckException("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
ReadableStreamReaderGenericRelease(this)}}},{key:"closed",get:function(){return IsReadableStreamBYOBReader(this)?this._closedPromise:Promise.reject(byobReaderBrandCheckException("closed"))}}])
return ReadableStreamBYOBReader}(),ReadableStreamDefaultController=function(){function ReadableStreamDefaultController(stream,underlyingSource,size,highWaterMark){_classCallCheck(this,ReadableStreamDefaultController)
if(IsReadableStream(stream)===!1)throw new TypeError("ReadableStreamDefaultController can only be constructed with a ReadableStream instance")
if(void 0!==stream._readableStreamController)throw new TypeError("ReadableStreamDefaultController instances can only be created by the ReadableStream constructor")
this._controlledReadableStream=stream
this._underlyingSource=underlyingSource
this._queue=void 0
this._queueTotalSize=void 0
ResetQueue(this)
this._started=!1
this._closeRequested=!1
this._pullAgain=!1
this._pulling=!1
var normalizedStrategy=ValidateAndNormalizeQueuingStrategy(size,highWaterMark)
this._strategySize=normalizedStrategy.size
this._strategyHWM=normalizedStrategy.highWaterMark
var controller=this,startResult=InvokeOrNoop(underlyingSource,"start",[this])
Promise.resolve(startResult).then(function(){controller._started=!0
assert(controller._pulling===!1)
assert(controller._pullAgain===!1)
ReadableStreamDefaultControllerCallPullIfNeeded(controller)},function(r){ReadableStreamDefaultControllerErrorIfNeeded(controller,r)})["catch"](rethrowAssertionErrorRejection)}_createClass(ReadableStreamDefaultController,[{key:"close",value:function(){if(IsReadableStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("close")
if(this._closeRequested===!0)throw new TypeError("The stream has already been closed; do not close it again!")
var state=this._controlledReadableStream._state
if("readable"!==state)throw new TypeError("The stream (in "+state+" state) is not in the readable state and cannot be closed")
ReadableStreamDefaultControllerClose(this)}},{key:"enqueue",value:function(chunk){if(IsReadableStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("enqueue")
if(this._closeRequested===!0)throw new TypeError("stream is closed or draining")
var state=this._controlledReadableStream._state
if("readable"!==state)throw new TypeError("The stream (in "+state+" state) is not in the readable state and cannot be enqueued to")
return ReadableStreamDefaultControllerEnqueue(this,chunk)}},{key:"error",value:function(e){if(IsReadableStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("error")
var stream=this._controlledReadableStream
if("readable"!==stream._state)throw new TypeError("The stream is "+stream._state+" and so cannot be errored")
ReadableStreamDefaultControllerError(this,e)}},{key:"__cancelSteps",value:function(reason){ResetQueue(this)
return PromiseInvokeOrNoop(this._underlyingSource,"cancel",[reason])}},{key:"__pullSteps",value:function(){var stream=this._controlledReadableStream
if(this._queue.length>0){var chunk=DequeueValue(this)
this._closeRequested===!0&&0===this._queue.length?ReadableStreamClose(stream):ReadableStreamDefaultControllerCallPullIfNeeded(this)
return Promise.resolve(CreateIterResultObject(chunk,!1))}var pendingPromise=ReadableStreamAddReadRequest(stream)
ReadableStreamDefaultControllerCallPullIfNeeded(this)
return pendingPromise}},{key:"desiredSize",get:function(){if(IsReadableStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("desiredSize")
return ReadableStreamDefaultControllerGetDesiredSize(this)}}])
return ReadableStreamDefaultController}(),ReadableStreamBYOBRequest=function(){function ReadableStreamBYOBRequest(controller,view){_classCallCheck(this,ReadableStreamBYOBRequest)
this._associatedReadableByteStreamController=controller
this._view=view}_createClass(ReadableStreamBYOBRequest,[{key:"respond",value:function(bytesWritten){if(IsReadableStreamBYOBRequest(this)===!1)throw byobRequestBrandCheckException("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController,bytesWritten)}},{key:"respondWithNewView",value:function(view){if(IsReadableStreamBYOBRequest(this)===!1)throw byobRequestBrandCheckException("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
if(!ArrayBuffer.isView(view))throw new TypeError("You can only respond with array buffer views")
ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController,view)}},{key:"view",get:function(){return this._view}}])
return ReadableStreamBYOBRequest}(),ReadableByteStreamController=function(){function ReadableByteStreamController(stream,underlyingByteSource,highWaterMark){_classCallCheck(this,ReadableByteStreamController)
if(IsReadableStream(stream)===!1)throw new TypeError("ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source")
if(void 0!==stream._readableStreamController)throw new TypeError("ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source")
this._controlledReadableStream=stream
this._underlyingByteSource=underlyingByteSource
this._pullAgain=!1
this._pulling=!1
ReadableByteStreamControllerClearPendingPullIntos(this)
this._queue=this._queueTotalSize=void 0
ResetQueue(this)
this._closeRequested=!1
this._started=!1
this._strategyHWM=ValidateAndNormalizeHighWaterMark(highWaterMark)
var autoAllocateChunkSize=underlyingByteSource.autoAllocateChunkSize
if(void 0!==autoAllocateChunkSize&&(Number.isInteger(autoAllocateChunkSize)===!1||0>=autoAllocateChunkSize))throw new RangeError("autoAllocateChunkSize must be a positive integer")
this._autoAllocateChunkSize=autoAllocateChunkSize
this._pendingPullIntos=[]
var controller=this,startResult=InvokeOrNoop(underlyingByteSource,"start",[this])
Promise.resolve(startResult).then(function(){controller._started=!0
assert(controller._pulling===!1)
assert(controller._pullAgain===!1)
ReadableByteStreamControllerCallPullIfNeeded(controller)},function(r){"readable"===stream._state&&ReadableByteStreamControllerError(controller,r)})["catch"](rethrowAssertionErrorRejection)}_createClass(ReadableByteStreamController,[{key:"close",value:function(){if(IsReadableByteStreamController(this)===!1)throw byteStreamControllerBrandCheckException("close")
if(this._closeRequested===!0)throw new TypeError("The stream has already been closed; do not close it again!")
var state=this._controlledReadableStream._state
if("readable"!==state)throw new TypeError("The stream (in "+state+" state) is not in the readable state and cannot be closed")
ReadableByteStreamControllerClose(this)}},{key:"enqueue",value:function(chunk){if(IsReadableByteStreamController(this)===!1)throw byteStreamControllerBrandCheckException("enqueue")
if(this._closeRequested===!0)throw new TypeError("stream is closed or draining")
var state=this._controlledReadableStream._state
if("readable"!==state)throw new TypeError("The stream (in "+state+" state) is not in the readable state and cannot be enqueued to")
if(!ArrayBuffer.isView(chunk))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController")
ReadableByteStreamControllerEnqueue(this,chunk)}},{key:"error",value:function(e){if(IsReadableByteStreamController(this)===!1)throw byteStreamControllerBrandCheckException("error")
var stream=this._controlledReadableStream
if("readable"!==stream._state)throw new TypeError("The stream is "+stream._state+" and so cannot be errored")
ReadableByteStreamControllerError(this,e)}},{key:"__cancelSteps",value:function(reason){if(this._pendingPullIntos.length>0){var firstDescriptor=this._pendingPullIntos[0]
firstDescriptor.bytesFilled=0}ResetQueue(this)
return PromiseInvokeOrNoop(this._underlyingByteSource,"cancel",[reason])}},{key:"__pullSteps",value:function(){var stream=this._controlledReadableStream
assert(ReadableStreamHasDefaultReader(stream)===!0)
if(this._queueTotalSize>0){assert(0===ReadableStreamGetNumReadRequests(stream))
var entry=this._queue.shift()
this._queueTotalSize-=entry.byteLength
ReadableByteStreamControllerHandleQueueDrain(this)
var view=void 0
try{view=new Uint8Array(entry.buffer,entry.byteOffset,entry.byteLength)}catch(viewE){return Promise.reject(viewE)}return Promise.resolve(CreateIterResultObject(view,!1))}var autoAllocateChunkSize=this._autoAllocateChunkSize
if(void 0!==autoAllocateChunkSize){var buffer=void 0
try{buffer=new ArrayBuffer(autoAllocateChunkSize)}catch(bufferE){return Promise.reject(bufferE)}var pullIntoDescriptor={buffer:buffer,byteOffset:0,byteLength:autoAllocateChunkSize,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(pullIntoDescriptor)}var promise=ReadableStreamAddReadRequest(stream)
ReadableByteStreamControllerCallPullIfNeeded(this)
return promise}},{key:"byobRequest",get:function(){if(IsReadableByteStreamController(this)===!1)throw byteStreamControllerBrandCheckException("byobRequest")
if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var firstDescriptor=this._pendingPullIntos[0],view=new Uint8Array(firstDescriptor.buffer,firstDescriptor.byteOffset+firstDescriptor.bytesFilled,firstDescriptor.byteLength-firstDescriptor.bytesFilled)
this._byobRequest=new ReadableStreamBYOBRequest(this,view)}return this._byobRequest}},{key:"desiredSize",get:function(){if(IsReadableByteStreamController(this)===!1)throw byteStreamControllerBrandCheckException("desiredSize")
return ReadableByteStreamControllerGetDesiredSize(this)}}])
return ReadableByteStreamController}()},function(module,exports,__w_pdfjs_require__){var transformStream=__w_pdfjs_require__(6),readableStream=__w_pdfjs_require__(4),writableStream=__w_pdfjs_require__(2)
exports.TransformStream=transformStream.TransformStream
exports.ReadableStream=readableStream.ReadableStream
exports.IsReadableStreamDisturbed=readableStream.IsReadableStreamDisturbed
exports.ReadableStreamDefaultControllerClose=readableStream.ReadableStreamDefaultControllerClose
exports.ReadableStreamDefaultControllerEnqueue=readableStream.ReadableStreamDefaultControllerEnqueue
exports.ReadableStreamDefaultControllerError=readableStream.ReadableStreamDefaultControllerError
exports.ReadableStreamDefaultControllerGetDesiredSize=readableStream.ReadableStreamDefaultControllerGetDesiredSize
exports.AcquireWritableStreamDefaultWriter=writableStream.AcquireWritableStreamDefaultWriter
exports.IsWritableStream=writableStream.IsWritableStream
exports.IsWritableStreamLocked=writableStream.IsWritableStreamLocked
exports.WritableStream=writableStream.WritableStream
exports.WritableStreamAbort=writableStream.WritableStreamAbort
exports.WritableStreamDefaultControllerError=writableStream.WritableStreamDefaultControllerError
exports.WritableStreamDefaultWriterCloseWithErrorPropagation=writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation
exports.WritableStreamDefaultWriterRelease=writableStream.WritableStreamDefaultWriterRelease
exports.WritableStreamDefaultWriterWrite=writableStream.WritableStreamDefaultWriterWrite},function(module,exports,__w_pdfjs_require__){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function TransformStreamCloseReadable(transformStream){if(transformStream._errored===!0)throw new TypeError("TransformStream is already errored")
if(transformStream._readableClosed===!0)throw new TypeError("Readable side is already closed")
TransformStreamCloseReadableInternal(transformStream)}function TransformStreamEnqueueToReadable(transformStream,chunk){if(transformStream._errored===!0)throw new TypeError("TransformStream is already errored")
if(transformStream._readableClosed===!0)throw new TypeError("Readable side is already closed")
var controller=transformStream._readableController
try{ReadableStreamDefaultControllerEnqueue(controller,chunk)}catch(e){transformStream._readableClosed=!0
TransformStreamErrorIfNeeded(transformStream,e)
throw transformStream._storedError}var desiredSize=ReadableStreamDefaultControllerGetDesiredSize(controller),maybeBackpressure=0>=desiredSize
maybeBackpressure===!0&&transformStream._backpressure===!1&&TransformStreamSetBackpressure(transformStream,!0)}function TransformStreamError(transformStream,e){if(transformStream._errored===!0)throw new TypeError("TransformStream is already errored")
TransformStreamErrorInternal(transformStream,e)}function TransformStreamCloseReadableInternal(transformStream){assert(transformStream._errored===!1)
assert(transformStream._readableClosed===!1)
try{ReadableStreamDefaultControllerClose(transformStream._readableController)}catch(e){assert(!1)}transformStream._readableClosed=!0}function TransformStreamErrorIfNeeded(transformStream,e){transformStream._errored===!1&&TransformStreamErrorInternal(transformStream,e)}function TransformStreamErrorInternal(transformStream,e){assert(transformStream._errored===!1)
transformStream._errored=!0
transformStream._storedError=e
transformStream._writableDone===!1&&WritableStreamDefaultControllerError(transformStream._writableController,e)
transformStream._readableClosed===!1&&ReadableStreamDefaultControllerError(transformStream._readableController,e)}function TransformStreamReadableReadyPromise(transformStream){assert(void 0!==transformStream._backpressureChangePromise,"_backpressureChangePromise should have been initialized")
if(transformStream._backpressure===!1)return Promise.resolve()
assert(transformStream._backpressure===!0,"_backpressure should have been initialized")
return transformStream._backpressureChangePromise}function TransformStreamSetBackpressure(transformStream,backpressure){assert(transformStream._backpressure!==backpressure,"TransformStreamSetBackpressure() should be called only when backpressure is changed")
void 0!==transformStream._backpressureChangePromise&&transformStream._backpressureChangePromise_resolve(backpressure)
transformStream._backpressureChangePromise=new Promise(function(resolve){transformStream._backpressureChangePromise_resolve=resolve})
transformStream._backpressureChangePromise.then(function(resolution){assert(resolution!==backpressure,"_backpressureChangePromise should be fulfilled only when backpressure is changed")})
transformStream._backpressure=backpressure}function TransformStreamDefaultTransform(chunk,transformStreamController){var transformStream=transformStreamController._controlledTransformStream
TransformStreamEnqueueToReadable(transformStream,chunk)
return Promise.resolve()}function TransformStreamTransform(transformStream,chunk){assert(transformStream._errored===!1)
assert(transformStream._transforming===!1)
assert(transformStream._backpressure===!1)
transformStream._transforming=!0
var transformer=transformStream._transformer,controller=transformStream._transformStreamController,transformPromise=PromiseInvokeOrPerformFallback(transformer,"transform",[chunk,controller],TransformStreamDefaultTransform,[chunk,controller])
return transformPromise.then(function(){transformStream._transforming=!1
return TransformStreamReadableReadyPromise(transformStream)},function(e){TransformStreamErrorIfNeeded(transformStream,e)
return Promise.reject(e)})}function IsTransformStreamDefaultController(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_controlledTransformStream")?!0:!1}function IsTransformStream(x){return typeIsObject(x)&&Object.prototype.hasOwnProperty.call(x,"_transformStreamController")?!0:!1}function defaultControllerBrandCheckException(name){return new TypeError("TransformStreamDefaultController.prototype."+name+" can only be used on a TransformStreamDefaultController")}function streamBrandCheckException(name){return new TypeError("TransformStream.prototype."+name+" can only be used on a TransformStream")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){protoProps&&defineProperties(Constructor.prototype,protoProps)
staticProps&&defineProperties(Constructor,staticProps)
return Constructor}}(),_require=__w_pdfjs_require__(1),assert=_require.assert,_require2=__w_pdfjs_require__(0),InvokeOrNoop=_require2.InvokeOrNoop,PromiseInvokeOrPerformFallback=_require2.PromiseInvokeOrPerformFallback,PromiseInvokeOrNoop=_require2.PromiseInvokeOrNoop,typeIsObject=_require2.typeIsObject,_require3=__w_pdfjs_require__(4),ReadableStream=_require3.ReadableStream,ReadableStreamDefaultControllerClose=_require3.ReadableStreamDefaultControllerClose,ReadableStreamDefaultControllerEnqueue=_require3.ReadableStreamDefaultControllerEnqueue,ReadableStreamDefaultControllerError=_require3.ReadableStreamDefaultControllerError,ReadableStreamDefaultControllerGetDesiredSize=_require3.ReadableStreamDefaultControllerGetDesiredSize,_require4=__w_pdfjs_require__(2),WritableStream=_require4.WritableStream,WritableStreamDefaultControllerError=_require4.WritableStreamDefaultControllerError,TransformStreamSink=function(){function TransformStreamSink(transformStream,startPromise){_classCallCheck(this,TransformStreamSink)
this._transformStream=transformStream
this._startPromise=startPromise}_createClass(TransformStreamSink,[{key:"start",value:function(c){var transformStream=this._transformStream
transformStream._writableController=c
return this._startPromise.then(function(){return TransformStreamReadableReadyPromise(transformStream)})}},{key:"write",value:function(chunk){var transformStream=this._transformStream
return TransformStreamTransform(transformStream,chunk)}},{key:"abort",value:function(){var transformStream=this._transformStream
transformStream._writableDone=!0
TransformStreamErrorInternal(transformStream,new TypeError("Writable side aborted"))}},{key:"close",value:function(){var transformStream=this._transformStream
assert(transformStream._transforming===!1)
transformStream._writableDone=!0
var flushPromise=PromiseInvokeOrNoop(transformStream._transformer,"flush",[transformStream._transformStreamController])
return flushPromise.then(function(){if(transformStream._errored===!0)return Promise.reject(transformStream._storedError)
transformStream._readableClosed===!1&&TransformStreamCloseReadableInternal(transformStream)
return Promise.resolve()})["catch"](function(r){TransformStreamErrorIfNeeded(transformStream,r)
return Promise.reject(transformStream._storedError)})}}])
return TransformStreamSink}(),TransformStreamSource=function(){function TransformStreamSource(transformStream,startPromise){_classCallCheck(this,TransformStreamSource)
this._transformStream=transformStream
this._startPromise=startPromise}_createClass(TransformStreamSource,[{key:"start",value:function(c){var transformStream=this._transformStream
transformStream._readableController=c
return this._startPromise.then(function(){assert(void 0!==transformStream._backpressureChangePromise,"_backpressureChangePromise should have been initialized")
if(transformStream._backpressure===!0)return Promise.resolve()
assert(transformStream._backpressure===!1,"_backpressure should have been initialized")
return transformStream._backpressureChangePromise})}},{key:"pull",value:function(){var transformStream=this._transformStream
assert(transformStream._backpressure===!0,"pull() should be never called while _backpressure is false")
assert(void 0!==transformStream._backpressureChangePromise,"_backpressureChangePromise should have been initialized")
TransformStreamSetBackpressure(transformStream,!1)
return transformStream._backpressureChangePromise}},{key:"cancel",value:function(){var transformStream=this._transformStream
transformStream._readableClosed=!0
TransformStreamErrorInternal(transformStream,new TypeError("Readable side canceled"))}}])
return TransformStreamSource}(),TransformStreamDefaultController=function(){function TransformStreamDefaultController(transformStream){_classCallCheck(this,TransformStreamDefaultController)
if(IsTransformStream(transformStream)===!1)throw new TypeError("TransformStreamDefaultController can only be constructed with a TransformStream instance")
if(void 0!==transformStream._transformStreamController)throw new TypeError("TransformStreamDefaultController instances can only be created by the TransformStream constructor")
this._controlledTransformStream=transformStream}_createClass(TransformStreamDefaultController,[{key:"enqueue",value:function(chunk){if(IsTransformStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("enqueue")
TransformStreamEnqueueToReadable(this._controlledTransformStream,chunk)}},{key:"close",value:function(){if(IsTransformStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("close")
TransformStreamCloseReadable(this._controlledTransformStream)}},{key:"error",value:function(reason){if(IsTransformStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("error")
TransformStreamError(this._controlledTransformStream,reason)}},{key:"desiredSize",get:function(){if(IsTransformStreamDefaultController(this)===!1)throw defaultControllerBrandCheckException("desiredSize")
var transformStream=this._controlledTransformStream,readableController=transformStream._readableController
return ReadableStreamDefaultControllerGetDesiredSize(readableController)}}])
return TransformStreamDefaultController}(),TransformStream=function(){function TransformStream(){var transformer=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
_classCallCheck(this,TransformStream)
this._transformer=transformer
var readableStrategy=transformer.readableStrategy,writableStrategy=transformer.writableStrategy
this._transforming=!1
this._errored=!1
this._storedError=void 0
this._writableController=void 0
this._readableController=void 0
this._transformStreamController=void 0
this._writableDone=!1
this._readableClosed=!1
this._backpressure=void 0
this._backpressureChangePromise=void 0
this._backpressureChangePromise_resolve=void 0
this._transformStreamController=new TransformStreamDefaultController(this)
var startPromise_resolve=void 0,startPromise=new Promise(function(resolve){startPromise_resolve=resolve}),source=new TransformStreamSource(this,startPromise)
this._readable=new ReadableStream(source,readableStrategy)
var sink=new TransformStreamSink(this,startPromise)
this._writable=new WritableStream(sink,writableStrategy)
assert(void 0!==this._writableController)
assert(void 0!==this._readableController)
var desiredSize=ReadableStreamDefaultControllerGetDesiredSize(this._readableController)
TransformStreamSetBackpressure(this,0>=desiredSize)
var transformStream=this,startResult=InvokeOrNoop(transformer,"start",[transformStream._transformStreamController])
startPromise_resolve(startResult)
startPromise["catch"](function(e){if(transformStream._errored===!1){transformStream._errored=!0
transformStream._storedError=e}})}_createClass(TransformStream,[{key:"readable",get:function(){if(IsTransformStream(this)===!1)throw streamBrandCheckException("readable")
return this._readable}},{key:"writable",get:function(){if(IsTransformStream(this)===!1)throw streamBrandCheckException("writable")
return this._writable}}])
return TransformStream}()
module.exports={TransformStream:TransformStream}},function(module,exports,__w_pdfjs_require__){module.exports=__w_pdfjs_require__(5)}]))},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}var isURLSupported=!1
try{if("function"==typeof URL&&"object"===_typeof(URL.prototype)&&"origin"in URL.prototype){var u=new URL("b","http://a")
u.pathname="c%20d"
isURLSupported="http://a/c%20d"===u.href}}catch(ex){}if(isURLSupported)exports.URL=URL
else{var PolyfillURL=__w_pdfjs_require__(145).URL,OriginalURL=__w_pdfjs_require__(3).URL
if(OriginalURL){PolyfillURL.createObjectURL=function(blob){return OriginalURL.createObjectURL.apply(OriginalURL,arguments)}
PolyfillURL.revokeObjectURL=function(url){OriginalURL.revokeObjectURL(url)}}exports.URL=PolyfillURL}},function(module,exports,__w_pdfjs_require__){"use strict"
!function(){function isRelativeScheme(scheme){return void 0!==relative[scheme]}function invalid(){clear.call(this)
this._isInvalid=!0}function IDNAToASCII(h){""===h&&invalid.call(this)
return h.toLowerCase()}function percentEscape(c){var unicode=c.charCodeAt(0)
return unicode>32&&127>unicode&&-1===[34,35,60,62,63,96].indexOf(unicode)?c:encodeURIComponent(c)}function percentEscapeQuery(c){var unicode=c.charCodeAt(0)
return unicode>32&&127>unicode&&-1===[34,35,60,62,96].indexOf(unicode)?c:encodeURIComponent(c)}function parse(input,stateOverride,base){function err(message){errors.push(message)}var state=stateOverride||"scheme start",cursor=0,buffer="",seenAt=!1,seenBracket=!1,errors=[]
loop:for(;(input[cursor-1]!==EOF||0===cursor)&&!this._isInvalid;){var c=input[cursor]
switch(state){case"scheme start":if(!c||!ALPHA.test(c)){if(stateOverride){err("Invalid scheme.")
break loop}buffer=""
state="no scheme"
continue}buffer+=c.toLowerCase()
state="scheme"
break
case"scheme":if(c&&ALPHANUMERIC.test(c))buffer+=c.toLowerCase()
else{if(":"!==c){if(stateOverride){if(c===EOF)break loop
err("Code point not allowed in scheme: "+c)
break loop}buffer=""
cursor=0
state="no scheme"
continue}this._scheme=buffer
buffer=""
if(stateOverride)break loop
isRelativeScheme(this._scheme)&&(this._isRelative=!0)
state="file"===this._scheme?"relative":this._isRelative&&base&&base._scheme===this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break
case"scheme data":if("?"===c){this._query="?"
state="query"}else if("#"===c){this._fragment="#"
state="fragment"}else c!==EOF&&"	"!==c&&"\n"!==c&&"\r"!==c&&(this._schemeData+=percentEscape(c))
break
case"no scheme":if(base&&isRelativeScheme(base._scheme)){state="relative"
continue}err("Missing scheme.")
invalid.call(this)
break
case"relative or authority":if("/"!==c||"/"!==input[cursor+1]){err("Expected /, got: "+c)
state="relative"
continue}state="authority ignore slashes"
break
case"relative":this._isRelative=!0
"file"!==this._scheme&&(this._scheme=base._scheme)
if(c===EOF){this._host=base._host
this._port=base._port
this._path=base._path.slice()
this._query=base._query
this._username=base._username
this._password=base._password
break loop}if("/"===c||"\\"===c){"\\"===c&&err("\\ is an invalid code point.")
state="relative slash"}else if("?"===c){this._host=base._host
this._port=base._port
this._path=base._path.slice()
this._query="?"
this._username=base._username
this._password=base._password
state="query"}else{if("#"!==c){var nextC=input[cursor+1],nextNextC=input[cursor+2]
if("file"!==this._scheme||!ALPHA.test(c)||":"!==nextC&&"|"!==nextC||nextNextC!==EOF&&"/"!==nextNextC&&"\\"!==nextNextC&&"?"!==nextNextC&&"#"!==nextNextC){this._host=base._host
this._port=base._port
this._username=base._username
this._password=base._password
this._path=base._path.slice()
this._path.pop()}state="relative path"
continue}this._host=base._host
this._port=base._port
this._path=base._path.slice()
this._query=base._query
this._fragment="#"
this._username=base._username
this._password=base._password
state="fragment"}break
case"relative slash":if("/"!==c&&"\\"!==c){if("file"!==this._scheme){this._host=base._host
this._port=base._port
this._username=base._username
this._password=base._password}state="relative path"
continue}"\\"===c&&err("\\ is an invalid code point.")
state="file"===this._scheme?"file host":"authority ignore slashes"
break
case"authority first slash":if("/"!==c){err("Expected '/', got: "+c)
state="authority ignore slashes"
continue}state="authority second slash"
break
case"authority second slash":state="authority ignore slashes"
if("/"!==c){err("Expected '/', got: "+c)
continue}break
case"authority ignore slashes":if("/"!==c&&"\\"!==c){state="authority"
continue}err("Expected authority, got: "+c)
break
case"authority":if("@"===c){if(seenAt){err("@ already seen.")
buffer+="%40"}seenAt=!0
for(var i=0;i<buffer.length;i++){var cp=buffer[i]
if("	"!==cp&&"\n"!==cp&&"\r"!==cp)if(":"!==cp||null!==this._password){var tempC=percentEscape(cp)
null!==this._password?this._password+=tempC:this._username+=tempC}else this._password=""
else err("Invalid whitespace in authority.")}buffer=""}else{if(c===EOF||"/"===c||"\\"===c||"?"===c||"#"===c){cursor-=buffer.length
buffer=""
state="host"
continue}buffer+=c}break
case"file host":if(c===EOF||"/"===c||"\\"===c||"?"===c||"#"===c){if(2!==buffer.length||!ALPHA.test(buffer[0])||":"!==buffer[1]&&"|"!==buffer[1])if(0===buffer.length)state="relative path start"
else{this._host=IDNAToASCII.call(this,buffer)
buffer=""
state="relative path start"}else state="relative path"
continue}"	"===c||"\n"===c||"\r"===c?err("Invalid whitespace in file host."):buffer+=c
break
case"host":case"hostname":if(":"!==c||seenBracket){if(c===EOF||"/"===c||"\\"===c||"?"===c||"#"===c){this._host=IDNAToASCII.call(this,buffer)
buffer=""
state="relative path start"
if(stateOverride)break loop
continue}if("	"!==c&&"\n"!==c&&"\r"!==c){"["===c?seenBracket=!0:"]"===c&&(seenBracket=!1)
buffer+=c}else err("Invalid code point in host/hostname: "+c)}else{this._host=IDNAToASCII.call(this,buffer)
buffer=""
state="port"
if("hostname"===stateOverride)break loop}break
case"port":if(/[0-9]/.test(c))buffer+=c
else{if(c===EOF||"/"===c||"\\"===c||"?"===c||"#"===c||stateOverride){if(""!==buffer){var temp=parseInt(buffer,10)
temp!==relative[this._scheme]&&(this._port=temp+"")
buffer=""}if(stateOverride)break loop
state="relative path start"
continue}"	"===c||"\n"===c||"\r"===c?err("Invalid code point in port: "+c):invalid.call(this)}break
case"relative path start":"\\"===c&&err("'\\' not allowed in path.")
state="relative path"
if("/"!==c&&"\\"!==c)continue
break
case"relative path":if(c!==EOF&&"/"!==c&&"\\"!==c&&(stateOverride||"?"!==c&&"#"!==c))"	"!==c&&"\n"!==c&&"\r"!==c&&(buffer+=percentEscape(c))
else{"\\"===c&&err("\\ not allowed in relative path.")
var tmp;(tmp=relativePathDotMapping[buffer.toLowerCase()])&&(buffer=tmp)
if(".."===buffer){this._path.pop()
"/"!==c&&"\\"!==c&&this._path.push("")}else if("."===buffer&&"/"!==c&&"\\"!==c)this._path.push("")
else if("."!==buffer){"file"===this._scheme&&0===this._path.length&&2===buffer.length&&ALPHA.test(buffer[0])&&"|"===buffer[1]&&(buffer=buffer[0]+":")
this._path.push(buffer)}buffer=""
if("?"===c){this._query="?"
state="query"}else if("#"===c){this._fragment="#"
state="fragment"}}break
case"query":if(stateOverride||"#"!==c)c!==EOF&&"	"!==c&&"\n"!==c&&"\r"!==c&&(this._query+=percentEscapeQuery(c))
else{this._fragment="#"
state="fragment"}break
case"fragment":c!==EOF&&"	"!==c&&"\n"!==c&&"\r"!==c&&(this._fragment+=c)}cursor++}}function clear(){this._scheme=""
this._schemeData=""
this._username=""
this._password=null
this._host=""
this._port=""
this._path=[]
this._query=""
this._fragment=""
this._isInvalid=!1
this._isRelative=!1}function JURL(url,base){void 0===base||base instanceof JURL||(base=new JURL(String(base)))
this._url=url
clear.call(this)
var input=url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"")
parse.call(this,input,null,base)}var relative=Object.create(null)
relative.ftp=21
relative.file=0
relative.gopher=70
relative.http=80
relative.https=443
relative.ws=80
relative.wss=443
var relativePathDotMapping=Object.create(null)
relativePathDotMapping["%2e"]="."
relativePathDotMapping[".%2e"]=".."
relativePathDotMapping["%2e."]=".."
relativePathDotMapping["%2e%2e"]=".."
var EOF,ALPHA=/[a-zA-Z]/,ALPHANUMERIC=/[a-zA-Z0-9\+\-\.]/
JURL.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url
var authority="";(""!==this._username||null!==this._password)&&(authority=this._username+(null!==this._password?":"+this._password:"")+"@")
return this.protocol+(this._isRelative?"//"+authority+this.host:"")+this.pathname+this._query+this._fragment},set href(value){clear.call(this)
parse.call(this,value)},get protocol(){return this._scheme+":"},set protocol(value){this._isInvalid||parse.call(this,value+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(value){!this._isInvalid&&this._isRelative&&parse.call(this,value,"host")},get hostname(){return this._host},set hostname(value){!this._isInvalid&&this._isRelative&&parse.call(this,value,"hostname")},get port(){return this._port},set port(value){!this._isInvalid&&this._isRelative&&parse.call(this,value,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(value){if(!this._isInvalid&&this._isRelative){this._path=[]
parse.call(this,value,"relative path start")}},get search(){return this._isInvalid||!this._query||"?"===this._query?"":this._query},set search(value){if(!this._isInvalid&&this._isRelative){this._query="?"
"?"===value[0]&&(value=value.slice(1))
parse.call(this,value,"query")}},get hash(){return this._isInvalid||!this._fragment||"#"===this._fragment?"":this._fragment},set hash(value){if(!this._isInvalid){this._fragment="#"
"#"===value[0]&&(value=value.slice(1))
parse.call(this,value,"fragment")}},get origin(){var host
if(this._isInvalid||!this._scheme)return""
switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"
case"blob":try{return new JURL(this._schemeData).origin||"null"}catch(_){}return"null"}host=this.host
return host?this._scheme+"://"+host:""}}
exports.URL=JURL}()},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error)
return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments
return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args)
_next(void 0)})}}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0
try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done);_n=!0){_arr.push(_s.value)
if(i&&_arr.length===i)break}}catch(err){_d=!0
_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){return Array.isArray(arr)?arr:void 0}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(iter){return Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter)?Array.from(iter):void 0}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i]
return arr2}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}function setPDFNetworkStreamFactory(pdfNetworkStreamFactory){createPDFNetworkStream=pdfNetworkStreamFactory}function getDocument(src){var source,task=new PDFDocumentLoadingTask
if("string"==typeof src)source={url:src}
else if((0,_util.isArrayBuffer)(src))source={data:src}
else if(src instanceof PDFDataRangeTransport)source={range:src}
else{if("object"!==_typeof(src))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object")
if(!src.url&&!src.data&&!src.range)throw new Error("Invalid parameter object: need either .data, .range or .url")
source=src}var params=Object.create(null),rangeTransport=null,worker=null
for(var key in source)if("url"!==key||"undefined"==typeof window)if("range"!==key)if("worker"!==key)if("data"!==key||source[key]instanceof Uint8Array)params[key]=source[key]
else{var pdfBytes=source[key]
if("string"==typeof pdfBytes)params[key]=(0,_util.stringToBytes)(pdfBytes)
else if("object"!==_typeof(pdfBytes)||null===pdfBytes||isNaN(pdfBytes.length)){if(!(0,_util.isArrayBuffer)(pdfBytes))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.")
params[key]=new Uint8Array(pdfBytes)}else params[key]=new Uint8Array(pdfBytes)}else worker=source[key]
else rangeTransport=source[key]
else params[key]=new _util.URL(source[key],window.location).href
params.rangeChunkSize=params.rangeChunkSize||DEFAULT_RANGE_CHUNK_SIZE
params.CMapReaderFactory=params.CMapReaderFactory||_dom_utils.DOMCMapReaderFactory
params.ignoreErrors=params.stopAtErrors!==!0
params.pdfBug=params.pdfBug===!0
var NativeImageDecoderValues=Object.values(_util.NativeImageDecoding)
void 0!==params.nativeImageDecoderSupport&&NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)||(params.nativeImageDecoderSupport=_api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport||_util.NativeImageDecoding.DECODE)
Number.isInteger(params.maxImageSize)||(params.maxImageSize=-1)
"boolean"!=typeof params.isEvalSupported&&(params.isEvalSupported=!0)
"boolean"!=typeof params.disableFontFace&&(params.disableFontFace=_api_compatibility.apiCompatibilityParams.disableFontFace||!1)
"boolean"!=typeof params.disableRange&&(params.disableRange=!1)
"boolean"!=typeof params.disableStream&&(params.disableStream=!1)
"boolean"!=typeof params.disableAutoFetch&&(params.disableAutoFetch=!1)
"boolean"!=typeof params.disableCreateObjectURL&&(params.disableCreateObjectURL=_api_compatibility.apiCompatibilityParams.disableCreateObjectURL||!1);(0,_util.setVerbosityLevel)(params.verbosity)
if(!worker){var workerParams={postMessageTransfers:params.postMessageTransfers,verbosity:params.verbosity,port:_worker_options.GlobalWorkerOptions.workerPort}
worker=workerParams.port?PDFWorker.fromPort(workerParams):new PDFWorker(workerParams)
task._worker=worker}var docId=task.docId
worker.promise.then(function(){if(task.destroyed)throw new Error("Loading aborted")
return _fetchDocument(worker,params,rangeTransport,docId).then(function(workerId){if(task.destroyed)throw new Error("Loading aborted")
var networkStream
rangeTransport?networkStream=new _transport_stream.PDFDataTransportStream({length:params.length,initialData:params.initialData,disableRange:params.disableRange,disableStream:params.disableStream},rangeTransport):params.data||(networkStream=createPDFNetworkStream({url:params.url,length:params.length,httpHeaders:params.httpHeaders,withCredentials:params.withCredentials,rangeChunkSize:params.rangeChunkSize,disableRange:params.disableRange,disableStream:params.disableStream}))
var messageHandler=new _message_handler.MessageHandler(docId,workerId,worker.port)
messageHandler.postMessageTransfers=worker.postMessageTransfers
var transport=new WorkerTransport(messageHandler,task,networkStream,params)
task._transport=transport
messageHandler.send("Ready",null)})})["catch"](task._capability.reject)
return task}function _fetchDocument(worker,source,pdfDataRangeTransport,docId){if(worker.destroyed)return Promise.reject(new Error("Worker was destroyed"))
if(pdfDataRangeTransport){source.length=pdfDataRangeTransport.length
source.initialData=pdfDataRangeTransport.initialData}return worker.messageHandler.sendWithPromise("GetDocRequest",{docId:docId,apiVersion:"2.1.266",source:{data:source.data,url:source.url,password:source.password,disableAutoFetch:source.disableAutoFetch,rangeChunkSize:source.rangeChunkSize,length:source.length},maxImageSize:source.maxImageSize,disableFontFace:source.disableFontFace,disableCreateObjectURL:source.disableCreateObjectURL,postMessageTransfers:worker.postMessageTransfers,docBaseUrl:source.docBaseUrl,nativeImageDecoderSupport:source.nativeImageDecoderSupport,ignoreErrors:source.ignoreErrors,isEvalSupported:source.isEvalSupported}).then(function(workerId){if(worker.destroyed)throw new Error("Worker was destroyed")
return workerId})}Object.defineProperty(exports,"__esModule",{value:!0})
exports.getDocument=getDocument
exports.setPDFNetworkStreamFactory=setPDFNetworkStreamFactory
exports.build=exports.version=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFWorker=exports.PDFDataRangeTransport=exports.LoopbackPort=void 0
var fallbackWorkerSrc,_regenerator=_interopRequireDefault(__w_pdfjs_require__(147)),_util=__w_pdfjs_require__(1),_dom_utils=__w_pdfjs_require__(151),_font_loader=__w_pdfjs_require__(152),_api_compatibility=__w_pdfjs_require__(153),_canvas=__w_pdfjs_require__(154),_global_scope=_interopRequireDefault(__w_pdfjs_require__(3)),_worker_options=__w_pdfjs_require__(156),_message_handler=__w_pdfjs_require__(157),_metadata=__w_pdfjs_require__(158),_transport_stream=__w_pdfjs_require__(160),_webgl=__w_pdfjs_require__(161),DEFAULT_RANGE_CHUNK_SIZE=65536,isWorkerDisabled=!1,fakeWorkerFilesLoader=null,useRequireEnsure=!1
if("undefined"==typeof window){isWorkerDisabled=!0
"undefined"==typeof require.ensure&&(require.ensure=require("node-ensure"))
useRequireEnsure=!0}else"undefined"!=typeof require&&"function"==typeof require.ensure&&(useRequireEnsure=!0)
"undefined"!=typeof requirejs&&requirejs.toUrl&&(fallbackWorkerSrc=requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"))
var dynamicLoaderSupported="undefined"!=typeof requirejs&&requirejs.load
fakeWorkerFilesLoader=useRequireEnsure?function(){return new Promise(function(resolve,reject){require.ensure([],function(){try{var worker
worker=require("./pdf.worker.js")
resolve(worker.WorkerMessageHandler)}catch(ex){reject(ex)}},reject,"pdfjsWorker")})}:dynamicLoaderSupported?function(){return new Promise(function(resolve,reject){requirejs(["pdfjs-dist/build/pdf.worker"],function(worker){try{resolve(worker.WorkerMessageHandler)}catch(ex){reject(ex)}},reject)})}:null
if(!fallbackWorkerSrc&&"object"===("undefined"==typeof document?"undefined":_typeof(document))&&"currentScript"in document){var pdfjsFilePath=document.currentScript&&document.currentScript.src
pdfjsFilePath&&(fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}var createPDFNetworkStream,PDFDocumentLoadingTask=function(){var nextDocumentId=0,PDFDocumentLoadingTask=function(){function PDFDocumentLoadingTask(){_classCallCheck(this,PDFDocumentLoadingTask)
this._capability=(0,_util.createPromiseCapability)()
this._transport=null
this._worker=null
this.docId="d"+nextDocumentId++
this.destroyed=!1
this.onPassword=null
this.onProgress=null
this.onUnsupportedFeature=null}_createClass(PDFDocumentLoadingTask,[{key:"destroy",value:function(){var _this=this
this.destroyed=!0
var transportDestroyed=this._transport?this._transport.destroy():Promise.resolve()
return transportDestroyed.then(function(){_this._transport=null
if(_this._worker){_this._worker.destroy()
_this._worker=null}})}},{key:"then",value:function(onFulfilled,onRejected){(0,_util.deprecated)("PDFDocumentLoadingTask.then method, use the `promise` getter instead.")
return this.promise.then.apply(this.promise,arguments)}},{key:"promise",get:function(){return this._capability.promise}}])
return PDFDocumentLoadingTask}()
return PDFDocumentLoadingTask}(),PDFDataRangeTransport=function(){function PDFDataRangeTransport(length,initialData){_classCallCheck(this,PDFDataRangeTransport)
this.length=length
this.initialData=initialData
this._rangeListeners=[]
this._progressListeners=[]
this._progressiveReadListeners=[]
this._readyCapability=(0,_util.createPromiseCapability)()}_createClass(PDFDataRangeTransport,[{key:"addRangeListener",value:function(listener){this._rangeListeners.push(listener)}},{key:"addProgressListener",value:function(listener){this._progressListeners.push(listener)}},{key:"addProgressiveReadListener",value:function(listener){this._progressiveReadListeners.push(listener)}},{key:"onDataRange",value:function(begin,chunk){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0
try{for(var _step,_iterator=this._rangeListeners[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var listener=_step.value
listener(begin,chunk)}}catch(err){_didIteratorError=!0
_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator["return"]||_iterator["return"]()}finally{if(_didIteratorError)throw _iteratorError}}}},{key:"onDataProgress",value:function(loaded){var _this2=this
this._readyCapability.promise.then(function(){var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0
try{for(var _step2,_iterator2=_this2._progressListeners[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var listener=_step2.value
listener(loaded)}}catch(err){_didIteratorError2=!0
_iteratorError2=err}finally{try{_iteratorNormalCompletion2||null==_iterator2["return"]||_iterator2["return"]()}finally{if(_didIteratorError2)throw _iteratorError2}}})}},{key:"onDataProgressiveRead",value:function(chunk){var _this3=this
this._readyCapability.promise.then(function(){var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0
try{for(var _step3,_iterator3=_this3._progressiveReadListeners[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){var listener=_step3.value
listener(chunk)}}catch(err){_didIteratorError3=!0
_iteratorError3=err}finally{try{_iteratorNormalCompletion3||null==_iterator3["return"]||_iterator3["return"]()}finally{if(_didIteratorError3)throw _iteratorError3}}})}},{key:"transportReady",value:function(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function(begin,end){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function(){}}])
return PDFDataRangeTransport}()
exports.PDFDataRangeTransport=PDFDataRangeTransport
var PDFDocumentProxy=function(){function PDFDocumentProxy(pdfInfo,transport,loadingTask){_classCallCheck(this,PDFDocumentProxy)
this.loadingTask=loadingTask
this._pdfInfo=pdfInfo
this._transport=transport}_createClass(PDFDocumentProxy,[{key:"getPage",value:function(pageNumber){return this._transport.getPage(pageNumber)}},{key:"getPageIndex",value:function(ref){return this._transport.getPageIndex(ref)}},{key:"getDestinations",value:function(){return this._transport.getDestinations()}},{key:"getDestination",value:function(id){return this._transport.getDestination(id)}},{key:"getPageLabels",value:function(){return this._transport.getPageLabels()}},{key:"getPageMode",value:function(){return this._transport.getPageMode()}},{key:"getOpenActionDestination",value:function(){return this._transport.getOpenActionDestination()}},{key:"getAttachments",value:function(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function(){return this._transport.getJavaScript()}},{key:"getOutline",value:function(){return this._transport.getOutline()}},{key:"getPermissions",value:function(){return this._transport.getPermissions()}},{key:"getMetadata",value:function(){return this._transport.getMetadata()}},{key:"getData",value:function(){return this._transport.getData()}},{key:"getDownloadInfo",value:function(){return this._transport.downloadInfoCapability.promise}},{key:"getStats",value:function(){return this._transport.getStats()}},{key:"cleanup",value:function(){this._transport.startCleanup()}},{key:"destroy",value:function(){return this.loadingTask.destroy()}},{key:"numPages",get:function(){return this._pdfInfo.numPages}},{key:"fingerprint",get:function(){return this._pdfInfo.fingerprint}},{key:"loadingParams",get:function(){return this._transport.loadingParams}}])
return PDFDocumentProxy}()
exports.PDFDocumentProxy=PDFDocumentProxy
var PDFPageProxy=function(){function PDFPageProxy(pageIndex,pageInfo,transport){var pdfBug=arguments.length>3&&void 0!==arguments[3]?arguments[3]:!1
_classCallCheck(this,PDFPageProxy)
this.pageIndex=pageIndex
this._pageInfo=pageInfo
this._transport=transport
this._stats=pdfBug?new _dom_utils.StatTimer:_dom_utils.DummyStatTimer
this._pdfBug=pdfBug
this.commonObjs=transport.commonObjs
this.objs=new PDFObjects
this.cleanupAfterRender=!1
this.pendingCleanup=!1
this.intentStates=Object.create(null)
this.destroyed=!1}_createClass(PDFPageProxy,[{key:"getViewport",value:function(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},scale=_ref.scale,_ref$rotation=_ref.rotation,rotation=void 0===_ref$rotation?this.rotate:_ref$rotation,_ref$dontFlip=_ref.dontFlip,dontFlip=void 0===_ref$dontFlip?!1:_ref$dontFlip
if(arguments.length>1||"number"==typeof arguments[0]){(0,_util.deprecated)("getViewport is called with obsolete arguments.")
scale=arguments[0]
rotation="number"==typeof arguments[1]?arguments[1]:this.rotate
dontFlip="boolean"==typeof arguments[2]?arguments[2]:!1}return new _dom_utils.PageViewport({viewBox:this.view,scale:scale,rotation:rotation,dontFlip:dontFlip})}},{key:"getAnnotations",value:function(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref2$intent=_ref2.intent,intent=void 0===_ref2$intent?null:_ref2$intent
if(!this.annotationsPromise||this.annotationsIntent!==intent){this.annotationsPromise=this._transport.getAnnotations(this.pageIndex,intent)
this.annotationsIntent=intent}return this.annotationsPromise}},{key:"render",value:function(_ref3){var _this4=this,canvasContext=_ref3.canvasContext,viewport=_ref3.viewport,_ref3$intent=_ref3.intent,intent=void 0===_ref3$intent?"display":_ref3$intent,_ref3$enableWebGL=_ref3.enableWebGL,enableWebGL=void 0===_ref3$enableWebGL?!1:_ref3$enableWebGL,_ref3$renderInteracti=_ref3.renderInteractiveForms,renderInteractiveForms=void 0===_ref3$renderInteracti?!1:_ref3$renderInteracti,_ref3$transform=_ref3.transform,transform=void 0===_ref3$transform?null:_ref3$transform,_ref3$imageLayer=_ref3.imageLayer,imageLayer=void 0===_ref3$imageLayer?null:_ref3$imageLayer,_ref3$canvasFactory=_ref3.canvasFactory,canvasFactory=void 0===_ref3$canvasFactory?null:_ref3$canvasFactory,_ref3$background=_ref3.background,background=void 0===_ref3$background?null:_ref3$background,stats=this._stats
stats.time("Overall")
this.pendingCleanup=!1
var renderingIntent="print"===intent?"print":"display",canvasFactoryInstance=canvasFactory||new _dom_utils.DOMCanvasFactory,webGLContext=new _webgl.WebGLContext({enable:enableWebGL})
this.intentStates[renderingIntent]||(this.intentStates[renderingIntent]=Object.create(null))
var intentState=this.intentStates[renderingIntent]
if(!intentState.displayReadyCapability){intentState.receivingOperatorList=!0
intentState.displayReadyCapability=(0,_util.createPromiseCapability)()
intentState.operatorList={fnArray:[],argsArray:[],lastChunk:!1}
stats.time("Page Request")
this._transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageNumber-1,intent:renderingIntent,renderInteractiveForms:renderInteractiveForms===!0})}var complete=function(error){var i=intentState.renderTasks.indexOf(internalRenderTask)
i>=0&&intentState.renderTasks.splice(i,1)
_this4.cleanupAfterRender&&(_this4.pendingCleanup=!0)
_this4._tryCleanup()
error?internalRenderTask.capability.reject(error):internalRenderTask.capability.resolve()
stats.timeEnd("Rendering")
stats.timeEnd("Overall")},internalRenderTask=new InternalRenderTask({callback:complete,params:{canvasContext:canvasContext,viewport:viewport,transform:transform,imageLayer:imageLayer,background:background},objs:this.objs,commonObjs:this.commonObjs,operatorList:intentState.operatorList,pageNumber:this.pageNumber,canvasFactory:canvasFactoryInstance,webGLContext:webGLContext,useRequestAnimationFrame:"print"!==renderingIntent,pdfBug:this._pdfBug})
intentState.renderTasks||(intentState.renderTasks=[])
intentState.renderTasks.push(internalRenderTask)
var renderTask=internalRenderTask.task
intentState.displayReadyCapability.promise.then(function(transparency){if(_this4.pendingCleanup)complete()
else{stats.time("Rendering")
internalRenderTask.initializeGraphics(transparency)
internalRenderTask.operatorListChanged()}})["catch"](complete)
return renderTask}},{key:"getOperatorList",value:function(){function operatorListChanged(){if(intentState.operatorList.lastChunk){intentState.opListReadCapability.resolve(intentState.operatorList)
var i=intentState.renderTasks.indexOf(opListTask)
i>=0&&intentState.renderTasks.splice(i,1)}}var renderingIntent="oplist"
this.intentStates[renderingIntent]||(this.intentStates[renderingIntent]=Object.create(null))
var opListTask,intentState=this.intentStates[renderingIntent]
if(!intentState.opListReadCapability){opListTask={}
opListTask.operatorListChanged=operatorListChanged
intentState.receivingOperatorList=!0
intentState.opListReadCapability=(0,_util.createPromiseCapability)()
intentState.renderTasks=[]
intentState.renderTasks.push(opListTask)
intentState.operatorList={fnArray:[],argsArray:[],lastChunk:!1}
this._stats.time("Page Request")
this._transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageIndex,intent:renderingIntent})}return intentState.opListReadCapability.promise}},{key:"streamTextContent",value:function(){var _ref4=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref4$normalizeWhites=_ref4.normalizeWhitespace,normalizeWhitespace=void 0===_ref4$normalizeWhites?!1:_ref4$normalizeWhites,_ref4$disableCombineT=_ref4.disableCombineTextItems,disableCombineTextItems=void 0===_ref4$disableCombineT?!1:_ref4$disableCombineT,TEXT_CONTENT_CHUNK_SIZE=100
return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this.pageNumber-1,normalizeWhitespace:normalizeWhitespace===!0,combineTextItems:disableCombineTextItems!==!0},{highWaterMark:TEXT_CONTENT_CHUNK_SIZE,size:function(textContent){return textContent.items.length}})}},{key:"getTextContent",value:function(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},readableStream=this.streamTextContent(params)
return new Promise(function(resolve,reject){function pump(){reader.read().then(function(_ref5){var _textContent$items,value=_ref5.value,done=_ref5.done
if(done)resolve(textContent)
else{Object.assign(textContent.styles,value.styles);(_textContent$items=textContent.items).push.apply(_textContent$items,_toConsumableArray(value.items))
pump()}},reject)}var reader=readableStream.getReader(),textContent={items:[],styles:Object.create(null)}
pump()})}},{key:"_destroy",value:function(){this.destroyed=!0
this._transport.pageCache[this.pageIndex]=null
var waitOn=[]
Object.keys(this.intentStates).forEach(function(intent){if("oplist"!==intent){var intentState=this.intentStates[intent]
intentState.renderTasks.forEach(function(renderTask){var renderCompleted=renderTask.capability.promise["catch"](function(){})
waitOn.push(renderCompleted)
renderTask.cancel()})}},this)
this.objs.clear()
this.annotationsPromise=null
this.pendingCleanup=!1
return Promise.all(waitOn)}},{key:"cleanup",value:function(){var resetStats=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1
this.pendingCleanup=!0
this._tryCleanup(resetStats)}},{key:"_tryCleanup",value:function(){var resetStats=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1
if(this.pendingCleanup&&!Object.keys(this.intentStates).some(function(intent){var intentState=this.intentStates[intent]
return 0!==intentState.renderTasks.length||intentState.receivingOperatorList},this)){Object.keys(this.intentStates).forEach(function(intent){delete this.intentStates[intent]},this)
this.objs.clear()
this.annotationsPromise=null
resetStats&&this._stats instanceof _dom_utils.StatTimer&&(this._stats=new _dom_utils.StatTimer)
this.pendingCleanup=!1}}},{key:"_startRenderPage",value:function(transparency,intent){var intentState=this.intentStates[intent]
intentState.displayReadyCapability&&intentState.displayReadyCapability.resolve(transparency)}},{key:"_renderPageChunk",value:function(operatorListChunk,intent){for(var intentState=this.intentStates[intent],i=0,ii=operatorListChunk.length;ii>i;i++){intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i])
intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i])}intentState.operatorList.lastChunk=operatorListChunk.lastChunk
for(var _i=0;_i<intentState.renderTasks.length;_i++)intentState.renderTasks[_i].operatorListChanged()
if(operatorListChunk.lastChunk){intentState.receivingOperatorList=!1
this._tryCleanup()}}},{key:"pageNumber",get:function(){return this.pageIndex+1}},{key:"rotate",get:function(){return this._pageInfo.rotate}},{key:"ref",get:function(){return this._pageInfo.ref}},{key:"userUnit",get:function(){return this._pageInfo.userUnit}},{key:"view",get:function(){return this._pageInfo.view}},{key:"stats",get:function(){return this._stats instanceof _dom_utils.StatTimer?this._stats:null}}])
return PDFPageProxy}()
exports.PDFPageProxy=PDFPageProxy
var LoopbackPort=function(){function LoopbackPort(){var defer=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!0
_classCallCheck(this,LoopbackPort)
this._listeners=[]
this._defer=defer
this._deferred=Promise.resolve(void 0)}_createClass(LoopbackPort,[{key:"postMessage",value:function(obj,transfers){function cloneValue(value){if("object"!==_typeof(value)||null===value)return value
if(cloned.has(value))return cloned.get(value)
var buffer,result
if((buffer=value.buffer)&&(0,_util.isArrayBuffer)(buffer)){var transferable=transfers&&transfers.includes(buffer)
result=value===buffer?value:transferable?new value.constructor(buffer,value.byteOffset,value.byteLength):new value.constructor(value)
cloned.set(value,result)
return result}result=Array.isArray(value)?[]:{}
cloned.set(value,result)
for(var i in value){for(var desc=void 0,p=value;!(desc=Object.getOwnPropertyDescriptor(p,i));)p=Object.getPrototypeOf(p)
"undefined"!=typeof desc.value&&"function"!=typeof desc.value&&(result[i]=cloneValue(desc.value))}return result}var _this5=this
if(this._defer){var cloned=new WeakMap,e={data:cloneValue(obj)}
this._deferred.then(function(){_this5._listeners.forEach(function(listener){listener.call(this,e)},_this5)})}else this._listeners.forEach(function(listener){listener.call(this,{data:obj})},this)}},{key:"addEventListener",value:function(name,listener){this._listeners.push(listener)}},{key:"removeEventListener",value:function(name,listener){var i=this._listeners.indexOf(listener)
this._listeners.splice(i,1)}},{key:"terminate",value:function(){this._listeners=[]}}])
return LoopbackPort}()
exports.LoopbackPort=LoopbackPort
var PDFWorker=function(){function _getWorkerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc
if("undefined"!=typeof fallbackWorkerSrc)return fallbackWorkerSrc
throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}function getMainThreadWorkerMessageHandler(){try{if("undefined"!=typeof window)return window.pdfjsWorker&&window.pdfjsWorker.WorkerMessageHandler}catch(ex){}return null}function setupFakeWorkerGlobal(){if(fakeWorkerFilesLoadedCapability)return fakeWorkerFilesLoadedCapability.promise
fakeWorkerFilesLoadedCapability=(0,_util.createPromiseCapability)()
var mainWorkerMessageHandler=getMainThreadWorkerMessageHandler()
if(mainWorkerMessageHandler){fakeWorkerFilesLoadedCapability.resolve(mainWorkerMessageHandler)
return fakeWorkerFilesLoadedCapability.promise}var loader=fakeWorkerFilesLoader||function(){return(0,_dom_utils.loadScript)(_getWorkerSrc()).then(function(){return window.pdfjsWorker.WorkerMessageHandler})}
loader().then(fakeWorkerFilesLoadedCapability.resolve,fakeWorkerFilesLoadedCapability.reject)
return fakeWorkerFilesLoadedCapability.promise}function createCDNWrapper(url){var wrapper="importScripts('"+url+"');"
return _util.URL.createObjectURL(new Blob([wrapper]))}var fakeWorkerFilesLoadedCapability,pdfWorkerPorts=new WeakMap,nextFakeWorkerId=0,PDFWorker=function(){function PDFWorker(){var _ref6=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref6$name=_ref6.name,name=void 0===_ref6$name?null:_ref6$name,_ref6$port=_ref6.port,port=void 0===_ref6$port?null:_ref6$port,_ref6$postMessageTran=_ref6.postMessageTransfers,postMessageTransfers=void 0===_ref6$postMessageTran?!0:_ref6$postMessageTran,_ref6$verbosity=_ref6.verbosity,verbosity=void 0===_ref6$verbosity?(0,_util.getVerbosityLevel)():_ref6$verbosity
_classCallCheck(this,PDFWorker)
if(port&&pdfWorkerPorts.has(port))throw new Error("Cannot use more than one PDFWorker per port")
this.name=name
this.destroyed=!1
this.postMessageTransfers=postMessageTransfers!==!1
this.verbosity=verbosity
this._readyCapability=(0,_util.createPromiseCapability)()
this._port=null
this._webWorker=null
this._messageHandler=null
if(port){pdfWorkerPorts.set(port,this)
this._initializeFromPort(port)}else this._initialize()}_createClass(PDFWorker,[{key:"_initializeFromPort",value:function(port){this._port=port
this._messageHandler=new _message_handler.MessageHandler("main","worker",port)
this._messageHandler.on("ready",function(){})
this._readyCapability.resolve()}},{key:"_initialize",value:function(){var _this6=this
if("undefined"!=typeof Worker&&!isWorkerDisabled&&!getMainThreadWorkerMessageHandler()){var workerSrc=_getWorkerSrc()
try{(0,_util.isSameOrigin)(window.location.href,workerSrc)||(workerSrc=createCDNWrapper(new _util.URL(workerSrc,window.location).href))
var worker=new Worker(workerSrc),messageHandler=new _message_handler.MessageHandler("main","worker",worker),terminateEarly=function(){worker.removeEventListener("error",onWorkerError)
messageHandler.destroy()
worker.terminate()
_this6.destroyed?_this6._readyCapability.reject(new Error("Worker was destroyed")):_this6._setupFakeWorker()},onWorkerError=function(){_this6._webWorker||terminateEarly()}
worker.addEventListener("error",onWorkerError)
messageHandler.on("test",function(data){worker.removeEventListener("error",onWorkerError)
if(_this6.destroyed)terminateEarly()
else if(data&&data.supportTypedArray){_this6._messageHandler=messageHandler
_this6._port=worker
_this6._webWorker=worker
data.supportTransfers||(_this6.postMessageTransfers=!1)
_this6._readyCapability.resolve()
messageHandler.send("configure",{verbosity:_this6.verbosity})}else{_this6._setupFakeWorker()
messageHandler.destroy()
worker.terminate()}})
messageHandler.on("ready",function(data){worker.removeEventListener("error",onWorkerError)
if(_this6.destroyed)terminateEarly()
else try{sendTest()}catch(e){_this6._setupFakeWorker()}})
var sendTest=function(){var testObj=new Uint8Array([_this6.postMessageTransfers?255:0])
try{messageHandler.send("test",testObj,[testObj.buffer])}catch(ex){(0,_util.info)("Cannot use postMessage transfers")
testObj[0]=0
messageHandler.send("test",testObj)}}
sendTest()
return}catch(e){(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function(){var _this7=this
if(!isWorkerDisabled){(0,_util.warn)("Setting up fake worker.")
isWorkerDisabled=!0}setupFakeWorkerGlobal().then(function(WorkerMessageHandler){if(_this7.destroyed)_this7._readyCapability.reject(new Error("Worker was destroyed"))
else{var port=new LoopbackPort
_this7._port=port
var id="fake"+nextFakeWorkerId++,workerHandler=new _message_handler.MessageHandler(id+"_worker",id,port)
WorkerMessageHandler.setup(workerHandler,port)
var messageHandler=new _message_handler.MessageHandler(id,id+"_worker",port)
_this7._messageHandler=messageHandler
_this7._readyCapability.resolve()}})["catch"](function(reason){_this7._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(reason.message,'".')))})}},{key:"destroy",value:function(){this.destroyed=!0
if(this._webWorker){this._webWorker.terminate()
this._webWorker=null}pdfWorkerPorts["delete"](this._port)
this._port=null
if(this._messageHandler){this._messageHandler.destroy()
this._messageHandler=null}}},{key:"promise",get:function(){return this._readyCapability.promise}},{key:"port",get:function(){return this._port}},{key:"messageHandler",get:function(){return this._messageHandler}}],[{key:"fromPort",value:function(params){if(!params||!params.port)throw new Error("PDFWorker.fromPort - invalid method signature.")
return pdfWorkerPorts.has(params.port)?pdfWorkerPorts.get(params.port):new PDFWorker(params)}},{key:"getWorkerSrc",value:function(){return _getWorkerSrc()}}])
return PDFWorker}()
return PDFWorker}()
exports.PDFWorker=PDFWorker
var WorkerTransport=function(){function WorkerTransport(messageHandler,loadingTask,networkStream,params){_classCallCheck(this,WorkerTransport)
this.messageHandler=messageHandler
this.loadingTask=loadingTask
this.commonObjs=new PDFObjects
this.fontLoader=new _font_loader.FontLoader({docId:loadingTask.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this)})
this._params=params
this.CMapReaderFactory=new params.CMapReaderFactory({baseUrl:params.cMapUrl,isCompressed:params.cMapPacked})
this.destroyed=!1
this.destroyCapability=null
this._passwordCapability=null
this._networkStream=networkStream
this._fullReader=null
this._lastProgress=null
this.pageCache=[]
this.pagePromises=[]
this.downloadInfoCapability=(0,_util.createPromiseCapability)()
this.setupMessageHandler()}_createClass(WorkerTransport,[{key:"destroy",value:function(){var _this8=this
if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0
this.destroyCapability=(0,_util.createPromiseCapability)()
this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var waitOn=[]
this.pageCache.forEach(function(page){page&&waitOn.push(page._destroy())})
this.pageCache=[]
this.pagePromises=[]
var terminated=this.messageHandler.sendWithPromise("Terminate",null)
waitOn.push(terminated)
Promise.all(waitOn).then(function(){_this8.fontLoader.clear()
_this8._networkStream&&_this8._networkStream.cancelAllRequests()
if(_this8.messageHandler){_this8.messageHandler.destroy()
_this8.messageHandler=null}_this8.destroyCapability.resolve()},this.destroyCapability.reject)
return this.destroyCapability.promise}},{key:"setupMessageHandler",value:function(){var messageHandler=this.messageHandler,loadingTask=this.loadingTask
messageHandler.on("GetReader",function(data,sink){var _this9=this;(0,_util.assert)(this._networkStream)
this._fullReader=this._networkStream.getFullReader()
this._fullReader.onProgress=function(evt){_this9._lastProgress={loaded:evt.loaded,total:evt.total}}
sink.onPull=function(){_this9._fullReader.read().then(function(_ref7){var value=_ref7.value,done=_ref7.done
if(done)sink.close()
else{(0,_util.assert)((0,_util.isArrayBuffer)(value))
sink.enqueue(new Uint8Array(value),1,[value])}})["catch"](function(reason){sink.error(reason)})}
sink.onCancel=function(reason){_this9._fullReader.cancel(reason)}},this)
messageHandler.on("ReaderHeadersReady",function(data){var _this10=this,headersCapability=(0,_util.createPromiseCapability)(),fullReader=this._fullReader
fullReader.headersReady.then(function(){if(!fullReader.isStreamingSupported||!fullReader.isRangeSupported){_this10._lastProgress&&loadingTask.onProgress&&loadingTask.onProgress(_this10._lastProgress)
fullReader.onProgress=function(evt){loadingTask.onProgress&&loadingTask.onProgress({loaded:evt.loaded,total:evt.total})}}headersCapability.resolve({isStreamingSupported:fullReader.isStreamingSupported,isRangeSupported:fullReader.isRangeSupported,contentLength:fullReader.contentLength})},headersCapability.reject)
return headersCapability.promise},this)
messageHandler.on("GetRangeReader",function(data,sink){(0,_util.assert)(this._networkStream)
var rangeReader=this._networkStream.getRangeReader(data.begin,data.end)
sink.onPull=function(){rangeReader.read().then(function(_ref8){var value=_ref8.value,done=_ref8.done
if(done)sink.close()
else{(0,_util.assert)((0,_util.isArrayBuffer)(value))
sink.enqueue(new Uint8Array(value),1,[value])}})["catch"](function(reason){sink.error(reason)})}
sink.onCancel=function(reason){rangeReader.cancel(reason)}},this)
messageHandler.on("GetDoc",function(_ref9){var pdfInfo=_ref9.pdfInfo
this.numPages=pdfInfo.numPages
this.pdfDocument=new PDFDocumentProxy(pdfInfo,this,loadingTask)
loadingTask._capability.resolve(this.pdfDocument)},this)
messageHandler.on("PasswordRequest",function(exception){var _this11=this
this._passwordCapability=(0,_util.createPromiseCapability)()
if(loadingTask.onPassword){var updatePassword=function(password){_this11._passwordCapability.resolve({password:password})}
try{loadingTask.onPassword(updatePassword,exception.code)}catch(ex){this._passwordCapability.reject(ex)}}else this._passwordCapability.reject(new _util.PasswordException(exception.message,exception.code))
return this._passwordCapability.promise},this)
messageHandler.on("PasswordException",function(exception){loadingTask._capability.reject(new _util.PasswordException(exception.message,exception.code))},this)
messageHandler.on("InvalidPDF",function(exception){loadingTask._capability.reject(new _util.InvalidPDFException(exception.message))},this)
messageHandler.on("MissingPDF",function(exception){loadingTask._capability.reject(new _util.MissingPDFException(exception.message))},this)
messageHandler.on("UnexpectedResponse",function(exception){loadingTask._capability.reject(new _util.UnexpectedResponseException(exception.message,exception.status))},this)
messageHandler.on("UnknownError",function(exception){loadingTask._capability.reject(new _util.UnknownErrorException(exception.message,exception.details))},this)
messageHandler.on("DataLoaded",function(data){loadingTask.onProgress&&loadingTask.onProgress({loaded:data.length,total:data.length})
this.downloadInfoCapability.resolve(data)},this)
messageHandler.on("StartRenderPage",function(data){if(!this.destroyed){var page=this.pageCache[data.pageIndex]
page._stats.timeEnd("Page Request")
page._startRenderPage(data.transparency,data.intent)}},this)
messageHandler.on("RenderPageChunk",function(data){if(!this.destroyed){var page=this.pageCache[data.pageIndex]
page._renderPageChunk(data.operatorList,data.intent)}},this)
messageHandler.on("commonobj",function(data){var _this12=this
if(!this.destroyed){var _data=_slicedToArray(data,3),id=_data[0],type=_data[1],exportedData=_data[2]
if(!this.commonObjs.has(id))switch(type){case"Font":var params=this._params
if("error"in exportedData){var exportedError=exportedData.error;(0,_util.warn)("Error during font loading: ".concat(exportedError))
this.commonObjs.resolve(id,exportedError)
break}var fontRegistry=null
params.pdfBug&&_global_scope["default"].FontInspector&&_global_scope["default"].FontInspector.enabled&&(fontRegistry={registerFont:function(font,url){_global_scope["default"].FontInspector.fontAdded(font,url)}})
var font=new _font_loader.FontFaceObject(exportedData,{isEvalSupported:params.isEvalSupported,disableFontFace:params.disableFontFace,ignoreErrors:params.ignoreErrors,onUnsupportedFeature:this._onUnsupportedFeature.bind(this),fontRegistry:fontRegistry})
this.fontLoader.bind(font).then(function(){_this12.commonObjs.resolve(id,font)},function(reason){messageHandler.sendWithPromise("FontFallback",{id:id})["finally"](function(){_this12.commonObjs.resolve(id,font)})})
break
case"FontPath":this.commonObjs.resolve(id,exportedData)
break
default:throw new Error("Got unknown common object type ".concat(type))}}},this)
messageHandler.on("obj",function(data){if(!this.destroyed){var _data2=_slicedToArray(data,4),id=_data2[0],pageIndex=_data2[1],type=_data2[2],imageData=_data2[3],pageProxy=this.pageCache[pageIndex]
if(!pageProxy.objs.has(id))switch(type){case"JpegStream":return new Promise(function(resolve,reject){var img=new Image
img.onload=function(){resolve(img)}
img.onerror=function(){reject(new Error("Error during JPEG image loading"))}
img.src=imageData}).then(function(img){pageProxy.objs.resolve(id,img)})
case"Image":pageProxy.objs.resolve(id,imageData)
var MAX_IMAGE_SIZE_TO_STORE=8e6
imageData&&"data"in imageData&&imageData.data.length>MAX_IMAGE_SIZE_TO_STORE&&(pageProxy.cleanupAfterRender=!0)
break
default:throw new Error("Got unknown object type ".concat(type))}}},this)
messageHandler.on("DocProgress",function(data){this.destroyed||loadingTask.onProgress&&loadingTask.onProgress({loaded:data.loaded,total:data.total})},this)
messageHandler.on("PageError",function(data){if(!this.destroyed){var page=this.pageCache[data.pageNum-1],intentState=page.intentStates[data.intent]
if(!intentState.displayReadyCapability)throw new Error(data.error)
intentState.displayReadyCapability.reject(data.error)
if(intentState.operatorList){intentState.operatorList.lastChunk=!0
for(var i=0;i<intentState.renderTasks.length;i++)intentState.renderTasks[i].operatorListChanged()}}},this)
messageHandler.on("UnsupportedFeature",this._onUnsupportedFeature,this)
messageHandler.on("JpegDecode",function(data){if(this.destroyed)return Promise.reject(new Error("Worker was destroyed"))
if("undefined"==typeof document)return Promise.reject(new Error('"document" is not defined.'))
var _data3=_slicedToArray(data,2),imageUrl=_data3[0],components=_data3[1]
return 3!==components&&1!==components?Promise.reject(new Error("Only 3 components or 1 component can be returned")):new Promise(function(resolve,reject){var img=new Image
img.onload=function(){var width=img.width,height=img.height,size=width*height,rgbaLength=4*size,buf=new Uint8ClampedArray(size*components),tmpCanvas=document.createElement("canvas")
tmpCanvas.width=width
tmpCanvas.height=height
var tmpCtx=tmpCanvas.getContext("2d")
tmpCtx.drawImage(img,0,0)
var data=tmpCtx.getImageData(0,0,width,height).data
if(3===components)for(var i=0,j=0;rgbaLength>i;i+=4,j+=3){buf[j]=data[i]
buf[j+1]=data[i+1]
buf[j+2]=data[i+2]}else if(1===components)for(var _i2=0,_j=0;rgbaLength>_i2;_i2+=4,_j++)buf[_j]=data[_i2]
resolve({data:buf,width:width,height:height})}
img.onerror=function(){reject(new Error("JpegDecode failed to load image"))}
img.src=imageUrl})},this)
messageHandler.on("FetchBuiltInCMap",function(data){return this.destroyed?Promise.reject(new Error("Worker was destroyed")):this.CMapReaderFactory.fetch({name:data.name})},this)}},{key:"_onUnsupportedFeature",value:function(_ref10){var featureId=_ref10.featureId
this.destroyed||this.loadingTask.onUnsupportedFeature&&this.loadingTask.onUnsupportedFeature(featureId)}},{key:"getData",value:function(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function(pageNumber){var _this13=this
if(!Number.isInteger(pageNumber)||0>=pageNumber||pageNumber>this.numPages)return Promise.reject(new Error("Invalid page request"))
var pageIndex=pageNumber-1
if(pageIndex in this.pagePromises)return this.pagePromises[pageIndex]
var promise=this.messageHandler.sendWithPromise("GetPage",{pageIndex:pageIndex}).then(function(pageInfo){if(_this13.destroyed)throw new Error("Transport destroyed")
var page=new PDFPageProxy(pageIndex,pageInfo,_this13,_this13._params.pdfBug)
_this13.pageCache[pageIndex]=page
return page})
this.pagePromises[pageIndex]=promise
return promise}},{key:"getPageIndex",value:function(ref){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:ref})["catch"](function(reason){return Promise.reject(new Error(reason))})}},{key:"getAnnotations",value:function(pageIndex,intent){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:pageIndex,intent:intent})}},{key:"getDestinations",value:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function(id){return"string"!=typeof id?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:id})}},{key:"getPageLabels",value:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageMode",value:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getOpenActionDestination",value:function(){return this.messageHandler.sendWithPromise("getOpenActionDestination",null)}},{key:"getAttachments",value:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getOutline",value:function(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getPermissions",value:function(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function(){var _this14=this
return this.messageHandler.sendWithPromise("GetMetadata",null).then(function(results){return{info:results[0],metadata:results[1]?new _metadata.Metadata(results[1]):null,contentDispositionFilename:_this14._fullReader?_this14._fullReader.filename:null}})}},{key:"getStats",value:function(){return this.messageHandler.sendWithPromise("GetStats",null)}},{key:"startCleanup",value:function(){var _this15=this
this.messageHandler.sendWithPromise("Cleanup",null).then(function(){for(var i=0,ii=_this15.pageCache.length;ii>i;i++){var page=_this15.pageCache[i]
page&&page.cleanup()}_this15.commonObjs.clear()
_this15.fontLoader.clear()})}},{key:"loadingParams",get:function(){var params=this._params
return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:params.disableAutoFetch,disableCreateObjectURL:params.disableCreateObjectURL,disableFontFace:params.disableFontFace,nativeImageDecoderSupport:params.nativeImageDecoderSupport})}}])
return WorkerTransport}(),PDFObjects=function(){function PDFObjects(){_classCallCheck(this,PDFObjects)
this._objs=Object.create(null)}_createClass(PDFObjects,[{key:"_ensureObj",value:function(objId){return this._objs[objId]?this._objs[objId]:this._objs[objId]={capability:(0,_util.createPromiseCapability)(),data:null,resolved:!1}}},{key:"get",value:function(objId){var callback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(callback){this._ensureObj(objId).capability.promise.then(callback)
return null}var obj=this._objs[objId]
if(!obj||!obj.resolved)throw new Error("Requesting object that isn't resolved yet ".concat(objId,"."))
return obj.data}},{key:"has",value:function(objId){var obj=this._objs[objId]
return obj?obj.resolved:!1}},{key:"resolve",value:function(objId,data){var obj=this._ensureObj(objId)
obj.resolved=!0
obj.data=data
obj.capability.resolve(data)}},{key:"clear",value:function(){this._objs=Object.create(null)}}])
return PDFObjects}(),RenderTask=function(){function RenderTask(internalRenderTask){_classCallCheck(this,RenderTask)
this._internalRenderTask=internalRenderTask
this.onContinue=null}_createClass(RenderTask,[{key:"cancel",value:function(){this._internalRenderTask.cancel()}},{key:"then",value:function(onFulfilled,onRejected){(0,_util.deprecated)("RenderTask.then method, use the `promise` getter instead.")
return this.promise.then.apply(this.promise,arguments)}},{key:"promise",get:function(){return this._internalRenderTask.capability.promise}}])
return RenderTask}(),InternalRenderTask=function(){var canvasInRendering=new WeakSet,InternalRenderTask=function(){function InternalRenderTask(_ref11){var callback=_ref11.callback,params=_ref11.params,objs=_ref11.objs,commonObjs=_ref11.commonObjs,operatorList=_ref11.operatorList,pageNumber=_ref11.pageNumber,canvasFactory=_ref11.canvasFactory,webGLContext=_ref11.webGLContext,_ref11$useRequestAnim=_ref11.useRequestAnimationFrame,useRequestAnimationFrame=void 0===_ref11$useRequestAnim?!1:_ref11$useRequestAnim,_ref11$pdfBug=_ref11.pdfBug,pdfBug=void 0===_ref11$pdfBug?!1:_ref11$pdfBug
_classCallCheck(this,InternalRenderTask)
this.callback=callback
this.params=params
this.objs=objs
this.commonObjs=commonObjs
this.operatorListIdx=null
this.operatorList=operatorList
this.pageNumber=pageNumber
this.canvasFactory=canvasFactory
this.webGLContext=webGLContext
this._pdfBug=pdfBug
this.running=!1
this.graphicsReadyCallback=null
this.graphicsReady=!1
this._useRequestAnimationFrame=useRequestAnimationFrame===!0&&"undefined"!=typeof window
this.cancelled=!1
this.capability=(0,_util.createPromiseCapability)()
this.task=new RenderTask(this)
this._continueBound=this._continue.bind(this)
this._scheduleNextBound=this._scheduleNext.bind(this)
this._nextBound=this._next.bind(this)
this._canvas=params.canvasContext.canvas}_createClass(InternalRenderTask,[{key:"initializeGraphics",value:function(){var transparency=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1
if(!this.cancelled){if(this._canvas){if(canvasInRendering.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.")
canvasInRendering.add(this._canvas)}if(this._pdfBug&&_global_scope["default"].StepperManager&&_global_scope["default"].StepperManager.enabled){this.stepper=_global_scope["default"].StepperManager.create(this.pageNumber-1)
this.stepper.init(this.operatorList)
this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint()}var _this$params=this.params,canvasContext=_this$params.canvasContext,viewport=_this$params.viewport,transform=_this$params.transform,imageLayer=_this$params.imageLayer,background=_this$params.background
this.gfx=new _canvas.CanvasGraphics(canvasContext,this.commonObjs,this.objs,this.canvasFactory,this.webGLContext,imageLayer)
this.gfx.beginDrawing({transform:transform,viewport:viewport,transparency:transparency,background:background})
this.operatorListIdx=0
this.graphicsReady=!0
this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function(){var error=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
this.running=!1
this.cancelled=!0
this.gfx&&this.gfx.endDrawing()
this._canvas&&canvasInRendering["delete"](this._canvas)
this.callback(error||new _dom_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this.pageNumber),"canvas"))}},{key:"operatorListChanged",value:function(){if(this.graphicsReady){this.stepper&&this.stepper.updateOperatorList(this.operatorList)
this.running||this._continue()}else this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function(){this.running=!0
this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function(){var _this16=this
this._useRequestAnimationFrame?window.requestAnimationFrame(function(){_this16._nextBound()["catch"](_this16.cancel.bind(_this16))}):Promise.resolve().then(this._nextBound)["catch"](this.cancel.bind(this))}},{key:"_next",value:function(){function _next(){return _next2.apply(this,arguments)}var _next2=_asyncToGenerator(_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!this.cancelled){_context.next=2
break}return _context.abrupt("return")
case 2:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper)
if(this.operatorListIdx===this.operatorList.argsArray.length){this.running=!1
if(this.operatorList.lastChunk){this.gfx.endDrawing()
this._canvas&&canvasInRendering["delete"](this._canvas)
this.callback()}}case 4:case"end":return _context.stop()}},_callee,this)}))
return _next}()}])
return InternalRenderTask}()
return InternalRenderTask}(),version="2.1.266"
exports.version=version
var build="81f5835c"
exports.build=build},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=__w_pdfjs_require__(148)},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}var g=function(){return this||"object"===("undefined"==typeof self?"undefined":_typeof(self))&&self}()||Function("return this")(),hadRuntime=g.regeneratorRuntime&&Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime")>=0,oldRuntime=hadRuntime&&g.regeneratorRuntime
g.regeneratorRuntime=void 0
module.exports=__w_pdfjs_require__(149)
if(hadRuntime)g.regeneratorRuntime=oldRuntime
else try{delete g.regeneratorRuntime}catch(e){g.regeneratorRuntime=void 0}},function(module,exports,__w_pdfjs_require__){"use strict";(function(module){function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}!function(global){function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[])
generator._invoke=makeInvokeMethod(innerFn,self,context)
return generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg)}})}function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg)
if("throw"!==record.type){var result=record.arg,value=result.value
return value&&"object"===_typeof(value)&&hasOwn.call(value,"__await")?Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject)},function(err){invoke("throw",err,resolve,reject)}):Promise.resolve(value).then(function(unwrapped){result.value=unwrapped
resolve(result)},function(error){return invoke("throw",error,resolve,reject)})}reject(record.arg)}function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject)})}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}var previousPromise
this._invoke=enqueue}function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart
return function(method,arg){if(state===GenStateExecuting)throw new Error("Generator is already running")
if(state===GenStateCompleted){if("throw"===method)throw arg
return doneResult()}context.method=method
context.arg=arg
for(;;){var delegate=context.delegate
if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context)
if(delegateResult){if(delegateResult===ContinueSentinel)continue
return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg
else if("throw"===context.method){if(state===GenStateSuspendedStart){state=GenStateCompleted
throw context.arg}context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg)
state=GenStateExecuting
var record=tryCatch(innerFn,self,context)
if("normal"===record.type){state=context.done?GenStateCompleted:GenStateSuspendedYield
if(record.arg===ContinueSentinel)continue
return{value:record.arg,done:context.done}}if("throw"===record.type){state=GenStateCompleted
context.method="throw"
context.arg=record.arg}}}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method]
if(method===undefined){context.delegate=null
if("throw"===context.method){if(delegate.iterator["return"]){context.method="return"
context.arg=undefined
maybeInvokeDelegate(delegate,context)
if("throw"===context.method)return ContinueSentinel}context.method="throw"
context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg)
if("throw"===record.type){context.method="throw"
context.arg=record.arg
context.delegate=null
return ContinueSentinel}var info=record.arg
if(!info){context.method="throw"
context.arg=new TypeError("iterator result is not an object")
context.delegate=null
return ContinueSentinel}if(!info.done)return info
context[delegate.resultName]=info.value
context.next=delegate.nextLoc
if("return"!==context.method){context.method="next"
context.arg=undefined}context.delegate=null
return ContinueSentinel}function pushTryEntry(locs){var entry={tryLoc:locs[0]}
1 in locs&&(entry.catchLoc=locs[1])
if(2 in locs){entry.finallyLoc=locs[2]
entry.afterLoc=locs[3]}this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{}
record.type="normal"
delete record.arg
entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}]
tryLocsList.forEach(pushTryEntry,this)
this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol]
if(iteratorMethod)return iteratorMethod.call(iterable)
if("function"==typeof iterable.next)return iterable
if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i)){next.value=iterable[i]
next.done=!1
return next}next.value=undefined
next.done=!0
return next}
return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}var undefined,Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag",inModule="object"===_typeof(module),runtime=global.regeneratorRuntime
if(runtime)inModule&&(module.exports=runtime)
else{runtime=global.regeneratorRuntime=inModule?module.exports:{}
runtime.wrap=wrap
var GenStateSuspendedStart="suspendedStart",GenStateSuspendedYield="suspendedYield",GenStateExecuting="executing",GenStateCompleted="completed",ContinueSentinel={},IteratorPrototype={}
IteratorPrototype[iteratorSymbol]=function(){return this}
var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])))
NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype)
var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype)
GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype
GeneratorFunctionPrototype.constructor=GeneratorFunction
GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction"
runtime.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor
return ctor?ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name):!1}
runtime.mark=function(genFun){if(Object.setPrototypeOf)Object.setPrototypeOf(genFun,GeneratorFunctionPrototype)
else{genFun.__proto__=GeneratorFunctionPrototype
toStringTagSymbol in genFun||(genFun[toStringTagSymbol]="GeneratorFunction")}genFun.prototype=Object.create(Gp)
return genFun}
runtime.awrap=function(arg){return{__await:arg}}
defineIteratorMethods(AsyncIterator.prototype)
AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this}
runtime.AsyncIterator=AsyncIterator
runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList))
return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next()})}
defineIteratorMethods(Gp)
Gp[toStringTagSymbol]="Generator"
Gp[iteratorSymbol]=function(){return this}
Gp.toString=function(){return"[object Generator]"}
runtime.keys=function(object){var keys=[]
for(var key in object)keys.push(key)
keys.reverse()
return function next(){for(;keys.length;){var key=keys.pop()
if(key in object){next.value=key
next.done=!1
return next}}next.done=!0
return next}}
runtime.values=values
Context.prototype={constructor:Context,reset:function(skipTempReset){this.prev=0
this.next=0
this.sent=this._sent=undefined
this.done=!1
this.delegate=null
this.method="next"
this.arg=undefined
this.tryEntries.forEach(resetTryEntry)
if(!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0
var rootEntry=this.tryEntries[0],rootRecord=rootEntry.completion
if("throw"===rootRecord.type)throw rootRecord.arg
return this.rval},dispatchException:function(exception){function handle(loc,caught){record.type="throw"
record.arg=exception
context.next=loc
if(caught){context.method="next"
context.arg=undefined}return!!caught}if(this.done)throw exception
for(var context=this,i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion
if("root"===entry.tryLoc)return handle("end")
if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc")
if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)
if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally")
if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i]
if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry
break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null)
var record=finallyEntry?finallyEntry.completion:{}
record.type=type
record.arg=arg
if(finallyEntry){this.method="next"
this.next=finallyEntry.finallyLoc
return ContinueSentinel}return this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg
if("break"===record.type||"continue"===record.type)this.next=record.arg
else if("return"===record.type){this.rval=this.arg=record.arg
this.method="return"
this.next="end"}else"normal"===record.type&&afterLoc&&(this.next=afterLoc)
return ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i]
if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc)
resetTryEntry(entry)
return ContinueSentinel}}},"catch":function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i]
if(entry.tryLoc===tryLoc){var record=entry.completion
if("throw"===record.type){var thrown=record.arg
resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc}
"next"===this.method&&(this.arg=undefined)
return ContinueSentinel}}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":_typeof(self))&&self}()||Function("return this")())}).call(this,__w_pdfjs_require__(150)(module))},function(module,exports,__w_pdfjs_require__){"use strict"
module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){}
module.paths=[]
module.children||(module.children=[])
Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}})
Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}})
module.webpackPolyfill=1}return module}},function(module,exports,__w_pdfjs_require__){"use strict"
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}function addLinkAttributes(link){var _ref5=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},url=_ref5.url,target=_ref5.target,rel=_ref5.rel
link.href=link.title=url?(0,_util.removeNullCharacters)(url):""
if(url){var LinkTargetValues=Object.values(LinkTarget),targetIndex=LinkTargetValues.includes(target)?target:LinkTarget.NONE
link.target=LinkTargetStringMap[targetIndex]
link.rel="string"==typeof rel?rel:DEFAULT_LINK_REL}}function getFilenameFromUrl(url){var anchor=url.indexOf("#"),query=url.indexOf("?"),end=Math.min(anchor>0?anchor:url.length,query>0?query:url.length)
return url.substring(url.lastIndexOf("/",end)+1,end)}function loadScript(src){return new Promise(function(resolve,reject){var script=document.createElement("script")
script.src=src
script.onload=resolve
script.onerror=function(){reject(new Error("Cannot load script at: ".concat(script.src)))};(document.head||document.documentElement).appendChild(script)})}Object.defineProperty(exports,"__esModule",{value:!0})
exports.addLinkAttributes=addLinkAttributes
exports.getFilenameFromUrl=getFilenameFromUrl
exports.loadScript=loadScript
exports.DummyStatTimer=exports.StatTimer=exports.DOMSVGFactory=exports.DOMCMapReaderFactory=exports.DOMCanvasFactory=exports.DEFAULT_LINK_REL=exports.LinkTarget=exports.RenderingCancelledException=exports.PageViewport=void 0
var _util=__w_pdfjs_require__(1),DEFAULT_LINK_REL="noopener noreferrer nofollow"
exports.DEFAULT_LINK_REL=DEFAULT_LINK_REL
var SVG_NS="http://www.w3.org/2000/svg",DOMCanvasFactory=function(){function DOMCanvasFactory(){_classCallCheck(this,DOMCanvasFactory)}_createClass(DOMCanvasFactory,[{key:"create",value:function(width,height){if(0>=width||0>=height)throw new Error("invalid canvas size")
var canvas=document.createElement("canvas"),context=canvas.getContext("2d")
canvas.width=width
canvas.height=height
return{canvas:canvas,context:context}}},{key:"reset",value:function(canvasAndContext,width,height){if(!canvasAndContext.canvas)throw new Error("canvas is not specified")
if(0>=width||0>=height)throw new Error("invalid canvas size")
canvasAndContext.canvas.width=width
canvasAndContext.canvas.height=height}},{key:"destroy",value:function(canvasAndContext){if(!canvasAndContext.canvas)throw new Error("canvas is not specified")
canvasAndContext.canvas.width=0
canvasAndContext.canvas.height=0
canvasAndContext.canvas=null
canvasAndContext.context=null}}])
return DOMCanvasFactory}()
exports.DOMCanvasFactory=DOMCanvasFactory
var DOMCMapReaderFactory=function(){function DOMCMapReaderFactory(_ref){var _ref$baseUrl=_ref.baseUrl,baseUrl=void 0===_ref$baseUrl?null:_ref$baseUrl,_ref$isCompressed=_ref.isCompressed,isCompressed=void 0===_ref$isCompressed?!1:_ref$isCompressed
_classCallCheck(this,DOMCMapReaderFactory)
this.baseUrl=baseUrl
this.isCompressed=isCompressed}_createClass(DOMCMapReaderFactory,[{key:"fetch",value:function(_ref2){var _this=this,name=_ref2.name
return this.baseUrl?name?new Promise(function(resolve,reject){var url=_this.baseUrl+name+(_this.isCompressed?".bcmap":""),request=new XMLHttpRequest
request.open("GET",url,!0)
_this.isCompressed&&(request.responseType="arraybuffer")
request.onreadystatechange=function(){if(request.readyState===XMLHttpRequest.DONE){if(200===request.status||0===request.status){var data
_this.isCompressed&&request.response?data=new Uint8Array(request.response):!_this.isCompressed&&request.responseText&&(data=(0,_util.stringToBytes)(request.responseText))
if(data){resolve({cMapData:data,compressionType:_this.isCompressed?_util.CMapCompressionType.BINARY:_util.CMapCompressionType.NONE})
return}}reject(new Error("Unable to load "+(_this.isCompressed?"binary ":"")+"CMap at: "+url))}}
request.send(null)}):Promise.reject(new Error("CMap name must be specified.")):Promise.reject(new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'))}}])
return DOMCMapReaderFactory}()
exports.DOMCMapReaderFactory=DOMCMapReaderFactory
var DOMSVGFactory=function(){function DOMSVGFactory(){_classCallCheck(this,DOMSVGFactory)}_createClass(DOMSVGFactory,[{key:"create",value:function(width,height){(0,_util.assert)(width>0&&height>0,"Invalid SVG dimensions")
var svg=document.createElementNS(SVG_NS,"svg:svg")
svg.setAttribute("version","1.1")
svg.setAttribute("width",width+"px")
svg.setAttribute("height",height+"px")
svg.setAttribute("preserveAspectRatio","none")
svg.setAttribute("viewBox","0 0 "+width+" "+height)
return svg}},{key:"createElement",value:function(type){(0,_util.assert)("string"==typeof type,"Invalid SVG element type")
return document.createElementNS(SVG_NS,type)}}])
return DOMSVGFactory}()
exports.DOMSVGFactory=DOMSVGFactory
var PageViewport=function(){function PageViewport(_ref3){var viewBox=_ref3.viewBox,scale=_ref3.scale,rotation=_ref3.rotation,_ref3$offsetX=_ref3.offsetX,offsetX=void 0===_ref3$offsetX?0:_ref3$offsetX,_ref3$offsetY=_ref3.offsetY,offsetY=void 0===_ref3$offsetY?0:_ref3$offsetY,_ref3$dontFlip=_ref3.dontFlip,dontFlip=void 0===_ref3$dontFlip?!1:_ref3$dontFlip
_classCallCheck(this,PageViewport)
this.viewBox=viewBox
this.scale=scale
this.rotation=rotation
this.offsetX=offsetX
this.offsetY=offsetY
var rotateA,rotateB,rotateC,rotateD,centerX=(viewBox[2]+viewBox[0])/2,centerY=(viewBox[3]+viewBox[1])/2
rotation%=360
rotation=0>rotation?rotation+360:rotation
switch(rotation){case 180:rotateA=-1
rotateB=0
rotateC=0
rotateD=1
break
case 90:rotateA=0
rotateB=1
rotateC=1
rotateD=0
break
case 270:rotateA=0
rotateB=-1
rotateC=-1
rotateD=0
break
default:rotateA=1
rotateB=0
rotateC=0
rotateD=-1}if(dontFlip){rotateC=-rotateC
rotateD=-rotateD}var offsetCanvasX,offsetCanvasY,width,height
if(0===rotateA){offsetCanvasX=Math.abs(centerY-viewBox[1])*scale+offsetX
offsetCanvasY=Math.abs(centerX-viewBox[0])*scale+offsetY
width=Math.abs(viewBox[3]-viewBox[1])*scale
height=Math.abs(viewBox[2]-viewBox[0])*scale}else{offsetCanvasX=Math.abs(centerX-viewBox[0])*scale+offsetX
offsetCanvasY=Math.abs(centerY-viewBox[1])*scale+offsetY
width=Math.abs(viewBox[2]-viewBox[0])*scale
height=Math.abs(viewBox[3]-viewBox[1])*scale}this.transform=[rotateA*scale,rotateB*scale,rotateC*scale,rotateD*scale,offsetCanvasX-rotateA*scale*centerX-rotateC*scale*centerY,offsetCanvasY-rotateB*scale*centerX-rotateD*scale*centerY]
this.width=width
this.height=height}_createClass(PageViewport,[{key:"clone",value:function(){var _ref4=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref4$scale=_ref4.scale,scale=void 0===_ref4$scale?this.scale:_ref4$scale,_ref4$rotation=_ref4.rotation,rotation=void 0===_ref4$rotation?this.rotation:_ref4$rotation,_ref4$dontFlip=_ref4.dontFlip,dontFlip=void 0===_ref4$dontFlip?!1:_ref4$dontFlip
return new PageViewport({viewBox:this.viewBox.slice(),scale:scale,rotation:rotation,offsetX:this.offsetX,offsetY:this.offsetY,dontFlip:dontFlip})}},{key:"convertToViewportPoint",value:function(x,y){return _util.Util.applyTransform([x,y],this.transform)}},{key:"convertToViewportRectangle",value:function(rect){var tl=_util.Util.applyTransform([rect[0],rect[1]],this.transform),br=_util.Util.applyTransform([rect[2],rect[3]],this.transform)
return[tl[0],tl[1],br[0],br[1]]}},{key:"convertToPdfPoint",value:function(x,y){return _util.Util.applyInverseTransform([x,y],this.transform)}}])
return PageViewport}()
exports.PageViewport=PageViewport
var RenderingCancelledException=function RenderingCancelledException(){function RenderingCancelledException(msg,type){this.message=msg
this.type=type}RenderingCancelledException.prototype=new Error
RenderingCancelledException.prototype.name="RenderingCancelledException"
RenderingCancelledException.constructor=RenderingCancelledException
return RenderingCancelledException}()
exports.RenderingCancelledException=RenderingCancelledException
var LinkTarget={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4}
exports.LinkTarget=LinkTarget
var LinkTargetStringMap=["","_self","_blank","_parent","_top"],StatTimer=function(){function StatTimer(){var enable=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!0
_classCallCheck(this,StatTimer)
this.enabled=!!enable
this.started=Object.create(null)
this.times=[]}_createClass(StatTimer,[{key:"time",value:function(name){if(this.enabled){name in this.started&&(0,_util.warn)("Timer is already running for "+name)
this.started[name]=Date.now()}}},{key:"timeEnd",value:function(name){if(this.enabled){name in this.started||(0,_util.warn)("Timer has not been started for "+name)
this.times.push({name:name,start:this.started[name],end:Date.now()})
delete this.started[name]}}},{key:"toString",value:function(){for(var times=this.times,out="",longest=0,i=0,ii=times.length;ii>i;++i){var name=times[i].name
name.length>longest&&(longest=name.length)}for(var _i=0,_ii=times.length;_ii>_i;++_i){var span=times[_i],duration=span.end-span.start
out+="".concat(span.name.padEnd(longest)," ").concat(duration,"ms\n")}return out}}])
return StatTimer}()
exports.StatTimer=StatTimer
var DummyStatTimer=function(){function DummyStatTimer(){_classCallCheck(this,DummyStatTimer);(0,_util.unreachable)("Cannot initialize DummyStatTimer.")}_createClass(DummyStatTimer,null,[{key:"time",value:function(name){}},{key:"timeEnd",value:function(name){}},{key:"toString",value:function(){return""}}])
return DummyStatTimer}()
exports.DummyStatTimer=DummyStatTimer},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)}
return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function")
subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}})
superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p
return o}
return _setPrototypeOf(o,p)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error)
return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments
return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args)
_next(void 0)})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}Object.defineProperty(exports,"__esModule",{value:!0})
exports.FontLoader=exports.FontFaceObject=void 0
var FontLoader,_regenerator=_interopRequireDefault(__w_pdfjs_require__(147)),_util=__w_pdfjs_require__(1),BaseFontLoader=function(){function BaseFontLoader(_ref){var docId=_ref.docId,onUnsupportedFeature=_ref.onUnsupportedFeature
_classCallCheck(this,BaseFontLoader)
this.constructor===BaseFontLoader&&(0,_util.unreachable)("Cannot initialize BaseFontLoader.")
this.docId=docId
this._onUnsupportedFeature=onUnsupportedFeature
this.nativeFontFaces=[]
this.styleElement=null}_createClass(BaseFontLoader,[{key:"addNativeFontFace",value:function(nativeFontFace){this.nativeFontFaces.push(nativeFontFace)
document.fonts.add(nativeFontFace)}},{key:"insertRule",value:function(rule){var styleElement=this.styleElement
if(!styleElement){styleElement=this.styleElement=document.createElement("style")
styleElement.id="PDFJS_FONT_STYLE_TAG_".concat(this.docId)
document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement)}var styleSheet=styleElement.sheet
styleSheet.insertRule(rule,styleSheet.cssRules.length)}},{key:"clear",value:function(){this.nativeFontFaces.forEach(function(nativeFontFace){document.fonts["delete"](nativeFontFace)})
this.nativeFontFaces.length=0
if(this.styleElement){this.styleElement.remove()
this.styleElement=null}}},{key:"bind",value:function(){function bind(_x){return _bind.apply(this,arguments)}var _bind=_asyncToGenerator(_regenerator["default"].mark(function _callee(font){var nativeFontFace,rule,_this=this
return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!font.attached&&!font.missingFile){_context.next=2
break}return _context.abrupt("return")
case 2:font.attached=!0
if(!this.isFontLoadingAPISupported){_context.next=19
break}nativeFontFace=font.createNativeFontFace()
if(!nativeFontFace){_context.next=18
break}this.addNativeFontFace(nativeFontFace)
_context.prev=7
_context.next=10
return nativeFontFace.loaded
case 10:_context.next=18
break
case 12:_context.prev=12
_context.t0=_context["catch"](7)
this._onUnsupportedFeature({featureId:_util.UNSUPPORTED_FEATURES.font});(0,_util.warn)("Failed to load font '".concat(nativeFontFace.family,"': '").concat(_context.t0,"'."))
font.disableFontFace=!0
throw _context.t0
case 18:return _context.abrupt("return")
case 19:rule=font.createFontFaceRule()
if(!rule){_context.next=25
break}this.insertRule(rule)
if(!this.isSyncFontLoadingSupported){_context.next=24
break}return _context.abrupt("return")
case 24:return _context.abrupt("return",new Promise(function(resolve){var request=_this._queueLoadingCallback(resolve)
_this._prepareFontLoadEvent([rule],[font],request)}))
case 25:case"end":return _context.stop()}},_callee,this,[[7,12]])}))
return bind}()},{key:"_queueLoadingCallback",value:function(callback){(0,_util.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"_prepareFontLoadEvent",value:function(rules,fontsToLoad,request){(0,_util.unreachable)("Abstract method `_prepareFontLoadEvent`.")}},{key:"isFontLoadingAPISupported",get:function(){(0,_util.unreachable)("Abstract method `isFontLoadingAPISupported`.")}},{key:"isSyncFontLoadingSupported",get:function(){(0,_util.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function(){(0,_util.unreachable)("Abstract method `_loadTestFont`.")}}])
return BaseFontLoader}()
exports.FontLoader=FontLoader
exports.FontLoader=FontLoader=function(_BaseFontLoader){function GenericFontLoader(docId){var _this2
_classCallCheck(this,GenericFontLoader)
_this2=_possibleConstructorReturn(this,_getPrototypeOf(GenericFontLoader).call(this,docId))
_this2.loadingContext={requests:[],nextRequestId:0}
_this2.loadTestFontId=0
return _this2}_inherits(GenericFontLoader,_BaseFontLoader)
_createClass(GenericFontLoader,[{key:"_queueLoadingCallback",value:function(callback){function completeRequest(){(0,_util.assert)(!request.done,"completeRequest() cannot be called twice.")
request.done=!0
for(;context.requests.length>0&&context.requests[0].done;){var otherRequest=context.requests.shift()
setTimeout(otherRequest.callback,0)}}var context=this.loadingContext,request={id:"pdfjs-font-loading-".concat(context.nextRequestId++),done:!1,complete:completeRequest,callback:callback}
context.requests.push(request)
return request}},{key:"_prepareFontLoadEvent",value:function(rules,fonts,request){function int32(data,offset){return data.charCodeAt(offset)<<24|data.charCodeAt(offset+1)<<16|data.charCodeAt(offset+2)<<8|255&data.charCodeAt(offset+3)}function spliceString(s,offset,remove,insert){var chunk1=s.substring(0,offset),chunk2=s.substring(offset+remove)
return chunk1+insert+chunk2}function isFontReady(name,callback){called++
if(called>30){(0,_util.warn)("Load test font never loaded.")
callback()}else{ctx.font="30px "+name
ctx.fillText(".",0,20)
var imageData=ctx.getImageData(0,0,1,1)
imageData.data[3]>0?callback():setTimeout(isFontReady.bind(null,name,callback))}}var i,ii,canvas=document.createElement("canvas")
canvas.width=1
canvas.height=1
var ctx=canvas.getContext("2d"),called=0,loadTestFontId="lt".concat(Date.now()).concat(this.loadTestFontId++),data=this._loadTestFont,COMMENT_OFFSET=976
data=spliceString(data,COMMENT_OFFSET,loadTestFontId.length,loadTestFontId)
var CFF_CHECKSUM_OFFSET=16,XXXX_VALUE=1482184792,checksum=int32(data,CFF_CHECKSUM_OFFSET)
for(i=0,ii=loadTestFontId.length-3;ii>i;i+=4)checksum=checksum-XXXX_VALUE+int32(loadTestFontId,i)|0
i<loadTestFontId.length&&(checksum=checksum-XXXX_VALUE+int32(loadTestFontId+"XXX",i)|0)
data=spliceString(data,CFF_CHECKSUM_OFFSET,4,(0,_util.string32)(checksum))
var url="url(data:font/opentype;base64,".concat(btoa(data),");"),rule='@font-face {font-family:"'.concat(loadTestFontId,'";src:').concat(url,"}")
this.insertRule(rule)
var names=[]
for(i=0,ii=fonts.length;ii>i;i++)names.push(fonts[i].loadedName)
names.push(loadTestFontId)
var div=document.createElement("div")
div.setAttribute("style","visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;")
for(i=0,ii=names.length;ii>i;++i){var span=document.createElement("span")
span.textContent="Hi"
span.style.fontFamily=names[i]
div.appendChild(span)}document.body.appendChild(div)
isFontReady(loadTestFontId,function(){document.body.removeChild(div)
request.complete()})}},{key:"isFontLoadingAPISupported",get:function(){var supported="undefined"!=typeof document&&!!document.fonts
if(supported&&"undefined"!=typeof navigator){var m=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
m&&m[1]<63&&(supported=!1)}return(0,_util.shadow)(this,"isFontLoadingAPISupported",supported)}},{key:"isSyncFontLoadingSupported",get:function(){var supported=!1
if("undefined"==typeof navigator)supported=!0
else{var m=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
m&&m[1]>=14&&(supported=!0)}return(0,_util.shadow)(this,"isSyncFontLoadingSupported",supported)}},{key:"_loadTestFont",get:function(){var getLoadTestFont=function(){return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")}
return(0,_util.shadow)(this,"_loadTestFont",getLoadTestFont())}}])
return GenericFontLoader}(BaseFontLoader)
var IsEvalSupportedCached={get value(){return(0,_util.shadow)(this,"value",(0,_util.isEvalSupported)())}},FontFaceObject=function(){function FontFaceObject(translatedData,_ref2){var _ref2$isEvalSupported=_ref2.isEvalSupported,isEvalSupported=void 0===_ref2$isEvalSupported?!0:_ref2$isEvalSupported,_ref2$disableFontFace=_ref2.disableFontFace,disableFontFace=void 0===_ref2$disableFontFace?!1:_ref2$disableFontFace,_ref2$ignoreErrors=_ref2.ignoreErrors,ignoreErrors=void 0===_ref2$ignoreErrors?!1:_ref2$ignoreErrors,_ref2$onUnsupportedFe=_ref2.onUnsupportedFeature,onUnsupportedFeature=void 0===_ref2$onUnsupportedFe?null:_ref2$onUnsupportedFe,_ref2$fontRegistry=_ref2.fontRegistry,fontRegistry=void 0===_ref2$fontRegistry?null:_ref2$fontRegistry
_classCallCheck(this,FontFaceObject)
this.compiledGlyphs=Object.create(null)
for(var i in translatedData)this[i]=translatedData[i]
this.isEvalSupported=isEvalSupported!==!1
this.disableFontFace=disableFontFace===!0
this.ignoreErrors=ignoreErrors===!0
this._onUnsupportedFeature=onUnsupportedFeature
this.fontRegistry=fontRegistry}_createClass(FontFaceObject,[{key:"createNativeFontFace",value:function(){if(!this.data||this.disableFontFace)return null
var nativeFontFace=new FontFace(this.loadedName,this.data,{})
this.fontRegistry&&this.fontRegistry.registerFont(this)
return nativeFontFace}},{key:"createFontFaceRule",value:function(){if(!this.data||this.disableFontFace)return null
var data=(0,_util.bytesToString)(new Uint8Array(this.data)),url="url(data:".concat(this.mimetype,";base64,").concat(btoa(data),");"),rule='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(url,"}")
this.fontRegistry&&this.fontRegistry.registerFont(this,url)
return rule}},{key:"getPathGenerator",value:function(objs,character){if(void 0!==this.compiledGlyphs[character])return this.compiledGlyphs[character]
var cmds,current
try{cmds=objs.get(this.loadedName+"_path_"+character)}catch(ex){if(!this.ignoreErrors)throw ex
this._onUnsupportedFeature&&this._onUnsupportedFeature({featureId:_util.UNSUPPORTED_FEATURES.font});(0,_util.warn)('getPathGenerator - ignoring character: "'.concat(ex,'".'))
return this.compiledGlyphs[character]=function(c,size){}}if(this.isEvalSupported&&IsEvalSupportedCached.value){for(var args,js="",i=0,ii=cmds.length;ii>i;i++){current=cmds[i]
args=void 0!==current.args?current.args.join(","):""
js+="c."+current.cmd+"("+args+");\n"}return this.compiledGlyphs[character]=new Function("c","size",js)}return this.compiledGlyphs[character]=function(c,size){for(var _i=0,_ii=cmds.length;_ii>_i;_i++){current=cmds[_i]
"scale"===current.cmd&&(current.args=[size,-size])
c[current.cmd].apply(c,current.args)}}}}])
return FontFaceObject}()
exports.FontFaceObject=FontFaceObject},function(module,exports,__w_pdfjs_require__){"use strict"
var compatibilityParams=Object.create(null),isNodeJS=__w_pdfjs_require__(4),userAgent="undefined"!=typeof navigator&&navigator.userAgent||"",isIE=/Trident/.test(userAgent),isIOSChrome=/CriOS/.test(userAgent)
!function(){(isIE||isIOSChrome)&&(compatibilityParams.disableCreateObjectURL=!0)}()
!function(){if(isNodeJS()){compatibilityParams.disableFontFace=!0
compatibilityParams.nativeImageDecoderSupport="none"}}()
exports.apiCompatibilityParams=Object.freeze(compatibilityParams)},function(module,exports,__w_pdfjs_require__){"use strict"
function addContextCurrentTransform(ctx){if(!ctx.mozCurrentTransform){ctx._originalSave=ctx.save
ctx._originalRestore=ctx.restore
ctx._originalRotate=ctx.rotate
ctx._originalScale=ctx.scale
ctx._originalTranslate=ctx.translate
ctx._originalTransform=ctx.transform
ctx._originalSetTransform=ctx.setTransform
ctx._transformMatrix=ctx._transformMatrix||[1,0,0,1,0,0]
ctx._transformStack=[]
Object.defineProperty(ctx,"mozCurrentTransform",{get:function(){return this._transformMatrix}})
Object.defineProperty(ctx,"mozCurrentTransformInverse",{get:function(){var m=this._transformMatrix,a=m[0],b=m[1],c=m[2],d=m[3],e=m[4],f=m[5],ad_bc=a*d-b*c,bc_ad=b*c-a*d
return[d/ad_bc,b/bc_ad,c/bc_ad,a/ad_bc,(d*e-c*f)/bc_ad,(b*e-a*f)/ad_bc]}})
ctx.save=function(){var old=this._transformMatrix
this._transformStack.push(old)
this._transformMatrix=old.slice(0,6)
this._originalSave()}
ctx.restore=function(){var prev=this._transformStack.pop()
if(prev){this._transformMatrix=prev
this._originalRestore()}}
ctx.translate=function(x,y){var m=this._transformMatrix
m[4]=m[0]*x+m[2]*y+m[4]
m[5]=m[1]*x+m[3]*y+m[5]
this._originalTranslate(x,y)}
ctx.scale=function(x,y){var m=this._transformMatrix
m[0]=m[0]*x
m[1]=m[1]*x
m[2]=m[2]*y
m[3]=m[3]*y
this._originalScale(x,y)}
ctx.transform=function(a,b,c,d,e,f){var m=this._transformMatrix
this._transformMatrix=[m[0]*a+m[2]*b,m[1]*a+m[3]*b,m[0]*c+m[2]*d,m[1]*c+m[3]*d,m[0]*e+m[2]*f+m[4],m[1]*e+m[3]*f+m[5]]
ctx._originalTransform(a,b,c,d,e,f)}
ctx.setTransform=function(a,b,c,d,e,f){this._transformMatrix=[a,b,c,d,e,f]
ctx._originalSetTransform(a,b,c,d,e,f)}
ctx.rotate=function(angle){var cosValue=Math.cos(angle),sinValue=Math.sin(angle),m=this._transformMatrix
this._transformMatrix=[m[0]*cosValue+m[2]*sinValue,m[1]*cosValue+m[3]*sinValue,m[0]*-sinValue+m[2]*cosValue,m[1]*-sinValue+m[3]*cosValue,m[4],m[5]]
this._originalRotate(angle)}}}function compileType3Glyph(imgData){var i,j,j0,ii,POINT_TO_PROCESS_LIMIT=1e3,width=imgData.width,height=imgData.height,width1=width+1,points=new Uint8Array(width1*(height+1)),POINT_TYPES=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),lineSize=width+7&-8,data0=imgData.data,data=new Uint8Array(lineSize*height),pos=0
for(i=0,ii=data0.length;ii>i;i++)for(var mask=128,elem=data0[i];mask>0;){data[pos++]=elem&mask?0:255
mask>>=1}var count=0
pos=0
if(0!==data[pos]){points[0]=1;++count}for(j=1;width>j;j++){if(data[pos]!==data[pos+1]){points[j]=data[pos]?2:1;++count}pos++}if(0!==data[pos]){points[j]=2;++count}for(i=1;height>i;i++){pos=i*lineSize
j0=i*width1
if(data[pos-lineSize]!==data[pos]){points[j0]=data[pos]?1:8;++count}var sum=(data[pos]?4:0)+(data[pos-lineSize]?8:0)
for(j=1;width>j;j++){sum=(sum>>2)+(data[pos+1]?4:0)+(data[pos-lineSize+1]?8:0)
if(POINT_TYPES[sum]){points[j0+j]=POINT_TYPES[sum];++count}pos++}if(data[pos-lineSize]!==data[pos]){points[j0+j]=data[pos]?2:4;++count}if(count>POINT_TO_PROCESS_LIMIT)return null}pos=lineSize*(height-1)
j0=i*width1
if(0!==data[pos]){points[j0]=8;++count}for(j=1;width>j;j++){if(data[pos]!==data[pos+1]){points[j0+j]=data[pos]?4:8;++count}pos++}if(0!==data[pos]){points[j0+j]=4;++count}if(count>POINT_TO_PROCESS_LIMIT)return null
var steps=new Int32Array([0,width1,-1,0,-width1,0,0,0,1]),outlines=[]
for(i=0;count&&height>=i;i++){for(var p=i*width1,end=p+width;end>p&&!points[p];)p++
if(p!==end){var pp,coords=[p%width1,i],type=points[p],p0=p
do{var step=steps[type]
do p+=step
while(!points[p])
pp=points[p]
if(5!==pp&&10!==pp){type=pp
points[p]=0}else{type=pp&51*type>>4
points[p]&=type>>2|type<<2}coords.push(p%width1)
coords.push(p/width1|0);--count}while(p0!==p)
outlines.push(coords);--i}}var drawOutline=function(c){c.save()
c.scale(1/width,-1/height)
c.translate(0,-height)
c.beginPath()
for(var i=0,ii=outlines.length;ii>i;i++){var o=outlines[i]
c.moveTo(o[0],o[1])
for(var j=2,jj=o.length;jj>j;j+=2)c.lineTo(o[j],o[j+1])}c.fill()
c.beginPath()
c.restore()}
return drawOutline}Object.defineProperty(exports,"__esModule",{value:!0})
exports.CanvasGraphics=void 0
var _util=__w_pdfjs_require__(1),_pattern_helper=__w_pdfjs_require__(155),MIN_FONT_SIZE=16,MAX_FONT_SIZE=100,MAX_GROUP_SIZE=4096,MIN_WIDTH_FACTOR=.65,COMPILE_TYPE3_GLYPHS=!0,MAX_SIZE_TO_COMPILE=1e3,FULL_CHUNK_HEIGHT=16,IsLittleEndianCached={get value(){return(0,_util.shadow)(IsLittleEndianCached,"value",(0,_util.isLittleEndian)())}},CachedCanvases=function(){function CachedCanvases(canvasFactory){this.canvasFactory=canvasFactory
this.cache=Object.create(null)}CachedCanvases.prototype={getCanvas:function(id,width,height,trackTransform){var canvasEntry
if(void 0!==this.cache[id]){canvasEntry=this.cache[id]
this.canvasFactory.reset(canvasEntry,width,height)
canvasEntry.context.setTransform(1,0,0,1,0,0)}else{canvasEntry=this.canvasFactory.create(width,height)
this.cache[id]=canvasEntry}trackTransform&&addContextCurrentTransform(canvasEntry.context)
return canvasEntry},clear:function(){for(var id in this.cache){var canvasEntry=this.cache[id]
this.canvasFactory.destroy(canvasEntry)
delete this.cache[id]}}}
return CachedCanvases}(),CanvasExtraState=function(){function CanvasExtraState(){this.alphaIsShape=!1
this.fontSize=0
this.fontSizeScale=1
this.textMatrix=_util.IDENTITY_MATRIX
this.textMatrixScale=1
this.fontMatrix=_util.FONT_IDENTITY_MATRIX
this.leading=0
this.x=0
this.y=0
this.lineX=0
this.lineY=0
this.charSpacing=0
this.wordSpacing=0
this.textHScale=1
this.textRenderingMode=_util.TextRenderingMode.FILL
this.textRise=0
this.fillColor="#000000"
this.strokeColor="#000000"
this.patternFill=!1
this.fillAlpha=1
this.strokeAlpha=1
this.lineWidth=1
this.activeSMask=null
this.resumeSMaskCtx=null}CanvasExtraState.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(x,y){this.x=x
this.y=y}}
return CanvasExtraState}(),CanvasGraphics=function(){function CanvasGraphics(canvasCtx,commonObjs,objs,canvasFactory,webGLContext,imageLayer){this.ctx=canvasCtx
this.current=new CanvasExtraState
this.stateStack=[]
this.pendingClip=null
this.pendingEOFill=!1
this.res=null
this.xobjs=null
this.commonObjs=commonObjs
this.objs=objs
this.canvasFactory=canvasFactory
this.webGLContext=webGLContext
this.imageLayer=imageLayer
this.groupStack=[]
this.processingType3=null
this.baseTransform=null
this.baseTransformStack=[]
this.groupLevel=0
this.smaskStack=[]
this.smaskCounter=0
this.tempSMask=null
this.cachedCanvases=new CachedCanvases(this.canvasFactory)
canvasCtx&&addContextCurrentTransform(canvasCtx)
this._cachedGetSinglePixelWidth=null}function putBinaryImageData(ctx,imgData){if("undefined"!=typeof ImageData&&imgData instanceof ImageData)ctx.putImageData(imgData,0,0)
else{var destPos,i,j,thisChunkHeight,elemsInThisChunk,height=imgData.height,width=imgData.width,partialChunkHeight=height%FULL_CHUNK_HEIGHT,fullChunks=(height-partialChunkHeight)/FULL_CHUNK_HEIGHT,totalChunks=0===partialChunkHeight?fullChunks:fullChunks+1,chunkImgData=ctx.createImageData(width,FULL_CHUNK_HEIGHT),srcPos=0,src=imgData.data,dest=chunkImgData.data
if(imgData.kind===_util.ImageKind.GRAYSCALE_1BPP){var srcLength=src.byteLength,dest32=new Uint32Array(dest.buffer,0,dest.byteLength>>2),dest32DataLength=dest32.length,fullSrcDiff=width+7>>3,white=4294967295,black=IsLittleEndianCached.value?4278190080:255
for(i=0;totalChunks>i;i++){thisChunkHeight=fullChunks>i?FULL_CHUNK_HEIGHT:partialChunkHeight
destPos=0
for(j=0;thisChunkHeight>j;j++){for(var srcDiff=srcLength-srcPos,k=0,kEnd=srcDiff>fullSrcDiff?width:8*srcDiff-7,kEndUnrolled=-8&kEnd,mask=0,srcByte=0;kEndUnrolled>k;k+=8){srcByte=src[srcPos++]
dest32[destPos++]=128&srcByte?white:black
dest32[destPos++]=64&srcByte?white:black
dest32[destPos++]=32&srcByte?white:black
dest32[destPos++]=16&srcByte?white:black
dest32[destPos++]=8&srcByte?white:black
dest32[destPos++]=4&srcByte?white:black
dest32[destPos++]=2&srcByte?white:black
dest32[destPos++]=1&srcByte?white:black}for(;kEnd>k;k++){if(0===mask){srcByte=src[srcPos++]
mask=128}dest32[destPos++]=srcByte&mask?white:black
mask>>=1}}for(;dest32DataLength>destPos;)dest32[destPos++]=0
ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT)}}else if(imgData.kind===_util.ImageKind.RGBA_32BPP){j=0
elemsInThisChunk=width*FULL_CHUNK_HEIGHT*4
for(i=0;fullChunks>i;i++){dest.set(src.subarray(srcPos,srcPos+elemsInThisChunk))
srcPos+=elemsInThisChunk
ctx.putImageData(chunkImgData,0,j)
j+=FULL_CHUNK_HEIGHT}if(totalChunks>i){elemsInThisChunk=width*partialChunkHeight*4
dest.set(src.subarray(srcPos,srcPos+elemsInThisChunk))
ctx.putImageData(chunkImgData,0,j)}}else{if(imgData.kind!==_util.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(imgData.kind))
thisChunkHeight=FULL_CHUNK_HEIGHT
elemsInThisChunk=width*thisChunkHeight
for(i=0;totalChunks>i;i++){if(i>=fullChunks){thisChunkHeight=partialChunkHeight
elemsInThisChunk=width*thisChunkHeight}destPos=0
for(j=elemsInThisChunk;j--;){dest[destPos++]=src[srcPos++]
dest[destPos++]=src[srcPos++]
dest[destPos++]=src[srcPos++]
dest[destPos++]=255}ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT)}}}}function putBinaryImageMask(ctx,imgData){for(var height=imgData.height,width=imgData.width,partialChunkHeight=height%FULL_CHUNK_HEIGHT,fullChunks=(height-partialChunkHeight)/FULL_CHUNK_HEIGHT,totalChunks=0===partialChunkHeight?fullChunks:fullChunks+1,chunkImgData=ctx.createImageData(width,FULL_CHUNK_HEIGHT),srcPos=0,src=imgData.data,dest=chunkImgData.data,i=0;totalChunks>i;i++){for(var thisChunkHeight=fullChunks>i?FULL_CHUNK_HEIGHT:partialChunkHeight,destPos=3,j=0;thisChunkHeight>j;j++)for(var mask=0,k=0;width>k;k++){if(!mask){var elem=src[srcPos++]
mask=128}dest[destPos]=elem&mask?0:255
destPos+=4
mask>>=1}ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT)}}function copyCtxState(sourceCtx,destCtx){for(var properties=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],i=0,ii=properties.length;ii>i;i++){var property=properties[i]
void 0!==sourceCtx[property]&&(destCtx[property]=sourceCtx[property])}if(void 0!==sourceCtx.setLineDash){destCtx.setLineDash(sourceCtx.getLineDash())
destCtx.lineDashOffset=sourceCtx.lineDashOffset}}function resetCtxToDefault(ctx){ctx.strokeStyle="#000000"
ctx.fillStyle="#000000"
ctx.fillRule="nonzero"
ctx.globalAlpha=1
ctx.lineWidth=1
ctx.lineCap="butt"
ctx.lineJoin="miter"
ctx.miterLimit=10
ctx.globalCompositeOperation="source-over"
ctx.font="10px sans-serif"
if(void 0!==ctx.setLineDash){ctx.setLineDash([])
ctx.lineDashOffset=0}}function composeSMaskBackdrop(bytes,r0,g0,b0){for(var length=bytes.length,i=3;length>i;i+=4){var alpha=bytes[i]
if(0===alpha){bytes[i-3]=r0
bytes[i-2]=g0
bytes[i-1]=b0}else if(255>alpha){var alpha_=255-alpha
bytes[i-3]=bytes[i-3]*alpha+r0*alpha_>>8
bytes[i-2]=bytes[i-2]*alpha+g0*alpha_>>8
bytes[i-1]=bytes[i-1]*alpha+b0*alpha_>>8}}}function composeSMaskAlpha(maskData,layerData,transferMap){for(var length=maskData.length,scale=1/255,i=3;length>i;i+=4){var alpha=transferMap?transferMap[maskData[i]]:maskData[i]
layerData[i]=layerData[i]*alpha*scale|0}}function composeSMaskLuminosity(maskData,layerData,transferMap){for(var length=maskData.length,i=3;length>i;i+=4){var y=77*maskData[i-3]+152*maskData[i-2]+28*maskData[i-1]
layerData[i]=transferMap?layerData[i]*transferMap[y>>8]>>8:layerData[i]*y>>16}}function genericComposeSMask(maskCtx,layerCtx,width,height,subtype,backdrop,transferMap){var composeFn,hasBackdrop=!!backdrop,r0=hasBackdrop?backdrop[0]:0,g0=hasBackdrop?backdrop[1]:0,b0=hasBackdrop?backdrop[2]:0
composeFn="Luminosity"===subtype?composeSMaskLuminosity:composeSMaskAlpha
for(var PIXELS_TO_PROCESS=1048576,chunkSize=Math.min(height,Math.ceil(PIXELS_TO_PROCESS/width)),row=0;height>row;row+=chunkSize){var chunkHeight=Math.min(chunkSize,height-row),maskData=maskCtx.getImageData(0,row,width,chunkHeight),layerData=layerCtx.getImageData(0,row,width,chunkHeight)
hasBackdrop&&composeSMaskBackdrop(maskData.data,r0,g0,b0)
composeFn(maskData.data,layerData.data,transferMap)
maskCtx.putImageData(layerData,0,row)}}function composeSMask(ctx,smask,layerCtx,webGLContext){var mask=smask.canvas,maskCtx=smask.context
ctx.setTransform(smask.scaleX,0,0,smask.scaleY,smask.offsetX,smask.offsetY)
var backdrop=smask.backdrop||null
if(smask.transferMap||!webGLContext.isEnabled){genericComposeSMask(maskCtx,layerCtx,mask.width,mask.height,smask.subtype,backdrop,smask.transferMap)
ctx.drawImage(mask,0,0)}else{var composed=webGLContext.composeSMask({layer:layerCtx.canvas,mask:mask,properties:{subtype:smask.subtype,backdrop:backdrop}})
ctx.setTransform(1,0,0,1,0,0)
ctx.drawImage(composed,smask.offsetX,smask.offsetY)}}var EXECUTION_TIME=15,EXECUTION_STEPS=10,LINE_CAP_STYLES=["butt","round","square"],LINE_JOIN_STYLES=["miter","round","bevel"],NORMAL_CLIP={},EO_CLIP={}
CanvasGraphics.prototype={beginDrawing:function(_ref){var transform=_ref.transform,viewport=_ref.viewport,_ref$transparency=_ref.transparency,transparency=void 0===_ref$transparency?!1:_ref$transparency,_ref$background=_ref.background,background=void 0===_ref$background?null:_ref$background,width=this.ctx.canvas.width,height=this.ctx.canvas.height
this.ctx.save()
this.ctx.fillStyle=background||"rgb(255, 255, 255)"
this.ctx.fillRect(0,0,width,height)
this.ctx.restore()
if(transparency){var transparentCanvas=this.cachedCanvases.getCanvas("transparent",width,height,!0)
this.compositeCtx=this.ctx
this.transparentCanvas=transparentCanvas.canvas
this.ctx=transparentCanvas.context
this.ctx.save()
this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save()
resetCtxToDefault(this.ctx)
transform&&this.ctx.transform.apply(this.ctx,transform)
this.ctx.transform.apply(this.ctx,viewport.transform)
this.baseTransform=this.ctx.mozCurrentTransform.slice()
this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(operatorList,executionStartIdx,continueCallback,stepper){var argsArray=operatorList.argsArray,fnArray=operatorList.fnArray,i=executionStartIdx||0,argsArrayLen=argsArray.length
if(argsArrayLen===i)return i
for(var fnId,chunkOperations=argsArrayLen-i>EXECUTION_STEPS&&"function"==typeof continueCallback,endTime=chunkOperations?Date.now()+EXECUTION_TIME:0,steps=0,commonObjs=this.commonObjs,objs=this.objs;;){if(void 0!==stepper&&i===stepper.nextBreakPoint){stepper.breakIt(i,continueCallback)
return i}fnId=fnArray[i]
if(fnId!==_util.OPS.dependency)this[fnId].apply(this,argsArray[i])
else for(var deps=argsArray[i],n=0,nn=deps.length;nn>n;n++){var depObjId=deps[n],common="g"===depObjId[0]&&"_"===depObjId[1],objsPool=common?commonObjs:objs
if(!objsPool.has(depObjId)){objsPool.get(depObjId,continueCallback)
return i}}i++
if(i===argsArrayLen)return i
if(chunkOperations&&++steps>EXECUTION_STEPS){if(Date.now()>endTime){continueCallback()
return i}steps=0}}},endDrawing:function(){null!==this.current.activeSMask&&this.endSMaskGroup()
this.ctx.restore()
if(this.transparentCanvas){this.ctx=this.compositeCtx
this.ctx.save()
this.ctx.setTransform(1,0,0,1,0,0)
this.ctx.drawImage(this.transparentCanvas,0,0)
this.ctx.restore()
this.transparentCanvas=null}this.cachedCanvases.clear()
this.webGLContext.clear()
this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(width){this.current.lineWidth=width
this.ctx.lineWidth=width},setLineCap:function(style){this.ctx.lineCap=LINE_CAP_STYLES[style]},setLineJoin:function(style){this.ctx.lineJoin=LINE_JOIN_STYLES[style]},setMiterLimit:function(limit){this.ctx.miterLimit=limit},setDash:function(dashArray,dashPhase){var ctx=this.ctx
if(void 0!==ctx.setLineDash){ctx.setLineDash(dashArray)
ctx.lineDashOffset=dashPhase}},setRenderingIntent:function(intent){},setFlatness:function(flatness){},setGState:function(states){for(var i=0,ii=states.length;ii>i;i++){var state=states[i],key=state[0],value=state[1]
switch(key){case"LW":this.setLineWidth(value)
break
case"LC":this.setLineCap(value)
break
case"LJ":this.setLineJoin(value)
break
case"ML":this.setMiterLimit(value)
break
case"D":this.setDash(value[0],value[1])
break
case"RI":this.setRenderingIntent(value)
break
case"FL":this.setFlatness(value)
break
case"Font":this.setFont(value[0],value[1])
break
case"CA":this.current.strokeAlpha=state[1]
break
case"ca":this.current.fillAlpha=state[1]
this.ctx.globalAlpha=state[1]
break
case"BM":this.ctx.globalCompositeOperation=value
break
case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup())
this.current.activeSMask=value?this.tempSMask:null
this.current.activeSMask&&this.beginSMaskGroup()
this.tempSMask=null}}},beginSMaskGroup:function(){var activeSMask=this.current.activeSMask,drawnWidth=activeSMask.canvas.width,drawnHeight=activeSMask.canvas.height,cacheId="smaskGroupAt"+this.groupLevel,scratchCanvas=this.cachedCanvases.getCanvas(cacheId,drawnWidth,drawnHeight,!0),currentCtx=this.ctx,currentTransform=currentCtx.mozCurrentTransform
this.ctx.save()
var groupCtx=scratchCanvas.context
groupCtx.scale(1/activeSMask.scaleX,1/activeSMask.scaleY)
groupCtx.translate(-activeSMask.offsetX,-activeSMask.offsetY)
groupCtx.transform.apply(groupCtx,currentTransform)
activeSMask.startTransformInverse=groupCtx.mozCurrentTransformInverse
copyCtxState(currentCtx,groupCtx)
this.ctx=groupCtx
this.setGState([["BM","source-over"],["ca",1],["CA",1]])
this.groupStack.push(currentCtx)
this.groupLevel++},suspendSMaskGroup:function(){var groupCtx=this.ctx
this.groupLevel--
this.ctx=this.groupStack.pop()
composeSMask(this.ctx,this.current.activeSMask,groupCtx,this.webGLContext)
this.ctx.restore()
this.ctx.save()
copyCtxState(groupCtx,this.ctx)
this.current.resumeSMaskCtx=groupCtx
var deltaTransform=_util.Util.transform(this.current.activeSMask.startTransformInverse,groupCtx.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,deltaTransform)
groupCtx.save()
groupCtx.setTransform(1,0,0,1,0,0)
groupCtx.clearRect(0,0,groupCtx.canvas.width,groupCtx.canvas.height)
groupCtx.restore()},resumeSMaskGroup:function(){var groupCtx=this.current.resumeSMaskCtx,currentCtx=this.ctx
this.ctx=groupCtx
this.groupStack.push(currentCtx)
this.groupLevel++},endSMaskGroup:function(){var groupCtx=this.ctx
this.groupLevel--
this.ctx=this.groupStack.pop()
composeSMask(this.ctx,this.current.activeSMask,groupCtx,this.webGLContext)
this.ctx.restore()
copyCtxState(groupCtx,this.ctx)
var deltaTransform=_util.Util.transform(this.current.activeSMask.startTransformInverse,groupCtx.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,deltaTransform)},save:function(){this.ctx.save()
var old=this.current
this.stateStack.push(old)
this.current=old.clone()
this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup()
null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup()
if(0!==this.stateStack.length){this.current=this.stateStack.pop()
this.ctx.restore()
this.pendingClip=null
this._cachedGetSinglePixelWidth=null}},transform:function(a,b,c,d,e,f){this.ctx.transform(a,b,c,d,e,f)
this._cachedGetSinglePixelWidth=null},constructPath:function(ops,args){for(var ctx=this.ctx,current=this.current,x=current.x,y=current.y,i=0,j=0,ii=ops.length;ii>i;i++)switch(0|ops[i]){case _util.OPS.rectangle:x=args[j++]
y=args[j++]
var width=args[j++],height=args[j++]
0===width&&(width=this.getSinglePixelWidth())
0===height&&(height=this.getSinglePixelWidth())
var xw=x+width,yh=y+height
this.ctx.moveTo(x,y)
this.ctx.lineTo(xw,y)
this.ctx.lineTo(xw,yh)
this.ctx.lineTo(x,yh)
this.ctx.lineTo(x,y)
this.ctx.closePath()
break
case _util.OPS.moveTo:x=args[j++]
y=args[j++]
ctx.moveTo(x,y)
break
case _util.OPS.lineTo:x=args[j++]
y=args[j++]
ctx.lineTo(x,y)
break
case _util.OPS.curveTo:x=args[j+4]
y=args[j+5]
ctx.bezierCurveTo(args[j],args[j+1],args[j+2],args[j+3],x,y)
j+=6
break
case _util.OPS.curveTo2:ctx.bezierCurveTo(x,y,args[j],args[j+1],args[j+2],args[j+3])
x=args[j+2]
y=args[j+3]
j+=4
break
case _util.OPS.curveTo3:x=args[j+2]
y=args[j+3]
ctx.bezierCurveTo(args[j],args[j+1],x,y,x,y)
j+=4
break
case _util.OPS.closePath:ctx.closePath()}current.setCurrentPoint(x,y)},closePath:function(){this.ctx.closePath()},stroke:function(consumePath){consumePath="undefined"!=typeof consumePath?consumePath:!0
var ctx=this.ctx,strokeColor=this.current.strokeColor
ctx.lineWidth=Math.max(this.getSinglePixelWidth()*MIN_WIDTH_FACTOR,this.current.lineWidth)
ctx.globalAlpha=this.current.strokeAlpha
if(strokeColor&&strokeColor.hasOwnProperty("type")&&"Pattern"===strokeColor.type){ctx.save()
ctx.strokeStyle=strokeColor.getPattern(ctx,this)
ctx.stroke()
ctx.restore()}else ctx.stroke()
consumePath&&this.consumePath()
ctx.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath()
this.stroke()},fill:function(consumePath){consumePath="undefined"!=typeof consumePath?consumePath:!0
var ctx=this.ctx,fillColor=this.current.fillColor,isPatternFill=this.current.patternFill,needRestore=!1
if(isPatternFill){ctx.save()
this.baseTransform&&ctx.setTransform.apply(ctx,this.baseTransform)
ctx.fillStyle=fillColor.getPattern(ctx,this)
needRestore=!0}if(this.pendingEOFill){ctx.fill("evenodd")
this.pendingEOFill=!1}else ctx.fill()
needRestore&&ctx.restore()
consumePath&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0
this.fill()},fillStroke:function(){this.fill(!1)
this.stroke(!1)
this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0
this.fillStroke()},closeFillStroke:function(){this.closePath()
this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0
this.closePath()
this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=NORMAL_CLIP},eoClip:function(){this.pendingClip=EO_CLIP},beginText:function(){this.current.textMatrix=_util.IDENTITY_MATRIX
this.current.textMatrixScale=1
this.current.x=this.current.lineX=0
this.current.y=this.current.lineY=0},endText:function(){var paths=this.pendingTextPaths,ctx=this.ctx
if(void 0!==paths){ctx.save()
ctx.beginPath()
for(var i=0;i<paths.length;i++){var path=paths[i]
ctx.setTransform.apply(ctx,path.transform)
ctx.translate(path.x,path.y)
path.addToPath(ctx,path.fontSize)}ctx.restore()
ctx.clip()
ctx.beginPath()
delete this.pendingTextPaths}else ctx.beginPath()},setCharSpacing:function(spacing){this.current.charSpacing=spacing},setWordSpacing:function(spacing){this.current.wordSpacing=spacing},setHScale:function(scale){this.current.textHScale=scale/100},setLeading:function(leading){this.current.leading=-leading},setFont:function(fontRefName,size){var fontObj=this.commonObjs.get(fontRefName),current=this.current
if(!fontObj)throw new Error("Can't find font for ".concat(fontRefName))
current.fontMatrix=fontObj.fontMatrix?fontObj.fontMatrix:_util.FONT_IDENTITY_MATRIX;(0===current.fontMatrix[0]||0===current.fontMatrix[3])&&(0,_util.warn)("Invalid font matrix for font "+fontRefName)
if(0>size){size=-size
current.fontDirection=-1}else current.fontDirection=1
this.current.font=fontObj
this.current.fontSize=size
if(!fontObj.isType3Font){var name=fontObj.loadedName||"sans-serif",bold=fontObj.black?"900":fontObj.bold?"bold":"normal",italic=fontObj.italic?"italic":"normal",typeface='"'.concat(name,'", ').concat(fontObj.fallbackName),browserFontSize=MIN_FONT_SIZE>size?MIN_FONT_SIZE:size>MAX_FONT_SIZE?MAX_FONT_SIZE:size
this.current.fontSizeScale=size/browserFontSize
this.ctx.font="".concat(italic," ").concat(bold," ").concat(browserFontSize,"px ").concat(typeface)}},setTextRenderingMode:function(mode){this.current.textRenderingMode=mode},setTextRise:function(rise){this.current.textRise=rise},moveText:function(x,y){this.current.x=this.current.lineX+=x
this.current.y=this.current.lineY+=y},setLeadingMoveText:function(x,y){this.setLeading(-y)
this.moveText(x,y)},setTextMatrix:function(a,b,c,d,e,f){this.current.textMatrix=[a,b,c,d,e,f]
this.current.textMatrixScale=Math.sqrt(a*a+b*b)
this.current.x=this.current.lineX=0
this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(character,x,y,patternTransform){var addToPath,ctx=this.ctx,current=this.current,font=current.font,textRenderingMode=current.textRenderingMode,fontSize=current.fontSize/current.fontSizeScale,fillStrokeMode=textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK,isAddToPathSet=!!(textRenderingMode&_util.TextRenderingMode.ADD_TO_PATH_FLAG),patternFill=current.patternFill&&font.data;(font.disableFontFace||isAddToPathSet||patternFill)&&(addToPath=font.getPathGenerator(this.commonObjs,character))
if(font.disableFontFace||patternFill){ctx.save()
ctx.translate(x,y)
ctx.beginPath()
addToPath(ctx,fontSize)
patternTransform&&ctx.setTransform.apply(ctx,patternTransform);(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE)&&ctx.fill();(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE)&&ctx.stroke()
ctx.restore()}else{(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE)&&ctx.fillText(character,x,y);(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE)&&ctx.strokeText(character,x,y)}if(isAddToPathSet){var paths=this.pendingTextPaths||(this.pendingTextPaths=[])
paths.push({transform:ctx.mozCurrentTransform,x:x,y:y,fontSize:fontSize,addToPath:addToPath})}},get isFontSubpixelAAEnabled(){var ctx=this.canvasFactory.create(10,10).context
ctx.scale(1.5,1)
ctx.fillText("I",0,10)
for(var data=ctx.getImageData(0,0,10,10).data,enabled=!1,i=3;i<data.length;i+=4)if(data[i]>0&&data[i]<255){enabled=!0
break}return(0,_util.shadow)(this,"isFontSubpixelAAEnabled",enabled)},showText:function(glyphs){var current=this.current,font=current.font
if(font.isType3Font)return this.showType3Text(glyphs)
var fontSize=current.fontSize
if(0!==fontSize){var ctx=this.ctx,fontSizeScale=current.fontSizeScale,charSpacing=current.charSpacing,wordSpacing=current.wordSpacing,fontDirection=current.fontDirection,textHScale=current.textHScale*fontDirection,glyphsLength=glyphs.length,vertical=font.vertical,spacingDir=vertical?1:-1,defaultVMetrics=font.defaultVMetrics,widthAdvanceScale=fontSize*current.fontMatrix[0],simpleFillText=current.textRenderingMode===_util.TextRenderingMode.FILL&&!font.disableFontFace&&!current.patternFill
ctx.save()
var patternTransform
if(current.patternFill){ctx.save()
var pattern=current.fillColor.getPattern(ctx,this)
patternTransform=ctx.mozCurrentTransform
ctx.restore()
ctx.fillStyle=pattern}ctx.transform.apply(ctx,current.textMatrix)
ctx.translate(current.x,current.y+current.textRise)
fontDirection>0?ctx.scale(textHScale,-1):ctx.scale(textHScale,1)
var lineWidth=current.lineWidth,scale=current.textMatrixScale
if(0===scale||0===lineWidth){var fillStrokeMode=current.textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK
if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){this._cachedGetSinglePixelWidth=null
lineWidth=this.getSinglePixelWidth()*MIN_WIDTH_FACTOR}}else lineWidth/=scale
if(1!==fontSizeScale){ctx.scale(fontSizeScale,fontSizeScale)
lineWidth/=fontSizeScale}ctx.lineWidth=lineWidth
var i,x=0
for(i=0;glyphsLength>i;++i){var glyph=glyphs[i]
if((0,_util.isNum)(glyph))x+=spacingDir*glyph*fontSize/1e3
else{var scaledX,scaledY,scaledAccentX,scaledAccentY,restoreNeeded=!1,spacing=(glyph.isSpace?wordSpacing:0)+charSpacing,character=glyph.fontChar,accent=glyph.accent,width=glyph.width
if(vertical){var vmetric,vx,vy
vmetric=glyph.vmetric||defaultVMetrics
vx=glyph.vmetric?vmetric[1]:.5*width
vx=-vx*widthAdvanceScale
vy=vmetric[2]*widthAdvanceScale
width=vmetric?-vmetric[0]:width
scaledX=vx/fontSizeScale
scaledY=(x+vy)/fontSizeScale}else{scaledX=x/fontSizeScale
scaledY=0}if(font.remeasure&&width>0){var measuredWidth=1e3*ctx.measureText(character).width/fontSize*fontSizeScale
if(measuredWidth>width&&this.isFontSubpixelAAEnabled){var characterScaleX=width/measuredWidth
restoreNeeded=!0
ctx.save()
ctx.scale(characterScaleX,1)
scaledX/=characterScaleX}else width!==measuredWidth&&(scaledX+=(width-measuredWidth)/2e3*fontSize/fontSizeScale)}if(glyph.isInFont||font.missingFile)if(simpleFillText&&!accent)ctx.fillText(character,scaledX,scaledY)
else{this.paintChar(character,scaledX,scaledY,patternTransform)
if(accent){scaledAccentX=scaledX+accent.offset.x/fontSizeScale
scaledAccentY=scaledY-accent.offset.y/fontSizeScale
this.paintChar(accent.fontChar,scaledAccentX,scaledAccentY,patternTransform)}}var charWidth=width*widthAdvanceScale+spacing*fontDirection
x+=charWidth
restoreNeeded&&ctx.restore()}}vertical?current.y-=x*textHScale:current.x+=x*textHScale
ctx.restore()}},showType3Text:function(glyphs){var i,glyph,width,spacingLength,ctx=this.ctx,current=this.current,font=current.font,fontSize=current.fontSize,fontDirection=current.fontDirection,spacingDir=font.vertical?1:-1,charSpacing=current.charSpacing,wordSpacing=current.wordSpacing,textHScale=current.textHScale*fontDirection,fontMatrix=current.fontMatrix||_util.FONT_IDENTITY_MATRIX,glyphsLength=glyphs.length,isTextInvisible=current.textRenderingMode===_util.TextRenderingMode.INVISIBLE
if(!isTextInvisible&&0!==fontSize){this._cachedGetSinglePixelWidth=null
ctx.save()
ctx.transform.apply(ctx,current.textMatrix)
ctx.translate(current.x,current.y)
ctx.scale(textHScale,fontDirection)
for(i=0;glyphsLength>i;++i){glyph=glyphs[i]
if((0,_util.isNum)(glyph)){spacingLength=spacingDir*glyph*fontSize/1e3
this.ctx.translate(spacingLength,0)
current.x+=spacingLength*textHScale}else{var spacing=(glyph.isSpace?wordSpacing:0)+charSpacing,operatorList=font.charProcOperatorList[glyph.operatorListId]
if(operatorList){this.processingType3=glyph
this.save()
ctx.scale(fontSize,fontSize)
ctx.transform.apply(ctx,fontMatrix)
this.executeOperatorList(operatorList)
this.restore()
var transformed=_util.Util.applyTransform([glyph.width,0],fontMatrix)
width=transformed[0]*fontSize+spacing
ctx.translate(width,0)
current.x+=width*textHScale}else(0,_util.warn)('Type3 character "'.concat(glyph.operatorListId,'" is not available.'))}}ctx.restore()
this.processingType3=null}},setCharWidth:function(xWidth,yWidth){},setCharWidthAndBounds:function(xWidth,yWidth,llx,lly,urx,ury){this.ctx.rect(llx,lly,urx-llx,ury-lly)
this.clip()
this.endPath()},getColorN_Pattern:function(IR){var pattern,_this=this
if("TilingPattern"===IR[0]){var color=IR[1],baseTransform=this.baseTransform||this.ctx.mozCurrentTransform.slice(),canvasGraphicsFactory={createCanvasGraphics:function(ctx){return new CanvasGraphics(ctx,_this.commonObjs,_this.objs,_this.canvasFactory,_this.webGLContext)}}
pattern=new _pattern_helper.TilingPattern(IR,color,this.ctx,canvasGraphicsFactory,baseTransform)}else pattern=(0,_pattern_helper.getShadingPatternFromIR)(IR)
return pattern},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments)
this.current.patternFill=!0},setStrokeRGBColor:function(r,g,b){var color=_util.Util.makeCssRgb(r,g,b)
this.ctx.strokeStyle=color
this.current.strokeColor=color},setFillRGBColor:function(r,g,b){var color=_util.Util.makeCssRgb(r,g,b)
this.ctx.fillStyle=color
this.current.fillColor=color
this.current.patternFill=!1},shadingFill:function(patternIR){var ctx=this.ctx
this.save()
var pattern=(0,_pattern_helper.getShadingPatternFromIR)(patternIR)
ctx.fillStyle=pattern.getPattern(ctx,this,!0)
var inv=ctx.mozCurrentTransformInverse
if(inv){var canvas=ctx.canvas,width=canvas.width,height=canvas.height,bl=_util.Util.applyTransform([0,0],inv),br=_util.Util.applyTransform([0,height],inv),ul=_util.Util.applyTransform([width,0],inv),ur=_util.Util.applyTransform([width,height],inv),x0=Math.min(bl[0],br[0],ul[0],ur[0]),y0=Math.min(bl[1],br[1],ul[1],ur[1]),x1=Math.max(bl[0],br[0],ul[0],ur[0]),y1=Math.max(bl[1],br[1],ul[1],ur[1])
this.ctx.fillRect(x0,y0,x1-x0,y1-y0)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.restore()},beginInlineImage:function(){(0,_util.unreachable)("Should not call beginInlineImage")},beginImageData:function(){(0,_util.unreachable)("Should not call beginImageData")},paintFormXObjectBegin:function(matrix,bbox){this.save()
this.baseTransformStack.push(this.baseTransform)
Array.isArray(matrix)&&6===matrix.length&&this.transform.apply(this,matrix)
this.baseTransform=this.ctx.mozCurrentTransform
if(bbox){var width=bbox[2]-bbox[0],height=bbox[3]-bbox[1]
this.ctx.rect(bbox[0],bbox[1],width,height)
this.clip()
this.endPath()}},paintFormXObjectEnd:function(){this.restore()
this.baseTransform=this.baseTransformStack.pop()},beginGroup:function(group){this.save()
var currentCtx=this.ctx
group.isolated||(0,_util.info)("TODO: Support non-isolated groups.")
group.knockout&&(0,_util.warn)("Knockout groups not supported.")
var currentTransform=currentCtx.mozCurrentTransform
group.matrix&&currentCtx.transform.apply(currentCtx,group.matrix)
if(!group.bbox)throw new Error("Bounding box is required.")
var bounds=_util.Util.getAxialAlignedBoundingBox(group.bbox,currentCtx.mozCurrentTransform),canvasBounds=[0,0,currentCtx.canvas.width,currentCtx.canvas.height]
bounds=_util.Util.intersect(bounds,canvasBounds)||[0,0,0,0]
var offsetX=Math.floor(bounds[0]),offsetY=Math.floor(bounds[1]),drawnWidth=Math.max(Math.ceil(bounds[2])-offsetX,1),drawnHeight=Math.max(Math.ceil(bounds[3])-offsetY,1),scaleX=1,scaleY=1
if(drawnWidth>MAX_GROUP_SIZE){scaleX=drawnWidth/MAX_GROUP_SIZE
drawnWidth=MAX_GROUP_SIZE}if(drawnHeight>MAX_GROUP_SIZE){scaleY=drawnHeight/MAX_GROUP_SIZE
drawnHeight=MAX_GROUP_SIZE}var cacheId="groupAt"+this.groupLevel
group.smask&&(cacheId+="_smask_"+this.smaskCounter++%2)
var scratchCanvas=this.cachedCanvases.getCanvas(cacheId,drawnWidth,drawnHeight,!0),groupCtx=scratchCanvas.context
groupCtx.scale(1/scaleX,1/scaleY)
groupCtx.translate(-offsetX,-offsetY)
groupCtx.transform.apply(groupCtx,currentTransform)
if(group.smask)this.smaskStack.push({canvas:scratchCanvas.canvas,context:groupCtx,offsetX:offsetX,offsetY:offsetY,scaleX:scaleX,scaleY:scaleY,subtype:group.smask.subtype,backdrop:group.smask.backdrop,transferMap:group.smask.transferMap||null,startTransformInverse:null})
else{currentCtx.setTransform(1,0,0,1,0,0)
currentCtx.translate(offsetX,offsetY)
currentCtx.scale(scaleX,scaleY)}copyCtxState(currentCtx,groupCtx)
this.ctx=groupCtx
this.setGState([["BM","source-over"],["ca",1],["CA",1]])
this.groupStack.push(currentCtx)
this.groupLevel++
this.current.activeSMask=null},endGroup:function(group){this.groupLevel--
var groupCtx=this.ctx
this.ctx=this.groupStack.pop()
void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1
group.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(groupCtx.canvas,0,0)
this.restore()},beginAnnotations:function(){this.save()
this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(rect,transform,matrix){this.save()
resetCtxToDefault(this.ctx)
this.current=new CanvasExtraState
if(Array.isArray(rect)&&4===rect.length){var width=rect[2]-rect[0],height=rect[3]-rect[1]
this.ctx.rect(rect[0],rect[1],width,height)
this.clip()
this.endPath()}this.transform.apply(this,transform)
this.transform.apply(this,matrix)},endAnnotation:function(){this.restore()},paintJpegXObject:function(objId,w,h){var domImage=this.objs.get(objId)
if(domImage){this.save()
var ctx=this.ctx
ctx.scale(1/w,-1/h)
ctx.drawImage(domImage,0,0,domImage.width,domImage.height,0,-h,w,h)
if(this.imageLayer){var currentTransform=ctx.mozCurrentTransformInverse,position=this.getCanvasPosition(0,0)
this.imageLayer.appendImage({objId:objId,left:position[0],top:position[1],width:w/currentTransform[0],height:h/currentTransform[3]})}this.restore()}else(0,_util.warn)("Dependent image isn't ready yet")},paintImageMaskXObject:function(img){var ctx=this.ctx,width=img.width,height=img.height,fillColor=this.current.fillColor,isPatternFill=this.current.patternFill,glyph=this.processingType3
COMPILE_TYPE3_GLYPHS&&glyph&&void 0===glyph.compiled&&(MAX_SIZE_TO_COMPILE>=width&&MAX_SIZE_TO_COMPILE>=height?glyph.compiled=compileType3Glyph({data:img.data,width:width,height:height}):glyph.compiled=null)
if(glyph&&glyph.compiled)glyph.compiled(ctx)
else{var maskCanvas=this.cachedCanvases.getCanvas("maskCanvas",width,height),maskCtx=maskCanvas.context
maskCtx.save()
putBinaryImageMask(maskCtx,img)
maskCtx.globalCompositeOperation="source-in"
maskCtx.fillStyle=isPatternFill?fillColor.getPattern(maskCtx,this):fillColor
maskCtx.fillRect(0,0,width,height)
maskCtx.restore()
this.paintInlineImageXObject(maskCanvas.canvas)}},paintImageMaskXObjectRepeat:function(imgData,scaleX,scaleY,positions){var width=imgData.width,height=imgData.height,fillColor=this.current.fillColor,isPatternFill=this.current.patternFill,maskCanvas=this.cachedCanvases.getCanvas("maskCanvas",width,height),maskCtx=maskCanvas.context
maskCtx.save()
putBinaryImageMask(maskCtx,imgData)
maskCtx.globalCompositeOperation="source-in"
maskCtx.fillStyle=isPatternFill?fillColor.getPattern(maskCtx,this):fillColor
maskCtx.fillRect(0,0,width,height)
maskCtx.restore()
for(var ctx=this.ctx,i=0,ii=positions.length;ii>i;i+=2){ctx.save()
ctx.transform(scaleX,0,0,scaleY,positions[i],positions[i+1])
ctx.scale(1,-1)
ctx.drawImage(maskCanvas.canvas,0,0,width,height,0,-1,1,1)
ctx.restore()}},paintImageMaskXObjectGroup:function(images){for(var ctx=this.ctx,fillColor=this.current.fillColor,isPatternFill=this.current.patternFill,i=0,ii=images.length;ii>i;i++){var image=images[i],width=image.width,height=image.height,maskCanvas=this.cachedCanvases.getCanvas("maskCanvas",width,height),maskCtx=maskCanvas.context
maskCtx.save()
putBinaryImageMask(maskCtx,image)
maskCtx.globalCompositeOperation="source-in"
maskCtx.fillStyle=isPatternFill?fillColor.getPattern(maskCtx,this):fillColor
maskCtx.fillRect(0,0,width,height)
maskCtx.restore()
ctx.save()
ctx.transform.apply(ctx,image.transform)
ctx.scale(1,-1)
ctx.drawImage(maskCanvas.canvas,0,0,width,height,0,-1,1,1)
ctx.restore()}},paintImageXObject:function(objId){var imgData=this.objs.get(objId)
imgData?this.paintInlineImageXObject(imgData):(0,_util.warn)("Dependent image isn't ready yet")},paintImageXObjectRepeat:function(objId,scaleX,scaleY,positions){var imgData=this.objs.get(objId)
if(imgData){for(var width=imgData.width,height=imgData.height,map=[],i=0,ii=positions.length;ii>i;i+=2)map.push({transform:[scaleX,0,0,scaleY,positions[i],positions[i+1]],x:0,y:0,w:width,h:height})
this.paintInlineImageXObjectGroup(imgData,map)}else(0,_util.warn)("Dependent image isn't ready yet")},paintInlineImageXObject:function(imgData){var width=imgData.width,height=imgData.height,ctx=this.ctx
this.save()
ctx.scale(1/width,-1/height)
var imgToPaint,tmpCanvas,currentTransform=ctx.mozCurrentTransformInverse,a=currentTransform[0],b=currentTransform[1],widthScale=Math.max(Math.sqrt(a*a+b*b),1),c=currentTransform[2],d=currentTransform[3],heightScale=Math.max(Math.sqrt(c*c+d*d),1)
if("function"==typeof HTMLElement&&imgData instanceof HTMLElement||!imgData.data)imgToPaint=imgData
else{tmpCanvas=this.cachedCanvases.getCanvas("inlineImage",width,height)
var tmpCtx=tmpCanvas.context
putBinaryImageData(tmpCtx,imgData)
imgToPaint=tmpCanvas.canvas}for(var paintWidth=width,paintHeight=height,tmpCanvasId="prescale1";widthScale>2&&paintWidth>1||heightScale>2&&paintHeight>1;){var newWidth=paintWidth,newHeight=paintHeight
if(widthScale>2&&paintWidth>1){newWidth=Math.ceil(paintWidth/2)
widthScale/=paintWidth/newWidth}if(heightScale>2&&paintHeight>1){newHeight=Math.ceil(paintHeight/2)
heightScale/=paintHeight/newHeight}tmpCanvas=this.cachedCanvases.getCanvas(tmpCanvasId,newWidth,newHeight)
tmpCtx=tmpCanvas.context
tmpCtx.clearRect(0,0,newWidth,newHeight)
tmpCtx.drawImage(imgToPaint,0,0,paintWidth,paintHeight,0,0,newWidth,newHeight)
imgToPaint=tmpCanvas.canvas
paintWidth=newWidth
paintHeight=newHeight
tmpCanvasId="prescale1"===tmpCanvasId?"prescale2":"prescale1"}ctx.drawImage(imgToPaint,0,0,paintWidth,paintHeight,0,-height,width,height)
if(this.imageLayer){var position=this.getCanvasPosition(0,-height)
this.imageLayer.appendImage({imgData:imgData,left:position[0],top:position[1],width:width/currentTransform[0],height:height/currentTransform[3]})}this.restore()},paintInlineImageXObjectGroup:function(imgData,map){var ctx=this.ctx,w=imgData.width,h=imgData.height,tmpCanvas=this.cachedCanvases.getCanvas("inlineImage",w,h),tmpCtx=tmpCanvas.context
putBinaryImageData(tmpCtx,imgData)
for(var i=0,ii=map.length;ii>i;i++){var entry=map[i]
ctx.save()
ctx.transform.apply(ctx,entry.transform)
ctx.scale(1,-1)
ctx.drawImage(tmpCanvas.canvas,entry.x,entry.y,entry.w,entry.h,0,-1,1,1)
if(this.imageLayer){var position=this.getCanvasPosition(entry.x,entry.y)
this.imageLayer.appendImage({imgData:imgData,left:position[0],top:position[1],width:w,height:h})}ctx.restore()}},paintSolidColorImageMask:function(){this.ctx.fillRect(0,0,1,1)},paintXObject:function(){(0,_util.warn)("Unsupported 'paintXObject' command.")},markPoint:function(tag){},markPointProps:function(tag,properties){},beginMarkedContent:function(tag){},beginMarkedContentProps:function(tag,properties){},endMarkedContent:function(){},beginCompat:function(){},endCompat:function(){},consumePath:function(){var ctx=this.ctx
if(this.pendingClip){this.pendingClip===EO_CLIP?ctx.clip("evenodd"):ctx.clip()
this.pendingClip=null}ctx.beginPath()},getSinglePixelWidth:function(scale){if(null===this._cachedGetSinglePixelWidth){var inverse=this.ctx.mozCurrentTransformInverse
this._cachedGetSinglePixelWidth=Math.sqrt(Math.max(inverse[0]*inverse[0]+inverse[1]*inverse[1],inverse[2]*inverse[2]+inverse[3]*inverse[3]))}return this._cachedGetSinglePixelWidth},getCanvasPosition:function(x,y){var transform=this.ctx.mozCurrentTransform
return[transform[0]*x+transform[2]*y+transform[4],transform[1]*x+transform[3]*y+transform[5]]}}
for(var op in _util.OPS)CanvasGraphics.prototype[_util.OPS[op]]=CanvasGraphics.prototype[op]
return CanvasGraphics}()
exports.CanvasGraphics=CanvasGraphics},function(module,exports,__w_pdfjs_require__){"use strict"
function getShadingPatternFromIR(raw){var shadingIR=ShadingIRs[raw[0]]
if(!shadingIR)throw new Error("Unknown IR type: ".concat(raw[0]))
return shadingIR.fromIR(raw)}Object.defineProperty(exports,"__esModule",{value:!0})
exports.getShadingPatternFromIR=getShadingPatternFromIR
exports.TilingPattern=void 0
var _util=__w_pdfjs_require__(1),ShadingIRs={}
ShadingIRs.RadialAxial={fromIR:function(raw){var type=raw[1],colorStops=raw[2],p0=raw[3],p1=raw[4],r0=raw[5],r1=raw[6]
return{type:"Pattern",getPattern:function(ctx){var grad
"axial"===type?grad=ctx.createLinearGradient(p0[0],p0[1],p1[0],p1[1]):"radial"===type&&(grad=ctx.createRadialGradient(p0[0],p0[1],r0,p1[0],p1[1],r1))
for(var i=0,ii=colorStops.length;ii>i;++i){var c=colorStops[i]
grad.addColorStop(c[0],c[1])}return grad}}}}
var createMeshCanvas=function(){function drawTriangle(data,context,p1,p2,p3,c1,c2,c3){var tmp,coords=context.coords,colors=context.colors,bytes=data.data,rowSize=4*data.width
if(coords[p1+1]>coords[p2+1]){tmp=p1
p1=p2
p2=tmp
tmp=c1
c1=c2
c2=tmp}if(coords[p2+1]>coords[p3+1]){tmp=p2
p2=p3
p3=tmp
tmp=c2
c2=c3
c3=tmp}if(coords[p1+1]>coords[p2+1]){tmp=p1
p1=p2
p2=tmp
tmp=c1
c1=c2
c2=tmp}var x1=(coords[p1]+context.offsetX)*context.scaleX,y1=(coords[p1+1]+context.offsetY)*context.scaleY,x2=(coords[p2]+context.offsetX)*context.scaleX,y2=(coords[p2+1]+context.offsetY)*context.scaleY,x3=(coords[p3]+context.offsetX)*context.scaleX,y3=(coords[p3+1]+context.offsetY)*context.scaleY
if(!(y1>=y3))for(var xa,car,cag,cab,xb,cbr,cbg,cbb,k,c1r=colors[c1],c1g=colors[c1+1],c1b=colors[c1+2],c2r=colors[c2],c2g=colors[c2+1],c2b=colors[c2+2],c3r=colors[c3],c3g=colors[c3+1],c3b=colors[c3+2],minY=Math.round(y1),maxY=Math.round(y3),y=minY;maxY>=y;y++){if(y2>y){k=y1>y?0:y1===y2?1:(y1-y)/(y1-y2)
xa=x1-(x1-x2)*k
car=c1r-(c1r-c2r)*k
cag=c1g-(c1g-c2g)*k
cab=c1b-(c1b-c2b)*k}else{k=y>y3?1:y2===y3?0:(y2-y)/(y2-y3)
xa=x2-(x2-x3)*k
car=c2r-(c2r-c3r)*k
cag=c2g-(c2g-c3g)*k
cab=c2b-(c2b-c3b)*k}k=y1>y?0:y>y3?1:(y1-y)/(y1-y3)
xb=x1-(x1-x3)*k
cbr=c1r-(c1r-c3r)*k
cbg=c1g-(c1g-c3g)*k
cbb=c1b-(c1b-c3b)*k
for(var x1_=Math.round(Math.min(xa,xb)),x2_=Math.round(Math.max(xa,xb)),j=rowSize*y+4*x1_,x=x1_;x2_>=x;x++){k=(xa-x)/(xa-xb)
k=0>k?0:k>1?1:k
bytes[j++]=car-(car-cbr)*k|0
bytes[j++]=cag-(cag-cbg)*k|0
bytes[j++]=cab-(cab-cbb)*k|0
bytes[j++]=255}}}function drawFigure(data,figure,context){var i,ii,ps=figure.coords,cs=figure.colors
switch(figure.type){case"lattice":var verticesPerRow=figure.verticesPerRow,rows=Math.floor(ps.length/verticesPerRow)-1,cols=verticesPerRow-1
for(i=0;rows>i;i++)for(var q=i*verticesPerRow,j=0;cols>j;j++,q++){drawTriangle(data,context,ps[q],ps[q+1],ps[q+verticesPerRow],cs[q],cs[q+1],cs[q+verticesPerRow])
drawTriangle(data,context,ps[q+verticesPerRow+1],ps[q+1],ps[q+verticesPerRow],cs[q+verticesPerRow+1],cs[q+1],cs[q+verticesPerRow])}break
case"triangles":for(i=0,ii=ps.length;ii>i;i+=3)drawTriangle(data,context,ps[i],ps[i+1],ps[i+2],cs[i],cs[i+1],cs[i+2])
break
default:throw new Error("illegal figure")}}function createMeshCanvas(bounds,combinesScale,coords,colors,figures,backgroundColor,cachedCanvases,webGLContext){var canvas,tmpCanvas,i,ii,EXPECTED_SCALE=1.1,MAX_PATTERN_SIZE=3e3,BORDER_SIZE=2,offsetX=Math.floor(bounds[0]),offsetY=Math.floor(bounds[1]),boundsWidth=Math.ceil(bounds[2])-offsetX,boundsHeight=Math.ceil(bounds[3])-offsetY,width=Math.min(Math.ceil(Math.abs(boundsWidth*combinesScale[0]*EXPECTED_SCALE)),MAX_PATTERN_SIZE),height=Math.min(Math.ceil(Math.abs(boundsHeight*combinesScale[1]*EXPECTED_SCALE)),MAX_PATTERN_SIZE),scaleX=boundsWidth/width,scaleY=boundsHeight/height,context={coords:coords,colors:colors,offsetX:-offsetX,offsetY:-offsetY,scaleX:1/scaleX,scaleY:1/scaleY},paddedWidth=width+2*BORDER_SIZE,paddedHeight=height+2*BORDER_SIZE
if(webGLContext.isEnabled){canvas=webGLContext.drawFigures({width:width,height:height,backgroundColor:backgroundColor,figures:figures,context:context})
tmpCanvas=cachedCanvases.getCanvas("mesh",paddedWidth,paddedHeight,!1)
tmpCanvas.context.drawImage(canvas,BORDER_SIZE,BORDER_SIZE)
canvas=tmpCanvas.canvas}else{tmpCanvas=cachedCanvases.getCanvas("mesh",paddedWidth,paddedHeight,!1)
var tmpCtx=tmpCanvas.context,data=tmpCtx.createImageData(width,height)
if(backgroundColor){var bytes=data.data
for(i=0,ii=bytes.length;ii>i;i+=4){bytes[i]=backgroundColor[0]
bytes[i+1]=backgroundColor[1]
bytes[i+2]=backgroundColor[2]
bytes[i+3]=255}}for(i=0;i<figures.length;i++)drawFigure(data,figures[i],context)
tmpCtx.putImageData(data,BORDER_SIZE,BORDER_SIZE)
canvas=tmpCanvas.canvas}return{canvas:canvas,offsetX:offsetX-BORDER_SIZE*scaleX,offsetY:offsetY-BORDER_SIZE*scaleY,scaleX:scaleX,scaleY:scaleY}}return createMeshCanvas}()
ShadingIRs.Mesh={fromIR:function(raw){var coords=raw[2],colors=raw[3],figures=raw[4],bounds=raw[5],matrix=raw[6],background=raw[8]
return{type:"Pattern",getPattern:function(ctx,owner,shadingFill){var scale
if(shadingFill)scale=_util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform)
else{scale=_util.Util.singularValueDecompose2dScale(owner.baseTransform)
if(matrix){var matrixScale=_util.Util.singularValueDecompose2dScale(matrix)
scale=[scale[0]*matrixScale[0],scale[1]*matrixScale[1]]}}var temporaryPatternCanvas=createMeshCanvas(bounds,scale,coords,colors,figures,shadingFill?null:background,owner.cachedCanvases,owner.webGLContext)
if(!shadingFill){ctx.setTransform.apply(ctx,owner.baseTransform)
matrix&&ctx.transform.apply(ctx,matrix)}ctx.translate(temporaryPatternCanvas.offsetX,temporaryPatternCanvas.offsetY)
ctx.scale(temporaryPatternCanvas.scaleX,temporaryPatternCanvas.scaleY)
return ctx.createPattern(temporaryPatternCanvas.canvas,"no-repeat")}}}}
ShadingIRs.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}}
var TilingPattern=function(){function TilingPattern(IR,color,ctx,canvasGraphicsFactory,baseTransform){this.operatorList=IR[2]
this.matrix=IR[3]||[1,0,0,1,0,0]
this.bbox=IR[4]
this.xstep=IR[5]
this.ystep=IR[6]
this.paintType=IR[7]
this.tilingType=IR[8]
this.color=color
this.canvasGraphicsFactory=canvasGraphicsFactory
this.baseTransform=baseTransform
this.type="Pattern"
this.ctx=ctx}var PaintType={COLORED:1,UNCOLORED:2},MAX_PATTERN_SIZE=3e3
TilingPattern.prototype={createPatternCanvas:function(owner){var operatorList=this.operatorList,bbox=this.bbox,xstep=this.xstep,ystep=this.ystep,paintType=this.paintType,tilingType=this.tilingType,color=this.color,canvasGraphicsFactory=this.canvasGraphicsFactory;(0,_util.info)("TilingType: "+tilingType)
var x0=bbox[0],y0=bbox[1],x1=bbox[2],y1=bbox[3],topLeft=[x0,y0],botRight=[x0+xstep,y0+ystep],width=botRight[0]-topLeft[0],height=botRight[1]-topLeft[1],matrixScale=_util.Util.singularValueDecompose2dScale(this.matrix),curMatrixScale=_util.Util.singularValueDecompose2dScale(this.baseTransform),combinedScale=[matrixScale[0]*curMatrixScale[0],matrixScale[1]*curMatrixScale[1]]
width=Math.min(Math.ceil(Math.abs(width*combinedScale[0])),MAX_PATTERN_SIZE)
height=Math.min(Math.ceil(Math.abs(height*combinedScale[1])),MAX_PATTERN_SIZE)
var tmpCanvas=owner.cachedCanvases.getCanvas("pattern",width,height,!0),tmpCtx=tmpCanvas.context,graphics=canvasGraphicsFactory.createCanvasGraphics(tmpCtx)
graphics.groupLevel=owner.groupLevel
this.setFillAndStrokeStyleToContext(graphics,paintType,color)
this.setScale(width,height,xstep,ystep)
this.transformToScale(graphics)
var tmpTranslate=[1,0,0,1,-topLeft[0],-topLeft[1]]
graphics.transform.apply(graphics,tmpTranslate)
this.clipBbox(graphics,bbox,x0,y0,x1,y1)
graphics.executeOperatorList(operatorList)
return tmpCanvas.canvas},setScale:function(width,height,xstep,ystep){this.scale=[width/xstep,height/ystep]},transformToScale:function(graphics){var scale=this.scale,tmpScale=[scale[0],0,0,scale[1],0,0]
graphics.transform.apply(graphics,tmpScale)},scaleToContext:function(){var scale=this.scale
this.ctx.scale(1/scale[0],1/scale[1])},clipBbox:function(graphics,bbox,x0,y0,x1,y1){if(Array.isArray(bbox)&&4===bbox.length){var bboxWidth=x1-x0,bboxHeight=y1-y0
graphics.ctx.rect(x0,y0,bboxWidth,bboxHeight)
graphics.clip()
graphics.endPath()}},setFillAndStrokeStyleToContext:function(graphics,paintType,color){var context=graphics.ctx,current=graphics.current
switch(paintType){case PaintType.COLORED:var ctx=this.ctx
context.fillStyle=ctx.fillStyle
context.strokeStyle=ctx.strokeStyle
current.fillColor=ctx.fillStyle
current.strokeColor=ctx.strokeStyle
break
case PaintType.UNCOLORED:var cssColor=_util.Util.makeCssRgb(color[0],color[1],color[2])
context.fillStyle=cssColor
context.strokeStyle=cssColor
current.fillColor=cssColor
current.strokeColor=cssColor
break
default:throw new _util.FormatError("Unsupported paint type: ".concat(paintType))}},getPattern:function(ctx,owner){var temporaryPatternCanvas=this.createPatternCanvas(owner)
ctx=this.ctx
ctx.setTransform.apply(ctx,this.baseTransform)
ctx.transform.apply(ctx,this.matrix)
this.scaleToContext()
return ctx.createPattern(temporaryPatternCanvas,"repeat")}}
return TilingPattern}()
exports.TilingPattern=TilingPattern},function(module,exports,__w_pdfjs_require__){"use strict"
Object.defineProperty(exports,"__esModule",{value:!0})
exports.GlobalWorkerOptions=void 0
var GlobalWorkerOptions=Object.create(null)
exports.GlobalWorkerOptions=GlobalWorkerOptions
GlobalWorkerOptions.workerPort=void 0===GlobalWorkerOptions.workerPort?null:GlobalWorkerOptions.workerPort
GlobalWorkerOptions.workerSrc=void 0===GlobalWorkerOptions.workerSrc?"":GlobalWorkerOptions.workerSrc},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error)
return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments
return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args)
_next(void 0)})}}function resolveCall(_x,_x2){return _resolveCall.apply(this,arguments)}function _resolveCall(){_resolveCall=_asyncToGenerator(_regenerator["default"].mark(function _callee(fn,args){var thisArg,_args=arguments
return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:thisArg=_args.length>2&&void 0!==_args[2]?_args[2]:null
if(fn){_context.next=3
break}return _context.abrupt("return")
case 3:return _context.abrupt("return",fn.apply(thisArg,args))
case 4:case"end":return _context.stop()}},_callee,this)}))
return _resolveCall.apply(this,arguments)}function wrapReason(reason){if("object"!==_typeof(reason))return reason
switch(reason.name){case"AbortException":return new _util.AbortException(reason.message)
case"MissingPDFException":return new _util.MissingPDFException(reason.message)
case"UnexpectedResponseException":return new _util.UnexpectedResponseException(reason.message,reason.status)
default:return new _util.UnknownErrorException(reason.message,reason.details)}}function makeReasonSerializable(reason){return!(reason instanceof Error)||reason instanceof _util.AbortException||reason instanceof _util.MissingPDFException||reason instanceof _util.UnexpectedResponseException||reason instanceof _util.UnknownErrorException?reason:new _util.UnknownErrorException(reason.message,reason.toString())}function resolveOrReject(capability,success,reason){success?capability.resolve():capability.reject(reason)}function finalize(promise){return Promise.resolve(promise)["catch"](function(){})}function MessageHandler(sourceName,targetName,comObj){var _this=this
this.sourceName=sourceName
this.targetName=targetName
this.comObj=comObj
this.callbackId=1
this.streamId=1
this.postMessageTransfers=!0
this.streamSinks=Object.create(null)
this.streamControllers=Object.create(null)
var callbacksCapabilities=this.callbacksCapabilities=Object.create(null),ah=this.actionHandler=Object.create(null)
this._onComObjOnMessage=function(event){var data=event.data
if(data.targetName===_this.sourceName)if(data.stream)_this._processStreamMessage(data)
else if(data.isReply){var callbackId=data.callbackId
if(!(data.callbackId in callbacksCapabilities))throw new Error("Cannot resolve callback ".concat(callbackId))
var callback=callbacksCapabilities[callbackId]
delete callbacksCapabilities[callbackId]
"error"in data?callback.reject(wrapReason(data.error)):callback.resolve(data.data)}else{if(!(data.action in ah))throw new Error("Unknown action from worker: ".concat(data.action))
var action=ah[data.action]
if(data.callbackId){var _sourceName=_this.sourceName,_targetName=data.sourceName
Promise.resolve().then(function(){return action[0].call(action[1],data.data)}).then(function(result){comObj.postMessage({sourceName:_sourceName,targetName:_targetName,isReply:!0,callbackId:data.callbackId,data:result})},function(reason){comObj.postMessage({sourceName:_sourceName,targetName:_targetName,isReply:!0,callbackId:data.callbackId,error:makeReasonSerializable(reason)})})}else data.streamId?_this._createStreamSink(data):action[0].call(action[1],data.data)}}
comObj.addEventListener("message",this._onComObjOnMessage)}Object.defineProperty(exports,"__esModule",{value:!0})
exports.MessageHandler=MessageHandler
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(147)),_util=__w_pdfjs_require__(1)
MessageHandler.prototype={on:function(actionName,handler,scope){var ah=this.actionHandler
if(ah[actionName])throw new Error('There is already an actionName called "'.concat(actionName,'"'))
ah[actionName]=[handler,scope]},send:function(actionName,data,transfers){var message={sourceName:this.sourceName,targetName:this.targetName,action:actionName,data:data}
this.postMessage(message,transfers)},sendWithPromise:function(actionName,data,transfers){var callbackId=this.callbackId++,message={sourceName:this.sourceName,targetName:this.targetName,action:actionName,data:data,callbackId:callbackId},capability=(0,_util.createPromiseCapability)()
this.callbacksCapabilities[callbackId]=capability
try{this.postMessage(message,transfers)}catch(e){capability.reject(e)}return capability.promise},sendWithStream:function(actionName,data,queueingStrategy,transfers){var _this2=this,streamId=this.streamId++,sourceName=this.sourceName,targetName=this.targetName
return new _util.ReadableStream({start:function(controller){var startCapability=(0,_util.createPromiseCapability)()
_this2.streamControllers[streamId]={controller:controller,startCall:startCapability,isClosed:!1}
_this2.postMessage({sourceName:sourceName,targetName:targetName,action:actionName,streamId:streamId,data:data,desiredSize:controller.desiredSize})
return startCapability.promise},pull:function(controller){var pullCapability=(0,_util.createPromiseCapability)()
_this2.streamControllers[streamId].pullCall=pullCapability
_this2.postMessage({sourceName:sourceName,targetName:targetName,stream:"pull",streamId:streamId,desiredSize:controller.desiredSize})
return pullCapability.promise},cancel:function(reason){var cancelCapability=(0,_util.createPromiseCapability)()
_this2.streamControllers[streamId].cancelCall=cancelCapability
_this2.streamControllers[streamId].isClosed=!0
_this2.postMessage({sourceName:sourceName,targetName:targetName,stream:"cancel",reason:reason,streamId:streamId})
return cancelCapability.promise}},queueingStrategy)},_createStreamSink:function(data){var _this3=this,self=this,action=this.actionHandler[data.action],streamId=data.streamId,desiredSize=data.desiredSize,sourceName=this.sourceName,targetName=data.sourceName,capability=(0,_util.createPromiseCapability)(),sendStreamRequest=function(_ref){var stream=_ref.stream,chunk=_ref.chunk,transfers=_ref.transfers,success=_ref.success,reason=_ref.reason
_this3.postMessage({sourceName:sourceName,targetName:targetName,stream:stream,streamId:streamId,chunk:chunk,success:success,reason:reason},transfers)},streamSink={enqueue:function(chunk){var size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,transfers=arguments.length>2?arguments[2]:void 0
if(!this.isCancelled){var lastDesiredSize=this.desiredSize
this.desiredSize-=size
if(lastDesiredSize>0&&this.desiredSize<=0){this.sinkCapability=(0,_util.createPromiseCapability)()
this.ready=this.sinkCapability.promise}sendStreamRequest({stream:"enqueue",chunk:chunk,transfers:transfers})}},close:function(){if(!this.isCancelled){this.isCancelled=!0
sendStreamRequest({stream:"close"})
delete self.streamSinks[streamId]}},error:function(reason){if(!this.isCancelled){this.isCancelled=!0
sendStreamRequest({stream:"error",reason:reason})}},sinkCapability:capability,onPull:null,onCancel:null,isCancelled:!1,desiredSize:desiredSize,ready:null}
streamSink.sinkCapability.resolve()
streamSink.ready=streamSink.sinkCapability.promise
this.streamSinks[streamId]=streamSink
resolveCall(action[0],[data.data,streamSink],action[1]).then(function(){sendStreamRequest({stream:"start_complete",success:!0})},function(reason){sendStreamRequest({stream:"start_complete",success:!1,reason:reason})})},_processStreamMessage:function(data){var _this4=this,sourceName=this.sourceName,targetName=data.sourceName,streamId=data.streamId,sendStreamResponse=function(_ref2){var stream=_ref2.stream,success=_ref2.success,reason=_ref2.reason
_this4.comObj.postMessage({sourceName:sourceName,targetName:targetName,stream:stream,success:success,streamId:streamId,reason:reason})},deleteStreamController=function(){Promise.all([_this4.streamControllers[data.streamId].startCall,_this4.streamControllers[data.streamId].pullCall,_this4.streamControllers[data.streamId].cancelCall].map(function(capability){return capability&&finalize(capability.promise)})).then(function(){delete _this4.streamControllers[data.streamId]})}
switch(data.stream){case"start_complete":resolveOrReject(this.streamControllers[data.streamId].startCall,data.success,wrapReason(data.reason))
break
case"pull_complete":resolveOrReject(this.streamControllers[data.streamId].pullCall,data.success,wrapReason(data.reason))
break
case"pull":if(!this.streamSinks[data.streamId]){sendStreamResponse({stream:"pull_complete",success:!0})
break}this.streamSinks[data.streamId].desiredSize<=0&&data.desiredSize>0&&this.streamSinks[data.streamId].sinkCapability.resolve()
this.streamSinks[data.streamId].desiredSize=data.desiredSize
resolveCall(this.streamSinks[data.streamId].onPull).then(function(){sendStreamResponse({stream:"pull_complete",success:!0})},function(reason){sendStreamResponse({stream:"pull_complete",success:!1,reason:reason})})
break
case"enqueue":(0,_util.assert)(this.streamControllers[data.streamId],"enqueue should have stream controller")
this.streamControllers[data.streamId].isClosed||this.streamControllers[data.streamId].controller.enqueue(data.chunk)
break
case"close":(0,_util.assert)(this.streamControllers[data.streamId],"close should have stream controller")
if(this.streamControllers[data.streamId].isClosed)break
this.streamControllers[data.streamId].isClosed=!0
this.streamControllers[data.streamId].controller.close()
deleteStreamController()
break
case"error":(0,_util.assert)(this.streamControllers[data.streamId],"error should have stream controller")
this.streamControllers[data.streamId].controller.error(wrapReason(data.reason))
deleteStreamController()
break
case"cancel_complete":resolveOrReject(this.streamControllers[data.streamId].cancelCall,data.success,wrapReason(data.reason))
deleteStreamController()
break
case"cancel":if(!this.streamSinks[data.streamId])break
resolveCall(this.streamSinks[data.streamId].onCancel,[wrapReason(data.reason)]).then(function(){sendStreamResponse({stream:"cancel_complete",success:!0})},function(reason){sendStreamResponse({stream:"cancel_complete",success:!1,reason:reason})})
this.streamSinks[data.streamId].sinkCapability.reject(wrapReason(data.reason))
this.streamSinks[data.streamId].isCancelled=!0
delete this.streamSinks[data.streamId]
break
default:throw new Error("Unexpected stream case")}},postMessage:function(message,transfers){transfers&&this.postMessageTransfers?this.comObj.postMessage(message,transfers):this.comObj.postMessage(message)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}},function(module,exports,__w_pdfjs_require__){"use strict"
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}Object.defineProperty(exports,"__esModule",{value:!0})
exports.Metadata=void 0
var _util=__w_pdfjs_require__(1),_xml_parser=__w_pdfjs_require__(159),Metadata=function(){function Metadata(data){_classCallCheck(this,Metadata);(0,_util.assert)("string"==typeof data,"Metadata: input is not a string")
data=this._repair(data)
var parser=new _xml_parser.SimpleXMLParser,xmlDocument=parser.parseFromString(data)
this._metadata=Object.create(null)
xmlDocument&&this._parse(xmlDocument)}_createClass(Metadata,[{key:"_repair",value:function(data){return data.replace(/^([^<]+)/,"").replace(/>\\376\\377([^<]+)/g,function(all,codes){for(var bytes=codes.replace(/\\([0-3])([0-7])([0-7])/g,function(code,d1,d2,d3){return String.fromCharCode(64*d1+8*d2+1*d3)}).replace(/&(amp|apos|gt|lt|quot);/g,function(str,name){switch(name){case"amp":return"&"
case"apos":return"'"
case"gt":return">"
case"lt":return"<"
case"quot":return'"'}throw new Error("_repair: ".concat(name," isn't defined."))}),chars="",i=0,ii=bytes.length;ii>i;i+=2){var code=256*bytes.charCodeAt(i)+bytes.charCodeAt(i+1)
chars+=code>=32&&127>code&&60!==code&&62!==code&&38!==code?String.fromCharCode(code):"&#x"+(65536+code).toString(16).substring(1)+";"}return">"+chars})}},{key:"_parse",value:function(xmlDocument){var rdf=xmlDocument.documentElement
if("rdf:rdf"!==rdf.nodeName.toLowerCase()){rdf=rdf.firstChild
for(;rdf&&"rdf:rdf"!==rdf.nodeName.toLowerCase();)rdf=rdf.nextSibling}var nodeName=rdf?rdf.nodeName.toLowerCase():null
if(rdf&&"rdf:rdf"===nodeName&&rdf.hasChildNodes())for(var children=rdf.childNodes,i=0,ii=children.length;ii>i;i++){var desc=children[i]
if("rdf:description"===desc.nodeName.toLowerCase())for(var j=0,jj=desc.childNodes.length;jj>j;j++)if("#text"!==desc.childNodes[j].nodeName.toLowerCase()){var entry=desc.childNodes[j],name=entry.nodeName.toLowerCase()
this._metadata[name]=entry.textContent.trim()}}}},{key:"get",value:function(name){var data=this._metadata[name]
return"undefined"!=typeof data?data:null}},{key:"getAll",value:function(){return this._metadata}},{key:"has",value:function(name){return"undefined"!=typeof this._metadata[name]}}])
return Metadata}()
exports.Metadata=Metadata},function(module,exports,__w_pdfjs_require__){"use strict"
function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0
try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done);_n=!0){_arr.push(_s.value)
if(i&&_arr.length===i)break}}catch(err){_d=!0
_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){return Array.isArray(arr)?arr:void 0}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return self}function _get(target,property,receiver){_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(target,property,receiver){var base=_superPropBase(target,property)
if(base){var desc=Object.getOwnPropertyDescriptor(base,property)
return desc.get?desc.get.call(receiver):desc.value}}
return _get(target,property,receiver||target)}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property);){object=_getPrototypeOf(object)
if(null===object)break}return object}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)}
return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function")
subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}})
superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p
return o}
return _setPrototypeOf(o,p)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}function isWhitespace(s,index){var ch=s[index]
return" "===ch||"\n"===ch||"\r"===ch||"	"===ch}function isWhitespaceString(s){for(var i=0,ii=s.length;ii>i;i++)if(!isWhitespace(s,i))return!1
return!0}Object.defineProperty(exports,"__esModule",{value:!0})
exports.SimpleXMLParser=void 0
var XMLParserErrorCode={NoError:0,EndOfDocument:-1,UnterminatedCdat:-2,UnterminatedXmlDeclaration:-3,UnterminatedDoctypeDeclaration:-4,UnterminatedComment:-5,MalformedElement:-6,OutOfMemory:-7,UnterminatedAttributeValue:-8,UnterminatedElement:-9,ElementNeverBegun:-10},XMLParserBase=function(){function XMLParserBase(){_classCallCheck(this,XMLParserBase)}_createClass(XMLParserBase,[{key:"_resolveEntities",value:function(s){var _this=this
return s.replace(/&([^;]+);/g,function(all,entity){if("#x"===entity.substring(0,2))return String.fromCharCode(parseInt(entity.substring(2),16))
if("#"===entity.substring(0,1))return String.fromCharCode(parseInt(entity.substring(1),10))
switch(entity){case"lt":return"<"
case"gt":return">"
case"amp":return"&"
case"quot":return'"'}return _this.onResolveEntity(entity)})}},{key:"_parseContent",value:function(s,start){function skipWs(){for(;pos<s.length&&isWhitespace(s,pos);)++pos}for(var name,pos=start,attributes=[];pos<s.length&&!isWhitespace(s,pos)&&">"!==s[pos]&&"/"!==s[pos];)++pos
name=s.substring(start,pos)
skipWs()
for(;pos<s.length&&">"!==s[pos]&&"/"!==s[pos]&&"?"!==s[pos];){skipWs()
for(var attrName="",attrValue="";pos<s.length&&!isWhitespace(s,pos)&&"="!==s[pos];){attrName+=s[pos];++pos}skipWs()
if("="!==s[pos])return null;++pos
skipWs()
var attrEndChar=s[pos]
if('"'!==attrEndChar&&"'"!==attrEndChar)return null
var attrEndIndex=s.indexOf(attrEndChar,++pos)
if(0>attrEndIndex)return null
attrValue=s.substring(pos,attrEndIndex)
attributes.push({name:attrName,value:this._resolveEntities(attrValue)})
pos=attrEndIndex+1
skipWs()}return{name:name,attributes:attributes,parsed:pos-start}}},{key:"_parseProcessingInstruction",value:function(s,start){function skipWs(){for(;pos<s.length&&isWhitespace(s,pos);)++pos}for(var name,value,pos=start;pos<s.length&&!isWhitespace(s,pos)&&">"!==s[pos]&&"/"!==s[pos];)++pos
name=s.substring(start,pos)
skipWs()
for(var attrStart=pos;pos<s.length&&("?"!==s[pos]||">"!==s[pos+1]);)++pos
value=s.substring(attrStart,pos)
return{name:name,value:value,parsed:pos-start}}},{key:"parseXml",value:function(s){for(var i=0;i<s.length;){var ch=s[i],j=i
if("<"===ch){++j
var ch2=s[j],q=void 0
switch(ch2){case"/":++j
q=s.indexOf(">",j)
if(0>q){this.onError(XMLParserErrorCode.UnterminatedElement)
return}this.onEndElement(s.substring(j,q))
j=q+1
break
case"?":++j
var pi=this._parseProcessingInstruction(s,j)
if("?>"!==s.substring(j+pi.parsed,j+pi.parsed+2)){this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration)
return}this.onPi(pi.name,pi.value)
j+=pi.parsed+2
break
case"!":if("--"===s.substring(j+1,j+3)){q=s.indexOf("-->",j+3)
if(0>q){this.onError(XMLParserErrorCode.UnterminatedComment)
return}this.onComment(s.substring(j+3,q))
j=q+3}else if("[CDATA["===s.substring(j+1,j+8)){q=s.indexOf("]]>",j+8)
if(0>q){this.onError(XMLParserErrorCode.UnterminatedCdat)
return}this.onCdata(s.substring(j+8,q))
j=q+3}else{if("DOCTYPE"!==s.substring(j+1,j+8)){this.onError(XMLParserErrorCode.MalformedElement)
return}var q2=s.indexOf("[",j+8),complexDoctype=!1
q=s.indexOf(">",j+8)
if(0>q){this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration)
return}if(q2>0&&q>q2){q=s.indexOf("]>",j+8)
if(0>q){this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration)
return}complexDoctype=!0}var doctypeContent=s.substring(j+8,q+(complexDoctype?1:0))
this.onDoctype(doctypeContent)
j=q+(complexDoctype?2:1)}break
default:var content=this._parseContent(s,j)
if(null===content){this.onError(XMLParserErrorCode.MalformedElement)
return}var isClosed=!1
if("/>"===s.substring(j+content.parsed,j+content.parsed+2))isClosed=!0
else if(">"!==s.substring(j+content.parsed,j+content.parsed+1)){this.onError(XMLParserErrorCode.UnterminatedElement)
return}this.onBeginElement(content.name,content.attributes,isClosed)
j+=content.parsed+(isClosed?2:1)}}else{for(;j<s.length&&"<"!==s[j];)j++
var text=s.substring(i,j)
this.onText(this._resolveEntities(text))}i=j}}},{key:"onResolveEntity",value:function(name){return"&".concat(name,";")}},{key:"onPi",value:function(name,value){}},{key:"onComment",value:function(text){}},{key:"onCdata",value:function(text){}},{key:"onDoctype",value:function(doctypeContent){}},{key:"onText",value:function(text){}},{key:"onBeginElement",value:function(name,attributes,isEmpty){}},{key:"onEndElement",value:function(name){}},{key:"onError",value:function(code){}}])
return XMLParserBase}(),SimpleDOMNode=function(){function SimpleDOMNode(nodeName,nodeValue){_classCallCheck(this,SimpleDOMNode)
this.nodeName=nodeName
this.nodeValue=nodeValue
Object.defineProperty(this,"parentNode",{value:null,writable:!0})}_createClass(SimpleDOMNode,[{key:"hasChildNodes",value:function(){return this.childNodes&&this.childNodes.length>0}},{key:"firstChild",get:function(){return this.childNodes&&this.childNodes[0]}},{key:"nextSibling",get:function(){var childNodes=this.parentNode.childNodes
if(childNodes){var index=childNodes.indexOf(this)
if(-1!==index)return childNodes[index+1]}}},{key:"textContent",get:function(){return this.childNodes?this.childNodes.map(function(child){return child.textContent}).join(""):this.nodeValue||""}}])
return SimpleDOMNode}(),SimpleXMLParser=function(_XMLParserBase){function SimpleXMLParser(){var _this2
_classCallCheck(this,SimpleXMLParser)
_this2=_possibleConstructorReturn(this,_getPrototypeOf(SimpleXMLParser).call(this))
_this2._currentFragment=null
_this2._stack=null
_this2._errorCode=XMLParserErrorCode.NoError
return _this2}_inherits(SimpleXMLParser,_XMLParserBase)
_createClass(SimpleXMLParser,[{key:"parseFromString",value:function(data){this._currentFragment=[]
this._stack=[]
this._errorCode=XMLParserErrorCode.NoError
this.parseXml(data)
if(this._errorCode===XMLParserErrorCode.NoError){var _this$_currentFragmen=_slicedToArray(this._currentFragment,1),documentElement=_this$_currentFragmen[0]
if(documentElement)return{documentElement:documentElement}}}},{key:"onResolveEntity",value:function(name){switch(name){case"apos":return"'"}return _get(_getPrototypeOf(SimpleXMLParser.prototype),"onResolveEntity",this).call(this,name)}},{key:"onText",value:function(text){if(!isWhitespaceString(text)){var node=new SimpleDOMNode("#text",text)
this._currentFragment.push(node)}}},{key:"onCdata",value:function(text){var node=new SimpleDOMNode("#text",text)
this._currentFragment.push(node)}},{key:"onBeginElement",value:function(name,attributes,isEmpty){var node=new SimpleDOMNode(name)
node.childNodes=[]
this._currentFragment.push(node)
if(!isEmpty){this._stack.push(this._currentFragment)
this._currentFragment=node.childNodes}}},{key:"onEndElement",value:function(name){this._currentFragment=this._stack.pop()||[]
var lastElement=this._currentFragment[this._currentFragment.length-1]
if(lastElement)for(var i=0,ii=lastElement.childNodes.length;ii>i;i++)lastElement.childNodes[i].parentNode=lastElement}},{key:"onError",value:function(code){this._errorCode=code}}])
return SimpleXMLParser}(XMLParserBase)
exports.SimpleXMLParser=SimpleXMLParser},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error)
return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments
return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args)
_next(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0})
exports.PDFDataTransportStream=void 0
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(147)),_util=__w_pdfjs_require__(1),PDFDataTransportStream=function(){function PDFDataTransportStream(params,pdfDataRangeTransport){var _this=this;(0,_util.assert)(pdfDataRangeTransport)
this._queuedChunks=[]
var initialData=params.initialData
if(initialData&&initialData.length>0){var buffer=new Uint8Array(initialData).buffer
this._queuedChunks.push(buffer)}this._pdfDataRangeTransport=pdfDataRangeTransport
this._isStreamingSupported=!params.disableStream
this._isRangeSupported=!params.disableRange
this._contentLength=params.length
this._fullRequestReader=null
this._rangeReaders=[]
this._pdfDataRangeTransport.addRangeListener(function(begin,chunk){_this._onReceiveData({begin:begin,chunk:chunk})})
this._pdfDataRangeTransport.addProgressListener(function(loaded){_this._onProgress({loaded:loaded})})
this._pdfDataRangeTransport.addProgressiveReadListener(function(chunk){_this._onReceiveData({chunk:chunk})})
this._pdfDataRangeTransport.transportReady()}function PDFDataTransportStreamReader(stream,queuedChunks){this._stream=stream
this._done=!1
this._filename=null
this._queuedChunks=queuedChunks||[]
this._requests=[]
this._headersReady=Promise.resolve()
stream._fullRequestReader=this
this.onProgress=null}function PDFDataTransportStreamRangeReader(stream,begin,end){this._stream=stream
this._begin=begin
this._end=end
this._queuedChunk=null
this._requests=[]
this._done=!1
this.onProgress=null}PDFDataTransportStream.prototype={_onReceiveData:function(args){var buffer=new Uint8Array(args.chunk).buffer
if(void 0===args.begin)this._fullRequestReader?this._fullRequestReader._enqueue(buffer):this._queuedChunks.push(buffer)
else{var found=this._rangeReaders.some(function(rangeReader){if(rangeReader._begin!==args.begin)return!1
rangeReader._enqueue(buffer)
return!0});(0,_util.assert)(found)}},_onProgress:function(evt){if(this._rangeReaders.length>0){var firstReader=this._rangeReaders[0]
firstReader.onProgress&&firstReader.onProgress({loaded:evt.loaded})}},_removeRangeReader:function(reader){var i=this._rangeReaders.indexOf(reader)
i>=0&&this._rangeReaders.splice(i,1)},getFullReader:function(){(0,_util.assert)(!this._fullRequestReader)
var queuedChunks=this._queuedChunks
this._queuedChunks=null
return new PDFDataTransportStreamReader(this,queuedChunks)},getRangeReader:function(begin,end){var reader=new PDFDataTransportStreamRangeReader(this,begin,end)
this._pdfDataRangeTransport.requestDataRange(begin,end)
this._rangeReaders.push(reader)
return reader},cancelAllRequests:function(reason){this._fullRequestReader&&this._fullRequestReader.cancel(reason)
var readers=this._rangeReaders.slice(0)
readers.forEach(function(rangeReader){rangeReader.cancel(reason)})
this._pdfDataRangeTransport.abort()}}
PDFDataTransportStreamReader.prototype={_enqueue:function(chunk){if(!this._done)if(this._requests.length>0){var requestCapability=this._requests.shift()
requestCapability.resolve({value:chunk,done:!1})}else this._queuedChunks.push(chunk)},get headersReady(){return this._headersReady},get filename(){return this._filename},get isRangeSupported(){return this._stream._isRangeSupported},get isStreamingSupported(){return this._stream._isStreamingSupported},get contentLength(){return this._stream._contentLength},read:function(){function read(){return _read.apply(this,arguments)}var _read=_asyncToGenerator(_regenerator["default"].mark(function _callee(){var chunk,requestCapability
return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(this._queuedChunks.length>0)){_context.next=3
break}chunk=this._queuedChunks.shift()
return _context.abrupt("return",{value:chunk,done:!1})
case 3:if(!this._done){_context.next=5
break}return _context.abrupt("return",{value:void 0,done:!0})
case 5:requestCapability=(0,_util.createPromiseCapability)()
this._requests.push(requestCapability)
return _context.abrupt("return",requestCapability.promise)
case 8:case"end":return _context.stop()}},_callee,this)}))
return read}(),cancel:function(reason){this._done=!0
this._requests.forEach(function(requestCapability){requestCapability.resolve({value:void 0,done:!0})})
this._requests=[]}}
PDFDataTransportStreamRangeReader.prototype={_enqueue:function(chunk){if(!this._done){if(0===this._requests.length)this._queuedChunk=chunk
else{var requestsCapability=this._requests.shift()
requestsCapability.resolve({value:chunk,done:!1})
this._requests.forEach(function(requestCapability){requestCapability.resolve({value:void 0,done:!0})})
this._requests=[]}this._done=!0
this._stream._removeRangeReader(this)}},get isStreamingSupported(){return!1},read:function(){function read(){return _read2.apply(this,arguments)}var _read2=_asyncToGenerator(_regenerator["default"].mark(function _callee2(){var chunk,requestCapability
return _regenerator["default"].wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!this._queuedChunk){_context2.next=4
break}chunk=this._queuedChunk
this._queuedChunk=null
return _context2.abrupt("return",{value:chunk,done:!1})
case 4:if(!this._done){_context2.next=6
break}return _context2.abrupt("return",{value:void 0,done:!0})
case 6:requestCapability=(0,_util.createPromiseCapability)()
this._requests.push(requestCapability)
return _context2.abrupt("return",requestCapability.promise)
case 9:case"end":return _context2.stop()}},_callee2,this)}))
return read}(),cancel:function(reason){this._done=!0
this._requests.forEach(function(requestCapability){requestCapability.resolve({value:void 0,done:!0})})
this._requests=[]
this._stream._removeRangeReader(this)}}
return PDFDataTransportStream}()
exports.PDFDataTransportStream=PDFDataTransportStream},function(module,exports,__w_pdfjs_require__){"use strict"
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}Object.defineProperty(exports,"__esModule",{value:!0})
exports.WebGLContext=void 0
var _util=__w_pdfjs_require__(1),WebGLContext=function(){function WebGLContext(_ref){var _ref$enable=_ref.enable,enable=void 0===_ref$enable?!1:_ref$enable
_classCallCheck(this,WebGLContext)
this._enabled=enable===!0}_createClass(WebGLContext,[{key:"composeSMask",value:function(_ref2){var layer=_ref2.layer,mask=_ref2.mask,properties=_ref2.properties
return WebGLUtils.composeSMask(layer,mask,properties)}},{key:"drawFigures",value:function(_ref3){var width=_ref3.width,height=_ref3.height,backgroundColor=_ref3.backgroundColor,figures=_ref3.figures,context=_ref3.context
return WebGLUtils.drawFigures(width,height,backgroundColor,figures,context)}},{key:"clear",value:function(){WebGLUtils.cleanup()}},{key:"isEnabled",get:function(){var enabled=this._enabled
enabled&&(enabled=WebGLUtils.tryInitGL())
return(0,_util.shadow)(this,"isEnabled",enabled)}}])
return WebGLContext}()
exports.WebGLContext=WebGLContext
var WebGLUtils=function(){function loadShader(gl,code,shaderType){var shader=gl.createShader(shaderType)
gl.shaderSource(shader,code)
gl.compileShader(shader)
var compiled=gl.getShaderParameter(shader,gl.COMPILE_STATUS)
if(!compiled){var errorMsg=gl.getShaderInfoLog(shader)
throw new Error("Error during shader compilation: "+errorMsg)}return shader}function createVertexShader(gl,code){return loadShader(gl,code,gl.VERTEX_SHADER)}function createFragmentShader(gl,code){return loadShader(gl,code,gl.FRAGMENT_SHADER)}function createProgram(gl,shaders){for(var program=gl.createProgram(),i=0,ii=shaders.length;ii>i;++i)gl.attachShader(program,shaders[i])
gl.linkProgram(program)
var linked=gl.getProgramParameter(program,gl.LINK_STATUS)
if(!linked){var errorMsg=gl.getProgramInfoLog(program)
throw new Error("Error during program linking: "+errorMsg)}return program}function createTexture(gl,image,textureId){gl.activeTexture(textureId)
var texture=gl.createTexture()
gl.bindTexture(gl.TEXTURE_2D,texture)
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST)
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image)
return texture}function generateGL(){if(!currentGL){currentCanvas=document.createElement("canvas")
currentGL=currentCanvas.getContext("webgl",{premultipliedalpha:!1})}}function initSmaskGL(){var canvas,gl
generateGL()
canvas=currentCanvas
currentCanvas=null
gl=currentGL
currentGL=null
var vertexShader=createVertexShader(gl,smaskVertexShaderCode),fragmentShader=createFragmentShader(gl,smaskFragmentShaderCode),program=createProgram(gl,[vertexShader,fragmentShader])
gl.useProgram(program)
var cache={}
cache.gl=gl
cache.canvas=canvas
cache.resolutionLocation=gl.getUniformLocation(program,"u_resolution")
cache.positionLocation=gl.getAttribLocation(program,"a_position")
cache.backdropLocation=gl.getUniformLocation(program,"u_backdrop")
cache.subtypeLocation=gl.getUniformLocation(program,"u_subtype")
var texCoordLocation=gl.getAttribLocation(program,"a_texCoord"),texLayerLocation=gl.getUniformLocation(program,"u_image"),texMaskLocation=gl.getUniformLocation(program,"u_mask"),texCoordBuffer=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,texCoordBuffer)
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),gl.STATIC_DRAW)
gl.enableVertexAttribArray(texCoordLocation)
gl.vertexAttribPointer(texCoordLocation,2,gl.FLOAT,!1,0,0)
gl.uniform1i(texLayerLocation,0)
gl.uniform1i(texMaskLocation,1)
smaskCache=cache}function composeSMask(layer,mask,properties){var width=layer.width,height=layer.height
smaskCache||initSmaskGL()
var cache=smaskCache,canvas=cache.canvas,gl=cache.gl
canvas.width=width
canvas.height=height
gl.viewport(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight)
gl.uniform2f(cache.resolutionLocation,width,height)
properties.backdrop?gl.uniform4f(cache.resolutionLocation,properties.backdrop[0],properties.backdrop[1],properties.backdrop[2],1):gl.uniform4f(cache.resolutionLocation,0,0,0,0)
gl.uniform1i(cache.subtypeLocation,"Luminosity"===properties.subtype?1:0)
var texture=createTexture(gl,layer,gl.TEXTURE0),maskTexture=createTexture(gl,mask,gl.TEXTURE1),buffer=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,buffer)
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([0,0,width,0,0,height,0,height,width,0,width,height]),gl.STATIC_DRAW)
gl.enableVertexAttribArray(cache.positionLocation)
gl.vertexAttribPointer(cache.positionLocation,2,gl.FLOAT,!1,0,0)
gl.clearColor(0,0,0,0)
gl.enable(gl.BLEND)
gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES,0,6)
gl.flush()
gl.deleteTexture(texture)
gl.deleteTexture(maskTexture)
gl.deleteBuffer(buffer)
return canvas}function initFiguresGL(){var canvas,gl
generateGL()
canvas=currentCanvas
currentCanvas=null
gl=currentGL
currentGL=null
var vertexShader=createVertexShader(gl,figuresVertexShaderCode),fragmentShader=createFragmentShader(gl,figuresFragmentShaderCode),program=createProgram(gl,[vertexShader,fragmentShader])
gl.useProgram(program)
var cache={}
cache.gl=gl
cache.canvas=canvas
cache.resolutionLocation=gl.getUniformLocation(program,"u_resolution")
cache.scaleLocation=gl.getUniformLocation(program,"u_scale")
cache.offsetLocation=gl.getUniformLocation(program,"u_offset")
cache.positionLocation=gl.getAttribLocation(program,"a_position")
cache.colorLocation=gl.getAttribLocation(program,"a_color")
figuresCache=cache}function drawFigures(width,height,backgroundColor,figures,context){figuresCache||initFiguresGL()
var cache=figuresCache,canvas=cache.canvas,gl=cache.gl
canvas.width=width
canvas.height=height
gl.viewport(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight)
gl.uniform2f(cache.resolutionLocation,width,height)
var i,ii,rows,count=0
for(i=0,ii=figures.length;ii>i;i++)switch(figures[i].type){case"lattice":rows=figures[i].coords.length/figures[i].verticesPerRow|0
count+=(rows-1)*(figures[i].verticesPerRow-1)*6
break
case"triangles":count+=figures[i].coords.length}var coords=new Float32Array(2*count),colors=new Uint8Array(3*count),coordsMap=context.coords,colorsMap=context.colors,pIndex=0,cIndex=0
for(i=0,ii=figures.length;ii>i;i++){var figure=figures[i],ps=figure.coords,cs=figure.colors
switch(figure.type){case"lattice":var cols=figure.verticesPerRow
rows=ps.length/cols|0
for(var row=1;rows>row;row++)for(var offset=row*cols+1,col=1;cols>col;col++,offset++){coords[pIndex]=coordsMap[ps[offset-cols-1]]
coords[pIndex+1]=coordsMap[ps[offset-cols-1]+1]
coords[pIndex+2]=coordsMap[ps[offset-cols]]
coords[pIndex+3]=coordsMap[ps[offset-cols]+1]
coords[pIndex+4]=coordsMap[ps[offset-1]]
coords[pIndex+5]=coordsMap[ps[offset-1]+1]
colors[cIndex]=colorsMap[cs[offset-cols-1]]
colors[cIndex+1]=colorsMap[cs[offset-cols-1]+1]
colors[cIndex+2]=colorsMap[cs[offset-cols-1]+2]
colors[cIndex+3]=colorsMap[cs[offset-cols]]
colors[cIndex+4]=colorsMap[cs[offset-cols]+1]
colors[cIndex+5]=colorsMap[cs[offset-cols]+2]
colors[cIndex+6]=colorsMap[cs[offset-1]]
colors[cIndex+7]=colorsMap[cs[offset-1]+1]
colors[cIndex+8]=colorsMap[cs[offset-1]+2]
coords[pIndex+6]=coords[pIndex+2]
coords[pIndex+7]=coords[pIndex+3]
coords[pIndex+8]=coords[pIndex+4]
coords[pIndex+9]=coords[pIndex+5]
coords[pIndex+10]=coordsMap[ps[offset]]
coords[pIndex+11]=coordsMap[ps[offset]+1]
colors[cIndex+9]=colors[cIndex+3]
colors[cIndex+10]=colors[cIndex+4]
colors[cIndex+11]=colors[cIndex+5]
colors[cIndex+12]=colors[cIndex+6]
colors[cIndex+13]=colors[cIndex+7]
colors[cIndex+14]=colors[cIndex+8]
colors[cIndex+15]=colorsMap[cs[offset]]
colors[cIndex+16]=colorsMap[cs[offset]+1]
colors[cIndex+17]=colorsMap[cs[offset]+2]
pIndex+=12
cIndex+=18}break
case"triangles":for(var j=0,jj=ps.length;jj>j;j++){coords[pIndex]=coordsMap[ps[j]]
coords[pIndex+1]=coordsMap[ps[j]+1]
colors[cIndex]=colorsMap[cs[j]]
colors[cIndex+1]=colorsMap[cs[j]+1]
colors[cIndex+2]=colorsMap[cs[j]+2]
pIndex+=2
cIndex+=3}}}backgroundColor?gl.clearColor(backgroundColor[0]/255,backgroundColor[1]/255,backgroundColor[2]/255,1):gl.clearColor(0,0,0,0)
gl.clear(gl.COLOR_BUFFER_BIT)
var coordsBuffer=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,coordsBuffer)
gl.bufferData(gl.ARRAY_BUFFER,coords,gl.STATIC_DRAW)
gl.enableVertexAttribArray(cache.positionLocation)
gl.vertexAttribPointer(cache.positionLocation,2,gl.FLOAT,!1,0,0)
var colorsBuffer=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,colorsBuffer)
gl.bufferData(gl.ARRAY_BUFFER,colors,gl.STATIC_DRAW)
gl.enableVertexAttribArray(cache.colorLocation)
gl.vertexAttribPointer(cache.colorLocation,3,gl.UNSIGNED_BYTE,!1,0,0)
gl.uniform2f(cache.scaleLocation,context.scaleX,context.scaleY)
gl.uniform2f(cache.offsetLocation,context.offsetX,context.offsetY)
gl.drawArrays(gl.TRIANGLES,0,count)
gl.flush()
gl.deleteBuffer(coordsBuffer)
gl.deleteBuffer(colorsBuffer)
return canvas}var currentGL,currentCanvas,smaskVertexShaderCode="  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",smaskFragmentShaderCode="  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",smaskCache=null,figuresVertexShaderCode="  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",figuresFragmentShaderCode="  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",figuresCache=null
return{tryInitGL:function(){try{generateGL()
return!!currentGL}catch(ex){}return!1},composeSMask:composeSMask,drawFigures:drawFigures,cleanup:function(){if(smaskCache&&smaskCache.canvas){smaskCache.canvas.width=0
smaskCache.canvas.height=0}if(figuresCache&&figuresCache.canvas){figuresCache.canvas.width=0
figuresCache.canvas.height=0}smaskCache=null
figuresCache=null}}}()},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0})
exports.renderTextLayer=void 0
var _util=__w_pdfjs_require__(1),_global_scope=_interopRequireDefault(__w_pdfjs_require__(3)),renderTextLayer=function(){function isAllWhitespace(str){return!NonWhitespaceRegexp.test(str)}function appendText(task,geom,styles){var textDiv=document.createElement("span"),textDivProperties={style:null,angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1}
task._textDivs.push(textDiv)
if(isAllWhitespace(geom.str)){textDivProperties.isWhitespace=!0
task._textDivProperties.set(textDiv,textDivProperties)}else{var tx=_util.Util.transform(task._viewport.transform,geom.transform),angle=Math.atan2(tx[1],tx[0]),style=styles[geom.fontName]
style.vertical&&(angle+=Math.PI/2)
var fontHeight=Math.sqrt(tx[2]*tx[2]+tx[3]*tx[3]),fontAscent=fontHeight
style.ascent?fontAscent=style.ascent*fontAscent:style.descent&&(fontAscent=(1+style.descent)*fontAscent)
var left,top
if(0===angle){left=tx[4]
top=tx[5]-fontAscent}else{left=tx[4]+fontAscent*Math.sin(angle)
top=tx[5]-fontAscent*Math.cos(angle)}styleBuf[1]=left
styleBuf[3]=top
styleBuf[5]=fontHeight
styleBuf[7]=style.fontFamily
textDivProperties.style=styleBuf.join("")
textDiv.setAttribute("style",textDivProperties.style)
textDiv.textContent=geom.str
task._fontInspectorEnabled&&(textDiv.dataset.fontName=geom.fontName)
0!==angle&&(textDivProperties.angle=angle*(180/Math.PI))
geom.str.length>1&&(style.vertical?textDivProperties.canvasWidth=geom.height*task._viewport.scale:textDivProperties.canvasWidth=geom.width*task._viewport.scale)
task._textDivProperties.set(textDiv,textDivProperties)
task._textContentStream&&task._layoutText(textDiv)
if(task._enhanceTextSelection){var angleCos=1,angleSin=0
if(0!==angle){angleCos=Math.cos(angle)
angleSin=Math.sin(angle)}var m,b,divWidth=(style.vertical?geom.height:geom.width)*task._viewport.scale,divHeight=fontHeight
if(0!==angle){m=[angleCos,angleSin,-angleSin,angleCos,left,top]
b=_util.Util.getAxialAlignedBoundingBox([0,0,divWidth,divHeight],m)}else b=[left,top,left+divWidth,top+divHeight]
task._bounds.push({left:b[0],top:b[1],right:b[2],bottom:b[3],div:textDiv,size:[divWidth,divHeight],m:m})}}}function render(task){if(!task._canceled){var textDivs=task._textDivs,capability=task._capability,textDivsLength=textDivs.length
if(textDivsLength>MAX_TEXT_DIVS_TO_RENDER){task._renderingDone=!0
capability.resolve()}else{if(!task._textContentStream)for(var i=0;textDivsLength>i;i++)task._layoutText(textDivs[i])
task._renderingDone=!0
capability.resolve()}}}function expand(task){for(var bounds=task._bounds,viewport=task._viewport,expanded=expandBounds(viewport.width,viewport.height,bounds),i=0;i<expanded.length;i++){var div=bounds[i].div,divProperties=task._textDivProperties.get(div)
if(0!==divProperties.angle){var e=expanded[i],b=bounds[i],m=b.m,c=m[0],s=m[1],points=[[0,0],[0,b.size[1]],[b.size[0],0],b.size],ts=new Float64Array(64)
points.forEach(function(p,i){var t=_util.Util.applyTransform(p,m)
ts[i+0]=c&&(e.left-t[0])/c
ts[i+4]=s&&(e.top-t[1])/s
ts[i+8]=c&&(e.right-t[0])/c
ts[i+12]=s&&(e.bottom-t[1])/s
ts[i+16]=s&&(e.left-t[0])/-s
ts[i+20]=c&&(e.top-t[1])/c
ts[i+24]=s&&(e.right-t[0])/-s
ts[i+28]=c&&(e.bottom-t[1])/c
ts[i+32]=c&&(e.left-t[0])/-c
ts[i+36]=s&&(e.top-t[1])/-s
ts[i+40]=c&&(e.right-t[0])/-c
ts[i+44]=s&&(e.bottom-t[1])/-s
ts[i+48]=s&&(e.left-t[0])/s
ts[i+52]=c&&(e.top-t[1])/-c
ts[i+56]=s&&(e.right-t[0])/s
ts[i+60]=c&&(e.bottom-t[1])/-c})
var findPositiveMin=function(ts,offset,count){for(var result=0,i=0;count>i;i++){var t=ts[offset++]
t>0&&(result=result?Math.min(t,result):t)}return result},boxScale=1+Math.min(Math.abs(c),Math.abs(s))
divProperties.paddingLeft=findPositiveMin(ts,32,16)/boxScale
divProperties.paddingTop=findPositiveMin(ts,48,16)/boxScale
divProperties.paddingRight=findPositiveMin(ts,0,16)/boxScale
divProperties.paddingBottom=findPositiveMin(ts,16,16)/boxScale
task._textDivProperties.set(div,divProperties)}else{divProperties.paddingLeft=bounds[i].left-expanded[i].left
divProperties.paddingTop=bounds[i].top-expanded[i].top
divProperties.paddingRight=expanded[i].right-bounds[i].right
divProperties.paddingBottom=expanded[i].bottom-bounds[i].bottom
task._textDivProperties.set(div,divProperties)}}}function expandBounds(width,height,boxes){var bounds=boxes.map(function(box,i){return{x1:box.left,y1:box.top,x2:box.right,y2:box.bottom,index:i,x1New:void 0,x2New:void 0}})
expandBoundsLTR(width,bounds)
var expanded=new Array(boxes.length)
bounds.forEach(function(b){var i=b.index
expanded[i]={left:b.x1New,top:0,right:b.x2New,bottom:0}})
boxes.map(function(box,i){var e=expanded[i],b=bounds[i]
b.x1=box.top
b.y1=width-e.right
b.x2=box.bottom
b.y2=width-e.left
b.index=i
b.x1New=void 0
b.x2New=void 0})
expandBoundsLTR(height,bounds)
bounds.forEach(function(b){var i=b.index
expanded[i].top=b.x1New
expanded[i].bottom=b.x2New})
return expanded}function expandBoundsLTR(width,bounds){bounds.sort(function(a,b){return a.x1-b.x1||a.index-b.index})
var fakeBoundary={x1:-(1/0),y1:-(1/0),x2:0,y2:1/0,index:-1,x1New:0,x2New:0},horizon=[{start:-(1/0),end:1/0,boundary:fakeBoundary}]
bounds.forEach(function(boundary){for(var i=0;i<horizon.length&&horizon[i].end<=boundary.y1;)i++
for(var j=horizon.length-1;j>=0&&horizon[j].start>=boundary.y2;)j--
var horizonPart,affectedBoundary,q,k,maxXNew=-(1/0)
for(q=i;j>=q;q++){horizonPart=horizon[q]
affectedBoundary=horizonPart.boundary
var xNew
xNew=affectedBoundary.x2>boundary.x1?affectedBoundary.index>boundary.index?affectedBoundary.x1New:boundary.x1:void 0===affectedBoundary.x2New?(affectedBoundary.x2+boundary.x1)/2:affectedBoundary.x2New
xNew>maxXNew&&(maxXNew=xNew)}boundary.x1New=maxXNew
for(q=i;j>=q;q++){horizonPart=horizon[q]
affectedBoundary=horizonPart.boundary
void 0===affectedBoundary.x2New?affectedBoundary.x2>boundary.x1?affectedBoundary.index>boundary.index&&(affectedBoundary.x2New=affectedBoundary.x2):affectedBoundary.x2New=maxXNew:affectedBoundary.x2New>maxXNew&&(affectedBoundary.x2New=Math.max(maxXNew,affectedBoundary.x2))}var changedHorizon=[],lastBoundary=null
for(q=i;j>=q;q++){horizonPart=horizon[q]
affectedBoundary=horizonPart.boundary
var useBoundary=affectedBoundary.x2>boundary.x2?affectedBoundary:boundary
if(lastBoundary===useBoundary)changedHorizon[changedHorizon.length-1].end=horizonPart.end
else{changedHorizon.push({start:horizonPart.start,end:horizonPart.end,boundary:useBoundary})
lastBoundary=useBoundary}}if(horizon[i].start<boundary.y1){changedHorizon[0].start=boundary.y1
changedHorizon.unshift({start:horizon[i].start,end:boundary.y1,boundary:horizon[i].boundary})}if(boundary.y2<horizon[j].end){changedHorizon[changedHorizon.length-1].end=boundary.y2
changedHorizon.push({start:boundary.y2,end:horizon[j].end,boundary:horizon[j].boundary})}for(q=i;j>=q;q++){horizonPart=horizon[q]
affectedBoundary=horizonPart.boundary
if(void 0===affectedBoundary.x2New){var used=!1
for(k=i-1;!used&&k>=0&&horizon[k].start>=affectedBoundary.y1;k--)used=horizon[k].boundary===affectedBoundary
for(k=j+1;!used&&k<horizon.length&&horizon[k].end<=affectedBoundary.y2;k++)used=horizon[k].boundary===affectedBoundary
for(k=0;!used&&k<changedHorizon.length;k++)used=changedHorizon[k].boundary===affectedBoundary
used||(affectedBoundary.x2New=maxXNew)}}Array.prototype.splice.apply(horizon,[i,j-i+1].concat(changedHorizon))})
horizon.forEach(function(horizonPart){var affectedBoundary=horizonPart.boundary
void 0===affectedBoundary.x2New&&(affectedBoundary.x2New=Math.max(width,affectedBoundary.x2))})}function TextLayerRenderTask(_ref){var textContent=_ref.textContent,textContentStream=_ref.textContentStream,container=_ref.container,viewport=_ref.viewport,textDivs=_ref.textDivs,textContentItemsStr=_ref.textContentItemsStr,enhanceTextSelection=_ref.enhanceTextSelection
this._textContent=textContent
this._textContentStream=textContentStream
this._container=container
this._viewport=viewport
this._textDivs=textDivs||[]
this._textContentItemsStr=textContentItemsStr||[]
this._enhanceTextSelection=!!enhanceTextSelection
this._fontInspectorEnabled=!(!_global_scope["default"].FontInspector||!_global_scope["default"].FontInspector.enabled)
this._reader=null
this._layoutTextLastFontSize=null
this._layoutTextLastFontFamily=null
this._layoutTextCtx=null
this._textDivProperties=new WeakMap
this._renderingDone=!1
this._canceled=!1
this._capability=(0,_util.createPromiseCapability)()
this._renderTimer=null
this._bounds=[]}function renderTextLayer(renderParameters){var task=new TextLayerRenderTask({textContent:renderParameters.textContent,textContentStream:renderParameters.textContentStream,container:renderParameters.container,viewport:renderParameters.viewport,textDivs:renderParameters.textDivs,textContentItemsStr:renderParameters.textContentItemsStr,enhanceTextSelection:renderParameters.enhanceTextSelection})
task._render(renderParameters.timeout)
return task}var MAX_TEXT_DIVS_TO_RENDER=1e5,NonWhitespaceRegexp=/\S/,styleBuf=["left: ",0,"px; top: ",0,"px; font-size: ",0,"px; font-family: ","",";"]
TextLayerRenderTask.prototype={get promise(){return this._capability.promise},cancel:function(){if(this._reader){this._reader.cancel(new _util.AbortException("text layer task cancelled"))
this._reader=null}this._canceled=!0
if(null!==this._renderTimer){clearTimeout(this._renderTimer)
this._renderTimer=null}this._capability.reject("canceled")},_processItems:function(items,styleCache){for(var i=0,len=items.length;len>i;i++){this._textContentItemsStr.push(items[i].str)
appendText(this,items[i],styleCache)}},_layoutText:function(textDiv){var textLayerFrag=this._container,textDivProperties=this._textDivProperties.get(textDiv)
if(!textDivProperties.isWhitespace){var fontSize=textDiv.style.fontSize,fontFamily=textDiv.style.fontFamily
if(fontSize!==this._layoutTextLastFontSize||fontFamily!==this._layoutTextLastFontFamily){this._layoutTextCtx.font=fontSize+" "+fontFamily
this._layoutTextLastFontSize=fontSize
this._layoutTextLastFontFamily=fontFamily}var width=this._layoutTextCtx.measureText(textDiv.textContent).width,transform=""
if(0!==textDivProperties.canvasWidth&&width>0){textDivProperties.scale=textDivProperties.canvasWidth/width
transform="scaleX(".concat(textDivProperties.scale,")")}0!==textDivProperties.angle&&(transform="rotate(".concat(textDivProperties.angle,"deg) ").concat(transform))
if(transform.length>0){textDivProperties.originalTransform=transform
textDiv.style.transform=transform}this._textDivProperties.set(textDiv,textDivProperties)
textLayerFrag.appendChild(textDiv)}},_render:function(timeout){var _this=this,capability=(0,_util.createPromiseCapability)(),styleCache=Object.create(null),canvas=document.createElement("canvas")
canvas.mozOpaque=!0
this._layoutTextCtx=canvas.getContext("2d",{alpha:!1})
if(this._textContent){var textItems=this._textContent.items,textStyles=this._textContent.styles
this._processItems(textItems,textStyles)
capability.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.')
var pump=function pump(){_this._reader.read().then(function(_ref2){var value=_ref2.value,done=_ref2.done
if(done)capability.resolve()
else{Object.assign(styleCache,value.styles)
_this._processItems(value.items,styleCache)
pump()}},capability.reject)}
this._reader=this._textContentStream.getReader()
pump()}capability.promise.then(function(){styleCache=null
timeout?_this._renderTimer=setTimeout(function(){render(_this)
_this._renderTimer=null},timeout):render(_this)},this._capability.reject)},expandTextDivs:function(expandDivs){if(this._enhanceTextSelection&&this._renderingDone){if(null!==this._bounds){expand(this)
this._bounds=null}for(var i=0,ii=this._textDivs.length;ii>i;i++){var div=this._textDivs[i],divProperties=this._textDivProperties.get(div)
if(!divProperties.isWhitespace)if(expandDivs){var transform="",padding=""
1!==divProperties.scale&&(transform="scaleX("+divProperties.scale+")")
0!==divProperties.angle&&(transform="rotate("+divProperties.angle+"deg) "+transform)
if(0!==divProperties.paddingLeft){padding+=" padding-left: "+divProperties.paddingLeft/divProperties.scale+"px;"
transform+=" translateX("+-divProperties.paddingLeft/divProperties.scale+"px)"}if(0!==divProperties.paddingTop){padding+=" padding-top: "+divProperties.paddingTop+"px;"
transform+=" translateY("+-divProperties.paddingTop+"px)"}0!==divProperties.paddingRight&&(padding+=" padding-right: "+divProperties.paddingRight/divProperties.scale+"px;")
0!==divProperties.paddingBottom&&(padding+=" padding-bottom: "+divProperties.paddingBottom+"px;")
""!==padding&&div.setAttribute("style",divProperties.style+padding)
""!==transform&&(div.style.transform=transform)}else{div.style.padding=0
div.style.transform=divProperties.originalTransform||""}}}}}
return renderTextLayer}()
exports.renderTextLayer=renderTextLayer},function(module,exports,__w_pdfjs_require__){"use strict"
function _get(target,property,receiver){_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(target,property,receiver){var base=_superPropBase(target,property)
if(base){var desc=Object.getOwnPropertyDescriptor(base,property)
return desc.get?desc.get.call(receiver):desc.value}}
return _get(target,property,receiver||target)}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property);){object=_getPrototypeOf(object)
if(null===object)break}return object}function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)}
return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function")
subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}})
superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p
return o}
return _setPrototypeOf(o,p)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}Object.defineProperty(exports,"__esModule",{value:!0})
exports.AnnotationLayer=void 0
var _dom_utils=__w_pdfjs_require__(151),_util=__w_pdfjs_require__(1),AnnotationElementFactory=function(){function AnnotationElementFactory(){_classCallCheck(this,AnnotationElementFactory)}_createClass(AnnotationElementFactory,null,[{key:"create",value:function(parameters){var subtype=parameters.data.annotationType
switch(subtype){case _util.AnnotationType.LINK:return new LinkAnnotationElement(parameters)
case _util.AnnotationType.TEXT:return new TextAnnotationElement(parameters)
case _util.AnnotationType.WIDGET:var fieldType=parameters.data.fieldType
switch(fieldType){case"Tx":return new TextWidgetAnnotationElement(parameters)
case"Btn":return parameters.data.radioButton?new RadioButtonWidgetAnnotationElement(parameters):parameters.data.checkBox?new CheckboxWidgetAnnotationElement(parameters):new PushButtonWidgetAnnotationElement(parameters)
case"Ch":return new ChoiceWidgetAnnotationElement(parameters)}return new WidgetAnnotationElement(parameters)
case _util.AnnotationType.POPUP:return new PopupAnnotationElement(parameters)
case _util.AnnotationType.LINE:return new LineAnnotationElement(parameters)
case _util.AnnotationType.SQUARE:return new SquareAnnotationElement(parameters)
case _util.AnnotationType.CIRCLE:return new CircleAnnotationElement(parameters)
case _util.AnnotationType.POLYLINE:return new PolylineAnnotationElement(parameters)
case _util.AnnotationType.INK:return new InkAnnotationElement(parameters)
case _util.AnnotationType.POLYGON:return new PolygonAnnotationElement(parameters)
case _util.AnnotationType.HIGHLIGHT:return new HighlightAnnotationElement(parameters)
case _util.AnnotationType.UNDERLINE:return new UnderlineAnnotationElement(parameters)
case _util.AnnotationType.SQUIGGLY:return new SquigglyAnnotationElement(parameters)
case _util.AnnotationType.STRIKEOUT:return new StrikeOutAnnotationElement(parameters)
case _util.AnnotationType.STAMP:return new StampAnnotationElement(parameters)
case _util.AnnotationType.FILEATTACHMENT:return new FileAttachmentAnnotationElement(parameters)
default:return new AnnotationElement(parameters)}}}])
return AnnotationElementFactory}(),AnnotationElement=function(){function AnnotationElement(parameters){var isRenderable=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!1,ignoreBorder=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!1
_classCallCheck(this,AnnotationElement)
this.isRenderable=isRenderable
this.data=parameters.data
this.layer=parameters.layer
this.page=parameters.page
this.viewport=parameters.viewport
this.linkService=parameters.linkService
this.downloadManager=parameters.downloadManager
this.imageResourcesPath=parameters.imageResourcesPath
this.renderInteractiveForms=parameters.renderInteractiveForms
this.svgFactory=parameters.svgFactory
isRenderable&&(this.container=this._createContainer(ignoreBorder))}_createClass(AnnotationElement,[{key:"_createContainer",value:function(){var ignoreBorder=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1,data=this.data,page=this.page,viewport=this.viewport,container=document.createElement("section"),width=data.rect[2]-data.rect[0],height=data.rect[3]-data.rect[1]
container.setAttribute("data-annotation-id",data.id)
var rect=_util.Util.normalizeRect([data.rect[0],page.view[3]-data.rect[1]+page.view[1],data.rect[2],page.view[3]-data.rect[3]+page.view[1]])
container.style.transform="matrix("+viewport.transform.join(",")+")"
container.style.transformOrigin=-rect[0]+"px "+-rect[1]+"px"
if(!ignoreBorder&&data.borderStyle.width>0){container.style.borderWidth=data.borderStyle.width+"px"
if(data.borderStyle.style!==_util.AnnotationBorderStyleType.UNDERLINE){width-=2*data.borderStyle.width
height-=2*data.borderStyle.width}var horizontalRadius=data.borderStyle.horizontalCornerRadius,verticalRadius=data.borderStyle.verticalCornerRadius
if(horizontalRadius>0||verticalRadius>0){var radius=horizontalRadius+"px / "+verticalRadius+"px"
container.style.borderRadius=radius}switch(data.borderStyle.style){case _util.AnnotationBorderStyleType.SOLID:container.style.borderStyle="solid"
break
case _util.AnnotationBorderStyleType.DASHED:container.style.borderStyle="dashed"
break
case _util.AnnotationBorderStyleType.BEVELED:(0,_util.warn)("Unimplemented border style: beveled")
break
case _util.AnnotationBorderStyleType.INSET:(0,_util.warn)("Unimplemented border style: inset")
break
case _util.AnnotationBorderStyleType.UNDERLINE:container.style.borderBottomStyle="solid"}data.color?container.style.borderColor=_util.Util.makeCssRgb(0|data.color[0],0|data.color[1],0|data.color[2]):container.style.borderWidth=0}container.style.left=rect[0]+"px"
container.style.top=rect[1]+"px"
container.style.width=width+"px"
container.style.height=height+"px"
return container}},{key:"_createPopup",value:function(container,trigger,data){if(!trigger){trigger=document.createElement("div")
trigger.style.height=container.style.height
trigger.style.width=container.style.width
container.appendChild(trigger)}var popupElement=new PopupElement({container:container,trigger:trigger,color:data.color,title:data.title,contents:data.contents,hideWrapper:!0}),popup=popupElement.render()
popup.style.left=container.style.width
container.appendChild(popup)}},{key:"render",value:function(){(0,_util.unreachable)("Abstract method `AnnotationElement.render` called")}}])
return AnnotationElement}(),LinkAnnotationElement=function(_AnnotationElement){function LinkAnnotationElement(parameters){_classCallCheck(this,LinkAnnotationElement)
var isRenderable=!!(parameters.data.url||parameters.data.dest||parameters.data.action)
return _possibleConstructorReturn(this,_getPrototypeOf(LinkAnnotationElement).call(this,parameters,isRenderable))}_inherits(LinkAnnotationElement,_AnnotationElement)
_createClass(LinkAnnotationElement,[{key:"render",value:function(){this.container.className="linkAnnotation"
var data=this.data,linkService=this.linkService,link=document.createElement("a");(0,_dom_utils.addLinkAttributes)(link,{url:data.url,target:data.newWindow?_dom_utils.LinkTarget.BLANK:linkService.externalLinkTarget,rel:linkService.externalLinkRel})
data.url||(data.action?this._bindNamedAction(link,data.action):this._bindLink(link,data.dest))
this.container.appendChild(link)
return this.container}},{key:"_bindLink",value:function(link,destination){var _this=this
link.href=this.linkService.getDestinationHash(destination)
link.onclick=function(){destination&&_this.linkService.navigateTo(destination)
return!1}
destination&&(link.className="internalLink")}},{key:"_bindNamedAction",value:function(link,action){var _this2=this
link.href=this.linkService.getAnchorUrl("")
link.onclick=function(){_this2.linkService.executeNamedAction(action)
return!1}
link.className="internalLink"}}])
return LinkAnnotationElement}(AnnotationElement),TextAnnotationElement=function(_AnnotationElement2){function TextAnnotationElement(parameters){_classCallCheck(this,TextAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(TextAnnotationElement).call(this,parameters,isRenderable))}_inherits(TextAnnotationElement,_AnnotationElement2)
_createClass(TextAnnotationElement,[{key:"render",value:function(){this.container.className="textAnnotation"
var image=document.createElement("img")
image.style.height=this.container.style.height
image.style.width=this.container.style.width
image.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg"
image.alt="[{{type}} Annotation]"
image.dataset.l10nId="text_annotation_type"
image.dataset.l10nArgs=JSON.stringify({type:this.data.name})
this.data.hasPopup||this._createPopup(this.container,image,this.data)
this.container.appendChild(image)
return this.container}}])
return TextAnnotationElement}(AnnotationElement),WidgetAnnotationElement=function(_AnnotationElement3){function WidgetAnnotationElement(){_classCallCheck(this,WidgetAnnotationElement)
return _possibleConstructorReturn(this,_getPrototypeOf(WidgetAnnotationElement).apply(this,arguments))}_inherits(WidgetAnnotationElement,_AnnotationElement3)
_createClass(WidgetAnnotationElement,[{key:"render",value:function(){return this.container}}])
return WidgetAnnotationElement}(AnnotationElement),TextWidgetAnnotationElement=function(_WidgetAnnotationElem){function TextWidgetAnnotationElement(parameters){_classCallCheck(this,TextWidgetAnnotationElement)
var isRenderable=parameters.renderInteractiveForms||!parameters.data.hasAppearance&&!!parameters.data.fieldValue
return _possibleConstructorReturn(this,_getPrototypeOf(TextWidgetAnnotationElement).call(this,parameters,isRenderable))}_inherits(TextWidgetAnnotationElement,_WidgetAnnotationElem)
_createClass(TextWidgetAnnotationElement,[{key:"render",value:function(){var TEXT_ALIGNMENT=["left","center","right"]
this.container.className="textWidgetAnnotation"
var element=null
if(this.renderInteractiveForms){if(this.data.multiLine){element=document.createElement("textarea")
element.textContent=this.data.fieldValue}else{element=document.createElement("input")
element.type="text"
element.setAttribute("value",this.data.fieldValue)}element.disabled=this.data.readOnly
null!==this.data.maxLen&&(element.maxLength=this.data.maxLen)
if(this.data.comb){var fieldWidth=this.data.rect[2]-this.data.rect[0],combWidth=fieldWidth/this.data.maxLen
element.classList.add("comb")
element.style.letterSpacing="calc("+combWidth+"px - 1ch)"}}else{element=document.createElement("div")
element.textContent=this.data.fieldValue
element.style.verticalAlign="middle"
element.style.display="table-cell"
var font=null
this.data.fontRefName&&this.page.commonObjs.has(this.data.fontRefName)&&(font=this.page.commonObjs.get(this.data.fontRefName))
this._setTextStyle(element,font)}null!==this.data.textAlignment&&(element.style.textAlign=TEXT_ALIGNMENT[this.data.textAlignment])
this.container.appendChild(element)
return this.container}},{key:"_setTextStyle",value:function(element,font){var style=element.style
style.fontSize=this.data.fontSize+"px"
style.direction=this.data.fontDirection<0?"rtl":"ltr"
if(font){style.fontWeight=font.black?font.bold?"900":"bold":font.bold?"bold":"normal"
style.fontStyle=font.italic?"italic":"normal"
var fontFamily=font.loadedName?'"'+font.loadedName+'", ':"",fallbackName=font.fallbackName||"Helvetica, sans-serif"
style.fontFamily=fontFamily+fallbackName}}}])
return TextWidgetAnnotationElement}(WidgetAnnotationElement),CheckboxWidgetAnnotationElement=function(_WidgetAnnotationElem2){function CheckboxWidgetAnnotationElement(parameters){_classCallCheck(this,CheckboxWidgetAnnotationElement)
return _possibleConstructorReturn(this,_getPrototypeOf(CheckboxWidgetAnnotationElement).call(this,parameters,parameters.renderInteractiveForms))}_inherits(CheckboxWidgetAnnotationElement,_WidgetAnnotationElem2)
_createClass(CheckboxWidgetAnnotationElement,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation checkBox"
var element=document.createElement("input")
element.disabled=this.data.readOnly
element.type="checkbox"
this.data.fieldValue&&"Off"!==this.data.fieldValue&&element.setAttribute("checked",!0)
this.container.appendChild(element)
return this.container}}])
return CheckboxWidgetAnnotationElement}(WidgetAnnotationElement),RadioButtonWidgetAnnotationElement=function(_WidgetAnnotationElem3){function RadioButtonWidgetAnnotationElement(parameters){_classCallCheck(this,RadioButtonWidgetAnnotationElement)
return _possibleConstructorReturn(this,_getPrototypeOf(RadioButtonWidgetAnnotationElement).call(this,parameters,parameters.renderInteractiveForms))}_inherits(RadioButtonWidgetAnnotationElement,_WidgetAnnotationElem3)
_createClass(RadioButtonWidgetAnnotationElement,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation radioButton"
var element=document.createElement("input")
element.disabled=this.data.readOnly
element.type="radio"
element.name=this.data.fieldName
this.data.fieldValue===this.data.buttonValue&&element.setAttribute("checked",!0)
this.container.appendChild(element)
return this.container}}])
return RadioButtonWidgetAnnotationElement}(WidgetAnnotationElement),PushButtonWidgetAnnotationElement=function(_LinkAnnotationElemen){function PushButtonWidgetAnnotationElement(){_classCallCheck(this,PushButtonWidgetAnnotationElement)
return _possibleConstructorReturn(this,_getPrototypeOf(PushButtonWidgetAnnotationElement).apply(this,arguments))}_inherits(PushButtonWidgetAnnotationElement,_LinkAnnotationElemen)
_createClass(PushButtonWidgetAnnotationElement,[{key:"render",value:function(){var container=_get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype),"render",this).call(this)
container.className="buttonWidgetAnnotation pushButton"
return container}}])
return PushButtonWidgetAnnotationElement}(LinkAnnotationElement),ChoiceWidgetAnnotationElement=function(_WidgetAnnotationElem4){function ChoiceWidgetAnnotationElement(parameters){_classCallCheck(this,ChoiceWidgetAnnotationElement)
return _possibleConstructorReturn(this,_getPrototypeOf(ChoiceWidgetAnnotationElement).call(this,parameters,parameters.renderInteractiveForms))}_inherits(ChoiceWidgetAnnotationElement,_WidgetAnnotationElem4)
_createClass(ChoiceWidgetAnnotationElement,[{key:"render",value:function(){this.container.className="choiceWidgetAnnotation"
var selectElement=document.createElement("select")
selectElement.disabled=this.data.readOnly
if(!this.data.combo){selectElement.size=this.data.options.length
this.data.multiSelect&&(selectElement.multiple=!0)}for(var i=0,ii=this.data.options.length;ii>i;i++){var option=this.data.options[i],optionElement=document.createElement("option")
optionElement.textContent=option.displayValue
optionElement.value=option.exportValue
this.data.fieldValue.includes(option.displayValue)&&optionElement.setAttribute("selected",!0)
selectElement.appendChild(optionElement)}this.container.appendChild(selectElement)
return this.container}}])
return ChoiceWidgetAnnotationElement}(WidgetAnnotationElement),PopupAnnotationElement=function(_AnnotationElement4){function PopupAnnotationElement(parameters){_classCallCheck(this,PopupAnnotationElement)
var isRenderable=!(!parameters.data.title&&!parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(PopupAnnotationElement).call(this,parameters,isRenderable))}_inherits(PopupAnnotationElement,_AnnotationElement4)
_createClass(PopupAnnotationElement,[{key:"render",value:function(){var IGNORE_TYPES=["Line","Square","Circle","PolyLine","Polygon","Ink"]
this.container.className="popupAnnotation"
if(IGNORE_TYPES.includes(this.data.parentType))return this.container
var selector='[data-annotation-id="'+this.data.parentId+'"]',parentElement=this.layer.querySelector(selector)
if(!parentElement)return this.container
var popup=new PopupElement({container:this.container,trigger:parentElement,color:this.data.color,title:this.data.title,contents:this.data.contents}),parentLeft=parseFloat(parentElement.style.left),parentWidth=parseFloat(parentElement.style.width)
this.container.style.transformOrigin=-(parentLeft+parentWidth)+"px -"+parentElement.style.top
this.container.style.left=parentLeft+parentWidth+"px"
this.container.appendChild(popup.render())
return this.container}}])
return PopupAnnotationElement}(AnnotationElement),PopupElement=function(){function PopupElement(parameters){_classCallCheck(this,PopupElement)
this.container=parameters.container
this.trigger=parameters.trigger
this.color=parameters.color
this.title=parameters.title
this.contents=parameters.contents
this.hideWrapper=parameters.hideWrapper||!1
this.pinned=!1}_createClass(PopupElement,[{key:"render",value:function(){var BACKGROUND_ENLIGHT=.7,wrapper=document.createElement("div")
wrapper.className="popupWrapper"
this.hideElement=this.hideWrapper?wrapper:this.container
this.hideElement.setAttribute("hidden",!0)
var popup=document.createElement("div")
popup.className="popup"
var color=this.color
if(color){var r=BACKGROUND_ENLIGHT*(255-color[0])+color[0],g=BACKGROUND_ENLIGHT*(255-color[1])+color[1],b=BACKGROUND_ENLIGHT*(255-color[2])+color[2]
popup.style.backgroundColor=_util.Util.makeCssRgb(0|r,0|g,0|b)}var contents=this._formatContents(this.contents),title=document.createElement("h1")
title.textContent=this.title
this.trigger.addEventListener("click",this._toggle.bind(this))
this.trigger.addEventListener("mouseover",this._show.bind(this,!1))
this.trigger.addEventListener("mouseout",this._hide.bind(this,!1))
popup.addEventListener("click",this._hide.bind(this,!0))
popup.appendChild(title)
popup.appendChild(contents)
wrapper.appendChild(popup)
return wrapper}},{key:"_formatContents",value:function(contents){for(var p=document.createElement("p"),lines=contents.split(/(?:\r\n?|\n)/),i=0,ii=lines.length;ii>i;++i){var line=lines[i]
p.appendChild(document.createTextNode(line))
ii-1>i&&p.appendChild(document.createElement("br"))}return p}},{key:"_toggle",value:function(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function(){var pin=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1
pin&&(this.pinned=!0)
if(this.hideElement.hasAttribute("hidden")){this.hideElement.removeAttribute("hidden")
this.container.style.zIndex+=1}}},{key:"_hide",value:function(){var unpin=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!0
unpin&&(this.pinned=!1)
if(!this.hideElement.hasAttribute("hidden")&&!this.pinned){this.hideElement.setAttribute("hidden",!0)
this.container.style.zIndex-=1}}}])
return PopupElement}(),LineAnnotationElement=function(_AnnotationElement5){function LineAnnotationElement(parameters){_classCallCheck(this,LineAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(LineAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(LineAnnotationElement,_AnnotationElement5)
_createClass(LineAnnotationElement,[{key:"render",value:function(){this.container.className="lineAnnotation"
var data=this.data,width=data.rect[2]-data.rect[0],height=data.rect[3]-data.rect[1],svg=this.svgFactory.create(width,height),line=this.svgFactory.createElement("svg:line")
line.setAttribute("x1",data.rect[2]-data.lineCoordinates[0])
line.setAttribute("y1",data.rect[3]-data.lineCoordinates[1])
line.setAttribute("x2",data.rect[2]-data.lineCoordinates[2])
line.setAttribute("y2",data.rect[3]-data.lineCoordinates[3])
line.setAttribute("stroke-width",data.borderStyle.width)
line.setAttribute("stroke","transparent")
svg.appendChild(line)
this.container.append(svg)
this._createPopup(this.container,line,data)
return this.container}}])
return LineAnnotationElement}(AnnotationElement),SquareAnnotationElement=function(_AnnotationElement6){function SquareAnnotationElement(parameters){_classCallCheck(this,SquareAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(SquareAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(SquareAnnotationElement,_AnnotationElement6)
_createClass(SquareAnnotationElement,[{key:"render",value:function(){this.container.className="squareAnnotation"
var data=this.data,width=data.rect[2]-data.rect[0],height=data.rect[3]-data.rect[1],svg=this.svgFactory.create(width,height),borderWidth=data.borderStyle.width,square=this.svgFactory.createElement("svg:rect")
square.setAttribute("x",borderWidth/2)
square.setAttribute("y",borderWidth/2)
square.setAttribute("width",width-borderWidth)
square.setAttribute("height",height-borderWidth)
square.setAttribute("stroke-width",borderWidth)
square.setAttribute("stroke","transparent")
square.setAttribute("fill","none")
svg.appendChild(square)
this.container.append(svg)
this._createPopup(this.container,square,data)
return this.container}}])
return SquareAnnotationElement}(AnnotationElement),CircleAnnotationElement=function(_AnnotationElement7){function CircleAnnotationElement(parameters){_classCallCheck(this,CircleAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(CircleAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(CircleAnnotationElement,_AnnotationElement7)
_createClass(CircleAnnotationElement,[{key:"render",value:function(){this.container.className="circleAnnotation"
var data=this.data,width=data.rect[2]-data.rect[0],height=data.rect[3]-data.rect[1],svg=this.svgFactory.create(width,height),borderWidth=data.borderStyle.width,circle=this.svgFactory.createElement("svg:ellipse")
circle.setAttribute("cx",width/2)
circle.setAttribute("cy",height/2)
circle.setAttribute("rx",width/2-borderWidth/2)
circle.setAttribute("ry",height/2-borderWidth/2)
circle.setAttribute("stroke-width",borderWidth)
circle.setAttribute("stroke","transparent")
circle.setAttribute("fill","none")
svg.appendChild(circle)
this.container.append(svg)
this._createPopup(this.container,circle,data)
return this.container}}])
return CircleAnnotationElement}(AnnotationElement),PolylineAnnotationElement=function(_AnnotationElement8){function PolylineAnnotationElement(parameters){var _this3
_classCallCheck(this,PolylineAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
_this3=_possibleConstructorReturn(this,_getPrototypeOf(PolylineAnnotationElement).call(this,parameters,isRenderable,!0))
_this3.containerClassName="polylineAnnotation"
_this3.svgElementName="svg:polyline"
return _this3}_inherits(PolylineAnnotationElement,_AnnotationElement8)
_createClass(PolylineAnnotationElement,[{key:"render",value:function(){this.container.className=this.containerClassName
for(var data=this.data,width=data.rect[2]-data.rect[0],height=data.rect[3]-data.rect[1],svg=this.svgFactory.create(width,height),vertices=data.vertices,points=[],i=0,ii=vertices.length;ii>i;i++){var x=vertices[i].x-data.rect[0],y=data.rect[3]-vertices[i].y
points.push(x+","+y)}points=points.join(" ")
var borderWidth=data.borderStyle.width,polyline=this.svgFactory.createElement(this.svgElementName)
polyline.setAttribute("points",points)
polyline.setAttribute("stroke-width",borderWidth)
polyline.setAttribute("stroke","transparent")
polyline.setAttribute("fill","none")
svg.appendChild(polyline)
this.container.append(svg)
this._createPopup(this.container,polyline,data)
return this.container}}])
return PolylineAnnotationElement}(AnnotationElement),PolygonAnnotationElement=function(_PolylineAnnotationEl){function PolygonAnnotationElement(parameters){var _this4
_classCallCheck(this,PolygonAnnotationElement)
_this4=_possibleConstructorReturn(this,_getPrototypeOf(PolygonAnnotationElement).call(this,parameters))
_this4.containerClassName="polygonAnnotation"
_this4.svgElementName="svg:polygon"
return _this4}_inherits(PolygonAnnotationElement,_PolylineAnnotationEl)
return PolygonAnnotationElement}(PolylineAnnotationElement),InkAnnotationElement=function(_AnnotationElement9){function InkAnnotationElement(parameters){var _this5
_classCallCheck(this,InkAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
_this5=_possibleConstructorReturn(this,_getPrototypeOf(InkAnnotationElement).call(this,parameters,isRenderable,!0))
_this5.containerClassName="inkAnnotation"
_this5.svgElementName="svg:polyline"
return _this5}_inherits(InkAnnotationElement,_AnnotationElement9)
_createClass(InkAnnotationElement,[{key:"render",value:function(){this.container.className=this.containerClassName
for(var data=this.data,width=data.rect[2]-data.rect[0],height=data.rect[3]-data.rect[1],svg=this.svgFactory.create(width,height),inkLists=data.inkLists,i=0,ii=inkLists.length;ii>i;i++){for(var inkList=inkLists[i],points=[],j=0,jj=inkList.length;jj>j;j++){var x=inkList[j].x-data.rect[0],y=data.rect[3]-inkList[j].y
points.push(x+","+y)}points=points.join(" ")
var borderWidth=data.borderStyle.width,polyline=this.svgFactory.createElement(this.svgElementName)
polyline.setAttribute("points",points)
polyline.setAttribute("stroke-width",borderWidth)
polyline.setAttribute("stroke","transparent")
polyline.setAttribute("fill","none")
this._createPopup(this.container,polyline,data)
svg.appendChild(polyline)}this.container.append(svg)
return this.container}}])
return InkAnnotationElement}(AnnotationElement),HighlightAnnotationElement=function(_AnnotationElement10){function HighlightAnnotationElement(parameters){_classCallCheck(this,HighlightAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(HighlightAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(HighlightAnnotationElement,_AnnotationElement10)
_createClass(HighlightAnnotationElement,[{key:"render",value:function(){this.container.className="highlightAnnotation"
this.data.hasPopup||this._createPopup(this.container,null,this.data)
return this.container}}])
return HighlightAnnotationElement}(AnnotationElement),UnderlineAnnotationElement=function(_AnnotationElement11){function UnderlineAnnotationElement(parameters){_classCallCheck(this,UnderlineAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(UnderlineAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(UnderlineAnnotationElement,_AnnotationElement11)
_createClass(UnderlineAnnotationElement,[{key:"render",value:function(){this.container.className="underlineAnnotation"
this.data.hasPopup||this._createPopup(this.container,null,this.data)
return this.container}}])
return UnderlineAnnotationElement}(AnnotationElement),SquigglyAnnotationElement=function(_AnnotationElement12){function SquigglyAnnotationElement(parameters){_classCallCheck(this,SquigglyAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(SquigglyAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(SquigglyAnnotationElement,_AnnotationElement12)
_createClass(SquigglyAnnotationElement,[{key:"render",value:function(){this.container.className="squigglyAnnotation"
this.data.hasPopup||this._createPopup(this.container,null,this.data)
return this.container}}])
return SquigglyAnnotationElement}(AnnotationElement),StrikeOutAnnotationElement=function(_AnnotationElement13){function StrikeOutAnnotationElement(parameters){_classCallCheck(this,StrikeOutAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(StrikeOutAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(StrikeOutAnnotationElement,_AnnotationElement13)
_createClass(StrikeOutAnnotationElement,[{key:"render",value:function(){this.container.className="strikeoutAnnotation"
this.data.hasPopup||this._createPopup(this.container,null,this.data)
return this.container}}])
return StrikeOutAnnotationElement}(AnnotationElement),StampAnnotationElement=function(_AnnotationElement14){function StampAnnotationElement(parameters){_classCallCheck(this,StampAnnotationElement)
var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents)
return _possibleConstructorReturn(this,_getPrototypeOf(StampAnnotationElement).call(this,parameters,isRenderable,!0))}_inherits(StampAnnotationElement,_AnnotationElement14)
_createClass(StampAnnotationElement,[{key:"render",value:function(){this.container.className="stampAnnotation"
this.data.hasPopup||this._createPopup(this.container,null,this.data)
return this.container}}])
return StampAnnotationElement}(AnnotationElement),FileAttachmentAnnotationElement=function(_AnnotationElement15){function FileAttachmentAnnotationElement(parameters){var _this6
_classCallCheck(this,FileAttachmentAnnotationElement)
_this6=_possibleConstructorReturn(this,_getPrototypeOf(FileAttachmentAnnotationElement).call(this,parameters,!0))
var _this6$data$file=_this6.data.file,filename=_this6$data$file.filename,content=_this6$data$file.content
_this6.filename=(0,_dom_utils.getFilenameFromUrl)(filename)
_this6.content=content
_this6.linkService.eventBus&&_this6.linkService.eventBus.dispatch("fileattachmentannotation",{source:_assertThisInitialized(_assertThisInitialized(_this6)),id:(0,_util.stringToPDFString)(filename),filename:filename,content:content})
return _this6}_inherits(FileAttachmentAnnotationElement,_AnnotationElement15)
_createClass(FileAttachmentAnnotationElement,[{key:"render",value:function(){this.container.className="fileAttachmentAnnotation"
var trigger=document.createElement("div")
trigger.style.height=this.container.style.height
trigger.style.width=this.container.style.width
trigger.addEventListener("dblclick",this._download.bind(this))
this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,trigger,this.data)
this.container.appendChild(trigger)
return this.container}},{key:"_download",value:function(){this.downloadManager?this.downloadManager.downloadData(this.content,this.filename,""):(0,_util.warn)("Download cannot be started due to unavailable download manager")}}])
return FileAttachmentAnnotationElement}(AnnotationElement),AnnotationLayer=function(){function AnnotationLayer(){_classCallCheck(this,AnnotationLayer)}_createClass(AnnotationLayer,null,[{key:"render",value:function(parameters){for(var i=0,ii=parameters.annotations.length;ii>i;i++){var data=parameters.annotations[i]
if(data){var element=AnnotationElementFactory.create({data:data,layer:parameters.div,page:parameters.page,viewport:parameters.viewport,linkService:parameters.linkService,downloadManager:parameters.downloadManager,imageResourcesPath:parameters.imageResourcesPath||"",renderInteractiveForms:parameters.renderInteractiveForms||!1,svgFactory:new _dom_utils.DOMSVGFactory})
element.isRenderable&&parameters.div.appendChild(element.render())}}}},{key:"update",value:function(parameters){for(var i=0,ii=parameters.annotations.length;ii>i;i++){var data=parameters.annotations[i],element=parameters.div.querySelector('[data-annotation-id="'+data.id+'"]')
element&&(element.style.transform="matrix("+parameters.viewport.transform.join(",")+")")}parameters.div.removeAttribute("hidden")}}])
return AnnotationLayer}()
exports.AnnotationLayer=AnnotationLayer},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0})
exports.SVGGraphics=void 0
var _util=__w_pdfjs_require__(1),_dom_utils=__w_pdfjs_require__(151),_is_node=_interopRequireDefault(__w_pdfjs_require__(4)),SVGGraphics=function(){throw new Error("Not implemented: SVGGraphics")}
exports.SVGGraphics=SVGGraphics
var SVG_DEFAULTS={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},convertImgDataToPng=function(){function crc32(data,start,end){for(var crc=-1,i=start;end>i;i++){var a=255&(crc^data[i]),b=crcTable[a]
crc=crc>>>8^b}return-1^crc}function writePngChunk(type,body,data,offset){var p=offset,len=body.length
data[p]=len>>24&255
data[p+1]=len>>16&255
data[p+2]=len>>8&255
data[p+3]=255&len
p+=4
data[p]=255&type.charCodeAt(0)
data[p+1]=255&type.charCodeAt(1)
data[p+2]=255&type.charCodeAt(2)
data[p+3]=255&type.charCodeAt(3)
p+=4
data.set(body,p)
p+=body.length
var crc=crc32(data,offset+4,p)
data[p]=crc>>24&255
data[p+1]=crc>>16&255
data[p+2]=crc>>8&255
data[p+3]=255&crc}function adler32(data,start,end){for(var a=1,b=0,i=start;end>i;++i){a=(a+(255&data[i]))%65521
b=(b+a)%65521}return b<<16|a}function deflateSync(literals){if(!(0,_is_node["default"])())return deflateSyncUncompressed(literals)
try{var input
input=parseInt(process.versions.node)>=8?literals:new Buffer(literals)
var output=require("zlib").deflateSync(input,{level:9})
return output instanceof Uint8Array?output:new Uint8Array(output)}catch(e){(0,_util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+e)}return deflateSyncUncompressed(literals)}function deflateSyncUncompressed(literals){var len=literals.length,maxBlockLength=65535,deflateBlocks=Math.ceil(len/maxBlockLength),idat=new Uint8Array(2+len+5*deflateBlocks+4),pi=0
idat[pi++]=120
idat[pi++]=156
for(var pos=0;len>maxBlockLength;){idat[pi++]=0
idat[pi++]=255
idat[pi++]=255
idat[pi++]=0
idat[pi++]=0
idat.set(literals.subarray(pos,pos+maxBlockLength),pi)
pi+=maxBlockLength
pos+=maxBlockLength
len-=maxBlockLength}idat[pi++]=1
idat[pi++]=255&len
idat[pi++]=len>>8&255
idat[pi++]=65535&~len&255
idat[pi++]=(65535&~len)>>8&255
idat.set(literals.subarray(pos),pi)
pi+=literals.length-pos
var adler=adler32(literals,0,literals.length)
idat[pi++]=adler>>24&255
idat[pi++]=adler>>16&255
idat[pi++]=adler>>8&255
idat[pi++]=255&adler
return idat}function encode(imgData,kind,forceDataSchema,isMask){var bitDepth,colorType,lineSize,width=imgData.width,height=imgData.height,bytes=imgData.data
switch(kind){case _util.ImageKind.GRAYSCALE_1BPP:colorType=0
bitDepth=1
lineSize=width+7>>3
break
case _util.ImageKind.RGB_24BPP:colorType=2
bitDepth=8
lineSize=3*width
break
case _util.ImageKind.RGBA_32BPP:colorType=6
bitDepth=8
lineSize=4*width
break
default:throw new Error("invalid format")}var y,i,literals=new Uint8Array((1+lineSize)*height),offsetLiterals=0,offsetBytes=0
for(y=0;height>y;++y){literals[offsetLiterals++]=0
literals.set(bytes.subarray(offsetBytes,offsetBytes+lineSize),offsetLiterals)
offsetBytes+=lineSize
offsetLiterals+=lineSize}if(kind===_util.ImageKind.GRAYSCALE_1BPP&&isMask){offsetLiterals=0
for(y=0;height>y;y++){offsetLiterals++
for(i=0;lineSize>i;i++)literals[offsetLiterals++]^=255}}var ihdr=new Uint8Array([width>>24&255,width>>16&255,width>>8&255,255&width,height>>24&255,height>>16&255,height>>8&255,255&height,bitDepth,colorType,0,0,0]),idat=deflateSync(literals),pngLength=PNG_HEADER.length+3*CHUNK_WRAPPER_SIZE+ihdr.length+idat.length,data=new Uint8Array(pngLength),offset=0
data.set(PNG_HEADER,offset)
offset+=PNG_HEADER.length
writePngChunk("IHDR",ihdr,data,offset)
offset+=CHUNK_WRAPPER_SIZE+ihdr.length
writePngChunk("IDATA",idat,data,offset)
offset+=CHUNK_WRAPPER_SIZE+idat.length
writePngChunk("IEND",new Uint8Array(0),data,offset)
return(0,_util.createObjectURL)(data,"image/png",forceDataSchema)}for(var PNG_HEADER=new Uint8Array([137,80,78,71,13,10,26,10]),CHUNK_WRAPPER_SIZE=12,crcTable=new Int32Array(256),i=0;256>i;i++){for(var c=i,h=0;8>h;h++)c=1&c?3988292384^c>>1&2147483647:c>>1&2147483647
crcTable[i]=c}return function(imgData,forceDataSchema,isMask){var kind=void 0===imgData.kind?_util.ImageKind.GRAYSCALE_1BPP:imgData.kind
return encode(imgData,kind,forceDataSchema,isMask)}}(),SVGExtraState=function(){function SVGExtraState(){this.fontSizeScale=1
this.fontWeight=SVG_DEFAULTS.fontWeight
this.fontSize=0
this.textMatrix=_util.IDENTITY_MATRIX
this.fontMatrix=_util.FONT_IDENTITY_MATRIX
this.leading=0
this.textRenderingMode=_util.TextRenderingMode.FILL
this.x=0
this.y=0
this.lineX=0
this.lineY=0
this.charSpacing=0
this.wordSpacing=0
this.textHScale=1
this.textRise=0
this.fillColor=SVG_DEFAULTS.fillColor
this.strokeColor="#000000"
this.fillAlpha=1
this.strokeAlpha=1
this.lineWidth=1
this.lineJoin=""
this.lineCap=""
this.miterLimit=0
this.dashArray=[]
this.dashPhase=0
this.dependencies=[]
this.activeClipUrl=null
this.clipGroup=null
this.maskId=""}SVGExtraState.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(x,y){this.x=x
this.y=y}}
return SVGExtraState}()
exports.SVGGraphics=SVGGraphics=function(){function opListToTree(opList){for(var opTree=[],tmp=[],opListLen=opList.length,x=0;opListLen>x;x++)if("save"!==opList[x].fn)"restore"===opList[x].fn?opTree=tmp.pop():opTree.push(opList[x])
else{opTree.push({fnId:92,fn:"group",items:[]})
tmp.push(opTree)
opTree=opTree[opTree.length-1].items}return opTree}function pf(value){if(Number.isInteger(value))return value.toString()
var s=value.toFixed(10),i=s.length-1
if("0"!==s[i])return s
do i--
while("0"===s[i])
return s.substring(0,"."===s[i]?i:i+1)}function pm(m){if(0===m[4]&&0===m[5]){if(0===m[1]&&0===m[2])return 1===m[0]&&1===m[3]?"":"scale("+pf(m[0])+" "+pf(m[3])+")"
if(m[0]===m[3]&&m[1]===-m[2]){var a=180*Math.acos(m[0])/Math.PI
return"rotate("+pf(a)+")"}}else if(1===m[0]&&0===m[1]&&0===m[2]&&1===m[3])return"translate("+pf(m[4])+" "+pf(m[5])+")"
return"matrix("+pf(m[0])+" "+pf(m[1])+" "+pf(m[2])+" "+pf(m[3])+" "+pf(m[4])+" "+pf(m[5])+")"}function SVGGraphics(commonObjs,objs,forceDataSchema){this.svgFactory=new _dom_utils.DOMSVGFactory
this.current=new SVGExtraState
this.transformMatrix=_util.IDENTITY_MATRIX
this.transformStack=[]
this.extraStack=[]
this.commonObjs=commonObjs
this.objs=objs
this.pendingClip=null
this.pendingEOFill=!1
this.embedFonts=!1
this.embeddedFonts=Object.create(null)
this.cssStyle=null
this.forceDataSchema=!!forceDataSchema}var XML_NS="http://www.w3.org/XML/1998/namespace",XLINK_NS="http://www.w3.org/1999/xlink",LINE_CAP_STYLES=["butt","round","square"],LINE_JOIN_STYLES=["miter","round","bevel"],clipCount=0,maskCount=0
SVGGraphics.prototype={save:function(){this.transformStack.push(this.transformMatrix)
var old=this.current
this.extraStack.push(old)
this.current=old.clone()},restore:function(){this.transformMatrix=this.transformStack.pop()
this.current=this.extraStack.pop()
this.pendingClip=null
this.tgrp=null},group:function(items){this.save()
this.executeOpTree(items)
this.restore()},loadDependencies:function(operatorList){for(var _this=this,fnArray=operatorList.fnArray,fnArrayLen=fnArray.length,argsArray=operatorList.argsArray,i=0;fnArrayLen>i;i++)if(_util.OPS.dependency===fnArray[i])for(var deps=argsArray[i],n=0,nn=deps.length;nn>n;n++){var promise,obj=deps[n],common="g_"===obj.substring(0,2)
promise=common?new Promise(function(resolve){_this.commonObjs.get(obj,resolve)}):new Promise(function(resolve){_this.objs.get(obj,resolve)})
this.current.dependencies.push(promise)}return Promise.all(this.current.dependencies)},transform:function(a,b,c,d,e,f){var transformMatrix=[a,b,c,d,e,f]
this.transformMatrix=_util.Util.transform(this.transformMatrix,transformMatrix)
this.tgrp=null},getSVG:function(operatorList,viewport){var _this2=this
this.viewport=viewport
var svgElement=this._initialize(viewport)
return this.loadDependencies(operatorList).then(function(){_this2.transformMatrix=_util.IDENTITY_MATRIX
var opTree=_this2.convertOpList(operatorList)
_this2.executeOpTree(opTree)
return svgElement})},convertOpList:function(operatorList){var argsArray=operatorList.argsArray,fnArray=operatorList.fnArray,fnArrayLen=fnArray.length,REVOPS=[],opList=[]
for(var op in _util.OPS)REVOPS[_util.OPS[op]]=op
for(var x=0;fnArrayLen>x;x++){var fnId=fnArray[x]
opList.push({fnId:fnId,fn:REVOPS[fnId],args:argsArray[x]})}return opListToTree(opList)},executeOpTree:function(opTree){for(var opTreeLen=opTree.length,x=0;opTreeLen>x;x++){var fn=opTree[x].fn,fnId=opTree[x].fnId,args=opTree[x].args
switch(0|fnId){case _util.OPS.beginText:this.beginText()
break
case _util.OPS.dependency:break
case _util.OPS.setLeading:this.setLeading(args)
break
case _util.OPS.setLeadingMoveText:this.setLeadingMoveText(args[0],args[1])
break
case _util.OPS.setFont:this.setFont(args)
break
case _util.OPS.showText:this.showText(args[0])
break
case _util.OPS.showSpacedText:this.showText(args[0])
break
case _util.OPS.endText:this.endText()
break
case _util.OPS.moveText:this.moveText(args[0],args[1])
break
case _util.OPS.setCharSpacing:this.setCharSpacing(args[0])
break
case _util.OPS.setWordSpacing:this.setWordSpacing(args[0])
break
case _util.OPS.setHScale:this.setHScale(args[0])
break
case _util.OPS.setTextMatrix:this.setTextMatrix(args[0],args[1],args[2],args[3],args[4],args[5])
break
case _util.OPS.setTextRise:this.setTextRise(args[0])
break
case _util.OPS.setTextRenderingMode:this.setTextRenderingMode(args[0])
break
case _util.OPS.setLineWidth:this.setLineWidth(args[0])
break
case _util.OPS.setLineJoin:this.setLineJoin(args[0])
break
case _util.OPS.setLineCap:this.setLineCap(args[0])
break
case _util.OPS.setMiterLimit:this.setMiterLimit(args[0])
break
case _util.OPS.setFillRGBColor:this.setFillRGBColor(args[0],args[1],args[2])
break
case _util.OPS.setStrokeRGBColor:this.setStrokeRGBColor(args[0],args[1],args[2])
break
case _util.OPS.setDash:this.setDash(args[0],args[1])
break
case _util.OPS.setGState:this.setGState(args[0])
break
case _util.OPS.fill:this.fill()
break
case _util.OPS.eoFill:this.eoFill()
break
case _util.OPS.stroke:this.stroke()
break
case _util.OPS.fillStroke:this.fillStroke()
break
case _util.OPS.eoFillStroke:this.eoFillStroke()
break
case _util.OPS.clip:this.clip("nonzero")
break
case _util.OPS.eoClip:this.clip("evenodd")
break
case _util.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case _util.OPS.paintJpegXObject:this.paintJpegXObject(args[0],args[1],args[2])
break
case _util.OPS.paintImageXObject:this.paintImageXObject(args[0])
break
case _util.OPS.paintInlineImageXObject:this.paintInlineImageXObject(args[0])
break
case _util.OPS.paintImageMaskXObject:this.paintImageMaskXObject(args[0])
break
case _util.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(args[0],args[1])
break
case _util.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case _util.OPS.closePath:this.closePath()
break
case _util.OPS.closeStroke:this.closeStroke()
break
case _util.OPS.closeFillStroke:this.closeFillStroke()
break
case _util.OPS.closeEOFillStroke:this.closeEOFillStroke()
break
case _util.OPS.nextLine:this.nextLine()
break
case _util.OPS.transform:this.transform(args[0],args[1],args[2],args[3],args[4],args[5])
break
case _util.OPS.constructPath:this.constructPath(args[0],args[1])
break
case _util.OPS.endPath:this.endPath()
break
case 92:this.group(opTree[x].items)
break
default:(0,_util.warn)("Unimplemented operator "+fn)}}},setWordSpacing:function(wordSpacing){this.current.wordSpacing=wordSpacing},setCharSpacing:function(charSpacing){this.current.charSpacing=charSpacing},nextLine:function(){this.moveText(0,this.current.leading)},setTextMatrix:function(a,b,c,d,e,f){var current=this.current
this.current.textMatrix=this.current.lineMatrix=[a,b,c,d,e,f]
this.current.x=this.current.lineX=0
this.current.y=this.current.lineY=0
current.xcoords=[]
current.tspan=this.svgFactory.createElement("svg:tspan")
current.tspan.setAttributeNS(null,"font-family",current.fontFamily)
current.tspan.setAttributeNS(null,"font-size",pf(current.fontSize)+"px")
current.tspan.setAttributeNS(null,"y",pf(-current.y))
current.txtElement=this.svgFactory.createElement("svg:text")
current.txtElement.appendChild(current.tspan)},beginText:function(){this.current.x=this.current.lineX=0
this.current.y=this.current.lineY=0
this.current.textMatrix=_util.IDENTITY_MATRIX
this.current.lineMatrix=_util.IDENTITY_MATRIX
this.current.tspan=this.svgFactory.createElement("svg:tspan")
this.current.txtElement=this.svgFactory.createElement("svg:text")
this.current.txtgrp=this.svgFactory.createElement("svg:g")
this.current.xcoords=[]},moveText:function(x,y){var current=this.current
this.current.x=this.current.lineX+=x
this.current.y=this.current.lineY+=y
current.xcoords=[]
current.tspan=this.svgFactory.createElement("svg:tspan")
current.tspan.setAttributeNS(null,"font-family",current.fontFamily)
current.tspan.setAttributeNS(null,"font-size",pf(current.fontSize)+"px")
current.tspan.setAttributeNS(null,"y",pf(-current.y))},showText:function(glyphs){var current=this.current,font=current.font,fontSize=current.fontSize
if(0!==fontSize){var i,charSpacing=current.charSpacing,wordSpacing=current.wordSpacing,fontDirection=current.fontDirection,textHScale=current.textHScale*fontDirection,glyphsLength=glyphs.length,vertical=font.vertical,widthAdvanceScale=fontSize*current.fontMatrix[0],x=0
for(i=0;glyphsLength>i;++i){var glyph=glyphs[i]
if(null!==glyph)if((0,_util.isNum)(glyph))x+=-glyph*fontSize*.001
else{var width=glyph.width,character=glyph.fontChar,spacing=(glyph.isSpace?wordSpacing:0)+charSpacing,charWidth=width*widthAdvanceScale+spacing*fontDirection
if(glyph.isInFont||font.missingFile){current.xcoords.push(current.x+x*textHScale)
current.tspan.textContent+=character
x+=charWidth}else x+=charWidth}else x+=fontDirection*wordSpacing}vertical?current.y-=x*textHScale:current.x+=x*textHScale
current.tspan.setAttributeNS(null,"x",current.xcoords.map(pf).join(" "))
current.tspan.setAttributeNS(null,"y",pf(-current.y))
current.tspan.setAttributeNS(null,"font-family",current.fontFamily)
current.tspan.setAttributeNS(null,"font-size",pf(current.fontSize)+"px")
current.fontStyle!==SVG_DEFAULTS.fontStyle&&current.tspan.setAttributeNS(null,"font-style",current.fontStyle)
current.fontWeight!==SVG_DEFAULTS.fontWeight&&current.tspan.setAttributeNS(null,"font-weight",current.fontWeight)
var fillStrokeMode=current.textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK
if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){current.fillColor!==SVG_DEFAULTS.fillColor&&current.tspan.setAttributeNS(null,"fill",current.fillColor)
current.fillAlpha<1&&current.tspan.setAttributeNS(null,"fill-opacity",current.fillAlpha)}else current.textRenderingMode===_util.TextRenderingMode.ADD_TO_PATH?current.tspan.setAttributeNS(null,"fill","transparent"):current.tspan.setAttributeNS(null,"fill","none");(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE)&&this._setStrokeAttributes(current.tspan)
var textMatrix=current.textMatrix
if(0!==current.textRise){textMatrix=textMatrix.slice()
textMatrix[5]+=current.textRise}current.txtElement.setAttributeNS(null,"transform",pm(textMatrix)+" scale(1, -1)")
current.txtElement.setAttributeNS(XML_NS,"xml:space","preserve")
current.txtElement.appendChild(current.tspan)
current.txtgrp.appendChild(current.txtElement)
this._ensureTransformGroup().appendChild(current.txtElement)}},setLeadingMoveText:function(x,y){this.setLeading(-y)
this.moveText(x,y)},addFontStyle:function(fontObj){if(!this.cssStyle){this.cssStyle=this.svgFactory.createElement("svg:style")
this.cssStyle.setAttributeNS(null,"type","text/css")
this.defs.appendChild(this.cssStyle)}var url=(0,_util.createObjectURL)(fontObj.data,fontObj.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'+fontObj.loadedName+'"; src: url('+url+"); }\n"},setFont:function(details){var current=this.current,fontObj=this.commonObjs.get(details[0]),size=details[1]
this.current.font=fontObj
if(this.embedFonts&&fontObj.data&&!this.embeddedFonts[fontObj.loadedName]){this.addFontStyle(fontObj)
this.embeddedFonts[fontObj.loadedName]=fontObj}current.fontMatrix=fontObj.fontMatrix?fontObj.fontMatrix:_util.FONT_IDENTITY_MATRIX
var bold=fontObj.black?fontObj.bold?"bolder":"bold":fontObj.bold?"bold":"normal",italic=fontObj.italic?"italic":"normal"
if(0>size){size=-size
current.fontDirection=-1}else current.fontDirection=1
current.fontSize=size
current.fontFamily=fontObj.loadedName
current.fontWeight=bold
current.fontStyle=italic
current.tspan=this.svgFactory.createElement("svg:tspan")
current.tspan.setAttributeNS(null,"y",pf(-current.y))
current.xcoords=[]},endText:function(){var current=this.current
if(current.textRenderingMode&_util.TextRenderingMode.ADD_TO_PATH_FLAG&&current.txtElement&&current.txtElement.hasChildNodes()){current.element=current.txtElement
this.clip("nonzero")
this.endPath()}},setLineWidth:function(width){width>0&&(this.current.lineWidth=width)},setLineCap:function(style){this.current.lineCap=LINE_CAP_STYLES[style]},setLineJoin:function(style){this.current.lineJoin=LINE_JOIN_STYLES[style]},setMiterLimit:function(limit){this.current.miterLimit=limit},setStrokeAlpha:function(strokeAlpha){this.current.strokeAlpha=strokeAlpha},setStrokeRGBColor:function(r,g,b){var color=_util.Util.makeCssRgb(r,g,b)
this.current.strokeColor=color},setFillAlpha:function(fillAlpha){this.current.fillAlpha=fillAlpha},setFillRGBColor:function(r,g,b){var color=_util.Util.makeCssRgb(r,g,b)
this.current.fillColor=color
this.current.tspan=this.svgFactory.createElement("svg:tspan")
this.current.xcoords=[]},setDash:function(dashArray,dashPhase){this.current.dashArray=dashArray
this.current.dashPhase=dashPhase},constructPath:function(ops,args){var current=this.current,x=current.x,y=current.y
current.path=this.svgFactory.createElement("svg:path")
for(var d=[],opLength=ops.length,i=0,j=0;opLength>i;i++)switch(0|ops[i]){case _util.OPS.rectangle:x=args[j++]
y=args[j++]
var width=args[j++],height=args[j++],xw=x+width,yh=y+height
d.push("M",pf(x),pf(y),"L",pf(xw),pf(y),"L",pf(xw),pf(yh),"L",pf(x),pf(yh),"Z")
break
case _util.OPS.moveTo:x=args[j++]
y=args[j++]
d.push("M",pf(x),pf(y))
break
case _util.OPS.lineTo:x=args[j++]
y=args[j++]
d.push("L",pf(x),pf(y))
break
case _util.OPS.curveTo:x=args[j+4]
y=args[j+5]
d.push("C",pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]),pf(x),pf(y))
j+=6
break
case _util.OPS.curveTo2:x=args[j+2]
y=args[j+3]
d.push("C",pf(x),pf(y),pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]))
j+=4
break
case _util.OPS.curveTo3:x=args[j+2]
y=args[j+3]
d.push("C",pf(args[j]),pf(args[j+1]),pf(x),pf(y),pf(x),pf(y))
j+=4
break
case _util.OPS.closePath:d.push("Z")}current.path.setAttributeNS(null,"d",d.join(" "))
current.path.setAttributeNS(null,"fill","none")
this._ensureTransformGroup().appendChild(current.path)
current.element=current.path
current.setCurrentPoint(x,y)},endPath:function(){if(this.pendingClip){var current=this.current,clipId="clippath"+clipCount
clipCount++
var clipPath=this.svgFactory.createElement("svg:clipPath")
clipPath.setAttributeNS(null,"id",clipId)
clipPath.setAttributeNS(null,"transform",pm(this.transformMatrix))
var clipElement=current.element.cloneNode(!0)
"evenodd"===this.pendingClip?clipElement.setAttributeNS(null,"clip-rule","evenodd"):clipElement.setAttributeNS(null,"clip-rule","nonzero")
this.pendingClip=null
clipPath.appendChild(clipElement)
this.defs.appendChild(clipPath)
if(current.activeClipUrl){current.clipGroup=null
this.extraStack.forEach(function(prev){prev.clipGroup=null})
clipPath.setAttributeNS(null,"clip-path",current.activeClipUrl)}current.activeClipUrl="url(#"+clipId+")"
this.tgrp=null}},clip:function(type){this.pendingClip=type},closePath:function(){var current=this.current
if(current.path){var d=current.path.getAttributeNS(null,"d")
d+="Z"
current.path.setAttributeNS(null,"d",d)}},setLeading:function(leading){this.current.leading=-leading},setTextRise:function(textRise){this.current.textRise=textRise},setTextRenderingMode:function(textRenderingMode){this.current.textRenderingMode=textRenderingMode},setHScale:function(scale){this.current.textHScale=scale/100},setGState:function(states){for(var i=0,ii=states.length;ii>i;i++){var state=states[i],key=state[0],value=state[1]
switch(key){case"LW":this.setLineWidth(value)
break
case"LC":this.setLineCap(value)
break
case"LJ":this.setLineJoin(value)
break
case"ML":this.setMiterLimit(value)
break
case"D":this.setDash(value[0],value[1])
break
case"Font":this.setFont(value)
break
case"CA":this.setStrokeAlpha(value)
break
case"ca":this.setFillAlpha(value)
break
default:(0,_util.warn)("Unimplemented graphic state "+key)}}},fill:function(){var current=this.current
if(current.element){current.element.setAttributeNS(null,"fill",current.fillColor)
current.element.setAttributeNS(null,"fill-opacity",current.fillAlpha)
this.endPath()}},stroke:function(){var current=this.current
if(current.element){this._setStrokeAttributes(current.element)
current.element.setAttributeNS(null,"fill","none")
this.endPath()}},_setStrokeAttributes:function(element){var current=this.current
element.setAttributeNS(null,"stroke",current.strokeColor)
element.setAttributeNS(null,"stroke-opacity",current.strokeAlpha)
element.setAttributeNS(null,"stroke-miterlimit",pf(current.miterLimit))
element.setAttributeNS(null,"stroke-linecap",current.lineCap)
element.setAttributeNS(null,"stroke-linejoin",current.lineJoin)
element.setAttributeNS(null,"stroke-width",pf(current.lineWidth)+"px")
element.setAttributeNS(null,"stroke-dasharray",current.dashArray.map(pf).join(" "))
element.setAttributeNS(null,"stroke-dashoffset",pf(current.dashPhase)+"px")},eoFill:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd")
this.fill()},fillStroke:function(){this.stroke()
this.fill()},eoFillStroke:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd")
this.fillStroke()},closeStroke:function(){this.closePath()
this.stroke()},closeFillStroke:function(){this.closePath()
this.fillStroke()},closeEOFillStroke:function(){this.closePath()
this.eoFillStroke()},paintSolidColorImageMask:function(){var current=this.current,rect=this.svgFactory.createElement("svg:rect")
rect.setAttributeNS(null,"x","0")
rect.setAttributeNS(null,"y","0")
rect.setAttributeNS(null,"width","1px")
rect.setAttributeNS(null,"height","1px")
rect.setAttributeNS(null,"fill",current.fillColor)
this._ensureTransformGroup().appendChild(rect)},paintJpegXObject:function(objId,w,h){var imgObj=this.objs.get(objId),imgEl=this.svgFactory.createElement("svg:image")
imgEl.setAttributeNS(XLINK_NS,"xlink:href",imgObj.src)
imgEl.setAttributeNS(null,"width",pf(w))
imgEl.setAttributeNS(null,"height",pf(h))
imgEl.setAttributeNS(null,"x","0")
imgEl.setAttributeNS(null,"y",pf(-h))
imgEl.setAttributeNS(null,"transform","scale("+pf(1/w)+" "+pf(-1/h)+")")
this._ensureTransformGroup().appendChild(imgEl)},paintImageXObject:function(objId){var imgData=this.objs.get(objId)
imgData?this.paintInlineImageXObject(imgData):(0,_util.warn)("Dependent image isn't ready yet")},paintInlineImageXObject:function(imgData,mask){var width=imgData.width,height=imgData.height,imgSrc=convertImgDataToPng(imgData,this.forceDataSchema,!!mask),cliprect=this.svgFactory.createElement("svg:rect")
cliprect.setAttributeNS(null,"x","0")
cliprect.setAttributeNS(null,"y","0")
cliprect.setAttributeNS(null,"width",pf(width))
cliprect.setAttributeNS(null,"height",pf(height))
this.current.element=cliprect
this.clip("nonzero")
var imgEl=this.svgFactory.createElement("svg:image")
imgEl.setAttributeNS(XLINK_NS,"xlink:href",imgSrc)
imgEl.setAttributeNS(null,"x","0")
imgEl.setAttributeNS(null,"y",pf(-height))
imgEl.setAttributeNS(null,"width",pf(width)+"px")
imgEl.setAttributeNS(null,"height",pf(height)+"px")
imgEl.setAttributeNS(null,"transform","scale("+pf(1/width)+" "+pf(-1/height)+")")
mask?mask.appendChild(imgEl):this._ensureTransformGroup().appendChild(imgEl)},paintImageMaskXObject:function(imgData){var current=this.current,width=imgData.width,height=imgData.height,fillColor=current.fillColor
current.maskId="mask"+maskCount++
var mask=this.svgFactory.createElement("svg:mask")
mask.setAttributeNS(null,"id",current.maskId)
var rect=this.svgFactory.createElement("svg:rect")
rect.setAttributeNS(null,"x","0")
rect.setAttributeNS(null,"y","0")
rect.setAttributeNS(null,"width",pf(width))
rect.setAttributeNS(null,"height",pf(height))
rect.setAttributeNS(null,"fill",fillColor)
rect.setAttributeNS(null,"mask","url(#"+current.maskId+")")
this.defs.appendChild(mask)
this._ensureTransformGroup().appendChild(rect)
this.paintInlineImageXObject(imgData,mask)},paintFormXObjectBegin:function(matrix,bbox){Array.isArray(matrix)&&6===matrix.length&&this.transform(matrix[0],matrix[1],matrix[2],matrix[3],matrix[4],matrix[5])
if(bbox){var width=bbox[2]-bbox[0],height=bbox[3]-bbox[1],cliprect=this.svgFactory.createElement("svg:rect")
cliprect.setAttributeNS(null,"x",bbox[0])
cliprect.setAttributeNS(null,"y",bbox[1])
cliprect.setAttributeNS(null,"width",pf(width))
cliprect.setAttributeNS(null,"height",pf(height))
this.current.element=cliprect
this.clip("nonzero")
this.endPath()}},paintFormXObjectEnd:function(){},_initialize:function(viewport){var svg=this.svgFactory.create(viewport.width,viewport.height),definitions=this.svgFactory.createElement("svg:defs")
svg.appendChild(definitions)
this.defs=definitions
var rootGroup=this.svgFactory.createElement("svg:g")
rootGroup.setAttributeNS(null,"transform",pm(viewport.transform))
svg.appendChild(rootGroup)
this.svg=rootGroup
return svg},_ensureClipGroup:function(){if(!this.current.clipGroup){var clipGroup=this.svgFactory.createElement("svg:g")
clipGroup.setAttributeNS(null,"clip-path",this.current.activeClipUrl)
this.svg.appendChild(clipGroup)
this.current.clipGroup=clipGroup}return this.current.clipGroup},_ensureTransformGroup:function(){if(!this.tgrp){this.tgrp=this.svgFactory.createElement("svg:g")
this.tgrp.setAttributeNS(null,"transform",pm(this.transformMatrix))
this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)}return this.tgrp}}
return SVGGraphics}()},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _typeof(obj){_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}
return _typeof(obj)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)}
return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function")
subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}})
superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p
return o}
return _setPrototypeOf(o,p)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error)
return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments
return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args)
_next(void 0)})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}function parseUrl(sourceUrl){var parsedUrl=url.parse(sourceUrl)
if("file:"===parsedUrl.protocol||parsedUrl.host)return parsedUrl
if(/^[a-z]:[\/\\]/i.test(sourceUrl))return url.parse("file:///".concat(sourceUrl))
parsedUrl.host||(parsedUrl.protocol="file:")
return parsedUrl}function createRequestOptions(url,headers){return{protocol:url.protocol,auth:url.auth,host:url.hostname,port:url.port,path:url.path,method:"GET",headers:headers}}Object.defineProperty(exports,"__esModule",{value:!0})
exports.PDFNodeStream=void 0
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(147)),_util=__w_pdfjs_require__(1),_network_utils=__w_pdfjs_require__(166),fs=require("fs"),http=require("http"),https=require("https"),url=require("url"),fileUriRegex=/^file:\/\/\/[a-zA-Z]:\//,PDFNodeStream=function(){function PDFNodeStream(source){_classCallCheck(this,PDFNodeStream)
this.source=source
this.url=parseUrl(source.url)
this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol
this.isFsUrl="file:"===this.url.protocol
this.httpHeaders=this.isHttp&&source.httpHeaders||{}
this._fullRequest=null
this._rangeRequestReaders=[]}_createClass(PDFNodeStream,[{key:"getFullReader",value:function(){(0,_util.assert)(!this._fullRequest)
this._fullRequest=this.isFsUrl?new PDFNodeStreamFsFullReader(this):new PDFNodeStreamFullReader(this)
return this._fullRequest}},{key:"getRangeReader",value:function(start,end){var rangeReader=this.isFsUrl?new PDFNodeStreamFsRangeReader(this,start,end):new PDFNodeStreamRangeReader(this,start,end)
this._rangeRequestReaders.push(rangeReader)
return rangeReader}},{key:"cancelAllRequests",value:function(reason){this._fullRequest&&this._fullRequest.cancel(reason)
var readers=this._rangeRequestReaders.slice(0)
readers.forEach(function(reader){reader.cancel(reason)})}}])
return PDFNodeStream}()
exports.PDFNodeStream=PDFNodeStream
var BaseFullReader=function(){function BaseFullReader(stream){_classCallCheck(this,BaseFullReader)
this._url=stream.url
this._done=!1
this._storedError=null
this.onProgress=null
var source=stream.source
this._contentLength=source.length
this._loaded=0
this._filename=null
this._disableRange=source.disableRange||!1
this._rangeChunkSize=source.rangeChunkSize
this._rangeChunkSize||this._disableRange||(this._disableRange=!0)
this._isStreamingSupported=!source.disableStream
this._isRangeSupported=!source.disableRange
this._readableStream=null
this._readCapability=(0,_util.createPromiseCapability)()
this._headersCapability=(0,_util.createPromiseCapability)()}_createClass(BaseFullReader,[{key:"read",value:function(){function read(){return _read.apply(this,arguments)}var _read=_asyncToGenerator(_regenerator["default"].mark(function _callee(){var chunk,buffer
return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:_context.next=2
return this._readCapability.promise
case 2:if(!this._done){_context.next=4
break}return _context.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){_context.next=6
break}throw this._storedError
case 6:chunk=this._readableStream.read()
if(null!==chunk){_context.next=10
break}this._readCapability=(0,_util.createPromiseCapability)()
return _context.abrupt("return",this.read())
case 10:this._loaded+=chunk.length
this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength})
buffer=new Uint8Array(chunk).buffer
return _context.abrupt("return",{value:buffer,done:!1})
case 14:case"end":return _context.stop()}},_callee,this)}))
return read}()},{key:"cancel",value:function(reason){this._readableStream?this._readableStream.destroy(reason):this._error(reason)}},{key:"_error",value:function(reason){this._storedError=reason
this._readCapability.resolve()}},{key:"_setReadableStream",value:function(readableStream){var _this=this
this._readableStream=readableStream
readableStream.on("readable",function(){_this._readCapability.resolve()})
readableStream.on("end",function(){readableStream.destroy()
_this._done=!0
_this._readCapability.resolve()})
readableStream.on("error",function(reason){_this._error(reason)})
!this._isStreamingSupported&&this._isRangeSupported&&this._error(new _util.AbortException("streaming is disabled"))
this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}])
return BaseFullReader}(),BaseRangeReader=function(){function BaseRangeReader(stream){_classCallCheck(this,BaseRangeReader)
this._url=stream.url
this._done=!1
this._storedError=null
this.onProgress=null
this._loaded=0
this._readableStream=null
this._readCapability=(0,_util.createPromiseCapability)()
var source=stream.source
this._isStreamingSupported=!source.disableStream}_createClass(BaseRangeReader,[{key:"read",value:function(){function read(){return _read2.apply(this,arguments)}var _read2=_asyncToGenerator(_regenerator["default"].mark(function _callee2(){var chunk,buffer
return _regenerator["default"].wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:_context2.next=2
return this._readCapability.promise
case 2:if(!this._done){_context2.next=4
break}return _context2.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){_context2.next=6
break}throw this._storedError
case 6:chunk=this._readableStream.read()
if(null!==chunk){_context2.next=10
break}this._readCapability=(0,_util.createPromiseCapability)()
return _context2.abrupt("return",this.read())
case 10:this._loaded+=chunk.length
this.onProgress&&this.onProgress({loaded:this._loaded})
buffer=new Uint8Array(chunk).buffer
return _context2.abrupt("return",{value:buffer,done:!1})
case 14:case"end":return _context2.stop()}},_callee2,this)}))
return read}()},{key:"cancel",value:function(reason){this._readableStream?this._readableStream.destroy(reason):this._error(reason)}},{key:"_error",value:function(reason){this._storedError=reason
this._readCapability.resolve()}},{key:"_setReadableStream",value:function(readableStream){var _this2=this
this._readableStream=readableStream
readableStream.on("readable",function(){_this2._readCapability.resolve()})
readableStream.on("end",function(){readableStream.destroy()
_this2._done=!0
_this2._readCapability.resolve()})
readableStream.on("error",function(reason){_this2._error(reason)})
this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}])
return BaseRangeReader}(),PDFNodeStreamFullReader=function(_BaseFullReader){function PDFNodeStreamFullReader(stream){var _this3
_classCallCheck(this,PDFNodeStreamFullReader)
_this3=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamFullReader).call(this,stream))
var handleResponse=function(response){if(404!==response.statusCode){_this3._headersCapability.resolve()
_this3._setReadableStream(response)
var getResponseHeader=function(name){return _this3._readableStream.headers[name.toLowerCase()]},_validateRangeRequest=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader:getResponseHeader,isHttp:stream.isHttp,rangeChunkSize:_this3._rangeChunkSize,disableRange:_this3._disableRange}),allowRangeRequests=_validateRangeRequest.allowRangeRequests,suggestedLength=_validateRangeRequest.suggestedLength
_this3._isRangeSupported=allowRangeRequests
_this3._contentLength=suggestedLength||_this3._contentLength
_this3._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader)}else{var error=new _util.MissingPDFException('Missing PDF "'.concat(_this3._url,'".'))
_this3._storedError=error
_this3._headersCapability.reject(error)}}
_this3._request=null
"http:"===_this3._url.protocol?_this3._request=http.request(createRequestOptions(_this3._url,stream.httpHeaders),handleResponse):_this3._request=https.request(createRequestOptions(_this3._url,stream.httpHeaders),handleResponse)
_this3._request.on("error",function(reason){_this3._storedError=reason
_this3._headersCapability.reject(reason)})
_this3._request.end()
return _this3}_inherits(PDFNodeStreamFullReader,_BaseFullReader)
return PDFNodeStreamFullReader}(BaseFullReader),PDFNodeStreamRangeReader=function(_BaseRangeReader){function PDFNodeStreamRangeReader(stream,start,end){var _this4
_classCallCheck(this,PDFNodeStreamRangeReader)
_this4=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamRangeReader).call(this,stream))
_this4._httpHeaders={}
for(var property in stream.httpHeaders){var value=stream.httpHeaders[property]
"undefined"!=typeof value&&(_this4._httpHeaders[property]=value)}_this4._httpHeaders.Range="bytes=".concat(start,"-").concat(end-1)
var handleResponse=function(response){if(404!==response.statusCode)_this4._setReadableStream(response)
else{var error=new _util.MissingPDFException('Missing PDF "'.concat(_this4._url,'".'))
_this4._storedError=error}}
_this4._request=null
"http:"===_this4._url.protocol?_this4._request=http.request(createRequestOptions(_this4._url,_this4._httpHeaders),handleResponse):_this4._request=https.request(createRequestOptions(_this4._url,_this4._httpHeaders),handleResponse)
_this4._request.on("error",function(reason){_this4._storedError=reason})
_this4._request.end()
return _this4}_inherits(PDFNodeStreamRangeReader,_BaseRangeReader)
return PDFNodeStreamRangeReader}(BaseRangeReader),PDFNodeStreamFsFullReader=function(_BaseFullReader2){function PDFNodeStreamFsFullReader(stream){var _this5
_classCallCheck(this,PDFNodeStreamFsFullReader)
_this5=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamFsFullReader).call(this,stream))
var path=decodeURIComponent(_this5._url.path)
fileUriRegex.test(_this5._url.href)&&(path=path.replace(/^\//,""))
fs.lstat(path,function(error,stat){if(error){"ENOENT"===error.code&&(error=new _util.MissingPDFException('Missing PDF "'.concat(path,'".')))
_this5._storedError=error
_this5._headersCapability.reject(error)}else{_this5._contentLength=stat.size
_this5._setReadableStream(fs.createReadStream(path))
_this5._headersCapability.resolve()}})
return _this5}_inherits(PDFNodeStreamFsFullReader,_BaseFullReader2)
return PDFNodeStreamFsFullReader}(BaseFullReader),PDFNodeStreamFsRangeReader=function(_BaseRangeReader2){function PDFNodeStreamFsRangeReader(stream,start,end){var _this6
_classCallCheck(this,PDFNodeStreamFsRangeReader)
_this6=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamFsRangeReader).call(this,stream))
var path=decodeURIComponent(_this6._url.path)
fileUriRegex.test(_this6._url.href)&&(path=path.replace(/^\//,""))
_this6._setReadableStream(fs.createReadStream(path,{start:start,end:end-1}))
return _this6}_inherits(PDFNodeStreamFsRangeReader,_BaseRangeReader2)
return PDFNodeStreamFsRangeReader}(BaseRangeReader)},function(module,exports,__w_pdfjs_require__){"use strict"
function validateRangeRequestCapabilities(_ref){var getResponseHeader=_ref.getResponseHeader,isHttp=_ref.isHttp,rangeChunkSize=_ref.rangeChunkSize,disableRange=_ref.disableRange;(0,_util.assert)(rangeChunkSize>0,"Range chunk size must be larger than zero")
var returnValues={allowRangeRequests:!1,suggestedLength:void 0},length=parseInt(getResponseHeader("Content-Length"),10)
if(!Number.isInteger(length))return returnValues
returnValues.suggestedLength=length
if(2*rangeChunkSize>=length)return returnValues
if(disableRange||!isHttp)return returnValues
if("bytes"!==getResponseHeader("Accept-Ranges"))return returnValues
var contentEncoding=getResponseHeader("Content-Encoding")||"identity"
if("identity"!==contentEncoding)return returnValues
returnValues.allowRangeRequests=!0
return returnValues}function extractFilenameFromHeader(getResponseHeader){var contentDisposition=getResponseHeader("Content-Disposition")
if(contentDisposition){var filename=(0,_content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition)
if(/\.pdf$/i.test(filename))return filename}return null}function createResponseStatusError(status,url){return 404===status||0===status&&/^file:/.test(url)?new _util.MissingPDFException('Missing PDF "'+url+'".'):new _util.UnexpectedResponseException("Unexpected server response ("+status+') while retrieving PDF "'+url+'".',status)}function validateResponseStatus(status){return 200===status||206===status}Object.defineProperty(exports,"__esModule",{value:!0})
exports.createResponseStatusError=createResponseStatusError
exports.extractFilenameFromHeader=extractFilenameFromHeader
exports.validateRangeRequestCapabilities=validateRangeRequestCapabilities
exports.validateResponseStatus=validateResponseStatus
var _util=__w_pdfjs_require__(1),_content_disposition=__w_pdfjs_require__(167)},function(module,exports,__w_pdfjs_require__){"use strict"
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0
try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done);_n=!0){_arr.push(_s.value)
if(i&&_arr.length===i)break}}catch(err){_d=!0
_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){return Array.isArray(arr)?arr:void 0}function getFilenameFromContentDispositionHeader(contentDisposition){function toParamRegExp(attributePattern,flags){return new RegExp("(?:^|;)\\s*"+attributePattern+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',flags)}function textdecode(encoding,value){if(encoding){if(!/^[\x00-\xFF]+$/.test(value))return value
try{var decoder=new TextDecoder(encoding,{fatal:!0}),bytes=Array.from(value,function(ch){return 255&ch.charCodeAt(0)})
value=decoder.decode(new Uint8Array(bytes))
needsEncodingFixup=!1}catch(e){if(/^utf-?8$/i.test(encoding))try{value=decodeURIComponent(escape(value))
needsEncodingFixup=!1}catch(err){}}}return value}function fixupEncoding(value){if(needsEncodingFixup&&/[\x80-\xff]/.test(value)){value=textdecode("utf-8",value)
needsEncodingFixup&&(value=textdecode("iso-8859-1",value))}return value}function rfc2231getparam(contentDisposition){for(var match,matches=[],iter=toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)","ig");null!==(match=iter.exec(contentDisposition));){var _match=match,_match2=_slicedToArray(_match,4),n=_match2[1],quot=_match2[2],part=_match2[3]
n=parseInt(n,10)
if(n in matches){if(0===n)break}else matches[n]=[quot,part]}for(var parts=[],n=0;n<matches.length&&n in matches;++n){var _matches$n=_slicedToArray(matches[n],2),quot=_matches$n[0],part=_matches$n[1]
part=rfc2616unquote(part)
if(quot){part=unescape(part)
0===n&&(part=rfc5987decode(part))}parts.push(part)}return parts.join("")}function rfc2616unquote(value){if(value.startsWith('"')){for(var parts=value.slice(1).split('\\"'),i=0;i<parts.length;++i){var quotindex=parts[i].indexOf('"')
if(-1!==quotindex){parts[i]=parts[i].slice(0,quotindex)
parts.length=i+1}parts[i]=parts[i].replace(/\\(.)/g,"$1")}value=parts.join('"')}return value}function rfc5987decode(extvalue){var encodingend=extvalue.indexOf("'")
if(-1===encodingend)return extvalue
var encoding=extvalue.slice(0,encodingend),langvalue=extvalue.slice(encodingend+1),value=langvalue.replace(/^[^']*'/,"")
return textdecode(encoding,value)}function rfc2047decode(value){return!value.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(value)?value:value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,function(_,charset,encoding,text){if("q"===encoding||"Q"===encoding){text=text.replace(/_/g," ")
text=text.replace(/=([0-9a-fA-F]{2})/g,function(_,hex){return String.fromCharCode(parseInt(hex,16))})
return textdecode(charset,text)}try{text=atob(text)}catch(e){}return textdecode(charset,text)})}var needsEncodingFixup=!0,tmp=toParamRegExp("filename\\*","i").exec(contentDisposition)
if(tmp){tmp=tmp[1]
var filename=rfc2616unquote(tmp)
filename=unescape(filename)
filename=rfc5987decode(filename)
filename=rfc2047decode(filename)
return fixupEncoding(filename)}tmp=rfc2231getparam(contentDisposition)
if(tmp){var _filename=rfc2047decode(tmp)
return fixupEncoding(_filename)}tmp=toParamRegExp("filename","i").exec(contentDisposition)
if(tmp){tmp=tmp[1]
var _filename2=rfc2616unquote(tmp)
_filename2=rfc2047decode(_filename2)
return fixupEncoding(_filename2)}return""}Object.defineProperty(exports,"__esModule",{value:!0})
exports.getFilenameFromContentDispositionHeader=getFilenameFromContentDispositionHeader},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error)
return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments
return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args)
_next(void 0)})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i]
descriptor.enumerable=descriptor.enumerable||!1
descriptor.configurable=!0
"value"in descriptor&&(descriptor.writable=!0)
Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps)
staticProps&&_defineProperties(Constructor,staticProps)
return Constructor}function createFetchOptions(headers,withCredentials,abortController){return{method:"GET",headers:headers,signal:abortController&&abortController.signal,mode:"cors",credentials:withCredentials?"include":"same-origin",redirect:"follow"}}Object.defineProperty(exports,"__esModule",{value:!0})
exports.PDFFetchStream=void 0
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(147)),_util=__w_pdfjs_require__(1),_network_utils=__w_pdfjs_require__(166),PDFFetchStream=function(){function PDFFetchStream(source){_classCallCheck(this,PDFFetchStream)
this.source=source
this.isHttp=/^https?:/i.test(source.url)
this.httpHeaders=this.isHttp&&source.httpHeaders||{}
this._fullRequestReader=null
this._rangeRequestReaders=[]}_createClass(PDFFetchStream,[{key:"getFullReader",value:function(){(0,_util.assert)(!this._fullRequestReader)
this._fullRequestReader=new PDFFetchStreamReader(this)
return this._fullRequestReader}},{key:"getRangeReader",value:function(begin,end){var reader=new PDFFetchStreamRangeReader(this,begin,end)
this._rangeRequestReaders.push(reader)
return reader}},{key:"cancelAllRequests",value:function(reason){this._fullRequestReader&&this._fullRequestReader.cancel(reason)
var readers=this._rangeRequestReaders.slice(0)
readers.forEach(function(reader){reader.cancel(reason)})}}])
return PDFFetchStream}()
exports.PDFFetchStream=PDFFetchStream
var PDFFetchStreamReader=function(){function PDFFetchStreamReader(stream){var _this=this
_classCallCheck(this,PDFFetchStreamReader)
this._stream=stream
this._reader=null
this._loaded=0
this._filename=null
var source=stream.source
this._withCredentials=source.withCredentials
this._contentLength=source.length
this._headersCapability=(0,_util.createPromiseCapability)()
this._disableRange=source.disableRange||!1
this._rangeChunkSize=source.rangeChunkSize
this._rangeChunkSize||this._disableRange||(this._disableRange=!0)
"undefined"!=typeof AbortController&&(this._abortController=new AbortController)
this._isStreamingSupported=!source.disableStream
this._isRangeSupported=!source.disableRange
this._headers=new Headers
for(var property in this._stream.httpHeaders){var value=this._stream.httpHeaders[property]
"undefined"!=typeof value&&this._headers.append(property,value)}var url=source.url
fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(response){if(!(0,_network_utils.validateResponseStatus)(response.status))throw(0,_network_utils.createResponseStatusError)(response.status,url)
_this._reader=response.body.getReader()
_this._headersCapability.resolve()
var getResponseHeader=function(name){return response.headers.get(name)},_validateRangeRequest=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader:getResponseHeader,isHttp:_this._stream.isHttp,rangeChunkSize:_this._rangeChunkSize,disableRange:_this._disableRange}),allowRangeRequests=_validateRangeRequest.allowRangeRequests,suggestedLength=_validateRangeRequest.suggestedLength
_this._isRangeSupported=allowRangeRequests
_this._contentLength=suggestedLength||_this._contentLength
_this._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader)
!_this._isStreamingSupported&&_this._isRangeSupported&&_this.cancel(new _util.AbortException("streaming is disabled"))})["catch"](this._headersCapability.reject)
this.onProgress=null}_createClass(PDFFetchStreamReader,[{key:"read",value:function(){function read(){return _read.apply(this,arguments)}var _read=_asyncToGenerator(_regenerator["default"].mark(function _callee(){var _ref,value,done,buffer
return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:_context.next=2
return this._headersCapability.promise
case 2:_context.next=4
return this._reader.read()
case 4:_ref=_context.sent
value=_ref.value
done=_ref.done
if(!done){_context.next=9
break}return _context.abrupt("return",{value:value,done:done})
case 9:this._loaded+=value.byteLength
this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength})
buffer=new Uint8Array(value).buffer
return _context.abrupt("return",{value:buffer,done:!1})
case 13:case"end":return _context.stop()}},_callee,this)}))
return read}()},{key:"cancel",value:function(reason){this._reader&&this._reader.cancel(reason)
this._abortController&&this._abortController.abort()}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}])
return PDFFetchStreamReader}(),PDFFetchStreamRangeReader=function(){function PDFFetchStreamRangeReader(stream,begin,end){var _this2=this
_classCallCheck(this,PDFFetchStreamRangeReader)
this._stream=stream
this._reader=null
this._loaded=0
var source=stream.source
this._withCredentials=source.withCredentials
this._readCapability=(0,_util.createPromiseCapability)()
this._isStreamingSupported=!source.disableStream
"undefined"!=typeof AbortController&&(this._abortController=new AbortController)
this._headers=new Headers
for(var property in this._stream.httpHeaders){var value=this._stream.httpHeaders[property]
"undefined"!=typeof value&&this._headers.append(property,value)}var rangeStr=begin+"-"+(end-1)
this._headers.append("Range","bytes="+rangeStr)
var url=source.url
fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(response){if(!(0,_network_utils.validateResponseStatus)(response.status))throw(0,_network_utils.createResponseStatusError)(response.status,url)
_this2._readCapability.resolve()
_this2._reader=response.body.getReader()})
this.onProgress=null}_createClass(PDFFetchStreamRangeReader,[{key:"read",value:function(){function read(){return _read2.apply(this,arguments)}var _read2=_asyncToGenerator(_regenerator["default"].mark(function _callee2(){var _ref2,value,done,buffer
return _regenerator["default"].wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:_context2.next=2
return this._readCapability.promise
case 2:_context2.next=4
return this._reader.read()
case 4:_ref2=_context2.sent
value=_ref2.value
done=_ref2.done
if(!done){_context2.next=9
break}return _context2.abrupt("return",{value:value,done:done})
case 9:this._loaded+=value.byteLength
this.onProgress&&this.onProgress({loaded:this._loaded})
buffer=new Uint8Array(value).buffer
return _context2.abrupt("return",{value:buffer,done:!1})
case 13:case"end":return _context2.stop()}},_callee2,this)}))
return read}()},{key:"cancel",value:function(reason){this._reader&&this._reader.cancel(reason)
this._abortController&&this._abortController.abort()}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}])
return PDFFetchStreamRangeReader}()},function(module,exports,__w_pdfjs_require__){"use strict"
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error)
return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments
return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args)
_next(void 0)})}}function NetworkManager(url,args){this.url=url
args=args||{}
this.isHttp=/^https?:/i.test(url)
this.httpHeaders=this.isHttp&&args.httpHeaders||{}
this.withCredentials=args.withCredentials||!1
this.getXhr=args.getXhr||function(){return new XMLHttpRequest}
this.currXhrId=0
this.pendingRequests=Object.create(null)
this.loadedRequests=Object.create(null)}function getArrayBuffer(xhr){var data=xhr.response
if("string"!=typeof data)return data
var array=(0,_util.stringToBytes)(data)
return array.buffer}function PDFNetworkStream(source){this._source=source
this._manager=new NetworkManager(source.url,{httpHeaders:source.httpHeaders,withCredentials:source.withCredentials})
this._rangeChunkSize=source.rangeChunkSize
this._fullRequestReader=null
this._rangeRequestReaders=[]}function PDFNetworkStreamFullRequestReader(manager,source){this._manager=manager
var args={onHeadersReceived:this._onHeadersReceived.bind(this),onProgressiveData:source.disableStream?null:this._onProgressiveData.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=source.url
this._fullRequestId=manager.requestFull(args)
this._headersReceivedCapability=(0,_util.createPromiseCapability)()
this._disableRange=source.disableRange||!1
this._contentLength=source.length
this._rangeChunkSize=source.rangeChunkSize
this._rangeChunkSize||this._disableRange||(this._disableRange=!0)
this._isStreamingSupported=!1
this._isRangeSupported=!1
this._cachedChunks=[]
this._requests=[]
this._done=!1
this._storedError=void 0
this._filename=null
this.onProgress=null}function PDFNetworkStreamRangeRequestReader(manager,begin,end){this._manager=manager
var args={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)}
this._requestId=manager.requestRange(begin,end,args)
this._requests=[]
this._queuedChunk=null
this._done=!1
this.onProgress=null
this.onClosed=null}Object.defineProperty(exports,"__esModule",{value:!0})
exports.PDFNetworkStream=PDFNetworkStream
exports.NetworkManager=NetworkManager
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(147)),_util=__w_pdfjs_require__(1),_network_utils=__w_pdfjs_require__(166),_global_scope=_interopRequireDefault(__w_pdfjs_require__(3)),OK_RESPONSE=200,PARTIAL_CONTENT_RESPONSE=206,supportsMozChunked=function(){try{var x=new XMLHttpRequest
x.open("GET",_global_scope["default"].location.href)
x.responseType="moz-chunked-arraybuffer"
return"moz-chunked-arraybuffer"===x.responseType}catch(e){return!1}}()
NetworkManager.prototype={requestRange:function(begin,end,listeners){var args={begin:begin,end:end}
for(var prop in listeners)args[prop]=listeners[prop]
return this.request(args)},requestFull:function(listeners){return this.request(listeners)},request:function(args){var xhr=this.getXhr(),xhrId=this.currXhrId++,pendingRequest=this.pendingRequests[xhrId]={xhr:xhr}
xhr.open("GET",this.url)
xhr.withCredentials=this.withCredentials
for(var property in this.httpHeaders){var value=this.httpHeaders[property]
"undefined"!=typeof value&&xhr.setRequestHeader(property,value)}if(this.isHttp&&"begin"in args&&"end"in args){var rangeStr=args.begin+"-"+(args.end-1)
xhr.setRequestHeader("Range","bytes="+rangeStr)
pendingRequest.expectedStatus=206}else pendingRequest.expectedStatus=200
var useMozChunkedLoading=supportsMozChunked&&!!args.onProgressiveData
if(useMozChunkedLoading){xhr.responseType="moz-chunked-arraybuffer"
pendingRequest.onProgressiveData=args.onProgressiveData
pendingRequest.mozChunked=!0}else xhr.responseType="arraybuffer"
args.onError&&(xhr.onerror=function(evt){args.onError(xhr.status)})
xhr.onreadystatechange=this.onStateChange.bind(this,xhrId)
xhr.onprogress=this.onProgress.bind(this,xhrId)
pendingRequest.onHeadersReceived=args.onHeadersReceived
pendingRequest.onDone=args.onDone
pendingRequest.onError=args.onError
pendingRequest.onProgress=args.onProgress
xhr.send(null)
return xhrId},onProgress:function(xhrId,evt){var pendingRequest=this.pendingRequests[xhrId]
if(pendingRequest){if(pendingRequest.mozChunked){var chunk=getArrayBuffer(pendingRequest.xhr)
pendingRequest.onProgressiveData(chunk)}var onProgress=pendingRequest.onProgress
onProgress&&onProgress(evt)}},onStateChange:function(xhrId,evt){var pendingRequest=this.pendingRequests[xhrId]
if(pendingRequest){var xhr=pendingRequest.xhr
if(xhr.readyState>=2&&pendingRequest.onHeadersReceived){pendingRequest.onHeadersReceived()
delete pendingRequest.onHeadersReceived}if(4===xhr.readyState&&xhrId in this.pendingRequests){delete this.pendingRequests[xhrId]
if(0===xhr.status&&this.isHttp)pendingRequest.onError&&pendingRequest.onError(xhr.status)
else{var xhrStatus=xhr.status||OK_RESPONSE,ok_response_on_range_request=xhrStatus===OK_RESPONSE&&pendingRequest.expectedStatus===PARTIAL_CONTENT_RESPONSE
if(ok_response_on_range_request||xhrStatus===pendingRequest.expectedStatus){this.loadedRequests[xhrId]=!0
var chunk=getArrayBuffer(xhr)
if(xhrStatus===PARTIAL_CONTENT_RESPONSE){var rangeHeader=xhr.getResponseHeader("Content-Range"),matches=/bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader),begin=parseInt(matches[1],10)
pendingRequest.onDone({begin:begin,chunk:chunk})}else pendingRequest.onProgressiveData?pendingRequest.onDone(null):chunk?pendingRequest.onDone({begin:0,chunk:chunk}):pendingRequest.onError&&pendingRequest.onError(xhr.status)}else pendingRequest.onError&&pendingRequest.onError(xhr.status)}}}},hasPendingRequests:function(){for(var xhrId in this.pendingRequests)return!0
return!1},getRequestXhr:function(xhrId){return this.pendingRequests[xhrId].xhr},isStreamingRequest:function(xhrId){return!!this.pendingRequests[xhrId].onProgressiveData},isPendingRequest:function(xhrId){return xhrId in this.pendingRequests},isLoadedRequest:function(xhrId){return xhrId in this.loadedRequests},abortAllRequests:function(){for(var xhrId in this.pendingRequests)this.abortRequest(0|xhrId)},abortRequest:function(xhrId){var xhr=this.pendingRequests[xhrId].xhr
delete this.pendingRequests[xhrId]
xhr.abort()}}
PDFNetworkStream.prototype={_onRangeRequestReaderClosed:function(reader){var i=this._rangeRequestReaders.indexOf(reader)
i>=0&&this._rangeRequestReaders.splice(i,1)},getFullReader:function(){(0,_util.assert)(!this._fullRequestReader)
this._fullRequestReader=new PDFNetworkStreamFullRequestReader(this._manager,this._source)
return this._fullRequestReader},getRangeReader:function(begin,end){var reader=new PDFNetworkStreamRangeRequestReader(this._manager,begin,end)
reader.onClosed=this._onRangeRequestReaderClosed.bind(this)
this._rangeRequestReaders.push(reader)
return reader},cancelAllRequests:function(reason){this._fullRequestReader&&this._fullRequestReader.cancel(reason)
var readers=this._rangeRequestReaders.slice(0)
readers.forEach(function(reader){reader.cancel(reason)})}}
PDFNetworkStreamFullRequestReader.prototype={_onHeadersReceived:function(){var fullRequestXhrId=this._fullRequestId,fullRequestXhr=this._manager.getRequestXhr(fullRequestXhrId),getResponseHeader=function(name){return fullRequestXhr.getResponseHeader(name)},_validateRangeRequest=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader:getResponseHeader,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),allowRangeRequests=_validateRangeRequest.allowRangeRequests,suggestedLength=_validateRangeRequest.suggestedLength
allowRangeRequests&&(this._isRangeSupported=!0)
this._contentLength=suggestedLength||this._contentLength
this._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader)
var networkManager=this._manager
networkManager.isStreamingRequest(fullRequestXhrId)?this._isStreamingSupported=!0:this._isRangeSupported&&networkManager.abortRequest(fullRequestXhrId)
this._headersReceivedCapability.resolve()},_onProgressiveData:function(chunk){if(this._requests.length>0){var requestCapability=this._requests.shift()
requestCapability.resolve({value:chunk,done:!1})}else this._cachedChunks.push(chunk)},_onDone:function(args){args&&this._onProgressiveData(args.chunk)
this._done=!0
if(!(this._cachedChunks.length>0)){this._requests.forEach(function(requestCapability){requestCapability.resolve({value:void 0,done:!0})})
this._requests=[]}},_onError:function(status){var url=this._url,exception=(0,_network_utils.createResponseStatusError)(status,url)
this._storedError=exception
this._headersReceivedCapability.reject(exception)
this._requests.forEach(function(requestCapability){requestCapability.reject(exception)})
this._requests=[]
this._cachedChunks=[]},_onProgress:function(data){this.onProgress&&this.onProgress({loaded:data.loaded,total:data.lengthComputable?data.total:this._contentLength})},get filename(){return this._filename},get isRangeSupported(){return this._isRangeSupported},get isStreamingSupported(){return this._isStreamingSupported},get contentLength(){return this._contentLength},get headersReady(){return this._headersReceivedCapability.promise},read:function(){function read(){return _read.apply(this,arguments)}var _read=_asyncToGenerator(_regenerator["default"].mark(function _callee(){var chunk,requestCapability
return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!this._storedError){_context.next=2
break}throw this._storedError
case 2:if(!(this._cachedChunks.length>0)){_context.next=5
break}chunk=this._cachedChunks.shift()
return _context.abrupt("return",{value:chunk,done:!1})
case 5:if(!this._done){_context.next=7
break}return _context.abrupt("return",{value:void 0,done:!0})
case 7:requestCapability=(0,_util.createPromiseCapability)()
this._requests.push(requestCapability)
return _context.abrupt("return",requestCapability.promise)
case 10:case"end":return _context.stop()}},_callee,this)}))
return read}(),cancel:function(reason){this._done=!0
this._headersReceivedCapability.reject(reason)
this._requests.forEach(function(requestCapability){requestCapability.resolve({value:void 0,done:!0})})
this._requests=[]
this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId)
this._fullRequestReader=null}}
PDFNetworkStreamRangeRequestReader.prototype={_close:function(){this.onClosed&&this.onClosed(this)},_onDone:function(data){var chunk=data.chunk
if(this._requests.length>0){var requestCapability=this._requests.shift()
requestCapability.resolve({value:chunk,done:!1})}else this._queuedChunk=chunk
this._done=!0
this._requests.forEach(function(requestCapability){requestCapability.resolve({value:void 0,done:!0})})
this._requests=[]
this._close()},_onProgress:function(evt){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:evt.loaded})},get isStreamingSupported(){return!1},read:function(){function read(){return _read2.apply(this,arguments)}var _read2=_asyncToGenerator(_regenerator["default"].mark(function _callee2(){var chunk,requestCapability
return _regenerator["default"].wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(null===this._queuedChunk){_context2.next=4
break}chunk=this._queuedChunk
this._queuedChunk=null
return _context2.abrupt("return",{value:chunk,done:!1})
case 4:if(!this._done){_context2.next=6
break}return _context2.abrupt("return",{value:void 0,done:!0})
case 6:requestCapability=(0,_util.createPromiseCapability)()
this._requests.push(requestCapability)
return _context2.abrupt("return",requestCapability.promise)
case 9:case"end":return _context2.stop()}},_callee2,this)}))
return read}(),cancel:function(reason){this._done=!0
this._requests.forEach(function(requestCapability){requestCapability.resolve({value:void 0,done:!0})})
this._requests=[]
this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId)
this._close()}}}])})
