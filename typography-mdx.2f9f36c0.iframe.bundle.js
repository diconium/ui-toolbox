(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[4978,9812],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/typography.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_typography_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/typography.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h2:"h2",p:"p",...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_typography_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"typography",children:"Typography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The standard font family for this library is the google font ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",rel:"nofollow",children:"Montserrat"}),".\nWe support multiple font weights ranging from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Thin (100)"})," to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Black (900)"}),",\nwith ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Regular (400)"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SemiBold (600)"})," being commonly used.\nWhen you include this package in your project, the default weight will be applied automatically."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_typography_stories__WEBPACK_IMPORTED_MODULE_2__.Headers})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_typography_stories__WEBPACK_IMPORTED_MODULE_2__.Body})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_typography_stories__WEBPACK_IMPORTED_MODULE_2__.Footnote})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/typography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Body:()=>Body,Footnote:()=>Footnote,Headers:()=>Headers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Typography"};function Headers(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"H1 Unlocking the Secrets of the Unknown"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"H2 Exploring the Depths of the Unseen"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,"H3 Revealing the Mysteries of the Hidden"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",null,"H4 The Wonders of the Invisible Realm"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5",null,"H5 Uncovering the Truth Behind the Veil"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6",null,"H6 The Marvels of the Undiscovered World"))}function Body(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"As the sun rises in the morning sky, the birds begin to chirp and the world awakens to a new day. With each passing minute, a new opportunity to make the world a better place arises. Whether it be volunteering at a soup kitchen, helping a friend in need, or simply checking in with those around you, there are countless ways to make a difference. Everyone has the potential to make the world a better place.")}function Footnote(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("small",null,"This text was generated from a computer algorithm and is for demonstration purposes only.")}const __namedExportsOrder=["Headers","Body","Footnote"];Headers.parameters={...Headers.parameters,docs:{...Headers.parameters?.docs,source:{originalSource:"function Headers() {\n  return <>\n      <h1>H1 Unlocking the Secrets of the Unknown</h1>\n      <h2>H2 Exploring the Depths of the Unseen</h2>\n      <h3>H3 Revealing the Mysteries of the Hidden</h3>\n      <h4>H4 The Wonders of the Invisible Realm</h4>\n      <h5>H5 Uncovering the Truth Behind the Veil</h5>\n      <h6>H6 The Marvels of the Undiscovered World</h6>\n    </>;\n}",...Headers.parameters?.docs?.source}}},Body.parameters={...Body.parameters,docs:{...Body.parameters?.docs,source:{originalSource:"function Body() {\n  return <p>\n      As the sun rises in the morning sky, the birds begin to chirp and the world awakens to a new\n      day. With each passing minute, a new opportunity to make the world a better place arises.\n      Whether it be volunteering at a soup kitchen, helping a friend in need, or simply checking in\n      with those around you, there are countless ways to make a difference. Everyone has the\n      potential to make the world a better place.\n    </p>;\n}",...Body.parameters?.docs?.source}}},Footnote.parameters={...Footnote.parameters,docs:{...Footnote.parameters?.docs,source:{originalSource:"function Footnote() {\n  return <small>\n      This text was generated from a computer algorithm and is for demonstration purposes only.\n    </small>;\n}",...Footnote.parameters?.docs?.source}}}}}]);