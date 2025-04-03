"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[316],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function Button(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,children=_ref.children,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,outlined=_ref.outlined,_ref$baseTemplate=_ref.baseTemplate,baseTemplate=void 0===_ref$baseTemplate?"box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl":_ref$baseTemplate,_ref$defaultTemplate=_ref.defaultTemplate,defaultTemplate=void 0===_ref$defaultTemplate?"text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed":_ref$defaultTemplate,_ref$outlinedTemplate=_ref.outlinedTemplate,template=outlined?void 0===_ref$outlinedTemplate?"bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed":_ref$outlinedTemplate:defaultTemplate,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseTemplate,template);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit"===type?"submit":"button",onClick,className:classes,disabled},children)}const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:{value:"`box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl`"},description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:{value:"`text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`"},description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:{value:"`bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed`"},description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Quick/Quick.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Disabled:()=>Disabled,Focus:()=>Focus,Hovered:()=>Hovered,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Quick__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Quick/Quick.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/Button/Quick",component:_Quick__WEBPACK_IMPORTED_MODULE_1__.A},Default={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Quick__WEBPACK_IMPORTED_MODULE_1__.A,{icon:"check",onClick:()=>{}})},Hovered={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Quick__WEBPACK_IMPORTED_MODULE_1__.A,{icon:"check"}),parameters:{pseudo:{hover:!0}}},Active={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Quick__WEBPACK_IMPORTED_MODULE_1__.A,{icon:"check"}),parameters:{pseudo:{active:!0}}},Focus={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Quick__WEBPACK_IMPORTED_MODULE_1__.A,{icon:"check"}),parameters:{pseudo:{focusVisible:!0}}},Disabled={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Quick__WEBPACK_IMPORTED_MODULE_1__.A,{disabled:!0,icon:"gear"})},__namedExportsOrder=["Default","Hovered","Active","Focus","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <QuickButton icon="check" onClick={() => {}} />\n}',...Default.parameters?.docs?.source}}},Hovered.parameters={...Hovered.parameters,docs:{...Hovered.parameters?.docs,source:{originalSource:'{\n  render: () => <QuickButton icon="check" />,\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}',...Hovered.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  render: () => <QuickButton icon="check" />,\n  parameters: {\n    pseudo: {\n      active: true\n    }\n  }\n}',...Active.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:'{\n  render: () => <QuickButton icon="check" />,\n  parameters: {\n    pseudo: {\n      focusVisible: true\n    }\n  }\n}',...Focus.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <QuickButton disabled icon="gear" />\n}',...Disabled.parameters?.docs?.source}}}},"./src/components/Button/Quick/Quick.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts");function QuickButton(_ref){var icon=_ref.icon,disabled=_ref.disabled,outlined=_ref.outlined,_ref$secondary=_ref.secondary,secondary=void 0!==_ref$secondary&&_ref$secondary,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{onClick:function onClick(){return _onClick()},outlined,disabled,baseTemplate:"inline-block w-14 h-14 leading-4 rounded-full px-0 py-0",defaultTemplate:secondary?"text-toolbox-white bg-toolbox-secondary hover:bg-toolbox-secondary-600\n  active:bg-toolbox-secondary-600 active:text-toolbox-secondary\n  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4\n  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed":"text-toolbox-white bg-toolbox-primary hover:bg-toolbox-primary-600\n  active:bg-toolbox-primary-600 active:text-toolbox-primary\n  focus:outline-none focus-visible:border-toolbox-secondary focus-visible:border-4\n  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed",outlinedTemplate:secondary?"border-4 border-toolbox-secondary text-toolbox-secondary\n  hover:bg-toolbox-secondary-600 hover:text-toolbox-secondary\n  active:bg-toolbox-secondary active:text-toolbox-white\n  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4\n  focus-visible:text-toolbox-secondary\n  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed":"border-4 border-toolbox-primary text-toolbox-primary\n  hover:bg-toolbox-primary-600 hover:text-toolbox-primary\n  active:bg-toolbox-primary active:text-toolbox-white\n  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-4\n  focus-visible:text-toolbox-secondary-300\n  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon,size:"lg"}))}const __WEBPACK_DEFAULT_EXPORT__=QuickButton;try{QuickButton.displayName="QuickButton",QuickButton.__docgenInfo={description:"",displayName:"QuickButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},secondary:{defaultValue:{value:"false"},description:"",name:"secondary",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:null,description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:null,description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:null,description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Quick/Quick.tsx#QuickButton"]={docgenInfo:QuickButton.__docgenInfo,name:"QuickButton",path:"src/components/Button/Quick/Quick.tsx#QuickButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Ay});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")}}]);