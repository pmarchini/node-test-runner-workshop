import{d as B,y as g,t as V,D as z,n as F,a7 as K,o as h,b as k,i as m,e as a,x as C,l as R,F as E,g as j,a8 as X,h as I,ad as O,ae as U,p as G,a as J}from"../modules/vue-DLCF4mbd.js";import{C as L,_ as H,q as Q,r as W}from"../index-CT2A5rYQ.js";import{n as Y}from"../modules/unplugin-icons-vuOVk-PL.js";const w="slidev-note-fade",_="slidev-note-click-mark",Z=B({__name:"NoteDisplay",props:{class:{type:[String,Array],required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},highlight:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(d,{expose:u,emit:n}){u();const e=d,f=n,v=g(()=>{var c;return e.clicksContext!=null&&((c=e.noteHtml)==null?void 0:c.includes("slidev-note-click-mark"))}),l=V(null);function o(){var N;if(!l.value||!v.value)return;const c=Array.from(l.value.querySelectorAll(`.${_}`)),i=+(((N=e.clicksContext)==null?void 0:N.current)??L),y=i<0||i>=L||!e.highlight,M=new Set;function q(t){!t||t===l.value||(M.add(t),t.parentElement&&q(t.parentElement))}const A=new Map;for(const t of c){const r=t.parentElement,s=Number(t.dataset.clicks);A.set(s,t),q(r),Array.from(r.childNodes).forEach(b=>{if(b.nodeType===3){const D=document.createElement("span");D.textContent=b.textContent,r.insertBefore(D,b),b.remove()}})}const P=Array.from(l.value.querySelectorAll("*"));let x=0;const S=new Map;for(const t of P)S.has(x)||S.set(x,[]),S.get(x).push(t),t.classList.contains(_)&&(x=Number(t.dataset.clicks)||x+1);for(const[t,r]of S)y?r.forEach(s=>s.classList.remove(w)):r.forEach(s=>s.classList.toggle(w,M.has(s)?!1:t!==i));for(const[t,r]of A)r.classList.remove(w),r.classList.toggle(`${_}-past`,y?!1:t<i),r.classList.toggle(`${_}-active`,y?!1:t===i),r.classList.toggle(`${_}-next`,y?!1:t===i+1),r.classList.toggle(`${_}-future`,y?!1:t>i+1),r.ondblclick=s=>{f("markerDblclick",s,t),!s.defaultPrevented&&(e.clicksContext.current=t,s.stopPropagation(),s.stopImmediatePropagation())},r.onclick=s=>{f("markerClick",s,t)},e.autoScroll&&t===i&&r.scrollIntoView({block:"center",behavior:"smooth"})}z(()=>{var c;return[e.noteHtml,(c=e.clicksContext)==null?void 0:c.current,e.highlight]},()=>{F(()=>{o()})},{immediate:!0}),K(()=>{o()});const p={props:e,emit:f,withClicks:v,noteDisplay:l,CLASS_FADE:w,CLASS_MARKER:_,highlightNote:o};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),$=["innerHTML"],ee=["textContent"],te=["textContent"];function oe(d,u,n,e,f,v){return n.noteHtml?(h(),k("div",{key:0,ref:"noteDisplay",class:m(["prose overflow-auto outline-none slidev-note",[e.props.class,e.withClicks?"slidev-note-with-clicks":""]]),innerHTML:n.noteHtml},null,10,$)):n.note?(h(),k("div",{key:1,class:m(["prose overflow-auto outline-none slidev-note",e.props.class])},[a("p",{textContent:C(n.note)},null,8,ee)],2)):(h(),k("div",{key:2,class:m(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",e.props.class])},[a("p",{textContent:C(e.props.placeholder||"No notes.")},null,8,te)],2))}const he=H(Z,[["render",oe],["__file","/home/runner/work/node-test-runner-workshop/node-test-runner-workshop/node_modules/@slidev/client/internals/NoteDisplay.vue"]]),ne=B({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0},readonly:{type:Boolean,required:!1},active:{type:Boolean,required:!1,default:!0}},setup(d,{expose:u}){u();const n=d,e=g(()=>n.clicksContext.total),f=g(()=>Q(0,n.clicksContext.clicksStart,e.value)),v=g(()=>e.value-f.value+1),l=g({get(){return n.clicksContext.current>e.value?-1:n.clicksContext.current},set(i){n.clicksContext.current=i}}),o=g(()=>W(f.value,e.value+1));function p(){n.readonly||(l.value<0||l.value>e.value)&&(l.value=0)}const c={props:n,total:e,start:f,length:v,current:l,clicksRange:o,onMousedown:p,get CLICKS_MAX(){return L}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),T=d=>(G("data-v-52a29648"),d=d(),J(),d),re=["title"],se={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},le=T(()=>a("div",{"flex-auto":""},null,-1)),ae={"text-primary":""},ce=T(()=>a("span",{op25:""},"/",-1)),ie={op50:""},de={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},ue=["min","max"];function fe(d,u,n,e,f,v){const l=Y;return h(),k("div",{class:m(["flex gap-1 items-center select-none",e.length?"":"op50"]),title:`Clicks in this slide: ${e.length}`},[a("div",se,[R(l,{"text-sm":"",op50:""}),le,e.current>=0&&e.current!==e.CLICKS_MAX&&n.active?(h(),k(E,{key:0},[a("span",ae,C(e.current),1),ce],64)):j("v-if",!0),a("span",ie,C(e.total),1)]),a("div",de,[(h(!0),k(E,null,X(e.clicksRange,o=>(h(),k("div",{key:o,border:"y main","of-hidden":"",relative:"",class:m([o===0?"rounded-l border-l":"",o===e.total?"rounded-r border-r":""]),style:I({width:e.length>0?`${1/e.length*100}%`:"100%"})},[a("div",{absolute:"","inset-0":"",class:m(o<=e.current?"bg-primary op15":"")},null,2),a("div",{class:m([+o==+e.current?"text-primary font-bold op100 border-primary":"op30 border-main",o===0?"rounded-l":"",o===e.total?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},C(o),3)],6))),128)),O(a("input",{"onUpdate:modelValue":u[0]||(u[0]=o=>e.current=o),class:m(["range",n.readonly?"pointer-events-none":""]),type:"range",min:e.start,max:e.total,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:I({"--thumb-width":`${1/(e.length+1)*100}%`}),onMousedown:e.onMousedown,onFocus:u[1]||(u[1]=o=>{var p;return(p=o.currentTarget)==null?void 0:p.blur()})},null,46,ue),[[U,e.current]])])],10,re)}const ke=H(ne,[["render",fe],["__scopeId","data-v-52a29648"],["__file","/home/runner/work/node-test-runner-workshop/node-test-runner-workshop/node_modules/@slidev/client/internals/ClicksSlider.vue"]]);export{ke as C,he as N};
