var y=Object.defineProperty;var S=(o,e,i)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var u=(o,e,i)=>(S(o,typeof e!="symbol"?e+"":e,i),i);import{j as n,r as p}from"./134ea77a.chunk.js";import{c as x}from"./7641ba4a.chunk.js";import{k as b}from"./e503b228.chunk.js";import{o as j,b as w,c as E}from"./3a9d4189.chunk.js";import{d as R}from"./41f5c735.chunk.js";import{o as T}from"./7564c185.chunk.js";import{S as L,a as d,b as O,R as P}from"./ebfc9fcc.chunk.js";import"./855dec41.chunk.js";import"./12376d7f.chunk.js";import"./b984a64f.chunk.js";import"./e210f2ac.chunk.js";import"./17d7769a.chunk.js";import"./dd7d57d2.chunk.js";import"./7fc11bbb.chunk.js";import"./b3f4b5f7.chunk.js";import"./eaba7ced.chunk.js";import"./ec180d41.chunk.js";import"./7a86238f.chunk.js";import"./ed196743.chunk.js";function F(){import.meta.url,import("_").catch(()=>1);async function*o(){}}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const A="modulepreload",D=function(o){return"https://appstatic-odd.action1.com/console/"+o},f={},g=function(e,i,c){if(!i||i.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(i.map(t=>{if(t=D(t),t in f)return;f[t]=!0;const s=t.endsWith(".css"),_=s?'[rel="stylesheet"]':"";if(!!c)for(let l=r.length-1;l>=0;l--){const m=r[l];if(m.href===t&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(t,'"]').concat(_)))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":A,s||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),s)return new Promise((l,m)=>{a.addEventListener("load",l),a.addEventListener("error",()=>m(new Error("Unable to preload CSS for ".concat(t))))})})).then(()=>e()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})};var I=Object.defineProperty,N=Object.getOwnPropertyDescriptor,v=(o,e,i,c)=>{for(var r=c>1?void 0:c?N(e,i):e,t=o.length-1,s;t>=0;t--)(s=o[t])&&(r=(c?s(e,i,r):s(r))||r);return c&&r&&I(e,i,r),r},C=(o=>(o.Dark="Dark",o.Light="Light",o))(C||{});class h{constructor(){u(this,"currentTheme","Light");u(this,"initCurrentTheme",()=>{const e=window.localStorage.getItem("Action1_GUI_Theme");if(e==="Dark"||e==="Light"){this.currentTheme=e,document.documentElement.setAttribute("data-theme",e);return}document.documentElement.setAttribute("data-theme",this.currentTheme)});u(this,"toggleTheme",()=>{const e=this.currentTheme==="Dark"?"Light":"Dark";this.currentTheme=e,window.localStorage.setItem("Action1_GUI_Theme",e),document.documentElement.setAttribute("data-theme",e)})}}v([j],h.prototype,"currentTheme",2);v([w],h.prototype,"toggleTheme",2);const k=new h,q="https://appstatic-odd.action1.com/console/static/media/bdc28e07.svg";const B=T(({text:o})=>n.jsxs("div",{className:"SplashScreen fadeIn",children:[n.jsx("div",{className:"SplashScreen_logo-wrap",children:n.jsx("img",{src:q,alt:"Action1"})}),n.jsx("div",{className:"SplashScreen_spinner-wrap",children:n.jsx("div",{className:"kt-spinner kt-spinner--lg kt-spinner--info"})}),n.jsx("div",{className:"SplashScreen_text",children:o||"please wait..."})]}));const U=p.lazy(()=>g(()=>import("./eeaded85.chunk.js").then(o=>o.J),["static/js/eeaded85.chunk.js","static/js/134ea77a.chunk.js","static/js/855dec41.chunk.js","static/js/3a9d4189.chunk.js","static/js/3843121f.chunk.js","static/js/eaba7ced.chunk.js","static/js/0c17733c.chunk.js","static/css/fe939352.css","static/js/41f5c735.chunk.js","static/js/b984a64f.chunk.js","static/js/e210f2ac.chunk.js","static/js/17d7769a.chunk.js","static/js/dd7d57d2.chunk.js","static/js/ebfc9fcc.chunk.js","static/js/ec180d41.chunk.js","static/js/7a86238f.chunk.js","static/js/ed196743.chunk.js","static/js/f2e8c20e.chunk.js","static/js/bca71878.chunk.js","static/js/0de2ec69.chunk.js","static/css/360dafcd.css","static/js/d76f08e3.chunk.js","static/js/65375d0d.chunk.js","static/js/4f1167c8.chunk.js","static/js/2ed190f4.chunk.js","static/js/6368ffa8.chunk.js","static/js/e503b228.chunk.js","static/css/d5f268f3.css","static/js/4a60fe23.chunk.js","static/js/7564c185.chunk.js","static/js/7fc11bbb.chunk.js","static/js/7641ba4a.chunk.js","static/js/12376d7f.chunk.js","static/js/b3f4b5f7.chunk.js","static/js/22030cb9.chunk.js","static/js/16998a06.chunk.js","static/js/79209241.chunk.js","static/js/44ec3912.chunk.js","static/js/2dd7230d.chunk.js","static/js/7dd4800f.chunk.js","static/js/88fdebcd.chunk.js","static/js/0a95bfb4.chunk.js","static/js/f8a933da.chunk.js","static/js/552d3611.chunk.js","static/js/a5f34b59.chunk.js","static/js/e820fc2e.chunk.js","static/js/5b2f5c1c.chunk.js","static/js/627118f7.chunk.js","static/js/4ee65a6b.chunk.js","static/js/9fea43a7.chunk.js","static/js/c888ef2a.chunk.js","static/js/9acbd20e.chunk.js","static/js/93eac31e.chunk.js","static/js/970d650e.chunk.js","static/js/c7a3f772.chunk.js","static/js/f908d519.chunk.js","static/js/e05c1028.chunk.js","static/js/da33e31c.chunk.js","static/js/8a3844ac.chunk.js","static/js/6b536c2a.chunk.js","static/js/0b4f815c.chunk.js","static/js/328d8f6a.chunk.js","static/js/34a34c8d.chunk.js","static/js/1229b3e0.chunk.js","static/js/d0b4aa3e.chunk.js","static/js/b42ba15f.chunk.js","static/js/fdc2b3e3.chunk.js","static/js/1c784838.chunk.js","static/js/93e00dbb.chunk.js","static/js/19edcbdd.chunk.js","static/js/f3391c26.chunk.js","static/js/39c882ee.chunk.js","static/css/6d23b155.css","static/js/d5fbf86d.chunk.js","static/js/87bfe468.chunk.js","static/js/916e3436.chunk.js","static/js/3b1d3659.chunk.js","static/js/7b25fd3a.chunk.js","static/js/6a52c8f5.chunk.js","static/js/ee4369a9.chunk.js","static/js/5fc60e78.chunk.js","static/js/2841dd07.chunk.js","static/js/c2d9c792.chunk.js","static/js/bb3fce95.chunk.js","static/js/5ef12c17.chunk.js","static/js/79144faa.chunk.js","static/js/22ca18f6.chunk.js","static/js/c1d22c2b.chunk.js","static/js/f841c241.chunk.js","static/js/93f4ad84.chunk.js","static/js/f5486c48.chunk.js","static/js/e1c8726e.chunk.js","static/js/b399d3f7.chunk.js","static/js/b32101b2.chunk.js","static/js/dbeff77b.chunk.js","static/js/72cd8fc5.chunk.js","static/js/8d9ddb1f.chunk.js","static/js/0ee44942.chunk.js","static/js/a2dbc0bf.chunk.js","static/js/52518564.chunk.js","static/js/5404ed65.chunk.js","static/js/dbfcab28.chunk.js","static/js/6558f182.chunk.js","static/js/521f7fff.chunk.js","static/js/f1215221.chunk.js","static/js/22d57cbd.chunk.js","static/js/d9049dad.chunk.js","static/js/717ff45d.chunk.js","static/css/27580a47.css"])),$=p.lazy(()=>g(()=>import("./7c8833f0.chunk.js"),["static/js/7c8833f0.chunk.js","static/js/134ea77a.chunk.js","static/js/855dec41.chunk.js","static/js/3a9d4189.chunk.js","static/js/7564c185.chunk.js","static/js/7fc11bbb.chunk.js","static/js/7641ba4a.chunk.js","static/js/12376d7f.chunk.js","static/js/b3f4b5f7.chunk.js","static/js/41f5c735.chunk.js","static/js/b984a64f.chunk.js","static/js/e210f2ac.chunk.js","static/js/17d7769a.chunk.js","static/js/dd7d57d2.chunk.js","static/js/0a95bfb4.chunk.js","static/js/ebfc9fcc.chunk.js","static/js/eaba7ced.chunk.js","static/js/ec180d41.chunk.js","static/js/7a86238f.chunk.js","static/js/ed196743.chunk.js","static/js/0de2ec69.chunk.js","static/css/360dafcd.css","static/js/1229b3e0.chunk.js","static/js/90f4a726.chunk.js","static/js/aeb627d2.chunk.js","static/js/f09aa0d4.chunk.js","static/js/6e8d3116.chunk.js","static/js/83fd9082.chunk.js","static/js/4b306d25.chunk.js","static/js/e3171728.chunk.js","static/js/25cb4991.chunk.js","static/js/9b2c208c.chunk.js","static/js/95bd23af.chunk.js","static/js/917fc69f.chunk.js","static/js/b0a320e2.chunk.js","static/js/0f3b46fa.chunk.js","static/js/143a8245.chunk.js","static/js/f2e8c20e.chunk.js","static/js/bca71878.chunk.js","static/js/d76f08e3.chunk.js","static/js/65375d0d.chunk.js","static/js/4f1167c8.chunk.js","static/js/2ed190f4.chunk.js","static/js/2a3cb585.chunk.js","static/js/328d8f6a.chunk.js","static/js/6368ffa8.chunk.js","static/css/eacc8437.css"])),z=()=>(p.useEffect(()=>{k.initCurrentTheme()},[]),n.jsx(p.Suspense,{fallback:n.jsx(B,{}),children:n.jsxs(L,{children:[n.jsx(d,{exact:!0,path:"/",children:n.jsx(O,{to:"/console"})}),n.jsx(d,{path:"/console",component:U}),n.jsx(d,{path:"*",component:$})]})})),G=R();E({safeDescriptors:!1,enforceActions:"never",computedRequiresReaction:!1,reactionRequiresObservable:!1,observableRequiresReaction:!1});const H=x(document.getElementById("root"));H.render(n.jsxs(P,{history:G,children:[n.jsx(z,{}),n.jsx(b,{toastStyle:{borderRadius:3}},"1")]}));export{C as B,B as S,g as _,F as __vite_legacy_guard,k as a,q as l};