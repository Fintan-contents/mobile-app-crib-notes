"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,r=e.block,p=e.defaultValue,c=e.values,d=e.groupId,u=e.className,m=a.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,x=l(),k=x.tabGroupChoices,b=x.setTabGroupChoices,N=(0,a.useState)(g),y=N[0],v=N[1],C=[];if(null!=d){var h=k[d];null!=h&&h!==y&&f.some((function(e){return e.value===h}))&&v(h)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;v(a),null!=d&&(b(d,a),setTimeout((function(){var e,n,a,r,l,i,o,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,p=i.innerWidth,n>=0&&l<=p&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},u)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},9592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(5064),o=n(8215),s={title:"Flexbox"},p=void 0,c={unversionedId:"react-native/learn/basic-concepts/react-native-basics/design/flexbox",id:"react-native/learn/basic-concepts/react-native-basics/design/flexbox",isDocsHomePage:!1,title:"Flexbox",description:"Flexbox\u3092\u4f7f\u7528\u3057\u305f\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u6307\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/design/flexbox.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/design",slug:"/react-native/learn/basic-concepts/react-native-basics/design/flexbox",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/flexbox",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"Flexbox"},sidebar:"learn",previous:{title:"\u9ad8\u3055\u3068\u5e45",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/height-and-width"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics"}},d=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:[]},{value:"\u53c2\u8003\u30b5\u30a4\u30c8",id:"\u53c2\u8003\u30b5\u30a4\u30c8",children:[]}],u={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Flexbox\u3092\u4f7f\u7528\u3057\u305f\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u6307\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002\nFlexbox\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u591a\u69d8\u306a\u30b5\u30a4\u30ba\u306e\u753b\u9762\u3042\u308f\u305b\u3066\u62e1\u5927\u307e\u305f\u306f\u7e2e\u5c0f\u3059\u308b\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001\u3053\u306e\u3088\u3046\u306a\u81ea\u52d5\u30ec\u30a4\u30a2\u30a6\u30c8\u3068\u5e45100\u306a\u3069\u306e\u56fa\u5b9a\u30b5\u30a4\u30ba\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5185\u90e8\u7684\u306b\u306f",(0,l.kt)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga"),"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u3066Flexbox\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,l.kt)(i.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"image",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Flexbox",src:n(8497).Z}))),(0,l.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React, {useState} from 'react';\nimport {View, StyleSheet, Text} from 'react-native';\nimport {ButtonGroup, Slider} from 'react-native-elements';\n\ntype flexDirectionOptionType =\n  | 'row'\n  | 'column'\n  | 'row-reverse'\n  | 'column-reverse';\ntype flexWrapOptionType = 'wrap' | 'nowrap' | 'wrap-reverse';\ntype justifyContentOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly';\ntype alignItemsOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'stretch'\n  | 'baseline';\ntype alignContentOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around';\n\nconst flexDirectionOptions: flexDirectionOptionType[] = [\n  'row',\n  'column',\n  'row-reverse',\n  'column-reverse',\n];\nconst flexWrapOptions: flexWrapOptionType[] = [\n  'nowrap',\n  'wrap',\n  'wrap-reverse',\n];\nconst justifyContentOptions: justifyContentOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'space-between',\n  'space-around',\n  'space-evenly',\n];\nconst alignItemsOptions: alignItemsOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'baseline',\n];\nconst alignContentOptions: alignContentOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'space-between',\n  'space-around',\n];\n\nconst alignSelfOptions: ('auto' | alignItemsOptionType)[] = [\n  'auto',\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'baseline',\n];\n\nexport const App = () => {\n  const [selectedFlexDirection, setFlexDirection] = useState(0);\n  const [selectedFlexWrap, setFlexWrap] = useState(0);\n  const [selectedJustifyContent, setJustifyContent] = useState(0);\n  const [selectedAlignItems, setAlignItems] = useState(0);\n  const [selectedAlignContent, setAlignContent] = useState(0);\n\n  const [children, setChildren] = useState(3);\n  const [flexGrow, setFlexGrow] = useState(0);\n  const [selectedAlignSelf, setAlignSelf] = useState(0);\n\n  return (\n    <View style={{flex: 1}}>\n      <Text>flexDirection: {flexDirectionOptions[selectedFlexDirection]}</Text>\n      <ButtonGroup\n        onPress={setFlexDirection}\n        selectedIndex={selectedFlexDirection}\n        buttons={flexDirectionOptions}\n      />\n      <Text>flexWrap: {flexWrapOptions[selectedFlexWrap]}</Text>\n      <ButtonGroup\n        onPress={setFlexWrap}\n        selectedIndex={selectedFlexWrap}\n        buttons={flexWrapOptions}\n      />\n      <Text>\n        justifyContent: {justifyContentOptions[selectedJustifyContent]}\n      </Text>\n      <ButtonGroup\n        onPress={setJustifyContent}\n        selectedIndex={selectedJustifyContent}\n        buttons={justifyContentOptions}\n      />\n      <Text>alignItems: {alignItemsOptions[selectedAlignItems]}</Text>\n      <ButtonGroup\n        onPress={setAlignItems}\n        selectedIndex={selectedAlignItems}\n        buttons={alignItemsOptions}\n      />\n      <Text>alignContent: {alignContentOptions[selectedAlignContent]}</Text>\n      <ButtonGroup\n        onPress={setAlignContent}\n        selectedIndex={selectedAlignContent}\n        buttons={alignContentOptions}\n      />\n\n      <Text>children: {children}</Text>\n      <Slider\n        value={children}\n        onValueChange={setChildren}\n        step={1}\n        maximumValue={20}\n      />\n      <Text>flexGrow: {flexGrow}</Text>\n      <Slider\n        value={flexGrow}\n        onValueChange={setFlexGrow}\n        step={1}\n        maximumValue={10}\n      />\n      <Text>alignSelf: {alignSelfOptions[selectedAlignSelf]}</Text>\n      <ButtonGroup\n        onPress={setAlignSelf}\n        selectedIndex={selectedAlignSelf}\n        buttons={alignSelfOptions}\n      />\n\n      <View\n        style={[\n          styles.container,\n          {\n            flexDirection: flexDirectionOptions[selectedFlexDirection],\n            flexWrap: flexWrapOptions[selectedFlexWrap],\n            justifyContent: justifyContentOptions[selectedJustifyContent],\n            alignItems: alignItemsOptions[selectedAlignItems],\n            alignContent: alignContentOptions[selectedAlignContent],\n          },\n        ]}>\n        <View\n          style={[\n            styles.item,\n            {\n              backgroundColor: 'red',\n              flexGrow,\n              alignSelf: alignSelfOptions[selectedAlignSelf],\n            },\n          ]}\n        />\n        {[...Array(children).keys()].map((index) => (\n          <View style={styles.item} key={index} />\n        ))}\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    borderColor: 'blue',\n    borderStyle: 'solid',\n    borderWidth: 1,\n    margin: 10,\n  },\n  item: {\n    height: 50,\n    width: 50,\n    backgroundColor: '#3B6CD4',\n    margin: 5,\n  },\n});\n")))),(0,l.kt)("h2",{id:"\u30d7\u30ed\u30d1\u30c6\u30a3"},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,l.kt)("p",null,"Flex\u30b3\u30f3\u30c6\u30ca\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flexDirection")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"column")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"row"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"column"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"row-reverse"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"column-reverse")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u4e26\u3076\u5411\u304d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flexWrap")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nowrap")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nowrap"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"wrap"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"wrap-reverse")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u6298\u308a\u8fd4\u3057")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"justifyContent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-start")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"space-between"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"space-around"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"space-evenly")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6c34\u5e73\u65b9\u5411\u306e\u63c3\u3048")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alignItems")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stretch")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"stretch"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"baseline")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5782\u76f4\u65b9\u5411\u306e\u63c3\u3048")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alignContent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-start")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"stretch"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"space-between"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"space-around")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8907\u6570\u884c\u306b\u3057\u305f\u6642\u306e\u63c3\u3048")))),(0,l.kt)("p",null,"\u5b50\u8981\u7d20\uff08Flex\u30a2\u30a4\u30c6\u30e0\uff09\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flexGrow")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u4f38\u3073\u308b\u6bd4\u7387")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flexShrink")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u7e2e\u3080\u6bd4\u7387")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flexBasis")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u30b5\u30a4\u30ba"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u306e\u30d9\u30fc\u30b9\u3068\u306a\u308b\u5e45\u306e\u6307\u5b9a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alignSelf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auto"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"flex-start"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"flex-end"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"stretch"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"baseline")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u8981\u7d20\u81ea\u8eab\u306e\u5782\u76f4\u65b9\u5411\u306e\u63c3\u3048")))),(0,l.kt)("h2",{id:"\u53c2\u8003\u30b5\u30a4\u30c8"},"\u53c2\u8003\u30b5\u30a4\u30c8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://yogalayout.com/"},"Yoga")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet"},"\u65e5\u672c\u8a9e\u5bfe\u5fdc\uff01CSS Flexbox\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3092\u4f5c\u3063\u305f\u306e\u3067\u914d\u5e03\u3057\u307e\u3059"))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},8497:function(e,t,n){t.Z=n.p+"assets/images/flexbox-bb2959e10def019fa9debd95e1faa476.png"}}]);