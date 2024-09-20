/*! For license information please see components-Tabs-Tabs-mdx.6f2d828e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[4975,4105],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Tabs/Tabs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tabs_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/Tabs.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tabs"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { Tabs, Tab } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"as-block-component",children:"As block component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_2__.AsBlockComponent}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-shadow",children:"With shadow"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_2__.WithShadow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"vertical-scroll",children:"Vertical scroll"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_2__.VerticalScroll})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/Tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsBlockComponent:()=>AsBlockComponent,Default:()=>Default,VerticalScroll:()=>VerticalScroll,WithShadow:()=>WithShadow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./src/components/Icon/index.ts");function Tab(_ref){var label=_ref.label,_ref$icon=_ref.icon,icon=void 0===_ref$icon?"face-smile":_ref$icon,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,template=classnames_default()(["text-base leading-5 px-2 py-3 font-semibold","whitespace-nowrap uppercase",selected?"text-toolbox-primary":"text-toolbox-neutral-200"]);return react.createElement("button",{type:"button",className:"flex justify-center items-center",onClick:function onClick(){return _onClick(label)}},react.createElement(Icon.A,{className:selected?"text-toolbox-primary":"text-toolbox-neutral-200",icon,size:"s"}),react.createElement("span",{className:template},label))}const Tabs_Tab=Tab;try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:{value:"face-smile"},description:"",name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((key: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tabs/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}function Template(_ref){var children=_ref.children,_ref$shadow=_ref.shadow,shadow=void 0!==_ref$shadow&&_ref$shadow,template=classnames_default()(["z-10 flex px-6 space-x-16 overflow-y-scroll",shadow&&"shadow-md"]);return react.createElement("div",{className:template},children)}function Tabs(_ref2){var children=_ref2.children,_ref2$tabs=_ref2.tabs,tabs=void 0===_ref2$tabs?[]:_ref2$tabs,_ref2$onSelect=_ref2.onSelect,onSelect=void 0===_ref2$onSelect?function(){}:_ref2$onSelect,_ref2$selected=_ref2.selected,selected=void 0===_ref2$selected?null:_ref2$selected,_ref2$shadow=_ref2.shadow,shadow=void 0!==_ref2$shadow&&_ref2$shadow;return tabs.length>0?react.createElement(Template,{shadow},tabs.map((function(_ref3,index){var label=_ref3.label,icon=_ref3.icon;return react.createElement(Tabs_Tab,{key:label,label,icon,onClick:function onClick(){return onSelect(index)},selected:index===selected})}))):react.createElement(Template,{shadow},children)}const Tabs_Tabs=Tabs;try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/Tabs/Tabs.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:{value:"[]"},description:"",name:"tabs",required:!1,type:{name:"Props[]"}},onSelect:{defaultValue:{value:"() => {}"},description:"",name:"onSelect",required:!1,type:{name:"((index: number) => void)"}},selected:{defaultValue:{value:"null"},description:"",name:"selected",required:!1,type:{name:"number | null"}},shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const Tabs_stories={title:"Toolbox/Tabs",component:Tabs_Tabs},tabs=[{label:"All",icon:"menu"},{label:"New",icon:"tag"},{label:"Read",icon:"book"},{label:"Loader",icon:"refresh-ccw-alt-3"}];function Default(){const[selected,select]=(0,react.useState)(0);return react.createElement(Tabs_Tabs,{selected,onSelect:index=>select(index),tabs})}function AsBlockComponent(){const[selected,select]=(0,react.useState)(0);return react.createElement(Tabs_Tabs,null,react.createElement(Tabs_Tab,{onClick:()=>select(0),selected:0===selected,label:"All",icon:"menu"}),react.createElement(Tabs_Tab,{onClick:()=>select(1),selected:1===selected,label:"New",icon:"tag"}),react.createElement(Tabs_Tab,{onClick:()=>select(2),selected:2===selected,label:"Read",icon:"check"}),react.createElement(Tabs_Tab,{onClick:()=>select(3),selected:3===selected,label:"Loader",icon:"rotate-exclamation"}))}function WithShadow(){const[selected,select]=(0,react.useState)(0);return react.createElement(Tabs_Tabs,{shadow:!0,selected,onSelect:index=>select(index),tabs})}function VerticalScroll(){const[selected,select]=(0,react.useState)(0);return react.createElement(Tabs_Tabs,{selected,onSelect:index=>select(index),tabs:[{label:"All",icon:"menu"},{label:"New",icon:"tag"},{label:"Read",icon:"book"},{label:"Tab N",icon:"refresh-ccw-alt-3"},{label:"Tab N + 1",icon:"book"},{label:"Tab N + 2",icon:"bug"},{label:"Tab N + 3",icon:"clone"},{label:"Tab N + 4",icon:"eye"},{label:"Tab N + 5",icon:"heart"}]})}const __namedExportsOrder=["Default","AsBlockComponent","WithShadow","VerticalScroll"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default() {\n  const [selected, select] = useState(0);\n  return <Tabs selected={selected} onSelect={index => select(index)} tabs={tabs} />;\n}",...Default.parameters?.docs?.source}}},AsBlockComponent.parameters={...AsBlockComponent.parameters,docs:{...AsBlockComponent.parameters?.docs,source:{originalSource:'function AsBlockComponent() {\n  const [selected, select] = useState(0);\n  return <Tabs>\n      <Tab onClick={() => select(0)} selected={selected === 0} label="All" icon="menu" />\n      <Tab onClick={() => select(1)} selected={selected === 1} label="New" icon="tag" />\n      <Tab onClick={() => select(2)} selected={selected === 2} label="Read" icon="check" />\n      <Tab onClick={() => select(3)} selected={selected === 3} label="Loader" icon="rotate-exclamation" />\n    </Tabs>;\n}',...AsBlockComponent.parameters?.docs?.source}}},WithShadow.parameters={...WithShadow.parameters,docs:{...WithShadow.parameters?.docs,source:{originalSource:"function WithShadow() {\n  const [selected, select] = useState(0);\n  return <Tabs shadow selected={selected} onSelect={index => select(index)} tabs={tabs} />;\n}",...WithShadow.parameters?.docs?.source}}},VerticalScroll.parameters={...VerticalScroll.parameters,docs:{...VerticalScroll.parameters?.docs,source:{originalSource:"function VerticalScroll() {\n  const [selected, select] = useState(0);\n  return <Tabs selected={selected} onSelect={index => select(index)} tabs={[{\n    label: 'All',\n    icon: 'menu'\n  }, {\n    label: 'New',\n    icon: 'tag'\n  }, {\n    label: 'Read',\n    icon: 'book'\n  }, {\n    label: 'Tab N',\n    icon: 'refresh-ccw-alt-3'\n  }, {\n    label: 'Tab N + 1',\n    icon: 'book'\n  }, {\n    label: 'Tab N + 2',\n    icon: 'bug'\n  }, {\n    label: 'Tab N + 3',\n    icon: 'clone'\n  }, {\n    label: 'Tab N + 4',\n    icon: 'eye'\n  }, {\n    label: 'Tab N + 5',\n    icon: 'heart'\n  }]} />;\n}",...VerticalScroll.parameters?.docs?.source}}}},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Ay});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);