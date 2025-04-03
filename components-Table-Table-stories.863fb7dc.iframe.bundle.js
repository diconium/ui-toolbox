"use strict";(self.webpackChunk_diconium_ui_toolbox=self.webpackChunk_diconium_ui_toolbox||[]).push([[6623],{"./src/components/Dot/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var sizeToTemplate=function sizeToTemplate(size){return"xl"===size?["w-5","h-5"]:"lg"===size?["w-4","h-4"]:"m"===size?["w-3","h-3"]:["w-2","h-2"]};function Dot(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0,_toConsumableArray(sizeToTemplate(size)).concat(["rounded-full",color]))})}const __WEBPACK_DEFAULT_EXPORT__=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Dot__WEBPACK_IMPORTED_MODULE_0__.A});var _Dot__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dot/Dot.tsx")},"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Icon__WEBPACK_IMPORTED_MODULE_0__.Ay});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.tsx")},"./src/components/ListItem/ListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ListItem_ListItem});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function Heading(_ref){var title=_ref.title,_ref$textAlignment=_ref.textAlignment,textAlignment=void 0===_ref$textAlignment?"left":_ref$textAlignment,template=classnames_default()(["text-toolbox-neutral font-semibold leading-7 text-xl","center"===textAlignment?"text-center":"text-left"]);return react.createElement("div",{className:template},title)}const ListItem_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},textAlignment:{defaultValue:{value:"left"},description:"",name:"textAlignment",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/ListItem/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/components/Icon/index.ts");function Placeholder(_ref){var upper=_ref.upper,lower=_ref.lower,isOpen=_ref.isOpen,showChevron=_ref.showChevron,showLower=lower||showChevron;return react.createElement("div",{className:"flex flex-col items-end"},upper&&react.createElement("div",{className:"flex space-x-1"},upper),showLower&&react.createElement("div",{className:"flex justify-end mt-2"},lower&&react.createElement("div",{className:"flex space-x-1 mx-2"},lower),showChevron&&react.createElement("div",{className:"flex-shrink flex items-center justify-end"},react.createElement(Icon.A,{icon:isOpen?"chevron-down":"chevron-up",size:"s"}))))}const ListItem_Placeholder=Placeholder;try{Placeholder.displayName="Placeholder",Placeholder.__docgenInfo={description:"",displayName:"Placeholder",props:{upper:{defaultValue:null,description:"",name:"upper",required:!1,type:{name:"ReactNode"}},lower:{defaultValue:null,description:"",name:"lower",required:!1,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},showChevron:{defaultValue:null,description:"",name:"showChevron",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/Placeholder.tsx#Placeholder"]={docgenInfo:Placeholder.__docgenInfo,name:"Placeholder",path:"src/components/ListItem/Placeholder.tsx#Placeholder"})}catch(__react_docgen_typescript_loader_error){}function Template(_ref){var children=_ref.children,className=_ref.className,_ref$onClick=_ref.onClick,_onClick=void 0===_ref$onClick?function(){}:_ref$onClick,_ref$canBeOpened=_ref.canBeOpened,canBeOpened=void 0!==_ref$canBeOpened&&_ref$canBeOpened,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,_ref$baseTemplate=_ref.baseTemplate,DEFAULT_TEMPLATE=(void 0===_ref$baseTemplate?"":_ref$baseTemplate)||"bg-toolbox-white px-6 py-4 border rounded-2xl w-full text-left",template=classnames_default()([DEFAULT_TEMPLATE,selected?"border-toolbox-primary":"border-toolbox-neutral-50",className]);return canBeOpened?react.createElement("button",{className:template,onClick:function onClick(){return _onClick()},type:"button"},children):react.createElement("div",{className:template},children)}const ListItem_Template=Template;try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},canBeOpened:{defaultValue:{value:"false"},description:"",name:"canBeOpened",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:{value:""},description:"",name:"baseTemplate",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/Template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/ListItem/Template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}function ListItem(_ref){var title=_ref.title,children=_ref.children,_ref$subtitle=_ref.subtitle,subtitle=void 0===_ref$subtitle?"":_ref$subtitle,upper=_ref.upper,lower=_ref.lower,_ref$opened=_ref.opened,opened=void 0!==_ref$opened&&_ref$opened,_ref$onToggle=_ref.onToggle,onToggle=void 0===_ref$onToggle?function(){}:_ref$onToggle,_ref$onOpen=_ref.onOpen,onOpen=void 0===_ref$onOpen?function(){}:_ref$onOpen,_ref$onClose=_ref.onClose,onClose=void 0===_ref$onClose?function(){}:_ref$onClose,_ref$textAlignment=_ref.textAlignment,textAlignment=void 0===_ref$textAlignment?"left":_ref$textAlignment,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,className=_ref.className,_ref$baseTemplate=_ref.baseTemplate,baseTemplate=void 0===_ref$baseTemplate?"":_ref$baseTemplate,canBeOpened=!!children,renderPlaceholder=upper||lower||canBeOpened,renderSubtitle="center"!==textAlignment&&subtitle;return react.createElement(ListItem_Template,{onClick:function toggle(){var next=!opened,callback=next?onOpen:onClose;return onToggle(next),callback(),next},canBeOpened,selected,className,baseTemplate},react.createElement("div",{className:"flex"},react.createElement("div",{className:"flex-grow flex"},react.createElement("div",{className:"flex-grow flex items-center"},react.createElement("div",{className:"flex-grow flex flex-col"},react.createElement(ListItem_Heading,{title,textAlignment}),renderSubtitle&&react.createElement("div",{className:"text-toolbox-neutral font-semibold text-sm mt-2"},subtitle))),renderPlaceholder&&react.createElement("div",{className:"flex-shrink flex"},react.createElement(ListItem_Placeholder,{upper,lower,isOpen:opened,showChevron:canBeOpened})))),canBeOpened&&opened&&react.createElement("div",{className:"mt-2"},children))}const ListItem_ListItem=ListItem;try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:{value:""},description:"",name:"subtitle",required:!1,type:{name:"string"}},upper:{defaultValue:null,description:"",name:"upper",required:!1,type:{name:"ReactNode"}},lower:{defaultValue:null,description:"",name:"lower",required:!1,type:{name:"ReactNode"}},opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:{value:"() => {}"},description:"",name:"onToggle",required:!1,type:{name:"((_state: boolean) => void)"}},onOpen:{defaultValue:{value:"() => {}"},description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:{value:"() => {}"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},textAlignment:{defaultValue:{value:"left"},description:"",name:"textAlignment",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},baseTemplate:{defaultValue:{value:""},description:"",name:"baseTemplate",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/ListItem.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/components/ListItem/ListItem.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ListItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_ListItem__WEBPACK_IMPORTED_MODULE_0__.A});var _ListItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ListItem/ListItem.tsx")},"./src/components/State/State.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dot/index.ts");function State(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"bg-toolbox-primary":_ref$color,label=_ref.label;return label?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center space-x-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size:"m",color}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-toolbox-neutral leading-5 text-xs"},label)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dot__WEBPACK_IMPORTED_MODULE_1__.A,{size,color})}const __WEBPACK_DEFAULT_EXPORT__=State;try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{color:{defaultValue:{value:"bg-toolbox-primary"},description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/State/State.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/State/State.tsx#State"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/State/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_State__WEBPACK_IMPORTED_MODULE_0__.A});var _State__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/State/State.tsx")},"./src/components/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Expandable:()=>Expandable,FirstColumnBold:()=>FirstColumnBold,IconCells:()=>IconCells,WithoutHeader:()=>WithoutHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var react=__webpack_require__("./node_modules/react/index.js"),ListItem=__webpack_require__("./src/components/ListItem/index.ts"),State=__webpack_require__("./src/components/State/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./src/components/Icon/Icon.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function getRenderer(config){return"icon"===(null==config?void 0:config.render)?function(_ref){var content=_ref.content;return react.createElement(Icon.Ay,_extends({icon:null==content?void 0:content.value},null==config?void 0:config.options))}:function(_ref2){var content=_ref2.content;return react.createElement("span",null,(null==content?void 0:content.value)||"No value provided")}}const Renderer=getRenderer;try{getRenderer.displayName="getRenderer",getRenderer.__docgenInfo={description:"",displayName:"getRenderer",props:{key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ [key: string]: string | boolean; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Renderer.tsx#getRenderer"]={docgenInfo:getRenderer.__docgenInfo,name:"getRenderer",path:"src/components/Table/Renderer.tsx#getRenderer"})}catch(__react_docgen_typescript_loader_error){}function Cell(_ref){var _config$options,content=_ref.content,config=_ref.config,template=classnames_default()(["first:pl-0 last:pr-0 p-2 last:w-0",null==config||null===(_config$options=config.options)||void 0===_config$options?void 0:_config$options.className]),Component=Renderer(config);return react.createElement("td",{className:template},react.createElement(Component,{content,"aria-label":"Cell"}))}try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Content"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"Config"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Cell.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"src/components/Table/Cell.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}function Header(_ref){var _config$options,header=_ref.header,config=_ref.config,template=classnames_default()(["first:pl-0 last:pr-0 last:w-0 p-2",null==config||null===(_config$options=config.options)||void 0===_config$options?void 0:_config$options.className]);return react.createElement("th",{className:template},header)}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"Config"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/Table/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var generateId=function generateId(){var length=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(length)).reduce((function(id,randomElement){var remainder=randomElement%64;return remainder<36?"".concat(id).concat(remainder.toString(36)):remainder<62?"".concat(id).concat((remainder-26).toString(36).toUpperCase()):"".concat(id,remainder>62?"-":"_")}),"")};function Table(_ref){var _ref$rows=_ref.rows,rows=void 0===_ref$rows?[]:_ref$rows,_ref$config=_ref.config,config=void 0===_ref$config?[]:_ref$config,className=_ref.className,empty=_ref.empty,rowsWithId=function assignId(rows){return rows.map((function(row){if(row&&"object"===_typeof(row)){var rowId=generateId();return{cells:Object.entries(row).reduce((function(acc,_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1],cellId=generateId();return _objectSpread(_objectSpread({},acc),{},_defineProperty({},key,{id:rowId+cellId,value}))}),{}),id:rowId}}return row}))}(rows),template=classnames_default()("bg-toolbox-white text-toolbox-neutral-900 w-full text-left text-sm min-w-max border rounded-2xl",(null==className?void 0:className.includes("border-none"))||"px-6 py-2",className),getConfig=function getConfig(column){return config.find((function(_ref2){return _ref2.key===column}))},columns=config.map((function(_ref3){return _ref3.key})),hideTableHeader=config.every((function(_ref4){var options=_ref4.options;return null==options?void 0:options.hideHeader}));return react.createElement("div",{className:template},react.createElement("table",{className:"w-full table-auto"},!hideTableHeader&&react.createElement("thead",null,react.createElement("tr",null,columns.map((function(column){return react.createElement(Header,{key:column,header:column,config:getConfig(column)})}))),react.createElement("tr",{className:"border border-neutral-100"})),react.createElement("tbody",null,null!=rowsWithId&&rowsWithId.length?null==rowsWithId?void 0:rowsWithId.map((function(_ref5){var id=_ref5.id,cells=_ref5.cells;return react.createElement("tr",{key:id},columns.map((function(column){var _cells$column;return react.createElement(Cell,{key:null===(_cells$column=cells[column])||void 0===_cells$column?void 0:_cells$column.id,content:cells[column],config:getConfig(column)})})))})):react.createElement("tr",null,react.createElement("td",{className:"pt-5 pb-4 text-center text-toolbox-neutral-200",colSpan:config.length},empty)))))}const Table_Table=Table;try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{rows:{defaultValue:{value:"[]"},description:"",name:"rows",required:!1,type:{name:"Row[]"}},config:{defaultValue:{value:"[]"},description:"",name:"config",required:!1,type:{name:"Config[]"}},empty:{defaultValue:null,description:"",name:"empty",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var components_Icon=__webpack_require__("./src/components/Icon/index.ts");const Table_stories={title:"Toolbox/Table",component:Table_Table};function Default(){return react.createElement("div",{className:"w-[450px]"},react.createElement(Table_Table,{rows:[{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"}],config:[{key:"HW",render:"default"},{key:"ECU",render:"default"},{key:"SW",render:"default"},{key:"Rev.",render:"default"}]}))}function Empty(){return react.createElement("div",{className:"w-[450px]"},react.createElement(Table_Table,{rows:[],config:[{key:"HW",render:"default"},{key:"ECU",render:"default"},{key:"SW",render:"default"},{key:"Rev.",render:"default"}],empty:react.createElement(react.Fragment,null,react.createElement(components_Icon.A,{icon:"table-layout",className:"block pb-1"}),react.createElement("p",null,"No available data"))}))}function WithoutHeader(){return react.createElement("div",{className:"w-[450px]"},react.createElement(Table_Table,{rows:[{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"}],config:[{key:"HW",render:"default",options:{hideHeader:!0}},{key:"ECU",render:"default",options:{hideHeader:!0}},{key:"SW",render:"default",options:{hideHeader:!0}},{key:"Rev.",render:"default",options:{hideHeader:!0}}]}))}function FirstColumnBold(){return react.createElement("div",{className:"w-[450px]"},react.createElement(Table_Table,{rows:[{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"}],config:[{key:"ECU",render:"default",options:{className:"font-bold"}},{key:"HW",render:"default"},{key:"SW",render:"default"},{key:"Rev.",render:"default"}]}))}function Expandable(){return react.createElement("div",{className:"w-[450px]"},react.createElement(ListItem.A,{title:"Text Label",lower:react.createElement("span",{className:"pr-4"},react.createElement(State.A,null))},react.createElement(Table_Table,{rows:[{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"},{ECU:"Label",HW:"Label",SW:"Label","Rev.":"Label"}],config:[{key:"ECU",render:"default"},{key:"HW",render:"default"},{key:"SW",render:"default"},{key:"Rev.",render:"default"}],className:"border-none"})))}function IconCells(){return react.createElement("div",{className:"w-[450px]"},react.createElement(Table_Table,{rows:[{ECU:"Label",HW:"Label",SW:"Label",Icon:"arrow-left"},{ECU:"Label",HW:"Label",SW:"Label",Icon:"arrow-right"},{ECU:"Label",HW:"Label",SW:"Label",Icon:"arrow-up"}],config:[{key:"ECU",render:"default"},{key:"HW",render:"default"},{key:"SW",render:"default"},{key:"Icon",render:"icon",options:{size:"sm"}}]}))}const __namedExportsOrder=["Default","Empty","WithoutHeader","FirstColumnBold","Expandable","IconCells"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default() {\n  return <div className=\"w-[450px]\">\n      <Table rows={[{\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }]} config={[{\n      key: 'HW',\n      render: 'default'\n    }, {\n      key: 'ECU',\n      render: 'default'\n    }, {\n      key: 'SW',\n      render: 'default'\n    }, {\n      key: 'Rev.',\n      render: 'default'\n    }]} />\n    </div>;\n}",...Default.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"function Empty() {\n  return <div className=\"w-[450px]\">\n      <Table rows={[]} config={[{\n      key: 'HW',\n      render: 'default'\n    }, {\n      key: 'ECU',\n      render: 'default'\n    }, {\n      key: 'SW',\n      render: 'default'\n    }, {\n      key: 'Rev.',\n      render: 'default'\n    }]} empty={<>\n            <Icon icon=\"table-layout\" className=\"block pb-1\" />\n            <p>No available data</p>\n          </>} />\n    </div>;\n}",...Empty.parameters?.docs?.source}}},WithoutHeader.parameters={...WithoutHeader.parameters,docs:{...WithoutHeader.parameters?.docs,source:{originalSource:"function WithoutHeader() {\n  return <div className=\"w-[450px]\">\n      <Table rows={[{\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }]} config={[{\n      key: 'HW',\n      render: 'default',\n      options: {\n        hideHeader: true\n      }\n    }, {\n      key: 'ECU',\n      render: 'default',\n      options: {\n        hideHeader: true\n      }\n    }, {\n      key: 'SW',\n      render: 'default',\n      options: {\n        hideHeader: true\n      }\n    }, {\n      key: 'Rev.',\n      render: 'default',\n      options: {\n        hideHeader: true\n      }\n    }]} />\n    </div>;\n}",...WithoutHeader.parameters?.docs?.source}}},FirstColumnBold.parameters={...FirstColumnBold.parameters,docs:{...FirstColumnBold.parameters?.docs,source:{originalSource:"function FirstColumnBold() {\n  return <div className=\"w-[450px]\">\n      <Table rows={[{\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      'Rev.': 'Label'\n    }]} config={[{\n      key: 'ECU',\n      render: 'default',\n      options: {\n        className: 'font-bold'\n      }\n    }, {\n      key: 'HW',\n      render: 'default'\n    }, {\n      key: 'SW',\n      render: 'default'\n    }, {\n      key: 'Rev.',\n      render: 'default'\n    }]} />\n    </div>;\n}",...FirstColumnBold.parameters?.docs?.source}}},Expandable.parameters={...Expandable.parameters,docs:{...Expandable.parameters?.docs,source:{originalSource:"function Expandable() {\n  return <div className=\"w-[450px]\">\n      <ListItem title=\"Text Label\" lower={<span className=\"pr-4\">\n            <State />\n          </span>}>\n        <Table rows={[{\n        ECU: 'Label',\n        HW: 'Label',\n        SW: 'Label',\n        'Rev.': 'Label'\n      }, {\n        ECU: 'Label',\n        HW: 'Label',\n        SW: 'Label',\n        'Rev.': 'Label'\n      }, {\n        ECU: 'Label',\n        HW: 'Label',\n        SW: 'Label',\n        'Rev.': 'Label'\n      }]} config={[{\n        key: 'ECU',\n        render: 'default'\n      }, {\n        key: 'HW',\n        render: 'default'\n      }, {\n        key: 'SW',\n        render: 'default'\n      }, {\n        key: 'Rev.',\n        render: 'default'\n      }]} className=\"border-none\" />\n      </ListItem>\n    </div>;\n}",...Expandable.parameters?.docs?.source}}},IconCells.parameters={...IconCells.parameters,docs:{...IconCells.parameters?.docs,source:{originalSource:"function IconCells() {\n  return <div className=\"w-[450px]\">\n      <Table rows={[{\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      Icon: 'arrow-left'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      Icon: 'arrow-right'\n    }, {\n      ECU: 'Label',\n      HW: 'Label',\n      SW: 'Label',\n      Icon: 'arrow-up'\n    }]} config={[{\n      key: 'ECU',\n      render: 'default'\n    }, {\n      key: 'HW',\n      render: 'default'\n    }, {\n      key: 'SW',\n      render: 'default'\n    }, {\n      key: 'Icon',\n      render: 'icon',\n      options: {\n        size: 'sm'\n      }\n    }]} />\n    </div>;\n}",...IconCells.parameters?.docs?.source}}}}}]);