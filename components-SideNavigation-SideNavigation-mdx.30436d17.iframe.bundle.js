"use strict";(self.webpackChunk_dicoauto_toolbox=self.webpackChunk_dicoauto_toolbox||[]).push([[5209,8401],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/SideNavigation/SideNavigation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/SideNavigation/SideNavigation.tsx"),__webpack_require__("./src/components/SideNavigation/SideNavigation.stories.tsx"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{of:_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"sidenavigation",children:"SideNavigation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SideNavigation"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { SideNavigation } from '@dicoauto/toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"closed",children:"Closed"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_3__.Closed})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/SideNavigation/SideNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_Closed$parameters,_Closed$parameters2,_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Avatar/index.ts"),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/BadgeContainer.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.ts"),_State_StateContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/State/StateContainer.tsx"),_SideNavigation__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/SideNavigation/SideNavigation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/SideNavigation",component:_SideNavigation__WEBPACK_IMPORTED_MODULE_5__.Z,parameters:{viewport:{defaultViewport:"lg"},layout:"fullscreen"}};function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"bg-toolbox-neutral-50",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SideNavigation__WEBPACK_IMPORTED_MODULE_5__.Z,{top:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_State_StateContainer__WEBPACK_IMPORTED_MODULE_4__.Z,{color:"bg-toolbox-feedback-green",size:"lg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{link:"https://i.pravatar.cc/151?u=08188",alt:"Mike"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"PROFILE"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.Z,{badge:25,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"message-circle",size:"lg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"INBOX"})]})]}),bottom:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"arrow-right-from-bracket",size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"LOGOUT"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small",{className:"block text-center mt-8",children:"V0.4.6"})]}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"calendar-lines",size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"BOOKINGS"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"users",size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"TEAMS"})]})]})})})}function Closed(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"bg-toolbox-neutral-50",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SideNavigation__WEBPACK_IMPORTED_MODULE_5__.Z,{closed:!0,top:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_State_StateContainer__WEBPACK_IMPORTED_MODULE_4__.Z,{color:"bg-toolbox-feedback-green",size:"lg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{link:"https://i.pravatar.cc/151?u=08188",alt:"Mike"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"PROFILE"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.Z,{badge:25,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"message-circle",size:"lg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"INBOX"})]})]}),bottom:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"arrow-right-from-bracket",size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"LOGOUT"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small",{className:"block text-center mt-8",children:"V0.4.6"})]}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"calendar-lines",size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"BOOKINGS"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a",{href:"/",className:"flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"users",size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"TEAMS"})]})]})})})}Default.displayName="Default",Closed.displayName="Closed",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'function Default() {\n  return <div className="bg-toolbox-neutral-50">\n      <SideNavigation top={<div className="flex flex-col">\n            <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n              <StateContainer color="bg-toolbox-feedback-green" size="lg">\n                <Avatar link="https://i.pravatar.cc/151?u=08188" alt="Mike" />\n              </StateContainer>\n              <span className="font-semibold whitespace-nowrap">PROFILE</span>\n            </a>\n            <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n              <BadgeContainer badge={25}>\n                <Icon icon="message-circle" size="lg" />\n              </BadgeContainer>\n              <span className="font-semibold whitespace-nowrap">INBOX</span>\n            </a>\n          </div>} bottom={<div className="flex flex-col">\n            <button type="button">\n              <a href="/" className="flex place-items-center gap-3 hover:text-toolbox-primary-900">\n                <Icon icon="arrow-right-from-bracket" size="lg" />\n                <span className="font-semibold whitespace-nowrap">LOGOUT</span>\n              </a>\n            </button>\n            <small className="block text-center mt-8">V0.4.6</small>\n          </div>}>\n        <div className="flex flex-col">\n          <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n            <Icon icon="calendar-lines" size="lg" />\n            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>\n          </a>\n          <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n            <Icon icon="users" size="lg" />\n            <span className="font-semibold whitespace-nowrap">TEAMS</span>\n          </a>\n        </div>\n      </SideNavigation>\n    </div>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Closed.parameters=_objectSpread(_objectSpread({},Closed.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Closed$parameters=Closed.parameters)||void 0===_Closed$parameters?void 0:_Closed$parameters.docs),{},{source:_objectSpread({originalSource:'function Closed() {\n  return <div className="bg-toolbox-neutral-50">\n      <SideNavigation closed top={<div className="flex flex-col">\n            <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n              <StateContainer color="bg-toolbox-feedback-green" size="lg">\n                <Avatar link="https://i.pravatar.cc/151?u=08188" alt="Mike" />\n              </StateContainer>\n              <span className="font-semibold whitespace-nowrap">PROFILE</span>\n            </a>\n            <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n              <BadgeContainer badge={25}>\n                <Icon icon="message-circle" size="lg" />\n              </BadgeContainer>\n              <span className="font-semibold whitespace-nowrap">INBOX</span>\n            </a>\n          </div>} bottom={<div className="flex flex-col">\n            <button type="button">\n              <a href="/" className="flex place-items-center gap-3 hover:text-toolbox-primary-900">\n                <Icon icon="arrow-right-from-bracket" size="lg" />\n                <span className="font-semibold whitespace-nowrap">LOGOUT</span>\n              </a>\n            </button>\n            <small className="block text-center mt-8">V0.4.6</small>\n          </div>}>\n        <div className="flex flex-col">\n          <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n            <Icon icon="calendar-lines" size="lg" />\n            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>\n          </a>\n          <a href="/" className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900">\n            <Icon icon="users" size="lg" />\n            <span className="font-semibold whitespace-nowrap">TEAMS</span>\n          </a>\n        </div>\n      </SideNavigation>\n    </div>;\n}'},null===(_Closed$parameters2=Closed.parameters)||void 0===_Closed$parameters2||null===(_Closed$parameters2=_Closed$parameters2.docs)||void 0===_Closed$parameters2?void 0:_Closed$parameters2.source)})});var __namedExportsOrder=["Default","Closed"]},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Badge/BadgeContainer.tsx")),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){return"xl"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg")?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.Z,{badge,size,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:template,src:link,alt}),state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.Z,{color:state,size:mapStateSize(size)})]})}Avatar.displayName="Avatar";const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}},border:{defaultValue:{value:"border-toolbox-primary"},description:"",name:"border",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.Z});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,Zq:()=>isNormalized,gl:()=>isSingleDegit});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},normalize=function normalize(badge){return badge>99?"".concat(99,"+"):badge},isNormalized=function isNormalized(badge){return badge>99},isSingleDegit=function isSingleDegit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDegit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:template,children:show&&normalize(badge)})}Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{isNormalized.displayName="isNormalized",isNormalized.__docgenInfo={description:"",displayName:"isNormalized",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isNormalized"]={docgenInfo:isNormalized.__docgenInfo,name:"isNormalized",path:"src/components/Badge/Badge.tsx#isNormalized"})}catch(__react_docgen_typescript_loader_error){}try{isSingleDegit.displayName="isSingleDegit",isSingleDegit.__docgenInfo={description:"",displayName:"isSingleDegit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isSingleDegit"]={docgenInfo:isSingleDegit.__docgenInfo,name:"isSingleDegit",path:"src/components/Badge/Badge.tsx#isSingleDegit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.gl)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.gl)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-3"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"relative inline-block min-w-max",children:[badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:template,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.ZP,{size,badge})}),children]})}BadgeContainer.displayName="BadgeContainer";const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;try{BadgeContainer.displayName="BadgeContainer",BadgeContainer.__docgenInfo={description:"",displayName:"BadgeContainer",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/BadgeContainer.tsx#BadgeContainer"]={docgenInfo:BadgeContainer.__docgenInfo,name:"BadgeContainer",path:"src/components/Badge/BadgeContainer.tsx#BadgeContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}Dot.displayName="Dot";const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.Z});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/SideNavigation/SideNavigation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SideNavigation(_ref){var top=_ref.top,children=_ref.children,bottom=_ref.bottom,closed=_ref.closed,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!closed),2),open=_useState2[0],setOpen=_useState2[1],template=classnames__WEBPACK_IMPORTED_MODULE_0___default()("bg-toolbox-white min-h-screen flex flex-col overflow-hidden transition-all py-7",open?"px-6 w-[206px]":"px-4 w-16");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav",{className:template,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section",{className:"flex flex-col flex-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",onClick:function onToggle(){return setOpen((function(pre){return!pre}))},className:"ml-auto py-1 hover:text-toolbox-primary-900",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:open?"chevron-left":"chevron-right"})}),top,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"border my-7"}),children]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section",{className:"flex flex-col gap-10",children:bottom})]})}SideNavigation.displayName="SideNavigation";const __WEBPACK_DEFAULT_EXPORT__=SideNavigation;try{SideNavigation.displayName="SideNavigation",SideNavigation.__docgenInfo={description:"",displayName:"SideNavigation",props:{top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactNode"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactNode"}},closed:{defaultValue:null,description:"",name:"closed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SideNavigation/SideNavigation.tsx#SideNavigation"]={docgenInfo:SideNavigation.__docgenInfo,name:"SideNavigation",path:"src/components/SideNavigation/SideNavigation.tsx#SideNavigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"m",color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-toolbox-neutral leading-5 text-xs",children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size,color})}State.displayName="State";const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"relative inline-block",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})}StateContainer.displayName="StateContainer";const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}}}]);