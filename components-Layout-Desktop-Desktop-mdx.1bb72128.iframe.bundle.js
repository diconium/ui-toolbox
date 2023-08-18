/*! For license information please see components-Layout-Desktop-Desktop-mdx.1bb72128.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dicoauto_toolbox=self.webpackChunk_dicoauto_toolbox||[]).push([[5312,9944],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Layout/Desktop/Desktop.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Desktop_stories__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/components/Layout/Desktop/Desktop.tsx"),__webpack_require__("./src/components/Avatar/index.ts"),__webpack_require__("./src/components/Button/Sticky/index.ts"),__webpack_require__("./src/components/Layout/Desktop/Desktop.stories.tsx"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.h_,{of:_Desktop_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"desktoplayout",children:"DesktopLayout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DesktopLayout"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { DesktopLayout } from '@dicoauto/toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_Desktop_stories__WEBPACK_IMPORTED_MODULE_5__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"additional-styles",children:"Additional styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_Desktop_stories__WEBPACK_IMPORTED_MODULE_5__.AdditionalStyles})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Layout/Desktop/Desktop.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalStyles:()=>AdditionalStyles,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_AdditionalStyles$par,_AdditionalStyles$par2,_Desktop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Layout/Desktop/Desktop.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/Layout/Desktop",component:_Desktop__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{viewport:{viewport:{defaultViewport:"lg"},layout:"fullscreen"}},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})}]};function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Desktop__WEBPACK_IMPORTED_MODULE_1__.Z,{left:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"bg-toolbox-primary h-screen p-4 w-[206px]",children:"SIDE NAV"}),right:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"bg-toolbox-secondary h-screen p-4 min-w-sm",children:"ACTION CONTAINER"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"h-screen p-4",children:"MAIN CONTENT"})})}function AdditionalStyles(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Desktop__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"bg-toolbox-feedback-orange",left:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"bg-toolbox-primary h-screen p-4 w-[206px]",children:"SIDE NAV"}),right:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"bg-toolbox-secondary h-screen p-4 min-w-sm",children:"ACTION CONTAINER"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"h-screen p-4",children:"MAIN CONTENT"})})}Default.displayName="Default",AdditionalStyles.displayName="AdditionalStyles",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'function Default() {\n  return <Layout left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>} right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}>\n      <div className="h-screen p-4">MAIN CONTENT</div>\n    </Layout>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),AdditionalStyles.parameters=_objectSpread(_objectSpread({},AdditionalStyles.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AdditionalStyles$par=AdditionalStyles.parameters)||void 0===_AdditionalStyles$par?void 0:_AdditionalStyles$par.docs),{},{source:_objectSpread({originalSource:'function AdditionalStyles() {\n  return <Layout className="bg-toolbox-feedback-orange" left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>} right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}>\n      <div className="h-screen p-4">MAIN CONTENT</div>\n    </Layout>;\n}'},null===(_AdditionalStyles$par2=AdditionalStyles.parameters)||void 0===_AdditionalStyles$par2||null===(_AdditionalStyles$par2=_AdditionalStyles$par2.docs)||void 0===_AdditionalStyles$par2?void 0:_AdditionalStyles$par2.source)})});var __namedExportsOrder=["Default","AdditionalStyles"]},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Badge/BadgeContainer.tsx")),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"xl"===size?"w-14 w-14 border-2":"2xl"===size?"w-40 w-40 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg";return"xl"===size||"2xl"===size?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.Z,{badge,size,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:template,src:link,alt}),state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.Z,{color:state,size:mapStateSize(size)})]})}Avatar.displayName="Avatar";const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}},border:{defaultValue:{value:"border-toolbox-primary"},description:"",name:"border",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.Z});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,Zq:()=>isNormalized,gl:()=>isSingleDegit});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},normalize=function normalize(badge){return badge>99?"".concat(99,"+"):badge},isNormalized=function isNormalized(badge){return badge>99},isSingleDegit=function isSingleDegit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDegit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:template,children:show&&normalize(badge)})}Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{isNormalized.displayName="isNormalized",isNormalized.__docgenInfo={description:"",displayName:"isNormalized",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isNormalized"]={docgenInfo:isNormalized.__docgenInfo,name:"isNormalized",path:"src/components/Badge/Badge.tsx#isNormalized"})}catch(__react_docgen_typescript_loader_error){}try{isSingleDegit.displayName="isSingleDegit",isSingleDegit.__docgenInfo={description:"",displayName:"isSingleDegit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isSingleDegit"]={docgenInfo:isSingleDegit.__docgenInfo,name:"isSingleDegit",path:"src/components/Badge/Badge.tsx#isSingleDegit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.gl)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.gl)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-3"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"relative inline-block min-w-max",children:[badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:template,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.ZP,{size,badge})}),children]})}BadgeContainer.displayName="BadgeContainer";const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;try{BadgeContainer.displayName="BadgeContainer",BadgeContainer.__docgenInfo={description:"",displayName:"BadgeContainer",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/BadgeContainer.tsx#BadgeContainer"]={docgenInfo:BadgeContainer.__docgenInfo,name:"BadgeContainer",path:"src/components/Badge/BadgeContainer.tsx#BadgeContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var children=_ref.children,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,outlined=_ref.outlined,_ref$baseTemplate=_ref.baseTemplate,baseTemplate=void 0===_ref$baseTemplate?"box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl":_ref$baseTemplate,_ref$defaultTemplate=_ref.defaultTemplate,defaultTemplate=void 0===_ref$defaultTemplate?"text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed":_ref$defaultTemplate,_ref$outlinedTemplate=_ref.outlinedTemplate,template=outlined?void 0===_ref$outlinedTemplate?"bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed":_ref$outlinedTemplate:defaultTemplate,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseTemplate,template);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",onClick:function onClick(){return _onClick()},className:classes,disabled,children})}Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:{value:"`box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl`"},description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:{value:"`text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`"},description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:{value:"`bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed`"},description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Sticky/Sticky.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Sticky(_ref){var label=_ref.label,secondary=_ref.secondary,disabled=_ref.disabled,left=_ref.left,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,side=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"right-0 rounded-tl-full":!left,"left-0 rounded-tr-full":left});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.Z,{disabled,baseTemplate:"".concat(" text-toolbox-white text-base max-w-xs\n font-semibold uppercase w-36 h-36 absolute bottom-0"," ").concat(side),defaultTemplate:secondary?"bg-toolbox-secondary hover:bg-toolbox-secondary-600":"bg-toolbox-primary hover:bg-toolbox-primary-600",onClick:function onClick(){return _onClick()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:left?"-ml-8":"-mr-8",children:label})})}Sticky.displayName="Sticky";const __WEBPACK_DEFAULT_EXPORT__=Sticky;try{Sticky.displayName="Sticky",Sticky.__docgenInfo={description:"",displayName:"Sticky",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:null,description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:null,description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:null,description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Sticky/Sticky.tsx#Sticky"]={docgenInfo:Sticky.__docgenInfo,name:"Sticky",path:"src/components/Button/Sticky/Sticky.tsx#Sticky"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Sticky/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_Sticky__WEBPACK_IMPORTED_MODULE_0__.Z});var _Sticky__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Sticky/Sticky.tsx")},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}Dot.displayName="Dot";const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.Z});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/Layout/Desktop/Desktop.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Desktop(_ref){var left=_ref.left,children=_ref.children,right=_ref.right,className=_ref.className,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["flex-1 overflow-hidden w-full",className]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex h-screen w-full",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"h-screen relative shadow-md overflow-y-auto",children:left}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:template,children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"h-screen shadow-md",children:right})]})}Desktop.displayName="Desktop";const __WEBPACK_DEFAULT_EXPORT__=Desktop;try{Desktop.displayName="Desktop",Desktop.__docgenInfo={description:"",displayName:"Desktop",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Desktop/Desktop.tsx#Desktop"]={docgenInfo:Desktop.__docgenInfo,name:"Desktop",path:"src/components/Layout/Desktop/Desktop.tsx#Desktop"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"m",color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-toolbox-neutral leading-5 text-xs",children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size,color})}State.displayName="State";const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"relative inline-block",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})}StateContainer.displayName="StateContainer";const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);