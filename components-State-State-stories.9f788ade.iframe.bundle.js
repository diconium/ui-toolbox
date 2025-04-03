/*! For license information please see components-State-State-stories.9f788ade.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[6207],{"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.A});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/State/State.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AttachStateToAnyOtherComponent:()=>AttachStateToAnyOtherComponent,Default:()=>Default,DifferentSizes:()=>DifferentSizes,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx"),_StateContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/State/StateContainer.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/State",component:_State__WEBPACK_IMPORTED_MODULE_1__.A};function Default(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex space-x-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color:"bg-toolbox-feedback-green"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color:"bg-toolbox-feedback-orange"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color:"bg-toolbox-feedback-red"}))}function DifferentSizes(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex space-x-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{size:"lg",color:"bg-toolbox-feedback-green"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{size:"m",color:"bg-toolbox-feedback-orange"}))}function WithLabel(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col space-y-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Online",color:"bg-toolbox-feedback-green"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Not at desk",color:"bg-toolbox-feedback-orange"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Offline",color:"bg-toolbox-feedback-red"}))}function AttachStateToAnyOtherComponent(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StateContainer__WEBPACK_IMPORTED_MODULE_2__.A,{color:"bg-toolbox-feedback-orange",size:"lg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-16 h-16 bg-toolbox-primary"}))}const __namedExportsOrder=["Default","DifferentSizes","WithLabel","AttachStateToAnyOtherComponent"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <div className="flex space-x-4">\n      <State color="bg-toolbox-feedback-green" />\n      <State color="bg-toolbox-feedback-orange" />\n      <State color="bg-toolbox-feedback-red" />\n    </div>;\n}',...Default.parameters?.docs?.source}}},DifferentSizes.parameters={...DifferentSizes.parameters,docs:{...DifferentSizes.parameters?.docs,source:{originalSource:'function DifferentSizes() {\n  return <div className="flex space-x-4">\n      <State size="lg" color="bg-toolbox-feedback-green" />\n      <State size="m" color="bg-toolbox-feedback-orange" />\n    </div>;\n}',...DifferentSizes.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'function WithLabel() {\n  return <div className="flex flex-col space-y-4">\n      <State label="Online" color="bg-toolbox-feedback-green" />\n      <State label="Not at desk" color="bg-toolbox-feedback-orange" />\n      <State label="Offline" color="bg-toolbox-feedback-red" />\n    </div>;\n}',...WithLabel.parameters?.docs?.source}}},AttachStateToAnyOtherComponent.parameters={...AttachStateToAnyOtherComponent.parameters,docs:{...AttachStateToAnyOtherComponent.parameters?.docs,source:{originalSource:'function AttachStateToAnyOtherComponent() {\n  return <StateContainer color="bg-toolbox-feedback-orange" size="lg">\n      <div className="w-16 h-16 bg-toolbox-primary" />\n    </StateContainer>;\n}',...AttachStateToAnyOtherComponent.parameters?.docs?.source}}}},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center space-x-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size:"m",color}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-toolbox-neutral leading-5 text-xs"},label)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size,color})}const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative inline-block"},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))}const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}}}]);