"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[2755],{"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Ay});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/Toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Full:()=>Full,Subtitle:()=>Subtitle,WithAction:()=>WithAction,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./src/components/Icon/index.ts"),typeToColor=function typeToColor(){var type=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info",shade=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"":"-50",color="bg-toolbox-primary".concat(shade);switch(type){case"success":color="bg-toolbox-feedback-green".concat(shade);break;case"warning":color="bg-toolbox-feedback-orange".concat(shade);break;case"error":color="bg-toolbox-feedback-red".concat(shade)}return color},typeToBorderColor=function typeToBorderColor(){var border="border-toolbox-primary";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info"){case"success":border="border-toolbox-feedback-green";break;case"warning":border="border-toolbox-feedback-orange";break;case"error":border="border-toolbox-feedback-red"}return border},typeToIcon=function typeToIcon(){var icon="circle-information";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info"){case"success":icon="circle-check";break;case"warning":icon="triangle-exclamation";break;case"error":icon="circle-xmark"}return icon},typeToTextColor=function typeToTextColor(){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return"text-toolbox-white";var text="text-toolbox-primary";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info"){case"success":text="text-toolbox-feedback-green";break;case"warning":text="text-toolbox-feedback-orange";break;case"error":text="text-toolbox-feedback-red"}return text};function Header(_ref){var label=_ref.label,optional={"text-toolbox-white":_ref.filled},template=classnames_default()(["text-toolbox-neutral leading-5 text-base",optional]);return react.createElement("div",{className:template},label)}function HeaderWithSubtitle(_ref2){var label=_ref2.label,subtitle=_ref2.subtitle,base="text-toolbox-neutral text-base",optional={"text-toolbox-white":_ref2.filled};return react.createElement("div",{className:"flex flex-col"},react.createElement("div",{className:classnames_default()(base,"leading-6 font-semibold",optional)},label),react.createElement("div",{className:classnames_default()(base,"leading-5",optional)},subtitle))}function Toast(_ref3){var label=_ref3.label,_ref3$subtitle=_ref3.subtitle,subtitle=void 0===_ref3$subtitle?"":_ref3$subtitle,_ref3$type=_ref3.type,type=void 0===_ref3$type?"info":_ref3$type,_ref3$onClose=_ref3.onClose,onClose=void 0===_ref3$onClose?function(){}:_ref3$onClose,_ref3$icon=_ref3.icon,icon=void 0!==_ref3$icon&&_ref3$icon,_ref3$filled=_ref3.filled,filled=void 0!==_ref3$filled&&_ref3$filled,template=classnames_default()(["flex items-center px-6 py-4","rounded-2xl border box-border",typeToBorderColor(type),typeToColor(type,filled),subtitle?"h-20":"h-13"]);return react.createElement("div",{className:template},react.createElement("div",{className:"flex-1 flex items-center"},icon&&react.createElement(Icon.A,{className:classnames_default()(typeToTextColor(type,filled),"mr-3"),icon:typeToIcon(type),size:"s"}),!subtitle&&react.createElement(Header,{label,filled}),subtitle&&react.createElement(HeaderWithSubtitle,{label,subtitle,filled})),react.createElement("button",{className:"flex items-center",type:"button",onClick:function onClick(){return onClose()},"aria-label":"Close"},react.createElement(Icon.A,{className:classnames_default()({"text-toolbox-white":filled}),icon:"xmark",size:"s"})))}const Toast_Toast=Toast;try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},subtitle:{defaultValue:{value:""},description:"",name:"subtitle",required:!1,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => {}"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:{value:"false"},description:"",name:"icon",required:!1,type:{name:"boolean"}},filled:{defaultValue:{value:"false"},description:"",name:"filled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}const Toast_stories={title:"Toolbox/Toast",component:Toast_Toast};function Default(){return react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement(Toast_Toast,{label:"Text Label",type:"success"}),react.createElement(Toast_Toast,{label:"Text Label",type:"warning"}),react.createElement(Toast_Toast,{label:"Text Label",type:"error"}),react.createElement(Toast_Toast,{label:"Text Label",type:"info"}),react.createElement(Toast_Toast,{filled:!0,label:"Text Label",type:"success"}),react.createElement(Toast_Toast,{filled:!0,label:"Text Label",type:"warning"}),react.createElement(Toast_Toast,{filled:!0,label:"Text Label",type:"error"}),react.createElement(Toast_Toast,{filled:!0,label:"Text Label",type:"info"}))}function Subtitle(){return react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement(Toast_Toast,{label:"Text Label",subtitle:"Text Label"}),react.createElement(Toast_Toast,{filled:!0,label:"Text Label",subtitle:"Text Label"}))}function WithIcon(){return react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement(Toast_Toast,{icon:!0,label:"Text Label",type:"success"}),react.createElement(Toast_Toast,{icon:!0,label:"Text Label",type:"warning"}),react.createElement(Toast_Toast,{icon:!0,label:"Text Label",type:"error"}),react.createElement(Toast_Toast,{icon:!0,label:"Text Label",type:"info"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"success"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"warning"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"error"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"info"}))}function Full(){return react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"success"}),react.createElement(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"warning"}),react.createElement(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"error"}),react.createElement(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"info"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"success"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"warning"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"error"}),react.createElement(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"info"}))}function WithAction(){const[counter,set]=(0,react.useState)(0);return react.createElement(Toast_Toast,{icon:!0,label:"With action",subtitle:counter?`onClose called: ${counter}`:"Press the X",onClose:()=>set(counter+1)})}const __namedExportsOrder=["Default","Subtitle","WithIcon","Full","WithAction"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast label="Text Label" type="success" />\n      <Toast label="Text Label" type="warning" />\n      <Toast label="Text Label" type="error" />\n      <Toast label="Text Label" type="info" />\n      <Toast filled label="Text Label" type="success" />\n      <Toast filled label="Text Label" type="warning" />\n      <Toast filled label="Text Label" type="error" />\n      <Toast filled label="Text Label" type="info" />\n    </div>;\n}',...Default.parameters?.docs?.source}}},Subtitle.parameters={...Subtitle.parameters,docs:{...Subtitle.parameters?.docs,source:{originalSource:'function Subtitle() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast label="Text Label" subtitle="Text Label" />\n      <Toast filled label="Text Label" subtitle="Text Label" />\n    </div>;\n}',...Subtitle.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'function WithIcon() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast icon label="Text Label" type="success" />\n      <Toast icon label="Text Label" type="warning" />\n      <Toast icon label="Text Label" type="error" />\n      <Toast icon label="Text Label" type="info" />\n      <Toast icon filled label="Text Label" type="success" />\n      <Toast icon filled label="Text Label" type="warning" />\n      <Toast icon filled label="Text Label" type="error" />\n      <Toast icon filled label="Text Label" type="info" />\n    </div>;\n}',...WithIcon.parameters?.docs?.source}}},Full.parameters={...Full.parameters,docs:{...Full.parameters?.docs,source:{originalSource:'function Full() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast icon label="Text Label" subtitle="Text Label" type="success" />\n      <Toast icon label="Text Label" subtitle="Text Label" type="warning" />\n      <Toast icon label="Text Label" subtitle="Text Label" type="error" />\n      <Toast icon label="Text Label" subtitle="Text Label" type="info" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="success" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="warning" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="error" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="info" />\n    </div>;\n}',...Full.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:"function WithAction() {\n  const [counter, set] = useState(0);\n  return <Toast icon label=\"With action\" subtitle={!counter ? 'Press the X' : `onClose called: ${counter}`} onClose={() => set(counter + 1)} />;\n}",...WithAction.parameters?.docs?.source}}}}}]);