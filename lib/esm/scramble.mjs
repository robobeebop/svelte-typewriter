import"svelte/internal";import{s as t}from"./Typewriter.mjs";let e=[];const n=t=>e.find((e=>e.currentNode===t)),r=t=>{const e=t.textContent.split("").map(((e,r)=>{const{matchingLetters:o}=n(t),a=o.includes(r)||" "===e,s=String.fromCharCode(65+Math.round(50*Math.random()));return a?e:s})).join("");t.textContent=e},o=(t,e)=>{const r=t.textContent;e.forEach(((e,o)=>{const{matchingLetters:a}=n(t);!a.includes(o)&&e===r[o]&&a.push(o)}))};export default async({elements:n},a)=>{e=[...n.map((({currentNode:t})=>({currentNode:t,matchingLetters:[]})))],await new Promise((e=>{n.forEach((async({currentNode:n,text:s})=>{const c="number"==typeof a.scramble?a.scramble:3e3,i=(new Date).getTime();for(;;){r(n),o(n,s),await t(a.interval);const m=n.textContent!=s.join(""),d=(new Date).getTime()-i<c;if(!m||!d){e();break}}n.textContent=s.join("")}))})),a.dispatch("done")};
