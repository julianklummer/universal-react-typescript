(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("react");var n=e.n(t);const r=require("express");var l=e.n(r);const c=require("react-dom/server"),a=require("react-router-dom"),o=[{path:"/",exact:!0,component:function(){return n().createElement("div",null,n().createElement("p",null,"Startseite"))}},{path:"/events",exact:!0,component:function(){return n().createElement("div",null,n().createElement("p",null,"Events"))}}],u=function(){return n().createElement("div",null,"Four Oh Four")};var i=function(){return n().createElement(t.StrictMode,null,n().createElement("p",null,"Navbar placeholder"),n().createElement(a.Switch,null,o.map((function(e){var t=e.path,r=e.exact,l=e.component;return n().createElement(a.Route,{path:t,exact:r},l)})),n().createElement(a.Route,{render:function(){return n().createElement(u,null)}})))},p=l()();p.use(l().static("public")),p.get("*",(function(e,t,r){var l=(0,c.renderToString)(n().createElement(a.StaticRouter,{location:e.url},n().createElement(i,null)));t.send('\n<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <div id="app">'+l+'</div>\n  </body>\n  <script src="client.js" defer><\/script>\n</html>\n')})),p.listen(80,(function(){return console.log("App listening on port 80!")}))})();