/*! For license information please see components-Button-Toggle-Toggle-stories.827f0555.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[958],{"./src/components/Button/Toggle/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Toggled:()=>Toggled,WithAction:()=>WithAction,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Dot=__webpack_require__("./src/components/Dot/index.ts");function Toggle(_ref){var _ref$toggled=_ref.toggled,toggled=void 0!==_ref$toggled&&_ref$toggled,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,template=classnames_default()("w-12 h-7 bg-toolbox-white \n  border-2 rounded-2xl px-0.5\n  inline-flex items-center box-border",{"border-toolbox-neutral-500":!disabled&&!toggled,"border-toolbox-primary":!disabled&&toggled,"justify-end":toggled,"justify-start":!toggled,"border-toolbox-neutral-200":disabled}),dot=classnames_default()({"bg-toolbox-neutral-500":!disabled&&!toggled,"bg-toolbox-primary":!disabled&&toggled,"bg-toolbox-neutral-200":disabled});return react.createElement("button",{title,type:"button",disabled,className:template,onClick:function onClick(){return _onClick(!toggled)},"aria-label":"Dot"},react.createElement(Dot.A,{size:"xl",color:dot}))}const Toggle_Toggle=Toggle;try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{toggled:{defaultValue:{value:"false"},description:"",name:"toggled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((toggled: boolean) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Button/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}const Toggle_stories={title:"Toolbox/Button/Toggle",component:Toggle_Toggle},Default={render:()=>react.createElement(Toggle_Toggle,null)},WithTitle={render:()=>react.createElement(Toggle_Toggle,{title:"Some action"})},Toggled={render:()=>react.createElement(Toggle_Toggle,{toggled:!0})},Disabled={render:()=>react.createElement("div",{className:"flex space-x-4"},react.createElement(Toggle_Toggle,{toggled:!0,disabled:!0}),react.createElement(Toggle_Toggle,{disabled:!0}))};function WithAction(){const[toggle,set]=(0,react.useState)(!1);return react.createElement(Toggle_Toggle,{toggled:toggle,onClick:newState=>set(newState)})}const __namedExportsOrder=["Default","WithTitle","Toggled","Disabled","WithAction"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <ToggleButton />\n}",...Default.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  render: () => <ToggleButton title="Some action" />\n}',...WithTitle.parameters?.docs?.source}}},Toggled.parameters={...Toggled.parameters,docs:{...Toggled.parameters?.docs,source:{originalSource:"{\n  render: () => <ToggleButton toggled />\n}",...Toggled.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="flex space-x-4">\n      <ToggleButton toggled disabled />\n      <ToggleButton disabled />\n    </div>\n}',...Disabled.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:"function WithAction() {\n  const [toggle, set] = useState(false);\n  return <ToggleButton toggled={toggle} onClick={newState => set(newState)} />;\n}",...WithAction.parameters?.docs?.source}}}},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.A});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);