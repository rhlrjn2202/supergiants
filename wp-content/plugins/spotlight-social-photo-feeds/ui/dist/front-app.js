var Spotlight=(window.webpackJsonpSpotlight=window.webpackJsonpSpotlight||[]).push([[14],{0:function(t,e){t.exports=React},1068:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(281);document.addEventListener("DOMContentLoaded",o.init)},20:function(t,e){t.exports=ReactDOM},281:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.SliPreloadedMedia=e.SliAccountInfo=e.SliFrontCtx=e.feed=e.init=void 0;const i=o(n(0)),r=o(n(20)),a=n(101),d=n(9),l=n(173),c=n(282),s=n(22),u=n(199);function f(t={}){const e=document.getElementsByClassName("spotlight-instagram-feed");for(let n=0,o=e.length||0;n<o;++n){const o=p(e[n],t);o&&(window.SpotlightInstagram.instances[n]=o)}}function p(t,n={}){const o=t.getAttribute("data-feed-var"),f=(p=o,e.SliFrontCtx[p]=e.SliFrontCtx.hasOwnProperty(p)?e.SliFrontCtx[p]:S("sli__f__"+p));var p;const w=function(t){return e.SliAccountInfo[t]=e.SliAccountInfo.hasOwnProperty(t)?e.SliAccountInfo[t]:S("sli__a__"+t)}(o),_=function(t){return e.SliPreloadedMedia[t]=e.SliPreloadedMedia.hasOwnProperty(t)?e.SliPreloadedMedia[t]:S("sli__m__"+t)}(o);if(o&&"object"==typeof f&&Array.isArray(w)){if(!(t.children.length>0)){const e=s.Responsive.getDevice(l.getWindowSize());let n=new d.FeedState(f,e,d.FeedEntityResolver.forFrontApp(w));u.isObjectEmpty(_)||([n]=n.load(_));const o={run(){const e=i.default.createElement(c.FrontApp,{feedState:n});r.default.render(e,t)}};return a.runWhenDomReady(()=>o.run()),o}n.silent}return null}function S(t){const e=document.getElementById(t);return e&&e.hasAttribute("data-json")?JSON.parse(e.getAttribute("data-json")):null}e.init=f,e.feed=p,window.SliFrontCtx||(window.SliFrontCtx={}),window.SliAccountInfo||(window.SliAccountInfo={}),window.SliPreloadedMedia||(window.SliPreloadedMedia={}),window.SpotlightInstagram||(window.SpotlightInstagram={instances:[],init:f,feed:p}),e.SliFrontCtx=window.SliFrontCtx,e.SliAccountInfo=window.SliAccountInfo,e.SliPreloadedMedia=window.SliPreloadedMedia},282:function(t,e,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.FrontApp=void 0;const a=r(n(0));n(283);const d=n(202);e.FrontApp=function({feedState:t}){const[e,n]=a.useState(t);return a.default.createElement("div",{className:"spotlight-instagram-app"},a.default.createElement(d.InstagramFeed,{state:e,onUpdateState:n,autoDevice:!0,autoLoad:!0}))}},283:function(t,e,n){t.exports={"spotlight-instagram-app":"spotlight-instagram-app"}}},[[1068,2,1,0,3]]]);