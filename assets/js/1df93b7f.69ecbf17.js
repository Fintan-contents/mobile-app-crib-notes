"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3237],{6258:function(e,a,t){t.d(a,{L:function(){return _}});var r=t(7462),n=t(3366),i=t(6742),l=t(4996),m=t(6010),c=t(7294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},o=function(e){var a=e.children,t=e.colSize,o=void 0===t?4:t,v=(0,n.Z)(e,["children","colSize"]),u=(0,l.Z)(v.to);return c.createElement("div",{className:(0,m.Z)("col","col--"+o,s.pageOverviewContainer)},c.createElement(i.Z,(0,r.Z)({className:(0,m.Z)("card",s.pageOverviewLinkCard)},v,{to:u}),a))},v=function(e){var a=e.title;return c.createElement("div",{className:(0,m.Z)("card__header",s.pageOverviewTitle)},c.createElement("h3",null,a))},u=function(e){var a=e.src,t=e.alt,i=(0,n.Z)(e,["src","alt"]),o=(0,l.Z)(a);return c.createElement("div",{className:(0,m.Z)("card__image")},c.createElement("img",(0,r.Z)({className:s.pageOverviewImage},i,{alt:t,src:o})))},g=function(e){var a=e.summary;return c.createElement("div",{className:(0,m.Z)("card__body",s.pageOverviewSummary)},c.createElement("p",null,a))},p=function(e){var a=e.title,t=e.imageUrl,r=e.summary,i=(0,n.Z)(e,["title","imageUrl","summary"]);return c.createElement(o,i,c.createElement(v,{title:a+" \xbb"}),t&&c.createElement(u,{src:t,alt:a}),r&&c.createElement(g,{summary:r}))},_=function(e){var a=e.overviews,t=e.colSize;return c.createElement("section",{className:(0,m.Z)(s.pageList)},c.createElement("div",{className:(0,m.Z)("container")},c.createElement("div",{className:(0,m.Z)("row",s.pageListRow)},a.map((function(e){return c.createElement(p,(0,r.Z)({key:e.to,colSize:t},e))})))))}},5e3:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var r=t(2263),n=t(308),i=t(6010),l=t(7294),m=t(6258),c="heroBanner_3P7f",s=[{title:"Reference",to:"reference",imageUrl:"img/undraw_Bibliophile_re_xarc.svg",summary:l.createElement(l.Fragment,null,"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9")},{title:"Distribution",to:"distribution",imageUrl:"img/undraw_Outer_space_re_u9vd.svg",summary:l.createElement(l.Fragment,null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03")}],o=[{title:"Learn React Native",to:"react-native/learn",imageUrl:"img/undraw_studying_s3l7.svg",summary:l.createElement(l.Fragment,null,"\u5b66\u7fd2\u7528\u30b3\u30f3\u30c6\u30f3\u30c4")},{title:"Common Pitfalls",to:"react-native/common-pitfalls",imageUrl:"img/undraw_void_3ggu.svg",summary:l.createElement(l.Fragment,null,"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74")},{title:"Example Application",to:"react-native/santoku",imageUrl:"img/undraw_Mobile_apps_re_3wjf.svg",summary:l.createElement(l.Fragment,null,"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3")}];var v=function(){var e=(0,r.Z)().siteConfig;return l.createElement(n.Z,null,l.createElement("header",{className:(0,i.Z)("hero hero--primary",c)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},(null==e?void 0:e.title)||""),l.createElement("p",{className:"hero__subtitle"},(null==e?void 0:e.tagline)||""))),l.createElement("main",null,l.createElement(m.L,{overviews:s,colSize:4}),l.createElement(m.L,{overviews:o,colSize:4})))}}}]);