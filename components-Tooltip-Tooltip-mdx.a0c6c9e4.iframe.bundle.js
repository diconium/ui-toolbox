/*! For license information please see components-Tooltip-Tooltip-mdx.a0c6c9e4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[9631,1325],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomContent:()=>CustomContent,Default:()=>Default,DifferentSides:()=>DifferentSides,DifferentVariants:()=>DifferentVariants,InAction:()=>InAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});__webpack_require__("./node_modules/react/index.js");var Avatar=__webpack_require__("./src/components/Avatar/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Display(_ref){var tooltip=_ref.tooltip,_ref$side=_ref.side,side=void 0===_ref$side?"right":_ref$side,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,template=classnames_default()("pointer-events-none absolute\n  transition-opacity w-44 bg-toolbox-white\n  rounded-2xl drop-shadow-lg px-4 py-2\n  inline-block border-toolbox-grey z-10",className,["right"===side&&"right-0 translate-x-full -translate-y-1/2 -mr-6","left"===side&&"left-0 -translate-x-full -translate-y-1/2 -ml-6",side.includes("top")&&"left-0 -translate-y-full -mt-3 -ml-6",side.includes("bottom")&&"left-0 translate-y-full -bottom-4 -mr-6"]),arrow=classnames_default()("w-0 h-0 absolute border-t-[16px]\n  border-t-transparent border-b-[16px] border-b-transparent\n  border-r-[16px] border-r-toolbox-white",["right"===side&&"left-0 bottom-4 -translate-y-1/4 -ml-4","left"===side&&"right-0 bottom-4 -translate-y-1/4 -mr-4 rotate-180","top"===side&&"left-1/2 bottom-0 -mb-6 translate-x-1/2 -ml-4 -rotate-90","top|left"===side&&"left-1/4 bottom-0 -mb-6 translate-x-1/2 -ml-4 -rotate-90","top|right"===side&&"right-1/4 bottom-0 -mb-6 translate-x-1/2 -ml-4 -rotate-90","bottom"===side&&"left-1/2 top-0 -mt-6 translate-x-1/2 -ml-4 rotate-90","bottom|left"===side&&"left-1/4 top-0 -mt-6 translate-x-1/2 -ml-4 rotate-90","bottom|right"===side&&"right-1/4 top-0 -mt-6 translate-x-1/2 -ml-4 rotate-90"]),isSimple="string"==typeof tooltip||tooltip instanceof String;return(0,jsx_runtime.jsxs)("div",{className:template,children:[(0,jsx_runtime.jsx)("span",{className:arrow}),isSimple&&(0,jsx_runtime.jsx)("span",{className:"text-sm text-toolbox-neutral",children:tooltip}),!isSimple&&tooltip]})}Display.displayName="Display";const Tooltip_Display=Display;try{Display.displayName="Display",Display.__docgenInfo={description:"",displayName:"Display",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode"}},side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Display.tsx#Display"]={docgenInfo:Display.__docgenInfo,name:"Display",path:"src/components/Tooltip/Display.tsx#Display"})}catch(__react_docgen_typescript_loader_error){}function Container(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:"group relative w-max",children})}function Tooltip(_ref2){var children=_ref2.children,tooltip=_ref2.tooltip,side=_ref2.side;return(0,jsx_runtime.jsxs)(Container,{children:[children,(0,jsx_runtime.jsx)(Tooltip_Display,{tooltip,side,className:"opacity-0 group-hover:opacity-100"})]})}Container.displayName="Container",Tooltip.displayName="Tooltip";const Tooltip_Tooltip=Tooltip;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Tooltip/Tooltip.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode"}},side:{defaultValue:null,description:"",name:"side",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}const Tooltip_stories={title:"Toolbox/Tooltip",component:Tooltip_Tooltip,decorators:[function(Story){return(0,jsx_runtime.jsx)("div",{className:"py-12 flex justify-center px-16",children:(0,jsx_runtime.jsx)(Story,{})})}]};var InAction={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-16 m-32",children:[(0,jsx_runtime.jsx)(Tooltip_Tooltip,{side:"left",tooltip:"Text label for tooltip, information about something. This is some more info.",children:(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip left side"})}),(0,jsx_runtime.jsx)(Tooltip_Tooltip,{tooltip:(0,jsx_runtime.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,jsx_runtime.jsx)(Avatar.Z,{link:"https://i.pravatar.cc/150?u=47110",alt:"Nora",size:"m"}),(0,jsx_runtime.jsx)("span",{className:"text-xs text-toolbox-neutral flex-1",children:"Text label for tooltip, information about something. This is some more info."})]}),children:(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip right side"})}),(0,jsx_runtime.jsx)(Tooltip_Tooltip,{side:"bottom",tooltip:(0,jsx_runtime.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,jsx_runtime.jsx)(Avatar.Z,{link:"https://i.pravatar.cc/150?u=47110",alt:"Nora",size:"m"}),(0,jsx_runtime.jsx)("span",{className:"text-xs text-toolbox-neutral flex-1",children:"Text label for tooltip, information about something. This is some more info."})]}),children:(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip bottom side"})}),(0,jsx_runtime.jsx)(Tooltip_Tooltip,{side:"top",tooltip:"Small one here",children:(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip top side"})})]})},parameters:{chromatic:{disableSnapshot:!0}}};function Default(){return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip here"}),(0,jsx_runtime.jsx)(Tooltip_Display,{tooltip:"Text label for tooltip, information about something. This is some more info."})]})}function DifferentSides(){return(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-16 m-32",children:[(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip left side"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"left",tooltip:"Text label for tooltip, information about something. This is some more info."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip top side"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"top",tooltip:"Text label for tooltip, information about something. This is some more info."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip bottom side"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"bottom",tooltip:"Text label for tooltip, information about something. This is some more info."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip right side"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"right",tooltip:"Text label for tooltip, information about something. This is some more info."})]})]})}function DifferentVariants(){return(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-2 gap-16 m-32",children:[(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip top side left"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"top|left",tooltip:"Text label for tooltip, information about something. This is some more info."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip top side right"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"top|right",tooltip:"Text label for tooltip, information about something. This is some more info."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip bottom side left"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"bottom|left",tooltip:"Text label for tooltip, information about something. This is some more info."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip bottom side right"}),(0,jsx_runtime.jsx)(Tooltip_Display,{side:"bottom|right",tooltip:"Text label for tooltip, information about something. This is some more info."})]})]})}function CustomContent(){return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("span",{className:"text-base text-toolbox-neutral underline",children:"Tooltip here"}),(0,jsx_runtime.jsx)(Tooltip_Display,{tooltip:(0,jsx_runtime.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,jsx_runtime.jsx)(Avatar.Z,{link:"https://i.pravatar.cc/150?u=47110",alt:"Nora",size:"m"}),(0,jsx_runtime.jsx)("span",{className:"text-xs flex-1",children:"Text label for tooltip, information about something. This is some more info."})]})})]})}Default.displayName="Default",DifferentSides.displayName="DifferentSides",DifferentVariants.displayName="DifferentVariants",CustomContent.displayName="CustomContent",InAction.parameters={...InAction.parameters,docs:{...InAction.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="grid grid-cols-2 gap-16 m-32">\n      <Tooltip side="left" tooltip="Text label for tooltip, information about something. This is some more info.">\n        <span className="text-base text-toolbox-neutral underline">Tooltip left side</span>\n      </Tooltip>\n      <Tooltip tooltip={<div className="flex space-x-2 items-center">\n            <Avatar link="https://i.pravatar.cc/150?u=47110" alt="Nora" size="m" />\n            <span className="text-xs text-toolbox-neutral flex-1">\n              Text label for tooltip, information about something. This is some more info.\n            </span>\n          </div>}>\n        <span className="text-base text-toolbox-neutral underline">Tooltip right side</span>\n      </Tooltip>\n      <Tooltip side="bottom" tooltip={<div className="flex space-x-2 items-center">\n            <Avatar link="https://i.pravatar.cc/150?u=47110" alt="Nora" size="m" />\n            <span className="text-xs text-toolbox-neutral flex-1">\n              Text label for tooltip, information about something. This is some more info.\n            </span>\n          </div>}>\n        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side</span>\n      </Tooltip>\n      <Tooltip side="top" tooltip="Small one here">\n        <span className="text-base text-toolbox-neutral underline">Tooltip top side</span>\n      </Tooltip>\n    </div>,\n  /** Since it is hidden by default */\n  parameters: {\n    chromatic: {\n      disableSnapshot: true\n    }\n  }\n}',...InAction.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <Container>\n      <span className="text-base text-toolbox-neutral underline">Tooltip here</span>\n      <Display tooltip="Text label for tooltip, information about something. This is some more info." />\n    </Container>;\n}',...Default.parameters?.docs?.source}}},DifferentSides.parameters={...DifferentSides.parameters,docs:{...DifferentSides.parameters?.docs,source:{originalSource:'function DifferentSides() {\n  return <div className="grid grid-cols-2 gap-16 m-32">\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip left side</span>\n        <Display side="left" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip top side</span>\n        <Display side="top" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side</span>\n        <Display side="bottom" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip right side</span>\n        <Display side="right" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n    </div>;\n}',...DifferentSides.parameters?.docs?.source}}},DifferentVariants.parameters={...DifferentVariants.parameters,docs:{...DifferentVariants.parameters?.docs,source:{originalSource:'function DifferentVariants() {\n  return <div className="grid grid-cols-2 gap-16 m-32">\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip top side left</span>\n        <Display side="top|left" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip top side right</span>\n        <Display side="top|right" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side left</span>\n        <Display side="bottom|left" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n      <Container>\n        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side right</span>\n        <Display side="bottom|right" tooltip="Text label for tooltip, information about something. This is some more info." />\n      </Container>\n    </div>;\n}',...DifferentVariants.parameters?.docs?.source}}},CustomContent.parameters={...CustomContent.parameters,docs:{...CustomContent.parameters?.docs,source:{originalSource:'function CustomContent() {\n  return <Container>\n      <span className="text-base text-toolbox-neutral underline">Tooltip here</span>\n      <Display tooltip={<div className="flex space-x-2 items-center">\n            <Avatar link="https://i.pravatar.cc/150?u=47110" alt="Nora" size="m" />\n            <span className="text-xs flex-1">\n              Text label for tooltip, information about something. This is some more info.\n            </span>\n          </div>} />\n    </Container>;\n}',...CustomContent.parameters?.docs?.source}}};const __namedExportsOrder=["InAction","Default","DifferentSides","DifferentVariants","CustomContent"]},"./src/components/Tooltip/Tooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tooltip/Tooltip.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," component simply include the following at the top of your file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import { Tooltip } from '@diconium/ui-toolbox';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The section below shows how to use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," in your project."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"in-action",children:"In Action"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.InAction}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"different-sides",children:"Different sides"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.DifferentSides}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"different-variants",children:"Different variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.DifferentVariants}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-content",children:"Custom content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.CustomContent})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_toolbox_ui_toolbox_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Badge/BadgeContainer.tsx")),_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/State/StateContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),getTemplate=function getTemplate(size){return"s"===size?"w-4 h-4 border":"m"===size?"w-7 h-7 border":"lg"===size?"w-10 h-10 border-2":"xl"===size?"w-14 h-14 border-2":"2xl"===size?"w-40 h-40 border-2":"w-14 h-14 border-2"},mapStateSize=function mapStateSize(){var size=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lg";return"xl"===size||"2xl"===size?"lg":"m"};function Avatar(_ref){var link=_ref.link,alt=_ref.alt,state=_ref.state,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$border=_ref.border,border=void 0===_ref$border?"border-toolbox-primary":_ref$border,badge=_ref.badge,template=classnames__WEBPACK_IMPORTED_MODULE_0___default()([getTemplate(size),"object-cover rounded-full max-w-fit",border]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Badge_BadgeContainer__WEBPACK_IMPORTED_MODULE_2__.Z,{badge,size,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:template,src:link,alt}),state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_State_StateContainer__WEBPACK_IMPORTED_MODULE_3__.Z,{color:state,size:mapStateSize(size)})]})}Avatar.displayName="Avatar";const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}},border:{defaultValue:{value:"border-toolbox-primary"},description:"",name:"border",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.Z});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Tp:()=>isSingleDigit,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,Zq:()=>isNormalized});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BASE_TEMPLATE="bg-toolbox-feedback-red text-toolbox-white text-sm \n  leading-4 font-semibold inline-block\n  text-center align-middle".replace("\n",""),sizeToStyle=function sizeToStyle(size){return"s"===size?"w-1 h-1":"m"===size?"w-2 h-2":"lg"===size?"w-3 h-3":"w-4 h-4"},normalize=function normalize(badge){return badge>99?"".concat(99,"+"):badge},isNormalized=function isNormalized(badge){return badge>99},isSingleDigit=function isSingleDigit(badge){return badge<10},getWithBadgeWidth=function getWithBadgeWidth(badge){return isSingleDigit(badge)?"w-4":isNormalized(badge)?"w-8":"w-7"};function Badge(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,show=badge&&["lg","xl"].includes(size),template=classnames__WEBPACK_IMPORTED_MODULE_1___default()([BASE_TEMPLATE,show?"".concat(getWithBadgeWidth(badge)," h-4"):sizeToStyle(size),show?"rounded-lg":"rounded-full"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:template,children:show&&normalize(badge)})}Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{isNormalized.displayName="isNormalized",isNormalized.__docgenInfo={description:"",displayName:"isNormalized",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isNormalized"]={docgenInfo:isNormalized.__docgenInfo,name:"isNormalized",path:"src/components/Badge/Badge.tsx#isNormalized"})}catch(__react_docgen_typescript_loader_error){}try{isSingleDigit.displayName="isSingleDigit",isSingleDigit.__docgenInfo={description:"",displayName:"isSingleDigit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#isSingleDigit"]={docgenInfo:isSingleDigit.__docgenInfo,name:"isSingleDigit",path:"src/components/Badge/Badge.tsx#isSingleDigit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/BadgeContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BadgeContainer(_ref){var badge=_ref.badge,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children,template=classnames__WEBPACK_IMPORTED_MODULE_1___default()(["absolute top-0 right-0 -mt-1",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Tp)(badge)&&"mr-0.5",badge&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Tp)(badge)&&!(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-2",badge&&(0,_Badge__WEBPACK_IMPORTED_MODULE_2__.Zq)(badge)&&"-mr-3"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"relative inline-block min-w-max",children:[badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:template,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.ZP,{size,badge})}),children]})}BadgeContainer.displayName="BadgeContainer";const __WEBPACK_DEFAULT_EXPORT__=BadgeContainer;try{BadgeContainer.displayName="BadgeContainer",BadgeContainer.__docgenInfo={description:"",displayName:"BadgeContainer",props:{badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/BadgeContainer.tsx#BadgeContainer"]={docgenInfo:BadgeContainer.__docgenInfo,name:"BadgeContainer",path:"src/components/Badge/BadgeContainer.tsx#BadgeContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}Dot.displayName="Dot";const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.Z});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"m",color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-toolbox-neutral leading-5 text-xs",children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.Z,{size,color})}State.displayName="State";const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/StateContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/State/State.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StateContainer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,children=_ref.children;return children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"relative inline-block",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_State__WEBPACK_IMPORTED_MODULE_1__.Z,{color,size})})}StateContainer.displayName="StateContainer";const __WEBPACK_DEFAULT_EXPORT__=StateContainer;try{StateContainer.displayName="StateContainer",StateContainer.__docgenInfo={description:"",displayName:"StateContainer",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/StateContainer.tsx#StateContainer"]={docgenInfo:StateContainer.__docgenInfo,name:"StateContainer",path:"src/components/State/StateContainer.tsx#StateContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);