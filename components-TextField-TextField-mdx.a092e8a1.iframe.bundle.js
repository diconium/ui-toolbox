"use strict";(self.webpackChunk_dicoauto_toolbox=self.webpackChunk_dicoauto_toolbox||[]).push([[9497,8914],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/TextField/TextField.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_TextField_stories__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/TextField/TextField.tsx"),__webpack_require__("./src/components/TextField/TextField.stories.tsx"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"textfield",children:"TextField"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"TextField"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { TextField } from '@dicoauto/toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"statefocused",children:"State:Focused"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.Focused}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"set-the-value",children:"Set the value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.WithValue}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"different-types",children:"Different Types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.Type}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-label",children:"With Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.WithLabel}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-hint",children:"With Hint"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.WithHint}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.Disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.Validation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-action",children:"With Action"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.WithAction}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-onenter-action",children:"With onEnter Action"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.WithOnEnterAction}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-clear-button",children:"With clear button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_TextField_stories__WEBPACK_IMPORTED_MODULE_3__.WithClearButton})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/TextField/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Focused:()=>Focused,Type:()=>Type,Validation:()=>Validation,WithAction:()=>WithAction,WithClearButton:()=>WithClearButton,WithHint:()=>WithHint,WithLabel:()=>WithLabel,WithOnEnterAction:()=>WithOnEnterAction,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Focused$parameters,_Focused$parameters2,_WithValue$parameters,_WithValue$parameters2,_Type$parameters,_Type$parameters2,_WithLabel$parameters,_WithLabel$parameters2,_WithHint$parameters,_WithHint$parameters2,_Disabled$parameters,_Disabled$parameters2,_Validation$parameter,_Validation$parameter2,_WithAction$parameter,_WithAction$parameter2,_WithOnEnterAction$pa,_WithOnEnterAction$pa2,_WithClearButton$para,_WithClearButton$para2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_TextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TextField/TextField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/TextField",component:_TextField__WEBPACK_IMPORTED_MODULE_1__.Z};function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{placeholder:"Placeholder text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{value:"with text",placeholder:"Placeholder text"})]})}Default.displayName="Default";var Focused={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{placeholder:"Placeholder text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{value:"with text",placeholder:"Placeholder text"})]})},parameters:{pseudo:{focus:!0}}};function WithValue(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{value:"Lorem Ipsum",placeholder:"Placeholder text"})}function Type(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),value=_useState2[0],set=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{type:"password",label:"Password",placeholder:"Minimum 8 characters",value,onChange:function onChange(text){return set(text)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{type:"password",label:"Password",placeholder:"Minimum 8 characters",value:"lorem ipsum"})]})}function WithLabel(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Lorem Ipsum",placeholder:"Placeholder text"})}function WithHint(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Lorem Ipsum",placeholder:"Placeholder text",hint:"lorem ipsum"})}function Disabled(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{disabled:!0,label:"Lorem Ipsum",placeholder:"Placeholder text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{disabled:!0,label:"Lorem Ipsum",placeholder:"Placeholder text",hint:"lorem ipsum"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{disabled:!0,value:"Disabled but with input",label:"Lorem Ipsum",placeholder:"Placeholder text"})]})}function Validation(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{validation:"valid",placeholder:"Placeholder text",value:"Some valid input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{type:"password",validation:"valid",placeholder:"Placeholder text",value:"Some valid input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{validation:"warning",placeholder:"Placeholder text",value:"Warning about input",hint:"Your input should include at least 3 numbers."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{type:"password",validation:"warning",placeholder:"Placeholder text",value:"Warning about input",hint:"Your input should include at least 3 numbers."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{validation:"error",placeholder:"Placeholder text",value:"Error about input",hint:"Your input must include at least 1 number"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{type:"password",validation:"error",placeholder:"Placeholder text",value:"Error about input",hint:"Your input must include at least 1 number"})]})}function WithAction(){var _useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),value=_useState4[0],set=_useState4[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Lorem Ipsum",placeholder:"Placeholder text",value,onChange:function onChange(text){return set(text)}})}function WithOnEnterAction(){var _useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),value=_useState6[0],set=_useState6[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{label:value||"Lorem ipsum",placeholder:"Press enter and see",onEnter:function onEnter(){return set("Enter pressed")}})}function WithClearButton(){var _useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Press clear button to clear"),2),value=_useState8[0],set=_useState8[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,{isClearable:!0,label:"Lorem Ipsum",placeholder:"Placeholder",value,onChange:set})}WithValue.displayName="WithValue",Type.displayName="Type",WithLabel.displayName="WithLabel",WithHint.displayName="WithHint",Disabled.displayName="Disabled",Validation.displayName="Validation",WithAction.displayName="WithAction",WithOnEnterAction.displayName="WithOnEnterAction",WithClearButton.displayName="WithClearButton",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'function Default() {\n  return <div className="flex flex-col space-y-4">\n      <TextField placeholder="Placeholder text" />\n      <TextField value="with text" placeholder="Placeholder text" />\n    </div>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Focused.parameters=_objectSpread(_objectSpread({},Focused.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Focused$parameters=Focused.parameters)||void 0===_Focused$parameters?void 0:_Focused$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div className="flex flex-col space-y-4">\n      <TextField placeholder="Placeholder text" />\n      <TextField value="with text" placeholder="Placeholder text" />\n    </div>,\n  parameters: {\n    pseudo: {\n      focus: true\n    }\n  }\n}'},null===(_Focused$parameters2=Focused.parameters)||void 0===_Focused$parameters2||null===(_Focused$parameters2=_Focused$parameters2.docs)||void 0===_Focused$parameters2?void 0:_Focused$parameters2.source)})}),WithValue.parameters=_objectSpread(_objectSpread({},WithValue.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithValue$parameters=WithValue.parameters)||void 0===_WithValue$parameters?void 0:_WithValue$parameters.docs),{},{source:_objectSpread({originalSource:'function WithValue() {\n  return <TextField value="Lorem Ipsum" placeholder="Placeholder text" />;\n}'},null===(_WithValue$parameters2=WithValue.parameters)||void 0===_WithValue$parameters2||null===(_WithValue$parameters2=_WithValue$parameters2.docs)||void 0===_WithValue$parameters2?void 0:_WithValue$parameters2.source)})}),Type.parameters=_objectSpread(_objectSpread({},Type.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Type$parameters=Type.parameters)||void 0===_Type$parameters?void 0:_Type$parameters.docs),{},{source:_objectSpread({originalSource:'function Type() {\n  const [value, set] = useState<string>();\n  return <div className="flex flex-col space-y-4">\n      <TextField type="password" label="Password" placeholder="Minimum 8 characters" value={value} onChange={text => set(text)} />\n      <TextField type="password" label="Password" placeholder="Minimum 8 characters" value="lorem ipsum" />\n    </div>;\n}'},null===(_Type$parameters2=Type.parameters)||void 0===_Type$parameters2||null===(_Type$parameters2=_Type$parameters2.docs)||void 0===_Type$parameters2?void 0:_Type$parameters2.source)})}),WithLabel.parameters=_objectSpread(_objectSpread({},WithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLabel$parameters=WithLabel.parameters)||void 0===_WithLabel$parameters?void 0:_WithLabel$parameters.docs),{},{source:_objectSpread({originalSource:'function WithLabel() {\n  return <TextField label="Lorem Ipsum" placeholder="Placeholder text" />;\n}'},null===(_WithLabel$parameters2=WithLabel.parameters)||void 0===_WithLabel$parameters2||null===(_WithLabel$parameters2=_WithLabel$parameters2.docs)||void 0===_WithLabel$parameters2?void 0:_WithLabel$parameters2.source)})}),WithHint.parameters=_objectSpread(_objectSpread({},WithHint.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithHint$parameters=WithHint.parameters)||void 0===_WithHint$parameters?void 0:_WithHint$parameters.docs),{},{source:_objectSpread({originalSource:'function WithHint() {\n  return <TextField label="Lorem Ipsum" placeholder="Placeholder text" hint="lorem ipsum" />;\n}'},null===(_WithHint$parameters2=WithHint.parameters)||void 0===_WithHint$parameters2||null===(_WithHint$parameters2=_WithHint$parameters2.docs)||void 0===_WithHint$parameters2?void 0:_WithHint$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:'function Disabled() {\n  return <div className="flex flex-col space-y-4">\n      <TextField disabled label="Lorem Ipsum" placeholder="Placeholder text" />\n      <TextField disabled label="Lorem Ipsum" placeholder="Placeholder text" hint="lorem ipsum" />\n      <TextField disabled value="Disabled but with input" label="Lorem Ipsum" placeholder="Placeholder text" />\n    </div>;\n}'},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})}),Validation.parameters=_objectSpread(_objectSpread({},Validation.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Validation$parameter=Validation.parameters)||void 0===_Validation$parameter?void 0:_Validation$parameter.docs),{},{source:_objectSpread({originalSource:'function Validation() {\n  return <div className="flex flex-col space-y-4">\n      <TextField validation="valid" placeholder="Placeholder text" value="Some valid input" />\n      <TextField type="password" validation="valid" placeholder="Placeholder text" value="Some valid input" />\n      <TextField validation="warning" placeholder="Placeholder text" value="Warning about input" hint="Your input should include at least 3 numbers." />\n      <TextField type="password" validation="warning" placeholder="Placeholder text" value="Warning about input" hint="Your input should include at least 3 numbers." />\n      <TextField validation="error" placeholder="Placeholder text" value="Error about input" hint="Your input must include at least 1 number" />\n      <TextField type="password" validation="error" placeholder="Placeholder text" value="Error about input" hint="Your input must include at least 1 number" />\n    </div>;\n}'},null===(_Validation$parameter2=Validation.parameters)||void 0===_Validation$parameter2||null===(_Validation$parameter2=_Validation$parameter2.docs)||void 0===_Validation$parameter2?void 0:_Validation$parameter2.source)})}),WithAction.parameters=_objectSpread(_objectSpread({},WithAction.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithAction$parameter=WithAction.parameters)||void 0===_WithAction$parameter?void 0:_WithAction$parameter.docs),{},{source:_objectSpread({originalSource:'function WithAction() {\n  const [value, set] = useState<string>();\n  return <TextField label="Lorem Ipsum" placeholder="Placeholder text" value={value} onChange={text => set(text)} />;\n}'},null===(_WithAction$parameter2=WithAction.parameters)||void 0===_WithAction$parameter2||null===(_WithAction$parameter2=_WithAction$parameter2.docs)||void 0===_WithAction$parameter2?void 0:_WithAction$parameter2.source)})}),WithOnEnterAction.parameters=_objectSpread(_objectSpread({},WithOnEnterAction.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithOnEnterAction$pa=WithOnEnterAction.parameters)||void 0===_WithOnEnterAction$pa?void 0:_WithOnEnterAction$pa.docs),{},{source:_objectSpread({originalSource:"function WithOnEnterAction() {\n  const [value, set] = useState<string>();\n  return <TextField label={value || 'Lorem ipsum'} placeholder=\"Press enter and see\" onEnter={() => set('Enter pressed')} />;\n}"},null===(_WithOnEnterAction$pa2=WithOnEnterAction.parameters)||void 0===_WithOnEnterAction$pa2||null===(_WithOnEnterAction$pa2=_WithOnEnterAction$pa2.docs)||void 0===_WithOnEnterAction$pa2?void 0:_WithOnEnterAction$pa2.source)})}),WithClearButton.parameters=_objectSpread(_objectSpread({},WithClearButton.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithClearButton$para=WithClearButton.parameters)||void 0===_WithClearButton$para?void 0:_WithClearButton$para.docs),{},{source:_objectSpread({originalSource:'function WithClearButton() {\n  const [value, set] = useState(\'Press clear button to clear\');\n  return <TextField isClearable label="Lorem Ipsum" placeholder="Placeholder" value={value} onChange={set} />;\n}'},null===(_WithClearButton$para2=WithClearButton.parameters)||void 0===_WithClearButton$para2||null===(_WithClearButton$para2=_WithClearButton$para2.docs)||void 0===_WithClearButton$para2?void 0:_WithClearButton$para2.source)})});var __namedExportsOrder=["Default","Focused","WithValue","Type","WithLabel","WithHint","Disabled","Validation","WithAction","WithOnEnterAction","WithClearButton"]},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/TextField/Template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>validationToColor});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),validationToColor=function validationToColor(validation){return"valid"===validation?"green":"warning"===validation?"orange":"error"===validation?"red":"black"};function Template(_ref){var label=_ref.label,hint=_ref.hint,disabled=_ref.disabled,validation=_ref.validation,children=_ref.children,mask=classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-xs leading-3 px-3 py-1",!validation&&{"text-toolbox-neutral-500":!disabled,"text-toolbox-neutral-200":disabled},validation&&"text-toolbox-feedback-".concat(validationToColor(validation)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"inline-flex items-center",children}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:hint})]})}Template.displayName="Template";const __WEBPACK_DEFAULT_EXPORT__=Template;try{validationToColor.displayName="validationToColor",validationToColor.__docgenInfo={description:"",displayName:"validationToColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#validationToColor"]={docgenInfo:validationToColor.__docgenInfo,name:"validationToColor",path:"src/components/TextField/Template.tsx#validationToColor"})}catch(__react_docgen_typescript_loader_error){}try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/TextField/Template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Icon/index.ts")),_Template__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TextField/Template.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="peer w-full border px-4 py-2.5 rounded-lg max-w-xs\n  text-sm bg-toolbox-white\n  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral",validationToIcon=function validationToIcon(validation){return"valid"===validation?"circle-check":"warning"===validation?"triangle-exclamation":"circle-xmark"};function TextField(_ref){var placeholder=_ref.placeholder,label=_ref.label,value=_ref.value,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,hint=_ref.hint,validation=_ref.validation,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$onChange=_ref.onChange,_onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$onEnter=_ref.onEnter,onEnter=void 0===_ref$onEnter?function(){}:_ref$onEnter,_ref$onFocus=_ref.onFocus,_onFocus=void 0===_ref$onFocus?function(){}:_ref$onFocus,_ref$onBlur=_ref.onBlur,_onBlur=void 0===_ref$onBlur?function(){}:_ref$onBlur,className=_ref.className,_ref$isClearable=_ref.isClearable,isClearable=void 0!==_ref$isClearable&&_ref$isClearable,children=_ref.children,color=(0,_Template__WEBPACK_IMPORTED_MODULE_3__.g)(validation),isValid="valid"===validation,template=classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,[BASE_TEMPLATE,!validation&&"border-toolbox-neutral-200",!validation&&"text-toolbox-neutral-900",!validation&&!disabled&&"placeholder-toolbox-neutral-500"].concat([validation&&!isValid&&"border-toolbox-feedback-".concat(color),validation&&!isValid&&"focus:border-toolbox-feedback-".concat(color),validation&&isValid&&"border-toolbox-neutral-200",validation&&"text-toolbox-neutral-500"],[disabled&&"border-toolbox-neutral-50",disabled&&"placeholder-toolbox-neutral-200",disabled&&"text-toolbox-neutral",className]));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Template__WEBPACK_IMPORTED_MODULE_3__.Z,{label,hint,disabled,validation,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{onKeyDown:function handleEnter(event){"Enter"===event.key&&(event.preventDefault(),onEnter())},type,disabled,className:template,placeholder,value,onChange:function onChange(event){return _onChange(event.target.value)},onFocus:function onFocus(){return _onFocus()},onBlur:function onBlur(){return _onBlur()}}),children,validation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:validationToIcon(validation),size:"s",className:"text-toolbox-feedback-".concat(color," -ml-10")}),isClearable&&!!value&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",className:"-ml-8 mt-1",onClick:function onClick(){return _onChange("")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:"xmark",size:"s"})})]})}TextField.displayName="TextField";const __WEBPACK_DEFAULT_EXPORT__=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((change: string) => void)"}},onEnter:{defaultValue:{value:"() => {}"},description:"",name:"onEnter",required:!1,type:{name:"(() => void)"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isClearable:{defaultValue:{value:"false"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}}}]);