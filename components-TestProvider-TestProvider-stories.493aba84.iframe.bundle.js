/*! For license information please see components-TestProvider-TestProvider-stories.493aba84.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[4697,7978,4905,7230,5704,8101,1216,2830,3668,5356,8401,89,8914,1325],{"./src/components/TestProvider/TestProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexComponent:()=>ComplexComponent,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_ComplexComponent$par,_ComplexComponent$par2,_TestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TestProvider/TestProvider.tsx"),_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TextField/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/TestProvider",component:_TestProvider__WEBPACK_IMPORTED_MODULE_1__.Z};function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TestProvider__WEBPACK_IMPORTED_MODULE_1__.Z,{reference:"testid",selector:"cy",enableInProduction:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:"/home",children:"Home"})})})}function ComplexComponent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TestProvider__WEBPACK_IMPORTED_MODULE_1__.Z,{reference:"testid",selector:"cy",enableInProduction:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__.Z,{value:"with text",placeholder:"Placeholder text"})})})}Default.displayName="Default",ComplexComponent.displayName="ComplexComponent",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'function Default() {\n  return <section>\n      <TestProvider reference="testid" selector="cy" enableInProduction>\n        <a href="/home">Home</a>\n      </TestProvider>\n    </section>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),ComplexComponent.parameters=_objectSpread(_objectSpread({},ComplexComponent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ComplexComponent$par=ComplexComponent.parameters)||void 0===_ComplexComponent$par?void 0:_ComplexComponent$par.docs),{},{source:_objectSpread({originalSource:'function ComplexComponent() {\n  return <section>\n      <TestProvider reference="testid" selector="cy" enableInProduction>\n        <TextField value="with text" placeholder="Placeholder text" />\n      </TestProvider>\n    </section>;\n}'},null===(_ComplexComponent$par2=ComplexComponent.parameters)||void 0===_ComplexComponent$par2||null===(_ComplexComponent$par2=_ComplexComponent$par2.docs)||void 0===_ComplexComponent$par2?void 0:_ComplexComponent$par2.source)})});var __namedExportsOrder=["Default","ComplexComponent"]},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/TestProvider/TestProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js"),Wrapper=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("template",{ref})}));function TestProvider(_ref){var children=_ref.children,_ref$selector=_ref.selector,selector=void 0===_ref$selector?"test":_ref$selector,reference=_ref.reference,_ref$enableInProducti=_ref.enableInProduction,enableInProduction=void 0!==_ref$enableInProducti&&_ref$enableInProducti,shouldUseProvider="test"===process.env.NEXT_PUBLIC_NODE_ENV||enableInProduction,parentRef=function useTestId(shouldUseProvider,selector,reference){var parentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(shouldUseProvider){var parentNode=parentRef.current;(null==parentNode?void 0:parentNode.nextElementSibling).dataset[selector]=reference}}),[parentRef.current]),parentRef}(shouldUseProvider,selector,reference);return shouldUseProvider?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper,{ref:parentRef}),children]}):children}const __WEBPACK_DEFAULT_EXPORT__=TestProvider;try{TestProvider.displayName="TestProvider",TestProvider.__docgenInfo={description:"",displayName:"TestProvider",props:{reference:{defaultValue:null,description:"",name:"reference",required:!0,type:{name:"string"}},selector:{defaultValue:{value:"test"},description:"",name:"selector",required:!1,type:{name:"string"}},enableInProduction:{defaultValue:{value:"false"},description:"",name:"enableInProduction",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TestProvider/TestProvider.tsx#TestProvider"]={docgenInfo:TestProvider.__docgenInfo,name:"TestProvider",path:"src/components/TestProvider/TestProvider.tsx#TestProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/Template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>validationToColor});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),validationToColor=function validationToColor(validation){return"valid"===validation?"green":"warning"===validation?"orange":"error"===validation?"red":"black"};function Template(_ref){var label=_ref.label,hint=_ref.hint,disabled=_ref.disabled,validation=_ref.validation,children=_ref.children,mask=classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-xs leading-3 px-3 py-1",!validation&&{"text-toolbox-neutral-500":!disabled,"text-toolbox-neutral-200":disabled},validation&&"text-toolbox-feedback-".concat(validationToColor(validation)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"inline-flex items-center",children}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:hint})]})}Template.displayName="Template";const __WEBPACK_DEFAULT_EXPORT__=Template;try{validationToColor.displayName="validationToColor",validationToColor.__docgenInfo={description:"",displayName:"validationToColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#validationToColor"]={docgenInfo:validationToColor.__docgenInfo,name:"validationToColor",path:"src/components/TextField/Template.tsx#validationToColor"})}catch(__react_docgen_typescript_loader_error){}try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/TextField/Template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Icon/index.ts")),_Template__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TextField/Template.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="peer w-full border px-4 py-2.5 rounded-lg\n  text-sm bg-toolbox-white\n  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral",validationToIcon=function validationToIcon(validation){return"valid"===validation?"circle-check":"warning"===validation?"triangle-exclamation":"circle-xmark"};function TextField(_ref){var placeholder=_ref.placeholder,label=_ref.label,value=_ref.value,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,hint=_ref.hint,validation=_ref.validation,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$onChange=_ref.onChange,_onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$onEnter=_ref.onEnter,onEnter=void 0===_ref$onEnter?function(){}:_ref$onEnter,_ref$onFocus=_ref.onFocus,_onFocus=void 0===_ref$onFocus?function(){}:_ref$onFocus,_ref$onBlur=_ref.onBlur,_onBlur=void 0===_ref$onBlur?function(){}:_ref$onBlur,className=_ref.className,_ref$isClearable=_ref.isClearable,isClearable=void 0!==_ref$isClearable&&_ref$isClearable,children=_ref.children,color=(0,_Template__WEBPACK_IMPORTED_MODULE_3__.g)(validation),isValid="valid"===validation,template=classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,[BASE_TEMPLATE,!validation&&"border-toolbox-neutral-200",!validation&&"text-toolbox-neutral-900",!validation&&!disabled&&"placeholder-toolbox-neutral-500"].concat([validation&&!isValid&&"border-toolbox-feedback-".concat(color),validation&&!isValid&&"focus:border-toolbox-feedback-".concat(color),validation&&isValid&&"border-toolbox-neutral-200",validation&&"text-toolbox-neutral-500"],[disabled&&"border-toolbox-neutral-50",disabled&&"placeholder-toolbox-neutral-200",disabled&&"text-toolbox-neutral",className]));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Template__WEBPACK_IMPORTED_MODULE_3__.Z,{label,hint,disabled,validation,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{onKeyDown:function handleEnter(event){"Enter"===event.key&&(event.preventDefault(),onEnter())},type,disabled,className:template,placeholder,value,onChange:function onChange(event){return _onChange(event.target.value)},onFocus:function onFocus(){return _onFocus()},onBlur:function onBlur(){return _onBlur()}}),children,validation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:validationToIcon(validation),size:"s",className:"text-toolbox-feedback-".concat(color," -ml-10")}),isClearable&&!!value&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",className:"-ml-8 mt-1",onClick:function onClick(){return _onChange("")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:"xmark",size:"s"})})]})}TextField.displayName="TextField";const __WEBPACK_DEFAULT_EXPORT__=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((change: string) => void)"}},onEnter:{defaultValue:{value:"() => {}"},description:"",name:"onEnter",required:!1,type:{name:"(() => void)"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isClearable:{defaultValue:{value:"false"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_TextField__WEBPACK_IMPORTED_MODULE_0__.Z});var _TextField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TextField/TextField.tsx")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);