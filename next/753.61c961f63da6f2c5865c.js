"use strict";(self.webpackChunk_player_ui_docs=self.webpackChunk_player_ui_docs||[]).push([[753],{83190:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(52112);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(n),g=r,m=y["".concat(s,".").concat(g)]||y[g]||u[g]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20753:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(52112);var a=n(83190),r=n(21525);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const i={},o=(0,r.A)({title:"Using XLR",tableOfContents:[{text:"Part 1 - Creating XLRs",id:"part-1---creating-xlrs",level:1},{text:"Exporting Base Type Definitions",id:"exporting-base-type-definitions",level:2},{text:"Exporting Plugin Capabilities",id:"exporting-plugin-capabilities",level:2},{text:"Part 2 - Using XLRs",id:"part-2---using-xlrs",level:1},{text:"SDK: Initialization",id:"sdk-initialization",level:2},{text:"SDK: Loading Types",id:"sdk-loading-types",level:2},{text:"SDK: Usage",id:"sdk-usage",level:2},{text:"Type Recall",id:"type-recall",level:3},{text:"Type Validation",id:"type-validation",level:3}]});function s(e){let{components:t,...n}=e;return(0,a.yg)(o,l({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"part-1---creating-xlrs"},(0,a.yg)("a",{parentName:"h1",href:"#part-1---creating-xlrs"},"Part 1 - Creating XLRs")),(0,a.yg)("p",null,"XLR creation is done through the Player CLI which can be added to your project like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yarn install @player-tools/cli\n")),(0,a.yg)("h2",{id:"exporting-base-type-definitions"},(0,a.yg)("a",{parentName:"h2",href:"#exporting-base-type-definitions"},"Exporting Base Type Definitions")),(0,a.yg)("p",null,"If you want to compile all exported interfaces/types to XLRs run the following command as part of your build"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"player xlr compile -m types <other options>\n")),(0,a.yg)("h2",{id:"exporting-plugin-capabilities"},(0,a.yg)("a",{parentName:"h2",href:"#exporting-plugin-capabilities"},"Exporting Plugin Capabilities")),(0,a.yg)("p",null,"If you are writing a Player Plugin, you’ll first need to have your plugin extend the ",(0,a.yg)("inlineCode",{parentName:"p"},"ExtendedPlayerPlugin")," interface and fill in the generics with an array of the interfaces/types for each Capability. For example, you can see how its done below in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/player-ui/player/blob/main/plugins/reference-assets/core/src/plugin.ts"},"core reference assets plugin")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"export class ReferenceAssetsPlugin\n  implements\n    PlayerPlugin,\n    ExtendedPlayerPlugin<\n      [InputAsset, TextAsset, ActionAsset, InfoAsset, CollectionAsset]\n    >\n")),(0,a.yg)("p",null,"Then run the following command as part of your build"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"player xlr compile -m plugin <other options>\n")),(0,a.yg)("h1",{id:"part-2---using-xlrs"},(0,a.yg)("a",{parentName:"h1",href:"#part-2---using-xlrs"},"Part 2 - Using XLRs")),(0,a.yg)("h2",{id:"sdk-initialization"},(0,a.yg)("a",{parentName:"h2",href:"#sdk-initialization"},"SDK: Initialization")),(0,a.yg)("p",null,"To start using the XLR SDK you’ll need to install the SDK package"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yarn install @player-tools/xlr-sdk\n")),(0,a.yg)("p",null,"Next, import the SDK "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'import { XLRSDK } from "@player-tools/xlr-sdk"\n')),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"If you want to implement a custom object store, also import the ",(0,a.yg)("inlineCode",{parentName:"em"},"XLRRegistry")," interface and have your custom registry implement it.")),(0,a.yg)("p",null,"Lastly, just initialize an instance of it. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'import { XLRSDK } from "@player-tools/xlr-sdk"\n\nconst sdk = new XLRSDK();\n')),(0,a.yg)("p",null,"or if you want to use your custom registry, just pass it in to the initializer. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'import { XLRSDK } from "@player-tools/xlr-sdk"\nimport { customRegistry } from "./customRegistry"\n\nconst sdk = new XLRSDK(customRegistry);\n')),(0,a.yg)("h2",{id:"sdk-loading-types"},(0,a.yg)("a",{parentName:"h2",href:"#sdk-loading-types"},"SDK: Loading Types")),(0,a.yg)("p",null,"If you want to load XLR types from disk, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"loadDefinitionsFromDisk")," function and pass it the path to parent folder of the ",(0,a.yg)("inlineCode",{parentName:"p"},"xlr")," directory."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const sdk = new XLRSDK();\nsdk.loadDefinitionsFromDisk('./common/static_xlrs/core');\n")),(0,a.yg)("p",null,"If you want to load XLR types from a module, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"loadDefinitionsFromModule")," function and pass it the module to load from."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'const sdk = new XLRSDK();\nsdk.loadDefinitionsFromModule(require("@player-ui/reference-assets-plugin").path);\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If you want to filter any of the types that are being loaded, you can supply a ",(0,a.yg)("inlineCode",{parentName:"li"},"Filters")," object as the ",(0,a.yg)("em",{parentName:"li"},"second")," arguments"),(0,a.yg)("li",{parentName:"ul"},"If you want to apply any transform functions to the modules that you load, you can supply a list of ",(0,a.yg)("inlineCode",{parentName:"li"},"TransformFunction")," as the ",(0,a.yg)("em",{parentName:"li"},"third")," argument")),(0,a.yg)("h2",{id:"sdk-usage"},(0,a.yg)("a",{parentName:"h2",href:"#sdk-usage"},"SDK: Usage")),(0,a.yg)("p",null,"After the types are loaded into the SDK there are a couple ways to interact with them."),(0,a.yg)("h3",{id:"type-recall"},(0,a.yg)("a",{parentName:"h3",href:"#type-recall"},"Type Recall")),(0,a.yg)("p",null,"To get a type back you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"getType")," function and pass the name of the type you want to retrieve. You can also use the ",(0,a.yg)("inlineCode",{parentName:"p"},"hasType")," function to check to see if the type exists before you try and access it. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'const sdk = new XLRSDK();\nif(sdk.hasType("InputAsset")){\n  return sdk.getType("InputAsset")\n} else {\n  throw new Error("Oh no!")\n}\n')),(0,a.yg)("h3",{id:"type-validation"},(0,a.yg)("a",{parentName:"h3",href:"#type-validation"},"Type Validation")),(0,a.yg)("p",null,"To validate if some JSON content matches the expected type, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"validateType")," function. You will need to supply a ",(0,a.yg)("inlineCode",{parentName:"p"},"Node")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"jsonc-parser")," library. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'import { parseTree } from \'jsonc-parser\';\nimport { XLRSDK } from \'@player-tools/xlr-sdk\'\n\nconst sdk = new XLRSDK();\n\n///... Loading XLRs\n\nconst mockAsset = parseTree(`\n    {\n      "id": 1,\n      "type": "input",\n      "binding": "some.data",\n      "label": {\n        "asset": {\n          "value": "{{input.label}}"\n        }\n      }\n    `);\n\nreturn sdk.validate(\'InputAsset\', mockAsset)\n')),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.dev/player-ui/player/blob/main/docs/site/pages/xlr/usage.mdx"},"Help to improve this page")))}s.isMDXComponent=!0},21525:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(52112),r=n(9495),l=n(32532),i=n(83190),o=n(37766),s=n(90283),p=n(14769),c=n(63420),y=n(23013),u=n(47482),g=n(52947),m=n(53868),d=n(13516),f="chakra-skip-nav";function h(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var x=(0,y.R)((function(e,t){const n=(0,u.Vl)("SkipLink",e),{id:a=f,...r}=(0,g.MN)(e);return(0,d.jsx)(m.B.a,{...r,ref:t,href:`#${a}`,__css:h(n)})}));x.displayName="SkipNavLink";var b=(0,y.R)((function(e,t){const{id:n=f,...a}=e;return(0,d.jsx)(m.B.div,{ref:t,id:n,tabIndex:-1,style:{outline:0},...a})}));b.displayName="SkipNavContent";var N=n(43298),v=n(2063);const k=e=>a.createElement(s.az,{display:{base:"none",xl:"block"}},"Table Of Contents",a.createElement(p._J,{spacing:1,ml:"0",mt:"4",styleType:"none"},e.tableOfContents?.map((e=>a.createElement("li",{key:e.text},a.createElement("a",{href:`#${e.id}`},e.text)))))),w=e=>{const{bannerExpanded:t}=a.useContext(N.BR),n="72px",l=`calc(100vh - 88px - ${t?n:"0px"})`,i=`calc(100vh - 88px - 105px - ${t?n:"0px"})`;return a.createElement(s.az,{minH:"100vh"},a.createElement(x,null,"Skip to Main Content"),a.createElement(r.s,{flexDir:"column",padding:"2"},a.createElement(v.IS,null),a.createElement(c.c,null),a.createElement(r.s,null,a.createElement(s.az,{as:"main",w:"100%",mx:"auto"},a.createElement(s.az,{display:{md:"flex"}},a.createElement(s.az,{display:{base:"none",md:"block"},overflow:"auto",maxH:l,pr:"8",ml:"4"},a.createElement(v.E1,null)),a.createElement(s.az,{flex:"1",minW:"0",overflow:"auto",maxH:l},a.createElement(s.az,{minH:i},a.createElement(b,null),e.children),a.createElement(s.az,{pt:"20"},a.createElement(v.wi,null))),e.tableOfContents&&a.createElement(k,{tableOfContents:e.tableOfContents}))))))};function E(e){return e=>a.createElement(w,null,a.createElement(r.s,{alignItems:"center"},a.createElement(l.m,{maxW:"container.lg"},a.createElement(i.xA,{components:o.Ul},e.children))))}}}]);
//# sourceMappingURL=753.61c961f63da6f2c5865c.js.map