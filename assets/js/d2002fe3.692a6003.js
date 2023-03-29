"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=i.createContext({}),s=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||n;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<n;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(7462),o=(r(7294),r(3905));const n={id:"video_media_object",title:"Video_Media_Object"},a="Video Media Object",l={unversionedId:"api-reference/types/video_media_object",id:"api-reference/types/video_media_object",title:"Video_Media_Object",description:"The object required for sending a video message. Can either be a self-hosted and publicly accessible video, or an existing Meta-hosted video in a supported format. Meta or self hosted options have different object requirements.",source:"@site/docs/api-reference/types/video_media_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/video_media_object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/video_media_object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/video_media_object.md",tags:[],version:"current",frontMatter:{id:"video_media_object",title:"Video_Media_Object"},sidebar:"mainSidebar",previous:{title:"URL_Object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/url_object"},next:{title:"WA_Config_Type",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/wa_config_type"}},d={},s=[{value:"Meta Hosted Video",id:"meta-hosted-video",level:2},{value:"Example",id:"example",level:3},{value:"Properties",id:"properties",level:3},{value:"Self Hosted video",id:"self-hosted-video",level:2},{value:"Example",id:"example-1",level:3},{value:"Properties",id:"properties-1",level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"video-media-object"},"Video Media Object"),(0,o.kt)("p",null,"The object required for sending a video message. Can either be a self-hosted and publicly accessible video, or an existing Meta-hosted video in a supported format. Meta or self hosted options have different object requirements."),(0,o.kt)("h2",{id:"meta-hosted-video"},"Meta Hosted Video"),(0,o.kt)("p",null,"This video must already exist."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id" : "VIDEO_ID",\n    "caption" : "CAPTION"\n}\n')),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," : string \u2014 the video Id. This Id is returned in the response body when the video was first uploaded."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"caption")," : string (optional) \u2014 text to be displayed with the video to describe the video.")),(0,o.kt)("h2",{id:"self-hosted-video"},"Self Hosted video"),(0,o.kt)("p",null,"The video must be readily accessible by public addresses."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "link" : new URL( "https://www.example.com" ).href,\n    "caption" : "CAPTION"\n}\n')),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"link")," :  string \u2014 link to the publicly hosted video."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"caption")," : string (optional) \u2014 text to be displayed with the video to describe the video.")))}u.isMDXComponent=!0}}]);