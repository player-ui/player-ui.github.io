(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1144],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9050:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/computed-properties",function(){return n(36236)}])},43857:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(52322),a=n(2784),o=n(97729),i=n(64033),l=n(30876),s=n(21925),p=n(76808),c=n(55165),u=n(63637),d=n.n(u);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var h=["id"],g=["id"],x="chakra-skip-nav",y={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},b=(0,p.Gp)((function(e,t){var n=(0,p.mq)("SkipLink",e),r=(0,p.Lr)(e),o=r.id,i=void 0===o?x:o,l=f(r,h),s=d()({},y,n);return a.createElement(p.m$.a,m({},l,{ref:t,href:"#"+i,__css:s}))}));c.Ts&&(b.displayName="SkipNavLink");var v=(0,p.Gp)((function(e,t){var n=e.id,r=void 0===n?x:n,o=f(e,g);return a.createElement(p.m$.div,m({ref:t,id:r,tabIndex:-1,style:{outline:0}},o))}));c.Ts&&(v.displayName="SkipNavContent");var j=n(46977),k=n(55002),O=function(e){var t;return(0,r.jsxs)(i.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(i.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(t=e.tableOfContents)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},w=function(e){var t=a.useContext(j.Il).bannerExpanded,n="72px",o="calc(100vh - 88px - ".concat(t?n:"0px",")"),l="calc(100vh - 88px - 105px - ".concat(t?n:"0px",")");return(0,r.jsxs)(i.xu,{minH:"100vh",children:[(0,r.jsx)(b,{children:"Skip to Main Content"}),(0,r.jsxs)(i.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(k._g,{}),(0,r.jsx)(i.iz,{}),(0,r.jsx)(i.kC,{children:(0,r.jsx)(i.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(i.xu,{display:{md:"flex"},children:[(0,r.jsx)(i.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:o,pr:"8",ml:"4",children:(0,r.jsx)(k.Hy,{})}),(0,r.jsxs)(i.xu,{flex:"1",minW:"0",overflow:"auto",maxH:o,children:[(0,r.jsxs)(i.xu,{minH:l,children:[(0,r.jsx)(v,{}),e.children]}),(0,r.jsx)(i.xu,{pt:"20",children:(0,r.jsx)(k.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(O,{tableOfContents:e.tableOfContents})]})})})]})]})};function P(e){return function(t){return(0,r.jsxs)(w,{children:[(0,r.jsx)(o.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(i.kC,{alignItems:"center",children:(0,r.jsx)(i.W2,{maxW:"container.lg",children:(0,r.jsx)(l.Zo,{components:s.tl,children:t.children})})})]})}}},36236:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});n(2784);var r=n(30876),a=n(43857);function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i,l=(i="PlatformTabs",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),s={},p=(0,a.Z)({title:"Computed Properties",platform:"react,core",tableOfContents:[{text:"Computed Properties Plugin",id:"computed-properties-plugin",level:1},{text:"Usage",id:"usage",level:2},{text:"CocoaPods",id:"cocoapods",level:3},{text:"Swift Usage",id:"swift-usage",level:3},{text:"Expression Data Type",id:"expression-data-type",level:2},{text:"Example",id:"example",level:2}]});function c(e){var t=e.components,n=o(e,["components"]);return(0,r.kt)(p,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"computed-properties-plugin"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#computed-properties-plugin"}),"Computed Properties Plugin")),(0,r.kt)("p",null,"This plugin allows users to specify a path in the data-model (binding) as a computed property in the schema.\nAnytime this binding is read from, the given expression will be evaluated and returned instead of the it being read from the actual model. Writes to the binding will be prevented, and an error will be thrown."),(0,r.kt)("h2",Object.assign({},{id:"usage"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#usage"}),"Usage")),(0,r.kt)(l,{mdxType:"PlatformTabs"},(0,r.kt)("core",null,(0,r.kt)("p",null,"Add the plugin to Player:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Player } from '@player-ui/player';\nimport { ComputedPropertiesPlugin } from '@player-ui/computed-properties-plugin';\n\nconst player = new Player({\n  plugins: [new ComputedPropertiesPlugin()],\n});\n"))),(0,r.kt)("ios",null,(0,r.kt)("h3",Object.assign({},{id:"cocoapods"}),(0,r.kt)("a",Object.assign({parentName:"h3"},{href:"#cocoapods"}),"CocoaPods")),(0,r.kt)("p",null,"Add the subspec to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ruby"}),"pod 'PlayerUI/ComputedPropertiesPlugin'\n")),(0,r.kt)("h3",Object.assign({},{id:"swift-usage"}),(0,r.kt)("a",Object.assign({parentName:"h3"},{href:"#swift-usage"}),"Swift Usage")),(0,r.kt)("p",null,"This plugin takes no parameters, and the configuration comes from content, it can just be added to the plugin array:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"var body: some View {\n    SwiftUIPlayer(\n        flow: flow,\n        plugins: [\n          ComputedPropertiesPlugin()\n        ],\n        result: $resultBinding\n    )\n}\n")))),(0,r.kt)("h2",Object.assign({},{id:"expression-data-type"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#expression-data-type"}),"Expression Data Type")),(0,r.kt)("p",null,"The computed properties plugin introspects the schema, looking for any ",(0,r.kt)("inlineCode",{parentName:"p"},"DataType")," that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "type": "Expression",\n  "exp": "@[ someExpression() ]@"\n}\n')),(0,r.kt)("p",null,"Any data-lookup for that binding path will evaluate the given expression and return that value. Results are ",(0,r.kt)("em",{parentName:"p"},"not")," cached, and will be recomputed on every fetch."),(0,r.kt)("h2",Object.assign({},{id:"example"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#example"}),"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "schema": {\n    "ROOT": {\n      "foo": {\n        "type:" "FooType"\n      }\n    },\n    "FooType": {\n      "computedValue": {\n        "type": "Expression",\n        "exp": "1 + 2 + 3"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Using the above schema, any reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"{{foo.computedValue}}")," will compute the ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2 + 3")," expression and use that as the underlying value for that path."),(0,r.kt)("p",null,"Any write or set operation to ",(0,r.kt)("inlineCode",{parentName:"p"},"{{foo.computedValue}}")," will result in a thrown exception for writing to a read-only path."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://github.dev/player-ui/player/blob/main/docs/site/pages/plugins/computed-properties.mdx"}),"Help to improve this page")))}c.isMDXComponent=!0}},function(e){e.O(0,[6525,7882,3832,9774,2888,179],(function(){return t=9050,e(e.s=t);var t}));var t=e.O();_N_E=t}]);