(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("react");var n=e.n(t);const r=require("express");var a=e.n(r);const l=require("react-dom/server"),c=require("react-router-dom"),o=[{path:"/",exact:!0,component:function(){return n().createElement("div",null,n().createElement("p",null,"Startseite"))}}],u=function(){return n().createElement("div",null,"Four Oh Four")};var i=function(){return n().createElement(t.StrictMode,null,n().createElement("p",null,"Navbar placeholder"),n().createElement(c.Switch,null,o.map((function(e){var t=e.path,r=e.exact,a=e.component;return n().createElement(c.Route,{path:t,exact:r},a)})),n().createElement(c.Route,{render:function(){return n().createElement(u,null)}})))},p=a()();p.use(a().static("public")),p.get("*",(function(e,t,r){var a=(0,l.renderToString)(n().createElement(c.StaticRouter,{location:e.url},n().createElement(i,null)));t.send('\n<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body style="margin:0">\n    <div id="app">'+a+'</div>\n  </body>\n  <script src="client.js" defer><\/script>\n</html>\n')})),p.listen(80,(function(){return console.log("Example app listening on port 80!")}))})();