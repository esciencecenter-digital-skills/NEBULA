import{f as _,g,q as v,s as C,v as D,x as o}from"./entry.Dh0da3zs.js";import{u as d}from"./head.D8D2j4GP.js";import w from"./ContentRenderer.B8BXuPMz.js";import x from"./ContentQuery.DJs6o8EK.js";import"./vue.f36acd1f.Beb1wU9N.js";import"./ContentRendererMarkdown.vue.CGrunmZc.js";const q=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,t=v(),{tag:m,excerpt:r,path:s,query:i,head:u}=f,a=u===void 0?c:u,l={...i||{},path:s||(i==null?void 0:i.path)||C(D().path),find:"one"},h=(e,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:e,data:n},null,2));return o(x,l,{default:t!=null&&t.default?({data:e,refresh:n,isPartial:y})=>{var p;return a&&d(e),(p=t.default)==null?void 0:p.call(t,{doc:e,refresh:n,isPartial:y,excerpt:r,...this.$attrs})}:({data:e})=>(a&&d(e),o(w,{value:e,excerpt:r,tag:m,...this.$attrs},{empty:n=>t!=null&&t.empty?t.empty(n):h("default",e)})),empty:e=>{var n;return((n=t==null?void 0:t.empty)==null?void 0:n.call(t,e))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":e=>{var n;return((n=t==null?void 0:t["not-found"])==null?void 0:n.call(t,e))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),S=q,O=S;export{O as default};