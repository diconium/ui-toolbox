"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[3272,3783],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/TopNavigation/TopNavigation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_toolbox_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_TopNavigation_stories__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/TopNavigation/TopNavigation.tsx"),__webpack_require__("./src/components/Icon/index.ts"),__webpack_require__("./src/components/TopNavigation/TopNavigation.stories.tsx"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_home_runner_work_toolbox_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{of:_TopNavigation_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"topnavigation",children:"TopNavigation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"TopNavigation"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { TopNavigation } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_TopNavigation_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-leading-text",children:"With leading text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_TopNavigation_stories__WEBPACK_IMPORTED_MODULE_4__.WithLeadingText}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-subtitle",children:"With subtitle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_TopNavigation_stories__WEBPACK_IMPORTED_MODULE_4__.WithSubtitle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-children",children:"With children"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_TopNavigation_stories__WEBPACK_IMPORTED_MODULE_4__.WithChildren}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-children-on-the-left-side",children:"With children on the left side"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_TopNavigation_stories__WEBPACK_IMPORTED_MODULE_4__.WithLeftSide})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_toolbox_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/TopNavigation/TopNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithChildren:()=>WithChildren,WithLeadingText:()=>WithLeadingText,WithLeftSide:()=>WithLeftSide,WithSubtitle:()=>WithSubtitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_WithLeadingText$para,_WithLeadingText$para2,_WithSubtitle$paramet,_WithSubtitle$paramet2,_WithChildren$paramet,_WithChildren$paramet2,_WithLeftSide$paramet,_WithLeftSide$paramet2,_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/index.ts"),_TopNavigation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TopNavigation/TopNavigation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/TopNavigation",component:_TopNavigation__WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{viewport:{defaultViewport:"sm"}},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"w-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})})}]};function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TopNavigation__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"TITLE"})}function WithLeadingText(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TopNavigation__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"TITLE",leading:"some more text"})}function WithSubtitle(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TopNavigation__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"TITLE",leading:"some more text",subtitle:"TEXT"})}function WithChildren(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_TopNavigation__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"TITLE",leading:"some more text",subtitle:"TEXT",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"filter"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"bell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"menu"})]})}function WithLeftSide(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_TopNavigation__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"TITLE",leading:"some more text",subtitle:"TEXT",left:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"arrow-narrow-left"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"filter"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"bell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"menu"})]})}Default.displayName="Default",WithLeadingText.displayName="WithLeadingText",WithSubtitle.displayName="WithSubtitle",WithChildren.displayName="WithChildren",WithLeftSide.displayName="WithLeftSide",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'function Default() {\n  return <TopNavigation title="TITLE" />;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithLeadingText.parameters=_objectSpread(_objectSpread({},WithLeadingText.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLeadingText$para=WithLeadingText.parameters)||void 0===_WithLeadingText$para?void 0:_WithLeadingText$para.docs),{},{source:_objectSpread({originalSource:'function WithLeadingText() {\n  return <TopNavigation title="TITLE" leading="some more text" />;\n}'},null===(_WithLeadingText$para2=WithLeadingText.parameters)||void 0===_WithLeadingText$para2||null===(_WithLeadingText$para2=_WithLeadingText$para2.docs)||void 0===_WithLeadingText$para2?void 0:_WithLeadingText$para2.source)})}),WithSubtitle.parameters=_objectSpread(_objectSpread({},WithSubtitle.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSubtitle$paramet=WithSubtitle.parameters)||void 0===_WithSubtitle$paramet?void 0:_WithSubtitle$paramet.docs),{},{source:_objectSpread({originalSource:'function WithSubtitle() {\n  return <TopNavigation title="TITLE" leading="some more text" subtitle="TEXT" />;\n}'},null===(_WithSubtitle$paramet2=WithSubtitle.parameters)||void 0===_WithSubtitle$paramet2||null===(_WithSubtitle$paramet2=_WithSubtitle$paramet2.docs)||void 0===_WithSubtitle$paramet2?void 0:_WithSubtitle$paramet2.source)})}),WithChildren.parameters=_objectSpread(_objectSpread({},WithChildren.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithChildren$paramet=WithChildren.parameters)||void 0===_WithChildren$paramet?void 0:_WithChildren$paramet.docs),{},{source:_objectSpread({originalSource:'function WithChildren() {\n  return <TopNavigation title="TITLE" leading="some more text" subtitle="TEXT">\n      <Icon icon="filter" />\n      <Icon icon="bell" />\n      <Icon icon="menu" />\n    </TopNavigation>;\n}'},null===(_WithChildren$paramet2=WithChildren.parameters)||void 0===_WithChildren$paramet2||null===(_WithChildren$paramet2=_WithChildren$paramet2.docs)||void 0===_WithChildren$paramet2?void 0:_WithChildren$paramet2.source)})}),WithLeftSide.parameters=_objectSpread(_objectSpread({},WithLeftSide.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLeftSide$paramet=WithLeftSide.parameters)||void 0===_WithLeftSide$paramet?void 0:_WithLeftSide$paramet.docs),{},{source:_objectSpread({originalSource:'function WithLeftSide() {\n  return <TopNavigation title="TITLE" leading="some more text" subtitle="TEXT" left={<Icon icon="arrow-narrow-left" />}>\n      <Icon icon="filter" />\n      <Icon icon="bell" />\n      <Icon icon="menu" />\n    </TopNavigation>;\n}'},null===(_WithLeftSide$paramet2=WithLeftSide.parameters)||void 0===_WithLeftSide$paramet2||null===(_WithLeftSide$paramet2=_WithLeftSide$paramet2.docs)||void 0===_WithLeftSide$paramet2?void 0:_WithLeftSide$paramet2.source)})});var __namedExportsOrder=["Default","WithLeadingText","WithSubtitle","WithChildren","WithLeftSide"]},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/TopNavigation/TopNavigation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TopNavigation(_ref){var title=_ref.title,leading=_ref.leading,subtitle=_ref.subtitle,children=_ref.children,left=_ref.left;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"shadow w-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col space-y-1 px-8 py-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex items-center h-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-none text-toolbox-neutral",children:left}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-grow justify-end leading-10 space-x-4 text-toolbox-neutral",children})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"text-sm leading-5 h-5",children:leading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex items-center",children:[subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-none text-toolbox-primary text-base leading-5",children:subtitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-grow justify-end text-toolbox-neutral leading-8 text-2xl font-semibold",children:title})]})]})})}TopNavigation.displayName="TopNavigation";const __WEBPACK_DEFAULT_EXPORT__=TopNavigation;try{TopNavigation.displayName="TopNavigation",TopNavigation.__docgenInfo={description:"",displayName:"TopNavigation",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TopNavigation/TopNavigation.tsx#TopNavigation"]={docgenInfo:TopNavigation.__docgenInfo,name:"TopNavigation",path:"src/components/TopNavigation/TopNavigation.tsx#TopNavigation"})}catch(__react_docgen_typescript_loader_error){}}}]);