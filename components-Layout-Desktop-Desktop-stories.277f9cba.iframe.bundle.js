/*! For license information please see components-Layout-Desktop-Desktop-stories.277f9cba.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[3710],{"./src/components/Layout/Desktop/Desktop.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalStyles:()=>AdditionalStyles,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Desktop_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function Desktop(_ref){var left=_ref.left,children=_ref.children,right=_ref.right,className=_ref.className,template=classnames_default()(["flex-1 overflow-hidden w-full",className]);return react.createElement("div",{className:"flex h-screen w-full"},react.createElement("div",{className:"h-screen relative shadow-md overflow-y-auto"},left),react.createElement("div",{className:template},children),react.createElement("div",{className:"h-screen shadow-md"},right))}const Desktop_Desktop=Desktop;Desktop.__docgenInfo={description:"",methods:[],displayName:"Desktop",props:{left:{required:!1,tsType:{name:"ReactNode"},description:""},right:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const Desktop_stories={title:"Toolbox/Layout/Desktop",component:Desktop_Desktop,parameters:{viewport:{viewport:{defaultViewport:"lg"},layout:"fullscreen"}},decorators:[Story=>react.createElement("div",{className:"flex justify-center"},react.createElement(Story,null))]};function Default(){return react.createElement(Desktop_Desktop,{left:react.createElement("div",{className:"bg-toolbox-primary h-screen p-4 w-[206px]"},"SIDE NAV"),right:react.createElement("div",{className:"bg-toolbox-secondary h-screen p-4 min-w-sm"},"ACTION CONTAINER")},react.createElement("div",{className:"h-screen p-4"},"MAIN CONTENT"))}function AdditionalStyles(){return react.createElement(Desktop_Desktop,{className:"bg-toolbox-feedback-orange",left:react.createElement("div",{className:"bg-toolbox-primary h-screen p-4 w-[206px]"},"SIDE NAV"),right:react.createElement("div",{className:"bg-toolbox-secondary h-screen p-4 min-w-sm"},"ACTION CONTAINER")},react.createElement("div",{className:"h-screen p-4"},"MAIN CONTENT"))}const __namedExportsOrder=["Default","AdditionalStyles"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return <Layout left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>} right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}>\n      <div className="h-screen p-4">MAIN CONTENT</div>\n    </Layout>;\n}',...Default.parameters?.docs?.source}}},AdditionalStyles.parameters={...AdditionalStyles.parameters,docs:{...AdditionalStyles.parameters?.docs,source:{originalSource:'function AdditionalStyles() {\n  return <Layout className="bg-toolbox-feedback-orange" left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>} right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}>\n      <div className="h-screen p-4">MAIN CONTENT</div>\n    </Layout>;\n}',...AdditionalStyles.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);