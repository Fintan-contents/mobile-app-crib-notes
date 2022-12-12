"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),c=n(7094),s=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:d,groupId:v,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,c.U)(),[w,x]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=v){const e=y[v];null!=e&&e!==w&&g.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==w&&(O(t),x(a),null!=v&&N(v,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:E},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(65488),n(85162);const o={title:"Welcome"},l=void 0,i={unversionedId:"react-native/learn/todo-app/screens/welcome",id:"react-native/learn/todo-app/screens/welcome",title:"Welcome",description:"ToDo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d",source:"@site/docs/react-native/learn/todo-app/screens/welcome.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/welcome",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/welcome",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"Welcome"},sidebar:"learn",previous:{title:"ToDo\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aac\u660e",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/app-project-desc"},next:{title:"Stack\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/stack"}},c={},s=[{value:"ToDo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d",id:"todo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d",level:2}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"todo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d"},"ToDo\u30a2\u30d7\u30ea\u3078\u3088\u3046\u3053\u305d"),(0,r.kt)("p",null,"\u3067\u306f\u3055\u3063\u305d\u304fToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u3092\u3059\u3059\u3081\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\n",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec"},"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8"),"\u306b\u5f93\u3044\u3001\u30cf\u30f3\u30ba\u30aa\u30f3\u5f62\u5f0f\u3067ToDo\u30a2\u30d7\u30ea\u3092\u5b9f\u88c5\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),"\u3067\u4f5c\u6210\u3057\u305f\u3082\u306e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ws-4020/rn-spoiler/blob/master/template/src/App.tsx"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306eApp.tsx"),"\u306e\u5185\u5bb9\u306b\u4e0a\u66f8\u304d\u3057\u3066\u304b\u3089ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u3092\u306f\u3058\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/src/screens/home/Home.tsx"),"\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"/src/screens/home/Welcome.tsx"),"\u306b\u30ea\u30cd\u30fc\u30e0\u3057\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/home/Welcome.tsx"',jsx:!0,title:'"/src/screens/home/Welcome.tsx"'},"import {useNavigation} from '@react-navigation/native';\nimport React from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Button, Text} from 'react-native-elements';\n\nexport const Welcome: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.container}>\n      <Text h1>Welcome</Text>\n      <View>\n        <Button onPress={() => navigation.navigate('Instructions')} title=\"\u767b\u9332\u3059\u308b\" />\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/src/screens/home/index.ts"),"\u3092\u6b21\u306e\u901a\u308a\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6b21\u306e\u30de\u30fc\u30af\u3067\u8ffd\u52a0\u30fb\u524a\u9664\u7b87\u6240\u3092\u793a\u3057\u307e\u3059\u3002\n\u5909\u66f4\u306f\u8ffd\u52a0\u3068\u524a\u9664\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+"),": \u8ffd\u52a0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-"),": \u524a\u9664"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/screens/home/index.ts"',title:'"/src/screens/home/index.ts"'},"- export * from './Home';\n+ export * from './Welcome';\n")),(0,r.kt)("p",null,"\u6700\u5f8c\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"/src/navigation/RootStackNav.tsx"),"\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="/src/navigation/RootStackNav.tsx"',title:'"/src/navigation/RootStackNav.tsx"'},"  import {createStackNavigator} from '@react-navigation/stack';\n  import React from 'react';\n- import {Home, Instructions} from 'screens';\n+ import {Welcome, Instructions} from 'screens';\n\n  const nav = createStackNavigator();\n  export const RootStackNav: React.FC = () => {\n    return (\n-     <nav.Navigator initialRouteName={Home.name}>\n-       <nav.Screen name=\"Home\" component={Home} options={{headerShown: false}} />\n+     <nav.Navigator initialRouteName={Welcome.name}>\n+       <nav.Screen name=\"Welcome\" component={Welcome} options={{headerShown: false}} />\n        <nav.Screen name=\"Instructions\" component={Instructions} />\n      </nav.Navigator>\n    );\n  };\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts"},"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b"),"\u3067\u5f97\u305f\u77e5\u8b58\u304c\u3042\u308c\u3070\u3001\u4e0a\u8a18\u30b3\u30fc\u30c9\u306f\u7406\u89e3\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306e\u753b\u9762\u304c\u8868\u793a\u3067\u304d\u305f\u3089\u6210\u529f\u3067\u3059\u3002\n\u6b21\u3078\u9032\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Welcome",src:n(9954).Z,width:"1080",height:"2220"})))}m.isMDXComponent=!0},9954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/welcome-4388ebc9327ef914a3af82c54ac87747.png"}}]);