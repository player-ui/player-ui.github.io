"use strict";(self.webpackChunk_player_ui_docs=self.webpackChunk_player_ui_docs||[]).push([[6661],{83190:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(52112);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,y=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36661:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});n(52112);var r=n(83190),a=n(21525);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const l=(c="Test",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var c;const i={},p=(0,a.A)({tableOfContents:[{text:"Other",id:"other",level:1}]});function u(e){let{components:t,...n}=e;return(0,r.yg)(p,o({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"other"},(0,r.yg)("a",{parentName:"h1",href:"#other"},"Other")),(0,r.yg)("p",null,"Test things"),(0,r.yg)(l,{mdxType:"Test"}),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.dev/player-ui/player/blob/main/docs/site/pages/other.mdx"},"Help to improve this page")))}u.isMDXComponent=!0},21525:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(52112),a=n(9495),o=n(32532),l=n(83190),c=n(37766),i=n(90283),p=n(14769),u=n(63420),s=n(23013),m=n(47482),f=n(52947),y=n(53868),d=n(13516),b="chakra-skip-nav";function h(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var v=(0,s.R)((function(e,t){const n=(0,m.Vl)("SkipLink",e),{id:r=b,...a}=(0,f.MN)(e);return(0,d.jsx)(y.B.a,{...a,ref:t,href:`#${r}`,__css:h(n)})}));v.displayName="SkipNavLink";var g=(0,s.R)((function(e,t){const{id:n=b,...r}=e;return(0,d.jsx)(y.B.div,{ref:t,id:n,tabIndex:-1,style:{outline:0},...r})}));g.displayName="SkipNavContent";var x=n(43298),O=n(2063);const E=e=>r.createElement(i.az,{display:{base:"none",xl:"block"}},"Table Of Contents",r.createElement(p._J,{spacing:1,ml:"0",mt:"4",styleType:"none"},e.tableOfContents?.map((e=>r.createElement("li",{key:e.text},r.createElement("a",{href:`#${e.id}`},e.text)))))),w=e=>{const{bannerExpanded:t}=r.useContext(x.BR),n="72px",o=`calc(100vh - 88px - ${t?n:"0px"})`,l=`calc(100vh - 88px - 105px - ${t?n:"0px"})`;return r.createElement(i.az,{minH:"100vh"},r.createElement(v,null,"Skip to Main Content"),r.createElement(a.s,{flexDir:"column",padding:"2"},r.createElement(O.IS,null),r.createElement(u.c,null),r.createElement(a.s,null,r.createElement(i.az,{as:"main",w:"100%",mx:"auto"},r.createElement(i.az,{display:{md:"flex"}},r.createElement(i.az,{display:{base:"none",md:"block"},overflow:"auto",maxH:o,pr:"8",ml:"4"},r.createElement(O.E1,null)),r.createElement(i.az,{flex:"1",minW:"0",overflow:"auto",maxH:o},r.createElement(i.az,{minH:l},r.createElement(g,null),e.children),r.createElement(i.az,{pt:"20"},r.createElement(O.wi,null))),e.tableOfContents&&r.createElement(E,{tableOfContents:e.tableOfContents}))))))};function j(e){return e=>r.createElement(w,null,r.createElement(a.s,{alignItems:"center"},r.createElement(o.m,{maxW:"container.lg"},r.createElement(l.xA,{components:c.Ul},e.children))))}}}]);
//# sourceMappingURL=6661.61c961f63da6f2c5865c.js.map