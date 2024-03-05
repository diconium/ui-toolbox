(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[4444,6752],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Full:()=>Full,Subtitle:()=>Subtitle,WithAction:()=>WithAction,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./src/components/Icon/index.ts"),typeToColor=function typeToColor(){var type=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info",shade=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"":"-50",color="bg-toolbox-primary".concat(shade);switch(type){case"success":color="bg-toolbox-feedback-green".concat(shade);break;case"warning":color="bg-toolbox-feedback-orange".concat(shade);break;case"error":color="bg-toolbox-feedback-red".concat(shade)}return color},typeToBorderColor=function typeToBorderColor(){var border="border-toolbox-primary";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info"){case"success":border="border-toolbox-feedback-green";break;case"warning":border="border-toolbox-feedback-orange";break;case"error":border="border-toolbox-feedback-red"}return border},typeToIcon=function typeToIcon(){var icon="circle-information";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info"){case"success":icon="circle-check";break;case"warning":icon="triangle-exclamation";break;case"error":icon="circle-xmark"}return icon},typeToTextColor=function typeToTextColor(){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return"text-toolbox-white";var text="text-toolbox-primary";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info"){case"success":text="text-toolbox-feedback-green";break;case"warning":text="text-toolbox-feedback-orange";break;case"error":text="text-toolbox-feedback-red"}return text};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Header(_ref){var label=_ref.label,optional={"text-toolbox-white":_ref.filled},template=classnames_default()(["text-toolbox-neutral leading-5 text-base",optional]);return(0,jsx_runtime.jsx)("div",{className:template,children:label})}function HeaderWithSubtitle(_ref2){var label=_ref2.label,subtitle=_ref2.subtitle,base="text-toolbox-neutral text-base",optional={"text-toolbox-white":_ref2.filled};return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()(base,"leading-6 font-semibold",optional),children:label}),(0,jsx_runtime.jsx)("div",{className:classnames_default()(base,"leading-5",optional),children:subtitle})]})}function Toast(_ref3){var label=_ref3.label,_ref3$subtitle=_ref3.subtitle,subtitle=void 0===_ref3$subtitle?"":_ref3$subtitle,_ref3$type=_ref3.type,type=void 0===_ref3$type?"info":_ref3$type,_ref3$onClose=_ref3.onClose,onClose=void 0===_ref3$onClose?function(){}:_ref3$onClose,_ref3$icon=_ref3.icon,icon=void 0!==_ref3$icon&&_ref3$icon,_ref3$filled=_ref3.filled,filled=void 0!==_ref3$filled&&_ref3$filled,template=classnames_default()(["flex items-center px-6 py-4","rounded-2xl border box-border",typeToBorderColor(type),typeToColor(type,filled),subtitle?"h-20":"h-13"]);return(0,jsx_runtime.jsxs)("div",{className:template,children:[(0,jsx_runtime.jsxs)("div",{className:"flex-1 flex items-center",children:[icon&&(0,jsx_runtime.jsx)(Icon.c,{className:classnames_default()(typeToTextColor(type,filled),"mr-3"),icon:typeToIcon(type),size:"s"}),!subtitle&&(0,jsx_runtime.jsx)(Header,{label,filled}),subtitle&&(0,jsx_runtime.jsx)(HeaderWithSubtitle,{label,subtitle,filled})]}),(0,jsx_runtime.jsx)("button",{className:"flex items-center",type:"button",onClick:function onClick(){return onClose()},"aria-label":"Close",children:(0,jsx_runtime.jsx)(Icon.c,{className:classnames_default()({"text-toolbox-white":filled}),icon:"xmark",size:"s"})})]})}Header.displayName="Header",HeaderWithSubtitle.displayName="HeaderWithSubtitle",Toast.displayName="Toast";const Toast_Toast=Toast;try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},subtitle:{defaultValue:{value:""},description:"",name:"subtitle",required:!1,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => {}"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:{value:"false"},description:"",name:"icon",required:!1,type:{name:"boolean"}},filled:{defaultValue:{value:"false"},description:"",name:"filled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const Toast_stories={title:"Toolbox/Toast",component:Toast_Toast};function Default(){return(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,jsx_runtime.jsx)(Toast_Toast,{label:"Text Label",type:"success"}),(0,jsx_runtime.jsx)(Toast_Toast,{label:"Text Label",type:"warning"}),(0,jsx_runtime.jsx)(Toast_Toast,{label:"Text Label",type:"error"}),(0,jsx_runtime.jsx)(Toast_Toast,{label:"Text Label",type:"info"}),(0,jsx_runtime.jsx)(Toast_Toast,{filled:!0,label:"Text Label",type:"success"}),(0,jsx_runtime.jsx)(Toast_Toast,{filled:!0,label:"Text Label",type:"warning"}),(0,jsx_runtime.jsx)(Toast_Toast,{filled:!0,label:"Text Label",type:"error"}),(0,jsx_runtime.jsx)(Toast_Toast,{filled:!0,label:"Text Label",type:"info"})]})}function Subtitle(){return(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,jsx_runtime.jsx)(Toast_Toast,{label:"Text Label",subtitle:"Text Label"}),(0,jsx_runtime.jsx)(Toast_Toast,{filled:!0,label:"Text Label",subtitle:"Text Label"})]})}function WithIcon(){return(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",type:"success"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",type:"warning"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",type:"error"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",type:"info"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"success"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"warning"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"error"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",type:"info"})]})}function Full(){return(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"success"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"warning"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"error"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"Text Label",subtitle:"Text Label",type:"info"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"success"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"warning"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"error"}),(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,filled:!0,label:"Text Label",subtitle:"Text Label",type:"info"})]})}function WithAction(){var _useState2=_slicedToArray((0,react.useState)(0),2),counter=_useState2[0],set=_useState2[1];return(0,jsx_runtime.jsx)(Toast_Toast,{icon:!0,label:"With action",subtitle:counter?"onClose called: ".concat(counter):"Press the X",onClose:function onClose(){return set(counter+1)}})}Default.displayName="Default",Subtitle.displayName="Subtitle",WithIcon.displayName="WithIcon",Full.displayName="Full",WithAction.displayName="WithAction",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast label="Text Label" type="success" />\n      <Toast label="Text Label" type="warning" />\n      <Toast label="Text Label" type="error" />\n      <Toast label="Text Label" type="info" />\n      <Toast filled label="Text Label" type="success" />\n      <Toast filled label="Text Label" type="warning" />\n      <Toast filled label="Text Label" type="error" />\n      <Toast filled label="Text Label" type="info" />\n    </div>;\n}',...Default.parameters?.docs?.source}}},Subtitle.parameters={...Subtitle.parameters,docs:{...Subtitle.parameters?.docs,source:{originalSource:'function Subtitle() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast label="Text Label" subtitle="Text Label" />\n      <Toast filled label="Text Label" subtitle="Text Label" />\n    </div>;\n}',...Subtitle.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'function WithIcon() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast icon label="Text Label" type="success" />\n      <Toast icon label="Text Label" type="warning" />\n      <Toast icon label="Text Label" type="error" />\n      <Toast icon label="Text Label" type="info" />\n      <Toast icon filled label="Text Label" type="success" />\n      <Toast icon filled label="Text Label" type="warning" />\n      <Toast icon filled label="Text Label" type="error" />\n      <Toast icon filled label="Text Label" type="info" />\n    </div>;\n}',...WithIcon.parameters?.docs?.source}}},Full.parameters={...Full.parameters,docs:{...Full.parameters?.docs,source:{originalSource:'function Full() {\n  return <div className="grid grid-cols-2 gap-4">\n      <Toast icon label="Text Label" subtitle="Text Label" type="success" />\n      <Toast icon label="Text Label" subtitle="Text Label" type="warning" />\n      <Toast icon label="Text Label" subtitle="Text Label" type="error" />\n      <Toast icon label="Text Label" subtitle="Text Label" type="info" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="success" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="warning" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="error" />\n      <Toast icon filled label="Text Label" subtitle="Text Label" type="info" />\n    </div>;\n}',...Full.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:"function WithAction() {\n  const [counter, set] = useState(0);\n  return <Toast icon label=\"With action\" subtitle={!counter ? 'Press the X' : `onClose called: ${counter}`} onClose={() => set(counter + 1)} />;\n}",...WithAction.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Subtitle","WithIcon","Full","WithAction"]},"./src/components/Toast/Toast.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Toast_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Toast/Toast.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Qb,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"toast",children:"Toast"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Toast"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { Toast } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-subtitle",children:"With Subtitle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.Subtitle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-icons",children:"With icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.WithIcon}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"full",children:"Full"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.Full}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-action",children:"With action"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.WithAction})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.cp});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);