"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const i={title:"ToDo\u4e00\u89a7\u53d6\u5f97\u4e2d\u306e\u8868\u793a"},r=void 0,l={unversionedId:"react-native/learn/todo-app/networking/activity-indicator",id:"react-native/learn/todo-app/networking/activity-indicator",title:"ToDo\u4e00\u89a7\u53d6\u5f97\u4e2d\u306e\u8868\u793a",description:"REST API\u3092\u547c\u3073\u3060\u3059\u3068\u5fdc\u7b54\u3092\u53d7\u3051\u53d6\u308b\u307e\u3067\u306b\u5c11\u3057\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u547c\u3073\u3060\u3057\u4e2d\u306b\u4f55\u3082\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u8fd4\u3055\u306a\u3044\u3068\u3001\u30a2\u30d7\u30ea\u3067\u51e6\u7406\u4e2d\u306a\u306e\u304b\u3001\u81ea\u5206\u306e\u64cd\u4f5c\u304c\u4f1d\u308f\u3063\u3066\u3044\u306a\u3044\u306e\u304b\u3001\u30e6\u30fc\u30b6\u306b\u306f\u5224\u65ad\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/networking/activity-indicator.mdx",sourceDirName:"react-native/learn/todo-app/networking",slug:"/react-native/learn/todo-app/networking/activity-indicator",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/activity-indicator",draft:!1,tags:[],version:"current",lastUpdatedAt:1670563798,formattedLastUpdatedAt:"2022\u5e7412\u67089\u65e5",frontMatter:{title:"ToDo\u4e00\u89a7\u53d6\u5f97\u4e2d\u306e\u8868\u793a"},sidebar:"learn",previous:{title:"REST API\u306e\u547c\u3073\u3060\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/api-request"},next:{title:"ToDo\u66f4\u65b0\u4e2d\u306e\u8868\u793a",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/activity-indicator-each-todo"}},p={},s=[{value:"REST API\u306e\u547c\u3073\u3060\u3057\u72b6\u614b\u306e\u7ba1\u7406",id:"rest-api\u306e\u547c\u3073\u3060\u3057\u72b6\u614b\u306e\u7ba1\u7406",level:2},{value:"\u51e6\u7406\u4e2d\u306eUI\u8868\u793a",id:"\u51e6\u7406\u4e2d\u306eui\u8868\u793a",level:2},{value:"\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u30b9\u30bf\u30a4\u30eb\u5b9a\u7fa9",id:"\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u30b9\u30bf\u30a4\u30eb\u5b9a\u7fa9",level:3},{value:"\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u308bUI",id:"\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u308bui",level:3},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"REST API\u3092\u547c\u3073\u3060\u3059\u3068\u5fdc\u7b54\u3092\u53d7\u3051\u53d6\u308b\u307e\u3067\u306b\u5c11\u3057\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u547c\u3073\u3060\u3057\u4e2d\u306b\u4f55\u3082\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u8fd4\u3055\u306a\u3044\u3068\u3001\u30a2\u30d7\u30ea\u3067\u51e6\u7406\u4e2d\u306a\u306e\u304b\u3001\u81ea\u5206\u306e\u64cd\u4f5c\u304c\u4f1d\u308f\u3063\u3066\u3044\u306a\u3044\u306e\u304b\u3001\u30e6\u30fc\u30b6\u306b\u306f\u5224\u65ad\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001REST API\u306e\u547c\u3073\u3060\u3057\u306e\u3088\u3046\u306a\u6642\u9593\u306e\u304b\u304b\u308b\u975e\u540c\u671f\u51e6\u7406\u306f\u3001\u30a2\u30d7\u30ea\u304c\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b\u306e\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001ToDo\u4e00\u89a7\u304c\u6700\u65b0\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u524a\u9664\u3055\u308c\u3066\u3044\u308bToDo\u3092\u66f4\u65b0\u3057\u3066\u3057\u307e\u3046\u3088\u3046\u306a\u3053\u3068\u3092\u9632\u3050\u3088\u3046\u306a\u30b1\u30fc\u30b9\u3092\u60f3\u5b9a\u3059\u308b\u3068\u3001\u51e6\u7406\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u30d6\u30ed\u30c3\u30af\u3057\u305f\u3044\u64cd\u4f5c\u3082\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3067\u306f\u3001\u4e00\u89a7\u306e\u53d6\u5f97\u4e2d\u306fToDo\u4e00\u89a7\u4e0a\u306b\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u308b",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/activityindicator"},"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf"),"\u3092\u8868\u793a\u3057ToDo\u306e\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3057\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u3088\u3046\u306a\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u306f\u51e6\u7406\u4e2d\u304b\u3069\u3046\u304b\u3068\u3044\u3046\u72b6\u614b\u3092\u7ba1\u7406\u3057\u3066\u3001\u51e6\u7406\u4e2d\u306e\u5834\u5408\u3060\u3051\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3068\u30d6\u30ed\u30c3\u30af\u3059\u308b\u305f\u3081\u306eView\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4e0b\u306e\u30a4\u30e1\u30fc\u30b8\u306f\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3057\u3066\u3044\u308b\u753b\u9762\u3067\u3059\u3002\n",(0,a.kt)("img",{alt:"Image",src:n(23670).Z,width:"1080",height:"2220"})),(0,a.kt)("h2",{id:"rest-api\u306e\u547c\u3073\u3060\u3057\u72b6\u614b\u306e\u7ba1\u7406"},"REST API\u306e\u547c\u3073\u3060\u3057\u72b6\u614b\u306e\u7ba1\u7406"),(0,a.kt)("p",null,"\u307e\u305a\u3001REST API\u3092\u547c\u3073\u3060\u3059\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001REST API\u3092\u547c\u3073\u3060\u3057\u4e2d\u304b\u3069\u3046\u304b\u306e\u72b6\u614b\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," \u3092\u5229\u7528\u3057\u3066",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),"\u72b6\u614b\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002\nREST API\u3092\u547c\u3073\u3060\u3059",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService.getTodos()"),"\u306e\u524d\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),"\u4e2d\u306b\u8a2d\u5b9a\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"finally"),"\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),"\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="screens/todo/TodoBoard.tsx"',typescript:!0,title:'"screens/todo/TodoBoard.tsx"'},"export const TodoBoard: React.FC = () => {\n   const navigation = useNavigation();\n   const {theme} = useContext(ThemeContext);\n   const [todos, setTodos] = useState<Todo[]>([]);\n   const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);\n+  const [loading, setLoading] = useState(false);\n \n   useFocusEffect(\n     useCallback(() => {\n       let isActive = true;\n\n+      setLoading(true);\n       TodoService.getTodos()\n         .then(response => {\n           if (isActive) {\n             setTodos(response);\n           }\n         })\n-        .catch(() => {});\n+        .catch(error => {\n+          console.log(error);\n+        })\n+        .finally(() => {\n+          if (isActive) {\n+            setLoading(false);\n+          }\n+        });\n\n      return () => {\n        isActive = false;\n      };\n    }, []),\n\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u51e6\u7406\u306f\u5b9f\u88c5\u3057\u307e\u305b\u3093\u304c\u3001\u5b9f\u88c5\u4e2d\u306b\u3069\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3057\u305f\u3044\u3053\u3068\u306f\u591a\u3044\u306e\u3067\u30ed\u30b0\u51fa\u529b\u3060\u3051\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6765\u306f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u306f\u30e6\u30fc\u30b6\u306b\u3082\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u3068\uff08\u53ef\u80fd\u3067\u3042\u308c\u3070\uff09\u30a8\u30e9\u30fc\u304b\u3089\u56de\u5fa9\u3059\u308b\u65b9\u6cd5\u3092\u4f1d\u3048\u308b\u3079\u304d\u3067\u3059\u3002")),(0,a.kt)("h2",{id:"\u51e6\u7406\u4e2d\u306eui\u8868\u793a"},"\u51e6\u7406\u4e2d\u306eUI\u8868\u793a"),(0,a.kt)("p",null,"\u6b21\u306b\u3001\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u51e6\u7406\u4e2d\u306fToDo\u4e00\u89a7\u306e\u4e0a\u306b\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3057\u3001ToDo\u4e00\u89a7\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308bToDo\u3092\u30e6\u30fc\u30b6\u304c\u64cd\u4f5c\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u8a2d\u5b9a\u30bf\u30d6\u304b\u3089\u8a2d\u5b9a\u753b\u9762\u3092\u8868\u793a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u306b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),"\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u306e\u6642\u3060\u3051\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u4e2d\u592e\u306b\u8868\u793a\u3057\u3001\u64cd\u4f5c\u3067\u304d\u306a\u3044\u3088\u3046\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"View"),"\u3067ToDo\u4e00\u89a7\u3092\u8986\u3044\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u30b9\u30bf\u30a4\u30eb\u5b9a\u7fa9"},"\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u30b9\u30bf\u30a4\u30eb\u5b9a\u7fa9"),(0,a.kt)("p",null,"\u307e\u305a\u3001\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u305f\u3081\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"indicatorContainer"),"\u3068\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u4e2d\u592e\u306b\u8868\u793a\u3059\u308b\u305f\u3081\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"indicator"),"\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript jsx title="/src/screens/todo/TodoBoard.tsx"',typescript:!0,jsx:!0,title:'"/src/screens/todo/TodoBoard.tsx"'},"const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  /* \uff5e\u7701\u7565\uff5e */\n  iconContainerStyle: {\n    position: 'absolute',\n    bottom: 10,\n    right: 10,\n  },\n+  indicatorContainer: {\n+    position: 'absolute',\n+    zIndex: 2,\n+    width: '100%',\n+    flex: 1,\n+    alignContent: 'center',\n+    height: '100%',\n+    backgroundColor: 'rgba(0, 0, 0, 0.2)',\n+  },\n+  indicator: {\n+    flex: 1,\n+  },\n });\n")),(0,a.kt)("h3",{id:"\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u308bui"},"\u51e6\u7406\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u4f1d\u3048\u308bUI"),(0,a.kt)("p",null,"\u6b21\u306bReact Native\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"ActivityIndicator")," \u3092\u8868\u793a\u3057\u307e\u3059\u3002\n\u64cd\u4f5c\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u305f\u3081\u306eContainer\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),"\u4e2d\u3067\u306a\u3051\u308c\u3070\u8868\u793a\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'typescript title="/src/screens/todo/TodoBoard.tsx"',typescript:!0,title:'"/src/screens/todo/TodoBoard.tsx"'}," import React, {useCallback, useContext, useState} from 'react';\n-import {Alert, StyleSheet, View} from 'react-native';\n+import {Alert, StyleSheet, View, ActivityIndicator} from 'react-native';\n import {Icon, ThemeContext} from 'react-native-elements';\n\n/* \uff5e\u7701\u7565\uff5e */\n       <Icon\n         name=\"plus\"\n         type=\"font-awesome-5\"\n         color={theme.colors?.primary}\n         raised\n         reverse\n         size={30}\n         containerStyle={styles.iconContainerStyle}\n         onPress={() => {\n           navigation.navigate('TodoForm');\n         }}\n       />\n+      {loading && (\n+        <View style={styles.indicatorContainer}>\n+          <ActivityIndicator color=\"red\" style={styles.indicator} size=\"large\" />\n+        </View>\n+      )}\n     </View>\n   );\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u306e\u307e\u307e\u3060\u3068REST API\u304b\u3089\u306e\u5fdc\u7b54\u304c\u65e9\u3044\u305f\u3081\u4e00\u77ac\u3057\u304b\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u306e\u3067\u3001\u78ba\u8a8d\u304c\u3067\u304d\u307e\u305b\u3093\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"TodoService.getTodos()"),"\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"finally"),"\u3067\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"setLoaing(false)"),"\u3092\u30b3\u30e1\u30f3\u30c8\u30a2\u30a6\u30c8\u3059\u308b\u3068\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u304c\u3001\u30b3\u30fc\u30c9\u3092\u4fee\u6b63\u3057\u306a\u3044\u3068ToDo\u4e00\u89a7\u3092\u64cd\u4f5c\u3067\u304d\u307e\u305b\u3093\u3002\n\u6b21\u306e\u52d5\u4f5c\u78ba\u8a8d\u3067REST API\u306e\u5fdc\u7b54\u3092\u4e00\u5b9a\u6642\u9593\u5f85\u3064\u3068\u3044\u3046\u72b6\u614b\u3092\u64ec\u4f3c\u7684\u306b\u4f5c\u308a\u51fa\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),(0,a.kt)("h3",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,a.kt)("p",null,"\u3053\u308c\u3067\u3001ToDo\u4e00\u89a7\u53d6\u5f97\u306eREST API\u3092\u547c\u3073\u3060\u3057\u3066\u3044\u308b\u9593\u306f\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u3001\u4e00\u90e8\u306e\u64cd\u4f5c\u306f\u30d6\u30ed\u30c3\u30af\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"REST API\u304b\u3089\u306e\u5fdc\u7b54\u304c\u65e9\u304f\u3001\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u78ba\u8a8d\u304c\u96e3\u3057\u3044\u306e\u3067REST API\u3092\u547c\u3073\u51fa\u3057\u305f\u3089\u5fdc\u7b54\u307e\u3067\u306e\u6642\u9593\u3092\u5f85\u3064\u3053\u3068\u3092\u64ec\u4f3c\u7684\u306b\u518d\u73fe\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u5fdc\u7b54\u6642\u9593\u3092\u5f85\u3064\u51e6\u7406\u306fREST API\u3067\u306f\u306a\u304fREST API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"REST API\u30af\u30e9\u30a4\u30f3\u30c8\u306e\u63a5\u7d9a\u5148\u3092\u5207\u308a\u66ff\u3048\u3066\u3044\u305f",(0,a.kt)("inlineCode",{parentName:"p"},"config.ts"),"\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"Middleware"),"\u3068\u3044\u3046\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5229\u7528\u3057\u3066\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"Middleware\u3092\u5229\u7528\u3057\u3066\u4e00\u5b9a\u6642\u9593\u5f85\u6a5f\u3055\u305b\u308b\u305f\u3081\u306b\u3001config.ts\u3092\u6b21\u306e\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"${IP}")," \u306f\u3054\u81ea\u8eab\u306e\u74b0\u5883\u306b\u5408\u308f\u305b\u3066\u8a2d\u5b9a\u3057\u305f\u307e\u307e\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Middleware\u3068\u306f\u3001\u7279\u5b9a\u306e\u51e6\u7406\u306b\u5bfe\u3057\u3066\u5171\u901a\u7684\u306b\u884c\u3044\u305f\u3044\u51e6\u7406\uff08\u4f8b\u3048\u3070\u3001\u30ed\u30b0\u8a18\u9332\u3001\u30af\u30e9\u30c3\u30b7\u30e5\u30ec\u30dd\u30fc\u30c8\u7b49\uff09\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u8a2d\u5b9a\u3067\u304d\u308b\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u3059\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4eca\u56de\u306f\u3001REST API\u306e\u5fdc\u7b54\u6642\u9593\u3092\u4efb\u610f\u306e\u3082\u306e\u3078\u8a2d\u5b9a\u3059\u308b\u306e\u306b\u4f7f\u7528\u3057\u3066\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/backend/config.ts"',jsx:!0,title:'"/src/backend/config.ts"'},"import {Configuration, Middleware} from './generated-rest-client';\nconst waitResponse: Middleware = {\n  post: async context => {\n    await new Promise(resolve => setTimeout(resolve, 3000));\n    return Promise.resolve(context.response);\n  },\n};\nexport const config = new Configuration({basePath: 'http://${IP}:9080/api', middleware: [waitResponse]});\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u3053\u3067\u306fREST API\u306e\u5fdc\u7b54\u5f8c\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"await"),"\u3092\u5229\u7528\u3057\u3066",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"resolve"),"\u3059\u308b\u307e\u30673\u79d2\u9593\u3060\u3051\u5f85\u3064\u3088\u3046\u306b\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"await"),"\u306b\u3064\u3044\u3066\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u524d\u63d0\u77e5\u8b58\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308bJavaScript Primer\u306e",(0,a.kt)("a",{parentName:"p",href:"https://jsprimer.net/basic/async/"},"\u975e\u540c\u671f\u51e6\u7406"),"\u306b\u3042\u308b",(0,a.kt)("a",{parentName:"p",href:"https://jsprimer.net/basic/async/#await-expression"},"await \u5f0f"),"\u3092\u53c2\u7167\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"\u3053\u3053\u307e\u3067\u3067REST API\u3092\u547c\u3073\u51fa\u3057\u3066\u304b\u3089\u5fdc\u7b54\u307e\u3067\u306e\u6642\u9593\u3092\u64ec\u4f3c\u7684\u306b\u5f85\u3064\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u3053\u304b\u3089\u306f\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u8868\u793a\u3068\u4e00\u90e8\u64cd\u4f5c\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306e\u78ba\u8a8d\u3067\u3059\u3002\u6b21\u306e\u624b\u9806\u3067\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"API\u30b5\u30fc\u30d0\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"\u30ed\u30b0\u30a4\u30f3")),(0,a.kt)("p",null,"ToDo\u4e00\u89a7\u753b\u9762\u30de\u30a6\u30f3\u30c8\u6642\u306bToDo\u4e00\u89a7\u53d6\u5f97API\u3092\u547c\u3073\u51fa\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u547c\u3073\u51fa\u3057\u4e2d\u306f\u753b\u9762\u4e2d\u592e\u306b\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u3001ToDo\u4e00\u89a7\u306b\u5bfe\u3059\u308b\u64cd\u4f5c\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"))}m.isMDXComponent=!0},23670:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/indicator-e1c8aa99b852c53ea020b00b7d0da112.png"}}]);