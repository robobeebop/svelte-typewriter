import{SvelteComponent as t,init as e,safe_not_equal as o,element as n,append as s,create_slot as r,set_style as c,attr as a,toggle_class as l,insert as i,action_destroyer as u,update_slot as d,transition_in as p,transition_out as m,detach as f}from"svelte/internal";function v(){const t=function(){throw new Error("Function called outside component initialization")}();return(e,o)=>{t.$$.callbacks[e]}}const y=t=>new Promise(e=>setTimeout(e,t)),$=t=>1===t.childNodes.length&&3===t.childNodes[0].nodeType,h=async t=>{return y(t[(e=0,o=t.length,Math.floor(Math.random()*(o-e)+e))]||t);var e,o},g=async(t,e)=>{const{default:o}=e.loop&&await import("./loop.mjs")||e.cascade&&await import("./cascade.mjs")||await import("./default.mjs");o({node:t,elements:(t=>{if($(t)){const e=t.textContent.split("");t.textContent="";const o=document.createElement("p");return t.appendChild(o),[{currentNode:o,text:e}]}return[...t.getElementsByTagName("*")].filter(t=>$(t)).map(t=>({currentNode:t,text:t.textContent.split("")}))})(t)},e)};function x(t){let e,o,s,v,y;const $=t[6].default,h=r($,t,t[5],null);return{c(){e=n("div"),h&&h.c(),c(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),a(e,"class","svelte-somaq9"),l(e,"cursor",t[0])},m(n,r){i(n,e,r),h&&h.m(e,null),s=!0,v||(y=u(o=g.call(null,e,t[1])),v=!0)},p(t,[o]){h&&h.p&&32&o&&d(h,$,t,t[5],o,null,null),(!s||1&o)&&c(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),1&o&&l(e,"cursor",t[0])},i(t){s||(p(h,t),s=!0)},o(t){m(h,t),s=!1},d(t){t&&f(e),h&&h.d(t),v=!1,y()}}}function q(t,e,o){let{interval:n=30}=e,{cascade:s=!1}=e,{loop:r=!1}=e,{cursor:c=!0}=e;const a=v(),l={interval:n,cascade:s,loop:r,cursor:c,dispatch:a};let{$$slots:i={},$$scope:u}=e;return t.$$set=t=>{"interval"in t&&o(2,n=t.interval),"cascade"in t&&o(3,s=t.cascade),"loop"in t&&o(4,r=t.loop),"cursor"in t&&o(0,c=t.cursor),"$$scope"in t&&o(5,u=t.$$scope)},[c,l,n,s,r,u,i]}class w extends t{constructor(t){var r;super(),document.getElementById("svelte-somaq9-style")||((r=n("style")).id="svelte-somaq9-style",r.textContent="@keyframes svelte-somaq9-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.cursor.svelte-somaq9 .typing::after{content:'▌';display:inline-block;color:var(--cursor-color);animation:svelte-somaq9-cursorFade 1.25s infinite}",s(document.head,r)),e(this,t,q,x,o,{interval:2,cascade:3,loop:4,cursor:0})}}export{w as T,y as s,h as t};