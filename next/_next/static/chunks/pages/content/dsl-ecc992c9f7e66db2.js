(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9358],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"===typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66443:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/dsl",function(){return n(30326)}])},43857:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(52322),i=n(2784),s=n(97729),o=n(64033),r=n(30876),l=n(21925),p=n(76808),c=n(55165),d=n(63637),u=n.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}var g=["id"],f=["id"],y="chakra-skip-nav",b={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},k=(0,p.Gp)((function(e,t){var n=(0,p.mq)("SkipLink",e),a=(0,p.Lr)(e),s=a.id,o=void 0===s?y:s,r=h(a,g),l=u()({},b,n);return i.createElement(p.m$.a,m({},r,{ref:t,href:"#"+o,__css:l}))}));c.Ts&&(k.displayName="SkipNavLink");var x=(0,p.Gp)((function(e,t){var n=e.id,a=void 0===n?y:n,s=h(e,f);return i.createElement(p.m$.div,m({ref:t,id:a,tabIndex:-1,style:{outline:0}},s))}));c.Ts&&(x.displayName="SkipNavContent");var j=n(46977),v=n(55002),N=function(e){var t;return(0,a.jsxs)(o.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,a.jsx)(o.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(t=e.tableOfContents)||void 0===t?void 0:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},O=function(e){var t=i.useContext(j.Il).bannerExpanded,n="72px",s="calc(100vh - 88px - ".concat(t?n:"0px",")"),r="calc(100vh - 88px - 105px - ".concat(t?n:"0px",")");return(0,a.jsxs)(o.xu,{minH:"100vh",children:[(0,a.jsx)(k,{children:"Skip to Main Content"}),(0,a.jsxs)(o.kC,{flexDir:"column",padding:"2",children:[(0,a.jsx)(v._g,{}),(0,a.jsx)(o.iz,{}),(0,a.jsx)(o.kC,{children:(0,a.jsx)(o.xu,{as:"main",w:"100%",mx:"auto",children:(0,a.jsxs)(o.xu,{display:{md:"flex"},children:[(0,a.jsx)(o.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:s,pr:"8",ml:"4",children:(0,a.jsx)(v.Hy,{})}),(0,a.jsxs)(o.xu,{flex:"1",minW:"0",overflow:"auto",maxH:s,children:[(0,a.jsxs)(o.xu,{minH:r,children:[(0,a.jsx)(x,{}),e.children]}),(0,a.jsx)(o.xu,{pt:"20",children:(0,a.jsx)(v.$_,{})})]}),e.tableOfContents&&(0,a.jsx)(N,{tableOfContents:e.tableOfContents})]})})})]})]})};function w(e){return function(t){return(0,a.jsxs)(O,{children:[(0,a.jsx)(s.default,{children:(0,a.jsxs)("title",{children:["Player - ",e.title]})}),(0,a.jsx)(o.kC,{alignItems:"center",children:(0,a.jsx)(o.W2,{maxW:"container.lg",children:(0,a.jsx)(r.Zo,{components:l.tl,children:t.children})})})]})}}},30326:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});n(2784);var a=n(30876),i=n(43857);function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={},r=(0,i.Z)({title:"TSX DSL",tableOfContents:[{text:"TSX/JSX Content Authoring",id:"tsxjsx-content-authoring",level:1},{text:"Writing JSX Content",id:"writing-jsx-content",level:2},{text:"Bindings and Expressions",id:"bindings-and-expressions",level:3},{text:"Assets/Views",id:"assetsviews",level:3},{text:"IDs",id:"ids",level:4},{text:"Collection/Text Creation",id:"collectiontext-creation",level:4},{text:"Templates",id:"templates",level:3},{text:"Switches",id:"switches",level:3},{text:"Navigation",id:"navigation",level:3},{text:"Schema",id:"schema",level:3},{text:"Arrays",id:"arrays",level:4},{text:"Changing the Name of a Generated Type",id:"changing-the-name-of-a-generated-type",level:4},{text:"Defining Data Types",id:"defining-data-types",level:4},{text:"Data Refs",id:"data-refs",level:5},{text:"Local Data Types",id:"local-data-types",level:5},{text:"What that Looks Like",id:"what-that-looks-like",level:5},{text:"Using the Schema Object in JSX/TSX Content",id:"using-the-schema-object-in-jsxtsx-content",level:4},{text:"Custom Assets",id:"custom-assets",level:3}]});function l(e){var t=e.components,n=s(e,["components"]);return(0,a.kt)(r,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",Object.assign({},{id:"tsxjsx-content-authoring"}),(0,a.kt)("a",Object.assign({parentName:"h1"},{href:"#tsxjsx-content-authoring"}),"TSX/JSX Content Authoring")),(0,a.kt)("p",null,"While Player content ",(0,a.kt)("em",{parentName:"p"},"can")," be written directly in JSON, it\u2019s not always the preferable authoring format. To take advantage of existing developer tool-chains, Player provides a mechanism for authoring content in (J/T)SX as React components. This is paired with a ",(0,a.kt)("inlineCode",{parentName:"p"},"cli")," to transpile the React tree into a JSON content."),(0,a.kt)("p",null,"One thing to note is that the paths in the input folder should match the expected paths in your config file. E.g if the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," option is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"topics"),", the source TSX/JSX files should be under a ",(0,a.kt)("inlineCode",{parentName:"p"},"topics")," directory in your input directory. Similarly if the schema option is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"topic_schema.json")," the ts file containing the schema object should be in the root directory and named ",(0,a.kt)("inlineCode",{parentName:"p"},"topic_schema.ts"),"."),(0,a.kt)("h2",Object.assign({},{id:"writing-jsx-content"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#writing-jsx-content"}),"Writing JSX Content")),(0,a.kt)("p",null,"In order to use the JSX-variant to write content, your asset library should ship a JSX component package to leverage. These will define the primitive ",(0,a.kt)("em",{parentName:"p"},"components")," to use to build up the tree."),(0,a.kt)("p",null,"In the examples below, we will assume one exists."),(0,a.kt)("h3",Object.assign({},{id:"bindings-and-expressions"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#bindings-and-expressions"}),"Bindings and Expressions")),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"expression")," in the JSX authoring leverages a tagged template, typically abbreviated as ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," respectively. In a similar fashion to using ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql")," in a JS file, this enables syntax-highlighting and validation of bindings and expressions within a JS file."),(0,a.kt)("p",null,"To create a binding, or expression:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { binding as b, expression as e } from '@player-tools/dsl';\n\nconst myBinding = b`foo.bar`;\nconst myExpression = e`foo()`;\n")),(0,a.kt)("p",null,"The binding and expression instances can also automatically dereference themselves when used inside of another string:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const stringWithBinding = `Some text: ${myBinding}`; // 'Some text: {{foo.bar}}'\nconst stringWithExp = `Some expr: ${myExpression}`; // 'Some expr: @[foo()]@'\n")),(0,a.kt)("h3",Object.assign({},{id:"assetsviews"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#assetsviews"}),"Assets/Views")),(0,a.kt)("p",null,"Writing assets or views is as simple as creating a React element:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { Input, Text, Collection } from 'my-assets';\n\nconst view = (\n  <Collection>\n    <Text>Some value</Text>\n    <Input>\n      <Input.Label>Some label</Input.Label>\n    </Input>\n  </Collection>\n);\n")),(0,a.kt)("p",null,"this would generate something similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "id": "root",\n  "type": "collection",\n  "values": [\n    {\n      "asset": {\n        "id": "root-values-1",\n        "type": "text",\n        "value": "Some value"\n      }\n    },\n    {\n      "asset": {\n        "id": "root-values-2",\n        "type": "input",\n        "label": {\n          "asset": {\n            "id": "root-values-2-label",\n            "type": "text",\n            "value": "Some label"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h4",Object.assign({},{id:"ids"}),(0,a.kt)("a",Object.assign({parentName:"h4"},{href:"#ids"}),"IDs")),(0,a.kt)("p",null,"Any asset can accept an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property (just like the JSON version), however ids will automatically be generated for assets missing them."),(0,a.kt)("h4",Object.assign({},{id:"collectiontext-creation"}),(0,a.kt)("a",Object.assign({parentName:"h4"},{href:"#collectiontext-creation"}),"Collection/Text Creation")),(0,a.kt)("p",null,"In the event that an asset object is expected, but a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," is found, Player will attempt to automatically create a text node, provided the asset-library has a text-asset-factory configured."),(0,a.kt)("p",null,"Similarly, if a single asset is expected but a list of them is found instead, Player will attempt to create a ",(0,a.kt)("em",{parentName:"p"},"collection")," asset provided the library has the proper configuration set."),(0,a.kt)("h3",Object.assign({},{id:"templates"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#templates"}),"Templates")),(0,a.kt)("p",null,"Templates are included via the ",(0,a.kt)("inlineCode",{parentName:"p"},"@player-tools/dsl")," package. This can be used in any asset slot:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { dataTypes } from '@player-ui/common-types-plugin';\nimport { makeBindingsForObject, Template } from '@player-tools/dsl';\n\nconst schema = {\n  foo: [{\n    bar: dataTypes.StringType,\n  }],\n};\n\nconst bindings = makeBindingsForObject(schema);\n\n<Collection>\n  <Collection.Values>\n    <Template data={bindings.foo}>\n      <Text>The current item is: {bindings.foo._index_.bar}</Text>\n    </Template>\n  </Collection.Values>\n</Collection>\n")),(0,a.kt)("p",null,"Templates can be nested within one another, and the auto-id generation will handle adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"_index_")," information to any generated ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("h3",Object.assign({},{id:"switches"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#switches"}),"Switches")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@player-tools/dsl")," module also includes support for ",(0,a.kt)("em",{parentName:"p"},"static")," and ",(0,a.kt)("em",{parentName:"p"},"dynamic")," switches."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"isDynamic")," flag to denote this should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamicSwitch")," instead of a ",(0,a.kt)("inlineCode",{parentName:"p"},"staticSwitch"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { Switch } from '@player-ui/dsl';\n\n<Collection>\n  <Collection.Label>\n    <Switch isDynamic>\n      <Switch.Case exp={e`foo() = bar()`}>\n        <Text>Text 1</Text>\n      </Switch.Case>\n      <Switch.Case>\n        <Text>Text 1</Text>\n      </Switch.Case>\n    </Switch>\n  </Collection.Label>\n</Collection>\n")),(0,a.kt)("h3",Object.assign({},{id:"navigation"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#navigation"}),"Navigation")),(0,a.kt)("p",null,"At this time the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," section is a basic JS object. The ",(0,a.kt)("inlineCode",{parentName:"p"},"@player-ui/types")," package provides typescript typings for these."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { Navigation, Schema } from '@player-ui/types';\n\nconst navigation: Navigation = {\n  BEGIN: 'Start',\n  Start: {\n    startState: 'VIEW_1',\n    VIEW_1: {\n      state_type: 'VIEW',\n      ref: 'view-1',\n      transitions: {\n        '*': 'END_Done',\n      },\n    },\n    END_Done: {\n      state_type: 'END',\n      outcome: 'done',\n    },\n  },\n};\n")),(0,a.kt)("h3",Object.assign({},{id:"schema"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#schema"}),"Schema")),(0,a.kt)("p",null,"To author a schema object you should first start by constructing a standard typescript object where the nested paths correlate to the paths on your desired schema. At the final conversion to a Player ",(0,a.kt)("inlineCode",{parentName:"p"},"Schema")," object during the serialization phase the intermediate types and ROOT elements will automatically be constructed. A basic example would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"const mySchema = {\n  foo: {\n    bar: {\n      baz: //somevalue\n      faz: //somevalue\n    }\n  }\n}\n")),(0,a.kt)("p",null,"which correlates to a schema of:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "ROOT": {\n    "foo": {\n      "type": "fooType"\n    }\n  },\n  "fooType": {\n    "bar": {\n      "type": "barType"\n    }\n  },\n  "barType": {\n    "baz": {\n      "type": ""\n    },\n    "faz": {\n      "type": ""\n    }\n  }\n}\n')),(0,a.kt)("h4",Object.assign({},{id:"arrays"}),(0,a.kt)("a",Object.assign({parentName:"h4"},{href:"#arrays"}),"Arrays")),(0,a.kt)("p",null,"A single object array can be used to indicate an array type, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"const mySchema = {\n  foo: [\n    {\n      bar: //some type\n    }\n  ]\n}\n")),(0,a.kt)("p",null,"will generate the schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "ROOT": {\n    "foo": {\n      "type": "fooType",\n      "isArray": true\n    }\n  },\n  "fooType": {\n    "bar": {\n      "type": "barType"\n    }\n  },\n  "barType": {\n    "baz": {\n      "type": ""\n    },\n    "faz": {\n      "type": ""\n    }\n  }\n}\n')),(0,a.kt)("h4",Object.assign({},{id:"changing-the-name-of-a-generated-type"}),(0,a.kt)("a",Object.assign({parentName:"h4"},{href:"#changing-the-name-of-a-generated-type"}),"Changing the Name of a Generated Type")),(0,a.kt)("p",null,"To change the name of the generated type at any point in the tree, import the ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaTypeName")," symbol from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@player-tools/dsl")," and use it as a key to change the name like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'const mySchema = {\n  foo: {\n    bar: {\n      [SchemaTypeName]: "buzz",\n      baz: //somevalue\n      faz: //somevalue\n    }\n  }\n}\n')),(0,a.kt)("h4",Object.assign({},{id:"defining-data-types"}),(0,a.kt)("a",Object.assign({parentName:"h4"},{href:"#defining-data-types"}),"Defining Data Types")),(0,a.kt)("p",null,"The leaf nodes of the data structure will need some concrete definition of what data exists at that point of the schema. There are two ways to provide this data."),(0,a.kt)("h5",Object.assign({},{id:"data-refs"}),(0,a.kt)("a",Object.assign({parentName:"h5"},{href:"#data-refs"}),"Data Refs")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"common-types-plugin")," package exposes the types it provides to Player when used and ",(0,a.kt)("em",{parentName:"p"},"references")," to those types as well. Using these ",(0,a.kt)("inlineCode",{parentName:"p"},"Language.DataTypeRef")," values you can indicate what the data type will be at that node and that it will be a type explicitly defined in the Player so no additional information needs to be provided (e.g. validations nor formats)"),(0,a.kt)("p",null,"Various plugins in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@cg-player")," scope also expose similar ",(0,a.kt)("inlineCode",{parentName:"p"},"DataTypeRef")," objects that include common tax types. For convenience the ",(0,a.kt)("inlineCode",{parentName:"p"},"@cg-player/components")," package reexports all the data references for one convenient import. It is important to note that there will be an issue if you use a ",(0,a.kt)("inlineCode",{parentName:"p"},"DataTypeRef")," from a plugin but run the content in a Player that doesn\u2019t have that plugin loaded."),(0,a.kt)("h5",Object.assign({},{id:"local-data-types"}),(0,a.kt)("a",Object.assign({parentName:"h5"},{href:"#local-data-types"}),"Local Data Types")),(0,a.kt)("p",null,"Sometimes you need to define specific data types that extend existing types for certain pieces of data in a schema, whether that be for specific validations, formatting or both. In this case, in your DSL project you can define an object of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Schema.DataType")," and provide that value to a leaf node. That will indicate that this unique type needs to be included in its entirety to Player as it has information not already contained in Player."),(0,a.kt)("h5",Object.assign({},{id:"what-that-looks-like"}),(0,a.kt)("a",Object.assign({parentName:"h5"},{href:"#what-that-looks-like"}),"What that Looks Like")),(0,a.kt)("p",null,"Using our previous example we can fill in the values with some types now to look like this in the ts object:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import { dataTypes } from '@player-ui/common-types-plugin';\nimport type { Schema } from '@player-ui/types';\n\nconst mycustombooleantype: Schema.DataType = {\n  type: \"BooleanType\",\n  validation: [\n    {\n      type: 'oneOf',\n      message: 'Value has to be true or false',\n      options: [true, false],\n    },\n  ],\n}\n\nconst mySchema = {\n  foo: {\n    bar: {\n      baz: BooleanTypeRef\n      faz: mycustombooleantype\n    }\n  }\n}\n\nexport default mySchema\n")),(0,a.kt)("p",null,"and like this in the final schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "ROOT":{\n    "foo":{\n      "type": "fooType"\n    }\n  },\n  "fooType":{\n    "bar": {\n      "type":"barType"\n    }\n  },\n  "barType":{\n    "baz":{\n      "type": "BooleanType"\n    },\n    "faz":{\n      "type": "BooleanType",\n      "validation": [\n        {\n          "type": "oneOf",\n          "message": "Value has to be true or false",\n          "options": [true, false],\n        },\n      ],\n    }\n  }\n}\n\nIt should be noted that unless the schema object is a default export the `schema.json` will not be created in the output folder.\n')),(0,a.kt)("h4",Object.assign({},{id:"using-the-schema-object-in-jsxtsx-content"}),(0,a.kt)("a",Object.assign({parentName:"h4"},{href:"#using-the-schema-object-in-jsxtsx-content"}),"Using the Schema Object in JSX/TSX Content")),(0,a.kt)("p",null,"There is one important function that enables us to use our schema object in content.",(0,a.kt)("inlineCode",{parentName:"p"},"makeBindingsForObject()")," takes your schema object and constructs the bindings opaquely so that you can use the native object path with functions like ",(0,a.kt)("inlineCode",{parentName:"p"},".toString()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".toValue()"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"toRefString()")," like you could with regular string template bindings."),(0,a.kt)("p",null,"Using these functions we can use the schema directly in content:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import { makeBindingsForObject } from \'@player-tools/dsl\';\n\nconst schema = makeBindingsForObject(mySchema)\n\nconst baz = schema.foo.bar.baz\n\nconst view = (\n  <Input applicability={isMfj} binding={baz}>\n    <Input.Label>\n      <Text>\n        The current value is {baz.toString()}\n      </Text>\n    </Input.Label>\n  </Input>\n)\n\nconst validations = [\n  {\n    type: "requiredIf",\n    ref: baz.toRefString(),\n    message: "This is required",\n  },\n];\n\nconst navigation = {...}\n\nexport default {\n  id: "example-topic",\n  topic: "exampletopic",\n  views: [view],\n  navigation,\n};\n\n')),(0,a.kt)("h3",Object.assign({},{id:"custom-assets"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#custom-assets"}),"Custom Assets")),(0,a.kt)("p",null,"If you need to make use of a custom asset or an asset that is in Player but not yet implemented in the Player DSL there are a couple of ways you can do this."),(0,a.kt)("p",null,"Define Asset"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"const customAsset = {\n  asset: {\n    id: 'id',\n    type: 'custom', (use the type of the asset you want to use)\n    ...\n  }\n}\n")),(0,a.kt)("p",null,"Pass asset into an existing asset"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{}),"<Input label={customAsset} binding={b`test`}/>\n")),(0,a.kt)("p",null,"Pass asset in as child"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Notification.Title>\n  <obj>{toJsonProperties(customAsset)}</obj>\n</Notification.Title>\n")),(0,a.kt)("p",null,"OR"),(0,a.kt)("p",null,"You can create an Asset using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Asset>")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@player-tools/dsl"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Asset id={"foo"} type={\'foo\'} foo={"bar"} ... />\n')))}l.isMDXComponent=!0}},function(e){e.O(0,[6525,7882,3832,9774,2888,179],(function(){return t=66443,e(e.s=t);var t}));var t=e.O();_N_E=t}]);