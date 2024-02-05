/*! For license information please see components-Layout-Desktop-Desktop-mdx.84fd372c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[5312,9944],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Layout/Desktop/Desktop.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalStyles:()=>AdditionalStyles,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Desktop_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Desktop(_ref){var left=_ref.left,children=_ref.children,right=_ref.right,className=_ref.className,template=classnames_default()(["flex-1 overflow-hidden w-full",className]);return(0,jsx_runtime.jsxs)("div",{className:"flex h-screen w-full",children:[(0,jsx_runtime.jsx)("div",{className:"h-screen relative shadow-md overflow-y-auto",children:left}),(0,jsx_runtime.jsx)("div",{className:template,children}),(0,jsx_runtime.jsx)("div",{className:"h-screen shadow-md",children:right})]})}Desktop.displayName="Desktop";const Desktop_Desktop=Desktop;try{Desktop.displayName="Desktop",Desktop.__docgenInfo={description:"",displayName:"Desktop",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Desktop/Desktop.tsx#Desktop"]={docgenInfo:Desktop.__docgenInfo,name:"Desktop",path:"src/components/Layout/Desktop/Desktop.tsx#Desktop"})}catch(__react_docgen_typescript_loader_error){}const Desktop_stories={title:"Toolbox/Layout/Desktop",component:Desktop_Desktop,parameters:{viewport:{viewport:{defaultViewport:"lg"},layout:"fullscreen"}},decorators:[function(Story){return(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)(Story,{})})}]};function Default(){return(0,jsx_runtime.jsx)(Desktop_Desktop,{left:(0,jsx_runtime.jsx)("div",{className:"bg-toolbox-primary h-screen p-4 w-[206px]",children:"SIDE NAV"}),right:(0,jsx_runtime.jsx)("div",{className:"bg-toolbox-secondary h-screen p-4 min-w-sm",children:"ACTION CONTAINER"}),children:(0,jsx_runtime.jsx)("div",{className:"h-screen p-4",children:"MAIN CONTENT"})})}function AdditionalStyles(){return(0,jsx_runtime.jsx)(Desktop_Desktop,{className:"bg-toolbox-feedback-orange",left:(0,jsx_runtime.jsx)("div",{className:"bg-toolbox-primary h-screen p-4 w-[206px]",children:"SIDE NAV"}),right:(0,jsx_runtime.jsx)("div",{className:"bg-toolbox-secondary h-screen p-4 min-w-sm",children:"ACTION CONTAINER"}),children:(0,jsx_runtime.jsx)("div",{className:"h-screen p-4",children:"MAIN CONTENT"})})}Default.displayName="Default",AdditionalStyles.displayName="AdditionalStyles",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <Layout left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>} right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}>\n      <div className="h-screen p-4">MAIN CONTENT</div>\n    </Layout>;\n}',...Default.parameters?.docs?.source}}},AdditionalStyles.parameters={...AdditionalStyles.parameters,docs:{...AdditionalStyles.parameters?.docs,source:{originalSource:'function AdditionalStyles() {\n  return <Layout className="bg-toolbox-feedback-orange" left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>} right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}>\n      <div className="h-screen p-4">MAIN CONTENT</div>\n    </Layout>;\n}',...AdditionalStyles.parameters?.docs?.source}}};const __namedExportsOrder=["Default","AdditionalStyles"]},"./src/components/Layout/Desktop/Desktop.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Desktop_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Layout/Desktop/Desktop.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Desktop_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"desktoplayout",children:"DesktopLayout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DesktopLayout"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { DesktopLayout } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Desktop_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"additional-styles",children:"Additional styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Desktop_stories__WEBPACK_IMPORTED_MODULE_2__.AdditionalStyles})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);