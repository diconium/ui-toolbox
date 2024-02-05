/*! For license information please see components-TextArea-TextArea-stories.a4ccbc5f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[1423],{"./src/components/TextArea/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DifferentRows:()=>DifferentRows,Disabled:()=>Disabled,Focused:()=>Focused,Hint:()=>Hint,Label:()=>Label,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Template=__webpack_require__("./src/components/TextField/Template.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TextArea(_ref){var placeholder=_ref.placeholder,_ref$onChange=_ref.onChange,_onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,_ref$rows=_ref.rows,rows=void 0===_ref$rows?5:_ref$rows,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$hint=_ref.hint,hint=void 0===_ref$hint?"":_ref$hint,children=_ref.children,template=classnames_default()(["peer w-full border px-4 py-2.5 rounded-lg resize-none min-w-full\n  text-sm bg-toolbox-white\n  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral",!disabled&&"text-toolbox-neutral-500",disabled&&"text-toolbox-neutral",disabled&&"border-toolbox-neutral-50"]);return(0,jsx_runtime.jsxs)(Template.Z,{label,hint,disabled,children:[(0,jsx_runtime.jsx)("textarea",{rows,disabled,placeholder,value,className:template,onChange:function onChange(event){return _onChange(event.target.value)}}),children]})}TextArea.displayName="TextArea";const TextArea_TextArea=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((change: string) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},rows:{defaultValue:{value:"5"},description:"",name:"rows",required:!1,type:{name:"number"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},hint:{defaultValue:{value:""},description:"",name:"hint",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const TextArea_stories={title:"Toolbox/TextArea",component:TextArea_TextArea};function Default(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4 w-[320px]",children:[(0,jsx_runtime.jsx)(TextArea_TextArea,{placeholder:"Placeholder text here"}),(0,jsx_runtime.jsx)(TextArea_TextArea,{placeholder:"Placeholder text here",value:"With text"})]})}function Label(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4 w-[320px]",children:[(0,jsx_runtime.jsx)(TextArea_TextArea,{label:"With label",placeholder:"Placeholder text here"}),(0,jsx_runtime.jsx)(TextArea_TextArea,{label:"With label",placeholder:"Placeholder text here",value:"With text"})]})}function Hint(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4 w-[320px]",children:[(0,jsx_runtime.jsx)(TextArea_TextArea,{label:"With label",hint:"Your hint",placeholder:"Placeholder text here"}),(0,jsx_runtime.jsx)(TextArea_TextArea,{label:"With label",hint:"Your hint",placeholder:"Placeholder text here",value:"With text"})]})}function DifferentRows(){return(0,jsx_runtime.jsx)("div",{className:"flex flex-col space-y-4 w-[320px]",children:(0,jsx_runtime.jsx)(TextArea_TextArea,{rows:10,placeholder:"Placeholder text here",value:"With text"})})}Default.displayName="Default",Label.displayName="Label",Hint.displayName="Hint",DifferentRows.displayName="DifferentRows";var Focused={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4 w-[320px]",children:[(0,jsx_runtime.jsx)(TextArea_TextArea,{label:"With label",disabled:!0,placeholder:"Placeholder text here"}),(0,jsx_runtime.jsx)(TextArea_TextArea,{label:"With label",disabled:!0,placeholder:"Placeholder text here",value:"With text"})]})},parameters:{pseudo:{focus:!0}}};function WithAction(){var _useState2=_slicedToArray((0,react.useState)(),2),value=_useState2[0],set=_useState2[1];return(0,jsx_runtime.jsx)("div",{className:"flex flex-col space-y-4 w-[320px]",children:(0,jsx_runtime.jsx)(TextArea_TextArea,{placeholder:"Placeholder text",value,onChange:function onChange(text){return set(text)}})})}function Disabled(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4 w-[320px]",children:[(0,jsx_runtime.jsx)(TextArea_TextArea,{disabled:!0,placeholder:"Placeholder text here"}),(0,jsx_runtime.jsx)(TextArea_TextArea,{disabled:!0,placeholder:"Placeholder text here",value:"With text"})]})}WithAction.displayName="WithAction",Disabled.displayName="Disabled",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextArea placeholder="Placeholder text here" />\n      <TextArea placeholder="Placeholder text here" value="With text" />\n    </div>;\n}',...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'function Label() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextArea label="With label" placeholder="Placeholder text here" />\n      <TextArea label="With label" placeholder="Placeholder text here" value="With text" />\n    </div>;\n}',...Label.parameters?.docs?.source}}},Hint.parameters={...Hint.parameters,docs:{...Hint.parameters?.docs,source:{originalSource:'function Hint() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextArea label="With label" hint="Your hint" placeholder="Placeholder text here" />\n      <TextArea label="With label" hint="Your hint" placeholder="Placeholder text here" value="With text" />\n    </div>;\n}',...Hint.parameters?.docs?.source}}},DifferentRows.parameters={...DifferentRows.parameters,docs:{...DifferentRows.parameters?.docs,source:{originalSource:'function DifferentRows() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextArea rows={10} placeholder="Placeholder text here" value="With text" />\n    </div>;\n}',...DifferentRows.parameters?.docs?.source}}},Focused.parameters={...Focused.parameters,docs:{...Focused.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="flex flex-col space-y-4 w-[320px]">\n      <TextArea label="With label" disabled placeholder="Placeholder text here" />\n      <TextArea label="With label" disabled placeholder="Placeholder text here" value="With text" />\n    </div>,\n  parameters: {\n    pseudo: {\n      focus: true\n    }\n  }\n}',...Focused.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'function WithAction() {\n  const [value, set] = useState<string>();\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextArea placeholder="Placeholder text" value={value} onChange={text => set(text)} />\n    </div>;\n}',...WithAction.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'function Disabled() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextArea disabled placeholder="Placeholder text here" />\n      <TextArea disabled placeholder="Placeholder text here" value="With text" />\n    </div>;\n}',...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Label","Hint","DifferentRows","Focused","WithAction","Disabled"]},"./src/components/TextField/Template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>validationToColor});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),validationToColor=function validationToColor(validation){return"valid"===validation?"green":"warning"===validation?"orange":"error"===validation?"red":"black"};function Template(_ref){var label=_ref.label,hint=_ref.hint,disabled=_ref.disabled,validation=_ref.validation,children=_ref.children,mask=classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-xs leading-3 px-3 py-1",!validation&&{"text-toolbox-neutral-500":!disabled,"text-toolbox-neutral-200":disabled},validation&&"text-toolbox-feedback-".concat(validationToColor(validation)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"inline-flex items-center",children}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:hint})]})}Template.displayName="Template";const __WEBPACK_DEFAULT_EXPORT__=Template;try{validationToColor.displayName="validationToColor",validationToColor.__docgenInfo={description:"",displayName:"validationToColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#validationToColor"]={docgenInfo:validationToColor.__docgenInfo,name:"validationToColor",path:"src/components/TextField/Template.tsx#validationToColor"})}catch(__react_docgen_typescript_loader_error){}try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/TextField/Template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);