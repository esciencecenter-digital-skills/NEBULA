import{g as d,a1 as l,k as v,a2 as f,B as p,a3 as g,a4 as m,O as h,a5 as y,s as u,e as _}from"./39W0dkzW.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:a}=l(i),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await g(`content-navigation-${m(n.value)}`,()=>y(n.value));return{navigation:o}},render(i){const a=h(),{navigation:n}=i,o=e=>u(_,{to:e._path},()=>e.title),t=(e,r)=>u("ul",r?{"data-level":r}:null,e.map(s=>s.children?u("li",null,[o(s),t(s.children,r+1)]):u("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),N=C;export{N as default};