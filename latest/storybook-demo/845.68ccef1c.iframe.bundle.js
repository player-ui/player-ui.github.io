"use strict";(self.webpackChunkstorybook_docs=self.webpackChunkstorybook_docs||[]).push([[845],{"../../node_modules/.aspect_rules_js/raw-loader@4.0.2_webpack_5.91.0/node_modules/raw-loader/dist/cjs.js!../../node_modules/.aspect_rules_js/@player-ui+mocks@0.0.0/node_modules/@player-ui/mocks/info/info-modal-flow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='import React from "react";\nimport { Action, Info } from "@player-ui/reference-assets-plugin-components";\nimport type { DSLFlow } from "@player-tools/dsl";\n\nconst view1 = (\n  <Info id="view-1">\n    <Info.Title>View 1</Info.Title>\n    <Info.Actions>\n      <Action value="Next">\n        <Action.Label>Continue</Action.Label>\n      </Action>\n    </Info.Actions>\n    <Info.Footer>Footer Text</Info.Footer>\n  </Info>\n);\n\nconst view2 = (\n  <Info id="view-2">\n    <Info.Title>View 2</Info.Title>\n    <Info.Actions>\n      <Action value="Next">\n        <Action.Label>Next</Action.Label>\n      </Action>\n      <Action value="Dismiss">\n        <Action.Label>Dismiss</Action.Label>\n      </Action>\n    </Info.Actions>\n    <Info.Footer>Footer Text</Info.Footer>\n  </Info>\n);\n\nconst view3 = (\n  <Info id="view-3">\n    <Info.Title>View 3</Info.Title>\n    <Info.Actions>\n      <Action value="Next">\n        <Action.Label>Next</Action.Label>\n      </Action>\n    </Info.Actions>\n    <Info.Footer>Footer Text</Info.Footer>\n  </Info>\n);\n\nconst flow: DSLFlow = {\n  id: "modal-flow",\n  views: [view1, view2, view3],\n  navigation: {\n    BEGIN: "FLOW_1",\n    FLOW_1: {\n      startState: "VIEW_1",\n      VIEW_1: {\n        state_type: "VIEW",\n        ref: "view-1",\n        transitions: {\n          "*": "VIEW_2",\n        },\n      },\n      VIEW_2: {\n        state_type: "VIEW",\n        ref: "view-2",\n        attributes: {\n          stacked: true,\n        },\n        transitions: {\n          Next: "VIEW_3",\n          Dismiss: "VIEW_1",\n        },\n      },\n      VIEW_3: {\n        state_type: "VIEW",\n        ref: "view-3",\n        transitions: {\n          "*": "VIEW_1",\n        },\n      },\n    },\n  },\n};\n\nexport default flow;\n'}}]);