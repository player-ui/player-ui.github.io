"use strict";(self.webpackChunkstorybook_docs=self.webpackChunkstorybook_docs||[]).push([[430],{"../../node_modules/.aspect_rules_js/raw-loader@4.0.2_524060777/node_modules/raw-loader/dist/cjs.js!../../node_modules/.aspect_rules_js/@player-ui+mocks@0.0.0/node_modules/@player-ui/mocks/text/text-basic.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='import React from "react";\nimport {\n  Collection,\n  Text,\n} from "@player-ui/reference-assets-plugin-components";\nimport type { DSLFlow } from "@player-tools/dsl";\n\nconst view1 = (\n  <Collection>\n    <Collection.Values>\n      <Text>This is some text</Text>\n      <Text\n        modifiers={[\n          {\n            type: "link",\n            metaData: {\n              ref: "https://www.intuit.com",\n            },\n          },\n        ]}\n      >\n        This is some text that is a link\n      </Text>\n    </Collection.Values>\n  </Collection>\n);\n\nconst flow: DSLFlow = {\n  id: "text-basic",\n  views: [view1],\n  navigation: {\n    BEGIN: "FLOW_1",\n    FLOW_1: {\n      startState: "VIEW_1",\n      VIEW_1: {\n        state_type: "VIEW",\n        ref: view1,\n        transitions: {\n          "*": "END_Done",\n        },\n      },\n      END_Done: {\n        state_type: "END",\n        outcome: "DONE",\n      },\n    },\n  },\n};\n\nexport default flow;\n'}}]);