"use strict";(self.webpackChunk_player_ui_docs=self.webpackChunk_player_ui_docs||[]).push([[6783],{83190:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>m});var t=a(52112);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(a),u=r,m=g["".concat(s,".").concat(u)]||g[u]||y[u]||l;return a?t.createElement(m,i(i({ref:n},d),{},{components:a})):t.createElement(m,i({ref:n},d))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26783:(e,n,a)=>{a.r(n),a.d(n,{default:()=>s});a(52112);var t=a(83190),r=a(21525);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}const i={},o=(0,r.A)({title:"Data & Expressions",tableOfContents:[{text:"Data",id:"data",level:1},{text:"Bindings",id:"bindings",level:2},{text:"Query Syntax",id:"query-syntax",level:3},{text:"Nested Bindings",id:"nested-bindings",level:3},{text:"Nested Expressions",id:"nested-expressions",level:3},{text:"Expressions",id:"expressions",level:1},{text:"Using Expressions and Data in a View",id:"using-expressions-and-data-in-a-view",level:2},{text:"Using Expressions for Inline Text Formatting",id:"using-expressions-for-inline-text-formatting",level:2},{text:"Built-in Expressions",id:"built-in-expressions",level:2},{text:"Examples",id:"examples",level:3},{text:"getDataVal",id:"getdataval",level:4},{text:"setDataVal",id:"setdataval",level:4},{text:"deleteDataVal",id:"deletedataval",level:4},{text:"conditional",id:"conditional",level:4}]});function s(e){let{components:n,...a}=e;return(0,t.yg)(o,l({},i,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"data"},(0,t.yg)("a",{parentName:"h1",href:"#data"},"Data")),(0,t.yg)("p",null,"Data is central to a lot of the functionality and features of Player. The easiest way to deal with data is to supply it in the initial payload when starting a flow. This will ",(0,t.yg)("em",{parentName:"p"},"seed")," the model with data and allow you to easily reference values"),(0,t.yg)("h2",{id:"bindings"},(0,t.yg)("a",{parentName:"h2",href:"#bindings"},"Bindings")),(0,t.yg)("p",null,"A binding is a representation of a path within the data-model. In simple terms, it’s a dot (",(0,t.yg)("inlineCode",{parentName:"p"},"."),") separated string showing the path of the properties within the data object."),(0,t.yg)("p",null,"Given the following data model:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'data: {\n  foo: {\n    bar: {\n      baz: "hello world!"\n    },\n    array: [\n      {\n        property: "another value"\n      }\n    ]\n  },\n}\n')),(0,t.yg)("p",null,"Then the binding ",(0,t.yg)("inlineCode",{parentName:"p"},"foo.bar.baz")," will reference the value ",(0,t.yg)("inlineCode",{parentName:"p"},'"hello world!"'),". Assets that write data to the data model would overwrite ",(0,t.yg)("inlineCode",{parentName:"p"},'"hello world"')," when setting to that binding. Using brackets instead of the dot-notation is accepted, similar to accessig properties in real Javascript objects. Unlike Javascript, when using the bracket-notation, surrounding quotes are only required if you need a literal ",(0,t.yg)("inlineCode",{parentName:"p"},"[")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"]")," in your property name."),(0,t.yg)("p",null,"The following bindings are all equivalent:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"foo.bar.baz")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"foo['bar'][\"baz\"]")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"foo[bar].baz"))),(0,t.yg)("p",null,"For most bindings, it is recommended to use the dot-notation for all properties when possible. Doing so is consistent, simpler, and the most performant."),(0,t.yg)("p",null,"Note that you can also use integers to access into arrays in the data model. ",(0,t.yg)("inlineCode",{parentName:"p"},"foo.bar.array.0.property")," will reference ",(0,t.yg)("inlineCode",{parentName:"p"},'"another value"'),"."),(0,t.yg)("h3",{id:"query-syntax"},(0,t.yg)("a",{parentName:"h3",href:"#query-syntax"},"Query Syntax")),(0,t.yg)("p",null,"Bindings also allow for query access into arrays using a ",(0,t.yg)("inlineCode",{parentName:"p"},"key"),"/",(0,t.yg)("inlineCode",{parentName:"p"},"value")," pair to find the first matching item in the array."),(0,t.yg)("p",null,"The query syntax takes the form ",(0,t.yg)("inlineCode",{parentName:"p"},"array[key=value]"),". Where ",(0,t.yg)("inlineCode",{parentName:"p"},"key")," is the property name you want to compare and ",(0,t.yg)("inlineCode",{parentName:"p"},"value")," is the value you want to match against. The binding resolves to the first item in the array that has a matching property and value."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"data: {\n  model: {\n    array: [\n      {\n        name: 'alpha',\n        foo: 'bar',\n      },\n      {\n        name: 'bravo',\n        foo: 'baz',\n      },\n      {\n        name: 'charlie',\n        foo: 'qux',\n      },\n    ];\n  }\n}\n")),(0,t.yg)("p",null,"For the given data, the following bindings are all equivalent and will point to the first element in the array:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"model.array[0]")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'model.array[name="alpha"]')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'model.array[foo="bar"]'))),(0,t.yg)("p",null,"Quotes around the key or the value of the query are only required when needing to use ambiguous literal characters, such as ",(0,t.yg)("inlineCode",{parentName:"p"},"["),", ",(0,t.yg)("inlineCode",{parentName:"p"},"]"),", or ",(0,t.yg)("inlineCode",{parentName:"p"},"="),"."),(0,t.yg)("p",null,"Note that the query syntax resolves to the object of the matching query, not to any specific property on the object. If you want to access a specific property, add additional path information after the query. E.g., ",(0,t.yg)("inlineCode",{parentName:"p"},"model.array[name=bravo].name"),"."),(0,t.yg)("h3",{id:"nested-bindings"},(0,t.yg)("a",{parentName:"h3",href:"#nested-bindings"},"Nested Bindings")),(0,t.yg)("p",null,"Nested bindings allow you to construct a binding path that is relative to a 2nd path or based on some dynamic property. This behavior follows similar model lookup rules that can be used elsewhere in Player."),(0,t.yg)("p",null,"The syntax for a nested binding is a subpath that is wrapped in double curly braces. E.g., ",(0,t.yg)("inlineCode",{parentName:"p"},"normal.path.{{nested.path}}.more.normal.path"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'data: {\n  colors: {\n    yellow: {\n      hex: "#ffff00"\n      rgb: "rgb(255, 255, 0)"\n    },\n    red: {\n      hex: "#ff0000",\n      rgb: "rgb(255, 0, 0)"\n    }\n  },\n  favorites: {\n    color: "yellow",\n    food: "tacos",\n    nestedPath: "colors.yellow"\n  }\n}\n')),(0,t.yg)("p",null,"With this data model, ",(0,t.yg)("inlineCode",{parentName:"p"},"colors.{{favorite.color}}.hex")," will return the hex value for yellow, ",(0,t.yg)("inlineCode",{parentName:"p"},'"#ffff00"'),". Any syntax for a regular binding is also valid as part of a nested binding, including further nesting."),(0,t.yg)("p",null,"References to bindings that contains sub-paths ",(0,t.yg)("inlineCode",{parentName:"p"},"{{favorite.nestedPath}}.hex")," will expand to ",(0,t.yg)("inlineCode",{parentName:"p"},"colors.yellow.hex"),"."),(0,t.yg)("h3",{id:"nested-expressions"},(0,t.yg)("a",{parentName:"h3",href:"#nested-expressions"},"Nested Expressions")),(0,t.yg)("p",null,"Just like binding segments can contain other bindings, segments can also contain expressions. For this, they use a segment surrounded by `:"),(0,t.yg)("p",null,"Suppose there exists a ",(0,t.yg)("inlineCode",{parentName:"p"},"getFavoriteColor()")," expression that returns ",(0,t.yg)("inlineCode",{parentName:"p"},"yellow"),". The following path would resolve to ",(0,t.yg)("inlineCode",{parentName:"p"},"colors.yellow.hex"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"colors.`getFavoriteColor()`.hex\n")),(0,t.yg)("p",null,"Similar to the bracket notation: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),". Paths can use brackets instead of dots for paths:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"colors[`getFavoriteColor()`].hex\n")),(0,t.yg)("h1",{id:"expressions"},(0,t.yg)("a",{parentName:"h1",href:"#expressions"},"Expressions")),(0,t.yg)("p",null,"Expressions are callable functions that allow for dynamic behavior of Player and it’s views."),(0,t.yg)("p",null,"These functions can be used in ",(0,t.yg)("inlineCode",{parentName:"p"},"ACTION")," nodes in the navigation section, calculated values in a property of an asset, or anywhere else expressions are valid."),(0,t.yg)("p",null,"Check out the ",(0,t.yg)("a",{parentName:"p",href:"../plugins/expression"},"Expression Plugin")," for registering custom functions."),(0,t.yg)("h2",{id:"using-expressions-and-data-in-a-view"},(0,t.yg)("a",{parentName:"h2",href:"#using-expressions-and-data-in-a-view"},"Using Expressions and Data in a View")),(0,t.yg)("p",null,"Expressions in the view are strings wrapped in: ",(0,t.yg)("inlineCode",{parentName:"p"},"@[")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"]@"),"."),(0,t.yg)("p",null,"For instance, to call a ",(0,t.yg)("inlineCode",{parentName:"p"},"sum")," expression you may use:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "value": "The sum is @[ sum(1, 2, 3) ]@ dollars"\n}\n')),(0,t.yg)("p",null,"Player will handle resolving that value into the proper string before handing it to the UI layers to render. (",(0,t.yg)("inlineCode",{parentName:"p"},'{ "value": "The sum is 6 dollars" }'),")"),(0,t.yg)("p",null,"If an expression is the sole property value:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "value": "@[ sum(1, 2, 3) ]@"\n}\n')),(0,t.yg)("p",null,"The ",(0,t.yg)("em",{parentName:"p"},"raw")," value of the expression will replace that property rather than being wrapped in a string: ",(0,t.yg)("inlineCode",{parentName:"p"},'{ "value": 6 }')),(0,t.yg)("p",null,"Data is referenced by wrapping the binding in ",(0,t.yg)("inlineCode",{parentName:"p"},"{{")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"}}"),". This can be used in an expression: ",(0,t.yg)("inlineCode",{parentName:"p"},"@[ {{foo.bar}} + {{foo.baz}} ]@")," or within a string: ",(0,t.yg)("inlineCode",{parentName:"p"},'{ "value": "Hello {{foo.name}}" }')),(0,t.yg)("p",null,"Similar to expressions, any property only consisting of a data value lookup, will get replaced by the raw value."),(0,t.yg)("h2",{id:"using-expressions-for-inline-text-formatting"},(0,t.yg)("a",{parentName:"h2",href:"#using-expressions-for-inline-text-formatting"},"Using Expressions for Inline Text Formatting")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"format")," expression is used to replace provided value with appropriate format.\nFor instance, to format a number into ",(0,t.yg)("inlineCode",{parentName:"p"},"currency"),", you may use:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},"{\n  \"value\": \"Total amount is: @[ format('12122016', 'currency') ]@\"\n}\n")),(0,t.yg)("p",null,"To see the list of currently supported format types, check out ",(0,t.yg)("a",{parentName:"p",href:"../plugins/common-types.md"},"Common Types Plugin"),"."),(0,t.yg)("h2",{id:"built-in-expressions"},(0,t.yg)("a",{parentName:"h2",href:"#built-in-expressions"},"Built-in Expressions")),(0,t.yg)("p",null,"There are a few expressions built into Player. These are pretty basic, so if you’re looking for extend this — check out the ",(0,t.yg)("a",{parentName:"p",href:"../plugins/common-expressions"},"Common Expressions Plugin")," or the ",(0,t.yg)("a",{parentName:"p",href:"../plugins/expression"},"Expression Plugin")," to add more."),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"name"),(0,t.yg)("th",{parentName:"tr",align:null},"description"),(0,t.yg)("th",{parentName:"tr",align:null},"arguments"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"getDataVal")),(0,t.yg)("td",{parentName:"tr",align:null},"Fetches a value from the model. This is equivalent to using the ",(0,t.yg)("inlineCode",{parentName:"td"},"{{foo.bar}}")," syntax."),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"binding"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"setDataVal")),(0,t.yg)("td",{parentName:"tr",align:null},"Sets a value from the model. This is equivalent to using ",(0,t.yg)("inlineCode",{parentName:"td"},"{{foo.bar}} = 'value'")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"binding"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"value"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"deleteDataVal")),(0,t.yg)("td",{parentName:"tr",align:null},"Clears a value from the model."),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"binding"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"conditional")),(0,t.yg)("td",{parentName:"tr",align:null},"Execute expressions, or return data based on an expression condition"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"condition"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"valueIfTrue"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"valueIfFalse"))))),(0,t.yg)("h3",{id:"examples"},(0,t.yg)("a",{parentName:"h3",href:"#examples"},"Examples")),(0,t.yg)("h4",{id:"getdataval"},(0,t.yg)("a",{parentName:"h4",href:"#getdataval"},(0,t.yg)("inlineCode",{parentName:"a"},"getDataVal"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "value": "Hello @[getDataVal(\'user.name\')]@"\n}\n')),(0,t.yg)("h4",{id:"setdataval"},(0,t.yg)("a",{parentName:"h4",href:"#setdataval"},(0,t.yg)("inlineCode",{parentName:"a"},"setDataVal"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},"{\n  \"exp\": \"setDataVal('user.name', 'Test User')\"\n}\n")),(0,t.yg)("h4",{id:"deletedataval"},(0,t.yg)("a",{parentName:"h4",href:"#deletedataval"},(0,t.yg)("inlineCode",{parentName:"a"},"deleteDataVal"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "exp": "deleteDataVal(\'user.name\')"\n}\n')),(0,t.yg)("h4",{id:"conditional"},(0,t.yg)("a",{parentName:"h4",href:"#conditional"},(0,t.yg)("inlineCode",{parentName:"a"},"conditional"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},"{\n  \"value\": \"It is @[ conditional({{foo.bar}} == 'DAY', 'daytime', 'nighttime') ]@.\"\n}\n")),(0,t.yg)("hr",null),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.dev/player-ui/player/blob/main/docs/site/pages/content/data-expressions.mdx"},"Help to improve this page")))}s.isMDXComponent=!0},21525:(e,n,a)=>{a.d(n,{A:()=>E});var t=a(52112),r=a(9495),l=a(32532),i=a(83190),o=a(37766),s=a(90283),p=a(14769),d=a(63420),g=a(23013),y=a(47482),u=a(52947),m=a(53868),c=a(13516),h="chakra-skip-nav";function f(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var N=(0,g.R)((function(e,n){const a=(0,y.Vl)("SkipLink",e),{id:t=h,...r}=(0,u.MN)(e);return(0,c.jsx)(m.B.a,{...r,ref:n,href:`#${t}`,__css:f(a)})}));N.displayName="SkipNavLink";var b=(0,g.R)((function(e,n){const{id:a=h,...t}=e;return(0,c.jsx)(m.B.div,{ref:n,id:a,tabIndex:-1,style:{outline:0},...t})}));b.displayName="SkipNavContent";var x=a(43298),v=a(2063);const w=e=>t.createElement(s.az,{display:{base:"none",xl:"block"}},"Table Of Contents",t.createElement(p._J,{spacing:1,ml:"0",mt:"4",styleType:"none"},e.tableOfContents?.map((e=>t.createElement("li",{key:e.text},t.createElement("a",{href:`#${e.id}`},e.text)))))),C=e=>{const{bannerExpanded:n}=t.useContext(x.BR),a="72px",l=`calc(100vh - 88px - ${n?a:"0px"})`,i=`calc(100vh - 88px - 105px - ${n?a:"0px"})`;return t.createElement(s.az,{minH:"100vh"},t.createElement(N,null,"Skip to Main Content"),t.createElement(r.s,{flexDir:"column",padding:"2"},t.createElement(v.IS,null),t.createElement(d.c,null),t.createElement(r.s,null,t.createElement(s.az,{as:"main",w:"100%",mx:"auto"},t.createElement(s.az,{display:{md:"flex"}},t.createElement(s.az,{display:{base:"none",md:"block"},overflow:"auto",maxH:l,pr:"8",ml:"4"},t.createElement(v.E1,null)),t.createElement(s.az,{flex:"1",minW:"0",overflow:"auto",maxH:l},t.createElement(s.az,{minH:i},t.createElement(b,null),e.children),t.createElement(s.az,{pt:"20"},t.createElement(v.wi,null))),e.tableOfContents&&t.createElement(w,{tableOfContents:e.tableOfContents}))))))};function E(e){return e=>t.createElement(C,null,t.createElement(r.s,{alignItems:"center"},t.createElement(l.m,{maxW:"container.lg"},t.createElement(i.xA,{components:o.Ul},e.children))))}}}]);
//# sourceMappingURL=6783.1e883692a27c6d6b2741.js.map