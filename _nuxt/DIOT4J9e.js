const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./black.DaBlZCd_.css","./monokai.Dkx8yfpa.css","./escience.CGg9hb9u.css"])))=>i.map(i=>d[i]);
import{f as Kt,K as Xt,M as Gt,N as ut,O as Yt,c as $t,o as kt,a as At,t as t0,_ as e0,B as n0,w as s0,b as Ht}from"#entry";import i0 from"./lpz0ZMmA.js";import r0 from"./cqCD3cty.js";import"./Cdh5L8LM.js";import"./B8IaAclc.js";import"./D03iVWAz.js";import"./CAgwrBSm.js";function a0(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ot={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Ut=/[&<>"']/,l0=new RegExp(Ut.source,"g"),Ft=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,o0=new RegExp(Ft.source,"g"),c0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ct=d=>c0[d];function Q(d,n){if(n){if(Ut.test(d))return d.replace(l0,Ct)}else if(Ft.test(d))return d.replace(o0,Ct);return d}const p0=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function jt(d){return d.replace(p0,((n,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const h0=/(^|[^\[])\^/g;function Z(d,n){d=typeof d=="string"?d:d.source,n=n||"";const e={replace:(t,a)=>(a=(a=a.source||a).replace(h0,"$1"),d=d.replace(t,a),e),getRegex:()=>new RegExp(d,n)};return e}const d0=/[^\w:]/g,u0=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function qt(d,n,e){if(d){let t;try{t=decodeURIComponent(jt(e)).replace(d0,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}n&&!u0.test(e)&&(e=(function(t,a){ft[" "+t]||(f0.test(t)?ft[" "+t]=t+"/":ft[" "+t]=wt(t,"/",!0)),t=ft[" "+t];const p=t.indexOf(":")===-1;return a.substring(0,2)==="//"?p?a:t.replace(g0,"$1")+a:a.charAt(0)==="/"?p?a:t.replace(m0,"$1")+a:t+a})(n,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const ft={},f0=/^[^:]+:\/*[^/]*$/,g0=/^([^:]+:)[\s\S]*$/,m0=/^([^:]+:\/*[^/]*)[\s\S]*$/,bt={exec:function(){}};function Vt(d,n){const e=d.replace(/\|/g,((a,p,c)=>{let h=!1,k=p;for(;--k>=0&&c[k]==="\\";)h=!h;return h?"|":" |"})).split(/ \|/);let t=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>n)e.splice(n);else for(;e.length<n;)e.push("");for(;t<e.length;t++)e[t]=e[t].trim().replace(/\\\|/g,"|");return e}function wt(d,n,e){const t=d.length;if(t===0)return"";let a=0;for(;a<t;){const p=d.charAt(t-a-1);if(p!==n||e){if(p===n||!e)break;a++}else a++}return d.slice(0,t-a)}function Nt(d,n){if(n<1)return"";let e="";for(;n>1;)1&n&&(e+=d),n>>=1,d+=d;return e+d}function Pt(d,n,e,t){const a=n.href,p=n.title?Q(n.title):null,c=d[1].replace(/\\([\[\]])/g,"$1");if(d[0].charAt(0)!=="!"){t.state.inLink=!0;const h={type:"link",raw:e,href:a,title:p,text:c,tokens:t.inlineTokens(c)};return t.state.inLink=!1,h}return{type:"image",raw:e,href:a,title:p,text:Q(c)}}class Tt{constructor(n){this.options=n||ot}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:wt(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],a=(function(p,c){const h=p.match(/^(\s+)(?:```)/);if(h===null)return c;const k=h[1];return c.split(`
`).map((v=>{const u=v.match(/^\s+/);if(u===null)return v;const[o]=u;return o.length>=k.length?v.slice(k.length):v})).join(`
`)})(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:a}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const a=wt(t,"#");this.options.pedantic?t=a.trim():a&&!/ $/.test(a)||(t=a.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){const t=e[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const p=this.lexer.blockTokens(t);return this.lexer.state.top=a,{type:"blockquote",raw:e[0],tokens:p,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t,a,p,c,h,k,v,u,o,x,_,E,I=e[1].trim();const V=I.length>1,A={type:"list",raw:"",ordered:V,start:V?+I.slice(0,-1):"",loose:!1,items:[]};I=V?`\\d{1,9}\\${I.slice(-1)}`:`\\${I}`,this.options.pedantic&&(I=V?I:"[*+-]");const N=new RegExp(`^( {0,3}${I})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(E=!1,e=N.exec(n))&&!this.rules.block.hr.test(n);){if(t=e[0],n=n.substring(t.length),u=e[2].split(`
`,1)[0].replace(/^\t+/,(O=>" ".repeat(3*O.length))),o=n.split(`
`,1)[0],this.options.pedantic?(c=2,_=u.trimLeft()):(c=e[2].search(/[^ ]/),c=c>4?1:c,_=u.slice(c),c+=e[1].length),k=!1,!u&&/^ *$/.test(o)&&(t+=o+`
`,n=n.substring(o.length+1),E=!0),!E){const O=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),B=new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),L=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:\`\`\`|~~~)`),F=new RegExp(`^ {0,${Math.min(3,c-1)}}#`);for(;n&&(x=n.split(`
`,1)[0],o=x,this.options.pedantic&&(o=o.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!L.test(o))&&!F.test(o)&&!O.test(o)&&!B.test(n);){if(o.search(/[^ ]/)>=c||!o.trim())_+=`
`+o.slice(c);else{if(k||u.search(/[^ ]/)>=4||L.test(u)||F.test(u)||B.test(u))break;_+=`
`+o}k||o.trim()||(k=!0),t+=x+`
`,n=n.substring(x.length+1),u=o.slice(c)}}A.loose||(v?A.loose=!0:/\n *\n *$/.test(t)&&(v=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(_),a&&(p=a[0]!=="[ ] ",_=_.replace(/^\[[ xX]\] +/,""))),A.items.push({type:"list_item",raw:t,task:!!a,checked:p,loose:!1,text:_}),A.raw+=t}A.items[A.items.length-1].raw=t.trimRight(),A.items[A.items.length-1].text=_.trimRight(),A.raw=A.raw.trimRight();const D=A.items.length;for(h=0;h<D;h++)if(this.lexer.state.top=!1,A.items[h].tokens=this.lexer.blockTokens(A.items[h].text,[]),!A.loose){const O=A.items[h].tokens.filter((L=>L.type==="space")),B=O.length>0&&O.some((L=>/\n.*\n/.test(L.raw)));A.loose=B}if(A.loose)for(h=0;h<D;h++)A.items[h].loose=!0;return A}}html(n){const e=this.rules.block.html.exec(n);if(e){const t={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(e[0]):Q(e[0]);t.type="paragraph",t.text=a,t.tokens=this.lexer.inline(a)}return t}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),a=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",p=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:a,title:p}}}table(n){const e=this.rules.block.table.exec(n);if(e){const t={type:"table",header:Vt(e[1]).map((a=>({text:a}))),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=e[0];let a,p,c,h,k=t.align.length;for(a=0;a<k;a++)/^ *-+: *$/.test(t.align[a])?t.align[a]="right":/^ *:-+: *$/.test(t.align[a])?t.align[a]="center":/^ *:-+ *$/.test(t.align[a])?t.align[a]="left":t.align[a]=null;for(k=t.rows.length,a=0;a<k;a++)t.rows[a]=Vt(t.rows[a],t.header.length).map((v=>({text:v})));for(k=t.header.length,p=0;p<k;p++)t.header[p].tokens=this.lexer.inline(t.header[p].text);for(k=t.rows.length,p=0;p<k;p++)for(h=t.rows[p],c=0;c<h.length;c++)h[c].tokens=this.lexer.inline(h[c].text);return t}}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:Q(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):Q(e[0]):e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const c=wt(t.slice(0,-1),"\\");if((t.length-c.length)%2==0)return}else{const c=(function(h,k){if(h.indexOf(k[1])===-1)return-1;const v=h.length;let u=0,o=0;for(;o<v;o++)if(h[o]==="\\")o++;else if(h[o]===k[0])u++;else if(h[o]===k[1]&&(u--,u<0))return o;return-1})(e[2],"()");if(c>-1){const h=(e[0].indexOf("!")===0?5:4)+e[1].length+c;e[2]=e[2].substring(0,c),e[0]=e[0].substring(0,h).trim(),e[3]=""}}let a=e[2],p="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);c&&(a=c[1],p=c[3])}else p=e[3]?e[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(t)?a.slice(1):a.slice(1,-1)),Pt(e,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:p&&p.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let a=(t[2]||t[1]).replace(/\s+/g," ");if(a=e[a.toLowerCase()],!a){const p=t[0].charAt(0);return{type:"text",raw:p,text:p}}return Pt(t,a,t[0],this.lexer)}}emStrong(n,e,t=""){let a=this.rules.inline.emStrong.lDelim.exec(n);if(!a||a[3]&&t.match(/[\p{L}\p{N}]/u))return;const p=a[1]||a[2]||"";if(!p||p&&(t===""||this.rules.inline.punctuation.exec(t))){const c=a[0].length-1;let h,k,v=c,u=0;const o=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,e=e.slice(-1*n.length+c);(a=o.exec(e))!=null;){if(h=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!h)continue;if(k=h.length,a[3]||a[4]){v+=k;continue}if((a[5]||a[6])&&c%3&&!((c+k)%3)){u+=k;continue}if(v-=k,v>0)continue;k=Math.min(k,k+v+u);const x=n.slice(0,c+a.index+(a[0].length-h.length)+k);if(Math.min(c,k)%2){const E=x.slice(1,-1);return{type:"em",raw:x,text:E,tokens:this.lexer.inlineTokens(E)}}const _=x.slice(2,-2);return{type:"strong",raw:x,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const a=/[^ ]/.test(t),p=/^ /.test(t)&&/ $/.test(t);return a&&p&&(t=t.substring(1,t.length-1)),t=Q(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n,e){const t=this.rules.inline.autolink.exec(n);if(t){let a,p;return t[2]==="@"?(a=Q(this.options.mangle?e(t[1]):t[1]),p="mailto:"+a):(a=Q(t[1]),p=a),{type:"link",raw:t[0],text:a,href:p,tokens:[{type:"text",raw:a,text:a}]}}}url(n,e){let t;if(t=this.rules.inline.url.exec(n)){let a,p;if(t[2]==="@")a=Q(this.options.mangle?e(t[0]):t[0]),p="mailto:"+a;else{let c;do c=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(c!==t[0]);a=Q(t[0]),p=t[1]==="www."?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:a,href:p,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n,e){const t=this.rules.inline.text.exec(n);if(t){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Q(t[0]):t[0]:Q(this.options.smartypants?e(t[0]):t[0]),{type:"text",raw:t[0],text:a}}}}const q={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:bt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};q.def=Z(q.def).replace("label",q._label).replace("title",q._title).getRegex(),q.bullet=/(?:[*+-]|\d{1,9}[.)])/,q.listItemStart=Z(/^( *)(bull) */).replace("bull",q.bullet).getRegex(),q.list=Z(q.list).replace(/bull/g,q.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+q.def.source+")").getRegex(),q._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",q._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,q.html=Z(q.html,"i").replace("comment",q._comment).replace("tag",q._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),q.paragraph=Z(q._paragraph).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",q._tag).getRegex(),q.blockquote=Z(q.blockquote).replace("paragraph",q.paragraph).getRegex(),q.normal={...q},q.gfm={...q.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},q.gfm.table=Z(q.gfm.table).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",q._tag).getRegex(),q.gfm.paragraph=Z(q._paragraph).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",q.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",q._tag).getRegex(),q.pedantic={...q.normal,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",q._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:bt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(q.normal._paragraph).replace("hr",q.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",q.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const $={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:bt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:bt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function k0(d){return d.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ot(d){let n,e,t="";const a=d.length;for(n=0;n<a;n++)e=d.charCodeAt(n),Math.random()>.5&&(e="x"+e.toString(16)),t+="&#"+e+";";return t}$._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",$.punctuation=Z($.punctuation).replace(/punctuation/g,$._punctuation).getRegex(),$.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,$.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,$._comment=Z(q._comment).replace("(?:-->|$)","-->").getRegex(),$.emStrong.lDelim=Z($.emStrong.lDelim).replace(/punct/g,$._punctuation).getRegex(),$.emStrong.rDelimAst=Z($.emStrong.rDelimAst,"g").replace(/punct/g,$._punctuation).getRegex(),$.emStrong.rDelimUnd=Z($.emStrong.rDelimUnd,"g").replace(/punct/g,$._punctuation).getRegex(),$._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,$._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,$._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,$.autolink=Z($.autolink).replace("scheme",$._scheme).replace("email",$._email).getRegex(),$._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,$.tag=Z($.tag).replace("comment",$._comment).replace("attribute",$._attribute).getRegex(),$._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,$._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,$._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,$.link=Z($.link).replace("label",$._label).replace("href",$._href).replace("title",$._title).getRegex(),$.reflink=Z($.reflink).replace("label",$._label).replace("ref",q._label).getRegex(),$.nolink=Z($.nolink).replace("ref",q._label).getRegex(),$.reflinkSearch=Z($.reflinkSearch,"g").replace("reflink",$.reflink).replace("nolink",$.nolink).getRegex(),$.normal={...$},$.pedantic={...$.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",$._label).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$._label).getRegex()},$.gfm={...$.normal,escape:Z($.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},$.gfm.url=Z($.gfm.url,"i").replace("email",$.gfm._extended_email).getRegex(),$.breaks={...$.gfm,br:Z($.br).replace("{2,}","*").getRegex(),text:Z($.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class it{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||ot,this.options.tokenizer=this.options.tokenizer||new Tt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:q.normal,inline:$.normal};this.options.pedantic?(e.block=q.pedantic,e.inline=$.pedantic):this.options.gfm&&(e.block=q.gfm,this.options.breaks?e.inline=$.breaks:e.inline=$.gfm),this.tokenizer.rules=e}static get rules(){return{block:q,inline:$}}static lex(n,e){return new it(e).lex(n)}static lexInline(n,e){return new it(e).inlineTokens(n)}lex(n){let e;for(n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(n,e=[]){let t,a,p,c;for(n=this.options.pedantic?n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n.replace(/^( *)(\t+)/gm,((h,k,v)=>k+"    ".repeat(v.length)));n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((h=>!!(t=h.call({lexer:this},n,e))&&(n=n.substring(t.raw.length),e.push(t),!0)))))if(t=this.tokenizer.space(n))n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);else if(t=this.tokenizer.code(n))n=n.substring(t.raw.length),a=e[e.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?e.push(t):(a.raw+=`
`+t.raw,a.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(t=this.tokenizer.fences(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.heading(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.hr(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.blockquote(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.list(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.html(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.def(n))n=n.substring(t.raw.length),a=e[e.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title}):(a.raw+=`
`+t.raw,a.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(t=this.tokenizer.table(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.lheading(n))n=n.substring(t.raw.length),e.push(t);else{if(p=n,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const k=n.slice(1);let v;this.options.extensions.startBlock.forEach((function(u){v=u.call({lexer:this},k),typeof v=="number"&&v>=0&&(h=Math.min(h,v))})),h<1/0&&h>=0&&(p=n.substring(0,h+1))}if(this.state.top&&(t=this.tokenizer.paragraph(p)))a=e[e.length-1],c&&a.type==="paragraph"?(a.raw+=`
`+t.raw,a.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(t),c=p.length!==n.length,n=n.substring(t.raw.length);else if(t=this.tokenizer.text(n))n=n.substring(t.raw.length),a=e[e.length-1],a&&a.type==="text"?(a.raw+=`
`+t.raw,a.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(t);else if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,a,p,c,h,k,v=n;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(v))!=null;)u.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(v=v.slice(0,c.index)+"["+Nt("a",c[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(v))!=null;)v=v.slice(0,c.index)+"["+Nt("a",c[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.escapedEmSt.exec(v))!=null;)v=v.slice(0,c.index+c[0].length-2)+"++"+v.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(h||(k=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((u=>!!(t=u.call({lexer:this},n,e))&&(n=n.substring(t.raw.length),e.push(t),!0)))))if(t=this.tokenizer.escape(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.tag(n))n=n.substring(t.raw.length),a=e[e.length-1],a&&t.type==="text"&&a.type==="text"?(a.raw+=t.raw,a.text+=t.text):e.push(t);else if(t=this.tokenizer.link(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.reflink(n,this.tokens.links))n=n.substring(t.raw.length),a=e[e.length-1],a&&t.type==="text"&&a.type==="text"?(a.raw+=t.raw,a.text+=t.text):e.push(t);else if(t=this.tokenizer.emStrong(n,v,k))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.codespan(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.br(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.del(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.autolink(n,Ot))n=n.substring(t.raw.length),e.push(t);else if(this.state.inLink||!(t=this.tokenizer.url(n,Ot))){if(p=n,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const o=n.slice(1);let x;this.options.extensions.startInline.forEach((function(_){x=_.call({lexer:this},o),typeof x=="number"&&x>=0&&(u=Math.min(u,x))})),u<1/0&&u>=0&&(p=n.substring(0,u+1))}if(t=this.tokenizer.inlineText(p,k0))n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(k=t.raw.slice(-1)),h=!0,a=e[e.length-1],a&&a.type==="text"?(a.raw+=t.raw,a.text+=t.text):e.push(t);else if(n){const u="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else n=n.substring(t.raw.length),e.push(t);return e}}class Et{constructor(n){this.options=n||ot}code(n,e,t){const a=(e||"").match(/\S*/)[0];if(this.options.highlight){const p=this.options.highlight(n,a);p!=null&&p!==n&&(t=!0,n=p)}return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+Q(a)+'">'+(t?n:Q(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:Q(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,e,t,a){return this.options.headerIds?`<h${e} id="${this.options.headerPrefix+a.slug(t)}">${n}</h${e}>
`:`<h${e}>${n}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,e,t){const a=e?"ol":"ul";return"<"+a+(e&&t!==1?' start="'+t+'"':"")+`>
`+n+"</"+a+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){if((n=qt(this.options.sanitize,this.options.baseUrl,n))===null)return t;let a='<a href="'+n+'"';return e&&(a+=' title="'+e+'"'),a+=">"+t+"</a>",a}image(n,e,t){if((n=qt(this.options.sanitize,this.options.baseUrl,n))===null)return t;let a=`<img src="${n}" alt="${t}"`;return e&&(a+=` title="${e}"`),a+=this.options.xhtml?"/>":">",a}text(n){return n}}class Qt{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class Wt{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,e){let t=n,a=0;if(this.seen.hasOwnProperty(t)){a=this.seen[n];do a++,t=n+"-"+a;while(this.seen.hasOwnProperty(t))}return e||(this.seen[n]=a,this.seen[t]=0),t}slug(n,e={}){const t=this.serialize(n);return this.getNextSafeSlug(t,e.dryrun)}}class rt{constructor(n){this.options=n||ot,this.options.renderer=this.options.renderer||new Et,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Qt,this.slugger=new Wt}static parse(n,e){return new rt(e).parse(n)}static parseInline(n,e){return new rt(e).parseInline(n)}parse(n,e=!0){let t,a,p,c,h,k,v,u,o,x,_,E,I,V,A,N,D,O,B,L="";const F=n.length;for(t=0;t<F;t++)if(x=n[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[x.type]&&(B=this.options.extensions.renderers[x.type].call({parser:this},x),B!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(x.type)))L+=B||"";else switch(x.type){case"space":continue;case"hr":L+=this.renderer.hr();continue;case"heading":L+=this.renderer.heading(this.parseInline(x.tokens),x.depth,jt(this.parseInline(x.tokens,this.textRenderer)),this.slugger);continue;case"code":L+=this.renderer.code(x.text,x.lang,x.escaped);continue;case"table":for(u="",v="",c=x.header.length,a=0;a<c;a++)v+=this.renderer.tablecell(this.parseInline(x.header[a].tokens),{header:!0,align:x.align[a]});for(u+=this.renderer.tablerow(v),o="",c=x.rows.length,a=0;a<c;a++){for(k=x.rows[a],v="",h=k.length,p=0;p<h;p++)v+=this.renderer.tablecell(this.parseInline(k[p].tokens),{header:!1,align:x.align[p]});o+=this.renderer.tablerow(v)}L+=this.renderer.table(u,o);continue;case"blockquote":o=this.parse(x.tokens),L+=this.renderer.blockquote(o);continue;case"list":for(_=x.ordered,E=x.start,I=x.loose,c=x.items.length,o="",a=0;a<c;a++)A=x.items[a],N=A.checked,D=A.task,V="",A.task&&(O=this.renderer.checkbox(N),I?A.tokens.length>0&&A.tokens[0].type==="paragraph"?(A.tokens[0].text=O+" "+A.tokens[0].text,A.tokens[0].tokens&&A.tokens[0].tokens.length>0&&A.tokens[0].tokens[0].type==="text"&&(A.tokens[0].tokens[0].text=O+" "+A.tokens[0].tokens[0].text)):A.tokens.unshift({type:"text",text:O}):V+=O),V+=this.parse(A.tokens,I),o+=this.renderer.listitem(V,D,N);L+=this.renderer.list(o,_,E);continue;case"html":L+=this.renderer.html(x.text);continue;case"paragraph":L+=this.renderer.paragraph(this.parseInline(x.tokens));continue;case"text":for(o=x.tokens?this.parseInline(x.tokens):x.text;t+1<F&&n[t+1].type==="text";)x=n[++t],o+=`
`+(x.tokens?this.parseInline(x.tokens):x.text);L+=e?this.renderer.paragraph(o):o;continue;default:{const K='Token with "'+x.type+'" type was not found.';if(this.options.silent)return void console.error(K);throw new Error(K)}}return L}parseInline(n,e){e=e||this.renderer;let t,a,p,c="";const h=n.length;for(t=0;t<h;t++)if(a=n[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(p=this.options.extensions.renderers[a.type].call({parser:this},a),p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))c+=p||"";else switch(a.type){case"escape":case"text":c+=e.text(a.text);break;case"html":c+=e.html(a.text);break;case"link":c+=e.link(a.href,a.title,this.parseInline(a.tokens,e));break;case"image":c+=e.image(a.href,a.title,a.text);break;case"strong":c+=e.strong(this.parseInline(a.tokens,e));break;case"em":c+=e.em(this.parseInline(a.tokens,e));break;case"codespan":c+=e.codespan(a.text);break;case"br":c+=e.br();break;case"del":c+=e.del(this.parseInline(a.tokens,e));break;default:{const k='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}}return c}}class _t{constructor(n){this.options=n||ot}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(n){return n}postprocess(n){return n}}function Jt(d,n){return(e,t,a)=>{typeof t=="function"&&(a=t,t=null);const p={...t},c=(function(h,k,v){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,h){const o="<p>An error occurred:</p><pre>"+Q(u.message+"",!0)+"</pre>";return k?Promise.resolve(o):v?void v(null,o):o}if(k)return Promise.reject(u);if(!v)throw u;v(u)}})((t={...M.defaults,...p}).silent,t.async,a);if(e==null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if((function(h){h&&h.sanitize&&!h.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(t),t.hooks&&(t.hooks.options=t),a){const h=t.highlight;let k;try{t.hooks&&(e=t.hooks.preprocess(e)),k=d(e,t)}catch(o){return c(o)}const v=function(o){let x;if(!o)try{t.walkTokens&&M.walkTokens(k,t.walkTokens),x=n(k,t),t.hooks&&(x=t.hooks.postprocess(x))}catch(_){o=_}return t.highlight=h,o?c(o):a(null,x)};if(!h||h.length<3||(delete t.highlight,!k.length))return v();let u=0;return M.walkTokens(k,(function(o){o.type==="code"&&(u++,setTimeout((()=>{h(o.text,o.lang,(function(x,_){if(x)return v(x);_!=null&&_!==o.text&&(o.text=_,o.escaped=!0),u--,u===0&&v()}))}),0))})),void(u===0&&v())}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(e):e).then((h=>d(h,t))).then((h=>t.walkTokens?Promise.all(M.walkTokens(h,t.walkTokens)).then((()=>h)):h)).then((h=>n(h,t))).then((h=>t.hooks?t.hooks.postprocess(h):h)).catch(c);try{t.hooks&&(e=t.hooks.preprocess(e));const h=d(e,t);t.walkTokens&&M.walkTokens(h,t.walkTokens);let k=n(h,t);return t.hooks&&(k=t.hooks.postprocess(k)),k}catch(h){return c(h)}}}function M(d,n,e){return Jt(it.lex,rt.parse)(d,n,e)}M.options=M.setOptions=function(d){var n;return M.defaults={...M.defaults,...d},n=M.defaults,ot=n,M},M.getDefaults=a0,M.defaults=ot,M.use=function(...d){const n=M.defaults.extensions||{renderers:{},childTokens:{}};d.forEach((e=>{const t={...e};if(t.async=M.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach((a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const p=n.renderers[a.name];n.renderers[a.name]=p?function(...c){let h=a.renderer.apply(this,c);return h===!1&&(h=p.apply(this,c)),h}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)})),t.extensions=n),e.renderer){const a=M.defaults.renderer||new Et;for(const p in e.renderer){const c=a[p];a[p]=(...h)=>{let k=e.renderer[p].apply(a,h);return k===!1&&(k=c.apply(a,h)),k}}t.renderer=a}if(e.tokenizer){const a=M.defaults.tokenizer||new Tt;for(const p in e.tokenizer){const c=a[p];a[p]=(...h)=>{let k=e.tokenizer[p].apply(a,h);return k===!1&&(k=c.apply(a,h)),k}}t.tokenizer=a}if(e.hooks){const a=M.defaults.hooks||new _t;for(const p in e.hooks){const c=a[p];_t.passThroughHooks.has(p)?a[p]=h=>{if(M.defaults.async)return Promise.resolve(e.hooks[p].call(a,h)).then((v=>c.call(a,v)));const k=e.hooks[p].call(a,h);return c.call(a,k)}:a[p]=(...h)=>{let k=e.hooks[p].apply(a,h);return k===!1&&(k=c.apply(a,h)),k}}t.hooks=a}if(e.walkTokens){const a=M.defaults.walkTokens;t.walkTokens=function(p){let c=[];return c.push(e.walkTokens.call(this,p)),a&&(c=c.concat(a.call(this,p))),c}}M.setOptions(t)}))},M.walkTokens=function(d,n){let e=[];for(const t of d)switch(e=e.concat(n.call(M,t)),t.type){case"table":for(const a of t.header)e=e.concat(M.walkTokens(a.tokens,n));for(const a of t.rows)for(const p of a)e=e.concat(M.walkTokens(p.tokens,n));break;case"list":e=e.concat(M.walkTokens(t.items,n));break;default:M.defaults.extensions&&M.defaults.extensions.childTokens&&M.defaults.extensions.childTokens[t.type]?M.defaults.extensions.childTokens[t.type].forEach((function(a){e=e.concat(M.walkTokens(t[a],n))})):t.tokens&&(e=e.concat(M.walkTokens(t.tokens,n)))}return e},M.parseInline=Jt(it.lexInline,rt.parseInline),M.Parser=rt,M.parser=rt.parse,M.Renderer=Et,M.TextRenderer=Qt,M.Lexer=it,M.lexer=it.lex,M.Tokenizer=Tt,M.Slugger=Wt,M.Hooks=_t,M.parse=M,M.options,M.setOptions,M.use,M.walkTokens,M.parseInline,rt.parse,it.lex;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const Dt="__SCRIPT_END__",gt=/\[\s*((\d*):)?\s*([\s\d,|-]*)\]/,w0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},x0=()=>{let d;function n(u){let o=(u.querySelector("[data-template]")||u.querySelector("script")||u).textContent;o=o.replace(new RegExp(Dt,"g"),"<\/script>");const x=o.match(/^\n?(\s*)/)[1].length,_=o.match(/^\n?(\t*)/)[1].length;return _>0?o=o.replace(new RegExp("\\n?\\t{"+_+"}(.*)","g"),(function(E,I){return`
`+I})):x>1&&(o=o.replace(new RegExp("\\n? {"+x+"}(.*)","g"),(function(E,I){return`
`+I}))),o}function e(u){const o=u.attributes,x=[];for(let _=0,E=o.length;_<E;_++){const I=o[_].name,V=o[_].value;/data\-(markdown|separator|vertical|notes)/gi.test(I)||(V?x.push(I+'="'+V+'"'):x.push(I))}return x.join(" ")}function t(u){const o=d?.getConfig?.().markdown;return(u=u||{}).separator=u.separator||o?.separator||`\r?
---\r?
`,u.verticalSeparator=u.verticalSeparator||o?.verticalSeparator||null,u.notesSeparator=u.notesSeparator||o?.notesSeparator||"^s*notes?:",u.attributes=u.attributes||"",u}function a(u,o){o=t(o);const x=u.split(new RegExp(o.notesSeparator,"mgi"));return x.length===2&&(u=x[0]+'<aside class="notes">'+M(x[1].trim())+"</aside>"),'<script type="text/template">'+(u=u.replace(/<\/script>/g,Dt))+"<\/script>"}function p(u,o){o=t(o);const x=new RegExp(o.separator+(o.verticalSeparator?"|"+o.verticalSeparator:""),"mg"),_=new RegExp(o.separator);let E,I,V,A=0,N=!0,D=[];for(;E=x.exec(u);)I=_.test(E[0]),!I&&N&&D.push([]),V=u.substring(A,E.index),I&&N?D.push(V):D[D.length-1].push(V),A=x.lastIndex,N=I;(N?D:D[D.length-1]).push(u.substring(A));let O="";for(let B=0,L=D.length;B<L;B++)D[B]instanceof Array?(O+="<section "+o.attributes+">",D[B].forEach((function(F){O+="<section data-markdown>"+a(F,o)+"</section>"})),O+="</section>"):O+="<section "+o.attributes+" data-markdown>"+a(D[B],o)+"</section>";return O}function c(u){return new Promise((function(o){const x=[];[].slice.call(u.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach((function(_,E){_.getAttribute("data-markdown").length?x.push((function(I){return new Promise((function(V,A){const N=new XMLHttpRequest,D=I.getAttribute("data-markdown"),O=I.getAttribute("data-charset");O!==null&&O!==""&&N.overrideMimeType("text/html; charset="+O),N.onreadystatechange=(function(B,L){L.readyState===4&&(L.status>=200&&L.status<300||L.status===0?V(L,D):A(L,D))}).bind(this,I,N),N.open("GET",D,!0);try{N.send()}catch(B){console.warn("Failed to get the Markdown file "+D+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+B),V(N,D)}}))})(_).then((function(I,V){_.outerHTML=p(I.responseText,{separator:_.getAttribute("data-separator"),verticalSeparator:_.getAttribute("data-separator-vertical"),notesSeparator:_.getAttribute("data-separator-notes"),attributes:e(_)})}),(function(I,V){_.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+V+" failed with HTTP status "+I.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"}))):_.outerHTML=p(n(_),{separator:_.getAttribute("data-separator"),verticalSeparator:_.getAttribute("data-separator-vertical"),notesSeparator:_.getAttribute("data-separator-notes"),attributes:e(_)})})),Promise.all(x).then(o)}))}function h(u,o,x){const _=new RegExp(x,"mg"),E=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg");let I,V,A=u.nodeValue;if(I=_.exec(A)){const N=I[1];for(A=A.substring(0,I.index)+A.substring(_.lastIndex),u.nodeValue=A;V=E.exec(N);)V[2]?o.setAttribute(V[1],V[2]):o.setAttribute(V[3],"");return!0}return!1}function k(u,o,x,_,E){if(o!==null&&o.childNodes!==void 0&&o.childNodes.length>0){let I=o;for(let V=0;V<o.childNodes.length;V++){const A=o.childNodes[V];if(V>0){let D=V-1;for(;D>=0;){const O=o.childNodes[D];if(typeof O.setAttribute=="function"&&O.tagName!=="BR"){I=O;break}D-=1}}let N=u;A.nodeName==="section"&&(N=A,I=A),typeof A.setAttribute!="function"&&A.nodeType!==Node.COMMENT_NODE||k(N,A,I,_,E)}}o.nodeType===Node.COMMENT_NODE&&h(o,x,_)===!1&&h(o,u,E)}function v(){const u=d.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(u).forEach((function(o){o.setAttribute("data-markdown-parsed",!0);const x=o.querySelector("aside.notes"),_=n(o);o.innerHTML=M(_),k(o,o,null,o.getAttribute("data-element-attributes")||o.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",o.getAttribute("data-attributes")||o.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),x&&o.appendChild(x)})),Promise.resolve()}return{id:"markdown",init:function(u){d=u;let{renderer:o,animateLists:x,..._}=d.getConfig().markdown||{};return o||(o=new M.Renderer,o.code=(E,I)=>{let V="",A="";if(gt.test(I)){let N=I.match(gt)[2];N&&(V=`data-ln-start-from="${N.trim()}"`),A=I.match(gt)[3].trim(),A=`data-line-numbers="${A}"`,I=I.replace(gt,"").trim()}return`<pre><code ${A} ${V} class="${I}">${E=E.replace(/([&<>'"])/g,(N=>w0[N]))}</code></pre>`}),x===!0&&(o.listitem=E=>`<li class="fragment">${E}</li>`),M.setOptions({renderer:o,..._}),c(d.getRevealElement()).then(v)},processSlides:c,convertSlides:v,slidify:p,marked:M}};function b0(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var xt={exports:{}},y0=xt.exports,Zt;function v0(){return Zt||(Zt=1,(function(d,n){(function(e,t){d.exports=t()})(y0,(function(){function e(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let t={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const a=/[&<>"']/,p=new RegExp(a.source,"g"),c=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,h=new RegExp(c.source,"g"),k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},v=R=>k[R];function u(R,r){if(r){if(a.test(R))return R.replace(p,v)}else if(c.test(R))return R.replace(h,v);return R}const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function x(R){return R.replace(o,((r,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):""))}const _=/(^|[^\[])\^/g;function E(R,r){R=typeof R=="string"?R:R.source,r=r||"";const s={replace:(i,l)=>(l=(l=l.source||l).replace(_,"$1"),R=R.replace(i,l),s),getRegex:()=>new RegExp(R,r)};return s}const I=/[^\w:]/g,V=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function A(R,r,s){if(R){let i;try{i=decodeURIComponent(x(s)).replace(I,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}r&&!V.test(s)&&(s=(function(i,l){N[" "+i]||(D.test(i)?N[" "+i]=i+"/":N[" "+i]=K(i,"/",!0)),i=N[" "+i];const m=i.indexOf(":")===-1;return l.substring(0,2)==="//"?m?l:i.replace(O,"$1")+l:l.charAt(0)==="/"?m?l:i.replace(B,"$1")+l:i+l})(r,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const N={},D=/^[^:]+:\/*[^/]*$/,O=/^([^:]+:)[\s\S]*$/,B=/^([^:]+:\/*[^/]*)[\s\S]*$/,L={exec:function(){}};function F(R,r){const s=R.replace(/\|/g,((l,m,g)=>{let f=!1,w=m;for(;--w>=0&&g[w]==="\\";)f=!f;return f?"|":" |"})).split(/ \|/);let i=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>r)s.splice(r);else for(;s.length<r;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(/\\\|/g,"|");return s}function K(R,r,s){const i=R.length;if(i===0)return"";let l=0;for(;l<i;){const m=R.charAt(i-l-1);if(m!==r||s){if(m===r||!s)break;l++}else l++}return R.slice(0,i-l)}function X(R,r){if(r<1)return"";let s="";for(;r>1;)1&r&&(s+=R),r>>=1,R+=R;return s+R}function tt(R,r,s,i){const l=r.href,m=r.title?u(r.title):null,g=R[1].replace(/\\([\[\]])/g,"$1");if(R[0].charAt(0)!=="!"){i.state.inLink=!0;const f={type:"link",raw:s,href:l,title:m,text:g,tokens:i.inlineTokens(g)};return i.state.inLink=!1,f}return{type:"image",raw:s,href:l,title:m,text:u(g)}}class at{constructor(r){this.options=r||t}space(r){const s=this.rules.block.newline.exec(r);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(r){const s=this.rules.block.code.exec(r);if(s){const i=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?i:K(i,`
`)}}}fences(r){const s=this.rules.block.fences.exec(r);if(s){const i=s[0],l=(function(m,g){const f=m.match(/^(\s+)(?:```)/);if(f===null)return g;const w=f[1];return g.split(`
`).map((y=>{const T=y.match(/^\s+/);if(T===null)return y;const[b]=T;return b.length>=w.length?y.slice(w.length):y})).join(`
`)})(i,s[3]||"");return{type:"code",raw:i,lang:s[2]?s[2].trim().replace(this.rules.inline._escapes,"$1"):s[2],text:l}}}heading(r){const s=this.rules.block.heading.exec(r);if(s){let i=s[2].trim();if(/#$/.test(i)){const l=K(i,"#");this.options.pedantic?i=l.trim():l&&!/ $/.test(l)||(i=l.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(r){const s=this.rules.block.hr.exec(r);if(s)return{type:"hr",raw:s[0]}}blockquote(r){const s=this.rules.block.blockquote.exec(r);if(s){const i=s[0].replace(/^ *>[ \t]?/gm,""),l=this.lexer.state.top;this.lexer.state.top=!0;const m=this.lexer.blockTokens(i);return this.lexer.state.top=l,{type:"blockquote",raw:s[0],tokens:m,text:i}}}list(r){let s=this.rules.block.list.exec(r);if(s){let i,l,m,g,f,w,y,T,b,S,U,G,W=s[1].trim();const Y=W.length>1,P={type:"list",raw:"",ordered:Y,start:Y?+W.slice(0,-1):"",loose:!1,items:[]};W=Y?`\\d{1,9}\\${W.slice(-1)}`:`\\${W}`,this.options.pedantic&&(W=Y?W:"[*+-]");const pt=new RegExp(`^( {0,3}${W})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;r&&(G=!1,s=pt.exec(r))&&!this.rules.block.hr.test(r);){if(i=s[0],r=r.substring(i.length),T=s[2].split(`
`,1)[0].replace(/^\t+/,(J=>" ".repeat(3*J.length))),b=r.split(`
`,1)[0],this.options.pedantic?(g=2,U=T.trimLeft()):(g=s[2].search(/[^ ]/),g=g>4?1:g,U=T.slice(g),g+=s[1].length),w=!1,!T&&/^ *$/.test(b)&&(i+=b+`
`,r=r.substring(b.length+1),G=!0),!G){const J=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),st=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),j=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),dt=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;r&&(S=r.split(`
`,1)[0],b=S,this.options.pedantic&&(b=b.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!j.test(b))&&!dt.test(b)&&!J.test(b)&&!st.test(r);){if(b.search(/[^ ]/)>=g||!b.trim())U+=`
`+b.slice(g);else{if(w||T.search(/[^ ]/)>=4||j.test(T)||dt.test(T)||st.test(T))break;U+=`
`+b}w||b.trim()||(w=!0),i+=S+`
`,r=r.substring(S.length+1),T=b.slice(g)}}P.loose||(y?P.loose=!0:/\n *\n *$/.test(i)&&(y=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(U),l&&(m=l[0]!=="[ ] ",U=U.replace(/^\[[ xX]\] +/,""))),P.items.push({type:"list_item",raw:i,task:!!l,checked:m,loose:!1,text:U}),P.raw+=i}P.items[P.items.length-1].raw=i.trimRight(),P.items[P.items.length-1].text=U.trimRight(),P.raw=P.raw.trimRight();const ht=P.items.length;for(f=0;f<ht;f++)if(this.lexer.state.top=!1,P.items[f].tokens=this.lexer.blockTokens(P.items[f].text,[]),!P.loose){const J=P.items[f].tokens.filter((j=>j.type==="space")),st=J.length>0&&J.some((j=>/\n.*\n/.test(j.raw)));P.loose=st}if(P.loose)for(f=0;f<ht;f++)P.items[f].loose=!0;return P}}html(r){const s=this.rules.block.html.exec(r);if(s){const i={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};if(this.options.sanitize){const l=this.options.sanitizer?this.options.sanitizer(s[0]):u(s[0]);i.type="paragraph",i.text=l,i.tokens=this.lexer.inline(l)}return i}}def(r){const s=this.rules.block.def.exec(r);if(s){const i=s[1].toLowerCase().replace(/\s+/g," "),l=s[2]?s[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",m=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline._escapes,"$1"):s[3];return{type:"def",tag:i,raw:s[0],href:l,title:m}}}table(r){const s=this.rules.block.table.exec(r);if(s){const i={type:"table",header:F(s[1]).map((l=>({text:l}))),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=s[0];let l,m,g,f,w=i.align.length;for(l=0;l<w;l++)/^ *-+: *$/.test(i.align[l])?i.align[l]="right":/^ *:-+: *$/.test(i.align[l])?i.align[l]="center":/^ *:-+ *$/.test(i.align[l])?i.align[l]="left":i.align[l]=null;for(w=i.rows.length,l=0;l<w;l++)i.rows[l]=F(i.rows[l],i.header.length).map((y=>({text:y})));for(w=i.header.length,m=0;m<w;m++)i.header[m].tokens=this.lexer.inline(i.header[m].text);for(w=i.rows.length,m=0;m<w;m++)for(f=i.rows[m],g=0;g<f.length;g++)f[g].tokens=this.lexer.inline(f[g].text);return i}}}lheading(r){const s=this.rules.block.lheading.exec(r);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(r){const s=this.rules.block.paragraph.exec(r);if(s){const i=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:i,tokens:this.lexer.inline(i)}}}text(r){const s=this.rules.block.text.exec(r);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(r){const s=this.rules.inline.escape.exec(r);if(s)return{type:"escape",raw:s[0],text:u(s[1])}}tag(r){const s=this.rules.inline.tag.exec(r);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):u(s[0]):s[0]}}link(r){const s=this.rules.inline.link.exec(r);if(s){const i=s[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const g=K(i.slice(0,-1),"\\");if((i.length-g.length)%2==0)return}else{const g=(function(f,w){if(f.indexOf(w[1])===-1)return-1;const y=f.length;let T=0,b=0;for(;b<y;b++)if(f[b]==="\\")b++;else if(f[b]===w[0])T++;else if(f[b]===w[1]&&(T--,T<0))return b;return-1})(s[2],"()");if(g>-1){const f=(s[0].indexOf("!")===0?5:4)+s[1].length+g;s[2]=s[2].substring(0,g),s[0]=s[0].substring(0,f).trim(),s[3]=""}}let l=s[2],m="";if(this.options.pedantic){const g=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);g&&(l=g[1],m=g[3])}else m=s[3]?s[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(l=this.options.pedantic&&!/>$/.test(i)?l.slice(1):l.slice(1,-1)),tt(s,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:m&&m.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(r,s){let i;if((i=this.rules.inline.reflink.exec(r))||(i=this.rules.inline.nolink.exec(r))){let l=(i[2]||i[1]).replace(/\s+/g," ");if(l=s[l.toLowerCase()],!l){const m=i[0].charAt(0);return{type:"text",raw:m,text:m}}return tt(i,l,i[0],this.lexer)}}emStrong(r,s,i=""){let l=this.rules.inline.emStrong.lDelim.exec(r);if(!l||l[3]&&i.match(/[\p{L}\p{N}]/u))return;const m=l[1]||l[2]||"";if(!m||m&&(i===""||this.rules.inline.punctuation.exec(i))){const g=l[0].length-1;let f,w,y=g,T=0;const b=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(b.lastIndex=0,s=s.slice(-1*r.length+g);(l=b.exec(s))!=null;){if(f=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!f)continue;if(w=f.length,l[3]||l[4]){y+=w;continue}if((l[5]||l[6])&&g%3&&!((g+w)%3)){T+=w;continue}if(y-=w,y>0)continue;w=Math.min(w,w+y+T);const S=r.slice(0,g+l.index+(l[0].length-f.length)+w);if(Math.min(g,w)%2){const G=S.slice(1,-1);return{type:"em",raw:S,text:G,tokens:this.lexer.inlineTokens(G)}}const U=S.slice(2,-2);return{type:"strong",raw:S,text:U,tokens:this.lexer.inlineTokens(U)}}}}codespan(r){const s=this.rules.inline.code.exec(r);if(s){let i=s[2].replace(/\n/g," ");const l=/[^ ]/.test(i),m=/^ /.test(i)&&/ $/.test(i);return l&&m&&(i=i.substring(1,i.length-1)),i=u(i,!0),{type:"codespan",raw:s[0],text:i}}}br(r){const s=this.rules.inline.br.exec(r);if(s)return{type:"br",raw:s[0]}}del(r){const s=this.rules.inline.del.exec(r);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(r,s){const i=this.rules.inline.autolink.exec(r);if(i){let l,m;return i[2]==="@"?(l=u(this.options.mangle?s(i[1]):i[1]),m="mailto:"+l):(l=u(i[1]),m=l),{type:"link",raw:i[0],text:l,href:m,tokens:[{type:"text",raw:l,text:l}]}}}url(r,s){let i;if(i=this.rules.inline.url.exec(r)){let l,m;if(i[2]==="@")l=u(this.options.mangle?s(i[0]):i[0]),m="mailto:"+l;else{let g;do g=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(g!==i[0]);l=u(i[0]),m=i[1]==="www."?"http://"+i[0]:i[0]}return{type:"link",raw:i[0],text:l,href:m,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(r,s){const i=this.rules.inline.text.exec(r);if(i){let l;return l=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):u(i[0]):i[0]:u(this.options.smartypants?s(i[0]):i[0]),{type:"text",raw:i[0],text:l}}}}const H={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:L,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};H.def=E(H.def).replace("label",H._label).replace("title",H._title).getRegex(),H.bullet=/(?:[*+-]|\d{1,9}[.)])/,H.listItemStart=E(/^( *)(bull) */).replace("bull",H.bullet).getRegex(),H.list=E(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex(),H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",H._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,H.html=E(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),H.paragraph=E(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex(),H.blockquote=E(H.blockquote).replace("paragraph",H.paragraph).getRegex(),H.normal={...H},H.gfm={...H.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},H.gfm.table=E(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex(),H.gfm.paragraph=E(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",H.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex(),H.pedantic={...H.normal,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:L,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(H.normal._paragraph).replace("hr",H.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const z={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:L,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:L,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function lt(R){return R.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ct(R){let r,s,i="";const l=R.length;for(r=0;r<l;r++)s=R.charCodeAt(r),Math.random()>.5&&(s="x"+s.toString(16)),i+="&#"+s+";";return i}z._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",z.punctuation=E(z.punctuation).replace(/punctuation/g,z._punctuation).getRegex(),z.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,z.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,z._comment=E(H._comment).replace("(?:-->|$)","-->").getRegex(),z.emStrong.lDelim=E(z.emStrong.lDelim).replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimAst=E(z.emStrong.rDelimAst,"g").replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimUnd=E(z.emStrong.rDelimUnd,"g").replace(/punct/g,z._punctuation).getRegex(),z._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,z._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,z._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,z.autolink=E(z.autolink).replace("scheme",z._scheme).replace("email",z._email).getRegex(),z._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,z.tag=E(z.tag).replace("comment",z._comment).replace("attribute",z._attribute).getRegex(),z._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,z._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,z._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,z.link=E(z.link).replace("label",z._label).replace("href",z._href).replace("title",z._title).getRegex(),z.reflink=E(z.reflink).replace("label",z._label).replace("ref",H._label).getRegex(),z.nolink=E(z.nolink).replace("ref",H._label).getRegex(),z.reflinkSearch=E(z.reflinkSearch,"g").replace("reflink",z.reflink).replace("nolink",z.nolink).getRegex(),z.normal={...z},z.pedantic={...z.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",z._label).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",z._label).getRegex()},z.gfm={...z.normal,escape:E(z.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},z.gfm.url=E(z.gfm.url,"i").replace("email",z.gfm._extended_email).getRegex(),z.breaks={...z.gfm,br:E(z.br).replace("{2,}","*").getRegex(),text:E(z.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class et{constructor(r){this.tokens=[],this.tokens.links=Object.create(null),this.options=r||t,this.options.tokenizer=this.options.tokenizer||new at,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:H.normal,inline:z.normal};this.options.pedantic?(s.block=H.pedantic,s.inline=z.pedantic):this.options.gfm&&(s.block=H.gfm,this.options.breaks?s.inline=z.breaks:s.inline=z.gfm),this.tokenizer.rules=s}static get rules(){return{block:H,inline:z}}static lex(r,s){return new et(s).lex(r)}static lexInline(r,s){return new et(s).inlineTokens(r)}lex(r){let s;for(r=r.replace(/\r\n|\r/g,`
`),this.blockTokens(r,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(r,s=[]){let i,l,m,g;for(r=this.options.pedantic?r.replace(/\t/g,"    ").replace(/^ +$/gm,""):r.replace(/^( *)(\t+)/gm,((f,w,y)=>w+"    ".repeat(y.length)));r;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((f=>!!(i=f.call({lexer:this},r,s))&&(r=r.substring(i.raw.length),s.push(i),!0)))))if(i=this.tokenizer.space(r))r=r.substring(i.raw.length),i.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(i);else if(i=this.tokenizer.code(r))r=r.substring(i.raw.length),l=s[s.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?s.push(i):(l.raw+=`
`+i.raw,l.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(i=this.tokenizer.fences(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.heading(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.hr(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.blockquote(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.list(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.html(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.def(r))r=r.substring(i.raw.length),l=s[s.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(l.raw+=`
`+i.raw,l.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(i=this.tokenizer.table(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.lheading(r))r=r.substring(i.raw.length),s.push(i);else{if(m=r,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const w=r.slice(1);let y;this.options.extensions.startBlock.forEach((function(T){y=T.call({lexer:this},w),typeof y=="number"&&y>=0&&(f=Math.min(f,y))})),f<1/0&&f>=0&&(m=r.substring(0,f+1))}if(this.state.top&&(i=this.tokenizer.paragraph(m)))l=s[s.length-1],g&&l.type==="paragraph"?(l.raw+=`
`+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):s.push(i),g=m.length!==r.length,r=r.substring(i.raw.length);else if(i=this.tokenizer.text(r))r=r.substring(i.raw.length),l=s[s.length-1],l&&l.type==="text"?(l.raw+=`
`+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):s.push(i);else if(r){const f="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(f);break}throw new Error(f)}}return this.state.top=!0,s}inline(r,s=[]){return this.inlineQueue.push({src:r,tokens:s}),s}inlineTokens(r,s=[]){let i,l,m,g,f,w,y=r;if(this.tokens.links){const T=Object.keys(this.tokens.links);if(T.length>0)for(;(g=this.tokenizer.rules.inline.reflinkSearch.exec(y))!=null;)T.includes(g[0].slice(g[0].lastIndexOf("[")+1,-1))&&(y=y.slice(0,g.index)+"["+X("a",g[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(g=this.tokenizer.rules.inline.blockSkip.exec(y))!=null;)y=y.slice(0,g.index)+"["+X("a",g[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(g=this.tokenizer.rules.inline.escapedEmSt.exec(y))!=null;)y=y.slice(0,g.index+g[0].length-2)+"++"+y.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;r;)if(f||(w=""),f=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((T=>!!(i=T.call({lexer:this},r,s))&&(r=r.substring(i.raw.length),s.push(i),!0)))))if(i=this.tokenizer.escape(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.tag(r))r=r.substring(i.raw.length),l=s[s.length-1],l&&i.type==="text"&&l.type==="text"?(l.raw+=i.raw,l.text+=i.text):s.push(i);else if(i=this.tokenizer.link(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.reflink(r,this.tokens.links))r=r.substring(i.raw.length),l=s[s.length-1],l&&i.type==="text"&&l.type==="text"?(l.raw+=i.raw,l.text+=i.text):s.push(i);else if(i=this.tokenizer.emStrong(r,y,w))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.codespan(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.br(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.del(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.autolink(r,ct))r=r.substring(i.raw.length),s.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(r,ct))){if(m=r,this.options.extensions&&this.options.extensions.startInline){let T=1/0;const b=r.slice(1);let S;this.options.extensions.startInline.forEach((function(U){S=U.call({lexer:this},b),typeof S=="number"&&S>=0&&(T=Math.min(T,S))})),T<1/0&&T>=0&&(m=r.substring(0,T+1))}if(i=this.tokenizer.inlineText(m,lt))r=r.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(w=i.raw.slice(-1)),f=!0,l=s[s.length-1],l&&l.type==="text"?(l.raw+=i.raw,l.text+=i.text):s.push(i);else if(r){const T="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(T);break}throw new Error(T)}}else r=r.substring(i.raw.length),s.push(i);return s}}class yt{constructor(r){this.options=r||t}code(r,s,i){const l=(s||"").match(/\S*/)[0];if(this.options.highlight){const m=this.options.highlight(r,l);m!=null&&m!==r&&(i=!0,r=m)}return r=r.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+u(l)+'">'+(i?r:u(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:u(r,!0))+`</code></pre>
`}blockquote(r){return`<blockquote>
${r}</blockquote>
`}html(r){return r}heading(r,s,i,l){return this.options.headerIds?`<h${s} id="${this.options.headerPrefix+l.slug(i)}">${r}</h${s}>
`:`<h${s}>${r}</h${s}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(r,s,i){const l=s?"ol":"ul";return"<"+l+(s&&i!==1?' start="'+i+'"':"")+`>
`+r+"</"+l+`>
`}listitem(r){return`<li>${r}</li>
`}checkbox(r){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(r){return`<p>${r}</p>
`}table(r,s){return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+s+`</table>
`}tablerow(r){return`<tr>
${r}</tr>
`}tablecell(r,s){const i=s.header?"th":"td";return(s.align?`<${i} align="${s.align}">`:`<${i}>`)+r+`</${i}>
`}strong(r){return`<strong>${r}</strong>`}em(r){return`<em>${r}</em>`}codespan(r){return`<code>${r}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(r){return`<del>${r}</del>`}link(r,s,i){if((r=A(this.options.sanitize,this.options.baseUrl,r))===null)return i;let l='<a href="'+r+'"';return s&&(l+=' title="'+s+'"'),l+=">"+i+"</a>",l}image(r,s,i){if((r=A(this.options.sanitize,this.options.baseUrl,r))===null)return i;let l=`<img src="${r}" alt="${i}"`;return s&&(l+=` title="${s}"`),l+=this.options.xhtml?"/>":">",l}text(r){return r}}class Rt{strong(r){return r}em(r){return r}codespan(r){return r}del(r){return r}html(r){return r}text(r){return r}link(r,s,i){return""+i}image(r,s,i){return""+i}br(){return""}}class Lt{constructor(){this.seen={}}serialize(r){return r.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(r,s){let i=r,l=0;if(this.seen.hasOwnProperty(i)){l=this.seen[r];do l++,i=r+"-"+l;while(this.seen.hasOwnProperty(i))}return s||(this.seen[r]=l,this.seen[i]=0),i}slug(r,s={}){const i=this.serialize(r);return this.getNextSafeSlug(i,s.dryrun)}}class nt{constructor(r){this.options=r||t,this.options.renderer=this.options.renderer||new yt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Rt,this.slugger=new Lt}static parse(r,s){return new nt(s).parse(r)}static parseInline(r,s){return new nt(s).parseInline(r)}parse(r,s=!0){let i,l,m,g,f,w,y,T,b,S,U,G,W,Y,P,pt,ht,J,st,j="";const dt=r.length;for(i=0;i<dt;i++)if(S=r[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[S.type]&&(st=this.options.extensions.renderers[S.type].call({parser:this},S),st!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(S.type)))j+=st||"";else switch(S.type){case"space":continue;case"hr":j+=this.renderer.hr();continue;case"heading":j+=this.renderer.heading(this.parseInline(S.tokens),S.depth,x(this.parseInline(S.tokens,this.textRenderer)),this.slugger);continue;case"code":j+=this.renderer.code(S.text,S.lang,S.escaped);continue;case"table":for(T="",y="",g=S.header.length,l=0;l<g;l++)y+=this.renderer.tablecell(this.parseInline(S.header[l].tokens),{header:!0,align:S.align[l]});for(T+=this.renderer.tablerow(y),b="",g=S.rows.length,l=0;l<g;l++){for(w=S.rows[l],y="",f=w.length,m=0;m<f;m++)y+=this.renderer.tablecell(this.parseInline(w[m].tokens),{header:!1,align:S.align[m]});b+=this.renderer.tablerow(y)}j+=this.renderer.table(T,b);continue;case"blockquote":b=this.parse(S.tokens),j+=this.renderer.blockquote(b);continue;case"list":for(U=S.ordered,G=S.start,W=S.loose,g=S.items.length,b="",l=0;l<g;l++)P=S.items[l],pt=P.checked,ht=P.task,Y="",P.task&&(J=this.renderer.checkbox(pt),W?P.tokens.length>0&&P.tokens[0].type==="paragraph"?(P.tokens[0].text=J+" "+P.tokens[0].text,P.tokens[0].tokens&&P.tokens[0].tokens.length>0&&P.tokens[0].tokens[0].type==="text"&&(P.tokens[0].tokens[0].text=J+" "+P.tokens[0].tokens[0].text)):P.tokens.unshift({type:"text",text:J}):Y+=J),Y+=this.parse(P.tokens,W),b+=this.renderer.listitem(Y,ht,pt);j+=this.renderer.list(b,U,G);continue;case"html":j+=this.renderer.html(S.text);continue;case"paragraph":j+=this.renderer.paragraph(this.parseInline(S.tokens));continue;case"text":for(b=S.tokens?this.parseInline(S.tokens):S.text;i+1<dt&&r[i+1].type==="text";)S=r[++i],b+=`
`+(S.tokens?this.parseInline(S.tokens):S.text);j+=s?this.renderer.paragraph(b):b;continue;default:{const It='Token with "'+S.type+'" type was not found.';if(this.options.silent)return void console.error(It);throw new Error(It)}}return j}parseInline(r,s){s=s||this.renderer;let i,l,m,g="";const f=r.length;for(i=0;i<f;i++)if(l=r[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(m=this.options.extensions.renderers[l.type].call({parser:this},l),m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)))g+=m||"";else switch(l.type){case"escape":case"text":g+=s.text(l.text);break;case"html":g+=s.html(l.text);break;case"link":g+=s.link(l.href,l.title,this.parseInline(l.tokens,s));break;case"image":g+=s.image(l.href,l.title,l.text);break;case"strong":g+=s.strong(this.parseInline(l.tokens,s));break;case"em":g+=s.em(this.parseInline(l.tokens,s));break;case"codespan":g+=s.codespan(l.text);break;case"br":g+=s.br();break;case"del":g+=s.del(this.parseInline(l.tokens,s));break;default:{const w='Token with "'+l.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}}return g}}class vt{constructor(r){this.options=r||t}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(r){return r}postprocess(r){return r}}function Mt(R,r){return(s,i,l)=>{typeof i=="function"&&(l=i,i=null);const m={...i},g=(function(f,w,y){return T=>{if(T.message+=`
Please report this to https://github.com/markedjs/marked.`,f){const b="<p>An error occurred:</p><pre>"+u(T.message+"",!0)+"</pre>";return w?Promise.resolve(b):y?void y(null,b):b}if(w)return Promise.reject(T);if(!y)throw T;y(T)}})((i={...C.defaults,...m}).silent,i.async,l);if(s==null)return g(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return g(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if((function(f){f&&f.sanitize&&!f.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(i),i.hooks&&(i.hooks.options=i),l){const f=i.highlight;let w;try{i.hooks&&(s=i.hooks.preprocess(s)),w=R(s,i)}catch(b){return g(b)}const y=function(b){let S;if(!b)try{i.walkTokens&&C.walkTokens(w,i.walkTokens),S=r(w,i),i.hooks&&(S=i.hooks.postprocess(S))}catch(U){b=U}return i.highlight=f,b?g(b):l(null,S)};if(!f||f.length<3||(delete i.highlight,!w.length))return y();let T=0;return C.walkTokens(w,(function(b){b.type==="code"&&(T++,setTimeout((()=>{f(b.text,b.lang,(function(S,U){if(S)return y(S);U!=null&&U!==b.text&&(b.text=U,b.escaped=!0),T--,T===0&&y()}))}),0))})),void(T===0&&y())}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(s):s).then((f=>R(f,i))).then((f=>i.walkTokens?Promise.all(C.walkTokens(f,i.walkTokens)).then((()=>f)):f)).then((f=>r(f,i))).then((f=>i.hooks?i.hooks.postprocess(f):f)).catch(g);try{i.hooks&&(s=i.hooks.preprocess(s));const f=R(s,i);i.walkTokens&&C.walkTokens(f,i.walkTokens);let w=r(f,i);return i.hooks&&(w=i.hooks.postprocess(w)),w}catch(f){return g(f)}}}function C(R,r,s){return Mt(et.lex,nt.parse)(R,r,s)}return C.options=C.setOptions=function(R){var r;return C.defaults={...C.defaults,...R},r=C.defaults,t=r,C},C.getDefaults=e,C.defaults=t,C.use=function(...R){const r=C.defaults.extensions||{renderers:{},childTokens:{}};R.forEach((s=>{const i={...s};if(i.async=C.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach((l=>{if(!l.name)throw new Error("extension name required");if(l.renderer){const m=r.renderers[l.name];r.renderers[l.name]=m?function(...g){let f=l.renderer.apply(this,g);return f===!1&&(f=m.apply(this,g)),f}:l.renderer}if(l.tokenizer){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[l.level]?r[l.level].unshift(l.tokenizer):r[l.level]=[l.tokenizer],l.start&&(l.level==="block"?r.startBlock?r.startBlock.push(l.start):r.startBlock=[l.start]:l.level==="inline"&&(r.startInline?r.startInline.push(l.start):r.startInline=[l.start]))}l.childTokens&&(r.childTokens[l.name]=l.childTokens)})),i.extensions=r),s.renderer){const l=C.defaults.renderer||new yt;for(const m in s.renderer){const g=l[m];l[m]=(...f)=>{let w=s.renderer[m].apply(l,f);return w===!1&&(w=g.apply(l,f)),w}}i.renderer=l}if(s.tokenizer){const l=C.defaults.tokenizer||new at;for(const m in s.tokenizer){const g=l[m];l[m]=(...f)=>{let w=s.tokenizer[m].apply(l,f);return w===!1&&(w=g.apply(l,f)),w}}i.tokenizer=l}if(s.hooks){const l=C.defaults.hooks||new vt;for(const m in s.hooks){const g=l[m];vt.passThroughHooks.has(m)?l[m]=f=>{if(C.defaults.async)return Promise.resolve(s.hooks[m].call(l,f)).then((y=>g.call(l,y)));const w=s.hooks[m].call(l,f);return g.call(l,w)}:l[m]=(...f)=>{let w=s.hooks[m].apply(l,f);return w===!1&&(w=g.apply(l,f)),w}}i.hooks=l}if(s.walkTokens){const l=C.defaults.walkTokens;i.walkTokens=function(m){let g=[];return g.push(s.walkTokens.call(this,m)),l&&(g=g.concat(l.call(this,m))),g}}C.setOptions(i)}))},C.walkTokens=function(R,r){let s=[];for(const i of R)switch(s=s.concat(r.call(C,i)),i.type){case"table":for(const l of i.header)s=s.concat(C.walkTokens(l.tokens,r));for(const l of i.rows)for(const m of l)s=s.concat(C.walkTokens(m.tokens,r));break;case"list":s=s.concat(C.walkTokens(i.items,r));break;default:C.defaults.extensions&&C.defaults.extensions.childTokens&&C.defaults.extensions.childTokens[i.type]?C.defaults.extensions.childTokens[i.type].forEach((function(l){s=s.concat(C.walkTokens(i[l],r))})):i.tokens&&(s=s.concat(C.walkTokens(i.tokens,r)))}return s},C.parseInline=Mt(et.lexInline,nt.parseInline),C.Parser=nt,C.parser=nt.parse,C.Renderer=yt,C.TextRenderer=Rt,C.Lexer=et,C.lexer=et.lex,C.Tokenizer=at,C.Slugger=Lt,C.Hooks=vt,C.parse=C,C.options,C.setOptions,C.use,C.walkTokens,C.parseInline,nt.parse,et.lex,()=>{let R,r,s=null;function i(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=C,s.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const f=r.getConfig().url,w=typeof f=="string"?f:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;R=setInterval((function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:r.getState(),url:w}),"*")}),500),window.addEventListener("message",m)})()}}function l(f){let w=r.getCurrentSlide(),y=w.querySelectorAll("aside.notes"),T=w.querySelector(".current-fragment"),b={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:r.getState()};if(w.hasAttribute("data-notes")&&(b.notes=w.getAttribute("data-notes"),b.whitespace="pre-wrap"),T){let S=T.querySelector("aside.notes");S?(b.notes=S.innerHTML,b.markdown=typeof S.getAttribute("data-markdown")=="string",y=null):T.hasAttribute("data-notes")&&(b.notes=T.getAttribute("data-notes"),b.whitespace="pre-wrap",y=null)}y&&y.length&&(y=Array.from(y).filter((S=>S.closest(".fragment")===null)),b.notes=y.map((S=>S.innerHTML)).join(`
`),b.markdown=y[0]&&typeof y[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(b),"*")}function m(f){if((function(w){try{return window.location.origin===w.source.location.origin}catch{return!1}})(f))try{let w=JSON.parse(f.data);w&&w.namespace==="reveal-notes"&&w.type==="connected"?(clearInterval(R),g()):w&&w.namespace==="reveal-notes"&&w.type==="call"&&(function(y,T,b){let S=r[y].apply(r,T);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:S,callId:b}),"*")})(w.methodName,w.arguments,w.callId)}catch{}}function g(){r.on("slidechanged",l),r.on("fragmentshown",l),r.on("fragmenthidden",l),r.on("overviewhidden",l),r.on("overviewshown",l),r.on("paused",l),r.on("resumed",l),r.on("previewiframe",l),r.on("previewimage",l),r.on("previewvideo",l),r.on("closeoverlay",l),l()}return{id:"notes",init:function(f){r=f,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?i():window.addEventListener("message",(w=>{if(!s&&typeof w.data=="string"){let T;try{T=JSON.parse(w.data)}catch{}T&&T.namespace==="reveal-notes"&&T.type==="heartbeat"&&(y=w.source,s&&!s.closed?s.focus():(s=y,window.addEventListener("message",m),g()))}var y})),r.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){i()})))},open:i}}}))})(xt)),xt.exports}var _0=v0();const z0=b0(_0);/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const S0=()=>{let d,n,e,t,a,p,c;function h(){n=document.createElement("div"),n.classList.add("searchbox"),n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.zIndex=10,n.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,e=n.querySelector(".searchinput"),e.style.width="240px",e.style.fontSize="14px",e.style.padding="4px 6px",e.style.color="#000",e.style.background="#fff",e.style.borderRadius="2px",e.style.border="0",e.style.outline="0",e.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",e.style["-webkit-appearance"]="none",d.getRevealElement().appendChild(n),e.addEventListener("keyup",(function(x){x.keyCode===13?(x.preventDefault(),(function(){if(p){var _=e.value;_===""?(c&&c.remove(),t=null):(c=new o("slidecontent"),t=c.apply(_),a=0)}t&&(t.length&&t.length<=a&&(a=0),t.length>a&&(d.slide(t[a].h,t[a].v),a++))})(),p=!1):p=!0}),!1),v()}function k(){n||h(),n.style.display="inline",e.focus(),e.select()}function v(){n||h(),n.style.display="none",c&&c.remove()}function u(){n||h(),n.style.display!=="inline"?k():v()}function o(x,_){var E=document.getElementById(x)||document.body,I=_||"EM",V=new RegExp("^(?:"+I+"|SCRIPT|FORM)$"),A=["#ff6","#a0ffff","#9f9","#f99","#f6f"],N=[],D=0,O="",B=[];this.setRegex=function(L){L=L.trim(),O=new RegExp("("+L+")","i")},this.getRegex=function(){return O.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(L){if(L!=null&&L&&O&&!V.test(L.nodeName)){if(L.hasChildNodes())for(var F=0;F<L.childNodes.length;F++)this.hiliteWords(L.childNodes[F]);var K,X;if(L.nodeType==3&&(K=L.nodeValue)&&(X=O.exec(K))){for(var tt=L;tt!=null&&tt.nodeName!="SECTION";)tt=tt.parentNode;var at=d.getIndices(tt),H=B.length,z=!1;for(F=0;F<H;F++)B[F].h===at.h&&B[F].v===at.v&&(z=!0);z||B.push(at),N[X[0].toLowerCase()]||(N[X[0].toLowerCase()]=A[D++%A.length]);var lt=document.createElement(I);lt.appendChild(document.createTextNode(X[0])),lt.style.backgroundColor=N[X[0].toLowerCase()],lt.style.fontStyle="inherit",lt.style.color="#000";var ct=L.splitText(X.index);ct.nodeValue=ct.nodeValue.substring(X[0].length),L.parentNode.insertBefore(lt,ct)}}},this.remove=function(){for(var L,F=document.getElementsByTagName(I);F.length&&(L=F[0]);)L.parentNode.replaceChild(L.firstChild,L)},this.apply=function(L){if(L!=null&&L)return this.remove(),this.setRegex(L),this.hiliteWords(E),B}}return{id:"search",init:x=>{d=x,d.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(_){_.key=="F"&&(_.ctrlKey||_.metaKey)&&(_.preventDefault(),u())}),!1)},open:k,close:v,toggle:u}};const $0={standard:"logo yellow_flag white_overlay",two_pane:"logo yellow_flag white_overlay blue_pane_right",about:"logo white_overlay blue_pane_left purple_half_circle_top purple_strip_bottom yellow_half_strip",touch:"logo blue_overlay touch_pane purple_blob right_e_bottom",keepintouch:"logo blue_overlay touch_pane purple_blob right_e_bottom",title:"blue_overlay yellow_flag yellow_strip purple_half_circle_bottom purple_blob right_e_top"},A0=[["purple_overlay",{logo:"part-white",links:"on-dark",background:["-light"]}],["white_overlay",{logo:"color",links:"on-light",background:["+light"]}],["black_overlay",{logo:"part-white",links:"on-dark",background:["-light"]}],["blue_overlay",{logo:"white",links:"on-blue",background:["-light"]}],["blue_pane_right",{background:["-dark","+light"]}],["blue_pane_left",{logo:"white",background:["-dark","+light"]}],["touch_pane",{logo:"color",background:["-light","+dark"]}],["purple_half_circle_top",{logo:"part-white"}]],T0=["data-background-image","data-background-video","data-background-iframe"];function E0(d){const n=(d.getAttribute("data-state")||"").split(/\s+/).filter(Boolean),e=new Set;let t=T0.some(h=>d.hasAttribute(h))?.8:1;for(const h of n){if(/^(10|[0-9])$/.test(h)){t=Number(h)/10;continue}for(const k of($0[h]||h).split(" "))e.add(k)}d.querySelector("footer")&&e.add("footer");let a="color",p=null;const c=[];for(const[h,k]of A0)e.has(h)&&(a=k.logo||a,p=k.links||p,c.push(...k.background||[]));return{show:e,opacity:t,logo:a,links:p,background:c}}function zt(d,n){const e=E0(n);d.dataset.show=[...e.show].join(" "),d.dataset.logo=e.logo,d.style.setProperty("--escience-overlay-opacity",e.opacity);const t=n.querySelector("footer");t&&(d.querySelector(".escience-footer").innerHTML=t.innerHTML),e.links?n.dataset.escienceLinks=e.links:delete n.dataset.escienceLinks;for(const a of e.background)n.classList.toggle(`has-${a.slice(1)}-background`,a[0]==="+");`${d.dataset.show}${e.logo}${e.opacity}`}function mt(d){for(const n of d.querySelectorAll(".stepper")){const e=[...n.querySelectorAll(".step")],t=e.filter(a=>!a.classList.contains("fragment")||a.classList.contains("visible")).at(-1);for(const a of e)a.classList.toggle("current-step",a===t)}}let Bt;function St(d){Bt??=Object.assign(document.createElement("template"),{innerHTML:L0});const n=Bt.content.firstElementChild.cloneNode(!0);return d.prepend(n),n}const R0=()=>{let d,n;const e=()=>{mt(d.getCurrentSlide()),d.isOverview()||zt(n,d.getCurrentSlide())},t=()=>{mt(d.getRevealElement()),e()},a=()=>mt(d.getCurrentSlide()),p=()=>d.getRevealElement().querySelectorAll(".backgrounds .escience-decorations"),c=()=>{n.dataset.show="";for(const k of d.getSlides())k.slideBackgroundElement&&zt(St(k.slideBackgroundElement),k)},h=()=>{for(const k of p())k.remove();e()};return{id:"Escience",init:k=>{if(d=k,d.isPrintView()){d.on("pdf-ready",()=>{for(const v of d.getRevealElement().querySelectorAll(".pdf-page")){const u=v.querySelector("section"),o=v.querySelector(".slide-background");mt(v),u&&o&&zt(St(o),u)}});return}n=St(d.getRevealElement()),d.on("ready",t),d.on("slidechanged",e),d.on("fragmentshown",a),d.on("fragmenthidden",a),d.on("overviewshown",c),d.on("overviewhidden",h)},destroy:()=>{if(n){d.off("ready",t),d.off("slidechanged",e),d.off("fragmentshown",a),d.off("fragmenthidden",a),d.off("overviewshown",c),d.off("overviewhidden",h);for(const k of p())k.remove();n.remove()}}}},L0=`<div class="escience-decorations">
<div class="escience-blue-pane-left"></div>
<div class="escience-blue-pane-right"></div>
<div class="escience-touch-pane">
  <h1>Let's stay<br>in touch</h1>
</div>
<div class="escience-purple-half-circle-top"></div>
<div class="escience-yellow-half-strip"></div>
<div class="escience-purple-strip-bottom"></div>
<div class="escience-logo-color escience-logo">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1">
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132" />
</svg>
</div>
<div class="escience-logo-part-white escience-logo">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   inkscape:version="1.0.2 (1.0.2+r75+1)">
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>
</div>
<div class="escience-logo-white escience-logo">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   viewBox="0 0 182.94 50.27"
   version="1.1"
>
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="72.270471"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>
</div>
<div class="escience-purple-overlay">
</div>
<div class="escience-blue-overlay">
</div>
<div class="escience-white-overlay">
</div>
<div class="escience-black-overlay">
</div>
<div class="escience-yellow-strip">
</div>
<div class="escience-yellow-flag">
  <svg viewBox="0 0 27 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <polygon id="path-1" points="0 0.132265672 26.8359 0.132265672 26.8359 33.3422209 0 33.3422209"></polygon>
        <polygon id="path-3" points="0 0.662473134 25.2148 0.662473134 25.2148 18.629294 0 18.629294"></polygon>
    </defs>
    <g id="Partners" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(0.000000, -50.000000)" id="Group-9">
            <g>
                <g id="Group-8" transform="translate(0.000000, 50.000000)">
                    <g id="Group-4">
                        <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="Clip-3"></g>
                        <path d="M25.8379,19.6216388 C25.1719,16.4541313 23.6349,13.3403403 21.2269,10.2776239 C18.5659,6.7913403 15.1599,4.20854925 11.0009,2.53365373 C7.5639,1.15375821 3.8919,0.372668657 -0.0001,0.132265672 L-0.0001,10.882594 C1.1639,11.0155642 2.2549,11.2233851 3.2109,11.5571313 C4.8269,12.1295194 6.1779,12.9123701 7.2589,13.9109672 C9.8369,16.3308478 11.1659,19.5696836 11.2539,23.6230716 L-0.0001,23.6230716 L-0.0001,33.3422209 L26.7129,33.3422209 L26.8359,33.3422209 L26.8359,29.6058478 C26.8359,26.1195642 26.5019,22.7917881 25.8379,19.6216388" id="Fill-2" fill="#FFFFFF" mask="url(#mask-2)"></path>
                    </g>
                    <g id="Group-7" transform="translate(0.000000, 39.626866)">
                        <mask id="mask-4" fill="white">
                            <use xlink:href="#path-3"></use>
                        </mask>
                        <g id="Clip-6"></g>
                        <path d="M7.1368,5.35693582 C5.9718,6.35729403 4.6648,7.05032388 3.2108,7.44042836 C2.3088,7.68259254 1.2008,7.82260746 -0.0002,7.91683134 L-0.0002,18.629294 C3.4078,18.4611 6.7038,17.8948761 9.8788,16.8918761 C13.6988,15.683697 16.9898,13.6882642 19.7308,10.9099806 C20.9788,9.63223433 22.1618,8.01017463 23.2818,6.05172687 C24.4028,4.0932791 25.0488,2.29774179 25.2148,0.662473134 L10.2548,0.662473134 C9.6728,2.50996567 8.6328,4.07566716 7.1368,5.35693582" id="Fill-5" fill="#FFFFFF" mask="url(#mask-4)"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
</div>
<div class="escience-purple-half-circle-bottom">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1">
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>

</div>
<div class="escience-purple-blob"></div>
<div class="escience-blue-strip">
  <div class="escience-footer">
  </div>
</div>
<svg class="escience-right-e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.549 662.141">
  <path id="Path_88" data-name="Path 88" d="M342.892,527.031q17.52-21.911,45.055-35.264a133.418,133.418,0,0,1,36-11.063V357.814c-33.264,2.515-63.486,9.336-90.408,20.725q-52.012,21.874-88.269,58.407-47.551,46.277-70.694,111.421-23.2,65.132-23.177,141.8,0,77.95,25.652,142.459Q202.723,897.2,251.563,943.4a314.339,314.339,0,0,0,88.213,56.587q37.073,15.944,84.176,19.965V896.642a104.455,104.455,0,0,1-25.345-8.657,178.837,178.837,0,0,1-40.683-27.369Q334.157,838.7,322.27,805.822a202.364,202.364,0,0,1-11.888-69.4h113.57V625.625H309.123q1.256-31.6,8.759-54.767Q325.384,547.762,342.892,527.031Z" transform="translate(-151.403 -357.814)" fill="#fff"/>
</svg>
</div>`,M0={class:"flex relative box-border h-full reveal bg-eScienceWhite z-10"},I0={class:"slides flex h-full w-full"},H0={"data-markdown":"","data-separator":"^\\r?\\n===\\r?\\n$","data-separator-vertical":"^\\r?\\n==\\r?\\n$","data-separator-notes":"^Note:"},C0={props:{slidescontent:{type:String,default:"Missing Document"}},methods:{stripFrontmatter(d){return d.replace(/^---$.*?^---$/ms,"")}}},q0=Kt({...C0,__name:"Slides",setup(d){const n=Xt(null);async function e(){await ut(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url),await ut(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),await ut(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url)}return Gt(()=>{console.log("Slides Mounted"),e().then(()=>ut(()=>import("./IL6PhzrQ.js"),[],import.meta.url)).then(t=>{ut(()=>import("./BmZXia10.js"),[],import.meta.url).then(a=>{const p=new t.default;n.value=p,p.initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"none",embedded:!0,showNotes:!0,plugins:[x0,a.default,z0,S0,R0]})})})}),Yt(()=>{n.value&&n.value.destroy&&n.value.destroy()}),(t,a)=>(kt(),$t("div",M0,[At("div",I0,[At("section",H0,t0(t.stripFrontmatter(d.slidescontent)),1)])]))}}),V0={},N0={key:0,class:"overflow-hidden h-full border-8 rounded-xl border-eScienceWhite z-10"},P0={key:1,class:"flex justify-center items-center"},O0={class:"flex m-4 my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12"};function D0(d,n){const e=q0,t=i0,a=r0;return kt(),n0(a,null,{default:s0(({doc:p})=>[p.type==="slides"?(kt(),$t("div",N0,[Ht(e,{slidescontent:p.plainText},null,8,["slidescontent"])])):(kt(),$t("div",P0,[At("div",O0,[Ht(t,{value:p,class:"font-body prose-lg max-w-4xl"},null,8,["value"])])]))]),_:1})}const J0=e0(V0,[["render",D0]]);export{J0 as default};
