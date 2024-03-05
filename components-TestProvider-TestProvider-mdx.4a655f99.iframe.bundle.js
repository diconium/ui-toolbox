(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[7384,3376],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/TestProvider/TestProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexComponent:()=>ComplexComponent,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TestProvider_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js"),Wrapper=react.forwardRef((function(_props,ref){return(0,jsx_runtime.jsx)("template",{ref})}));function TestProvider(_ref){var children=_ref.children,_ref$selector=_ref.selector,selector=void 0===_ref$selector?"test":_ref$selector,reference=_ref.reference,_ref$enableInProducti=_ref.enableInProduction,enableInProduction=void 0!==_ref$enableInProducti&&_ref$enableInProducti,shouldUseProvider="test"===process.env.NEXT_PUBLIC_NODE_ENV||enableInProduction,parentRef=function useTestId(shouldUseProvider,selector,reference){var parentRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){if(shouldUseProvider){var parentNode=parentRef.current;(null==parentNode?void 0:parentNode.nextElementSibling).dataset[selector]=reference}}),[parentRef.current]),parentRef}(shouldUseProvider,selector,reference);return shouldUseProvider?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Wrapper,{ref:parentRef}),children]}):children}const TestProvider_TestProvider=TestProvider;try{TestProvider.displayName="TestProvider",TestProvider.__docgenInfo={description:"",displayName:"TestProvider",props:{reference:{defaultValue:null,description:"",name:"reference",required:!0,type:{name:"string"}},selector:{defaultValue:{value:"test"},description:"",name:"selector",required:!1,type:{name:"string"}},enableInProduction:{defaultValue:{value:"false"},description:"",name:"enableInProduction",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TestProvider/TestProvider.tsx#TestProvider"]={docgenInfo:TestProvider.__docgenInfo,name:"TestProvider",path:"src/components/TestProvider/TestProvider.tsx#TestProvider"})}catch(__react_docgen_typescript_loader_error){}var TextField=__webpack_require__("./src/components/TextField/index.ts");const TestProvider_stories={title:"Toolbox/TestProvider",component:TestProvider_TestProvider};function Default(){return(0,jsx_runtime.jsx)("section",{children:(0,jsx_runtime.jsx)(TestProvider_TestProvider,{reference:"testid",selector:"cy",enableInProduction:!0,children:(0,jsx_runtime.jsx)("a",{href:"/home",children:"Home"})})})}function ComplexComponent(){return(0,jsx_runtime.jsx)("section",{children:(0,jsx_runtime.jsx)(TestProvider_TestProvider,{reference:"testid",selector:"cy",enableInProduction:!0,children:(0,jsx_runtime.jsx)(TextField.c,{value:"with text",placeholder:"Placeholder text"})})})}Default.displayName="Default",ComplexComponent.displayName="ComplexComponent",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <section>\n      <TestProvider reference="testid" selector="cy" enableInProduction>\n        <a href="/home">Home</a>\n      </TestProvider>\n    </section>;\n}',...Default.parameters?.docs?.source}}},ComplexComponent.parameters={...ComplexComponent.parameters,docs:{...ComplexComponent.parameters?.docs,source:{originalSource:'function ComplexComponent() {\n  return <section>\n      <TestProvider reference="testid" selector="cy" enableInProduction>\n        <TextField value="with text" placeholder="Placeholder text" />\n      </TestProvider>\n    </section>;\n}',...ComplexComponent.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ComplexComponent"]},"./src/components/TestProvider/TestProvider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_TestProvider_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TestProvider/TestProvider.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Qb,{of:_TestProvider_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"testprovider",children:"TestProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"TestProvider"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { TestProvider } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_TestProvider_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"complexcomponent",children:"ComplexComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_TestProvider_stories__WEBPACK_IMPORTED_MODULE_2__.ComplexComponent})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.cp});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/TextField/Template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>validationToColor,c:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),validationToColor=function validationToColor(validation){return"valid"===validation?"green":"warning"===validation?"orange":"error"===validation?"red":"black"};function Template(_ref){var label=_ref.label,hint=_ref.hint,disabled=_ref.disabled,validation=_ref.validation,children=_ref.children,mask=classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-xs leading-3 px-3 py-1",!validation&&{"text-toolbox-neutral-500":!disabled,"text-toolbox-neutral-200":disabled},validation&&"text-toolbox-feedback-".concat(validationToColor(validation)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-col",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"inline-flex items-center",children}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:mask,children:hint})]})}Template.displayName="Template";const __WEBPACK_DEFAULT_EXPORT__=Template;try{validationToColor.displayName="validationToColor",validationToColor.__docgenInfo={description:"",displayName:"validationToColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#validationToColor"]={docgenInfo:validationToColor.__docgenInfo,name:"validationToColor",path:"src/components/TextField/Template.tsx#validationToColor"})}catch(__react_docgen_typescript_loader_error){}try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/Template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/TextField/Template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Icon/index.ts")),_Template__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TextField/Template.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="peer w-full border px-4 py-2.5 rounded-lg\n  text-sm bg-toolbox-white\n  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral",validationToIcon=function validationToIcon(validation){return"valid"===validation?"circle-check":"warning"===validation?"triangle-exclamation":"circle-xmark"};function TextField(_ref){var placeholder=_ref.placeholder,label=_ref.label,value=_ref.value,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,hint=_ref.hint,validation=_ref.validation,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$onChange=_ref.onChange,_onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$onEnter=_ref.onEnter,onEnter=void 0===_ref$onEnter?function(){}:_ref$onEnter,_ref$onFocus=_ref.onFocus,_onFocus=void 0===_ref$onFocus?function(){}:_ref$onFocus,_ref$onBlur=_ref.onBlur,_onBlur=void 0===_ref$onBlur?function(){}:_ref$onBlur,className=_ref.className,_ref$isClearable=_ref.isClearable,isClearable=void 0!==_ref$isClearable&&_ref$isClearable,children=_ref.children,color=(0,_Template__WEBPACK_IMPORTED_MODULE_3__.Q)(validation),isValid="valid"===validation,template=classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,[BASE_TEMPLATE,!validation&&"border-toolbox-neutral-200",!validation&&"text-toolbox-neutral-900",!validation&&!disabled&&"placeholder-toolbox-neutral-500"].concat([validation&&!isValid&&"border-toolbox-feedback-".concat(color),validation&&!isValid&&"focus:border-toolbox-feedback-".concat(color),validation&&isValid&&"border-toolbox-neutral-200",validation&&"text-toolbox-neutral-500"],[disabled&&"border-toolbox-neutral-50",disabled&&"placeholder-toolbox-neutral-200",disabled&&"text-toolbox-neutral",className]));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Template__WEBPACK_IMPORTED_MODULE_3__.c,{label,hint,disabled,validation,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{onKeyDown:function handleEnter(event){"Enter"===event.key&&onEnter()},type,disabled,className:template,placeholder,value,onChange:function onChange(event){return _onChange(event.target.value)},onFocus:function onFocus(){return _onFocus()},onBlur:function onBlur(){return _onBlur()}}),children,validation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.c,{icon:validationToIcon(validation),size:"s",className:"text-toolbox-feedback-".concat(color," -ml-10")}),isClearable&&!!value&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",className:"-ml-8 mt-1",onClick:function onClick(){return _onChange("")},"aria-label":"Clear",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.c,{icon:"xmark",size:"s"})})]})}TextField.displayName="TextField";const __WEBPACK_DEFAULT_EXPORT__=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((change: string) => void)"}},onEnter:{defaultValue:{value:"() => {}"},description:"",name:"onEnter",required:!1,type:{name:"(() => void)"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isClearable:{defaultValue:{value:"false"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>_TextField__WEBPACK_IMPORTED_MODULE_0__.c});var _TextField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TextField/TextField.tsx")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);