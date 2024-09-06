/*! For license information please see components-SideNavigation-SideNavigation-mdx.b1246c4b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[9461,2927],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/SideNavigation/SideNavigation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SideNavigation/SideNavigation.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"sidenavigation",children:"SideNavigation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SideNavigation"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { SideNavigation } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"closed",children:"Closed"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_SideNavigation_stories__WEBPACK_IMPORTED_MODULE_2__.Closed})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/SideNavigation/SideNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNavigation_stories});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./src/components/Avatar/index.ts"),BadgeContainer=__webpack_require__("./src/components/Badge/BadgeContainer.tsx"),Icon=__webpack_require__("./src/components/Icon/index.ts"),StateContainer=__webpack_require__("./src/components/State/StateContainer.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function SideNavigation(_ref){var top=_ref.top,children=_ref.children,bottom=_ref.bottom,_ref$opened=_ref.opened,opened=void 0===_ref$opened||_ref$opened,_ref$onToggle=_ref.onToggle,onToggle=void 0===_ref$onToggle?function(){}:_ref$onToggle,template=classnames_default()(["relative bg-toolbox-white min-h-screen","flex flex-col overflow-hidden transition-all",opened?"p-6 w-[206px]":"px-3 py-6 w-16"]),btn=classnames_default()(["hover:text-toolbox-primary-900 transition-all absolute top-6",opened?"right-6":"right-2"]);return react.createElement("div",{className:template},react.createElement("section",{className:"flex flex-col flex-1 pt-12"},react.createElement("button",{type:"button",className:btn,onClick:function onClick(){return onToggle(!opened)},"aria-label":"Toggle"},react.createElement(Icon.A,{icon:opened?"chevron-left":"chevron-right"})),top,react.createElement("div",{className:"border my-6"}),children),react.createElement("section",{className:"flex flex-col gap-10"},bottom))}const SideNavigation_SideNavigation=SideNavigation;try{SideNavigation.displayName="SideNavigation",SideNavigation.__docgenInfo={description:"",displayName:"SideNavigation",props:{top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactNode"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactNode"}},opened:{defaultValue:{value:"true"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:{value:"() => {}"},description:"",name:"onToggle",required:!1,type:{name:"((_opened: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SideNavigation/SideNavigation.tsx#SideNavigation"]={docgenInfo:SideNavigation.__docgenInfo,name:"SideNavigation",path:"src/components/SideNavigation/SideNavigation.tsx#SideNavigation"})}catch(__react_docgen_typescript_loader_error){}const SideNavigation_stories={title:"Toolbox/SideNavigation",component:SideNavigation_SideNavigation,parameters:{viewport:{defaultViewport:"lg"},layout:"fullscreen"}};function Default(){const[open,setOpen]=(0,react.useState)(!0);return react.createElement("div",{className:"bg-toolbox-neutral-50"},react.createElement(SideNavigation_SideNavigation,{opened:open,onToggle:()=>setOpen(!open),top:react.createElement("div",{className:"flex flex-col gap-5"},react.createElement("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900"},react.createElement(StateContainer.A,{color:"bg-toolbox-feedback-green",size:"lg"},react.createElement(Avatar.A,{link:"https://i.pravatar.cc/151?u=08188",alt:"Mike"})),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"PROFILE")),react.createElement("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900"},react.createElement(BadgeContainer.A,{badge:25},react.createElement(Icon.A,{icon:"message-circle",size:"lg"})),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"INBOX"))),bottom:react.createElement("div",{className:"flex flex-col gap-6"},react.createElement("button",{type:"button"},react.createElement("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900"},react.createElement(Icon.A,{icon:"arrow-right-from-bracket",size:"lg"}),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"LOGOUT"))),open?react.createElement("small",{className:"block text-center"},"V0.4.6"):react.createElement(Icon.A,{icon:"circle-information",size:"s",className:"block text-center"}))},react.createElement("div",{className:"flex flex-col gap-5"},react.createElement("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900"},react.createElement(Icon.A,{icon:"calendar-lines",size:"lg"}),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"BOOKINGS")),react.createElement("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900"},react.createElement(Icon.A,{icon:"users",size:"lg"}),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"TEAMS")))))}function Closed(){const[open,setOpen]=(0,react.useState)(!1);return react.createElement("div",{className:"bg-toolbox-neutral-50"},react.createElement(SideNavigation_SideNavigation,{opened:open,onToggle:()=>setOpen(!open),top:react.createElement("div",{className:"flex flex-col gap-5"},react.createElement("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900"},react.createElement(StateContainer.A,{color:"bg-toolbox-feedback-green",size:"lg"},react.createElement(Avatar.A,{link:"https://i.pravatar.cc/151?u=08188",alt:"Mike"})),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"PROFILE")),react.createElement("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900"},react.createElement(BadgeContainer.A,{badge:25},react.createElement(Icon.A,{icon:"message-circle",size:"lg"})),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"INBOX"))),bottom:react.createElement("div",{className:"flex flex-col gap-6"},react.createElement("button",{type:"button"},react.createElement("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900"},react.createElement(Icon.A,{icon:"arrow-right-from-bracket",size:"lg"}),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"LOGOUT"))),open?react.createElement("small",{className:"block text-center"},"V0.4.6"):react.createElement(Icon.A,{icon:"circle-information",size:"s",className:"block text-center"}))},react.createElement("div",{className:"flex flex-col gap-5"},react.createElement("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900"},react.createElement(Icon.A,{icon:"calendar-lines",size:"lg"}),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"BOOKINGS")),react.createElement("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900"},react.createElement(Icon.A,{icon:"users",size:"lg"}),react.createElement("span",{className:"font-semibold whitespace-nowrap"},"TEAMS")))))}const __namedExportsOrder=["Default","Closed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  const [open, setOpen] = useState(true);\n  return <div className="bg-toolbox-neutral-50">\n      <SideNavigation opened={open} onToggle={() => setOpen(!open)} top={<div className="flex flex-col gap-5">\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <StateContainer color="bg-toolbox-feedback-green" size="lg">\n                <Avatar link="https://i.pravatar.cc/151?u=08188" alt="Mike" />\n              </StateContainer>\n              <span className="font-semibold whitespace-nowrap">PROFILE</span>\n            </a>\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <BadgeContainer badge={25}>\n                <Icon icon="message-circle" size="lg" />\n              </BadgeContainer>\n              <span className="font-semibold whitespace-nowrap">INBOX</span>\n            </a>\n          </div>} bottom={<div className="flex flex-col gap-6">\n            <button type="button">\n              <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n                <Icon icon="arrow-right-from-bracket" size="lg" />\n                <span className="font-semibold whitespace-nowrap">LOGOUT</span>\n              </a>\n            </button>\n            {open ? <small className="block text-center">V0.4.6</small> : <Icon icon="circle-information" size="s" className="block text-center" />}\n          </div>}>\n        <div className="flex flex-col gap-5">\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="calendar-lines" size="lg" />\n            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>\n          </a>\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="users" size="lg" />\n            <span className="font-semibold whitespace-nowrap">TEAMS</span>\n          </a>\n        </div>\n      </SideNavigation>\n    </div>;\n}',...Default.parameters?.docs?.source}}},Closed.parameters={...Closed.parameters,docs:{...Closed.parameters?.docs,source:{originalSource:'function Closed() {\n  const [open, setOpen] = useState(false);\n  return <div className="bg-toolbox-neutral-50">\n      <SideNavigation opened={open} onToggle={() => setOpen(!open)} top={<div className="flex flex-col gap-5">\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <StateContainer color="bg-toolbox-feedback-green" size="lg">\n                <Avatar link="https://i.pravatar.cc/151?u=08188" alt="Mike" />\n              </StateContainer>\n              <span className="font-semibold whitespace-nowrap">PROFILE</span>\n            </a>\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <BadgeContainer badge={25}>\n                <Icon icon="message-circle" size="lg" />\n              </BadgeContainer>\n              <span className="font-semibold whitespace-nowrap">INBOX</span>\n            </a>\n          </div>} bottom={<div className="flex flex-col gap-6">\n            <button type="button">\n              <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n                <Icon icon="arrow-right-from-bracket" size="lg" />\n                <span className="font-semibold whitespace-nowrap">LOGOUT</span>\n              </a>\n            </button>\n            {open ? <small className="block text-center">V0.4.6</small> : <Icon icon="circle-information" size="s" className="block text-center" />}\n          </div>}>\n        <div className="flex flex-col gap-5">\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="calendar-lines" size="lg" />\n            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>\n          </a>\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="users" size="lg" />\n            <span className="font-semibold whitespace-nowrap">TEAMS</span>\n          </a>\n        </div>\n      </SideNavigation>\n    </div>;\n}',...Closed.parameters?.docs?.source}}}},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/BadgeContainer.tsx"),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"xl"===size?"w-14 h-14 border-2":"2xl"===size?"w-40 h-40 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg";return"xl"===size||"2xl"===size?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.A,{badge,size},react__WEBPACK_IMPORTED_MODULE_1__.createElement("img",{className:template,src:link,alt}),state&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.A,{color:state,size:mapStateSize(size)}))}const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}},border:{defaultValue:{value:"border-toolbox-primary"},description:"",name:"border",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.A});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,mQ:()=>isNormalized,yb:()=>isSingleDigit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},isNormalized=function isNormalized(badge){return badge>99},isSingleDigit=function isSingleDigit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDigit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:template},show&&function normalize(badge){return badge>99?"".concat(99,"+"):badge}(badge))}const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{isNormalized.displayName="isNormalized",isNormalized.__docgenInfo={description:"",displayName:"isNormalized",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isNormalized"]={docgenInfo:isNormalized.__docgenInfo,name:"isNormalized",path:"src/components/Badge/Badge.tsx#isNormalized"})}catch(__react_docgen_typescript_loader_error){}try{isSingleDigit.displayName="isSingleDigit",isSingleDigit.__docgenInfo={description:"",displayName:"isSingleDigit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isSingleDigit"]={docgenInfo:isSingleDigit.__docgenInfo,name:"isSingleDigit",path:"src/components/Badge/Badge.tsx#isSingleDigit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.yb)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.yb)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.mQ)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.mQ)(badge)&&"-mr-3"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative inline-block min-w-max"},badge&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:template},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_2__.Ay,{size,badge})),children)}const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;try{BadgeContainer.displayName="BadgeContainer",BadgeContainer.__docgenInfo={description:"",displayName:"BadgeContainer",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/BadgeContainer.tsx#BadgeContainer"]={docgenInfo:BadgeContainer.__docgenInfo,name:"BadgeContainer",path:"src/components/Badge/BadgeContainer.tsx#BadgeContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.A});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Ay});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center space-x-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size:"m",color}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-toolbox-neutral leading-5 text-xs"},label)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size,color})}const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative inline-block"},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))}const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);