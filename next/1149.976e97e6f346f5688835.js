"use strict";(self.webpackChunk_player_ui_docs=self.webpackChunk_player_ui_docs||[]).push([[1149],{83190:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(52112);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71149:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(52112);var a=n(83190),o=n(21525);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}const r={},l=(0,o.A)({title:"Writing DSL Views",tableOfContents:[{text:"Overview",id:"overview",level:1},{text:"View Concepts in DSL",id:"view-concepts-in-dsl",level:1},{text:"Templates",id:"templates",level:2},{text:"Switches",id:"switches",level:2},{text:"DSL Benefits in Views",id:"dsl-benefits-in-views",level:1},{text:"IDs",id:"ids",level:2},{text:"Collection/Text Creation",id:"collectiontext-creation",level:2},{text:"Meta Components",id:"meta-components",level:2}]});function s(e){let{components:t,...n}=e;return(0,a.yg)(l,i({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"overview"},(0,a.yg)("a",{parentName:"h1",href:"#overview"},"Overview")),(0,a.yg)("p",null,"Writing assets or views is as simple as creating a React element using your base DSL components:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Input, Text, Collection } from '@player-ui/reference-assets-components';\n\nconst view = (\n  <Collection>\n    <Text>Some value</Text>\n    <Input>\n      <Input.Label>Some label</Input.Label>\n    </Input>\n  </Collection>\n);\n")),(0,a.yg)("p",null,"When compiled, this would produce the following JSON."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "root",\n  "type": "collection",\n  "values": [\n    {\n      "asset": {\n        "id": "root-values-1",\n        "type": "text",\n        "value": "Some value"\n      }\n    },\n    {\n      "asset": {\n        "id": "root-values-2",\n        "type": "input",\n        "label": {\n          "asset": {\n            "id": "root-values-2-label",\n            "type": "text",\n            "value": "Some label"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,a.yg)("p",null,"Not only is the source DSL content a fraction of the output object’s size (making it easier to read and maintain) as the base components use the same TypeScript types as the assets themselves, you will receive in editor suggestions and type checks as you author your content. "),(0,a.yg)("h1",{id:"view-concepts-in-dsl"},(0,a.yg)("a",{parentName:"h1",href:"#view-concepts-in-dsl"},"View Concepts in DSL")),(0,a.yg)("h2",{id:"templates"},(0,a.yg)("a",{parentName:"h2",href:"#templates"},"Templates")),(0,a.yg)("p",null,"Templates are included via the ",(0,a.yg)("inlineCode",{parentName:"p"},"@player-tools/dsl")," package. This can be used in any asset slot:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { dataTypes } from '@player-ui/common-types-plugin';\nimport { makeBindingsForObject, Template } from '@player-tools/dsl';\n\nconst schema = {\n  foo: [{\n    bar: dataTypes.StringType,\n  }],\n};\n\nconst bindings = makeBindingsForObject(schema);\n\n<Collection>\n  <Collection.Values>\n    <Template data={bindings.foo}>\n      <Text>The current item is: {bindings.foo._index_.bar}</Text>\n    </Template>\n  </Collection.Values>\n</Collection>\n")),(0,a.yg)("p",null,"Templates can be nested within one another, and the auto-id generation will handle adding the ",(0,a.yg)("inlineCode",{parentName:"p"},"_index_")," information to any generated ",(0,a.yg)("inlineCode",{parentName:"p"},"id"),"."),(0,a.yg)("h2",{id:"switches"},(0,a.yg)("a",{parentName:"h2",href:"#switches"},"Switches")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"@player-tools/dsl")," module also includes support for ",(0,a.yg)("em",{parentName:"p"},"static")," and ",(0,a.yg)("em",{parentName:"p"},"dynamic")," switches."),(0,a.yg)("p",null,"Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"isDynamic")," flag to denote this should be a ",(0,a.yg)("inlineCode",{parentName:"p"},"dynamicSwitch")," instead of a ",(0,a.yg)("inlineCode",{parentName:"p"},"staticSwitch"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Switch } from '@player-tools/dsl';\n\n<Collection>\n  <Collection.Label>\n    <Switch isDynamic>\n      <Switch.Case exp={e`foo() = bar()`}>\n        <Text>Text 1</Text>\n      </Switch.Case>\n      <Switch.Case>\n        <Text>Text 1</Text>\n      </Switch.Case>\n    </Switch>\n  </Collection.Label>\n</Collection>\n")),(0,a.yg)("h1",{id:"dsl-benefits-in-views"},(0,a.yg)("a",{parentName:"h1",href:"#dsl-benefits-in-views"},"DSL Benefits in Views")),(0,a.yg)("h2",{id:"ids"},(0,a.yg)("a",{parentName:"h2",href:"#ids"},"IDs")),(0,a.yg)("p",null,"Any asset can accept an ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," property, however automatic ID creation is supported out of the box by the base ",(0,a.yg)("inlineCode",{parentName:"p"},"Asset")," component and it’s generation behavior can be further customized via your component’s implementation."),(0,a.yg)("h2",{id:"collectiontext-creation"},(0,a.yg)("a",{parentName:"h2",href:"#collectiontext-creation"},"Collection/Text Creation")),(0,a.yg)("p",null,"In the event that an asset object is expected, but a ",(0,a.yg)("inlineCode",{parentName:"p"},"string")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"number")," is found, Player will attempt to automatically create a text node, provided the asset-library has a text-asset-factory configured."),(0,a.yg)("p",null,"Similarly, if a single asset is expected but a list of them is found instead, Player will attempt to create a ",(0,a.yg)("em",{parentName:"p"},"collection")," asset provided the library has the proper configuration set."),(0,a.yg)("h2",{id:"meta-components"},(0,a.yg)("a",{parentName:"h2",href:"#meta-components"},"Meta Components")),(0,a.yg)("p",null,"As DSL components are React component, they can be composed into reusable building blocks to simplify and abstract away common UI patterns. By centralizing these patterns, code duplication can be minimized and updates across multiple sets of content can be simplified. These composed components don’t just have to be built on top of the base set of DSL components, DSL components themselves can offer common shortcuts for behavior. For example, if we wanted to offer an out of the box ",(0,a.yg)("inlineCode",{parentName:"p"},"Action")," component that could be used as a ",(0,a.yg)("inlineCode",{parentName:"p"},"Next")," action asset, we could export the following from the DSL components library."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\n\nAction.Next = () => (\n  <Action value=\"next\">\n    <Action.Label>Continue</Action.Label>\n  </Action>\n);\n")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.dev/player-ui/player/blob/main/docs/site/pages/dsl/views.mdx"},"Help to improve this page")))}s.isMDXComponent=!0},21525:(e,t,n)=>{n.d(t,{A:()=>O});var a=n(52112),o=n(9495),i=n(32532),r=n(83190),l=n(37766),s=n(90283),c=n(14769),p=n(63420),m=n(23013),u=n(47482),d=n(52947),y=n(53868),g=n(13516),f="chakra-skip-nav";function h(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var b=(0,m.R)((function(e,t){const n=(0,u.Vl)("SkipLink",e),{id:a=f,...o}=(0,d.MN)(e);return(0,g.jsx)(y.B.a,{...o,ref:t,href:`#${a}`,__css:h(n)})}));b.displayName="SkipNavLink";var v=(0,m.R)((function(e,t){const{id:n=f,...a}=e;return(0,g.jsx)(y.B.div,{ref:t,id:n,tabIndex:-1,style:{outline:0},...a})}));v.displayName="SkipNavContent";var x=n(43298),w=n(2063);const C=e=>a.createElement(s.az,{display:{base:"none",xl:"block"}},"Table Of Contents",a.createElement(c._J,{spacing:1,ml:"0",mt:"4",styleType:"none"},e.tableOfContents?.map((e=>a.createElement("li",{key:e.text},a.createElement("a",{href:`#${e.id}`},e.text)))))),N=e=>{const{bannerExpanded:t}=a.useContext(x.BR),n="72px",i=`calc(100vh - 88px - ${t?n:"0px"})`,r=`calc(100vh - 88px - 105px - ${t?n:"0px"})`;return a.createElement(s.az,{minH:"100vh"},a.createElement(b,null,"Skip to Main Content"),a.createElement(o.s,{flexDir:"column",padding:"2"},a.createElement(w.IS,null),a.createElement(p.c,null),a.createElement(o.s,null,a.createElement(s.az,{as:"main",w:"100%",mx:"auto"},a.createElement(s.az,{display:{md:"flex"}},a.createElement(s.az,{display:{base:"none",md:"block"},overflow:"auto",maxH:i,pr:"8",ml:"4"},a.createElement(w.E1,null)),a.createElement(s.az,{flex:"1",minW:"0",overflow:"auto",maxH:i},a.createElement(s.az,{minH:r},a.createElement(v,null),e.children),a.createElement(s.az,{pt:"20"},a.createElement(w.wi,null))),e.tableOfContents&&a.createElement(C,{tableOfContents:e.tableOfContents}))))))};function O(e){return e=>a.createElement(N,null,a.createElement(o.s,{alignItems:"center"},a.createElement(i.m,{maxW:"container.lg"},a.createElement(r.xA,{components:l.Ul},e.children))))}}}]);
//# sourceMappingURL=1149.976e97e6f346f5688835.js.map