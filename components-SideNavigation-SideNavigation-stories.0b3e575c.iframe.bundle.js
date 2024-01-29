"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[8401],{"./src/components/SideNavigation/SideNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNavigation_stories});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./src/components/Avatar/index.ts"),BadgeContainer=__webpack_require__("./src/components/Badge/BadgeContainer.tsx"),Icon=__webpack_require__("./src/components/Icon/index.ts"),StateContainer=__webpack_require__("./src/components/State/StateContainer.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SideNavigation(_ref){var top=_ref.top,children=_ref.children,bottom=_ref.bottom,opened=_ref.opened,_ref$onOpen=_ref.onOpen,onOpen=void 0===_ref$onOpen?function(){}:_ref$onOpen,_ref$onClose=_ref.onClose,onClose=void 0===_ref$onClose?function(){}:_ref$onClose,_useState2=_slicedToArray((0,react.useState)(opened),2),open=_useState2[0],setOpen=_useState2[1],template=classnames_default()("relative bg-toolbox-white min-h-screen flex flex-col overflow-hidden transition-all",open?"p-6 w-[206px]":"px-3 py-6 w-16"),arrowTemplate=classnames_default()("hover:text-toolbox-primary-900 transition-all absolute top-6",open?"right-6":"right-2");return(0,jsx_runtime.jsxs)("nav",{className:template,children:[(0,jsx_runtime.jsxs)("section",{className:"flex flex-col flex-1 pt-12",children:[(0,jsx_runtime.jsx)("button",{type:"button",onClick:function onToggle(){setOpen((function(previous){var next=!previous;return(next?onOpen:onClose)(),next}))},className:arrowTemplate,"aria-label":"Toggle",children:(0,jsx_runtime.jsx)(Icon.Z,{icon:open?"chevron-left":"chevron-right"})}),top,(0,jsx_runtime.jsx)("div",{className:"border my-6"}),children]}),(0,jsx_runtime.jsx)("section",{className:"flex flex-col gap-10",children:bottom})]})}SideNavigation.displayName="SideNavigation";const SideNavigation_SideNavigation=SideNavigation;try{SideNavigation.displayName="SideNavigation",SideNavigation.__docgenInfo={description:"",displayName:"SideNavigation",props:{top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactNode"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactNode"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:{value:"() => {}"},description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:{value:"() => {}"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SideNavigation/SideNavigation.tsx#SideNavigation"]={docgenInfo:SideNavigation.__docgenInfo,name:"SideNavigation",path:"src/components/SideNavigation/SideNavigation.tsx#SideNavigation"})}catch(__react_docgen_typescript_loader_error){}function SideNavigation_stories_slicedToArray(arr,i){return function SideNavigation_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function SideNavigation_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function SideNavigation_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return SideNavigation_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SideNavigation_stories_arrayLikeToArray(o,minLen)}(arr,i)||function SideNavigation_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SideNavigation_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const SideNavigation_stories={title:"Toolbox/SideNavigation",component:SideNavigation_SideNavigation,parameters:{viewport:{defaultViewport:"lg"},layout:"fullscreen"}};function Default(){var _useState2=SideNavigation_stories_slicedToArray((0,react.useState)(!0),2),open=_useState2[0],setOpen=_useState2[1];return(0,jsx_runtime.jsx)("div",{className:"bg-toolbox-neutral-50",children:(0,jsx_runtime.jsx)(SideNavigation_SideNavigation,{top:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(StateContainer.Z,{color:"bg-toolbox-feedback-green",size:"lg",children:(0,jsx_runtime.jsx)(Avatar.Z,{link:"https://i.pravatar.cc/151?u=08188",alt:"Mike"})}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"PROFILE"})]}),(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(BadgeContainer.Z,{badge:25,children:(0,jsx_runtime.jsx)(Icon.Z,{icon:"message-circle",size:"lg"})}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"INBOX"})]})]}),bottom:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)("button",{type:"button",children:(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"arrow-right-from-bracket",size:"lg"}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"LOGOUT"})]})}),open?(0,jsx_runtime.jsx)("small",{className:"block text-center",children:"V0.4.6"}):(0,jsx_runtime.jsx)(Icon.Z,{icon:"circle-information",size:"s",className:"block text-center"})]}),opened:open,onOpen:function onOpen(){return setOpen(!0)},onClose:function onClose(){return setOpen(!1)},children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"calendar-lines",size:"lg"}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"BOOKINGS"})]}),(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"users",size:"lg"}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"TEAMS"})]})]})})})}function Closed(){var _useState4=SideNavigation_stories_slicedToArray((0,react.useState)(!1),2),open=_useState4[0],setOpen=_useState4[1];return(0,jsx_runtime.jsx)("div",{className:"bg-toolbox-neutral-50",children:(0,jsx_runtime.jsx)(SideNavigation_SideNavigation,{opened:open,onOpen:function onOpen(){return setOpen(!0)},onClose:function onClose(){return setOpen(!1)},top:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(StateContainer.Z,{color:"bg-toolbox-feedback-green",size:"lg",children:(0,jsx_runtime.jsx)(Avatar.Z,{link:"https://i.pravatar.cc/151?u=08188",alt:"Mike"})}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"PROFILE"})]}),(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(BadgeContainer.Z,{badge:25,children:(0,jsx_runtime.jsx)(Icon.Z,{icon:"message-circle",size:"lg"})}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"INBOX"})]})]}),bottom:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)("button",{type:"button",children:(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5 hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"arrow-right-from-bracket",size:"lg"}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"LOGOUT"})]})}),open?(0,jsx_runtime.jsx)("small",{className:"block text-center",children:"V0.4.6"}):(0,jsx_runtime.jsx)(Icon.Z,{icon:"circle-information",size:"s",className:"block text-center"})]}),children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"calendar-lines",size:"lg"}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"BOOKINGS"})]}),(0,jsx_runtime.jsxs)("a",{href:"/",className:"flex place-items-center gap-5  hover:text-toolbox-primary-900",children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"users",size:"lg"}),(0,jsx_runtime.jsx)("span",{className:"font-semibold whitespace-nowrap",children:"TEAMS"})]})]})})})}Default.displayName="Default",Closed.displayName="Closed",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  const [open, setOpen] = useState(true);\n  return <div className="bg-toolbox-neutral-50">\n      <SideNavigation top={<div className="flex flex-col gap-5">\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <StateContainer color="bg-toolbox-feedback-green" size="lg">\n                <Avatar link="https://i.pravatar.cc/151?u=08188" alt="Mike" />\n              </StateContainer>\n              <span className="font-semibold whitespace-nowrap">PROFILE</span>\n            </a>\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <BadgeContainer badge={25}>\n                <Icon icon="message-circle" size="lg" />\n              </BadgeContainer>\n              <span className="font-semibold whitespace-nowrap">INBOX</span>\n            </a>\n          </div>} bottom={<div className="flex flex-col gap-6">\n            <button type="button">\n              <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n                <Icon icon="arrow-right-from-bracket" size="lg" />\n                <span className="font-semibold whitespace-nowrap">LOGOUT</span>\n              </a>\n            </button>\n            {open ? <small className="block text-center">V0.4.6</small> : <Icon icon="circle-information" size="s" className="block text-center" />}\n          </div>} opened={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>\n        <div className="flex flex-col gap-5">\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="calendar-lines" size="lg" />\n            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>\n          </a>\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="users" size="lg" />\n            <span className="font-semibold whitespace-nowrap">TEAMS</span>\n          </a>\n        </div>\n      </SideNavigation>\n    </div>;\n}',...Default.parameters?.docs?.source}}},Closed.parameters={...Closed.parameters,docs:{...Closed.parameters?.docs,source:{originalSource:'function Closed() {\n  const [open, setOpen] = useState(false);\n  return <div className="bg-toolbox-neutral-50">\n      <SideNavigation opened={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} top={<div className="flex flex-col gap-5">\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <StateContainer color="bg-toolbox-feedback-green" size="lg">\n                <Avatar link="https://i.pravatar.cc/151?u=08188" alt="Mike" />\n              </StateContainer>\n              <span className="font-semibold whitespace-nowrap">PROFILE</span>\n            </a>\n            <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n              <BadgeContainer badge={25}>\n                <Icon icon="message-circle" size="lg" />\n              </BadgeContainer>\n              <span className="font-semibold whitespace-nowrap">INBOX</span>\n            </a>\n          </div>} bottom={<div className="flex flex-col gap-6">\n            <button type="button">\n              <a href="/" className="flex place-items-center gap-5 hover:text-toolbox-primary-900">\n                <Icon icon="arrow-right-from-bracket" size="lg" />\n                <span className="font-semibold whitespace-nowrap">LOGOUT</span>\n              </a>\n            </button>\n            {open ? <small className="block text-center">V0.4.6</small> : <Icon icon="circle-information" size="s" className="block text-center" />}\n          </div>}>\n        <div className="flex flex-col gap-5">\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="calendar-lines" size="lg" />\n            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>\n          </a>\n          <a href="/" className="flex place-items-center gap-5  hover:text-toolbox-primary-900">\n            <Icon icon="users" size="lg" />\n            <span className="font-semibold whitespace-nowrap">TEAMS</span>\n          </a>\n        </div>\n      </SideNavigation>\n    </div>;\n}',...Closed.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Closed"]},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Badge/BadgeContainer.tsx")),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"xl"===size?"w-14 h-14 border-2":"2xl"===size?"w-40 h-40 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg";return"xl"===size||"2xl"===size?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.Z,{badge,size,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:template,src:link,alt}),state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.Z,{color:state,size:mapStateSize(size)})]})}Avatar.displayName="Avatar";const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}},border:{defaultValue:{value:"border-toolbox-primary"},description:"",name:"border",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.Z});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tp:()=>isSingleDigit,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,Zq:()=>isNormalized});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},normalize=function normalize(badge){return badge>99?"".concat(99,"+"):badge},isNormalized=function isNormalized(badge){return badge>99},isSingleDigit=function isSingleDigit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDigit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:template,children:show&&normalize(badge)})}Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{isNormalized.displayName="isNormalized",isNormalized.__docgenInfo={description:"",displayName:"isNormalized",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isNormalized"]={docgenInfo:isNormalized.__docgenInfo,name:"isNormalized",path:"src/components/Badge/Badge.tsx#isNormalized"})}catch(__react_docgen_typescript_loader_error){}try{isSingleDigit.displayName="isSingleDigit",isSingleDigit.__docgenInfo={description:"",displayName:"isSingleDigit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isSingleDigit"]={docgenInfo:isSingleDigit.__docgenInfo,name:"isSingleDigit",path:"src/components/Badge/Badge.tsx#isSingleDigit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Tp)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Tp)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-3"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"relative inline-block min-w-max",children:[badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:template,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.ZP,{size,badge})}),children]})}BadgeContainer.displayName="BadgeContainer";const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;try{BadgeContainer.displayName="BadgeContainer",BadgeContainer.__docgenInfo={description:"",displayName:"BadgeContainer",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/BadgeContainer.tsx#BadgeContainer"]={docgenInfo:BadgeContainer.__docgenInfo,name:"BadgeContainer",path:"src/components/Badge/BadgeContainer.tsx#BadgeContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}Dot.displayName="Dot";const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.Z});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"m",color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-toolbox-neutral leading-5 text-xs",children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size,color})}State.displayName="State";const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"relative inline-block",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})}StateContainer.displayName="StateContainer";const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}}}]);