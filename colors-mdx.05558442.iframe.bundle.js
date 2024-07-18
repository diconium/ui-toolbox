/*! For license information please see colors-mdx.05558442.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[1076,2408],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/colors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Additional:()=>Additional,Feedback:()=>Feedback,Neutrals:()=>Neutrals,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Colors"};function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid grid-cols-4 gap-1 text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary p-4",children:"primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-dominant p-4",children:"primary-dominant"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-900 p-4",children:"primary-900"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-800 p-4",children:"primary-800"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-700 p-4",children:"primary-700"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-600 p-4",children:"primary-600"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-500 p-4",children:"primary-500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-400 p-4",children:"primary-400"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-accent p-4",children:"primary-accent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-300 p-4",children:"primary-300"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-200 p-4",children:"primary-200"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-100 p-4",children:"primary-100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-50 p-4",children:"primary-50"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-primary-gradient p-4",children:"primary-gradient"})]})}function Secondary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid grid-cols-4 gap-1 text-black",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary p-4",children:"secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-dominant p-4",children:"secondary-dominant"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-900 p-4",children:"secondary-900"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-800 p-4",children:"secondary-800"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-700 p-4",children:"secondary-700"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-600 p-4",children:"secondary-600"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-500 p-4",children:"secondary-500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-400 p-4",children:"secondary-400"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-accent p-4",children:"secondary-accent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-300 p-4",children:"secondary-300"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-200 p-4",children:"secondary-200"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-100 p-4",children:"secondary-100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-50 p-4",children:"secondary-50"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-secondary-gradient p-4",children:"secondary-gradient"})]})}function Neutrals(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid grid-cols-4 gap-1 text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral p-4",children:"neutral"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-dominant p-4",children:"neutral-dominant"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-900 p-4",children:"neutral-900"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-800 p-4",children:"neutral-800"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-700 p-4",children:"neutral-700"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-600 p-4",children:"neutral-600"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-500 p-4",children:"neutral-500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-400 p-4",children:"neutral-400"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-accent p-4",children:"neutral-accent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-300 p-4",children:"neutral-300"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-200 p-4",children:"neutral-200"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-100 p-4",children:"neutral-100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-50 p-4",children:"neutral-50"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-neutral-gradient p-4",children:"neutral-gradient"})]})}function Feedback(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid grid-cols-2 gap-1 text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-feedback-red p-4",children:"feedback-red"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-feedback-red-50 p-4",children:"feedback-red-50"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-feedback-orange p-4",children:"feedback-orange"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-feedback-orange-50 p-4",children:"feedback-orange-50"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-feedback-green p-4",children:"feedback-green"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-feedback-green-50 p-4",children:"feedback-green-50"})]})}function Additional(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid grid-cols-2 gap-1 text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-black p-4",children:"black"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-white p-4 text-black",children:"white"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-toolbox-grey p-4 text-black",children:"grey"})]})}Primary.displayName="Primary",Secondary.displayName="Secondary",Neutrals.displayName="Neutrals",Feedback.displayName="Feedback",Additional.displayName="Additional",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'function Primary() {\n  return <div className="grid grid-cols-4 gap-1 text-white">\n      <div className="bg-toolbox-primary p-4">primary</div>\n      <div className="bg-toolbox-primary-dominant p-4">primary-dominant</div>\n      <div className="bg-toolbox-primary-900 p-4">primary-900</div>\n      <div className="bg-toolbox-primary-800 p-4">primary-800</div>\n      <div className="bg-toolbox-primary-700 p-4">primary-700</div>\n      <div className="bg-toolbox-primary-600 p-4">primary-600</div>\n      <div className="bg-toolbox-primary-500 p-4">primary-500</div>\n      <div className="bg-toolbox-primary-400 p-4">primary-400</div>\n      <div className="bg-toolbox-primary-accent p-4">primary-accent</div>\n      <div className="bg-toolbox-primary-300 p-4">primary-300</div>\n      <div className="bg-toolbox-primary-200 p-4">primary-200</div>\n      <div className="bg-toolbox-primary-100 p-4">primary-100</div>\n      <div className="bg-toolbox-primary-50 p-4">primary-50</div>\n      <div className="bg-toolbox-primary-gradient p-4">primary-gradient</div>\n    </div>;\n}',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'function Secondary() {\n  return <div className="grid grid-cols-4 gap-1 text-black">\n      <div className="bg-toolbox-secondary p-4">secondary</div>\n      <div className="bg-toolbox-secondary-dominant p-4">secondary-dominant</div>\n      <div className="bg-toolbox-secondary-900 p-4">secondary-900</div>\n      <div className="bg-toolbox-secondary-800 p-4">secondary-800</div>\n      <div className="bg-toolbox-secondary-700 p-4">secondary-700</div>\n      <div className="bg-toolbox-secondary-600 p-4">secondary-600</div>\n      <div className="bg-toolbox-secondary-500 p-4">secondary-500</div>\n      <div className="bg-toolbox-secondary-400 p-4">secondary-400</div>\n      <div className="bg-toolbox-secondary-accent p-4">secondary-accent</div>\n      <div className="bg-toolbox-secondary-300 p-4">secondary-300</div>\n      <div className="bg-toolbox-secondary-200 p-4">secondary-200</div>\n      <div className="bg-toolbox-secondary-100 p-4">secondary-100</div>\n      <div className="bg-toolbox-secondary-50 p-4">secondary-50</div>\n      <div className="bg-toolbox-secondary-gradient p-4">secondary-gradient</div>\n    </div>;\n}',...Secondary.parameters?.docs?.source}}},Neutrals.parameters={...Neutrals.parameters,docs:{...Neutrals.parameters?.docs,source:{originalSource:'function Neutrals() {\n  return <div className="grid grid-cols-4 gap-1 text-white">\n      <div className="bg-toolbox-neutral p-4">neutral</div>\n      <div className="bg-toolbox-neutral-dominant p-4">neutral-dominant</div>\n      <div className="bg-toolbox-neutral-900 p-4">neutral-900</div>\n      <div className="bg-toolbox-neutral-800 p-4">neutral-800</div>\n      <div className="bg-toolbox-neutral-700 p-4">neutral-700</div>\n      <div className="bg-toolbox-neutral-600 p-4">neutral-600</div>\n      <div className="bg-toolbox-neutral-500 p-4">neutral-500</div>\n      <div className="bg-toolbox-neutral-400 p-4">neutral-400</div>\n      <div className="bg-toolbox-neutral-accent p-4">neutral-accent</div>\n      <div className="bg-toolbox-neutral-300 p-4">neutral-300</div>\n      <div className="bg-toolbox-neutral-200 p-4">neutral-200</div>\n      <div className="bg-toolbox-neutral-100 p-4">neutral-100</div>\n      <div className="bg-toolbox-neutral-50 p-4">neutral-50</div>\n      <div className="bg-toolbox-neutral-gradient p-4">neutral-gradient</div>\n    </div>;\n}',...Neutrals.parameters?.docs?.source}}},Feedback.parameters={...Feedback.parameters,docs:{...Feedback.parameters?.docs,source:{originalSource:'function Feedback() {\n  return <div className="grid grid-cols-2 gap-1 text-white">\n      <div className="bg-toolbox-feedback-red p-4">feedback-red</div>\n      <div className="bg-toolbox-feedback-red-50 p-4">feedback-red-50</div>\n      <div className="bg-toolbox-feedback-orange p-4">feedback-orange</div>\n      <div className="bg-toolbox-feedback-orange-50 p-4">feedback-orange-50</div>\n      <div className="bg-toolbox-feedback-green p-4">feedback-green</div>\n      <div className="bg-toolbox-feedback-green-50 p-4">feedback-green-50</div>\n    </div>;\n}',...Feedback.parameters?.docs?.source}}},Additional.parameters={...Additional.parameters,docs:{...Additional.parameters?.docs,source:{originalSource:'function Additional() {\n  return <div className="grid grid-cols-2 gap-1 text-white">\n      <div className="bg-toolbox-black p-4">black</div>\n      <div className="bg-toolbox-white p-4 text-black">white</div>\n      <div className="bg-toolbox-grey p-4 text-black">grey</div>\n    </div>;\n}',...Additional.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Neutrals","Feedback","Additional"]},"./src/colors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_colors_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/colors.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",h4:"h4"},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Qb,{of:_colors_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"colors",children:"Colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The library comes with a set of colors as shown below. They are available in the\nstandard tailwindcss nomenclature e.g."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[modifier]-toolbox-[primary|secondary]-[name of color]\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"examples",children:"Examples:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"bg-toolbox-primary-50\n\nbg-toolbox-secondary-300\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary-colors",children:"Primary colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"purple",children:"Purple"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_colors_stories__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"secondary-colors",children:"Secondary colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"teal",children:"Teal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_colors_stories__WEBPACK_IMPORTED_MODULE_2__.Secondary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"neutral-colors",children:"Neutral colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"grey",children:"Grey"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_colors_stories__WEBPACK_IMPORTED_MODULE_2__.Neutrals}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"feedback-colors",children:"Feedback colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_colors_stories__WEBPACK_IMPORTED_MODULE_2__.Feedback}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"additional-colors",children:"Additional colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_colors_stories__WEBPACK_IMPORTED_MODULE_2__.Additional})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);