/*! For license information please see components-Avatars-Avatars-mdx.e2f55d73.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[8729,7131],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Avatars/Avatars.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Avatars_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Avatars/Avatars.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",p:"p",pre:"pre",...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Avatars_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"avatars",children:"Avatars"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Avatars"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { Avatars } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Avatars_stories__WEBPACK_IMPORTED_MODULE_2__.Default})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/Avatars/Avatars.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatars_stories});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./src/components/Avatar/index.ts");function Avatars(_ref){var avatars=_ref.avatars;return react.createElement("div",{className:"flex"},avatars.map((function(_ref2,index){var link=_ref2.link,alt=_ref2.alt,size=_ref2.size,border=_ref2.border,state=_ref2.state,badge=_ref2.badge;return react.createElement("div",{key:link,className:0===index?"":"-ml-5"},react.createElement(Avatar.A,{link,alt,size:size||"xl",border:border||"border-toolbox-white",state,badge}))})))}const Avatars_Avatars=Avatars;Avatars.__docgenInfo={description:"",methods:[],displayName:"Avatars",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarProp"}],raw:"AvatarProp[]"},description:""}}};const Avatars_stories={title:"Toolbox/Avatars",component:Avatars_Avatars};function Default(){return react.createElement(Avatars_Avatars,{avatars:[{link:"https://i.pravatar.cc/150?u=08188",alt:"Mike"},{link:"https://i.pravatar.cc/150?u=47110",alt:"Nora"},{link:"https://i.pravatar.cc/150?u=08122",alt:"Bamia"}]})}const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default() {\n  return <Avatars avatars={[{\n    link: 'https://i.pravatar.cc/150?u=08188',\n    alt: 'Mike'\n  }, {\n    link: 'https://i.pravatar.cc/150?u=47110',\n    alt: 'Nora'\n  }, {\n    link: 'https://i.pravatar.cc/150?u=08122',\n    alt: 'Bamia'\n  }]} />;\n}",...Default.parameters?.docs?.source}}}},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/BadgeContainer.tsx"),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"xl"===size?"w-14 h-14 border-2":"2xl"===size?"w-40 h-40 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg";return"xl"===size||"2xl"===size?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.A,{badge,size},react__WEBPACK_IMPORTED_MODULE_1__.createElement("img",{className:template,src:link,alt}),state&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.A,{color:state,size:mapStateSize(size)}))}const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{link:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'lg'",computed:!1}},border:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'border-toolbox-primary'",computed:!1}},badge:{required:!1,tsType:{name:"number"},description:""}}}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.A});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,mQ:()=>isNormalized,yb:()=>isSingleDigit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},isNormalized=function isNormalized(badge){return badge>99},isSingleDigit=function isSingleDigit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDigit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:template},show&&function normalize(badge){return badge>99?"".concat(99,"+"):badge}(badge))}const __WEBPACK_DEFAULT_EXPORT__=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{badge:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'lg'",computed:!1}}}}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.yb)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.yb)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.mQ)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.mQ)(badge)&&"-mr-3"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative inline-block min-w-max"},badge&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:template},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_2__.Ay,{size,badge})),children)}const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;BadgeContainer.__docgenInfo={description:"",methods:[],displayName:"BadgeContainer",props:{badge:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'lg'",computed:!1}}},composes:["PropsWithChildren"]}},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}const __WEBPACK_DEFAULT_EXPORT__=Dot;Dot.__docgenInfo={description:"",methods:[],displayName:"Dot",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'bg-toolbox-primary'",computed:!1}},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'lg'",computed:!1}}}}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.A});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center space-x-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size:"m",color}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-toolbox-neutral leading-5 text-xs"},label)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size,color})}const __WEBPACK_DEFAULT_EXPORT__=State;State.__docgenInfo={description:"",methods:[],displayName:"State",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'bg-toolbox-primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'lg'",computed:!1}}}}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative inline-block"},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 right-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_State__WEBPACK_IMPORTED_MODULE_1__.A,{color,size}))}const __WEBPACK_DEFAULT_EXPORT__=StateContainer;StateContainer.__docgenInfo={description:"",methods:[],displayName:"StateContainer",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'bg-toolbox-primary'",computed:!1}},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'lg'",computed:!1}}},composes:["PropsWithChildren"]}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);