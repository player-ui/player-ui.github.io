"use strict";(self.webpackChunk_player_ui_docs=self.webpackChunk_player_ui_docs||[]).push([[9324],{83190:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>m});var t=a(52112);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return a?t.createElement(m,i(i({ref:n},p),{},{components:a})):t.createElement(m,i({ref:n},p))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19324:(e,n,a)=>{a.r(n),a.d(n,{default:()=>p});a(52112);var t=a(83190),o=a(60742);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}const i=(r="PlatformTabs",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)});var r;const s={},c=(0,o.A)({title:"Beacon Plugin",platform:"core,react,ios,android",tableOfContents:[{text:"Beacon Plugin",id:"beacon-plugin",level:1},{text:"Consuming Beacons",id:"consuming-beacons",level:2},{text:"Beacon Format",id:"beacon-format",level:3},{text:"Usage",id:"usage",level:2},{text:"CocoaPods",id:"cocoapods",level:3},{text:"Swift Usage",id:"swift-usage",level:3},{text:"Beacon Plugins",id:"beacon-plugins",level:3},{text:"Publishing Beacons",id:"publishing-beacons",level:2},{text:"beacon expression",id:"beacon-expression",level:4},{text:"Assets",id:"assets",level:3},{text:"useBeacon hook",id:"usebeacon-hook",level:4}]});function p(e){let{components:n,...a}=e;return(0,t.yg)(c,l({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"beacon-plugin"},(0,t.yg)("a",{parentName:"h1",href:"#beacon-plugin"},"Beacon Plugin")),(0,t.yg)("p",null,"The beacon plugin enables users to send and/or collect beaconing information from assets in a normalized API. It exposes a common API for publishing beacons from an asset library, and will automatically attach itself to the current view, enabling additional meta-data to be added to each event. "),(0,t.yg)("h2",{id:"consuming-beacons"},(0,t.yg)("a",{parentName:"h2",href:"#consuming-beacons"},"Consuming Beacons")),(0,t.yg)("h3",{id:"beacon-format"},(0,t.yg)("a",{parentName:"h3",href:"#beacon-format"},"Beacon Format")),(0,t.yg)("p",null,"By default, the beacon plugin returns beacons in the following format:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"interface DefaultBeacon {\n  /** The user action taken ('clicked', 'visited') **/\n  action: string; \n\n  /** The type of UI element interacted with ('button', 'menu') **/\n  element: string;\n\n  /** Any additional data from a `metaData.beacon` property **/\n  data: any;\n\n  /** The id of the asset **/\n  assetId: string;\n\n  /** The id of the view **/\n  viewId: string;\n}\n")),(0,t.yg)("h2",{id:"usage"},(0,t.yg)("a",{parentName:"h2",href:"#usage"},"Usage")),(0,t.yg)(i,{mdxType:"PlatformTabs"},(0,t.yg)("core",null,(0,t.yg)("p",null,"Add the beacon plugin to a player:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"import { Player } from '@player-ui/player';\nimport { BeaconPlugin } from '@player-ui/beacon-plugin';\n\nconst player = new Player({\n  plugins: [\n    new BeaconPlugin({\n\n      // Any plugins to the beacon-plugin\n      plugins: [],\n\n      // Callback to handle any beacon event\n      callback: () => {}\n    }),\n  ],\n});\n")),(0,t.yg)("p",null,"Beacons can be published directly by the plugin, but in most cases, a platform specific adapter is recommended."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"beaconPlugin.beacon({\n  action: 'click',\n  element: 'button',\n  asset: asset // The entire Asset object, for use in the plugin pipeline\n  // other metadata\n});\n"))),(0,t.yg)("react",null,(0,t.yg)("p",null,"Just like with the ",(0,t.yg)("em",{parentName:"p"},"core")," variant, to add support for beaconing in the ",(0,t.yg)("inlineCode",{parentName:"p"},"react")," player, add the plugin to Player:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"import { ReactPlayer } from '@player-ui/react';\nimport { BeaconPlugin } from '@player-ui/beacon-plugin-react';\n\nconst player = new ReactPlayer({\n  plugins: [\n    new BeaconPlugin({\n\n      // Any plugins to the beacon-plugin\n      plugins: [],\n\n      // Callback to handle any beacon event\n      callback: () => {}\n    }),\n  ],\n});\n")),(0,t.yg)("p",null,"This will add additional React Context to the running player for the producers from asset-libraries to leverage.")),(0,t.yg)("ios",null,(0,t.yg)("h3",{id:"cocoapods"},(0,t.yg)("a",{parentName:"h3",href:"#cocoapods"},"CocoaPods")),(0,t.yg)("p",null,"Add the subspec to your ",(0,t.yg)("inlineCode",{parentName:"p"},"Podfile")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ruby"},"pod 'PlayerUI/BeaconPlugin'\n")),(0,t.yg)("h3",{id:"swift-usage"},(0,t.yg)("a",{parentName:"h3",href:"#swift-usage"},"Swift Usage")),(0,t.yg)("p",null,"To receive Beacon events from Player in iOS, add the ",(0,t.yg)("inlineCode",{parentName:"p"},"BeaconPlugin")," to your plugin array:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-swift"},"var body: some View {\n  SwiftUIPlayer(\n    flow: flow,\n    plugins: [\n      BeaconPlugin<DefaultBeacon> { (beacon: DefaultBeacon) in\n                // Process beacon into the format you need for your analytics platform\n            }\n    ]\n  )\n}\n")),(0,t.yg)("p",null,"If you are modifying the beacon using core ",(0,t.yg)("inlineCode",{parentName:"p"},"BeaconPlugin")," plugins:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-swift"},'struct CustomBeacon: Decodable {\n  public var action: String\n  public var element: String\n  public var customElement: Int\n}\n\nclass CustomBeaconPlugin: JSBasePlugin {\n  convenience init() {\n    self.init(fileName: "custom-beacon", pluginName: "CustomBeaconPlugin")\n  }\n  override open func getUrlForFile(fileName: String) -> URL? {\n        ResourceUtilities.urlForFile(\n          name: fileName,\n          ext: "js",\n          bundle: Bundle(for: <YourMainPodClass>.self),\n          pathComponent: "<YourResourceBundleName>.bundle"\n        )\n    }\n}\n\n// In some SwiftUI View\nvar body: some View {\n  SwiftUIPlayer(\n    flow: flow,\n    plugins: [\n      BeaconPlugin<CustomBeacon> { (beacon: CustomBeacon) in\n                // Process beacon into the format you need for Segment/Trinity and send it on\n            }\n    ]\n  )\n}\n'))),(0,t.yg)("android",null,(0,t.yg)("p",null,"Beaconing on the JVM platform (including Android) is done with an instance of the ",(0,t.yg)("inlineCode",{parentName:"p"},"BeaconPlugin"),". By default, the Android Player includes a wrapper of the core beacon plugin. The Android Player can be configured to override the default BeaconPlugin by passing a different BeaconPlugin implementation on instantiation which can contain further configuration."),(0,t.yg)("p",null,"Without additional configuration, the BeaconPlugin doesn’t provide much value. Beacons must be explicitly handled in order to forward them to an analytics platform (segment, Trinity, etc.). This is done by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"registerHandler(handler: (String) -> Unit)")," with a callback."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-kotlin"},"val beaconPlugin = BeaconPlugin()\nbeaconPlugin.registerHandler { beacon: String ->\n    // Process beacon and send to analytics platform\n}\n")),(0,t.yg)("p",null,"There may be some beacons that are fired automatically by the BeaconPlugin implementation, but in most cases, there are additional beacons that should be fired on some interaction (i.e. user tapping button asset). This is done by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"beacon(action: String, element: String, asset: Asset, data: Any? = null)")," with the relevant information."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-kotlin"},'val beaconPlugin = BeaconPlugin()\nbeaconPlugin.beacon(\n    "clicked",\n    "button",\n    assetThatIsBeaconing,\n    someData,\n)\n')),(0,t.yg)("p",null,"For convenience, there are several extension methods for utilizing a pre-installed BeaconPlugin from Player. If there isn’t a BeaconPlugin installed, Player will produce a warning log."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-kotlin"},'// registering handler\nandroidPlayer.onBeacon { beacon: String ->\n    // Process beacon and send to analytics platform\n}\n\n// fire beacon\nandroidPlayer.beacon(\n    "clicked",\n    "button",\n    assetThatIsBeaconing,\n    someData,\n)\n')),(0,t.yg)("p",null,"The base ",(0,t.yg)("inlineCode",{parentName:"p"},"RenderableAsset")," class provides an additional helper to make beaconing less verbose from an asset perspective."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/player-ui/player/blob/2a2110caf87ab752207c82ec9ab8ce72316d20f5/android/player/src/main/java/com/intuit/player/android/asset/RenderableAsset.kt#L253"},"Helper in RenderableAsset")))),(0,t.yg)("h3",{id:"beacon-plugins"},(0,t.yg)("a",{parentName:"h3",href:"#beacon-plugins"},"Beacon Plugins")),(0,t.yg)("p",null,"Similar to how Player accepts plugins, the beacon-plugin itself accepts a list of plugins. These are able to mutate and augment the beacon payload as it makes its way through the publishing pipeline. "),(0,t.yg)("p",null,"There are 3 hooks that are currently exposed:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"buildBeacon")," - Assembles a given beacon ffor publishing"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"cancelBeacon")," - Given a current beacon, determine if it should be published or not."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"publishBeacon")," - Receive the final becaon. This is a substitute for the ",(0,t.yg)("inlineCode",{parentName:"li"},"callback")," in the beacon plugin options.")),(0,t.yg)("h2",{id:"publishing-beacons"},(0,t.yg)("a",{parentName:"h2",href:"#publishing-beacons"},"Publishing Beacons")),(0,t.yg)("h4",{id:"beacon-expression"},(0,t.yg)("a",{parentName:"h4",href:"#beacon-expression"},"beacon expression")),(0,t.yg)("p",null,"The beacon plugin adds support for a ",(0,t.yg)("inlineCode",{parentName:"p"},"beacon")," expression that can be referenced within content. Each beacon referenced from this expression will be assumed to originate from a ",(0,t.yg)("inlineCode",{parentName:"p"},"view")," (no local asset information will be attached)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "asset": {\n    "id": "my-action",\n    "type": "action",\n    "exp": "beacon(\'my-action\', \'some-data\')"\n  }\n}\n')),(0,t.yg)("h3",{id:"assets"},(0,t.yg)("a",{parentName:"h3",href:"#assets"},"Assets")),(0,t.yg)(i,{mdxType:"PlatformTabs"},(0,t.yg)("react",null,(0,t.yg)("h4",{id:"usebeacon-hook"},(0,t.yg)("a",{parentName:"h4",href:"#usebeacon-hook"},"useBeacon hook")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"@player-ui/beacon-plugin-react")," package exports a hook that assets can leverage to publish beacons. "),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"useBeacon")," hook takes base options that apply broadly, and returns a function with those options as the base. You can then pass event specific information when calling ",(0,t.yg)("inlineCode",{parentName:"p"},"beacon"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},"import { useBeacon } from '@player-ui/beacon-plugin-react';\n\n// inside of your asset\nexport const Component = (props) => {\n  const beacon = useBeacon({ action: 'clicked', asset: props });\n\n  return (\n    <button\n      onClick={() =>\n        beacon({\n          element: 'button',\n          data: {\n            custom: 'fields',\n          },\n        })\n      }\n    >\n      Click Me\n    </button>\n  );\n};\n"))),(0,t.yg)("ios",null,(0,t.yg)("p",null,"The SwiftUIBeaconPlugin attaches a BeaconContext to the root of the SwiftUI view tree as an environment value, so when included any asset can use that context to send a beacon, if the context is in the environment:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-swift"},'struct ActionAssetView: View {\n  @ObservedObject var viewModel: AssetViewModel<ActionData>\n  @Environment(\\.beaconContext) var beaconContext: // implicitly typed as -> BeaconContext?\n  var body: some View {\n    Button(action: {beaconContext?.beacon(action: "clicked", element: "button", id: model.data.id)}, label : {...})\n  }\n}\n'))),(0,t.yg)("android",null,(0,t.yg)("p",null,"  Using the base ",(0,t.yg)("inlineCode",{parentName:"p"},"RenderableAsset"),"’s helper function in this example fires off a basic beacon with no adjustment to format as well as empty data upon button click"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-kotlin"},"class MyAsset(assetContext: AssetContext) :\n    DecodableAsset<>(assetContext, Data.serializer()) {\n\n    @Serializable\n    data class Data(\n      ...\n    ) : AssetData()\n\n    override fun createView(): View {\n      ...\n    }\n\n    override fun View.hydrate() {\n        val binding = MyCustomViewBinding.bind(this)\n        binding.button.setOnClickListener {\n          this@MyAsset.beacon(\n            action = BeaconAction.clicked,\n            element = BeaconElement.button,\n            asset = this@MyAsset,\n            data = null\n          )\n        }\n        ...\n    }\n}\n")))),(0,t.yg)("hr",null),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.dev/player-ui/player/blob/main/docs/site/pages/plugins/beacon.mdx"},"Help to improve this page")))}p.isMDXComponent=!0},60742:(e,n,a)=>{a.d(n,{A:()=>B});var t=a(52112),o=a(9495),l=a(32532),i=a(83190),r=a(48884),s=a(90283),c=a(14769),p=a(63420),u=a(23013),g=a(47482),d=a(52947),m=a(4380),y=a(13516),b="chakra-skip-nav";function h(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var f=(0,u.R)((function(e,n){const a=(0,g.Vl)("SkipLink",e),{id:t=b,...o}=(0,d.MN)(e);return(0,y.jsx)(m.B.a,{...o,ref:n,href:`#${t}`,__css:h(a)})}));f.displayName="SkipNavLink";var v=(0,u.R)((function(e,n){const{id:a=b,...t}=e;return(0,y.jsx)(m.B.div,{ref:n,id:a,tabIndex:-1,style:{outline:0},...t})}));v.displayName="SkipNavContent";var w=a(67435),x=a(63192);const N=e=>t.createElement(s.az,{display:{base:"none",xl:"block"}},"Table Of Contents",t.createElement(c._J,{spacing:1,ml:"0",mt:"4",styleType:"none"},e.tableOfContents?.map((e=>t.createElement("li",{key:e.text},t.createElement("a",{href:`#${e.id}`},e.text)))))),P=e=>{const{bannerExpanded:n}=t.useContext(w.BR),a="72px",l=`calc(100vh - 88px - ${n?a:"0px"})`,i=`calc(100vh - 88px - 105px - ${n?a:"0px"})`;return t.createElement(s.az,{minH:"100vh"},t.createElement(f,null,"Skip to Main Content"),t.createElement(o.s,{flexDir:"column",padding:"2"},t.createElement(x.IS,null),t.createElement(p.c,null),t.createElement(o.s,null,t.createElement(s.az,{as:"main",w:"100%",mx:"auto"},t.createElement(s.az,{display:{md:"flex"}},t.createElement(s.az,{display:{base:"none",md:"block"},overflow:"auto",maxH:l,pr:"8",ml:"4"},t.createElement(x.E1,null)),t.createElement(s.az,{flex:"1",minW:"0",overflow:"auto",maxH:l},t.createElement(s.az,{minH:i},t.createElement(v,null),e.children),t.createElement(s.az,{pt:"20"},t.createElement(x.wi,null))),e.tableOfContents&&t.createElement(N,{tableOfContents:e.tableOfContents}))))))};function B(e){return e=>t.createElement(P,null,t.createElement(o.s,{alignItems:"center"},t.createElement(l.m,{maxW:"container.lg"},t.createElement(i.xA,{components:r.Ul},e.children))))}}}]);
//# sourceMappingURL=9324.9e0db48a7bc4373ca9c6.js.map