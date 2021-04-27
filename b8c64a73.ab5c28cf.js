(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(164)),i=n(168),c=n(169),o={title:"Flexbox"},b={unversionedId:"react-native/learn/basic-concepts/react-native-basics/design/flexbox",id:"react-native/learn/basic-concepts/react-native-basics/design/flexbox",isDocsHomePage:!1,title:"Flexbox",description:"Flexbox\u3092\u4f7f\u7528\u3057\u305f\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u6307\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/design/flexbox.mdx",slug:"/react-native/learn/basic-concepts/react-native-basics/design/flexbox",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/flexbox",version:"current",lastUpdatedAt:1619411604,sidebar:"learn",previous:{title:"\u9ad8\u3055\u3068\u5e45",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design/height-and-width"},next:{title:"React Navigation\u306e\u57fa\u672c",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics"}},s=[{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",children:[]},{value:"\u53c2\u8003\u30b5\u30a4\u30c8",id:"\u53c2\u8003\u30b5\u30a4\u30c8",children:[]}],p={toc:s};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Flexbox\u3092\u4f7f\u7528\u3057\u305f\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u6307\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002\nFlexbox\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u591a\u69d8\u306a\u30b5\u30a4\u30ba\u306e\u753b\u9762\u3042\u308f\u305b\u3066\u62e1\u5927\u307e\u305f\u306f\u7e2e\u5c0f\u3059\u308b\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001\u3053\u306e\u3088\u3046\u306a\u81ea\u52d5\u30ec\u30a4\u30a2\u30a6\u30c8\u3068\u5e45100\u306a\u3069\u306e\u56fa\u5b9a\u30b5\u30a4\u30ba\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5185\u90e8\u7684\u306b\u306f",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/"}),"Yoga"),"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u3066Flexbox\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),Object(l.b)(i.a,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"image",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("img",{alt:"Flexbox",src:n(251).default}))),Object(l.b)(c.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'}),"import React, {useState} from 'react';\nimport {View, StyleSheet, Text} from 'react-native';\nimport {ButtonGroup, Slider} from 'react-native-elements';\n\ntype flexDirectionOptionType =\n  | 'row'\n  | 'column'\n  | 'row-reverse'\n  | 'column-reverse';\ntype flexWrapOptionType = 'wrap' | 'nowrap' | 'wrap-reverse';\ntype justifyContentOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'space-between'\n  | 'space-around'\n  | 'space-evenly';\ntype alignItemsOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'stretch'\n  | 'baseline';\ntype alignContentOptionType =\n  | 'flex-start'\n  | 'flex-end'\n  | 'center'\n  | 'stretch'\n  | 'space-between'\n  | 'space-around';\n\nconst flexDirectionOptions: flexDirectionOptionType[] = [\n  'row',\n  'column',\n  'row-reverse',\n  'column-reverse',\n];\nconst flexWrapOptions: flexWrapOptionType[] = [\n  'nowrap',\n  'wrap',\n  'wrap-reverse',\n];\nconst justifyContentOptions: justifyContentOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'space-between',\n  'space-around',\n  'space-evenly',\n];\nconst alignItemsOptions: alignItemsOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'baseline',\n];\nconst alignContentOptions: alignContentOptionType[] = [\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'space-between',\n  'space-around',\n];\n\nconst alignSelfOptions: ('auto' | alignItemsOptionType)[] = [\n  'auto',\n  'flex-start',\n  'flex-end',\n  'center',\n  'stretch',\n  'baseline',\n];\n\nexport const App = () => {\n  const [selectedFlexDirection, setFlexDirection] = useState(0);\n  const [selectedFlexWrap, setFlexWrap] = useState(0);\n  const [selectedJustifyContent, setJustifyContent] = useState(0);\n  const [selectedAlignItems, setAlignItems] = useState(0);\n  const [selectedAlignContent, setAlignContent] = useState(0);\n\n  const [children, setChildren] = useState(3);\n  const [flexGrow, setFlexGrow] = useState(0);\n  const [selectedAlignSelf, setAlignSelf] = useState(0);\n\n  return (\n    <View style={{flex: 1}}>\n      <Text>flexDirection: {flexDirectionOptions[selectedFlexDirection]}</Text>\n      <ButtonGroup\n        onPress={setFlexDirection}\n        selectedIndex={selectedFlexDirection}\n        buttons={flexDirectionOptions}\n      />\n      <Text>flexWrap: {flexWrapOptions[selectedFlexWrap]}</Text>\n      <ButtonGroup\n        onPress={setFlexWrap}\n        selectedIndex={selectedFlexWrap}\n        buttons={flexWrapOptions}\n      />\n      <Text>\n        justifyContent: {justifyContentOptions[selectedJustifyContent]}\n      </Text>\n      <ButtonGroup\n        onPress={setJustifyContent}\n        selectedIndex={selectedJustifyContent}\n        buttons={justifyContentOptions}\n      />\n      <Text>alignItems: {alignItemsOptions[selectedAlignItems]}</Text>\n      <ButtonGroup\n        onPress={setAlignItems}\n        selectedIndex={selectedAlignItems}\n        buttons={alignItemsOptions}\n      />\n      <Text>alignContent: {alignContentOptions[selectedAlignContent]}</Text>\n      <ButtonGroup\n        onPress={setAlignContent}\n        selectedIndex={selectedAlignContent}\n        buttons={alignContentOptions}\n      />\n\n      <Text>children: {children}</Text>\n      <Slider\n        value={children}\n        onValueChange={setChildren}\n        step={1}\n        maximumValue={20}\n      />\n      <Text>flexGrow: {flexGrow}</Text>\n      <Slider\n        value={flexGrow}\n        onValueChange={setFlexGrow}\n        step={1}\n        maximumValue={10}\n      />\n      <Text>alignSelf: {alignSelfOptions[selectedAlignSelf]}</Text>\n      <ButtonGroup\n        onPress={setAlignSelf}\n        selectedIndex={selectedAlignSelf}\n        buttons={alignSelfOptions}\n      />\n\n      <View\n        style={[\n          styles.container,\n          {\n            flexDirection: flexDirectionOptions[selectedFlexDirection],\n            flexWrap: flexWrapOptions[selectedFlexWrap],\n            justifyContent: justifyContentOptions[selectedJustifyContent],\n            alignItems: alignItemsOptions[selectedAlignItems],\n            alignContent: alignContentOptions[selectedAlignContent],\n          },\n        ]}>\n        <View\n          style={[\n            styles.item,\n            {\n              backgroundColor: 'red',\n              flexGrow,\n              alignSelf: alignSelfOptions[selectedAlignSelf],\n            },\n          ]}\n        />\n        {[...Array(children).keys()].map((index) => (\n          <View style={styles.item} key={index} />\n        ))}\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    borderColor: 'blue',\n    borderStyle: 'solid',\n    borderWidth: 1,\n    margin: 10,\n  },\n  item: {\n    height: 50,\n    width: 50,\n    backgroundColor: '#3B6CD4',\n    margin: 5,\n  },\n});\n")))),Object(l.b)("h2",{id:"\u30d7\u30ed\u30d1\u30c6\u30a3"},"\u30d7\u30ed\u30d1\u30c6\u30a3"),Object(l.b)("p",null,"Flex\u30b3\u30f3\u30c6\u30ca\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30c7\u30d5\u30a9\u30eb\u30c8"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8aac\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flexDirection")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"column")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"row"),", ",Object(l.b)("inlineCode",{parentName:"td"},"column"),", ",Object(l.b)("inlineCode",{parentName:"td"},"row-reverse"),", ",Object(l.b)("inlineCode",{parentName:"td"},"column-reverse")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u8981\u7d20\u306e\u4e26\u3076\u5411\u304d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flexWrap")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nowrap")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nowrap"),", ",Object(l.b)("inlineCode",{parentName:"td"},"wrap"),", ",Object(l.b)("inlineCode",{parentName:"td"},"wrap-reverse")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u8981\u7d20\u306e\u6298\u308a\u8fd4\u3057")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"justifyContent")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flex-start")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flex-start"),", ",Object(l.b)("inlineCode",{parentName:"td"},"flex-end"),", ",Object(l.b)("inlineCode",{parentName:"td"},"center"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-around"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-evenly")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6c34\u5e73\u65b9\u5411\u306e\u63c3\u3048")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"alignItems")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"stretch")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flex-start"),", ",Object(l.b)("inlineCode",{parentName:"td"},"flex-end"),", ",Object(l.b)("inlineCode",{parentName:"td"},"center"),", ",Object(l.b)("inlineCode",{parentName:"td"},"stretch"),", ",Object(l.b)("inlineCode",{parentName:"td"},"baseline")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5782\u76f4\u65b9\u5411\u306e\u63c3\u3048")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"alignContent")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flex-start")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flex-start"),", ",Object(l.b)("inlineCode",{parentName:"td"},"flex-end"),", ",Object(l.b)("inlineCode",{parentName:"td"},"center"),", ",Object(l.b)("inlineCode",{parentName:"td"},"stretch"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-around")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8907\u6570\u884c\u306b\u3057\u305f\u6642\u306e\u63c3\u3048")))),Object(l.b)("p",null,"\u5b50\u8981\u7d20\uff08Flex\u30a2\u30a4\u30c6\u30e0\uff09\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30c7\u30d5\u30a9\u30eb\u30c8"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8aac\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flexGrow")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u8981\u7d20\u306e\u4f38\u3073\u308b\u6bd4\u7387")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flexShrink")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u8981\u7d20\u306e\u7e2e\u3080\u6bd4\u7387")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flexBasis")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u8981\u7d20\u306e\u30b5\u30a4\u30ba"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u8981\u7d20\u306e\u30d9\u30fc\u30b9\u3068\u306a\u308b\u5e45\u306e\u6307\u5b9a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"alignSelf")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"auto")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"auto"),", ",Object(l.b)("inlineCode",{parentName:"td"},"flex-start"),", ",Object(l.b)("inlineCode",{parentName:"td"},"flex-end"),", ",Object(l.b)("inlineCode",{parentName:"td"},"center"),", ",Object(l.b)("inlineCode",{parentName:"td"},"stretch"),", ",Object(l.b)("inlineCode",{parentName:"td"},"baseline")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u8981\u7d20\u81ea\u8eab\u306e\u5782\u76f4\u65b9\u5411\u306e\u63c3\u3048")))),Object(l.b)("h2",{id:"\u53c2\u8003\u30b5\u30a4\u30c8"},"\u53c2\u8003\u30b5\u30a4\u30c8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://yogalayout.com/"}),"Yoga")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet"}),"\u65e5\u672c\u8a9e\u5bfe\u5fdc\uff01CSS Flexbox\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3092\u4f5c\u3063\u305f\u306e\u3067\u914d\u5e03\u3057\u307e\u3059"))))}d.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,O=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return n?r.a.createElement(O,c(c({ref:t},b),{},{components:n})):r.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},165:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},166:function(e,t,n){"use strict";var a=n(0),r=n(167);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},167:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(166),i=n(165),c=n(55),o=n.n(c),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,u=e.className,O=Object(l.a)(),m=O.tabGroupChoices,j=O.setTabGroupChoices,f=Object(a.useState)(c),x=f[0],g=f[1],N=a.Children.toArray(e.children);if(null!=d){var y=m[d];null!=y&&y!==x&&p.some((function(e){return e.value===y}))&&g(y)}var C=function(e){g(e),null!=d&&j(d,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":x===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":x===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},n)}))),t?Object(a.cloneElement)(N.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},169:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return l.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},251:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/flexbox-bb2959e10def019fa9debd95e1faa476.png"}}]);