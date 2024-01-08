"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[5704],{"./src/components/Layout/Mobile/Mobile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalStyles:()=>AdditionalStyles,Default:()=>Default,Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Mobile_stories});__webpack_require__("./node_modules/react/index.js");var Avatar=__webpack_require__("./src/components/Avatar/index.ts"),Quick=__webpack_require__("./src/components/Button/Quick/index.ts"),Icon=__webpack_require__("./src/components/Icon/index.ts"),NavigationBar=__webpack_require__("./src/components/NavigationBar/NavigationBar.tsx"),TopNavigation=__webpack_require__("./src/components/TopNavigation/TopNavigation.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Mobile(_ref){var header=_ref.header,children=_ref.children,footer=_ref.footer,className=_ref.className,template=classnames_default()(["flex-1 overflow-y-scroll",className]);return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col h-screen w-full",children:[(0,jsx_runtime.jsx)("div",{className:"flex flex-shrink",children:header}),(0,jsx_runtime.jsx)("div",{className:template,children}),(0,jsx_runtime.jsx)("div",{className:"flex flex-shrink",children:footer})]})}Mobile.displayName="Mobile";const Mobile_Mobile=Mobile;try{Mobile.displayName="Mobile",Mobile.__docgenInfo={description:"",displayName:"Mobile",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Mobile/Mobile.tsx#Mobile"]={docgenInfo:Mobile.__docgenInfo,name:"Mobile",path:"src/components/Layout/Mobile/Mobile.tsx#Mobile"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_AdditionalStyles$par,_AdditionalStyles$par2,_Example$parameters,_Example$parameters2;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Mobile_stories={title:"Toolbox/Layout/Mobile",component:Mobile_Mobile,parameters:{viewport:{defaultViewport:"sm"}},decorators:[function(Story){return(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)("div",{className:"w-sm",children:(0,jsx_runtime.jsx)(Story,{})})})}]};function Default(){return(0,jsx_runtime.jsx)(Mobile_Mobile,{className:"bg-toolbox-feedback-orange px-8 py-4",header:(0,jsx_runtime.jsx)("div",{className:"h-32 bg-toolbox-primary w-full"}),footer:(0,jsx_runtime.jsx)("div",{className:"h-32 bg-toolbox-secondary w-full"}),children:(0,jsx_runtime.jsx)("div",{className:"p-16 flex flex-col items-center bg-toolbox-neutral-50 h-[1280px]",children:"SCROLLABLE CONTENT"})})}function AdditionalStyles(){return(0,jsx_runtime.jsx)(Mobile_Mobile,{className:"bg-toolbox-feedback-orange px-8 py-4",header:(0,jsx_runtime.jsx)("div",{className:"h-32 bg-toolbox-primary w-full"}),footer:(0,jsx_runtime.jsx)("div",{className:"h-32 bg-toolbox-secondary w-full"}),children:(0,jsx_runtime.jsx)("div",{className:"p-16 flex flex-col items-center bg-toolbox-feedback-orange h-[1280px]",children:"SCROLLABLE CONTENT"})})}function Example(){return(0,jsx_runtime.jsx)(Mobile_Mobile,{className:"bg-toolbox-neutral-50 px-8 py-4",header:(0,jsx_runtime.jsx)(TopNavigation.Z,{title:"your app",leading:"simplified screen building",subtitle:"with reusable layouts",children:(0,jsx_runtime.jsx)(Icon.Z,{icon:"menu"})}),footer:(0,jsx_runtime.jsx)(NavigationBar.Z,{left:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"mail-check"}),(0,jsx_runtime.jsx)(Icon.Z,{icon:"calendar"})]}),right:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"fingerprint"}),(0,jsx_runtime.jsx)(Avatar.Z,{link:"https://i.pravatar.cc/150?u=08188",alt:"Mike",badge:4})]}),children:(0,jsx_runtime.jsx)(Quick.Z,{icon:"check"})}),children:(0,jsx_runtime.jsx)("div",{className:"h-[1280px]",children:"SCROLLABLE CONTENT"})})}Default.displayName="Default",AdditionalStyles.displayName="AdditionalStyles",Example.displayName="Example",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'function Default() {\n  return <Layout className="bg-toolbox-feedback-orange px-8 py-4" header={<div className="h-32 bg-toolbox-primary w-full" />} footer={<div className="h-32 bg-toolbox-secondary w-full" />}>\n      <div className="p-16 flex flex-col items-center bg-toolbox-neutral-50 h-[1280px]">\n        SCROLLABLE CONTENT\n      </div>\n    </Layout>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),AdditionalStyles.parameters=_objectSpread(_objectSpread({},AdditionalStyles.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AdditionalStyles$par=AdditionalStyles.parameters)||void 0===_AdditionalStyles$par?void 0:_AdditionalStyles$par.docs),{},{source:_objectSpread({originalSource:'function AdditionalStyles() {\n  return <Layout className="bg-toolbox-feedback-orange px-8 py-4" header={<div className="h-32 bg-toolbox-primary w-full" />} footer={<div className="h-32 bg-toolbox-secondary w-full" />}>\n      <div className="p-16 flex flex-col items-center bg-toolbox-feedback-orange h-[1280px]">\n        SCROLLABLE CONTENT\n      </div>\n    </Layout>;\n}'},null===(_AdditionalStyles$par2=AdditionalStyles.parameters)||void 0===_AdditionalStyles$par2||null===(_AdditionalStyles$par2=_AdditionalStyles$par2.docs)||void 0===_AdditionalStyles$par2?void 0:_AdditionalStyles$par2.source)})}),Example.parameters=_objectSpread(_objectSpread({},Example.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:_objectSpread({originalSource:'function Example() {\n  return <Layout className="bg-toolbox-neutral-50 px-8 py-4" header={<TopNavigation title="your app" leading="simplified screen building" subtitle="with reusable layouts">\n          <Icon icon="menu" />\n        </TopNavigation>} footer={<NavigationBar left={<>\n              <Icon icon="mail-check" />\n              <Icon icon="calendar" />\n            </>} right={<>\n              <Icon icon="fingerprint" />\n              <Avatar link="https://i.pravatar.cc/150?u=08188" alt="Mike" badge={4} />\n            </>}>\n          <QuickButton icon="check" />\n        </NavigationBar>}>\n      <div className="h-[1280px]">SCROLLABLE CONTENT</div>\n    </Layout>;\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source)})});const __namedExportsOrder=["Default","AdditionalStyles","Example"]},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Badge/BadgeContainer.tsx")),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"xl"===size?"w-14 h-14 border-2":"2xl"===size?"w-40 h-40 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg";return"xl"===size||"2xl"===size?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.Z,{badge,size,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:template,src:link,alt}),state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.Z,{color:state,size:mapStateSize(size)})]})}Avatar.displayName="Avatar";const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}},border:{defaultValue:{value:"border-toolbox-primary"},description:"",name:"border",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.Z});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tp:()=>isSingleDigit,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,Zq:()=>isNormalized});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},normalize=function normalize(badge){return badge>99?"".concat(99,"+"):badge},isNormalized=function isNormalized(badge){return badge>99},isSingleDigit=function isSingleDigit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDigit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:template,children:show&&normalize(badge)})}Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{isNormalized.displayName="isNormalized",isNormalized.__docgenInfo={description:"",displayName:"isNormalized",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isNormalized"]={docgenInfo:isNormalized.__docgenInfo,name:"isNormalized",path:"src/components/Badge/Badge.tsx#isNormalized"})}catch(__react_docgen_typescript_loader_error){}try{isSingleDigit.displayName="isSingleDigit",isSingleDigit.__docgenInfo={description:"",displayName:"isSingleDigit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isSingleDigit"]={docgenInfo:isSingleDigit.__docgenInfo,name:"isSingleDigit",path:"src/components/Badge/Badge.tsx#isSingleDigit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Tp)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Tp)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-3"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"relative inline-block min-w-max",children:[badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:template,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.ZP,{size,badge})}),children]})}BadgeContainer.displayName="BadgeContainer";const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;try{BadgeContainer.displayName="BadgeContainer",BadgeContainer.__docgenInfo={description:"",displayName:"BadgeContainer",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/BadgeContainer.tsx#BadgeContainer"]={docgenInfo:BadgeContainer.__docgenInfo,name:"BadgeContainer",path:"src/components/Badge/BadgeContainer.tsx#BadgeContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,children=_ref.children,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,outlined=_ref.outlined,_ref$baseTemplate=_ref.baseTemplate,baseTemplate=void 0===_ref$baseTemplate?"box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl":_ref$baseTemplate,_ref$defaultTemplate=_ref.defaultTemplate,defaultTemplate=void 0===_ref$defaultTemplate?"text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed":_ref$defaultTemplate,_ref$outlinedTemplate=_ref.outlinedTemplate,template=outlined?void 0===_ref$outlinedTemplate?"bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed":_ref$outlinedTemplate:defaultTemplate,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseTemplate,template);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"submit"===type?"submit":"button",onClick,className:classes,disabled,children})}Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:{value:"`box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl`"},description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:{value:"`text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`"},description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:{value:"`bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed`"},description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Quick/Quick.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuickButton(_ref){var icon=_ref.icon,disabled=_ref.disabled,outlined=_ref.outlined,_ref$secondary=_ref.secondary,secondary=void 0!==_ref$secondary&&_ref$secondary,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:function onClick(){return _onClick()},outlined,disabled,baseTemplate:"inline-block w-14 h-14 leading-4 rounded-full px-0 py-0",defaultTemplate:secondary?"text-toolbox-white bg-toolbox-secondary hover:bg-toolbox-secondary-600\n  active:bg-toolbox-secondary-600 active:text-toolbox-secondary\n  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4\n  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed":"text-toolbox-white bg-toolbox-primary hover:bg-toolbox-primary-600\n  active:bg-toolbox-primary-600 active:text-toolbox-primary\n  focus:outline-none focus-visible:border-toolbox-secondary focus-visible:border-4\n  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed",outlinedTemplate:secondary?"border-4 border-toolbox-secondary text-toolbox-secondary\n  hover:bg-toolbox-secondary-600 hover:text-toolbox-secondary\n  active:bg-toolbox-secondary active:text-toolbox-white\n  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4\n  focus-visible:text-toolbox-secondary\n  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed":"border-4 border-toolbox-primary text-toolbox-primary\n  hover:bg-toolbox-primary-600 hover:text-toolbox-primary\n  active:bg-toolbox-primary active:text-toolbox-white\n  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-4\n  focus-visible:text-toolbox-secondary-300\n  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon,size:"lg"})})}QuickButton.displayName="QuickButton";const __WEBPACK_DEFAULT_EXPORT__=QuickButton;try{QuickButton.displayName="QuickButton",QuickButton.__docgenInfo={description:"",displayName:"QuickButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},secondary:{defaultValue:{value:"false"},description:"",name:"secondary",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:null,description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:null,description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:null,description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Quick/Quick.tsx#QuickButton"]={docgenInfo:QuickButton.__docgenInfo,name:"QuickButton",path:"src/components/Button/Quick/Quick.tsx#QuickButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Quick/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Quick__WEBPACK_IMPORTED_MODULE_0__.Z});var _Quick__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Quick/Quick.tsx")},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}Dot.displayName="Dot";const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.Z});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/NavigationBar/NavigationBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavigationBar(_ref){var left=_ref.left,right=_ref.right,children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"shadow relative w-full",children:[children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"absolute top-0 left-1/2 -ml-8 -mt-4",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex w-full h-20 py-5 px-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-1 items-center space-x-8 text-toolbox-primary",children:left}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-1 items-center justify-end space-x-8 text-toolbox-primary",children:right})]})]})}NavigationBar.displayName="NavigationBar";const __WEBPACK_DEFAULT_EXPORT__=NavigationBar;try{NavigationBar.displayName="NavigationBar",NavigationBar.__docgenInfo={description:"",displayName:"NavigationBar",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavigationBar/NavigationBar.tsx#NavigationBar"]={docgenInfo:NavigationBar.__docgenInfo,name:"NavigationBar",path:"src/components/NavigationBar/NavigationBar.tsx#NavigationBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"m",color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-toolbox-neutral leading-5 text-xs",children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size,color})}State.displayName="State";const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"relative inline-block",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})}StateContainer.displayName="StateContainer";const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TopNavigation/TopNavigation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TopNavigation(_ref){var title=_ref.title,leading=_ref.leading,subtitle=_ref.subtitle,children=_ref.children,left=_ref.left;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"shadow w-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col space-y-1 px-8 py-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex items-center h-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-none text-toolbox-neutral",children:left}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-grow justify-end leading-10 space-x-4 text-toolbox-neutral",children})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"text-sm leading-5 h-5",children:leading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex items-center",children:[subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-none text-toolbox-primary text-base leading-5",children:subtitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-grow justify-end text-toolbox-neutral leading-8 text-2xl font-semibold",children:title})]})]})})}TopNavigation.displayName="TopNavigation";const __WEBPACK_DEFAULT_EXPORT__=TopNavigation;try{TopNavigation.displayName="TopNavigation",TopNavigation.__docgenInfo={description:"",displayName:"TopNavigation",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TopNavigation/TopNavigation.tsx#TopNavigation"]={docgenInfo:TopNavigation.__docgenInfo,name:"TopNavigation",path:"src/components/TopNavigation/TopNavigation.tsx#TopNavigation"})}catch(__react_docgen_typescript_loader_error){}}}]);