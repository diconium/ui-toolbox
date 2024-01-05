"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[7521,5933],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Button/Quick/Quick.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Quick_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/Quick/Quick.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Quick_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"quickbutton",children:"QuickButton"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"QuickButton"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { QuickButton } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Quick_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"hovered",children:"Hovered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Quick_stories__WEBPACK_IMPORTED_MODULE_2__.Hovered}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"active",children:"Active"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Quick_stories__WEBPACK_IMPORTED_MODULE_2__.Active}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"focus",children:"Focus"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Quick_stories__WEBPACK_IMPORTED_MODULE_2__.Focus}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Quick_stories__WEBPACK_IMPORTED_MODULE_2__.Disabled})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Button/Quick/Quick.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Disabled:()=>Disabled,Focus:()=>Focus,Hovered:()=>Hovered,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_Hovered$parameters,_Hovered$parameters2,_Active$parameters,_Active$parameters2,_Focus$parameters,_Focus$parameters2,_Disabled$parameters,_Disabled$parameters2,_Quick__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Quick/Quick.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/Button/Quick",component:_Quick__WEBPACK_IMPORTED_MODULE_1__.Z};var Default={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Quick__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"check",onClick:function onClick(){}})}},Hovered={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Quick__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"check"})},parameters:{pseudo:{hover:!0}}},Active={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Quick__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"check"})},parameters:{pseudo:{active:!0}}},Focus={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Quick__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"check"})},parameters:{pseudo:{focusVisible:!0}}},Disabled={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Quick__WEBPACK_IMPORTED_MODULE_1__.Z,{disabled:!0,icon:"gear"})}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <QuickButton icon="check" onClick={() => {}} />\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Hovered.parameters=_objectSpread(_objectSpread({},Hovered.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Hovered$parameters=Hovered.parameters)||void 0===_Hovered$parameters?void 0:_Hovered$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <QuickButton icon="check" />,\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}'},null===(_Hovered$parameters2=Hovered.parameters)||void 0===_Hovered$parameters2||null===(_Hovered$parameters2=_Hovered$parameters2.docs)||void 0===_Hovered$parameters2?void 0:_Hovered$parameters2.source)})}),Active.parameters=_objectSpread(_objectSpread({},Active.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Active$parameters=Active.parameters)||void 0===_Active$parameters?void 0:_Active$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <QuickButton icon="check" />,\n  parameters: {\n    pseudo: {\n      active: true\n    }\n  }\n}'},null===(_Active$parameters2=Active.parameters)||void 0===_Active$parameters2||null===(_Active$parameters2=_Active$parameters2.docs)||void 0===_Active$parameters2?void 0:_Active$parameters2.source)})}),Focus.parameters=_objectSpread(_objectSpread({},Focus.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Focus$parameters=Focus.parameters)||void 0===_Focus$parameters?void 0:_Focus$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <QuickButton icon="check" />,\n  parameters: {\n    pseudo: {\n      focusVisible: true\n    }\n  }\n}'},null===(_Focus$parameters2=Focus.parameters)||void 0===_Focus$parameters2||null===(_Focus$parameters2=_Focus$parameters2.docs)||void 0===_Focus$parameters2?void 0:_Focus$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <QuickButton disabled icon="gear" />\n}'},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})});var __namedExportsOrder=["Default","Hovered","Active","Focus","Disabled"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,children=_ref.children,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,outlined=_ref.outlined,_ref$baseTemplate=_ref.baseTemplate,baseTemplate=void 0===_ref$baseTemplate?"box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl":_ref$baseTemplate,_ref$defaultTemplate=_ref.defaultTemplate,defaultTemplate=void 0===_ref$defaultTemplate?"text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed":_ref$defaultTemplate,_ref$outlinedTemplate=_ref.outlinedTemplate,template=outlined?void 0===_ref$outlinedTemplate?"bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed":_ref$outlinedTemplate:defaultTemplate,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseTemplate,template);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"submit"===type?"submit":"button",onClick,className:classes,disabled,children})}Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:{value:"`box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl`"},description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:{value:"`text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`"},description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:{value:"`bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed`"},description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Quick/Quick.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuickButton(_ref){var icon=_ref.icon,disabled=_ref.disabled,outlined=_ref.outlined,_ref$secondary=_ref.secondary,secondary=void 0!==_ref$secondary&&_ref$secondary,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:function onClick(){return _onClick()},outlined,disabled,baseTemplate:"inline-block w-14 h-14 leading-4 rounded-full px-0 py-0",defaultTemplate:secondary?"text-toolbox-white bg-toolbox-secondary hover:bg-toolbox-secondary-600\n  active:bg-toolbox-secondary-600 active:text-toolbox-secondary\n  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4\n  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed":"text-toolbox-white bg-toolbox-primary hover:bg-toolbox-primary-600\n  active:bg-toolbox-primary-600 active:text-toolbox-primary\n  focus:outline-none focus-visible:border-toolbox-secondary focus-visible:border-4\n  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed",outlinedTemplate:secondary?"border-4 border-toolbox-secondary text-toolbox-secondary\n  hover:bg-toolbox-secondary-600 hover:text-toolbox-secondary\n  active:bg-toolbox-secondary active:text-toolbox-white\n  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4\n  focus-visible:text-toolbox-secondary\n  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed":"border-4 border-toolbox-primary text-toolbox-primary\n  hover:bg-toolbox-primary-600 hover:text-toolbox-primary\n  active:bg-toolbox-primary active:text-toolbox-white\n  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-4\n  focus-visible:text-toolbox-secondary-300\n  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon,size:"lg"})})}QuickButton.displayName="QuickButton";const __WEBPACK_DEFAULT_EXPORT__=QuickButton;try{QuickButton.displayName="QuickButton",QuickButton.__docgenInfo={description:"",displayName:"QuickButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},secondary:{defaultValue:{value:"false"},description:"",name:"secondary",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:null,description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:null,description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:null,description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Quick/Quick.tsx#QuickButton"]={docgenInfo:QuickButton.__docgenInfo,name:"QuickButton",path:"src/components/Button/Quick/Quick.tsx#QuickButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")}}]);