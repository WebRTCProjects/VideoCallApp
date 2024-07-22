import{a as y,i as Ce,w as L,o as le,m as ae,I as we,g as W,r as K,J as Ee,K as Se,L as Be,M as ie,t as Y,N as Me,O as qe,s as $e,h as M,P as G,R as ve,S as Oe,d as X,T as Pe,U as Te,V as Ie,c as fe,W as ge,p as je,X as De,Y as ze}from"./index.785636a8.js";const Re={dark:{type:Boolean,default:null}};function Ve(e,t){return y(()=>e.dark===null?t.dark.isActive:e.dark)}function Ne({validate:e,resetValidation:t,requiresQForm:u}){const i=Ce(we,!1);if(i!==!1){const{props:d,proxy:f}=W();Object.assign(f,{validate:e,resetValidation:t}),L(()=>d.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(f)):i.bindComponent(f)}),le(()=>{d.disable!==!0&&i.bindComponent(f)}),ae(()=>{d.disable!==!0&&i.unbindComponent(f)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,he=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,re={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>he.test(e),hexOrHexaColor:e=>be.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>me.test(e)||ee.test(e),hexaOrRgbaColor:e=>he.test(e)||te.test(e),anyColor:e=>be.test(e)||ee.test(e)||te.test(e)},Ke=[!0,!1,"ondemand"],Le={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ke.includes(e)}};function Ue(e,t){const{props:u,proxy:i}=W(),d=K(!1),f=K(null),c=K(null);Ne({validate:A,resetValidation:v});let k=0,$;const q=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),x=y(()=>u.disable!==!0&&q.value===!0),g=y(()=>u.error===!0||d.value===!0),H=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:f.value);L(()=>u.modelValue,()=>{z()}),L(()=>u.reactiveRules,j=>{j===!0?$===void 0&&($=L(()=>u.rules,()=>{z(!0)})):$!==void 0&&($(),$=void 0)},{immediate:!0}),L(e,j=>{j===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,x.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function v(){k++,t.value=!1,c.value=null,d.value=!1,f.value=null,I.cancel()}function A(j=u.modelValue){if(x.value!==!0)return!0;const B=++k,V=t.value!==!0?()=>{c.value=!0}:()=>{},F=(w,C)=>{w===!0&&V(),d.value=w,f.value=C||null,t.value=!1},_=[];for(let w=0;w<u.rules.length;w++){const C=u.rules[w];let T;if(typeof C=="function"?T=C(j,re):typeof C=="string"&&re[C]!==void 0&&(T=re[C](j)),T===!1||typeof T=="string")return F(!0,T),!1;T!==!0&&T!==void 0&&_.push(T)}return _.length===0?(F(!1),!0):(t.value=!0,Promise.all(_).then(w=>{if(w===void 0||Array.isArray(w)===!1||w.length===0)return B===k&&F(!1),!0;const C=w.find(T=>T===!1||typeof T=="string");return B===k&&F(C!==void 0,C),C===void 0},w=>(B===k&&(console.error(w),F(!0)),!1)))}function z(j){x.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&j!==!0)&&I()}const I=Ee(A,0);return ae(()=>{$!==void 0&&$(),I.cancel()}),Object.assign(i,{resetValidation:v,validate:A}),Se(i,"hasError",()=>g.value),{isDirtyModel:c,hasRules:q,hasError:g,errorMessage:H,validate:A,resetValidation:v}}const pe=/^on[A-Z]/;function Ze(e,t){const u={listeners:K({}),attributes:K({})};function i(){const d={},f={};for(const c in e)c!=="class"&&c!=="style"&&pe.test(c)===!1&&(d[c]=e[c]);for(const c in t.props)pe.test(c)===!0&&(f[c]=t.props[c]);u.attributes.value=d,u.listeners.value=f}return Be(i),i(),u}let ue,ne=0;const D=new Array(256);for(let e=0;e<256;e++)D[e]=(e+256).toString(16).substring(1);const He=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),ye=4096;function Ae(){(ue===void 0||ne+16>ye)&&(ne=0,ue=He(ye));const e=Array.prototype.slice.call(ue,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,D[e[0]]+D[e[1]]+D[e[2]]+D[e[3]]+"-"+D[e[4]]+D[e[5]]+"-"+D[e[6]]+D[e[7]]+"-"+D[e[8]]+D[e[9]]+"-"+D[e[10]]+D[e[11]]+D[e[12]]+D[e[13]]+D[e[14]]+D[e[15]]}let se=[],Qe=[];function ce(e){Qe.length===0?e():se.push(e)}function Ye(e){se=se.filter(t=>t!==e)}function Fe(e,t){return e===void 0?t===!0?`f_${Ae()}`:void 0:e}function de(e){return e!=null&&(""+e).length!==0}const We={...Re,...Le,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Je=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Xe({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:i,proxy:d,vnode:f}=W(),c=Ve(u,d.$q);return{requiredForAttr:e,tag:t===!0?y(()=>u.tag):{value:"label"},isDark:c,editable:y(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:K(!1),focused:K(!1),hasPopupOpen:!1,splitAttrs:Ze(i,f),targetUid:K(Fe(u.for,e)),rootRef:K(null),targetRef:K(null),controlRef:K(null)}}function Ge(e){const{props:t,emit:u,slots:i,attrs:d,proxy:f}=W(),{$q:c}=f;let k=null;e.hasValue===void 0&&(e.hasValue=y(()=>de(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:l,focus:C}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,p=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(p!==void 0?" / "+p:"")}}));const{isDirtyModel:$,hasRules:q,hasError:x,errorMessage:g,resetValidation:H}=Ue(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=y(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),z=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=y(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(B.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),j=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),B=y(()=>t.labelSlot===!0||t.label!==void 0),V=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),F=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),_=y(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});L(()=>t.for,n=>{e.targetUid.value=Fe(n,e.requiredForAttr)});function w(){const n=document.activeElement;let p=e.targetRef!==void 0&&e.targetRef.value;p&&(n===null||n.id!==e.targetUid.value)&&(p.hasAttribute("tabindex")===!0||(p=p.querySelector("[tabindex]")),p&&p!==n&&p.focus({preventScroll:!0}))}function C(){ce(w)}function T(){Ye(w);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function a(n){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function l(n,p){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),p!==void 0&&p())})}function s(n){ie(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{H(),c.platform.is.mobile!==!0&&($.value=!1)})}function r(){const n=[];return i.prepend!==void 0&&n.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},i.prepend())),n.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),x.value===!0&&t.noErrorIcon===!1&&n.push(R("error",[M(ve,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(R("inner-loading-append",i.loading!==void 0?i.loading():[M(Oe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(R("inner-clearable-append",[M(ve,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},i.append())),e.getInnerAppend!==void 0&&n.push(R("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function h(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(F.value))),B.value===!0&&n.push(M("div",{class:V.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(X(i.default))}function m(){let n,p;x.value===!0?g.value!==null?(n=[M("div",{role:"alert"},g.value)],p=`q--slot-error-${g.value}`):(n=X(i.error),p="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[M("div",t.hint)],p=`q--slot-hint-${t.hint}`):(n=X(i.hint),p="q--slot-hint"));const U=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&U===!1&&n===void 0)return;const S=M("div",{key:p,class:"q-field__messages col"},n);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:G},[t.hideBottomSpace===!0?S:M(Pe,{name:"q-transition--field-message"},()=>S),U===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function R(n,p){return p===null?null:M("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},p)}let b=!1;return Me(()=>{b=!0}),qe(()=>{b===!0&&t.autofocus===!0&&f.focus()}),le(()=>{$e.value===!0&&e.requiredForAttr===!0&&t.for===void 0&&(e.targetUid.value=`f_${Ae()}`),t.autofocus===!0&&f.focus()}),ae(()=>{k!==null&&clearTimeout(k)}),Object.assign(f,{focus:C,blur:T}),function(){const p=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,..._.value}:_.value;return M(e.tag.value,{ref:e.rootRef,class:[I.value,d.class],style:d.style,...p},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:j.value,tabindex:-1,...e.controlEvents},r()),A.value===!0?m():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},i.after()):null])}}const ke={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},oe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},_e=Object.keys(oe);_e.forEach(e=>{oe[e].regex=new RegExp(oe[e].pattern)});const et=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+_e.join("")+"])|(.)","g"),xe=/[.*+?^${}()|[\]\\]/g,O=String.fromCharCode(1),tt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function nt(e,t,u,i){let d,f,c,k,$,q;const x=K(null),g=K(v());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,z),L(()=>e.mask,a=>{if(a!==void 0)I(g.value,!0);else{const l=C(g.value);z(),e.modelValue!==l&&t("update:modelValue",l)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&I(g.value,!0)}),L(()=>e.unmaskedValue,()=>{x.value===!0&&I(g.value)});function v(){if(z(),x.value===!0){const a=_(C(e.modelValue));return e.fillMask!==!1?T(a):a}return e.modelValue}function A(a){if(a<d.length)return d.slice(-a);let l="",s=d;const r=s.indexOf(O);if(r>-1){for(let h=a-s.length;h>0;h--)l+=O;s=s.slice(0,r)+l+s.slice(r)}return s}function z(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&H(),x.value===!1){k=void 0,d="",f="";return}const a=ke[e.mask]===void 0?e.mask:ke[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(xe,"\\$&"),r=[],h=[],m=[];let R=e.reverseFillMask===!0,b="",n="";a.replace(et,(P,o,E,Q,Z)=>{if(Q!==void 0){const N=oe[Q];m.push(N),n=N.negate,R===!0&&(h.push("(?:"+n+"+)?("+N.pattern+"+)?(?:"+n+"+)?("+N.pattern+"+)?"),R=!1),h.push("(?:"+n+"+)?("+N.pattern+")?")}else if(E!==void 0)b="\\"+(E==="\\"?"":E),m.push(E),r.push("([^"+b+"]+)?"+b+"?");else{const N=o!==void 0?o:Z;b=N==="\\"?"\\\\\\\\":N.replace(xe,"\\\\$&"),m.push(N),r.push("([^"+b+"]+)?"+b+"?")}});const p=new RegExp("^"+r.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),U=h.length-1,S=h.map((P,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+P):o===U?new RegExp("^"+P+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+P));c=m,k=P=>{const o=p.exec(e.reverseFillMask===!0?P:P.slice(0,m.length+1));o!==null&&(P=o.slice(1).join(""));const E=[],Q=S.length;for(let Z=0,N=P;Z<Q;Z++){const J=S[Z].exec(N);if(J===null)break;N=N.slice(J.shift().length),E.push(...J)}return E.length!==0?E.join(""):P},d=m.map(P=>typeof P=="string"?P:O).join(""),f=d.split(O).join(l)}function I(a,l,s){const r=i.value,h=r.selectionEnd,m=r.value.length-h,R=C(a);l===!0&&z();const b=_(R),n=e.fillMask!==!1?T(b):b,p=g.value!==n;r.value!==n&&(r.value=n),p===!0&&(g.value=n),document.activeElement===r&&Y(()=>{if(n===f){const S=e.reverseFillMask===!0?f.length:0;r.setSelectionRange(S,S,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const S=r.selectionEnd;let P=h-1;for(let o=$;o<=P&&o<S;o++)d[o]!==O&&P++;B.right(r,P);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const S=e.reverseFillMask===!0?h===0?n.length>b.length?1:0:Math.max(0,n.length-(n===f?0:Math.min(b.length,m)+1))+1:h;r.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(p===!0){const S=Math.max(0,n.length-(n===f?0:Math.min(b.length,m+1)));S===1&&h===1?r.setSelectionRange(S,S,"forward"):B.rightReverse(r,S)}else{const S=n.length-m;r.setSelectionRange(S,S,"backward")}else if(p===!0){const S=Math.max(0,d.indexOf(O),Math.min(b.length,h)-1);B.right(r,S)}else{const S=h-1;B.right(r,S)}});const U=e.unmaskedValue===!0?C(n):n;String(e.modelValue)!==U&&(e.modelValue!==null||U!=="")&&u(U,!0)}function j(a,l,s){const r=_(C(a.value));l=Math.max(0,d.indexOf(O),Math.min(r.length,l)),$=l,a.setSelectionRange(l,s,"forward")}const B={left(a,l){const s=d.slice(l-1).indexOf(O)===-1;let r=Math.max(0,l-1);for(;r>=0;r--)if(d[r]===O){l=r,s===!0&&l++;break}if(r<0&&d[l]!==void 0&&d[l]!==O)return B.right(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},right(a,l){const s=a.value.length;let r=Math.min(s,l+1);for(;r<=s;r++)if(d[r]===O){l=r;break}else d[r-1]===O&&(l=r);if(r>s&&d[l-1]!==void 0&&d[l-1]!==O)return B.left(a,s);a.setSelectionRange(l,l,"forward")},leftReverse(a,l){const s=A(a.value.length);let r=Math.max(0,l-1);for(;r>=0;r--)if(s[r-1]===O){l=r;break}else if(s[r]===O&&(l=r,r===0))break;if(r<0&&s[l]!==void 0&&s[l]!==O)return B.rightReverse(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},rightReverse(a,l){const s=a.value.length,r=A(s),h=r.slice(0,l+1).indexOf(O)===-1;let m=Math.min(s,l+1);for(;m<=s;m++)if(r[m-1]===O){l=m,l>0&&h===!0&&l--;break}if(m>s&&r[l-1]!==void 0&&r[l-1]!==O)return B.leftReverse(a,s);a.setSelectionRange(l,l,"forward")}};function V(a){t("click",a),q=void 0}function F(a){if(t("keydown",a),Te(a)===!0||a.altKey===!0)return;const l=i.value,s=l.selectionStart,r=l.selectionEnd;if(a.shiftKey||(q=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&q===void 0&&(q=l.selectionDirection==="forward"?s:r);const h=B[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),h(l,q===s?r:s),a.shiftKey){const m=l.selectionStart;l.setSelectionRange(Math.min(q,m),Math.max(q,m),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?(B.left(l,s),l.setSelectionRange(l.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&(B.rightReverse(l,r),l.setSelectionRange(s,l.selectionEnd,"forward"))}function _(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return w(a);const l=c;let s=0,r="";for(let h=0;h<l.length;h++){const m=a[s],R=l[h];if(typeof R=="string")r+=R,m===R&&s++;else if(m!==void 0&&R.regex.test(m))r+=R.transform!==void 0?R.transform(m):m,s++;else return r}return r}function w(a){const l=c,s=d.indexOf(O);let r=a.length-1,h="";for(let m=l.length-1;m>=0&&r>-1;m--){const R=l[m];let b=a[r];if(typeof R=="string")h=R+h,b===R&&r--;else if(b!==void 0&&R.regex.test(b))do h=(R.transform!==void 0?R.transform(b):b)+h,r--,b=a[r];while(s===m&&b!==void 0&&R.regex.test(b));else return h}return h}function C(a){return typeof a!="string"||k===void 0?typeof a=="number"?k(""+a):a:k(a)}function T(a){return f.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?f.slice(0,-a.length)+a:a+f.slice(a.length)}return{innerValue:g,hasMask:x,moveCursorForPaste:j,updateMaskValue:I,onMaskedKeydown:F,onMaskedClick:V}}const ot={name:String};function lt(e){return y(()=>e.name||e.for)}function at(e,t){function u(){const i=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const rt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ut=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,it=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,st=/[a-z0-9_ -]$/i;function dt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ie.is.firefox===!0?st.test(u.data)===!1:rt.test(u.data)===!0||ut.test(u.data)===!0||it.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var ct=fe({name:"QInput",inheritAttrs:!1,props:{...We,...tt,...ot,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Je,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=W(),{$q:d}=i,f={};let c=NaN,k,$,q=null,x;const g=K(null),H=lt(e),{innerValue:v,hasMask:A,moveCursorForPaste:z,updateMaskValue:I,onMaskedKeydown:j,onMaskedClick:B}=nt(e,t,b,g),V=at(e,!0),F=y(()=>de(v.value)),_=dt(m),w=Xe(),C=y(()=>e.type==="textarea"||e.autogrow===!0),T=y(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),a=y(()=>{const o={...w.splitAttrs.listeners.value,onInput:m,onPaste:h,onChange:p,onBlur:U,onFocus:ge};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=_,A.value===!0&&(o.onKeydown=j,o.onClick=B),e.autogrow===!0&&(o.onAnimationend=R),o}),l=y(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...w.splitAttrs.attributes.value,id:w.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});L(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),L(()=>e.modelValue,o=>{if(A.value===!0){if($===!0&&($=!1,String(o)===c))return;I(o)}else v.value!==o&&(v.value=o,e.type==="number"&&f.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete f.value));e.autogrow===!0&&Y(n)}),L(()=>e.autogrow,o=>{o===!0?Y(n):g.value!==null&&u.rows>0&&(g.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&Y(n)});function s(){ce(()=>{const o=document.activeElement;g.value!==null&&g.value!==o&&(o===null||o.id!==w.targetUid.value)&&g.value.focus({preventScroll:!0})})}function r(){g.value!==null&&g.value.select()}function h(o){if(A.value===!0&&e.reverseFillMask!==!0){const E=o.target;z(E,E.selectionStart,E.selectionEnd)}t("paste",o)}function m(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const E=o.target.value;if(o.target.qComposing===!0){f.value=E;return}if(A.value===!0)I(E,!1,o.inputType);else if(b(E),T.value===!0&&o.target===document.activeElement){const{selectionStart:Q,selectionEnd:Z}=o.target;Q!==void 0&&Z!==void 0&&Y(()=>{o.target===document.activeElement&&E.indexOf(o.target.value)===0&&o.target.setSelectionRange(Q,Z)})}e.autogrow===!0&&n()}function R(o){t("animationend",o),n()}function b(o,E){x=()=>{q=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==o&&c!==o&&(c=o,E===!0&&($=!0),t("update:modelValue",o),Y(()=>{c===o&&(c=NaN)})),x=void 0},e.type==="number"&&(k=!0,f.value=o),e.debounce!==void 0?(q!==null&&clearTimeout(q),f.value=o,q=setTimeout(x,e.debounce)):x()}function n(){requestAnimationFrame(()=>{const o=g.value;if(o!==null){const E=o.parentNode.style,{scrollTop:Q}=o,{overflowY:Z,maxHeight:N}=d.platform.is.firefox===!0?{}:window.getComputedStyle(o),J=Z!==void 0&&Z!=="scroll";J===!0&&(o.style.overflowY="hidden"),E.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",J===!0&&(o.style.overflowY=parseInt(N,10)<o.scrollHeight?"auto":"hidden"),E.marginBottom="",o.scrollTop=Q}})}function p(o){_(o),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),t("change",o.target.value)}function U(o){o!==void 0&&ge(o),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),k=!1,$=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=v.value!==void 0?v.value:"")})}function S(){return f.hasOwnProperty("value")===!0?f.value:v.value!==void 0?v.value:""}ae(()=>{U()}),le(()=>{e.autogrow===!0&&n()}),Object.assign(w,{innerValue:v,fieldClass:y(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:b,hasValue:F,floatingLabel:y(()=>F.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||de(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:S()}:V.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},S()),M("span",e.shadowText)])});const P=Ge(w);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>g.value}),Se(i,"nativeEl",()=>g.value),P}}),vt=fe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=W(),d=K(null);let f=0;const c=[];function k(v){const A=typeof v=="boolean"?v:e.noErrorFocus!==!0,z=++f,I=(V,F)=>{u("validation"+(V===!0?"Success":"Error"),F)},j=V=>{const F=V.validate();return typeof F.then=="function"?F.then(_=>({valid:_,comp:V}),_=>({valid:!1,comp:V,err:_})):Promise.resolve({valid:F,comp:V})};return(e.greedy===!0?Promise.all(c.map(j)).then(V=>V.filter(F=>F.valid!==!0)):c.reduce((V,F)=>V.then(()=>j(F).then(_=>{if(_.valid===!1)return Promise.reject(_)})),Promise.resolve()).catch(V=>[V])).then(V=>{if(V===void 0||V.length===0)return z===f&&I(!0),!0;if(z===f){const{comp:F,err:_}=V[0];if(_!==void 0&&console.error(_),I(!1,F),A===!0){const w=V.find(({comp:C})=>typeof C.focus=="function"&&De(C.$)===!1);w!==void 0&&w.comp.focus()}}return!1})}function $(){f++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function q(v){v!==void 0&&ie(v);const A=f+1;k().then(z=>{A===f&&z===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function x(v){v!==void 0&&ie(v),u("reset"),Y(()=>{$(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){ce(()=>{if(d.value===null)return;const v=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),A=>A.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}je(we,{bindComponent(v){c.push(v)},unbindComponent(v){const A=c.indexOf(v);A>-1&&c.splice(A,1)}});let H=!1;return Me(()=>{H=!0}),qe(()=>{H===!0&&e.autofocus===!0&&g()}),le(()=>{e.autofocus===!0&&g()}),Object.assign(i.proxy,{validate:k,resetValidation:$,submit:q,reset:x,focus:g,getValidationComponents:()=>c}),()=>M("form",{class:"q-form",ref:d,onSubmit:q,onReset:x},X(t.default))}}),gt=fe({name:"QCard",props:{...Re,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=W(),i=Ve(e,u),d=y(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>M(e.tag,{class:d.value},X(t.default))}});function mt(){return Ce(ze)}export{vt as Q,ct as a,gt as b,Re as c,Ve as d,mt as u};
