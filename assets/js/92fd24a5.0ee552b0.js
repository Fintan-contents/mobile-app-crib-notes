"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function S(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function h(e){const t=(0,f.Z)();return r.createElement(S,(0,a.Z)({key:String(t)},e))}},10306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059"},s=void 0,c={unversionedId:"react-native/learn/advance/react-navigation-param",id:"react-native/learn/advance/react-navigation-param",title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059",description:"\u691c\u7d22\u6761\u4ef6\u3084ID\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6b21\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u5834\u5408\u3001React Navigation\u3067\u3069\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3059\u308b\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/advance/react-navigation-param.mdx",sourceDirName:"react-native/learn/advance",slug:"/react-native/learn/advance/react-navigation-param",permalink:"/mobile-app-crib-notes/react-native/learn/advance/react-navigation-param",draft:!1,tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021\u5e7412\u670820\u65e5",frontMatter:{title:"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059"},sidebar:"learn",previous:{title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-advanced"}},u={},p=[{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9",level:2}],m={toc:p},d="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u691c\u7d22\u6761\u4ef6\u3084ID\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6b21\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u5834\u5408\u3001React Navigation\u3067\u3069\u306e\u3088\u3046\u306b\u5b9f\u88c5\u3059\u308b\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"React Navigation\u3067\u9077\u79fb\u3059\u308b\u969b\u3001\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u6e21\u3057\u305f\u3044\u30d1\u30e9\u30e1\u30fc\u30bf\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"navigate"),"\u306e\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u9077\u79fb\u5148\u753b\u9762\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"\u304b\u3089\u305d\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx {8-10,21}",jsx:!0,"{8-10,21}":!0},"const Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View>\n      <Button\n        title=\"Go to Screen2\"\n        onPress={() => {\n          navigation.navigate('Screen2', {\n            message: 'Hello',\n          });\n        }}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const route = useRoute();\n  return (\n    <View>\n      <Text>{route.params.message}</Text>\n    </View>\n  );\n};\n")),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001TypeScript\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"TS2532: Object is possibly 'undefined'.\nTS2339: Property 'message' does not exist on type 'object'.\n")),(0,r.kt)("h2",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9"),(0,r.kt)("p",null,"\u5148\u306e\u30a8\u30e9\u30fc\u3092\u89e3\u6d88\u3059\u308b\u305f\u3081\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u305d\u306e\u753b\u9762\u304c\u53d7\u3051\u53d6\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u5b9a\u7fa9\u3092\u6559\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u5b9f\u88c5\u30a4\u30e1\u30fc\u30b8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u753b\u9762\u540d\u3092\u30ad\u30fc\u306b\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u5b9a\u7fa9\u3092\u5024\u3068\u3057\u3066\u3082\u3064\u30ea\u30b9\u30c8\u3092\u5b9a\u7fa9\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"RootParamList"),"\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"type RootParamList = {\n  Screen1: undefined;\n  Screen2: {message: string};\n};\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useRoute"),"\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"RouteProp<RootParamList, '\u753b\u9762\u540d'>"),"\u3092\u6e21\u3059"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"const Screen2: React.FC = () => {\n    /* \uff5e\u7701\u7565\uff5e */\n  const route = useRoute<RouteProp<RootParamList, 'Screen2'>>();\n  return (\n    /* \uff5e\u7701\u7565\uff5e */\n      <Text>{route.params.message}</Text>\n    /* \uff5e\u7701\u7565\uff5e */\n  );\n};\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u753b\u9762\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d7\u3051\u53d6\u308b\u5b9f\u88c5\u3067\u767a\u751f\u3059\u308b\u3001TypeScript\u306e\u578b\u30c1\u30a7\u30c3\u30af\u30a8\u30e9\u30fc\u3092\u89e3\u6d88\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"React Navigation\u3067\u306f\u3001\u578b\u5b9a\u7fa9\u3092\u7a4d\u6975\u7684\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3088\u308a\u8a73\u7d30\u306a\u578b\u30c1\u30a7\u30c3\u30af\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"navigate"),"\u3067\u9077\u79fb\u3059\u308b\u5148\u306e\u753b\u9762\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u540d\u304c\u9593\u9055\u3048\u3066\u3044\u308b\u6642\u306b\u3001\u578b\u30c1\u30a7\u30c3\u30af\u3067\u30a8\u30e9\u30fc\u3068\u3059\u308b\u3053\u3068\u306a\u3069\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u3082\u3057React Navigation\u3067\u5229\u7528\u3059\u308b\u578b\u5b9a\u7fa9\u306e\u5168\u4f53\u50cf\u306b\u3064\u3044\u3066\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/typescript/"},"Type checking with TypeScript | React Navigation"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u305f\u3060\u3001React Navigation\u3067\u5229\u7528\u3059\u308b\u578b\u5b9a\u7fa9\u306fTypeScript\u306e\u578b\u30b7\u30b9\u30c6\u30e0\u306b\u7cbe\u901a\u3057\u3066\u3044\u306a\u3044\u3068\u7406\u89e3\u304c\u96e3\u3057\u3044\u3067\u3059\u3002\n\u307e\u305f\u3001\u305b\u3063\u304b\u304f\u578b\u5b9a\u7fa9\u3092\u9811\u5f35\u3063\u3066\u3082\u305d\u306e\u5229\u7528\u65b9\u6cd5\u304c\u8aa4\u3063\u3066\u3044\u308b\u3068\u3001\u578b\u30c1\u30a7\u30c3\u30af\u3067\u306f\u30a8\u30e9\u30fc\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u304c\u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u3053\u3046\u3044\u3063\u305f\u7406\u7531\u304b\u3089\u3001React Navigation\u306e\u305f\u3081\u306e\u578b\u5b9a\u7fa9\u306f\u3001\u5b9a\u7fa9\u3057\u306a\u3044\u3068\u30a8\u30e9\u30fc\u306b\u306a\u308b\u306a\u3069\u306e\u5fc5\u8981\u6700\u4f4e\u9650\u306e\u3082\u306e\u3060\u3051\u3092\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modal",src:n(2231).Z,width:"1080",height:"2220"}))),(0,r.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import {\n  NavigationContainer,\n  NavigatorScreenParams,\n  RouteProp,\n  useNavigation,\n  useRoute,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport React from 'react';\nimport {Text, View, StyleSheet} from 'react-native';\nimport {Button} from 'react-native-elements';\n\ntype RootParamList = {\n  MainStack: NavigatorScreenParams<MainParamList>;\n  Modal1: {message: string};\n};\ntype MainParamList = {\n  Screen1: undefined;\n  Screen2: undefined;\n};\n\nconst RootStack = createStackNavigator();\nconst MainStack = createStackNavigator();\n\nexport const App = () => {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator screenOptions={{headerShown: false, presentation: 'modal'}}>\n        <RootStack.Screen name=\"MainStack\" component={Main} />\n        <RootStack.Screen name=\"Modal1\" component={Modal1} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst Main = () => {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name=\"Screen1\" component={Screen1} />\n      <MainStack.Screen name=\"Screen2\" component={Screen2} />\n    </MainStack.Navigator>\n  );\n};\n\nconst Screen1: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 1</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Navigate Screen 2\"\n        onPress={() => navigation.navigate('Screen2')}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1', {message: 'from Screen1'})}\n      />\n    </View>\n  );\n};\n\nconst Screen2: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Screen 2</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Go Back\"\n        onPress={() => navigation.goBack()}\n      />\n      <Button\n        buttonStyle={styles.button}\n        title=\"Popup Modal 1\"\n        onPress={() => navigation.navigate('Modal1', {message: 'from Screen2'})}\n      />\n    </View>\n  );\n};\n\nconst Modal1: React.FC = () => {\n  const navigation = useNavigation();\n  const route = useRoute<RouteProp<RootParamList, 'Modal1'>>();\n  return (\n    <View style={styles.screen}>\n      <Text style={styles.title}>Modal 1</Text>\n      <Text>{route.params.message}</Text>\n      <Button\n        buttonStyle={styles.button}\n        title=\"Close\"\n        onPress={() => navigation.goBack()}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  title: {\n    padding: 20,\n    fontSize: 42,\n  },\n  button: {\n    margin: 10,\n    width: 200,\n  },\n});\n")))))}g.isMDXComponent=!0},2231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modal-0adaa2089bf13635963aea38fa962dd8.png"}}]);