(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5217],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,x=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(x,o(o({ref:n},p),{},{components:t})):r.createElement(x,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"===typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48796:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/external-action",function(){return t(49943)}])},43857:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(52322),a=t(2784),i=t(97729),o=t(64033),l=t(30876),s=t(21925),c=t(76808),p=t(55165),u=t(63637),d=t.n(u);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var g=["id"],m=["id"],h="chakra-skip-nav",y={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},v=(0,c.Gp)((function(e,n){var t=(0,c.mq)("SkipLink",e),r=(0,c.Lr)(e),i=r.id,o=void 0===i?h:i,l=x(r,g),s=d()({},y,t);return a.createElement(c.m$.a,f({},l,{ref:n,href:"#"+o,__css:s}))}));p.Ts&&(v.displayName="SkipNavLink");var b=(0,c.Gp)((function(e,n){var t=e.id,r=void 0===t?h:t,i=x(e,m);return a.createElement(c.m$.div,f({ref:n,id:r,tabIndex:-1,style:{outline:0}},i))}));p.Ts&&(b.displayName="SkipNavContent");var k=t(46977),N=t(96882),j=function(e){var n;return(0,r.jsxs)(o.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(o.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(n=e.tableOfContents)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},O=function(e){var n=a.useContext(k.Il).bannerExpanded,t="72px",i="calc(100vh - 88px - ".concat(n?t:"0px",")"),l="calc(100vh - 88px - 105px - ".concat(n?t:"0px",")");return(0,r.jsxs)(o.xu,{minH:"100vh",children:[(0,r.jsx)(v,{children:"Skip to Main Content"}),(0,r.jsxs)(o.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(N._g,{}),(0,r.jsx)(o.iz,{}),(0,r.jsx)(o.kC,{children:(0,r.jsx)(o.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(o.xu,{display:{md:"flex"},children:[(0,r.jsx)(o.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:i,pr:"8",ml:"4",children:(0,r.jsx)(N.Hy,{})}),(0,r.jsxs)(o.xu,{flex:"1",minW:"0",overflow:"auto",maxH:i,children:[(0,r.jsxs)(o.xu,{minH:l,children:[(0,r.jsx)(b,{}),e.children]}),(0,r.jsx)(o.xu,{pt:"20",children:(0,r.jsx)(N.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(j,{tableOfContents:e.tableOfContents})]})})})]})]})};function E(e){return function(n){return(0,r.jsxs)(O,{children:[(0,r.jsx)(i.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(o.kC,{alignItems:"center",children:(0,r.jsx)(o.W2,{maxW:"container.lg",children:(0,r.jsx)(l.Zo,{components:s.tl,children:n.children})})})]})}}},49943:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});t(2784);var r=t(30876),a=t(43857);function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o,l=(o="PlatformTabs",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),s={},c=(0,a.Z)({title:"External Action",platform:"react,core,ios,android",tableOfContents:[{text:"External Action Plugin",id:"external-action-plugin",level:1},{text:"Usage",id:"usage",level:2}]});function p(e){var n=e.components,t=i(e,["components"]);return(0,r.kt)(c,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"external-action-plugin"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#external-action-plugin"}),"External Action Plugin")),(0,r.kt)("p",null,"The External Action Plugin is an easy way to handle External states from the navigation of a Player flow. "),(0,r.kt)("h2",Object.assign({},{id:"usage"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#usage"}),"Usage")),(0,r.kt)(l,{mdxType:"PlatformTabs"},(0,r.kt)("core",null,(0,r.kt)("p",null,"Install the plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add @player-ui/external-action-plugin\n")),(0,r.kt)("p",null,"Create a handler for external actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { ExternalStateHandler } from '@player-ui/external-action-plugin';\n\nconst externalActionHandler: ExternalStateHandler = async (state, options) => {\n  if (state.ref === 'custom') {\n    return 'next';\n  }\n}\n")),(0,r.kt)("p",null,"Add it to Player:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Player } from '@player-ui/player';\nimport { ExternalActionPlugin } from '@player-ui/external-action-plugin';\n\nconst player = new Player({\n  plugins: [\n    new ExternalActionPlugin(externalActionHandler)\n  ]\n})\n")),(0,r.kt)("p",null,"This will transition any ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL")," state in Player\u2019s navigation, with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," transition.")),(0,r.kt)("ios",null,(0,r.kt)("p",null,"For an example flow with an external state such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "id": "test-flow",\n  "data": {\n    "transitionValue": "Next"\n  },\n  "navigation": {\n    "BEGIN": "FLOW_1",\n    "FLOW_1": {\n      "startState": "EXT_1",\n      "EXT_1": {\n        "state_type": "EXTERNAL",\n        "ref": "test-1",\n        "transitions": {\n          "Next": "END_FWD",\n          "Prev": "END_BCK"\n        },\n        "extraProperty": "extraValue"\n      },\n      "END_FWD": {\n        "state_type": "END",\n        "outcome": "FWD"\n      },\n      "END_BCK": {\n        "state_type": "END",\n        "outcome": "BCK"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The plugin can be declared to handle this external state:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let plugin = ExternalActionPlugin { state, options, transition in\n        guard state.ref == "test-1" else { return transition("Prev") }\n        // Options contains the dataModel as well as an evaluate function for expressions\n        let transitionValue = options.data.get(binding: "transitionValue") as? String\n        options.expression.evaluate("{{foo}} = \'bar\'")\n\n        let extraProperty: String? = state.extraProperty // uses @dynamicMemberLookup\n        // Do some processing\n        transition(transitionValue ?? "Next")\n}\n\nlet player = Player(plugins: [plugin])\n'))),(0,r.kt)("android",null,(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ExternalActionPlugin")," adds support for handling ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL")," navigation states in the application. The handler, which can be provided during plugin initialization, receives three parameters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"state: ",(0,r.kt)("inlineCode",{parentName:"li"},"NavigationFlowExternalState")," provides access to the information defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"EXTERNAL")," state node"),(0,r.kt)("li",{parentName:"ol"},"options: ",(0,r.kt)("inlineCode",{parentName:"li"},"ControllerState")," provides access to the current player controllers"),(0,r.kt)("li",{parentName:"ol"},"transition: ",(0,r.kt)("inlineCode",{parentName:"li"},"(String) -> Unit")," is provided to enable the handler to \u201ccomplete\u201d the ",(0,r.kt)("inlineCode",{parentName:"li"},"EXTERNAL")," state and transition using the provided ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," value")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "navigation": {\n    "BEGIN": "FLOW_1",\n    "FLOW_1": {\n      "startState": "EXT_1",\n      "EXT_1": {\n        "state_type": "EXTERNAL",\n        "ref": "test-1",\n        "transitions": {\n          "Next": "END_FWD",\n          "Prev": "END_BCK"\n        },\n        "extraProperty": "extraValue"\n      },\n      "END_FWD": {\n        "state_type": "END",\n        "outcome": "FWD"\n      },\n      "END_BCK": {\n        "state_type": "END",\n        "outcome": "BCK"\n      }\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),'val externalActionPlugin = ExternalActionPlugin { state, options, transition ->\n    // access external state node\n    val extraProperty = state["extraProperty"]\n    // access data model\n    options.data.get("{{foo.bar}}")\n    // evaluate expression\n    options.expression.evaluate("{{foo.bar}} = 1")\n    // do other processing or show non-player experience\n\n    // transition to the next node using "Next"\n    transition("Next")\n}\n\n// handler can be configured after instantiation\nexternalActionPlugin.onExternalAction { /** handle external action */ }\n\nval player = AndroidPlayer(context, externalActionPlugin)\n// extension method for configuring plugin with player instance\nplayer.onExernalAction { /** handle external action */ }\n')))))}p.isMDXComponent=!0}},function(e){e.O(0,[6525,6529,3795,9774,2888,179],(function(){return n=48796,e(e.s=n);var n}));var n=e.O();_N_E=n}]);