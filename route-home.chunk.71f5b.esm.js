(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+h6k":function(t){t.exports={paragraph:"paragraph__3XZVW",textarea:"textarea__lochO","label-text":"label-text__3th0i",count:"count__1uRWR","edit-form":"edit-form__1rRzC",delete:"delete__3Sp8N",move:"move__3cboQ","move-button":"move-button__163WB"}},"A+Cz":function(t){t.exports={"add-button":"add-button__1KgZw"}},FA6U:function(t){t.exports={home:"home__5d1wS"}},FDtd:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function r(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)e.indexOf(n=c[a])>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)e.indexOf(n=c[a])>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function c(t){const e=r(t,["className","type"]);let n=`${f.a.btn} ${t.className}`;return"primary"===t.type&&(n+=" "+f.a["btn-primary"]),Object(j.h)("button",a({className:n},e),t.children)}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function l(t){return Object(j.h)("svg",o({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),Object(j.h)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))}function i(){const{dispatch:t}=Object(v.b)(x.a),e=Object(v.a)(()=>{t(Object(x.b)())},[]);return Object(j.h)(c,{className:w.a["add-button"],type:"primary",onClick:e},Object(j.h)(l,{className:f.a["btn-icon"]})," ",Object(j.h)("span",null,"追加する"))}function s(){return Object(j.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(j.h)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}))}function h(){return Object(j.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(j.h)("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}))}function b(){return Object(j.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(j.h)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))}function u(t){const{state:e,dispatch:n}=Object(v.b)(x.a),a=e.paragraphs[t.id];if(!a)return null;const r=Object(v.a)((function(t){return Object(v.a)((...e)=>{n(t(...e))},[])}),[]),c=t.index,o=c===e.list.length-1,l=Object(v.a)(()=>{n(Object(x.f)(c,c-1))},[c]),i=Object(v.a)(()=>{n(Object(x.f)(c,c+1))},[c]);return Object(j.h)(p,{id:t.id,index:c,text:a.text,isSorting:e.isSorting,isLastItem:o,focus:c===e.lastAdded,onChange:r(x.j),onDelete:r(x.c),onMoveUpward:l,onMoveDownward:i})}function p(t){const e=Object(v.a)(e=>{var n;(null==t.onChange||t.onChange(e.currentTarget.value,t.id),a.current)&&(a.current.style.height=0===a.current.value.length?"":(null==(n=a.current)?void 0:n.scrollHeight)+"px")},[t.onChange,t.id]),n=Object(v.a)(e=>{e.preventDefault(),null==t.onDelete||t.onDelete(t.id)},[t.id]),a=Object(v.f)(null);Object(v.c)(()=>{var e;t.focus&&(null==(e=a.current)||e.focus())},[t.focus]);const r="paragraph-"+t.index,c=t.isSorting?0:-1;return Object(j.h)("li",{className:`${C.a.card} ${z.a.paragraph}`,"data-is-editing":t.isSorting?"true":"false"},Object(j.h)("div",{className:`${z.a.move} ${z.a["edit-form"]}`},Object(j.h)("button",{className:z.a["move-button"],"aria-label":"上へ移動",tabIndex:c,onClick:t.onMoveUpward,disabled:0===t.index},Object(j.h)(h,null)),Object(j.h)("button",{className:z.a["move-button"],"aria-label":"下へ移動",tabIndex:c,onClick:t.onMoveDownward,disabled:t.isLastItem},Object(j.h)(s,null))),Object(j.h)("label",{className:z.a.textarea},Object(j.h)("textarea",{id:r,name:"paragraph-"+t.index,ref:a,value:t.text,onKeyUp:e,onChange:e,onPaste:e,placeholder:0===t.index?"文章を入力":""}),Object(j.h)("div",{className:z.a.count,"aria-label":"文字カウント"},t.text.length),Object(j.h)("span",{className:z.a["label-text"]},"段落")),Object(j.h)("div",{className:`${z.a.delete} ${z.a["edit-form"]}`},Object(j.h)("button",{onClick:n,"aria-label":"削除ボタン",tabIndex:c},Object(j.h)(b,null))))}function d(t){const e=Object(v.d)(()=>t.list.map(e=>{var n,a;const r=(null!=(n=null==(a=t.paragraph[e])?void 0:a.text)?n:"").split("\n"),c=r.reduce((t,e,n)=>n===r.length-1?[...t,e]:[...t,e,Object(j.h)("br",{key:"br-"+n})],[]);return Object(j.h)("p",{className:""+M.a["japanese-text"],key:"preview-paragraph-"+e},c)}),[t.list,t.paragraph]);return Object(j.h)("div",{className:`${S.a.preview} ${C.a.card}`},e)}function O(){const{state:t}=Object(v.b)(x.a);return Object(j.h)("div",{className:y.a.editor},Object(j.h)("div",null,Object(j.h)("ul",null,t.list.map((e,n)=>{const a=t.paragraphs[e];return a&&Object(j.h)(u,{key:"paragraph-"+a.id,id:a.id,index:n})}),Object(j.h)("li",null,Object(j.h)(i,null)))),t.showsPreview&&Object(j.h)("div",null,Object(j.h)(d,{list:t.list,paragraph:t.paragraphs})))}n.r(e);var j=n("hosL"),v=n("QRet"),g=n("RCZ+"),f=n.n(g),m=n("A+Cz"),w=n.n(m),x=n("F7vc"),_=n("hRbA"),y=n.n(_),N=n("NSHr"),C=n.n(N),k=n("+h6k"),z=n.n(k),R=n("z7YW"),S=n.n(R),$=n("weRa"),M=n.n($),V=n("FA6U"),A=n.n(V);e.default=()=>Object(j.h)("div",{className:A.a.home},Object(j.h)(O,null))},NSHr:function(t){t.exports={card:"card__3mJh1"}},"RCZ+":function(t){t.exports={btn:"btn__ove9P","btn-icon":"btn-icon__3KkgF","btn-primary":"btn-primary__1R6Z0"}},hRbA:function(t){t.exports={editor:"editor__1I80g"}},weRa:function(t){t.exports={"japanese-text":"japanese-text__1TNcs"}},z7YW:function(t){t.exports={preview:"preview__2K3aJ"}}}]);
//# sourceMappingURL=route-home.chunk.71f5b.esm.js.map