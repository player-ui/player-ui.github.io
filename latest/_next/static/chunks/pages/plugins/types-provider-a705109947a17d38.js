(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4153],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7145:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/types-provider",function(){return n(8131)}])},43857:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var a=n(52322),r=n(2784),o=n(97729),i=n(64033),s=n(30876),l=n(21925),p=n(76808),c=n(55165),u=n(63637),m=n.n(u);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var y=["id"],g=["id"],h="chakra-skip-nav",v={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},O=(0,p.Gp)((function(e,t){var n=(0,p.mq)("SkipLink",e),a=(0,p.Lr)(e),o=a.id,i=void 0===o?h:o,s=f(a,y),l=m()({},v,n);return r.createElement(p.m$.a,d({},s,{ref:t,href:"#"+i,__css:l}))}));c.Ts&&(O.displayName="SkipNavLink");var k=(0,p.Gp)((function(e,t){var n=e.id,a=void 0===n?h:n,o=f(e,g);return r.createElement(p.m$.div,d({ref:t,id:a,tabIndex:-1,style:{outline:0}},o))}));c.Ts&&(k.displayName="SkipNavContent");var b=n(46977),x=n(96882),j=function(e){var t;return(0,a.jsxs)(i.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,a.jsx)(i.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(t=e.tableOfContents)||void 0===t?void 0:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},N=function(e){var t=r.useContext(b.Il).bannerExpanded,n="72px",o="calc(100vh - 88px - ".concat(t?n:"0px",")"),s="calc(100vh - 88px - 105px - ".concat(t?n:"0px",")");return(0,a.jsxs)(i.xu,{minH:"100vh",children:[(0,a.jsx)(O,{children:"Skip to Main Content"}),(0,a.jsxs)(i.kC,{flexDir:"column",padding:"2",children:[(0,a.jsx)(x._g,{}),(0,a.jsx)(i.iz,{}),(0,a.jsx)(i.kC,{children:(0,a.jsx)(i.xu,{as:"main",w:"100%",mx:"auto",children:(0,a.jsxs)(i.xu,{display:{md:"flex"},children:[(0,a.jsx)(i.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:o,pr:"8",ml:"4",children:(0,a.jsx)(x.Hy,{})}),(0,a.jsxs)(i.xu,{flex:"1",minW:"0",overflow:"auto",maxH:o,children:[(0,a.jsxs)(i.xu,{minH:s,children:[(0,a.jsx)(k,{}),e.children]}),(0,a.jsx)(i.xu,{pt:"20",children:(0,a.jsx)(x.$_,{})})]}),e.tableOfContents&&(0,a.jsx)(j,{tableOfContents:e.tableOfContents})]})})})]})]})};function T(e){return function(t){return(0,a.jsxs)(N,{children:[(0,a.jsx)(o.default,{children:(0,a.jsxs)("title",{children:["Player - ",e.title]})}),(0,a.jsx)(i.kC,{alignItems:"center",children:(0,a.jsx)(i.W2,{maxW:"container.lg",children:(0,a.jsx)(s.Zo,{components:l.tl,children:t.children})})})]})}}},8131:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});n(2784);var a=n(30876),r=n(43857);function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i,s=(i="PlatformTabs",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",Object.assign({},e))}),l={},p=(0,r.Z)({title:"Types Provider",platform:"core,ios",tableOfContents:[{text:"Types Provider Plugin",id:"types-provider-plugin",level:1},{text:"Example",id:"example",level:2},{text:"Custom Validator",id:"custom-validator",level:2},{text:"Custom Formatter",id:"custom-formatter",level:2},{text:"Formatting Options",id:"formatting-options",level:3},{text:"Custom Types",id:"custom-types",level:2},{text:"Options in the CustomType",id:"options-in-the-customtype",level:3}]});function c(e){var t=e.components,n=o(e,["components"]);return(0,a.kt)(p,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",Object.assign({},{id:"types-provider-plugin"}),(0,a.kt)("a",Object.assign({parentName:"h1"},{href:"#types-provider-plugin"}),"Types Provider Plugin")),(0,a.kt)("p",null,"Similar to the ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"./expression"}),"Expression Plugin"),", this plugin adds support for easily exposing new ",(0,a.kt)("inlineCode",{parentName:"p"},"DataTypes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"formats"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"validations")," to Player\u2019s content."),(0,a.kt)("h2",Object.assign({},{id:"example"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#example"}),"Example")),(0,a.kt)(s,{mdxType:"PlatformTabs"},(0,a.kt)("core",null,(0,a.kt)("p",null,"Define a new validation type:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { ValidatorFunction } from '@player-ui/player';\n\nconst customValidator: ValidatorFunction = (context, value) => {\n  if (value === 'bad-value') {\n    return {\n      message: \"This is a bad value.\"\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"DataType")," that references it: "),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { Schema } from '@player-ui/player';\n\nconst CustomDataType: Schema.DataType = {\n  name: 'CustomType',\n  validation: [\n    {\n      type: \"custom-validator\"\n    }\n  ]\n}\n")),(0,a.kt)("p",null,"Register it with Player:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { Player } from '@player-ui/player';\nimport { TypesProviderPlugin } from '@player-ui/types-provider-plugin';\n\nconst player = new Player({\n  plugins: [\n    new TypesProviderPlugin({\n      types: [CustomDataType],\n      validations: [\n        ['custom-validator', customValidator]\n      ]\n    })\n  ]\n});\n")),(0,a.kt)("p",null,"Given a data-type reference to ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomType")," in the content, your new validation will be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "schema": {\n    "ROOT": {\n      "data": {\n        "type": "CustomDataType"\n      }\n    }\n  }\n}\n'))),(0,a.kt)("ios",null,(0,a.kt)("p",null,"A wrapper is provided for the types-provider plugin for Core Player. This allows the use of Swift code to create custom types, validators, and formatters."),(0,a.kt)("h2",Object.assign({},{id:"custom-validator"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#custom-validator"}),"Custom Validator")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let validationFunction = {context, value, options in\n    if value == goodValue {\n      return nil // Return nil to pass the validation\n    } else {\n      return ["message": "This Value is bad!"]\n    }\n}\n\nlet validator = ValidationDeclaration(\n  type: "customValidator",\n  handler: validationFunction\n)\n\nlet plugin = TypesProviderPlugin(types: [], validators: [validator], formats: [])\n')),(0,a.kt)("p",null,"then in the JSON schema for your type:\u201d"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"schema": {\n    "ROOT": {\n      "<yourBinding>": {\n        "validation": [\n            {"type": "customValidator"}\n        ]\n      }\n    }\n  }\n')),(0,a.kt)("h2",Object.assign({},{id:"custom-formatter"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#custom-formatter"}),"Custom Formatter")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let formatFunction = {value, options in\n  if let stringValue = value as? String {\n    return stringValue.replacingOccurrences(of: ".", with: ",") // Turn all periods into commas\n  } else {\n    return value \n  }\n}\n\nlet formatter = FormatDeclaration(\n  name: "customFormatter",\n  format: formatFunction,\n  deformat: nil\n)\nlet plugin = TypesProviderPlugin(types: [], validators: [], formats: [formatter])\n')),(0,a.kt)("p",null,"then in the JSON schema for your type:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"schema": {\n    "ROOT": {\n      "<yourBinding>": {\n          "format": {\n              "type": "customFormatter"\n          }\n      }\n    }\n  }\n')),(0,a.kt)("h3",Object.assign({},{id:"formatting-options"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#formatting-options"}),"Formatting Options")),(0,a.kt)("p",null,"The second parameter passed to the format/deformat functions is for additional options, it is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"[String: Any]")," and contains any other keys that were passed alongside the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of the formatter:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"format": {\n  "type": "customFormatter",\n  "character": "X"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let formatFunction = {value, options in\n  if let stringValue = value as? String {\n    let char = options["character"] as? String ?? ","\n    return stringValue.replacingOccurrences(of: ".", with: char)\n    // Turn all periods into the specified character\n  } else {\n    return value \n  }\n}\n')),(0,a.kt)("h2",Object.assign({},{id:"custom-types"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#custom-types"}),"Custom Types")),(0,a.kt)("p",null,"Just as you can define custom formats and validation, you can define a custom type that encapsulates that functionality into a type, to avoid the need to keep specifying options, this is how the ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"./plugins/common-types"}),"common-types")," are defined, so when you choose a type like ",(0,a.kt)("inlineCode",{parentName:"p"},"DateType")," the formatting is already set up."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let type = CustomType(\n  type: "CustomType",\n  validation: [\n    ValidationReference(type: "customValidator")\n  ],\n  format: FormatReference(type: "customFormatter")\n)\n\n// Construct the plugin\nlet plugin = TypesProviderPlugin(types: [type], validators: [validator], formats: [formatter])\n')),(0,a.kt)("p",null,"then in your JSON schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"schema": {\n    "ROOT": {\n      "foo": {\n        "type": "CustomType"\n      }\n    }\n  }\n')),(0,a.kt)("h3",Object.assign({},{id:"options-in-the-customtype"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#options-in-the-customtype"}),"Options in the CustomType")),(0,a.kt)("p",null,"You can supply options to formatters of your custom type in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationReference")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"FormatReference"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let type = CustomType(\n  type: "CustomType",\n  validation: [\n    ValidationReference(type: "customValidator")\n  ],\n  format: FormatReference(type: "customFormatter", options: ["character": "X"])\n)\n')))))}c.isMDXComponent=!0}},function(e){e.O(0,[6525,204,3795,9774,2888,179],(function(){return t=7145,e(e.s=t);var t}));var t=e.O();_N_E=t}]);