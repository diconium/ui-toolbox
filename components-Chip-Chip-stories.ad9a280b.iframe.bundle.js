/*! For license information please see components-Chip-Chip-stories.ad9a280b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[7837],{"./src/components/Chip/Chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Selected:()=>Selected,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Chip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Chip/Chip.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/Chip",component:_Chip__WEBPACK_IMPORTED_MODULE_1__.A};function Default(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Ingolstadt"})}function Selected(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.A,{selected:!0,label:"Munich"})}function Disabled(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.A,{disabled:!0,label:"Munich"})}function WithAction(){const[selected,set]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Stuttgart",selected,onClick:()=>set(!selected)})}const __namedExportsOrder=["Default","Selected","Disabled","WithAction"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <Chip label="Ingolstadt" />;\n}',...Default.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:'function Selected() {\n  return <Chip selected label="Munich" />;\n}',...Selected.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'function Disabled() {\n  return <Chip disabled label="Munich" />;\n}',...Disabled.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'function WithAction() {\n  const [selected, set] = useState(false);\n  return <Chip label="Stuttgart" selected={selected} onClick={() => set(!selected)} />;\n}',...WithAction.parameters?.docs?.source}}}},"./src/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function Chip(_ref){var label=_ref.label,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-sm leading-5 bg-toolbox-white\nrounded-2xl border text-toolbox-black whitespace-nowrap\npx-10 py-1 font-thin",{"border-toolbox-primary":selected,"border-toolbox-neutral-200":!selected,"text-toolbox-neutral-200":disabled,"cursor-not-allowed":disabled,"cursor-pointer":!disabled});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",className:template,disabled,onClick:function onClick(){return _onClick()}},label)}const __WEBPACK_DEFAULT_EXPORT__=Chip;try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);