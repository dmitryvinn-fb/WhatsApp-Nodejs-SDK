"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"webhook_callback_function",title:"Webhook_Callback_Function"},s="Webhook Callback Function",i={unversionedId:"api-reference/types/webhook_callback_function",id:"api-reference/types/webhook_callback_function",title:"Webhook_Callback_Function",description:"The custom callback that is passed in to start the web server listening for webhook events. This receives all webhook events from the graph API, not just incoming messages. You are only able to respond to webhook events if they are a POST request and have a validated x-hub-signature-256 string.",source:"@site/docs/api-reference/types/webhook_callback_func.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/webhook_callback_function",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/webhook_callback_function",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/webhook_callback_func.md",tags:[],version:"current",frontMatter:{id:"webhook_callback_function",title:"Webhook_Callback_Function"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Arguments",id:"arguments",level:2}],p={toc:c},u="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhook-callback-function"},"Webhook Callback Function"),(0,o.kt)("p",null,"The custom callback that is passed in to start the web server listening for webhook events. This receives all webhook events from the graph API, not just incoming messages. You are only able to respond to webhook events if they are a ",(0,o.kt)("em",{parentName:"p"},"POST")," request and have a validated ",(0,o.kt)("inlineCode",{parentName:"p"},"x-hub-signature-256")," string."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async function custom_callback( status_code, request_headers, body, response, error )\n{\n    console.log(\n        `Incoming webhook response status code: ${ status_code }\\n\\nHeaders:\n        ${ JSON.stringify( request_headers ) }`\n    );\n\n    // Send a 200 so the webhooks service knows you received the message\n    if( response )\n    {\n        if( body )\n            console.log( `Body: ${ JSON.stringify( body ) }` );\n\n        response.writeHead( status_code, { "Content-Type": "text/plain" } );\n        response.end();\n    }\n\n    if( error )\n    {\n        console.log( `ERROR: ${ error }` );\n    }\n}\n')),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"status_code")," : number \u2014 the response status code that was either sent or recommended to be sent in the callback response."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"request_headers")," : HTTP request object \u2014 request headers object from the node HTTP library."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"body")," : Webhook_Request_Body  (optional) \u2014 the Cloud API's webhook request body. Only exists if there was a body in the request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"response")," : HTTP response object (optional) \u2014 standard HTTP response object from the node HTTP library. Only exists if a response wasn't already sent (validated request)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"error")," : Error (optional) \u2014 present when there are errors with the incoming request.")))}b.isMDXComponent=!0}}]);