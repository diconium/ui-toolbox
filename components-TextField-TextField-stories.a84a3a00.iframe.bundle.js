"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[4807],{"./src/components/TextField/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Focused:()=>Focused,Type:()=>Type,Validation:()=>Validation,WithAction:()=>WithAction,WithClearButton:()=>WithClearButton,WithHint:()=>WithHint,WithLabel:()=>WithLabel,WithOnEnterAction:()=>WithOnEnterAction,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_TextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TextField/TextField.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/TextField",component:_TextField__WEBPACK_IMPORTED_MODULE_1__.A};function Default(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col space-y-4 w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{placeholder:"Placeholder text"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{value:"with text",placeholder:"Placeholder text"}))}const Focused={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col space-y-4 w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{placeholder:"Placeholder text"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{value:"with text",placeholder:"Placeholder text"})),parameters:{pseudo:{focus:!0}}};function WithValue(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{value:"Lorem Ipsum",placeholder:"Placeholder text"})}function Type(){const[value,set]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col space-y-4 w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{type:"password",label:"Password",placeholder:"Minimum 8 characters",value,onChange:text=>set(text)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{type:"password",label:"Password",placeholder:"Minimum 8 characters",value:"lorem ipsum"}))}function WithLabel(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Lorem Ipsum",placeholder:"Placeholder text"}))}function WithHint(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Lorem Ipsum",placeholder:"Placeholder text",hint:"lorem ipsum"}))}function Disabled(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col space-y-4 w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{disabled:!0,label:"Lorem Ipsum",placeholder:"Placeholder text"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{disabled:!0,label:"Lorem Ipsum",placeholder:"Placeholder text",hint:"lorem ipsum"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{disabled:!0,value:"Disabled but with input",label:"Lorem Ipsum",placeholder:"Placeholder text"}))}function Validation(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col space-y-4 w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{validation:"valid",placeholder:"Placeholder text",value:"Some valid input"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{type:"password",validation:"valid",placeholder:"Placeholder text",value:"Some valid input"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{validation:"warning",placeholder:"Placeholder text",value:"Warning about input",hint:"Your input should include at least 3 numbers."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{type:"password",validation:"warning",placeholder:"Placeholder text",value:"Warning about input",hint:"Your input should include at least 3 numbers."}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{validation:"error",placeholder:"Placeholder text",value:"Error about input",hint:"Your input must include at least 1 number"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{type:"password",validation:"error",placeholder:"Placeholder text",value:"Error about input",hint:"Your input must include at least 1 number"}))}function WithAction(){const[value,set]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Lorem Ipsum",placeholder:"Placeholder text",value,onChange:text=>set(text)}))}function WithOnEnterAction(){const[value,set]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{label:value||"Lorem ipsum",placeholder:"Press enter and see",onEnter:()=>set("Enter pressed")}))}function WithClearButton(){const[value,set]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Press clear button to clear");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[320px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{isClearable:!0,label:"Lorem Ipsum",placeholder:"Placeholder",value,onChange:set}))}const __namedExportsOrder=["Default","Focused","WithValue","Type","WithLabel","WithHint","Disabled","Validation","WithAction","WithOnEnterAction","WithClearButton"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextField placeholder="Placeholder text" />\n      <TextField value="with text" placeholder="Placeholder text" />\n    </div>;\n}',...Default.parameters?.docs?.source}}},Focused.parameters={...Focused.parameters,docs:{...Focused.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="flex flex-col space-y-4 w-[320px]">\n      <TextField placeholder="Placeholder text" />\n      <TextField value="with text" placeholder="Placeholder text" />\n    </div>,\n  parameters: {\n    pseudo: {\n      focus: true\n    }\n  }\n}',...Focused.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:'function WithValue() {\n  return <TextField value="Lorem Ipsum" placeholder="Placeholder text" />;\n}',...WithValue.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:'function Type() {\n  const [value, set] = useState<string>();\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextField type="password" label="Password" placeholder="Minimum 8 characters" value={value} onChange={text => set(text)} />\n      <TextField type="password" label="Password" placeholder="Minimum 8 characters" value="lorem ipsum" />\n    </div>;\n}',...Type.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'function WithLabel() {\n  return <div className="w-[320px]">\n      <TextField label="Lorem Ipsum" placeholder="Placeholder text" />\n    </div>;\n}',...WithLabel.parameters?.docs?.source}}},WithHint.parameters={...WithHint.parameters,docs:{...WithHint.parameters?.docs,source:{originalSource:'function WithHint() {\n  return <div className="w-[320px]">\n      <TextField label="Lorem Ipsum" placeholder="Placeholder text" hint="lorem ipsum" />\n    </div>;\n}',...WithHint.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'function Disabled() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextField disabled label="Lorem Ipsum" placeholder="Placeholder text" />\n      <TextField disabled label="Lorem Ipsum" placeholder="Placeholder text" hint="lorem ipsum" />\n      <TextField disabled value="Disabled but with input" label="Lorem Ipsum" placeholder="Placeholder text" />\n    </div>;\n}',...Disabled.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'function Validation() {\n  return <div className="flex flex-col space-y-4 w-[320px]">\n      <TextField validation="valid" placeholder="Placeholder text" value="Some valid input" />\n      <TextField type="password" validation="valid" placeholder="Placeholder text" value="Some valid input" />\n      <TextField validation="warning" placeholder="Placeholder text" value="Warning about input" hint="Your input should include at least 3 numbers." />\n      <TextField type="password" validation="warning" placeholder="Placeholder text" value="Warning about input" hint="Your input should include at least 3 numbers." />\n      <TextField validation="error" placeholder="Placeholder text" value="Error about input" hint="Your input must include at least 1 number" />\n      <TextField type="password" validation="error" placeholder="Placeholder text" value="Error about input" hint="Your input must include at least 1 number" />\n    </div>;\n}',...Validation.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'function WithAction() {\n  const [value, set] = useState<string>();\n  return <div className="w-[320px]">\n      <TextField label="Lorem Ipsum" placeholder="Placeholder text" value={value} onChange={text => set(text)} />\n    </div>;\n}',...WithAction.parameters?.docs?.source}}},WithOnEnterAction.parameters={...WithOnEnterAction.parameters,docs:{...WithOnEnterAction.parameters?.docs,source:{originalSource:"function WithOnEnterAction() {\n  const [value, set] = useState<string>();\n  return <div className=\"w-[320px]\">\n      <TextField label={value || 'Lorem ipsum'} placeholder=\"Press enter and see\" onEnter={() => set('Enter pressed')} />\n    </div>;\n}",...WithOnEnterAction.parameters?.docs?.source}}},WithClearButton.parameters={...WithClearButton.parameters,docs:{...WithClearButton.parameters?.docs,source:{originalSource:'function WithClearButton() {\n  const [value, set] = useState(\'Press clear button to clear\');\n  return <div className="w-[320px]">\n      <TextField isClearable label="Lorem Ipsum" placeholder="Placeholder" value={value} onChange={set} />\n    </div>;\n}',...WithClearButton.parameters?.docs?.source}}}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Ay});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/TextField/Template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,e:()=>validationToColor});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),validationToColor=function validationToColor(validation){return"valid"===validation?"green":"warning"===validation?"orange":"error"===validation?"red":"black"};function Template(_ref){var label=_ref.label,hint=_ref.hint,disabled=_ref.disabled,validation=_ref.validation,children=_ref.children,mask=classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-xs leading-3 px-3 py-1",!validation&&{"text-toolbox-neutral-500":!disabled,"text-toolbox-neutral-200":disabled},validation&&"text-toolbox-feedback-".concat(validationToColor(validation)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col"},label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:mask},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"inline-flex items-center"},children),hint&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:mask},hint))}const __WEBPACK_DEFAULT_EXPORT__=Template;try{validationToColor.displayName="validationToColor",validationToColor.__docgenInfo={description:"",displayName:"validationToColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#validationToColor"]={docgenInfo:validationToColor.__docgenInfo,name:"validationToColor",path:"src/components/TextField/Template.tsx#validationToColor"})}catch(__react_docgen_typescript_loader_error){}try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/TextField/Template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),_Template__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TextField/Template.tsx"),BASE_TEMPLATE="peer w-full border px-4 py-2.5 rounded-lg\n  text-sm bg-toolbox-white\n  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral",validationToIcon=function validationToIcon(validation){return"valid"===validation?"circle-check":"warning"===validation?"triangle-exclamation":"circle-xmark"};function TextField(_ref){var placeholder=_ref.placeholder,label=_ref.label,value=_ref.value,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,hint=_ref.hint,validation=_ref.validation,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$onChange=_ref.onChange,_onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$onEnter=_ref.onEnter,onEnter=void 0===_ref$onEnter?function(){}:_ref$onEnter,_ref$onFocus=_ref.onFocus,_onFocus=void 0===_ref$onFocus?function(){}:_ref$onFocus,_ref$onBlur=_ref.onBlur,_onBlur=void 0===_ref$onBlur?function(){}:_ref$onBlur,className=_ref.className,_ref$isClearable=_ref.isClearable,isClearable=void 0!==_ref$isClearable&&_ref$isClearable,children=_ref.children,color=(0,_Template__WEBPACK_IMPORTED_MODULE_3__.e)(validation),isValid="valid"===validation,template=classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,[BASE_TEMPLATE,!validation&&"border-toolbox-neutral-200",!validation&&"text-toolbox-neutral-900",!validation&&!disabled&&"placeholder-toolbox-neutral-500"].concat([validation&&!isValid&&"border-toolbox-feedback-".concat(color),validation&&!isValid&&"focus:border-toolbox-feedback-".concat(color),validation&&isValid&&"border-toolbox-neutral-200",validation&&"text-toolbox-neutral-500"],[disabled&&"border-toolbox-neutral-50",disabled&&"placeholder-toolbox-neutral-200",disabled&&"text-toolbox-neutral",className]));return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Template__WEBPACK_IMPORTED_MODULE_3__.A,{label,hint,disabled,validation},react__WEBPACK_IMPORTED_MODULE_1__.createElement("input",{onKeyDown:function handleEnter(event){"Enter"===event.key&&onEnter()},type,disabled,className:template,placeholder,value,onChange:function onChange(event){return _onChange(event.target.value)},onFocus:function onFocus(){return _onFocus()},onBlur:function onBlur(){return _onBlur()}}),children,validation&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon:validationToIcon(validation),size:"s",className:"text-toolbox-feedback-".concat(color," -ml-10")}),isClearable&&!!value&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{type:"button",className:"-ml-8 mt-1",onClick:function onClick(){return _onChange("")},"aria-label":"Clear"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"xmark",size:"s"})))}const __WEBPACK_DEFAULT_EXPORT__=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((change: string) => void)"}},onEnter:{defaultValue:{value:"() => {}"},description:"",name:"onEnter",required:!1,type:{name:"(() => void)"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isClearable:{defaultValue:{value:"false"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}}}]);