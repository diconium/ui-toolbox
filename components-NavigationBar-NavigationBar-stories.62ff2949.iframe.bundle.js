"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[8887],{"./src/components/NavigationBar/NavigationBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{All:()=>All,Default:()=>Default,WithAction:()=>WithAction,WithLeftSide:()=>WithLeftSide,WithRightSide:()=>WithRightSide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Avatar/index.ts"),_Button_Quick__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/Quick/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.ts"),_NavigationBar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/NavigationBar/NavigationBar.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/NavigationBar",component:_NavigationBar__WEBPACK_IMPORTED_MODULE_4__.A,parameters:{viewport:{defaultViewport:"sm"}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex justify-center items-center h-48"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-sm"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null)))]};function Default(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_4__.A,null)}function WithRightSide(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_4__.A,{right:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"address-book"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"calendar-user"}))})}function WithLeftSide(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_4__.A,{left:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"address-book"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"calendar-user"}))})}function WithAction(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_4__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Quick__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"check"}))}function All(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_4__.A,{left:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"mail-check"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"calendar"})),right:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"fingerprint"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_1__.A,{link:"https://i.pravatar.cc/150?u=08188",alt:"Mike",badge:9}))},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Quick__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"check"}))}const __namedExportsOrder=["Default","WithRightSide","WithLeftSide","WithAction","All"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default() {\n  return <NavigationBar />;\n}",...Default.parameters?.docs?.source}}},WithRightSide.parameters={...WithRightSide.parameters,docs:{...WithRightSide.parameters?.docs,source:{originalSource:'function WithRightSide() {\n  return <NavigationBar right={<>\n          <Icon icon="address-book" />\n          <Icon icon="calendar-user" />\n        </>} />;\n}',...WithRightSide.parameters?.docs?.source}}},WithLeftSide.parameters={...WithLeftSide.parameters,docs:{...WithLeftSide.parameters?.docs,source:{originalSource:'function WithLeftSide() {\n  return <NavigationBar left={<>\n          <Icon icon="address-book" />\n          <Icon icon="calendar-user" />\n        </>} />;\n}',...WithLeftSide.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'function WithAction() {\n  return <NavigationBar>\n      <QuickButton icon="check" />\n    </NavigationBar>;\n}',...WithAction.parameters?.docs?.source}}},All.parameters={...All.parameters,docs:{...All.parameters?.docs,source:{originalSource:'function All() {\n  return <NavigationBar left={<>\n          <Icon icon="mail-check" />\n          <Icon icon="calendar" />\n        </>} right={<>\n          <Icon icon="fingerprint" />\n          <Avatar link="https://i.pravatar.cc/150?u=08188" alt="Mike" badge={9} />\n        </>}>\n      <QuickButton icon="check" />\n    </NavigationBar>;\n}',...All.parameters?.docs?.source}}}}}]);