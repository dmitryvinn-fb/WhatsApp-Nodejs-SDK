"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"receiving_messages",title:"Receiving Messages"},s="Receiving WhatsApp Messages",i={unversionedId:"receiving_messages",id:"receiving_messages",title:"Receiving Messages",description:"The SDK provides a convenience method for creating a web server to receive incoming Cloud API webhook notification payloads and creating your own custom logic. This web server currently uses a single process and is not intended for multi-instance environments. You can use the utilities to build your own or contribute to this open source project.",source:"@site/docs/receiving_messages.md",sourceDirName:".",slug:"/receiving_messages",permalink:"/WhatsApp-Nodejs-SDK/receiving_messages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/receiving_messages.md",tags:[],version:"current",frontMatter:{id:"receiving_messages",title:"Receiving Messages"},sidebar:"mainSidebar",previous:{title:"Quickstart",permalink:"/WhatsApp-Nodejs-SDK/"},next:{title:"Project setup",permalink:"/WhatsApp-Nodejs-SDK/project_setup"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure",id:"configure",level:2},{value:"Code",id:"code",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Run",id:"run",level:2},{value:"Setup",id:"setup",level:2},{value:"Receive",id:"receive",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"receiving-whatsapp-messages"},"Receiving WhatsApp Messages"),(0,o.kt)("p",null,"The SDK provides a convenience method for creating a web server to receive incoming ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/components"},"Cloud API webhook notification")," payloads and creating your own custom logic. This web server currently uses a single process and is not intended for multi-instance environments. You can use the utilities to build your own or contribute to this open source project."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or later."),(0,o.kt)("li",{parentName:"ol"},"A publicly accessible HTTPS (not HTTP) URL."),(0,o.kt)("li",{parentName:"ol"},"Have a working ",(0,o.kt)("a",{parentName:"li",href:"/"},"quickstart")," application.")),(0,o.kt)("h2",{id:"configure"},"Configure"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("em",{parentName:"p"},".env")," file in the root directory, add the values for the following variables, and save after you're done:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"WEBHOOK_ENDPOINT")," - The listener path for your application. Recommend setting the environmental variable to ",(0,o.kt)("inlineCode",{parentName:"li"},"webhook"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"WEBHOOK_VERIFICATION_TOKEN")," - This is a secret string that the Cloud API will send in it's subscribe message payload so you can verify it's a trusted source. Recommended you use a long string of alpha-numerics."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"LISTENER_PORT")," - The network port the application will listen on. Leaving this empty will set it to the default port 3000.")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},".env")," file should look like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Your WhatsApp phone number Id.\nWA_PHONE_NUMBER_ID=\n\n# System user access token. Recommended: Do not use a temporary access token.\nCLOUD_API_ACCESS_TOKEN=\n\n# Cloud API version number.\nCLOUD_API_VERSION=v16.0\n\n# Customize your incoming webhook listener endpoint. Path should be https://{host}/{WEBHOOK_ENDPOINT}.\n# A trailing slash is not added by default, so the variable should include that if it's required by your API gateway.\nWEBHOOK_ENDPOINT=webhook/\n\n# A custom verification token string to validate incoming webhook payloads.\n# Needs to match webhook configuration.\nWEBHOOK_VERIFICATION_TOKEN=1234567890abcd\n\n# Override the default app listener port (optional & default 3000).\nLISTENER_PORT=3000\n")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("p",null,"Create a new file called ",(0,o.kt)("em",{parentName:"p"},"listen.js")," file and add the following code`:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import WhatsApp from "whatsapp";\n\nconst senderNumber = 12345678901234567890;\nconst wa = new WhatsApp();\n\nfunction custom_callback ( statusCode, headers, body, resp, err )\n{\n    console.log(\n        `Incoming webhook status code: ${ statusCode }\\n\\nHeaders:\n        ${ JSON.stringify( headers ) }\\n\\nBody: ${ JSON.stringify( body ) }`\n    );\n\n    if( resp )\n    {\n        resp.writeHead(200, { "Content-Type": "text/plain" });\n        resp.end();\n    }\n\n    if( err )\n    {\n        console.log( `ERROR: ${ err }` );\n    }\n}\n\nwa.webhooks.start( custom_callback );\n')),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("p",null,"The code above has a custom callback function that receives an several parameters, including the response object to respond back to the Cloud API, and starts the webhook listener. From top to bottom:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creates a new instance of the WhatsApp SDK class."),(0,o.kt)("li",{parentName:"ol"},"Logs the status code of the request, the headers received, and the request body. You should see it print a status code of ",(0,o.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,o.kt)("li",{parentName:"ol"},"After checking for the response body, it sends a ",(0,o.kt)("inlineCode",{parentName:"li"},"200")," (success) back to the Cloud API for this request. This marks the message as delivered (see ",(0,o.kt)("a",{parentName:"li",href:"./api-reference/messages/status"},"messages.status()")," to also mark message as read) and the webhook service will not reattempt sending this message again."),(0,o.kt)("li",{parentName:"ol"},"Any errors are logged."),(0,o.kt)("li",{parentName:"ol"},"The webhooks listener is started. This accepts either a ",(0,o.kt)("strong",{parentName:"li"},"GET")," request or ",(0,o.kt)("strong",{parentName:"li"},"POST"),". Only post requests call the custom callback. GET requests are only for verifying subscription by the Cloud API.")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Run your application by putting in the following command into terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm listen.js\n")),(0,o.kt)("p",null,"The application will start the HTTP server. It's ready to verify subscription from the Cloud API, and then receive incoming messages and call the callback function."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"A valid publicly accessible HTTPS URL as required for this example and a way to proxy requests from port 443 to the server listening port on 3000. You'll need to use this URL to register with the Cloud API to register your webhooks."),(0,o.kt)("p",null,"To finish webhook registration, follow the official docs using the ",(0,o.kt)("strong",{parentName:"p"},"WEBHOOK_VERIFICATION_TOKEN")," string that you set in your ",(0,o.kt)("em",{parentName:"p"},".env")," file and the URL for your webhook. The listener address will be similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<<YOUR_DOMAIN>>/webhook")," (no trailing slash if set to just ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook"),"). The server listens for the path set in the ",(0,o.kt)("strong",{parentName:"p"},"WEBHOOK_ENDPOINT")," environmental variable."),(0,o.kt)("h2",{id:"receive"},"Receive"),(0,o.kt)("p",null,"Use your WhatsApp app (e.g. mobile, desktop, web, etc.) and send a message to the test number. Shortly after the message is sent, you should see the details of the incoming webhook request printed in terminal."))}d.isMDXComponent=!0}}]);