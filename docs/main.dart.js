{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.ch(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.b4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.b4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.b4(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={b_:function b_(){},aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},ay:function ay(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function(a){var u,t=H.l(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
c4:function(a){return v.types[H.E(a)]},
ca:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.n(a).$iX},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aa(a)
if(typeof u!=="string")throw H.e(H.bs(a))
return u},
R:function(a){return H.bT(a)+H.b3(H.D(a),0,null)},
bT:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.n(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.n||!!l.$ia0){r=C.c(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.e.H(t,0)===36){if(1>n)H.a9(P.b0(1,m))
if(n>n)H.a9(P.b0(n,m))
t=t.substring(1,n)}return H.L(t)},
c5:function(a){throw H.e(H.bs(a))},
o:function(a,b){if(a==null)J.aW(a)
throw H.e(H.b5(a,b))},
b5:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.F(!0,b,s,null)
u=J.aW(a)
if(!(b<0)){if(typeof u!=="number")return H.c5(u)
t=b>=u}else t=!0
if(t)return P.ap(b,a,s,null,u)
return P.b0(b,s)},
bs:function(a){return new P.F(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.az()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.bE})
u.name=""}else u.toString=H.bE
return u},
bE:function(){return J.aa(this.dartException)},
a9:function(a){throw H.e(a)},
cg:function(a){throw H.e(P.bh(a))},
bN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.aD().constructor.prototype):Object.create(new H.T(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.r
if(typeof t!=="number")return t.q()
$.r=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.bg(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.c4,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.bf:H.aX
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.e("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.bg(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
bK:function(a,b,c,d){var u=H.aX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
bg:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.bM(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.bK(t,!r,u,b)
if(t===0){r=$.r
if(typeof r!=="number")return r.q()
$.r=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.N
return new Function(r+H.c(q==null?$.N=H.ae("self"):q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.r
if(typeof r!=="number")return r.q()
$.r=r+1
o+=r
r="return function("+o+"){return this."
q=$.N
return new Function(r+H.c(q==null?$.N=H.ae("self"):q)+"."+H.c(u)+"("+o+");}")()},
bL:function(a,b,c,d){var u=H.aX,t=H.bf
switch(b?-1:a){case 0:throw H.e(H.bV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
bM:function(a,b){var u,t,s,r,q,p,o,n=$.N
if(n==null)n=$.N=H.ae("self")
u=$.be
if(u==null)u=$.be=H.ae("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.bL(s,!q,t,b)
if(s===1){n="return function(){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+");"
u=$.r
if(typeof u!=="number")return u.q()
$.r=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+", "+o+");"
u=$.r
if(typeof u!=="number")return u.q()
$.r=u+1
return new Function(n+u+"}")()},
b4:function(a,b,c,d,e,f,g){return H.bN(a,b,H.E(c),d,!!e,!!f,g)},
aX:function(a){return a.a},
bf:function(a){return a.c},
ae:function(a){var u,t,s,r=new H.T("self","target","receiver","name"),q=J.aY(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
bZ:function(a){if(a==null)H.bY("boolean expression must not be null")
return a},
l:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.v(a,"String"))},
co:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.v(a,"num"))},
ck:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.v(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.v(a,"int"))},
bC:function(a,b){throw H.e(H.v(a,H.L(H.l(b).substring(2))))},
cf:function(a,b){throw H.e(H.bJ(a,H.L(H.l(b).substring(2))))},
b8:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.n(a)[b])return a
H.bC(a,b)},
c9:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else u=!0
if(u)return a
H.cf(a,b)},
b9:function(a){if(a==null)return a
if(!!J.n(a).$if)return a
throw H.e(H.v(a,"List<dynamic>"))},
cb:function(a,b){var u
if(a==null)return a
u=J.n(a)
if(!!u.$if)return a
if(u[b])return a
H.bC(a,b)},
bu:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.E(u)]
else return a.$S()}return},
bw:function(a,b){var u
if(typeof a=="function")return!0
u=H.bu(J.n(a))
if(u==null)return!1
return H.bn(u,null,b,null)},
bv:function(a,b){var u,t
if(a==null)return a
if($.b2)return a
$.b2=!0
try{if(H.bw(a,b))return a
u=H.bb(b)
t=H.v(a,u)
throw H.e(t)}finally{$.b2=!1}},
v:function(a,b){return new H.aF("TypeError: "+P.U(a)+": type '"+H.bp(a)+"' is not a subtype of type '"+b+"'")},
bJ:function(a,b){return new H.af("CastError: "+P.U(a)+": type '"+H.bp(a)+"' is not a subtype of type '"+b+"'")},
bp:function(a){var u,t=J.n(a)
if(!!t.$iO){u=H.bu(t)
if(u!=null)return H.bb(u)
return"Closure"}return H.R(a)},
bY:function(a){throw H.e(new H.aK(a))},
ch:function(a){throw H.e(new P.ah(H.l(a)))},
bV:function(a){return new H.aB(a)},
bx:function(a){return v.getIsolateTag(a)},
a8:function(a,b){a.$ti=b
return a},
D:function(a){if(a==null)return
return a.$ti},
cn:function(a,b,c){return H.K(a["$a"+H.c(c)],H.D(b))},
aQ:function(a,b,c,d){var u
H.l(c)
H.E(d)
u=H.K(a["$a"+H.c(c)],H.D(b))
return u==null?null:u[d]},
c3:function(a,b,c){var u
H.l(b)
H.E(c)
u=H.K(a["$a"+H.c(b)],H.D(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.E(b)
u=H.D(a)
return u==null?null:u[b]},
bb:function(a){return H.B(a,null)},
B:function(a,b){var u,t
H.a6(b,"$if",[P.p],"$af")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.L(a[0].name)+H.b3(a,1,b)
if(typeof a=="function")return H.L(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.o(b,t)
return H.c(b[t])}if('func' in a)return H.bW(a,b)
if('futureOr' in a)return"FutureOr<"+H.B("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
bW:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.p]
H.a6(a0,"$if",b,"$af")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.a8([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.l(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.o(a0,n)
p=C.e.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.k)p+=" extends "+H.B(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.B(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.B(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.B(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.c0(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.l(b[h])
j=j+i+H.B(e[d],a0)+(" "+H.c(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
b3:function(a,b,c){var u,t,s,r,q,p
H.a6(c,"$if",[P.p],"$af")
if(a==null)return""
u=new P.a_("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.B(p,c)}return"<"+u.h(0)+">"},
K:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c_:function(a,b,c,d){var u,t
H.l(b)
H.b9(c)
H.l(d)
if(a==null)return!1
u=H.D(a)
t=J.n(a)
if(t[b]==null)return!1
return H.br(H.K(t[d],u),null,c,null)},
a6:function(a,b,c,d){H.l(b)
H.b9(c)
H.l(d)
if(a==null)return a
if(H.c_(a,b,c,d))return a
throw H.e(H.v(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.L(b.substring(2))+H.b3(c,0,null),v.mangledGlobalNames)))},
br:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.q(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.q(a[t],b,c[t],d))return!1
return!0},
cl:function(a,b,c){return a.apply(b,H.K(J.n(b)["$a"+H.c(c)],H.D(b)))},
bz:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="k"||a.name==="H"||a===-1||a===-2||H.bz(u)}return!1},
bt:function(a,b){var u,t
if(a==null)return b==null||b.name==="k"||b.name==="H"||b===-1||b===-2||H.bz(b)
if(b==null||b===-1||b.name==="k"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bw(a,b)}u=J.n(a).constructor
t=H.D(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.q(u,null,b,null)},
J:function(a,b){if(a!=null&&!H.bt(a,b))throw H.e(H.v(a,H.bb(b)))
return a},
q:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="k"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="k"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.q(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="H")return!0
if('func' in c)return H.bn(a,b,c,d)
if('func' in a)return c.name==="bi"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.q("type" in a?a.type:l,b,s,d)
else if(H.q(a,b,s,d))return!0
else{if(!('$i'+"bP" in t.prototype))return!1
r=t.prototype["$a"+"bP"]
q=H.K(r,u?a.slice(1):l)
return H.q(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.br(H.K(m,u),b,p,d)},
bn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.q(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.q(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.q(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.q(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ce(h,b,g,d)},
ce:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.q(c[s],d,a[s],b))return!1}return!0},
cm:function(a,b,c){Object.defineProperty(a,H.l(b),{value:c,enumerable:false,writable:true,configurable:true})},
cc:function(a){var u,t,s,r,q=H.l($.by.$1(a)),p=$.aN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.aU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.l($.bq.$2(a,q))
if(q!=null){p=$.aN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.aU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.aV(u)
$.aN[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.aU[q]=u
return u}if(s==="-"){r=H.aV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.bB(a,u)
if(s==="*")throw H.e(P.bm(q))
if(v.leafTags[q]===true){r=H.aV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.bB(a,u)},
bB:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ba(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
aV:function(a){return J.ba(a,!1,null,!!a.$iX)},
cd:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.aV(u)
else return J.ba(u,c,null,null)},
c7:function(){if(!0===$.b7)return
$.b7=!0
H.c8()},
c8:function(){var u,t,s,r,q,p,o,n
$.aN=Object.create(null)
$.aU=Object.create(null)
H.c6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.bD.$1(q)
if(p!=null){o=H.cd(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
c6:function(){var u,t,s,r,q,p,o=C.h()
o=H.I(C.i,H.I(C.j,H.I(C.d,H.I(C.d,H.I(C.k,H.I(C.l,H.I(C.m(C.c),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.by=new H.aR(r)
$.bq=new H.aS(q)
$.bD=new H.aT(p)},
I:function(a,b){return a(b)||b},
O:function O(){},
aE:function aE(){},
aD:function aD(){},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a){this.a=a},
af:function af(a){this.a=a},
aB:function aB(a){this.a=a},
aK:function aK(a){this.a=a},
aR:function aR(a){this.a=a},
aS:function aS(a){this.a=a},
aT:function aT(a){this.a=a},
c0:function(a){return J.bR(a?Object.keys(a):[],null)}},J={
ba:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.b7==null){H.c7()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.bm("Return interceptor for "+H.c(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bc()]
if(r!=null)return r
r=H.cc(a)
if(r!=null)return r
if(typeof a=="function")return C.o
u=Object.getPrototypeOf(a)
if(u==null)return C.f
if(u===Object.prototype)return C.f
if(typeof s=="function"){Object.defineProperty(s,$.bc(),{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
bR:function(a,b){return J.aY(H.a8(a,[b]))},
aY:function(a){H.b9(a)
a.fixed$length=Array
return a},
n:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.as.prototype
return J.ar.prototype}if(typeof a=="string")return J.P.prototype
if(a==null)return J.at.prototype
if(typeof a=="boolean")return J.aq.prototype
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.k)return a
return J.aP(a)},
b6:function(a){if(typeof a=="string")return J.P.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.k)return a
return J.aP(a)},
c1:function(a){if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.k)return a
return J.aP(a)},
c2:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.k)return a
return J.aP(a)},
bG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ca(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b6(a).n(a,b)},
bH:function(a){return J.c2(a).gC(a)},
bd:function(a){return J.c1(a).gm(a)},
aW:function(a){return J.b6(a).gi(a)},
aa:function(a){return J.n(a).h(a)},
i:function i(){},
aq:function aq(){},
at:function at(){},
Y:function Y(){},
aA:function aA(){},
a0:function a0(){},
A:function A(){},
z:function z(a){this.$ti=a},
aZ:function aZ(a){this.$ti=a},
M:function M(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
as:function as(){},
ar:function ar(){},
P:function P(){}},P={
bQ:function(a,b,c){var u,t
if(P.bo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.a8([],[P.p])
C.a.l($.t,a)
try{P.bX(a,u)}finally{if(0>=$.t.length)return H.o($.t,-1)
$.t.pop()}t=P.bl(b,H.cb(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
bj:function(a,b,c){var u,t
if(P.bo(a))return b+"..."+c
u=new P.a_(b)
C.a.l($.t,a)
try{t=u
t.a=P.bl(t.a,a,", ")}finally{if(0>=$.t.length)return H.o($.t,-1)
$.t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
bo:function(a){var u,t
for(u=$.t.length,t=0;t<u;++t)if(a===$.t[t])return!0
return!1},
bX:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.a6(b,"$if",[P.p],"$af")
u=a.gm(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.k())return
r=H.c(u.gj())
C.a.l(b,r)
t+=r.length+2;++s}if(!u.k()){if(s<=5)return
if(0>=b.length)return H.o(b,-1)
q=b.pop()
if(0>=b.length)return H.o(b,-1)
p=b.pop()}else{o=u.gj();++s
if(!u.k()){if(s<=4){C.a.l(b,H.c(o))
return}q=H.c(o)
if(0>=b.length)return H.o(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gj();++s
for(;u.k();o=n,n=m){m=u.gj();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.o(b,-1)
t-=b.pop().length+2;--s}C.a.l(b,"...")
return}}p=H.c(o)
q=H.c(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.l(b,l)
C.a.l(b,p)
C.a.l(b,q)},
av:function av(){},
m:function m(){},
a3:function a3(){},
bO:function(a){if(a instanceof H.O)return a.h(0)
return"Instance of '"+H.R(a)+"'"},
bS:function(a,b,c){var u,t=[c],s=H.a8([],t)
for(u=a.gm(a);u.k();)C.a.l(s,H.J(u.gj(),c))
if(b)return s
return H.a6(J.aY(s),"$if",t,"$af")},
bl:function(a,b,c){var u=J.bd(b)
if(!u.k())return a
if(c.length===0){do a+=H.c(u.gj())
while(u.k())}else{a+=H.c(u.gj())
for(;u.k();)a=a+c+H.c(u.gj())}return a},
U:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.bO(a)},
bI:function(a,b,c){return new P.F(!0,a,b,c)},
b0:function(a,b){return new P.Z(null,null,!0,a,b,"Value not in range")},
bk:function(a,b,c,d,e){return new P.Z(b,c,!0,a,d,"Invalid value")},
bU:function(a,b){if(typeof a!=="number")return a.E()
if(a<0)throw H.e(P.bk(a,0,null,b,null))},
ap:function(a,b,c,d,e){var u=e==null?J.aW(b):e
return new P.ao(u,!0,a,c,"Index out of range")},
b1:function(a){return new P.aH(a)},
bm:function(a){return new P.aG(a)},
bh:function(a){return new P.ag(a)},
C:function C(){},
aO:function aO(){},
aj:function aj(){},
ad:function ad(){},
az:function az(){},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ao:function ao(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aH:function aH(a){this.a=a},
aG:function aG(a){this.a=a},
ag:function ag(a){this.a=a},
ah:function ah(a){this.a=a},
a7:function a7(){},
j:function j(){},
y:function y(){},
f:function f(){},
H:function H(){},
S:function S(){},
k:function k(){},
p:function p(){},
a_:function a_(a){this.a=a},
ak:function ak(a){this.b=a},
al:function al(){},
am:function am(){},
b:function b(){}},W={a:function a(){},ab:function ab(){},ac:function ac(){},x:function x(){},ai:function ai(){},aM:function aM(a,b){this.a=a
this.b=b},h:function h(){},V:function V(){},an:function an(){},G:function G(){},aL:function aL(a){this.a=a},d:function d(){},Q:function Q(){},aC:function aC(){},u:function u(){},W:function W(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},a1:function a1(){},a2:function a2(){},a4:function a4(){},a5:function a5(){}},F={
bA:function(){var u=document,t=u.createElement("p")
t.textContent="This paragraph was added using Dart"
J.bH(u.querySelector("#content")).l(0,t)}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.b_.prototype={}
J.i.prototype={
h:function(a){return"Instance of '"+H.R(a)+"'"}}
J.aq.prototype={
h:function(a){return String(a)},
$iC:1}
J.at.prototype={
h:function(a){return"null"}}
J.Y.prototype={
h:function(a){return String(a)}}
J.aA.prototype={}
J.a0.prototype={}
J.A.prototype={
h:function(a){var u=a[$.bF()]
if(u==null)return this.G(a)
return"JavaScript function for "+H.c(J.aa(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibi:1}
J.z.prototype={
l:function(a,b){H.J(b,H.w(a,0))
if(!!a.fixed$length)H.a9(P.b1("add"))
a.push(b)},
h:function(a){return P.bj(a,"[","]")},
gm:function(a){return new J.M(a,a.length,[H.w(a,0)])},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.a9(P.b1("set length"))
if(b<0)throw H.e(P.bk(b,0,null,"newLength",null))
a.length=b},
D:function(a,b,c){H.J(c,H.w(a,0))
if(!!a.immutable$list)H.a9(P.b1("indexed set"))
if(b>=a.length||!1)throw H.e(H.b5(a,b))
a[b]=c},
$ij:1,
$if:1}
J.aZ.prototype={}
J.M.prototype={
gj:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.cg(s))
u=t.c
if(u>=r){t.sA(null)
return!1}t.sA(s[u]);++t.c
return!0},
sA:function(a){this.d=H.J(a,H.w(this,0))},
$iy:1}
J.au.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$iS:1}
J.as.prototype={$ia7:1}
J.ar.prototype={}
J.P.prototype={
H:function(a,b){if(b>=a.length)throw H.e(H.b5(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.e(P.bI(b,null,null))
return a+b},
h:function(a){return a},
gi:function(a){return a.length},
$ip:1}
H.aw.prototype={
gj:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=J.b6(s),q=r.gi(s)
if(t.b!==q)throw H.e(P.bh(s))
u=t.c
if(u>=q){t.st(null)
return!1}t.st(r.p(s,u));++t.c
return!0},
st:function(a){this.d=H.J(a,H.w(this,0))},
$iy:1}
H.ax.prototype={
gm:function(a){var u=this.a
return new H.ay(u.gm(u),this.b,this.$ti)},
gi:function(a){var u=this.a
return u.gi(u)},
p:function(a,b){return this.b.$1(this.a.p(0,b))},
$aj:function(a,b){return[b]}}
H.ay.prototype={
k:function(){var u=this,t=u.b
if(t.k()){u.st(u.c.$1(t.gj()))
return!0}u.st(null)
return!1},
gj:function(){return this.a},
st:function(a){this.a=H.J(a,H.w(this,1))},
$ay:function(a,b){return[b]}}
H.aI.prototype={
gm:function(a){return new H.aJ(J.bd(this.a),this.b,this.$ti)}}
H.aJ.prototype={
k:function(){var u,t
for(u=this.a,t=this.b;u.k();)if(H.bZ(t.$1(u.gj())))return!0
return!1},
gj:function(){return this.a.gj()}}
H.O.prototype={
h:function(a){return"Closure '"+H.R(this).trim()+"'"},
$ibi:1,
gJ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aE.prototype={}
H.aD.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.L(u)+"'"}}
H.T.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.R(u)+"'")}}
H.aF.prototype={
h:function(a){return this.a}}
H.af.prototype={
h:function(a){return this.a}}
H.aB.prototype={
h:function(a){return"RuntimeError: "+H.c(this.a)}}
H.aK.prototype={
h:function(a){return"Assertion failed: "+P.U(this.a)}}
H.aR.prototype={
$1:function(a){return this.a(a)},
$S:0}
H.aS.prototype={
$2:function(a,b){return this.a(a,b)}}
H.aT.prototype={
$1:function(a){return this.a(H.l(a))},
$S:1}
P.av.prototype={$ij:1,$if:1}
P.m.prototype={
gm:function(a){return new H.aw(a,this.gi(a),[H.aQ(this,a,"m",0)])},
p:function(a,b){return this.n(a,b)},
I:function(a){var u,t=this,s=H.a8([],[H.aQ(t,a,"m",0)])
C.a.si(s,t.gi(a))
for(u=0;u<t.gi(a);++u)C.a.D(s,u,t.n(a,u))
return s},
h:function(a){return P.bj(a,"[","]")}}
P.a3.prototype={}
P.C.prototype={}
P.aO.prototype={}
P.aj.prototype={}
P.ad.prototype={
h:function(a){return"Assertion failed"}}
P.az.prototype={
h:function(a){return"Throw of null."}}
P.F.prototype={
gv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gu:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gv()+o+u
if(!q.a)return t
s=q.gu()
r=P.U(q.b)
return t+s+": "+r}}
P.Z.prototype={
gv:function(){return"RangeError"},
gu:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.c(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.c(s)
else if(t>s)u=": Not in range "+H.c(s)+".."+H.c(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.c(s)}return u}}
P.ao.prototype={
gv:function(){return"RangeError"},
gu:function(){var u,t=H.E(this.b)
if(typeof t!=="number")return t.E()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.c(u)},
gi:function(a){return this.f}}
P.aH.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aG.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ag.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.U(u)+"."}}
P.ah.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.a7.prototype={}
P.j.prototype={
gi:function(a){var u,t=this.gm(this)
for(u=0;t.k();)++u
return u},
p:function(a,b){var u,t,s
P.bU(b,"index")
for(u=this.gm(this),t=0;u.k();){s=u.gj()
if(b===t)return s;++t}throw H.e(P.ap(b,this,"index",null,t))},
h:function(a){return P.bQ(this,"(",")")}}
P.y.prototype={}
P.f.prototype={$ij:1}
P.H.prototype={
h:function(a){return"null"}}
P.S.prototype={}
P.k.prototype={constructor:P.k,$ik:1,
h:function(a){return"Instance of '"+H.R(this)+"'"},
toString:function(){return this.h(this)}}
P.p.prototype={}
P.a_.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.a.prototype={}
W.ab.prototype={
h:function(a){return String(a)}}
W.ac.prototype={
h:function(a){return String(a)}}
W.x.prototype={
gi:function(a){return a.length}}
W.ai.prototype={
h:function(a){return String(a)}}
W.aM.prototype={
gi:function(a){return this.b.length},
n:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.o(u,b)
return H.b8(u[b],"$ih")},
l:function(a,b){this.a.appendChild(b)
return b},
gm:function(a){var u=this.I(this)
return new J.M(u,u.length,[H.w(u,0)])},
$am:function(){return[W.h]},
$aj:function(){return[W.h]},
$af:function(){return[W.h]}}
W.h.prototype={
gC:function(a){return new W.aM(a,a.children)},
h:function(a){return a.localName},
$ih:1}
W.V.prototype={}
W.an.prototype={
gi:function(a){return a.length}}
W.G.prototype={
gi:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ap(b,a,null,null,null))
return a[b]},
p:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$iX:1,
$aX:function(){return[W.d]},
$am:function(){return[W.d]},
$ij:1,
$aj:function(){return[W.d]},
$if:1,
$af:function(){return[W.d]},
$iG:1,
$au:function(){return[W.d]}}
W.aL.prototype={
gm:function(a){var u=this.a.childNodes
return new W.W(u,u.length,[H.aQ(C.p,u,"u",0)])},
gi:function(a){return this.a.childNodes.length},
n:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.o(u,b)
return u[b]},
$am:function(){return[W.d]},
$aj:function(){return[W.d]},
$af:function(){return[W.d]}}
W.d.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.F(a):u},
$id:1}
W.Q.prototype={
gi:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ap(b,a,null,null,null))
return a[b]},
p:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$iX:1,
$aX:function(){return[W.d]},
$am:function(){return[W.d]},
$ij:1,
$aj:function(){return[W.d]},
$if:1,
$af:function(){return[W.d]},
$au:function(){return[W.d]}}
W.aC.prototype={
gi:function(a){return a.length}}
W.u.prototype={
gm:function(a){return new W.W(a,this.gi(a),[H.aQ(this,a,"u",0)])}}
W.W.prototype={
k:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sB(J.bG(u.a,t))
u.c=t
return!0}u.sB(null)
u.c=s
return!1},
gj:function(){return this.d},
sB:function(a){this.d=H.J(a,H.w(this,0))},
$iy:1}
W.a1.prototype={}
W.a2.prototype={}
W.a4.prototype={}
W.a5.prototype={}
P.ak.prototype={
gw:function(){var u=this.b,t=H.c3(u,"m",0),s=W.h
return new H.ax(new H.aI(u,H.bv(new P.al(),{func:1,ret:P.C,args:[t]}),[t]),H.bv(new P.am(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b){this.b.a.appendChild(b)},
gi:function(a){var u=this.gw().a
return u.gi(u)},
n:function(a,b){var u=this.gw()
return u.b.$1(u.a.p(0,b))},
gm:function(a){var u=P.bS(this.gw(),!1,W.h)
return new J.M(u,u.length,[H.w(u,0)])},
$am:function(){return[W.h]},
$aj:function(){return[W.h]},
$af:function(){return[W.h]}}
P.al.prototype={
$1:function(a){return!!J.n(H.b8(a,"$id")).$ih},
$S:2}
P.am.prototype={
$1:function(a){return H.c9(H.b8(a,"$id"),"$ih")},
$S:3}
P.b.prototype={
gC:function(a){return new P.ak(new W.aL(a))}};(function aliases(){var u=J.i.prototype
u.F=u.h
u=J.Y.prototype
u.G=u.h})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.k,null)
s(P.k,[H.b_,J.i,J.M,H.aw,P.j,P.y,H.O,P.aj,P.a3,P.m,P.C,P.S,P.f,P.H,P.p,P.a_,W.u,W.W])
s(J.i,[J.aq,J.at,J.Y,J.z,J.au,J.P,W.V,W.ai,W.a1,W.a4])
s(J.Y,[J.aA,J.a0,J.A])
t(J.aZ,J.z)
s(J.au,[J.as,J.ar])
s(P.j,[H.ax,H.aI])
s(P.y,[H.ay,H.aJ])
s(H.O,[H.aE,H.aR,H.aS,H.aT,P.al,P.am])
s(H.aE,[H.aD,H.T])
s(P.aj,[H.aF,H.af,H.aB,P.ad,P.az,P.F,P.aH,P.aG,P.ag,P.ah])
t(H.aK,P.ad)
t(P.av,P.a3)
s(P.S,[P.aO,P.a7])
s(P.F,[P.Z,P.ao])
t(W.d,W.V)
s(W.d,[W.h,W.x])
s(W.h,[W.a,P.b])
s(W.a,[W.ab,W.ac,W.an,W.aC])
s(P.av,[W.aM,W.aL,P.ak])
t(W.a2,W.a1)
t(W.G,W.a2)
t(W.a5,W.a4)
t(W.Q,W.a5)
u(P.a3,P.m)
u(W.a1,P.m)
u(W.a2,W.u)
u(W.a4,P.m)
u(W.a5,W.u)})();(function constants(){C.n=J.i.prototype
C.a=J.z.prototype
C.e=J.P.prototype
C.o=J.A.prototype
C.p=W.Q.prototype
C.f=J.aA.prototype
C.b=J.a0.prototype
C.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.h=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.m=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.i=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.j=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.k=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.d=function(hooks) { return hooks; }
})()
var v={mangledGlobalNames:{a7:"int",aO:"double",S:"num",p:"String",C:"bool",H:"Null",f:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,args:[,]},{func:1,args:[P.p]},{func:1,ret:P.C,args:[W.d]},{func:1,ret:W.h,args:[W.d]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.r=0
$.N=null
$.be=null
$.b2=!1
$.by=null
$.bq=null
$.bD=null
$.aN=null
$.aU=null
$.b7=null
$.t=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ci","bF",function(){return H.bx("_$dart_dartClosure")})
u($,"cj","bc",function(){return H.bx("_$dart_js")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.i,DOMError:J.i,ErrorEvent:J.i,Event:J.i,InputEvent:J.i,MediaError:J.i,NavigatorUserMediaError:J.i,OverconstrainedError:J.i,PositionError:J.i,SensorErrorEvent:J.i,SpeechRecognitionError:J.i,SQLError:J.i,HTMLAudioElement:W.a,HTMLBRElement:W.a,HTMLBaseElement:W.a,HTMLBodyElement:W.a,HTMLButtonElement:W.a,HTMLCanvasElement:W.a,HTMLContentElement:W.a,HTMLDListElement:W.a,HTMLDataElement:W.a,HTMLDataListElement:W.a,HTMLDetailsElement:W.a,HTMLDialogElement:W.a,HTMLDivElement:W.a,HTMLEmbedElement:W.a,HTMLFieldSetElement:W.a,HTMLHRElement:W.a,HTMLHeadElement:W.a,HTMLHeadingElement:W.a,HTMLHtmlElement:W.a,HTMLIFrameElement:W.a,HTMLImageElement:W.a,HTMLInputElement:W.a,HTMLLIElement:W.a,HTMLLabelElement:W.a,HTMLLegendElement:W.a,HTMLLinkElement:W.a,HTMLMapElement:W.a,HTMLMediaElement:W.a,HTMLMenuElement:W.a,HTMLMetaElement:W.a,HTMLMeterElement:W.a,HTMLModElement:W.a,HTMLOListElement:W.a,HTMLObjectElement:W.a,HTMLOptGroupElement:W.a,HTMLOptionElement:W.a,HTMLOutputElement:W.a,HTMLParagraphElement:W.a,HTMLParamElement:W.a,HTMLPictureElement:W.a,HTMLPreElement:W.a,HTMLProgressElement:W.a,HTMLQuoteElement:W.a,HTMLScriptElement:W.a,HTMLShadowElement:W.a,HTMLSlotElement:W.a,HTMLSourceElement:W.a,HTMLSpanElement:W.a,HTMLStyleElement:W.a,HTMLTableCaptionElement:W.a,HTMLTableCellElement:W.a,HTMLTableDataCellElement:W.a,HTMLTableHeaderCellElement:W.a,HTMLTableColElement:W.a,HTMLTableElement:W.a,HTMLTableRowElement:W.a,HTMLTableSectionElement:W.a,HTMLTemplateElement:W.a,HTMLTextAreaElement:W.a,HTMLTimeElement:W.a,HTMLTitleElement:W.a,HTMLTrackElement:W.a,HTMLUListElement:W.a,HTMLUnknownElement:W.a,HTMLVideoElement:W.a,HTMLDirectoryElement:W.a,HTMLFontElement:W.a,HTMLFrameElement:W.a,HTMLFrameSetElement:W.a,HTMLMarqueeElement:W.a,HTMLElement:W.a,HTMLAnchorElement:W.ab,HTMLAreaElement:W.ac,CDATASection:W.x,CharacterData:W.x,Comment:W.x,ProcessingInstruction:W.x,Text:W.x,DOMException:W.ai,Element:W.h,EventTarget:W.V,HTMLFormElement:W.an,HTMLCollection:W.G,HTMLFormControlsCollection:W.G,HTMLOptionsCollection:W.G,Document:W.d,DocumentFragment:W.d,HTMLDocument:W.d,ShadowRoot:W.d,XMLDocument:W.d,Attr:W.d,DocumentType:W.d,Node:W.d,NodeList:W.Q,RadioNodeList:W.Q,HTMLSelectElement:W.aC,SVGAElement:P.b,SVGAnimateElement:P.b,SVGAnimateMotionElement:P.b,SVGAnimateTransformElement:P.b,SVGAnimationElement:P.b,SVGCircleElement:P.b,SVGClipPathElement:P.b,SVGDefsElement:P.b,SVGDescElement:P.b,SVGDiscardElement:P.b,SVGEllipseElement:P.b,SVGFEBlendElement:P.b,SVGFEColorMatrixElement:P.b,SVGFEComponentTransferElement:P.b,SVGFECompositeElement:P.b,SVGFEConvolveMatrixElement:P.b,SVGFEDiffuseLightingElement:P.b,SVGFEDisplacementMapElement:P.b,SVGFEDistantLightElement:P.b,SVGFEFloodElement:P.b,SVGFEFuncAElement:P.b,SVGFEFuncBElement:P.b,SVGFEFuncGElement:P.b,SVGFEFuncRElement:P.b,SVGFEGaussianBlurElement:P.b,SVGFEImageElement:P.b,SVGFEMergeElement:P.b,SVGFEMergeNodeElement:P.b,SVGFEMorphologyElement:P.b,SVGFEOffsetElement:P.b,SVGFEPointLightElement:P.b,SVGFESpecularLightingElement:P.b,SVGFESpotLightElement:P.b,SVGFETileElement:P.b,SVGFETurbulenceElement:P.b,SVGFilterElement:P.b,SVGForeignObjectElement:P.b,SVGGElement:P.b,SVGGeometryElement:P.b,SVGGraphicsElement:P.b,SVGImageElement:P.b,SVGLineElement:P.b,SVGLinearGradientElement:P.b,SVGMarkerElement:P.b,SVGMaskElement:P.b,SVGMetadataElement:P.b,SVGPathElement:P.b,SVGPatternElement:P.b,SVGPolygonElement:P.b,SVGPolylineElement:P.b,SVGRadialGradientElement:P.b,SVGRectElement:P.b,SVGScriptElement:P.b,SVGSetElement:P.b,SVGStopElement:P.b,SVGStyleElement:P.b,SVGElement:P.b,SVGSVGElement:P.b,SVGSwitchElement:P.b,SVGSymbolElement:P.b,SVGTSpanElement:P.b,SVGTextContentElement:P.b,SVGTextElement:P.b,SVGTextPathElement:P.b,SVGTextPositioningElement:P.b,SVGTitleElement:P.b,SVGUseElement:P.b,SVGViewElement:P.b,SVGGradientElement:P.b,SVGComponentTransferFunctionElement:P.b,SVGFEDropShadowElement:P.b,SVGMPathElement:P.b})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,Element:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.bA,[])
else F.bA([])})})()
//# sourceMappingURL=main.dart.js.map
