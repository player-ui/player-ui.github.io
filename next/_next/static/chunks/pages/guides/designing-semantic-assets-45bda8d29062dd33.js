(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6512],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"===typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63595:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/designing-semantic-assets",function(){return n(59530)}])},43857:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(52322),i=n(2784),a=n(97729),s=n(64033),o=n(30876),l=n(21925),c=n(76808),p=n(55165),u=n(63637),d=n.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var m=["id"],g=["id"],b="chakra-skip-nav",y={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},x=(0,c.Gp)((function(e,t){var n=(0,c.mq)("SkipLink",e),r=(0,c.Lr)(e),a=r.id,s=void 0===a?b:a,o=h(r,m),l=d()({},y,n);return i.createElement(c.m$.a,f({},o,{ref:t,href:"#"+s,__css:l}))}));p.Ts&&(x.displayName="SkipNavLink");var v=(0,c.Gp)((function(e,t){var n=e.id,r=void 0===n?b:n,a=h(e,g);return i.createElement(c.m$.div,f({ref:t,id:r,tabIndex:-1,style:{outline:0}},a))}));p.Ts&&(v.displayName="SkipNavContent");var j=n(46977),O=n(96882),k=function(e){var t;return(0,r.jsxs)(s.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(s.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(t=e.tableOfContents)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},w=function(e){var t=i.useContext(j.Il).bannerExpanded,n="72px",a="calc(100vh - 88px - ".concat(t?n:"0px",")"),o="calc(100vh - 88px - 105px - ".concat(t?n:"0px",")");return(0,r.jsxs)(s.xu,{minH:"100vh",children:[(0,r.jsx)(x,{children:"Skip to Main Content"}),(0,r.jsxs)(s.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(O._g,{}),(0,r.jsx)(s.iz,{}),(0,r.jsx)(s.kC,{children:(0,r.jsx)(s.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(s.xu,{display:{md:"flex"},children:[(0,r.jsx)(s.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:a,pr:"8",ml:"4",children:(0,r.jsx)(O.Hy,{})}),(0,r.jsxs)(s.xu,{flex:"1",minW:"0",overflow:"auto",maxH:a,children:[(0,r.jsxs)(s.xu,{minH:o,children:[(0,r.jsx)(v,{}),e.children]}),(0,r.jsx)(s.xu,{pt:"20",children:(0,r.jsx)(O.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(k,{tableOfContents:e.tableOfContents})]})})})]})]})};function N(e){return function(t){return(0,r.jsxs)(w,{children:[(0,r.jsx)(a.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(s.kC,{alignItems:"center",children:(0,r.jsx)(s.W2,{maxW:"container.lg",children:(0,r.jsx)(o.Zo,{components:l.tl,children:t.children})})})]})}}},59530:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});n(2784);var r=n(30876),i=n(43857);function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s={},o=(0,i.Z)({title:"Designing Semantic Assets",tableOfContents:[{text:"Designing Semantic Assets",id:"designing-semantic-assets",level:1},{text:"Intent Based Schema",id:"intent-based-schema",level:2}]});function l(e){var t=e.components,n=a(e,["components"]);return(0,r.kt)(o,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"designing-semantic-assets"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#designing-semantic-assets"}),"Designing Semantic Assets")),(0,r.kt)("p",null,"While not a ",(0,r.kt)("em",{parentName:"p"},"hard")," requirment by Player, the API design for assets plays an important role in it\u2019s adoption, especially if the intent is to re-use content across platforms. In many cases, Player content is written, and edited many more times than assets are created, and thus it\u2019s schema plays an important role in it\u2019s effective adoption. "),(0,r.kt)("p",null,"Player ships with a set of ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"assets/reference"}),"Reference Assets")," to get started, but intentionally doesn\u2019t include anything beyond some basics. We believe it\u2019s up to each consumer to define their own semantics (if at all), that best suites their applications.  "),(0,r.kt)("h2",Object.assign({},{id:"intent-based-schema"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#intent-based-schema"}),"Intent Based Schema")),(0,r.kt)("p",null,"That being said, building off the learnings from using Player internally, we\u2019ve developed a few guidelines and best practices for how we design asset APIs to help us scale effectively in our applications:"),(0,r.kt)("p",null,"assets are described using their semantic intent regardless of their UI implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"assets should leverage context, where applicable, to modify their behavior")),(0,r.kt)("p",null,"A prime example of an ",(0,r.kt)("em",{parentName:"p"},"intent")," based asset is a ",(0,r.kt)("inlineCode",{parentName:"p"},"choice"),", which may have an API such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface ChoiceAsset extends Asset<'choice'> {\n  binding: Binding;\n\n  options: Array<{\n    id: string;\n    value: string;\n    label: TextAsset;\n  }>\n}\n")),(0,r.kt)("p",null,"Here we have a list of choices that a user may select from, the value of which is written to the provided binding.\nThis may take the shape of a radio-group, select, or any number of other rendering options, but the platform specific asset implementations are able to derive the correct rendering without changing the content. The platform implementations may also want to query the asset\u2019s context as additional input into it\u2019s rendering \u2014 i.e. if the ",(0,r.kt)("inlineCode",{parentName:"p"},"choice")," is within a broader ",(0,r.kt)("inlineCode",{parentName:"p"},"form"),", then render as a ",(0,r.kt)("inlineCode",{parentName:"p"},"select"),". "),(0,r.kt)("p",null,"Using an intent based approach enables content to outlive design changes and the freedom for each platform to choose the best rendering mechanism for itself. It helps to avoid referencing colors/layouts/styles directly but provides additional ",(0,r.kt)("em",{parentName:"p"},"context")," to the assets when needed. (Supplying metaData to force a ",(0,r.kt)("inlineCode",{parentName:"p"},"chocie")," to be compact)."))}l.isMDXComponent=!0}},function(e){e.O(0,[6525,6529,3795,9774,2888,179],(function(){return t=63595,e(e.s=t);var t}));var t=e.O();_N_E=t}]);