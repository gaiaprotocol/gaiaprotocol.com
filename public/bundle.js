/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{backInDown:()=>Yn,backInLeft:()=>qn,backInRight:()=>jn,backInUp:()=>Gn,backOutDown:()=>Kn,backOutLeft:()=>Qn,backOutRight:()=>Jn,backOutUp:()=>Xn,bounce:()=>An,bounceIn:()=>Zn,bounceInDown:()=>ta,bounceInLeft:()=>ea,bounceInRight:()=>ia,bounceInUp:()=>sa,bounceOut:()=>oa,bounceOutDown:()=>ra,bounceOutLeft:()=>na,bounceOutRight:()=>aa,bounceOutUp:()=>la,easings:()=>xl,fadeIn:()=>ha,fadeInBottomLeft:()=>ca,fadeInBottomRight:()=>da,fadeInDown:()=>ua,fadeInDownBig:()=>pa,fadeInLeft:()=>fa,fadeInLeftBig:()=>ma,fadeInRight:()=>ga,fadeInRightBig:()=>ba,fadeInTopLeft:()=>va,fadeInTopRight:()=>ya,fadeInUp:()=>wa,fadeInUpBig:()=>_a,fadeOut:()=>xa,fadeOutBottomLeft:()=>ka,fadeOutBottomRight:()=>Ca,fadeOutDown:()=>Sa,fadeOutDownBig:()=>za,fadeOutLeft:()=>$a,fadeOutLeftBig:()=>Ea,fadeOutRight:()=>Ma,fadeOutRightBig:()=>Pa,fadeOutTopLeft:()=>Ta,fadeOutTopRight:()=>Aa,fadeOutUp:()=>La,fadeOutUpBig:()=>Da,flash:()=>Ln,flip:()=>Oa,flipInX:()=>Ia,flipInY:()=>Va,flipOutX:()=>Fa,flipOutY:()=>Ra,headShake:()=>Dn,heartBeat:()=>On,hinge:()=>ll,jackInTheBox:()=>hl,jello:()=>In,lightSpeedInLeft:()=>Na,lightSpeedInRight:()=>Ba,lightSpeedOutLeft:()=>Ha,lightSpeedOutRight:()=>Ua,pulse:()=>Vn,rollIn:()=>cl,rollOut:()=>dl,rotateIn:()=>Wa,rotateInDownLeft:()=>Ya,rotateInDownRight:()=>qa,rotateInUpLeft:()=>ja,rotateInUpRight:()=>Ga,rotateOut:()=>Ka,rotateOutDownLeft:()=>Qa,rotateOutDownRight:()=>Ja,rotateOutUpLeft:()=>Xa,rotateOutUpRight:()=>Za,rubberBand:()=>Fn,shake:()=>Rn,shakeX:()=>Nn,shakeY:()=>Bn,slideInDown:()=>tl,slideInLeft:()=>el,slideInRight:()=>il,slideInUp:()=>sl,slideOutDown:()=>ol,slideOutLeft:()=>rl,slideOutRight:()=>nl,slideOutUp:()=>al,swing:()=>Hn,tada:()=>Un,wobble:()=>Wn,zoomIn:()=>ul,zoomInDown:()=>pl,zoomInLeft:()=>fl,zoomInRight:()=>ml,zoomInUp:()=>gl,zoomOut:()=>bl,zoomOutDown:()=>vl,zoomOutLeft:()=>yl,zoomOutRight:()=>wl,zoomOutUp:()=>_l});var i=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,h=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),c=t=>{throw TypeError(t)},d=(t,e,s)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var i in e||(e={}))a.call(e,i)&&d(t,i,e[i]);if(n)for(var i of n(e))l.call(e,i)&&d(t,i,e[i]);return t},p=(t,e)=>s(t,r(e)),f=(t,e,s,r)=>{for(var n,a=r>1?void 0:r?o(e,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&i(e,s,a),a},m=(t,e,i)=>e.has(t)||c("Cannot "+i),g=function(t,e){this[0]=t,this[1]=e},b=new WeakMap,v=new WeakMap,y=new WeakMap,w=new WeakSet,_=new WeakMap,x=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!o&&"string"==typeof i&&i.length>0&&void 0!==s&&(Array.isArray(s)?s.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,s.toString()))},this.handleFormSubmit=t=>{var e;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=b.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||s(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),_.set(this.host,[])},this.handleInteraction=t=>{const e=_.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=u({form:t=>{const e=t.form;if(e){const i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),_.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),_.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,b.has(this.form)?b.get(this.form).add(this.host):b.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),v.has(this.form)||(v.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),y.has(this.form)||(y.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=b.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),v.has(this.form)&&(this.form.reportValidity=v.get(this.form),v.delete(this.form)),y.has(this.form)&&(this.form.checkValidity=y.get(this.form),y.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?w.add(t):w.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(w.has(e)),s=Boolean(e.required);e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},k=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),C=Object.freeze(p(u({},k),{valid:!1,valueMissing:!0})),S=Object.freeze(p(u({},k),{valid:!1,customError:!0}));const z=globalThis,$=z.ShadowRoot&&(void 0===z.ShadyCSS||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol(),M=new WeakMap;class P{constructor(t,e,i){if(this._$cssResult$=!0,i!==E)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=M.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&M.set(e,t))}return t}toString(){return this.cssText}}const T=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new P(i,t,E)},A=(t,e)=>{if($)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=z.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},L=$?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new P("string"==typeof t?t:t+"",void 0,E))(e)})(t):t,{is:D,defineProperty:O,getOwnPropertyDescriptor:I,getOwnPropertyNames:V,getOwnPropertySymbols:F,getPrototypeOf:R}=Object,N=globalThis,B=N.trustedTypes,H=B?B.emptyScript:"",U=N.reactiveElementPolyfillSupport,W=(t,e)=>t,Y={toAttribute(t,e){switch(e){case Boolean:t=t?H:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},q=(t,e)=>!D(t,e),j={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:q};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;class G extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&O(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=I(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??j}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const t=R(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const t=this.properties,e=[...V(t),...F(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(L(t))}else void 0!==t&&e.push(L(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return A(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:Y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Y;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??q)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[W("elementProperties")]=new Map,G[W("finalized")]=new Map,U?.({ReactiveElement:G}),(N.reactiveElementVersions??=[]).push("2.1.1");const K=globalThis,Q=K.trustedTypes,J=Q?Q.createPolicy("lit-html",{createHTML:t=>t}):void 0,X="$lit$",Z=`lit$${Math.random().toFixed(9).slice(2)}$`,tt="?"+Z,et=`<${tt}>`,it=document,st=()=>it.createComment(""),ot=t=>null===t||"object"!=typeof t&&"function"!=typeof t,rt=Array.isArray,nt=t=>rt(t)||"function"==typeof t?.[Symbol.iterator],at="[ \t\n\f\r]",lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,ct=/>/g,dt=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,ft=/^(?:script|style|textarea|title)$/i,mt=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),gt=mt(1),bt=mt(2),vt=mt(3),yt=Symbol.for("lit-noChange"),wt=Symbol.for("lit-nothing"),_t=new WeakMap,xt=it.createTreeWalker(it,129);function kt(t,e){if(!rt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==J?J.createHTML(e):e}const Ct=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=lt;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===lt?"!--"===l[1]?n=ht:void 0!==l[1]?n=ct:void 0!==l[2]?(ft.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=dt):void 0!==l[3]&&(n=dt):n===dt?">"===l[0]?(n=o??lt,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?dt:'"'===l[3]?pt:ut):n===pt||n===ut?n=dt:n===ht||n===ct?n=lt:(n=dt,o=void 0);const d=n===dt&&t[e+1].startsWith("/>")?" ":"";r+=n===lt?i+et:h>=0?(s.push(a),i.slice(0,h)+X+i.slice(h)+Z+d):i+Z+(-2===h?e:d)}return[kt(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class St{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,h]=Ct(t,e);if(this.el=St.createElement(l,i),xt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=xt.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(X)){const e=h[r++],i=s.getAttribute(t).split(Z),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?Pt:"?"===n[1]?Tt:"@"===n[1]?At:Mt}),s.removeAttribute(t)}else t.startsWith(Z)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(ft.test(s.tagName)){const t=s.textContent.split(Z),e=t.length-1;if(e>0){s.textContent=Q?Q.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],st()),xt.nextNode(),a.push({type:2,index:++o});s.append(t[e],st())}}}else if(8===s.nodeType)if(s.data===tt)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(Z,t+1));)a.push({type:7,index:o}),t+=Z.length-1}o++}}static createElement(t,e){const i=it.createElement("template");return i.innerHTML=t,i}}function zt(t,e,i=t,s){if(e===yt)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=ot(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=zt(t,o._$AS(t,e.values),o,s)),e}class $t{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??it).importNode(e,!0);xt.currentNode=s;let o=xt.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new Lt(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=xt.nextNode(),r++)}return xt.currentNode=it,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=wt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=zt(this,t,e),ot(t)?t===wt||null==t||""===t?(this._$AH!==wt&&this._$AR(),this._$AH=wt):t!==this._$AH&&t!==yt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==wt&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(it.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=St.createElement(kt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new $t(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=_t.get(t.strings);return void 0===e&&_t.set(t.strings,e=new St(t)),e}k(t){rt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Et(this.O(st()),this.O(st()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Mt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=wt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=wt}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=zt(this,t,e,0),r=!ot(t)||t!==this._$AH&&t!==yt,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=zt(this,s[i+n],e,n),a===yt&&(a=this._$AH[n]),r||=!ot(a)||a!==this._$AH[n],a===wt?t=wt:t!==wt&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===wt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends Mt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===wt?void 0:t}}class Tt extends Mt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==wt)}}class At extends Mt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=zt(this,t,e,0)??wt)===yt)return;const i=this._$AH,s=t===wt&&i!==wt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==wt&&(i===wt||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){zt(this,t)}}const Dt={M:X,P:Z,A:tt,C:1,L:Ct,R:$t,D:nt,V:zt,I:Et,H:Mt,N:Tt,U:At,B:Pt,F:Lt},Ot=K.litHtmlPolyfillSupport;Ot?.(St,Et),(K.litHtmlVersions??=[]).push("3.3.1");const It=globalThis;class Vt extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Et(e.insertBefore(st(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return yt}}Vt._$litElement$=!0,Vt.finalized=!0,It.litElementHydrateSupport?.({LitElement:Vt});const Ft=It.litElementPolyfillSupport;Ft?.({LitElement:Vt}),(It.litElementVersions??=[]).push("4.2.1");var Rt=T`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Nt=T`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Bt=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(e,r,n){var a;const l=s.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||Y,s=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:Y.fromAttribute)(n,l.type);this[t]!==s&&(this[i]=s)}o.call(this,e,r,n)}},Ht=T`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Ut=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Wt="";function Yt(t){Wt=t}var qt={name:"default",resolver:t=>function(t=""){if(!Wt){const t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)Yt(e.getAttribute("data-shoelace"));else{const e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src));let i="";e&&(i=e.getAttribute("src")),Yt(i.split("/").slice(0,-1).join("/"))}}return Wt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},jt={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Gt=[qt,{name:"system",resolver:t=>t in jt?`data:image/svg+xml,${encodeURIComponent(jt[t])}`:""}],Kt=[];function Qt(t){return Gt.find(e=>e.name===t)}var Jt=T`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Xt(t,e){const i=u({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:o}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach(e=>{const o=e;if(t.has(o)){const e=t.get(o),r=this[o];e!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}}),o.call(this,t)}}}var Zt=T`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;const te={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:q},ee=(t=te,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function ie(t){return(e,i)=>"object"==typeof i?ee(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function se(t){return ie({...t,state:!0,attribute:!1})}function oe(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}const re=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function ne(t,e){return(i,s,o)=>{const r=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof s?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return re(i,s,{get(){let i=t.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return re(i,s,{get(){return r(this)}})}}var ae,le=class extends Vt{constructor(){var t,e;super(),t=this,(e=ae).has(t)?c("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,false),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,u({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch(s){customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",r=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(r=" v"+s.version),o&&r&&o===r||console.warn(`Attempted to register <${t}>${o}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,i){var s;m(this,s=ae,"read from private field"),s.get(this)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,i)=>{m(t,e,"write to private field"),e.set(t,i)})(this,ae,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}};ae=new WeakMap,le.version="2.20.1",le.dependencies={},f([ie()],le.prototype,"dir",2),f([ie()],le.prototype,"lang",2);const{I:he}=Dt,ce=t=>void 0===t.strings,de={};var ue,pe=Symbol(),fe=Symbol(),me=new Map,ge=class extends le{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(null==e?void 0:e.spriteSheet)return this.svg=gt`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return 410===s.status?pe:fe}catch(t){return fe}try{const t=document.createElement("div");t.innerHTML=await s.text();const e=t.firstElementChild;if("svg"!==(null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase()))return pe;ue||(ue=new DOMParser);const o=ue.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):pe}catch(t){return pe}}connectedCallback(){super.connectedCallback(),Kt.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Kt=Kt.filter(e=>e!==t)}getIconSource(){const t=Qt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Qt(this.library):void 0;if(!e)return void(this.svg=null);let o=me.get(e);if(o||(o=this.resolveIcon(e,s),me.set(e,o)),!this.initialRender)return;const r=await o;if(r===fe&&me.delete(e),e===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(r)){if(this.svg=r,s){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof s.mutator&&t&&s.mutator(t)}}else switch(r){case fe:case pe:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(t=null==s?void 0:s.mutator)||t.call(s,this.svg),this.emit("sl-load")}}render(){return this.svg}};ge.styles=[Zt,Jt],f([se()],ge.prototype,"svg",2),f([ie({reflect:!0})],ge.prototype,"name",2),f([ie()],ge.prototype,"src",2),f([ie()],ge.prototype,"label",2),f([ie({reflect:!0})],ge.prototype,"library",2),f([Xt("label")],ge.prototype,"handleLabelChange",1),f([Xt(["name","src","library"])],ge.prototype,"setIcon",1);const be=t=>(...e)=>({_$litDirective$:t,values:e});class ve{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ye=be(class extends ve{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return yt}}),we=t=>t??wt,_e=be(class extends ve{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!ce(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===yt||e===wt)return e;const i=t.element,s=t.name;if(3===t.type){if(e===i[s])return yt}else if(4===t.type){if(!!e===i.hasAttribute(s))return yt}else if(1===t.type&&i.getAttribute(s)===e+"")return yt;return((t,e=de)=>{t._$AH=e})(t),e}});var xe=class extends le{constructor(){super(...arguments),this.formControlController=new x(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ut(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return gt`
      <div
        class=${ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${ye({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${we(this.value)}
            .indeterminate=${_e(this.indeterminate)}
            .checked=${_e(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?gt`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?gt`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};xe.styles=[Zt,Ht,Nt],xe.dependencies={"sl-icon":ge},f([ne('input[type="checkbox"]')],xe.prototype,"input",2),f([se()],xe.prototype,"hasFocus",2),f([ie()],xe.prototype,"title",2),f([ie()],xe.prototype,"name",2),f([ie()],xe.prototype,"value",2),f([ie({reflect:!0})],xe.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],xe.prototype,"disabled",2),f([ie({type:Boolean,reflect:!0})],xe.prototype,"checked",2),f([ie({type:Boolean,reflect:!0})],xe.prototype,"indeterminate",2),f([Bt("checked")],xe.prototype,"defaultChecked",2),f([ie({reflect:!0})],xe.prototype,"form",2),f([ie({type:Boolean,reflect:!0})],xe.prototype,"required",2),f([ie({attribute:"help-text"})],xe.prototype,"helpText",2),f([Xt("disabled",{waitUntilFirstUpdate:!0})],xe.prototype,"handleDisabledChange",1),f([Xt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],xe.prototype,"handleStateChange",1);var ke=T`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Ce=new Set,Se=new Map;let ze,$e="ltr",Ee="en";const Me="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Me){const t=new MutationObserver(Te);$e=document.documentElement.dir||"ltr",Ee=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Pe(...t){t.map(t=>{const e=t.$code.toLowerCase();Se.has(e)?Se.set(e,Object.assign(Object.assign({},Se.get(e)),t)):Se.set(e,t),ze||(ze=t)}),Te()}function Te(){Me&&($e=document.documentElement.dir||"ltr",Ee=document.documentElement.lang||navigator.language),[...Ce.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}class Ae{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ce.add(this.host)}hostDisconnected(){Ce.delete(this.host)}dir(){return`${this.host.dir||$e}`.toLowerCase()}lang(){return`${this.host.lang||Ee}`.toLowerCase()}getTranslationData(t){var e,i;const s=new Intl.Locale(t.replace(/_/g,"-")),o=null==s?void 0:s.language.toLowerCase(),r=null!==(i=null===(e=null==s?void 0:s.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:s,language:o,region:r,primary:Se.get(`${o}-${r}`),secondary:Se.get(o)}}exists(t,e){var i;const{primary:s,secondary:o}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||o&&o[t]||e.includeFallback&&ze&&ze[t])}term(t,...e){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(s&&s[t])o=s[t];else{if(!ze||!ze[t])return console.error(`No translation found for: ${String(t)}`),String(t);o=ze[t]}return"function"==typeof o?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}var Le={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Pe(Le);var De=Le,Oe=class extends Ae{};Pe(De);var Ie=class extends le{constructor(){super(...arguments),this.localize=new Oe(this)}render(){return gt`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ie.styles=[Zt,ke];var Ve=new Map,Fe=new WeakMap;function Re(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ne(t,e){Ve.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Be(t,e,i){const s=Fe.get(t);if(null==s?void 0:s[e])return Re(s[e],i.dir);const o=Ve.get(e);return o?Re(o,i.dir):{keyframes:[],options:{duration:0}}}function He(t,e,i){return new Promise(s=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,p(u({},i),{duration:We()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function Ue(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function We(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ye(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function qe(t,e){return t.map(t=>p(u({},t),{height:"auto"===t.height?`${e}px`:t.height}))}function je(t,e,i){return t?e(t):i?.(t)}var Ge=class t extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ye(this.childrenContainer);const{keyframes:t,options:e}=Be(this,"tree-item.collapse",{dir:this.localize.dir()});await He(this.childrenContainer,qe(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ye(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=Be(this,"tree-item.expand",{dir:this.localize.dir()});await He(this.childrenContainer,qe(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>t.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return gt`
      <div
        part="base"
        class="${ye({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":"rtl"===this.localize.dir()})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${ye({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${je(this.loading,()=>gt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${je(this.selectable,()=>gt`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${_e(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Ge.styles=[Zt,Rt],Ge.dependencies={"sl-checkbox":xe,"sl-icon":ge,"sl-spinner":Ie},f([se()],Ge.prototype,"indeterminate",2),f([se()],Ge.prototype,"isLeaf",2),f([se()],Ge.prototype,"loading",2),f([se()],Ge.prototype,"selectable",2),f([ie({type:Boolean,reflect:!0})],Ge.prototype,"expanded",2),f([ie({type:Boolean,reflect:!0})],Ge.prototype,"selected",2),f([ie({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2),f([ie({type:Boolean,reflect:!0})],Ge.prototype,"lazy",2),f([ne("slot:not([name])")],Ge.prototype,"defaultSlot",2),f([ne("slot[name=children]")],Ge.prototype,"childrenSlot",2),f([ne(".tree-item__item")],Ge.prototype,"itemElement",2),f([ne(".tree-item__children")],Ge.prototype,"childrenContainer",2),f([ne(".tree-item__expand-button slot")],Ge.prototype,"expandButtonSlot",2),f([Xt("loading",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLoadingChange",1),f([Xt("disabled")],Ge.prototype,"handleDisabledChange",1),f([Xt("selected")],Ge.prototype,"handleSelectedChange",1),f([Xt("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandedChange",1),f([Xt("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandAnimation",1),f([Xt("lazy",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLazyChange",1);var Ke=Ge;Ne("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Ne("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Ke.define("sl-tree-item");var Qe=T`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Je=T`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Xe=Math.min,Ze=Math.max,ti=Math.round,ei=Math.floor,ii=t=>({x:t,y:t}),si={left:"right",right:"left",bottom:"top",top:"bottom"},oi={start:"end",end:"start"};function ri(t,e,i){return Ze(t,Xe(e,i))}function ni(t,e){return"function"==typeof t?t(e):t}function ai(t){return t.split("-")[0]}function li(t){return t.split("-")[1]}function hi(t){return"x"===t?"y":"x"}function ci(t){return"y"===t?"height":"width"}const di=new Set(["top","bottom"]);function ui(t){return di.has(ai(t))?"y":"x"}function pi(t){return hi(ui(t))}function fi(t){return t.replace(/start|end/g,t=>oi[t])}const mi=["left","right"],gi=["right","left"],bi=["top","bottom"],vi=["bottom","top"];function yi(t){return t.replace(/left|right|bottom|top/g,t=>si[t])}function wi(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function _i(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function xi(t,e,i){let{reference:s,floating:o}=t;const r=ui(e),n=pi(e),a=ci(n),l=ai(e),h="y"===r,c=s.x+s.width/2-o.width/2,d=s.y+s.height/2-o.height/2,u=s[a]/2-o[a]/2;let p;switch(l){case"top":p={x:c,y:s.y-o.height};break;case"bottom":p={x:c,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-o.width,y:d};break;default:p={x:s.x,y:s.y}}switch(li(e)){case"start":p[n]-=u*(i&&h?-1:1);break;case"end":p[n]+=u*(i&&h?-1:1)}return p}async function ki(t,e){var i;void 0===e&&(e={});const{x:s,y:o,platform:r,rects:n,elements:a,strategy:l}=t,{boundary:h="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=ni(e,t),f=wi(p),m=a[u?"floating"===d?"reference":"floating":d],g=_i(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:h,rootBoundary:c,strategy:l})),b="floating"===d?{x:s,y:o,width:n.floating.width,height:n.floating.height}:n.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=_i(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:v,strategy:l}):b);return{top:(g.top-w.top+f.top)/y.y,bottom:(w.bottom-g.bottom+f.bottom)/y.y,left:(g.left-w.left+f.left)/y.x,right:(w.right-g.right+f.right)/y.x}}const Ci=new Set(["left","top"]);function Si(){return"undefined"!=typeof window}function zi(t){return Mi(t)?(t.nodeName||"").toLowerCase():"#document"}function $i(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Ei(t){var e;return null==(e=(Mi(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Mi(t){return!!Si()&&(t instanceof Node||t instanceof $i(t).Node)}function Pi(t){return!!Si()&&(t instanceof Element||t instanceof $i(t).Element)}function Ti(t){return!!Si()&&(t instanceof HTMLElement||t instanceof $i(t).HTMLElement)}function Ai(t){return!(!Si()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof $i(t).ShadowRoot)}const Li=new Set(["inline","contents"]);function Di(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=qi(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!Li.has(o)}const Oi=new Set(["table","td","th"]);function Ii(t){return Oi.has(zi(t))}const Vi=[":popover-open",":modal"];function Fi(t){return Vi.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const Ri=["transform","translate","scale","rotate","perspective"],Ni=["transform","translate","scale","rotate","perspective","filter"],Bi=["paint","layout","strict","content"];function Hi(t){const e=Ui(),i=Pi(t)?qi(t):t;return Ri.some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||Ni.some(t=>(i.willChange||"").includes(t))||Bi.some(t=>(i.contain||"").includes(t))}function Ui(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const Wi=new Set(["html","body","#document"]);function Yi(t){return Wi.has(zi(t))}function qi(t){return $i(t).getComputedStyle(t)}function ji(t){return Pi(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Gi(t){if("html"===zi(t))return t;const e=t.assignedSlot||t.parentNode||Ai(t)&&t.host||Ei(t);return Ai(e)?e.host:e}function Ki(t){const e=Gi(t);return Yi(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ti(e)&&Di(e)?e:Ki(e)}function Qi(t,e,i){var s;void 0===e&&(e=[]),void 0===i&&(i=!0);const o=Ki(t),r=o===(null==(s=t.ownerDocument)?void 0:s.body),n=$i(o);if(r){const t=Ji(n);return e.concat(n,n.visualViewport||[],Di(o)?o:[],t&&i?Qi(t):[])}return e.concat(o,Qi(o,[],i))}function Ji(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Xi(t){const e=qi(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=Ti(t),r=o?t.offsetWidth:i,n=o?t.offsetHeight:s,a=ti(i)!==r||ti(s)!==n;return a&&(i=r,s=n),{width:i,height:s,$:a}}function Zi(t){return Pi(t)?t:t.contextElement}function ts(t){const e=Zi(t);if(!Ti(e))return ii(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:r}=Xi(e);let n=(r?ti(i.width):i.width)/s,a=(r?ti(i.height):i.height)/o;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}const es=ii(0);function is(t){const e=$i(t);return Ui()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:es}function ss(t,e,i,s){void 0===e&&(e=!1),void 0===i&&(i=!1);const o=t.getBoundingClientRect(),r=Zi(t);let n=ii(1);e&&(s?Pi(s)&&(n=ts(s)):n=ts(t));const a=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==$i(t))&&e}(r,i,s)?is(r):ii(0);let l=(o.left+a.x)/n.x,h=(o.top+a.y)/n.y,c=o.width/n.x,d=o.height/n.y;if(r){const t=$i(r),e=s&&Pi(s)?$i(s):s;let i=t,o=Ji(i);for(;o&&s&&e!==i;){const t=ts(o),e=o.getBoundingClientRect(),s=qi(o),r=e.left+(o.clientLeft+parseFloat(s.paddingLeft))*t.x,n=e.top+(o.clientTop+parseFloat(s.paddingTop))*t.y;l*=t.x,h*=t.y,c*=t.x,d*=t.y,l+=r,h+=n,i=$i(o),o=Ji(i)}}return _i({width:c,height:d,x:l,y:h})}function os(t,e){const i=ji(t).scrollLeft;return e?e.left+i:ss(Ei(t)).left+i}function rs(t,e){const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-os(t,i),y:i.top+e.scrollTop}}const ns=new Set(["absolute","fixed"]);function as(t,e,i){let s;if("viewport"===e)s=function(t,e){const i=$i(t),s=Ei(t),o=i.visualViewport;let r=s.clientWidth,n=s.clientHeight,a=0,l=0;if(o){r=o.width,n=o.height;const t=Ui();(!t||t&&"fixed"===e)&&(a=o.offsetLeft,l=o.offsetTop)}const h=os(s);if(h<=0){const t=s.ownerDocument,e=t.body,i=getComputedStyle(e),o="CSS1Compat"===t.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,n=Math.abs(s.clientWidth-e.clientWidth-o);n<=25&&(r-=n)}else h<=25&&(r+=h);return{width:r,height:n,x:a,y:l}}(t,i);else if("document"===e)s=function(t){const e=Ei(t),i=ji(t),s=t.ownerDocument.body,o=Ze(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=Ze(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+os(t);const a=-i.scrollTop;return"rtl"===qi(s).direction&&(n+=Ze(e.clientWidth,s.clientWidth)-o),{width:o,height:r,x:n,y:a}}(Ei(t));else if(Pi(e))s=function(t,e){const i=ss(t,!0,"fixed"===e),s=i.top+t.clientTop,o=i.left+t.clientLeft,r=Ti(t)?ts(t):ii(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:s*r.y}}(e,i);else{const i=is(t);s={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return _i(s)}function ls(t,e){const i=Gi(t);return!(i===e||!Pi(i)||Yi(i))&&("fixed"===qi(i).position||ls(i,e))}function hs(t,e,i){const s=Ti(e),o=Ei(e),r="fixed"===i,n=ss(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=ii(0);function h(){l.x=os(o)}if(s||!s&&!r)if(("body"!==zi(e)||Di(o))&&(a=ji(e)),s){const t=ss(e,!0,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else o&&h();r&&!s&&o&&h();const c=!o||s||r?ii(0):rs(o,a);return{x:n.left+a.scrollLeft-l.x-c.x,y:n.top+a.scrollTop-l.y-c.y,width:n.width,height:n.height}}function cs(t){return"static"===qi(t).position}function ds(t,e){if(!Ti(t)||"fixed"===qi(t).position)return null;if(e)return e(t);let i=t.offsetParent;return Ei(t)===i&&(i=i.ownerDocument.body),i}function us(t,e){const i=$i(t);if(Fi(t))return i;if(!Ti(t)){let e=Gi(t);for(;e&&!Yi(e);){if(Pi(e)&&!cs(e))return e;e=Gi(e)}return i}let s=ds(t,e);for(;s&&Ii(s)&&cs(s);)s=ds(s,e);return s&&Yi(s)&&cs(s)&&!Hi(s)?i:s||function(t){let e=Gi(t);for(;Ti(e)&&!Yi(e);){if(Hi(e))return e;if(Fi(e))return null;e=Gi(e)}return null}(t)||i}const ps={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const r="fixed"===o,n=Ei(s),a=!!e&&Fi(e.floating);if(s===n||a&&r)return i;let l={scrollLeft:0,scrollTop:0},h=ii(1);const c=ii(0),d=Ti(s);if((d||!d&&!r)&&(("body"!==zi(s)||Di(n))&&(l=ji(s)),Ti(s))){const t=ss(s);h=ts(s),c.x=t.x+s.clientLeft,c.y=t.y+s.clientTop}const u=!n||d||r?ii(0):rs(n,l);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-l.scrollLeft*h.x+c.x+u.x,y:i.y*h.y-l.scrollTop*h.y+c.y+u.y}},getDocumentElement:Ei,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const r=[..."clippingAncestors"===i?Fi(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let s=Qi(t,[],!1).filter(t=>Pi(t)&&"body"!==zi(t)),o=null;const r="fixed"===qi(t).position;let n=r?Gi(t):t;for(;Pi(n)&&!Yi(n);){const e=qi(n),i=Hi(n);i||"fixed"!==e.position||(o=null),(r?!i&&!o:!i&&"static"===e.position&&o&&ns.has(o.position)||Di(n)&&!i&&ls(t,n))?s=s.filter(t=>t!==n):o=e,n=Gi(n)}return e.set(t,s),s}(e,this._c):[].concat(i),s],n=r[0],a=r.reduce((t,i)=>{const s=as(e,i,o);return t.top=Ze(s.top,t.top),t.right=Xe(s.right,t.right),t.bottom=Xe(s.bottom,t.bottom),t.left=Ze(s.left,t.left),t},as(e,n,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:us,getElementRects:async function(t){const e=this.getOffsetParent||us,i=this.getDimensions,s=await i(t.floating);return{reference:hs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=Xi(t);return{width:e,height:i}},getScale:ts,isElement:Pi,isRTL:function(t){return"rtl"===qi(t).direction}};function fs(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}const ms=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:r,rects:n,initialPlacement:a,platform:l,elements:h}=e,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=ni(t,e);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const b=ai(o),v=ui(a),y=ai(a)===a,w=await(null==l.isRTL?void 0:l.isRTL(h.floating)),_=u||(y||!m?[yi(a)]:function(t){const e=yi(t);return[fi(t),e,fi(e)]}(a)),x="none"!==f;!u&&x&&_.push(...function(t,e,i,s){const o=li(t);let r=function(t,e,i){switch(t){case"top":case"bottom":return i?e?gi:mi:e?mi:gi;case"left":case"right":return e?bi:vi;default:return[]}}(ai(t),"start"===i,s);return o&&(r=r.map(t=>t+"-"+o),e&&(r=r.concat(r.map(fi)))),r}(a,m,f,w));const k=[a,..._],C=await ki(e,g),S=[];let z=(null==(s=r.flip)?void 0:s.overflows)||[];if(c&&S.push(C[b]),d){const t=function(t,e,i){void 0===i&&(i=!1);const s=li(t),o=pi(t),r=ci(o);let n="x"===o?s===(i?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=yi(n)),[n,yi(n)]}(o,n,w);S.push(C[t[0]],C[t[1]])}if(z=[...z,{placement:o,overflows:S}],!S.every(t=>t<=0)){var $,E;const t=((null==($=r.flip)?void 0:$.index)||0)+1,e=k[t];if(e&&("alignment"!==d||v===ui(e)||z.every(t=>ui(t.placement)!==v||t.overflows[0]>0)))return{data:{index:t,overflows:z},reset:{placement:e}};let i=null==(E=z.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:E.placement;if(!i)switch(p){case"bestFit":{var M;const t=null==(M=z.filter(t=>{if(x){const e=ui(t.placement);return e===v||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:M[0];t&&(i=t);break}case"initialPlacement":i=a}if(o!==i)return{reset:{placement:i}}}return{}}}},gs=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:r,platform:n,elements:a}=e,{apply:l=()=>{},...h}=ni(t,e),c=await ki(e,h),d=ai(o),u=li(o),p="y"===ui(o),{width:f,height:m}=r.floating;let g,b;"top"===d||"bottom"===d?(g=d,b=u===(await(null==n.isRTL?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(b=d,g="end"===u?"top":"bottom");const v=m-c.top-c.bottom,y=f-c.left-c.right,w=Xe(m-c[g],v),_=Xe(f-c[b],y),x=!e.middlewareData.shift;let k=w,C=_;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&(C=y),null!=(s=e.middlewareData.shift)&&s.enabled.y&&(k=v),x&&!u){const t=Ze(c.left,0),e=Ze(c.right,0),i=Ze(c.top,0),s=Ze(c.bottom,0);p?C=f-2*(0!==t||0!==e?t+e:Ze(c.left,c.right)):k=m-2*(0!==i||0!==s?i+s:Ze(c.top,c.bottom))}await l({...e,availableWidth:C,availableHeight:k});const S=await n.getDimensions(a.floating);return f!==S.width||m!==S.height?{reset:{rects:!0}}:{}}}};function bs(t){return function(t){for(let e=t;e;e=vs(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=vs(t);e;e=vs(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||Hi(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function vs(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var ys=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,s=0,o=0,r=0,n=0,a=0,l=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,s=t.bottom,o=t.right,r=t.bottom,n=e.left,a=e.top,l=e.right,h=e.top):(i=e.left,s=e.bottom,o=e.right,r=e.bottom,n=t.left,a=t.top,l=t.right,h=t.top):t.left<e.left?(i=t.right,s=t.top,o=e.left,r=e.top,n=t.right,a=t.bottom,l=e.left,h=e.bottom):(i=e.right,s=e.top,o=t.left,r=t.top,n=e.right,a=e.bottom,l=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,i,s){void 0===s&&(s={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=s,h=Zi(t),c=o||r?[...h?Qi(h):[],...Qi(e)]:[];c.forEach(t=>{o&&t.addEventListener("scroll",i,{passive:!0}),r&&t.addEventListener("resize",i)});const d=h&&a?function(t,e){let i,s=null;const o=Ei(t);function r(){var t;clearTimeout(i),null==(t=s)||t.disconnect(),s=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),r();const h=t.getBoundingClientRect(),{left:c,top:d,width:u,height:p}=h;if(a||e(),!u||!p)return;const f={rootMargin:-ei(d)+"px "+-ei(o.clientWidth-(c+u))+"px "+-ei(o.clientHeight-(d+p))+"px "+-ei(c)+"px",threshold:Ze(0,Xe(1,l))||1};let m=!0;function g(e){const s=e[0].intersectionRatio;if(s!==l){if(!m)return n();s?n(!1,s):i=setTimeout(()=>{n(!1,1e-7)},1e3)}1!==s||fs(h,t.getBoundingClientRect())||n(),m=!1}try{s=new IntersectionObserver(g,{...f,root:o.ownerDocument})}catch(t){s=new IntersectionObserver(g,f)}s.observe(t)}(!0),r}(h,i):null;let u,p=-1,f=null;n&&(f=new ResizeObserver(t=>{let[s]=t;s&&s.target===h&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),i()}),h&&!l&&f.observe(h),f.observe(e));let m=l?ss(t):null;return l&&function e(){const s=ss(t);m&&!fs(m,s)&&i(),m=s,u=requestAnimationFrame(e)}(),i(),()=>{var t;c.forEach(t=>{o&&t.removeEventListener("scroll",i),r&&t.removeEventListener("resize",i)}),null==d||d(),null==(t=f)||t.disconnect(),f=null,l&&cancelAnimationFrame(u)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[(e={mainAxis:this.distance,crossAxis:this.skidding},void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,s;const{x:o,y:r,placement:n,middlewareData:a}=t,l=await async function(t,e){const{placement:i,platform:s,elements:o}=t,r=await(null==s.isRTL?void 0:s.isRTL(o.floating)),n=ai(i),a=li(i),l="y"===ui(i),h=Ci.has(n)?-1:1,c=r&&l?-1:1,d=ni(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),l?{x:p*c,y:u*h}:{x:u*h,y:p*c}}(t,e);return n===(null==(i=a.offset)?void 0:i.placement)&&null!=(s=a.arrow)&&s.alignmentOffset?{}:{x:o+l.x,y:r+l.y,data:{...l,placement:n}}}})];var e;this.sync?t.push(gs({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(ms({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:a={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...l}=ni(t,e),h={x:i,y:s},c=await ki(e,l),d=ui(ai(o)),u=hi(d);let p=h[u],f=h[d];if(r){const t="y"===u?"bottom":"right";p=ri(p+c["y"===u?"top":"left"],p,p-c[t])}if(n){const t="y"===d?"bottom":"right";f=ri(f+c["y"===d?"top":"left"],f,f-c[t])}const m=a.fn({...e,[u]:p,[d]:f});return{...m,data:{x:m.x-i,y:m.y-s,enabled:{[u]:r,[d]:n}}}}}}({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(gs({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:r,platform:n,elements:a,middlewareData:l}=e,{element:h,padding:c=0}=ni(t,e)||{};if(null==h)return{};const d=wi(c),u={x:i,y:s},p=pi(o),f=ci(p),m=await n.getDimensions(h),g="y"===p,b=g?"top":"left",v=g?"bottom":"right",y=g?"clientHeight":"clientWidth",w=r.reference[f]+r.reference[p]-u[p]-r.floating[f],_=u[p]-r.reference[p],x=await(null==n.getOffsetParent?void 0:n.getOffsetParent(h));let k=x?x[y]:0;k&&await(null==n.isElement?void 0:n.isElement(x))||(k=a.floating[y]||r.floating[f]);const C=w/2-_/2,S=k/2-m[f]/2-1,z=Xe(d[b],S),$=Xe(d[v],S),E=z,M=k-m[f]-$,P=k/2-m[f]/2+C,T=ri(E,P,M),A=!l.arrow&&null!=li(o)&&P!==T&&r.reference[f]/2-(P<E?z:$)-m[f]/2<0,L=A?P<E?P-E:P-M:0;return{[p]:u[p]+L,data:{[p]:T,centerOffset:P-T-L,...A&&{alignmentOffset:L}},reset:A}}}))({element:this.arrowEl,padding:this.arrowPadding}));const i="absolute"===this.strategy?t=>ps.getOffsetParent(t,bs):ps.getOffsetParent;((t,e,i)=>{const s=new Map,o={platform:ps,...i},r={...o.platform,_c:s};return(async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:r=[],platform:n}=i,a=r.filter(Boolean),l=await(null==n.isRTL?void 0:n.isRTL(e));let h=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:c,y:d}=xi(h,s,l),u=s,p={},f=0;for(let i=0;i<a.length;i++){const{name:r,fn:m}=a[i],{x:g,y:b,data:v,reset:y}=await m({x:c,y:d,initialPlacement:s,placement:u,strategy:o,middlewareData:p,rects:h,platform:n,elements:{reference:t,floating:e}});c=null!=g?g:c,d=null!=b?b:d,p={...p,[r]:{...p[r],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(h=!0===y.rects?await n.getElementRects({reference:t,floating:e,strategy:o}):y.rects),({x:c,y:d}=xi(h,u,l))),i=-1)}return{x:c,y:d,placement:u,strategy:o,middlewareData:p}})(t,e,{...o,platform:r})})(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:p(u({},ps),{getOffsetParent:i})}).then(({x:t,y:e,middlewareData:i,placement:s})=>{const o="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let s="",n="",a="",l="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",n=o?i:"",l=o?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n=o?"":i,l=o?i:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",s="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",s="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:s,right:n,bottom:a,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return gt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ye({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ye({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?gt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function ws(t,e){return new Promise(i=>{t.addEventListener(e,function s(o){o.target===t&&(t.removeEventListener(e,s),i())})})}ys.styles=[Zt,Je],f([ne(".popup")],ys.prototype,"popup",2),f([ne(".popup__arrow")],ys.prototype,"arrowEl",2),f([ie()],ys.prototype,"anchor",2),f([ie({type:Boolean,reflect:!0})],ys.prototype,"active",2),f([ie({reflect:!0})],ys.prototype,"placement",2),f([ie({reflect:!0})],ys.prototype,"strategy",2),f([ie({type:Number})],ys.prototype,"distance",2),f([ie({type:Number})],ys.prototype,"skidding",2),f([ie({type:Boolean})],ys.prototype,"arrow",2),f([ie({attribute:"arrow-placement"})],ys.prototype,"arrowPlacement",2),f([ie({attribute:"arrow-padding",type:Number})],ys.prototype,"arrowPadding",2),f([ie({type:Boolean})],ys.prototype,"flip",2),f([ie({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],ys.prototype,"flipFallbackPlacements",2),f([ie({attribute:"flip-fallback-strategy"})],ys.prototype,"flipFallbackStrategy",2),f([ie({type:Object})],ys.prototype,"flipBoundary",2),f([ie({attribute:"flip-padding",type:Number})],ys.prototype,"flipPadding",2),f([ie({type:Boolean})],ys.prototype,"shift",2),f([ie({type:Object})],ys.prototype,"shiftBoundary",2),f([ie({attribute:"shift-padding",type:Number})],ys.prototype,"shiftPadding",2),f([ie({attribute:"auto-size"})],ys.prototype,"autoSize",2),f([ie()],ys.prototype,"sync",2),f([ie({type:Object})],ys.prototype,"autoSizeBoundary",2),f([ie({attribute:"auto-size-padding",type:Number})],ys.prototype,"autoSizePadding",2),f([ie({attribute:"hover-bridge",type:Boolean})],ys.prototype,"hoverBridge",2);var _s=class extends le{constructor(){super(),this.localize=new Oe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Ue(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Ue(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ye(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:i}=Be(this,"tooltip.show",{dir:this.localize.dir()});await He(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ye(this.body);const{keyframes:t,options:i}=Be(this,"tooltip.hide",{dir:this.localize.dir()});await He(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ws(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ws(this,"sl-after-hide")}render(){return gt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ye({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};_s.styles=[Zt,Qe],_s.dependencies={"sl-popup":ys},f([ne("slot:not([name])")],_s.prototype,"defaultSlot",2),f([ne(".tooltip__body")],_s.prototype,"body",2),f([ne("sl-popup")],_s.prototype,"popup",2),f([ie()],_s.prototype,"content",2),f([ie()],_s.prototype,"placement",2),f([ie({type:Boolean,reflect:!0})],_s.prototype,"disabled",2),f([ie({type:Number})],_s.prototype,"distance",2),f([ie({type:Boolean,reflect:!0})],_s.prototype,"open",2),f([ie({type:Number})],_s.prototype,"skidding",2),f([ie()],_s.prototype,"trigger",2),f([ie({type:Boolean})],_s.prototype,"hoist",2),f([Xt("open",{waitUntilFirstUpdate:!0})],_s.prototype,"handleOpenChange",1),f([Xt(["content","distance","hoist","placement","skidding"])],_s.prototype,"handleOptionsChange",1),f([Xt("disabled")],_s.prototype,"handleDisabledChange",1),Ne("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Ne("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),_s.define("sl-tooltip");var xs=T`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function ks(t,e,i){return(t=>Object.is(t,-0)?0:t)(t<e?e:t>i?i:t)}function Cs(t,e=!1){function i(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const i=e.every(t=>t.selected),s=e.every(t=>!t.selected&&!t.indeterminate);t.selected=i,t.indeterminate=!i&&!s}}!function t(s){for(const i of s.getChildrenItems())i.selected=e?s.selected||i.selected:!i.disabled&&s.selected,t(i);e&&i(s)}(t),function t(e){const s=e.parentElement;Ke.isTreeItem(s)&&(i(s),t(s))}(t)}var Ss=class extends le{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Oe(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(null===i?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(Ke.isTreeItem),i=[...e.removedNodes].filter(Ke.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ke.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),Cs(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const i of e)i.selected=i===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(t=>!e.includes(t)))&&Promise.all(i.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;const e=this.getFocusableItems(),i="ltr"===this.localize.dir(),s="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const o=e.findIndex(t=>t.matches(":focus")),r=e[o],n=t=>{const i=e[ks(t,0,e.length-1)];this.focusItem(i)},a=t=>{r.expanded=t};"ArrowDown"===t.key?n(o+1):"ArrowUp"===t.key?n(o-1):i&&"ArrowRight"===t.key||s&&"ArrowLeft"===t.key?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?n(o+1):a(!0):i&&"ArrowLeft"===t.key||s&&"ArrowRight"===t.key?!r||r.disabled||r.isLeaf||!r.expanded?n(o-1):a(!1):"Home"===t.key?n(0):"End"===t.key?n(e.length-1):"Enter"!==t.key&&" "!==t.key||r.disabled||this.selectItem(r)}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});i&&!i.disabled&&e===this.clickTarget&&(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>Cs(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var i;if(t.disabled)return!1;const s=null==(i=t.parentElement)?void 0:i.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||e.has(s))&&e.add(t),!e.has(t)})}render(){return gt`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ss.styles=[Zt,xs],f([ne("slot:not([name])")],Ss.prototype,"defaultSlot",2),f([ne("slot[name=expand-icon]")],Ss.prototype,"expandedIconSlot",2),f([ne("slot[name=collapse-icon]")],Ss.prototype,"collapsedIconSlot",2),f([ie()],Ss.prototype,"selection",2),f([Xt("selection")],Ss.prototype,"handleSelectionChange",1),Ss.define("sl-tree");var zs=T`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,$s=class extends le{render(){return gt` <slot></slot> `}};$s.styles=[Zt,zs],$s.define("sl-visually-hidden");var Es=T`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Ms=0,Ps=class extends le{constructor(){super(...arguments),this.attrId=++Ms,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return gt`
      <slot
        part="base"
        class=${ye({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ps.styles=[Zt,Es],f([ie({reflect:!0})],Ps.prototype,"name",2),f([ie({type:Boolean,reflect:!0})],Ps.prototype,"active",2),f([Xt("active")],Ps.prototype,"handleActiveChange",1),Ps.define("sl-tab-panel");var Ts=T`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,As=T`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;const Ls=Symbol.for(""),Ds=t=>{if(t?.r===Ls)return t?._$litStatic$},Os=(t,...e)=>({_$litStatic$:e.reduce((e,i,s)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:Ls}),Is=new Map,Vs=t=>(e,...i)=>{const s=i.length;let o,r;const n=[],a=[];let l,h=0,c=!1;for(;h<s;){for(l=e[h];h<s&&void 0!==(r=i[h],o=Ds(r));)l+=o+e[++h],c=!0;h!==s&&a.push(r),n.push(l),h++}if(h===s&&n.push(e[s]),c){const t=n.join("$$lit$$");void 0===(e=Is.get(t))&&(n.raw=n,Is.set(t,e=n)),i=a}return t(e,...i)},Fs=Vs(gt);Vs(bt),Vs(vt);var Rs=class extends le{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Os`a`:Os`button`;return Fs`
      <${e}
        part="base"
        class=${ye({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${we(t?void 0:this.disabled)}
        type=${we(t?void 0:"button")}
        href=${we(t?this.href:void 0)}
        target=${we(t?this.target:void 0)}
        download=${we(t?this.download:void 0)}
        rel=${we(t&&this.target?"noreferrer noopener":void 0)}
        role=${we(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${we(this.name)}
          library=${we(this.library)}
          src=${we(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Rs.styles=[Zt,As],Rs.dependencies={"sl-icon":ge},f([ne(".icon-button")],Rs.prototype,"button",2),f([se()],Rs.prototype,"hasFocus",2),f([ie()],Rs.prototype,"name",2),f([ie()],Rs.prototype,"library",2),f([ie()],Rs.prototype,"src",2),f([ie()],Rs.prototype,"href",2),f([ie()],Rs.prototype,"target",2),f([ie()],Rs.prototype,"download",2),f([ie()],Rs.prototype,"label",2),f([ie({type:Boolean,reflect:!0})],Rs.prototype,"disabled",2);var Ns=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return gt`
      <span
        part="base"
        class=${ye({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?gt`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Ns.styles=[Zt,Ts],Ns.dependencies={"sl-icon-button":Rs},f([ie({reflect:!0})],Ns.prototype,"variant",2),f([ie({reflect:!0})],Ns.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],Ns.prototype,"pill",2),f([ie({type:Boolean})],Ns.prototype,"removable",2),Ns.define("sl-tag");var Bs=T`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Hs=class extends le{constructor(){super(...arguments),this.formControlController=new x(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ut(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&(null==(t=this.resizeObserver)||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=null!=e?e:this.input.selectionStart,r=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,o,r,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e;return gt`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ye({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${we(this.name)}
              .value=${_e(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${we(this.placeholder)}
              rows=${we(this.rows)}
              minlength=${we(this.minlength)}
              maxlength=${we(this.maxlength)}
              autocapitalize=${we(this.autocapitalize)}
              autocorrect=${we(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${we(this.spellcheck)}
              enterkeyhint=${we(this.enterkeyhint)}
              inputmode=${we(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${"auto"!==this.resize}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Hs.styles=[Zt,Ht,Bs],f([ne(".textarea__control")],Hs.prototype,"input",2),f([ne(".textarea__size-adjuster")],Hs.prototype,"sizeAdjuster",2),f([se()],Hs.prototype,"hasFocus",2),f([ie()],Hs.prototype,"title",2),f([ie()],Hs.prototype,"name",2),f([ie()],Hs.prototype,"value",2),f([ie({reflect:!0})],Hs.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],Hs.prototype,"filled",2),f([ie()],Hs.prototype,"label",2),f([ie({attribute:"help-text"})],Hs.prototype,"helpText",2),f([ie()],Hs.prototype,"placeholder",2),f([ie({type:Number})],Hs.prototype,"rows",2),f([ie()],Hs.prototype,"resize",2),f([ie({type:Boolean,reflect:!0})],Hs.prototype,"disabled",2),f([ie({type:Boolean,reflect:!0})],Hs.prototype,"readonly",2),f([ie({reflect:!0})],Hs.prototype,"form",2),f([ie({type:Boolean,reflect:!0})],Hs.prototype,"required",2),f([ie({type:Number})],Hs.prototype,"minlength",2),f([ie({type:Number})],Hs.prototype,"maxlength",2),f([ie()],Hs.prototype,"autocapitalize",2),f([ie()],Hs.prototype,"autocorrect",2),f([ie()],Hs.prototype,"autocomplete",2),f([ie({type:Boolean})],Hs.prototype,"autofocus",2),f([ie()],Hs.prototype,"enterkeyhint",2),f([ie({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Hs.prototype,"spellcheck",2),f([ie()],Hs.prototype,"inputmode",2),f([Bt()],Hs.prototype,"defaultValue",2),f([Xt("disabled",{waitUntilFirstUpdate:!0})],Hs.prototype,"handleDisabledChange",1),f([Xt("rows",{waitUntilFirstUpdate:!0})],Hs.prototype,"handleRowsChange",1),f([Xt("value",{waitUntilFirstUpdate:!0})],Hs.prototype,"handleValueChange",1),Hs.define("sl-textarea");var Us=T`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ws=0,Ys=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.attrId=++Ws,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,gt`
      <div
        part="base"
        class=${ye({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?gt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Ys.styles=[Zt,Us],Ys.dependencies={"sl-icon-button":Rs},f([ne(".tab")],Ys.prototype,"tab",2),f([ie({reflect:!0})],Ys.prototype,"panel",2),f([ie({type:Boolean,reflect:!0})],Ys.prototype,"active",2),f([ie({type:Boolean,reflect:!0})],Ys.prototype,"closable",2),f([ie({type:Boolean,reflect:!0})],Ys.prototype,"disabled",2),f([ie({type:Number,reflect:!0})],Ys.prototype,"tabIndex",2),f([Xt("active")],Ys.prototype,"handleActiveChange",1),f([Xt("disabled")],Ys.prototype,"handleDisabledChange",1),Ys.define("sl-tab");var qs=T`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,js=T`
  :host {
    display: contents;
  }
`,Gs=class extends le{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(t=>this.resizeObserver.unobserve(t)),this.observedElements=[],e.forEach(t=>{this.resizeObserver.observe(t),this.observedElements.push(t)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return gt` <slot @slotchange=${this.handleSlotChange}></slot> `}};Gs.styles=[Zt,js],f([ie({type:Boolean,reflect:!0})],Gs.prototype,"disabled",2),f([Xt("disabled",{waitUntilFirstUpdate:!0})],Gs.prototype,"handleDisabledChange",1);var Ks=new Set;function Qs(t){if(Ks.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Js(t){Ks.delete(t),0===Ks.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Xs(t,e,i="vertical",s="smooth"){const o=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=o.top+e.scrollTop,n=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,h=e.scrollTop,c=e.scrollTop+e.offsetHeight;"horizontal"!==i&&"both"!==i||(n<a?e.scrollTo({left:n,behavior:s}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:s})),"vertical"!==i&&"both"!==i||(r<h?e.scrollTo({top:r,behavior:s}):r+t.clientHeight>c&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:s}))}var Zs=class extends le{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Oe(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const e=t.filter(({target:t})=>{if(t===this)return!0;if(t.closest("sl-tab-group")!==this)return!1;const e=t.tagName.toLowerCase();return"sl-tab"===e||"sl-tab-panel"===e});if(0!==e.length)if(e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>"disabled"===t.attributeName))this.syncTabsAndPanels();else if(e.some(t=>"active"===t.attributeName)){const t=e.filter(t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase()).map(t=>t.target),i=t.find(t=>t.active);i&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((t,e)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(i=this.getActiveTab())?i:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>"sl-tab-panel"===t.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find(t=>t.matches(":focus")),i="rtl"===this.localize.dir();let s=null;if("sl-tab"===(null==e?void 0:e.tagName.toLowerCase())){if("Home"===t.key)s=this.focusableTabs[0];else if("End"===t.key)s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex(t=>t===e);s=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex(t=>t===e);s=this.findNextFocusableTab(t,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(t=>{t.tabIndex=t===s?0:-1}),["top","bottom"].includes(this.placement)&&Xs(s,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=u({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1}),this.panels.forEach(t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Xs(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(e=>e.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s="rtl"===this.localize.dir(),o=this.getAllTabs(),r=o.slice(0,o.indexOf(t)).reduce((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?-1*r.left+"px":`${r.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${r.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const s="forward"===e?1:-1;let o=t+s;for(;t<this.tabs.length;){if(i=this.tabs[o]||null,null===i){i="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=s}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(e=>e.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t="rtl"===this.localize.dir();return gt`
      <div
        part="base"
        class=${ye({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?gt`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ye({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?gt`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ye({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Zs.styles=[Zt,qs],Zs.dependencies={"sl-icon-button":Rs,"sl-resize-observer":Gs},f([ne(".tab-group")],Zs.prototype,"tabGroup",2),f([ne(".tab-group__body")],Zs.prototype,"body",2),f([ne(".tab-group__nav")],Zs.prototype,"nav",2),f([ne(".tab-group__indicator")],Zs.prototype,"indicator",2),f([se()],Zs.prototype,"hasScrollControls",2),f([se()],Zs.prototype,"shouldHideScrollStartButton",2),f([se()],Zs.prototype,"shouldHideScrollEndButton",2),f([ie()],Zs.prototype,"placement",2),f([ie()],Zs.prototype,"activation",2),f([ie({attribute:"no-scroll-controls",type:Boolean})],Zs.prototype,"noScrollControls",2),f([ie({attribute:"fixed-scroll-controls",type:Boolean})],Zs.prototype,"fixedScrollControls",2),f([oe({passive:!0})],Zs.prototype,"updateScrollButtons",1),f([Xt("noScrollControls",{waitUntilFirstUpdate:!0})],Zs.prototype,"updateScrollControls",1),f([Xt("placement",{waitUntilFirstUpdate:!0})],Zs.prototype,"syncIndicator",1),Zs.define("sl-tab-group");var to=T`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,eo=class extends le{constructor(){super(...arguments),this.effect="none"}render(){return gt`
      <div
        part="base"
        class=${ye({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};eo.styles=[Zt,to],f([ie()],eo.prototype,"effect",2),eo.define("sl-skeleton");var io=T`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function so(t,e){function i(i){const s=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,r=s.left+o.scrollX,n=s.top+o.scrollY,a=i.pageX-r,l=i.pageY-n;(null==e?void 0:e.onMove)&&e.onMove(a,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var oo=()=>null,ro=class extends le{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Oe(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=oo,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:s,snapThreshold:o,isRtl:r,vertical:n})=>{let a=i,l=Number.POSITIVE_INFINITY;return e.forEach(e=>{let h;if(e.startsWith("repeat(")){const e=t.substring(7,t.length-1),o=e.endsWith("%"),a=Number.parseFloat(e),l=o?s*(a/100):a;h=Math.round((r&&!n?s-i:i)/l)*l}else h=e.endsWith("%")?s*(Number.parseFloat(e)/100):Number.parseFloat(e);r&&!n&&(h=s-h);const c=Math.abs(i-h);c<=o&&c<l&&(a=h,l=c)}),a}}set snap(t){this.snapValue=null!=t?t:"",this.snapFunction=t?"string"==typeof t?this.toSnapFunction(t):t:oo}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),so(this,{onMove:(t,i)=>{var s;let o=this.vertical?i:t;"end"===this.primary&&(o=this.size-o),o=null!=(s=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?s:o,this.position=ks(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=i),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=i),"Home"===t.key&&(e="end"===this.primary?100:0),"End"===t.key&&(e="end"===this.primary?0:100),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const t=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t})}this.position=ks(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),s=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,o="auto";return"end"===this.primary?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",gt`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${we(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ro.styles=[Zt,io],f([ne(".divider")],ro.prototype,"divider",2),f([ie({type:Number,reflect:!0})],ro.prototype,"position",2),f([ie({attribute:"position-in-pixels",type:Number})],ro.prototype,"positionInPixels",2),f([ie({type:Boolean,reflect:!0})],ro.prototype,"vertical",2),f([ie({type:Boolean,reflect:!0})],ro.prototype,"disabled",2),f([ie()],ro.prototype,"primary",2),f([ie({reflect:!0})],ro.prototype,"snap",1),f([ie({type:Number,attribute:"snap-threshold"})],ro.prototype,"snapThreshold",2),f([Xt("position")],ro.prototype,"handlePositionChange",1),f([Xt("positionInPixels")],ro.prototype,"handlePositionInPixelsChange",1),f([Xt("vertical")],ro.prototype,"handleVerticalChange",1),ro.define("sl-split-panel");var no=T`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ao=class extends le{constructor(){super(...arguments),this.formControlController=new x(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ut(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return gt`
      <div
        class=${ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${ye({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${we(this.value)}
            .checked=${_e(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ao.styles=[Zt,Ht,no],f([ne('input[type="checkbox"]')],ao.prototype,"input",2),f([se()],ao.prototype,"hasFocus",2),f([ie()],ao.prototype,"title",2),f([ie()],ao.prototype,"name",2),f([ie()],ao.prototype,"value",2),f([ie({reflect:!0})],ao.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],ao.prototype,"disabled",2),f([ie({type:Boolean,reflect:!0})],ao.prototype,"checked",2),f([Bt("checked")],ao.prototype,"defaultChecked",2),f([ie({reflect:!0})],ao.prototype,"form",2),f([ie({type:Boolean,reflect:!0})],ao.prototype,"required",2),f([ie({attribute:"help-text"})],ao.prototype,"helpText",2),f([Xt("checked",{waitUntilFirstUpdate:!0})],ao.prototype,"handleCheckedChange",1),f([Xt("disabled",{waitUntilFirstUpdate:!0})],ao.prototype,"handleDisabledChange",1),ao.define("sl-switch"),Gs.define("sl-resize-observer");var lo=T`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;class ho extends ve{constructor(t){if(super(t),this.it=wt,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===wt||null==t)return this._t=void 0,this.it=t;if(t===yt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ho.directiveName="unsafeHTML",ho.resultType=1;const co=be(ho);var uo=class extends le{constructor(){super(...arguments),this.formControlController=new x(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ut(this,"help-text","label"),this.localize=new Oe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>gt`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=null!==e.closest(".select__clear"),s=null!==e.closest("sl-icon-button");if(!i&&!s){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),i=e.indexOf(this.currentOption);let s=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(s=i+1,s>e.length-1&&(s=0)):"ArrowUp"===t.key?(s=i-1,s<0&&(s=e.length-1)):"Home"===t.key?s=0:"End"===t.key&&(s=e.length-1),this.setCurrentOption(e[s])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e)if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],s=[];t.forEach(t=>s.push(t.value)),this.setSelectedOptions(t.filter(t=>i.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const s=this.getAllOptions();this.selectedOptions=s.filter(t=>t.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.value=null!=(t=null==s?void 0:s.value)?t:"",this.displayLabel=null!=(i=null==(e=null==s?void 0:s.getTextLabel)?void 0:e.call(s))?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return gt`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof i?co(i):i}
        </div>`}return e===this.maxOptionsVisible?gt`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:gt``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ye(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Be(this,"select.show",{dir:this.localize.dir()});await He(this.popup.popup,t,e),this.currentOption&&Xs(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ye(this);const{keyframes:t,options:e}=Be(this,"select.hide",{dir:this.localize.dir()});await He(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,ws(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,ws(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return gt`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${ye({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?gt`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?gt`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};uo.styles=[Zt,Ht,lo],uo.dependencies={"sl-icon":ge,"sl-popup":ys,"sl-tag":Ns},f([ne(".select")],uo.prototype,"popup",2),f([ne(".select__combobox")],uo.prototype,"combobox",2),f([ne(".select__display-input")],uo.prototype,"displayInput",2),f([ne(".select__value-input")],uo.prototype,"valueInput",2),f([ne(".select__listbox")],uo.prototype,"listbox",2),f([se()],uo.prototype,"hasFocus",2),f([se()],uo.prototype,"displayLabel",2),f([se()],uo.prototype,"currentOption",2),f([se()],uo.prototype,"selectedOptions",2),f([se()],uo.prototype,"valueHasChanged",2),f([ie()],uo.prototype,"name",2),f([se()],uo.prototype,"value",1),f([ie({attribute:"value"})],uo.prototype,"defaultValue",2),f([ie({reflect:!0})],uo.prototype,"size",2),f([ie()],uo.prototype,"placeholder",2),f([ie({type:Boolean,reflect:!0})],uo.prototype,"multiple",2),f([ie({attribute:"max-options-visible",type:Number})],uo.prototype,"maxOptionsVisible",2),f([ie({type:Boolean,reflect:!0})],uo.prototype,"disabled",2),f([ie({type:Boolean})],uo.prototype,"clearable",2),f([ie({type:Boolean,reflect:!0})],uo.prototype,"open",2),f([ie({type:Boolean})],uo.prototype,"hoist",2),f([ie({type:Boolean,reflect:!0})],uo.prototype,"filled",2),f([ie({type:Boolean,reflect:!0})],uo.prototype,"pill",2),f([ie()],uo.prototype,"label",2),f([ie({reflect:!0})],uo.prototype,"placement",2),f([ie({attribute:"help-text"})],uo.prototype,"helpText",2),f([ie({reflect:!0})],uo.prototype,"form",2),f([ie({type:Boolean,reflect:!0})],uo.prototype,"required",2),f([ie()],uo.prototype,"getTag",2),f([Xt("disabled",{waitUntilFirstUpdate:!0})],uo.prototype,"handleDisabledChange",1),f([Xt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],uo.prototype,"handleValueChange",1),f([Xt("open",{waitUntilFirstUpdate:!0})],uo.prototype,"handleOpenChange",1),Ne("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Ne("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),uo.define("sl-select"),Ie.define("sl-spinner");var po=T`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,fo=class extends le{constructor(){super(...arguments),this.formControlController=new x(this),this.hasSlotController=new Ut(this,"help-text","label"),this.localize=new Oe(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(null!==this.output){const e=this.input.offsetWidth,i=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=e*t;if("rtl"===this.localize.dir()){const r=`${e-o}px + ${t} * ${s}`;this.output.style.translate=`calc((${r} - ${i/2}px - ${s} / 2))`}else{const e=`${o}px - ${t} * ${s}`;this.output.style.translate=`calc(${e} - ${i/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e;return gt`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ye({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${we(this.name)}
              ?disabled=${this.disabled}
              min=${we(this.min)}
              max=${we(this.max)}
              step=${we(this.step)}
              .value=${_e(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":gt`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};fo.styles=[Zt,Ht,po],f([ne(".range__control")],fo.prototype,"input",2),f([ne(".range__tooltip")],fo.prototype,"output",2),f([se()],fo.prototype,"hasFocus",2),f([se()],fo.prototype,"hasTooltip",2),f([ie()],fo.prototype,"title",2),f([ie()],fo.prototype,"name",2),f([ie({type:Number})],fo.prototype,"value",2),f([ie()],fo.prototype,"label",2),f([ie({attribute:"help-text"})],fo.prototype,"helpText",2),f([ie({type:Boolean,reflect:!0})],fo.prototype,"disabled",2),f([ie({type:Number})],fo.prototype,"min",2),f([ie({type:Number})],fo.prototype,"max",2),f([ie({type:Number})],fo.prototype,"step",2),f([ie()],fo.prototype,"tooltip",2),f([ie({attribute:!1})],fo.prototype,"tooltipFormatter",2),f([ie({reflect:!0})],fo.prototype,"form",2),f([Bt()],fo.prototype,"defaultValue",2),f([oe({passive:!0})],fo.prototype,"handleThumbDragStart",1),f([Xt("value",{waitUntilFirstUpdate:!0})],fo.prototype,"handleValueChange",1),f([Xt("disabled",{waitUntilFirstUpdate:!0})],fo.prototype,"handleDisabledChange",1),f([Xt("hasTooltip",{waitUntilFirstUpdate:!0})],fo.prototype,"syncRange",1),fo.define("sl-range");var mo=T`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;const go="important",bo=" !"+go,vo=be(class extends ve{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(bo);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?go:""):i[t]=s}}return yt}});var yo=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e="rtl"===this.localize.dir(),{left:i,right:s,width:o}=this.rating.getBoundingClientRect();return ks(e?this.roundToPrecision((s-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision),0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),s=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys());let i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,gt`
      <div
        part="base"
        class=${ye({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(e=>i>e&&i<e+1?gt`
                <span
                  class=${ye({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1})}
                  role="presentation"
                >
                  <div
                    style=${vo({clipPath:t?`inset(0 ${100*(i-e)}% 0 0)`:`inset(0 0 0 ${100*(i-e)}%)`})}
                  >
                    ${co(this.getSymbol(e+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${vo({clipPath:t?`inset(0 0 0 ${100-100*(i-e)}%)`:`inset(0 ${100-100*(i-e)}% 0 0)`})}
                  >
                    ${co(this.getSymbol(e+1))}
                  </div>
                </span>
              `:gt`
              <span
                class=${ye({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1,"rating__symbol--active":i>=e+1})}
                role="presentation"
              >
                ${co(this.getSymbol(e+1))}
              </span>
            `)}
        </span>
      </div>
    `}};yo.styles=[Zt,mo],yo.dependencies={"sl-icon":ge},f([ne(".rating")],yo.prototype,"rating",2),f([se()],yo.prototype,"hoverValue",2),f([se()],yo.prototype,"isHovering",2),f([ie()],yo.prototype,"label",2),f([ie({type:Number})],yo.prototype,"value",2),f([ie({type:Number})],yo.prototype,"max",2),f([ie({type:Number})],yo.prototype,"precision",2),f([ie({type:Boolean,reflect:!0})],yo.prototype,"readonly",2),f([ie({type:Boolean,reflect:!0})],yo.prototype,"disabled",2),f([ie()],yo.prototype,"getSymbol",2),f([oe({passive:!0})],yo.prototype,"handleTouchMove",1),f([Xt("hoverValue")],yo.prototype,"handleHoverValueChange",1),f([Xt("isHovering")],yo.prototype,"handleIsHoveringChange",1),yo.define("sl-rating");var wo=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],_o=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:s,value:o}=wo.find(t=>Math.abs(i)<t.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/o),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let t;t=function(t){const e={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return e-Date.now()%e}("minute"===s?"second":"hour"===s?"minute":"day"===s?"hour":"day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),t)}return gt` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};f([se()],_o.prototype,"isoTime",2),f([se()],_o.prototype,"relativeTime",2),f([ie()],_o.prototype,"date",2),f([ie()],_o.prototype,"format",2),f([ie()],_o.prototype,"numeric",2),f([ie({type:Boolean})],_o.prototype,"sync",2),_o.define("sl-relative-time");var xo=T`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,ko=T`
  ${xo}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Co=class extends le{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Fs`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${ye({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${we(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Co.styles=[Zt,ko],f([ne(".button")],Co.prototype,"input",2),f([ne(".hidden-input")],Co.prototype,"hiddenInput",2),f([se()],Co.prototype,"hasFocus",2),f([ie({type:Boolean,reflect:!0})],Co.prototype,"checked",2),f([ie()],Co.prototype,"value",2),f([ie({type:Boolean,reflect:!0})],Co.prototype,"disabled",2),f([ie({reflect:!0})],Co.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],Co.prototype,"pill",2),f([Xt("disabled",{waitUntilFirstUpdate:!0})],Co.prototype,"handleDisabledChange",1),Co.define("sl-radio-button");var So=T`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,zo=T`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,$o=class extends le{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Eo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Eo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Eo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Eo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=Eo(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",0===i),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===s.tagName.toLowerCase()))})}render(){return gt`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function Eo(t){var e;const i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}$o.styles=[Zt,zo],f([ne("slot")],$o.prototype,"defaultSlot",2),f([se()],$o.prototype,"disableRole",2),f([ie()],$o.prototype,"label",2);var Mo=class extends le{constructor(){super(...arguments),this.formControlController=new x(this),this.hasSlotController=new Ut(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return""!==this.customValidityMessage?S:t?C:k}get validationMessage(){const t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;e&&!e.disabled&&(this.value=e.value,i.forEach(t=>t.checked=t===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(t=>!t.disabled),s=null!=(e=i.find(t=>t.checked))?e:i[0],o=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let n=i.indexOf(s)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].setAttribute("tabindex","0"),i[n].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=i.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),i.length>0&&!i.some(t=>t.checked))if(this.hasButtonGroup){const e=null==(t=i[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios()))}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(t=>t.checked),s=e.find(t=>!t.disabled),o=i||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=gt`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return gt`
      <fieldset
        part="form-control"
        class=${ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?gt`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Mo.styles=[Zt,Ht,So],Mo.dependencies={"sl-button-group":$o},f([ne("slot:not([name])")],Mo.prototype,"defaultSlot",2),f([ne(".radio-group__validation-input")],Mo.prototype,"validationInput",2),f([se()],Mo.prototype,"hasButtonGroup",2),f([se()],Mo.prototype,"errorMessage",2),f([se()],Mo.prototype,"defaultValue",2),f([ie()],Mo.prototype,"label",2),f([ie({attribute:"help-text"})],Mo.prototype,"helpText",2),f([ie()],Mo.prototype,"name",2),f([ie({reflect:!0})],Mo.prototype,"value",2),f([ie({reflect:!0})],Mo.prototype,"size",2),f([ie({reflect:!0})],Mo.prototype,"form",2),f([ie({type:Boolean,reflect:!0})],Mo.prototype,"required",2),f([Xt("size",{waitUntilFirstUpdate:!0})],Mo.prototype,"handleSizeChange",1),f([Xt("value")],Mo.prototype,"handleValueChange",1),Mo.define("sl-radio-group");var Po=T`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,To=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t,i=e-this.value/100*e;this.indicatorOffset=`${i}px`}}render(){return gt`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};To.styles=[Zt,Po],f([ne(".progress-ring__indicator")],To.prototype,"indicator",2),f([se()],To.prototype,"indicatorOffset",2),f([ie({type:Number,reflect:!0})],To.prototype,"value",2),f([ie()],To.prototype,"label",2),To.define("sl-progress-ring");var Ao=T`
  :host {
    display: inline-block;
  }
`;let Lo=null;class Do{}Do.render=function(t,e){Lo(t,e)},self.QrCreator=Do,function(t){function e(e,i,s,o){var r={},n=t(s,i);n.u(e),n.J(),o=o||0;var a=n.h(),l=n.h()+2*o;return r.text=e,r.level=i,r.version=s,r.O=l,r.a=function(t,e){return e-=o,!(0>(t-=o)||t>=a||0>e||e>=a)&&n.a(t,e)},r}function i(t,e,i,s,o,r,n,a,l,h){function c(e,i,s,o,n,a,l){e?(t.lineTo(i+a,s+l),t.arcTo(i,s,o,n,r)):t.lineTo(i,s)}n?t.moveTo(e+r,i):t.moveTo(e,i),c(a,s,i,s,o,-r,0),c(l,s,o,e,o,0,-r),c(h,e,o,e,i,r,0),c(n,e,i,s,i,0,r)}function s(t,e,i,s,o,r,n,a,l,h){function c(e,i,s,o){t.moveTo(e+s,i),t.lineTo(e,i),t.lineTo(e,i+o),t.arcTo(e,i,e+s,i,r)}n&&c(e,i,r,r),a&&c(s,i,-r,r),l&&c(s,o,-r,-r),h&&c(e,o,r,-r)}function o(t,o){t:{var r=o.text,n=o.v,a=o.N,l=o.K,h=o.P;for(a=Math.max(1,a||1),l=Math.min(40,l||40);a<=l;a+=1)try{var c=e(r,n,a,h);break t}catch(t){}c=void 0}if(!c)return null;for(r=t.getContext("2d"),o.background&&(r.fillStyle=o.background,r.fillRect(o.left,o.top,o.size,o.size)),n=c.O,l=o.size/n,r.beginPath(),h=0;h<n;h+=1)for(a=0;a<n;a+=1){var d=r,u=o.left+a*l,p=o.top+h*l,f=h,m=a,g=c.a,b=u+l,v=p+l,y=f-1,w=f+1,_=m-1,x=m+1,k=Math.floor(Math.min(.5,Math.max(0,o.R))*l),C=g(f,m),S=g(y,_),z=g(y,m);y=g(y,x);var $=g(f,x);x=g(w,x),m=g(w,m),w=g(w,_),f=g(f,_),u=Math.round(u),p=Math.round(p),b=Math.round(b),v=Math.round(v),C?i(d,u,p,b,v,k,!z&&!f,!z&&!$,!m&&!$,!m&&!f):s(d,u,p,b,v,k,z&&f&&S,z&&$&&y,m&&$&&x,m&&f&&w)}return function(t,e){var i=e.fill;if("string"==typeof i)t.fillStyle=i;else{var s=i.type,o=i.colorStops;if(i=i.position.map(t=>Math.round(t*e.size)),"linear-gradient"===s)var r=t.createLinearGradient.apply(t,i);else{if("radial-gradient"!==s)throw Error("Unsupported fill");r=t.createRadialGradient.apply(t,i)}o.forEach(([t,e])=>{r.addColorStop(t,e)}),t.fillStyle=r}}(r,o),r.fill(),t}var r={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Lo=function(t,e){var i={};Object.assign(i,r,t),i.N=i.minVersion,i.K=i.maxVersion,i.v=i.ecLevel,i.left=i.left,i.top=i.top,i.size=i.size,i.fill=i.fill,i.background=i.background,i.text=i.text,i.R=i.radius,i.P=i.quiet,e instanceof HTMLCanvasElement?(e.width===i.size&&e.height===i.size||(e.width=i.size,e.height=i.size),e.getContext("2d").clearRect(0,0,e.width,e.height),o(e,i)):((t=document.createElement("canvas")).width=i.size,t.height=i.size,i=o(t,i),e.appendChild(i))}}(function(){function t(o,n){function a(t,e){for(var i=-1;7>=i;i+=1)if(!(-1>=t+i||d<=t+i))for(var s=-1;7>=s;s+=1)-1>=e+s||d<=e+s||(c[t+i][e+s]=0<=i&&6>=i&&(0==s||6==s)||0<=s&&6>=s&&(0==i||6==i)||2<=i&&4>=i&&2<=s&&4>=s)}function l(t,i){for(var n=d=4*o+17,l=Array(n),f=0;f<n;f+=1){l[f]=Array(n);for(var m=0;m<n;m+=1)l[f][m]=null}for(c=l,a(0,0),a(d-7,0),a(0,d-7),n=s.G(o),l=0;l<n.length;l+=1)for(f=0;f<n.length;f+=1){m=n[l];var g=n[f];if(null==c[m][g])for(var b=-2;2>=b;b+=1)for(var v=-2;2>=v;v+=1)c[m+b][g+v]=-2==b||2==b||-2==v||2==v||0==b&&0==v}for(n=8;n<d-8;n+=1)null==c[n][6]&&(c[n][6]=0==n%2);for(n=8;n<d-8;n+=1)null==c[6][n]&&(c[6][n]=0==n%2);for(n=s.w(h<<3|i),l=0;15>l;l+=1)f=!t&&1==(n>>l&1),c[6>l?l:8>l?l+1:d-15+l][8]=f,c[8][8>l?d-l-1:9>l?15-l:14-l]=f;if(c[d-8][8]=!t,7<=o){for(n=s.A(o),l=0;18>l;l+=1)f=!t&&1==(n>>l&1),c[Math.floor(l/3)][l%3+d-8-3]=f;for(l=0;18>l;l+=1)f=!t&&1==(n>>l&1),c[l%3+d-8-3][Math.floor(l/3)]=f}if(null==u){for(t=r.I(o,h),n=function(){var t=[],e=0,i={B:function(){return t},c:function(e){return 1==(t[Math.floor(e/8)]>>>7-e%8&1)},put:function(t,e){for(var s=0;s<e;s+=1)i.m(1==(t>>>e-s-1&1))},f:function(){return e},m:function(i){var s=Math.floor(e/8);t.length<=s&&t.push(0),i&&(t[s]|=128>>>e%8),e+=1}};return i}(),l=0;l<p.length;l+=1)f=p[l],n.put(4,4),n.put(f.b(),s.f(4,o)),f.write(n);for(l=f=0;l<t.length;l+=1)f+=t[l].j;if(n.f()>8*f)throw Error("code length overflow. ("+n.f()+">"+8*f+")");for(n.f()+4<=8*f&&n.put(0,4);0!=n.f()%8;)n.m(!1);for(;!(n.f()>=8*f||(n.put(236,8),n.f()>=8*f));)n.put(17,8);var y=0;for(f=l=0,m=Array(t.length),g=Array(t.length),b=0;b<t.length;b+=1){var w=t[b].j,_=t[b].o-w;for(l=Math.max(l,w),f=Math.max(f,_),m[b]=Array(w),v=0;v<m[b].length;v+=1)m[b][v]=255&n.B()[v+y];for(y+=w,v=s.C(_),w=e(m[b],v.b()-1).l(v),g[b]=Array(v.b()-1),v=0;v<g[b].length;v+=1)_=v+w.b()-g[b].length,g[b][v]=0<=_?w.c(_):0}for(v=n=0;v<t.length;v+=1)n+=t[v].o;for(n=Array(n),v=y=0;v<l;v+=1)for(b=0;b<t.length;b+=1)v<m[b].length&&(n[y]=m[b][v],y+=1);for(v=0;v<f;v+=1)for(b=0;b<t.length;b+=1)v<g[b].length&&(n[y]=g[b][v],y+=1);u=n}for(t=u,n=-1,l=d-1,f=7,m=0,i=s.F(i),g=d-1;0<g;g-=2)for(6==g&&--g;;){for(b=0;2>b;b+=1)null==c[l][g-b]&&(v=!1,m<t.length&&(v=1==(t[m]>>>f&1)),i(l,g-b)&&(v=!v),c[l][g-b]=v,-1==--f&&(m+=1,f=7));if(0>(l+=n)||d<=l){l-=n,n=-n;break}}}var h=i[n],c=null,d=0,u=null,p=[],f={u:function(e){e=function(e){var i=t.s(e);return{S:function(){return 4},b:function(){return i.length},write:function(t){for(var e=0;e<i.length;e+=1)t.put(i[e],8)}}}(e),p.push(e),u=null},a:function(t,e){if(0>t||d<=t||0>e||d<=e)throw Error(t+","+e);return c[t][e]},h:function(){return d},J:function(){for(var t=0,e=0,i=0;8>i;i+=1){l(!0,i);var o=s.D(f);(0==i||t>o)&&(t=o,e=i)}l(!1,e)}};return f}function e(t,i){if(void 0===t.length)throw Error(t.length+"/"+i);var s=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var s=Array(t.length-e+i),o=0;o<t.length-e;o+=1)s[o]=t[o+e];return s}(),r={c:function(t){return s[t]},b:function(){return s.length},multiply:function(t){for(var i=Array(r.b()+t.b()-1),s=0;s<r.b();s+=1)for(var n=0;n<t.b();n+=1)i[s+n]^=o.i(o.g(r.c(s))+o.g(t.c(n)));return e(i,0)},l:function(t){if(0>r.b()-t.b())return r;for(var i=o.g(r.c(0))-o.g(t.c(0)),s=Array(r.b()),n=0;n<r.b();n+=1)s[n]=r.c(n);for(n=0;n<t.b();n+=1)s[n]^=o.i(o.g(t.c(n))+i);return e(s,0).l(t)}};return r}t.s=function(t){for(var e=[],i=0;i<t.length;i++){var s=t.charCodeAt(i);128>s?e.push(s):2048>s?e.push(192|s>>6,128|63&s):55296>s||57344<=s?e.push(224|s>>12,128|s>>6&63,128|63&s):(i++,s=65536+((1023&s)<<10|1023&t.charCodeAt(i)),e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s))}return e};var i={L:1,M:0,Q:3,H:2},s=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],s={w:function(e){for(var i=e<<10;0<=t(i)-t(1335);)i^=1335<<t(i)-t(1335);return 21522^(e<<10|i)},A:function(e){for(var i=e<<12;0<=t(i)-t(7973);)i^=7973<<t(i)-t(7973);return e<<12|i},G:function(t){return i[t-1]},F:function(t){switch(t){case 0:return function(t,e){return 0==(t+e)%2};case 1:return function(t){return 0==t%2};case 2:return function(t,e){return 0==e%3};case 3:return function(t,e){return 0==(t+e)%3};case 4:return function(t,e){return 0==(Math.floor(t/2)+Math.floor(e/3))%2};case 5:return function(t,e){return 0==t*e%2+t*e%3};case 6:return function(t,e){return 0==(t*e%2+t*e%3)%2};case 7:return function(t,e){return 0==(t*e%3+(t+e)%2)%2};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var i=e([1],0),s=0;s<t;s+=1)i=i.multiply(e([1,o.i(s)],0));return i},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),i=0,s=0;s<e;s+=1)for(var o=0;o<e;o+=1){for(var r=0,n=t.a(s,o),a=-1;1>=a;a+=1)if(!(0>s+a||e<=s+a))for(var l=-1;1>=l;l+=1)0>o+l||e<=o+l||(0!=a||0!=l)&&n==t.a(s+a,o+l)&&(r+=1);5<r&&(i+=3+r-5)}for(s=0;s<e-1;s+=1)for(o=0;o<e-1;o+=1)r=0,t.a(s,o)&&(r+=1),t.a(s+1,o)&&(r+=1),t.a(s,o+1)&&(r+=1),t.a(s+1,o+1)&&(r+=1),(0==r||4==r)&&(i+=3);for(s=0;s<e;s+=1)for(o=0;o<e-6;o+=1)t.a(s,o)&&!t.a(s,o+1)&&t.a(s,o+2)&&t.a(s,o+3)&&t.a(s,o+4)&&!t.a(s,o+5)&&t.a(s,o+6)&&(i+=40);for(o=0;o<e;o+=1)for(s=0;s<e-6;s+=1)t.a(s,o)&&!t.a(s+1,o)&&t.a(s+2,o)&&t.a(s+3,o)&&t.a(s+4,o)&&!t.a(s+5,o)&&t.a(s+6,o)&&(i+=40);for(o=r=0;o<e;o+=1)for(s=0;s<e;s+=1)t.a(s,o)&&(r+=1);return i+Math.abs(100*r/e/e-50)/5*10}};return s}(),o=function(){for(var t=Array(256),e=Array(256),i=0;8>i;i+=1)t[i]=1<<i;for(i=8;256>i;i+=1)t[i]=t[i-4]^t[i-5]^t[i-6]^t[i-8];for(i=0;255>i;i+=1)e[t[i]]=i;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),r=function(){function t(t,s){switch(s){case i.L:return e[4*(t-1)];case i.M:return e[4*(t-1)+1];case i.Q:return e[4*(t-1)+2];case i.H:return e[4*(t-1)+3]}}var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],s={I:function(e,i){var s=t(e,i);if(void 0===s)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+i);e=s.length/3,i=[];for(var o=0;o<e;o+=1)for(var r=s[3*o],n=s[3*o+1],a=s[3*o+2],l=0;l<r;l+=1){var h=a,c={};c.o=n,c.j=h,i.push(c)}return i}};return s}();return t}());const Oo=QrCreator;var Io=class extends le{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Oo.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var t;return gt`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(t=this.label)?void 0:t.length)>0?this.label:this.value}
        style=${vo({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Io.styles=[Zt,Ao],f([ne("canvas")],Io.prototype,"canvas",2),f([ie()],Io.prototype,"value",2),f([ie()],Io.prototype,"label",2),f([ie({type:Number})],Io.prototype,"size",2),f([ie()],Io.prototype,"fill",2),f([ie()],Io.prototype,"background",2),f([ie({type:Number})],Io.prototype,"radius",2),f([ie({attribute:"error-correction"})],Io.prototype,"errorCorrection",2),f([Xt(["background","errorCorrection","fill","radius","size","value"])],Io.prototype,"generate",1),Io.define("sl-qr-code");var Vo=T`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Fo=class extends le{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return gt`
      <span
        part="base"
        class=${ye({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${"control"+(this.checked?" control--checked":"")}" class="radio__control">
          ${this.checked?gt` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Fo.styles=[Zt,Vo],Fo.dependencies={"sl-icon":ge},f([se()],Fo.prototype,"checked",2),f([se()],Fo.prototype,"hasFocus",2),f([ie()],Fo.prototype,"value",2),f([ie({reflect:!0})],Fo.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],Fo.prototype,"disabled",2),f([Xt("checked")],Fo.prototype,"handleCheckedChange",1),f([Xt("disabled",{waitUntilFirstUpdate:!0})],Fo.prototype,"handleDisabledChange",1),Fo.define("sl-radio");var Ro=T`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,No=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return gt`
      <div
        part="base"
        class=${ye({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};No.styles=[Zt,Ro],No.dependencies={"sl-icon":ge},f([ne(".option__label")],No.prototype,"defaultSlot",2),f([se()],No.prototype,"current",2),f([se()],No.prototype,"selected",2),f([se()],No.prototype,"hasHover",2),f([ie({reflect:!0})],No.prototype,"value",2),f([ie({type:Boolean,reflect:!0})],No.prototype,"disabled",2),f([Xt("disabled")],No.prototype,"handleDisabledChange",1),f([Xt("selected")],No.prototype,"handleSelectedChange",1),f([Xt("value")],No.prototype,"handleValueChange",1),No.define("sl-option"),ys.define("sl-popup");var Bo=T`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Ho=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return gt`
      <div
        part="base"
        class=${ye({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${we(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${vo({width:`${this.value}%`})}>
          ${this.indeterminate?"":gt` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ho.styles=[Zt,Bo],f([ie({type:Number,reflect:!0})],Ho.prototype,"value",2),f([ie({type:Boolean,reflect:!0})],Ho.prototype,"indeterminate",2),f([ie()],Ho.prototype,"label",2),Ho.define("sl-progress-bar");var Uo=T`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Wo=class extends le{render(){return gt` <slot part="base" class="menu-label"></slot> `}};Wo.styles=[Zt,Uo],Wo.define("sl-menu-label");var Yo=T`
  :host {
    display: contents;
  }
`,qo=class extends le{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return gt` <slot></slot> `}};qo.styles=[Zt,Yo],f([ie({reflect:!0})],qo.prototype,"attr",2),f([ie({attribute:"attr-old-value",type:Boolean,reflect:!0})],qo.prototype,"attrOldValue",2),f([ie({attribute:"char-data",type:Boolean,reflect:!0})],qo.prototype,"charData",2),f([ie({attribute:"char-data-old-value",type:Boolean,reflect:!0})],qo.prototype,"charDataOldValue",2),f([ie({attribute:"child-list",type:Boolean,reflect:!0})],qo.prototype,"childList",2),f([ie({type:Boolean,reflect:!0})],qo.prototype,"disabled",2),f([Xt("disabled")],qo.prototype,"handleDisabledChange",1),f([Xt("attr",{waitUntilFirstUpdate:!0}),Xt("attr-old-value",{waitUntilFirstUpdate:!0}),Xt("char-data",{waitUntilFirstUpdate:!0}),Xt("char-data-old-value",{waitUntilFirstUpdate:!0}),Xt("childList",{waitUntilFirstUpdate:!0})],qo.prototype,"handleChange",1),qo.define("sl-mutation-observer");var jo=T`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Go=class extends le{constructor(){super(...arguments),this.formControlController=new x(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ut(this,"help-text","label"),this.localize=new Oe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=null!=e?e:this.input.selectionStart,r=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,o,r,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return gt`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ye({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${we(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${we(this.placeholder)}
              minlength=${we(this.minlength)}
              maxlength=${we(this.maxlength)}
              min=${we(this.min)}
              max=${we(this.max)}
              step=${we(this.step)}
              .value=${_e(this.value)}
              autocapitalize=${we(this.autocapitalize)}
              autocomplete=${we(this.autocomplete)}
              autocorrect=${we(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${we(this.pattern)}
              enterkeyhint=${we(this.enterkeyhint)}
              inputmode=${we(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?gt`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?gt`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?gt`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:gt`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Go.styles=[Zt,Ht,jo],Go.dependencies={"sl-icon":ge},f([ne(".input__control")],Go.prototype,"input",2),f([se()],Go.prototype,"hasFocus",2),f([ie()],Go.prototype,"title",2),f([ie({reflect:!0})],Go.prototype,"type",2),f([ie()],Go.prototype,"name",2),f([ie()],Go.prototype,"value",2),f([Bt()],Go.prototype,"defaultValue",2),f([ie({reflect:!0})],Go.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],Go.prototype,"filled",2),f([ie({type:Boolean,reflect:!0})],Go.prototype,"pill",2),f([ie()],Go.prototype,"label",2),f([ie({attribute:"help-text"})],Go.prototype,"helpText",2),f([ie({type:Boolean})],Go.prototype,"clearable",2),f([ie({type:Boolean,reflect:!0})],Go.prototype,"disabled",2),f([ie()],Go.prototype,"placeholder",2),f([ie({type:Boolean,reflect:!0})],Go.prototype,"readonly",2),f([ie({attribute:"password-toggle",type:Boolean})],Go.prototype,"passwordToggle",2),f([ie({attribute:"password-visible",type:Boolean})],Go.prototype,"passwordVisible",2),f([ie({attribute:"no-spin-buttons",type:Boolean})],Go.prototype,"noSpinButtons",2),f([ie({reflect:!0})],Go.prototype,"form",2),f([ie({type:Boolean,reflect:!0})],Go.prototype,"required",2),f([ie()],Go.prototype,"pattern",2),f([ie({type:Number})],Go.prototype,"minlength",2),f([ie({type:Number})],Go.prototype,"maxlength",2),f([ie()],Go.prototype,"min",2),f([ie()],Go.prototype,"max",2),f([ie()],Go.prototype,"step",2),f([ie()],Go.prototype,"autocapitalize",2),f([ie()],Go.prototype,"autocorrect",2),f([ie()],Go.prototype,"autocomplete",2),f([ie({type:Boolean})],Go.prototype,"autofocus",2),f([ie()],Go.prototype,"enterkeyhint",2),f([ie({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Go.prototype,"spellcheck",2),f([ie()],Go.prototype,"inputmode",2),f([Xt("disabled",{waitUntilFirstUpdate:!0})],Go.prototype,"handleDisabledChange",1),f([Xt("step",{waitUntilFirstUpdate:!0})],Go.prototype,"handleStepChange",1),f([Xt("value",{waitUntilFirstUpdate:!0})],Go.prototype,"handleValueChange",1),Go.define("sl-input");var Ko=T`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Qo=class extends le{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),s=i.find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});if(!s)return;if(i.find(t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))})!==this)return;const o=s;"checkbox"===o.type&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?s++:"ArrowUp"===t.key?s--:"Home"===t.key?s=0:"End"===t.key&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return gt`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Qo.styles=[Zt,Ko],f([ne("slot")],Qo.prototype,"defaultSlot",2),Qo.define("sl-menu");var Jo=T`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const Xo=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),Xo(t,e);return!0},Zo=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},tr=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),sr(e)}};function er(t){void 0!==this._$AN?(Zo(this),this._$AM=t,tr(this)):this._$AM=t}function ir(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)Xo(s[t],!1),Zo(s[t]);else null!=s&&(Xo(s,!1),Zo(s));else Xo(this,t)}const sr=t=>{2==t.type&&(t._$AP??=ir,t._$AQ??=er)};class or extends ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),tr(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Xo(this,t),Zo(this))}setValue(t){if(ce(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class rr{}const nr=new WeakMap,ar=be(class extends or{render(t){return wt}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),wt}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=nr.get(e);void 0===i&&(i=new WeakMap,nr.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?nr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var lr=class{constructor(t,e){this.popupRef=new rr,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:s,top:o,width:r,height:n}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?s+r:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?s+r:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+n}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const t of e.assignedElements())if(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var s;const o=null!=(s=e.get(i))?s:new CSSUnitValue(0,"px");return t-(o instanceof CSSUnitValue?o:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?gt`
      <sl-popup
        ${ar(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:gt` <slot name="submenu" hidden></slot> `}},hr=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Ut(this,"submenu"),this.submenuController=new lr(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return gt`
      <div
        id="anchor"
        part="base"
        class=${ye({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?gt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};hr.styles=[Zt,Jo],hr.dependencies={"sl-icon":ge,"sl-popup":ys,"sl-spinner":Ie},f([ne("slot:not([name])")],hr.prototype,"defaultSlot",2),f([ne(".menu-item")],hr.prototype,"menuItem",2),f([ie()],hr.prototype,"type",2),f([ie({type:Boolean,reflect:!0})],hr.prototype,"checked",2),f([ie()],hr.prototype,"value",2),f([ie({type:Boolean,reflect:!0})],hr.prototype,"loading",2),f([ie({type:Boolean,reflect:!0})],hr.prototype,"disabled",2),f([Xt("checked")],hr.prototype,"handleCheckedChange",1),f([Xt("disabled")],hr.prototype,"handleDisabledChange",1),f([Xt("type")],hr.prototype,"handleTypeChange",1),hr.define("sl-menu-item");var cr=T`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,dr=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();t.preventDefault(),so(this.base,{onMove:t=>{this.position=parseFloat(ks(t/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const s=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key)&&(o-=s),(e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key)&&(o+=s),"Home"===t.key&&(o=0),"End"===t.key&&(o=100),o=ks(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t="rtl"===this.localize.dir();return gt`
      <div
        part="base"
        id="image-comparer"
        class=${ye({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${vo({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${vo({left:t?100-this.position+"%":`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};dr.styles=[Zt,cr],dr.scopedElement={"sl-icon":ge},f([ne(".image-comparer")],dr.prototype,"base",2),f([ne(".image-comparer__handle")],dr.prototype,"handle",2),f([ie({type:Number,reflect:!0})],dr.prototype,"position",2),f([Xt("position",{waitUntilFirstUpdate:!0})],dr.prototype,"handlePositionChange",1),dr.define("sl-image-comparer");var ur=T`
  :host {
    display: block;
  }
`,pr=new Map,fr=class extends le{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(t=>e.setAttribute(t.name,t.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await function(t,e="cors"){const i=pr.get(t);if(void 0!==i)return Promise.resolve(i);const s=fetch(t,{mode:e}).then(async e=>{const i={ok:e.ok,status:e.status,html:await e.text()};return pr.set(t,i),i});return pr.set(t,s),s}(t,this.mode);if(t!==this.src)return;if(!e.ok)return void this.emit("sl-error",{detail:{status:e.status}});this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(t=>this.executeScript(t)),this.emit("sl-load")}catch(t){this.emit("sl-error",{detail:{status:-1}})}}render(){return gt`<slot></slot>`}};fr.styles=[Zt,ur],f([ie()],fr.prototype,"src",2),f([ie()],fr.prototype,"mode",2),f([ie({attribute:"allow-scripts",type:Boolean})],fr.prototype,"allowScripts",2),f([Xt("src")],fr.prototype,"handleSrcChange",1),fr.define("sl-include"),ge.define("sl-icon"),Rs.define("sl-icon-button");var mr=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],e=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),t.length-1)),i=t[e]+this.unit,s=parseFloat((this.value/Math.pow(1e3,e)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:i,unitDisplay:this.display})}};f([ie({type:Number})],mr.prototype,"value",2),f([ie()],mr.prototype,"unit",2),f([ie()],mr.prototype,"display",2),mr.define("sl-format-bytes");var gr=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return gt`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};f([ie()],gr.prototype,"date",2),f([ie()],gr.prototype,"weekday",2),f([ie()],gr.prototype,"era",2),f([ie()],gr.prototype,"year",2),f([ie()],gr.prototype,"month",2),f([ie()],gr.prototype,"day",2),f([ie()],gr.prototype,"hour",2),f([ie()],gr.prototype,"minute",2),f([ie()],gr.prototype,"second",2),f([ie({attribute:"time-zone-name"})],gr.prototype,"timeZoneName",2),f([ie({attribute:"time-zone"})],gr.prototype,"timeZone",2),f([ie({attribute:"hour-format"})],gr.prototype,"hourFormat",2),gr.define("sl-format-date");var br=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};f([ie({type:Number})],br.prototype,"value",2),f([ie()],br.prototype,"type",2),f([ie({attribute:"no-grouping",type:Boolean})],br.prototype,"noGrouping",2),f([ie()],br.prototype,"currency",2),f([ie({attribute:"currency-display"})],br.prototype,"currencyDisplay",2),f([ie({attribute:"minimum-integer-digits",type:Number})],br.prototype,"minimumIntegerDigits",2),f([ie({attribute:"minimum-fraction-digits",type:Number})],br.prototype,"minimumFractionDigits",2),f([ie({attribute:"maximum-fraction-digits",type:Number})],br.prototype,"maximumFractionDigits",2),f([ie({attribute:"minimum-significant-digits",type:Number})],br.prototype,"minimumSignificantDigits",2),f([ie({attribute:"maximum-significant-digits",type:Number})],br.prototype,"maximumSignificantDigits",2),br.define("sl-format-number");var vr=T`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,yr=class extends le{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};yr.styles=[Zt,vr],f([ie({type:Boolean,reflect:!0})],yr.prototype,"vertical",2),f([Xt("vertical")],yr.prototype,"handleVerticalChange",1),yr.define("sl-divider");var wr=T`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*_r(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(t=>{var e,i=t[h("asyncIterator")],s=!1,o={};return null==i?(i=t[h("iterator")](),e=t=>o[t]=e=>i[t](e)):(i=i.call(t),e=t=>o[t]=e=>{if(s){if(s=!1,"throw"===t)throw e;return e}return s=!0,{done:!1,value:new g(new Promise(s=>{var o=i[t](e);o instanceof Object||c("Object expected"),s(o)}),1)}}),o[h("iterator")]=()=>o,e("next"),"throw"in i?e("throw"):o.throw=t=>{throw t},"return"in i&&e("return"),o})(_r(t.shadowRoot.activeElement))))}function xr(){return[..._r()].pop()}var kr=new WeakMap;function Cr(t){let e=kr.get(t);return e||(e=window.getComputedStyle(t,null),kr.set(t,e)),e}function Sr(t){const e=new WeakMap,i=[];return function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]"))return;if(e.has(o))return;e.set(o,!0),!i.includes(o)&&function(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,s=e.querySelector(`${i}:checked`);return s?s===t:e.querySelector(i)===t}return!!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Cr(t);return"hidden"!==e.visibility&&"none"!==e.display}(t)&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||!!t.hasAttribute("tabindex")||!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=Cr(t),{overflowY:i,overflowX:s}=e;return"scroll"===i||"scroll"===s||"auto"===i&&"auto"===s&&(t.scrollHeight>t.clientHeight&&"auto"===i||!(!(t.scrollWidth>t.clientWidth)||"auto"!==s))}(t))}(o)&&i.push(o),o instanceof HTMLSlotElement&&function(t,e){var i;return(null==(i=t.getRootNode({composed:!0}))?void 0:i.host)!==e}(o,t)&&o.assignedElements({flatten:!0}).forEach(t=>{s(t)}),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&s(o.shadowRoot)}for(const t of o.children)s(t)}(t),i.sort((t,e)=>{const i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var zr=[],$r=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const i=xr();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=Sr(this.element);let o=s.findIndex(t=>t===i);this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){o+r>=s.length?o=0:o+r<0?o=s.length-1:o+=r,this.previousFocus=this.currentFocus;const i=s[o];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const n=[..._r()];if(n.includes(this.currentFocus)||!n.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){zr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){zr=zr.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return zr[zr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Sr(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s="forward"===this.tabDirection?e:i;"function"==typeof(null==s?void 0:s.focus)&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Er=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())};function Mr(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Pr=class extends le{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"footer"),this.localize=new Oe(this),this.modal=new $r(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Qs(this)))}disconnectedCallback(){super.disconnectedCallback(),Js(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Be(this,"drawer.denyClose",{dir:this.localize.dir()});return void He(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Qs(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ye(this.drawer),Ye(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Be(this,`drawer.show${Mr(this.placement)}`,{dir:this.localize.dir()}),i=Be(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([He(this.panel,e.keyframes,e.options),He(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Er(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Js(this)),await Promise.all([Ye(this.drawer),Ye(this.overlay)]);const t=Be(this,`drawer.hide${Mr(this.placement)}`,{dir:this.localize.dir()}),e=Be(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([He(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),He(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Qs(this)),this.open&&this.contained&&(this.modal.deactivate(),Js(this))}async show(){if(!this.open)return this.open=!0,ws(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ws(this,"sl-after-hide")}render(){return gt`
      <div
        part="base"
        class=${ye({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${we(this.noHeader?this.label:void 0)}
          aria-labelledby=${we(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":gt`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Pr.styles=[Zt,wr],Pr.dependencies={"sl-icon-button":Rs},f([ne(".drawer")],Pr.prototype,"drawer",2),f([ne(".drawer__panel")],Pr.prototype,"panel",2),f([ne(".drawer__overlay")],Pr.prototype,"overlay",2),f([ie({type:Boolean,reflect:!0})],Pr.prototype,"open",2),f([ie({reflect:!0})],Pr.prototype,"label",2),f([ie({reflect:!0})],Pr.prototype,"placement",2),f([ie({type:Boolean,reflect:!0})],Pr.prototype,"contained",2),f([ie({attribute:"no-header",type:Boolean,reflect:!0})],Pr.prototype,"noHeader",2),f([Xt("open",{waitUntilFirstUpdate:!0})],Pr.prototype,"handleOpenChange",1),f([Xt("contained",{waitUntilFirstUpdate:!0})],Pr.prototype,"handleNoModalChange",1),Ne("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),Ne("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ne("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Pr.define("sl-drawer");var Tr=T`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ar=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const i=(t,e)=>{if(!t)return null;const s=t.closest(e);if(s)return s;const o=t.getRootNode();return o instanceof ShadowRoot?i(o.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?xr():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(s),s.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,i;const s=Sr(t);return{start:null!=(e=s[0])?e:null,end:null!=(i=s[s.length-1])?i:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ws(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ws(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ye(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Be(this,"dropdown.show",{dir:this.localize.dir()});await He(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ye(this);const{keyframes:t,options:e}=Be(this,"dropdown.hide",{dir:this.localize.dir()});await He(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return gt`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${we(this.sync?this.sync:void 0)}
        class=${ye({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ar.styles=[Zt,Tr],Ar.dependencies={"sl-popup":ys},f([ne(".dropdown")],Ar.prototype,"popup",2),f([ne(".dropdown__trigger")],Ar.prototype,"trigger",2),f([ne(".dropdown__panel")],Ar.prototype,"panel",2),f([ie({type:Boolean,reflect:!0})],Ar.prototype,"open",2),f([ie({reflect:!0})],Ar.prototype,"placement",2),f([ie({type:Boolean,reflect:!0})],Ar.prototype,"disabled",2),f([ie({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ar.prototype,"stayOpenOnSelect",2),f([ie({attribute:!1})],Ar.prototype,"containingElement",2),f([ie({type:Number})],Ar.prototype,"distance",2),f([ie({type:Number})],Ar.prototype,"skidding",2),f([ie({type:Boolean})],Ar.prototype,"hoist",2),f([ie({reflect:!0})],Ar.prototype,"sync",2),f([Xt("open",{waitUntilFirstUpdate:!0})],Ar.prototype,"handleOpenChange",1),Ne("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Ne("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Ar.define("sl-dropdown");var Lr=T`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Dr=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";i?[o,r]=this.from.trim().split("."):s&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(o):null;n?t=s?n.getAttribute(r)||"":i?n[r]||"":n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o="success"===t?this.successIcon:this.errorIcon,r=Be(this,"copy.in",{dir:"ltr"}),n=Be(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return gt`
      <sl-tooltip
        class=${ye({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Dr.styles=[Zt,Lr],Dr.dependencies={"sl-icon":ge,"sl-tooltip":_s},f([ne('slot[name="copy-icon"]')],Dr.prototype,"copyIcon",2),f([ne('slot[name="success-icon"]')],Dr.prototype,"successIcon",2),f([ne('slot[name="error-icon"]')],Dr.prototype,"errorIcon",2),f([ne("sl-tooltip")],Dr.prototype,"tooltip",2),f([se()],Dr.prototype,"isCopying",2),f([se()],Dr.prototype,"status",2),f([ie()],Dr.prototype,"value",2),f([ie()],Dr.prototype,"from",2),f([ie({type:Boolean,reflect:!0})],Dr.prototype,"disabled",2),f([ie({attribute:"copy-label"})],Dr.prototype,"copyLabel",2),f([ie({attribute:"success-label"})],Dr.prototype,"successLabel",2),f([ie({attribute:"error-label"})],Dr.prototype,"errorLabel",2),f([ie({attribute:"feedback-duration",type:Number})],Dr.prototype,"feedbackDuration",2),f([ie({attribute:"tooltip-placement"})],Dr.prototype,"tooltipPlacement",2),f([ie({type:Boolean})],Dr.prototype,"hoist",2),Ne("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),Ne("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),Dr.define("sl-copy-button");var Or=T`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Ir=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.detailsObserver)||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await Ye(this.body);const{keyframes:t,options:e}=Be(this,"details.show",{dir:this.localize.dir()});await He(this.body,qe(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await Ye(this.body);const{keyframes:t,options:e}=Be(this,"details.hide",{dir:this.localize.dir()});await He(this.body,qe(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,ws(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,ws(this,"sl-after-hide")}render(){const t="rtl"===this.localize.dir();return gt`
      <details
        part="base"
        class=${ye({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Ir.styles=[Zt,Or],Ir.dependencies={"sl-icon":ge},f([ne(".details")],Ir.prototype,"details",2),f([ne(".details__header")],Ir.prototype,"header",2),f([ne(".details__body")],Ir.prototype,"body",2),f([ne(".details__expand-icon-slot")],Ir.prototype,"expandIconSlot",2),f([ie({type:Boolean,reflect:!0})],Ir.prototype,"open",2),f([ie()],Ir.prototype,"summary",2),f([ie({type:Boolean,reflect:!0})],Ir.prototype,"disabled",2),f([Xt("open",{waitUntilFirstUpdate:!0})],Ir.prototype,"handleOpenChange",1),Ne("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),Ne("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),Ir.define("sl-details");var Vr=T`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Fr=class extends le{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"footer"),this.localize=new Oe(this),this.modal=new $r(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Qs(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Js(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Be(this,"dialog.denyClose",{dir:this.localize.dir()});return void He(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Qs(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ye(this.dialog),Ye(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Be(this,"dialog.show",{dir:this.localize.dir()}),i=Be(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([He(this.panel,e.keyframes,e.options),He(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Er(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ye(this.dialog),Ye(this.overlay)]);const t=Be(this,"dialog.hide",{dir:this.localize.dir()}),e=Be(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([He(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),He(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Js(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ws(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ws(this,"sl-after-hide")}render(){return gt`
      <div
        part="base"
        class=${ye({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${we(this.noHeader?this.label:void 0)}
          aria-labelledby=${we(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":gt`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Fr.styles=[Zt,Vr],Fr.dependencies={"sl-icon-button":Rs},f([ne(".dialog")],Fr.prototype,"dialog",2),f([ne(".dialog__panel")],Fr.prototype,"panel",2),f([ne(".dialog__overlay")],Fr.prototype,"overlay",2),f([ie({type:Boolean,reflect:!0})],Fr.prototype,"open",2),f([ie({reflect:!0})],Fr.prototype,"label",2),f([ie({attribute:"no-header",type:Boolean,reflect:!0})],Fr.prototype,"noHeader",2),f([Xt("open",{waitUntilFirstUpdate:!0})],Fr.prototype,"handleOpenChange",1),Ne("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Ne("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Ne("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Ne("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ne("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Fr.define("sl-dialog"),xe.define("sl-checkbox");var Rr=T`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Nr=class extends le{constructor(){super(...arguments),this.formControlController=new x(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ut(this,"[default]","prefix","suffix"),this.localize=new Oe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:k}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Os`a`:Os`button`;return Fs`
      <${e}
        part="base"
        class=${ye({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${we(t?void 0:this.disabled)}
        type=${we(t?void 0:this.type)}
        title=${this.title}
        name=${we(t?void 0:this.name)}
        value=${we(t?void 0:this.value)}
        href=${we(t&&!this.disabled?this.href:void 0)}
        target=${we(t?this.target:void 0)}
        download=${we(t?this.download:void 0)}
        rel=${we(t?this.rel:void 0)}
        role=${we(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Fs` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Fs`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};function Br(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");const i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Hr(t){return Math.min(1,Math.max(0,t))}function Ur(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Wr(t){return Number(t)<=1?100*Number(t)+"%":t}function Yr(t){return 1===t.length?"0"+t:String(t)}function qr(t,e,i){t=Br(t,255),e=Br(e,255),i=Br(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0,n=0;const a=(s+o)/2;if(s===o)n=0,r=0;else{const l=s-o;switch(n=a>.5?l/(2-s-o):l/(s+o),s){case t:r=(e-i)/l+(e<i?6:0);break;case e:r=(i-t)/l+2;break;case i:r=(t-e)/l+4}r/=6}return{h:r,s:n,l:a}}function jr(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Gr(t,e,i){t=Br(t,255),e=Br(e,255),i=Br(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0;const n=s,a=s-o,l=0===s?0:a/s;if(s===o)r=0;else{switch(s){case t:r=(e-i)/a+(e<i?6:0);break;case e:r=(i-t)/a+2;break;case i:r=(t-e)/a+4}r/=6}return{h:r,s:l,v:n}}function Kr(t,e,i,s){const o=[Yr(Math.round(t).toString(16)),Yr(Math.round(e).toString(16)),Yr(Math.round(i).toString(16))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Qr(t,e,i){let s=1-t/255,o=1-e/255,r=1-i/255,n=Math.min(s,o,r);return 1===n?(s=0,o=0,r=0):(s=(s-n)/(1-n)*100,o=(o-n)/(1-n)*100,r=(r-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(o),y:Math.round(r),k:Math.round(n)}}function Jr(t){return Math.round(255*parseFloat(t)).toString(16)}function Xr(t){return Zr(t)/255}function Zr(t){return parseInt(t,16)}Nr.styles=[Zt,xo],Nr.dependencies={"sl-icon":ge,"sl-spinner":Ie},f([ne(".button")],Nr.prototype,"button",2),f([se()],Nr.prototype,"hasFocus",2),f([se()],Nr.prototype,"invalid",2),f([ie()],Nr.prototype,"title",2),f([ie({reflect:!0})],Nr.prototype,"variant",2),f([ie({reflect:!0})],Nr.prototype,"size",2),f([ie({type:Boolean,reflect:!0})],Nr.prototype,"caret",2),f([ie({type:Boolean,reflect:!0})],Nr.prototype,"disabled",2),f([ie({type:Boolean,reflect:!0})],Nr.prototype,"loading",2),f([ie({type:Boolean,reflect:!0})],Nr.prototype,"outline",2),f([ie({type:Boolean,reflect:!0})],Nr.prototype,"pill",2),f([ie({type:Boolean,reflect:!0})],Nr.prototype,"circle",2),f([ie()],Nr.prototype,"type",2),f([ie()],Nr.prototype,"name",2),f([ie()],Nr.prototype,"value",2),f([ie()],Nr.prototype,"href",2),f([ie()],Nr.prototype,"target",2),f([ie()],Nr.prototype,"rel",2),f([ie()],Nr.prototype,"download",2),f([ie()],Nr.prototype,"form",2),f([ie({attribute:"formaction"})],Nr.prototype,"formAction",2),f([ie({attribute:"formenctype"})],Nr.prototype,"formEnctype",2),f([ie({attribute:"formmethod"})],Nr.prototype,"formMethod",2),f([ie({attribute:"formnovalidate",type:Boolean})],Nr.prototype,"formNoValidate",2),f([ie({attribute:"formtarget"})],Nr.prototype,"formTarget",2),f([Xt("disabled",{waitUntilFirstUpdate:!0})],Nr.prototype,"handleDisabledChange",1);const tn={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};const en="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",sn="[\\s|\\(]+("+en+")[,|\\s]+("+en+")[,|\\s]+("+en+")\\s*\\)?",on="[\\s|\\(]+("+en+")[,|\\s]+("+en+")[,|\\s]+("+en+")[,|\\s]+("+en+")\\s*\\)?",rn={CSS_UNIT:new RegExp(en),rgb:new RegExp("rgb"+sn),rgba:new RegExp("rgba"+on),hsl:new RegExp("hsl"+sn),hsla:new RegExp("hsla"+on),hsv:new RegExp("hsv"+sn),hsva:new RegExp("hsva"+on),cmyk:new RegExp("cmyk"+on),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function nn(t){return"number"==typeof t?!Number.isNaN(t):rn.CSS_UNIT.test(t)}class an{constructor(t="",e={}){if(t instanceof an)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;const i=function(t){let e={r:0,g:0,b:0},i=1,s=null,o=null,r=null,n=!1,a=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(tn[t])t=tn[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=rn.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=rn.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=rn.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=rn.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=rn.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=rn.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=rn.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=rn.hex8.exec(t),i?{r:Zr(i[1]),g:Zr(i[2]),b:Zr(i[3]),a:Xr(i[4]),format:e?"name":"hex8"}:(i=rn.hex6.exec(t),i?{r:Zr(i[1]),g:Zr(i[2]),b:Zr(i[3]),format:e?"name":"hex"}:(i=rn.hex4.exec(t),i?{r:Zr(i[1]+i[1]),g:Zr(i[2]+i[2]),b:Zr(i[3]+i[3]),a:Xr(i[4]+i[4]),format:e?"name":"hex8"}:(i=rn.hex3.exec(t),!!i&&{r:Zr(i[1]+i[1]),g:Zr(i[2]+i[2]),b:Zr(i[3]+i[3]),format:e?"name":"hex"}))))))))))}(t)),"object"==typeof t&&(nn(t.r)&&nn(t.g)&&nn(t.b)?(e=function(t,e,i){return{r:255*Br(t,255),g:255*Br(e,255),b:255*Br(i,255)}}(t.r,t.g,t.b),n=!0,a="%"===String(t.r).substr(-1)?"prgb":"rgb"):nn(t.h)&&nn(t.s)&&nn(t.v)?(s=Wr(t.s),o=Wr(t.v),e=function(t,e,i){t=6*Br(t,360),e=Br(e,100),i=Br(i,100);const s=Math.floor(t),o=t-s,r=i*(1-e),n=i*(1-o*e),a=i*(1-(1-o)*e),l=s%6;return{r:255*[i,n,r,r,a,i][l],g:255*[a,i,i,n,r,r][l],b:255*[r,r,a,i,i,n][l]}}(t.h,s,o),n=!0,a="hsv"):nn(t.h)&&nn(t.s)&&nn(t.l)?(s=Wr(t.s),r=Wr(t.l),e=function(t,e,i){let s,o,r;if(t=Br(t,360),e=Br(e,100),i=Br(i,100),0===e)o=i,r=i,s=i;else{const n=i<.5?i*(1+e):i+e-i*e,a=2*i-n;s=jr(a,n,t+1/3),o=jr(a,n,t),r=jr(a,n,t-1/3)}return{r:255*s,g:255*o,b:255*r}}(t.h,s,r),n=!0,a="hsl"):nn(t.c)&&nn(t.m)&&nn(t.y)&&nn(t.k)&&(e=function(t,e,i,s){const o=s/100;return{r:255*(1-t/100)*(1-o),g:255*(1-e/100)*(1-o),b:255*(1-i/100)*(1-o)}}(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Ur(i),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){const t=this.toRgb();let e,i,s;const o=t.r/255,r=t.g/255,n=t.b/255;return e=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),i=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),s=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),.2126*e+.7152*i+.0722*s}getAlpha(){return this.a}setAlpha(t){return this.a=Ur(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return 0===t}toHsv(){const t=Gr(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Gr(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),s=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${s}%)`:`hsva(${e}, ${i}%, ${s}%, ${this.roundA})`}toHsl(){const t=qr(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=qr(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),s=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${s}%)`:`hsla(${e}, ${i}%, ${s}%, ${this.roundA})`}toHex(t=!1){return Kr(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,s,o){const r=[Yr(Math.round(t).toString(16)),Yr(Math.round(e).toString(16)),Yr(Math.round(i).toString(16)),Yr(Jr(s))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*Br(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*Br(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Qr(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:i,k:s}=Qr(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${s})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t="#"+Kr(this.r,this.g,this.b,!1);for(const[e,i]of Object.entries(tn))if(t===i)return e;return!1}toString(t){const e=Boolean(t);t=t??this.format;let i=!1;const s=this.a<1&&this.a>=0;return e||!s||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),"cmyk"===t&&(i=this.toCmykString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new an(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=Hr(e.l),new an(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new an(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=Hr(e.l),new an(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=Hr(e.s),new an(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=Hr(e.s),new an(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new an(e)}mix(t,e=50){const i=this.toRgb(),s=new an(t).toRgb(),o=e/100,r={r:(s.r-i.r)*o+i.r,g:(s.g-i.g)*o+i.g,b:(s.b-i.b)*o+i.b,a:(s.a-i.a)*o+i.a};return new an(r)}analogous(t=6,e=30){const i=this.toHsl(),s=360/e,o=[this];for(i.h=(i.h-(s*t>>1)+720)%360;--t;)i.h=(i.h+s)%360,o.push(new an(i));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new an(t)}monochromatic(t=6){const e=this.toHsv(),{h:i}=e,{s}=e;let{v:o}=e;const r=[],n=1/t;for(;t--;)r.push(new an({h:i,s,v:o})),o=(o+n)%1;return r}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new an({h:(e+72)%360,s:t.s,l:t.l}),new an({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),i=new an(t).toRgb(),s=e.a+i.a*(1-e.a);return new an({r:(e.r*e.a+i.r*i.a*(1-e.a))/s,g:(e.g*e.a+i.g*i.a*(1-e.a))/s,b:(e.b*e.a+i.b*i.a*(1-e.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:i}=e,s=[this],o=360/t;for(let r=1;r<t;r++)s.push(new an({h:(i+r*o)%360,s:e.s,l:e.l}));return s}equals(t){const e=new an(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var ln="EyeDropper"in window,hn=class extends le{constructor(){super(),this.formControlController=new x(this),this.isSafeValue=!1,this.localize=new Oe(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),so(e,{onMove:t=>{this.alpha=ks(t/s*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),so(e,{onMove:t=>{this.hue=ks(t/s*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:s,height:o}=e.getBoundingClientRect();let r=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,so(e,{onMove:(t,e)=>{this.saturation=ks(t/s*100,0,100),this.brightness=ks(100-e/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=ks(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=ks(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=ks(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=ks(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=ks(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=ks(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=ks(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=ks(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new an(t);if(!e.isValid)return null;const i=e.toHsl(),s={h:i.h,s:100*i.s,l:100*i.l,a:i.a},o=e.toRgb(),r=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:100*a.s,v:100*a.v,a:a.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){ln&&(new EyeDropper).open().then(t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,s=100){const o=new an(`hsva(${t}, ${e}%, ${i}%, ${s/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);null!==i?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=100*i.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(t=>""!==t.trim()),s=gt`
      <div
        part="base"
        class=${ye({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?gt`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${vo({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${ye({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${vo({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${we(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${vo({left:(0===this.hue?0:100/(360/this.hue))+"%"})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${we(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?gt`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${vo({backgroundImage:`linear-gradient(\n                          to right,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%\n                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${vo({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${we(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${vo({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":gt`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${ln?gt`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?gt`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(t=>{const e=this.parseColor(t);return e?gt`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${we(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${vo({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:gt`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${ye({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${vo({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};hn.styles=[Zt,Rr],hn.dependencies={"sl-button-group":$o,"sl-button":Nr,"sl-dropdown":Ar,"sl-icon":ge,"sl-input":Go,"sl-visually-hidden":$s},f([ne('[part~="base"]')],hn.prototype,"base",2),f([ne('[part~="input"]')],hn.prototype,"input",2),f([ne(".color-dropdown")],hn.prototype,"dropdown",2),f([ne('[part~="preview"]')],hn.prototype,"previewButton",2),f([ne('[part~="trigger"]')],hn.prototype,"trigger",2),f([se()],hn.prototype,"hasFocus",2),f([se()],hn.prototype,"isDraggingGridHandle",2),f([se()],hn.prototype,"isEmpty",2),f([se()],hn.prototype,"inputValue",2),f([se()],hn.prototype,"hue",2),f([se()],hn.prototype,"saturation",2),f([se()],hn.prototype,"brightness",2),f([se()],hn.prototype,"alpha",2),f([ie()],hn.prototype,"value",2),f([Bt()],hn.prototype,"defaultValue",2),f([ie()],hn.prototype,"label",2),f([ie()],hn.prototype,"format",2),f([ie({type:Boolean,reflect:!0})],hn.prototype,"inline",2),f([ie({reflect:!0})],hn.prototype,"size",2),f([ie({attribute:"no-format-toggle",type:Boolean})],hn.prototype,"noFormatToggle",2),f([ie()],hn.prototype,"name",2),f([ie({type:Boolean,reflect:!0})],hn.prototype,"disabled",2),f([ie({type:Boolean})],hn.prototype,"hoist",2),f([ie({type:Boolean})],hn.prototype,"opacity",2),f([ie({type:Boolean})],hn.prototype,"uppercase",2),f([ie()],hn.prototype,"swatches",2),f([ie({reflect:!0})],hn.prototype,"form",2),f([ie({type:Boolean,reflect:!0})],hn.prototype,"required",2),f([oe({passive:!1})],hn.prototype,"handleTouchMove",1),f([Xt("format",{waitUntilFirstUpdate:!0})],hn.prototype,"handleFormatChange",1),f([Xt("opacity",{waitUntilFirstUpdate:!0})],hn.prototype,"handleOpacityChange",1),f([Xt("value")],hn.prototype,"handleValueChange",1),hn.define("sl-color-picker");var cn=T`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,dn=class extends le{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"footer","header","image")}render(){return gt`
      <div
        part="base"
        class=${ye({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};dn.styles=[Zt,cn],dn.define("sl-card");var un=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},pn=T`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,fn=class extends le{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new un(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Oe(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const s=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{e===s&&i===o||(t.scrollTo({left:s,top:o,behavior:We()?"auto":"smooth"}),await ws(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(t=>[...t.addedNodes,...t.removedNodes].some(t=>this.isCarouselItem(t)&&!t.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:s}=this,o=s?t/i:(t-e)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i="rtl"===this.localize.dir(),s=null!==e.closest('[part~="pagination-item"]'),o="ArrowDown"===t.key||!i&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key,r="ArrowUp"===t.key||!i&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key;t.preventDefault(),r&&this.previous(),o&&this.next(),"Home"===t.key&&this.goToSlide(0),"End"===t.key&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector('[part~="pagination-item--active"]');e&&e.focus()})}}handleMouseDragStart(t){this.mouseDragging&&0===t.button&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const t of e){const e=t.target;e.toggleAttribute("inert",!t.isIntersecting),e.classList.toggle("--in-view",t.isIntersecting),e.setAttribute("aria-hidden",t.isIntersecting?"false":"true")}const i=e.find(t=>t.isIntersecting);if(!i)return;const s=this.getSlides({excludeClones:!1}),o=this.getSlides().length,r=s.indexOf(i.target),n=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const t=Number(i.target.getAttribute("data-clone"));this.goToSlide(t,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&"sl-carousel-item"===t.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),s=t.slice(0,e);i.reverse().forEach((e,i)=>{const s=e.cloneNode(!0);s.setAttribute("data-clone",String(t.length-i-1)),this.prepend(s)}),s.forEach((t,e)=>{const i=t.cloneNode(!0);i.setAttribute("data-clone",String(e)),this.append(i)})}handleSlideChange(){const t=this.getSlides();t.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((t,i)=>{(i+e)%e===0?t.style.removeProperty("scroll-snap-align"):t.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:s}=this,o=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!o.length)return;const n=s?(t+o.length)%o.length:ks(t,0,o.length-i);this.activeSlide=n;const a=r[ks(t+(s?i:0)+("rtl"===this.localize.dir()?i-1:0),0,r.length-1)];this.scrollToSlide(a,We()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,s=i.getBoundingClientRect(),o=t.getBoundingClientRect(),r=o.left-s.left,n=o.top-s.top;r||n?(this.pendingSlideChange=!0,i.scrollTo({left:r+i.scrollLeft,top:n+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),s=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),n="ltr"===this.localize.dir();return gt`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${ye({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?gt`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${ye({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${ye({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?gt`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${function*(t,e){if(void 0!==t){let i=0;for(const s of t)yield e(s,i++)}}(function*(t,e,i=1){const s=void 0===e?0:t;e??=t;for(let t=s;i>0?t<e:e<t;t+=i)yield t}(i),e=>{const o=e===s;return gt`
                    <button
                      part="pagination-item ${o?"pagination-item--active":""}"
                      class="${ye({"carousel__pagination-item":!0,"carousel__pagination-item--active":o})}"
                      role="tab"
                      id="tab-${e+1}"
                      aria-controls="slide-${e+1}"
                      aria-selected="${o?"true":"false"}"
                      aria-label="${o?this.localize.term("slideNum",e+1):this.localize.term("goToSlide",e+1,i)}"
                      tabindex=${o?"0":"-1"}
                      @click=${()=>this.goToSlide(e*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};fn.styles=[Zt,pn],fn.dependencies={"sl-icon":ge},f([ie({type:Boolean,reflect:!0})],fn.prototype,"loop",2),f([ie({type:Boolean,reflect:!0})],fn.prototype,"navigation",2),f([ie({type:Boolean,reflect:!0})],fn.prototype,"pagination",2),f([ie({type:Boolean,reflect:!0})],fn.prototype,"autoplay",2),f([ie({type:Number,attribute:"autoplay-interval"})],fn.prototype,"autoplayInterval",2),f([ie({type:Number,attribute:"slides-per-page"})],fn.prototype,"slidesPerPage",2),f([ie({type:Number,attribute:"slides-per-move"})],fn.prototype,"slidesPerMove",2),f([ie()],fn.prototype,"orientation",2),f([ie({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],fn.prototype,"mouseDragging",2),f([ne(".carousel__slides")],fn.prototype,"scrollContainer",2),f([ne(".carousel__pagination")],fn.prototype,"paginationContainer",2),f([se()],fn.prototype,"activeSlide",2),f([se()],fn.prototype,"scrolling",2),f([se()],fn.prototype,"dragging",2),f([oe({passive:!0})],fn.prototype,"handleScroll",1),f([Xt("loop",{waitUntilFirstUpdate:!0}),Xt("slidesPerPage",{waitUntilFirstUpdate:!0})],fn.prototype,"initializeSlides",1),f([Xt("activeSlide")],fn.prototype,"handleSlideChange",1),f([Xt("slidesPerMove")],fn.prototype,"updateSlidesSnap",1),f([Xt("autoplay")],fn.prototype,"handleAutoplayChange",1),fn.define("sl-carousel");var mn=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},gn=(t,e,i)=>{const s=t[e];t[e]=function(...t){s.call(this,...t),i.call(this,s,...t)}};(()=>{if("undefined"!=typeof window&&!("onscrollend"in window)){const t=new Set,e=new WeakMap,i=e=>{for(const i of e.changedTouches)t.add(i.identifier)},s=e=>{for(const i of e.changedTouches)t.delete(i.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),gn(EventTarget.prototype,"addEventListener",function(i,s){if("scrollend"!==s)return;const o=mn(()=>{t.size?o():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",o,{passive:!0}),e.set(this,o)}),gn(EventTarget.prototype,"removeEventListener",function(t,i){if("scrollend"!==i)return;const s=e.get(this);s&&t.call(this,"scroll",s,{passive:!0})})}})();var bn=T`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,vn=class extends le{connectedCallback(){super.connectedCallback()}render(){return gt` <slot></slot> `}};vn.styles=[Zt,bn],vn.define("sl-carousel-item");var yn=T`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,wn=class extends le{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>"sl-dropdown"===t.tagName.toLowerCase()).length>0;this.href?this.renderType="link":this.renderType=t?"dropdown":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return gt`
      <div
        part="base"
        class=${ye({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${"link"===this.renderType?gt`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${we(this.target?this.target:void 0)}"
                rel=${we(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${"button"===this.renderType?gt`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${"dropdown"===this.renderType?gt`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};wn.styles=[Zt,yn],f([ne("slot:not([name])")],wn.prototype,"defaultSlot",2),f([se()],wn.prototype,"renderType",2),f([ie()],wn.prototype,"href",2),f([ie()],wn.prototype,"target",2),f([ie()],wn.prototype,"rel",2),f([Xt("href",{waitUntilFirstUpdate:!0})],wn.prototype,"hrefChanged",1),wn.define("sl-breadcrumb-item"),$o.define("sl-button-group");var _n=T`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,xn=class extends le{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=gt`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=gt``;return e=this.initials?gt`<div part="initials" class="avatar__initials">${this.initials}</div>`:gt`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,gt`
      <div
        part="base"
        class=${ye({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};xn.styles=[Zt,_n],xn.dependencies={"sl-icon":ge},f([se()],xn.prototype,"hasError",2),f([ie()],xn.prototype,"image",2),f([ie()],xn.prototype,"label",2),f([ie()],xn.prototype,"initials",2),f([ie()],xn.prototype,"loading",2),f([ie({reflect:!0})],xn.prototype,"shape",2),f([Xt("image")],xn.prototype,"handleImageChange",1),xn.define("sl-avatar");var kn=T`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Cn=class extends le{constructor(){super(...arguments),this.localize=new Oe(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>"sl-breadcrumb-item"===t.tagName.toLowerCase());t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');null===s?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),gt`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Cn.styles=[Zt,kn],Cn.dependencies={"sl-icon":ge},f([ne("slot")],Cn.prototype,"defaultSlot",2),f([ne('slot[name="separator"]')],Cn.prototype,"separatorSlot",2),f([ie()],Cn.prototype,"label",2),Cn.define("sl-breadcrumb"),Nr.define("sl-button");var Sn=T`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,zn=class extends le{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return gt`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?gt`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};zn.styles=[Zt,Sn],zn.dependencies={"sl-icon":ge},f([ne(".animated-image__animated")],zn.prototype,"animatedImage",2),f([se()],zn.prototype,"frozenFrame",2),f([se()],zn.prototype,"isLoaded",2),f([ie()],zn.prototype,"src",2),f([ie()],zn.prototype,"alt",2),f([ie({type:Boolean,reflect:!0})],zn.prototype,"play",2),f([Xt("play",{waitUntilFirstUpdate:!0})],zn.prototype,"handlePlayChange",1),f([Xt("src")],zn.prototype,"handleSrcChange",1),zn.define("sl-animated-image");var $n=T`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,En=class extends le{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return gt`
      <span
        part="base"
        class=${ye({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};En.styles=[Zt,$n],f([ie({reflect:!0})],En.prototype,"variant",2),f([ie({type:Boolean,reflect:!0})],En.prototype,"pill",2),f([ie({type:Boolean,reflect:!0})],En.prototype,"pulse",2),En.define("sl-badge");var Mn=T`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Pn=class t extends le{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"icon","suffix"),this.localize=new Oe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),null==(t=this.countdownAnimation)||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",i="0";this.countdownAnimation=t.animate([{width:e},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ye(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=Be(this,"alert.show",{dir:this.localize.dir()});await He(this.base,t,e),this.emit("sl-after-show")}else{Er(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Ye(this.base);const{keyframes:t,options:e}=Be(this,"alert.hide",{dir:this.localize.dir()});await He(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ws(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ws(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),null===t.toastStack.parentElement&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{t.toastStack.removeChild(this),e(),null===t.toastStack.querySelector("sl-alert")&&t.toastStack.remove()},{once:!0})})}render(){return gt`
      <div
        part="base"
        class=${ye({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?gt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?gt`
              <div
                class=${ye({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Pn.styles=[Zt,Mn],Pn.dependencies={"sl-icon-button":Rs},f([ne('[part~="base"]')],Pn.prototype,"base",2),f([ne(".alert__countdown-elapsed")],Pn.prototype,"countdownElement",2),f([ie({type:Boolean,reflect:!0})],Pn.prototype,"open",2),f([ie({type:Boolean,reflect:!0})],Pn.prototype,"closable",2),f([ie({reflect:!0})],Pn.prototype,"variant",2),f([ie({type:Number})],Pn.prototype,"duration",2),f([ie({type:String,reflect:!0})],Pn.prototype,"countdown",2),f([se()],Pn.prototype,"remainingTime",2),f([Xt("open",{waitUntilFirstUpdate:!0})],Pn.prototype,"handleOpenChange",1),f([Xt("duration")],Pn.prototype,"handleDurationChange",1);var Tn=Pn;Ne("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Ne("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Tn.define("sl-alert");const An=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ln=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Dn=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],On=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],In=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Fn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Rn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hn=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Un=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Wn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Yn=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],qn=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],jn=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Gn=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Kn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Qn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Jn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Xn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Zn=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ta=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ea=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ia=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sa=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],oa=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],ra=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],na=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],aa=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],la=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],ha=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],ca=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],da=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ua=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pa=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fa=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ma=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ga=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ba=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],va=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ya=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wa=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_a=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xa=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],ka=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Ca=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Sa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],za=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],$a=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Ea=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Ma=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Pa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Ta=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Aa=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],La=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Da=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Oa=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Ia=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Va=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Fa=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Ra=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Na=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ba=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ha=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Ua=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Wa=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ya=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],qa=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ja=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ga=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ka=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Qa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Ja=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Xa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Za=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],tl=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],el=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],il=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sl=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ol=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],rl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],nl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],al=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],ll=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],hl=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],cl=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],ul=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],pl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ml=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],bl=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],vl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],wl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],_l=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var kl=T`
  :host {
    display: contents;
  }
`,Cl=class extends le{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return null!=(e=null==(t=this.animation)?void 0:t.currentTime)?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,i;const s=null!=(t=xl[this.easing])?t:this.easing,o=null!=(i=this.keyframes)?i:e[this.name],r=(await this.defaultSlot).assignedElements()[0];return!(!r||!o||(this.destroyAnimation(),this.animation=r.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),0))}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;null==(t=this.animation)||t.cancel()}finish(){var t;null==(t=this.animation)||t.finish()}render(){return gt` <slot @slotchange=${this.handleSlotChange}></slot> `}};function Sl(t="",...e){const i=t.split(/([#.])/),s=i[0]||"div",o=document.createElement(s);for(let t=1;t<i.length;t+=2){const e=i[t],s=i[t+1];s&&("#"===e?o.id=s:"."===e&&o.classList.add(s))}const r=t=>t.replace(/-([a-z0-9])/g,(t,e)=>e.toUpperCase()),n=document.createDocumentFragment();for(const t of e){if(t instanceof HTMLElement){n.appendChild(t);continue}if("string"==typeof t){const e=t.split("\n");for(let t=0;t<e.length;t++){t>0&&n.appendChild(document.createElement("br"));const i=e[t];i&&n.appendChild(document.createTextNode(i))}continue}if(!t)continue;const e=t;for(const t in e){if(!Object.prototype.hasOwnProperty.call(e,t))continue;const i=e[t];if(null!=i)if("style"!==t)if("dataset"!==t||"object"!=typeof i)if("id"!==t){if("class"===t||"className"===t){const t=String(i).split(/\s+/);for(const e of t)e&&o.classList.add(e);continue}if(t.startsWith("data-")){const e=r(t.slice(5));o.dataset[e]=String(i),o.setAttribute(t,String(i));continue}t.startsWith("aria-")?o.setAttribute(t,String(i)):t in o?o[t]=i:o.setAttribute(t,String(i))}else o.id=i;else for(const t in i){const e=i[t];null!=e&&(o.dataset[r(t)]=String(e))}else if("string"==typeof i){const t=i.trim();t&&(o.style.cssText.trim().length>0&&!t.startsWith(";")&&(o.style.cssText+=";"),o.style.cssText+=t)}else"object"==typeof i&&Object.assign(o.style,i)}}return o.appendChild(n),o}function zl(t){var e=t.width,i=t.height;if(e<0)throw new Error("Negative width is not allowed for Size");if(i<0)throw new Error("Negative height is not allowed for Size");return{width:e,height:i}}function $l(t,e){return t.width===e.width&&t.height===e.height}Cl.styles=[Zt,kl],f([(t,e)=>re(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],Cl.prototype,"defaultSlot",2),f([ie()],Cl.prototype,"name",2),f([ie({type:Boolean,reflect:!0})],Cl.prototype,"play",2),f([ie({type:Number})],Cl.prototype,"delay",2),f([ie()],Cl.prototype,"direction",2),f([ie({type:Number})],Cl.prototype,"duration",2),f([ie()],Cl.prototype,"easing",2),f([ie({attribute:"end-delay",type:Number})],Cl.prototype,"endDelay",2),f([ie()],Cl.prototype,"fill",2),f([ie({type:Number})],Cl.prototype,"iterations",2),f([ie({attribute:"iteration-start",type:Number})],Cl.prototype,"iterationStart",2),f([ie({attribute:!1})],Cl.prototype,"keyframes",2),f([ie({attribute:"playback-rate",type:Number})],Cl.prototype,"playbackRate",2),f([Xt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Cl.prototype,"handleAnimationChange",1),f([Xt("play")],Cl.prototype,"handlePlayChange",1),f([Xt("playbackRate")],Cl.prototype,"handlePlaybackRateChange",1),Cl.define("sl-animation");var El=function(){function t(t){var e=this;this._resolutionListener=function(){return e._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=t,this._installResolutionListener()}return t.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(t.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(t){var e=this,i={next:t};return this._observers.push(i),{unsubscribe:function(){e._observers=e._observers.filter(function(t){return t!==i})}}},t.prototype._installResolutionListener=function(){if(null!==this._resolutionMediaQueryList)throw new Error("Resolution listener is already installed");var t=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(t,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},t.prototype._uninstallResolutionListener=function(){null!==this._resolutionMediaQueryList&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},t.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},t.prototype._onResolutionChanged=function(){var t=this;this._observers.forEach(function(e){return e.next(t._window.devicePixelRatio)}),this._reinstallResolutionListener()},t}(),Ml=function(){function t(t,e,i){var s;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=t,this._canvasElementClientSize=zl({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=null!=e?e:function(t){return t},this._allowResizeObserver=null===(s=null==i?void 0:i.allowResizeObserver)||void 0===s||s,this._chooseAndInitObserver()}return t.prototype.dispose=function(){var t,e;if(null===this._canvasElement)throw new Error("Object is disposed");null===(t=this._canvasElementResizeObserver)||void 0===t||t.disconnect(),this._canvasElementResizeObserver=null,null===(e=this._devicePixelRatioObservable)||void 0===e||e.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(t.prototype,"canvasElement",{get:function(){if(null===this._canvasElement)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bitmapSize",{get:function(){return zl({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),t.prototype.resizeCanvasElement=function(t){this._canvasElementClientSize=zl(t),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},t.prototype.subscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners.push(t)},t.prototype.unsubscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(e){return e!==t})},Object.defineProperty(t.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),t.prototype.subscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners.push(t)},t.prototype.unsubscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(e){return e!==t})},t.prototype.applySuggestedBitmapSize=function(){if(null!==this._suggestedBitmapSize){var t=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(t),this._emitSuggestedBitmapSizeChanged(t,this._suggestedBitmapSize)}},t.prototype._resizeBitmap=function(t){var e=this.bitmapSize;$l(e,t)||(this.canvasElement.width=t.width,this.canvasElement.height=t.height,this._emitBitmapSizeChanged(e,t))},t.prototype._emitBitmapSizeChanged=function(t,e){var i=this;this._bitmapSizeChangedListeners.forEach(function(s){return s.call(i,t,e)})},t.prototype._suggestNewBitmapSize=function(t){var e=this._suggestedBitmapSize,i=zl(this._transformBitmapSize(t,this._canvasElementClientSize)),s=$l(this.bitmapSize,i)?null:i;null===e&&null===s||null!==e&&null!==s&&$l(e,s)||(this._suggestedBitmapSize=s,this._emitSuggestedBitmapSizeChanged(e,s))},t.prototype._emitSuggestedBitmapSizeChanged=function(t,e){var i=this;this._suggestedBitmapSizeChangedListeners.forEach(function(s){return s.call(i,t,e)})},t.prototype._chooseAndInitObserver=function(){var t=this;this._allowResizeObserver?new Promise(function(t){var e=new ResizeObserver(function(i){t(i.every(function(t){return"devicePixelContentBoxSize"in t})),e.disconnect()});e.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1}).then(function(e){return e?t._initResizeObserver():t._initDevicePixelRatioObservable()}):this._initDevicePixelRatioObservable()},t.prototype._initDevicePixelRatioObservable=function(){var t=this;if(null!==this._canvasElement){var e=Pl(this._canvasElement);if(null===e)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=function(t){return new El(t)}(e),this._devicePixelRatioObservable.subscribe(function(){return t._invalidateBitmapSize()}),this._invalidateBitmapSize()}},t.prototype._invalidateBitmapSize=function(){var t,e;if(null!==this._canvasElement){var i=Pl(this._canvasElement);if(null!==i){var s=null!==(e=null===(t=this._devicePixelRatioObservable)||void 0===t?void 0:t.value)&&void 0!==e?e:i.devicePixelRatio,o=this._canvasElement.getClientRects(),r=void 0!==o[0]?function(t,e){return zl({width:Math.round(t.left*e+t.width*e)-Math.round(t.left*e),height:Math.round(t.top*e+t.height*e)-Math.round(t.top*e)})}(o[0],s):zl({width:this._canvasElementClientSize.width*s,height:this._canvasElementClientSize.height*s});this._suggestNewBitmapSize(r)}}},t.prototype._initResizeObserver=function(){var t=this;null!==this._canvasElement&&(this._canvasElementResizeObserver=new ResizeObserver(function(e){var i=e.find(function(e){return e.target===t._canvasElement});if(i&&i.devicePixelContentBoxSize&&i.devicePixelContentBoxSize[0]){var s=i.devicePixelContentBoxSize[0],o=zl({width:s.inlineSize,height:s.blockSize});t._suggestNewBitmapSize(o)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},t}();function Pl(t){return t.ownerDocument.defaultView}var Tl=function(){function t(t,e,i){if(0===e.width||0===e.height)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=e,0===i.width||0===i.height)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=i,this._context=t}return t.prototype.useMediaCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),t({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},t.prototype.useBitmapCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),t({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(t.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),t}();function Al(t,e){var i=t.canvasElementClientSize;if(0===i.width||0===i.height)return null;var s=t.bitmapSize;if(0===s.width||0===s.height)return null;var o=t.canvasElement.getContext("2d",e);return null===o?null:new Tl(o,i,s)}const Ll={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var Dl,Ol;function Il(t,e){const i={0:[],1:[t.lineWidth,t.lineWidth],2:[2*t.lineWidth,2*t.lineWidth],3:[6*t.lineWidth,6*t.lineWidth],4:[t.lineWidth,4*t.lineWidth]}[e];t.setLineDash(i)}function Vl(t,e,i,s){t.beginPath();const o=t.lineWidth%2?.5:0;t.moveTo(i,e+o),t.lineTo(s,e+o),t.stroke()}function Fl(t,e){if(!t)throw new Error("Assertion failed"+(e?": "+e:""))}function Rl(t){if(void 0===t)throw new Error("Value is undefined");return t}function Nl(t){if(null===t)throw new Error("Value is null");return t}function Bl(t){return Nl(Rl(t))}!function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps",t[t.Curved=2]="Curved"}(Dl||(Dl={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(Ol||(Ol={}));class Hl{constructor(){this.t=[]}i(t,e,i){const s={h:t,l:e,o:!0===i};this.t.push(s)}_(t){const e=this.t.findIndex(e=>t===e.h);e>-1&&this.t.splice(e,1)}u(t){this.t=this.t.filter(e=>e.l!==t)}p(t,e,i){const s=[...this.t];this.t=this.t.filter(t=>!t.o),s.forEach(s=>s.h(t,e,i))}v(){return this.t.length>0}m(){this.t=[]}}function Ul(t,...e){for(const i of e)for(const e in i)void 0!==i[e]&&Object.prototype.hasOwnProperty.call(i,e)&&!["__proto__","constructor","prototype"].includes(e)&&("object"!=typeof i[e]||void 0===t[e]||Array.isArray(i[e])?t[e]=i[e]:Ul(t[e],i[e]));return t}function Wl(t){return"number"==typeof t&&isFinite(t)}function Yl(t){return"number"==typeof t&&t%1==0}function ql(t){return"string"==typeof t}function jl(t){return"boolean"==typeof t}function Gl(t){const e=t;if(!e||"object"!=typeof e)return e;let i,s,o;for(s in i=Array.isArray(e)?[]:{},e)e.hasOwnProperty(s)&&(o=e[s],i[s]=o&&"object"==typeof o?Gl(o):o);return i}function Kl(t){return null!==t}function Ql(t){return null===t?void 0:t}const Jl="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function Xl(t,e,i){return void 0===e&&(e=Jl),`${i=void 0!==i?`${i} `:""}${t}px ${e}`}class Zl{constructor(t){this.M={S:1,C:5,P:NaN,k:"",T:"",R:"",D:"",V:0,B:0,I:0,A:0,L:0},this.O=t}N(){const t=this.M,e=this.F(),i=this.W();return t.P===e&&t.T===i||(t.P=e,t.T=i,t.k=Xl(e,i),t.A=2.5/12*e,t.V=t.A,t.B=e/12*t.C,t.I=e/12*t.C,t.L=0),t.R=this.H(),t.D=this.U(),this.M}H(){return this.O.N().layout.textColor}U(){return this.O.$()}F(){return this.O.N().layout.fontSize}W(){return this.O.N().layout.fontFamily}}function th(t){return t<0?0:t>255?255:Math.round(t)||0}function eh(t){return.199*t[0]+.687*t[1]+.114*t[2]}class ih{constructor(t,e){this.q=new Map,this.Y=t,e&&(this.q=e)}j(t,e){if("transparent"===t)return t;const i=this.K(t),s=i[3];return`rgba(${i[0]}, ${i[1]}, ${i[2]}, ${e*s})`}X(t){const e=this.K(t);return{Z:`rgb(${e[0]}, ${e[1]}, ${e[2]})`,G:eh(e)>160?"black":"white"}}J(t){return eh(this.K(t))}tt(t,e,i){const[s,o,r,n]=this.K(t),[a,l,h,c]=this.K(e),d=[th(s+i*(a-s)),th(o+i*(l-o)),th(r+i*(h-r)),(u=n+i*(c-n),u<=0||u>1?Math.min(Math.max(u,0),1):Math.round(1e4*u)/1e4)];var u;return`rgba(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`}K(t){const e=this.q.get(t);if(e)return e;const i=function(t){const e=document.createElement("div");e.style.display="none",document.body.appendChild(e),e.style.color=t;const i=window.getComputedStyle(e).color;return document.body.removeChild(e),i}(t),s=i.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);if(!s){if(this.Y.length)for(const e of this.Y){const i=e(t);if(i)return this.q.set(t,i),i}throw new Error(`Failed to parse color: ${t}`)}const o=[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10),s[4]?parseFloat(s[4]):1];return this.q.set(t,o),o}}class sh{constructor(){this.it=[]}st(t){this.it=t}nt(t,e,i){this.it.forEach(s=>{s.nt(t,e,i)})}}class oh{nt(t,e,i){t.useBitmapCoordinateSpace(t=>this.et(t,e,i))}}class rh extends oh{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et({context:t,horizontalPixelRatio:e,verticalPixelRatio:i}){if(null===this.rt||null===this.rt.lt)return;const s=this.rt.lt,o=this.rt,r=Math.max(1,Math.floor(e))%2/2,n=n=>{t.beginPath();for(let a=s.to-1;a>=s.from;--a){const s=o.ot[a],l=Math.round(s._t*e)+r,h=s.ut*i,c=n*i+r;t.moveTo(l,h),t.arc(l,h,c,0,2*Math.PI)}t.fill()};o.ct>0&&(t.fillStyle=o.dt,n(o.ft+o.ct)),t.fillStyle=o.vt,n(o.ft)}}function nh(){return{ot:[{_t:0,ut:0,wt:0,gt:0}],vt:"",dt:"",ft:0,ct:0,lt:null}}const ah={from:0,to:1};class lh{constructor(t,e,i){this.Mt=new sh,this.bt=[],this.St=[],this.xt=!0,this.O=t,this.Ct=e,this.Pt=i,this.Mt.st(this.bt)}yt(t){this.kt(),this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.Mt}kt(){const t=this.Pt.Dt();t.length!==this.bt.length&&(this.St=t.map(nh),this.bt=this.St.map(t=>{const e=new rh;return e.ht(t),e}),this.Mt.st(this.bt))}Rt(){const t=2===this.Ct.N().mode||!this.Ct.Vt(),e=this.Pt.Bt(),i=this.Ct.It(),s=this.O.Et();this.kt(),e.forEach((e,o)=>{const r=this.St[o],n=e.At(i),a=e.zt();!t&&null!==n&&e.Vt()&&null!==a?(r.vt=n.Lt,r.ft=n.ft,r.ct=n.Ot,r.ot[0].gt=n.gt,r.ot[0].ut=e.Ft().Nt(n.gt,a.Wt),r.dt=n.Ht??this.O.Ut(r.ot[0].ut/e.Ft().$t()),r.ot[0].wt=i,r.ot[0]._t=s.qt(i),r.lt=ah):r.lt=null})}}class hh extends oh{constructor(t){super(),this.Yt=t}et({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:s}){if(null===this.Yt)return;const o=this.Yt.jt.Vt,r=this.Yt.Kt.Vt;if(!o&&!r)return;const n=Math.round(this.Yt._t*i),a=Math.round(this.Yt.ut*s);t.lineCap="butt",o&&n>=0&&(t.lineWidth=Math.floor(this.Yt.jt.ct*i),t.strokeStyle=this.Yt.jt.R,t.fillStyle=this.Yt.jt.R,Il(t,this.Yt.jt.Xt),function(t,e,i,s){t.beginPath();const o=t.lineWidth%2?.5:0;t.moveTo(e+o,0),t.lineTo(e+o,s),t.stroke()}(t,n,0,e.height)),r&&a>=0&&(t.lineWidth=Math.floor(this.Yt.Kt.ct*s),t.strokeStyle=this.Yt.Kt.R,t.fillStyle=this.Yt.Kt.R,Il(t,this.Yt.Kt.Xt),Vl(t,a,0,e.width))}}class ch{constructor(t,e){this.xt=!0,this.Zt={jt:{ct:1,Xt:0,R:"",Vt:!1},Kt:{ct:1,Xt:0,R:"",Vt:!1},_t:0,ut:0},this.Gt=new hh(this.Zt),this.Jt=t,this.Pt=e}yt(){this.xt=!0}Tt(t){return this.xt&&(this.Rt(),this.xt=!1),this.Gt}Rt(){const t=this.Jt.Vt(),e=this.Pt.Qt().N().crosshair,i=this.Zt;if(2===e.mode)return i.Kt.Vt=!1,void(i.jt.Vt=!1);i.Kt.Vt=t&&this.Jt.ti(this.Pt),i.jt.Vt=t&&this.Jt.ii(),i.Kt.ct=e.horzLine.width,i.Kt.Xt=e.horzLine.style,i.Kt.R=e.horzLine.color,i.jt.ct=e.vertLine.width,i.jt.Xt=e.vertLine.style,i.jt.R=e.vertLine.color,i._t=this.Jt.si(),i.ut=this.Jt.ni()}}function dh(t,e,i,s,o,r){t.save(),t.globalCompositeOperation="copy",t.fillStyle=r,t.fillRect(e,i,s,o),t.restore()}function uh(t,e,i,s,o,r){t.beginPath(),t.roundRect?t.roundRect(e,i,s,o,r):(t.lineTo(e+s-r[1],i),0!==r[1]&&t.arcTo(e+s,i,e+s,i+r[1],r[1]),t.lineTo(e+s,i+o-r[2]),0!==r[2]&&t.arcTo(e+s,i+o,e+s-r[2],i+o,r[2]),t.lineTo(e+r[3],i+o),0!==r[3]&&t.arcTo(e,i+o,e,i+o-r[3],r[3]),t.lineTo(e,i+r[0]),0!==r[0]&&t.arcTo(e,i,e+r[0],i,r[0]))}function ph(t,e,i,s,o,r,n=0,a=[0,0,0,0],l=""){if(t.save(),!n||!l||l===r)return uh(t,e,i,s,o,a),t.fillStyle=r,t.fill(),void t.restore();const h=n/2;var c;uh(t,e+h,i+h,s-n,o-n,(c=-h,a.map(t=>0===t?t:t+c))),"transparent"!==r&&(t.fillStyle=r,t.fill()),"transparent"!==l&&(t.lineWidth=n,t.strokeStyle=l,t.closePath(),t.stroke()),t.restore()}function fh(t,e,i,s,o,r,n){t.save(),t.globalCompositeOperation="copy";const a=t.createLinearGradient(0,0,0,o);a.addColorStop(0,r),a.addColorStop(1,n),t.fillStyle=a,t.fillRect(e,i,s,o),t.restore()}class mh{constructor(t,e){this.ht(t,e)}ht(t,e){this.Yt=t,this.ei=e}$t(t,e){return this.Yt.Vt?t.P+t.A+t.V:0}nt(t,e,i,s){if(!this.Yt.Vt||0===this.Yt.ri.length)return;const o=this.Yt.R,r=this.ei.Z,n=t.useBitmapCoordinateSpace(t=>{const n=t.context;n.font=e.k;const a=this.hi(t,e,i,s),l=a.ai;return a.li?ph(n,l.oi,l._i,l.ui,l.ci,r,l.di,[l.ft,0,0,l.ft],r):ph(n,l.fi,l._i,l.ui,l.ci,r,l.di,[0,l.ft,l.ft,0],r),this.Yt.pi&&(n.fillStyle=o,n.fillRect(l.fi,l.mi,l.wi-l.fi,l.gi)),this.Yt.Mi&&(n.fillStyle=e.D,n.fillRect(a.li?l.bi-l.di:0,l._i,l.di,l.Si-l._i)),a});t.useMediaCoordinateSpace(({context:t})=>{const i=n.xi;t.font=e.k,t.textAlign=n.li?"right":"left",t.textBaseline="middle",t.fillStyle=o,t.fillText(this.Yt.ri,i.Ci,(i._i+i.Si)/2+i.Pi)})}hi(t,e,i,s){const{context:o,bitmapSize:r,mediaSize:n,horizontalPixelRatio:a,verticalPixelRatio:l}=t,h=this.Yt.pi||!this.Yt.yi?e.C:0,c=this.Yt.ki?e.S:0,d=e.A+this.ei.Ti,u=e.V+this.ei.Ri,p=e.B,f=e.I,m=this.Yt.ri,g=e.P,b=i.Di(o,m),v=Math.ceil(i.Vi(o,m)),y=g+d+u,w=e.S+p+f+v+h,_=Math.max(1,Math.floor(l));let x=Math.round(y*l);x%2!=_%2&&(x+=1);const k=c>0?Math.max(1,Math.floor(c*a)):0,C=Math.round(w*a),S=Math.round(h*a),z=this.ei.Bi??this.ei.Ii,$=Math.round(z*l)-Math.floor(.5*l),E=Math.floor($+_/2-x/2),M=E+x,P="right"===s,T=P?n.width-c:c,A=P?r.width-k:k;let L,D,O;return P?(L=A-C,D=A-S,O=T-h-p-c):(L=A+C,D=A+S,O=T+h+p),{li:P,ai:{_i:E,mi:$,Si:M,ui:C,ci:x,ft:2*a,di:k,oi:L,fi:A,wi:D,gi:_,bi:r.width},xi:{_i:E/l,Si:M/l,Ci:O,Pi:b}}}}class gh{constructor(t){this.Ei={Ii:0,Z:"#000",Ri:0,Ti:0},this.Ai={ri:"",Vt:!1,pi:!0,yi:!1,Ht:"",R:"#FFF",Mi:!1,ki:!1},this.zi={ri:"",Vt:!1,pi:!1,yi:!0,Ht:"",R:"#FFF",Mi:!0,ki:!0},this.xt=!0,this.Li=new(t||mh)(this.Ai,this.Ei),this.Oi=new(t||mh)(this.zi,this.Ei)}ri(){return this.Ni(),this.Ai.ri}Ii(){return this.Ni(),this.Ei.Ii}yt(){this.xt=!0}$t(t,e=!1){return Math.max(this.Li.$t(t,e),this.Oi.$t(t,e))}Fi(){return this.Ei.Bi||0}Wi(t){this.Ei.Bi=t}Hi(){return this.Ni(),this.Ai.Vt||this.zi.Vt}Ui(){return this.Ni(),this.Ai.Vt}Tt(t){return this.Ni(),this.Ai.pi=this.Ai.pi&&t.N().ticksVisible,this.zi.pi=this.zi.pi&&t.N().ticksVisible,this.Li.ht(this.Ai,this.Ei),this.Oi.ht(this.zi,this.Ei),this.Li}$i(){return this.Ni(),this.Li.ht(this.Ai,this.Ei),this.Oi.ht(this.zi,this.Ei),this.Oi}Ni(){this.xt&&(this.Ai.pi=!0,this.zi.pi=!1,this.qi(this.Ai,this.zi,this.Ei))}}class bh extends gh{constructor(t,e,i){super(),this.Jt=t,this.Yi=e,this.ji=i}qi(t,e,i){if(t.Vt=!1,2===this.Jt.N().mode)return;const s=this.Jt.N().horzLine;if(!s.labelVisible)return;const o=this.Yi.zt();if(!this.Jt.Vt()||this.Yi.Ki()||null===o)return;const r=this.Yi.Xi().X(s.labelBackgroundColor);i.Z=r.Z,t.R=r.G;const n=2/12*this.Yi.P();i.Ti=n,i.Ri=n;const a=this.ji(this.Yi);i.Ii=a.Ii,t.ri=this.Yi.Zi(a.gt,o),t.Vt=!0}}const vh=/[1-9]/g;class yh{constructor(){this.Yt=null}ht(t){this.Yt=t}nt(t,e){if(null===this.Yt||!1===this.Yt.Vt||0===this.Yt.ri.length)return;const i=t.useMediaCoordinateSpace(({context:t})=>(t.font=e.k,Math.round(e.Gi.Vi(t,Nl(this.Yt).ri,vh))));if(i<=0)return;const s=e.Ji,o=i+2*s,r=o/2,n=this.Yt.Qi;let a=this.Yt.Ii,l=Math.floor(a-r)+.5;l<0?(a+=Math.abs(0-l),l=Math.floor(a-r)+.5):l+o>n&&(a-=Math.abs(n-(l+o)),l=Math.floor(a-r)+.5);const h=l+o,c=Math.ceil(0+e.S+e.C+e.A+e.P+e.V);t.useBitmapCoordinateSpace(({context:t,horizontalPixelRatio:i,verticalPixelRatio:s})=>{const o=Nl(this.Yt);t.fillStyle=o.Z;const r=Math.round(l*i),n=Math.round(0*s),a=Math.round(h*i),d=Math.round(c*s),u=Math.round(2*i);if(t.beginPath(),t.moveTo(r,n),t.lineTo(r,d-u),t.arcTo(r,d,r+u,d,u),t.lineTo(a-u,d),t.arcTo(a,d,a,d-u,u),t.lineTo(a,n),t.fill(),o.pi){const r=Math.round(o.Ii*i),a=n,l=Math.round((a+e.C)*s);t.fillStyle=o.R;const h=Math.max(1,Math.floor(i)),c=Math.floor(.5*i);t.fillRect(r-c,a,h,l-a)}}),t.useMediaCoordinateSpace(({context:t})=>{const i=Nl(this.Yt),o=0+e.S+e.C+e.A+e.P/2;t.font=e.k,t.textAlign="left",t.textBaseline="middle",t.fillStyle=i.R;const r=e.Gi.Di(t,"Apr0");t.translate(l+s,o+r),t.fillText(i.ri,0,0)})}}class wh{constructor(t,e,i){this.xt=!0,this.Gt=new yh,this.Zt={Vt:!1,Z:"#4c525e",R:"white",ri:"",Qi:0,Ii:NaN,pi:!0},this.Ct=t,this.ts=e,this.ji=i}yt(){this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.Gt.ht(this.Zt),this.Gt}Rt(){const t=this.Zt;if(t.Vt=!1,2===this.Ct.N().mode)return;const e=this.Ct.N().vertLine;if(!e.labelVisible)return;const i=this.ts.Et();if(i.Ki())return;t.Qi=i.Qi();const s=this.ji();if(null===s)return;t.Ii=s.Ii;const o=i.ss(this.Ct.It());t.ri=i.ns(Nl(o)),t.Vt=!0;const r=this.ts.Xi().X(e.labelBackgroundColor);t.Z=r.Z,t.R=r.G,t.pi=i.N().ticksVisible}}class _h{constructor(){this.es=null,this.rs=0}hs(){return this.rs}ls(t){this.rs=t}Ft(){return this.es}_s(t){this.es=t}us(t){return[]}cs(){return[]}Vt(){return!0}}var xh;!function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet",t[t.Hidden=2]="Hidden",t[t.MagnetOHLC=3]="MagnetOHLC"}(xh||(xh={}));class kh extends _h{constructor(t,e){super(),this.Pt=null,this.ds=NaN,this.fs=0,this.ps=!1,this.vs=new Map,this.ws=!1,this.gs=new WeakMap,this.Ms=new WeakMap,this.bs=NaN,this.Ss=NaN,this.xs=NaN,this.Cs=NaN,this.ts=t,this.Ps=e,this.ys=((t,e)=>i=>{const s=e(),o=t();if(i===Nl(this.Pt).ks())return{gt:o,Ii:s};{const t=Nl(i.zt());return{gt:i.Ts(s,t),Ii:s}}})(()=>this.ds,()=>this.Ss);const i=((t,e)=>()=>{const i=this.ts.Et().Rs(t()),s=e();return i&&Number.isFinite(s)?{wt:i,Ii:s}:null})(()=>this.fs,()=>this.si());this.Ds=new wh(this,t,i)}N(){return this.Ps}Vs(t,e){this.xs=t,this.Cs=e}Bs(){this.xs=NaN,this.Cs=NaN}Is(){return this.xs}Es(){return this.Cs}As(t,e,i){this.ws||(this.ws=!0),this.ps=!0,this.zs(t,e,i)}It(){return this.fs}si(){return this.bs}ni(){return this.Ss}Vt(){return this.ps}Ls(){this.ps=!1,this.Os(),this.ds=NaN,this.bs=NaN,this.Ss=NaN,this.Pt=null,this.Bs(),this.Ns()}Fs(t){let e=this.gs.get(t);e||(e=new ch(this,t),this.gs.set(t,e));let i=this.Ms.get(t);return i||(i=new lh(this.ts,this,t),this.Ms.set(t,i)),[e,i]}ti(t){return t===this.Pt&&this.Ps.horzLine.visible}ii(){return this.Ps.vertLine.visible}Ws(t,e){this.ps&&this.Pt===t||this.vs.clear();const i=[];return this.Pt===t&&i.push(this.Hs(this.vs,e,this.ys)),i}cs(){return this.ps?[this.Ds]:[]}Us(){return this.Pt}Ns(){this.ts.$s().forEach(t=>{this.gs.get(t)?.yt(),this.Ms.get(t)?.yt()}),this.vs.forEach(t=>t.yt()),this.Ds.yt()}qs(t){return t&&!t.ks().Ki()?t.ks():null}zs(t,e,i){this.Ys(t,e,i)&&this.Ns()}Ys(t,e,i){const s=this.bs,o=this.Ss,r=this.ds,n=this.fs,a=this.Pt,l=this.qs(i);this.fs=t,this.bs=isNaN(t)?NaN:this.ts.Et().qt(t),this.Pt=i;const h=null!==l?l.zt():null;return null!==l&&null!==h?(this.ds=e,this.Ss=l.Nt(e,h)):(this.ds=NaN,this.Ss=NaN),s!==this.bs||o!==this.Ss||n!==this.fs||r!==this.ds||a!==this.Pt}Os(){const t=this.ts.js().map(t=>t.Xs().Ks()).filter(Kl),e=0===t.length?null:Math.max(...t);this.fs=null!==e?e:NaN}Hs(t,e,i){let s=t.get(e);return void 0===s&&(s=new bh(this,e,i),t.set(e,s)),s}}function Ch(t){return"left"===t||"right"===t}class Sh{constructor(t){this.Zs=new Map,this.Gs=[],this.Js=t}Qs(t,e){const i=function(t,e){return void 0===t?e:{tn:Math.max(t.tn,e.tn),sn:t.sn||e.sn}}(this.Zs.get(t),e);this.Zs.set(t,i)}nn(){return this.Js}en(t){const e=this.Zs.get(t);return void 0===e?{tn:this.Js}:{tn:Math.max(this.Js,e.tn),sn:e.sn}}rn(){this.hn(),this.Gs=[{an:0}]}ln(t){this.hn(),this.Gs=[{an:1,Wt:t}]}_n(t){this.un(),this.Gs.push({an:5,Wt:t})}hn(){this.un(),this.Gs.push({an:6})}cn(){this.hn(),this.Gs=[{an:4}]}dn(t){this.hn(),this.Gs.push({an:2,Wt:t})}fn(t){this.hn(),this.Gs.push({an:3,Wt:t})}pn(){return this.Gs}vn(t){for(const e of t.Gs)this.mn(e);this.Js=Math.max(this.Js,t.Js),t.Zs.forEach((t,e)=>{this.Qs(e,t)})}static wn(){return new Sh(2)}static gn(){return new Sh(3)}mn(t){switch(t.an){case 0:this.rn();break;case 1:this.ln(t.Wt);break;case 2:this.dn(t.Wt);break;case 3:this.fn(t.Wt);break;case 4:this.cn();break;case 5:this._n(t.Wt);break;case 6:this.un()}}un(){const t=this.Gs.findIndex(t=>5===t.an);-1!==t&&this.Gs.splice(t,1)}}class zh{formatTickmarks(t){return t.map(t=>this.format(t))}}function $h(t,e){if(!Wl(t))return"n/a";if(!Yl(e))throw new TypeError("invalid length");if(e<0||e>16)throw new TypeError("invalid length");return 0===e?t.toString():("0000000000000000"+t.toString()).slice(-e)}class Eh extends zh{constructor(t,e){if(super(),e||(e=1),Wl(t)&&Yl(t)||(t=100),t<0)throw new TypeError("invalid base");this.Yi=t,this.Mn=e,this.bn()}format(t){const e=t<0?"−":"";return t=Math.abs(t),e+this.Sn(t)}bn(){if(this.xn=0,this.Yi>0&&this.Mn>0){let t=this.Yi;for(;t>1;)t/=10,this.xn++}}Sn(t){const e=this.Yi/this.Mn;let i=Math.floor(t),s="";const o=void 0!==this.xn?this.xn:NaN;if(e>1){let r=+(Math.round(t*e)-i*e).toFixed(this.xn);r>=e&&(r-=e,i+=1),s="."+$h(+r.toFixed(this.xn)*this.Mn,o)}else i=Math.round(i*e)/e,o>0&&(s="."+$h(0,o));return i.toFixed(0)+s}}class Mh extends Eh{constructor(t=100){super(t)}format(t){return`${super.format(t)}%`}}class Ph extends zh{constructor(t){super(),this.Cn=t}format(t){let e="";return t<0&&(e="-",t=-t),t<995?e+this.Pn(t):t<999995?e+this.Pn(t/1e3)+"K":t<999999995?(t=1e3*Math.round(t/1e3),e+this.Pn(t/1e6)+"M"):(t=1e6*Math.round(t/1e6),e+this.Pn(t/1e9)+"B")}Pn(t){let e;const i=Math.pow(10,this.Cn);return e=(t=Math.round(t*i)/i)>=1e-15&&t<1?t.toFixed(this.Cn).replace(/\.?0+$/,""):String(t),e.replace(/(\.[1-9]*)0+$/,(t,e)=>e)}}const Th=/[2-9]/g;class Ah{constructor(t=50){this.yn=0,this.kn=1,this.Tn=1,this.Rn={},this.Dn=new Map,this.Vn=t}Bn(){this.yn=0,this.Dn.clear(),this.kn=1,this.Tn=1,this.Rn={}}Vi(t,e,i){return this.In(t,e,i).width}Di(t,e,i){const s=this.In(t,e,i);return((s.actualBoundingBoxAscent||0)-(s.actualBoundingBoxDescent||0))/2}In(t,e,i){const s=i||Th,o=String(e).replace(s,"0");if(this.Dn.has(o))return Rl(this.Dn.get(o)).En;if(this.yn===this.Vn){const t=this.Rn[this.Tn];delete this.Rn[this.Tn],this.Dn.delete(t),this.Tn++,this.yn--}t.save(),t.textBaseline="middle";const r=t.measureText(o);return t.restore(),0===r.width&&e.length||(this.Dn.set(o,{En:r,An:this.kn}),this.Rn[this.kn]=o,this.yn++,this.kn++),r}}class Lh{constructor(t){this.zn=null,this.M=null,this.Ln="right",this.On=t}Nn(t,e,i){this.zn=t,this.M=e,this.Ln=i}nt(t){null!==this.M&&null!==this.zn&&this.zn.nt(t,this.M,this.On,this.Ln)}}class Dh{constructor(t,e,i){this.Fn=t,this.On=new Ah(50),this.Wn=e,this.O=i,this.F=-1,this.Gt=new Lh(this.On)}Tt(){const t=this.O.Hn(this.Wn);if(null===t)return null;const e=t.Un(this.Wn)?t.$n():this.Wn.Ft();if(null===e)return null;const i=t.qn(e);if("overlay"===i)return null;const s=this.O.Yn();return s.P!==this.F&&(this.F=s.P,this.On.Bn()),this.Gt.Nn(this.Fn.$i(),s,i),this.Gt}}class Oh extends oh{constructor(){super(...arguments),this.Yt=null}ht(t){this.Yt=t}jn(t,e){if(!this.Yt?.Vt)return null;const{ut:i,ct:s,Kn:o}=this.Yt;return e>=i-s-7&&e<=i+s+7?{Xn:this.Yt,Kn:o}:null}et({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:s}){if(null===this.Yt)return;if(!1===this.Yt.Vt)return;const o=Math.round(this.Yt.ut*s);o<0||o>e.height||(t.lineCap="butt",t.strokeStyle=this.Yt.R,t.lineWidth=Math.floor(this.Yt.ct*i),Il(t,this.Yt.Xt),Vl(t,o,0,e.width))}}class Ih{constructor(t){this.Zn={ut:0,R:"rgba(0, 0, 0, 0)",ct:1,Xt:0,Vt:!1},this.Gn=new Oh,this.xt=!0,this.Jn=t,this.Qn=t.Qt(),this.Gn.ht(this.Zn)}yt(){this.xt=!0}Tt(){return this.Jn.Vt()?(this.xt&&(this.te(),this.xt=!1),this.Gn):null}}class Vh extends Ih{constructor(t){super(t)}te(){this.Zn.Vt=!1;const t=this.Jn.Ft(),e=t.ie().ie;if(2!==e&&3!==e)return;const i=this.Jn.N();if(!i.baseLineVisible||!this.Jn.Vt())return;const s=this.Jn.zt();null!==s&&(this.Zn.Vt=!0,this.Zn.ut=t.Nt(s.Wt,s.Wt),this.Zn.R=i.baseLineColor,this.Zn.ct=i.baseLineWidth,this.Zn.Xt=i.baseLineStyle)}}class Fh extends oh{constructor(){super(...arguments),this.Yt=null}ht(t){this.Yt=t}se(){return this.Yt}et({context:t,horizontalPixelRatio:e,verticalPixelRatio:i}){const s=this.Yt;if(null===s)return;const o=Math.max(1,Math.floor(e)),r=o%2/2,n=Math.round(s.ne.x*e)+r,a=s.ne.y*i;t.fillStyle=s.ee,t.beginPath();const l=Math.max(2,1.5*s.re)*e;t.arc(n,a,l,0,2*Math.PI,!1),t.fill(),t.fillStyle=s.he,t.beginPath(),t.arc(n,a,s.ft*e,0,2*Math.PI,!1),t.fill(),t.lineWidth=o,t.strokeStyle=s.ae,t.beginPath(),t.arc(n,a,s.ft*e+o/2,0,2*Math.PI,!1),t.stroke()}}const Rh=[{le:0,oe:.25,_e:4,ue:10,ce:.25,de:0,fe:.4,pe:.8},{le:.25,oe:.525,_e:10,ue:14,ce:0,de:0,fe:.8,pe:0},{le:.525,oe:1,_e:14,ue:14,ce:0,de:0,fe:0,pe:0}];class Nh{constructor(t){this.Gt=new Fh,this.xt=!0,this.ve=!0,this.me=performance.now(),this.we=this.me-1,this.ge=t}Me(){this.we=this.me-1,this.yt()}be(){if(this.yt(),2===this.ge.N().lastPriceAnimation){const t=performance.now(),e=this.we-t;if(e>0)return void(e<650&&(this.we+=2600));this.me=t,this.we=t+2600}}yt(){this.xt=!0}Se(){this.ve=!0}Vt(){return 0!==this.ge.N().lastPriceAnimation}xe(){switch(this.ge.N().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.we}}Tt(){return this.xt?(this.Rt(),this.xt=!1,this.ve=!1):this.ve&&(this.Ce(),this.ve=!1),this.Gt}Rt(){this.Gt.ht(null);const t=this.ge.Qt().Et(),e=t.Pe(),i=this.ge.zt();if(null===e||null===i)return;const s=this.ge.ye(!0);if(s.ke||!e.Te(s.Re))return;const o={x:t.qt(s.Re),y:this.ge.Ft().Nt(s.gt,i.Wt)},r=s.R,n=this.ge.N().lineWidth,a=this.De(this.Ve(),r);this.Gt.ht({ee:r,re:n,he:a.he,ae:a.ae,ft:a.ft,ne:o})}Ce(){const t=this.Gt.se();if(null!==t){const e=this.De(this.Ve(),t.ee);t.he=e.he,t.ae=e.ae,t.ft=e.ft}}Ve(){return this.xe()?performance.now()-this.me:2599}Be(t,e,i,s){const o=i+(s-i)*e;return this.ge.Qt().Xi().j(t,o)}De(t,e){const i=t%2600/2600;let s;for(const t of Rh)if(i>=t.le&&i<=t.oe){s=t;break}Fl(void 0!==s,"Last price animation internal logic error");const o=(i-s.le)/(s.oe-s.le);return{he:this.Be(e,o,s.ce,s.de),ae:this.Be(e,o,s.fe,s.pe),ft:(r=o,n=s._e,a=s.ue,n+(a-n)*r)};var r,n,a}}class Bh extends Ih{constructor(t){super(t)}te(){const t=this.Zn;t.Vt=!1;const e=this.Jn.N();if(!e.priceLineVisible||!this.Jn.Vt())return;const i=this.Jn.ye(0===e.priceLineSource);i.ke||(t.Vt=!0,t.ut=i.Ii,t.R=this.Jn.Ie(i.R),t.ct=e.priceLineWidth,t.Xt=e.priceLineStyle)}}class Hh extends gh{constructor(t){super(),this.Jt=t}qi(t,e,i){t.Vt=!1,e.Vt=!1;const s=this.Jt;if(!s.Vt())return;const o=s.N(),r=o.lastValueVisible,n=""!==s.Ee(),a=0===o.seriesLastValueMode,l=s.ye(!1);if(l.ke)return;r&&(t.ri=this.Ae(l,r,a),t.Vt=0!==t.ri.length),(n||a)&&(e.ri=this.ze(l,r,n,a),e.Vt=e.ri.length>0);const h=s.Ie(l.R),c=this.Jt.Qt().Xi().X(h);i.Z=c.Z,i.Ii=l.Ii,e.Ht=s.Qt().Ut(l.Ii/s.Ft().$t()),t.Ht=h,t.R=c.G,e.R=c.G}ze(t,e,i,s){let o="";const r=this.Jt.Ee();return i&&0!==r.length&&(o+=`${r} `),e&&s&&(o+=this.Jt.Ft().Le()?t.Oe:t.Ne),o.trim()}Ae(t,e,i){return e?i?this.Jt.Ft().Le()?t.Ne:t.Oe:t.ri:""}}function Uh(t,e,i,s){const o=Number.isFinite(e),r=Number.isFinite(i);return o&&r?t(e,i):o||r?o?e:i:s}class Wh{constructor(t,e){this.Fe=t,this.We=e}He(t){return null!==t&&this.Fe===t.Fe&&this.We===t.We}Ue(){return new Wh(this.Fe,this.We)}$e(){return this.Fe}qe(){return this.We}Ye(){return this.We-this.Fe}Ki(){return this.We===this.Fe||Number.isNaN(this.We)||Number.isNaN(this.Fe)}vn(t){return null===t?this:new Wh(Uh(Math.min,this.$e(),t.$e(),-1/0),Uh(Math.max,this.qe(),t.qe(),1/0))}je(t){if(!Wl(t))return;if(0===this.We-this.Fe)return;const e=.5*(this.We+this.Fe);let i=this.We-e,s=this.Fe-e;i*=t,s*=t,this.We=e+i,this.Fe=e+s}Ke(t){Wl(t)&&(this.We+=t,this.Fe+=t)}Xe(){return{minValue:this.Fe,maxValue:this.We}}static Ze(t){return null===t?null:new Wh(t.minValue,t.maxValue)}}class Yh{constructor(t,e){this.Ge=t,this.Je=e||null}Qe(){return this.Ge}tr(){return this.Je}Xe(){return{priceRange:null===this.Ge?null:this.Ge.Xe(),margins:this.Je||void 0}}static Ze(t){return null===t?null:new Yh(Wh.Ze(t.priceRange),t.margins)}}class qh extends Ih{constructor(t,e){super(t),this.ir=e}te(){const t=this.Zn;t.Vt=!1;const e=this.ir.N();if(!this.Jn.Vt()||!e.lineVisible)return;const i=this.ir.sr();null!==i&&(t.Vt=!0,t.ut=i,t.R=e.color,t.ct=e.lineWidth,t.Xt=e.lineStyle,t.Kn=this.ir.N().id)}}class jh extends gh{constructor(t,e){super(),this.ge=t,this.ir=e}qi(t,e,i){t.Vt=!1,e.Vt=!1;const s=this.ir.N(),o=s.axisLabelVisible,r=""!==s.title,n=this.ge;if(!o||!n.Vt())return;const a=this.ir.sr();if(null===a)return;r&&(e.ri=s.title,e.Vt=!0),e.Ht=n.Qt().Ut(a/n.Ft().$t()),t.ri=this.nr(s.price),t.Vt=!0;const l=this.ge.Qt().Xi().X(s.axisLabelColor||s.color);i.Z=l.Z;const h=s.axisLabelTextColor||l.G;t.R=h,e.R=h,i.Ii=a}nr(t){const e=this.ge.zt();return null===e?"":this.ge.Ft().Zi(t,e.Wt)}}class Gh{constructor(t,e){this.ge=t,this.Ps=e,this.er=new qh(t,this),this.Fn=new jh(t,this),this.rr=new Dh(this.Fn,t,t.Qt())}hr(t){Ul(this.Ps,t),this.yt(),this.ge.Qt().ar()}N(){return this.Ps}lr(){return this.er}_r(){return this.rr}ur(){return this.Fn}yt(){this.er.yt(),this.Fn.yt()}sr(){const t=this.ge,e=t.Ft();if(t.Qt().Et().Ki()||e.Ki())return null;const i=t.zt();return null===i?null:e.Nt(this.Ps.price,i.Wt)}}class Kh extends _h{constructor(t){super(),this.ts=t}Qt(){return this.ts}}const Qh={Bar:(t,e,i,s)=>{const o=e.upColor,r=e.downColor,n=Nl(t(i,s)),a=Bl(n.Wt[0])<=Bl(n.Wt[3]);return{cr:n.R??(a?o:r)}},Candlestick:(t,e,i,s)=>{const o=e.upColor,r=e.downColor,n=e.borderUpColor,a=e.borderDownColor,l=e.wickUpColor,h=e.wickDownColor,c=Nl(t(i,s)),d=Bl(c.Wt[0])<=Bl(c.Wt[3]);return{cr:c.R??(d?o:r),dr:c.Ht??(d?n:a),pr:c.vr??(d?l:h)}},Custom:(t,e,i,s)=>({cr:Nl(t(i,s)).R??e.color}),Area:(t,e,i,s)=>{const o=Nl(t(i,s));return{cr:o.vt??e.lineColor,vt:o.vt??e.lineColor,mr:o.mr??e.topColor,wr:o.wr??e.bottomColor}},Baseline:(t,e,i,s)=>{const o=Nl(t(i,s));return{cr:o.Wt[3]>=e.baseValue.price?e.topLineColor:e.bottomLineColor,gr:o.gr??e.topLineColor,Mr:o.Mr??e.bottomLineColor,br:o.br??e.topFillColor1,Sr:o.Sr??e.topFillColor2,Cr:o.Cr??e.bottomFillColor1,Pr:o.Pr??e.bottomFillColor2}},Line:(t,e,i,s)=>{const o=Nl(t(i,s));return{cr:o.R??e.color,vt:o.R??e.color}},Histogram:(t,e,i,s)=>({cr:Nl(t(i,s)).R??e.color})};class Jh{constructor(t){this.yr=(t,e)=>void 0!==e?e.Wt:this.ge.Xs().kr(t),this.ge=t,this.Tr=Qh[t.Rr()]}Dr(t,e){return this.Tr(this.yr,this.ge.N(),t,e)}}function Xh(t,e,i,s,o=0,r=e.length){let n=r-o;for(;0<n;){const r=n>>1,a=o+r;s(e[a],i)===t?(o=a+1,n-=r+1):n=r}return o}const Zh=Xh.bind(null,!0),tc=Xh.bind(null,!1);var ec;!function(t){t[t.NearestLeft=-1]="NearestLeft",t[t.None=0]="None",t[t.NearestRight=1]="NearestRight"}(ec||(ec={}));const ic=30;class sc{constructor(){this.Vr=[],this.Br=new Map,this.Ir=new Map,this.Er=[]}Ar(){return this.zr()>0?this.Vr[this.Vr.length-1]:null}Lr(){return this.zr()>0?this.Or(0):null}Ks(){return this.zr()>0?this.Or(this.Vr.length-1):null}zr(){return this.Vr.length}Ki(){return 0===this.zr()}Te(t){return null!==this.Nr(t,0)}kr(t){return this.Fr(t)}Fr(t,e=0){const i=this.Nr(t,e);return null===i?null:{...this.Wr(i),Re:this.Or(i)}}Hr(){return this.Vr}Ur(t,e,i){if(this.Ki())return null;let s=null;for(const o of i)s=oc(s,this.$r(t,e,o));return s}ht(t){this.Ir.clear(),this.Br.clear(),this.Vr=t,this.Er=t.map(t=>t.Re)}qr(){return this.Er}Or(t){return this.Vr[t].Re}Wr(t){return this.Vr[t]}Nr(t,e){const i=this.Yr(t);if(null===i&&0!==e)switch(e){case-1:return this.jr(t);case 1:return this.Kr(t);default:throw new TypeError("Unknown search mode")}return i}jr(t){let e=this.Xr(t);return e>0&&(e-=1),e!==this.Vr.length&&this.Or(e)<t?e:null}Kr(t){const e=this.Zr(t);return e!==this.Vr.length&&t<this.Or(e)?e:null}Yr(t){const e=this.Xr(t);return e===this.Vr.length||t<this.Vr[e].Re?null:e}Xr(t){return Zh(this.Vr,t,(t,e)=>t.Re<e)}Zr(t){return tc(this.Vr,t,(t,e)=>t.Re>e)}Gr(t,e,i){let s=null;for(let o=t;o<e;o++){const t=this.Vr[o].Wt[i];Number.isNaN(t)||(null===s?s={Jr:t,Qr:t}:(t<s.Jr&&(s.Jr=t),t>s.Qr&&(s.Qr=t)))}return s}$r(t,e,i){if(this.Ki())return null;let s=null;const o=Nl(this.Lr()),r=Nl(this.Ks()),n=Math.max(t,o),a=Math.min(e,r),l=Math.ceil(n/ic)*ic,h=Math.max(l,Math.floor(a/ic)*ic);{const t=this.Xr(n),o=this.Zr(Math.min(a,l,e));s=oc(s,this.Gr(t,o,i))}let c=this.Br.get(i);void 0===c&&(c=new Map,this.Br.set(i,c));for(let t=Math.max(l+1,n);t<h;t+=ic){const e=Math.floor(t/ic);let o=c.get(e);if(void 0===o){const t=this.Xr(e*ic),s=this.Zr((e+1)*ic-1);o=this.Gr(t,s,i),c.set(e,o)}s=oc(s,o)}{const t=this.Xr(h),e=this.Zr(a);s=oc(s,this.Gr(t,e,i))}return s}}function oc(t,e){return null===t?e:null===e?t:{Jr:Math.min(t.Jr,e.Jr),Qr:Math.max(t.Qr,e.Qr)}}const rc={setLineStyle:Il};class nc{constructor(t){this.th=t}nt(t,e,i){this.th.draw(t,rc)}ih(t,e,i){this.th.drawBackground?.(t,rc)}}class ac{constructor(t){this.Dn=null,this.sh=t}Tt(){const t=this.sh.renderer();if(null===t)return null;if(this.Dn?.nh===t)return this.Dn.eh;const e=new nc(t);return this.Dn={nh:t,eh:e},e}rh(){return this.sh.zOrder?.()??"normal"}}class lc{constructor(t){this.hh=null,this.ah=t}oh(){return this.ah}Ns(){this.ah.updateAllViews?.()}Fs(){const t=this.ah.paneViews?.()??[];if(this.hh?.nh===t)return this.hh.eh;const e=t.map(t=>new ac(t));return this.hh={nh:t,eh:e},e}jn(t,e){return this.ah.hitTest?.(t,e)??null}}let hc=class extends lc{us(){return[]}};class cc{constructor(t){this.th=t}nt(t,e,i){this.th.draw(t,rc)}ih(t,e,i){this.th.drawBackground?.(t,rc)}}class dc{constructor(t){this.Dn=null,this.sh=t}Tt(){const t=this.sh.renderer();if(null===t)return null;if(this.Dn?.nh===t)return this.Dn.eh;const e=new cc(t);return this.Dn={nh:t,eh:e},e}rh(){return this.sh.zOrder?.()??"normal"}}function uc(t){return{ri:t.text(),Ii:t.coordinate(),Bi:t.fixedCoordinate?.(),R:t.textColor(),Z:t.backColor(),Vt:t.visible?.()??!0,pi:t.tickVisible?.()??!0}}class pc{constructor(t,e){this.Gt=new yh,this._h=t,this.uh=e}Tt(){return this.Gt.ht({Qi:this.uh.Qi(),...uc(this._h)}),this.Gt}}class fc extends gh{constructor(t,e){super(),this._h=t,this.Yi=e}qi(t,e,i){const s=uc(this._h);i.Z=s.Z,t.R=s.R;const o=2/12*this.Yi.P();i.Ti=o,i.Ri=o,i.Ii=s.Ii,i.Bi=s.Bi,t.ri=s.ri,t.Vt=s.Vt,t.pi=s.pi}}class mc extends lc{constructor(t,e){super(t),this.dh=null,this.fh=null,this.ph=null,this.mh=null,this.ge=e}cs(){const t=this.ah.timeAxisViews?.()??[];if(this.dh?.nh===t)return this.dh.eh;const e=this.ge.Qt().Et(),i=t.map(t=>new pc(t,e));return this.dh={nh:t,eh:i},i}Ws(){const t=this.ah.priceAxisViews?.()??[];if(this.fh?.nh===t)return this.fh.eh;const e=this.ge.Ft(),i=t.map(t=>new fc(t,e));return this.fh={nh:t,eh:i},i}wh(){const t=this.ah.priceAxisPaneViews?.()??[];if(this.ph?.nh===t)return this.ph.eh;const e=t.map(t=>new dc(t));return this.ph={nh:t,eh:e},e}gh(){const t=this.ah.timeAxisPaneViews?.()??[];if(this.mh?.nh===t)return this.mh.eh;const e=t.map(t=>new dc(t));return this.mh={nh:t,eh:e},e}Mh(t,e){return this.ah.autoscaleInfo?.(t,e)??null}}function gc(t,e,i,s){t.forEach(t=>{e(t).forEach(t=>{t.rh()===i&&s.push(t)})})}function bc(t){return t.Fs()}function vc(t){return t.wh()}function yc(t){return t.gh()}const wc=["Area","Line","Baseline"];class _c extends Kh{constructor(t,e,i,s,o){super(t),this.Yt=new sc,this.er=new Bh(this),this.bh=[],this.Sh=new Vh(this),this.xh=null,this.Ch=null,this.Ph=null,this.yh=[],this.Ps=i,this.kh=e;const r=new Hh(this);this.vs=[r],this.rr=new Dh(r,this,t),wc.includes(this.kh)&&(this.xh=new Nh(this)),this.Th(),this.sh=s(this,this.Qt(),o)}m(){null!==this.Ph&&clearTimeout(this.Ph)}Ie(t){return this.Ps.priceLineColor||t}ye(t){const e={ke:!0},i=this.Ft();if(this.Qt().Et().Ki()||i.Ki()||this.Yt.Ki())return e;const s=this.Qt().Et().Pe(),o=this.zt();if(null===s||null===o)return e;let r,n;if(t){const t=this.Yt.Ar();if(null===t)return e;r=t,n=t.Re}else{const t=this.Yt.Fr(s.bi(),-1);if(null===t)return e;if(r=this.Yt.kr(t.Re),null===r)return e;n=t.Re}const a=r.Wt[3],l=this.Rh().Dr(n,{Wt:r}),h=i.Nt(a,o.Wt);return{ke:!1,gt:a,ri:i.Zi(a,o.Wt),Oe:i.Dh(a),Ne:i.Vh(a,o.Wt),R:l.cr,Ii:h,Re:n}}Rh(){return null!==this.Ch||(this.Ch=new Jh(this)),this.Ch}N(){return this.Ps}hr(t){const e=t.priceScaleId;void 0!==e&&e!==this.Ps.priceScaleId&&this.Qt().Bh(this,e),Ul(this.Ps,t),void 0!==t.priceFormat&&(this.Th(),this.Qt().Ih()),this.Qt().Eh(this),this.Qt().Ah(),this.sh.yt("options")}ht(t,e){this.Yt.ht(t),this.sh.yt("data"),null!==this.xh&&(e&&e.zh?this.xh.be():0===t.length&&this.xh.Me());const i=this.Qt().Hn(this);this.Qt().Lh(i),this.Qt().Eh(this),this.Qt().Ah(),this.Qt().ar()}Oh(t){const e=new Gh(this,t);return this.bh.push(e),this.Qt().Eh(this),e}Nh(t){const e=this.bh.indexOf(t);-1!==e&&this.bh.splice(e,1),this.Qt().Eh(this)}Fh(){return this.bh}Rr(){return this.kh}zt(){const t=this.Wh();return null===t?null:{Wt:t.Wt[3],Hh:t.wt}}Wh(){const t=this.Qt().Et().Pe();if(null===t)return null;const e=t.Uh();return this.Yt.Fr(e,1)}Xs(){return this.Yt}$h(t){const e=this.Yt.kr(t);return null===e?null:"Bar"===this.kh||"Candlestick"===this.kh||"Custom"===this.kh?{qh:e.Wt[0],Yh:e.Wt[1],jh:e.Wt[2],Kh:e.Wt[3]}:e.Wt[3]}Xh(t){const e=[];gc(this.yh,bc,"top",e);const i=this.xh;return null!==i&&i.Vt()?(null===this.Ph&&i.xe()&&(this.Ph=setTimeout(()=>{this.Ph=null,this.Qt().Zh()},0)),i.Se(),e.unshift(i),e):e}Fs(){const t=[];this.Gh()||t.push(this.Sh),t.push(this.sh,this.er);const e=this.bh.map(t=>t.lr());return t.push(...e),gc(this.yh,bc,"normal",t),t}Jh(){return this.Qh(bc,"bottom")}ta(t){return this.Qh(vc,t)}ia(t){return this.Qh(yc,t)}sa(t,e){return this.yh.map(i=>i.jn(t,e)).filter(t=>null!==t)}us(){return[this.rr,...this.bh.map(t=>t._r())]}Ws(t,e){if(e!==this.es&&!this.Gh())return[];const i=[...this.vs];for(const t of this.bh)i.push(t.ur());return this.yh.forEach(t=>{i.push(...t.Ws())}),i}cs(){const t=[];return this.yh.forEach(e=>{t.push(...e.cs())}),t}Mh(t,e){if(void 0!==this.Ps.autoscaleInfoProvider){const i=this.Ps.autoscaleInfoProvider(()=>{const i=this.na(t,e);return null===i?null:i.Xe()});return Yh.Ze(i)}return this.na(t,e)}nh(){const t=this.Ps.priceFormat;return t.base??1/t.minMove}ea(){return this.ra}Ns(){this.sh.yt();for(const t of this.vs)t.yt();for(const t of this.bh)t.yt();this.er.yt(),this.Sh.yt(),this.xh?.yt(),this.yh.forEach(t=>t.Ns())}Ft(){return Nl(super.Ft())}At(t){if("Line"!==this.kh&&"Area"!==this.kh&&"Baseline"!==this.kh||!this.Ps.crosshairMarkerVisible)return null;const e=this.Yt.kr(t);return null===e?null:{gt:e.Wt[3],ft:this.ha(),Ht:this.aa(),Ot:this.la(),Lt:this.oa(t)}}Ee(){return this.Ps.title}Vt(){return this.Ps.visible}_a(t){this.yh.push(new mc(t,this))}ua(t){this.yh=this.yh.filter(e=>e.oh()!==t)}ca(){if("Custom"===this.kh)return t=>this.sh.da(t)}fa(){if("Custom"===this.kh)return t=>this.sh.pa(t)}va(){return this.Yt.qr()}Gh(){return!Ch(this.Ft().ma())}na(t,e){if(!Yl(t)||!Yl(e)||this.Yt.Ki())return null;const i="Line"===this.kh||"Area"===this.kh||"Baseline"===this.kh||"Histogram"===this.kh?[3]:[2,1],s=this.Yt.Ur(t,e,i);let o=null!==s?new Wh(s.Jr,s.Qr):null,r=null;if("Histogram"===this.Rr()){const t=this.Ps.base,e=new Wh(t,t);o=null!==o?o.vn(e):e}return this.yh.forEach(i=>{const s=i.Mh(t,e);if(s?.priceRange){const t=new Wh(s.priceRange.minValue,s.priceRange.maxValue);o=null!==o?o.vn(t):t}s?.margins&&(r=s.margins)}),new Yh(o,r)}ha(){switch(this.kh){case"Line":case"Area":case"Baseline":return this.Ps.crosshairMarkerRadius}return 0}aa(){switch(this.kh){case"Line":case"Area":case"Baseline":{const t=this.Ps.crosshairMarkerBorderColor;if(0!==t.length)return t}}return null}la(){switch(this.kh){case"Line":case"Area":case"Baseline":return this.Ps.crosshairMarkerBorderWidth}return 0}oa(t){switch(this.kh){case"Line":case"Area":case"Baseline":{const t=this.Ps.crosshairMarkerBackgroundColor;if(0!==t.length)return t}}return this.Rh().Dr(t).cr}Th(){switch(this.Ps.priceFormat.type){case"custom":{const t=this.Ps.priceFormat.formatter;this.ra={format:t,formatTickmarks:this.Ps.priceFormat.tickmarksFormatter??(e=>e.map(t))};break}case"volume":this.ra=new Ph(this.Ps.priceFormat.precision);break;case"percent":this.ra=new Mh(this.Ps.priceFormat.precision);break;default:{const t=Math.pow(10,this.Ps.priceFormat.precision);this.ra=new Eh(t,this.Ps.priceFormat.minMove*t)}}null!==this.es&&this.es.wa()}Qh(t,e){const i=[];return gc(this.yh,t,e,i),i}}const xc=[3],kc=[0,1,2,3];class Cc{constructor(t){this.Ps=t}ga(t,e,i){let s=t;if(0===this.Ps.mode)return s;const o=i.ks(),r=o.zt();if(null===r)return s;const n=o.Nt(t,r),a=i.Ma().filter(t=>t instanceof _c).reduce((t,s)=>{if(i.Un(s)||!s.Vt())return t;const o=s.Ft(),r=s.Xs();if(o.Ki()||!r.Te(e))return t;const n=r.kr(e);if(null===n)return t;const a=Bl(s.zt()),l=3===this.Ps.mode?kc:xc;return t.concat(l.map(t=>o.Nt(n.Wt[t],a.Wt)))},[]);if(0===a.length)return s;a.sort((t,e)=>Math.abs(t-n)-Math.abs(e-n));const l=a[0];return s=o.Ts(l,r),s}}function Sc(t,e,i){return Math.min(Math.max(t,e),i)}function zc(t,e,i){return e-t<=i}class $c extends oh{constructor(){super(...arguments),this.Yt=null}ht(t){this.Yt=t}et({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:s}){if(null===this.Yt)return;const o=Math.max(1,Math.floor(i));t.lineWidth=o,function(t,e){t.save(),t.lineWidth%2&&t.translate(.5,.5),e(),t.restore()}(t,()=>{const r=Nl(this.Yt);if(r.ba){t.strokeStyle=r.Sa,Il(t,r.xa),t.beginPath();for(const s of r.Ca){const r=Math.round(s.Pa*i);t.moveTo(r,-o),t.lineTo(r,e.height+o)}t.stroke()}if(r.ya){t.strokeStyle=r.ka,Il(t,r.Ta),t.beginPath();for(const i of r.Ra){const r=Math.round(i.Pa*s);t.moveTo(-o,r),t.lineTo(e.width+o,r)}t.stroke()}})}}class Ec{constructor(t){this.Gt=new $c,this.xt=!0,this.Pt=t}yt(){this.xt=!0}Tt(){if(this.xt){const t=this.Pt.Qt().N().grid,e={ya:t.horzLines.visible,ba:t.vertLines.visible,ka:t.horzLines.color,Sa:t.vertLines.color,Ta:t.horzLines.style,xa:t.vertLines.style,Ra:this.Pt.ks().Da(),Ca:(this.Pt.Qt().Et().Da()||[]).map(t=>({Pa:t.coord}))};this.Gt.ht(e),this.xt=!1}return this.Gt}}class Mc{constructor(t){this.sh=new Ec(t)}lr(){return this.sh}}const Pc={Va:4,Ba:1e-4};function Tc(t,e){const i=100*(t-e)/e;return e<0?-i:i}function Ac(t,e){const i=Tc(t.$e(),e),s=Tc(t.qe(),e);return new Wh(i,s)}function Lc(t,e){const i=100*(t-e)/e+100;return e<0?-i:i}function Dc(t,e){const i=Lc(t.$e(),e),s=Lc(t.qe(),e);return new Wh(i,s)}function Oc(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const s=Math.log10(i+e.Ba)+e.Va;return t<0?-s:s}function Ic(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const s=Math.pow(10,i-e.Va)-e.Ba;return t<0?-s:s}function Vc(t,e){if(null===t)return null;const i=Oc(t.$e(),e),s=Oc(t.qe(),e);return new Wh(i,s)}function Fc(t,e){if(null===t)return null;const i=Ic(t.$e(),e),s=Ic(t.qe(),e);return new Wh(i,s)}function Rc(t){if(null===t)return Pc;const e=Math.abs(t.qe()-t.$e());if(e>=1||e<1e-15)return Pc;const i=Math.ceil(Math.abs(Math.log10(e))),s=Pc.Va+i;return{Va:s,Ba:1/Math.pow(10,s)}}class Nc{constructor(t,e){if(this.Ia=t,this.Ea=e,function(t){if(t<0)return!1;if(t>1e18)return!0;for(let e=t;e>1;e/=10)if(e%10!=0)return!1;return!0}(this.Ia))this.Aa=[2,2.5,2];else{this.Aa=[];for(let t=this.Ia;1!==t;){if(t%2==0)this.Aa.push(2),t/=2;else{if(t%5!=0)throw new Error("unexpected base");this.Aa.push(2,2.5),t/=5}if(this.Aa.length>100)throw new Error("something wrong with base")}}}za(t,e,i){const s=0===this.Ia?0:1/this.Ia;let o=Math.pow(10,Math.max(0,Math.ceil(Math.log10(t-e)))),r=0,n=this.Ea[0];for(;;){const t=zc(o,s,1e-14)&&o>s+1e-14,e=zc(o,i*n,1e-14),a=zc(o,1,1e-14);if(!(t&&e&&a))break;o/=n,n=this.Ea[++r%this.Ea.length]}if(o<=s+1e-14&&(o=s),o=Math.max(1,o),this.Aa.length>0&&(a=o,Math.abs(a-1)<1e-14))for(r=0,n=this.Aa[0];zc(o,i*n,1e-14)&&o>s+1e-14;)o/=n,n=this.Aa[++r%this.Aa.length];var a;return o}}class Bc{constructor(t,e,i,s){this.La=[],this.Yi=t,this.Ia=e,this.Oa=i,this.Na=s}za(t,e){if(t<e)throw new Error("high < low");const i=this.Yi.$t(),s=(t-e)*this.Fa()/i,o=new Nc(this.Ia,[2,2.5,2]),r=new Nc(this.Ia,[2,2,2.5]),n=new Nc(this.Ia,[2.5,2,2]),a=[];return a.push(o.za(t,e,s),r.za(t,e,s),n.za(t,e,s)),function(t){if(t.length<1)throw Error("array is empty");let e=t[0];for(let i=1;i<t.length;++i)t[i]<e&&(e=t[i]);return e}(a)}Wa(){const t=this.Yi,e=t.zt();if(null===e)return void(this.La=[]);const i=t.$t(),s=this.Oa(i-1,e),o=this.Oa(0,e),r=this.Yi.N().entireTextOnly?this.Ha()/2:0,n=r,a=i-1-r,l=Math.max(s,o),h=Math.min(s,o);if(l===h)return void(this.La=[]);const c=this.za(l,h);if(this.Ua(e,c,l,h,n,a),t.$a()&&this.qa(c,h,l)){const t=this.Yi.Ya();this.ja(e,c,n,a,t,2*t)}const d=this.La.map(t=>t.Ka),u=this.Yi.Xa(d);for(let t=0;t<this.La.length;t++)this.La[t].Za=u[t]}Da(){return this.La}Ha(){return this.Yi.P()}Fa(){return Math.ceil(2.5*this.Ha())}Ua(t,e,i,s,o,r){const n=this.La,a=this.Yi;let l=i%e;l+=l<0?e:0;const h=i>=s?1:-1;let c=null,d=0;for(let u=i-l;u>s;u-=e){const i=this.Na(u,t,!0);null!==c&&Math.abs(i-c)<this.Fa()||i<o||i>r||(d<n.length?(n[d].Pa=i,n[d].Za=a.Ga(u),n[d].Ka=u):n.push({Pa:i,Za:a.Ga(u),Ka:u}),d++,c=i,a.Ja()&&(e=this.za(u*h,s)))}n.length=d}ja(t,e,i,s,o,r){const n=this.La,a=this.Qa(t,i,o,r),l=this.Qa(t,s,-r,-o),h=this.Na(0,t,!0)-this.Na(e,t,!0);n.length>0&&n[0].Pa-a.Pa<h/2&&n.shift(),n.length>0&&l.Pa-n[n.length-1].Pa<h/2&&n.pop(),n.unshift(a),n.push(l)}Qa(t,e,i,s){const o=(i+s)/2,r=this.Oa(e+i,t),n=this.Oa(e+s,t),a=Math.min(r,n),l=Math.max(r,n),h=Math.max(.1,this.za(l,a)),c=this.Oa(e+o,t),d=c-c%h,u=this.Na(d,t,!0);return{Za:this.Yi.Ga(d),Pa:u,Ka:d}}qa(t,e,i){let s=Bl(this.Yi.Qe());return this.Yi.Ja()&&(s=Fc(s,this.Yi.tl())),s.$e()-e<t&&i-s.qe()<t}}function Hc(t){return t.slice().sort((t,e)=>Nl(t.hs())-Nl(e.hs()))}var Uc;!function(t){t[t.Normal=0]="Normal",t[t.Logarithmic=1]="Logarithmic",t[t.Percentage=2]="Percentage",t[t.IndexedTo100=3]="IndexedTo100"}(Uc||(Uc={}));const Wc=new Mh,Yc=new Eh(100,1);class qc{constructor(t,e,i,s,o){this.il=0,this.sl=null,this.Ge=null,this.nl=null,this.el={rl:!1,hl:null},this.al=!1,this.ll=0,this.ol=0,this._l=new Hl,this.ul=new Hl,this.cl=[],this.dl=null,this.fl=null,this.pl=null,this.vl=null,this.ml=null,this.ra=Yc,this.wl=Rc(null),this.gl=t,this.Ps=e,this.Ml=i,this.bl=s,this.Sl=o,this.xl=new Bc(this,100,this.Cl.bind(this),this.Pl.bind(this))}ma(){return this.gl}N(){return this.Ps}hr(t){if(Ul(this.Ps,t),this.wa(),void 0!==t.mode&&this.yl({ie:t.mode}),void 0!==t.scaleMargins){const e=Rl(t.scaleMargins.top),i=Rl(t.scaleMargins.bottom);if(e<0||e>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${e}`);if(i<0||i>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${i}`);if(e+i>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${e+i}`);this.kl(),this.pl=null}}Tl(){return this.Ps.autoScale}Rl(){return this.al}Ja(){return 1===this.Ps.mode}Le(){return 2===this.Ps.mode}Dl(){return 3===this.Ps.mode}tl(){return this.wl}ie(){return{sn:this.Ps.autoScale,Vl:this.Ps.invertScale,ie:this.Ps.mode}}yl(t){const e=this.ie();let i=null;void 0!==t.sn&&(this.Ps.autoScale=t.sn),void 0!==t.ie&&(this.Ps.mode=t.ie,2!==t.ie&&3!==t.ie||(this.Ps.autoScale=!0),this.el.rl=!1),1===e.ie&&t.ie!==e.ie&&(function(t,e){if(null===t)return!1;const i=Ic(t.$e(),e),s=Ic(t.qe(),e);return isFinite(i)&&isFinite(s)}(this.Ge,this.wl)?(i=Fc(this.Ge,this.wl),null!==i&&this.Bl(i)):this.Ps.autoScale=!0),1===t.ie&&t.ie!==e.ie&&(i=Vc(this.Ge,this.wl),null!==i&&this.Bl(i));const s=e.ie!==this.Ps.mode;s&&(2===e.ie||this.Le())&&this.wa(),s&&(3===e.ie||this.Dl())&&this.wa(),void 0!==t.Vl&&e.Vl!==t.Vl&&(this.Ps.invertScale=t.Vl,this.Il()),this.ul.p(e,this.ie())}El(){return this.ul}P(){return this.Ml.fontSize}$t(){return this.il}Al(t){this.il!==t&&(this.il=t,this.kl(),this.pl=null)}zl(){if(this.sl)return this.sl;const t=this.$t()-this.Ll()-this.Ol();return this.sl=t,t}Qe(){return this.Nl(),this.Ge}Bl(t,e){const i=this.Ge;(e||null===i&&null!==t||null!==i&&!i.He(t))&&(this.pl=null,this.Ge=t)}Fl(t){this.Bl(t),this.Wl(null!==t)}Ki(){return this.Nl(),0===this.il||!this.Ge||this.Ge.Ki()}Hl(t){return this.Vl()?t:this.$t()-1-t}Nt(t,e){return this.Le()?t=Tc(t,e):this.Dl()&&(t=Lc(t,e)),this.Pl(t,e)}Ul(t,e,i){this.Nl();const s=this.Ol(),o=Nl(this.Qe()),r=o.$e(),n=o.qe(),a=this.zl()-1,l=this.Vl(),h=a/(n-r),c=void 0===i?0:i.from,d=void 0===i?t.length:i.to,u=this.$l();for(let i=c;i<d;i++){const o=t[i],n=o.gt;if(isNaN(n))continue;let a=n;null!==u&&(a=u(o.gt,e));const c=s+h*(a-r),d=l?c:this.il-1-c;o.ut=d}}ql(t,e,i){this.Nl();const s=this.Ol(),o=Nl(this.Qe()),r=o.$e(),n=o.qe(),a=this.zl()-1,l=this.Vl(),h=a/(n-r),c=void 0===i?0:i.from,d=void 0===i?t.length:i.to,u=this.$l();for(let i=c;i<d;i++){const o=t[i];let n=o.qh,a=o.Yh,c=o.jh,d=o.Kh;null!==u&&(n=u(o.qh,e),a=u(o.Yh,e),c=u(o.jh,e),d=u(o.Kh,e));let p=s+h*(n-r),f=l?p:this.il-1-p;o.Yl=f,p=s+h*(a-r),f=l?p:this.il-1-p,o.jl=f,p=s+h*(c-r),f=l?p:this.il-1-p,o.Kl=f,p=s+h*(d-r),f=l?p:this.il-1-p,o.Xl=f}}Ts(t,e){const i=this.Cl(t,e);return this.Zl(i,e)}Zl(t,e){let i=t;return this.Le()?i=function(t,e){return e<0&&(t=-t),t/100*e+e}(i,e):this.Dl()&&(i=function(t,e){return t-=100,e<0&&(t=-t),t/100*e+e}(i,e)),i}Ma(){return this.cl}Dt(){return this.fl||(this.fl=Hc(this.cl)),this.fl}Gl(t){-1===this.cl.indexOf(t)&&(this.cl.push(t),this.wa(),this.Jl())}Ql(t){const e=this.cl.indexOf(t);if(-1===e)throw new Error("source is not attached to scale");this.cl.splice(e,1),0===this.cl.length&&(this.yl({sn:!0}),this.Bl(null)),this.wa(),this.Jl()}zt(){let t=null;for(const e of this.cl){const i=e.zt();null!==i&&(null===t||i.Hh<t.Hh)&&(t=i)}return null===t?null:t.Wt}Vl(){return this.Ps.invertScale}Da(){const t=null===this.zt();if(null!==this.pl&&(t||this.pl.io===t))return this.pl.Da;this.xl.Wa();const e=this.xl.Da();return this.pl={Da:e,io:t},this._l.p(),e}so(){return this._l}no(t){this.Le()||this.Dl()||null===this.vl&&null===this.nl&&(this.Ki()||(this.vl=this.il-t,this.nl=Nl(this.Qe()).Ue()))}eo(t){if(this.Le()||this.Dl())return;if(null===this.vl)return;this.yl({sn:!1}),(t=this.il-t)<0&&(t=0);let e=(this.vl+.2*(this.il-1))/(t+.2*(this.il-1));const i=Nl(this.nl).Ue();e=Math.max(e,.1),i.je(e),this.Bl(i)}ro(){this.Le()||this.Dl()||(this.vl=null,this.nl=null)}ho(t){this.Tl()||null===this.ml&&null===this.nl&&(this.Ki()||(this.ml=t,this.nl=Nl(this.Qe()).Ue()))}ao(t){if(this.Tl())return;if(null===this.ml)return;const e=Nl(this.Qe()).Ye()/(this.zl()-1);let i=t-this.ml;this.Vl()&&(i*=-1);const s=i*e,o=Nl(this.nl).Ue();o.Ke(s),this.Bl(o,!0),this.pl=null}lo(){this.Tl()||null!==this.ml&&(this.ml=null,this.nl=null)}ea(){return this.ra||this.wa(),this.ra}Zi(t,e){switch(this.Ps.mode){case 2:return this.oo(Tc(t,e));case 3:return this.ea().format(Lc(t,e));default:return this.nr(t)}}Ga(t){switch(this.Ps.mode){case 2:return this.oo(t);case 3:return this.ea().format(t);default:return this.nr(t)}}Xa(t){switch(this.Ps.mode){case 2:return this._o(t);case 3:return this.ea().formatTickmarks(t);default:return this.uo(t)}}Dh(t){return this.nr(t,Nl(this.dl).ea())}Vh(t,e){return t=Tc(t,e),this.oo(t,Wc)}co(){return this.cl}do(t){this.el={hl:t,rl:!1}}Ns(){this.cl.forEach(t=>t.Ns())}$a(){return this.Ps.ensureEdgeTickMarksVisible&&this.Tl()}Ya(){return this.P()/2}wa(){this.pl=null;let t=1/0;this.dl=null;for(const e of this.cl)e.hs()<t&&(t=e.hs(),this.dl=e);let e=100;null!==this.dl&&(e=Math.round(this.dl.nh())),this.ra=Yc,this.Le()?(this.ra=Wc,e=100):this.Dl()?(this.ra=new Eh(100,1),e=100):null!==this.dl&&(this.ra=this.dl.ea()),this.xl=new Bc(this,e,this.Cl.bind(this),this.Pl.bind(this)),this.xl.Wa()}Jl(){this.fl=null}fo(){return null===this.dl||this.Le()||this.Dl()?1:1/this.dl.nh()}Xi(){return this.Sl}Wl(t){this.al=t}Ll(){return this.Vl()?this.Ps.scaleMargins.bottom*this.$t()+this.ol:this.Ps.scaleMargins.top*this.$t()+this.ll}Ol(){return this.Vl()?this.Ps.scaleMargins.top*this.$t()+this.ll:this.Ps.scaleMargins.bottom*this.$t()+this.ol}Nl(){this.el.rl||(this.el.rl=!0,this.po())}kl(){this.sl=null}Pl(t,e){if(this.Nl(),this.Ki())return 0;t=this.Ja()&&t?Oc(t,this.wl):t;const i=Nl(this.Qe()),s=this.Ol()+(this.zl()-1)*(t-i.$e())/i.Ye();return this.Hl(s)}Cl(t,e){if(this.Nl(),this.Ki())return 0;const i=this.Hl(t),s=Nl(this.Qe()),o=s.$e()+s.Ye()*((i-this.Ol())/(this.zl()-1));return this.Ja()?Ic(o,this.wl):o}Il(){this.pl=null,this.xl.Wa()}po(){if(this.Rl()&&!this.Tl())return;const t=this.el.hl;if(null===t)return;let e=null;const i=this.co();let s=0,o=0;for(const r of i){if(!r.Vt())continue;const i=r.zt();if(null===i)continue;const n=r.Mh(t.Uh(),t.bi());let a=n&&n.Qe();if(null!==a){switch(this.Ps.mode){case 1:a=Vc(a,this.wl);break;case 2:a=Ac(a,i.Wt);break;case 3:a=Dc(a,i.Wt)}if(e=null===e?a:e.vn(Nl(a)),null!==n){const t=n.tr();null!==t&&(s=Math.max(s,t.above),o=Math.max(o,t.below))}}}if(this.$a()&&(s=Math.max(s,this.Ya()),o=Math.max(o,this.Ya())),s===this.ll&&o===this.ol||(this.ll=s,this.ol=o,this.pl=null,this.kl()),null!==e){if(e.$e()===e.qe()){const t=5*this.fo();this.Ja()&&(e=Fc(e,this.wl)),e=new Wh(e.$e()-t,e.qe()+t),this.Ja()&&(e=Vc(e,this.wl))}if(this.Ja()){const t=Fc(e,this.wl),i=Rc(t);if(r=i,n=this.wl,r.Va!==n.Va||r.Ba!==n.Ba){const s=null!==this.nl?Fc(this.nl,this.wl):null;this.wl=i,e=Vc(t,i),null!==s&&(this.nl=Vc(s,i))}}this.Bl(e)}else null===this.Ge&&(this.Bl(new Wh(-.5,.5)),this.wl=Rc(null));var r,n}$l(){return this.Le()?Tc:this.Dl()?Lc:this.Ja()?t=>Oc(t,this.wl):null}vo(t,e,i){return void 0===e?(void 0===i&&(i=this.ea()),i.format(t)):e(t)}mo(t,e,i){return void 0===e?(void 0===i&&(i=this.ea()),i.formatTickmarks(t)):e(t)}nr(t,e){return this.vo(t,this.bl.priceFormatter,e)}uo(t,e){const i=this.bl.priceFormatter;return this.mo(t,this.bl.tickmarksPriceFormatter??(i?t=>t.map(i):void 0),e)}oo(t,e){return this.vo(t,this.bl.percentageFormatter,e)}_o(t,e){const i=this.bl.percentageFormatter;return this.mo(t,this.bl.tickmarksPercentageFormatter??(i?t=>t.map(i):void 0),e)}}function jc(t){return t instanceof _c}class Gc{constructor(t,e){this.cl=[],this.wo=new Map,this.il=0,this.Mo=0,this.bo=1,this.fl=null,this.So=!1,this.xo=new Hl,this.yh=[],this.uh=t,this.ts=e,this.Co=new Mc(this);const i=e.N();this.Po=this.yo("left",i.leftPriceScale),this.ko=this.yo("right",i.rightPriceScale),this.Po.El().i(this.To.bind(this,this.Po),this),this.ko.El().i(this.To.bind(this,this.ko),this),this.Ro(i)}Ro(t){if(t.leftPriceScale&&this.Po.hr(t.leftPriceScale),t.rightPriceScale&&this.ko.hr(t.rightPriceScale),t.localization&&(this.Po.wa(),this.ko.wa()),t.overlayPriceScales){const e=Array.from(this.wo.values());for(const i of e){const e=Nl(i[0].Ft());e.hr(t.overlayPriceScales),t.localization&&e.wa()}}}Do(t){switch(t){case"left":return this.Po;case"right":return this.ko}return this.wo.has(t)?Rl(this.wo.get(t))[0].Ft():null}m(){this.Qt().Vo().u(this),this.Po.El().u(this),this.ko.El().u(this),this.cl.forEach(t=>{t.m&&t.m()}),this.yh=this.yh.filter(t=>{const e=t.oh();return e.detached&&e.detached(),!1}),this.xo.p()}Bo(){return this.bo}Io(t){this.bo=t}Qt(){return this.ts}Qi(){return this.Mo}$t(){return this.il}Eo(t){this.Mo=t,this.Ao()}Al(t){this.il=t,this.Po.Al(t),this.ko.Al(t),this.cl.forEach(e=>{if(this.Un(e)){const i=e.Ft();null!==i&&i.Al(t)}}),this.Ao()}zo(t){this.So=t}Lo(){return this.So}Oo(){return this.cl.filter(jc)}Ma(){return this.cl}Un(t){const e=t.Ft();return null===e||this.Po!==e&&this.ko!==e}Gl(t,e,i){this.No(t,e,i?t.hs():this.cl.length)}Ql(t,e){const i=this.cl.indexOf(t);Fl(-1!==i,"removeDataSource: invalid data source"),this.cl.splice(i,1),e||this.cl.forEach((t,e)=>t.ls(e));const s=Nl(t.Ft()).ma();if(this.wo.has(s)){const e=Rl(this.wo.get(s)),i=e.indexOf(t);-1!==i&&(e.splice(i,1),0===e.length&&this.wo.delete(s))}const o=t.Ft();o&&o.Ma().indexOf(t)>=0&&(o.Ql(t),this.Fo(o)),this.fl=null}qn(t){return t===this.Po?"left":t===this.ko?"right":"overlay"}Wo(){return this.Po}Ho(){return this.ko}Uo(t,e){t.no(e)}$o(t,e){t.eo(e),this.Ao()}qo(t){t.ro()}Yo(t,e){t.ho(e)}jo(t,e){t.ao(e),this.Ao()}Ko(t){t.lo()}Ao(){this.cl.forEach(t=>{t.Ns()})}ks(){let t=null;return this.ts.N().rightPriceScale.visible&&0!==this.ko.Ma().length?t=this.ko:this.ts.N().leftPriceScale.visible&&0!==this.Po.Ma().length?t=this.Po:0!==this.cl.length&&(t=this.cl[0].Ft()),null===t&&(t=this.ko),t}$n(){let t=null;return this.ts.N().rightPriceScale.visible?t=this.ko:this.ts.N().leftPriceScale.visible&&(t=this.Po),t}Fo(t){null!==t&&t.Tl()&&this.Xo(t)}Zo(t){const e=this.uh.Pe();t.yl({sn:!0}),null!==e&&t.do(e),this.Ao()}Go(){this.Xo(this.Po),this.Xo(this.ko)}Jo(){this.Fo(this.Po),this.Fo(this.ko),this.cl.forEach(t=>{this.Un(t)&&this.Fo(t.Ft())}),this.Ao(),this.ts.ar()}Dt(){return null===this.fl&&(this.fl=Hc(this.cl)),this.fl}Qo(t,e){e=Sc(e,0,this.cl.length-1);const i=this.cl.indexOf(t);Fl(-1!==i,"setSeriesOrder: invalid data source"),this.cl.splice(i,1),this.cl.splice(e,0,t),this.cl.forEach((t,e)=>t.ls(e)),this.fl=null;for(const t of[this.Po,this.ko])t.Jl(),t.wa();this.ts.ar()}Bt(){return this.Dt().filter(jc)}t_(){return this.xo}i_(){return this.Co}_a(t){this.yh.push(new hc(t))}ua(t){this.yh=this.yh.filter(e=>e.oh()!==t),t.detached&&t.detached(),this.ts.ar()}s_(){return this.yh}sa(t,e){return this.yh.map(i=>i.jn(t,e)).filter(t=>null!==t)}Xo(t){const e=t.co();if(e&&e.length>0&&!this.uh.Ki()){const e=this.uh.Pe();null!==e&&t.do(e)}t.Ns()}No(t,e,i){let s=this.Do(e);if(null===s&&(s=this.yo(e,this.ts.N().overlayPriceScales)),this.cl.splice(i,0,t),!Ch(e)){const i=this.wo.get(e)||[];i.push(t),this.wo.set(e,i)}t.ls(i),s.Gl(t),t._s(s),this.Fo(s),this.fl=null}To(t,e,i){e.ie!==i.ie&&this.Xo(t)}yo(t,e){const i={visible:!0,autoScale:!0,...Gl(e)},s=new qc(t,i,this.ts.N().layout,this.ts.N().localization,this.ts.Xi());return s.Al(this.$t()),s}}function Kc(t){return{n_:t.n_,e_:{Kn:t.r_.externalId},h_:t.r_.cursorStyle}}function Qc(t,e,i,s){for(const o of t){const t=o.Tt(s);if(null!==t&&t.jn){const s=t.jn(e,i);if(null!==s)return{a_:o,e_:s}}}return null}function Jc(t){return void 0!==t.Fs}function Xc(t,e,i){const s=[t,...t.Dt()],o=function(t,e,i){let s,o;for(const a of t){const t=a.sa?.(e,i)??[];for(const e of t)r=e.zOrder,n=s?.zOrder,(!n||"top"===r&&"top"!==n||"normal"===r&&"bottom"===n)&&(s=e,o=a)}var r,n;return s&&o?{r_:s,n_:o}:null}(s,e,i);if("top"===o?.r_.zOrder)return Kc(o);for(const r of s){if(o&&o.n_===r&&"bottom"!==o.r_.zOrder&&!o.r_.isBackground)return Kc(o);if(Jc(r)){const s=Qc(r.Fs(t),e,i,t);if(null!==s)return{n_:r,a_:s.a_,e_:s.e_}}if(o&&o.n_===r&&"bottom"!==o.r_.zOrder&&o.r_.isBackground)return Kc(o)}return o?.r_?Kc(o):null}class Zc{constructor(t,e,i=50){this.yn=0,this.kn=1,this.Tn=1,this.Dn=new Map,this.Rn=new Map,this.l_=t,this.o_=e,this.Vn=i}__(t){const e=t.time,i=this.o_.cacheKey(e),s=this.Dn.get(i);if(void 0!==s)return s.u_;if(this.yn===this.Vn){const t=this.Rn.get(this.Tn);this.Rn.delete(this.Tn),this.Dn.delete(Rl(t)),this.Tn++,this.yn--}const o=this.l_(t);return this.Dn.set(i,{u_:o,An:this.kn}),this.Rn.set(this.kn,i),this.yn++,this.kn++,o}}class td{constructor(t,e){Fl(t<=e,"right should be >= left"),this.c_=t,this.d_=e}Uh(){return this.c_}bi(){return this.d_}f_(){return this.d_-this.c_+1}Te(t){return this.c_<=t&&t<=this.d_}He(t){return this.c_===t.Uh()&&this.d_===t.bi()}}function ed(t,e){return null===t||null===e?t===e:t.He(e)}class id{constructor(){this.p_=new Map,this.Dn=null,this.v_=!1}m_(t){this.v_=t,this.Dn=null}w_(t,e){this.g_(e),this.Dn=null;for(let i=e;i<t.length;++i){const e=t[i];let s=this.p_.get(e.timeWeight);void 0===s&&(s=[],this.p_.set(e.timeWeight,s)),s.push({index:i,time:e.time,weight:e.timeWeight,originalTime:e.originalTime})}}M_(t,e,i,s,o){const r=Math.ceil(e/t);return null!==this.Dn&&this.Dn.b_===r&&o===this.Dn.S_&&i===this.Dn.x_||(this.Dn={S_:o,x_:i,Da:this.C_(r,i,s),b_:r}),this.Dn.Da}g_(t){if(0===t)return void this.p_.clear();const e=[];this.p_.forEach((i,s)=>{t<=i[0].index?e.push(s):i.splice(Zh(i,t,e=>e.index<t),1/0)});for(const t of e)this.p_.delete(t)}C_(t,e,i){let s=[];const o=t=>!e||i.has(t.index);for(const e of Array.from(this.p_.keys()).sort((t,e)=>e-t)){if(!this.p_.get(e))continue;const i=s;s=[];const r=i.length;let n=0;const a=Rl(this.p_.get(e)),l=a.length;let h=1/0,c=-1/0;for(let e=0;e<l;e++){const l=a[e],d=l.index;for(;n<r;){const t=i[n],e=t.index;if(!(e<d&&o(t))){h=e;break}n++,s.push(t),c=e,h=1/0}if(h-d>=t&&d-c>=t&&o(l))s.push(l),c=d;else if(this.v_)return i}for(;n<r;n++)o(i[n])&&s.push(i[n])}return s}}class sd{constructor(t){this.P_=t}y_(){return null===this.P_?null:new td(Math.floor(this.P_.Uh()),Math.ceil(this.P_.bi()))}k_(){return this.P_}static T_(){return new sd(null)}}function od(t,e){return t.weight>e.weight?t:e}class rd{constructor(t,e,i,s){this.Mo=0,this.R_=null,this.D_=[],this.ml=null,this.vl=null,this.V_=new id,this.B_=new Map,this.I_=sd.T_(),this.E_=!0,this.A_=new Hl,this.z_=new Hl,this.L_=new Hl,this.O_=null,this.N_=null,this.F_=new Map,this.W_=-1,this.H_=[],this.Ps=e,this.bl=i,this.U_=e.rightOffset,this.q_=e.barSpacing,this.ts=t,this.Y_(e),this.o_=s,this.j_(),this.V_.m_(e.uniformDistribution),this.K_()}N(){return this.Ps}X_(t){Ul(this.bl,t),this.Z_(),this.j_()}hr(t,e){Ul(this.Ps,t),this.Ps.fixLeftEdge&&this.G_(),this.Ps.fixRightEdge&&this.J_(),void 0!==t.barSpacing&&this.ts.dn(t.barSpacing),void 0!==t.rightOffset&&this.ts.fn(t.rightOffset),this.Y_(t),void 0===t.minBarSpacing&&void 0===t.maxBarSpacing||this.ts.dn(t.barSpacing??this.q_),void 0!==t.ignoreWhitespaceIndices&&t.ignoreWhitespaceIndices!==this.Ps.ignoreWhitespaceIndices&&this.K_(),this.Z_(),this.j_(),this.L_.p()}Rs(t){return this.D_[t]?.time??null}ss(t){return this.D_[t]??null}Q_(t,e){if(this.D_.length<1)return null;if(this.o_.key(t)>this.o_.key(this.D_[this.D_.length-1].time))return e?this.D_.length-1:null;const i=Zh(this.D_,this.o_.key(t),(t,e)=>this.o_.key(t.time)<e);return this.o_.key(t)<this.o_.key(this.D_[i].time)?e?i:null:i}Ki(){return 0===this.Mo||0===this.D_.length||null===this.R_}tu(){return this.D_.length>0}Pe(){return this.iu(),this.I_.y_()}su(){return this.iu(),this.I_.k_()}nu(){const t=this.Pe();if(null===t)return null;const e={from:t.Uh(),to:t.bi()};return this.eu(e)}eu(t){const e=Math.round(t.from),i=Math.round(t.to),s=Nl(this.ru()),o=Nl(this.hu());return{from:Nl(this.ss(Math.max(s,e))),to:Nl(this.ss(Math.min(o,i)))}}au(t){return{from:Nl(this.Q_(t.from,!0)),to:Nl(this.Q_(t.to,!0))}}Qi(){return this.Mo}Eo(t){if(!isFinite(t)||t<=0)return;if(this.Mo===t)return;const e=this.su(),i=this.Mo;if(this.Mo=t,this.E_=!0,this.Ps.lockVisibleTimeRangeOnResize&&0!==i){const e=this.q_*t/i;this.q_=e}if(this.Ps.fixLeftEdge&&null!==e&&e.Uh()<=0){const e=i-t;this.U_-=Math.round(e/this.q_)+1,this.E_=!0}this.lu(),this.ou()}qt(t){if(this.Ki()||!Yl(t))return 0;const e=this._u()+this.U_-t;return this.Mo-(e+.5)*this.q_-1}uu(t,e){const i=this._u(),s=void 0===e?0:e.from,o=void 0===e?t.length:e.to;for(let e=s;e<o;e++){const s=t[e].wt,o=i+this.U_-s,r=this.Mo-(o+.5)*this.q_-1;t[e]._t=r}}cu(t,e){const i=Math.ceil(this.du(t));return e&&this.Ps.ignoreWhitespaceIndices&&!this.fu(i)?this.pu(i):i}fn(t){this.E_=!0,this.U_=t,this.ou(),this.ts.vu(),this.ts.ar()}mu(){return this.q_}dn(t){const e=this.q_;if(this.wu(t),void 0!==this.Ps.rightOffsetPixels&&0!==e){const t=this.U_*e/this.q_;this.U_=t}this.ou(),this.ts.vu(),this.ts.ar()}gu(){return this.U_}Da(){if(this.Ki())return null;if(null!==this.N_)return this.N_;const t=this.q_,e=5*(this.ts.N().layout.fontSize+4)/8*(this.Ps.tickMarkMaxCharacterLength||8),i=Math.round(e/t),s=Nl(this.Pe()),o=Math.max(s.Uh(),s.Uh()-i),r=Math.max(s.bi(),s.bi()-i),n=this.V_.M_(t,e,this.Ps.ignoreWhitespaceIndices,this.F_,this.W_),a=this.ru()+i,l=this.hu()-i,h=this.Mu(),c=this.Ps.fixLeftEdge||h,d=this.Ps.fixRightEdge||h;let u=0;for(const t of n){if(!(o<=t.index&&t.index<=r))continue;let i;u<this.H_.length?(i=this.H_[u],i.coord=this.qt(t.index),i.label=this.bu(t),i.weight=t.weight):(i={needAlignCoordinate:!1,coord:this.qt(t.index),label:this.bu(t),weight:t.weight},this.H_.push(i)),this.q_>e/2&&!h?i.needAlignCoordinate=!1:i.needAlignCoordinate=c&&t.index<=a||d&&t.index>=l,u++}return this.H_.length=u,this.N_=this.H_,this.H_}Su(){let t;this.E_=!0,this.dn(this.Ps.barSpacing),t=void 0!==this.Ps.rightOffsetPixels?this.Ps.rightOffsetPixels/this.mu():this.Ps.rightOffset,this.fn(t)}xu(t){this.E_=!0,this.R_=t,this.ou(),this.G_()}Cu(t,e){const i=this.du(t),s=this.mu(),o=s+e*(s/10);this.dn(o),this.Ps.rightBarStaysOnScroll||this.fn(this.gu()+(i-this.du(t)))}no(t){this.ml&&this.lo(),null===this.vl&&null===this.O_&&(this.Ki()||(this.vl=t,this.Pu()))}eo(t){if(null===this.O_)return;const e=Sc(this.Mo-t,0,this.Mo),i=Sc(this.Mo-Nl(this.vl),0,this.Mo);0!==e&&0!==i&&this.dn(this.O_.mu*e/i)}ro(){null!==this.vl&&(this.vl=null,this.yu())}ho(t){null===this.ml&&null===this.O_&&(this.Ki()||(this.ml=t,this.Pu()))}ao(t){if(null===this.ml)return;const e=(this.ml-t)/this.mu();this.U_=Nl(this.O_).gu+e,this.E_=!0,this.ou()}lo(){null!==this.ml&&(this.ml=null,this.yu())}ku(){this.Tu(this.Ps.rightOffset)}Tu(t,e=400){if(!isFinite(t))throw new RangeError("offset is required and must be finite number");if(!isFinite(e)||e<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const i=this.U_,s=performance.now();this.ts._n({Ru:t=>(t-s)/e>=1,Du:o=>{const r=(o-s)/e;return r>=1?t:i+(t-i)*r}})}yt(t,e){this.E_=!0,this.D_=t,this.V_.w_(t,e),this.ou()}Vu(){return this.A_}Bu(){return this.z_}Iu(){return this.L_}_u(){return this.R_||0}Eu(t,e){const i=t.f_(),s=e&&this.Ps.rightOffsetPixels||0;this.wu((this.Mo-s)/i),this.U_=t.bi()-this._u(),e&&(this.U_=s?s/this.mu():this.Ps.rightOffset),this.ou(),this.E_=!0,this.ts.vu(),this.ts.ar()}Au(){const t=this.ru(),e=this.hu();null!==t&&null!==e&&this.Eu(new td(t,e),!0)}zu(t){const e=new td(t.from,t.to);this.Eu(e)}ns(t){return void 0!==this.bl.timeFormatter?this.bl.timeFormatter(t.originalTime):this.o_.formatHorzItem(t.time)}K_(){if(!this.Ps.ignoreWhitespaceIndices)return;this.F_.clear();const t=this.ts.js();for(const e of t)for(const t of e.va())this.F_.set(t,!0);this.W_++}Mu(){const t=this.ts.N().handleScroll,e=this.ts.N().handleScale;return!(t.horzTouchDrag||t.mouseWheel||t.pressedMouseMove||t.vertTouchDrag||e.axisDoubleClickReset.time||e.axisPressedMouseMove.time||e.mouseWheel||e.pinch)}ru(){return 0===this.D_.length?null:0}hu(){return 0===this.D_.length?null:this.D_.length-1}Lu(t){return(this.Mo-1-t)/this.q_}du(t){const e=this.Lu(t),i=this._u()+this.U_-e;return Math.round(1e6*i)/1e6}wu(t){const e=this.q_;this.q_=t,this.lu(),e!==this.q_&&(this.E_=!0,this.Ou())}iu(){if(!this.E_)return;if(this.E_=!1,this.Ki())return void this.Nu(sd.T_());const t=this._u(),e=this.Mo/this.q_,i=this.U_+t,s=new td(i-e+1,i);this.Nu(new sd(s))}lu(){const t=Sc(this.q_,this.Fu(),this.Wu());this.q_!==t&&(this.q_=t,this.E_=!0)}Wu(){return this.Ps.maxBarSpacing>0?this.Ps.maxBarSpacing:.5*this.Mo}Fu(){return this.Ps.fixLeftEdge&&this.Ps.fixRightEdge&&0!==this.D_.length?this.Mo/this.D_.length:this.Ps.minBarSpacing}ou(){const t=this.Hu();null!==t&&this.U_<t&&(this.U_=t,this.E_=!0);const e=this.Uu();this.U_>e&&(this.U_=e,this.E_=!0)}Hu(){const t=this.ru(),e=this.R_;return null===t||null===e?null:t-e-1+(this.Ps.fixLeftEdge?this.Mo/this.q_:Math.min(2,this.D_.length))}Uu(){return this.Ps.fixRightEdge?0:this.Mo/this.q_-Math.min(2,this.D_.length)}Pu(){this.O_={mu:this.mu(),gu:this.gu()}}yu(){this.O_=null}bu(t){let e=this.B_.get(t.weight);return void 0===e&&(e=new Zc(t=>this.$u(t),this.o_),this.B_.set(t.weight,e)),e.__(t)}$u(t){return this.o_.formatTickmark(t,this.bl)}Nu(t){const e=this.I_;this.I_=t,ed(e.y_(),this.I_.y_())||this.A_.p(),ed(e.k_(),this.I_.k_())||this.z_.p(),this.Ou()}Ou(){this.N_=null}Z_(){this.Ou(),this.B_.clear()}j_(){this.o_.updateFormatter(this.bl)}G_(){if(!this.Ps.fixLeftEdge)return;const t=this.ru();if(null===t)return;const e=this.Pe();if(null===e)return;const i=e.Uh()-t;if(i<0){const t=this.U_-i-1;this.fn(t)}this.lu()}J_(){this.ou(),this.lu()}fu(t){return!this.Ps.ignoreWhitespaceIndices||this.F_.get(t)||!1}pu(t){const e=function*(t){const e=Math.round(t),i=e<t;let s=1;for(;;)i?(yield e+s,yield e-s):(yield e-s,yield e+s),s++}(t),i=this.hu();for(;i;){const t=e.next().value;if(this.F_.get(t))return t;if(t<0||t>i)break}return t}Y_(t){if(void 0!==t.rightOffsetPixels){const e=t.rightOffsetPixels/(t.barSpacing||this.q_);this.ts.fn(e)}}}var nd,ad,ld,hd,cd;!function(t){t[t.OnTouchEnd=0]="OnTouchEnd",t[t.OnNextTap=1]="OnNextTap"}(nd||(nd={}));class dd{constructor(t,e,i){this.qu=[],this.Yu=[],this.Mo=0,this.ju=null,this.Ku=new Hl,this.Xu=new Hl,this.Zu=null,this.Gu=t,this.Ps=e,this.o_=i,this.Sl=new ih(this.Ps.layout.colorParsers),this.Ju=new Zl(this),this.uh=new rd(this,e.timeScale,this.Ps.localization,i),this.Ct=new kh(this,e.crosshair),this.Qu=new Cc(e.crosshair),e.addDefaultPane&&(this.tc(0),this.qu[0].Io(2)),this.sc=this.nc(0),this.ec=this.nc(1)}Ih(){this.rc(Sh.gn())}ar(){this.rc(Sh.wn())}Zh(){this.rc(new Sh(1))}Eh(t){const e=this.hc(t);this.rc(e)}ac(){return this.ju}lc(t){if(this.ju?.n_===t?.n_&&this.ju?.e_?.Kn===t?.e_?.Kn)return;const e=this.ju;this.ju=t,null!==e&&this.Eh(e.n_),null!==t&&t.n_!==e?.n_&&this.Eh(t.n_)}N(){return this.Ps}hr(t){Ul(this.Ps,t),this.qu.forEach(e=>e.Ro(t)),void 0!==t.timeScale&&this.uh.hr(t.timeScale),void 0!==t.localization&&this.uh.X_(t.localization),(t.leftPriceScale||t.rightPriceScale)&&this.Ku.p(),this.sc=this.nc(0),this.ec=this.nc(1),this.Ih()}oc(t,e,i=0){const s=this.qu[i];if(void 0===s)return;if("left"===t)return Ul(this.Ps,{leftPriceScale:e}),s.Ro({leftPriceScale:e}),this.Ku.p(),void this.Ih();if("right"===t)return Ul(this.Ps,{rightPriceScale:e}),s.Ro({rightPriceScale:e}),this.Ku.p(),void this.Ih();const o=this._c(t,i);null!==o&&(o.Ft.hr(e),this.Ku.p())}_c(t,e){const i=this.qu[e];if(void 0===i)return null;const s=i.Do(t);return null!==s?{Us:i,Ft:s}:null}Et(){return this.uh}$s(){return this.qu}uc(){return this.Ct}cc(){return this.Xu}dc(t,e){t.Al(e),this.vu()}Eo(t){this.Mo=t,this.uh.Eo(this.Mo),this.qu.forEach(e=>e.Eo(t)),this.vu()}fc(t){1!==this.qu.length&&(Fl(t>=0&&t<this.qu.length,"Invalid pane index"),this.qu.splice(t,1),this.Ih())}vc(t,e){if(this.qu.length<2)return;Fl(t>=0&&t<this.qu.length,"Invalid pane index");const i=this.qu[t],s=this.qu.reduce((t,e)=>t+e.Bo(),0),o=this.qu.reduce((t,e)=>t+e.$t(),0),r=o-30*(this.qu.length-1);e=Math.min(r,Math.max(30,e));const n=s/o,a=i.$t();i.Io(e*n);let l=e-a,h=this.qu.length-1;for(const t of this.qu)if(t!==i){const e=Math.min(r,Math.max(30,t.$t()-l/h));l-=t.$t()-e,h-=1;const i=e*n;t.Io(i)}this.Ih()}mc(t,e){Fl(t>=0&&t<this.qu.length&&e>=0&&e<this.qu.length,"Invalid pane index");const i=this.qu[t],s=this.qu[e];this.qu[t]=s,this.qu[e]=i,this.Ih()}wc(t,e){if(Fl(t>=0&&t<this.qu.length&&e>=0&&e<this.qu.length,"Invalid pane index"),t===e)return;const[i]=this.qu.splice(t,1);this.qu.splice(e,0,i),this.Ih()}Uo(t,e,i){t.Uo(e,i)}$o(t,e,i){t.$o(e,i),this.Ah(),this.rc(this.gc(t,2))}qo(t,e){t.qo(e),this.rc(this.gc(t,2))}Yo(t,e,i){e.Tl()||t.Yo(e,i)}jo(t,e,i){e.Tl()||(t.jo(e,i),this.Ah(),this.rc(this.gc(t,2)))}Ko(t,e){e.Tl()||(t.Ko(e),this.rc(this.gc(t,2)))}Zo(t,e){t.Zo(e),this.rc(this.gc(t,2))}Mc(t){this.uh.no(t)}bc(t,e){const i=this.Et();if(i.Ki()||0===e)return;const s=i.Qi();t=Math.max(1,Math.min(t,s)),i.Cu(t,e),this.vu()}Sc(t){this.xc(0),this.Cc(t),this.Pc()}yc(t){this.uh.eo(t),this.vu()}kc(){this.uh.ro(),this.ar()}xc(t){this.uh.ho(t)}Cc(t){this.uh.ao(t),this.vu()}Pc(){this.uh.lo(),this.ar()}js(){return this.Yu}Tc(t,e,i,s,o){this.Ct.Vs(t,e);let r=NaN,n=this.uh.cu(t,!0);const a=this.uh.Pe();null!==a&&(n=Math.min(Math.max(a.Uh(),n),a.bi()));const l=s.ks(),h=l.zt();if(null!==h&&(r=l.Ts(e,h)),r=this.Qu.ga(r,n,s),this.Ct.As(n,r,s),this.Zh(),!o){const o=Xc(s,t,e);this.lc(o&&{n_:o.n_,e_:o.e_,h_:o.h_||null}),this.Xu.p(this.Ct.It(),{x:t,y:e},i)}}Rc(t,e,i){const s=i.ks(),o=s.zt(),r=s.Nt(t,Nl(o)),n=this.uh.Q_(e,!0),a=this.uh.qt(Nl(n));this.Tc(a,r,null,i,!0)}Dc(t){this.uc().Ls(),this.Zh(),t||this.Xu.p(null,null,null)}Ah(){const t=this.Ct.Us();if(null!==t){const e=this.Ct.Is(),i=this.Ct.Es();this.Tc(e,i,null,t)}this.Ct.Ns()}Vc(t,e,i){const s=this.uh.Rs(0);void 0!==e&&void 0!==i&&this.uh.yt(e,i);const o=this.uh.Rs(0),r=this.uh._u(),n=this.uh.Pe();if(null!==n&&null!==s&&null!==o){const e=n.Te(r),a=this.o_.key(s)>this.o_.key(o),l=null!==t&&t>r&&!a,h=this.uh.N().allowShiftVisibleRangeOnWhitespaceReplacement,c=e&&(!(void 0===i)||h)&&this.uh.N().shiftVisibleRangeOnNewBar;if(l&&!c){const e=t-r;this.uh.fn(this.uh.gu()-e)}}this.uh.xu(t)}Lh(t){null!==t&&t.Jo()}Hn(t){if(function(t){return t instanceof Gc}(t))return t;const e=this.qu.find(e=>e.Dt().includes(t));return void 0===e?null:e}vu(){this.qu.forEach(t=>t.Jo()),this.Ah()}m(){this.qu.forEach(t=>t.m()),this.qu.length=0,this.Ps.localization.priceFormatter=void 0,this.Ps.localization.percentageFormatter=void 0,this.Ps.localization.timeFormatter=void 0}Bc(){return this.Ju}Yn(){return this.Ju.N()}Vo(){return this.Ku}Ic(t,e){const i=this.tc(e);this.Ec(t,i),this.Yu.push(t),1===this.Yu.length?this.Ih():this.ar()}Ac(t){const e=this.Hn(t),i=this.Yu.indexOf(t);Fl(-1!==i,"Series not found");const s=Nl(e);this.Yu.splice(i,1),s.Ql(t),t.m&&t.m(),this.uh.K_(),this.zc(s)}Bh(t,e){const i=Nl(this.Hn(t));i.Ql(t,!0),i.Gl(t,e,!0)}Au(){const t=Sh.wn();t.rn(),this.rc(t)}Lc(t){const e=Sh.wn();e.ln(t),this.rc(e)}cn(){const t=Sh.wn();t.cn(),this.rc(t)}dn(t){const e=Sh.wn();e.dn(t),this.rc(e)}fn(t){const e=Sh.wn();e.fn(t),this.rc(e)}_n(t){const e=Sh.wn();e._n(t),this.rc(e)}hn(){const t=Sh.wn();t.hn(),this.rc(t)}Oc(){return this.Ps.rightPriceScale.visible?"right":"left"}Nc(t,e){if(Fl(e>=0,"Index should be greater or equal to 0"),e===this.Fc(t))return;const i=Nl(this.Hn(t));i.Ql(t);const s=this.tc(e);this.Ec(t,s),0===i.Ma().length&&this.zc(i),this.Ih()}Wc(){return this.ec}$(){return this.sc}Ut(t){const e=this.ec,i=this.sc;if(e===i)return e;if(t=Math.max(0,Math.min(100,Math.round(100*t))),null===this.Zu||this.Zu.mr!==i||this.Zu.wr!==e)this.Zu={mr:i,wr:e,Hc:new Map};else{const e=this.Zu.Hc.get(t);if(void 0!==e)return e}const s=this.Sl.tt(i,e,t/100);return this.Zu.Hc.set(t,s),s}Uc(t){return this.qu.indexOf(t)}Xi(){return this.Sl}$c(){return this.qc()}qc(t){const e=new Gc(this.uh,this);this.qu.push(e);const i=t??this.qu.length-1,s=Sh.gn();return s.Qs(i,{tn:0,sn:!0}),this.rc(s),e}tc(t){return Fl(t>=0,"Index should be greater or equal to 0"),(t=Math.min(this.qu.length,t))<this.qu.length?this.qu[t]:this.qc(t)}Fc(t){return this.qu.findIndex(e=>e.Oo().includes(t))}gc(t,e){const i=new Sh(e);if(null!==t){const s=this.qu.indexOf(t);i.Qs(s,{tn:e})}return i}hc(t,e){return void 0===e&&(e=2),this.gc(this.Hn(t),e)}rc(t){this.Gu&&this.Gu(t),this.qu.forEach(t=>t.i_().lr().yt())}Ec(t,e){const i=t.N().priceScaleId,s=void 0!==i?i:this.Oc();e.Gl(t,s),Ch(s)||t.hr(t.N())}nc(t){const e=this.Ps.layout;return"gradient"===e.background.type?0===t?e.background.topColor:e.background.bottomColor:e.background.color}zc(t){!t.Lo()&&0===t.Ma().length&&this.qu.length>1&&this.qu.splice(this.Uc(t),1)}}function ud(t){if(t>=1)return 0;let e=0;for(;e<8;e++){const i=Math.round(t);if(Math.abs(i-t)<1e-8)return e;t*=10}return e}function pd(t){return!Wl(t)&&!ql(t)}function fd(t){return Wl(t)}!function(t){t[t.Disabled=0]="Disabled",t[t.Continuous=1]="Continuous",t[t.OnDataUpdate=2]="OnDataUpdate"}(ad||(ad={})),function(t){t[t.LastBar=0]="LastBar",t[t.LastVisible=1]="LastVisible"}(ld||(ld={})),function(t){t.Solid="solid",t.VerticalGradient="gradient"}(hd||(hd={})),function(t){t[t.Year=0]="Year",t[t.Month=1]="Month",t[t.DayOfMonth=2]="DayOfMonth",t[t.Time=3]="Time",t[t.TimeWithSeconds=4]="TimeWithSeconds"}(cd||(cd={}));const md=t=>t.getUTCFullYear();class gd{constructor(t="yyyy-MM-dd",e="default"){this.Yc=t,this.jc=e}__(t){return function(t,e,i){return e.replace(/yyyy/g,(t=>$h(md(t),4))(t)).replace(/yy/g,(t=>$h(md(t)%100,2))(t)).replace(/MMMM/g,((t,e)=>new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toLocaleString(e,{month:"long"}))(t,i)).replace(/MMM/g,((t,e)=>new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toLocaleString(e,{month:"short"}))(t,i)).replace(/MM/g,(t=>$h((t=>t.getUTCMonth()+1)(t),2))(t)).replace(/dd/g,(t=>$h((t=>t.getUTCDate())(t),2))(t))}(t,this.Yc,this.jc)}}class bd{constructor(t){this.Kc=t||"%h:%m:%s"}__(t){return this.Kc.replace("%h",$h(t.getUTCHours(),2)).replace("%m",$h(t.getUTCMinutes(),2)).replace("%s",$h(t.getUTCSeconds(),2))}}const vd={Xc:"yyyy-MM-dd",Zc:"%h:%m:%s",Gc:" ",Jc:"default"};class yd{constructor(t={}){const e={...vd,...t};this.Qc=new gd(e.Xc,e.Jc),this.td=new bd(e.Zc),this.sd=e.Gc}__(t){return`${this.Qc.__(t)}${this.sd}${this.td.__(t)}`}}function wd(t){return 60*t*60*1e3}function _d(t){return 60*t*1e3}const xd=[{nd:1e3,ed:10},{nd:_d(1),ed:20},{nd:_d(5),ed:21},{nd:_d(30),ed:22},{nd:wd(1),ed:30},{nd:wd(3),ed:31},{nd:wd(6),ed:32},{nd:wd(12),ed:33}];function kd(t,e){if(t.getUTCFullYear()!==e.getUTCFullYear())return 70;if(t.getUTCMonth()!==e.getUTCMonth())return 60;if(t.getUTCDate()!==e.getUTCDate())return 50;for(let i=xd.length-1;i>=0;--i)if(Math.floor(e.getTime()/xd[i].nd)!==Math.floor(t.getTime()/xd[i].nd))return xd[i].ed;return 0}function Cd(t){let e=t;if(ql(t)&&(e=zd(t)),!pd(e))throw new Error("time must be of type BusinessDay");const i=new Date(Date.UTC(e.year,e.month-1,e.day,0,0,0,0));return{rd:Math.round(i.getTime()/1e3),hd:e}}function Sd(t){if(!fd(t))throw new Error("time must be of type isUTCTimestamp");return{rd:t}}function zd(t){const e=new Date(t);if(isNaN(e.getTime()))throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);return{day:e.getUTCDate(),month:e.getUTCMonth()+1,year:e.getUTCFullYear()}}function $d(t){ql(t.time)&&(t.time=zd(t.time))}class Ed{options(){return this.Ps}setOptions(t){this.Ps=t,this.updateFormatter(t.localization)}preprocessData(t){Array.isArray(t)?function(t){t.forEach($d)}(t):$d(t)}createConverterToInternalObj(t){return Nl(function(t){return 0===t.length?null:pd(t[0].time)||ql(t[0].time)?Cd:Sd}(t))}key(t){return"object"==typeof t&&"rd"in t?t.rd:this.key(this.convertHorzItemToInternal(t))}cacheKey(t){const e=t;return void 0===e.hd?new Date(1e3*e.rd).getTime():new Date(Date.UTC(e.hd.year,e.hd.month-1,e.hd.day)).getTime()}convertHorzItemToInternal(t){return fd(e=t)?Sd(e):pd(e)?Cd(e):Cd(zd(e));var e}updateFormatter(t){if(!this.Ps)return;const e=t.dateFormat;this.Ps.timeScale.timeVisible?this.ad=new yd({Xc:e,Zc:this.Ps.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",Gc:"   ",Jc:t.locale}):this.ad=new gd(e,t.locale)}formatHorzItem(t){const e=t;return this.ad.__(new Date(1e3*e.rd))}formatTickmark(t,e){const i=function(t,e,i){switch(t){case 0:case 10:return e?i?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return e?3:2;case 50:return 2;case 60:return 1;case 70:return 0}}(t.weight,this.Ps.timeScale.timeVisible,this.Ps.timeScale.secondsVisible),s=this.Ps.timeScale;if(void 0!==s.tickMarkFormatter){const o=s.tickMarkFormatter(t.originalTime,i,e.locale);if(null!==o)return o}return function(t,e,i){const s={};switch(e){case 0:s.year="numeric";break;case 1:s.month="short";break;case 2:s.day="numeric";break;case 3:s.hour12=!1,s.hour="2-digit",s.minute="2-digit";break;case 4:s.hour12=!1,s.hour="2-digit",s.minute="2-digit",s.second="2-digit"}const o=void 0===t.hd?new Date(1e3*t.rd):new Date(Date.UTC(t.hd.year,t.hd.month-1,t.hd.day));return new Date(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()).toLocaleString(i,s)}(t.time,i,e.locale)}maxTickMarkWeight(t){let e=t.reduce(od,t[0]).weight;return e>30&&e<50&&(e=30),e}fillWeightsForPoints(t,e){!function(t,e=0){if(0===t.length)return;let i=0===e?null:t[e-1].time.rd,s=null!==i?new Date(1e3*i):null,o=0;for(let r=e;r<t.length;++r){const e=t[r],n=new Date(1e3*e.time.rd);null!==s&&(e.timeWeight=kd(n,s)),o+=e.time.rd-(i||e.time.rd),i=e.time.rd,s=n}if(0===e&&t.length>1){const e=Math.ceil(o/(t.length-1)),i=new Date(1e3*(t[0].time.rd-e));t[0].timeWeight=kd(new Date(1e3*t[0].time.rd),i)}}(t,e)}static ld(t){return Ul({localization:{dateFormat:"dd MMM 'yy"}},t??{})}}const Md="undefined"!=typeof window;function Pd(){return!!Md&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function Td(){return!!Md&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function Ad(t){return t+t%2}class Ld{constructor(t,e,i){this.od=0,this._d=null,this.ud={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.dd=0,this.fd=null,this.pd={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.vd=null,this.md=!1,this.wd=null,this.gd=null,this.Md=!1,this.bd=!1,this.Sd=!1,this.xd=null,this.Cd=null,this.Pd=null,this.yd=null,this.kd=null,this.Td=null,this.Rd=null,this.Dd=0,this.Vd=!1,this.Bd=!1,this.Id=!1,this.Ed=0,this.Ad=null,this.zd=!Td(),this.Ld=t=>{this.Od(t)},this.Nd=t=>{if(this.Fd(t)){const e=this.Wd(t);if(++this.dd,this.fd&&this.dd>1){const{Hd:i}=this.Ud(Id(t),this.pd);i<30&&!this.Sd&&this.$d(e,this.Yd.qd),this.jd()}}else{const e=this.Wd(t);if(++this.od,this._d&&this.od>1){const{Hd:i}=this.Ud(Id(t),this.ud);i<5&&!this.bd&&this.Kd(e,this.Yd.Xd),this.Zd()}}},this.Gd=t,this.Yd=e,this.Ps=i,this.Jd()}m(){null!==this.xd&&(this.xd(),this.xd=null),null!==this.Cd&&(this.Cd(),this.Cd=null),null!==this.yd&&(this.yd(),this.yd=null),null!==this.kd&&(this.kd(),this.kd=null),null!==this.Td&&(this.Td(),this.Td=null),null!==this.Pd&&(this.Pd(),this.Pd=null),this.Qd(),this.Zd()}tf(t){this.yd&&this.yd();const e=this.if.bind(this);if(this.yd=()=>{this.Gd.removeEventListener("mousemove",e)},this.Gd.addEventListener("mousemove",e),this.Fd(t))return;const i=this.Wd(t);this.Kd(i,this.Yd.sf),this.zd=!0}Zd(){null!==this._d&&clearTimeout(this._d),this.od=0,this._d=null,this.ud={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}jd(){null!==this.fd&&clearTimeout(this.fd),this.dd=0,this.fd=null,this.pd={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}if(t){if(this.Id||null!==this.gd)return;if(this.Fd(t))return;const e=this.Wd(t);this.Kd(e,this.Yd.nf),this.zd=!0}ef(t){const e=Fd(t.changedTouches,Nl(this.Ad));if(null===e)return;if(this.Ed=Vd(t),null!==this.Rd)return;if(this.Bd)return;this.Vd=!0;const i=this.Ud(Id(e),Nl(this.gd)),{rf:s,hf:o,Hd:r}=i;if(this.Md||!(r<5)){if(!this.Md){const t=.5*s,e=o>=t&&!this.Ps.af(),i=t>o&&!this.Ps.lf();e||i||(this.Bd=!0),this.Md=!0,this.Sd=!0,this.Qd(),this.jd()}if(!this.Bd){const i=this.Wd(t,e);this.$d(i,this.Yd._f),Od(t)}}}uf(t){if(0!==t.button)return;const e=this.Ud(Id(t),Nl(this.wd)),{Hd:i}=e;if(i>=5&&(this.bd=!0,this.Zd()),this.bd){const e=this.Wd(t);this.Kd(e,this.Yd.cf)}}Ud(t,e){const i=Math.abs(e._t-t._t),s=Math.abs(e.ut-t.ut);return{rf:i,hf:s,Hd:i+s}}df(t){let e=Fd(t.changedTouches,Nl(this.Ad));if(null===e&&0===t.touches.length&&(e=t.changedTouches[0]),null===e)return;this.Ad=null,this.Ed=Vd(t),this.Qd(),this.gd=null,this.Td&&(this.Td(),this.Td=null);const i=this.Wd(t,e);if(this.$d(i,this.Yd.ff),++this.dd,this.fd&&this.dd>1){const{Hd:t}=this.Ud(Id(e),this.pd);t<30&&!this.Sd&&this.$d(i,this.Yd.qd),this.jd()}else this.Sd||(this.$d(i,this.Yd.pf),this.Yd.pf&&Od(t));0===this.dd&&Od(t),0===t.touches.length&&this.md&&(this.md=!1,Od(t))}Od(t){if(0!==t.button)return;const e=this.Wd(t);if(this.wd=null,this.Id=!1,this.kd&&(this.kd(),this.kd=null),Pd()&&this.Gd.ownerDocument.documentElement.removeEventListener("mouseleave",this.Ld),!this.Fd(t))if(this.Kd(e,this.Yd.vf),++this.od,this._d&&this.od>1){const{Hd:i}=this.Ud(Id(t),this.ud);i<5&&!this.bd&&this.Kd(e,this.Yd.Xd),this.Zd()}else this.bd||this.Kd(e,this.Yd.mf)}Qd(){null!==this.vd&&(clearTimeout(this.vd),this.vd=null)}wf(t){if(null!==this.Ad)return;const e=t.changedTouches[0];this.Ad=e.identifier,this.Ed=Vd(t);const i=this.Gd.ownerDocument.documentElement;this.Sd=!1,this.Md=!1,this.Bd=!1,this.gd=Id(e),this.Td&&(this.Td(),this.Td=null);{const e=this.ef.bind(this),s=this.df.bind(this);this.Td=()=>{i.removeEventListener("touchmove",e),i.removeEventListener("touchend",s)},i.addEventListener("touchmove",e,{passive:!1}),i.addEventListener("touchend",s,{passive:!1}),this.Qd(),this.vd=setTimeout(this.gf.bind(this,t),240)}const s=this.Wd(t,e);this.$d(s,this.Yd.Mf),this.fd||(this.dd=0,this.fd=setTimeout(this.jd.bind(this),500),this.pd=Id(e))}bf(t){if(0!==t.button)return;const e=this.Gd.ownerDocument.documentElement;Pd()&&e.addEventListener("mouseleave",this.Ld),this.bd=!1,this.wd=Id(t),this.kd&&(this.kd(),this.kd=null);{const t=this.uf.bind(this),i=this.Od.bind(this);this.kd=()=>{e.removeEventListener("mousemove",t),e.removeEventListener("mouseup",i)},e.addEventListener("mousemove",t),e.addEventListener("mouseup",i)}if(this.Id=!0,this.Fd(t))return;const i=this.Wd(t);this.Kd(i,this.Yd.Sf),this._d||(this.od=0,this._d=setTimeout(this.Zd.bind(this),500),this.ud=Id(t))}Jd(){this.Gd.addEventListener("mouseenter",this.tf.bind(this)),this.Gd.addEventListener("touchcancel",this.Qd.bind(this));{const t=this.Gd.ownerDocument,e=t=>{this.Yd.xf&&(t.composed&&this.Gd.contains(t.composedPath()[0])||t.target&&this.Gd.contains(t.target)||this.Yd.xf())};this.Cd=()=>{t.removeEventListener("touchstart",e)},this.xd=()=>{t.removeEventListener("mousedown",e)},t.addEventListener("mousedown",e),t.addEventListener("touchstart",e,{passive:!0})}Td()&&(this.Pd=()=>{this.Gd.removeEventListener("dblclick",this.Nd)},this.Gd.addEventListener("dblclick",this.Nd)),this.Gd.addEventListener("mouseleave",this.Cf.bind(this)),this.Gd.addEventListener("touchstart",this.wf.bind(this),{passive:!0}),function(t){Md&&void 0!==window.chrome&&t.addEventListener("mousedown",t=>{if(1===t.button)return t.preventDefault(),!1})}(this.Gd),this.Gd.addEventListener("mousedown",this.bf.bind(this)),this.Pf(),this.Gd.addEventListener("touchmove",()=>{},{passive:!1})}Pf(){void 0===this.Yd.yf&&void 0===this.Yd.kf&&void 0===this.Yd.Tf||(this.Gd.addEventListener("touchstart",t=>this.Rf(t.touches),{passive:!0}),this.Gd.addEventListener("touchmove",t=>{if(2===t.touches.length&&null!==this.Rd&&void 0!==this.Yd.kf){const e=Dd(t.touches[0],t.touches[1])/this.Dd;this.Yd.kf(this.Rd,e),Od(t)}},{passive:!1}),this.Gd.addEventListener("touchend",t=>{this.Rf(t.touches)}))}Rf(t){1===t.length&&(this.Vd=!1),2!==t.length||this.Vd||this.md?this.Df():this.Vf(t)}Vf(t){const e=this.Gd.getBoundingClientRect()||{left:0,top:0};this.Rd={_t:(t[0].clientX-e.left+(t[1].clientX-e.left))/2,ut:(t[0].clientY-e.top+(t[1].clientY-e.top))/2},this.Dd=Dd(t[0],t[1]),void 0!==this.Yd.yf&&this.Yd.yf(),this.Qd()}Df(){null!==this.Rd&&(this.Rd=null,void 0!==this.Yd.Tf&&this.Yd.Tf())}Cf(t){if(this.yd&&this.yd(),this.Fd(t))return;if(!this.zd)return;const e=this.Wd(t);this.Kd(e,this.Yd.Bf),this.zd=!Td()}gf(t){const e=Fd(t.touches,Nl(this.Ad));if(null===e)return;const i=this.Wd(t,e);this.$d(i,this.Yd.If),this.Sd=!0,this.md=!0}Fd(t){return t.sourceCapabilities&&void 0!==t.sourceCapabilities.firesTouchEvents?t.sourceCapabilities.firesTouchEvents:Vd(t)<this.Ed+500}$d(t,e){e&&e.call(this.Yd,t)}Kd(t,e){e&&e.call(this.Yd,t)}Wd(t,e){const i=e||t,s=this.Gd.getBoundingClientRect()||{left:0,top:0};return{clientX:i.clientX,clientY:i.clientY,pageX:i.pageX,pageY:i.pageY,screenX:i.screenX,screenY:i.screenY,localX:i.clientX-s.left,localY:i.clientY-s.top,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey,Ef:!t.type.startsWith("mouse")&&"contextmenu"!==t.type&&"click"!==t.type,Af:t.type,zf:i.target,a_:t.view,Lf:()=>{"touchstart"!==t.type&&Od(t)}}}}function Dd(t,e){const i=t.clientX-e.clientX,s=t.clientY-e.clientY;return Math.sqrt(i*i+s*s)}function Od(t){t.cancelable&&t.preventDefault()}function Id(t){return{_t:t.pageX,ut:t.pageY}}function Vd(t){return t.timeStamp||performance.now()}function Fd(t,e){for(let i=0;i<t.length;++i)if(t[i].identifier===e)return t[i];return null}class Rd{constructor(t,e,i){this.Of=null,this.Nf=null,this.Ff=!0,this.Wf=null,this.Hf=t,this.Uf=t.$f()[e],this.qf=t.$f()[i],this.Yf=document.createElement("tr"),this.Yf.style.height="1px",this.jf=document.createElement("td"),this.jf.style.position="relative",this.jf.style.padding="0",this.jf.style.margin="0",this.jf.setAttribute("colspan","3"),this.Kf(),this.Yf.appendChild(this.jf),this.Ff=this.Hf.N().layout.panes.enableResize,this.Ff?this.Xf():(this.Of=null,this.Nf=null)}m(){null!==this.Nf&&this.Nf.m()}Zf(){return this.Yf}Gf(){return zl({width:this.Uf.Gf().width,height:1})}Jf(){return zl({width:this.Uf.Jf().width,height:1*window.devicePixelRatio})}Qf(t,e,i){const s=this.Jf();t.fillStyle=this.Hf.N().layout.panes.separatorColor,t.fillRect(e,i,s.width,s.height)}yt(){this.Kf(),this.Hf.N().layout.panes.enableResize!==this.Ff&&(this.Ff=this.Hf.N().layout.panes.enableResize,this.Ff?this.Xf():(null!==this.Of&&(this.jf.removeChild(this.Of.tp),this.jf.removeChild(this.Of.ip),this.Of=null),null!==this.Nf&&(this.Nf.m(),this.Nf=null)))}Xf(){const t=document.createElement("div"),e=t.style;e.position="fixed",e.display="none",e.zIndex="49",e.top="0",e.left="0",e.width="100%",e.height="100%",e.cursor="row-resize",this.jf.appendChild(t);const i=document.createElement("div"),s=i.style;s.position="absolute",s.zIndex="50",s.top="-4px",s.height="9px",s.width="100%",s.backgroundColor="",s.cursor="row-resize",this.jf.appendChild(i);const o={sf:this.sp.bind(this),Bf:this.np.bind(this),Sf:this.ep.bind(this),Mf:this.ep.bind(this),cf:this.rp.bind(this),_f:this.rp.bind(this),vf:this.hp.bind(this),ff:this.hp.bind(this)};this.Nf=new Ld(i,o,{af:()=>!1,lf:()=>!0}),this.Of={ip:i,tp:t}}Kf(){this.jf.style.background=this.Hf.N().layout.panes.separatorColor}sp(t){null!==this.Of&&(this.Of.ip.style.backgroundColor=this.Hf.N().layout.panes.separatorHoverColor)}np(t){null!==this.Of&&null===this.Wf&&(this.Of.ip.style.backgroundColor="")}ep(t){if(null===this.Of)return;const e=this.Uf.ap().Bo()+this.qf.ap().Bo(),i=e/(this.Uf.Gf().height+this.qf.Gf().height),s=30*i;e<=2*s||(this.Wf={lp:t.pageY,op:this.Uf.ap().Bo(),_p:e-s,up:e,cp:i,dp:s},this.Of.tp.style.display="block")}rp(t){const e=this.Wf;if(null===e)return;const i=(t.pageY-e.lp)*e.cp,s=Sc(e.op+i,e.dp,e._p);this.Uf.ap().Io(s),this.qf.ap().Io(e.up-s),this.Hf.Qt().Ih()}hp(t){null!==this.Wf&&null!==this.Of&&(this.Wf=null,this.Of.tp.style.display="none")}}function Nd(t,e){return t.fp-e.fp}function Bd(t,e,i){const s=(t.fp-e.fp)/(t.wt-e.wt);return Math.sign(s)*Math.min(Math.abs(s),i)}class Hd{constructor(t,e,i,s){this.pp=null,this.vp=null,this.mp=null,this.wp=null,this.gp=null,this.Mp=0,this.bp=0,this.Sp=t,this.xp=e,this.Cp=i,this.Mn=s}Pp(t,e){if(null!==this.pp){if(this.pp.wt===e)return void(this.pp.fp=t);if(Math.abs(this.pp.fp-t)<this.Mn)return}this.wp=this.mp,this.mp=this.vp,this.vp=this.pp,this.pp={wt:e,fp:t}}le(t,e){if(null===this.pp||null===this.vp)return;if(e-this.pp.wt>50)return;let i=0;const s=Bd(this.pp,this.vp,this.xp),o=Nd(this.pp,this.vp),r=[s],n=[o];if(i+=o,null!==this.mp){const t=Bd(this.vp,this.mp,this.xp);if(Math.sign(t)===Math.sign(s)){const e=Nd(this.vp,this.mp);if(r.push(t),n.push(e),i+=e,null!==this.wp){const t=Bd(this.mp,this.wp,this.xp);if(Math.sign(t)===Math.sign(s)){const e=Nd(this.mp,this.wp);r.push(t),n.push(e),i+=e}}}}let a=0;for(let t=0;t<r.length;++t)a+=n[t]/i*r[t];Math.abs(a)<this.Sp||(this.gp={fp:t,wt:e},this.bp=a,this.Mp=function(t,e){const i=Math.log(e);return Math.log(1*i/-t)/i}(Math.abs(a),this.Cp))}Du(t){const e=Nl(this.gp),i=t-e.wt;return e.fp+this.bp*(Math.pow(this.Cp,i)-1)/Math.log(this.Cp)}Ru(t){return null===this.gp||this.yp(t)===this.Mp}yp(t){const e=t-Nl(this.gp).wt;return Math.min(e,this.Mp)}}class Ud{constructor(t,e){this.kp=void 0,this.Tp=void 0,this.Rp=void 0,this.ps=!1,this.Dp=t,this.Vp=e,this.Bp()}yt(){this.Bp()}Ip(){this.kp&&this.Dp.removeChild(this.kp),this.Tp&&this.Dp.removeChild(this.Tp),this.kp=void 0,this.Tp=void 0}Ep(){return this.ps!==this.Ap()||this.Rp!==this.zp()}zp(){return this.Vp.Qt().Xi().J(this.Vp.N().layout.textColor)>160?"dark":"light"}Ap(){return this.Vp.N().layout.attributionLogo}Lp(){const t=new URL(location.href);return t.hostname?"&utm_source="+t.hostname+t.pathname:""}Bp(){this.Ep()&&(this.Ip(),this.ps=this.Ap(),this.ps&&(this.Rp=this.zp(),this.Tp=document.createElement("style"),this.Tp.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.kp=document.createElement("a"),this.kp.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.Lp()}`,this.kp.title="Charting by TradingView",this.kp.id="tv-attr-logo",this.kp.target="_blank",this.kp.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.kp.toggleAttribute("data-dark","dark"===this.Rp),this.Dp.appendChild(this.Tp),this.Dp.appendChild(this.kp)))}}function Wd(t,e){const i=Nl(t.ownerDocument).createElement("canvas");t.appendChild(i);const s=function(t,e){if("device-pixel-content-box"===e.type)return new Ml(t,e.transform,e.options);throw new Error("Unsupported binding target")}(i,{type:"device-pixel-content-box",options:{allowResizeObserver:!0},transform:(t,e)=>({width:Math.max(t.width,e.width),height:Math.max(t.height,e.height)})});return s.resizeCanvasElement(e),s}function Yd(t){t.width=1,t.height=1,t.getContext("2d")?.clearRect(0,0,1,1)}function qd(t,e,i,s){t.ih&&t.ih(e,i,s)}function jd(t,e,i,s){t.nt(e,i,s)}function Gd(t,e,i,s){const o=t(i,s);for(const t of o){const i=t.Tt(s);null!==i&&e(i)}}function Kd(t,e){return i=>function(t){return void 0!==t.Ft}(i)?(i.Ft()?.ma()??"")!==e?[]:i.ta?.(t)??[]:[]}function Qd(t,e,i,s){if(!t.length)return;let o=0;const r=t[0].$t(s,!0);let n=1===e?i/2-(t[0].Fi()-r/2):t[0].Fi()-r/2-i/2;n=Math.max(0,n);for(let r=1;r<t.length;r++){const a=t[r],l=t[r-1],h=l.$t(s,!1),c=a.Fi(),d=l.Fi();if(1===e?c>d-h:c<d+h){const s=d-h*e;a.Wi(s);const r=s-e*h/2;if((1===e?r<0:r>i)&&n>0){const s=1===e?-1-r:r-i,a=Math.min(s,n);for(let i=o;i<t.length;i++)t[i].Wi(t[i].Fi()+e*a);n-=a}}else o=r,n=1===e?d-h-c:c-(d+h)}}class Jd{constructor(t,e,i,s){this.Yi=null,this.Op=null,this.Np=!1,this.Fp=new Ah(200),this.Wp=null,this.Hp=0,this.Up=!1,this.$p=()=>{this.Up||this.Pt.qp().Qt().ar()},this.Yp=()=>{this.Up||this.Pt.qp().Qt().ar()},this.Pt=t,this.Ps=e,this.Ml=e.layout,this.Ju=i,this.jp="left"===s,this.Kp=Kd("normal",s),this.Xp=Kd("top",s),this.Zp=Kd("bottom",s),this.jf=document.createElement("div"),this.jf.style.height="100%",this.jf.style.overflow="hidden",this.jf.style.width="25px",this.jf.style.left="0",this.jf.style.position="relative",this.Gp=Wd(this.jf,zl({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p);const o=this.Gp.canvasElement;o.style.position="absolute",o.style.zIndex="1",o.style.left="0",o.style.top="0",this.Jp=Wd(this.jf,zl({width:16,height:16})),this.Jp.subscribeSuggestedBitmapSizeChanged(this.Yp);const r=this.Jp.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0";const n={Sf:this.ep.bind(this),Mf:this.ep.bind(this),cf:this.rp.bind(this),_f:this.rp.bind(this),xf:this.Qp.bind(this),vf:this.hp.bind(this),ff:this.hp.bind(this),Xd:this.tv.bind(this),qd:this.tv.bind(this),sf:this.iv.bind(this),Bf:this.np.bind(this)};this.Nf=new Ld(this.Jp.canvasElement,n,{af:()=>!this.Ps.handleScroll.vertTouchDrag,lf:()=>!0})}m(){this.Nf.m(),this.Jp.unsubscribeSuggestedBitmapSizeChanged(this.Yp),Yd(this.Jp.canvasElement),this.Jp.dispose(),this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Yd(this.Gp.canvasElement),this.Gp.dispose(),null!==this.Yi&&this.Yi.so().u(this),this.Yi=null}Zf(){return this.jf}P(){return this.Ml.fontSize}sv(){const t=this.Ju.N();return this.Wp!==t.k&&(this.Fp.Bn(),this.Wp=t.k),t}nv(){if(null===this.Yi)return 0;let t=0;const e=this.sv(),i=Nl(this.Gp.canvasElement.getContext("2d",{colorSpace:this.Pt.qp().N().layout.colorSpace}));i.save();const s=this.Yi.Da();i.font=this.ev(),s.length>0&&(t=Math.max(this.Fp.Vi(i,s[0].Za),this.Fp.Vi(i,s[s.length-1].Za)));const o=this.rv();for(let e=o.length;e--;){const s=this.Fp.Vi(i,o[e].ri());s>t&&(t=s)}const r=this.Yi.zt();if(null!==r&&null!==this.Op&&2!==(n=this.Ps.crosshair).mode&&n.horzLine.visible&&n.horzLine.labelVisible){const e=this.Yi.Ts(1,r),s=this.Yi.Ts(this.Op.height-2,r);t=Math.max(t,this.Fp.Vi(i,this.Yi.Zi(Math.floor(Math.min(e,s))+.11111111111111,r)),this.Fp.Vi(i,this.Yi.Zi(Math.ceil(Math.max(e,s))-.11111111111111,r)))}var n;i.restore();const a=t||34;return Ad(Math.ceil(e.S+e.C+e.B+e.I+5+a))}hv(t){null!==this.Op&&$l(this.Op,t)||(this.Op=t,this.Up=!0,this.Gp.resizeCanvasElement(t),this.Jp.resizeCanvasElement(t),this.Up=!1,this.jf.style.width=`${t.width}px`,this.jf.style.height=`${t.height}px`)}av(){return Nl(this.Op).width}_s(t){this.Yi!==t&&(null!==this.Yi&&this.Yi.so().u(this),this.Yi=t,t.so().i(this._l.bind(this),this))}Ft(){return this.Yi}Bn(){const t=this.Pt.ap();this.Pt.qp().Qt().Zo(t,Nl(this.Ft()))}lv(t){if(null===this.Op)return;const e={colorSpace:this.Pt.qp().N().layout.colorSpace};if(1!==t){this.ov(),this.Gp.applySuggestedBitmapSize();const t=Al(this.Gp,e);null!==t&&(t.useBitmapCoordinateSpace(t=>{this._v(t),this.uv(t)}),this.Pt.cv(t,this.Zp),this.dv(t),this.Pt.cv(t,this.Kp),this.fv(t))}this.Jp.applySuggestedBitmapSize();const i=Al(this.Jp,e);null!==i&&(i.useBitmapCoordinateSpace(({context:t,bitmapSize:e})=>{t.clearRect(0,0,e.width,e.height)}),this.pv(i),this.Pt.cv(i,this.Xp))}Jf(){return this.Gp.bitmapSize}Qf(t,e,i,s){const o=this.Jf();if(o.width>0&&o.height>0&&(t.drawImage(this.Gp.canvasElement,e,i),s)){const s=this.Jp.canvasElement;t.drawImage(s,e,i)}}yt(){this.Yi?.Da()}ep(t){if(null===this.Yi||this.Yi.Ki()||!this.Ps.handleScale.axisPressedMouseMove.price)return;const e=this.Pt.qp().Qt(),i=this.Pt.ap();this.Np=!0,e.Uo(i,this.Yi,t.localY)}rp(t){if(null===this.Yi||!this.Ps.handleScale.axisPressedMouseMove.price)return;const e=this.Pt.qp().Qt(),i=this.Pt.ap(),s=this.Yi;e.$o(i,s,t.localY)}Qp(){if(null===this.Yi||!this.Ps.handleScale.axisPressedMouseMove.price)return;const t=this.Pt.qp().Qt(),e=this.Pt.ap(),i=this.Yi;this.Np&&(this.Np=!1,t.qo(e,i))}hp(t){if(null===this.Yi||!this.Ps.handleScale.axisPressedMouseMove.price)return;const e=this.Pt.qp().Qt(),i=this.Pt.ap();this.Np=!1,e.qo(i,this.Yi)}tv(t){this.Ps.handleScale.axisDoubleClickReset.price&&this.Bn()}iv(t){null!==this.Yi&&(!this.Pt.qp().Qt().N().handleScale.axisPressedMouseMove.price||this.Yi.Le()||this.Yi.Dl()||this.vv(1))}np(t){this.vv(0)}rv(){const t=[],e=null===this.Yi?void 0:this.Yi;return(i=>{for(let s=0;s<i.length;++s){const o=i[s].Ws(this.Pt.ap(),e);for(let e=0;e<o.length;e++)t.push(o[e])}})(this.Pt.ap().Dt()),t}_v({context:t,bitmapSize:e}){const{width:i,height:s}=e,o=this.Pt.ap().Qt(),r=o.$(),n=o.Wc();r===n?dh(t,0,0,i,s,r):fh(t,0,0,i,s,r,n)}uv({context:t,bitmapSize:e,horizontalPixelRatio:i}){if(null===this.Op||null===this.Yi||!this.Yi.N().borderVisible)return;t.fillStyle=this.Yi.N().borderColor;const s=Math.max(1,Math.floor(this.sv().S*i));let o;o=this.jp?e.width-s:0,t.fillRect(o,0,s,e.height)}dv(t){if(null===this.Op||null===this.Yi)return;const e=this.Yi.Da(),i=this.Yi.N(),s=this.sv(),o=this.jp?this.Op.width-s.C:0;i.borderVisible&&i.ticksVisible&&t.useBitmapCoordinateSpace(({context:t,horizontalPixelRatio:r,verticalPixelRatio:n})=>{t.fillStyle=i.borderColor;const a=Math.max(1,Math.floor(n)),l=Math.floor(.5*n),h=Math.round(s.C*r);t.beginPath();for(const i of e)t.rect(Math.floor(o*r),Math.round(i.Pa*n)-l,h,a);t.fill()}),t.useMediaCoordinateSpace(({context:t})=>{t.font=this.ev(),t.fillStyle=i.textColor??this.Ml.textColor,t.textAlign=this.jp?"right":"left",t.textBaseline="middle";const r=this.jp?Math.round(o-s.B):Math.round(o+s.C+s.B),n=e.map(e=>this.Fp.Di(t,e.Za));for(let i=e.length;i--;){const s=e[i];t.fillText(s.Za,r,s.Pa+n[i])}})}ov(){if(null===this.Op||null===this.Yi)return;let t=this.Op.height/2;const e=[],i=this.Yi.Dt().slice(),s=this.Pt.ap(),o=this.sv();this.Yi===s.$n()&&this.Pt.ap().Dt().forEach(t=>{s.Un(t)&&i.push(t)});const r=this.Yi.Ma()[0],n=this.Yi;i.forEach(i=>{const o=i.Ws(s,n);o.forEach(t=>{t.Wi(null),t.Hi()&&e.push(t)}),r===i&&o.length>0&&(t=o[0].Ii())}),e.forEach(t=>t.Wi(t.Ii())),this.Yi.N().alignLabels&&this.mv(e,o,t)}mv(t,e,i){if(null===this.Op)return;const s=t.filter(t=>t.Ii()<=i),o=t.filter(t=>t.Ii()>i);s.sort((t,e)=>e.Ii()-t.Ii()),s.length&&o.length&&o.push(s[0]),o.sort((t,e)=>t.Ii()-e.Ii());for(const i of t){const t=Math.floor(i.$t(e)/2),s=i.Ii();s>-t&&s<t&&i.Wi(t),s>this.Op.height-t&&s<this.Op.height+t&&i.Wi(this.Op.height-t)}Qd(s,1,this.Op.height,e),Qd(o,-1,this.Op.height,e)}fv(t){if(null===this.Op)return;const e=this.rv(),i=this.sv(),s=this.jp?"right":"left";e.forEach(e=>{e.Ui()&&e.Tt(Nl(this.Yi)).nt(t,i,this.Fp,s)})}pv(t){if(null===this.Op||null===this.Yi)return;const e=this.Pt.qp().Qt(),i=[],s=this.Pt.ap(),o=e.uc().Ws(s,this.Yi);o.length&&i.push(o);const r=this.sv(),n=this.jp?"right":"left";i.forEach(e=>{e.forEach(e=>{e.Tt(Nl(this.Yi)).nt(t,r,this.Fp,n)})})}vv(t){this.jf.style.cursor=1===t?"ns-resize":"default"}_l(){const t=this.nv();this.Hp<t&&this.Pt.qp().Qt().Ih(),this.Hp=t}ev(){return Xl(this.Ml.fontSize,this.Ml.fontFamily)}}function Xd(t,e){return t.Jh?.(e)??[]}function Zd(t,e){return t.Fs?.(e)??[]}function tu(t,e){return t.us?.(e)??[]}function eu(t,e){return t.Xh?.(e)??[]}class iu{constructor(t,e){this.Op=zl({width:0,height:0}),this.wv=null,this.gv=null,this.Mv=null,this.bv=null,this.Sv=!1,this.xv=new Hl,this.Cv=new Hl,this.Pv=0,this.yv=!1,this.kv=null,this.Tv=!1,this.Rv=null,this.Dv=null,this.Up=!1,this.$p=()=>{this.Up||null===this.Vv||this.ts().ar()},this.Yp=()=>{this.Up||null===this.Vv||this.ts().ar()},this.Vp=t,this.Vv=e,this.Vv.t_().i(this.Bv.bind(this),this,!0),this.Iv=document.createElement("td"),this.Iv.style.padding="0",this.Iv.style.position="relative";const i=document.createElement("div");i.style.width="100%",i.style.height="100%",i.style.position="relative",i.style.overflow="hidden",this.Ev=document.createElement("td"),this.Ev.style.padding="0",this.Av=document.createElement("td"),this.Av.style.padding="0",this.Iv.appendChild(i),this.Gp=Wd(i,zl({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p);const s=this.Gp.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.Jp=Wd(i,zl({width:16,height:16})),this.Jp.subscribeSuggestedBitmapSizeChanged(this.Yp);const o=this.Jp.canvasElement;o.style.position="absolute",o.style.zIndex="2",o.style.left="0",o.style.top="0",this.Yf=document.createElement("tr"),this.Yf.appendChild(this.Ev),this.Yf.appendChild(this.Iv),this.Yf.appendChild(this.Av),this.zv(),this.Nf=new Ld(this.Jp.canvasElement,this,{af:()=>null===this.kv&&!this.Vp.N().handleScroll.vertTouchDrag,lf:()=>null===this.kv&&!this.Vp.N().handleScroll.horzTouchDrag})}m(){null!==this.wv&&this.wv.m(),null!==this.gv&&this.gv.m(),this.Mv=null,this.Jp.unsubscribeSuggestedBitmapSizeChanged(this.Yp),Yd(this.Jp.canvasElement),this.Jp.dispose(),this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Yd(this.Gp.canvasElement),this.Gp.dispose(),null!==this.Vv&&(this.Vv.t_().u(this),this.Vv.m()),this.Nf.m()}ap(){return Nl(this.Vv)}Lv(t){null!==this.Vv&&this.Vv.t_().u(this),this.Vv=t,null!==this.Vv&&this.Vv.t_().i(iu.prototype.Bv.bind(this),this,!0),this.zv(),this.Vp.$f().indexOf(this)===this.Vp.$f().length-1?(this.Mv=this.Mv??new Ud(this.Iv,this.Vp),this.Mv.yt()):(this.Mv?.Ip(),this.Mv=null)}qp(){return this.Vp}Zf(){return this.Yf}zv(){if(null!==this.Vv&&(this.Ov(),0!==this.ts().js().length)){if(null!==this.wv){const t=this.Vv.Wo();this.wv._s(Nl(t))}if(null!==this.gv){const t=this.Vv.Ho();this.gv._s(Nl(t))}}}Nv(){null!==this.wv&&this.wv.yt(),null!==this.gv&&this.gv.yt()}Bo(){return null!==this.Vv?this.Vv.Bo():0}Io(t){this.Vv&&this.Vv.Io(t)}sf(t){if(!this.Vv)return;this.Fv();const e=t.localX,i=t.localY;this.Wv(e,i,t)}Sf(t){this.Fv(),this.Hv(),this.Wv(t.localX,t.localY,t)}nf(t){if(!this.Vv)return;this.Fv();const e=t.localX,i=t.localY;this.Wv(e,i,t)}mf(t){null!==this.Vv&&(this.Fv(),this.Uv(t))}Xd(t){null!==this.Vv&&this.$v(this.Cv,t)}qd(t){this.Xd(t)}cf(t){this.Fv(),this.qv(t),this.Wv(t.localX,t.localY,t)}vf(t){null!==this.Vv&&(this.Fv(),this.yv=!1,this.Yv(t))}pf(t){null!==this.Vv&&this.Uv(t)}If(t){if(this.yv=!0,null===this.kv){const e={x:t.localX,y:t.localY};this.jv(e,e,t)}}Bf(t){null!==this.Vv&&(this.Fv(),this.Vv.Qt().lc(null),this.Kv())}Xv(){return this.xv}Zv(){return this.Cv}yf(){this.Pv=1,this.ts().hn()}kf(t,e){if(!this.Vp.N().handleScale.pinch)return;const i=5*(e-this.Pv);this.Pv=e,this.ts().bc(t._t,i)}Mf(t){this.yv=!1,this.Tv=null!==this.kv,this.Hv();const e=this.ts().uc();null!==this.kv&&e.Vt()&&(this.Rv={x:e.si(),y:e.ni()},this.kv={x:t.localX,y:t.localY})}_f(t){if(null===this.Vv)return;const e=t.localX,i=t.localY;if(null===this.kv)this.qv(t);else{this.Tv=!1;const s=Nl(this.Rv),o=s.x+(e-this.kv.x),r=s.y+(i-this.kv.y);this.Wv(o,r,t)}}ff(t){0===this.qp().N().trackingMode.exitMode&&(this.Tv=!0),this.Gv(),this.Yv(t)}jn(t,e){const i=this.Vv;return null===i?null:Xc(i,t,e)}Jv(t,e){Nl("left"===e?this.wv:this.gv).hv(zl({width:t,height:this.Op.height}))}Gf(){return this.Op}hv(t){$l(this.Op,t)||(this.Op=t,this.Up=!0,this.Gp.resizeCanvasElement(t),this.Jp.resizeCanvasElement(t),this.Up=!1,this.Iv.style.width=t.width+"px",this.Iv.style.height=t.height+"px")}Qv(){const t=Nl(this.Vv);t.Fo(t.Wo()),t.Fo(t.Ho());for(const e of t.Ma())if(t.Un(e)){const i=e.Ft();null!==i&&t.Fo(i),e.Ns()}for(const e of t.s_())e.Ns()}Jf(){return this.Gp.bitmapSize}Qf(t,e,i,s){const o=this.Jf();if(o.width>0&&o.height>0&&(t.drawImage(this.Gp.canvasElement,e,i),s)){const s=this.Jp.canvasElement;null!==t&&t.drawImage(s,e,i)}}lv(t){if(0===t)return;if(null===this.Vv)return;t>1&&this.Qv(),null!==this.wv&&this.wv.lv(t),null!==this.gv&&this.gv.lv(t);const e={colorSpace:this.Vp.N().layout.colorSpace};if(1!==t){this.Gp.applySuggestedBitmapSize();const t=Al(this.Gp,e);null!==t&&(t.useBitmapCoordinateSpace(t=>{this._v(t)}),this.Vv&&(this.tm(t,Xd),this.im(t),this.tm(t,Zd),this.tm(t,tu)))}this.Jp.applySuggestedBitmapSize();const i=Al(this.Jp,e);null!==i&&(i.useBitmapCoordinateSpace(({context:t,bitmapSize:e})=>{t.clearRect(0,0,e.width,e.height)}),this.sm(i),this.tm(i,eu),this.tm(i,tu))}nm(){return this.wv}rm(){return this.gv}cv(t,e){this.tm(t,e)}Bv(){null!==this.Vv&&this.Vv.t_().u(this),this.Vv=null}Uv(t){this.$v(this.xv,t)}$v(t,e){const i=e.localX,s=e.localY;t.v()&&t.p(this.ts().Et().cu(i),{x:i,y:s},e)}_v({context:t,bitmapSize:e}){const{width:i,height:s}=e,o=this.ts(),r=o.$(),n=o.Wc();r===n?dh(t,0,0,i,s,n):fh(t,0,0,i,s,r,n)}im(t){const e=Nl(this.Vv),i=e.i_().lr().Tt(e);null!==i&&i.nt(t,!1)}sm(t){this.hm(t,Zd,jd,this.ts().uc())}tm(t,e){const i=Nl(this.Vv),s=i.Dt(),o=i.s_();for(const i of o)this.hm(t,e,qd,i);for(const i of s)this.hm(t,e,qd,i);for(const i of o)this.hm(t,e,jd,i);for(const i of s)this.hm(t,e,jd,i)}hm(t,e,i,s){const o=Nl(this.Vv),r=o.Qt().ac(),n=null!==r&&r.n_===s,a=null!==r&&n&&void 0!==r.e_?r.e_.Xn:void 0;Gd(e,e=>i(e,t,n,a),s,o)}Ov(){if(null===this.Vv)return;const t=this.Vp,e=this.Vv.Wo().N().visible,i=this.Vv.Ho().N().visible;e||null===this.wv||(this.Ev.removeChild(this.wv.Zf()),this.wv.m(),this.wv=null),i||null===this.gv||(this.Av.removeChild(this.gv.Zf()),this.gv.m(),this.gv=null);const s=t.Qt().Bc();e&&null===this.wv&&(this.wv=new Jd(this,t.N(),s,"left"),this.Ev.appendChild(this.wv.Zf())),i&&null===this.gv&&(this.gv=new Jd(this,t.N(),s,"right"),this.Av.appendChild(this.gv.Zf()))}am(t){return t.Ef&&this.yv||null!==this.kv}lm(t){return Math.max(0,Math.min(t,this.Op.width-1))}om(t){return Math.max(0,Math.min(t,this.Op.height-1))}Wv(t,e,i){this.ts().Tc(this.lm(t),this.om(e),i,Nl(this.Vv))}Kv(){this.ts().Dc()}Gv(){this.Tv&&(this.kv=null,this.Kv())}jv(t,e,i){this.kv=t,this.Tv=!1,this.Wv(e.x,e.y,i);const s=this.ts().uc();this.Rv={x:s.si(),y:s.ni()}}ts(){return this.Vp.Qt()}Yv(t){if(!this.Sv)return;const e=this.ts(),i=this.ap();if(e.Ko(i,i.ks()),this.bv=null,this.Sv=!1,e.Pc(),null!==this.Dv){const t=performance.now(),i=e.Et();this.Dv.le(i.gu(),t),this.Dv.Ru(t)||e._n(this.Dv)}}Fv(){this.kv=null}Hv(){if(this.Vv){if(this.ts().hn(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)Nl(document.activeElement).blur();else{const t=document.getSelection();null!==t&&t.removeAllRanges()}!this.Vv.ks().Ki()&&this.ts().Et().Ki()}}qv(t){if(null===this.Vv)return;const e=this.ts(),i=e.Et();if(i.Ki())return;const s=this.Vp.N(),o=s.handleScroll,r=s.kineticScroll;if((!o.pressedMouseMove||t.Ef)&&(!o.horzTouchDrag&&!o.vertTouchDrag||!t.Ef))return;const n=this.Vv.ks(),a=performance.now();if(null!==this.bv||this.am(t)||(this.bv={x:t.clientX,y:t.clientY,rd:a,_m:t.localX,um:t.localY}),null!==this.bv&&!this.Sv&&(this.bv.x!==t.clientX||this.bv.y!==t.clientY)){if(t.Ef&&r.touch||!t.Ef&&r.mouse){const t=i.mu();this.Dv=new Hd(.2/t,7/t,.997,15/t),this.Dv.Pp(i.gu(),this.bv.rd)}else this.Dv=null;n.Ki()||e.Yo(this.Vv,n,t.localY),e.xc(t.localX),this.Sv=!0}this.Sv&&(n.Ki()||e.jo(this.Vv,n,t.localY),e.Cc(t.localX),null!==this.Dv&&this.Dv.Pp(i.gu(),a))}}class su{constructor(t,e,i,s,o){this.xt=!0,this.Op=zl({width:0,height:0}),this.$p=()=>this.lv(3),this.jp="left"===t,this.Ju=i.Bc,this.Ps=e,this.dm=s,this.fm=o,this.jf=document.createElement("div"),this.jf.style.width="25px",this.jf.style.height="100%",this.jf.style.overflow="hidden",this.Gp=Wd(this.jf,zl({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p)}m(){this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Yd(this.Gp.canvasElement),this.Gp.dispose()}Zf(){return this.jf}Gf(){return this.Op}hv(t){$l(this.Op,t)||(this.Op=t,this.Gp.resizeCanvasElement(t),this.jf.style.width=`${t.width}px`,this.jf.style.height=`${t.height}px`,this.xt=!0)}lv(t){if(t<3&&!this.xt)return;if(0===this.Op.width||0===this.Op.height)return;this.xt=!1,this.Gp.applySuggestedBitmapSize();const e=Al(this.Gp,{colorSpace:this.Ps.layout.colorSpace});null!==e&&e.useBitmapCoordinateSpace(t=>{this._v(t),this.uv(t)})}Jf(){return this.Gp.bitmapSize}Qf(t,e,i){const s=this.Jf();s.width>0&&s.height>0&&t.drawImage(this.Gp.canvasElement,e,i)}uv({context:t,bitmapSize:e,horizontalPixelRatio:i,verticalPixelRatio:s}){if(!this.dm())return;t.fillStyle=this.Ps.timeScale.borderColor;const o=Math.floor(this.Ju.N().S*i),r=Math.floor(this.Ju.N().S*s),n=this.jp?e.width-o:0;t.fillRect(n,0,o,r)}_v({context:t,bitmapSize:e}){dh(t,0,0,e.width,e.height,this.fm())}}function ou(t){return e=>e.ia?.(t)??[]}const ru=ou("normal"),nu=ou("top"),au=ou("bottom");class lu{constructor(t,e){this.pm=null,this.vm=null,this.M=null,this.wm=!1,this.Op=zl({width:0,height:0}),this.gm=new Hl,this.Fp=new Ah(5),this.Up=!1,this.$p=()=>{this.Up||this.Vp.Qt().ar()},this.Yp=()=>{this.Up||this.Vp.Qt().ar()},this.Vp=t,this.o_=e,this.Ps=t.N().layout,this.kp=document.createElement("tr"),this.Mm=document.createElement("td"),this.Mm.style.padding="0",this.bm=document.createElement("td"),this.bm.style.padding="0",this.jf=document.createElement("td"),this.jf.style.height="25px",this.jf.style.padding="0",this.Sm=document.createElement("div"),this.Sm.style.width="100%",this.Sm.style.height="100%",this.Sm.style.position="relative",this.Sm.style.overflow="hidden",this.jf.appendChild(this.Sm),this.Gp=Wd(this.Sm,zl({width:16,height:16})),this.Gp.subscribeSuggestedBitmapSizeChanged(this.$p);const i=this.Gp.canvasElement;i.style.position="absolute",i.style.zIndex="1",i.style.left="0",i.style.top="0",this.Jp=Wd(this.Sm,zl({width:16,height:16})),this.Jp.subscribeSuggestedBitmapSizeChanged(this.Yp);const s=this.Jp.canvasElement;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.kp.appendChild(this.Mm),this.kp.appendChild(this.jf),this.kp.appendChild(this.bm),this.xm(),this.Vp.Qt().Vo().i(this.xm.bind(this),this),this.Nf=new Ld(this.Jp.canvasElement,this,{af:()=>!0,lf:()=>!this.Vp.N().handleScroll.horzTouchDrag})}m(){this.Nf.m(),null!==this.pm&&this.pm.m(),null!==this.vm&&this.vm.m(),this.Jp.unsubscribeSuggestedBitmapSizeChanged(this.Yp),Yd(this.Jp.canvasElement),this.Jp.dispose(),this.Gp.unsubscribeSuggestedBitmapSizeChanged(this.$p),Yd(this.Gp.canvasElement),this.Gp.dispose()}Zf(){return this.kp}Cm(){return this.pm}Pm(){return this.vm}Sf(t){if(this.wm)return;this.wm=!0;const e=this.Vp.Qt();!e.Et().Ki()&&this.Vp.N().handleScale.axisPressedMouseMove.time&&e.Mc(t.localX)}Mf(t){this.Sf(t)}xf(){const t=this.Vp.Qt();!t.Et().Ki()&&this.wm&&(this.wm=!1,this.Vp.N().handleScale.axisPressedMouseMove.time&&t.kc())}cf(t){const e=this.Vp.Qt();!e.Et().Ki()&&this.Vp.N().handleScale.axisPressedMouseMove.time&&e.yc(t.localX)}_f(t){this.cf(t)}vf(){this.wm=!1;const t=this.Vp.Qt();t.Et().Ki()&&!this.Vp.N().handleScale.axisPressedMouseMove.time||t.kc()}ff(){this.vf()}Xd(){this.Vp.N().handleScale.axisDoubleClickReset.time&&this.Vp.Qt().cn()}qd(){this.Xd()}sf(){this.Vp.Qt().N().handleScale.axisPressedMouseMove.time&&this.vv(1)}Bf(){this.vv(0)}Gf(){return this.Op}ym(){return this.gm}km(t,e,i){$l(this.Op,t)||(this.Op=t,this.Up=!0,this.Gp.resizeCanvasElement(t),this.Jp.resizeCanvasElement(t),this.Up=!1,this.jf.style.width=`${t.width}px`,this.jf.style.height=`${t.height}px`,this.gm.p(t)),null!==this.pm&&this.pm.hv(zl({width:e,height:t.height})),null!==this.vm&&this.vm.hv(zl({width:i,height:t.height}))}Tm(){const t=this.Rm();return Math.ceil(t.S+t.C+t.P+t.A+t.V+t.Dm)}yt(){this.Vp.Qt().Et().Da()}Jf(){return this.Gp.bitmapSize}Qf(t,e,i,s){const o=this.Jf();if(o.width>0&&o.height>0&&(t.drawImage(this.Gp.canvasElement,e,i),s)){const s=this.Jp.canvasElement;t.drawImage(s,e,i)}}lv(t){if(0===t)return;const e={colorSpace:this.Ps.colorSpace};if(1!==t){this.Gp.applySuggestedBitmapSize();const i=Al(this.Gp,e);null!==i&&(i.useBitmapCoordinateSpace(t=>{this._v(t),this.uv(t),this.Vm(i,au)}),this.dv(i),this.Vm(i,ru)),null!==this.pm&&this.pm.lv(t),null!==this.vm&&this.vm.lv(t)}this.Jp.applySuggestedBitmapSize();const i=Al(this.Jp,e);null!==i&&(i.useBitmapCoordinateSpace(({context:t,bitmapSize:e})=>{t.clearRect(0,0,e.width,e.height)}),this.Bm([...this.Vp.Qt().js(),this.Vp.Qt().uc()],i),this.Vm(i,nu))}Vm(t,e){const i=this.Vp.Qt().js();for(const s of i)Gd(e,e=>qd(e,t,!1,void 0),s,void 0);for(const s of i)Gd(e,e=>jd(e,t,!1,void 0),s,void 0)}_v({context:t,bitmapSize:e}){dh(t,0,0,e.width,e.height,this.Vp.Qt().Wc())}uv({context:t,bitmapSize:e,verticalPixelRatio:i}){if(this.Vp.N().timeScale.borderVisible){t.fillStyle=this.Im();const s=Math.max(1,Math.floor(this.Rm().S*i));t.fillRect(0,0,e.width,s)}}dv(t){const e=this.Vp.Qt().Et(),i=e.Da();if(!i||0===i.length)return;const s=this.o_.maxTickMarkWeight(i),o=this.Rm(),r=e.N();r.borderVisible&&r.ticksVisible&&t.useBitmapCoordinateSpace(({context:t,horizontalPixelRatio:e,verticalPixelRatio:s})=>{t.strokeStyle=this.Im(),t.fillStyle=this.Im();const r=Math.max(1,Math.floor(e)),n=Math.floor(.5*e);t.beginPath();const a=Math.round(o.C*s);for(let s=i.length;s--;){const o=Math.round(i[s].coord*e);t.rect(o-n,0,r,a)}t.fill()}),t.useMediaCoordinateSpace(({context:t})=>{const e=o.S+o.C+o.A+o.P/2;t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.H(),t.font=this.ev();for(const o of i)if(o.weight<s){const i=o.needAlignCoordinate?this.Em(t,o.coord,o.label):o.coord;t.fillText(o.label,i,e)}this.Vp.N().timeScale.allowBoldLabels&&(t.font=this.Am());for(const o of i)if(o.weight>=s){const i=o.needAlignCoordinate?this.Em(t,o.coord,o.label):o.coord;t.fillText(o.label,i,e)}})}Em(t,e,i){const s=this.Fp.Vi(t,i),o=s/2,r=Math.floor(e-o)+.5;return r<0?e+=Math.abs(0-r):r+s>this.Op.width&&(e-=Math.abs(this.Op.width-(r+s))),e}Bm(t,e){const i=this.Rm();for(const s of t)for(const t of s.cs())t.Tt().nt(e,i)}Im(){return this.Vp.N().timeScale.borderColor}H(){return this.Ps.textColor}F(){return this.Ps.fontSize}ev(){return Xl(this.F(),this.Ps.fontFamily)}Am(){return Xl(this.F(),this.Ps.fontFamily,"bold")}Rm(){null===this.M&&(this.M={S:1,L:NaN,A:NaN,V:NaN,Ji:NaN,C:5,P:NaN,k:"",Gi:new Ah,Dm:0});const t=this.M,e=this.ev();if(t.k!==e){const i=this.F();t.P=i,t.k=e,t.A=3*i/12,t.V=3*i/12,t.Ji=9*i/12,t.L=0,t.Dm=4*i/12,t.Gi.Bn()}return this.M}vv(t){this.jf.style.cursor=1===t?"ew-resize":"default"}xm(){const t=this.Vp.Qt(),e=t.N();e.leftPriceScale.visible||null===this.pm||(this.Mm.removeChild(this.pm.Zf()),this.pm.m(),this.pm=null),e.rightPriceScale.visible||null===this.vm||(this.bm.removeChild(this.vm.Zf()),this.vm.m(),this.vm=null);const i={Bc:this.Vp.Qt().Bc()},s=()=>e.leftPriceScale.borderVisible&&t.Et().N().borderVisible,o=()=>t.Wc();e.leftPriceScale.visible&&null===this.pm&&(this.pm=new su("left",e,i,s,o),this.Mm.appendChild(this.pm.Zf())),e.rightPriceScale.visible&&null===this.vm&&(this.vm=new su("right",e,i,s,o),this.bm.appendChild(this.vm.Zf()))}}const hu=!!Md&&!!navigator.userAgentData&&navigator.userAgentData.brands.some(t=>t.brand.includes("Chromium"))&&!!Md&&(navigator?.userAgentData?.platform?"Windows"===navigator.userAgentData.platform:navigator.userAgent.toLowerCase().indexOf("win")>=0);class cu{constructor(t,e,i){var s;this.zm=[],this.Lm=[],this.Om=0,this.il=0,this.Mo=0,this.Nm=0,this.Fm=0,this.Wm=null,this.Hm=!1,this.xv=new Hl,this.Cv=new Hl,this.Xu=new Hl,this.Um=null,this.$m=null,this.Dp=t,this.Ps=e,this.o_=i,this.kp=document.createElement("div"),this.kp.classList.add("tv-lightweight-charts"),this.kp.style.overflow="hidden",this.kp.style.direction="ltr",this.kp.style.width="100%",this.kp.style.height="100%",(s=this.kp).style.userSelect="none",s.style.webkitUserSelect="none",s.style.msUserSelect="none",s.style.MozUserSelect="none",s.style.webkitTapHighlightColor="transparent",this.qm=document.createElement("table"),this.qm.setAttribute("cellspacing","0"),this.kp.appendChild(this.qm),this.Ym=this.jm.bind(this),du(this.Ps)&&this.Km(!0),this.ts=new dd(this.Gu.bind(this),this.Ps,i),this.Qt().cc().i(this.Xm.bind(this),this),this.Zm=new lu(this,this.o_),this.qm.appendChild(this.Zm.Zf());const o=e.autoSize&&this.Gm();let r=this.Ps.width,n=this.Ps.height;if(o||0===r||0===n){const e=t.getBoundingClientRect();r=r||e.width,n=n||e.height}this.Jm(r,n),this.Qm(),t.appendChild(this.kp),this.tw(),this.ts.Et().Iu().i(this.ts.Ih.bind(this.ts),this),this.ts.Vo().i(this.ts.Ih.bind(this.ts),this)}Qt(){return this.ts}N(){return this.Ps}$f(){return this.zm}iw(){return this.Zm}m(){this.Km(!1),0!==this.Om&&window.cancelAnimationFrame(this.Om),this.ts.cc().u(this),this.ts.Et().Iu().u(this),this.ts.Vo().u(this),this.ts.m();for(const t of this.zm)this.qm.removeChild(t.Zf()),t.Xv().u(this),t.Zv().u(this),t.m();this.zm=[];for(const t of this.Lm)this.sw(t);this.Lm=[],Nl(this.Zm).m(),null!==this.kp.parentElement&&this.kp.parentElement.removeChild(this.kp),this.Xu.m(),this.xv.m(),this.Cv.m(),this.nw()}Jm(t,e,i=!1){if(this.il===e&&this.Mo===t)return;const s=function(t){const e=Math.floor(t.width),i=Math.floor(t.height);return zl({width:e-e%2,height:i-i%2})}(zl({width:t,height:e}));this.il=s.height,this.Mo=s.width;const o=this.il+"px",r=this.Mo+"px";Nl(this.kp).style.height=o,Nl(this.kp).style.width=r,this.qm.style.height=o,this.qm.style.width=r,i?this.ew(Sh.gn(),performance.now()):this.ts.Ih()}lv(t){void 0===t&&(t=Sh.gn());for(let e=0;e<this.zm.length;e++)this.zm[e].lv(t.en(e).tn);this.Ps.timeScale.visible&&this.Zm.lv(t.nn())}hr(t){const e=du(this.Ps);this.ts.hr(t);const i=du(this.Ps);i!==e&&this.Km(i),t.layout?.panes&&this.rw(),this.tw(),this.hw(t)}Xv(){return this.xv}Zv(){return this.Cv}cc(){return this.Xu}aw(t=!1){null!==this.Wm&&(this.ew(this.Wm,performance.now()),this.Wm=null);const e=this.lw(null),i=document.createElement("canvas");i.width=e.width,i.height=e.height;const s=Nl(i.getContext("2d"));return this.lw(s,t),i}ow(t){return"left"===t&&!this._w()||"right"===t&&!this.uw()||0===this.zm.length?0:Nl("left"===t?this.zm[0].nm():this.zm[0].rm()).av()}cw(){return this.Ps.autoSize&&null!==this.Um}ip(){return this.kp}dw(t){this.$m=t,this.$m?this.ip().style.setProperty("cursor",t):this.ip().style.removeProperty("cursor")}fw(){return this.$m}pw(t){return Rl(this.zm[t]).Gf()}rw(){this.Lm.forEach(t=>{t.yt()})}hw(t){(void 0!==t.autoSize||!this.Um||void 0===t.width&&void 0===t.height)&&(t.autoSize&&!this.Um&&this.Gm(),!1===t.autoSize&&null!==this.Um&&this.nw(),t.autoSize||void 0===t.width&&void 0===t.height||this.Jm(t.width||this.Mo,t.height||this.il))}lw(t,e){let i=0,s=0;const o=this.zm[0],r=(i,s)=>{let o=0;for(let r=0;r<this.zm.length;r++){const n=this.zm[r],a=Nl("left"===i?n.nm():n.rm()),l=a.Jf();if(null!==t&&a.Qf(t,s,o,e),o+=l.height,r<this.zm.length-1){const e=this.Lm[r],i=e.Jf();null!==t&&e.Qf(t,s,o),o+=i.height}}};this._w()&&(r("left",0),i+=Nl(o.nm()).Jf().width);for(let o=0;o<this.zm.length;o++){const r=this.zm[o],n=r.Jf();if(null!==t&&r.Qf(t,i,s,e),s+=n.height,o<this.zm.length-1){const e=this.Lm[o],r=e.Jf();null!==t&&e.Qf(t,i,s),s+=r.height}}i+=o.Jf().width,this.uw()&&(r("right",i),i+=Nl(o.rm()).Jf().width);const n=(e,i,s)=>{Nl("left"===e?this.Zm.Cm():this.Zm.Pm()).Qf(Nl(t),i,s)};if(this.Ps.timeScale.visible){const i=this.Zm.Jf();if(null!==t){let r=0;this._w()&&(n("left",r,s),r=Nl(o.nm()).Jf().width),this.Zm.Qf(t,r,s,e),r+=i.width,this.uw()&&n("right",r,s)}s+=i.height}return zl({width:i,height:s})}mw(){let t=0,e=0,i=0;for(const s of this.zm)this._w()&&(e=Math.max(e,Nl(s.nm()).nv(),this.Ps.leftPriceScale.minimumWidth)),this.uw()&&(i=Math.max(i,Nl(s.rm()).nv(),this.Ps.rightPriceScale.minimumWidth)),t+=s.Bo();e=Ad(e),i=Ad(i);const s=this.Mo,o=this.il,r=Math.max(s-e-i,0),n=1*this.Lm.length,a=this.Ps.timeScale.visible;let l=a?Math.max(this.Zm.Tm(),this.Ps.timeScale.minimumHeight):0;var h;l=(h=l)+h%2;const c=n+l,d=o<c?0:o-c,u=d/t;let p=0;const f=window.devicePixelRatio||1;for(let t=0;t<this.zm.length;++t){const s=this.zm[t];s.Lv(this.ts.$s()[t]);let o=0,n=0;n=t===this.zm.length-1?Math.ceil((d-p)*f)/f:Math.round(s.Bo()*u*f)/f,o=Math.max(n,2),p+=o,s.hv(zl({width:r,height:o})),this._w()&&s.Jv(e,"left"),this.uw()&&s.Jv(i,"right"),s.ap()&&this.ts.dc(s.ap(),o)}this.Zm.km(zl({width:a?r:0,height:l}),a?e:0,a?i:0),this.ts.Eo(r),this.Nm!==e&&(this.Nm=e),this.Fm!==i&&(this.Fm=i)}Km(t){t?this.kp.addEventListener("wheel",this.Ym,{passive:!1}):this.kp.removeEventListener("wheel",this.Ym)}ww(t){switch(t.deltaMode){case t.DOM_DELTA_PAGE:return 120;case t.DOM_DELTA_LINE:return 32}return hu?1/window.devicePixelRatio:1}jm(t){if(!(0!==t.deltaX&&this.Ps.handleScroll.mouseWheel||0!==t.deltaY&&this.Ps.handleScale.mouseWheel))return;const e=this.ww(t),i=e*t.deltaX/100,s=-e*t.deltaY/100;if(t.cancelable&&t.preventDefault(),0!==s&&this.Ps.handleScale.mouseWheel){const e=Math.sign(s)*Math.min(1,Math.abs(s)),i=t.clientX-this.kp.getBoundingClientRect().left;this.Qt().bc(i,e)}0!==i&&this.Ps.handleScroll.mouseWheel&&this.Qt().Sc(-80*i)}ew(t,e){const i=t.nn();3===i&&this.gw(),3!==i&&2!==i||(this.Mw(t),this.bw(t,e),this.Zm.yt(),this.zm.forEach(t=>{t.Nv()}),3===this.Wm?.nn()&&(this.Wm.vn(t),this.gw(),this.Mw(this.Wm),this.bw(this.Wm,e),t=this.Wm,this.Wm=null)),this.lv(t)}bw(t,e){for(const i of t.pn())this.mn(i,e)}Mw(t){const e=this.ts.$s();for(let i=0;i<e.length;i++)t.en(i).sn&&e[i].Go()}mn(t,e){const i=this.ts.Et();switch(t.an){case 0:i.Au();break;case 1:i.zu(t.Wt);break;case 2:i.dn(t.Wt);break;case 3:i.fn(t.Wt);break;case 4:i.Su();break;case 5:t.Wt.Ru(e)||i.fn(t.Wt.Du(e))}}Gu(t){null!==this.Wm?this.Wm.vn(t):this.Wm=t,this.Hm||(this.Hm=!0,this.Om=window.requestAnimationFrame(t=>{if(this.Hm=!1,this.Om=0,null!==this.Wm){const e=this.Wm;this.Wm=null,this.ew(e,t);for(const i of e.pn())if(5===i.an&&!i.Wt.Ru(t)){this.Qt()._n(i.Wt);break}}}))}gw(){this.Qm()}sw(t){this.qm.removeChild(t.Zf()),t.m()}Qm(){const t=this.ts.$s(),e=t.length,i=this.zm.length;for(let t=e;t<i;t++){const t=Rl(this.zm.pop());this.qm.removeChild(t.Zf()),t.Xv().u(this),t.Zv().u(this),t.m();const e=this.Lm.pop();void 0!==e&&this.sw(e)}for(let s=i;s<e;s++){const e=new iu(this,t[s]);if(e.Xv().i(this.Sw.bind(this,e),this),e.Zv().i(this.xw.bind(this,e),this),this.zm.push(e),s>0){const t=new Rd(this,s-1,s);this.Lm.push(t),this.qm.insertBefore(t.Zf(),this.Zm.Zf())}this.qm.insertBefore(e.Zf(),this.Zm.Zf())}for(let i=0;i<e;i++){const e=t[i],s=this.zm[i];s.ap()!==e?s.Lv(e):s.zv()}this.tw(),this.mw()}Cw(t,e,i,s){const o=new Map;let r;if(null!==t&&this.ts.js().forEach(e=>{const i=e.Xs().Fr(t);null!==i&&o.set(e,i)}),null!==t){const e=this.ts.Et().ss(t)?.originalTime;void 0!==e&&(r=e)}const n=this.Qt().ac(),a=null!==n&&n.n_ instanceof _c?n.n_:void 0,l=null!==n&&void 0!==n.e_?n.e_.Kn:void 0,h=this.Pw(s);return{yw:r,Re:t??void 0,kw:e??void 0,Tw:-1!==h?h:void 0,Rw:a,Dw:o,Vw:l,Bw:i??void 0}}Pw(t){let e=-1;if(t)e=this.zm.indexOf(t);else{const t=this.Qt().uc().Us();null!==t&&(e=this.Qt().$s().indexOf(t))}return e}Sw(t,e,i,s){this.xv.p(()=>this.Cw(e,i,s,t))}xw(t,e,i,s){this.Cv.p(()=>this.Cw(e,i,s,t))}Xm(t,e,i){this.dw(this.Qt().ac()?.h_??null),this.Xu.p(()=>this.Cw(t,e,i))}tw(){const t=this.Ps.timeScale.visible?"":"none";this.Zm.Zf().style.display=t}_w(){return this.zm[0].ap().Wo().N().visible}uw(){return this.zm[0].ap().Ho().N().visible}Gm(){return"ResizeObserver"in window&&(this.Um=new ResizeObserver(t=>{const e=t[t.length-1];e&&this.Jm(e.contentRect.width,e.contentRect.height)}),this.Um.observe(this.Dp,{box:"border-box"}),!0)}nw(){null!==this.Um&&this.Um.disconnect(),this.Um=null}}function du(t){return Boolean(t.handleScroll.mouseWheel||t.handleScale.mouseWheel)}function uu(t,e,i,s){const o=i.value,r={Re:e,wt:t,Wt:[o,o,o,o],yw:s};return void 0!==i.color&&(r.R=i.color),r}function pu(t,e,i,s){const o=i.value,r={Re:e,wt:t,Wt:[o,o,o,o],yw:s};return void 0!==i.lineColor&&(r.vt=i.lineColor),void 0!==i.topColor&&(r.mr=i.topColor),void 0!==i.bottomColor&&(r.wr=i.bottomColor),r}function fu(t,e,i,s){const o=i.value,r={Re:e,wt:t,Wt:[o,o,o,o],yw:s};return void 0!==i.topLineColor&&(r.gr=i.topLineColor),void 0!==i.bottomLineColor&&(r.Mr=i.bottomLineColor),void 0!==i.topFillColor1&&(r.br=i.topFillColor1),void 0!==i.topFillColor2&&(r.Sr=i.topFillColor2),void 0!==i.bottomFillColor1&&(r.Cr=i.bottomFillColor1),void 0!==i.bottomFillColor2&&(r.Pr=i.bottomFillColor2),r}function mu(t,e,i,s){const o={Re:e,wt:t,Wt:[i.open,i.high,i.low,i.close],yw:s};return void 0!==i.color&&(o.R=i.color),o}function gu(t,e,i,s){const o={Re:e,wt:t,Wt:[i.open,i.high,i.low,i.close],yw:s};return void 0!==i.color&&(o.R=i.color),void 0!==i.borderColor&&(o.Ht=i.borderColor),void 0!==i.wickColor&&(o.vr=i.wickColor),o}function bu(t,e,i,s,o){const r=Rl(o)(i),n=Math.max(...r),a=Math.min(...r),l=r[r.length-1],h=[l,n,a,l],{time:c,color:d,...u}=i;return{Re:e,wt:t,Wt:h,yw:s,se:u,R:d}}function vu(t){return void 0!==t.Wt}function yu(t,e){return void 0!==e.customValues&&(t.Iw=e.customValues),t}function wu(t){return(e,i,s,o,r,n)=>function(t,e){return e?e(t):function(t){return void 0===t.open&&void 0===t.value}(t)}(s,n)?yu({wt:e,Re:i,yw:o},s):yu(t(e,i,s,o,r),s)}function _u(t){return{Candlestick:wu(gu),Bar:wu(mu),Area:wu(pu),Baseline:wu(fu),Histogram:wu(uu),Line:wu(uu),Custom:wu(bu)}[t]}function xu(t){return{Re:0,Ew:new Map,Hh:t}}function ku(t,e){if(void 0!==t&&0!==t.length)return{Aw:e.key(t[0].wt),zw:e.key(t[t.length-1].wt)}}function Cu(t){let e;return t.forEach(t=>{void 0===e&&(e=t.yw)}),Rl(e)}class Su{constructor(t){this.Lw=new Map,this.Ow=new Map,this.Nw=new Map,this.Fw=[],this.o_=t}m(){this.Lw.clear(),this.Ow.clear(),this.Nw.clear(),this.Fw=[]}Ww(t,e){let i=0!==this.Lw.size,s=!1;const o=this.Ow.get(t);if(void 0!==o)if(1===this.Ow.size)i=!1,s=!0,this.Lw.clear();else for(const e of this.Fw)e.pointData.Ew.delete(t)&&(s=!0);let r=[];if(0!==e.length){const i=e.map(t=>t.time),o=this.o_.createConverterToInternalObj(e),n=_u(t.Rr()),a=t.ca(),l=t.fa();r=e.map((e,r)=>{const h=o(e.time),c=this.o_.key(h);let d=this.Lw.get(c);void 0===d&&(d=xu(h),this.Lw.set(c,d),s=!0);const u=n(h,d.Re,e,i[r],a,l);return d.Ew.set(t,u),u})}i&&this.Hw(),this.Uw(t,r);let n=-1;if(s){const t=[];this.Lw.forEach(e=>{t.push({timeWeight:0,time:e.Hh,pointData:e,originalTime:Cu(e.Ew)})}),t.sort((t,e)=>this.o_.key(t.time)-this.o_.key(e.time)),n=this.$w(t)}return this.qw(t,n,function(t,e,i){const s=ku(t,i),o=ku(e,i);if(void 0!==s&&void 0!==o)return{Yw:!1,zh:s.zw>=o.zw&&s.Aw>=o.Aw}}(this.Ow.get(t),o,this.o_))}Ac(t){return this.Ww(t,[])}jw(t,e,i){const s=e;!function(t){void 0===t.yw&&(t.yw=t.time)}(s),this.o_.preprocessData(e);const o=this.o_.createConverterToInternalObj([e])(e.time),r=this.Nw.get(t);if(!i&&void 0!==r&&this.o_.key(o)<this.o_.key(r))throw new Error(`Cannot update oldest data, last time=${r}, new time=${o}`);let n=this.Lw.get(this.o_.key(o));if(i&&void 0===n)throw new Error("Cannot update non-existing data point when historicalUpdate is true");const a=void 0===n;void 0===n&&(n=xu(o),this.Lw.set(this.o_.key(o),n));const l=_u(t.Rr()),h=t.ca(),c=t.fa(),d=l(o,n.Re,e,s.yw,h,c);n.Ew.set(t,d),i?this.Kw(t,d,n.Re):this.Xw(t,d);const u={zh:vu(d),Yw:i};if(!a)return this.qw(t,-1,u);const p={timeWeight:0,time:n.Hh,pointData:n,originalTime:Cu(n.Ew)},f=Zh(this.Fw,this.o_.key(p.time),(t,e)=>this.o_.key(t.time)<e);this.Fw.splice(f,0,p);for(let t=f;t<this.Fw.length;++t)zu(this.Fw[t].pointData,t);return this.o_.fillWeightsForPoints(this.Fw,f),this.qw(t,f,u)}Zw(t,e){const i=this.Ow.get(t);if(void 0===i||e<=0)return[[],this.Gw()];e=Math.min(e,i.length);const s=i.splice(-e).reverse();0===i.length?this.Nw.delete(t):this.Nw.set(t,i[i.length-1].wt);for(const e of s){const i=this.Lw.get(this.o_.key(e.wt));if(i&&(i.Ew.delete(t),0===i.Ew.size)){this.Lw.delete(this.o_.key(i.Hh)),this.Fw.splice(i.Re,1);for(let t=i.Re;t<this.Fw.length;++t)zu(this.Fw[t].pointData,t)}}return[s,this.qw(t,this.Fw.length-1,{Yw:!1,zh:!1})]}Xw(t,e){let i=this.Ow.get(t);void 0===i&&(i=[],this.Ow.set(t,i));const s=0!==i.length?i[i.length-1]:null;null===s||this.o_.key(e.wt)>this.o_.key(s.wt)?vu(e)&&i.push(e):vu(e)?i[i.length-1]=e:i.splice(-1,1),this.Nw.set(t,e.wt)}Kw(t,e,i){const s=this.Ow.get(t);if(void 0===s)return;const o=Zh(s,i,(t,e)=>t.Re<e);vu(e)?s[o]=e:s.splice(o,1)}Uw(t,e){0!==e.length?(this.Ow.set(t,e.filter(vu)),this.Nw.set(t,e[e.length-1].wt)):(this.Ow.delete(t),this.Nw.delete(t))}Hw(){for(const t of this.Fw)0===t.pointData.Ew.size&&this.Lw.delete(this.o_.key(t.time))}$w(t){let e=-1;for(let i=0;i<this.Fw.length&&i<t.length;++i){const s=this.Fw[i],o=t[i];if(this.o_.key(s.time)!==this.o_.key(o.time)){e=i;break}o.timeWeight=s.timeWeight,zu(o.pointData,i)}if(-1===e&&this.Fw.length!==t.length&&(e=Math.min(this.Fw.length,t.length)),-1===e)return-1;for(let i=e;i<t.length;++i)zu(t[i].pointData,i);return this.o_.fillWeightsForPoints(t,e),this.Fw=t,e}Jw(){if(0===this.Ow.size)return null;let t=0;return this.Ow.forEach(e=>{0!==e.length&&(t=Math.max(t,e[e.length-1].Re))}),t}qw(t,e,i){const s=this.Gw();if(-1!==e)this.Ow.forEach((e,o)=>{s.Oo.set(o,{se:e,Qw:o===t?i:void 0})}),this.Ow.has(t)||s.Oo.set(t,{se:[],Qw:i}),s.Et.tg=this.Fw,s.Et.ig=e;else{const e=this.Ow.get(t);s.Oo.set(t,{se:e||[],Qw:i})}return s}Gw(){return{Oo:new Map,Et:{_u:this.Jw()}}}}function zu(t,e){t.Re=e,t.Ew.forEach(t=>{t.Re=e})}function $u(t,e){return t.wt<e}function Eu(t,e){return e<t.wt}class Mu{constructor(t,e,i){this.sg=!0,this.ng=!0,this.eg=!0,this.rg=[],this.hg=null,this.Jn=t,this.Qn=e,this.ag=i}yt(t){this.sg=!0,"data"===t&&(this.ng=!0),"options"===t&&(this.eg=!0)}Tt(){return this.Jn.Vt()?(this.lg(),null===this.hg?null:this.og):null}_g(){this.rg=this.rg.map(t=>({...t,...this.Jn.Rh().Dr(t.wt)}))}ug(){this.hg=null}lg(){this.ng&&(this.cg(),this.ng=!1),this.eg&&(this._g(),this.eg=!1),this.sg&&(this.dg(),this.sg=!1)}dg(){const t=this.Jn.Ft(),e=this.Qn.Et();if(this.ug(),e.Ki()||t.Ki())return;const i=e.Pe();if(null===i)return;if(0===this.Jn.Xs().zr())return;const s=this.Jn.zt();null!==s&&(this.hg=function(t,e,i){const s=e.Uh(),o=e.bi(),r=Zh(t,s,$u),n=tc(t,o,Eu);if(!i)return{from:r,to:n};let a=r,l=n;return r>0&&r<t.length&&t[r].wt>=s&&(a=r-1),n>0&&n<t.length&&t[n-1].wt<=o&&(l=n+1),{from:a,to:l}}(this.rg,i,this.ag),this.fg(t,e,s.Wt),this.pg())}}class Pu{constructor(t,e){this.vg=t,this.Yi=e}nt(t,e,i){this.vg.draw(t,this.Yi,e,i)}}class Tu extends Mu{constructor(t,e,i){super(t,e,!1),this.sh=i,this.og=new Pu(this.sh.renderer(),e=>{const i=t.zt();return null===i?null:t.Ft().Nt(e,i.Wt)})}da(t){return this.sh.priceValueBuilder(t)}pa(t){return this.sh.isWhitespace(t)}cg(){const t=this.Jn.Rh();this.rg=this.Jn.Xs().Hr().map(e=>({wt:e.Re,_t:NaN,...t.Dr(e.Re),mg:e.se}))}fg(t,e){e.uu(this.rg,Ql(this.hg))}pg(){this.sh.update({bars:this.rg.map(Au),barSpacing:this.Qn.Et().mu(),visibleRange:this.hg},this.Jn.N())}}function Au(t){return{x:t._t,time:t.wt,originalData:t.mg,barColor:t.cr}}const Lu={color:"#2196f3"},Du=(t,e,i)=>{const s=Bl(i);return new Tu(t,e,s)};function Ou(t){const e={value:t.Wt[3],time:t.yw};return void 0!==t.Iw&&(e.customValues=t.Iw),e}function Iu(t){const e=Ou(t);return void 0!==t.R&&(e.color=t.R),e}function Vu(t){const e=Ou(t);return void 0!==t.vt&&(e.lineColor=t.vt),void 0!==t.mr&&(e.topColor=t.mr),void 0!==t.wr&&(e.bottomColor=t.wr),e}function Fu(t){const e=Ou(t);return void 0!==t.gr&&(e.topLineColor=t.gr),void 0!==t.Mr&&(e.bottomLineColor=t.Mr),void 0!==t.br&&(e.topFillColor1=t.br),void 0!==t.Sr&&(e.topFillColor2=t.Sr),void 0!==t.Cr&&(e.bottomFillColor1=t.Cr),void 0!==t.Pr&&(e.bottomFillColor2=t.Pr),e}function Ru(t){const e={open:t.Wt[0],high:t.Wt[1],low:t.Wt[2],close:t.Wt[3],time:t.yw};return void 0!==t.Iw&&(e.customValues=t.Iw),e}function Nu(t){const e=Ru(t);return void 0!==t.R&&(e.color=t.R),e}function Bu(t){const e=Ru(t),{R:i,Ht:s,vr:o}=t;return void 0!==i&&(e.color=i),void 0!==s&&(e.borderColor=s),void 0!==o&&(e.wickColor=o),e}function Hu(t){return{Area:Vu,Line:Iu,Baseline:Fu,Histogram:Iu,Bar:Nu,Candlestick:Bu,Custom:Uu}[t]}function Uu(t){const e=t.yw;return{...t.se,time:e}}const Wu={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1},Yu={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},qu={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:Jl,panes:{enableResize:!0,separatorColor:"#E0E3EB",separatorHoverColor:"rgba(178, 181, 189, 0.2)"},attributionLogo:!0,colorSpace:"srgb",colorParsers:[]},ju={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0,ensureEdgeTickMarksVisible:!1},Gu={rightOffset:0,barSpacing:6,minBarSpacing:.5,maxBarSpacing:0,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0,ignoreWhitespaceIndices:!1};function Ku(){return{addDefaultPane:!0,width:0,height:0,autoSize:!1,layout:qu,crosshair:Wu,grid:Yu,overlayPriceScales:{...ju},leftPriceScale:{...ju,visible:!1},rightPriceScale:{...ju,visible:!0},timeScale:Gu,localization:{locale:Md?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class Qu{constructor(t,e,i){this.Hf=t,this.wg=e,this.gg=i??0}applyOptions(t){this.Hf.Qt().oc(this.wg,t,this.gg)}options(){return this.Yi().N()}width(){return Ch(this.wg)?this.Hf.ow(this.wg):0}setVisibleRange(t){this.setAutoScale(!1),this.Yi().Fl(new Wh(t.from,t.to))}getVisibleRange(){let t,e,i=this.Yi().Qe();if(null===i)return null;if(this.Yi().Ja()){const s=this.Yi().fo(),o=ud(s);i=Fc(i,this.Yi().tl()),t=Number((Math.round(i.$e()/s)*s).toFixed(o)),e=Number((Math.round(i.qe()/s)*s).toFixed(o))}else t=i.$e(),e=i.qe();return{from:t,to:e}}setAutoScale(t){this.applyOptions({autoScale:t})}Yi(){return Nl(this.Hf.Qt()._c(this.wg,this.gg)).Ft}}class Ju{constructor(t,e,i,s){this.Hf=t,this.Pt=i,this.Mg=e,this.bg=s}getHeight(){return this.Pt.$t()}setHeight(t){const e=this.Hf.Qt(),i=e.Uc(this.Pt);e.vc(i,t)}getStretchFactor(){return this.Pt.Bo()}setStretchFactor(t){this.Pt.Io(t),this.Hf.Qt().Ih()}paneIndex(){return this.Hf.Qt().Uc(this.Pt)}moveTo(t){const e=this.paneIndex();e!==t&&(Fl(t>=0&&t<this.Hf.$f().length,"Invalid pane index"),this.Hf.Qt().wc(e,t))}getSeries(){return this.Pt.Oo().map(t=>this.Mg(t))??[]}getHTMLElement(){const t=this.Hf.$f();return t&&0!==t.length&&t[this.paneIndex()]?t[this.paneIndex()].Zf():null}attachPrimitive(t){this.Pt._a(t),t.attached&&t.attached({chart:this.bg,requestUpdate:()=>this.Pt.Qt().Ih()})}detachPrimitive(t){this.Pt.ua(t)}priceScale(t){if(null===this.Pt.Do(t))throw new Error(`Cannot find price scale with id: ${t}`);return new Qu(this.Hf,t,this.paneIndex())}setPreserveEmptyPane(t){this.Pt.zo(t)}preserveEmptyPane(){return this.Pt.Lo()}addCustomSeries(t,e={},i=0){return this.bg.addCustomSeries(t,e,i)}addSeries(t,e={}){return this.bg.addSeries(t,e,this.paneIndex())}}const Xu={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class Zu{constructor(t){this.ir=t}applyOptions(t){this.ir.hr(t)}options(){return this.ir.N()}Sg(){return this.ir}}class tp{constructor(t,e,i,s,o,r){this.xg=new Hl,this.Jn=t,this.Cg=e,this.Pg=i,this.o_=o,this.bg=s,this.yg=r}m(){this.xg.m()}priceFormatter(){return this.Jn.ea()}priceToCoordinate(t){const e=this.Jn.zt();return null===e?null:this.Jn.Ft().Nt(t,e.Wt)}coordinateToPrice(t){const e=this.Jn.zt();return null===e?null:this.Jn.Ft().Ts(t,e.Wt)}barsInLogicalRange(t){if(null===t)return null;const e=new sd(new td(t.from,t.to)).y_(),i=this.Jn.Xs();if(i.Ki())return null;const s=i.Fr(e.Uh(),1),o=i.Fr(e.bi(),-1),r=Nl(i.Lr()),n=Nl(i.Ks());if(null!==s&&null!==o&&s.Re>o.Re)return{barsBefore:t.from-r,barsAfter:n-t.to};const a={barsBefore:null===s||s.Re===r?t.from-r:s.Re-r,barsAfter:null===o||o.Re===n?n-t.to:n-o.Re};return null!==s&&null!==o&&(a.from=s.yw,a.to=o.yw),a}setData(t){this.o_,this.Jn.Rr(),this.Cg.kg(this.Jn,t),this.Tg("full")}update(t,e=!1){this.Jn.Rr(),this.Cg.Rg(this.Jn,t,e),this.Tg("update")}pop(t=1){const e=this.Cg.Dg(this.Jn,t);0!==e.length&&this.Tg("update");const i=Hu(this.seriesType());return e.map(t=>i(t))}dataByIndex(t,e){const i=this.Jn.Xs().Fr(t,e);return null===i?null:Hu(this.seriesType())(i)}data(){const t=Hu(this.seriesType());return this.Jn.Xs().Hr().map(e=>t(e))}subscribeDataChanged(t){this.xg.i(t)}unsubscribeDataChanged(t){this.xg._(t)}applyOptions(t){this.Jn.hr(t)}options(){return Gl(this.Jn.N())}priceScale(){return this.Pg.priceScale(this.Jn.Ft().ma(),this.getPane().paneIndex())}createPriceLine(t){const e=Ul(Gl(Xu),t),i=this.Jn.Oh(e);return new Zu(i)}removePriceLine(t){this.Jn.Nh(t.Sg())}priceLines(){return this.Jn.Fh().map(t=>new Zu(t))}seriesType(){return this.Jn.Rr()}lastValueData(t){const e=this.Jn.ye(t);return e.ke?{noData:!0}:{noData:!1,price:e.gt,color:e.R}}attachPrimitive(t){this.Jn._a(t),t.attached&&t.attached({chart:this.bg,series:this,requestUpdate:()=>this.Jn.Qt().Ih(),horzScaleBehavior:this.o_})}detachPrimitive(t){this.Jn.ua(t),t.detached&&t.detached(),this.Jn.Qt().Ih()}getPane(){const t=this.Jn,e=Nl(this.Jn.Qt().Hn(t));return this.yg(e)}moveToPane(t){this.Jn.Qt().Nc(this.Jn,t)}seriesOrder(){const t=this.Jn.Qt().Hn(this.Jn);return null===t?-1:t.Oo().indexOf(this.Jn)}setSeriesOrder(t){const e=this.Jn.Qt().Hn(this.Jn);null!==e&&e.Qo(this.Jn,t)}Tg(t){this.xg.v()&&this.xg.p(t)}}class ep{constructor(t,e,i){this.Vg=new Hl,this.z_=new Hl,this.gm=new Hl,this.ts=t,this.uh=t.Et(),this.Zm=e,this.uh.Vu().i(this.Bg.bind(this)),this.uh.Bu().i(this.Ig.bind(this)),this.Zm.ym().i(this.Eg.bind(this)),this.o_=i}m(){this.uh.Vu().u(this),this.uh.Bu().u(this),this.Zm.ym().u(this),this.Vg.m(),this.z_.m(),this.gm.m()}scrollPosition(){return this.uh.gu()}scrollToPosition(t,e){e?this.uh.Tu(t,1e3):this.ts.fn(t)}scrollToRealTime(){this.uh.ku()}getVisibleRange(){const t=this.uh.nu();return null===t?null:{from:t.from.originalTime,to:t.to.originalTime}}setVisibleRange(t){const e={from:this.o_.convertHorzItemToInternal(t.from),to:this.o_.convertHorzItemToInternal(t.to)},i=this.uh.au(e);this.ts.Lc(i)}getVisibleLogicalRange(){const t=this.uh.su();return null===t?null:{from:t.Uh(),to:t.bi()}}setVisibleLogicalRange(t){Fl(t.from<=t.to,"The from index cannot be after the to index."),this.ts.Lc(t)}resetTimeScale(){this.ts.cn()}fitContent(){this.ts.Au()}logicalToCoordinate(t){const e=this.ts.Et();return e.Ki()?null:e.qt(t)}coordinateToLogical(t){return this.uh.Ki()?null:this.uh.cu(t)}timeToIndex(t,e){const i=this.o_.convertHorzItemToInternal(t);return this.uh.Q_(i,e)}timeToCoordinate(t){const e=this.timeToIndex(t,!1);return null===e?null:this.uh.qt(e)}coordinateToTime(t){const e=this.ts.Et(),i=e.cu(t),s=e.ss(i);return null===s?null:s.originalTime}width(){return this.Zm.Gf().width}height(){return this.Zm.Gf().height}subscribeVisibleTimeRangeChange(t){this.Vg.i(t)}unsubscribeVisibleTimeRangeChange(t){this.Vg._(t)}subscribeVisibleLogicalRangeChange(t){this.z_.i(t)}unsubscribeVisibleLogicalRangeChange(t){this.z_._(t)}subscribeSizeChange(t){this.gm.i(t)}unsubscribeSizeChange(t){this.gm._(t)}applyOptions(t){this.uh.hr(t)}options(){return{...Gl(this.uh.N()),barSpacing:this.uh.mu()}}Bg(){this.Vg.v()&&this.Vg.p(this.getVisibleRange())}Ig(){this.z_.v()&&this.z_.p(this.getVisibleLogicalRange())}Eg(t){this.gm.p(t.width,t.height)}}function ip(t){return function(t){if(jl(t.handleScale)){const e=t.handleScale;t.handleScale={axisDoubleClickReset:{time:e,price:e},axisPressedMouseMove:{time:e,price:e},mouseWheel:e,pinch:e}}else if(void 0!==t.handleScale){const{axisPressedMouseMove:e,axisDoubleClickReset:i}=t.handleScale;jl(e)&&(t.handleScale.axisPressedMouseMove={time:e,price:e}),jl(i)&&(t.handleScale.axisDoubleClickReset={time:i,price:i})}const e=t.handleScroll;jl(e)&&(t.handleScroll={horzTouchDrag:e,vertTouchDrag:e,mouseWheel:e,pressedMouseMove:e})}(t),t}class sp{constructor(t,e,i){this.Ag=new Map,this.zg=new Map,this.Lg=new Hl,this.Og=new Hl,this.Ng=new Hl,this.qu=new WeakMap,this.Fg=new Su(e);const s=void 0===i?Gl(Ku()):Ul(Gl(Ku()),ip(i));this.Wg=e,this.Hf=new cu(t,s,e),this.Hf.Xv().i(t=>{this.Lg.v()&&this.Lg.p(this.Hg(t()))},this),this.Hf.Zv().i(t=>{this.Og.v()&&this.Og.p(this.Hg(t()))},this),this.Hf.cc().i(t=>{this.Ng.v()&&this.Ng.p(this.Hg(t()))},this);const o=this.Hf.Qt();this.Ug=new ep(o,this.Hf.iw(),this.Wg)}remove(){this.Hf.Xv().u(this),this.Hf.Zv().u(this),this.Hf.cc().u(this),this.Ug.m(),this.Hf.m(),this.Ag.clear(),this.zg.clear(),this.Lg.m(),this.Og.m(),this.Ng.m(),this.Fg.m()}resize(t,e,i){this.autoSizeActive()||this.Hf.Jm(t,e,i)}addCustomSeries(t,e={},i=0){const s=(t=>({type:"Custom",isBuiltIn:!1,defaultOptions:{...Lu,...t.defaultOptions()},$g:Du,qg:t}))(Bl(t));return this.Yg(s,e,i)}addSeries(t,e={},i=0){return this.Yg(t,e,i)}removeSeries(t){const e=Rl(this.Ag.get(t)),i=this.Fg.Ac(e);this.Hf.Qt().Ac(e),this.jg(i),this.Ag.delete(t),this.zg.delete(e)}kg(t,e){this.jg(this.Fg.Ww(t,e))}Rg(t,e,i){this.jg(this.Fg.jw(t,e,i))}Dg(t,e){const[i,s]=this.Fg.Zw(t,e);return 0!==i.length&&this.jg(s),i}subscribeClick(t){this.Lg.i(t)}unsubscribeClick(t){this.Lg._(t)}subscribeCrosshairMove(t){this.Ng.i(t)}unsubscribeCrosshairMove(t){this.Ng._(t)}subscribeDblClick(t){this.Og.i(t)}unsubscribeDblClick(t){this.Og._(t)}priceScale(t,e=0){return new Qu(this.Hf,t,e)}timeScale(){return this.Ug}applyOptions(t){this.Hf.hr(ip(t))}options(){return this.Hf.N()}takeScreenshot(t=!1,e=!1){let i,s;try{e||(i=this.Hf.Qt().N().crosshair.mode,this.Hf.hr({crosshair:{mode:2}})),s=this.Hf.aw(t)}finally{e||void 0===i||this.Hf.Qt().hr({crosshair:{mode:i}})}return s}addPane(t=!1){const e=this.Hf.Qt().$c();return e.zo(t),this.Kg(e)}removePane(t){this.Hf.Qt().fc(t)}swapPanes(t,e){this.Hf.Qt().mc(t,e)}autoSizeActive(){return this.Hf.cw()}chartElement(){return this.Hf.ip()}panes(){return this.Hf.Qt().$s().map(t=>this.Kg(t))}paneSize(t=0){const e=this.Hf.pw(t);return{height:e.height,width:e.width}}setCrosshairPosition(t,e,i){const s=this.Ag.get(i);if(void 0===s)return;const o=this.Hf.Qt().Hn(s);null!==o&&this.Hf.Qt().Rc(t,e,o)}clearCrosshairPosition(){this.Hf.Qt().Dc(!0)}horzBehaviour(){return this.Wg}Yg(t,e={},i=0){Fl(void 0!==t.$g),function(t){if(void 0===t||"custom"===t.type)return;const e=t;void 0!==e.minMove&&void 0===e.precision&&(e.precision=ud(e.minMove))}(e.priceFormat),"Candlestick"===t.type&&function(t){void 0!==t.borderColor&&(t.borderUpColor=t.borderColor,t.borderDownColor=t.borderColor),void 0!==t.wickColor&&(t.wickUpColor=t.wickColor,t.wickDownColor=t.wickColor)}(e);const s=Ul(Gl(Ll),Gl(t.defaultOptions),e),o=t.$g,r=new _c(this.Hf.Qt(),t.type,s,o,t.qg);this.Hf.Qt().Ic(r,i);const n=new tp(r,this,this,this,this.Wg,t=>this.Kg(t));return this.Ag.set(n,r),this.zg.set(r,n),n}jg(t){const e=this.Hf.Qt();e.Vc(t.Et._u,t.Et.tg,t.Et.ig),t.Oo.forEach((t,e)=>e.ht(t.se,t.Qw)),e.Et().K_(),e.vu()}Xg(t){return Rl(this.zg.get(t))}Hg(t){const e=new Map;t.Dw.forEach((t,i)=>{const s=i.Rr(),o=Hu(s)(t);if("Custom"!==s)Fl(function(t){return function(t){return void 0!==t.open}(t)||function(t){return void 0!==t.value}(t)}(o));else{const t=i.fa();Fl(!t||!1===t(o))}e.set(this.Xg(i),o)});const i=void 0!==t.Rw&&this.zg.has(t.Rw)?this.Xg(t.Rw):void 0;return{time:t.yw,logical:t.Re,point:t.kw,paneIndex:t.Tw,hoveredSeries:i,hoveredObjectId:t.Vw,seriesData:e,sourceEvent:t.Bw}}Kg(t){let e=this.qu.get(t);return e||(e=new Ju(this.Hf,t=>this.Xg(t),t,this),this.qu.set(t,e)),e}}function op(t,e,i){const s=function(t){if(ql(t)){const e=document.getElementById(t);return Fl(null!==e,`Cannot find element in DOM with id=${t}`),e}return t}(t),o=new sp(s,e,i);return e.setOptions(o.options()),o}class rp extends Mu{constructor(t,e){super(t,e,!0)}fg(t,e,i){e.uu(this.rg,Ql(this.hg)),t.Ul(this.rg,i,Ql(this.hg))}Zg(t,e){return{wt:t,gt:e,_t:NaN,ut:NaN}}cg(){const t=this.Jn.Rh();this.rg=this.Jn.Xs().Hr().map(e=>{const i=e.Wt[3];return this.Gg(e.Re,i,t)})}}const np=6;function ap(t,e){return{_t:t._t-e._t,ut:t.ut-e.ut}}function lp(t,e){return{_t:t._t/e,ut:t.ut/e}}function hp(t,e,i){const s=Math.max(0,e-1),o=Math.min(t.length-1,i+1);var r,n;return[(r=t[e],n=lp(ap(t[i],t[s]),np),{_t:r._t+n._t,ut:r.ut+n.ut}),ap(t[i],lp(ap(t[o],t[e]),np))]}function cp(t,e){const i=t.context;i.strokeStyle=e,i.stroke()}class dp extends oh{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et(t){if(null===this.rt)return;const{ot:e,lt:i,Jg:s,Qg:o,ct:r,Xt:n,tM:a}=this.rt;if(null===i)return;const l=t.context;l.lineCap="butt",l.lineWidth=r*t.verticalPixelRatio,Il(l,n),l.lineJoin="round";const h=this.iM.bind(this);void 0!==o&&function(t,e,i,s,o,r,n){if(0===e.length||s.from>=e.length||s.to<=0)return;const{context:a,horizontalPixelRatio:l,verticalPixelRatio:h}=t,c=e[s.from];let d=r(t,c),u=c;if(s.to-s.from<2){const e=o/2;a.beginPath();const i={_t:c._t-e,ut:c.ut},s={_t:c._t+e,ut:c.ut};a.moveTo(i._t*l,i.ut*h),a.lineTo(s._t*l,s.ut*h),n(t,d,i,s)}else{const o=(e,i)=>{n(t,d,u,i),a.beginPath(),d=e,u=i};let p=u;a.beginPath(),a.moveTo(c._t*l,c.ut*h);for(let n=s.from+1;n<s.to;++n){p=e[n];const s=r(t,p);switch(i){case 0:a.lineTo(p._t*l,p.ut*h);break;case 1:a.lineTo(p._t*l,e[n-1].ut*h),s!==d&&(o(s,p),a.lineTo(p._t*l,e[n-1].ut*h)),a.lineTo(p._t*l,p.ut*h);break;case 2:{const[t,i]=hp(e,n-1,n);a.bezierCurveTo(t._t*l,t.ut*h,i._t*l,i.ut*h,p._t*l,p.ut*h);break}}1!==i&&s!==d&&(o(s,p),a.moveTo(p._t*l,p.ut*h))}(u!==p||u===p&&1===i)&&n(t,d,u,p)}}(t,e,o,i,s,h,cp),a&&function(t,e,i,s,o){if(s.to-s.from<=0)return;const{horizontalPixelRatio:r,verticalPixelRatio:n,context:a}=t;let l=null;const h=Math.max(1,Math.floor(r))%2/2,c=i*n+h;for(let i=s.to-1;i>=s.from;--i){const s=e[i];if(s){const e=o(t,s);e!==l&&(a.beginPath(),null!==l&&a.fill(),a.fillStyle=e,l=e);const i=Math.round(s._t*r)+h,d=s.ut*n;a.moveTo(i,d),a.arc(i,d,c,0,2*Math.PI)}}a.fill()}(t,e,a,i,h)}}class up extends dp{iM(t,e){return e.vt}}class pp extends rp{constructor(){super(...arguments),this.og=new up}Gg(t,e,i){return{...this.Zg(t,e),...i.Dr(t)}}pg(){const t=this.Jn.N(),e={ot:this.rg,Xt:t.lineStyle,Qg:t.lineVisible?t.lineType:void 0,ct:t.lineWidth,tM:t.pointMarkersVisible?t.pointMarkersRadius||t.lineWidth/2+2:void 0,lt:this.hg,Jg:this.Qn.Et().mu()};this.og.ht(e)}}const fp={type:"Line",isBuiltIn:!0,defaultOptions:{color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},$g:(t,e)=>new pp(t,e)};function mp(){const t=Sl("div.gs-header"),e=Sl("div.gs-panel",Sl("div.gs-section-title",Sl("sl-icon",{name:"graph-up-arrow"}),"Global Stats"),Sl("div.gs-stats",Sl("div.gs-stat",Sl("div.value",{"data-field":"holders"},"—"),Sl("div.label","Total Unique Holders")),Sl("div.gs-stat",Sl("div.value",{"data-field":"floor"},"—"),Sl("div.label","Floor Price (ETH)")))),i=Sl("div.gs-panel",Sl("div.gs-section-title",Sl("sl-icon",{name:"activity"}),"Trend"),Sl("sl-tab-group",{activation:"manual",style:"margin-bottom:8px;"},Sl("sl-tab",{slot:"nav",panel:"holders",active:!0},"Holders"),Sl("sl-tab",{slot:"nav",panel:"floor"},"Floor Price"),Sl("sl-tab-panel",{name:"holders",active:!0}),Sl("sl-tab-panel",{name:"floor"})),Sl("div.gs-chart-wrap"),Sl("div.gs-sub",'Plots the "stats" array as a time series.')),s=(Sl("div.gs-panel",Sl("div.gs-section-title",Sl("sl-icon",{name:"info"}),"About The Gods"),Sl("div",{class:"gs-about"},"Explore the trend of unique holders and the floor price for The Gods NFT collection.")),Sl("div.gs-grid",e,i)),o=Sl("section.gods-stats-dash",t,s),r=i.querySelector(".gs-chart-wrap"),n=i.querySelector("sl-tab-group");let a=null,l=null,h="numOwners",c=[];function d(){const t=document.documentElement;return t.classList.contains("sl-theme-dark")||t.classList.contains("dark")||window.matchMedia?.("(prefers-color-scheme: dark)").matches}function u(t,e){a||(a=function(t,e){return op(t,new Ed,Ed.ld(e))}(r,{autoSize:!0,height:360,layout:{background:{color:d()?"rgba(20,23,29,1)":"rgba(250,250,250,1)"},textColor:d()?"rgba(230,230,230,0.65)":"rgba(60,60,60,0.75)"},grid:{vertLines:{color:d()?"rgba(230,230,230,0.08)":"rgba(0,0,0,0.06)"},horzLines:{color:d()?"rgba(230,230,230,0.08)":"rgba(0,0,0,0.06)"}},timeScale:{timeVisible:!0,secondsVisible:!1}}),l=a.addSeries(fp,{color:"#7C3AED"})),h=t;const i=e.map(e=>({time:Math.floor(new Date(e.time).getTime()/1e3),value:"numOwners"===t?e.num_owners:e.floor_price}));l.setData(i),a.timeScale().fitContent()}return(async()=>{try{const{stats:t,current:i}=await async function(){const t=await fetch("https://api.gaia.cc/gods-stats",{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("Failed to fetch /gods-stats");return t.json()}(),s=e.querySelector('[data-field="holders"]'),o=e.querySelector('[data-field="floor"]');s.textContent=null!=i?.num_owners?String(i.num_owners):"—",o.textContent=null!=i?.floor_price?String(i.floor_price):"—",c=t??[],u("numOwners",c),n.addEventListener("sl-tab-show",t=>{const e=t.detail.name;"holders"===e&&"numOwners"!==h&&u("numOwners",c),"floor"===e&&"floorPrice"!==h&&u("floorPrice",c)})}catch(t){o.append(Sl("sl-alert",{variant:"danger",open:!0},"Failed to load The Gods stats."))}})(),o}const gp=document.getElementById("dashboard-container");gp&&gp.appendChild(function(){Sl("div.header",Sl("sl-icon",{name:"activity"}),Sl("h2",{style:"margin:0;"},"Gaia Protocol Dashboard")),Sl("sl-card",{class:"overview"},Sl("div.section-title",Sl("sl-icon",{name:"info"}),"Overview"),Sl("div.body","A quick view of key metrics and collection status across Gaia Protocol."));const t=Sl("div.gods-section-header",Sl("sl-icon",{name:"person-square"}),Sl("h3","The Gods (NFT)")),e=Sl("sl-card",{class:"gods"},t,mp()),i=Sl("div.grid",e);return Sl("main.gaia-dashboard",Sl("div.container",i))}())})();