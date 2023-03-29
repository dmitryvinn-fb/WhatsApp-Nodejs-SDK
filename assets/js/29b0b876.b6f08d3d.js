"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),b=o,d=u["".concat(p,".").concat(b)]||u[b]||f[b]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"url_object",title:"URL_Object"},c="URL Object",i={unversionedId:"api-reference/types/url_object",id:"api-reference/types/url_object",title:"URL_Object",description:"The object describing a contact's URL.",source:"@site/docs/api-reference/types/url_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/url_object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/url_object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/url_object.md",tags:[],version:"current",frontMatter:{id:"url_object",title:"URL_Object"},sidebar:"mainSidebar",previous:{title:"Text_Object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/text_object"},next:{title:"Video_Media_Object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/video_media_object"}},p={},l=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}],s={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"url-object"},"URL Object"),(0,o.kt)("p",null,"The object describing a contact's URL."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "url" : new URL( "https://www.example.com/" ).href,\n    "type" : "WORK"\n}\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," : string (optional) \u2014 url relevant to the contact."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"type"),' : "HOME" or "WORK" (optional) \u2014 the type of the contact\'s link.')))}f.isMDXComponent=!0}}]);