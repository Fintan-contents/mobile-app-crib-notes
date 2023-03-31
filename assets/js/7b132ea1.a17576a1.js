"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),p=n(16550),l=n(91980),c=n(67392),s=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=b({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:p,selectValue:l,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==p&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":p===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},76869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const p={title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210"},l=void 0,c={unversionedId:"react-native/learn/todo-app/networking/generate-api-client",id:"react-native/learn/todo-app/networking/generate-api-client",title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210",description:"ToDo\u30a2\u30d7\u30ea\u3067\u306f\u5404\u753b\u9762\u3067TodoService\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u304c\u3001TodoService\u304b\u3089\u76f4\u63a5REST API\u3092\u547c\u3073\u3060\u3059\u306e\u3067\u306f\u306a\u304f\u5171\u901a\u7684\u306aAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u7528\u610f\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/todo-app/networking/generate-api-client.mdx",sourceDirName:"react-native/learn/todo-app/networking",slug:"/react-native/learn/todo-app/networking/generate-api-client",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/generate-api-client",draft:!1,tags:[],version:"current",lastUpdatedAt:1670563798,formattedLastUpdatedAt:"2022\u5e7412\u67089\u65e5",frontMatter:{title:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f5c\u6210"},sidebar:"learn",previous:{title:"REST API\u306e\u6e96\u5099",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/setting-up-local-server"},next:{title:"REST API\u306e\u547c\u3073\u3060\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/api-request"}},s={},u=[{value:"Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210",id:"open-api\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210",level:2},{value:"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e",id:"api\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e",level:2}],d={toc:u},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3067\u306f\u5404\u753b\u9762\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089\u76f4\u63a5REST API\u3092\u547c\u3073\u3060\u3059\u306e\u3067\u306f\u306a\u304f\u5171\u901a\u7684\u306aAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u7528\u610f\u3057\u307e\u3059\u3002\nAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001API\u3068\u901a\u4fe1\u3057\u3001JSON\u3068Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u30e2\u30c7\u30eb\u3068\u306e\u578b\u5909\u63db\u3084\u5171\u901a\u7684\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u62c5\u5f53\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"open-api\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210"},"Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u81ea\u52d5\u751f\u6210"),(0,r.kt)("p",null,"ToDo\u30a2\u30d7\u30ea\u3067\u306f\u3001Open API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u81ea\u52d5\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b3\u30fc\u30c9\u306e\u751f\u6210\u306b\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/"},"OpenAPI Generator"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002OpenAPI\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3067\u3001OpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u69d8\u3005\u306a\u3082\u306e\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002TypeScript\u7528\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066\u3082\u69d8\u3005\u306a\u5b9f\u88c5\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306ftypescript-fetch\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u81ea\u52d5\u751f\u6210\u3067\u5229\u7528\u3059\u308bOpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fintan-contents/mobile-app-hands-on-backend/tree/main/rest-api-specification"},"mobile-app-hands-on-backend"),"\u3067\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npx"),"\u304b\u3001package.json\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"npm script"),"\u3092\u8ffd\u52a0\u3057\u3066API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u81ea\u52d5\u751f\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{defaultValue:"npx",values:[{label:"npx",value:"npx"},{label:"npm script",value:"npm-script"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npx",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),"\u3067\u751f\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npx @openapitools/openapi-generator-cli generate -g typescript-fetch -i https://raw.githubusercontent.com/fintan-contents/mobile-app-hands-on-backend/main/rest-api-specification/openapi.yaml -o src/backend/generated-rest-client --additional-properties supportsES6=true,typescriptThreePlus=true\n"))),(0,r.kt)(i.Z,{value:"npm-script",mdxType:"TabItem"},(0,r.kt)("p",null,"\u307e\u305a\u3001ToDo\u30a2\u30d7\u30ea\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-generator-cli"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install -D @openapitools/openapi-generator-cli\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u4f8b\u306e\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"npm script"),"\u306b\u81ea\u52d5\u751f\u6210\u7528\u306escript\u3092\u8ffd\u52a0\u3057\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"npm run api:gen-client"),"\u3067\u751f\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'     "reset-cache:all": "node .script/runner.js reset-cache --all",\n     "reset-cache:interactive": "node .script/runner.js reset-cache --interactive",\n+    "api:gen-client": "openapi-generator-cli generate -g typescript-fetch -i https://raw.githubusercontent.com/fintan-contents/mobile-app-hands-on-backend/main/rest-api-specification/openapi.yaml -o src/backend/generated-rest-client --additional-properties supportsES6=true,typescriptThreePlus=true",\n   },\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u30d7\u30ed\u30ad\u30b7\u74b0\u5883\u4e0b\u3067\u306f\u3001npm\u30d1\u30c3\u30b1\u30fc\u30b8\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"@openapitools/openapi-generator-cli"),"\u3092\u4f7f\u7528\u3059\u308b\u3068\u6b21\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'Unable to query repository, because of: "Request failed with status code 400"')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@openapitools/openapi-generator-cli"),"\u306f\u3001Maven Central Repository\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"org.openapitools:openapi-generator-cli"),"\u306ejar\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u8a66\u307f\u307e\u3059\u304c\u3001\u305d\u3053\u3067\u30a8\u30e9\u30fc\u306b\u306a\u3063\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3067API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u81ea\u52d5\u751f\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openapi-generator-cli"),"\u306ejar\u3092",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/6.2.1/openapi-generator-cli-6.2.1.jar"},"\u3053\u3053"),"\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar -Dhttp.proxyHost=[\u30d7\u30ed\u30ad\u30b7\u30db\u30b9\u30c8] -Dhttp.proxyPort=[\u30d7\u30ed\u30ad\u30b7\u30dd\u30fc\u30c8] -Dhttps.proxyHost=[\u30d7\u30ed\u30ad\u30b7\u30db\u30b9\u30c8] -Dhttps.proxyPort=[\u30d7\u30ed\u30ad\u30b7\u30dd\u30fc\u30c8] generate -g typescript-fetch -i https://raw.githubusercontent.com/fintan-contents/mobile-app-hands-on-backend/main/rest-api-specification/openapi.yaml -o src/backend/generated-rest-client --additional-properties supportsES6=true,typescriptThreePlus=true\n"))),(0,r.kt)("h2",{id:"api\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e"},"API\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u7c21\u5358\u306a\u8aac\u660e"),(0,r.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u81ea\u52d5\u751f\u6210\u3055\u308c\u305fAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u7c21\u5358\u306b\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\nAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"/src/backend/generated-rest-client")," \u306b\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"todo_app\n\u2514\u2500src/backend\n     \u2514\u2500generated-rest-client\n        \u251c\u2500apis/\n        \u251c\u2500models/\n        \u2514\u2500runtime.ts\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apis"),"\u306b\u306fREST API\u3092\u547c\u3073\u3060\u3059\u305f\u3081\u306e\u90e8\u54c1\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"TodosApi.ts"),"\uff09\u304c\u3042\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"models"),"\u306b\u306fAPI\u547c\u3073\u51fa\u3057\u306eInput,Output\u306b\u306a\u308b\u30e2\u30c7\u30eb\u304c\u751f\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002\nAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u5229\u7528\u3059\u308b\u3068\u30a8\u30e9\u30fc\u30ec\u30b9\u30dd\u30f3\u30b9\uff08\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u304c4xx\u307e\u305f\u306f5xx\u7cfb\uff09\u306e\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.reject")," \u3055\u308c\u308b\u305f\u3081\u3001\u30a8\u30e9\u30fc\u3068\u3057\u3066\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime.ts"),"\u3067\u306f\u3001\u3059\u3079\u3066\u306eREST API\u306e\u547c\u3073\u3060\u3057\u306b\u5171\u901a\u3059\u308b\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u4e2d\u3067REST API\u3078\u306e\u63a5\u7d9a\u5148\u3082\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3059\u304c\u3001OpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u306b\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5024\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/backend/generated-rest-client/runtime.ts"',title:'"/src/backend/generated-rest-client/runtime.ts"'},'export const BASE_PATH = "http://localhost:9080/api".replace(/\\/+$/, "");\n')),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u63a5\u7d9a\u5148\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"\u3068\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u3053\u306e\u307e\u307e\u3067\u306fAPI\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u3066\u3044\u308b\u30de\u30b7\u30f3\u4ee5\u5916\u306e\u30c7\u30d0\u30a4\u30b9\u3084Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306a\u3069\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u63a5\u7d9a\u5148\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u63a5\u7d9a\u5148\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u518d\u751f\u6210\u3057\u305f\u3068\u304d\u306b\u4fee\u6b63\u6f0f\u308c\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306b\u3001\u81ea\u52d5\u751f\u6210\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306f\u4fee\u6b63\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\n\u307e\u305f\u3001\u81ea\u52d5\u751f\u6210\u3057\u305fAPI\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3084\u8a2d\u5b9a\u30e2\u30b8\u30e5\u30fc\u30eb\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089\u5229\u7528\u3057\u3084\u3059\u3044\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts"),"\u3082\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306bbackend\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"config.ts"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts"),"\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${\u7aef\u672b\u306eIP}"),"\u306b\u306f",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/networking/setting-up-local-server#api%E3%82%B5%E3%83%BC%E3%83%90%E3%81%B8%E3%81%AE%E6%8E%A5%E7%B6%9A%E7%A2%BA%E8%AA%8D"},"API\u30b5\u30fc\u30d0\u3078\u306e\u63a5\u7d9a\u78ba\u8a8d"),"\u3067\u78ba\u8a8d\u3057\u305fIP\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/backend/config.ts"',title:'"/src/backend/config.ts"'},"import {Configuration} from './generated-rest-client';\nexport const config = new Configuration({basePath: 'http://${\u7aef\u672b\u306eIP}:9080/api'});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/backend/index.ts"',title:'"/src/backend/index.ts"'},"export * from './generated-rest-client';\nexport * from './config';\n")),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089REST API\u3092\u547c\u3073\u3060\u3059\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002\u6b21\u306f\u3001\u5b9f\u969b\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"TodoService"),"\u304b\u3089REST API\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u7d50\u679c\u3092\u753b\u9762\u306b\u8868\u793a\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"))}b.isMDXComponent=!0}}]);