(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{140:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return u}));var n=a(3),o=a(7),i=(a(0),a(164)),r={title:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306e\u578b\u5b9a\u7fa9"},c={unversionedId:"react-native/learn/todo-app/navigation-hook",id:"react-native/learn/todo-app/navigation-hook",isDocsHomePage:!1,title:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306e\u578b\u5b9a\u7fa9",description:"useNavigation\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af",source:"@site/docs/react-native/learn/todo-app/navigation-hook.mdx",slug:"/react-native/learn/todo-app/navigation-hook",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/navigation-hook",version:"current",lastUpdatedAt:1619411604,sidebar:"learn",previous:{title:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306e\u6574\u7406",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/split-navigation"},next:{title:"Tab\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/tab"}},s=[{value:"useNavigation\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af",id:"usenavigation\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af",children:[]}],p={toc:s};function u(t){var e=t.components,a=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usenavigation\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af"},"useNavigation\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/modal#usenavigation%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9"}),"useNavigation\u306e\u578b\u5b9a\u7fa9"),"\u306b\u3042\u308b\u3068\u304a\u308a\u3001",Object(i.b)("inlineCode",{parentName:"p"},"useNavigation"),'\u306b"\u6b63\u3057\u3044"\u578b\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u578b\u5b89\u5168\u306b\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u64cd\u4f5c\u3067\u304d\u307e\u3059\u3002\n\u3057\u304b\u3057\u306a\u304c\u3089\u3001',Object(i.b)("inlineCode",{parentName:"p"},"useNavigation"),'\u306e\u578b\u5b9a\u7fa9\u306f\u8907\u96d1\u3067\u3059\u3002\n"\u6b63\u3057\u3044"\u578b\u3092\u6307\u5b9a\u3059\u308c\u3070\u578b\u5b89\u5168\u3067\u3059\u304c\u3001\u5404\u753b\u9762\u306b\u578b\u6307\u5b9a\u3057\u305f',Object(i.b)("inlineCode",{parentName:"p"},"useNavigation"),'\u30d5\u30c3\u30af\u3092\u5ba3\u8a00\u3057\u305f\u5834\u5408\u3001\u305d\u308c\u3089\u3092\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3057\u7d9a\u3051\u308b\u306e\u306f\u5927\u5909\uff08\u304b\u3064\u9593\u9055\u3063\u3066\u3082\u6c17\u3065\u304d\u306b\u304f\u3044\uff09\u3067\u3059\u3002\n"\u6b63\u3057\u3044"\u578b\u3092\u7dad\u6301\u3057\u3064\u3064\u7ba1\u7406\u3092\u697d\u306b\u3059\u308b\u305f\u3081\u3001\u5404\u753b\u9762\u3067\u5ba3\u8a00\u3059\u308b\u306e\u306f\u907f\u3051\u3001\u30ca\u30d3\u30b2\u30fc\u30bf\u6bce\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3092\u4e8b\u524d\u306b\u7528\u610f\u3059\u308b\u307b\u3046\u304c\u3044\u3044\u3067\u3057\u3087\u3046\u3002'),Object(i.b)("p",null,"\u3053\u3053\u3067\u306f\u3001",Object(i.b)("inlineCode",{parentName:"p"},"AuthedStackNav"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"UnauthedStackNav"),"\u305d\u308c\u305e\u308c\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3092\u7528\u610f\u3057\u307e\u3059\u3002"),Object(i.b)("p",null,"\u307e\u305a\u306f",Object(i.b)("inlineCode",{parentName:"p"},"AuthedStackNav"),"\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3092\u7528\u610f\u3057\u307e\u3059\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"/src/navigation/hooks/AuthedStackHooks.ts"),"\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/navigation/hooks/AuthedStackHooks.ts"',jsx:!0,title:'"/src/navigation/hooks/AuthedStackHooks.ts"'}),"import type {CompositeNavigationProp, RouteProp} from '@react-navigation/native';\nimport {useNavigation, useRoute} from '@react-navigation/native';\nimport {StackNavigationProp} from '@react-navigation/stack';\nimport {AuthedStackParamList, RootStackParamList} from 'navigation/types';\n\ntype AuthedStackParamListKeys = keyof AuthedStackParamList;\n\ntype AuthStackNavigationProp<T extends AuthedStackParamListKeys> = CompositeNavigationProp<\n  StackNavigationProp<AuthedStackParamList, T>,\n  StackNavigationProp<RootStackParamList>\n>;\n\nexport const useAuthedStackNavigation = <T extends AuthedStackParamListKeys>() =>\n  useNavigation<AuthStackNavigationProp<T>>();\nexport const useAuthedRootStackRoute = <T extends AuthedStackParamListKeys>() =>\n  useRoute<RouteProp<AuthedStackParamList, T>>();\n")),Object(i.b)("p",null,"\u4e0a\u8a18\u30b3\u30fc\u30c9\u3067\u306fkeyof\u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u3053\u3067keyof\u6f14\u7b97\u5b50\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002\nkeyof\u6f14\u7b97\u5b50\u306e\u4f7f\u7528\u4f8b\u3068\u3057\u3066\u6b21\u306e\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'interface Person {\n  name: string;\n  age: number;\n  location: string;\n}\ntype K1 = keyof Person; // "name" | "age" | "location"\n')),Object(i.b)("p",null,"\u4e0a\u8a18\u30b3\u30fc\u30c9\u304b\u3089\u5206\u304b\u308b\u3068\u304a\u308a\u3001keyof\u6f14\u7b97\u5b50\u3092\u4f7f\u3046\u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u3059\u3079\u3066\u306e\u30ad\u30fc\u3092\u3001\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u578b\u306e\u5408\u4f75\u3068\u3057\u3066\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"AuthedStackParamListKeys"),"\u306f",Object(i.b)("inlineCode",{parentName:"p"},"AuthedStackParamList"),"\u306e\u30ad\u30fc\u3092\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u578b\u306e\u5408\u4f75\u3068\u3057\u3066\u53d6\u5f97\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u3068\u540c\u7b49\u3067\u3059\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'type AuthedStackParamListKeys = "Welcome" | "Login" | "Instructions";\n')),Object(i.b)("p",null,"\u307e\u305f\u3001",Object(i.b)("inlineCode",{parentName:"p"},"AuthedStackHooks.ts"),"\u306e\u4e2d\u3067",Object(i.b)("inlineCode",{parentName:"p"},"useRoute"),"\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3082\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"useRoute"),"\u306f",Object(i.b)("inlineCode",{parentName:"p"},"route"),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u30d5\u30c3\u30af\u3067\u3059\u3002\n\u4eca\u56de\u306eToDo\u30a2\u30d7\u30ea\u3067\u306f\u4f7f\u7528\u3057\u307e\u305b\u3093\u304c\u3001",Object(i.b)("inlineCode",{parentName:"p"},"useRoute"),"\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3082\u5408\u308f\u305b\u3066\u6e96\u5099\u3057\u3066\u304a\u304f\u3068\u3044\u3044\u3067\u3057\u3087\u3046\u3002"),Object(i.b)("p",null,"\u3067\u306f\u3001\u540c\u69d8\u306b",Object(i.b)("inlineCode",{parentName:"p"},"UnauthedStackNav"),"\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3092\u7528\u610f\u3057\u307e\u3059\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"/src/navigation/hooks/UnauthedStackHooks.ts"),"\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/navigation/hooks/UnauthedStackHooks.ts"',jsx:!0,title:'"/src/navigation/hooks/UnauthedStackHooks.ts"'}),"import type {CompositeNavigationProp, RouteProp} from '@react-navigation/native';\nimport {useNavigation, useRoute} from '@react-navigation/native';\nimport {StackNavigationProp} from '@react-navigation/stack';\nimport {RootStackParamList, UnauthedStackParamList} from 'navigation/types';\n\ntype UnauthedStackParamListKeys = keyof UnauthedStackParamList;\n\ntype UnauthedStackNavigationProp<T extends UnauthedStackParamListKeys> = CompositeNavigationProp<\n  StackNavigationProp<UnauthedStackParamList, T>,\n  StackNavigationProp<RootStackParamList>\n>;\n\nexport const useUnauthedStackNavigation = <T extends UnauthedStackParamListKeys>() =>\n  useNavigation<UnauthedStackNavigationProp<T>>();\nexport const useUnauthedStackStackRoute = <T extends UnauthedStackParamListKeys>() =>\n  useRoute<RouteProp<UnauthedStackParamList, T>>();\n")),Object(i.b)("p",null,"\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3092",Object(i.b)("inlineCode",{parentName:"p"},"navigation/hooks"),"\u3068\u3057\u3066\u518d\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"/src/navigation/hooks/index.ts"),"\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/navigation/hooks/index.ts"',jsx:!0,title:'"/src/navigation/hooks/index.ts"'}),"export * from './AuthedStackHooks';\nexport * from './UnauthedStackHooks';\n")),Object(i.b)("p",null,"\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u304c\u7528\u610f\u3067\u304d\u305f\u306e\u3067\u3001",Object(i.b)("inlineCode",{parentName:"p"},"useNavigation"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u7b87\u6240\u3092\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),Object(i.b)("p",null,"\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/src/screens/home/Welcome.tsx")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/src/navigation/UnauthedStackNav.ts"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff",metastring:'title="/src/screens/home/Welcome.tsx"',title:'"/src/screens/home/Welcome.tsx"'}),"- import {useNavigation} from '@react-navigation/native';\n+ import {useUnauthedStackNavigation} from 'navigation/hooks';\n  import React from 'react';\n  import {StyleSheet, View} from 'react-native';\n  import {Button, Text} from 'react-native-elements';\n  \n  export const Welcome: React.FC = () => {\n-   const navigation = useNavigation();\n+   const navigation = useUnauthedStackNavigation<'Welcome'>();\n    return (\n    /* \uff5e\u7701\u7565\uff5e */  \n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff",metastring:'title="/src/navigation/UnauthedStackNav.ts"',title:'"/src/navigation/UnauthedStackNav.ts"'}),"- import {RouteProp, useNavigation} from '@react-navigation/native';\n+ import {RouteProp} from '@react-navigation/native';\n  import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';\n+ import {useUnauthedStackNavigation} from 'navigation/hooks';\n  import {UnauthedStackParamList} from 'navigation/types';\n  import React from 'react';\n  import {Button} from 'react-native-elements';\n  import {Instructions, Login, Welcome} from 'screens';\n  \n  const nav = createStackNavigator<UnauthedStackParamList>();\n  const HeaderRight: React.FC = () => {\n-   const navigation = useNavigation();\n+   const navigation = useUnauthedStackNavigation();\n    return <Button type=\"clear\" onPress={() => navigation.navigate('Login')} title=\"\u30ed\u30b0\u30a4\u30f3\" />;\n  };\n    /* \uff5e\u7701\u7565\uff5e */  \n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"UnauthedStackNav"),"\u306e",Object(i.b)("inlineCode",{parentName:"p"},"useUnauthedStackNavigation"),"\u306f\u7279\u5b9a\u753b\u9762\u304b\u3089\u4f7f\u308f\u308c\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u306e\u3067\u3001\u753b\u9762\u540d\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u3053\u306e\u3088\u3046\u306b\u3001\u753b\u9762\u540d\u3092\u7701\u7565\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u30d5\u30c3\u30af\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002"))),Object(i.b)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u3001\u52d5\u4f5c\u306b\u554f\u984c\u304c\u306a\u3044\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0},164:function(t,e,a){"use strict";a.d(e,"a",(function(){return m})),a.d(e,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=o.a.createContext({}),u=function(t){var e=o.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},m=function(t){var e=u(t.components);return o.a.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,r=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=u(a),b=n,d=m["".concat(r,".").concat(b)]||m[b]||l[b]||i;return a?o.a.createElement(d,c(c({ref:e},p),{},{components:a})):o.a.createElement(d,c({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);