import{_ as y,o as e,C as d,w as p,a as n,t as f,e as $,g as b,A as v,c as s,F as u,D as c,z as _,b as w,E as S}from"./DahKdFvD.js";const k={props:{title:{type:String,default:"Title"},author:{type:String,default:"Author"},thumbnail:{type:String,default:"./nlesc-logo.svg"},url:{type:String,default:"/"}}},C={class:"relative"},B={class:"flex flex-row bg-eScienceWhite shadow-xl max-w-xl rounded-bl-3xl rounded-tr-3xl h-48"},N={class:"prose font-display m-4 mr-10"},L=["src"];function A(h,o,l,m,x,i){const a=$;return e(),d(a,{to:l.url},{default:p(()=>[n("div",C,[n("div",B,[n("div",N,[n("h3",null,f(l.title),1)]),n("img",{src:l.thumbnail,alt:"module icon",class:"max-w-xs rounded-tr-3xl"},null,8,L)])])]),_:1},8,["to"])}const D=y(k,[["render",A]]),E={class:"flex flex-col pt-4 pb-6 pl-6 ml-16"},F={class:"prose-2xl font-display font-bold text-eSciencePurple w-full pl-2"},q=b({__name:"index",setup(h){const o=v().public,l={path:"/modules",where:[{visibility:"visible"}],sort:[{id:1,$numeric:!0}]};return(m,x)=>{const i=D,a=S;return e(),s("div",E,[(e(!0),s(u,null,c(_(o).categoryOrder,r=>(e(),s("div",{key:r,class:"flex flex-wrap gap-4 mb-8"},[n("h2",F,f(r),1),w(a,{query:l},{default:p(({list:g})=>[(e(!0),s(u,null,c(g.filter(t=>t.category===r),t=>(e(),d(i,{key:t.id,title:t.title,author:t.author,thumbnail:`/${_(o).repoName}${t._path}/media/${t.thumbnail}`,url:`${t._path}/info`},null,8,["title","author","thumbnail","url"]))),128))]),_:2},1024)]))),128))])}}});export{q as default};
