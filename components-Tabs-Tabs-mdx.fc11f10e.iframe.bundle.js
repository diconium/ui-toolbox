"use strict";(self.webpackChunk_dicoauto_toolbox=self.webpackChunk_dicoauto_toolbox||[]).push([[1919,8620],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Tabs/Tabs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_toolbox_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tabs_stories__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/Tabs/Tabs.tsx"),__webpack_require__("./src/components/Tabs/Tab.tsx"),__webpack_require__("./src/components/Tabs/Tabs.stories.tsx"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_home_runner_work_toolbox_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tabs"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { Tabs, Tab } from '@dicoauto/toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"as-block-component",children:"As block component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_4__.AsBlockComponent}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-shadow",children:"With shadow"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_4__.WithShadow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"vertical-scroll",children:"Vertical scroll"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_Tabs_stories__WEBPACK_IMPORTED_MODULE_4__.VerticalScroll})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_toolbox_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsBlockComponent:()=>AsBlockComponent,Default:()=>Default,VerticalScroll:()=>VerticalScroll,WithShadow:()=>WithShadow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_AsBlockComponent$par,_AsBlockComponent$par2,_WithShadow$parameter,_WithShadow$parameter2,_VerticalScroll$param,_VerticalScroll$param2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Tab__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Tabs/Tab.tsx"),_Tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/Tabs.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Toolbox/Tabs",component:_Tabs__WEBPACK_IMPORTED_MODULE_2__.ZP};var tabs=[{label:"All",icon:"menu"},{label:"New",icon:"tag"},{label:"Read",icon:"book"},{label:"Loader",icon:"refresh-ccw-alt-3"}];function Default(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),selected=_useState2[0],select=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tabs__WEBPACK_IMPORTED_MODULE_2__.ZP,{selected,onSelect:function onSelect(index){return select(index)},tabs})}function AsBlockComponent(){var _useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),selected=_useState4[0],select=_useState4[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Tabs__WEBPACK_IMPORTED_MODULE_2__.ZP,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:function onClick(){return select(0)},selected:0===selected,label:"All",icon:"menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:function onClick(){return select(1)},selected:1===selected,label:"New",icon:"tag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:function onClick(){return select(2)},selected:2===selected,label:"Read",icon:"check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:function onClick(){return select(3)},selected:3===selected,label:"Loader",icon:"rotate-exclamation"})]})}function WithShadow(){var _useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),selected=_useState6[0],select=_useState6[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tabs__WEBPACK_IMPORTED_MODULE_2__.ZP,{shadow:!0,selected,onSelect:function onSelect(index){return select(index)},tabs})}function VerticalScroll(){var _useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),selected=_useState8[0],select=_useState8[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tabs__WEBPACK_IMPORTED_MODULE_2__.ZP,{selected,onSelect:function onSelect(index){return select(index)},tabs:[{label:"All",icon:"menu"},{label:"New",icon:"tag"},{label:"Read",icon:"book"},{label:"Tab N",icon:"refresh-ccw-alt-3"},{label:"Tab N + 1",icon:"book"},{label:"Tab N + 2",icon:"bug"},{label:"Tab N + 3",icon:"clone"},{label:"Tab N + 4",icon:"eye"},{label:"Tab N + 5",icon:"heart"}]})}Default.displayName="Default",AsBlockComponent.displayName="AsBlockComponent",WithShadow.displayName="WithShadow",VerticalScroll.displayName="VerticalScroll",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"function Default() {\n  const [selected, select] = useState(0);\n  return <Tabs selected={selected} onSelect={index => select(index)} tabs={tabs} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),AsBlockComponent.parameters=_objectSpread(_objectSpread({},AsBlockComponent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AsBlockComponent$par=AsBlockComponent.parameters)||void 0===_AsBlockComponent$par?void 0:_AsBlockComponent$par.docs),{},{source:_objectSpread({originalSource:'function AsBlockComponent() {\n  const [selected, select] = useState(0);\n  return <Tabs>\n      <Tab onClick={() => select(0)} selected={selected === 0} label="All" icon="menu" />\n      <Tab onClick={() => select(1)} selected={selected === 1} label="New" icon="tag" />\n      <Tab onClick={() => select(2)} selected={selected === 2} label="Read" icon="check" />\n      <Tab onClick={() => select(3)} selected={selected === 3} label="Loader" icon="rotate-exclamation" />\n    </Tabs>;\n}'},null===(_AsBlockComponent$par2=AsBlockComponent.parameters)||void 0===_AsBlockComponent$par2||null===(_AsBlockComponent$par2=_AsBlockComponent$par2.docs)||void 0===_AsBlockComponent$par2?void 0:_AsBlockComponent$par2.source)})}),WithShadow.parameters=_objectSpread(_objectSpread({},WithShadow.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithShadow$parameter=WithShadow.parameters)||void 0===_WithShadow$parameter?void 0:_WithShadow$parameter.docs),{},{source:_objectSpread({originalSource:"function WithShadow() {\n  const [selected, select] = useState(0);\n  return <Tabs shadow selected={selected} onSelect={index => select(index)} tabs={tabs} />;\n}"},null===(_WithShadow$parameter2=WithShadow.parameters)||void 0===_WithShadow$parameter2||null===(_WithShadow$parameter2=_WithShadow$parameter2.docs)||void 0===_WithShadow$parameter2?void 0:_WithShadow$parameter2.source)})}),VerticalScroll.parameters=_objectSpread(_objectSpread({},VerticalScroll.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_VerticalScroll$param=VerticalScroll.parameters)||void 0===_VerticalScroll$param?void 0:_VerticalScroll$param.docs),{},{source:_objectSpread({originalSource:"function VerticalScroll() {\n  const [selected, select] = useState(0);\n  return <Tabs selected={selected} onSelect={index => select(index)} tabs={[{\n    label: 'All',\n    icon: 'menu'\n  }, {\n    label: 'New',\n    icon: 'tag'\n  }, {\n    label: 'Read',\n    icon: 'book'\n  }, {\n    label: 'Tab N',\n    icon: 'refresh-ccw-alt-3'\n  }, {\n    label: 'Tab N + 1',\n    icon: 'book'\n  }, {\n    label: 'Tab N + 2',\n    icon: 'bug'\n  }, {\n    label: 'Tab N + 3',\n    icon: 'clone'\n  }, {\n    label: 'Tab N + 4',\n    icon: 'eye'\n  }, {\n    label: 'Tab N + 5',\n    icon: 'heart'\n  }]} />;\n}"},null===(_VerticalScroll$param2=VerticalScroll.parameters)||void 0===_VerticalScroll$param2||null===(_VerticalScroll$param2=_VerticalScroll$param2.docs)||void 0===_VerticalScroll$param2?void 0:_VerticalScroll$param2.source)})});var __namedExportsOrder=["Default","AsBlockComponent","WithShadow","VerticalScroll"]},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.ZP});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/Tabs/Tab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Tab(_ref){var label=_ref.label,_ref$icon=_ref.icon,icon=void 0===_ref$icon?"face-smile":_ref$icon,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["text-base leading-5 px-2 py-3 font-semibold","whitespace-nowrap uppercase",selected?"text-toolbox-primary":"text-toolbox-neutral-200"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{type:"button",className:"flex justify-center items-center",onClick:function onClick(){return _onClick(label)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{className:selected?"text-toolbox-primary":"text-toolbox-neutral-200",icon,size:"s"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:template,children:label})]})}Tab.displayName="Tab";const __WEBPACK_DEFAULT_EXPORT__=Tab;try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:{value:"face-smile"},description:"",name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((key: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tabs/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/Tabs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Tab__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/Tab.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Template(_ref){var children=_ref.children,_ref$shadow=_ref.shadow,shadow=void 0!==_ref$shadow&&_ref$shadow,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["z-10 flex px-6 space-x-16 overflow-y-scroll",shadow&&"shadow-md"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:template,children})}function Tabs(_ref2){var children=_ref2.children,_ref2$tabs=_ref2.tabs,tabs=void 0===_ref2$tabs?[]:_ref2$tabs,_ref2$onSelect=_ref2.onSelect,onSelect=void 0===_ref2$onSelect?function(){}:_ref2$onSelect,_ref2$selected=_ref2.selected,selected=void 0===_ref2$selected?null:_ref2$selected,_ref2$shadow=_ref2.shadow,shadow=void 0!==_ref2$shadow&&_ref2$shadow;return tabs.length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Template,{shadow,children:tabs.map((function(_ref3,index){var label=_ref3.label,icon=_ref3.icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tab__WEBPACK_IMPORTED_MODULE_2__.Z,{label,icon,onClick:function onClick(){return onSelect(index)},selected:index===selected},label)}))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Template,{shadow,children})}Template.displayName="Template",Tabs.displayName="Tabs";const __WEBPACK_DEFAULT_EXPORT__=Tabs;try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/Tabs/Tabs.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:{value:"[]"},description:"",name:"tabs",required:!1,type:{name:"Props[]"}},onSelect:{defaultValue:{value:"() => {}"},description:"",name:"onSelect",required:!1,type:{name:"((index: number) => void)"}},selected:{defaultValue:{value:"null"},description:"",name:"selected",required:!1,type:{name:"number | null"}},shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}}}]);