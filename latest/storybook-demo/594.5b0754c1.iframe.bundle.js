"use strict";(self.webpackChunkstorybook_docs=self.webpackChunkstorybook_docs||[]).push([[594],{"../../node_modules/.aspect_rules_js/raw-loader@4.0.2_webpack_5.91.0/node_modules/raw-loader/dist/cjs.js!../../node_modules/.aspect_rules_js/@player-ui+mocks@0.0.0/node_modules/@player-ui/mocks/choice/choice-validation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='import React from "react";\nimport {\n  Choice,\n  Info,\n  Action,\n} from "@player-ui/reference-assets-plugin-components";\nimport { binding as b } from "@player-tools/dsl";\nimport type { DSLFlow } from "@player-tools/dsl";\n\nconst schema = {\n  foo: {\n    bar: {\n      type: "StringType",\n      validation: [\n        {\n          type: "required",\n        },\n      ],\n    },\n  },\n};\n\nconst view1 = (\n  <Info id="choice-validation">\n    <Info.Title>Some validations can prevent users from advancing</Info.Title>\n    <Info.PrimaryInfo>\n      <Choice id="choice" binding={b`foo.bar`}>\n        <Choice.Title>This is a list of choices with validation</Choice.Title>\n        <Choice.Note>You must select an option to proceed!</Choice.Note>\n        <Choice.Items>\n          <Choice.Item id="item-1" value="Item 1">\n            <Choice.Item.Label>Item 1</Choice.Item.Label>\n          </Choice.Item>\n          <Choice.Item id="item-2" value="Item 2">\n            <Choice.Item.Label>Item 2</Choice.Item.Label>\n          </Choice.Item>\n          <Choice.Item id="item-3" value="Item 3">\n            <Choice.Item.Label>Item 3</Choice.Item.Label>\n          </Choice.Item>\n        </Choice.Items>\n      </Choice>\n    </Info.PrimaryInfo>\n    <Info.Actions>\n      <Action value="Next">\n        <Action.Label>Continue</Action.Label>\n      </Action>\n    </Info.Actions>\n  </Info>\n);\n\nconst flow: DSLFlow = {\n  id: "choice-validation",\n  views: [view1],\n  schema,\n  navigation: {\n    BEGIN: "FLOW_1",\n    FLOW_1: {\n      startState: "VIEW_1",\n      VIEW_1: {\n        state_type: "VIEW",\n        ref: view1,\n        transitions: {\n          "*": "END_Done",\n        },\n      },\n      END_Done: {\n        state_type: "END",\n        outcome: "DONE",\n      },\n    },\n  },\n};\n\nexport default flow;\n'}}]);