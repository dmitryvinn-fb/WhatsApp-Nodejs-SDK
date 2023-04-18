"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[4137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(r),f=n,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return r?i.createElement(m,a(a({ref:t},p),{},{components:r})):i.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:n,a[1]=d;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const o={id:"VideoMediaObject",title:"VideoMediaObject"},a="Video Media Object",d={unversionedId:"api-reference/types/VideoMediaObject",id:"api-reference/types/VideoMediaObject",title:"VideoMediaObject",description:"The object required for sending a video message. Can either be a self-hosted and publicly accessible video, or an existing Meta-hosted video in a supported format. Meta or self hosted options have different object requirements.",source:"@site/docs/api-reference/types/VideoMediaObject.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/VideoMediaObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/VideoMediaObject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/VideoMediaObject.md",tags:[],version:"current",frontMatter:{id:"VideoMediaObject",title:"VideoMediaObject"},sidebar:"mainSidebar",previous:{title:"VerifyCodeObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/VerifyCodeObject"},next:{title:"WAConfigType",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/WAConfigType"}},l={},s=[{value:"Meta Hosted Video",id:"meta-hosted-video",level:2},{value:"Example",id:"example",level:3},{value:"Properties",id:"properties",level:3},{value:"Self Hosted video",id:"self-hosted-video",level:2},{value:"Example",id:"example-1",level:3},{value:"Properties",id:"properties-1",level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"video-media-object"},"Video Media Object"),(0,n.kt)("p",null,"The object required for sending a video message. Can either be a self-hosted and publicly accessible video, or an existing Meta-hosted video in a supported format. Meta or self hosted options have different object requirements."),(0,n.kt)("h2",{id:"meta-hosted-video"},"Meta Hosted Video"),(0,n.kt)("p",null,"This video must already exist."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id" : "VIDEO_ID",\n    "caption" : "CAPTION"\n}\n')),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," : string \u2014 the video Id. This Id is returned in the response body when the video was first uploaded."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"caption")," : string (optional) \u2014 text to be displayed with the video to describe the video.")),(0,n.kt)("h2",{id:"self-hosted-video"},"Self Hosted video"),(0,n.kt)("p",null,"The video must be readily accessible by public addresses."),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "link" : new URL( "https://www.example.com" ).href,\n    "caption" : "CAPTION"\n}\n')),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"link")," :  string \u2014 link to the publicly hosted video."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"caption")," : string (optional) \u2014 text to be displayed with the video to describe the video.")))}u.isMDXComponent=!0}}]);