/*! For license information please see components-PaginationDots-PaginationDots-stories.8d199db9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[2621,7978,4905,7969,5704,8101,1216,2830,3668,8401,89,1325],{"./src/components/PaginationDots/PaginationDots.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CurrentStep:()=>CurrentStep,Default:()=>Default,Disabled:()=>Disabled,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PaginationDots_stories});var react=__webpack_require__("./node_modules/react/index.js"),Dot=__webpack_require__("./src/components/Dot/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function PaginationDots(_ref){var _ref$current=_ref.current,current=void 0===_ref$current?0:_ref$current,pages=_ref.pages,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,steps=pages.map((function(_ref2,index){var title=_ref2.title;return(0,jsx_runtime.jsx)("button",{type:"button",disabled,className:"flex items-center",title,onClick:function onClick(){return _onClick(index)},"aria-label":"Button",children:(0,jsx_runtime.jsx)(Dot.Z,{size:index===current?"m":"s",color:index===current?"bg-toolbox-primary":"bg-toolbox-neutral-500"})},index)}));return(0,jsx_runtime.jsx)("div",{className:"flex space-x-2 items-center",children:steps})}PaginationDots.displayName="PaginationDots";const PaginationDots_PaginationDots=PaginationDots;try{PaginationDots.displayName="PaginationDots",PaginationDots.__docgenInfo={description:"",displayName:"PaginationDots",props:{pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"page[]"}},current:{defaultValue:{value:"0"},description:"",name:"current",required:!1,type:{name:"number"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((index: number) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PaginationDots/PaginationDots.tsx#PaginationDots"]={docgenInfo:PaginationDots.__docgenInfo,name:"PaginationDots",path:"src/components/PaginationDots/PaginationDots.tsx#PaginationDots"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const PaginationDots_stories={title:"Toolbox/PaginationDots",component:PaginationDots_PaginationDots};function Default(){return(0,jsx_runtime.jsx)(PaginationDots_PaginationDots,{pages:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4"},{title:"Step 5"},{title:"Step 6"}]})}function CurrentStep(){return(0,jsx_runtime.jsx)(PaginationDots_PaginationDots,{current:4,pages:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4"},{title:"Step 5"},{title:"Step 6"}]})}function WithAction(){var _useState2=_slicedToArray((0,react.useState)(0),2),current=_useState2[0],set=_useState2[1];return(0,jsx_runtime.jsx)(PaginationDots_PaginationDots,{current,onClick:function onClick(index){return set(index)},pages:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4"},{title:"Step 5"},{title:"Step 6"}]})}function Disabled(){return(0,jsx_runtime.jsx)(PaginationDots_PaginationDots,{disabled:!0,current:1,pages:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"}]})}Default.displayName="Default",CurrentStep.displayName="CurrentStep",WithAction.displayName="WithAction",Disabled.displayName="Disabled",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default() {\n  return <PaginationDots pages={[{\n    title: 'Step 1'\n  }, {\n    title: 'Step 2'\n  }, {\n    title: 'Step 3'\n  }, {\n    title: 'Step 4'\n  }, {\n    title: 'Step 5'\n  }, {\n    title: 'Step 6'\n  }]} />;\n}",...Default.parameters?.docs?.source}}},CurrentStep.parameters={...CurrentStep.parameters,docs:{...CurrentStep.parameters?.docs,source:{originalSource:"function CurrentStep() {\n  return <PaginationDots current={4} pages={[{\n    title: 'Step 1'\n  }, {\n    title: 'Step 2'\n  }, {\n    title: 'Step 3'\n  }, {\n    title: 'Step 4'\n  }, {\n    title: 'Step 5'\n  }, {\n    title: 'Step 6'\n  }]} />;\n}",...CurrentStep.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:"function WithAction() {\n  const [current, set] = useState(0);\n  return <PaginationDots current={current} onClick={index => set(index)} pages={[{\n    title: 'Step 1'\n  }, {\n    title: 'Step 2'\n  }, {\n    title: 'Step 3'\n  }, {\n    title: 'Step 4'\n  }, {\n    title: 'Step 5'\n  }, {\n    title: 'Step 6'\n  }]} />;\n}",...WithAction.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"function Disabled() {\n  return <PaginationDots disabled current={1} pages={[{\n    title: 'Step 1'\n  }, {\n    title: 'Step 2'\n  }, {\n    title: 'Step 3'\n  }]} />;\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CurrentStep","WithAction","Disabled"]},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}Dot.displayName="Dot";const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.Z});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);