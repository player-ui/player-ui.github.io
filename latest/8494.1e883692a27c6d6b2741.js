"use strict";(self.webpackChunk_player_ui_docs=self.webpackChunk_player_ui_docs||[]).push([[8494],{83190:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(52112);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,y=c["".concat(i,".").concat(m)]||c[m]||g[m]||l;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18494:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(52112);var r=t(83190),a=t(21525);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}const s=(o="PlatformTabs",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var o;const i={},p=(0,a.A)({title:"Expression",platform:"react,core,ios,android",tableOfContents:[{text:"Expression Plugin",id:"expression-plugin",level:1},{text:"Usage",id:"usage",level:2},{text:"CocoaPods",id:"cocoapods",level:3},{text:"Swift Usage",id:"swift-usage",level:3},{text:"Arguments",id:"arguments",level:4},{text:"Usage",id:"usage",level:2}]});function u(e){let{components:n,...t}=e;return(0,r.yg)(p,l({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"expression-plugin"},(0,r.yg)("a",{parentName:"h1",href:"#expression-plugin"},"Expression Plugin")),(0,r.yg)("p",null,"This plugin assists with exposing custom expressions to Player content."),(0,r.yg)("h2",{id:"usage"},(0,r.yg)("a",{parentName:"h2",href:"#usage"},"Usage")),(0,r.yg)(s,{mdxType:"PlatformTabs"},(0,r.yg)("core",null,(0,r.yg)("p",null,"Define handlers for the expressions you wish to add:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { ExpressionHandler, ExpressionContext } from '@player-ui/expression-plugin';\n\nconst customExpressionHandler: ExpressionHandler = (ctx: ExpressionContext) => {\n  return 'Hello World!'\n}\n")),(0,r.yg)("p",null,"Register with Player. Subsequent registrations of an expression with the same name will override previous values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { Player } from '@player-ui/player';\nimport { ExpressionPlugin } from '@player-ui/expression-plugin';\n\nconst player = new Player({\n  plugins: [\n    new ExpressionPlugin([\n      ['myCustomFunction', customExpressionHandler]\n    ])\n  ]\n})\n")),(0,r.yg)("p",null,"Any calls to ",(0,r.yg)("inlineCode",{parentName:"p"},"myCustomFunction()")," within the flow will utilize the newly registered expression:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "asset": {\n    "id": "sample",\n    "type": "text",\n    "value": "@[ myCustomFunction() ]@"\n  }\n}\n'))),(0,r.yg)("ios",null,(0,r.yg)("h3",{id:"cocoapods"},(0,r.yg)("a",{parentName:"h3",href:"#cocoapods"},"CocoaPods")),(0,r.yg)("p",null,"Add the subspec to your ",(0,r.yg)("inlineCode",{parentName:"p"},"Podfile")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ruby"},"pod 'PlayerUI/ExpressionPlugin'\n")),(0,r.yg)("h3",{id:"swift-usage"},(0,r.yg)("a",{parentName:"h3",href:"#swift-usage"},"Swift Usage")),(0,r.yg)("p",null,"The ExpressionPlugin lets you register custom expressions to run native code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "textAsset",\n  "type": "text",\n  "value": "@[ myExpression() ]@"\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'let expressionPlugin = ExpressionPlugin(expressions: [\n  "myExpression": { _ in\n        return "Some Value"\n    }\n])\n')),(0,r.yg)("h4",{id:"arguments"},(0,r.yg)("a",{parentName:"h4",href:"#arguments"},"Arguments")),(0,r.yg)("p",null,"Arguments can be passed to custom expressions, and your handler receives the arguments as an array of Any:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "textAsset",\n  "type": "text",\n  "value": "@[ myExpression(\'world\') ]@"\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'let expressionPlugin = ExpressionPlugin(expressions: [\n  "myExpression": { (args: [Any]) -> Any? in\n        guard let string = args.first as? String else { return nil }\n        return "Hello " + string\n    }\n])\n'))),(0,r.yg)("android",null,(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ExpressionPlugin")," enables consumers to register custom expressions in native JVM code. Simply supply a map of expression name to handler on instantiation, and the expressions will be available within the content. Handlers receive arguments are as a ",(0,r.yg)("inlineCode",{parentName:"p"},"List<Any?>")," and are permitted to return ",(0,r.yg)("inlineCode",{parentName:"p"},"Any?"),"."),(0,r.yg)("h2",{id:"usage-1"},(0,r.yg)("a",{parentName:"h2",href:"#usage-1"},"Usage")),(0,r.yg)("p",null,"In build.gradle"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'implementation "com.intuit.playerui.plugins:expression:$PLAYER_VERSION"\n')),(0,r.yg)("p",null,"In Player constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'import com.intuit.playerui.plugins.expression.ExpressionPlugin\n\nval expressionPlugin = ExpressionPlugin(\n     "hello" to { args: List<Any?> ->\n        when (val name = args.firstOfNull()) {\n            null -> "goodbye"\n            else -> "hello $name"\n        }\n    }\n)\nAndroidPlayer(expressionPlugin)\n')),(0,r.yg)("p",null,"In Player content"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "hello-world-text",\n  "type": "text",\n  "value": "@[hello(\'world\')]@"\n}\n')))),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.dev/player-ui/player/blob/main/docs/site/pages/plugins/expression.mdx"},"Help to improve this page")))}u.isMDXComponent=!0},21525:(e,n,t)=>{t.d(n,{A:()=>P});var r=t(52112),a=t(9495),l=t(32532),s=t(83190),o=t(37766),i=t(90283),p=t(14769),u=t(63420),c=t(23013),g=t(47482),m=t(52947),y=t(53868),d=t(13516),f="chakra-skip-nav";function x(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var h=(0,c.R)((function(e,n){const t=(0,g.Vl)("SkipLink",e),{id:r=f,...a}=(0,m.MN)(e);return(0,d.jsx)(y.B.a,{...a,ref:n,href:`#${r}`,__css:x(t)})}));h.displayName="SkipNavLink";var v=(0,c.R)((function(e,n){const{id:t=f,...r}=e;return(0,d.jsx)(y.B.div,{ref:n,id:t,tabIndex:-1,style:{outline:0},...r})}));v.displayName="SkipNavContent";var b=t(43298),E=t(2063);const w=e=>r.createElement(i.az,{display:{base:"none",xl:"block"}},"Table Of Contents",r.createElement(p._J,{spacing:1,ml:"0",mt:"4",styleType:"none"},e.tableOfContents?.map((e=>r.createElement("li",{key:e.text},r.createElement("a",{href:`#${e.id}`},e.text)))))),N=e=>{const{bannerExpanded:n}=r.useContext(b.BR),t="72px",l=`calc(100vh - 88px - ${n?t:"0px"})`,s=`calc(100vh - 88px - 105px - ${n?t:"0px"})`;return r.createElement(i.az,{minH:"100vh"},r.createElement(h,null,"Skip to Main Content"),r.createElement(a.s,{flexDir:"column",padding:"2"},r.createElement(E.IS,null),r.createElement(u.c,null),r.createElement(a.s,null,r.createElement(i.az,{as:"main",w:"100%",mx:"auto"},r.createElement(i.az,{display:{md:"flex"}},r.createElement(i.az,{display:{base:"none",md:"block"},overflow:"auto",maxH:l,pr:"8",ml:"4"},r.createElement(E.E1,null)),r.createElement(i.az,{flex:"1",minW:"0",overflow:"auto",maxH:l},r.createElement(i.az,{minH:s},r.createElement(v,null),e.children),r.createElement(i.az,{pt:"20"},r.createElement(E.wi,null))),e.tableOfContents&&r.createElement(w,{tableOfContents:e.tableOfContents}))))))};function P(e){return e=>r.createElement(N,null,r.createElement(a.s,{alignItems:"center"},r.createElement(l.m,{maxW:"container.lg"},r.createElement(s.xA,{components:o.Ul},e.children))))}}}]);
//# sourceMappingURL=8494.1e883692a27c6d6b2741.js.map