/*! For license information please see components-Spinner-Spinner-stories.ae8844c0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[8783,7978,4905,7969,5704,8101,1216,2830,3668,8401,89,1325],{"./src/components/Spinner/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DifferentSizes:()=>DifferentSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Spinner_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),sizeToStyles=function sizeToStyles(size){return"s"===size?"w-4 h-4":"m"===size?"w-7 h-7":"lg"===size?"w-10 h-10":"xl"===size?"w-14 h-14":"w-10 h-10"};function Spinner(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size;return(0,jsx_runtime.jsxs)("svg",{className:classnames_default()("animate-spin",sizeToStyles(size)),width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("circle",{className:"stroke-toolbox-primary",cx:"20",cy:"20",r:"18",strokeWidth:"4"}),(0,jsx_runtime.jsx)("path",{className:"stroke-toolbox-neutral-50",d:"M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20",strokeWidth:"4"}),(0,jsx_runtime.jsx)("path",{className:"stroke-toolbox-neutral-50",d:"M2 20C2 10.0589 10.0589 2 20 2",strokeWidth:"4"})]})}Spinner.displayName="Spinner";const Spinner_Spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}const Spinner_stories={title:"Toolbox/Spinner",component:Spinner_Spinner};function Default(){return(0,jsx_runtime.jsx)(Spinner_Spinner,{})}function DifferentSizes(){return(0,jsx_runtime.jsxs)("div",{className:"flex space-x-4 items-end",children:[(0,jsx_runtime.jsx)(Spinner_Spinner,{size:"s"}),(0,jsx_runtime.jsx)(Spinner_Spinner,{size:"m"}),(0,jsx_runtime.jsx)(Spinner_Spinner,{size:"lg"}),(0,jsx_runtime.jsx)(Spinner_Spinner,{size:"xl"})]})}Default.displayName="Default",DifferentSizes.displayName="DifferentSizes",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default() {\n  return <Spinner />;\n}",...Default.parameters?.docs?.source}}},DifferentSizes.parameters={...DifferentSizes.parameters,docs:{...DifferentSizes.parameters?.docs,source:{originalSource:'function DifferentSizes() {\n  return <div className="flex space-x-4 items-end">\n      <Spinner size="s" />\n      <Spinner size="m" />\n      <Spinner size="lg" />\n      <Spinner size="xl" />\n    </div>;\n}',...DifferentSizes.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DifferentSizes"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);