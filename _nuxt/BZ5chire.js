var Ft=Object.defineProperty;var Qt=(b,n,t)=>n in b?Ft(b,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):b[n]=t;var wt=(b,n,t)=>Qt(b,typeof n!="symbol"?n+"":n,t);import{f as Wt,J as Yt,K as It,o as gt,c as vt,a as xt,t as Gt,_ as Kt,A as Jt,w as Xt,b as Rt}from"./DBE1dCOv.js";import{c as te,g as ee}from"./Cpj98o6Y.js";import ne from"./CjvWPv4D.js";import se from"./BjBZ49FN.js";import"./C_bTyUXa.js";import"./Dnd51l0P.js";import"./BBJFG9hq.js";import"./DVXuy6B9.js";function ie(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let lt={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Nt=/[&<>"']/,le=new RegExp(Nt.source,"g"),Ot=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,re=new RegExp(Ot.source,"g"),ae={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lt=b=>ae[b];function F(b,n){if(n){if(Nt.test(b))return b.replace(le,Lt)}else if(Ot.test(b))return b.replace(re,Lt);return b}const oe=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Pt(b){return b.replace(oe,(n,t)=>(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const ce=/(^|[^\[])\^/g;function j(b,n){b=typeof b=="string"?b:b.source,n=n||"";const t={replace:(e,r)=>(r=(r=r.source||r).replace(ce,"$1"),b=b.replace(e,r),t),getRegex:()=>new RegExp(b,n)};return t}const pe=/[^\w:]/g,he=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Bt(b,n,t){if(b){let e;try{e=decodeURIComponent(Pt(t)).replace(pe,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}n&&!he.test(t)&&(t=function(e,r){ut[" "+e]||(de.test(e)?ut[" "+e]=e+"/":ut[" "+e]=mt(e,"/",!0)),e=ut[" "+e];const h=e.indexOf(":")===-1;return r.substring(0,2)==="//"?h?r:e.replace(ue,"$1")+r:r.charAt(0)==="/"?h?r:e.replace(fe,"$1")+r:e+r}(n,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ut={},de=/^[^:]+:\/*[^/]*$/,ue=/^([^:]+:)[\s\S]*$/,fe=/^([^:]+:\/*[^/]*)[\s\S]*$/,yt={exec:function(){}};function Mt(b,n){const t=b.replace(/\|/g,(r,h,p)=>{let d=!1,w=h;for(;--w>=0&&p[w]==="\\";)d=!d;return d?"|":" |"}).split(/ \|/);let e=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;e<t.length;e++)t[e]=t[e].trim().replace(/\\\|/g,"|");return t}function mt(b,n,t){const e=b.length;if(e===0)return"";let r=0;for(;r<e;){const h=b.charAt(e-r-1);if(h!==n||t){if(h===n||!t)break;r++}else r++}return b.slice(0,e-r)}function Ht(b,n){if(n<1)return"";let t="";for(;n>1;)1&n&&(t+=b),n>>=1,b+=b;return t+b}function Ct(b,n,t,e){const r=n.href,h=n.title?F(n.title):null,p=b[1].replace(/\\([\[\]])/g,"$1");if(b[0].charAt(0)!=="!"){e.state.inLink=!0;const d={type:"link",raw:t,href:r,title:h,text:p,tokens:e.inlineTokens(p)};return e.state.inLink=!1,d}return{type:"image",raw:t,href:r,title:h,text:F(p)}}class _t{constructor(n){this.options=n||lt}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:mt(e,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const e=t[0],r=function(h,p){const d=h.match(/^(\s+)(?:```)/);if(d===null)return p;const w=d[1];return p.split(`
`).map(z=>{const f=z.match(/^\s+/);if(f===null)return z;const[o]=f;return o.length>=w.length?z.slice(w.length):z}).join(`
`)}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){const r=mt(e,"#");this.options.pedantic?e=r.trim():r&&!/ $/.test(r)||(e=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const h=this.lexer.blockTokens(e);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:h,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e,r,h,p,d,w,z,f,o,c,y,T,B=t[1].trim();const V=B.length>1,E={type:"list",raw:"",ordered:V,start:V?+B.slice(0,-1):"",loose:!1,items:[]};B=V?`\\d{1,9}\\${B.slice(-1)}`:`\\${B}`,this.options.pedantic&&(B=V?B:"[*+-]");const O=new RegExp(`^( {0,3}${B})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(T=!1,t=O.exec(n))&&!this.rules.block.hr.test(n);){if(e=t[0],n=n.substring(e.length),f=t[2].split(`
`,1)[0].replace(/^\t+/,D=>" ".repeat(3*D.length)),o=n.split(`
`,1)[0],this.options.pedantic?(p=2,y=f.trimLeft()):(p=t[2].search(/[^ ]/),p=p>4?1:p,y=f.slice(p),p+=t[1].length),w=!1,!f&&/^ *$/.test(o)&&(e+=o+`
`,n=n.substring(o.length+1),T=!0),!T){const D=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),C=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),q=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),W=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;n&&(c=n.split(`
`,1)[0],o=c,this.options.pedantic&&(o=o.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!q.test(o))&&!W.test(o)&&!D.test(o)&&!C.test(n);){if(o.search(/[^ ]/)>=p||!o.trim())y+=`
`+o.slice(p);else{if(w||f.search(/[^ ]/)>=4||q.test(f)||W.test(f)||C.test(f))break;y+=`
`+o}w||o.trim()||(w=!0),e+=c+`
`,n=n.substring(c.length+1),f=o.slice(p)}}E.loose||(z?E.loose=!0:/\n *\n *$/.test(e)&&(z=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(y),r&&(h=r[0]!=="[ ] ",y=y.replace(/^\[[ xX]\] +/,""))),E.items.push({type:"list_item",raw:e,task:!!r,checked:h,loose:!1,text:y}),E.raw+=e}E.items[E.items.length-1].raw=e.trimRight(),E.items[E.items.length-1].text=y.trimRight(),E.raw=E.raw.trimRight();const P=E.items.length;for(d=0;d<P;d++)if(this.lexer.state.top=!1,E.items[d].tokens=this.lexer.blockTokens(E.items[d].text,[]),!E.loose){const D=E.items[d].tokens.filter(q=>q.type==="space"),C=D.length>0&&D.some(q=>/\n.*\n/.test(q.raw));E.loose=C}if(E.loose)for(d=0;d<P;d++)E.items[d].loose=!0;return E}}html(n){const t=this.rules.block.html.exec(n);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(t[0]):F(t[0]);e.type="paragraph",e.text=r,e.tokens=this.lexer.inline(r)}return e}}def(n){const t=this.rules.block.def.exec(n);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",h=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:h}}}table(n){const t=this.rules.block.table.exec(n);if(t){const e={type:"table",header:Mt(t[1]).map(r=>({text:r})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,h,p,d,w=e.align.length;for(r=0;r<w;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(w=e.rows.length,r=0;r<w;r++)e.rows[r]=Mt(e.rows[r],e.header.length).map(z=>({text:z}));for(w=e.header.length,h=0;h<w;h++)e.header[h].tokens=this.lexer.inline(e.header[h].text);for(w=e.rows.length,h=0;h<w;h++)for(d=e.rows[h],p=0;p<d.length;p++)d[p].tokens=this.lexer.inline(d[p].text);return e}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:F(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):F(t[0]):t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const p=mt(e.slice(0,-1),"\\");if((e.length-p.length)%2==0)return}else{const p=function(d,w){if(d.indexOf(w[1])===-1)return-1;const z=d.length;let f=0,o=0;for(;o<z;o++)if(d[o]==="\\")o++;else if(d[o]===w[0])f++;else if(d[o]===w[1]&&(f--,f<0))return o;return-1}(t[2],"()");if(p>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+p;t[2]=t[2].substring(0,p),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let r=t[2],h="";if(this.options.pedantic){const p=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);p&&(r=p[1],h=p[3])}else h=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),Ct(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:h&&h.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let r=(e[2]||e[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r){const h=e[0].charAt(0);return{type:"text",raw:h,text:h}}return Ct(e,r,e[0],this.lexer)}}emStrong(n,t,e=""){let r=this.rules.inline.emStrong.lDelim.exec(n);if(!r||r[3]&&e.match(/[\p{L}\p{N}]/u))return;const h=r[1]||r[2]||"";if(!h||h&&(e===""||this.rules.inline.punctuation.exec(e))){const p=r[0].length-1;let d,w,z=p,f=0;const o=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,t=t.slice(-1*n.length+p);(r=o.exec(t))!=null;){if(d=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!d)continue;if(w=d.length,r[3]||r[4]){z+=w;continue}if((r[5]||r[6])&&p%3&&!((p+w)%3)){f+=w;continue}if(z-=w,z>0)continue;w=Math.min(w,w+z+f);const c=n.slice(0,p+r.index+(r[0].length-d.length)+w);if(Math.min(p,w)%2){const T=c.slice(1,-1);return{type:"em",raw:c,text:T,tokens:this.lexer.inlineTokens(T)}}const y=c.slice(2,-2);return{type:"strong",raw:c,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," ");const r=/[^ ]/.test(e),h=/^ /.test(e)&&/ $/.test(e);return r&&h&&(e=e.substring(1,e.length-1)),e=F(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){const e=this.rules.inline.autolink.exec(n);if(e){let r,h;return e[2]==="@"?(r=F(this.options.mangle?t(e[1]):e[1]),h="mailto:"+r):(r=F(e[1]),h=r),{type:"link",raw:e[0],text:r,href:h,tokens:[{type:"text",raw:r,text:r}]}}}url(n,t){let e;if(e=this.rules.inline.url.exec(n)){let r,h;if(e[2]==="@")r=F(this.options.mangle?t(e[0]):e[0]),h="mailto:"+r;else{let p;do p=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(p!==e[0]);r=F(e[0]),h=e[1]==="www."?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:r,href:h,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n,t){const e=this.rules.inline.text.exec(n);if(e){let r;return r=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):F(e[0]):e[0]:F(this.options.smartypants?t(e[0]):e[0]),{type:"text",raw:e[0],text:r}}}}const H={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:yt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};H.def=j(H.def).replace("label",H._label).replace("title",H._title).getRegex(),H.bullet=/(?:[*+-]|\d{1,9}[.)])/,H.listItemStart=j(/^( *)(bull) */).replace("bull",H.bullet).getRegex(),H.list=j(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex(),H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",H._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,H.html=j(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),H.paragraph=j(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex(),H.blockquote=j(H.blockquote).replace("paragraph",H.paragraph).getRegex(),H.normal={...H},H.gfm={...H.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},H.gfm.table=j(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex(),H.gfm.paragraph=j(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",H.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex(),H.pedantic={...H.normal,html:j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:yt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:j(H.normal._paragraph).replace("hr",H.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const A={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:yt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:yt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ge(b){return b.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function qt(b){let n,t,e="";const r=b.length;for(n=0;n<r;n++)t=b.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}A._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",A.punctuation=j(A.punctuation).replace(/punctuation/g,A._punctuation).getRegex(),A.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,A.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,A._comment=j(H._comment).replace("(?:-->|$)","-->").getRegex(),A.emStrong.lDelim=j(A.emStrong.lDelim).replace(/punct/g,A._punctuation).getRegex(),A.emStrong.rDelimAst=j(A.emStrong.rDelimAst,"g").replace(/punct/g,A._punctuation).getRegex(),A.emStrong.rDelimUnd=j(A.emStrong.rDelimUnd,"g").replace(/punct/g,A._punctuation).getRegex(),A._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,A._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,A._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,A.autolink=j(A.autolink).replace("scheme",A._scheme).replace("email",A._email).getRegex(),A._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,A.tag=j(A.tag).replace("comment",A._comment).replace("attribute",A._attribute).getRegex(),A._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,A._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,A._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,A.link=j(A.link).replace("label",A._label).replace("href",A._href).replace("title",A._title).getRegex(),A.reflink=j(A.reflink).replace("label",A._label).replace("ref",H._label).getRegex(),A.nolink=j(A.nolink).replace("ref",H._label).getRegex(),A.reflinkSearch=j(A.reflinkSearch,"g").replace("reflink",A.reflink).replace("nolink",A.nolink).getRegex(),A.normal={...A},A.pedantic={...A.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:j(/^!?\[(label)\]\((.*?)\)/).replace("label",A._label).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",A._label).getRegex()},A.gfm={...A.normal,escape:j(A.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},A.gfm.url=j(A.gfm.url,"i").replace("email",A.gfm._extended_email).getRegex(),A.breaks={...A.gfm,br:j(A.br).replace("{2,}","*").getRegex(),text:j(A.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class st{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||lt,this.options.tokenizer=this.options.tokenizer||new _t,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:H.normal,inline:A.normal};this.options.pedantic?(t.block=H.pedantic,t.inline=A.pedantic):this.options.gfm&&(t.block=H.gfm,this.options.breaks?t.inline=A.breaks:t.inline=A.gfm),this.tokenizer.rules=t}static get rules(){return{block:H,inline:A}}static lex(n,t){return new st(t).lex(n)}static lexInline(n,t){return new st(t).inlineTokens(n)}lex(n){let t;for(n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){let e,r,h,p;for(n=this.options.pedantic?n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n.replace(/^( *)(\t+)/gm,(d,w,z)=>w+"    ".repeat(z.length));n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>!!(e=d.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.space(n))n=n.substring(e.raw.length),e.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(e);else if(e=this.tokenizer.code(n))n=n.substring(e.raw.length),r=t[t.length-1],!r||r.type!=="paragraph"&&r.type!=="text"?t.push(e):(r.raw+=`
`+e.raw,r.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(e=this.tokenizer.fences(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.heading(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.hr(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.blockquote(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.list(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.html(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.def(n))n=n.substring(e.raw.length),r=t[t.length-1],!r||r.type!=="paragraph"&&r.type!=="text"?this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title}):(r.raw+=`
`+e.raw,r.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(e=this.tokenizer.table(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.lheading(n))n=n.substring(e.raw.length),t.push(e);else{if(h=n,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const w=n.slice(1);let z;this.options.extensions.startBlock.forEach(function(f){z=f.call({lexer:this},w),typeof z=="number"&&z>=0&&(d=Math.min(d,z))}),d<1/0&&d>=0&&(h=n.substring(0,d+1))}if(this.state.top&&(e=this.tokenizer.paragraph(h)))r=t[t.length-1],p&&r.type==="paragraph"?(r.raw+=`
`+e.raw,r.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(e),p=h.length!==n.length,n=n.substring(e.raw.length);else if(e=this.tokenizer.text(n))n=n.substring(e.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+e.raw,r.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(e);else if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}throw new Error(d)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,r,h,p,d,w,z=n;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(z))!=null;)f.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(z=z.slice(0,p.index)+"["+Ht("a",p[0].length-2)+"]"+z.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(z))!=null;)z=z.slice(0,p.index)+"["+Ht("a",p[0].length-2)+"]"+z.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.escapedEmSt.exec(z))!=null;)z=z.slice(0,p.index+p[0].length-2)+"++"+z.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(d||(w=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>!!(e=f.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.escape(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.tag(n))n=n.substring(e.raw.length),r=t[t.length-1],r&&e.type==="text"&&r.type==="text"?(r.raw+=e.raw,r.text+=e.text):t.push(e);else if(e=this.tokenizer.link(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.reflink(n,this.tokens.links))n=n.substring(e.raw.length),r=t[t.length-1],r&&e.type==="text"&&r.type==="text"?(r.raw+=e.raw,r.text+=e.text):t.push(e);else if(e=this.tokenizer.emStrong(n,z,w))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.codespan(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.br(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.del(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.autolink(n,qt))n=n.substring(e.raw.length),t.push(e);else if(this.state.inLink||!(e=this.tokenizer.url(n,qt))){if(h=n,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const o=n.slice(1);let c;this.options.extensions.startInline.forEach(function(y){c=y.call({lexer:this},o),typeof c=="number"&&c>=0&&(f=Math.min(f,c))}),f<1/0&&f>=0&&(h=n.substring(0,f+1))}if(e=this.tokenizer.inlineText(h,ge))n=n.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(w=e.raw.slice(-1)),d=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=e.raw,r.text+=e.text):t.push(e);else if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}throw new Error(f)}}else n=n.substring(e.raw.length),t.push(e);return t}}class zt{constructor(n){this.options=n||lt}code(n,t,e){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const h=this.options.highlight(n,r);h!=null&&h!==n&&(e=!0,n=h)}return n=n.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+F(r)+'">'+(e?n:F(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:F(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,t,e,r){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+r.slug(e)}">${n}</h${t}>
`:`<h${t}>${n}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,t,e){const r=t?"ol":"ul";return"<"+r+(t&&e!==1?' start="'+e+'"':"")+`>
`+n+"</"+r+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+n+`</${e}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){if((n=Bt(this.options.sanitize,this.options.baseUrl,n))===null)return e;let r='<a href="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=">"+e+"</a>",r}image(n,t,e){if((n=Bt(this.options.sanitize,this.options.baseUrl,n))===null)return e;let r=`<img src="${n}" alt="${e}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r}text(n){return n}}class Dt{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}}class jt{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let e=n,r=0;if(this.seen.hasOwnProperty(e)){r=this.seen[n];do r++,e=n+"-"+r;while(this.seen.hasOwnProperty(e))}return t||(this.seen[n]=r,this.seen[e]=0),e}slug(n,t={}){const e=this.serialize(n);return this.getNextSafeSlug(e,t.dryrun)}}class it{constructor(n){this.options=n||lt,this.options.renderer=this.options.renderer||new zt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Dt,this.slugger=new jt}static parse(n,t){return new it(t).parse(n)}static parseInline(n,t){return new it(t).parseInline(n)}parse(n,t=!0){let e,r,h,p,d,w,z,f,o,c,y,T,B,V,E,O,P,D,C,q="";const W=n.length;for(e=0;e<W;e++)if(c=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[c.type]&&(C=this.options.extensions.renderers[c.type].call({parser:this},c),C!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)))q+=C||"";else switch(c.type){case"space":continue;case"hr":q+=this.renderer.hr();continue;case"heading":q+=this.renderer.heading(this.parseInline(c.tokens),c.depth,Pt(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":q+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(f="",z="",p=c.header.length,r=0;r<p;r++)z+=this.renderer.tablecell(this.parseInline(c.header[r].tokens),{header:!0,align:c.align[r]});for(f+=this.renderer.tablerow(z),o="",p=c.rows.length,r=0;r<p;r++){for(w=c.rows[r],z="",d=w.length,h=0;h<d;h++)z+=this.renderer.tablecell(this.parseInline(w[h].tokens),{header:!1,align:c.align[h]});o+=this.renderer.tablerow(z)}q+=this.renderer.table(f,o);continue;case"blockquote":o=this.parse(c.tokens),q+=this.renderer.blockquote(o);continue;case"list":for(y=c.ordered,T=c.start,B=c.loose,p=c.items.length,o="",r=0;r<p;r++)E=c.items[r],O=E.checked,P=E.task,V="",E.task&&(D=this.renderer.checkbox(O),B?E.tokens.length>0&&E.tokens[0].type==="paragraph"?(E.tokens[0].text=D+" "+E.tokens[0].text,E.tokens[0].tokens&&E.tokens[0].tokens.length>0&&E.tokens[0].tokens[0].type==="text"&&(E.tokens[0].tokens[0].text=D+" "+E.tokens[0].tokens[0].text)):E.tokens.unshift({type:"text",text:D}):V+=D),V+=this.parse(E.tokens,B),o+=this.renderer.listitem(V,P,O);q+=this.renderer.list(o,y,T);continue;case"html":q+=this.renderer.html(c.text);continue;case"paragraph":q+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(o=c.tokens?this.parseInline(c.tokens):c.text;e+1<W&&n[e+1].type==="text";)c=n[++e],o+=`
`+(c.tokens?this.parseInline(c.tokens):c.text);q+=t?this.renderer.paragraph(o):o;continue;default:{const Q='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(Q);throw new Error(Q)}}return q}parseInline(n,t){t=t||this.renderer;let e,r,h,p="";const d=n.length;for(e=0;e<d;e++)if(r=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(h=this.options.extensions.renderers[r.type].call({parser:this},r),h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))p+=h||"";else switch(r.type){case"escape":case"text":p+=t.text(r.text);break;case"html":p+=t.html(r.text);break;case"link":p+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":p+=t.image(r.href,r.title,r.text);break;case"strong":p+=t.strong(this.parseInline(r.tokens,t));break;case"em":p+=t.em(this.parseInline(r.tokens,t));break;case"codespan":p+=t.codespan(r.text);break;case"br":p+=t.br();break;case"del":p+=t.del(this.parseInline(r.tokens,t));break;default:{const w='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}}return p}}class kt{constructor(n){this.options=n||lt}preprocess(n){return n}postprocess(n){return n}}wt(kt,"passThroughHooks",new Set(["preprocess","postprocess"]));function Zt(b,n){return(t,e,r)=>{typeof e=="function"&&(r=e,e=null);const h={...e},p=function(d,w,z){return f=>{if(f.message+=`
Please report this to https://github.com/markedjs/marked.`,d){const o="<p>An error occurred:</p><pre>"+F(f.message+"",!0)+"</pre>";return w?Promise.resolve(o):z?void z(null,o):o}if(w)return Promise.reject(f);if(!z)throw f;z(f)}}((e={...R.defaults,...h}).silent,e.async,r);if(t==null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(function(d){d&&d.sanitize&&!d.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(e),e.hooks&&(e.hooks.options=e),r){const d=e.highlight;let w;try{e.hooks&&(t=e.hooks.preprocess(t)),w=b(t,e)}catch(o){return p(o)}const z=function(o){let c;if(!o)try{e.walkTokens&&R.walkTokens(w,e.walkTokens),c=n(w,e),e.hooks&&(c=e.hooks.postprocess(c))}catch(y){o=y}return e.highlight=d,o?p(o):r(null,c)};if(!d||d.length<3||(delete e.highlight,!w.length))return z();let f=0;return R.walkTokens(w,function(o){o.type==="code"&&(f++,setTimeout(()=>{d(o.text,o.lang,function(c,y){if(c)return z(c);y!=null&&y!==o.text&&(o.text=y,o.escaped=!0),f--,f===0&&z()})},0))}),void(f===0&&z())}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(t):t).then(d=>b(d,e)).then(d=>e.walkTokens?Promise.all(R.walkTokens(d,e.walkTokens)).then(()=>d):d).then(d=>n(d,e)).then(d=>e.hooks?e.hooks.postprocess(d):d).catch(p);try{e.hooks&&(t=e.hooks.preprocess(t));const d=b(t,e);e.walkTokens&&R.walkTokens(d,e.walkTokens);let w=n(d,e);return e.hooks&&(w=e.hooks.postprocess(w)),w}catch(d){return p(d)}}}function R(b,n,t){return Zt(st.lex,it.parse)(b,n,t)}R.options=R.setOptions=function(b){var n;return R.defaults={...R.defaults,...b},n=R.defaults,lt=n,R},R.getDefaults=ie,R.defaults=lt,R.use=function(...b){const n=R.defaults.extensions||{renderers:{},childTokens:{}};b.forEach(t=>{const e={...t};if(e.async=R.defaults.async||e.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const h=n.renderers[r.name];n.renderers[r.name]=h?function(...p){let d=r.renderer.apply(this,p);return d===!1&&(d=h.apply(this,p)),d}:r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[r.level]?n[r.level].unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),e.extensions=n),t.renderer){const r=R.defaults.renderer||new zt;for(const h in t.renderer){const p=r[h];r[h]=(...d)=>{let w=t.renderer[h].apply(r,d);return w===!1&&(w=p.apply(r,d)),w}}e.renderer=r}if(t.tokenizer){const r=R.defaults.tokenizer||new _t;for(const h in t.tokenizer){const p=r[h];r[h]=(...d)=>{let w=t.tokenizer[h].apply(r,d);return w===!1&&(w=p.apply(r,d)),w}}e.tokenizer=r}if(t.hooks){const r=R.defaults.hooks||new kt;for(const h in t.hooks){const p=r[h];kt.passThroughHooks.has(h)?r[h]=d=>{if(R.defaults.async)return Promise.resolve(t.hooks[h].call(r,d)).then(z=>p.call(r,z));const w=t.hooks[h].call(r,d);return p.call(r,w)}:r[h]=(...d)=>{let w=t.hooks[h].apply(r,d);return w===!1&&(w=p.apply(r,d)),w}}e.hooks=r}if(t.walkTokens){const r=R.defaults.walkTokens;e.walkTokens=function(h){let p=[];return p.push(t.walkTokens.call(this,h)),r&&(p=p.concat(r.call(this,h))),p}}R.setOptions(e)})},R.walkTokens=function(b,n){let t=[];for(const e of b)switch(t=t.concat(n.call(R,e)),e.type){case"table":for(const r of e.header)t=t.concat(R.walkTokens(r.tokens,n));for(const r of e.rows)for(const h of r)t=t.concat(R.walkTokens(h.tokens,n));break;case"list":t=t.concat(R.walkTokens(e.items,n));break;default:R.defaults.extensions&&R.defaults.extensions.childTokens&&R.defaults.extensions.childTokens[e.type]?R.defaults.extensions.childTokens[e.type].forEach(function(r){t=t.concat(R.walkTokens(e[r],n))}):e.tokens&&(t=t.concat(R.walkTokens(e.tokens,n)))}return t},R.parseInline=Zt(st.lexInline,it.parseInline),R.Parser=it,R.parser=it.parse,R.Renderer=zt,R.TextRenderer=Dt,R.Lexer=st,R.lexer=st.lex,R.Tokenizer=_t,R.Slugger=jt,R.Hooks=kt,R.parse=R,R.options,R.setOptions,R.use,R.walkTokens,R.parseInline,it.parse,st.lex;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const Vt="__SCRIPT_END__",ft=/\[\s*((\d*):)?\s*([\s\d,|-]*)\]/,me={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ke=()=>{let b;function n(f){let o=(f.querySelector("[data-template]")||f.querySelector("script")||f).textContent;o=o.replace(new RegExp(Vt,"g"),"<\/script>");const c=o.match(/^\n?(\s*)/)[1].length,y=o.match(/^\n?(\t*)/)[1].length;return y>0?o=o.replace(new RegExp("\\n?\\t{"+y+"}(.*)","g"),function(T,B){return`
`+B}):c>1&&(o=o.replace(new RegExp("\\n? {"+c+"}(.*)","g"),function(T,B){return`
`+B})),o}function t(f){const o=f.attributes,c=[];for(let y=0,T=o.length;y<T;y++){const B=o[y].name,V=o[y].value;/data\-(markdown|separator|vertical|notes)/gi.test(B)||(V?c.push(B+'="'+V+'"'):c.push(B))}return c.join(" ")}function e(f){var c;const o=(c=b==null?void 0:b.getConfig)==null?void 0:c.call(b).markdown;return(f=f||{}).separator=f.separator||(o==null?void 0:o.separator)||`\r?
---\r?
`,f.verticalSeparator=f.verticalSeparator||(o==null?void 0:o.verticalSeparator)||null,f.notesSeparator=f.notesSeparator||(o==null?void 0:o.notesSeparator)||"^s*notes?:",f.attributes=f.attributes||"",f}function r(f,o){o=e(o);const c=f.split(new RegExp(o.notesSeparator,"mgi"));return c.length===2&&(f=c[0]+'<aside class="notes">'+R(c[1].trim())+"</aside>"),'<script type="text/template">'+(f=f.replace(/<\/script>/g,Vt))+"<\/script>"}function h(f,o){o=e(o);const c=new RegExp(o.separator+(o.verticalSeparator?"|"+o.verticalSeparator:""),"mg"),y=new RegExp(o.separator);let T,B,V,E=0,O=!0,P=[];for(;T=c.exec(f);)B=y.test(T[0]),!B&&O&&P.push([]),V=f.substring(E,T.index),B&&O?P.push(V):P[P.length-1].push(V),E=c.lastIndex,O=B;(O?P:P[P.length-1]).push(f.substring(E));let D="";for(let C=0,q=P.length;C<q;C++)P[C]instanceof Array?(D+="<section "+o.attributes+">",P[C].forEach(function(W){D+="<section data-markdown>"+r(W,o)+"</section>"}),D+="</section>"):D+="<section "+o.attributes+" data-markdown>"+r(P[C],o)+"</section>";return D}function p(f){return new Promise(function(o){const c=[];[].slice.call(f.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(y,T){y.getAttribute("data-markdown").length?c.push(function(B){return new Promise(function(V,E){const O=new XMLHttpRequest,P=B.getAttribute("data-markdown"),D=B.getAttribute("data-charset");D!==null&&D!==""&&O.overrideMimeType("text/html; charset="+D),O.onreadystatechange=(function(C,q){q.readyState===4&&(q.status>=200&&q.status<300||q.status===0?V(q,P):E(q,P))}).bind(this,B,O),O.open("GET",P,!0);try{O.send()}catch(C){console.warn("Failed to get the Markdown file "+P+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+C),V(O,P)}})}(y).then(function(B,V){y.outerHTML=h(B.responseText,{separator:y.getAttribute("data-separator"),verticalSeparator:y.getAttribute("data-separator-vertical"),notesSeparator:y.getAttribute("data-separator-notes"),attributes:t(y)})},function(B,V){y.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+V+" failed with HTTP status "+B.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):y.outerHTML=h(n(y),{separator:y.getAttribute("data-separator"),verticalSeparator:y.getAttribute("data-separator-vertical"),notesSeparator:y.getAttribute("data-separator-notes"),attributes:t(y)})}),Promise.all(c).then(o)})}function d(f,o,c){const y=new RegExp(c,"mg"),T=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg");let B,V,E=f.nodeValue;if(B=y.exec(E)){const O=B[1];for(E=E.substring(0,B.index)+E.substring(y.lastIndex),f.nodeValue=E;V=T.exec(O);)V[2]?o.setAttribute(V[1],V[2]):o.setAttribute(V[3],"");return!0}return!1}function w(f,o,c,y,T){if(o!==null&&o.childNodes!==void 0&&o.childNodes.length>0){let B=o;for(let V=0;V<o.childNodes.length;V++){const E=o.childNodes[V];if(V>0){let P=V-1;for(;P>=0;){const D=o.childNodes[P];if(typeof D.setAttribute=="function"&&D.tagName!=="BR"){B=D;break}P-=1}}let O=f;E.nodeName==="section"&&(O=E,B=E),typeof E.setAttribute!="function"&&E.nodeType!==Node.COMMENT_NODE||w(O,E,B,y,T)}}o.nodeType===Node.COMMENT_NODE&&d(o,c,y)===!1&&d(o,f,T)}function z(){const f=b.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(f).forEach(function(o){o.setAttribute("data-markdown-parsed",!0);const c=o.querySelector("aside.notes"),y=n(o);o.innerHTML=R(y),w(o,o,null,o.getAttribute("data-element-attributes")||o.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",o.getAttribute("data-attributes")||o.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),c&&o.appendChild(c)}),Promise.resolve()}return{id:"markdown",init:function(f){b=f;let{renderer:o,animateLists:c,...y}=b.getConfig().markdown||{};return o||(o=new R.Renderer,o.code=(T,B)=>{let V="",E="";if(ft.test(B)){let O=B.match(ft)[2];O&&(V=`data-ln-start-from="${O.trim()}"`),E=B.match(ft)[3].trim(),E=`data-line-numbers="${E}"`,B=B.replace(ft,"").trim()}return`<pre><code ${E} ${V} class="${B}">${T=T.replace(/([&<>'"])/g,O=>me[O])}</code></pre>`}),c===!0&&(o.listitem=T=>`<li class="fragment">${T}</li>`),R.setOptions({renderer:o,...y}),p(b.getRevealElement()).then(z)},processSlides:p,convertSlides:z,slidify:h,marked:R}};var Ut={exports:{}};(function(b,n){(function(t,e){b.exports=e()})(te,function(){function t(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let e={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const r=/[&<>"']/,h=new RegExp(r.source,"g"),p=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,d=new RegExp(p.source,"g"),w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},z=I=>w[I];function f(I,l){if(l){if(r.test(I))return I.replace(h,z)}else if(p.test(I))return I.replace(d,z);return I}const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(I){return I.replace(o,(l,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):"")}const y=/(^|[^\[])\^/g;function T(I,l){I=typeof I=="string"?I:I.source,l=l||"";const s={replace:(i,a)=>(a=(a=a.source||a).replace(y,"$1"),I=I.replace(i,a),s),getRegex:()=>new RegExp(I,l)};return s}const B=/[^\w:]/g,V=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function E(I,l,s){if(I){let i;try{i=decodeURIComponent(c(s)).replace(B,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}l&&!V.test(s)&&(s=function(i,a){O[" "+i]||(P.test(i)?O[" "+i]=i+"/":O[" "+i]=Q(i,"/",!0)),i=O[" "+i];const m=i.indexOf(":")===-1;return a.substring(0,2)==="//"?m?a:i.replace(D,"$1")+a:a.charAt(0)==="/"?m?a:i.replace(C,"$1")+a:i+a}(l,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const O={},P=/^[^:]+:\/*[^/]*$/,D=/^([^:]+:)[\s\S]*$/,C=/^([^:]+:\/*[^/]*)[\s\S]*$/,q={exec:function(){}};function W(I,l){const s=I.replace(/\|/g,(a,m,g)=>{let u=!1,k=m;for(;--k>=0&&g[k]==="\\";)u=!u;return u?"|":" |"}).split(/ \|/);let i=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>l)s.splice(l);else for(;s.length<l;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(/\\\|/g,"|");return s}function Q(I,l,s){const i=I.length;if(i===0)return"";let a=0;for(;a<i;){const m=I.charAt(i-a-1);if(m!==l||s){if(m===l||!s)break;a++}else a++}return I.slice(0,i-a)}function X(I,l){if(l<1)return"";let s="";for(;l>1;)1&l&&(s+=I),l>>=1,I+=I;return s+I}function rt(I,l,s,i){const a=l.href,m=l.title?f(l.title):null,g=I[1].replace(/\\([\[\]])/g,"$1");if(I[0].charAt(0)!=="!"){i.state.inLink=!0;const u={type:"link",raw:s,href:a,title:m,text:g,tokens:i.inlineTokens(g)};return i.state.inLink=!1,u}return{type:"image",raw:s,href:a,title:m,text:f(g)}}class at{constructor(l){this.options=l||e}space(l){const s=this.rules.block.newline.exec(l);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(l){const s=this.rules.block.code.exec(l);if(s){const i=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Q(i,`
`)}}}fences(l){const s=this.rules.block.fences.exec(l);if(s){const i=s[0],a=function(m,g){const u=m.match(/^(\s+)(?:```)/);if(u===null)return g;const k=u[1];return g.split(`
`).map(x=>{const $=x.match(/^\s+/);if($===null)return x;const[v]=$;return v.length>=k.length?x.slice(k.length):x}).join(`
`)}(i,s[3]||"");return{type:"code",raw:i,lang:s[2]?s[2].trim().replace(this.rules.inline._escapes,"$1"):s[2],text:a}}}heading(l){const s=this.rules.block.heading.exec(l);if(s){let i=s[2].trim();if(/#$/.test(i)){const a=Q(i,"#");this.options.pedantic?i=a.trim():a&&!/ $/.test(a)||(i=a.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(l){const s=this.rules.block.hr.exec(l);if(s)return{type:"hr",raw:s[0]}}blockquote(l){const s=this.rules.block.blockquote.exec(l);if(s){const i=s[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const m=this.lexer.blockTokens(i);return this.lexer.state.top=a,{type:"blockquote",raw:s[0],tokens:m,text:i}}}list(l){let s=this.rules.block.list.exec(l);if(s){let i,a,m,g,u,k,x,$,v,S,Z,K,Y=s[1].trim();const J=Y.length>1,N={type:"list",raw:"",ordered:J,start:J?+Y.slice(0,-1):"",loose:!1,items:[]};Y=J?`\\d{1,9}\\${Y.slice(-1)}`:`\\${Y}`,this.options.pedantic&&(Y=J?Y:"[*+-]");const ct=new RegExp(`^( {0,3}${Y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;l&&(K=!1,s=ct.exec(l))&&!this.rules.block.hr.test(l);){if(i=s[0],l=l.substring(i.length),$=s[2].split(`
`,1)[0].replace(/^\t+/,G=>" ".repeat(3*G.length)),v=l.split(`
`,1)[0],this.options.pedantic?(g=2,Z=$.trimLeft()):(g=s[2].search(/[^ ]/),g=g>4?1:g,Z=$.slice(g),g+=s[1].length),k=!1,!$&&/^ *$/.test(v)&&(i+=v+`
`,l=l.substring(v.length+1),K=!0),!K){const G=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),nt=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),U=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),ht=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;l&&(S=l.split(`
`,1)[0],v=S,this.options.pedantic&&(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!U.test(v))&&!ht.test(v)&&!G.test(v)&&!nt.test(l);){if(v.search(/[^ ]/)>=g||!v.trim())Z+=`
`+v.slice(g);else{if(k||$.search(/[^ ]/)>=4||U.test($)||ht.test($)||nt.test($))break;Z+=`
`+v}k||v.trim()||(k=!0),i+=S+`
`,l=l.substring(S.length+1),$=v.slice(g)}}N.loose||(x?N.loose=!0:/\n *\n *$/.test(i)&&(x=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(Z),a&&(m=a[0]!=="[ ] ",Z=Z.replace(/^\[[ xX]\] +/,""))),N.items.push({type:"list_item",raw:i,task:!!a,checked:m,loose:!1,text:Z}),N.raw+=i}N.items[N.items.length-1].raw=i.trimRight(),N.items[N.items.length-1].text=Z.trimRight(),N.raw=N.raw.trimRight();const pt=N.items.length;for(u=0;u<pt;u++)if(this.lexer.state.top=!1,N.items[u].tokens=this.lexer.blockTokens(N.items[u].text,[]),!N.loose){const G=N.items[u].tokens.filter(U=>U.type==="space"),nt=G.length>0&&G.some(U=>/\n.*\n/.test(U.raw));N.loose=nt}if(N.loose)for(u=0;u<pt;u++)N.items[u].loose=!0;return N}}html(l){const s=this.rules.block.html.exec(l);if(s){const i={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(s[0]):f(s[0]);i.type="paragraph",i.text=a,i.tokens=this.lexer.inline(a)}return i}}def(l){const s=this.rules.block.def.exec(l);if(s){const i=s[1].toLowerCase().replace(/\s+/g," "),a=s[2]?s[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",m=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline._escapes,"$1"):s[3];return{type:"def",tag:i,raw:s[0],href:a,title:m}}}table(l){const s=this.rules.block.table.exec(l);if(s){const i={type:"table",header:W(s[1]).map(a=>({text:a})),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=s[0];let a,m,g,u,k=i.align.length;for(a=0;a<k;a++)/^ *-+: *$/.test(i.align[a])?i.align[a]="right":/^ *:-+: *$/.test(i.align[a])?i.align[a]="center":/^ *:-+ *$/.test(i.align[a])?i.align[a]="left":i.align[a]=null;for(k=i.rows.length,a=0;a<k;a++)i.rows[a]=W(i.rows[a],i.header.length).map(x=>({text:x}));for(k=i.header.length,m=0;m<k;m++)i.header[m].tokens=this.lexer.inline(i.header[m].text);for(k=i.rows.length,m=0;m<k;m++)for(u=i.rows[m],g=0;g<u.length;g++)u[g].tokens=this.lexer.inline(u[g].text);return i}}}lheading(l){const s=this.rules.block.lheading.exec(l);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(l){const s=this.rules.block.paragraph.exec(l);if(s){const i=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:i,tokens:this.lexer.inline(i)}}}text(l){const s=this.rules.block.text.exec(l);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(l){const s=this.rules.inline.escape.exec(l);if(s)return{type:"escape",raw:s[0],text:f(s[1])}}tag(l){const s=this.rules.inline.tag.exec(l);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):f(s[0]):s[0]}}link(l){const s=this.rules.inline.link.exec(l);if(s){const i=s[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const g=Q(i.slice(0,-1),"\\");if((i.length-g.length)%2==0)return}else{const g=function(u,k){if(u.indexOf(k[1])===-1)return-1;const x=u.length;let $=0,v=0;for(;v<x;v++)if(u[v]==="\\")v++;else if(u[v]===k[0])$++;else if(u[v]===k[1]&&($--,$<0))return v;return-1}(s[2],"()");if(g>-1){const u=(s[0].indexOf("!")===0?5:4)+s[1].length+g;s[2]=s[2].substring(0,g),s[0]=s[0].substring(0,u).trim(),s[3]=""}}let a=s[2],m="";if(this.options.pedantic){const g=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);g&&(a=g[1],m=g[3])}else m=s[3]?s[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(i)?a.slice(1):a.slice(1,-1)),rt(s,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:m&&m.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(l,s){let i;if((i=this.rules.inline.reflink.exec(l))||(i=this.rules.inline.nolink.exec(l))){let a=(i[2]||i[1]).replace(/\s+/g," ");if(a=s[a.toLowerCase()],!a){const m=i[0].charAt(0);return{type:"text",raw:m,text:m}}return rt(i,a,i[0],this.lexer)}}emStrong(l,s,i=""){let a=this.rules.inline.emStrong.lDelim.exec(l);if(!a||a[3]&&i.match(/[\p{L}\p{N}]/u))return;const m=a[1]||a[2]||"";if(!m||m&&(i===""||this.rules.inline.punctuation.exec(i))){const g=a[0].length-1;let u,k,x=g,$=0;const v=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(v.lastIndex=0,s=s.slice(-1*l.length+g);(a=v.exec(s))!=null;){if(u=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!u)continue;if(k=u.length,a[3]||a[4]){x+=k;continue}if((a[5]||a[6])&&g%3&&!((g+k)%3)){$+=k;continue}if(x-=k,x>0)continue;k=Math.min(k,k+x+$);const S=l.slice(0,g+a.index+(a[0].length-u.length)+k);if(Math.min(g,k)%2){const K=S.slice(1,-1);return{type:"em",raw:S,text:K,tokens:this.lexer.inlineTokens(K)}}const Z=S.slice(2,-2);return{type:"strong",raw:S,text:Z,tokens:this.lexer.inlineTokens(Z)}}}}codespan(l){const s=this.rules.inline.code.exec(l);if(s){let i=s[2].replace(/\n/g," ");const a=/[^ ]/.test(i),m=/^ /.test(i)&&/ $/.test(i);return a&&m&&(i=i.substring(1,i.length-1)),i=f(i,!0),{type:"codespan",raw:s[0],text:i}}}br(l){const s=this.rules.inline.br.exec(l);if(s)return{type:"br",raw:s[0]}}del(l){const s=this.rules.inline.del.exec(l);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(l,s){const i=this.rules.inline.autolink.exec(l);if(i){let a,m;return i[2]==="@"?(a=f(this.options.mangle?s(i[1]):i[1]),m="mailto:"+a):(a=f(i[1]),m=a),{type:"link",raw:i[0],text:a,href:m,tokens:[{type:"text",raw:a,text:a}]}}}url(l,s){let i;if(i=this.rules.inline.url.exec(l)){let a,m;if(i[2]==="@")a=f(this.options.mangle?s(i[0]):i[0]),m="mailto:"+a;else{let g;do g=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(g!==i[0]);a=f(i[0]),m=i[1]==="www."?"http://"+i[0]:i[0]}return{type:"link",raw:i[0],text:a,href:m,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(l,s){const i=this.rules.inline.text.exec(l);if(i){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):f(i[0]):i[0]:f(this.options.smartypants?s(i[0]):i[0]),{type:"text",raw:i[0],text:a}}}}const L={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:q,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};L.def=T(L.def).replace("label",L._label).replace("title",L._title).getRegex(),L.bullet=/(?:[*+-]|\d{1,9}[.)])/,L.listItemStart=T(/^( *)(bull) */).replace("bull",L.bullet).getRegex(),L.list=T(L.list).replace(/bull/g,L.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+L.def.source+")").getRegex(),L._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",L._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,L.html=T(L.html,"i").replace("comment",L._comment).replace("tag",L._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),L.paragraph=T(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.blockquote=T(L.blockquote).replace("paragraph",L.paragraph).getRegex(),L.normal={...L},L.gfm={...L.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},L.gfm.table=T(L.gfm.table).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.gfm.paragraph=T(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",L.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.pedantic={...L.normal,html:T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",L._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:q,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:T(L.normal._paragraph).replace("hr",L.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",L.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const _={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:q,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:q,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ot(I){return I.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function St(I){let l,s,i="";const a=I.length;for(l=0;l<a;l++)s=I.charCodeAt(l),Math.random()>.5&&(s="x"+s.toString(16)),i+="&#"+s+";";return i}_._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",_.punctuation=T(_.punctuation).replace(/punctuation/g,_._punctuation).getRegex(),_.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,_.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,_._comment=T(L._comment).replace("(?:-->|$)","-->").getRegex(),_.emStrong.lDelim=T(_.emStrong.lDelim).replace(/punct/g,_._punctuation).getRegex(),_.emStrong.rDelimAst=T(_.emStrong.rDelimAst,"g").replace(/punct/g,_._punctuation).getRegex(),_.emStrong.rDelimUnd=T(_.emStrong.rDelimUnd,"g").replace(/punct/g,_._punctuation).getRegex(),_._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,_._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,_._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,_.autolink=T(_.autolink).replace("scheme",_._scheme).replace("email",_._email).getRegex(),_._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,_.tag=T(_.tag).replace("comment",_._comment).replace("attribute",_._attribute).getRegex(),_._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,_._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,_.link=T(_.link).replace("label",_._label).replace("href",_._href).replace("title",_._title).getRegex(),_.reflink=T(_.reflink).replace("label",_._label).replace("ref",L._label).getRegex(),_.nolink=T(_.nolink).replace("ref",L._label).getRegex(),_.reflinkSearch=T(_.reflinkSearch,"g").replace("reflink",_.reflink).replace("nolink",_.nolink).getRegex(),_.normal={..._},_.pedantic={..._.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:T(/^!?\[(label)\]\((.*?)\)/).replace("label",_._label).getRegex(),reflink:T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_._label).getRegex()},_.gfm={..._.normal,escape:T(_.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},_.gfm.url=T(_.gfm.url,"i").replace("email",_.gfm._extended_email).getRegex(),_.breaks={..._.gfm,br:T(_.br).replace("{2,}","*").getRegex(),text:T(_.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class tt{constructor(l){this.tokens=[],this.tokens.links=Object.create(null),this.options=l||e,this.options.tokenizer=this.options.tokenizer||new at,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:L.normal,inline:_.normal};this.options.pedantic?(s.block=L.pedantic,s.inline=_.pedantic):this.options.gfm&&(s.block=L.gfm,this.options.breaks?s.inline=_.breaks:s.inline=_.gfm),this.tokenizer.rules=s}static get rules(){return{block:L,inline:_}}static lex(l,s){return new tt(s).lex(l)}static lexInline(l,s){return new tt(s).inlineTokens(l)}lex(l){let s;for(l=l.replace(/\r\n|\r/g,`
`),this.blockTokens(l,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(l,s=[]){let i,a,m,g;for(l=this.options.pedantic?l.replace(/\t/g,"    ").replace(/^ +$/gm,""):l.replace(/^( *)(\t+)/gm,(u,k,x)=>k+"    ".repeat(x.length));l;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(u=>!!(i=u.call({lexer:this},l,s))&&(l=l.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.space(l))l=l.substring(i.raw.length),i.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(i);else if(i=this.tokenizer.code(l))l=l.substring(i.raw.length),a=s[s.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?s.push(i):(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(i=this.tokenizer.fences(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.heading(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.hr(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.blockquote(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.list(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.html(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.def(l))l=l.substring(i.raw.length),a=s[s.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(a.raw+=`
`+i.raw,a.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(i=this.tokenizer.table(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.lheading(l))l=l.substring(i.raw.length),s.push(i);else{if(m=l,this.options.extensions&&this.options.extensions.startBlock){let u=1/0;const k=l.slice(1);let x;this.options.extensions.startBlock.forEach(function($){x=$.call({lexer:this},k),typeof x=="number"&&x>=0&&(u=Math.min(u,x))}),u<1/0&&u>=0&&(m=l.substring(0,u+1))}if(this.state.top&&(i=this.tokenizer.paragraph(m)))a=s[s.length-1],g&&a.type==="paragraph"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):s.push(i),g=m.length!==l.length,l=l.substring(i.raw.length);else if(i=this.tokenizer.text(l))l=l.substring(i.raw.length),a=s[s.length-1],a&&a.type==="text"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):s.push(i);else if(l){const u="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}return this.state.top=!0,s}inline(l,s=[]){return this.inlineQueue.push({src:l,tokens:s}),s}inlineTokens(l,s=[]){let i,a,m,g,u,k,x=l;if(this.tokens.links){const $=Object.keys(this.tokens.links);if($.length>0)for(;(g=this.tokenizer.rules.inline.reflinkSearch.exec(x))!=null;)$.includes(g[0].slice(g[0].lastIndexOf("[")+1,-1))&&(x=x.slice(0,g.index)+"["+X("a",g[0].length-2)+"]"+x.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(g=this.tokenizer.rules.inline.blockSkip.exec(x))!=null;)x=x.slice(0,g.index)+"["+X("a",g[0].length-2)+"]"+x.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(g=this.tokenizer.rules.inline.escapedEmSt.exec(x))!=null;)x=x.slice(0,g.index+g[0].length-2)+"++"+x.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;l;)if(u||(k=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some($=>!!(i=$.call({lexer:this},l,s))&&(l=l.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.escape(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.tag(l))l=l.substring(i.raw.length),a=s[s.length-1],a&&i.type==="text"&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(i=this.tokenizer.link(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.reflink(l,this.tokens.links))l=l.substring(i.raw.length),a=s[s.length-1],a&&i.type==="text"&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(i=this.tokenizer.emStrong(l,x,k))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.codespan(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.br(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.del(l))l=l.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.autolink(l,St))l=l.substring(i.raw.length),s.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(l,St))){if(m=l,this.options.extensions&&this.options.extensions.startInline){let $=1/0;const v=l.slice(1);let S;this.options.extensions.startInline.forEach(function(Z){S=Z.call({lexer:this},v),typeof S=="number"&&S>=0&&($=Math.min($,S))}),$<1/0&&$>=0&&(m=l.substring(0,$+1))}if(i=this.tokenizer.inlineText(m,ot))l=l.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(k=i.raw.slice(-1)),u=!0,a=s[s.length-1],a&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(l){const $="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error($);break}throw new Error($)}}else l=l.substring(i.raw.length),s.push(i);return s}}class bt{constructor(l){this.options=l||e}code(l,s,i){const a=(s||"").match(/\S*/)[0];if(this.options.highlight){const m=this.options.highlight(l,a);m!=null&&m!==l&&(i=!0,l=m)}return l=l.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+f(a)+'">'+(i?l:f(l,!0))+`</code></pre>
`:"<pre><code>"+(i?l:f(l,!0))+`</code></pre>
`}blockquote(l){return`<blockquote>
${l}</blockquote>
`}html(l){return l}heading(l,s,i,a){return this.options.headerIds?`<h${s} id="${this.options.headerPrefix+a.slug(i)}">${l}</h${s}>
`:`<h${s}>${l}</h${s}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(l,s,i){const a=s?"ol":"ul";return"<"+a+(s&&i!==1?' start="'+i+'"':"")+`>
`+l+"</"+a+`>
`}listitem(l){return`<li>${l}</li>
`}checkbox(l){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(l){return`<p>${l}</p>
`}table(l,s){return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+l+`</thead>
`+s+`</table>
`}tablerow(l){return`<tr>
${l}</tr>
`}tablecell(l,s){const i=s.header?"th":"td";return(s.align?`<${i} align="${s.align}">`:`<${i}>`)+l+`</${i}>
`}strong(l){return`<strong>${l}</strong>`}em(l){return`<em>${l}</em>`}codespan(l){return`<code>${l}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(l){return`<del>${l}</del>`}link(l,s,i){if((l=E(this.options.sanitize,this.options.baseUrl,l))===null)return i;let a='<a href="'+l+'"';return s&&(a+=' title="'+s+'"'),a+=">"+i+"</a>",a}image(l,s,i){if((l=E(this.options.sanitize,this.options.baseUrl,l))===null)return i;let a=`<img src="${l}" alt="${i}"`;return s&&(a+=` title="${s}"`),a+=this.options.xhtml?"/>":">",a}text(l){return l}}class Et{strong(l){return l}em(l){return l}codespan(l){return l}del(l){return l}html(l){return l}text(l){return l}link(l,s,i){return""+i}image(l,s,i){return""+i}br(){return""}}class At{constructor(){this.seen={}}serialize(l){return l.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(l,s){let i=l,a=0;if(this.seen.hasOwnProperty(i)){a=this.seen[l];do a++,i=l+"-"+a;while(this.seen.hasOwnProperty(i))}return s||(this.seen[l]=a,this.seen[i]=0),i}slug(l,s={}){const i=this.serialize(l);return this.getNextSafeSlug(i,s.dryrun)}}class et{constructor(l){this.options=l||e,this.options.renderer=this.options.renderer||new bt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Et,this.slugger=new At}static parse(l,s){return new et(s).parse(l)}static parseInline(l,s){return new et(s).parseInline(l)}parse(l,s=!0){let i,a,m,g,u,k,x,$,v,S,Z,K,Y,J,N,ct,pt,G,nt,U="";const ht=l.length;for(i=0;i<ht;i++)if(S=l[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[S.type]&&(nt=this.options.extensions.renderers[S.type].call({parser:this},S),nt!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(S.type)))U+=nt||"";else switch(S.type){case"space":continue;case"hr":U+=this.renderer.hr();continue;case"heading":U+=this.renderer.heading(this.parseInline(S.tokens),S.depth,c(this.parseInline(S.tokens,this.textRenderer)),this.slugger);continue;case"code":U+=this.renderer.code(S.text,S.lang,S.escaped);continue;case"table":for($="",x="",g=S.header.length,a=0;a<g;a++)x+=this.renderer.tablecell(this.parseInline(S.header[a].tokens),{header:!0,align:S.align[a]});for($+=this.renderer.tablerow(x),v="",g=S.rows.length,a=0;a<g;a++){for(k=S.rows[a],x="",u=k.length,m=0;m<u;m++)x+=this.renderer.tablecell(this.parseInline(k[m].tokens),{header:!1,align:S.align[m]});v+=this.renderer.tablerow(x)}U+=this.renderer.table($,v);continue;case"blockquote":v=this.parse(S.tokens),U+=this.renderer.blockquote(v);continue;case"list":for(Z=S.ordered,K=S.start,Y=S.loose,g=S.items.length,v="",a=0;a<g;a++)N=S.items[a],ct=N.checked,pt=N.task,J="",N.task&&(G=this.renderer.checkbox(ct),Y?N.tokens.length>0&&N.tokens[0].type==="paragraph"?(N.tokens[0].text=G+" "+N.tokens[0].text,N.tokens[0].tokens&&N.tokens[0].tokens.length>0&&N.tokens[0].tokens[0].type==="text"&&(N.tokens[0].tokens[0].text=G+" "+N.tokens[0].tokens[0].text)):N.tokens.unshift({type:"text",text:G}):J+=G),J+=this.parse(N.tokens,Y),v+=this.renderer.listitem(J,pt,ct);U+=this.renderer.list(v,Z,K);continue;case"html":U+=this.renderer.html(S.text);continue;case"paragraph":U+=this.renderer.paragraph(this.parseInline(S.tokens));continue;case"text":for(v=S.tokens?this.parseInline(S.tokens):S.text;i+1<ht&&l[i+1].type==="text";)S=l[++i],v+=`
`+(S.tokens?this.parseInline(S.tokens):S.text);U+=s?this.renderer.paragraph(v):v;continue;default:{const $t='Token with "'+S.type+'" type was not found.';if(this.options.silent)return void console.error($t);throw new Error($t)}}return U}parseInline(l,s){s=s||this.renderer;let i,a,m,g="";const u=l.length;for(i=0;i<u;i++)if(a=l[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(m=this.options.extensions.renderers[a.type].call({parser:this},a),m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))g+=m||"";else switch(a.type){case"escape":case"text":g+=s.text(a.text);break;case"html":g+=s.html(a.text);break;case"link":g+=s.link(a.href,a.title,this.parseInline(a.tokens,s));break;case"image":g+=s.image(a.href,a.title,a.text);break;case"strong":g+=s.strong(this.parseInline(a.tokens,s));break;case"em":g+=s.em(this.parseInline(a.tokens,s));break;case"codespan":g+=s.codespan(a.text);break;case"br":g+=s.br();break;case"del":g+=s.del(this.parseInline(a.tokens,s));break;default:{const k='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}}return g}}class dt{constructor(l){this.options=l||e}preprocess(l){return l}postprocess(l){return l}}wt(dt,"passThroughHooks",new Set(["preprocess","postprocess"]));function Tt(I,l){return(s,i,a)=>{typeof i=="function"&&(a=i,i=null);const m={...i},g=function(u,k,x){return $=>{if($.message+=`
Please report this to https://github.com/markedjs/marked.`,u){const v="<p>An error occurred:</p><pre>"+f($.message+"",!0)+"</pre>";return k?Promise.resolve(v):x?void x(null,v):v}if(k)return Promise.reject($);if(!x)throw $;x($)}}((i={...M.defaults,...m}).silent,i.async,a);if(s==null)return g(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return g(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(function(u){u&&u.sanitize&&!u.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(i),i.hooks&&(i.hooks.options=i),a){const u=i.highlight;let k;try{i.hooks&&(s=i.hooks.preprocess(s)),k=I(s,i)}catch(v){return g(v)}const x=function(v){let S;if(!v)try{i.walkTokens&&M.walkTokens(k,i.walkTokens),S=l(k,i),i.hooks&&(S=i.hooks.postprocess(S))}catch(Z){v=Z}return i.highlight=u,v?g(v):a(null,S)};if(!u||u.length<3||(delete i.highlight,!k.length))return x();let $=0;return M.walkTokens(k,function(v){v.type==="code"&&($++,setTimeout(()=>{u(v.text,v.lang,function(S,Z){if(S)return x(S);Z!=null&&Z!==v.text&&(v.text=Z,v.escaped=!0),$--,$===0&&x()})},0))}),void($===0&&x())}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(s):s).then(u=>I(u,i)).then(u=>i.walkTokens?Promise.all(M.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(g);try{i.hooks&&(s=i.hooks.preprocess(s));const u=I(s,i);i.walkTokens&&M.walkTokens(u,i.walkTokens);let k=l(u,i);return i.hooks&&(k=i.hooks.postprocess(k)),k}catch(u){return g(u)}}}function M(I,l,s){return Tt(tt.lex,et.parse)(I,l,s)}return M.options=M.setOptions=function(I){var l;return M.defaults={...M.defaults,...I},l=M.defaults,e=l,M},M.getDefaults=t,M.defaults=e,M.use=function(...I){const l=M.defaults.extensions||{renderers:{},childTokens:{}};I.forEach(s=>{const i={...s};if(i.async=M.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const m=l.renderers[a.name];l.renderers[a.name]=m?function(...g){let u=a.renderer.apply(this,g);return u===!1&&(u=m.apply(this,g)),u}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");l[a.level]?l[a.level].unshift(a.tokenizer):l[a.level]=[a.tokenizer],a.start&&(a.level==="block"?l.startBlock?l.startBlock.push(a.start):l.startBlock=[a.start]:a.level==="inline"&&(l.startInline?l.startInline.push(a.start):l.startInline=[a.start]))}a.childTokens&&(l.childTokens[a.name]=a.childTokens)}),i.extensions=l),s.renderer){const a=M.defaults.renderer||new bt;for(const m in s.renderer){const g=a[m];a[m]=(...u)=>{let k=s.renderer[m].apply(a,u);return k===!1&&(k=g.apply(a,u)),k}}i.renderer=a}if(s.tokenizer){const a=M.defaults.tokenizer||new at;for(const m in s.tokenizer){const g=a[m];a[m]=(...u)=>{let k=s.tokenizer[m].apply(a,u);return k===!1&&(k=g.apply(a,u)),k}}i.tokenizer=a}if(s.hooks){const a=M.defaults.hooks||new dt;for(const m in s.hooks){const g=a[m];dt.passThroughHooks.has(m)?a[m]=u=>{if(M.defaults.async)return Promise.resolve(s.hooks[m].call(a,u)).then(x=>g.call(a,x));const k=s.hooks[m].call(a,u);return g.call(a,k)}:a[m]=(...u)=>{let k=s.hooks[m].apply(a,u);return k===!1&&(k=g.apply(a,u)),k}}i.hooks=a}if(s.walkTokens){const a=M.defaults.walkTokens;i.walkTokens=function(m){let g=[];return g.push(s.walkTokens.call(this,m)),a&&(g=g.concat(a.call(this,m))),g}}M.setOptions(i)})},M.walkTokens=function(I,l){let s=[];for(const i of I)switch(s=s.concat(l.call(M,i)),i.type){case"table":for(const a of i.header)s=s.concat(M.walkTokens(a.tokens,l));for(const a of i.rows)for(const m of a)s=s.concat(M.walkTokens(m.tokens,l));break;case"list":s=s.concat(M.walkTokens(i.items,l));break;default:M.defaults.extensions&&M.defaults.extensions.childTokens&&M.defaults.extensions.childTokens[i.type]?M.defaults.extensions.childTokens[i.type].forEach(function(a){s=s.concat(M.walkTokens(i[a],l))}):i.tokens&&(s=s.concat(M.walkTokens(i.tokens,l)))}return s},M.parseInline=Tt(tt.lexInline,et.parseInline),M.Parser=et,M.parser=et.parse,M.Renderer=bt,M.TextRenderer=Et,M.Lexer=tt,M.lexer=tt.lex,M.Tokenizer=at,M.Slugger=At,M.Hooks=dt,M.parse=M,M.options,M.setOptions,M.use,M.walkTokens,M.parseInline,et.parse,tt.lex,()=>{let I,l,s=null;function i(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=M,s.document.write(`<!--
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
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

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

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
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
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const u=l.getConfig().url,k=typeof u=="string"?u:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;I=setInterval(function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:l.getState(),url:k}),"*")},500),window.addEventListener("message",m)})()}}function a(u){let k=l.getCurrentSlide(),x=k.querySelectorAll("aside.notes"),$=k.querySelector(".current-fragment"),v={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:l.getState()};if(k.hasAttribute("data-notes")&&(v.notes=k.getAttribute("data-notes"),v.whitespace="pre-wrap"),$){let S=$.querySelector("aside.notes");S?(v.notes=S.innerHTML,v.markdown=typeof S.getAttribute("data-markdown")=="string",x=null):$.hasAttribute("data-notes")&&(v.notes=$.getAttribute("data-notes"),v.whitespace="pre-wrap",x=null)}x&&x.length&&(x=Array.from(x).filter(S=>S.closest(".fragment")===null),v.notes=x.map(S=>S.innerHTML).join(`
`),v.markdown=x[0]&&typeof x[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(v),"*")}function m(u){if(function(k){try{return window.location.origin===k.source.location.origin}catch{return!1}}(u))try{let k=JSON.parse(u.data);k&&k.namespace==="reveal-notes"&&k.type==="connected"?(clearInterval(I),g()):k&&k.namespace==="reveal-notes"&&k.type==="call"&&function(x,$,v){let S=l[x].apply(l,$);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:S,callId:v}),"*")}(k.methodName,k.arguments,k.callId)}catch{}}function g(){l.on("slidechanged",a),l.on("fragmentshown",a),l.on("fragmenthidden",a),l.on("overviewhidden",a),l.on("overviewshown",a),l.on("paused",a),l.on("resumed",a),a()}return{id:"notes",init:function(u){l=u,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?i():window.addEventListener("message",k=>{if(!s&&typeof k.data=="string"){let $;try{$=JSON.parse(k.data)}catch{}$&&$.namespace==="reveal-notes"&&$.type==="heartbeat"&&(x=k.source,s&&!s.closed?s.focus():(s=x,window.addEventListener("message",m),g()))}var x}),l.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){i()}))},open:i}}})})(Ut);var ye=Ut.exports;const be=ee(ye);/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const we=()=>{let b,n,t,e,r,h,p;function d(){n=document.createElement("div"),n.classList.add("searchbox"),n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.zIndex=10,n.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,t=n.querySelector(".searchinput"),t.style.width="240px",t.style.fontSize="14px",t.style.padding="4px 6px",t.style.color="#000",t.style.background="#fff",t.style.borderRadius="2px",t.style.border="0",t.style.outline="0",t.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",t.style["-webkit-appearance"]="none",b.getRevealElement().appendChild(n),t.addEventListener("keyup",function(o){o.keyCode===13?(o.preventDefault(),function(){if(h){var c=t.value;c===""?(p&&p.remove(),e=null):(p=new f("slidecontent"),e=p.apply(c),r=0)}e&&(e.length&&e.length<=r&&(r=0),e.length>r&&(b.slide(e[r].h,e[r].v),r++))}(),h=!1):h=!0},!1),z()}function w(){n||d(),n.style.display="inline",t.focus(),t.select()}function z(){n||d(),n.style.display="none",p&&p.remove()}function f(o,c){var y=document.getElementById(o)||document.body,T=c||"EM",B=new RegExp("^(?:"+T+"|SCRIPT|FORM)$"),V=["#ff6","#a0ffff","#9f9","#f99","#f6f"],E=[],O=0,P="",D=[];this.setRegex=function(C){C=C.trim(),P=new RegExp("("+C+")","i")},this.getRegex=function(){return P.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(C){if(C!=null&&C&&P&&!B.test(C.nodeName)){if(C.hasChildNodes())for(var q=0;q<C.childNodes.length;q++)this.hiliteWords(C.childNodes[q]);var W,Q;if(C.nodeType==3&&(W=C.nodeValue)&&(Q=P.exec(W))){for(var X=C;X!=null&&X.nodeName!="SECTION";)X=X.parentNode;var rt=b.getIndices(X),at=D.length,L=!1;for(q=0;q<at;q++)D[q].h===rt.h&&D[q].v===rt.v&&(L=!0);L||D.push(rt),E[Q[0].toLowerCase()]||(E[Q[0].toLowerCase()]=V[O++%V.length]);var _=document.createElement(T);_.appendChild(document.createTextNode(Q[0])),_.style.backgroundColor=E[Q[0].toLowerCase()],_.style.fontStyle="inherit",_.style.color="#000";var ot=C.splitText(Q.index);ot.nodeValue=ot.nodeValue.substring(Q[0].length),C.parentNode.insertBefore(_,ot)}}},this.remove=function(){for(var C,q=document.getElementsByTagName(T);q.length&&(C=q[0]);)C.parentNode.replaceChild(C.firstChild,C)},this.apply=function(C){if(C!=null&&C)return this.remove(),this.setRegex(C),this.hiliteWords(y),D}}return{id:"search",init:o=>{b=o,b.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(c){c.key=="F"&&(c.ctrlKey||c.metaKey)&&(c.preventDefault(),n||d(),n.style.display!=="inline"?w():z())},!1)},open:w}};let ve={id:"Escience",init:b=>{Se(b)}};const xe=`
/**
 * Black theme for reveal.js. This is the opposite of the 'white' theme.
 *
 * By Hakim El Hattab, http://hakim.se
 */

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-regular.eot');
    src: url('./source-sans-pro-regular.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-regular.woff') format('woff'),
         url('./source-sans-pro-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-italic.eot');
    src: url('./source-sans-pro-italic.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-italic.woff') format('woff'),
         url('./source-sans-pro-italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-semibold.eot');
    src: url('./source-sans-pro-semibold.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-semibold.woff') format('woff'),
         url('./source-sans-pro-semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-semibolditalic.eot');
    src: url('./source-sans-pro-semibolditalic.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-semibolditalic.woff') format('woff'),
         url('./source-sans-pro-semibolditalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

section.has-light-background, section.has-light-background h1, section.has-light-background h2, section.has-light-background h3, section.has-light-background h4, section.has-light-background h5, section.has-light-background h6 {
  color: #222;
}

/*********************************************
 * GLOBAL STYLES
 *********************************************/
:root {
  --r-background-color: #191919;
  --r-main-font: Source Sans Pro, Helvetica, sans-serif;
  --r-main-font-size: 42px;
  --r-main-color: #fff;
  --r-block-margin: 20px;
  --r-heading-margin: 0 0 20px 0;
  --r-heading-font: Source Sans Pro, Helvetica, sans-serif;
  --r-heading-color: #fff;
  --r-heading-line-height: 1.2;
  --r-heading-letter-spacing: normal;
  --r-heading-text-transform: uppercase;
  --r-heading-text-shadow: none;
  --r-heading-font-weight: 600;
  --r-heading1-text-shadow: none;
  --r-heading1-size: 2.5em;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1em;
  --r-code-font: monospace;
  --r-link-color: #42affa;
  --r-link-color-dark: #068de9;
  --r-link-color-hover: #8dcffc;
  --r-selection-background-color: rgba(66, 175, 250, 0.75);
  --r-selection-color: #fff;
  --r-overlay-element-bg-color: 240, 240, 240;
  --r-overlay-element-fg-color: 0, 0, 0;
}

.reveal-viewport {
  background: #191919;
  background-color: var(--r-background-color);
}

.reveal {
  font-family: var(--r-main-font);
  font-size: var(--r-main-font-size);
  font-weight: normal;
  color: var(--r-main-color);
}

.reveal ::selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal ::-moz-selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.3;
  font-weight: inherit;
}

/*********************************************
 * HEADERS
 *********************************************/
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  margin: var(--r-heading-margin);
  color: var(--r-heading-color);
  font-family: var(--r-heading-font);
  font-weight: var(--r-heading-font-weight);
  line-height: var(--r-heading-line-height);
  letter-spacing: var(--r-heading-letter-spacing);
  text-transform: var(--r-heading-text-transform);
  text-shadow: var(--r-heading-text-shadow);
  word-wrap: break-word;
}

.reveal h1 {
  font-size: var(--r-heading1-size);
}

.reveal h2 {
  font-size: var(--r-heading2-size);
}

.reveal h3 {
  font-size: var(--r-heading3-size);
}

.reveal h4 {
  font-size: var(--r-heading4-size);
}

.reveal h1 {
  text-shadow: var(--r-heading1-text-shadow);
}

/*********************************************
 * OTHER
 *********************************************/
.reveal p {
  margin: var(--r-block-margin) 0;
  line-height: 1.3;
}

/* Remove trailing margins after titles */
.reveal h1:last-child,
.reveal h2:last-child,
.reveal h3:last-child,
.reveal h4:last-child,
.reveal h5:last-child,
.reveal h6:last-child {
  margin-bottom: 0;
}

/* Ensure certain elements are never larger than the slide itself */
.reveal img,
.reveal video,
.reveal iframe {
  max-width: 95%;
  max-height: 95%;
}

.reveal strong,
.reveal b {
  font-weight: bold;
}

.reveal em {
  font-style: italic;
}

.reveal ol,
.reveal dl,
.reveal ul {
  display: inline-block;
  text-align: left;
  margin: 0 0 0 1em;
}

.reveal ol {
  list-style-type: decimal;
}

.reveal ul {
  list-style-type: disc;
}

.reveal ul ul {
  list-style-type: square;
}

.reveal ul ul ul {
  list-style-type: circle;
}

.reveal ul ul,
.reveal ul ol,
.reveal ol ol,
.reveal ol ul {
  display: block;
  margin-left: 40px;
}

.reveal dt {
  font-weight: bold;
}

.reveal dd {
  margin-left: 40px;
}

.reveal blockquote {
  display: block;
  position: relative;
  width: 70%;
  margin: var(--r-block-margin) auto;
  padding: 5px;
  font-style: italic;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}

.reveal blockquote p:first-child,
.reveal blockquote p:last-child {
  display: inline-block;
}

.reveal q {
  font-style: italic;
}

.reveal pre {
  display: block;
  position: relative;
  width: 90%;
  margin: var(--r-block-margin) auto;
  text-align: left;
  font-size: 0.55em;
  font-family: var(--r-code-font);
  line-height: 1.2em;
  word-wrap: break-word;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.reveal code {
  font-family: var(--r-code-font);
  text-transform: none;
  tab-size: 2;
}

.reveal pre code {
  display: block;
  padding: 5px;
  overflow: auto;
  max-height: 400px;
  word-wrap: normal;
}

.reveal .code-wrapper {
  white-space: normal;
}

.reveal .code-wrapper code {
  white-space: pre;
}

.reveal table {
  margin: auto;
  border-collapse: collapse;
  border-spacing: 0;
}

.reveal table th {
  font-weight: bold;
}

.reveal table th,
.reveal table td {
  text-align: left;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-bottom: 1px solid;
}

.reveal table th[align=center],
.reveal table td[align=center] {
  text-align: center;
}

.reveal table th[align=right],
.reveal table td[align=right] {
  text-align: right;
}

.reveal table tbody tr:last-child th,
.reveal table tbody tr:last-child td {
  border-bottom: none;
}

.reveal sup {
  vertical-align: super;
  font-size: smaller;
}

.reveal sub {
  vertical-align: sub;
  font-size: smaller;
}

.reveal small {
  display: inline-block;
  font-size: 0.6em;
  line-height: 1.2em;
  vertical-align: top;
}

.reveal small * {
  vertical-align: top;
}

.reveal img {
  margin: var(--r-block-margin) 0;
}

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: var(--r-link-color);
  text-decoration: none;
  transition: color 0.15s ease;
}

.reveal a:hover {
  color: var(--r-link-color-hover);
  text-shadow: none;
  border: none;
}

.reveal .roll span:after {
  color: #fff;
  background: var(--r-link-color-dark);
}

/*********************************************
 * Frame helper
 *********************************************/
.reveal .r-frame {
  border: 4px solid var(--r-main-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.reveal a .r-frame {
  transition: all 0.15s linear;
}

.reveal a:hover .r-frame {
  border-color: var(--r-link-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);
}

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: var(--r-link-color);
}

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: var(--r-link-color);
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: var(--r-background-color);
  }
}
`,_e=`
/*
Monokai style - ported by Luigi Maselli - http://grigio.org
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #272822;
  color: #ddd;
}

.hljs-tag,
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-strong,
.hljs-name {
  color: #f92672;
}

.hljs-code {
  color: #66d9ef;
}

.hljs-class .hljs-title {
  color: white;
}

.hljs-attribute,
.hljs-symbol,
.hljs-regexp,
.hljs-link {
  color: #bf79db;
}

.hljs-string,
.hljs-bullet,
.hljs-subst,
.hljs-title,
.hljs-section,
.hljs-emphasis,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #a6e22e;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-selector-id {
  font-weight: bold;
}
`,ze=`
/*********************************************
 * COLORS
 *********************************************/

:root {
  --nlesc-blue: #009DDD;
  --nlesc-purple: #380339;
  --nlesc-yellow: #FFB213;
  --light-gray: #D8D8D8;
  --dark-gray: #2b2b2b;
  --gray-transparent: rgba(128, 128, 128, .5);

  --link-color: var(--nlesc-purple);
  --link-color-hover: var(--nlesc-yellow);

}

/*********************************************
 * GLOBAL STYLES
 *********************************************/

p, div, ul {
  font-family: "Assistant", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 400 !important;
  font-style: normal;
}

h1, h2, h3 {
  font-family: "Nunito" !important;
  font-weight: 700 !important;
}

h4, h5 {
  font-family: "Assistant", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 700 !important;
  font-style: normal;
}

code {
  font-family: "Fira Code", monospace !important;
  font-optical-sizing: auto !important;
  font-weight: 500;
  font-style: normal;
  background-color: var(--gray-transparent);
}

.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  text-transform: none;
}

.reveal {
  font-size: 36px; }  /* make stuff smaller */

::selection {
  color: #0f0;
  background: var(--nlesc-purple);
  text-shadow: none; }

::-moz-selection {
  color: #fff;
  background: var(--nlesc-purple);
  text-shadow: none; }


/*********************************************
 * CUSTOM COLORS
 *********************************************/
.primary { color: var(--nlesc-blue) !important; }
.secondary { color: var(--nlesc-purple) !important; }
.tertiary { color: var(--light-gray) !important; }

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: var(--link-color); }

.reveal a:hover {
  color: var(--link-color-hover); }

.reveal .roll span:after {
  color: #fff;
  background: var(--nlesc-blue); }

/*********************************************
 * IMAGES
 *********************************************/
.reveal section img { /* undo stupid img frames */
  background: none;
  border: none;
  box-shadow: none;
}

.reveal a:hover img {
  border-color: var(--nlesc-blue); }

/*********************************************
 * HIGHLIGHT COLORS
 *********************************************/

.reveal .slides section .fragment.highlight-blue.visible {
  color: var(--nlesc-blue); }

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: var(--nlesc-yellow); }

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: var(--nlesc-yellow); }

.reveal .progress span {
  background: var(--nlesc-yellow);
  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);
  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);
  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }

/*********************************************
 * FOOTER
 *********************************************/

.slides .footer {
  font-size: x-small !important;
  width: 100%;
  clear: both;
/*  padding: 50px 0 0 0;*/
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: var(--dark-gray); } }

/*********************************************
 * DIM BACKGROUND PICTURES
 *********************************************/
.dim .backgrounds {
	-webkit-filter: brightness(.4) !important;
	-moz-filter: brightness(.4) !important;
	-o-filter: brightness(.4) !important;
	-ms-filter: brightness(.4) !important;
	filter: brightness(.4) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.dim_3 .backgrounds {
	-webkit-filter: brightness(.3) !important;
	-moz-filter: brightness(.3) !important;
	-o-filter: brightness(.3) !important;
	-ms-filter: brightness(.3) !important;
	filter: brightness(.3) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.dim_8 .backgrounds {
	-webkit-filter: brightness(.8) !important;
	-moz-filter: brightness(.8) !important;
	-o-filter: brightness(.8) !important;
	-ms-filter: brightness(.8) !important;
	filter: brightness(.8) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.backgrounds {
	-webkit-filter: brightness(1) !important;
	-moz-filter: brightness(1) !important;
	-o-filter: brightness(1) !important;
	-ms-filter: brightness(1) !important;
	filter: brightness(1) !important;
  -webkit-transition: -webkit-filter 1s linear;
  transition: filter 1s linear;
}

/*********************************************
 * ALLOW FOR DECORATIONS
 *********************************************/
.slides {
	/* puts the slide content above overlays and decorations*/
	z-index: 10 !important;
}

.speaker-notes {
	/* puts the slide content above overlays and decorations*/
	z-index: 3 !important;
}

footer {
	display: none !important;
}
`,Se=function(b){if(!document.getElementById("fonts")){var n=document.getElementsByTagName("head")[0],t=document.createElement("link");t.id="fonts",t.rel="stylesheet",t.type="text/css",t.href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Fira+Code:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",t.media="all",n.appendChild(t)}if(!document.getElementById("icons")){var n=document.getElementsByTagName("head")[0],t=document.createElement("link");t.id="icons",t.rel="stylesheet",t.type="text/css",t.href="https://fonts.googleapis.com/icon?family=Material+Icons",t.media="all",n.appendChild(t)}const e=`
<div id="blue_pane_left" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 0; right: 50%; bottom: 0; top: 0; z-index: 2;"></div>
<div id="blue_pane_right" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 50%; right: 0; bottom: 0; top: 0; z-index: 2;"></div>
<div id="touch_pane" style="background-color: white; transition: opacity 1s; opacity: 0; position: absolute; left: 0; right: 66.6%; bottom: 0; top: 0; display: flex; align-items: center; justify-content: center; z-index: 2;">
  <h1 style="color: black; text-align: left;">Let's stay<br>in touch</h1>
</div>
<div id="purple_half_circle_top" style="transition: top 1s; opacity: 1; position: absolute; background-color: var(--nlesc-purple); left: 0; top: -17vw; width: 34vw; height: 17vw; border-radius: 0 0 20vw 20vw; z-index: 2;"></div>
<div id="yellow_half_strip" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-yellow); right: 50%; bottom: -25vw; width: 17vw; height: 25vw; border-radius: 20vw 0 0 0; z-index: 2;"></div>
<div id="purple_strip_bottom" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-purple); right: calc(50% + 17vw); bottom: -10vw; width: 16vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2;"></div>
<div id="logo_color" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="width: 12vw;">
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
<div id="logo_part_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   inkscape:version="1.0.2 (1.0.2+r75+1)"
    style="width: 12vw;">
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
<div id="logo_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="width: 12vw;"
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
<div id="purple_overlay" style="background-color: var(--nlesc-purple); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="blue_overlay" style="background-color: var(--nlesc-blue); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="white_overlay" style="background-color: white; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="black_overlay" style="background-color: black; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="yellow_strip" style="background-color: var(--nlesc-yellow); transition: left 1s; width: 10vw; height: 70vh; border-radius: 10vw 10vw 0 0; z-index: 2; position: absolute; left: -10vw; bottom: 0;">
</div>
<div id="yellow_flag" style="background-color: var(--nlesc-yellow); transition: left 1s, bottom 1s; width: 10vh; height: 12vh; border-radius: 0 6vh 6vh 0; z-index: 3; position: absolute; left: -10vh; bottom: 5vh; margin: 0; padding: 0;">
  <svg id="left_e" style="position: absolute; height: 10vh; margin: 1vh 0; padding: 0;" viewBox="0 0 27 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<div id="purple_half_circle_bottom" style="transition: bottom 1s; background-color: var(--nlesc-purple); width: 20vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2; position: absolute; left: 0; bottom: -10vw;">
<svg id="left_e"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="position: absolute; bottom: 2vw; left: 6vw; width: 8vw;">
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
<div id="purple_blob" style="transition: top 1s; position: absolute; display: flex; right: 0; top: -50vh; z-index: 2;">
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 25vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 50vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div class="box" style="background: var(--nlesc-purple); position: absolute; right: 10vw; top: 0; width: 5vw; height: calc(25vh + 5vw); border-corner-shape: scoop; background: yellow; background: linear-gradient(45deg,  transparent 10vw, var(--nlesc-purple) 0) bottom left; background-image: radial-gradient(circle at 0 100%, rgba(204,0,0,0) 5vw, var(--nlesc-purple) 15px)">
  </div>
</div>
<div id="blue_strip" style="background-color: var(--nlesc-blue); transition: left 1s, right 1s; margin: 0; padding: 0; border-radius: 20vw 0 0 0; z-index: 2; position: absolute; right: -100vw; bottom: 0;">
  <div id="footer" style="text-align: right; line-height: 130%; padding: 0; margin: 1vw 1vw 1vw 3vw; bottom: 0; right: 0;">
  </div>
</div>
<svg id="right_e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.549 662.141"  style="transition: right 1s, top 1s; position: absolute; top: 10vh; right: -4vw; width: 4vw; z-index: 3;">
  <path id="Path_88" data-name="Path 88" d="M342.892,527.031q17.52-21.911,45.055-35.264a133.418,133.418,0,0,1,36-11.063V357.814c-33.264,2.515-63.486,9.336-90.408,20.725q-52.012,21.874-88.269,58.407-47.551,46.277-70.694,111.421-23.2,65.132-23.177,141.8,0,77.95,25.652,142.459Q202.723,897.2,251.563,943.4a314.339,314.339,0,0,0,88.213,56.587q37.073,15.944,84.176,19.965V896.642a104.455,104.455,0,0,1-25.345-8.657,178.837,178.837,0,0,1-40.683-27.369Q334.157,838.7,322.27,805.822a202.364,202.364,0,0,1-11.888-69.4h113.57V625.625H309.123q1.256-31.6,8.759-54.767Q325.384,547.762,342.892,527.031Z" transform="translate(-151.403 -357.814)" fill="#fff"/>
</svg>
`;function r(o){const c=document.createElement("style");c.type="text/css",c.innerHTML=o,document.head.appendChild(c)}function h(){if(window.location.search.match(/print-pdf/gi)){const o=document.getElementsByClassName("slide-background");for(let c=0;c<o.length;c++)o[c].insertAdjacentHTML("afterbegin",e)}else{const o=document.querySelectorAll("div.reveal");for(let c=0;c<o.length;c++)o[c].insertAdjacentHTML("afterbegin",e)}z()}b.on("ready",o=>{r(xe),r(_e),r(ze),h(),b.on("slidechanged",c=>{d==!1&&(console.log("slide changed"),z())}),b.on("overviewshown",c=>{d=!0,f()}),b.on("overviewhidden",c=>{d=!1,z()})});function p(o){document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=0,document.getElementById(o).style.opacity=1}var d=!1;function w(o){var c=.8;for(let y=0;y<11;y++)o.includes(y)&&(c=y/10,console.log("opacity set to "+c));return c}function z(){console.log("set decorations");let o=document.documentElement;var c=b.getCurrentSlide();if(c.contains(c.querySelector("footer"))?(document.getElementById("footer").innerHTML=c.querySelector("footer").innerHTML,document.getElementById("blue_strip").style.right=0,console.log("footer (and blue_strip)")):(document.getElementById("blue_strip").style.right="-"+document.getElementById("blue_strip").offsetWidth+"px",console.log("no footer")),c.getAttribute("data-state")){var y=c.getAttribute("data-state"),T=w(y);console.log("DS"+y),y.includes("standard")&&(y+=" logo yellow_flag white_overlay"),y.includes("two_pane")&&(y+=" logo yellow_flag white_overlay blue_pane_right"),y.includes("about")&&(y+=" logo white_overlay blue_pane_left purple_half_circle_top purple_strip_bottom yellow_half_strip"),y.includes("touch")&&(y+=" logo blue_overlay touch_pane purple_blob right_e_bottom"),y.includes("purple_overlay")?(document.getElementById("purple_overlay").style.opacity=T,document.getElementById("purple_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=1,c.classList.remove("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-yellow)"),o.style.setProperty("--link-color-hover","var(--nlesc-blue)"),console.log("purple overlay")):(document.getElementById("purple_overlay").style.opacity=0,console.log("no purple overlay")),y.includes("white_overlay")?(document.getElementById("white_overlay").style.opacity=T,document.getElementById("white_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=1,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=0,c.classList.add("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-blue)"),o.style.setProperty("--link-color-hover","var(--nlesc-yellow)"),console.log("white overlay")):(document.getElementById("white_overlay").style.opacity=0,console.log("no white overlay")),y.includes("black_overlay")?(document.getElementById("black_overlay").style.opacity=T,document.getElementById("black_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=1,c.classList.remove("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-yellow)"),o.style.setProperty("--link-color-hover","var(--nlesc-blue)"),console.log("black overlay")):(document.getElementById("black_overlay").style.opacity=0,console.log("no black overlay")),y.includes("blue_overlay")?(document.getElementById("blue_overlay").style.opacity=T,document.getElementById("blue_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=1,document.getElementById("logo_part_white").style.opacity=0,c.classList.remove("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-yellow)"),o.style.setProperty("--link-color-hover","var(--nlesc-purple)"),console.log("blue overlay")):(document.getElementById("blue_overlay").style.opacity=0,console.log("no blue overlay")),y.includes("blue_pane_right")?(document.getElementById("blue_pane_right").style.opacity=1,document.getElementById("blue_pane_right").style.transform="translateY(0)",c.classList.remove("has-dark-background"),c.classList.add("has-light-background"),console.log("blue_pane_right")):(document.getElementById("blue_pane_right").style.opacity=0,console.log("no blue_pane_right")),y.includes("blue_pane_left")?(document.getElementById("blue_pane_left").style.opacity=1,document.getElementById("blue_pane_left").style.transform="translateY(0)",p("logo_white"),c.classList.remove("has-dark-background"),c.classList.add("has-light-background"),console.log("blue_pane_left")):(document.getElementById("blue_pane_left").style.opacity=0,console.log("no blue_pane_left")),y.includes("touch_pane")?(document.getElementById("touch_pane").style.opacity=1,document.getElementById("touch_pane").style.transform="translateY(0)",p("logo_color"),c.classList.remove("has-light-background"),c.classList.add("has-dark-background"),console.log("touch_pane")):(document.getElementById("touch_pane").style.opacity=0,console.log("no touch_pane")),y.includes("logo")?(document.getElementById("logo_color").style.left="3vw",document.getElementById("logo_part_white").style.left="3vw",document.getElementById("logo_white").style.left="3vw",console.log("logo")):(document.getElementById("logo_color").style.left="-12vw",document.getElementById("logo_part_white").style.left="-12vw",document.getElementById("logo_white").style.left="-12vw",console.log("no logo")),y.includes("yellow_strip")?(document.getElementById("yellow_strip").style.left=0,console.log("yellow_strip")):(document.getElementById("yellow_strip").style.left="-10vw",console.log("no yellow_strip")),y.includes("yellow_flag")?(document.getElementById("yellow_flag").style.left=0,console.log("yellow_flag")):(document.getElementById("yellow_flag").style.left="-10vh",console.log("no yellow_flag")),y.includes("purple_half_circle_top")?(document.getElementById("purple_half_circle_top").style.top=0,p("logo_part_white"),console.log("purple_half_circle_top")):(document.getElementById("purple_half_circle_top").style.top="-17vw",console.log("no purple_half_circle_top")),y.includes("purple_half_circle_bottom")?(document.getElementById("purple_half_circle_bottom").style.bottom=0,document.getElementById("yellow_flag").style.bottom="20vh",console.log("purple_half_circle_bottom")):(document.getElementById("purple_half_circle_bottom").style.bottom="-10vw",document.getElementById("yellow_flag").style.bottom="5vh",console.log("no purple_half_circle_bottom")),y.includes("purple_strip_bottom")?(document.getElementById("purple_strip_bottom").style.bottom=0,console.log("purple_strip_bottom")):(document.getElementById("purple_strip_bottom").style.bottom="-10vw",console.log("no purple_strip_bottom")),y.includes("yellow_half_strip")?(document.getElementById("yellow_half_strip").style.bottom=0,console.log("yellow_half_strip")):(document.getElementById("yellow_half_strip").style.bottom="-25vw",console.log("no yellow_half_strip")),y.includes("purple_blob")?(document.getElementById("purple_blob").style.top=0,console.log("purple_blob")):(document.getElementById("purple_blob").style.top="-50vh",console.log("no purple_blob")),y.includes("right_e_top")?(document.getElementById("right_e").style.top="10vh",document.getElementById("right_e").style.right=0,console.log("right_e_top")):y.includes("right_e_bottom")?(document.getElementById("right_e").style.top="60vh",document.getElementById("right_e").style.right=0,console.log("right_e_bottom")):(document.getElementById("right_e").style.right="-4vw",console.log("no right_e")),y.includes("clear_background")&&(document.getElementById("purple_overlay").style.transform="translateY(100vh)",document.getElementById("white_overlay").style.transform="translateY(100vh)",document.getElementById("black_overlay").style.transform="translateY(100vh)",document.getElementById("blue_overlay").style.transform="translateY(100vh)",document.getElementById("blue_pane_right").style.transform="translateY(100vh)",document.getElementById("blue_pane_left").style.transform="translateY(100vh)",document.getElementById("touch_pane").style.transform="translateY(100vh)")}else console.log("nothing special")}function f(){console.log("removeDecorations"),document.getElementById("purple_overlay").style.opacity=0,document.getElementById("white_overlay").style.opacity=0,document.getElementById("black_overlay").style.opacity=0,document.getElementById("blue_overlay").style.opacity=0,document.getElementById("blue_pane_right").style.opacity=0,document.getElementById("blue_pane_left").style.opacity=0,document.getElementById("touch_pane").style.opacity=0,document.getElementById("logo_color").style.left="-12vw",document.getElementById("logo_part_white").style.left="-12vw",document.getElementById("logo_white").style.left="-12vw",document.getElementById("yellow_strip").style.left="-10vw",document.getElementById("yellow_flag").style.left="-10vh",document.getElementById("purple_half_circle_top").style.top="-17vw",document.getElementById("purple_half_circle_bottom").style.bottom="-10vw",document.getElementById("purple_strip_bottom").style.bottom="-10vw",document.getElementById("yellow_half_strip").style.bottom="-25vw",document.getElementById("purple_blob").style.top="-50vh",document.getElementById("right_e").style.right="-4vw",document.getElementById("blue_strip").style.right="-"+document.getElementById("blue_strip").offsetWidth+"px"}},Ee={class:"flex relative box-border h-full reveal bg-eScienceWhite z-10"},Ae={class:"slides flex h-full w-full"},Te={"data-markdown":"","data-separator":"^\\r?\\n===\\r?\\n$","data-separator-vertical":"^\\r?\\n==\\r?\\n$","data-separator-notes":"^Note:"},$e={props:{slidescontent:{type:String,default:"Missing Document"}},methods:{stripFrontmatter(b){return b.replace(/^---$.*?^---$/ms,"")}}},Ie=Wt({...$e,__name:"Slides",setup(b){return Yt(()=>{console.log("Slides Mounted"),It(()=>import("./B3O8JSaZ.js"),[],import.meta.url).then(n=>{It(()=>import("./DN7Rh_EM.js"),[],import.meta.url).then(t=>{new n.default().initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"none",embedded:!0,showNotes:!0,plugins:[ke,t.default,be,we,ve]})})})}),(n,t)=>(gt(),vt("div",Ee,[xt("div",Ae,[xt("section",Te,Gt(n.stripFrontmatter(b.slidescontent)),1)])]))}}),Re={},Le={key:0,class:"overflow-hidden h-full border-8 rounded-xl border-eScienceWhite z-10"},Be={key:1,class:"flex justify-center items-center"},Me={class:"flex m-4 my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12"};function He(b,n){const t=Ie,e=ne,r=se;return gt(),Jt(r,null,{default:Xt(({doc:h})=>[h.type==="slides"?(gt(),vt("div",Le,[Rt(t,{slidescontent:h.plainText},null,8,["slidescontent"])])):(gt(),vt("div",Be,[xt("div",Me,[Rt(e,{value:h,class:"font-body prose-lg max-w-4xl"},null,8,["value"])])]))]),_:1})}const Ue=Kt(Re,[["render",He]]);export{Ue as default};
