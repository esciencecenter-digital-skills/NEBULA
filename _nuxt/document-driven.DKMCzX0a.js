import k from"./DocumentDrivenEmpty.BuTA88Ny.js";import P from"./ContentRenderer.CDK9qkuw.js";import b from"./DocumentDrivenNotFound.C4HB4gO8.js";import{u as L,f as d,i as g,P as R,g as x,h as C,j as B,r as S,k as j,l as m,m as T,n as A,q as p,s as E,v as N,S as H,T as O,x as w,L as D,y as u,z as q,A as $,o as f,c as z,b as y,w as _,B as v}from"./entry.xLk8oToX.js";import{u as F}from"./head.BThoafSp.js";import"./ContentRendererMarkdown.vue.OETOxFmO.js";import"./vue.f36acd1f.CeBWmtz8.js";const I=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,n.slots)}}),M=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=L(),o=g(R),s=o===x()?C():o,r=B(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),l=S();n.expose({layoutRef:l});const i=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",i);j().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??T;return A(O,a&&c,{default:()=>p(H,{suspensible:!0,onResolve:()=>{N(i)}},{default:()=>p(V,{layoutProps:E(n.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},n.slots)})}).default()}}}),V=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&w(D,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=n.slots).default)==null?void 0:s.call(o):p(I,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),G={class:"document-driven-page"},Z=d({__name:"document-driven",setup(t){const{contentHead:n}=q().public.content,{page:e,layout:o}=$();return e.value,n&&F(e),(s,r)=>{const l=k,i=P,a=b,c=M;return f(),z("div",G,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(f(),v(i,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(l,{value:h},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};