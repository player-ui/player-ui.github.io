(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6309],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(o,".").concat(g)]||m[g]||p[g]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42243:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/common-expressions",function(){return n(60561)}])},43857:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(52322),a=n(2784),s=n(97729),i=n(64033),l=n(30876),o=n(21925),c=n(76808),u=n(55165),p=n(63637),m=n.n(p);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var b=["id"],f=["id"],k="chakra-skip-nav",h={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},j=(0,c.Gp)((function(e,t){var n=(0,c.mq)("SkipLink",e),r=(0,c.Lr)(e),s=r.id,i=void 0===s?k:s,l=d(r,b),o=m()({},h,n);return a.createElement(c.m$.a,g({},l,{ref:t,href:"#"+i,__css:o}))}));u.Ts&&(j.displayName="SkipNavLink");var O=(0,c.Gp)((function(e,t){var n=e.id,r=void 0===n?k:n,s=d(e,f);return a.createElement(c.m$.div,g({ref:t,id:r,tabIndex:-1,style:{outline:0}},s))}));u.Ts&&(O.displayName="SkipNavContent");var x=n(46977),y=n(96882),v=function(e){var t;return(0,r.jsxs)(i.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(i.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(t=e.tableOfContents)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},N=function(e){var t=a.useContext(x.Il).bannerExpanded,n="72px",s="calc(100vh - 88px - ".concat(t?n:"0px",")"),l="calc(100vh - 88px - 105px - ".concat(t?n:"0px",")");return(0,r.jsxs)(i.xu,{minH:"100vh",children:[(0,r.jsx)(j,{children:"Skip to Main Content"}),(0,r.jsxs)(i.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(y._g,{}),(0,r.jsx)(i.iz,{}),(0,r.jsx)(i.kC,{children:(0,r.jsx)(i.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(i.xu,{display:{md:"flex"},children:[(0,r.jsx)(i.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:s,pr:"8",ml:"4",children:(0,r.jsx)(y.Hy,{})}),(0,r.jsxs)(i.xu,{flex:"1",minW:"0",overflow:"auto",maxH:s,children:[(0,r.jsxs)(i.xu,{minH:l,children:[(0,r.jsx)(O,{}),e.children]}),(0,r.jsx)(i.xu,{pt:"20",children:(0,r.jsx)(y.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(v,{tableOfContents:e.tableOfContents})]})})})]})]})};function w(e){return function(t){return(0,r.jsxs)(N,{children:[(0,r.jsx)(s.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(i.kC,{alignItems:"center",children:(0,r.jsx)(i.W2,{maxW:"container.lg",children:(0,r.jsx)(l.Zo,{components:o.tl,children:t.children})})})]})}}},60561:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});n(2784);var r=n(30876),a=n(43857);function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={},l=(0,a.Z)({title:"Common Expressions",platform:"react,core,ios",tableOfContents:[{text:"Common Expressions Plugin",id:"common-expressions-plugin",level:1},{text:"General",id:"general",level:2},{text:"size",id:"size",level:4},{text:"length",id:"length",level:4},{text:"concat",id:"concat",level:4},{text:"Strings",id:"strings",level:2},{text:"trim",id:"trim",level:4},{text:"upperCase",id:"uppercase",level:4},{text:"lowerCase",id:"lowercase",level:4},{text:"titleCase",id:"titlecase",level:4},{text:"sentenceCase",id:"sentencecase",level:4},{text:"replace",id:"replace",level:4},{text:"containsAny",id:"containsany",level:4},{text:"Math",id:"math",level:2},{text:"number",id:"number",level:4},{text:"round",id:"round",level:4},{text:"floor",id:"floor",level:4},{text:"ceil",id:"ceil",level:4},{text:"sum",id:"sum",level:4},{text:"Objects/Arrays",id:"objectsarrays",level:2},{text:"findPropertyIndex",id:"findpropertyindex",level:3},{text:"findProperty",id:"findproperty",level:3}]});function o(e){var t=e.components,n=s(e,["components"]);return(0,r.kt)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"common-expressions-plugin"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#common-expressions-plugin"}),"Common Expressions Plugin")),(0,r.kt)("p",null,"This plugin exposes some basic expressions into Player content."),(0,r.kt)("p",null,"It also serves as a good reference to adding your own custom expressions into Player."),(0,r.kt)("hr",null),(0,r.kt)("h2",Object.assign({},{id:"general"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#general"}),"General")),(0,r.kt)("h4",Object.assign({},{id:"size"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#size"}),"size")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Gets the size of a value. This is the number of keys in an object, the length of a string, or the number of items in an array.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function size(value: string | array | object): number\n")),(0,r.kt)("h4",Object.assign({},{id:"length"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#length"}),"length")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"size"))),(0,r.kt)("h4",Object.assign({},{id:"concat"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#concat"}),"concat")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Concatenates arrays together, or strings into 1 value")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function concat(...values: Array): Array\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",Object.assign({},{id:"strings"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#strings"}),"Strings")),(0,r.kt)("h4",Object.assign({},{id:"trim"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#trim"}),"trim")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Trims whitespace from the leading and trailing edges of a string")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function trim(value: string): string\n")),(0,r.kt)("h4",Object.assign({},{id:"uppercase"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#uppercase"}),"upperCase")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transforms the string to all uppercase.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function upperCase(value: string): string\n")),(0,r.kt)("h4",Object.assign({},{id:"lowercase"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#lowercase"}),"lowerCase")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transforms the string to all lowercase.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function lowerCase(value: string): string\n")),(0,r.kt)("h4",Object.assign({},{id:"titlecase"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#titlecase"}),"titleCase")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transforms the string to title case. Each word is capitalized.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function titleCase(value: string): string\n")),(0,r.kt)("h4",Object.assign({},{id:"sentencecase"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#sentencecase"}),"sentenceCase")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transforms the string to sentence case. The first word is capitalized.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function sentenceCase(value: string): string\n")),(0,r.kt)("h4",Object.assign({},{id:"replace"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#replace"}),"replace")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Replaces all instances of pattern in string with replacement. The pattern can also be a regex.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function replace(value: string, pattern: string | RegExp, replacement: string): string\n")),(0,r.kt)("h4",Object.assign({},{id:"containsany"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#containsany"}),"containsAny")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Checks if a given string contains any keywords present in the given array.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function containsAny(value: string, keywords: Array<string>): boolean\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",Object.assign({},{id:"math"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#math"}),"Math")),(0,r.kt)("h4",Object.assign({},{id:"number"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#number"}),"number")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Converts the given value to a number if possible. Will handle removing currency modifiers and comma delimitated values.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function number(value: string): number | undefined\n")),(0,r.kt)("h4",Object.assign({},{id:"round"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#round"}),"round")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rounds the given number to the nearest integer.")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function round(value: number): number\n")),(0,r.kt)("h4",Object.assign({},{id:"floor"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#floor"}),"floor")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rounds the number down the the nearest integer")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function floor(value: number): number\n")),(0,r.kt)("h4",Object.assign({},{id:"ceil"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#ceil"}),"ceil")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rounds the number up the the nearest integer")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function ceil(value: number): number\n")),(0,r.kt)("h4",Object.assign({},{id:"sum"}),(0,r.kt)("a",Object.assign({parentName:"h4"},{href:"#sum"}),"sum")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sums up all arguments")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function sum(...values: Array<number>): number\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",Object.assign({},{id:"objectsarrays"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#objectsarrays"}),"Objects/Arrays")),(0,r.kt)("h3",Object.assign({},{id:"findpropertyindex"}),(0,r.kt)("a",Object.assign({parentName:"h3"},{href:"#findpropertyindex"}),"findPropertyIndex")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Finds the index of the item in the given array (or array reference). Returns -1 for indexes that aren\u2019t found")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function findPropertyIndex(binding: Binding | Array, searchProperty: string, searchValue: any): number\n")),(0,r.kt)("h3",Object.assign({},{id:"findproperty"}),(0,r.kt)("a",Object.assign({parentName:"h3"},{href:"#findproperty"}),"findProperty")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Finds the item in the given array that matches the search criteria. Optionally return a specific property or a fallback value if not found")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function findPropertyIndex(binding: Binding | Array, searchProperty: string, searchValue: any, fallBackProperty?: string, fallBackValue?: T): T\n")))}o.isMDXComponent=!0}},function(e){e.O(0,[6525,204,3795,9774,2888,179],(function(){return t=42243,e(e.s=t);var t}));var t=e.O();_N_E=t}]);