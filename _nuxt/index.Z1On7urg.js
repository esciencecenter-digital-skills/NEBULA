import{_ as $}from"./nuxt-link.D6sUFjV5.js";import{_ as C,o as e,j as _,w as p,a as n,t as d,f as S,h as k,c as l,F as a,r as u,i as c,b as B,g as N}from"./entry.EYp4KcZa.js";import L from"./ContentList.T2r8WBI2.js";/* empty css              */import"./ContentQuery.BTFmrkLY.js";const F={props:{title:{type:String,default:"Title"},author:{type:String,default:"Author"},thumbnail:{type:String,default:"./public/nlesc-logo.svg"},url:{type:String,default:"/"}}},V={class:"relative"},q={class:"flex flex-row bg-eScienceWhite shadow-xl max-w-xl rounded-bl-3xl rounded-tr-3xl h-48"},A={class:"prose font-display m-4 mr-10"},D=["src"];function E(m,s,o,f,h,x){const r=$;return e(),_(r,{to:o.url},{default:p(()=>[n("div",V,[n("div",q,[n("div",A,[n("h3",null,d(o.title),1)]),n("img",{src:o.thumbnail,alt:"module icon",class:"max-w-xs rounded-tr-3xl"},null,8,D)])])]),_:1},8,["to"])}const M=C(F,[["render",E]]),P={class:"flex flex-col pt-4 pb-6 pl-6"},Q={class:"prose-2xl font-display font-bold text-eSciencePurple w-full pl-2"},Z=S({__name:"index",setup(m){const s=N(),{globals:o,navigation:f,surround:h,page:x,excerpt:r,toc:R,type:T,layout:W,next:z,prev:G}=k();console.log(o);const g={path:"/modules",where:[{visibility:"visible"}]};return(H,I)=>{const y=M,b=L;return e(),l("div",P,[(e(!0),l(a,null,u(c(s).public.categoryOrder,i=>(e(),l("div",{key:i,class:"flex flex-wrap gap-4 mb-8"},[n("h2",Q,d(i),1),B(b,{path:"/modules",query:g},{default:p(({list:v})=>[(e(!0),l(a,null,u(v.filter(t=>t.category===i&&t.visibility==="visible").sort((t,w)=>t.id-w.id),t=>(e(),_(y,{key:t.id,title:t.title,author:t.author,thumbnail:`/${c(s).public.repoName}/${t._path}/media/${t.thumbnail}`,url:t._path},null,8,["title","author","thumbnail","url"]))),128))]),_:2},1024)]))),128))])}}});export{Z as default};
