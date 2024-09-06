/*! For license information please see components-Layout-Centered-Centered-stories.8a46946d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[7904],{"./src/components/Layout/Centered/Centered.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalStyles:()=>AdditionalStyles,Default:()=>Default,Example:()=>Example,WithFooter:()=>WithFooter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Centered_stories});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./src/components/Avatar/index.ts"),Sticky=__webpack_require__("./src/components/Button/Sticky/Sticky.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function Centered(_ref){var children=_ref.children,className=_ref.className,footer=_ref.footer,template=classnames_default()(["h-screen flex flex-col justify-center","px-14 py-7 relative",className]);return react.createElement("div",{className:template},react.createElement("div",{className:"flex-1 flex justify-center items-center"},children),react.createElement("div",{className:"flex flex-shrink"},footer))}const Centered_Centered=Centered;try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Centered/Centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:"src/components/Layout/Centered/Centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}const Centered_stories={title:"Toolbox/Layout/Centered",component:Centered_Centered,parameters:{viewport:{defaultViewport:"sm"}},decorators:[Story=>react.createElement("div",{className:"flex justify-center"},react.createElement("div",{className:"w-sm border"},react.createElement(Story,null)))]};function Default(){return react.createElement(Centered_Centered,null,react.createElement("div",{className:"w-full border"},"CENTERED CONTENT"))}function AdditionalStyles(){return react.createElement(Centered_Centered,{className:"bg-toolbox-feedback-orange"},react.createElement("div",{className:"w-full"},"CENTERED CONTENT"))}function WithFooter(){return react.createElement(Centered_Centered,{footer:react.createElement("div",{className:"w-full text-toolbox-neutral-200 text-sm flex justify-center"},"Contact your support",react.createElement("span",{className:"underline underline-offset-2"},"here"),".")},react.createElement("div",{className:"w-full flex flex-col justify-center items-center"},react.createElement("div",{className:"mb-4"},react.createElement(Avatar.A,{link:"https://i.pravatar.cc/150?u=08188",alt:"Mike",size:"xl",badge:99})),react.createElement("div",{className:"text-toolbox-primary text-2xl"},"WELCOME BACK"),react.createElement("div",{className:"text-toolbox-primary text-base"},"Let's continue")))}function Example(){return react.createElement(Centered_Centered,null,react.createElement("div",{className:"w-full flex flex-col justify-center items-center"},react.createElement("div",{className:"mb-4"},react.createElement(Avatar.A,{link:"https://i.pravatar.cc/150?u=08188",alt:"Mike",size:"xl",badge:99})),react.createElement("div",{className:"text-toolbox-neutral text-2xl"},"Welcome back,",react.createElement("span",{className:"text-toolbox-primary"},"Jeff")),react.createElement("div",{className:"text-toolbox-neutral-500 text-sm"},"Let's continue to get some work done today.")),react.createElement(Sticky.A,{label:"Next"}))}const __namedExportsOrder=["Default","AdditionalStyles","WithFooter","Example"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <Layout>\n      <div className="w-full border">CENTERED CONTENT</div>\n    </Layout>;\n}',...Default.parameters?.docs?.source}}},AdditionalStyles.parameters={...AdditionalStyles.parameters,docs:{...AdditionalStyles.parameters?.docs,source:{originalSource:'function AdditionalStyles() {\n  return <Layout className="bg-toolbox-feedback-orange">\n      <div className="w-full">CENTERED CONTENT</div>\n    </Layout>;\n}',...AdditionalStyles.parameters?.docs?.source}}},WithFooter.parameters={...WithFooter.parameters,docs:{...WithFooter.parameters?.docs,source:{originalSource:'function WithFooter() {\n  return <Layout footer={<div className="w-full text-toolbox-neutral-200 text-sm flex justify-center">\n          Contact your support\n          <span className="underline underline-offset-2">here</span>.\n        </div>}>\n      <div className="w-full flex flex-col justify-center items-center">\n        <div className="mb-4">\n          <Avatar link="https://i.pravatar.cc/150?u=08188" alt="Mike" size="xl" badge={99} />\n        </div>\n        <div className="text-toolbox-primary text-2xl">WELCOME BACK</div>\n        <div className="text-toolbox-primary text-base">Let&apos;s continue</div>\n      </div>\n    </Layout>;\n}',...WithFooter.parameters?.docs?.source}}},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'function Example() {\n  return <Layout>\n      <div className="w-full flex flex-col justify-center items-center">\n        <div className="mb-4">\n          <Avatar link="https://i.pravatar.cc/150?u=08188" alt="Mike" size="xl" badge={99} />\n        </div>\n        <div className="text-toolbox-neutral text-2xl">\n          Welcome back,\n          <span className="text-toolbox-primary">Jeff</span>\n        </div>\n        <div className="text-toolbox-neutral-500 text-sm">\n          Let&apos;s continue to get some work done today.\n        </div>\n      </div>\n      <StickyButton label="Next" />\n    </Layout>;\n}',...Example.parameters?.docs?.source}}}},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/BadgeContainer.tsx"),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"xl"===size?"w-14 h-14 border-2":"2xl"===size?"w-40 h-40 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg";return"xl"===size||"2xl"===size?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.A,{badge,size},react__WEBPACK_IMPORTED_MODULE_1__.createElement("img",{className:template,src:link,alt}),state&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.A,{color:state,size:mapStateSize(size)}))}const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}},border:{defaultValue:{value:"border-toolbox-primary"},description:"",name:"border",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.A});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,mQ:()=>isNormalized,yb:()=>isSingleDigit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},isNormalized=function isNormalized(badge){return badge>99},isSingleDigit=function isSingleDigit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDigit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:template},show&&function normalize(badge){return badge>99?"".concat(99,"+"):badge}(badge))}const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{isNormalized.displayName="isNormalized",isNormalized.__docgenInfo={description:"",displayName:"isNormalized",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isNormalized"]={docgenInfo:isNormalized.__docgenInfo,name:"isNormalized",path:"src/components/Badge/Badge.tsx#isNormalized"})}catch(__react_docgen_typescript_loader_error){}try{isSingleDigit.displayName="isSingleDigit",isSingleDigit.__docgenInfo={description:"",displayName:"isSingleDigit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isSingleDigit"]={docgenInfo:isSingleDigit.__docgenInfo,name:"isSingleDigit",path:"src/components/Badge/Badge.tsx#isSingleDigit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.yb)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.yb)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.mQ)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.mQ)(badge)&&"-mr-3"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative inline-block min-w-max"},badge&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:template},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_2__.Ay,{size,badge})),children)}const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;try{BadgeContainer.displayName="BadgeContainer",BadgeContainer.__docgenInfo={description:"",displayName:"BadgeContainer",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/BadgeContainer.tsx#BadgeContainer"]={docgenInfo:BadgeContainer.__docgenInfo,name:"BadgeContainer",path:"src/components/Badge/BadgeContainer.tsx#BadgeContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function Button(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,children=_ref.children,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,outlined=_ref.outlined,_ref$baseTemplate=_ref.baseTemplate,baseTemplate=void 0===_ref$baseTemplate?"box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl":_ref$baseTemplate,_ref$defaultTemplate=_ref.defaultTemplate,defaultTemplate=void 0===_ref$defaultTemplate?"text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed":_ref$defaultTemplate,_ref$outlinedTemplate=_ref.outlinedTemplate,template=outlined?void 0===_ref$outlinedTemplate?"bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed":_ref$outlinedTemplate:defaultTemplate,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseTemplate,template);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit"===type?"submit":"button",onClick,className:classes,disabled},children)}const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:{value:"`box-border h-14 text-base leading-4\n  font-semibold uppercase px-20 py-4 rounded-2xl`"},description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:{value:"`text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600\n  active:bg-toolbox-neutral active:text-toolbox-neutral-600\n  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-4\n  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2\n  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`"},description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:{value:"`bg-white border-4 border-toolbox-neutral text-toolbox-black\n  hover:bg-toolbox-neutral-600 hover:text-toolbox-white\n  active:bg-toolbox-neutral active:text-toolbox-white\n  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral\n  visited:underline visited:underline-offset-2\n  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed`"},description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Sticky/Sticky.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/Button.tsx");function Sticky(_ref){var label=_ref.label,secondary=_ref.secondary,disabled=_ref.disabled,left=_ref.left,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,side=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"right-0 rounded-tl-full":!left,"left-0 rounded-tr-full":left});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{disabled,baseTemplate:"".concat(" text-toolbox-white text-base max-w-xs\n font-semibold uppercase w-36 h-36 absolute bottom-0"," ").concat(side),defaultTemplate:secondary?"bg-toolbox-secondary hover:bg-toolbox-secondary-600":"bg-toolbox-primary hover:bg-toolbox-primary-600",onClick:function onClick(){return _onClick()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:left?"-ml-8":"-mr-8"},label))}const __WEBPACK_DEFAULT_EXPORT__=Sticky;try{Sticky.displayName="Sticky",Sticky.__docgenInfo={description:"",displayName:"Sticky",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:null,description:"",name:"baseTemplate",required:!1,type:{name:"string"}},defaultTemplate:{defaultValue:null,description:"",name:"defaultTemplate",required:!1,type:{name:"string"}},outlinedTemplate:{defaultValue:null,description:"",name:"outlinedTemplate",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Sticky/Sticky.tsx#Sticky"]={docgenInfo:Sticky.__docgenInfo,name:"Sticky",path:"src/components/Button/Sticky/Sticky.tsx#Sticky"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.A});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center space-x-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size:"m",color}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-toolbox-neutral leading-5 text-xs"},label)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size,color})}const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative inline-block"},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))}const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);