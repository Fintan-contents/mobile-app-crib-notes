"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(l,".").concat(b)]||p[b]||m[b]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),c=n(16550),l=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,s]=d({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=l??p;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var v=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:c,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==c&&(p(t),l(a))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:m},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":c===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function S(e){const t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},81136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const c={title:"Tab"},l=void 0,s={unversionedId:"react-native/learn/basic-concepts/react-navigation-basics/tab",id:"react-native/learn/basic-concepts/react-navigation-basics/tab",title:"Tab",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u63a1\u7528\u3055\u308c\u308b\u4e00\u822c\u7684\u306a\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306b\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-navigation-basics/tab.mdx",sourceDirName:"react-native/learn/basic-concepts/react-navigation-basics",slug:"/react-native/learn/basic-concepts/react-navigation-basics/tab",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab",draft:!1,tags:[],version:"current",lastUpdatedAt:1687749071,formattedLastUpdatedAt:"2023\u5e746\u670826\u65e5",frontMatter:{title:"Tab"},sidebar:"learn",previous:{title:"Modal",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/modal"},next:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app"}},u={},p=[],m={toc:p},b="wrapper";function d(e){let{components:t,...c}=e;return(0,r.kt)(b,(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u63a1\u7528\u3055\u308c\u308b\u4e00\u822c\u7684\u306a\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306b\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002\n\u30bf\u30d6\u306f\u753b\u9762\u306e\u4e0b\u90e8\uff08\u307e\u305f\u306f\u4e0a\u90e8\uff09\u306b\u914d\u7f6e\u3055\u308c\u3001\u30dc\u30bf\u30f3\u62bc\u4e0b\u3067\u753b\u9762\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,r.kt)("p",null,"React Navigation\u3067\u306f\u3001\u6b21\u306eAPI\u3092\u4f7f\u7528\u3057\u3066\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialBottomTabNavigator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator"))),(0,r.kt)("p",null,"\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u5b9a\u7fa9\u306f\u30b9\u30bf\u30c3\u30af\u306e\u305d\u308c\u3068\u4f3c\u3066\u3044\u307e\u3059\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u30bf\u30d6\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u5b9a\u7fa9\u4f8b\u3067\u3059\u3002\n\u5b9a\u7fa9\u306e\u4e2d\u3067\u3001\u30bf\u30d6\u306e\u5916\u89b3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\uff08\u30a2\u30a4\u30b3\u30f3\u8868\u793a\u3057\u305f\u308a\u30d0\u30c3\u30b8\u3092\u8ffd\u52a0\u3057\u305f\u308a\uff09\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'<NavigationContainer>\n  <RootTab.Navigator>\n    <RootTab.Screen\n      name="Settings"\n      component={SettingsScreen}\n      options={{\n        title: \'\u8a2d\u5b9a\',\n        tabBarBadge: 3,\n        tabBarIcon: ({color}) => (\n          <Ionicons name="md-settings" size={30} color={color} />\n        ),\n      }}\n    />\n    /* \uff5e\u7701\u7565\uff5e */\n  </RootTab.Navigator>\n</NavigationContainer>\n')),(0,r.kt)("p",null,"\u30bf\u30d6\u306e\u5207\u308a\u66ff\u3048\u3001\u304a\u3088\u3073\u30bf\u30d6\u914d\u4e0b\u306e\uff08\u30cd\u30b9\u30c8\u3055\u308c\u305f\uff09\u30ca\u30d3\u30b2\u30fc\u30bf\u306e\u753b\u9762\u9077\u79fb\u3082\u3001\u30b9\u30bf\u30c3\u30af\u3068\u540c\u69d8\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"\u3092\u7528\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u56f3\u306f\u3001\u30b3\u30fc\u30c9\u4f8b\u306e\u30ca\u30d3\u30b2\u30fc\u30bf\u69cb\u6210\u3067\u3059\u3002\n\u30bf\u30d6\u914d\u4e0b\u306b\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30b9\u30bf\u30c3\u30af\u30ca\u30d3\u30b2\u30fc\u30bf\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tab navigator",src:n(18175).Z,width:"461",height:"241"})),(0,r.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tab",src:n(16728).Z,width:"1080",height:"2220"}))),(0,r.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="src/App.tsx"',jsx:!0,title:'"src/App.tsx"'},"import {Ionicons} from '@expo/vector-icons';\nimport {\n  createBottomTabNavigator,\n} from '@react-navigation/bottom-tabs';\nimport {\n  NavigationContainer,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createStackNavigator,\n} from '@react-navigation/stack';\nimport * as React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Button} from 'react-native-elements';\n\nconst HomeStack = createStackNavigator();\nconst RootTab = createBottomTabNavigator();\n\nconst HomeStackScreen: React.FC = () => {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"Home\" component={HomeScreen} />\n      <HomeStack.Screen name=\"Details\" component={DetailsScreen} />\n    </HomeStack.Navigator>\n  );\n};\n\nexport const App: React.FC = () => {\n  return (\n    <NavigationContainer>\n      <RootTab.Navigator>\n        <RootTab.Screen\n          name=\"HomeStack\"\n          component={HomeStackScreen}\n          options={{\n            title: '\u30db\u30fc\u30e0',\n            tabBarIcon: ({color}) => (\n              <Ionicons name=\"md-home\" size={30} color={color} />\n            ),\n          }}\n        />\n        <RootTab.Screen\n          name=\"Settings\"\n          component={SettingsScreen}\n          options={{\n            title: '\u8a2d\u5b9a',\n            tabBarBadge: 3,\n            tabBarIcon: ({color}) => (\n              <Ionicons name=\"md-settings\" size={30} color={color} />\n            ),\n          }}\n        />\n      </RootTab.Navigator>\n    </NavigationContainer>\n  );\n};\n\nconst HomeScreen: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text>Home screen</Text>\n      <Button\n        title=\"Go to Details\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('Details')}\n      />\n      <Button\n        title=\"Go to Settings\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n};\n\nconst SettingsScreen: React.FC = () => {\n  const navigation = useNavigation();\n  return (\n    <View style={styles.screen}>\n      <Text>Settings screen</Text>\n      <Button\n        title=\"Go to HomeStack\"\n        buttonStyle={styles.button}\n        onPress={() => navigation.navigate('HomeStack')}\n      />\n    </View>\n  );\n};\n\nconst DetailsScreen: React.FC = () => {\n  return (\n    <View style={styles.screen}>\n      <Text>Details!</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  screen: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  button: {\n    marginTop: 10,\n    width: 200,\n  },\n});\n")))))}d.isMDXComponent=!0},16728:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tab-96dd0dafdd7f1ff2b7536738d2ce05d3.png"},18175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tab_image-a016354dedf177e989dc540abaa02012.png"}}]);