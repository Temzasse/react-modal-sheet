let e;function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var r,i,o,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},l={},u=a.parcelRequired98c;null==u&&((u=function(e){if(e in s)return s[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},a.parcelRequired98c=u),u.register("iA52G",function(e,n){t(e.exports,"Children",()=>r,e=>r=e),t(e.exports,"Component",()=>i,e=>i=e),t(e.exports,"Fragment",()=>o,e=>o=e),t(e.exports,"Profiler",()=>a,e=>a=e),t(e.exports,"PureComponent",()=>s,e=>s=e),t(e.exports,"StrictMode",()=>l,e=>l=e),t(e.exports,"Suspense",()=>u,e=>u=e),t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),t(e.exports,"cloneElement",()=>d,e=>d=e),t(e.exports,"createContext",()=>f,e=>f=e),t(e.exports,"createElement",()=>p,e=>p=e),t(e.exports,"createFactory",()=>h,e=>h=e),t(e.exports,"createRef",()=>m,e=>m=e),t(e.exports,"forwardRef",()=>g,e=>g=e),t(e.exports,"isValidElement",()=>v,e=>v=e),t(e.exports,"lazy",()=>y,e=>y=e),t(e.exports,"memo",()=>b,e=>b=e),t(e.exports,"startTransition",()=>x,e=>x=e),t(e.exports,"unstable_act",()=>w,e=>w=e),t(e.exports,"useCallback",()=>E,e=>E=e),t(e.exports,"useContext",()=>S,e=>S=e),t(e.exports,"useDebugValue",()=>k,e=>k=e),t(e.exports,"useDeferredValue",()=>P,e=>P=e),t(e.exports,"useEffect",()=>C,e=>C=e),t(e.exports,"useId",()=>T,e=>T=e),t(e.exports,"useImperativeHandle",()=>A,e=>A=e),t(e.exports,"useInsertionEffect",()=>M,e=>M=e),t(e.exports,"useLayoutEffect",()=>L,e=>L=e),t(e.exports,"useMemo",()=>R,e=>R=e),t(e.exports,"useReducer",()=>D,e=>D=e),t(e.exports,"useRef",()=>V,e=>V=e),t(e.exports,"useState",()=>O,e=>O=e),t(e.exports,"useSyncExternalStore",()=>N,e=>N=e),t(e.exports,"useTransition",()=>F,e=>F=e),t(e.exports,"version",()=>I,e=>I=e);var r,i,o,a,s,l,u,c,d,f,p,h,m,g,v,y,b,x,w,E,S,k,P,C,T,A,M,L,R,D,V,O,N,F,I,z=Symbol.for("react.element"),j=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),$=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),q=Symbol.iterator,X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Z={};function J(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||X}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||X}J.prototype.isReactComponent={},J.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},J.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=J.prototype;var en=et.prototype=new ee;en.constructor=et,Q(en,J.prototype),en.isPureReactComponent=!0;var er=Array.isArray,ei=Object.prototype.hasOwnProperty,eo={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,i={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)ei.call(t,r)&&!ea.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:z,type:e,key:o,ref:a,props:i,_owner:eo.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===z}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ed(e,t,n){if(null==e)return e;var r=[],i=0;return function e(t,n,r,i,o){var a,s,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case z:case j:c=!0}}if(c)return o=o(c=t),t=""===i?"."+ec(c,0):i,er(o)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(o,n,r,"",function(e){return e})):null!=o&&(el(o)&&(a=o,s=r+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+t,o={$$typeof:z,type:a.type,key:s,ref:a.ref,props:a.props,_owner:a._owner}),n.push(o)),1;if(c=0,i=""===i?".":i+":",er(t))for(var d=0;d<t.length;d++){var f=i+ec(u=t[d],d);c+=e(u,n,r,f,o)}else if("function"==typeof(f=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=q&&l[q]||l["@@iterator"])?l:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=i+ec(u=u.value,d++),c+=e(u,n,r,f,o);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,i++)}),r}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ed,forEach:function(e,t,n){ed(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=J,o=B,a=U,s=et,l=_,u=G,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:eo},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Q({},e.props),i=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=eo.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ei.call(t,l)&&!ea.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:z,type:e.type,key:i,ref:o,props:r,_owner:a}},f=function(e){return(e={$$typeof:$,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:W,_context:e},e.Consumer=e},p=es,h=function(e){var t=es.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},v=el,y=function(e){return{$$typeof:Y,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},x=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},w=function(){throw Error("act(...) is not supported in production builds of React.")},E=function(e,t){return ep.current.useCallback(e,t)},S=function(e){return ep.current.useContext(e)},k=function(){},P=function(e){return ep.current.useDeferredValue(e)},C=function(e,t){return ep.current.useEffect(e,t)},T=function(){return ep.current.useId()},A=function(e,t,n){return ep.current.useImperativeHandle(e,t,n)},M=function(e,t){return ep.current.useInsertionEffect(e,t)},L=function(e,t){return ep.current.useLayoutEffect(e,t)},R=function(e,t){return ep.current.useMemo(e,t)},D=function(e,t,n){return ep.current.useReducer(e,t,n)},V=function(e){return ep.current.useRef(e)},O=function(e){return ep.current.useState(e)},N=function(e,t,n){return ep.current.useSyncExternalStore(e,t,n)},F=function(){return ep.current.useTransition()},I="18.2.0"}),u.register("dpROw",function(e,n){t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>W,e=>W=e),t(e.exports,"createPortal",()=>$,e=>$=e),t(e.exports,"createRoot",()=>H,e=>H=e),t(e.exports,"findDOMNode",()=>G,e=>G=e),t(e.exports,"flushSync",()=>K,e=>K=e),t(e.exports,"hydrate",()=>Y,e=>Y=e),t(e.exports,"hydrateRoot",()=>q,e=>q=e),t(e.exports,"render",()=>X,e=>X=e),t(e.exports,"unmountComponentAtNode",()=>Q,e=>Q=e),t(e.exports,"unstable_batchedUpdates",()=>Z,e=>Z=e),t(e.exports,"unstable_renderSubtreeIntoContainer",()=>J,e=>J=e),t(e.exports,"version",()=>ee,e=>ee=e),"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var r,i,o,a,s,l,c=u("e0W5i"),d=u("bSwRc");function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,h={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(h[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),y=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function E(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}function C(e,t,n,r){var i,o=S.hasOwnProperty(t)?S[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?(i=t,(!!y.call(w,i)||!y.call(x,i)&&(b.test(i)?w[i]=!0:(x[i]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(k,P);S[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(k,P);S[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(k,P);S[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});var T=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),M=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var B=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var _=Symbol.iterator;function U(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=_&&e[_]||e["@@iterator"])?e:null}var W,$,H,G,K,Y,q,X,Q,Z,J,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function eo(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s)break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=es(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=es(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ef(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ea(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=ea(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ev=Array.isArray;function ey(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(i=0,n=""+ea(n),t=null;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(f(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ex(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(f(92));if(ev(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ea(n)}}function ew(e,t){var n=ea(t.value),r=ea(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function eE(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ek(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eP,eC,eT=(eP=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eC=eC||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eC.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eP(e,t,n,r)})}:eP);function eA(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eM={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eL=["Webkit","ms","Moz","O"];function eR(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eM.hasOwnProperty(e)&&eM[e]?(""+t).trim():t+"px"}function eD(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=eR(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(eM).forEach(function(e){eL.forEach(function(t){eM[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eM[e]})});var eV=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eO(e,t){if(t){if(eV[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(f(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(f(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(f(62))}}function eN(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eF=null;function eI(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ez=null,ej=null,eB=null;function e_(e){if(e=r9(e)){if("function"!=typeof ez)throw Error(f(280));var t=e.stateNode;t&&(t=it(t),ez(e.stateNode,e.type,t))}}function eU(e){ej?eB?eB.push(e):eB=[e]:ej=e}function eW(){if(ej){var e=ej,t=eB;if(eB=ej=null,e_(e),t)for(e=0;e<t.length;e++)e_(t[e])}}function e$(e,t){return e(t)}function eH(){}var eG=!1;function eK(e,t,n){if(eG)return e(t,n);eG=!0;try{return e$(e,t,n)}finally{eG=!1,(null!==ej||null!==eB)&&(eH(),eW())}}function eY(e,t){var n=e.stateNode;if(null===n)return null;var r=it(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(f(231,t,typeof n));return n}var eq=!1;if(v)try{var eX={};Object.defineProperty(eX,"passive",{get:function(){eq=!0}}),window.addEventListener("test",eX,eX),window.removeEventListener("test",eX,eX)}catch(e){eq=!1}function eQ(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eZ=!1,eJ=null,e0=!1,e1=null,e2={onError:function(e){eZ=!0,eJ=e}};function e3(e,t,n,r,i,o,a,s,l){eZ=!1,eJ=null,eQ.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e5(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e4(e)!==e)throw Error(f(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return e6(i),e;if(o===r)return e6(i),t;o=o.sibling}throw Error(f(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(3!==n.tag)throw Error(f(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e7=d.unstable_scheduleCallback,e9=d.unstable_cancelCallback,te=d.unstable_shouldYield,tt=d.unstable_requestPaint,tn=d.unstable_now,tr=d.unstable_getCurrentPriorityLevel,ti=d.unstable_ImmediatePriority,to=d.unstable_UserBlockingPriority,ta=d.unstable_NormalPriority,ts=d.unstable_LowPriority,tl=d.unstable_IdlePriority,tu=null,tc=null,td=null,tf="undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;function tp(e){td=e}function th(){for(var e=new Map,t=1,n=0;31>n;n++){var r,i=1&(r=t)?"Sync":2&r?"InputContinuousHydration":4&r?"InputContinuous":8&r?"DefaultHydration":16&r?"Default":32&r?"TransitionHydration":4194240&r?"Transition":130023424&r?"Retry":134217728&r?"SelectiveHydration":268435456&r?"IdleHydration":536870912&r?"Idle":1073741824&r?"Offscreen":void 0;e.set(t,i),t*=2}return e}function tm(){null!==td&&"function"==typeof td.markCommitStopped&&td.markCommitStopped()}function tg(e){null!==td&&"function"==typeof td.markComponentRenderStarted&&td.markComponentRenderStarted(e)}function tv(){null!==td&&"function"==typeof td.markComponentRenderStopped&&td.markComponentRenderStopped()}function ty(e){null!==td&&"function"==typeof td.markComponentLayoutEffectUnmountStarted&&td.markComponentLayoutEffectUnmountStarted(e)}function tb(){null!==td&&"function"==typeof td.markComponentLayoutEffectUnmountStopped&&td.markComponentLayoutEffectUnmountStopped()}function tx(e){null!==td&&"function"==typeof td.markRenderStarted&&td.markRenderStarted(e)}function tw(){null!==td&&"function"==typeof td.markRenderStopped&&td.markRenderStopped()}function tE(e,t){null!==td&&"function"==typeof td.markStateUpdateScheduled&&td.markStateUpdateScheduled(e,t)}var tS=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tk(e)/tP|0)|0},tk=Math.log,tP=Math.LN2,tC=64,tT=4194304;function tA(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tM(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=tA(s):0!=(o&=a)&&(r=tA(o))}else 0!=(a=n&~i)?r=tA(a):0!==o&&(r=tA(o));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!=(4194240&o)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-tS(t)),r|=e[n],t&=~i;return r}function tL(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tR(){var e=tC;return 0==(4194240&(tC<<=1))&&(tC=64),e}function tD(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tV(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-tS(t)]=n}function tO(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tS(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tN(e,t,n){if(tf)for(e=e.pendingUpdatersLaneMap;0<n;){var r=31-tS(n),i=1<<r;e[r].add(t),n&=~i}}function tF(e,t){if(tf)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;0<t;){var i=31-tS(t);e=1<<i,0<(i=n[i]).size&&(i.forEach(function(e){var t=e.alternate;null!==t&&r.has(t)||r.add(e)}),i.clear()),t&=~e}}var tI=0;function tz(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tj,tB,t_,tU,tW,t$=!1,tH=[],tG=null,tK=null,tY=null,tq=new Map,tX=new Map,tQ=[],tZ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tJ(e,t){switch(e){case"focusin":case"focusout":tG=null;break;case"dragenter":case"dragleave":tK=null;break;case"mouseover":case"mouseout":tY=null;break;case"pointerover":case"pointerout":tq.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tX.delete(t.pointerId)}}function t0(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&null!==(t=r9(t))&&tB(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function t1(e){var t=r7(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e5(n))){e.blockedOn=t,tW(e.priority,function(){t_(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function t2(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=nr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=r9(n))&&tB(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eF=r,n.target.dispatchEvent(r),eF=null,t.shift()}return!0}function t3(e,t,n){t2(e)&&n.delete(t)}function t4(){t$=!1,null!==tG&&t2(tG)&&(tG=null),null!==tK&&t2(tK)&&(tK=null),null!==tY&&t2(tY)&&(tY=null),tq.forEach(t3),tX.forEach(t3)}function t5(e,t){e.blockedOn===t&&(e.blockedOn=null,t$||(t$=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,t4)))}function t6(e){function t(t){return t5(t,e)}if(0<tH.length){t5(tH[0],e);for(var n=1;n<tH.length;n++){var r=tH[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tG&&t5(tG,e),null!==tK&&t5(tK,e),null!==tY&&t5(tY,e),tq.forEach(t),tX.forEach(t),n=0;n<tQ.length;n++)(r=tQ[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tQ.length&&null===(n=tQ[0]).blockedOn;)t1(n),null===n.blockedOn&&tQ.shift()}var t8=T.ReactCurrentBatchConfig,t7=!0;function t9(e,t,n,r){var i=tI,o=t8.transition;t8.transition=null;try{tI=1,nt(e,t,n,r)}finally{tI=i,t8.transition=o}}function ne(e,t,n,r){var i=tI,o=t8.transition;t8.transition=null;try{tI=4,nt(e,t,n,r)}finally{tI=i,t8.transition=o}}function nt(e,t,n,r){if(t7){var i=nr(e,t,n,r);if(null===i)rO(e,t,r,nn,n),tJ(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return tG=t0(tG,e,t,n,r,i),!0;case"dragenter":return tK=t0(tK,e,t,n,r,i),!0;case"mouseover":return tY=t0(tY,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return tq.set(o,t0(tq.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,tX.set(o,t0(tX.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(tJ(e,r),4&t&&-1<tZ.indexOf(e)){for(;null!==i;){var o=r9(i);if(null!==o&&tj(o),null===(o=nr(e,t,n,r))&&rO(e,t,r,nn,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else rO(e,t,r,null,n)}}var nn=null;function nr(e,t,n,r){if(nn=null,null!==(e=r7(e=eI(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e5(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return nn=e,null}function ni(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case ti:return 1;case to:return 4;case ta:case ts:return 16;case tl:return 536870912;default:return 16}default:return 16}}var no=null,na=null,ns=null;function nl(){if(ns)return ns;var e,t,n=na,r=n.length,i="value"in no?no.value:no.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return ns=i.slice(e,1<t?1-t:void 0)}function nu(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nc(){return!0}function nd(){return!1}function nf(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nc:nd,this.isPropagationStopped=nd,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),t}var np,nh,nm,ng={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nv=nf(ng),ny=en({},ng,{view:0,detail:0}),nb=nf(ny),nx=en({},ny,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nR,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nm&&(nm&&"mousemove"===e.type?(np=e.screenX-nm.screenX,nh=e.screenY-nm.screenY):nh=np=0,nm=e),np)},movementY:function(e){return"movementY"in e?e.movementY:nh}}),nw=nf(nx),nE=nf(en({},nx,{dataTransfer:0})),nS=nf(en({},ny,{relatedTarget:0})),nk=nf(en({},ng,{animationName:0,elapsedTime:0,pseudoElement:0})),nP=nf(en({},ng,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nC=nf(en({},ng,{data:0})),nT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nL(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nM[e])&&!!t[e]}function nR(){return nL}var nD=nf(en({},ny,{key:function(e){if(e.key){var t=nT[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nu(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nR,charCode:function(e){return"keypress"===e.type?nu(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nu(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nV=nf(en({},nx,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nO=nf(en({},ny,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nR})),nN=nf(en({},ng,{propertyName:0,elapsedTime:0,pseudoElement:0})),nF=nf(en({},nx,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nI=[9,13,27,32],nz=v&&"CompositionEvent"in window,nj=null;v&&"documentMode"in document&&(nj=document.documentMode);var nB=v&&"TextEvent"in window&&!nj,n_=v&&(!nz||nj&&8<nj&&11>=nj),nU=!1;function nW(e,t){switch(e){case"keyup":return -1!==nI.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n$(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nH=!1,nG={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nK(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nG[e.type]:"textarea"===t}function nY(e,t,n,r){eU(r),0<(t=rF(t,"onChange")).length&&(n=new nv("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nq=null,nX=null;function nQ(e){rA(e,0)}function nZ(e){if(eu(ie(e)))return e}function nJ(e,t){if("change"===e)return t}var n0=!1;if(v){if(v){var n1="oninput"in document;if(!n1){var n2=document.createElement("div");n2.setAttribute("oninput","return;"),n1="function"==typeof n2.oninput}r=n1}else r=!1;n0=r&&(!document.documentMode||9<document.documentMode)}function n3(){nq&&(nq.detachEvent("onpropertychange",n4),nX=nq=null)}function n4(e){if("value"===e.propertyName&&nZ(nX)){var t=[];nY(t,nX,e,eI(e)),eK(nQ,t)}}function n5(e,t,n){"focusin"===e?(n3(),nq=t,nX=n,nq.attachEvent("onpropertychange",n4)):"focusout"===e&&n3()}function n6(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nZ(nX)}function n8(e,t){if("click"===e)return nZ(t)}function n7(e,t){if("input"===e||"change"===e)return nZ(t)}var n9="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function re(e,t){if(n9(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!y.call(t,i)||!n9(e[i],t[i]))return!1}return!0}function rt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rn(e,t){var n,r=rt(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=rt(r)}}function rr(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ro=v&&"documentMode"in document&&11>=document.documentMode,ra=null,rs=null,rl=null,ru=!1;function rc(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ru||null==ra||ra!==ec(r)||(r="selectionStart"in(r=ra)&&ri(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},rl&&re(rl,r)||(rl=r,0<(r=rF(rs,"onSelect")).length&&(t=new nv("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ra)))}function rd(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rf={animationend:rd("Animation","AnimationEnd"),animationiteration:rd("Animation","AnimationIteration"),animationstart:rd("Animation","AnimationStart"),transitionend:rd("Transition","TransitionEnd")},rp={},rh={};function rm(e){if(rp[e])return rp[e];if(!rf[e])return e;var t,n=rf[e];for(t in n)if(n.hasOwnProperty(t)&&t in rh)return rp[e]=n[t];return e}v&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete rf.animationend.animation,delete rf.animationiteration.animation,delete rf.animationstart.animation),"TransitionEvent"in window||delete rf.transitionend.transition);var rg=rm("animationend"),rv=rm("animationiteration"),ry=rm("animationstart"),rb=rm("transitionend"),rx=new Map,rw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rE(e,t){rx.set(e,t),m(t,[e])}for(var rS=0;rS<rw.length;rS++){var rk=rw[rS];rE(rk.toLowerCase(),"on"+(rk[0].toUpperCase()+rk.slice(1)))}rE(rg,"onAnimationEnd"),rE(rv,"onAnimationIteration"),rE(ry,"onAnimationStart"),rE("dblclick","onDoubleClick"),rE("focusin","onFocus"),rE("focusout","onBlur"),rE(rb,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rP="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rC=new Set("cancel close invalid load scroll toggle".split(" ").concat(rP));function rT(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,a,s,l){if(e3.apply(this,arguments),eZ){if(eZ){var u=eJ;eZ=!1,eJ=null}else throw Error(f(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rA(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;rT(i,s,u),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;rT(i,s,u),o=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rM(e,t){var n=t[r5];void 0===n&&(n=t[r5]=new Set);var r=e+"__bubble";n.has(r)||(rV(t,e,2,!1),n.add(r))}function rL(e,t,n){var r=0;t&&(r|=4),rV(n,e,r,t)}var rR="_reactListening"+Math.random().toString(36).slice(2);function rD(e){if(!e[rR]){e[rR]=!0,p.forEach(function(t){"selectionchange"!==t&&(rC.has(t)||rL(t,!1,e),rL(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rR]||(t[rR]=!0,rL("selectionchange",!1,t))}}function rV(e,t,n,r){switch(ni(t)){case 1:var i=t9;break;case 4:i=ne;break;default:i=nt}n=i.bind(null,t,n,e),i=void 0,eq&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rO(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=r7(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}eK(function(){var r=o,i=eI(n),a=[];e:{var s=rx.get(e);if(void 0!==s){var l=nv,u=e;switch(e){case"keypress":if(0===nu(n))break e;case"keydown":case"keyup":l=nD;break;case"focusin":u="focus",l=nS;break;case"focusout":u="blur",l=nS;break;case"beforeblur":case"afterblur":l=nS;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=nw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nO;break;case rg:case rv:case ry:l=nk;break;case rb:l=nN;break;case"scroll":l=nb;break;case"wheel":l=nF;break;case"copy":case"cut":case"paste":l=nP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=nV}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eY(h,f))&&c.push(rN(h,m,p))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,n,i),a.push({event:s,listeners:c}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(s&&n!==eF&&(u=n.relatedTarget||n.fromElement)&&(r7(u)||u[r4]))&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,null!==(u=u?r7(u):null)&&(d=e4(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=nw,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nV,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:ie(l),p=null==u?s:ie(u),(s=new c(m,h+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,r7(i)===r&&((c=new c(f,h+"enter",u,n,i)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)t:{for(c=l,f=u,h=0,p=c;p;p=rI(p))h++;for(p=0,m=f;m;m=rI(m))p++;for(;0<h-p;)c=rI(c),h--;for(;0<p-h;)f=rI(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break t;c=rI(c),f=rI(f)}c=null}else c=null;null!==l&&rz(a,s,l,c,!1),null!==u&&null!==d&&rz(a,d,u,c,!0)}e:{if("select"===(l=(s=r?ie(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g,v=nJ;else if(nK(s)){if(n0)v=n7;else{v=n6;var y=n5}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(v=n8);if(v&&(v=v(e,r))){nY(a,v,n,i);break e}y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&eg(s,"number",s.value)}switch(y=r?ie(r):window,e){case"focusin":(nK(y)||"true"===y.contentEditable)&&(ra=y,rs=r,rl=null);break;case"focusout":rl=rs=ra=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,rc(a,n,i);break;case"selectionchange":if(ro)break;case"keydown":case"keyup":rc(a,n,i)}if(nz)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nH?nW(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(n_&&"ko"!==n.locale&&(nH||"onCompositionStart"!==b?"onCompositionEnd"===b&&nH&&(g=nl()):(na="value"in(no=i)?no.value:no.textContent,nH=!0)),0<(y=rF(r,b)).length&&(b=new nC(b,e,null,n,i),a.push({event:b,listeners:y}),g?b.data=g:null!==(g=n$(n))&&(b.data=g))),(g=nB?function(e,t){switch(e){case"compositionend":return n$(t);case"keypress":if(32!==t.which)return null;return nU=!0," ";case"textInput":return" "===(e=t.data)&&nU?null:e;default:return null}}(e,n):function(e,t){if(nH)return"compositionend"===e||!nz&&nW(e,t)?(e=nl(),ns=na=no=null,nH=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return n_&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rF(r,"onBeforeInput")).length&&(i=new nC("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=g)}rA(a,t)})}function rN(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rF(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=eY(e,n))&&r.unshift(rN(e,o,i)),null!=(o=eY(e,t))&&r.push(rN(e,o,i))),e=e.return}return r}function rI(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rz(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=eY(n,o))&&a.unshift(rN(n,l,s)):i||null!=(l=eY(n,o))&&a.push(rN(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var rj=/\r\n?/g,rB=/\u0000|\uFFFD/g;function r_(e){return("string"==typeof e?e:""+e).replace(rj,"\n").replace(rB,"")}function rU(e,t,n){if(t=r_(t),r_(e)!==t&&n)throw Error(f(425))}function rW(){}var r$=null,rH=null;function rG(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rK="function"==typeof setTimeout?setTimeout:void 0,rY="function"==typeof clearTimeout?clearTimeout:void 0,rq="function"==typeof Promise?Promise:void 0,rX="function"==typeof queueMicrotask?queueMicrotask:void 0!==rq?function(e){return rq.resolve(null).then(e).catch(rQ)}:rK;function rQ(e){setTimeout(function(){throw e})}function rZ(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType){if("/$"===(n=i.data)){if(0===r){e.removeChild(i),t6(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=i}while(n)t6(t)}function rJ(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function r0(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var r1=Math.random().toString(36).slice(2),r2="__reactFiber$"+r1,r3="__reactProps$"+r1,r4="__reactContainer$"+r1,r5="__reactEvents$"+r1,r6="__reactListeners$"+r1,r8="__reactHandles$"+r1;function r7(e){var t=e[r2];if(t)return t;for(var n=e.parentNode;n;){if(t=n[r4]||n[r2]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=r0(e);null!==e;){if(n=e[r2])return n;e=r0(e)}return t}n=(e=n).parentNode}return null}function r9(e){return(e=e[r2]||e[r4])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function ie(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(f(33))}function it(e){return e[r3]||null}var ir=[],ii=-1;function io(e){return{current:e}}function ia(e){0>ii||(e.current=ir[ii],ir[ii]=null,ii--)}function is(e,t){ir[++ii]=e.current,e.current=t}var il={},iu=io(il),ic=io(!1),id=il;function ip(e,t){var n=e.type.contextTypes;if(!n)return il;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ih(e){return null!=(e=e.childContextTypes)}function im(){ia(ic),ia(iu)}function ig(e,t,n){if(iu.current!==il)throw Error(f(168));is(iu,t),is(ic,n)}function iv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(f(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case L:return"Fragment";case M:return"Portal";case D:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case V:return(t._context.displayName||"Context")+".Provider";case N:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case z:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return en({},n,r)}function iy(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||il,id=iu.current,is(iu,e),is(ic,ic.current),!0}function ib(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=iv(e,t,id),r.__reactInternalMemoizedMergedChildContext=e,ia(ic),ia(iu),is(iu,e)):ia(ic),is(ic,n)}var ix=null,iw=!1,iE=!1;function iS(e){null===ix?ix=[e]:ix.push(e)}function ik(){if(!iE&&null!==ix){iE=!0;var e=0,t=tI;try{var n=ix;for(tI=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}ix=null,iw=!1}catch(t){throw null!==ix&&(ix=ix.slice(e+1)),e7(ti,ik),t}finally{tI=t,iE=!1}}return null}var iP=[],iC=0,iT=null,iA=0,iM=[],iL=0,iR=null,iD=1,iV="";function iO(e,t){iP[iC++]=iA,iP[iC++]=iT,iT=e,iA=t}function iN(e,t,n){iM[iL++]=iD,iM[iL++]=iV,iM[iL++]=iR,iR=e;var r=iD;e=iV;var i=32-tS(r)-1;r&=~(1<<i),n+=1;var o=32-tS(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,iD=1<<32-tS(t)+i|n<<i|r,iV=o+e}else iD=1<<o|n<<i|r,iV=e}function iF(e){null!==e.return&&(iO(e,1),iN(e,1,0))}function iI(e){for(;e===iT;)iT=iP[--iC],iP[iC]=null,iA=iP[--iC],iP[iC]=null;for(;e===iR;)iR=iM[--iL],iM[iL]=null,iV=iM[--iL],iM[iL]=null,iD=iM[--iL],iM[iL]=null}var iz=null,ij=null,iB=!1,i_=null;function iU(e,t){var n=lL(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function iW(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,iz=e,ij=rJ(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,iz=e,ij=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==iR?{id:iD,overflow:iV}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=lL(18,null,null,0)).stateNode=t,n.return=e,e.child=n,iz=e,ij=null,!0);default:return!1}}function i$(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iH(e){if(iB){var t=ij;if(t){var n=t;if(!iW(e,t)){if(i$(e))throw Error(f(418));t=rJ(n.nextSibling);var r=iz;t&&iW(e,t)?iU(r,n):(e.flags=-4097&e.flags|2,iB=!1,iz=e)}}else{if(i$(e))throw Error(f(418));e.flags=-4097&e.flags|2,iB=!1,iz=e}}}function iG(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;iz=e}function iK(e){if(e!==iz)return!1;if(!iB)return iG(e),iB=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rG(e.type,e.memoizedProps)),t&&(t=ij)){if(i$(e))throw iY(),Error(f(418));for(;t;)iU(e,t),t=rJ(t.nextSibling)}if(iG(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(f(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){ij=rJ(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ij=null}}else ij=iz?rJ(e.stateNode.nextSibling):null;return!0}function iY(){for(var e=ij;e;)e=rJ(e.nextSibling)}function iq(){ij=iz=null,iB=!1}function iX(e){null===i_?i_=[e]:i_.push(e)}var iQ=T.ReactCurrentBatchConfig;function iZ(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var iJ=io(null),i0=null,i1=null,i2=null;function i3(){i2=i1=i0=null}function i4(e){var t=iJ.current;ia(iJ),e._currentValue=t}function i5(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function i6(e,t){i0=e,i2=i1=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(aK=!0),e.firstContext=null)}function i8(e){var t=e._currentValue;if(i2!==e){if(e={context:e,memoizedValue:t,next:null},null===i1){if(null===i0)throw Error(f(308));i1=e,i0.dependencies={lanes:0,firstContext:e}}else i1=i1.next=e}return t}var i7=null;function i9(e){null===i7?i7=[e]:i7.push(e)}function oe(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,i9(t)):(n.next=i.next,i.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var on=!1;function or(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function oa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&sz)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ot(e,n)}return null===(i=r.interleaved)?(t.next=t,i9(r)):(t.next=i.next,i.next=t),r.interleaved=t,ot(e,n)}function os(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tO(e,n)}}function ol(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n)null===o?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ou(e,t,n,r){var i=e.updateQueue;on=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?o=u:a.next=u,a=l;var c=e.alternate;null!==c&&(s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l)}if(null!==o){var d=i.baseState;for(a=0,c=u=l=null,s=o;;){var f=s.lane,p=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=en({},d,f);break e;case 2:on=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do a|=i.lane,i=i.next;while(i!==t)}else null===o&&(i.shared.lanes=0);sG|=a,e.lanes=a,e.memoizedState=d}}function oc(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(f(191,i));i.call(r)}}}var od=(new c.Component).refs;function of(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var op={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=ln(e),o=oo(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=oa(e,o,i))&&(lr(t,e,i,r),os(t,e,i)),tE(e,i)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=ln(e),o=oo(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=oa(e,o,i))&&(lr(t,e,i,r),os(t,e,i)),tE(e,i)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=ln(e),i=oo(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=oa(e,i,r))&&(lr(t,e,r,n),os(t,e,r)),null!==td&&"function"==typeof td.markForceUpdateScheduled&&td.markForceUpdateScheduled(e,r)}};function oh(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||!re(n,r)||!re(i,o)}function om(e,t,n){var r=!1,i=il,o=t.contextType;return"object"==typeof o&&null!==o?o=i8(o):(i=ih(t)?id:iu.current,o=(r=null!=(r=t.contextTypes))?ip(e,i):il),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=op,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function og(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&op.enqueueReplaceState(t,t.state,null)}function ov(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=od,or(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=i8(o):(o=ih(t)?id:iu.current,i.context=ip(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(of(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&op.enqueueReplaceState(i,i.state,null),ou(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function oy(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=i.refs;t===od&&(t=i.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function ob(e,t){throw Error(f(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ox(e){return(0,e._init)(e._payload)}function ow(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=lD(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?(t=lF(n,e.mode,r)).return=e:(t=i(t,n)).return=e,t}function l(e,t,n,r){var o=n.type;return o===L?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===j&&ox(o)===t.type)?(r=i(t,n.props)).ref=oy(e,t,n):(r=lV(n.type,n.key,n.props,null,e.mode,r)).ref=oy(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=lI(n,e.mode,r)).return=e:(t=i(t,n.children||[])).return=e,t}function c(e,t,n,r,o){return null===t||7!==t.tag?(t=lO(n,e.mode,r,o)).return=e:(t=i(t,n)).return=e,t}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=lF(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case A:return(n=lV(t.type,t.key,t.props,null,e.mode,n)).ref=oy(e,null,t),n.return=e,n;case M:return(t=lI(t,e.mode,n)).return=e,t;case j:return d(e,(0,t._init)(t._payload),n)}if(ev(t)||U(t))return(t=lO(t,e.mode,n,null)).return=e,t;ob(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case A:return n.key===i?l(e,t,n,r):null;case M:return n.key===i?u(e,t,n,r):null;case j:return p(e,t,(i=n._init)(n._payload),r)}if(ev(n)||U(n))return null!==i?null:c(e,t,n,r,null);ob(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case A:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case M:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case j:return h(e,t,n,(0,r._init)(r._payload),i)}if(ev(r)||U(r))return c(t,e=e.get(n)||null,r,i,null);ob(t,r)}return null}return function s(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===L&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case A:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===L){if(7===v.tag){n(l,v.sibling),(u=i(v,c.props.children)).return=l,l=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===j&&ox(g)===v.type){n(l,v.sibling),(u=i(v,c.props)).ref=oy(l,v,c),u.return=l,l=u;break e}n(l,v);break}t(l,v),v=v.sibling}c.type===L?((u=lO(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=lV(c.type,c.key,c.props,null,l.mode,m)).ref=oy(l,u,c),m.return=l,l=m)}return a(l);case M:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=lI(c,l.mode,m)).return=l,l=u}return a(l);case j:return s(l,u,(v=c._init)(c._payload),m)}if(ev(c))return function(i,a,s,l){for(var u=null,c=null,f=a,m=a=0,g=null;null!==f&&m<s.length;m++){f.index>m?(g=f,f=null):g=f.sibling;var v=p(i,f,s[m],l);if(null===v){null===f&&(f=g);break}e&&f&&null===v.alternate&&t(i,f),a=o(v,a,m),null===c?u=v:c.sibling=v,c=v,f=g}if(m===s.length)return n(i,f),iB&&iO(i,m),u;if(null===f){for(;m<s.length;m++)null!==(f=d(i,s[m],l))&&(a=o(f,a,m),null===c?u=f:c.sibling=f,c=f);return iB&&iO(i,m),u}for(f=r(i,f);m<s.length;m++)null!==(g=h(f,i,m,s[m],l))&&(e&&null!==g.alternate&&f.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&f.forEach(function(e){return t(i,e)}),iB&&iO(i,m),u}(l,u,c,m);if(U(c))return function(i,a,s,l){var u=U(s);if("function"!=typeof u)throw Error(f(150));if(null==(s=u.call(s)))throw Error(f(151));for(var c=u=null,m=a,g=a=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(i,m,y.value,l);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),a=o(b,a,g),null===c?u=b:c.sibling=b,c=b,m=v}if(y.done)return n(i,m),iB&&iO(i,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=d(i,y.value,l))&&(a=o(y,a,g),null===c?u=y:c.sibling=y,c=y);return iB&&iO(i,g),u}for(m=r(i,m);!y.done;g++,y=s.next())null!==(y=h(m,i,g,y.value,l))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),a=o(y,a,g),null===c?u=y:c.sibling=y,c=y);return e&&m.forEach(function(e){return t(i,e)}),iB&&iO(i,g),u}(l,u,c,m);ob(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l):(n(l,u),(u=lF(c,l.mode,m)).return=l),a(l=u)):n(l,u)}}var oE=ow(!0),oS=ow(!1),ok={},oP=io(ok),oC=io(ok),oT=io(ok);function oA(e){if(e===ok)throw Error(f(174));return e}function oM(e,t){switch(is(oT,t),is(oC,e),is(oP,ok),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ek(null,"");break;default:t=ek(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ia(oP),is(oP,t)}function oL(){ia(oP),ia(oC),ia(oT)}function oR(e){oA(oT.current);var t=oA(oP.current),n=ek(t,e.type);t!==n&&(is(oC,e),is(oP,n))}function oD(e){oC.current===e&&(ia(oP),ia(oC))}var oV=io(0);function oO(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oN=[];function oF(){for(var e=0;e<oN.length;e++)oN[e]._workInProgressVersionPrimary=null;oN.length=0}var oI=T.ReactCurrentDispatcher,oz=T.ReactCurrentBatchConfig,oj=0,oB=null,o_=null,oU=null,oW=!1,o$=!1,oH=0,oG=0;function oK(){throw Error(f(321))}function oY(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!n9(e[n],t[n]))return!1;return!0}function oq(e,t,n,r,i,o){if(oj=o,oB=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oI.current=null===e||null===e.memoizedState?aE:aS,e=n(r,i),o$){o=0;do{if(o$=!1,oH=0,25<=o)throw Error(f(301));o+=1,oU=o_=null,t.updateQueue=null,oI.current=ak,e=n(r,i)}while(o$)}if(oI.current=aw,t=null!==o_&&null!==o_.next,oj=0,oU=o_=oB=null,oW=!1,t)throw Error(f(300));return e}function oX(){var e=0!==oH;return oH=0,e}function oQ(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===oU?oB.memoizedState=oU=e:oU=oU.next=e,oU}function oZ(){if(null===o_){var e=oB.alternate;e=null!==e?e.memoizedState:null}else e=o_.next;var t=null===oU?oB.memoizedState:oU.next;if(null!==t)oU=t,o_=e;else{if(null===e)throw Error(f(310));e={memoizedState:(o_=e).memoizedState,baseState:o_.baseState,baseQueue:o_.baseQueue,queue:o_.queue,next:null},null===oU?oB.memoizedState=oU=e:oU=oU.next=e}return oU}function oJ(e,t){return"function"==typeof t?t(e):t}function o0(e){var t=oZ(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=o_,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((oj&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=d,a=r):l=l.next=d,oB.lanes|=c,sG|=c}u=u.next}while(null!==u&&u!==o)null===l?a=r:l.next=s,n9(r,t.memoizedState)||(aK=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do o=i.lane,oB.lanes|=o,sG|=o,i=i.next;while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function o1(e){var t=oZ(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i)n9(o,t.memoizedState)||(aK=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function o2(){}function o3(e,t){var n=oB,r=oZ(),i=t(),o=!n9(r.memoizedState,i);if(o&&(r.memoizedState=i,aK=!0),r=r.queue,ao(o6.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==oU&&1&oU.memoizedState.tag){if(n.flags|=2048,ae(9,o5.bind(null,n,r,i,t),void 0,null),null===sj)throw Error(f(349));0!=(30&oj)||o4(n,t,i)}return i}function o4(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oB.updateQueue)?(t={lastEffect:null,stores:null},oB.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function o5(e,t,n,r){t.value=n,t.getSnapshot=r,o8(t)&&o7(e)}function o6(e,t,n){return n(function(){o8(t)&&o7(e)})}function o8(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!n9(e,n)}catch(e){return!0}}function o7(e){var t=ot(e,1);null!==t&&lr(t,e,1,-1)}function o9(e){var t=oQ();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oJ,lastRenderedState:e},t.queue=e,e=e.dispatch=av.bind(null,oB,e),[t.memoizedState,e]}function ae(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oB.updateQueue)?(t={lastEffect:null,stores:null},oB.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function at(){return oZ().memoizedState}function an(e,t,n,r){var i=oQ();oB.flags|=e,i.memoizedState=ae(1|t,n,void 0,void 0===r?null:r)}function ar(e,t,n,r){var i=oZ();r=void 0===r?null:r;var o=void 0;if(null!==o_){var a=o_.memoizedState;if(o=a.destroy,null!==r&&oY(r,a.deps)){i.memoizedState=ae(t,n,o,r);return}}oB.flags|=e,i.memoizedState=ae(1|t,n,o,r)}function ai(e,t){return an(8390656,8,e,t)}function ao(e,t){return ar(2048,8,e,t)}function aa(e,t){return ar(4,2,e,t)}function as(e,t){return ar(4,4,e,t)}function al(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function au(e,t,n){return n=null!=n?n.concat([e]):null,ar(4,4,al.bind(null,t,e),n)}function ac(){}function ad(e,t){var n=oZ();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&oY(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=oZ();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&oY(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ap(e,t,n){return 0==(21&oj)?(e.baseState&&(e.baseState=!1,aK=!0),e.memoizedState=n):(n9(n,t)||(n=tR(),oB.lanes|=n,sG|=n,e.baseState=!0),t)}function ah(e,t){var n=tI;tI=0!==n&&4>n?n:4,e(!0);var r=oz.transition;oz.transition={};try{e(!1),t()}finally{tI=n,oz.transition=r}}function am(){return oZ().memoizedState}function ag(e,t,n){var r=ln(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ay(e)?ab(t,n):null!==(n=oe(e,t,n,r))&&(lr(n,e,r,lt()),ax(n,t,r)),tE(e,r)}function av(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ay(e))ab(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,n9(s,a)){var l=t.interleaved;null===l?(i.next=i,i9(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(n=oe(e,t,i,r))&&(lr(n,e,r,i=lt()),ax(n,t,r))}tE(e,r)}function ay(e){var t=e.alternate;return e===oB||null!==t&&t===oB}function ab(e,t){o$=oW=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ax(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tO(e,n)}}var aw={readContext:i8,useCallback:oK,useContext:oK,useEffect:oK,useImperativeHandle:oK,useInsertionEffect:oK,useLayoutEffect:oK,useMemo:oK,useReducer:oK,useRef:oK,useState:oK,useDebugValue:oK,useDeferredValue:oK,useTransition:oK,useMutableSource:oK,useSyncExternalStore:oK,useId:oK,unstable_isNewReconciler:!1},aE={readContext:i8,useCallback:function(e,t){return oQ().memoizedState=[e,void 0===t?null:t],e},useContext:i8,useEffect:ai,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,an(4194308,4,al.bind(null,t,e),n)},useLayoutEffect:function(e,t){return an(4194308,4,e,t)},useInsertionEffect:function(e,t){return an(4,2,e,t)},useMemo:function(e,t){var n=oQ();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=oQ();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ag.bind(null,oB,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},oQ().memoizedState=e},useState:o9,useDebugValue:ac,useDeferredValue:function(e){return oQ().memoizedState=e},useTransition:function(){var e=o9(!1),t=e[0];return e=ah.bind(null,e[1]),oQ().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oB,i=oQ();if(iB){if(void 0===n)throw Error(f(407));n=n()}else{if(n=t(),null===sj)throw Error(f(349));0!=(30&oj)||o4(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ai(o6.bind(null,r,o,e),[e]),r.flags|=2048,ae(9,o5.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=oQ(),t=sj.identifierPrefix;if(iB){var n=iV,r=iD;t=":"+t+"R"+(n=(r&~(1<<32-tS(r)-1)).toString(32)+n),0<(n=oH++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=oG++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},aS={readContext:i8,useCallback:ad,useContext:i8,useEffect:ao,useImperativeHandle:au,useInsertionEffect:aa,useLayoutEffect:as,useMemo:af,useReducer:o0,useRef:at,useState:function(){return o0(oJ)},useDebugValue:ac,useDeferredValue:function(e){return ap(oZ(),o_.memoizedState,e)},useTransition:function(){return[o0(oJ)[0],oZ().memoizedState]},useMutableSource:o2,useSyncExternalStore:o3,useId:am,unstable_isNewReconciler:!1},ak={readContext:i8,useCallback:ad,useContext:i8,useEffect:ao,useImperativeHandle:au,useInsertionEffect:aa,useLayoutEffect:as,useMemo:af,useReducer:o1,useRef:at,useState:function(){return o1(oJ)},useDebugValue:ac,useDeferredValue:function(e){var t=oZ();return null===o_?t.memoizedState=e:ap(t,o_.memoizedState,e)},useTransition:function(){return[o1(oJ)[0],oZ().memoizedState]},useMutableSource:o2,useSyncExternalStore:o3,useId:am,unstable_isNewReconciler:!1},aP=d.unstable_now,aC=0,aT=-1,aA=-1,aM=-1,aL=!1,aR=!1;function aD(e,t){if(0<=aA){var n=aP()-aA;e.actualDuration+=n,t&&(e.selfBaseDuration=n),aA=-1}}function aV(e){if(0<=aT){var t=aP()-aT;for(aT=-1,e=e.return;null!==e;){switch(e.tag){case 3:case 12:e.stateNode.effectDuration+=t;return}e=e.return}}}function aO(e){if(0<=aM){var t=aP()-aM;for(aM=-1,e=e.return;null!==e;){switch(e.tag){case 3:case 12:null!==(e=e.stateNode)&&(e.passiveEffectDuration+=t);return}e=e.return}}}function aN(){aT=aP()}function aF(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function aI(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1);case 11:return e=eo(e.type.render,!1);case 1:return e=eo(e.type,!0);default:return""}}(r),r=r.return;while(r)var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function az(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function aj(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var aB="function"==typeof WeakMap?WeakMap:Map;function a_(e,t,n){(n=oo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){s0||(s0=!0,s1=r),aj(e,t)},n}function aU(e,t,n){(n=oo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){aj(e,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){aj(e,t),"function"!=typeof r&&(null===s2?s2=new Set([this]):s2.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function aW(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new aB;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),r=lk.bind(null,e,t,n),tf&&lA(e,n),t.then(r,r))}function a$(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function aH(e,t,n,r,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=oo(-1,1)).tag=2,oa(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=i),e}var aG=T.ReactCurrentOwner,aK=!1;function aY(e,t,n,r){t.child=null===e?oS(t,null,n,r):oE(t,e.child,n,r)}function aq(e,t,n,r,i){n=n.render;var o=t.ref;return(i6(t,i),tg(t),r=oq(e,t,n,r,o,i),n=oX(),tv(),null===e||aK)?(iB&&n&&iF(t),t.flags|=1,aY(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,si(e,t,i))}function aX(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||lR(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=lV(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,aQ(e,t,o,r,i))}if(o=e.child,0==(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:re)(a,r)&&e.ref===t.ref)return si(e,t,i)}return t.flags|=1,(e=lD(o,r)).ref=t.ref,e.return=t,t.child=e}function aQ(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(re(o,r)&&e.ref===t.ref){if(aK=!1,t.pendingProps=r=o,0==(e.lanes&i))return t.lanes=e.lanes,si(e,t,i);0!=(131072&e.flags)&&(aK=!0)}}return a0(e,t,n,r,i)}function aZ(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},is(sW,sU),sU|=n;else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,is(sW,sU),sU|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,is(sW,sU),sU|=r}}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,is(sW,sU),sU|=r;return aY(e,t,i,n),t.child}function aJ(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function a0(e,t,n,r,i){var o=ih(n)?id:iu.current;return(o=ip(t,o),i6(t,i),tg(t),n=oq(e,t,n,r,o,i),r=oX(),tv(),null===e||aK)?(iB&&r&&iF(t),t.flags|=1,aY(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,si(e,t,i))}function a1(e,t,n,r,i){if(ih(n)){var o=!0;iy(t)}else o=!1;if(i6(t,i),null===t.stateNode)sr(e,t),om(t,n,r),ov(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;u="object"==typeof u&&null!==u?i8(u):ip(t,u=ih(n)?id:iu.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==u)&&og(t,a,r,u),on=!1;var f=t.memoizedState;a.state=f,ou(t,r,a,i),l=t.memoizedState,s!==r||f!==l||ic.current||on?("function"==typeof c&&(of(t,n,c,r),l=t.memoizedState),(s=on||oh(t,n,s,r,f,l,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oi(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:iZ(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l="object"==typeof(l=n.contextType)&&null!==l?i8(l):ip(t,l=ih(n)?id:iu.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||f!==l)&&og(t,a,r,l),on=!1,f=t.memoizedState,a.state=f,ou(t,r,a,i);var h=t.memoizedState;s!==d||f!==h||ic.current||on?("function"==typeof p&&(of(t,n,p,r),h=t.memoizedState),(u=on||oh(t,n,u,r,f,h,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a2(e,t,n,r,o,i)}function a2(e,t,n,r,i,o){aJ(e,t);var a=0!=(128&t.flags);if(!r&&!a)return i&&ib(t,n,!1),si(e,t,o);if(r=t.stateNode,aG.current=t,a&&"function"!=typeof n.getDerivedStateFromError){var s=null;aA=-1}else tg(t),s=r.render(),tv();return t.flags|=1,null!==e&&a?(a=s,t.child=oE(t,e.child,null,o),t.child=oE(t,null,a,o)):aY(e,t,s,o),t.memoizedState=r.state,i&&ib(t,n,!0),t.child}function a3(e){var t=e.stateNode;t.pendingContext?ig(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ig(e,t.context,!1),oM(e,t.containerInfo)}function a4(e,t,n,r,i){return iq(),iX(i),t.flags|=256,aY(e,t,n,r),t.child}var a5={dehydrated:null,treeContext:null,retryLane:0};function a6(e){return{baseLanes:e,cachePool:null,transitions:null}}function a8(e,t,n){var r,i=t.pendingProps,o=oV.current,a=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(o|=1),is(oV,1&o),null===e)return(iH(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=s,2&t.mode&&(a.actualDuration=0,a.actualStartTime=-1,a.selfBaseDuration=0,a.treeBaseDuration=0)):a=lN(s,i,0,null),e=lO(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=a6(n),t.memoizedState=a5,e):a7(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,a){if(n)return 256&t.flags?(t.flags&=-257,a9(e,t,a,r=az(Error(f(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=lN({mode:"visible",children:r.children},i,0,null),o=lO(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!=(1&t.mode)&&oE(t,e.child,null,a),t.child.memoizedState=a6(a),t.memoizedState=a5,o);if(0==(1&t.mode))return a9(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,a9(e,t,a,r=az(o=Error(f(419)),r,void 0))}if(s=0!=(a&e.childLanes),aK||s){if(null!==(r=sj)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|a))?0:i)&&i!==o.retryLane&&(o.retryLane=i,ot(e,i),lr(r,e,i,-1))}return lg(),a9(e,t,a,r=az(Error(f(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=lC.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ij=rJ(i.nextSibling),iz=t,iB=!0,i_=null,null!==e&&(iM[iL++]=iD,iM[iL++]=iV,iM[iL++]=iR,iD=e.id,iV=e.overflow,iR=t),t=a7(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,o,n);if(a){a=i.fallback,s=t.mode,r=(o=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=l,2&t.mode&&(i.actualDuration=0,i.actualStartTime=-1,i.selfBaseDuration=o.selfBaseDuration,i.treeBaseDuration=o.treeBaseDuration),t.deletions=null):(i=lD(o,l)).subtreeFlags=14680064&o.subtreeFlags,null!==r?a=lD(r,a):(a=lO(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=null===(s=e.child.memoizedState)?a6(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=a5,i}return e=(a=e.child).sibling,i=lD(a,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function a7(e,t){return(t=lN({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function a9(e,t,n,r){return null!==r&&iX(r),oE(t,e.child,null,n),e=a7(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function se(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),i5(e.return,t,n)}function st(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function sn(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(aY(e,t,r.children,n),0!=(2&(r=oV.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&se(e,n,t);else if(19===e.tag)se(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(is(oV,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===oO(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),st(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===oO(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}st(t,!0,n,null,o);break;case"together":st(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sr(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function si(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),aA=-1,sG|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(f(153));if(null!==t.child){for(n=lD(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=lD(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function so(e,t){if(!iB)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sa(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t){if(0!=(2&e.mode)){for(var i=e.selfBaseDuration,o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,i+=o.treeBaseDuration,o=o.sibling;e.treeBaseDuration=i}else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling}else if(0!=(2&e.mode)){i=e.actualDuration,o=e.selfBaseDuration;for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,i+=a.actualDuration,o+=a.treeBaseDuration,a=a.sibling;e.actualDuration=i,e.treeBaseDuration=o}else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ss(e,t,n){var r=t.pendingProps;switch(iI(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sa(t),null;case 1:case 17:return ih(t.type)&&im(),sa(t),null;case 3:return r=t.stateNode,oL(),ia(ic),ia(iu),oF(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(iK(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==i_&&(ls(i_),i_=null))),o(e,t),sa(t),null;case 5:oD(t);var l=oA(oT.current);if(n=t.type,null!==e&&null!=t.stateNode)a(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(f(166));return sa(t),null}if(e=oA(oP.current),iK(t)){r=t.stateNode,e=t.type,n=t.memoizedProps,r[r2]=t,r[r3]=n;var u=0!=(1&t.mode);switch(e){case"dialog":rM("cancel",r),rM("close",r);break;case"iframe":case"object":case"embed":rM("load",r);break;case"video":case"audio":for(l=0;l<rP.length;l++)rM(rP[l],r);break;case"source":rM("error",r);break;case"img":case"image":case"link":rM("error",r),rM("load",r);break;case"details":rM("toggle",r);break;case"input":ef(r,n),rM("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!n.multiple},rM("invalid",r);break;case"textarea":ex(r,n),rM("invalid",r)}for(var c in eO(e,n),l=null,n)if(n.hasOwnProperty(c)){var d=n[c];"children"===c?"string"==typeof d?r.textContent!==d&&(!0!==n.suppressHydrationWarning&&rU(r.textContent,d,u),l=["children",d]):"number"==typeof d&&r.textContent!==""+d&&(!0!==n.suppressHydrationWarning&&rU(r.textContent,d,u),l=["children",""+d]):h.hasOwnProperty(c)&&null!=d&&"onScroll"===c&&rM("scroll",r)}switch(e){case"input":el(r),em(r,n,!0);break;case"textarea":el(r),eE(r);break;case"select":case"option":break;default:"function"==typeof n.onClick&&(r.onclick=rW)}r=l,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[r2]=t,e[r3]=r,i(e,t,!1,!1),t.stateNode=e;e:{switch(c=eN(n,r),n){case"dialog":rM("cancel",e),rM("close",e),l=r;break;case"iframe":case"object":case"embed":rM("load",e),l=r;break;case"video":case"audio":for(l=0;l<rP.length;l++)rM(rP[l],e);l=r;break;case"source":rM("error",e),l=r;break;case"img":case"image":case"link":rM("error",e),rM("load",e),l=r;break;case"details":rM("toggle",e),l=r;break;case"input":ef(e,r),l=ed(e,r),rM("invalid",e);break;case"option":default:l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=en({},r,{value:void 0}),rM("invalid",e);break;case"textarea":ex(e,r),l=eb(e,r),rM("invalid",e)}for(u in eO(n,l),d=l)if(d.hasOwnProperty(u)){var p=d[u];"style"===u?eD(e,p):"dangerouslySetInnerHTML"===u?null!=(p=p?p.__html:void 0)&&eT(e,p):"children"===u?"string"==typeof p?("textarea"!==n||""!==p)&&eA(e,p):"number"==typeof p&&eA(e,""+p):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(h.hasOwnProperty(u)?null!=p&&"onScroll"===u&&rM("scroll",e):null!=p&&C(e,u,p,c))}switch(n){case"input":el(e),em(e,r,!1);break;case"textarea":el(e),eE(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ea(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ey(e,!!r.multiple,u,!1):null!=r.defaultValue&&ey(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=rW)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return sa(t),null;case 6:if(e&&null!=t.stateNode)s(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(f(166));if(e=oA(oT.current),oA(oP.current),iK(t)){if(r=t.stateNode,e=t.memoizedProps,r[r2]=t,(n=r.nodeValue!==e)&&null!==(u=iz))switch(u.tag){case 3:rU(r.nodeValue,e,0!=(1&u.mode));break;case 5:!0!==u.memoizedProps.suppressHydrationWarning&&rU(r.nodeValue,e,0!=(1&u.mode))}n&&(t.flags|=4)}else(r=(9===e.nodeType?e:e.ownerDocument).createTextNode(r))[r2]=t,t.stateNode=r}return sa(t),null;case 13:if(ia(oV),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(iB&&null!==ij&&0!=(1&t.mode)&&0==(128&t.flags))iY(),iq(),t.flags|=98560,u=!1;else if(u=iK(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(f(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(f(317));u[r2]=t,sa(t),0!=(2&t.mode)&&null!==r&&null!==(u=t.child)&&(t.treeBaseDuration-=u.treeBaseDuration)}else iq(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4,sa(t),0!=(2&t.mode)&&null!==r&&null!==(u=t.child)&&(t.treeBaseDuration-=u.treeBaseDuration);u=!1}else null!==i_&&(ls(i_),i_=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,0!=(2&t.mode)&&aF(t),t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&oV.current)?0===s$&&(s$=3):lg())),null!==t.updateQueue&&(t.flags|=4),sa(t),0!=(2&t.mode)&&r&&null!==(r=t.child)&&(t.treeBaseDuration-=r.treeBaseDuration),null;case 4:return oL(),o(e,t),null===e&&rD(t.stateNode.containerInfo),sa(t),null;case 10:return i4(t.type._context),sa(t),null;case 19:if(ia(oV),null===(u=t.memoizedState))return sa(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)so(u,!1);else{if(0!==s$||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=oO(e))){for(t.flags|=128,so(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,e=t.child;null!==e;)n=e,c=r,n.flags&=14680066,null===(u=n.alternate)?(n.childLanes=0,n.lanes=c,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null,n.selfBaseDuration=0,n.treeBaseDuration=0):(n.childLanes=u.childLanes,n.lanes=u.lanes,n.child=u.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=u.memoizedProps,n.memoizedState=u.memoizedState,n.updateQueue=u.updateQueue,n.type=u.type,c=u.dependencies,n.dependencies=null===c?null:{lanes:c.lanes,firstContext:c.firstContext},n.selfBaseDuration=u.selfBaseDuration,n.treeBaseDuration=u.treeBaseDuration),e=e.sibling;return is(oV,1&oV.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>sZ&&(t.flags|=128,r=!0,so(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=oO(c))){if(t.flags|=128,r=!0,null!==(e=e.updateQueue)&&(t.updateQueue=e,t.flags|=4),so(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!iB)return sa(t),null}else 2*tn()-u.renderingStartTime>sZ&&1073741824!==n&&(t.flags|=128,r=!0,so(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(e=u.last)?e.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,e=oV.current,is(oV,r?1&e|2:1&e),t;return sa(t),null;case 22:case 23:return lf(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&sU)&&(sa(t),6&t.subtreeFlags&&(t.flags|=8192)):sa(t),null;case 24:case 25:return null}throw Error(f(156,t.tag))}i=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},o=function(){},a=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,oA(oP.current);var o,a=null;switch(n){case"input":i=ed(e,i),r=ed(e,r),a=[];break;case"select":i=en({},i,{value:void 0}),r=en({},r,{value:void 0}),a=[];break;case"textarea":i=eb(e,i),r=eb(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=rW)}for(u in eO(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u]){if("style"===u){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(h.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in r){var l=r[u];if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s)){if("style"===u){if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(h.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&rM("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},s=function(e,t,n,r){n!==r&&(t.flags|=4)};var sl=!1,su=!1,sc="function"==typeof WeakSet?WeakSet:Set,sd=null,sf=null,sp=null;function sh(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,2&e.mode)try{aN(),t.componentWillUnmount()}finally{aV(e)}else t.componentWillUnmount()}function sm(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{if(2&e.mode)try{aN(),n(null)}finally{aV(e)}else n(null)}catch(n){lS(e,t,n)}else n.current=null}}function sg(e,t,n){try{n()}catch(n){lS(e,t,n)}}var sv=!1;function sy(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&(0!=(8&e)?null!==td&&"function"==typeof td.markComponentPassiveEffectUnmountStarted&&td.markComponentPassiveEffectUnmountStarted(t):0!=(4&e)&&ty(t),sg(t,n,o),0!=(8&e)?null!==td&&"function"==typeof td.markComponentPassiveEffectUnmountStopped&&td.markComponentPassiveEffectUnmountStopped():0!=(4&e)&&tb())}i=i.next}while(i!==r)}}function sb(e,t){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{if((r.tag&e)===e){0!=(8&e)?null!==td&&"function"==typeof td.markComponentPassiveEffectMountStarted&&td.markComponentPassiveEffectMountStarted(t):0!=(4&e)&&null!==td&&"function"==typeof td.markComponentLayoutEffectMountStarted&&td.markComponentLayoutEffectMountStarted(t);var i=r.create;r.destroy=i(),0!=(8&e)?null!==td&&"function"==typeof td.markComponentPassiveEffectMountStopped&&td.markComponentPassiveEffectMountStopped():0!=(4&e)&&null!==td&&"function"==typeof td.markComponentLayoutEffectMountStopped&&td.markComponentLayoutEffectMountStopped()}r=r.next}while(r!==n)}}function sx(e){var t=e.ref;if(null!==t){var n=e.stateNode;if("function"==typeof t){if(2&e.mode)try{aN(),t(n)}finally{aV(e)}else t(n)}else t.current=n}}function sw(e){return 5===e.tag||3===e.tag||4===e.tag}function sE(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var sS=null,sk=!1;function sP(e,t,n){for(n=n.child;null!==n;)sC(e,t,n),n=n.sibling}function sC(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:su||sm(n,t);case 6:var r=sS,i=sk;sS=null,sP(e,t,n),sS=r,sk=i,null!==sS&&(sk?(e=sS,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):sS.removeChild(n.stateNode));break;case 18:null!==sS&&(sk?(e=sS,n=n.stateNode,8===e.nodeType?rZ(e.parentNode,n):1===e.nodeType&&rZ(e,n),t6(e)):rZ(sS,n.stateNode));break;case 4:r=sS,i=sk,sS=n.stateNode.containerInfo,sk=!0,sP(e,t,n),sS=r,sk=i;break;case 0:case 11:case 14:case 15:if(!su&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!=(2&o)?sg(n,t,a):0!=(4&o)&&(ty(n),2&n.mode?(aN(),sg(n,t,a),aV(n)):sg(n,t,a),tb())),i=i.next}while(i!==r)}sP(e,t,n);break;case 1:if(!su&&(sm(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{sh(n,r)}catch(e){lS(n,t,e)}sP(e,t,n);break;case 21:default:sP(e,t,n);break;case 22:1&n.mode?(su=(r=su)||null!==n.memoizedState,sP(e,t,n),su=r):sP(e,t,n)}}function sT(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new sc),t.forEach(function(t){var r=lT.bind(null,e,t);if(!n.has(t)){if(n.add(t),tf){if(null!==sf&&null!==sp)lA(sp,sf);else throw Error(f(413))}t.then(r,r)}})}}function sA(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:sS=a.stateNode,sk=!1;break e;case 3:case 4:sS=a.stateNode.containerInfo,sk=!0;break e}a=a.return}if(null===sS)throw Error(f(160));sC(e,o,i),sS=null,sk=!1;var s=i.alternate;null!==s&&(s.return=null),i.return=null}catch(e){lS(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)sM(t,e),t=t.sibling}function sM(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sA(t,e),sL(e),4&r){try{sy(3,e,e.return),sb(3,e)}catch(t){lS(e,e.return,t)}if(2&e.mode){try{aN(),sy(5,e,e.return)}catch(t){lS(e,e.return,t)}aV(e)}else try{sy(5,e,e.return)}catch(t){lS(e,e.return,t)}}break;case 1:sA(t,e),sL(e),512&r&&null!==n&&sm(n,n.return);break;case 5:if(sA(t,e),sL(e),512&r&&null!==n&&sm(n,n.return),32&e.flags){var i=e.stateNode;try{eA(i,"")}catch(t){lS(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,a=null!==n?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===o.type&&null!=o.name&&ep(i,o),eN(s,a);var u=eN(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];"style"===c?eD(i,d):"dangerouslySetInnerHTML"===c?eT(i,d):"children"===c?eA(i,d):C(i,c,d,u)}switch(s){case"input":eh(i,o);break;case"textarea":ew(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ey(i,!!o.multiple,h,!1):!!o.multiple!==p&&(null!=o.defaultValue?ey(i,!!o.multiple,o.defaultValue,!0):ey(i,!!o.multiple,o.multiple?[]:"",!1))}i[r3]=o}catch(t){lS(e,e.return,t)}}break;case 6:if(sA(t,e),sL(e),4&r){if(null===e.stateNode)throw Error(f(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(t){lS(e,e.return,t)}}break;case 3:if(sA(t,e),sL(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{t6(t.containerInfo)}catch(t){lS(e,e.return,t)}break;case 4:default:sA(t,e),sL(e);break;case 13:sA(t,e),sL(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,o&&(null===i.alternate||null===i.alternate.memoizedState)&&(sQ=tn())),4&r&&sT(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(su=(u=su)||c,sA(t,e),su=u):sA(t,e),sL(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(sd=e,c=e.child;null!==c;){for(d=sd=c;null!==sd;){switch(h=(p=sd).child,p.tag){case 0:case 11:case 14:case 15:if(2&p.mode)try{aN(),sy(4,p,p.return)}finally{aV(p)}else sy(4,p,p.return);break;case 1:if(sm(p,p.return),"function"==typeof(r=p.stateNode).componentWillUnmount){n=p,t=p.return;try{sh(n,r)}catch(e){lS(n,t,e)}}break;case 5:sm(p,p.return);break;case 22:if(null!==p.memoizedState){sD(d);continue}}null!==h?(h.return=p,sd=h):sD(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?(o=i.style,"function"==typeof o.setProperty?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,a=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=eR("display",a))}catch(t){lS(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){lS(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:sA(t,e),sL(e),4&r&&sT(e);case 21:}}function sL(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(sw(n)){var r=n;break e}n=n.return}throw Error(f(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(eA(i,""),r.flags&=-33);var o=sE(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=sE(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rW));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,s,a);break;default:throw Error(f(161))}}catch(t){lS(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function sR(e){for(;null!==sd;){var t=sd;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:if(!su){if(2&t.mode)try{aN(),sb(5,t)}finally{aV(t)}else sb(5,t)}break;case 1:var r=t.stateNode;if(4&t.flags&&!su){if(null===n){if(2&t.mode)try{aN(),r.componentDidMount()}finally{aV(t)}else r.componentDidMount()}else{var i=t.elementType===t.type?n.memoizedProps:iZ(t.type,n.memoizedProps),o=n.memoizedState;if(2&t.mode)try{aN(),r.componentDidUpdate(i,o,r.__reactInternalSnapshotBeforeUpdate)}finally{aV(t)}else r.componentDidUpdate(i,o,r.__reactInternalSnapshotBeforeUpdate)}}var a=t.updateQueue;null!==a&&oc(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){var l=null;if(null!==t.child)switch(t.child.tag){case 5:case 1:l=t.child.stateNode}oc(t,s,l)}break;case 5:var u=t.stateNode;if(null===n&&4&t.flags){l=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&l.focus();break;case"img":c.src&&(l.src=c.src)}}break;case 6:case 4:case 19:case 17:case 21:case 22:case 23:case 25:break;case 12:var d,p,h=t.memoizedProps,m=h.onCommit,g=h.onRender,v=t.stateNode.effectDuration;l=aC,n=null===n?"mount":"update",aL&&(n="nested-update"),"function"==typeof g&&g(t.memoizedProps.id,n,t.actualDuration,t.treeBaseDuration,t.actualStartTime,l),"function"==typeof m&&m(t.memoizedProps.id,n,v,l),s6.push(t),s3||(s3=!0,d=ta,p=function(){return lw(),null},e7(d,p));var y=t.return;e:for(;null!==y;){switch(y.tag){case 3:case 12:y.stateNode.effectDuration+=v;break e}y=y.return}break;case 13:if(null===t.memoizedState){var b=t.alternate;if(null!==b){var x=b.memoizedState;if(null!==x){var w=x.dehydrated;null!==w&&t6(w)}}}break;default:throw Error(f(163))}su||512&t.flags&&sx(t)}catch(e){lS(t,t.return,e)}}if(t===e){sd=null;break}if(null!==(l=t.sibling)){l.return=t.return,sd=l;break}sd=t.return}}function sD(e){for(;null!==sd;){var t=sd;if(t===e){sd=null;break}var n=t.sibling;if(null!==n){n.return=t.return,sd=n;break}sd=t.return}}function sV(e){for(;null!==sd;){var t=sd;try{switch(t.tag){case 0:case 11:case 15:if(2&t.mode)try{aN();var n=t.return;try{sb(4,t)}catch(e){lS(t,n,e)}}finally{aV(t)}else{var r=t.return;try{sb(4,t)}catch(e){lS(t,r,e)}}break;case 1:var i=t.stateNode;if("function"==typeof i.componentDidMount){var o=t.return;try{i.componentDidMount()}catch(e){lS(t,o,e)}}var a=t.return;try{sx(t)}catch(e){lS(t,a,e)}break;case 5:var s=t.return;try{sx(t)}catch(e){lS(t,s,e)}}}catch(e){lS(t,t.return,e)}if(t===e){sd=null;break}var l=t.sibling;if(null!==l){l.return=t.return,sd=l;break}sd=t.return}}var sO=Math.ceil,sN=T.ReactCurrentDispatcher,sF=T.ReactCurrentOwner,sI=T.ReactCurrentBatchConfig,sz=0,sj=null,sB=null,s_=0,sU=0,sW=io(0),s$=0,sH=null,sG=0,sK=0,sY=0,sq=null,sX=null,sQ=0,sZ=1/0,sJ=null,s0=!1,s1=null,s2=null,s3=!1,s4=null,s5=0,s6=[],s8=0,s7=null,s9=-1,le=0;function lt(){return 0!=(6&sz)?tn():-1!==s9?s9:s9=tn()}function ln(e){return 0==(1&e.mode)?1:0!=(2&sz)&&0!==s_?s_&-s_:null!==iQ.transition?(0===le&&(le=tR()),le):0!==(e=tI)?e:e=void 0===(e=window.event)?16:ni(e.type)}function lr(e,t,n,r){if(50<s8)throw s8=0,s7=null,Error(f(185));tV(e,n,r),(0==(2&sz)||e!==sj)&&(tf&&tN(e,t,n),e===sj&&(0==(2&sz)&&(sK|=n),4===s$&&ll(e,s_)),li(e,r),1===n&&0===sz&&0==(1&t.mode)&&(sZ=tn()+500,iw&&ik()))}function li(e,t){var n,r,i,o=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-tS(o),s=1<<a,l=i[a];-1===l?(0==(s&n)||0!=(s&r))&&(i[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var a=tM(e,e===sj?s_:0);if(0===a)null!==o&&e9(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=o&&e9(o),1===t)0===e.tag?(i=lu.bind(null,e),iw=!0,iS(i)):iS(lu.bind(null,e)),rX(function(){0==(6&sz)&&ik()}),o=null;else{switch(tz(a)){case 1:o=ti;break;case 4:o=to;break;case 16:default:o=ta;break;case 536870912:o=tl}o=e7(o,lo.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function lo(e,t){if(aR=aL=!1,s9=-1,le=0,0!=(6&sz))throw Error(f(327));var n=e.callbackNode;if(lw()&&e.callbackNode!==n)return null;var r=tM(e,e===sj?s_:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=lv(e,r);else{t=r;var i=sz;sz|=2;var o=lm();if(sj!==e||s_!==t){if(tf){var a=e.memoizedUpdaters;0<a.size&&(lA(e,s_),a.clear()),tF(e,t)}sJ=null,sZ=tn()+500,lp(e,t)}for(tx(t);;)try{(function(){for(;null!==sB&&!te();)ly(sB)})();break}catch(t){lh(e,t)}i3(),sN.current=o,sz=i,null!==sB?(null!==td&&"function"==typeof td.markRenderYielded&&td.markRenderYielded(),t=0):(tw(),sj=null,s_=0,t=s$)}if(0!==t){if(2===t&&0!==(i=tL(e))&&(r=i,t=la(e,i)),1===t)throw n=sH,lp(e,0),ll(e,r),li(e,tn()),n;if(6===t)ll(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!n9(o(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=lv(e,r))&&0!==(o=tL(e))&&(r=o,t=la(e,o)),1===t))throw n=sH,lp(e,0),ll(e,r),li(e,tn()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(f(345));case 2:case 5:lx(e,sX,sJ);break;case 3:if(ll(e,r),(130023424&r)===r&&10<(t=sQ+500-tn())){if(0!==tM(e,0))break;if(((i=e.suspendedLanes)&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rK(lx.bind(null,e,sX,sJ),t);break}lx(e,sX,sJ);break;case 4:if(ll(e,r),(4194240&r)===r)break;for(i=-1,t=e.eventTimes;0<r;)o=1<<(a=31-tS(r)),(a=t[a])>i&&(i=a),r&=~o;if(r=i,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sO(r/1960))-r)){e.timeoutHandle=rK(lx.bind(null,e,sX,sJ),r);break}lx(e,sX,sJ);break;default:throw Error(f(329))}}}return li(e,tn()),e.callbackNode===n?lo.bind(null,e):null}function la(e,t){var n=sq;return e.current.memoizedState.isDehydrated&&(lp(e,t).flags|=256),2!==(e=lv(e,t))&&(t=sX,sX=n,null!==t&&ls(t)),e}function ls(e){null===sX?sX=e:sX.push.apply(sX,e)}function ll(e,t){for(t&=~sY,t&=~sK,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tS(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(aL=aR,aR=!1,0!=(6&sz))throw Error(f(327));lw();var t=tM(e,0);if(0==(1&t))return li(e,tn()),null;var n=lv(e,t);if(0!==e.tag&&2===n){var r=tL(e);0!==r&&(t=r,n=la(e,r))}if(1===n)throw n=sH,lp(e,0),ll(e,t),li(e,tn()),n;if(6===n)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lx(e,sX,sJ),li(e,tn()),null}function lc(e,t){var n=sz;sz|=1;try{return e(t)}finally{0===(sz=n)&&(sZ=tn()+500,iw&&ik())}}function ld(e){null!==s4&&0===s4.tag&&0==(6&sz)&&lw();var t=sz;sz|=1;var n=sI.transition,r=tI;try{if(sI.transition=null,tI=1,e)return e()}finally{tI=r,sI.transition=n,0==(6&(sz=t))&&ik()}}function lf(){sU=sW.current,ia(sW)}function lp(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rY(n)),null!==sB)for(n=sB.return;null!==n;){var r=n;switch(iI(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&im();break;case 3:oL(),ia(ic),ia(iu),oF();break;case 5:oD(r);break;case 4:oL();break;case 13:case 19:ia(oV);break;case 10:i4(r.type._context);break;case 22:case 23:lf()}n=n.return}if(sj=e,sB=e=lD(e.current,null),s_=sU=t,s$=0,sH=null,sY=sK=sG=0,sX=sq=null,null!==i7){for(t=0;t<i7.length;t++)if(null!==(r=(n=i7[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}i7=null}return e}function lh(e,t){for(;;){var n=sB;try{if(i3(),oI.current=aw,oW){for(var r=oB.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}oW=!1}if(oj=0,oU=o_=oB=null,o$=!1,oH=0,sF.current=null,null===n||null===n.return){s$=1,sH=t,sB=null;break}if(2&n.mode&&aD(n,!0),tv(),null!==t&&"object"==typeof t&&"function"==typeof t.then){var o=t;null!==td&&"function"==typeof td.markComponentSuspended&&td.markComponentSuspended(n,o,s_)}else null!==td&&"function"==typeof td.markComponentErrored&&td.markComponentErrored(n,t,s_);e:{var a=e,s=n.return,l=n;if(o=t,t=s_,l.flags|=32768,tf&&lA(a,t),null!==o&&"object"==typeof o&&"function"==typeof o.then){var u=o,c=l,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=a$(s);if(null!==h){h.flags&=-257,aH(h,s,l,a,t),1&h.mode&&aW(a,u,t),t=h,o=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(o),t.updateQueue=g}else m.add(o);break e}if(0==(1&t)){aW(a,u,t),lg();break e}o=Error(f(426))}else if(iB&&1&l.mode){var v=a$(s);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),aH(v,s,l,a,t),iX(aI(o,l));break e}}a=o=aI(o,l),4!==s$&&(s$=2),null===sq?sq=[a]:sq.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=a_(a,o,t);ol(a,y);break e;case 1:l=o;var b=a.type,x=a.stateNode;if(0==(128&a.flags)&&("function"==typeof b.getDerivedStateFromError||null!==x&&"function"==typeof x.componentDidCatch&&(null===s2||!s2.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=aU(a,l,t);ol(a,w);break e}}a=a.return}while(null!==a)}lb(n)}catch(e){t=e,sB===n&&null!==n&&(sB=n=n.return);continue}break}}function lm(){var e=sN.current;return sN.current=aw,null===e?aw:e}function lg(){(0===s$||3===s$||2===s$)&&(s$=4),null===sj||0==(268435455&sG)&&0==(268435455&sK)||ll(sj,s_)}function lv(e,t){var n=sz;sz|=2;var r=lm();if(sj!==e||s_!==t){if(tf){var i=e.memoizedUpdaters;0<i.size&&(lA(e,s_),i.clear()),tF(e,t)}sJ=null,lp(e,t)}for(tx(t);;)try{(function(){for(;null!==sB;)ly(sB)})();break}catch(t){lh(e,t)}if(i3(),sz=n,sN.current=r,null!==sB)throw Error(f(261));return tw(),sj=null,s_=0,s$}function ly(e){var t=e.alternate;0!=(2&e.mode)?(aA=aP(),0>e.actualStartTime&&(e.actualStartTime=aP()),t=l(t,e,sU),aD(e,!0)):t=l(t,e,sU),e.memoizedProps=e.pendingProps,null===t?lb(e):sB=t,sF.current=null}function lb(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(0==(2&t.mode))n=ss(n,t,sU);else{var r=t;aA=aP(),0>r.actualStartTime&&(r.actualStartTime=aP()),n=ss(n,t,sU),aD(t,!1)}if(null!==n){sB=n;return}}else{if(null!==(n=function(e,t){switch(iI(t),t.tag){case 1:return ih(t.type)&&im(),65536&(e=t.flags)?(t.flags=-65537&e|128,0!=(2&t.mode)&&aF(t),t):null;case 3:return oL(),ia(ic),ia(iu),oF(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return oD(t),null;case 13:if(ia(oV),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(f(340));iq()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,0!=(2&t.mode)&&aF(t),t):null;case 19:return ia(oV),null;case 4:return oL(),null;case 10:return i4(t.type._context),null;case 22:case 23:return lf(),null;default:return null}}(n,t))){n.flags&=32767,sB=n;return}if(0!=(2&t.mode)){for(aD(t,!1),n=t.actualDuration,r=t.child;null!==r;)n+=r.actualDuration,r=r.sibling;t.actualDuration=n}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{s$=6,sB=null;return}}if(null!==(t=t.sibling)){sB=t;return}sB=t=e}while(null!==t)0===s$&&(s$=5)}function lx(e,t,n){var r=tI,i=sI.transition;try{sI.transition=null,tI=1,function(e,t,n,r){do lw();while(null!==s4)if(0!=(6&sz))throw Error(f(327));n=e.finishedWork;var i=e.finishedLanes;if(null!==td&&"function"==typeof td.markCommitStarted&&td.markCommitStarted(i),null===n)return tm();if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tS(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,o),e===sj&&(sB=sj=null,s_=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||s3||(s3=!0,a=ta,s=function(){return lw(),null},e7(a,s)),o=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||o){o=sI.transition,sI.transition=null;var a,s,l,u,c,d,p,h=tI;tI=1;var m=sz;sz|=4,sF.current=null,function(e,t){if(r$=t7,ri(e=rr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i,o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==r&&3!==p.nodeType||(u=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(i=p.firstChild);)h=p,p=i;for(;;){if(p===e)break t;if(h===n&&++c===o&&(l=s),h===a&&++d===r&&(u=s),null!==(i=p.nextSibling))break;h=(p=h).parentNode}p=i}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rH={focusedElem:e,selectionRange:n},t7=!1,sd=t;null!==sd;)if(e=(t=sd).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,sd=e;else for(;null!==sd;){t=sd;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:iZ(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(f(163))}}catch(e){lS(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,sd=e;break}sd=t.return}m=sv,sv=!1}(e,n),aC=aP(),l=e,u=n,sf=i,sp=l,sM(u,l),sp=sf=null,function(e){var t=rr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&ri(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rn(n,o);var a=rn(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rH),t7=!!r$,rH=r$=null,e.current=n,null!==td&&"function"==typeof td.markLayoutEffectsStarted&&td.markLayoutEffectsStarted(i),c=n,d=e,sf=p=i,sp=d,sd=c,function e(t,n,r){for(var i=0!=(1&t.mode);null!==sd;){var o=sd,a=o.child;if(22===o.tag&&i){var s=null!==o.memoizedState||sl;if(!s){var l=o.alternate,u=null!==l&&null!==l.memoizedState||su;l=sl;var c=su;if(sl=s,(su=u)&&!c)for(sd=o;null!==sd;)u=(s=sd).child,22===s.tag&&null!==s.memoizedState?sV(o):null!==u?(u.return=s,sd=u):sV(o);for(;null!==a;)sd=a,e(a,n,r),a=a.sibling;sd=o,sl=l,su=c}sR(t,n,r)}else 0!=(8772&o.subtreeFlags)&&null!==a?(a.return=o,sd=a):sR(t,n,r)}}(c,d,p),sp=sf=null,null!==td&&"function"==typeof td.markLayoutEffectsStopped&&td.markLayoutEffectsStopped(),tt(),sz=m,tI=h,sI.transition=o}else e.current=n,aC=aP();if(s3&&(s3=!1,s4=e,s5=i),0===(o=e.pendingLanes)&&(s2=null),function(e,t){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{var n=128==(128&e.current.flags);switch(t){case 1:var r=ti;break;case 4:r=to;break;case 16:default:r=ta;break;case 536870912:r=tl}tc.onCommitFiberRoot(tu,e,r,n)}catch(e){}}(n.stateNode,r),tf&&e.memoizedUpdaters.clear(),li(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((i=t[n]).value,{componentStack:i.stack,digest:i.digest});if(s0)throw s0=!1,e=s1,s1=null,e;0!=(1&s5)&&0!==e.tag&&lw(),0!=(1&(o=e.pendingLanes))?(aR=!0,e===s7?s8++:(s8=0,s7=e)):s8=0,ik(),tm()}(e,t,n,r)}finally{sI.transition=i,tI=r}return null}function lw(){if(null!==s4){var e=tz(s5),t=sI.transition,n=tI;try{if(sI.transition=null,tI=16>e?16:e,null===s4)var r=!1;else{e=s4;var i=s5;if(s4=null,s5=0,0!=(6&sz))throw Error(f(331));for(null!==td&&"function"==typeof td.markPassiveEffectsStarted&&td.markPassiveEffectsStarted(i),i=sz,sz|=4,sd=e.current;null!==sd;){var o=sd,a=o.child;if(0!=(16&sd.flags)){var s=o.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(sd=u;null!==sd;){var c=sd,d=c;switch(d.tag){case 0:case 11:case 15:2&d.mode?(aM=aP(),sy(8,d,o),aO(d)):sy(8,d,o)}var p=c.child;if(null!==p)p.return=c,sd=p;else for(;null!==sd;){var h=(c=sd).sibling,m=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[r2],delete n[r3],delete n[r5],delete n[r6],delete n[r8]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){sd=null;break}if(null!==h){h.return=m,sd=h;break}sd=m}}}var g=o.alternate;if(null!==g){var v=g.child;if(null!==v){g.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(null!==v)}}sd=o}}if(0!=(2064&o.subtreeFlags)&&null!==a)a.return=o,sd=a;else for(;null!==sd;){if(o=sd,0!=(2048&o.flags))switch((l=o).tag){case 0:case 11:case 15:2&l.mode?(aM=aP(),sy(9,l,l.return),aO(l)):sy(9,l,l.return)}var b=o.sibling;if(null!==b){b.return=o.return,sd=b;break}sd=o.return}}var x=e.current;for(sd=x;null!==sd;){var w=(a=sd).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,sd=w;else for(a=x;null!==sd;){if(s=sd,0!=(2048&s.flags))try{switch((u=s).tag){case 0:case 11:case 15:if(2&u.mode){aM=aP();try{sb(9,u)}finally{aO(u)}}else sb(9,u)}}catch(e){lS(s,s.return,e)}if(s===a){sd=null;break}var E=s.sibling;if(null!==E){E.return=s.return,sd=E;break}sd=s.return}}for(w=0,x=s6,s6=[];w<x.length;w++){var S=x[w];if(0!=(4&S.flags)&&12===S.tag){var k=S.stateNode.passiveEffectDuration,P=S.memoizedProps,C=P.id,T=P.onPostCommit;E=aC;var A=null===S.alternate?"mount":"update";aL&&(A="nested-update"),"function"==typeof T&&T(C,A,k,E);var M=S.return;t:for(;null!==M;){switch(M.tag){case 3:case 12:M.stateNode.passiveEffectDuration+=k;break t}M=M.return}}}if(null!==td&&"function"==typeof td.markPassiveEffectsStopped&&td.markPassiveEffectsStopped(),sz=i,ik(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}var L=e.current.stateNode;L.effectDuration=0,L.passiveEffectDuration=0,r=!0}return r}finally{tI=n,sI.transition=t}}return!1}function lE(e,t,n){t=a_(e,t=aI(n,t),1),e=oa(e,t,1),t=lt(),null!==e&&(tV(e,1,t),li(e,t))}function lS(e,t,n){if(3===e.tag)lE(e,e,n);else for(;null!==t;){if(3===t.tag){lE(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===s2||!s2.has(r))){e=aU(t,e=aI(n,e),1),t=oa(t,e,1),e=lt(),null!==t&&(tV(t,1,e),li(t,e));break}}t=t.return}}function lk(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,sj===e&&(s_&n)===n&&(4===s$||3===s$&&(130023424&s_)===s_&&500>tn()-sQ?lp(e,0):sY|=n),li(e,t)}function lP(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tT,0==(130023424&(tT<<=1))&&(tT=4194304)));var n=lt();null!==(e=ot(e,t))&&(tV(e,t,n),li(e,n))}function lC(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),lP(e,n)}function lT(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(f(314))}null!==r&&r.delete(t),lP(e,n)}function lA(e,t){tf&&e.memoizedUpdaters.forEach(function(n){tN(e,n,t)})}function lM(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=0,this.actualStartTime=-1,this.treeBaseDuration=this.selfBaseDuration=0}function lL(e,t,n,r){return new lM(e,t,n,r)}function lR(e){return!(!(e=e.prototype)||!e.isReactComponent)}function lD(e,t){var n=e.alternate;return null===n?((n=lL(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null,n.actualDuration=0,n.actualStartTime=-1),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n}function lV(e,t,n,r,i,o){var a=2;if(r=e,"function"==typeof e)lR(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case L:return lO(n.children,i,o,t);case R:a=8,i|=8;break;case D:return(e=lL(12,n,t,2|i)).elementType=D,e.lanes=o,e.stateNode={effectDuration:0,passiveEffectDuration:0},e;case F:return(e=lL(13,n,t,i)).elementType=F,e.lanes=o,e;case I:return(e=lL(19,n,t,i)).elementType=I,e.lanes=o,e;case B:return lN(n,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case V:a=10;break e;case O:a=9;break e;case N:a=11;break e;case z:a=14;break e;case j:a=16,r=null;break e}throw Error(f(130,null==e?e:typeof e,""))}return(t=lL(a,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function lO(e,t,n,r){return(e=lL(7,e,r,t)).lanes=n,e}function lN(e,t,n,r){return(e=lL(22,e,r,t)).elementType=B,e.lanes=n,e.stateNode={isHidden:!1},e}function lF(e,t,n){return(e=lL(6,e,null,t)).lanes=n,e}function lI(e,t,n){return(t=lL(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lz(e,t,n,r,i){for(this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tD(0),this.expirationTimes=tD(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tD(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null,this.passiveEffectDuration=this.effectDuration=0,this.memoizedUpdaters=new Set,e=this.pendingUpdatersLaneMap=[],t=0;31>t;t++)e.push(new Set)}function lj(e,t,n,r,i,o,a,s,l){return e=new lz(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,tf&&(t|=2),o=lL(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},or(o),e}function lB(e){if(!e)return il;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ih(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(f(171))}if(1===e.tag){var n=e.type;if(ih(n))return iv(e,n,t)}return t}function l_(e,t,n,r,i,o,a,s,l){return(e=lj(n,r,!0,e,i,o,a,s,l)).context=lB(null),n=e.current,(o=oo(r=lt(),i=ln(n))).callback=null!=t?t:null,oa(n,o,i),e.current.lanes=i,tV(e,i,r),li(e,r),e}function lU(e,t,n,r){var i=t.current,o=lt(),a=ln(i);return null!==td&&"function"==typeof td.markRenderScheduled&&td.markRenderScheduled(a),n=lB(n),null===t.context?t.context=n:t.pendingContext=n,(t=oo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=oa(i,t,a))&&(lr(e,i,a,o),os(e,i,a)),a}function lW(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function l$(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function lH(e,t){l$(e,t),(e=e.alternate)&&l$(e,t)}l=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||ic.current)aK=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return aK=!1,function(e,t,n){switch(t.tag){case 3:a3(t),iq();break;case 5:oR(t);break;case 1:ih(t.type)&&iy(t);break;case 4:oM(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;is(iJ,r._currentValue),r._currentValue=i;break;case 12:0!=(n&t.childLanes)&&(t.flags|=4),(r=t.stateNode).effectDuration=0,r.passiveEffectDuration=0;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return is(oV,1&oV.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return a8(e,t,n);return is(oV,1&oV.current),null!==(e=si(e,t,n))?e.sibling:null}is(oV,1&oV.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return sn(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),is(oV,oV.current),!r)return null;break;case 22:case 23:return t.lanes=0,aZ(e,t,n)}return si(e,t,n)}(e,t,n);aK=0!=(131072&e.flags)}}else aK=!1,iB&&0!=(1048576&t.flags)&&iN(t,iA,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sr(e,t),e=t.pendingProps;var i=ip(t,iu.current);i6(t,n),tg(t),i=oq(null,t,r,e,i,n);var o=oX();return tv(),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ih(r)?(o=!0,iy(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,or(t),i.updater=op,t.stateNode=i,i._reactInternals=t,ov(t,r,e,n),t=a2(null,t,r,!0,o,n)):(t.tag=0,iB&&o&&iF(t),aY(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sr(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return lR(e)?1:0;if(null!=e){if((e=e.$$typeof)===N)return 11;if(e===z)return 14}return 2}(r),e=iZ(r,e),i){case 0:t=a0(null,t,r,e,n);break e;case 1:t=a1(null,t,r,e,n);break e;case 11:t=aq(null,t,r,e,n);break e;case 14:t=aX(null,t,r,iZ(r.type,e),n);break e}throw Error(f(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iZ(r,i),a0(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iZ(r,i),a1(e,t,r,i,n);case 3:e:{if(a3(t),null===e)throw Error(f(387));r=t.pendingProps,i=(o=t.memoizedState).element,oi(e,t),ou(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){i=aI(Error(f(423)),t),t=a4(e,t,r,n,i);break e}if(r!==i){i=aI(Error(f(424)),t),t=a4(e,t,r,n,i);break e}for(ij=rJ(t.stateNode.containerInfo.firstChild),iz=t,iB=!0,i_=null,n=oS(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(iq(),r===i){t=si(e,t,n);break e}aY(e,t,r,n)}t=t.child}return t;case 5:return oR(t),null===e&&iH(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,rG(r,i)?a=null:null!==o&&rG(r,o)&&(t.flags|=32),aJ(e,t),aY(e,t,a,n),t.child;case 6:return null===e&&iH(t),null;case 13:return a8(e,t,n);case 4:return oM(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=oE(t,null,r,n):aY(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iZ(r,i),aq(e,t,r,i,n);case 7:return aY(e,t,t.pendingProps,n),t.child;case 8:return aY(e,t,t.pendingProps.children,n),t.child;case 12:return t.flags|=4,(r=t.stateNode).effectDuration=0,r.passiveEffectDuration=0,aY(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,is(iJ,r._currentValue),r._currentValue=a,null!==o){if(n9(o.value,a)){if(o.children===i.children&&!ic.current){t=si(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){a=o.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===o.tag){(l=oo(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),i5(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===o.tag)a=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(a=o.return))throw Error(f(341));a.lanes|=n,null!==(s=a.alternate)&&(s.lanes|=n),i5(a,n,t),a=o.sibling}else a=o.child;if(null!==a)a.return=o;else for(a=o;null!==a;){if(a===t){a=null;break}if(null!==(o=a.sibling)){o.return=a.return,a=o;break}a=a.return}o=a}}aY(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,i6(t,n),i=i8(i),tg(t),r=r(i),tv(),t.flags|=1,aY(e,t,r,n),t.child;case 14:return i=iZ(r=t.type,t.pendingProps),i=iZ(r.type,i),aX(e,t,r,i,n);case 15:return aQ(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iZ(r,i),sr(e,t),t.tag=1,ih(r)?(e=!0,iy(t)):e=!1,i6(t,n),om(t,r,i),ov(t,r,i,n),a2(null,t,r,!0,e,n);case 19:return sn(e,t,n);case 22:return aZ(e,t,n)}throw Error(f(156,t.tag))};var lG="function"==typeof reportError?reportError:function(e){console.error(e)};function lK(e){this._internalRoot=e}function lY(e){this._internalRoot=e}function lq(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function lX(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lQ(){}function lZ(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"==typeof i){var s=i;i=function(){var e=lW(a);s.call(e)}}lU(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=lW(a);o.call(e)}}var a=l_(t,r,e,0,null,!1,!1,"",lQ);return e._reactRootContainer=a,e[r4]=a.current,rD(8===e.nodeType?e.parentNode:e),ld(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=lW(l);s.call(e)}}var l=lj(e,0,!1,null,null,!1,!1,"",lQ);return e._reactRootContainer=l,e[r4]=l.current,rD(8===e.nodeType?e.parentNode:e),ld(function(){lU(t,l,n,r)}),l}(n,t,e,i,r);return lW(a)}lY.prototype.render=lK.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(f(409));lU(e,t,null,null)},lY.prototype.unmount=lK.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ld(function(){lU(null,e,null,null)}),t[r4]=null}},lY.prototype.unstable_scheduleHydration=function(e){if(e){var t=tU();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tQ.length&&0!==t&&t<tQ[n].priority;n++);tQ.splice(n,0,e),0===n&&t1(e)}},tj=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tA(t.pendingLanes);0!==n&&(tO(t,1|n),li(t,tn()),0==(6&sz)&&(sZ=tn()+500,ik()))}break;case 13:ld(function(){var t=ot(e,1);null!==t&&lr(t,e,1,lt())}),lH(e,1)}},tB=function(e){if(13===e.tag){var t=ot(e,134217728);null!==t&&lr(t,e,134217728,lt()),lH(e,134217728)}},t_=function(e){if(13===e.tag){var t=ln(e),n=ot(e,t);null!==n&&lr(n,e,t,lt()),lH(e,t)}},tU=function(){return tI},tW=function(e,t){var n=tI;try{return tI=e,t()}finally{tI=n}},ez=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=it(r);if(!i)throw Error(f(90));eu(r),eh(r,i)}}}break;case"textarea":ew(e,n);break;case"select":null!=(t=n.value)&&ey(e,!!n.multiple,t,!1)}},e$=lc,eH=ld;var lJ={findFiberByHostInstance:r7,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};(function(e){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t.isDisabled&&t.supportsFiber){try{e=en({},e,{getLaneLabelMap:th,injectProfilingHooks:tp}),tu=t.inject(e),tc=t}catch(e){}t.checkDCE}}})({bundleType:lJ.bundleType,version:lJ.version,rendererPackageName:lJ.rendererPackageName,rendererConfig:lJ.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:lJ.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"}),W={usingClientEntryPoint:!1,Events:[r9,ie,it,eU,eW,lc]},$=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lq(t))throw Error(f(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:M,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},H=function(e,t){if(!lq(e))throw Error(f(299));var n=!1,r="",i=lG;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=lj(e,1,!1,null,null,n,!1,r,i),e[r4]=t.current,rD(8===e.nodeType?e.parentNode:e),new lK(t)},G=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(f(188));throw Error(f(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},K=function(e){return ld(e)},Y=function(e,t,n){if(!lX(t))throw Error(f(200));return lZ(null,e,t,!0,n)},q=function(e,t,n){if(!lq(e))throw Error(f(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",a=lG;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=l_(t,null,e,1,null!=n?n:null,i,!1,o,a),e[r4]=t.current,rD(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lY(t)},X=function(e,t,n){if(!lX(t))throw Error(f(200));return lZ(null,e,t,!1,n)},Q=function(e){if(!lX(e))throw Error(f(40));return!!e._reactRootContainer&&(ld(function(){lZ(null,null,e,!1,function(){e._reactRootContainer=null,e[r4]=null})}),!0)},Z=lc,J=function(e,t,n,r){if(!lX(n))throw Error(f(200));if(null==e||void 0===e._reactInternals)throw Error(f(38));return lZ(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}),u.register("e0W5i",function(e,t){e.exports=u("iA52G")}),u.register("bSwRc",function(e,t){e.exports=u("7ZrMf")}),u.register("7ZrMf",function(e,n){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,n))u<i&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else if(u<i&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t(e.exports,"unstable_now",()=>s,e=>s=e),t(e.exports,"unstable_IdlePriority",()=>l,e=>l=e),t(e.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),t(e.exports,"unstable_LowPriority",()=>c,e=>c=e),t(e.exports,"unstable_NormalPriority",()=>d,e=>d=e),t(e.exports,"unstable_Profiling",()=>f,e=>f=e),t(e.exports,"unstable_UserBlockingPriority",()=>p,e=>p=e),t(e.exports,"unstable_cancelCallback",()=>h,e=>h=e),t(e.exports,"unstable_continueExecution",()=>m,e=>m=e),t(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),t(e.exports,"unstable_getCurrentPriorityLevel",()=>v,e=>v=e),t(e.exports,"unstable_getFirstCallbackNode",()=>y,e=>y=e),t(e.exports,"unstable_next",()=>b,e=>b=e),t(e.exports,"unstable_pauseExecution",()=>x,e=>x=e),t(e.exports,"unstable_requestPaint",()=>w,e=>w=e),t(e.exports,"unstable_runWithPriority",()=>E,e=>E=e),t(e.exports,"unstable_scheduleCallback",()=>S,e=>S=e),t(e.exports,"unstable_shouldYield",()=>k,e=>k=e),t(e.exports,"unstable_wrapCallback",()=>P,e=>P=e),"object"==typeof performance&&"function"==typeof performance.now){var s,l,u,c,d,f,p,h,m,g,v,y,b,x,w,E,S,k,P,C,T=performance;s=function(){return T.now()}}else{var A=Date,M=A.now();s=function(){return A.now()-M}}var L=[],R=[],D=1,V=null,O=3,N=!1,F=!1,I=!1,z="function"==typeof setTimeout?setTimeout:null,j="function"==typeof clearTimeout?clearTimeout:null,B="undefined"!=typeof setImmediate?setImmediate:null;function _(e){for(var t=i(R);null!==t;){if(null===t.callback)o(R);else if(t.startTime<=e)o(R),t.sortIndex=t.expirationTime,r(L,t);else break;t=i(R)}}function U(e){if(I=!1,_(e),!F){if(null!==i(L))F=!0,J(W);else{var t=i(R);null!==t&&ee(U,t.startTime-e)}}}function W(e,t){F=!1,I&&(I=!1,j(G),G=-1),N=!0;var n=O;try{for(_(t),V=i(L);null!==V&&(!(V.expirationTime>t)||e&&!q());){var r=V.callback;if("function"==typeof r){V.callback=null,O=V.priorityLevel;var a=r(V.expirationTime<=t);t=s(),"function"==typeof a?V.callback=a:V===i(L)&&o(L),_(t)}else o(L);V=i(L)}if(null!==V)var l=!0;else{var u=i(R);null!==u&&ee(U,u.startTime-t),l=!1}return l}finally{V=null,O=n,N=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var $=!1,H=null,G=-1,K=5,Y=-1;function q(){return!(s()-Y<K)}function X(){if(null!==H){var e=s();Y=e;var t=!0;try{t=H(!0,e)}finally{t?C():($=!1,H=null)}}else $=!1}if("function"==typeof B)C=function(){B(X)};else if("undefined"!=typeof MessageChannel){var Q=new MessageChannel,Z=Q.port2;Q.port1.onmessage=X,C=function(){Z.postMessage(null)}}else C=function(){z(X,0)};function J(e){H=e,$||($=!0,C())}function ee(e,t){G=z(function(){e(s())},t)}l=5,u=1,c=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){F||N||(F=!0,J(W))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},v=function(){return O},y=function(){return i(L)},b=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},x=function(){},w=function(){},E=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},S=function(e,t,n){var o=s();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?o+n:o,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:D++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>o?(e.sortIndex=n,r(R,e),null===i(L)&&e===i(R)&&(I?(j(G),G=-1):I=!0,ee(U,n-o))):(e.sortIndex=a,r(L,e),F||N||(F=!0,J(W))),e},k=q,P=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}}),u.register("fBais",function(e,n){t(e.exports,"Fragment",()=>r,e=>r=e),t(e.exports,"jsx",()=>i,e=>i=e),t(e.exports,"jsxs",()=>o,e=>o=e);var r,i,o,a=u("e0W5i"),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,i={},o=null,a=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!f.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:d.current}}r=l,i=p,o=p}),u.register("i3Ghj",function(e,n){t(e.exports,"default",()=>o);var r=u("iLMh8"),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=(0,r.default)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)})}),u.register("iLMh8",function(e,n){t(e.exports,"default",()=>r);var r=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}}),u.register("7dGEo",function(e,n){t(e.exports,"default",()=>o);var r=u("l7O8P"),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=(0,r.default)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)})}),u.register("l7O8P",function(e,n){t(e.exports,"default",()=>r);var r=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}});var c=u("e0W5i"),d={};function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),d=u("dpROw");var p,h=p||(p={});h.Pop="POP",h.Push="PUSH",h.Replace="REPLACE";var m=function(e){return e};function g(e){e.preventDefault(),e.returnValue=""}function v(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(e){return e!==t})}},call:function(t){e.forEach(function(e){return e&&e(t)})}}}function y(e){var t=e.pathname,n=e.search;return(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}function b(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var c=u("e0W5i");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w=function(e){return e};function E(e,t){if(!e)throw Error(t)}var S=(0,c.createContext)({static:!1}),k=(0,c.createContext)({outlet:null,params:w({}),pathname:"",route:null});function P(){return(0,c.useContext)(k).outlet}function C(e){return void 0===(e=e.element)?(0,c.createElement)(P,null):e}function T(e){var t=e.children;t=void 0===t?null:t;var n=e.action;n=void 0===n?p.Pop:n;var r=e.location,i=e.navigator;return e=void 0!==(e=e.static)&&e,M()&&E(!1),(0,c.createElement)(S.Provider,{children:t,value:{action:n,location:r,navigator:i,static:e}})}function A(e){var t,n,r,i,o,a,s,l=e.basename;return l=void 0===l?"":l,t=e=function e(t){var n=[];return(0,c.Children).forEach(t,function(t){if((0,c.isValidElement)(t)){if(t.type===c.Fragment)n.push.apply(n,e(t.props.children));else{var r={path:t.props.path||"/",caseSensitive:!0===t.props.caseSensitive,element:t};t.props.children&&(t=e(t.props.children)).length&&(r.children=t),n.push(r)}}}),n}(e.children),void 0===(n=l)&&(n=""),i=(r=(0,c.useContext)(k)).route,o=r.pathname,a=r.params,n=n?N([o,n]):o,s=L(),(i=(0,c.useMemo)(function(){return function(e,t,n){if(void 0===n&&(n=""),"string"==typeof t&&(t=b(t)),t=t.pathname||"/",n){if(n=n.replace(/^\/*/,"/").replace(/\/+$/,""),!t.startsWith(n))return null;t=t===n?"/":t.slice(n.length)}i=(r=e=function e(t,n,r,i,o){return void 0===n&&(n=[]),void 0===r&&(r=""),void 0===i&&(i=[]),void 0===o&&(o=[]),t.forEach(function(t,a){var s=N([r,t.path]),l=i.concat(t);a=o.concat(a),t.children&&e(t.children,n,s,l,a),n.push([s,l,a])}),n}(e)).reduce(function(e,t){var n,r;return e[t=t[0]]=(r=(n=(n=t).split("/")).length,n.some(V)&&(r+=-2),n.filter(function(e){return!V(e)}).reduce(function(e,t){return e+(D.test(t)?2:""===t?1:10)},r)),e},{}),function(e,t){var n=e.slice(0);e.sort(function(e,r){return t(e,r)||n.indexOf(e)-n.indexOf(r)})}(r,function(e,t){var n=e[2];e=i[e[0]];var r=t[2];return e!==(t=i[t[0]])?t-e:n.length===r.length&&n.slice(0,-1).every(function(e,t){return e===r[t]})?n[n.length-1]-r[r.length-1]:0});var r,i,o=null;for(n=0;null==o&&n<e.length;++n)e:{o=t;for(var a=e[n][1],s="/",l={},u=[],c=0;c<a.length;++c){var d=a[c],f="/"===s?o:o.slice(s.length)||"/";if(!(f=function(e,t){"string"==typeof e&&(e={path:e});var n=e;e=n.path;var r=n.caseSensitive;if(r=(n=function(e,t,n){var r=[],i="^("+e.replace(/^\/*/,"/").replace(/\/?\*?$/,"").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,function(e,t){return r.push(t),"([^\\/]+)"})+")";return e.endsWith("*")?(e.endsWith("/*")&&(i+="\\/?"),r.push("*"),i+="(.*)"):n&&(i+="\\/?"),n&&(i+="$"),[new RegExp(i,t?void 0:"i"),r]}(e,void 0!==r&&r,void 0===(n=n.end)||n))[1],!(n=t.match(n[0])))return null;t=n[1];var i=n.slice(2);return{path:e,pathname:t,params:r=r.reduce(function(e,t,n){n=i[n];try{var r=decodeURIComponent(n.replace(/\+/g," "))}catch(e){r=n}return e[t]=r,e},{})}}({path:d.path,caseSensitive:d.caseSensitive,end:c===a.length-1},f))){o=null;break e}s=N([s,f.pathname]),l=x({},l,{},f.params),u.push({route:d,pathname:s,params:w(l)})}o=u}return o}(t,s,n)},[s,t,n]))?i.reduceRight(function(e,t){var r=t.pathname,i=t.route;return(0,c.createElement)(k.Provider,{children:i.element,value:{outlet:e,params:w(x({},a,{},t.params)),pathname:N([n,r]),route:i}})},null):null}function M(){return null!=(0,c.useContext)(S).location}function L(){return M()||E(!1),(0,c.useContext)(S).location}function R(e){var t=(0,c.useContext)(k).pathname;return(0,c.useMemo)(function(){return O(e,t)},[e,t])}var D=/^:\w+$/;function V(e){return"*"===e}function O(e,t){void 0===t&&(t="/");var n,r,i="string"==typeof e?b(e):e;e=i.pathname;var o=i.search;return o=void 0===o?"":o,i=void 0===(i=i.hash)?"":i,{pathname:e?(n=e,r=(e.startsWith("/")?"/":t).replace(/\/+$/,"").replace(/\/\/+/g,"/").split("/"),n.replace(/\/\/+/g,"/").split("/").forEach(function(e){".."===e?1<r.length&&r.pop():"."!==e&&r.push(e)}),1<r.length?N(r):"/"):t,search:o,hash:i}}function N(e){return e.join("/").replace(/\/\/+/g,"/")}var c=u("e0W5i");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r={},i=Object.keys(e);for(n=0;n<i.length;n++){var o=i[n];0<=t.indexOf(o)||(r[o]=e[o])}return r}function z(e){var t=e.children;e=e.window;var n=(0,c.useRef)();null==n.current&&(n.current=function(e){function t(){var e=b(s.location.hash.substr(1)),t=e.pathname,n=e.search;e=e.hash;var r=l.state||{};return[r.idx,m({pathname:void 0===t?"/":t,search:void 0===n?"":n,hash:void 0===e?"":e,state:r.usr||null,key:r.key||"default"})]}function n(){if(u)w.call(u),u=null;else{var e=p.Pop,n=t(),r=n[0];if(n=n[1],w.length){if(null!=r){var i=d-r;i&&(u={action:e,location:n,retry:function(){a(-1*i)}},a(i))}}else o(e)}}function r(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=-1===(n=(t=s.location.href).indexOf("#"))?t:t.slice(0,n)),n+"#"+("string"==typeof e?e:y(e))}function i(e,t){return void 0===t&&(t=null),m(f({},h,{},"string"==typeof e?b(e):e,{state:t,key:Math.random().toString(36).substr(2,8)}))}function o(e){c=e,d=(e=t())[0],h=e[1],x.call({action:c,location:h})}function a(e){l.go(e)}void 0===e&&(e={});var s=void 0===(e=e.window)?document.defaultView:e,l=s.history,u=null;s.addEventListener("popstate",n),s.addEventListener("hashchange",function(){y(t()[1])!==y(h)&&n()});var c=p.Pop,d=(e=t())[0],h=e[1],x=v(),w=v();return null==d&&(d=0,l.replaceState(f({},l.state,{idx:d}),"")),{get action(){return c},get location(){return h},createHref:r,push:function e(t,n){var a=p.Push,u=i(t,n);if(!w.length||(w.call({action:a,location:u,retry:function(){e(t,n)}}),0)){var c=[{usr:u.state,key:u.key,idx:d+1},r(u)];u=c[0],c=c[1];try{l.pushState(u,"",c)}catch(e){s.location.assign(c)}o(a)}},replace:function e(t,n){var a=p.Replace,s=i(t,n);w.length&&(w.call({action:a,location:s,retry:function(){e(t,n)}}),1)||(s=[{usr:s.state,key:s.key,idx:d},r(s)],l.replaceState(s[0],"",s[1]),o(a))},go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(e){return x.push(e)},block:function(e){var t=w.push(e);return 1===w.length&&s.addEventListener("beforeunload",g),function(){t(),w.length||s.removeEventListener("beforeunload",g)}}}}({window:e}));var r=n.current;n=(e=(0,c.useReducer)(function(e,t){return t},{action:r.action,location:r.location}))[0];var i=e[1];return(0,c.useLayoutEffect)(function(){return r.listen(i)},[r]),(0,c.createElement)(T,{children:t,action:n.action,location:n.location,navigator:r})}var j=(0,c.forwardRef)(function(e,t){var n,r,i,o,a,s=e.onClick,l=e.replace,u=void 0!==l&&l,d=e.state,f=e.target,p=e.to;e=I(e,["onClick","replace","state","target","to"]),n=p,M()||E(!1),r=(0,c.useContext)(S).navigator,n=R(n),l=r.createHref(n);var h=(M()||E(!1),i=(0,c.useContext)(S).navigator,o=(0,c.useContext)(k).pathname,a=(0,c.useRef)(!1),(0,c.useEffect)(function(){a.current=!0}),(0,c.useCallback)(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?i.go(e):(e=O(e,o),(t.replace?i.replace:i.push)(e,t.state)))},[i,o])),m=L(),g=R(p);return(0,c.createElement)("a",Object.assign({},e,{href:l,onClick:function(e){s&&s(e),e.defaultPrevented||0!==e.button||f&&"_self"!==f||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),h(p,{replace:e=!!u||y(m)===y(g),state:d}))},ref:t,target:f}))});(0,c.forwardRef)(function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=void 0===(n=e.activeClassName)?"active":n;n=e.activeStyle;var o=e.caseSensitive,a=void 0!==o&&o,s=void 0===(o=e.className)?"":o,l=void 0!==(o=e.end)&&o,u=e.style;o=e.to,e=I(e,"aria-current activeClassName activeStyle caseSensitive className end style to".split(" "));var d=L(),f=R(o);return d=d.pathname,f=f.pathname,a||(d=d.toLowerCase(),f=f.toLowerCase()),r=(a=l?d===f:d.startsWith(f))?r:void 0,i=[s,a?i:null].filter(Boolean).join(" "),n=F({},u,{},a?n:null),(0,c.createElement)(j,Object.assign({},e,{"aria-current":r,className:i,ref:t,style:n,to:o}))});var c=(u("e0W5i"),u("e0W5i"),u("e0W5i"),u("e0W5i"));/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule
// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const B={prefix:String(Math.round(1e10*Math.random())),current:0},_=/*@__PURE__*/n(c).createContext(B),U=/*@__PURE__*/n(c).createContext(!1);let W=!!("undefined"!=typeof window&&window.document&&window.document.createElement),$=new WeakMap;const H="function"==typeof /*@__PURE__*/n(c).useId?function(e){// @ts-ignore
let t=/*@__PURE__*/n(c).useId(),[r]=(0,c.useState)(// In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
"function"==typeof /*@__PURE__*/n(c).useSyncExternalStore?/*@__PURE__*/n(c).useSyncExternalStore(Y,G,K):(0,c.useContext)(U)),i=r?"react-aria":`react-aria${B.prefix}`;return e||`${i}-${t}`}:function(e){let t=(0,c.useContext)(_);// If we are rendering in a non-DOM environment, and there's no SSRProvider,
// provide a warning to hint to the developer to add one.
t!==B||W||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=function(e=!1){let t=(0,c.useContext)(_),r=(0,c.useRef)(null);// eslint-disable-next-line rulesdir/pure-render
if(null===r.current&&!e){var i,o;// In strict mode, React renders components twice, and the ref will be reset to null on the second render.
// This means our id counter will be incremented twice instead of once. This is a problem because on the
// server, components are only rendered once and so ids generated on the server won't match the client.
// In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
// we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
// This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
// To ensure that we only increment the global counter once, we store the starting id for this component in
// a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
// Since React runs the second render immediately after the first, this is safe.
// @ts-ignore
let e=null===(i=/*@__PURE__*/n(c).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===i?void 0:null===(o=i.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=$.get(e);null==n?$.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(// On the second render, the memoizedState gets reset by React.
// Reset the counter, and remove from the weak map so we don't
// do this for subsequent useId calls.
t.current=n.id,$.delete(e))}// eslint-disable-next-line rulesdir/pure-render
r.current=++t.current}// eslint-disable-next-line rulesdir/pure-render
return r.current}(!!e),i=`react-aria${t.prefix}`;return e||`${i}-${r}`};function G(){return!1}function K(){return!0}// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Y(e){// noop
return()=>{}}var q=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r};/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const X="undefined"!=typeof document?/*@__PURE__*/n(c).useLayoutEffect:()=>{};/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function Q(e){let t=(0,c.useRef)(null);return X(()=>{t.current=e},[e]),(0,c.useCallback)((...e)=>{let n=t.current;return n(...e)},[])}let Z=new Map;/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function J(...e){// Start with a base clone of the first argument. This is a lot faster than starting
// with an empty object and adding properties as we go.
let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];// Chain events
"function"==typeof n&&"function"==typeof i&&// This is a lot faster than a regex.
"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=/* 'A' */65&&/* 'Z' */90>=e.charCodeAt(2)?t[e]=/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//**
 * Calls all functions in the order they were chained with the same arguments.
 */function(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}(n,i):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof i?t[e]=q(n,i):"id"===e&&n&&i?t.id=function(e,t){if(e===t)return e;let n=Z.get(e);if(n)return n(t),t;let r=Z.get(t);return r?(r(e),e):t}(n,i):t[e]=void 0!==i?i:n}}return t}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const ee=new Set(["id"]),et=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),en=new Set(["href","target","rel","download","ping","referrerPolicy"]),er=/^(data-.*)$/;function ei(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(ee.has(t)||n&&et.has(t)||r&&en.has(t)||(null==i?void 0:i.has(t))||er.test(t))&&(o[t]=e[t]);return o}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function eo(e){if(function(){if(null==ea){ea=!1;try{document.createElement("div").focus({get preventScroll(){return ea=!0,!0}})}catch(e){// Ignore
}}return ea}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let ea=null;/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function es(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function el(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function eu(){return el(/^Mac/i)}function ec(){return el(/^iPad/i)||// iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
eu()&&navigator.maxTouchPoints>1}function ed(){return el(/^iPhone/i)||ec()}function ef(){return es(/Android/i)}function ep(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;es(/Firefox/i)&&(null===(r=window.event)||void 0===r?void 0:null===(i=r.type)||void 0===i?void 0:i.startsWith("key"))&&"_blank"===e.target&&(eu()?o=!0:a=!0);// WebKit does not support firing click events with modifier keys, but does support keyboard events.
// https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
let u=es(/AppleWebKit/i)&&!es(/Chrome/i)&&eu()&&!ec()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});ep.isOpening=n,eo(e),e.dispatchEvent(u),ep.isOpening=!1}(0,c.createContext)({isNative:!0,open:function(e,t){!function(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}(e,e=>ep(e,t))}}),ep.isOpening=!1;/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let eh=new Map,em=new Set;function eg(){if("undefined"==typeof window)return;let e=t=>{// Remove property from list of transitioning properties.
let n=eh.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),eh.delete(t.target)),0===eh.size)){for(let e of em)e();em.clear()}};document.body.addEventListener("transitionrun",t=>{// Add the transitioning property to the list for this element.
let n=eh.get(t.target);n||(n=new Set,eh.set(t.target,n),// The transitioncancel event must be registered on the element itself, rather than as a global
// event. This enables us to handle when the node is deleted from the document while it is transitioning.
// In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}function ev(e){// Wait one frame to see if an animation starts, e.g. a transition on mount.
requestAnimationFrame(()=>{// If no transitions are running, call the function immediately.
// Otherwise, add it to a list of callbacks to run at the end of the animation.
0===eh.size?e():em.add(e)})}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function ey(e,t){X(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}})}/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function eb(e){return(// JAWS/NVDA with Firefox.
0===e.mozInputSource&&!!e.isTrusted||(ef()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType))}"undefined"!=typeof document&&("loading"!==document.readyState?eg():document.addEventListener("DOMContentLoaded",eg)),"undefined"!=typeof document&&window.visualViewport;var c=u("e0W5i");try{// @ts-ignore
new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay;// eslint-disable-next-line no-empty
}catch(e){}try{// @ts-ignore
new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style;// eslint-disable-next-line no-empty
}catch(e){}RegExp("^.*\\(.*\\).*$");/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// https://en.wikipedia.org/wiki/Right-to-left
const ex=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),ew=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);!/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function(){// @ts-ignore
let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{// @ts-ignore
Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}(function(e){// If the Intl.Locale API is available, use it to get the script for the locale.
// This is more accurate than guessing by language, since languages can be written in multiple scripts.
// @ts-ignore
if(Intl.Locale){// @ts-ignore
let t=new Intl.Locale(e).maximize().script;return ex.has(t)}// If not, just guess by the language (first part of the locale)
let t=e.split("-")[0];ew.has(t)})(e)}(),/*@__PURE__*/n(c).createContext(null),new WeakMap;var c=(u("e0W5i"),u("e0W5i"));function eE(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function eS(e,t,n){var r=eE(e,t,"set");return!function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)// always strict and private fields can only be used inside
// class bodies.
throw TypeError("attempted to set read only private field");t.value=n}}(e,r,n),n}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let ek="default",eP="",eC=new WeakMap;function eT(e){ed()?("default"===ek&&(eP=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),ek="disabled"):(e instanceof HTMLElement||e instanceof SVGElement)&&(// If not iOS, store the target's original user-select and change to user-select: none
// Ignore state since it doesn't apply for non iOS
eC.set(e,e.style.userSelect),e.style.userSelect="none")}function eA(e){if(ed())// If the state is already default, there's nothing to do.
// If it is restoring, then there's no need to queue a second restore.
"disabled"===ek&&(ek="restoring",// There appears to be a delay on iOS where selection still might occur
// after pointer up, so wait a bit before removing user-select.
setTimeout(()=>{ev(()=>{// Avoid race conditions
"restoring"===ek&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=eP||""),eP="",ek="default")})},300));else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&eC.has(e)){let t=eC.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),eC.delete(e)}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const eM=/*@__PURE__*/n(c).createContext(null);eM.displayName="PressResponderContext";var eL=/*#__PURE__*/new WeakMap;class eR{continuePropagation(){eS(this,eL,!1)}get shouldStopPropagation(){var e;return(e=eE(this,eL,"get")).get?e.get.call(this):e.value}constructor(e,t,n){!function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,eL),eL.set(this,{writable:!0,value:void 0}),eS(this,eL,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const eD=Symbol("linkClicked");function eV(e){let t,n,r,i,{onPress:o,onPressChange:a,onPressStart:s,onPressEnd:l,onPressUp:u,isDisabled:d,isPressed:f,preventFocusOnPress:p,shouldCancelOnPointerExit:h,allowTextSelectionOnPress:m,ref:g,...v}=function(e){// Consume context from <PressResponder> and merge with props.
let t=(0,c.useContext)(eM);if(t){let{register:n,...r}=t;e=J(r,e),n()}return ey(t,e.ref),e}(e),[y,b]=(0,c.useState)(!1),x=(0,c.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:w,removeAllGlobalListeners:E}=(t=(0,c.useRef)(new Map),n=(0,c.useCallback)((e,n,r,i)=>{// Make sure we remove the listener after it is called with the `once` option.
let o=(null==i?void 0:i.once)?(...e)=>{t.current.delete(r),r(...e)}:r;t.current.set(r,{type:n,eventTarget:e,fn:o,options:i}),e.addEventListener(n,r,i)},[]),r=(0,c.useCallback)((e,n,r,i)=>{var o;let a=(null===(o=t.current.get(r))||void 0===o?void 0:o.fn)||r;e.removeEventListener(n,a,i),t.current.delete(r)},[]),i=(0,c.useCallback)(()=>{t.current.forEach((e,t)=>{r(e.eventTarget,e.type,t,e.options)})},[r]),(0,c.useEffect)(()=>i,[i]),{addGlobalListener:n,removeGlobalListener:r,removeAllGlobalListeners:i}),S=Q((e,t)=>{let n=x.current;if(d||n.didFirePressStart)return;let r=!0;if(n.isTriggeringEvent=!0,s){let n=new eR("pressstart",t,e);s(n),r=n.shouldStopPropagation}return a&&a(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,b(!0),r}),k=Q((e,t,n=!0)=>{let r=x.current;if(!r.didFirePressStart)return;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(l){let n=new eR("pressend",t,e);l(n),i=n.shouldStopPropagation}if(a&&a(!1),b(!1),o&&n&&!d){let n=new eR("press",t,e);o(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i}),P=Q((e,t)=>{let n=x.current;if(!d){if(u){n.isTriggeringEvent=!0;let r=new eR("pressup",t,e);return u(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0}}),C=Q(e=>{let t=x.current;t.isPressed&&(t.isOverTarget&&k(eI(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,E(),m||eA(t.target))}),T=Q(e=>{h&&C(e)}),A=(0,c.useMemo)(()=>{let e=x.current,t={onKeyDown(t){if(eN(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){eB(t.target,t.key)&&t.preventDefault();// If the event is repeating, it may have started on a different element
// after which focus moved to the current element. Ignore these events and
// only handle the first key down event.
let r=!0;e.isPressed||t.repeat||(e.target=t.currentTarget,e.isPressed=!0,r=S(t,"keyboard"),// Focus may move before the key up event, so register the event on the document
// instead of the same element where the key down event occurred.
w(document,"keyup",n,!1)),r&&t.stopPropagation(),t.metaKey&&eu()&&e.metaKeyEvents.set(t.key,t.nativeEvent)}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onKeyUp(t){eN(t.nativeEvent,t.currentTarget)&&!t.repeat&&t.currentTarget.contains(t.target)&&P(eI(e.target,t),"keyboard")},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!ep.isOpening){let n=!0;// If triggered from a screen reader or by using element.click(),
// trigger as if it were a keyboard click.
if(d&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||eb(t.nativeEvent))){// Ensure the element receives focus (VoiceOver on iOS does not do this)
d||p||eo(t.currentTarget);let e=S(t,"virtual"),r=P(t,"virtual"),i=k(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n,r;if(e.isPressed&&eN(t,e.target)){eB(t.target,t.key)&&t.preventDefault();let n=t.target,i=k(eI(e.target,t),"keyboard",e.target.contains(n));E(),i&&t.stopPropagation(),"Enter"!==t.key&&eO(e.target)&&e.target.contains(n)&&!t[eD]&&(// Store a hidden property on the event so we only trigger link click once,
// even if there are multiple usePress instances attached to the element.
t[eD]=!0,ep(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){// If we recorded keydown events that occurred while the Meta key was pressed,
// and those haven't received keyup events already, fire keyup events ourselves.
// See comment above for more info about the macOS bug causing this.
let t=e.metaKeyEvents;for(let n of(e.metaKeyEvents=null,t.values()))e.target.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{var o;// Only handle left clicks, and ignore events that bubbled through portals.
if(0!==t.button||!t.currentTarget.contains(t.target))return;// iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
// Ignore and let the onClick handler take care of it instead.
// https://bugs.webkit.org/show_bug.cgi?id=222627
// https://bugs.webkit.org/show_bug.cgi?id=223202
if(o=t.nativeEvent,!ef()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType){e.pointerType="virtual";return}ej(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,d||p||eo(t.currentTarget),m||eT(e.target),a=S(t,e.pointerType),w(document,"pointermove",n,!1),w(document,"pointerup",r,!1),w(document,"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(ej(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{// iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&ez(t,t.currentTarget)&&P(t,e.pointerType||t.pointerType)};// Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
// Use pointer move events instead to implement our own hit testing.
// See https://bugs.webkit.org/show_bug.cgi?id=199803
let n=t=>{t.pointerId===e.activePointerId&&(ez(t,e.target)?e.isOverTarget||(e.isOverTarget=!0,S(eI(e.target,t),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,k(eI(e.target,t),e.pointerType,!1),T(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(ez(t,e.target)?k(eI(e.target,t),e.pointerType):e.isOverTarget&&k(eI(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,E(),m||eA(e.target))},i=e=>{C(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&// Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
C(e)}}else{t.onMouseDown=t=>{// Only handle left clicks
if(0===t.button&&t.currentTarget.contains(t.target)){if(ej(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents){t.stopPropagation();return}e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=eb(t.nativeEvent)?"virtual":"mouse",d||p||eo(t.currentTarget),S(t,e.pointerType)&&t.stopPropagation(),w(document,"mouseup",n,!1)}},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,n=S(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,n=k(t,e.pointerType,!1),T(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&!e.ignoreEmulatedMouseEvents&&0===t.button&&P(t,e.pointerType||"mouse")};let n=t=>{// Only handle left clicks
if(0===t.button){if(e.isPressed=!1,E(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}ez(t,e.target)?k(eI(e.target,t),e.pointerType):e.isOverTarget&&k(eI(e.target,t),e.pointerType,!1),e.isOverTarget=!1}};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",d||p||eo(t.currentTarget),m||eT(e.target),S(t,e.pointerType)&&t.stopPropagation(),w(window,"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let n=eF(t.nativeEvent,e.activePointerId),r=!0;n&&ez(n,t.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,r=S(t,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,r=k(t,e.pointerType,!1),T(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let n=eF(t.nativeEvent,e.activePointerId),r=!0;n&&ez(n,t.currentTarget)?(P(t,e.pointerType),r=k(t,e.pointerType)):e.isOverTarget&&(r=k(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,m||eA(e.target),E()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&C(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&C({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&C(e)}}return t},[w,d,p,E,m,C,T,k,S,P]);return(0,c.useEffect)(()=>()=>{m||eA(x.current.target)},[m]),{isPressed:f||y,pressProps:J(v,A)}}function eO(e){return"A"===e.tagName&&e.hasAttribute("href")}function eN(e,t){let{key:n,code:r}=e,i=t.getAttribute("role");// Accessibility for keyboards. Space and Enter only.
// "Spacebar" is for IE 11
return("Enter"===n||" "===n||"Spacebar"===n||"Space"===r)&&!(t instanceof HTMLInputElement&&!eU(t,n)||t instanceof HTMLTextAreaElement||t.isContentEditable)&&// Links should only trigger with Enter key
!(("link"===i||!i&&eO(t))&&"Enter"!==n)}function eF(e,t){let n=e.changedTouches;for(let e=0;e<n.length;e++){let r=n[e];if(r.identifier===t)return r}return null}function eI(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function ez(e,t){let n,r,i=t.getBoundingClientRect(),o=(n=e.width/2||e.radiusX||0,r=e.height/2||e.radiusY||0,{top:e.clientY-r,right:e.clientX+n,bottom:e.clientY+r,left:e.clientX-n});return!(i.left>o.right)&&!(o.left>i.right)&&!(i.top>o.bottom)&&!(o.top>i.bottom)}function ej(e){// We cannot prevent default if the target is a draggable element.
return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function eB(e,t){return e instanceof HTMLInputElement?!eU(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!eO(e)}const e_=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function eU(e,t){// Only space should toggle checkboxes and radios, not enter.
return"checkbox"===e.type||"radio"===e.type?" "===t:e_.has(e.type)}/*@__PURE__*/n(c).forwardRef(({children:e,...t},r)=>{let i=(0,c.useRef)();r=null!=r?r:i;let{pressProps:o}=eV({...t,ref:r}),a=/*@__PURE__*/n(c).Children.only(e);return /*@__PURE__*/n(c).cloneElement(a,{ref:r,...J(a.props,o)})}),/*@__PURE__*/n(c).forwardRef(({children:e,...t},r)=>{let i=(0,c.useRef)(!1),o=(0,c.useContext)(eM),a=J(o||{},{...t,ref:r||(null==o?void 0:o.ref),register(){i.current=!0,o&&o.register()}});return ey(o,r),(0,c.useEffect)(()=>{i.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),i.current=!0)},[]),/*@__PURE__*/n(c).createElement(eM.Provider,{value:a},e)});/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */class eW{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function e$(e){let t=(0,c.useRef)({isFocused:!1,observer:null});X(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=Q(t=>{null==e||e(t)});// This function is called during a React onFocus event.
return(0,c.useCallback)(e=>{// React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
// Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
// MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
// For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new eW("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){t.current.observer.disconnect();let e=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:e})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:e}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
let eH=null,eG=new Set,eK=!1,eY=!1,eq=!1;function eX(e,t){for(let n of eG)n(e,t)}function eQ(e){eY=!0,e.metaKey||!eu()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(eH="keyboard",eX("keyboard",e))}function eZ(e){eH="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(eY=!0,eX("pointer",e))}function eJ(e){eb(e)&&(eY=!0,eH="virtual")}function e0(e){// Firefox fires two extra focus events when the user first clicks into an iframe:
// first on the window, then on the document. We ignore these events so they don't
// cause keyboard focus rings to appear.
e.target!==window&&e.target!==document&&(eY||eq||(eH="virtual",eX("virtual",e)),eY=!1,eq=!1)}function e1(){// When the window is blurred, reset state. This is necessary when tabbing out of the window,
// for example, since a subsequent focus event won't be fired.
eY=!1,eq=!0}/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */function e2(){if("undefined"==typeof window||eK)return;// Programmatic focus() calls shouldn't affect the current input modality.
// However, we need to detect other cases when a focus event occurs without
// a preceding user event (e.g. screen reader focus). Overriding the focus
// method on HTMLElement.prototype is a bit hacky, but works.
let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){eY=!0,e.apply(this,arguments)},document.addEventListener("keydown",eQ,!0),document.addEventListener("keyup",eQ,!0),document.addEventListener("click",eJ,!0),// Register focus events on the window so they are sure to happen
// before React's event listeners (registered on the document).
window.addEventListener("focus",e0,!0),window.addEventListener("blur",e1,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",eZ,!0),document.addEventListener("pointermove",eZ,!0),document.addEventListener("pointerup",eZ,!0)):(document.addEventListener("mousedown",eZ,!0),document.addEventListener("mousemove",eZ,!0),document.addEventListener("mouseup",eZ,!0)),eK=!0}function e3(e,t){if(e.button>0)return!1;if(e.target){// if the event target is no longer in the document, ignore
let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function e4(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&n.stopPropagation()}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function e5(e){// If the user is interacting with a virtual cursor, e.g. screen reader, then
// wait until after any animated transitions that are currently occurring on
// the page before shifting focus. This avoids issues with VoiceOver on iOS
// causing the page to scroll when moving focus if the element is transitioning
// from off the screen.
if("virtual"===eH){let t=document.activeElement;ev(()=>{// If focus did not move and the element is still in the document, focus it.
document.activeElement===t&&document.contains(e)&&eo(e)})}else eo(e)}"undefined"!=typeof document&&("loading"!==document.readyState?e2():document.addEventListener("DOMContentLoaded",e2));const e6=/*@__PURE__*/n(c).createContext(null);let e8=null;function e7(e){var t,r,i;let o,a,{children:s,contain:l,restoreFocus:u,autoFocus:d}=e,f=(0,c.useRef)(),p=(0,c.useRef)(),h=(0,c.useRef)([]),{parentNode:m}=(0,c.useContext)(e6)||{},g=(0,c.useMemo)(()=>new td({scopeRef:h}),[h]);X(()=>{// If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
// use the active scope as the parent instead of the parent from context. Layout effects run bottom
// up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
// that is being added should get the activeScope as its parent.
let e=m||tf.root;if(tf.getTreeNode(e.scopeRef)&&e8&&!ta(e8,e.scopeRef)){let t=tf.getTreeNode(e8);t&&(e=t)}// Add the node to the parent, and to the tree.
e.addChild(g),tf.addNode(g)},[g,m]),X(()=>{tf.getTreeNode(h).contain=l},[l]),X(()=>{// Find all rendered nodes between the sentinels and add them to the scope.
let e=f.current.nextSibling,t=[];for(;e&&e!==p.current;)t.push(e),e=e.nextSibling;h.current=t},[s]),X(()=>{if(r||i)return;let e=t.current,n=e=>{let n=e.target;ti(n,t.current)?e8=t:to(n)||(e8=null)};return document.addEventListener("focusin",n,!1),e.forEach(e=>e.addEventListener("focusin",n,!1)),()=>{document.removeEventListener("focusin",n,!1),e.forEach(e=>e.removeEventListener("focusin",n,!1))}},[t=h,r=u,i=l]),o=(0,c.useRef)(),a=(0,c.useRef)(null),X(()=>{let e=h.current;if(!l){// if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
a.current&&(cancelAnimationFrame(a.current),a.current=null);return}// Handle the Tab key to contain focus within the scope
let t=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!tr(h))return;let t=document.activeElement,n=h.current;if(!ti(t,n))return;let r=tu(tn(n),{tabbable:!0},n);r.currentNode=t;let i=e.shiftKey?r.previousNode():r.nextNode();i||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,i=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),i&&ts(i,!0)},n=e=>{// If focusing an element in a child scope of the currently active scope, the child becomes active.
// Moving out of the active scope to an ancestor is not allowed.
(!e8||ta(e8,h))&&ti(e.target,h.current)?(e8=h,o.current=e.target):tr(h)&&!to(e.target,h)?o.current?o.current.focus():e8&&tl(e8.current):tr(h)&&(o.current=e.target)},r=e=>{a.current&&cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>{// Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
tr(h)&&!to(document.activeElement,h)&&(e8=h,document.body.contains(e.target)?(o.current=e.target,o.current.focus()):e8&&tl(e8.current))})};return document.addEventListener("keydown",t,!1),document.addEventListener("focusin",n,!1),e.forEach(e=>e.addEventListener("focusin",n,!1)),e.forEach(e=>e.addEventListener("focusout",r,!1)),()=>{document.removeEventListener("keydown",t,!1),document.removeEventListener("focusin",n,!1),e.forEach(e=>e.removeEventListener("focusin",n,!1)),e.forEach(e=>e.removeEventListener("focusout",r,!1))}},[h,l]),X(()=>()=>{a.current&&cancelAnimationFrame(a.current)},[a]),function(e,t,n){// create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
let r=(0,c.useRef)("undefined"!=typeof document?document.activeElement:null);X(()=>{let r=e.current;if(!t||n)return;let i=()=>{// If focusing an element in a child scope of the currently active scope, the child becomes active.
// Moving out of the active scope to an ancestor is not allowed.
(!e8||ta(e8,e))&&ti(document.activeElement,e.current)&&(e8=e)};return document.addEventListener("focusin",i,!1),r.forEach(e=>e.addEventListener("focusin",i,!1)),()=>{document.removeEventListener("focusin",i,!1),r.forEach(e=>e.removeEventListener("focusin",i,!1))};// eslint-disable-next-line react-hooks/exhaustive-deps
},[e,n]),X(()=>{if(!t)return;// Handle the Tab key so that tabbing out of the scope goes to the next element
// after the node that had focus when the scope mounted. This is important when
// using portals for overlays, so that focus goes to the expected element when
// tabbing out of the overlay.
let r=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!tr(e))return;let n=document.activeElement;if(!ti(n,e.current))return;let r=tf.getTreeNode(e).nodeToRestore,i=tu(document.body,{tabbable:!0});// Find the next tabbable element after the currently focused element
i.currentNode=n;let o=t.shiftKey?i.previousNode():i.nextNode();// If there is no next element, or it is outside the current scope, move focus to the
// next element after the node to restore to instead.
if(document.body.contains(r)&&r!==document.body||(r=null,tf.getTreeNode(e).nodeToRestore=null),(!o||!ti(o,e.current))&&r){i.currentNode=r;// Skip over elements within the scope, in case the scope immediately follows the node to restore.
do o=t.shiftKey?i.previousNode():i.nextNode();while(ti(o,e.current))(t.preventDefault(),t.stopPropagation(),o)?ts(o,!0):to(r)?ts(r,!0):n.blur()}};return n||document.addEventListener("keydown",r,!0),()=>{n||document.removeEventListener("keydown",r,!0)}},[e,t,n]),X(()=>{if(t)return tf.getTreeNode(e).nodeToRestore=r.current,()=>{let n=tf.getTreeNode(e).nodeToRestore;// if we already lost focus to the body and this was the active scope, then we should attempt to restore
if(t&&n&&// eslint-disable-next-line react-hooks/exhaustive-deps
(ti(document.activeElement,e.current)||document.activeElement===document.body&&function(e){let t=tf.getTreeNode(e8);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){// freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
let t=tf.clone();requestAnimationFrame(()=>{// Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
if(document.activeElement===document.body){// look up the tree starting with our scope to find a nodeToRestore still in the DOM
let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&document.body.contains(n.nodeToRestore)){ts(n.nodeToRestore);return}n=n.parent}for(// If no nodeToRestore was found, focus the first element in the nearest
// ancestor scope that is still in the tree.
n=t.getTreeNode(e);n;){if(n.scopeRef&&tf.getTreeNode(n.scopeRef)){tl(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(h,u,l),function(e,t){let r=/*@__PURE__*/n(c).useRef(t);(0,c.useEffect)(()=>{r.current&&(e8=e,ti(document.activeElement,e8.current)||tl(e.current)),r.current=!1},[e])}(h,d),(0,c.useEffect)(()=>{if(h){let e=document.activeElement,t=null;// In strict mode, active scope is incorrectly updated since cleanup will run even though scope hasn't unmounted.
// To fix this, we need to update the actual activeScope here
if(ti(e,h.current)){// Since useLayoutEffect runs for children first, we need to traverse the focusScope tree and find the bottom most scope that
// contains the active element and set that as the activeScope
for(let n of tf.traverse())ti(e,n.scopeRef.current)&&(t=n);t===tf.getTreeNode(h)&&(e8=t.scopeRef)}return()=>{// Scope may have been re-parented.
let e=tf.getTreeNode(h).parent.scopeRef;(h===e8||ta(h,e8))&&(!e||tf.getTreeNode(e))&&(e8=e),tf.removeTreeNode(h)}}},[h]);let v=(0,c.useMemo)(()=>({focusNext(e={}){let t=h.current,{from:n,tabbable:r,wrap:i,accept:o}=e,a=n||document.activeElement,s=t[0].previousElementSibling,l=tu(tn(t),{tabbable:r,accept:o},t);l.currentNode=ti(a,t)?a:s;let u=l.nextNode();return!u&&i&&(l.currentNode=s,u=l.nextNode()),u&&ts(u,!0),u},focusPrevious(e={}){let t=h.current,{from:n,tabbable:r,wrap:i,accept:o}=e,a=n||document.activeElement,s=t[t.length-1].nextElementSibling,l=tu(tn(t),{tabbable:r,accept:o},t);l.currentNode=ti(a,t)?a:s;let u=l.previousNode();return!u&&i&&(l.currentNode=s,u=l.previousNode()),u&&ts(u,!0),u},focusFirst(e={}){let t=h.current,{tabbable:n,accept:r}=e,i=tu(tn(t),{tabbable:n,accept:r},t);i.currentNode=t[0].previousElementSibling;let o=i.nextNode();return o&&ts(o,!0),o},focusLast(e={}){let t=h.current,{tabbable:n,accept:r}=e,i=tu(tn(t),{tabbable:n,accept:r},t);i.currentNode=t[t.length-1].nextElementSibling;let o=i.previousNode();return o&&ts(o,!0),o}}),[]),y=(0,c.useMemo)(()=>({focusManager:v,parentNode:g}),[g,v]);return /*@__PURE__*/n(c).createElement(e6.Provider,{value:y},/*@__PURE__*/n(c).createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:f}),s,/*@__PURE__*/n(c).createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:p}))}const e9=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],te=e9.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";e9.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const tt=e9.join(':not([hidden]):not([tabindex="-1"]),');function tn(e){return e[0].parentElement}function tr(e){let t=tf.getTreeNode(e8);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function ti(e,t){return t.some(t=>t.contains(e))}function to(e,t=null){// If the element is within a top layer element (e.g. toasts), always allow moving focus there.
if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;// node.contains in isElementInScope covers child scopes that are also DOM children,
// but does not cover child scopes in portals.
for(let{scopeRef:n}of tf.traverse(tf.getTreeNode(t)))if(ti(e,n.current))return!0;return!1}function ta(e,t){var n;let r=null===(n=tf.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function ts(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){// ignore
}}else try{e5(e)}catch(e){// ignore
}}function tl(e,t=!0){let n=e[0].previousElementSibling,r=tu(tn(e),{tabbable:t},e);r.currentNode=n;let i=r.nextNode();t&&!i&&((r=tu(tn(e),{tabbable:!1},e)).currentNode=n,i=r.nextNode()),ts(i)}function tu(e,t,n){let r=(null==t?void 0:t.tabbable)?tt:te,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var i;return(// Skip nodes inside the starting node.
(null==t?void 0:null===(i=t.from)||void 0===i?void 0:i.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:i}=t(e);r="none"!==n&&"hidden"!==i&&"collapse"!==i}return r}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||ti(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)}});return(null==t?void 0:t.from)&&(i.currentNode=t.from),i}class tc{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null),i=new td({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){// never remove the root
if(null===e)return;let t=this.fastMap.get(e),n=t.parent;// when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
// if we are, then replace the siblings restore with the restore from the scope we're removing
for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef.current&&ti(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n.removeChild(t),r.size>0&&r.forEach(e=>n.addChild(e)),this.fastMap.delete(t.scopeRef)}// Pre Order Depth First
*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){let e=new tc;for(let t of this.traverse())e.addTreeNode(t.scopeRef,t.parent.scopeRef,t.nodeToRestore);return e}constructor(){this.fastMap=new Map,this.root=new td({scopeRef:null}),this.fastMap.set(null,this.root)}}class td{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let tf=new tc,tp=/*@__PURE__*/n(c).createContext(null);/*@__PURE__*/n(c).forwardRef(/**
 * Provides DOM props to the nearest focusable child.
 */function(e,t){let{children:r,...i}=e,o={...i,ref:t};return /*@__PURE__*/n(c).createElement(tp.Provider,{value:o},r)});var c=u("e0W5i");"undefined"!=typeof document&&window.visualViewport,new WeakMap,"undefined"!=typeof document&&window.visualViewport;/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const th=[];function tm(e,t){let{onClose:n,shouldCloseOnBlur:r,isOpen:i,isDismissable:o=!1,isKeyboardDismissDisabled:a=!1,shouldCloseOnInteractOutside:s}=e;(0,c.useEffect)(()=>(i&&th.push(t),()=>{let e=th.indexOf(t);e>=0&&th.splice(e,1)}),[i,t]);// Only hide the overlay when it is the topmost visible overlay in the stack.
let l=()=>{th[th.length-1]===t&&n&&n()};!/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
function(e){let{ref:t,onInteractOutside:n,isDisabled:r,onInteractOutsideStart:i}=e,o=(0,c.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),a=Q(e=>{n&&e3(e,t)&&(i&&i(e),o.current.isPointerDown=!0)}),s=Q(e=>{n&&n(e)});(0,c.useEffect)(()=>{let e=o.current;if(!r){// Use pointer events if available. Otherwise, fall back to mouse and touch events.
if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&e3(n,t)&&s(n),e.isPointerDown=!1};return(// changing these to capture phase fixed combobox
document.addEventListener("pointerdown",a,!0),document.addEventListener("pointerup",n,!0),()=>{document.removeEventListener("pointerdown",a,!0),document.removeEventListener("pointerup",n,!0)})}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&e3(n,t)&&s(n),e.isPointerDown=!1},r=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&e3(n,t)&&s(n),e.isPointerDown=!1};return document.addEventListener("mousedown",a,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",r,!0),()=>{document.removeEventListener("mousedown",a,!0),document.removeEventListener("mouseup",n,!0),document.removeEventListener("touchstart",a,!0),document.removeEventListener("touchend",r,!0)}}}},[t,r,a,s])}({ref:t,onInteractOutside:o?e=>{(!s||s(e.target))&&(th[th.length-1]===t&&(e.stopPropagation(),e.preventDefault()),l())}:null,onInteractOutsideStart:e=>{(!s||s(e.target))&&th[th.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:u}=/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:i}=e,o=(0,c.useRef)({isFocusWithin:!1}),a=(0,c.useCallback)(e=>{// We don't want to trigger onBlurWithin and then immediately onFocusWithin again
// when moving focus inside the element. Only trigger if the currentTarget doesn't
// include the relatedTarget (where focus is moving).
o.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(o.current.isFocusWithin=!1,n&&n(e),i&&i(!1))},[n,i,o]),s=e$(a),l=(0,c.useCallback)(e=>{// Double check that document.activeElement actually matches e.target in case a previously chained
// focus handler already moved focus somewhere else.
o.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),i&&i(!0),o.current.isFocusWithin=!0,s(e))},[r,i,s]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:l,onBlur:a}}}({isDisabled:!r,onBlurWithin:e=>{// Do not close if relatedTarget is null, which means focus is lost to the body.
// That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
// Clicking on the body to close the overlay should already be handled by useInteractOutside.
// https://github.com/adobe/react-spectrum/issues/4130
// https://github.com/adobe/react-spectrum/issues/4922
//
// If focus is moving into a child focus scope (e.g. menu inside a dialog),
// do not close the outer overlay. At this point, the active scope should
// still be the outer overlay, since blur events run before focus.
!(!e.relatedTarget||to(e.relatedTarget,e8))&&(!s||s(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||a||(e.stopPropagation(),e.preventDefault(),l())},...u},underlayProps:{onPointerDown:e=>{// fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
e.target===e.currentTarget&&e.preventDefault()}}}}"undefined"!=typeof document&&window.visualViewport;/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const tg=/*@__PURE__*/n(c).createContext(null);function tv(e){let{children:t}=e,r=(0,c.useContext)(tg),[i,o]=(0,c.useState)(0),a=(0,c.useMemo)(()=>({parent:r,modalCount:i,addModal(){o(e=>e+1),r&&r.addModal()},removeModal(){o(e=>e-1),r&&r.removeModal()}}),[r,i]);return /*@__PURE__*/n(c).createElement(tg.Provider,{value:a},t)}/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */function ty(e){let t;let{modalProviderProps:r}={modalProviderProps:{"aria-hidden":!!(t=(0,c.useContext)(tg))&&t.modalCount>0||null}};return /*@__PURE__*/n(c).createElement("div",{"data-overlay-container":!0,...e,...r})}function tb(e){return /*@__PURE__*/n(c).createElement(tv,null,/*@__PURE__*/n(c).createElement(ty,e))}function tx(e){// Add aria-hidden to all parent providers on mount, and restore on unmount.
let t=(0,c.useContext)(tg);if(!t)throw Error("Modal is not contained within a provider");return(0,c.useEffect)(()=>{if((null==e||!e.isDisabled)&&t&&t.parent)return(// The immediate context is from the provider containing this modal, so we only
// want to trigger aria-hidden on its parents not on the modal provider itself.
t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()})},[t,t.parent,null==e?void 0:e.isDisabled]),{modalProps:{"data-ismodal":!(null==e?void 0:e.isDisabled)}}}new WeakMap;/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const tw=/*@__PURE__*/n(c).createContext(null);var c=u("e0W5i"),tE=function(){return(tE=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function tS(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var c=u("e0W5i"),tk={};//
tk=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;// Test for A's keys different from B.
for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0};var tP="-ms-",tC="-moz-",tT="-webkit-",tA="comm",tM="rule",tL="decl",tR="@keyframes",tD=Math.abs,tV=String.fromCharCode,tO=Object.assign;function tN(e,t){return(e=t.exec(e))?e[0]:e}function tF(e,t,n){return e.replace(t,n)}function tI(e,t){return e.indexOf(t)}function tz(e,t){return 0|e.charCodeAt(t)}function tj(e,t,n){return e.slice(t,n)}function tB(e){return e.length}function t_(e,t){return t.push(e),e}function tU(e,t){return e.filter(function(e){return!tN(e,t)})}var tW=1,t$=1,tH=0,tG=0,tK=0,tY="";function tq(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:tW,column:t$,length:a,return:"",siblings:s}}function tX(e,t){return tO(tq("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tQ(e){for(;e.root;)e=tX(e.root,{children:[e]});t_(e,e.siblings)}function tZ(){return tK=tG<tH?tz(tY,tG++):0,t$++,10===tK&&(t$=1,tW++),tK}function tJ(){return tz(tY,tG)}function t0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t1(e){var t,n;return(t=tG-1,n=function e(t){for(;tZ();)switch(tK){case t:return tG;case 34:case 39:34!==t&&39!==t&&e(tK);break;case 40:41===t&&e(t);break;case 92:tZ()}return tG}(91===e?e+2:40===e?e+1:e),tj(tY,t,n)).trim()}function t2(e,t,n,r,i,o,a,s,l,u,c,d){for(var f=i-1,p=0===i?o:[""],h=p.length,m=0,g=0,v=0;m<r;++m)for(var y=0,b=tj(e,f+1,f=tD(g=a[m])),x=e;y<h;++y)(x=(g>0?p[y]+" "+b:tF(b,/&\f/g,p[y])).trim())&&(l[v++]=x);return tq(e,t,n,0===i?tM:s,l,u,c,d)}function t3(e,t,n,r,i){return tq(e,t,n,tL,tj(e,0,r),tj(e,r+1,-1),r,i)}function t4(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function t5(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case tL:return e.return=e.return||e.value;case tA:return"";case tR:return e.return=e.value+"{"+t4(e.children,r)+"}";case tM:if(!tB(e.value=e.props.join(",")))return""}return tB(n=t4(e.children,r))?e.return=e.value+"{"+n+"}":""}function t6(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tL:e.return=function e(t,n,r){var i;switch(i=n,45^tz(t,0)?(((i<<2^tz(t,0))<<2^tz(t,1))<<2^tz(t,2))<<2^tz(t,3):0){case 5103:return tT+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tT+t+t;case 4789:return tC+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tT+t+tC+t+tP+t+t;case 5936:switch(tz(t,n+11)){case 114:return tT+t+tP+tF(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tT+t+tP+tF(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tT+t+tP+tF(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return tT+t+tP+t+t;case 6165:return tT+t+tP+"flex-"+t+t;case 5187:return tT+t+tF(t,/(\w+).+(:[^]+)/,tT+"box-$1$2"+tP+"flex-$1$2")+t;case 5443:return tT+t+tP+"flex-item-"+tF(t,/flex-|-self/g,"")+(tN(t,/flex-|baseline/)?"":tP+"grid-row-"+tF(t,/flex-|-self/g,""))+t;case 4675:return tT+t+tP+"flex-line-pack"+tF(t,/align-content|flex-|-self/g,"")+t;case 5548:return tT+t+tP+tF(t,"shrink","negative")+t;case 5292:return tT+t+tP+tF(t,"basis","preferred-size")+t;case 6060:return tT+"box-"+tF(t,"-grow","")+tT+t+tP+tF(t,"grow","positive")+t;case 4554:return tT+tF(t,/([^-])(transform)/g,"$1"+tT+"$2")+t;case 6187:return tF(tF(tF(t,/(zoom-|grab)/,tT+"$1"),/(image-set)/,tT+"$1"),t,"")+t;case 5495:case 3959:return tF(t,/(image-set\([^]*)/,tT+"$1$`$1");case 4968:return tF(tF(t,/(.+:)(flex-)?(.*)/,tT+"box-pack:$3"+tP+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tT+t+t;case 4200:if(!tN(t,/flex-|baseline/))return tP+"grid-column-align"+tj(t,n)+t;break;case 2592:case 3360:return tP+tF(t,"template-","")+t;case 4384:case 3616:if(r&&r.some(function(e,t){return n=t,tN(e.props,/grid-\w+-end/)}))return~tI(t+(r=r[n].value),"span")?t:tP+tF(t,"-start","")+t+tP+"grid-row-span:"+(~tI(r,"span")?tN(r,/\d+/):+tN(r,/\d+/)-+tN(t,/\d+/))+";";return tP+tF(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(e){return tN(e.props,/grid-\w+-start/)})?t:tP+tF(tF(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return tF(t,/(.+)-inline(.+)/,tT+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tB(t)-1-n>6)switch(tz(t,n+1)){case 109:if(45!==tz(t,n+4))break;case 102:return tF(t,/(.+:)(.+)-([^]+)/,"$1"+tT+"$2-$3$1"+tC+(108==tz(t,n+3)?"$3":"$2-$3"))+t;case 115:return~tI(t,"stretch")?e(tF(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return tF(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,n,r,i,o,a,s){return tP+n+":"+r+s+(i?tP+n+"-span:"+(o?a:+a-+r)+s:"")+t});case 4949:if(121===tz(t,n+6))return tF(t,":",":"+tT)+t;break;case 6444:switch(tz(t,45===tz(t,14)?18:11)){case 120:return tF(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tT+(45===tz(t,14)?"inline-":"")+"box$3$1"+tT+"$2$3$1"+tP+"$2box$3")+t;case 100:return tF(t,":",":"+tP)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return tF(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,n);return;case tR:return t4([tX(e,{value:tF(e.value,"@","@"+tT)})],r);case tM:if(e.length)return(n=e.props).map(function(t){switch(tN(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tQ(tX(e,{props:[tF(t,/:(read-\w+)/,":"+tC+"$1")]})),tQ(tX(e,{props:[t]})),tO(e,{props:tU(n,r)});break;case"::placeholder":tQ(tX(e,{props:[tF(t,/:(plac\w+)/,":"+tT+"input-$1")]})),tQ(tX(e,{props:[tF(t,/:(plac\w+)/,":"+tC+"$1")]})),tQ(tX(e,{props:[tF(t,/:(plac\w+)/,tP+"input-$1")]})),tQ(tX(e,{props:[t]})),tO(e,{props:tU(n,r)})}return""}).join("")}}var t8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},t7={},t9=t7={};function ne(){throw Error("setTimeout has not been defined")}function nt(){throw Error("clearTimeout has not been defined")}function nn(e){if(nk===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((nk===ne||!nk)&&setTimeout)return nk=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return nk(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return nk.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return nk.call(this,e,0)}}}!function(){try{nk="function"==typeof setTimeout?setTimeout:ne}catch(e){nk=ne}try{nP="function"==typeof clearTimeout?clearTimeout:nt}catch(e){nP=nt}}();var nr=[],ni=!1,no=-1;function na(){ni&&nC&&(ni=!1,nC.length?nr=nC.concat(nr):no=-1,nr.length&&ns())}function ns(){if(!ni){var e=nn(na);ni=!0;for(var t=nr.length;t;){for(nC=nr,nr=[];++no<t;)nC&&nC[no].run();no=-1,t=nr.length}nC=null,ni=!1,function(e){if(nP===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((nP===nt||!nP)&&clearTimeout)return nP=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
nP(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return nP.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return nP.call(this,e)}}}(e)}}// v8 likes predictible objects
function nl(e,t){this.fun=e,this.array=t}function nu(){}t9.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];nr.push(new nl(e,t)),1!==nr.length||ni||nn(ns)},nl.prototype.run=function(){this.fun.apply(null,this.array)},t9.title="browser",t9.browser=!0,t9.env={},t9.argv=[],t9.version="",t9.versions={},t9.on=nu,t9.addListener=nu,t9.once=nu,t9.off=nu,t9.removeListener=nu,t9.removeAllListeners=nu,t9.emit=nu,t9.prependListener=nu,t9.prependOnceListener=nu,t9.listeners=function(e){return[]},t9.binding=function(e){throw Error("process.binding is not supported")},t9.cwd=function(){return"/"},t9.chdir=function(e){throw Error("process.chdir is not supported")},t9.umask=function(){return 0};var nc=(void 0!==t7&&t7.env,"data-styled"),nd="undefined"!=typeof window&&"HTMLElement"in window,nf=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:(void 0!==t7&&t7.env,void 0!==t7&&t7.env,!1)),np={},nh=Object.freeze([]),nm=Object.freeze({});function ng(e,t,n){return void 0===n&&(n=nm),e.theme!==n.theme&&e.theme||t||n.theme}var nv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ny=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nb=/(^-|-$)/g;function nx(e){return e.replace(ny,"-").replace(nb,"")}var nw=/(a)(d)/gi,nE=function(e){return String.fromCharCode(e+(e>25?39:97))};function nS(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nE(t%52)+n;return(nE(t%52)+n).replace(nw,"$1-$2")}var nk,nP,nC,nT,nA=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nM=function(e){return nA(5381,e)};function nL(e){return"string"==typeof e}var nR="function"==typeof Symbol&&Symbol.for,nD=nR?Symbol.for("react.memo"):60115,nV=nR?Symbol.for("react.forward_ref"):60112,nO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nF={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nI=((nT={})[nV]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nT[nD]=nF,nT);function nz(e){return("type"in e&&e.type.$$typeof)===nD?nF:"$$typeof"in e?nI[e.$$typeof]:nO}var nj=Object.defineProperty,nB=Object.getOwnPropertyNames,n_=Object.getOwnPropertySymbols,nU=Object.getOwnPropertyDescriptor,nW=Object.getPrototypeOf,n$=Object.prototype;function nH(e){return"function"==typeof e}function nG(e){return"object"==typeof e&&"styledComponentId"in e}function nK(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nY(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function nq(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nX(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nQ=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw nX(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat("/*!sc*/\n");return t},e}(),nZ=new Map,nJ=new Map,n0=1,n1=function(e){if(nZ.has(e))return nZ.get(e);for(;nJ.has(n0);)n0++;var t=n0++;return nZ.set(e,t),nJ.set(t,e),t},n2=function(e,t){nZ.set(e,t),nJ.set(t,e)},n3="style[".concat(nc,"][").concat("data-styled-version",'="').concat("6.0.0-rc.3",'"]'),n4=new RegExp("^".concat(nc,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),n5=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},n6=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(n4);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(n2(c,u),n5(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function n8(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var n7=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(nc))return r}}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(nc,"active"),r.setAttribute("data-styled-version","6.0.0-rc.3");var a=n8();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},n9=function(){function e(e){this.element=n7(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw nX(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),re=function(){function e(e){this.element=n7(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),rt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),rn=nd,rr={isServer:!nd,useCSSOMInjection:!nf},ri=function(){function e(e,t,n){void 0===e&&(e=nm),void 0===t&&(t={}),this.options=tE(tE({},rr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nd&&rn&&(rn=!1,function(e){for(var t=document.querySelectorAll(n3),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(nc)&&(n6(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}return e.registerId=function(e){return n1(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(tE(tE({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,n,r;return this.tag||(this.tag=(n=(t=this.options).useCSSOMInjection,r=t.target,e=t.isServer?new rt(r):n?new n9(r):new re(r),new nQ(e)))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(n1(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(n1(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(n1(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++)(function(n){var i=nJ.get(n);if(void 0!==i){var o=e.names.get(i),a=t.getGroup(n);if(void 0!==o&&0!==a.length){var s="".concat(nc,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat("/*!sc*/\n")}}})(i);return r}(this)},e}(),ro=/&/g,ra=/^\s*\/\/.*$/gm;function rs(e){var t,n,r,i=void 0===e?nm:e,o=i.options,a=void 0===o?nm:o,s=i.plugins,l=void 0===s?nh:s,u=function(e,r,i){return i===n||i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===tM&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ro,n).replace(r,u))}),a.prefix&&c.push(t6),c.push(t5);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=RegExp("\\".concat(n,"\\b"),"g");var l,u,d,f,p,h=e.replace(ra,""),m=(p=function e(t,n,r,i,o,a,s,l,u){for(var c,d=0,f=0,p=s,h=0,m=0,g=0,v=1,y=1,b=1,x=0,w="",E=o,S=a,k=i,P=w;y;)switch(g=x,x=tZ()){case 40:if(108!=g&&58==tz(P,p-1)){-1!=tI(P+=tF(t1(x),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:P+=t1(x);break;case 9:case 10:case 13:case 32:P+=function(e){for(;tK=tJ();)if(tK<33)tZ();else break;return t0(e)>2||t0(tK)>3?"":" "}(g);break;case 92:P+=function(e,t){for(var n;--t&&tZ()&&!(tK<48)&&!(tK>102)&&(!(tK>57)||!(tK<65))&&(!(tK>70)||!(tK<97)););return n=tG+(t<6&&32==tJ()&&32==tZ()),tj(tY,e,n)}(tG-1,7);continue;case 47:switch(tJ()){case 42:case 47:t_(tq(c=function(e,t){for(;tZ();)if(e+tK===57)break;else if(e+tK===84&&47===tJ())break;return"/*"+tj(tY,t,tG-1)+"*"+tV(47===e?e:tZ())}(tZ(),tG),n,r,tA,tV(tK),tj(c,2,-2),0,u),u);break;default:P+="/"}break;case 123*v:l[d++]=tB(P)*b;case 125*v:case 59:case 0:switch(x){case 0:case 125:y=0;case 59+f:-1==b&&(P=tF(P,/\f/g,"")),m>0&&tB(P)-p&&t_(m>32?t3(P+";",i,r,p-1,u):t3(tF(P," ","")+";",i,r,p-2,u),u);break;case 59:P+=";";default:if(t_(k=t2(P,n,r,d,f,o,l,w,E=[],S=[],p,a),a),123===x){if(0===f)e(P,n,k,k,E,a,p,l,S);else switch(99===h&&110===tz(P,3)?100:h){case 100:case 108:case 109:case 115:e(t,k,k,i&&t_(t2(t,k,k,0,0,o,l,w,o,E=[],p,S),S),o,S,p,l,i?E:S);break;default:e(P,k,k,k,[""],S,0,l,S)}}}d=f=m=0,v=b=1,w=P="",p=s;break;case 58:p=1+tB(P),m=g;default:if(v<1){if(123==x)--v;else if(125==x&&0==v++&&125==(tK=tG>0?tz(tY,--tG):0,t$--,10===tK&&(t$=1,tW--),tK))continue}switch(P+=tV(x),x*v){case 38:b=f>0?1:(P+="\f",-1);break;case 44:l[d++]=(tB(P)-1)*b,b=1;break;case 64:45===tJ()&&(P+=t1(tZ())),h=tJ(),f=p=tB(w=P+=function(e){for(;!t0(tJ());)tZ();return tj(tY,e,tG)}(tG)),x++;break;case 45:45===g&&2==tB(P)&&(v=0)}}return a}("",null,null,null,[""],(f=d=o||i?"".concat(o," ").concat(i," { ").concat(h," }"):h,tW=t$=1,tH=tB(tY=f),tG=0,d=[]),0,[0],d),tY="",p);a.namespace&&(m=function e(t,n){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(e){return"".concat(n," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,n)),t})}(m,a.namespace));var g=[];return t4(m,(u=(l=c.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,g.push(t))})).length,function(e,t,n,r){for(var i="",o=0;o<u;o++)i+=l[o](e,t,n,r)||"";return i})),g};return d.hash=l.length?l.reduce(function(e,t){return t.name||nX(15),nA(e,t.name)},5381).toString():"",d}var rl=new ri,ru=rs(),rc=/*@__PURE__*/n(c).createContext({shouldForwardProp:void 0,styleSheet:rl,stylis:ru}),rd=(rc.Consumer,/*@__PURE__*/n(c).createContext(void 0));function rf(){return(0,c.useContext)(rc)}function rp(e){var t=(0,c.useState)(e.stylisPlugins),r=t[0],i=t[1],o=rf().styleSheet,a=(0,c.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,c.useMemo)(function(){return rs({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);return(0,c.useEffect)(function(){/*@__PURE__*/n(tk)(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]),/*@__PURE__*/n(c).createElement(rc.Provider,{value:{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},/*@__PURE__*/n(c).createElement(rd.Provider,{value:s},e.children))}var rh=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ru);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){throw nX(12,String(n.name))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ru),this.name+e.hash},e}();function rm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;r>="A"&&r<="Z"?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rg=function(e){return null==e||!1===e||""===e},rv=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!rg(r)&&(Array.isArray(r)&&r.isCss||nH(r)?t.push("".concat(rm(n),":"),r,";"):nq(r)?t.push.apply(t,tS(tS(["".concat(n," {")],rv(r),!1),["}"],!1)):t.push("".concat(rm(n),": ").concat(null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in t8||n.startsWith("--")?String(r).trim():"".concat(r,"px"),";")))}return t};function ry(e,t,n,r){return rg(e)?[]:nG(e)?[".".concat(e.styledComponentId)]:nH(e)?!nH(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:ry(e(t),t,n,r):e instanceof rh?n?(e.inject(n,r),[e.getName(r)]):[e]:nq(e)?rv(e):Array.isArray(e)?e.flatMap(function(e){return ry(e,t,n,r)}):[e.toString()]}function rb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(nH(n)&&!nG(n))return!1}return!0}var rx=nM("6.0.0-rc.3"),rw=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&rb(e),this.componentId=t,this.baseHash=nA(rx,t),this.baseStyle=n,ri.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=nK(r,this.staticRulesId);else{var i=nY(ry(this.rules,e,t,n)),o=nS(nA(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=nK(r,o),this.staticRulesId=o}}else{for(var s=nA(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=nY(ry(c,e,t,n));s=nA(s,d),l+=d}}if(l){var f=nS(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=nK(r,f)}}return r},e}(),rE=/*@__PURE__*/n(c).createContext(void 0);function rS(){return(0,c.useContext)(rE)}rE.Consumer;var rk={};function rP(e,t,r){var i,o,a,s,l,u=nG(e),d=!nL(e),f=t.componentId,p=void 0===f?(i=t.displayName,o=t.parentComponentId,rk[a="string"!=typeof i?"sc":nx(i)]=(rk[a]||0)+1,s="".concat(a,"-").concat(nS(nM("6.0.0-rc.3"+a+rk[a])>>>0)),o?"".concat(o,"-").concat(s):s):f,h=t.displayName,m=void 0===h?nL(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):h,g=null!==(l=t.attrs)&&void 0!==l?l:[],v=t.displayName&&t.componentId?"".concat(nx(t.displayName),"-").concat(t.componentId):t.componentId||p,y=u&&e.attrs?e.attrs.concat(g).filter(Boolean):g,b=t.shouldForwardProp;if(u&&e.shouldForwardProp){var x=e.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;b=function(e,t){return x(e,t)&&w(e,t)}}else b=x}var E=new rw(r,v,u?e.componentStyle:void 0),S=E.isStatic&&0===g.length;function k(e,t){return function(e,t,n,r){var i,o=e.attrs,a=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,u=e.styledComponentId,d=e.target,f=rS(),p=rf(),h=e.shouldForwardProp||p.shouldForwardProp,m=function(e,t,n){for(var r,i=tE(tE({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=nH(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?nK(i[s],a[s]):"style"===s?tE(tE({},i[s]),a[s]):a[s]}return t.className&&(i.className=nK(i.className,t.className)),i}(o,t,ng(t,f,s)||nm),g=m.as||d,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y||("forwardedAs"===y?v.as=m.forwardedAs:h&&!h(y,g)||(v[y]=m[y]));var b=(i=rf(),a.generateAndInjectStyles(r?nm:m,i.styleSheet,i.stylis)),x=nK(l,u);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),v[nL(g)&&!nv.has(g)?"class":"className"]=x,v.ref=n,(0,c.createElement)(g,v)}(P,e,t,S)}k.displayName=m;var P=/*@__PURE__*/n(c).forwardRef(k);return P.attrs=y,P.componentStyle=E,P.displayName=m,P.shouldForwardProp=b,P.foldedComponentIds=u?nK(e.foldedComponentIds,e.styledComponentId):"",P.styledComponentId=v,P.target=u?e.target:e,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=u?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++)(function e(t,n,r){if(void 0===r&&(r=!1),!r&&!nq(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)t[i]=e(t[i],n[i]);else if(nq(n))for(var i in n)t[i]=e(t[i],n[i]);return t})(e,t[r],!0);return e}({},e.defaultProps,t):t}}),Object.defineProperty(P,"toString",{value:function(){return".".concat(P.styledComponentId)}}),d&&function e(t,n,r){if("string"!=typeof n){if(n$){var i=nW(n);i&&i!==n$&&e(t,i,r)}var o=nB(n);n_&&(o=o.concat(n_(n)));for(var a=nz(t),s=nz(n),l=0;l<o.length;++l){var u=o[l];if(!(u in nN||r&&r[u]||s&&u in s||a&&u in a)){var c=nU(n,u);try{nj(t,u,c)}catch(e){}}}}return t}(P,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function rC(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var rT=function(e){return Object.assign(e,{isCss:!0})};function rA(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return nH(e)||nq(e)?rT(ry(rC(nh,tS([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?ry(e):rT(ry(rC(e,t)))}function rM(e){return function e(t,n,r){if(void 0===r&&(r=nm),!n)throw nX(1,n);var i=function(e){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return t(n,r,rA.apply(void 0,tS([e],i,!1)))};return i.attrs=function(i){return e(t,n,tE(tE({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return e(t,n,tE(tE({},r),i))},i}(rP,e)}nv.forEach(function(e){rM[e]=rM(e)});var rL=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=rb(e),ri.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(nY(ry(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&ri.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=n8(),r=nY([n&&'nonce="'.concat(n,'"'),"".concat(nc,'="true"'),"".concat("data-styled-version",'="').concat("6.0.0-rc.3",'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw nX(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw nX(2);var t,r=((t={})[nc]="",t["data-styled-version"]="6.0.0-rc.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),i=n8();return i&&(r.nonce=i),[/*@__PURE__*/n(c).createElement("style",tE({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ri({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw nX(2);return /*@__PURE__*/n(c).createElement(rp,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw nX(3)}}();var rR={};t(rR,"GenIcon",()=>rF);var c=(u("e0W5i"),u("e0W5i")),rD={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rV=/*@__PURE__*/n(c).createContext&&/*@__PURE__*/n(c).createContext(rD),rO=function(){return(rO=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},rN=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function rF(e){return function(t){return /*@__PURE__*/n(c).createElement(rI,rO({attr:rO({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return /*@__PURE__*/n(c).createElement(t.tag,rO({key:r},t.attr),e(t.child))})}(e.child))}}function rI(e){var t=function(t){var r,i=e.attr,o=e.size,a=e.title,s=rN(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),/*@__PURE__*/n(c).createElement("svg",rO({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:rO(rO({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&/*@__PURE__*/n(c).createElement("title",null,a),e.children)};return void 0!==rV?/*@__PURE__*/n(c).createElement(rV.Consumer,null,function(e){return t(e)}):t(rD)}function rz(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(e)}function rj(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"}}]})(e)}function rB(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"}}]})(e)}function r_(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(e)}function rU(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(e)}function rW(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function r$(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function rH(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M267.429 488.563C262.286 507.573 242.858 512 224 512c-18.857 0-38.286-4.427-43.428-23.437C172.927 460.134 160 388.898 160 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM156.867 288.554c-18.693-18.308-29.958-44.173-28.784-72.599 2.054-49.724 42.395-89.956 92.124-91.881C274.862 121.958 320 165.807 320 220c0 26.827-11.064 51.116-28.866 68.552-2.675 2.62-2.401 6.986.628 9.187 9.312 6.765 16.46 15.343 21.234 25.363 1.741 3.654 6.497 4.66 9.449 1.891 28.826-27.043 46.553-65.783 45.511-108.565-1.855-76.206-63.595-138.208-139.793-140.369C146.869 73.753 80 139.215 80 220c0 41.361 17.532 78.7 45.55 104.989 2.953 2.771 7.711 1.77 9.453-1.887 4.774-10.021 11.923-18.598 21.235-25.363 3.029-2.2 3.304-6.566.629-9.185zM224 0C100.204 0 0 100.185 0 224c0 89.992 52.602 165.647 125.739 201.408 4.333 2.118 9.267-1.544 8.535-6.31-2.382-15.512-4.342-30.946-5.406-44.339-.146-1.836-1.149-3.486-2.678-4.512-47.4-31.806-78.564-86.016-78.187-147.347.592-96.237 79.29-174.648 175.529-174.899C320.793 47.747 400 126.797 400 224c0 61.932-32.158 116.49-80.65 147.867-.999 14.037-3.069 30.588-5.624 47.23-.732 4.767 4.203 8.429 8.535 6.31C395.227 389.727 448 314.187 448 224 448 100.205 347.815 0 224 0zm0 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z"}}]})(e)}function rG(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(e)}function rK(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"}}]})(e)}function rY(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"}}]})(e)}function rq(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}function rX(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"}}]})(e)}function rQ(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"}}]})(e)}function rZ(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 0 0-11.3 0L403.6 366.3a7.23 7.23 0 0 0 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]})(e)}function rJ(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z"}}]})(e)}function r0(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3-14.4-14.4-34-22.5-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5 42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z"}}]})(e)}const r1=rA`
  min-height: 100vh;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`;rA`
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;const r2=rM.button`
  padding: 6px 16px;
  background-color: aliceblue;
  color: mediumslateblue;
  border: none;
  font-weight: 500;
  border-radius: 999px;
  text-align: center;
  margin: 8px 0px;
`,r3=rM.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${e=>"dark"===e.bg?"#000":"#fff"};
  ${r1}

  & > button {
    margin: 16px 0px;
  }
`,r4=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=rA.apply(void 0,tS([e],t,!1)),o="sc-global-".concat(nS(nM(JSON.stringify(i))>>>0)),a=new rL(i,o),s=function(e){var t=rf(),r=rS(),i=/*@__PURE__*/n(c).useRef(t.styleSheet.allocateGSInstance(o)).current;return t.styleSheet.server&&l(i,e,t.styleSheet,r,t.stylis),(/*@__PURE__*/n(c).useInsertionEffect||/*@__PURE__*/n(c).useLayoutEffect)(function(){if(!t.styleSheet.server)return l(i,e,t.styleSheet,r,t.stylis),function(){return a.removeStyles(i,t.styleSheet)}},[i,e,t.styleSheet,r,t.stylis]),null};function l(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,np,n,i);else{var o=tE(tE({},t),{theme:ng(t,r,s.defaultProps)});a.renderStyles(e,o,n,i)}}return /*@__PURE__*/n(c).memo(s)})`
  body {
    background-color: #000;
    color: #fff;
  }
`;var c=u("e0W5i"),r5={};r5=u("fBais");var c=u("e0W5i");const r6=e=>e;function r8(e,t,n){var r;if("string"==typeof e){let i=document;t&&(r6(!!t.current,"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);/**
     * Return an empty array
     */return Array.from(e||[])}const r7=new WeakMap;class r9{constructor(e){this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}/**
     * TODO: Filter out cancelled or stopped animations before returning
     */getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const ie={delta:0,timestamp:0,isProcessing:!1};let it=!0,ir=!1;const ii=["read","update","preRender","render","postRender"],io=ii.reduce((e,t)=>(e[t]=function(e){/**
     * We create and reuse two arrays, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */let t=[],n=[],r=0,i=!1,o=!1,a=new WeakSet,s={/**
         * Schedule a process to run on the next frame.
         */schedule:(e,o=!1,s=!1)=>{let l=s&&i,u=l?t:n;return o&&a.add(e),-1===u.indexOf(e)&&(u.push(e),l&&i&&(r=t.length)),e},/**
         * Cancel the provided callback from running on the next frame.
         */cancel:e=>{let t=n.indexOf(e);-1!==t&&n.splice(t,1),a.delete(e)},/**
         * Execute all schedule callbacks.
         */process:l=>{/**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */if(i){o=!0;return}if(i=!0,[t,n]=[n,t],// Clear the next frame list
    n.length=0,// Execute this frame
    r=t.length)for(let n=0;n<r;n++){let r=t[n];r(l),a.has(r)&&(s.schedule(r),e())}i=!1,o&&(o=!1,s.process(l))}};return s}(()=>ir=!0),e),{}),ia=e=>io[e].process(ie),is=e=>{ir=!1,ie.delta=it?1e3/60:Math.max(Math.min(e-ie.timestamp,40),1),ie.timestamp=e,ie.isProcessing=!0,ii.forEach(ia),ie.isProcessing=!1,ir&&(it=!1,requestAnimationFrame(is))},il=()=>{ir=!0,it=!0,ie.isProcessing||requestAnimationFrame(is)},iu=ii.reduce((e,t)=>{let n=io[t];return e[t]=(e,t=!1,r=!1)=>(ir||il(),n.schedule(e,t,r)),e},{});function ic(e){ii.forEach(t=>io[t].cancel(e))}/**
 * Generate a list of every possible transform key.
 */const id=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ip=new Set(id),ih=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),im="data-"+ih("framerAppearId"),ig=e=>1e3*e,iv=e=>e/1e3,iy={current:!1},ib=e=>Array.isArray(e)&&"number"==typeof e[0],ix=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,iw={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ix([0,.65,.55,1]),circOut:ix([.55,0,1,.45]),backIn:ix([.31,.01,.66,-.59]),backOut:ix([.33,1.53,.69,.99])},iE={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},iS={},ik={};/**
 * Generate features tests that cache their results.
 */for(const e in iE)ik[e]=()=>(void 0===iS[e]&&(iS[e]=iE[e]()),iS[e]);/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const iP=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function iC(e,t,n,r){// If this is a linear gradient, return linear easing
if(e===t&&n===r)return r6;let i=t=>(function(e,t,n,r,i){let o,a;let s=0;do(o=iP(a=t+(n-t)/2,r,i)-e)>0?n=a:t=a;while(Math.abs(o)>1e-7&&++s<12)return a})(t,0,1,e,n);// If animation is at start/end, return t without easing
return e=>0===e||1===e?e:iP(i(e),t,r)}const iT=iC(.42,0,1,1),iA=iC(0,0,.58,1),iM=iC(.42,0,.58,1),iL=e=>Array.isArray(e)&&"number"!=typeof e[0],iR=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,iD=e=>t=>1-e(1-t),iV=e=>1-Math.sin(Math.acos(e)),iO=iD(iV),iN=iR(iO),iF=iC(.33,1.53,.69,.99),iI=iD(iF),iz=iR(iI),ij={linear:r6,easeIn:iT,easeInOut:iM,easeOut:iA,circIn:iV,circInOut:iN,circOut:iO,backIn:iI,backInOut:iz,backOut:iF,anticipate:e=>(e*=2)<1?.5*iI(e):.5*(2-Math.pow(2,-10*(e-1)))},iB=e=>{if(Array.isArray(e)){r6(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,n,r,i]=e;return iC(t,n,r,i)}return"string"==typeof e?(r6(void 0!==ij[e],`Invalid easing type '${e}'`),ij[e]):e},i_=e=>Math.round(1e5*e)/1e5,iU=/(-)?([\d]*\.?[\d])+/g,iW=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,i$=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function iH(e){return"string"==typeof e}const iG=(e,t,n)=>Math.min(Math.max(n,e),t),iK={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},iY={...iK,transform:e=>iG(0,1,e)},iq={...iK,default:1},iX=(e,t)=>n=>!!(iH(n)&&i$.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),iQ=(e,t,n)=>r=>{if(!iH(r))return r;let[i,o,a,s]=r.match(iU);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},iZ=e=>iG(0,255,e),iJ={...iK,transform:e=>Math.round(iZ(e))},i0={test:iX("rgb","red"),parse:iQ("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+iJ.transform(e)+", "+iJ.transform(t)+", "+iJ.transform(n)+", "+i_(iY.transform(r))+")"},i1={test:iX("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:i0.transform},i2=e=>({test:t=>iH(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),i3=i2("deg"),i4=i2("%"),i5=i2("px"),i6=i2("vh"),i8=i2("vw"),i7={...i4,parse:e=>i4.parse(e)/100,transform:e=>i4.transform(100*e)},i9={test:iX("hsl","hue"),parse:iQ("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+i4.transform(i_(t))+", "+i4.transform(i_(n))+", "+i_(iY.transform(r))+")"},oe={test:e=>i0.test(e)||i1.test(e)||i9.test(e),parse:e=>i0.test(e)?i0.parse(e):i9.test(e)?i9.parse(e):i1.parse(e),transform:e=>iH(e)?e:e.hasOwnProperty("red")?i0.transform(e):i9.transform(e)},ot=(e,t,n)=>-n*e+n*t+e;// Adapted from https://gist.github.com/mjackson/5311256
function on(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const or=(e,t,n)=>{let r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},oi=[i1,i0,i9],oo=e=>oi.find(t=>t.test(e));function oa(e){let t=oo(e);r6(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===i9&&(n=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100;let i=0,o=0,a=0;if(t/=100){let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=on(s,r,e+1/3),o=on(s,r,e),a=on(s,r,e-1/3)}else i=o=a=n;return{red:Math.round(255*i),green:Math.round(255*o),blue:Math.round(255*a),alpha:r}}(n)),n}const os=(e,t)=>{let n=oa(e),r=oa(t),i={...n};return e=>(i.red=or(n.red,r.red,e),i.green=or(n.green,r.green,e),i.blue=or(n.blue,r.blue,e),i.alpha=ot(n.alpha,r.alpha,e),i0.transform(i))},ol=(e,t)=>n=>t(e(n)),ou=(...e)=>e.reduce(ol),oc=e=>t=>"string"==typeof t&&t.startsWith(e),od=oc("--"),of=oc("var(--"),op={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:r6},oh={regex:iW,countKey:"Colors",token:"${c}",parse:oe.parse},om={regex:iU,countKey:"Numbers",token:"${n}",parse:iK.parse};function og(e,{regex:t,countKey:n,token:r,parse:i}){let o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function ov(e){let t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&og(n,op),og(n,oh),og(n,om),n}function oy(e){return ov(e).values}function ob(e){let{values:t,numColors:n,numVars:r,tokenised:i}=ov(e),o=t.length;return e=>{let t=i;for(let i=0;i<o;i++)t=i<r?t.replace(op.token,e[i]):i<r+n?t.replace(oh.token,oe.transform(e[i])):t.replace(om.token,i_(e[i]));return t}}const ox=e=>"number"==typeof e?0:e,ow={test:function(e){var t,n;return isNaN(e)&&iH(e)&&((null===(t=e.match(iU))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(iW))||void 0===n?void 0:n.length)||0)>0},parse:oy,createTransformer:ob,getAnimatableNone:function(e){let t=oy(e),n=ob(e);return n(t.map(ox))}},oE=(e,t)=>n=>`${n>0?t:e}`;function oS(e,t){return"number"==typeof e?n=>ot(e,t,n):oe.test(e)?os(e,t):e.startsWith("var(")?oE(e,t):oC(e,t)}const ok=(e,t)=>{let n=[...e],r=n.length,i=e.map((e,n)=>oS(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},oP=(e,t)=>{let n={...e,...t},r={};for(let i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=oS(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}},oC=(e,t)=>{let n=ow.createTransformer(t),r=ov(e),i=ov(t),o=r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers;return o?ou(ok(r.values,i.values),n):(r6(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),oE(e,t))},oT=(e,t,n)=>{let r=t-e;return 0===r?1:(n-e)/r},oA=(e,t)=>n=>ot(e,t,n);/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */function oM(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let o=e.length;/**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */if(r6(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,n){let r=[],i=n||function(e){if("number"==typeof e);else if("string"==typeof e)return oe.test(e)?os:oC;else if(Array.isArray(e))return ok;else if("object"==typeof e)return oP;return oA}(e[0]),o=e.length-1;for(let n=0;n<o;n++){let o=i(e[n],e[n+1]);if(t){let e=Array.isArray(t)?t[n]||r6:t;o=ou(e,o)}r.push(o)}return r}(t,r,i),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);let r=oT(e[n],e[n+1],t);return a[n](r)};return n?t=>l(iG(e[0],e[o-1],t)):l}function oL(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=oT(0,t,r);e.push(ot(n,1,i))}}function oR(e){let t=[0];return oL(t,e.length-1),t}function oD({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){/**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */let i=iL(r)?r.map(iB):iB(r),o={done:!1,value:t[0]},a=// TODO Maybe we should warn here if there's a length mismatch
(n&&n.length===t.length?n:oR(t)).map(t=>t*e),s=oM(a,t,{ease:Array.isArray(i)?i:t.map(()=>i||iM).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(o.value=s(t),o.done=t>=e,o)}}function oV(e,t,n){var r,i;let o=Math.max(t-5,0);return r=n-e(o),(i=t-o)?r*(1e3/i):0}function oO(e,t){return e*Math.sqrt(1-t*t)}const oN=["duration","bounce"],oF=["stiffness","damping","mass"];function oI(e,t){return t.some(t=>void 0!==e[t])}function oz({keyframes:e,restDelta:t,restSpeed:n,...r}){let i;let o=e[0],a=e[e.length-1],s={done:!1,value:o},{stiffness:l,damping:u,mass:c,velocity:d,duration:f,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};// stiffness/damping/mass overrides duration/bounce
if(!oI(e,oF)&&oI(e,oN)){let n=function({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;r6(e<=ig(10),"Spring duration must be 10 seconds or less");let a=1-t;/**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */a=iG(.05,1,a),e=iG(.01,10,iv(e)),a<1?(/**
         * Underdamped spring
         */i=t=>{let r=t*a,i=r*e,o=oO(t,a);return .001-(r-n)/o*Math.exp(-i)},o=t=>{let r=t*a,o=r*e,s=Math.pow(a,2)*Math.pow(t,2)*e,l=oO(Math.pow(t,2),a),u=-i(t)+.001>0?-1:1;return u*((o*n+n-s)*Math.exp(-o))/l}):(/**
         * Critically-damped spring
         */i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return -.001+r*i},o=t=>{let r=Math.exp(-t*e),i=(n-t)*(e*e);return r*i});let s=5/e,l=function(e,t,n){let r=n;for(let n=1;n<12;n++)r-=e(r)/t(r);return r}(i,o,s);if(e=ig(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(l,2)*r;return{stiffness:t,damping:2*a*Math.sqrt(r*t),duration:e}}}(e);(t={...t,...n,velocity:0,mass:1}).isResolvedFromDuration=!0}return t}(r),h=d?-iv(d):0,m=u/(2*Math.sqrt(l*c)),g=a-o,v=iv(Math.sqrt(l/c)),y=5>Math.abs(g);if(n||(n=y?.01:2),t||(t=y?.005:.5),m<1){let e=oO(v,m);// Underdamped spring
i=t=>{let n=Math.exp(-m*v*t);return a-n*((h+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)i=e=>a-Math.exp(-v*e)*(g+(h+v*g)*e);else{// Overdamped spring
let e=v*Math.sqrt(m*m-1);i=t=>{let n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((h+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:p&&f||null,next:e=>{let r=i(e);if(p)s.done=e>=f;else{let o=h;0!==e&&(o=m<1?oV(i,e,r):0);let l=Math.abs(o)<=n,u=Math.abs(a-r)<=t;s.done=l&&u}return s.value=s.done?a:r,s}}}function oj({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:c}){let d,f;let p=e[0],h={done:!1,value:p},m=e=>void 0!==s&&e<s||void 0!==l&&e>l,g=e=>void 0===s?l:void 0===l?s:Math.abs(s-e)<Math.abs(l-e)?s:l,v=n*t,y=p+v,b=void 0===a?y:a(y);b!==y&&(v=b-p);let x=e=>-v*Math.exp(-e/r),w=e=>b+x(e),E=e=>{let t=x(e),n=w(e);h.done=Math.abs(t)<=u,h.value=h.done?b:n},S=e=>{m(h.value)&&(d=e,f=oz({keyframes:[h.value,g(h.value)],velocity:oV(w,e,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:e=>{/**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */let t=!1;return(/**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */(f||void 0!==d||(t=!0,E(e),S(e)),void 0!==d&&e>d)?f.next(e-d):(t||E(e),h))}}}const oB=e=>{let t=({timestamp:t})=>e(t);return{start:()=>iu.update(t,!0),stop:()=>ic(t),/**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */now:()=>ie.isProcessing?ie.timestamp:performance.now()}};function o_(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const oU={decay:oj,inertia:oj,tween:oD,keyframes:oD,spring:oz};/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */function oW({autoplay:e=!0,delay:t=0,driver:n=oB,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:s="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let p,h,m,g,v,y=1,b=!1,x=()=>{p&&p(),h=new Promise(e=>{p=e})};// Create the first finished promise
x();let w=oU[i]||oD;w!==oD&&"number"!=typeof r[0]&&(g=oM([0,100],r,{clamp:!1}),r=[0,100]);let E=w({...f,keyframes:r});"mirror"===s&&(v=w({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let S="idle",k=null,P=null,C=null;/**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */null===E.calculatedDuration&&o&&(E.calculatedDuration=o_(E));let{calculatedDuration:T}=E,A=1/0,M=1/0;null!==T&&(M=(A=T+a)*(o+1)-a);let L=0,R=e=>{if(null===P)return;y>0&&(P=Math.min(P,e)),L=null!==k?k:(e-P)*y;// Rebase on delay
let n=L-t,i=n<0;L=Math.max(n,0),"finished"===S&&null===k&&(L=M);let l=L,u=E;if(o){/**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */let e=L/A,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,o+1);/**
             * Reverse progress if we're not running in "normal" direction
             */let r=!!(t%2);r&&("reverse"===s?(n=1-n,a&&(n-=a/A)):"mirror"===s&&(u=v));let i=iG(0,1,n);L>M&&(i="reverse"===s&&r?1:0),l=i*A}/**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */let c=i?{done:!1,value:r[0]}:u.next(l);g&&(c.value=g(c.value));let{done:f}=c;i||null===T||(f=L>=M);let p=null===k&&("finished"===S||"running"===S&&f||y<0&&L<=0);return d&&d(c.value),p&&O(),c},D=()=>{m&&m.stop(),m=void 0},V=()=>{S="idle",D(),x(),P=C=null},O=()=>{S="finished",c&&c(),D(),x()},N=()=>{if(b)return;m||(m=n(R));let e=m.now();l&&l(),null!==k?P=e-k:P&&"finished"!==S||(P=e),C=P,k=null,/**
         * Set playState to running only after we've used it in
         * the previous logic.
         */S="running",m.start()};e&&N();let F={then:(e,t)=>h.then(e,t),get time(){return iv(L)},set time(newTime){L=newTime=ig(newTime),null===k&&m&&0!==y?P=m.now()-newTime/y:k=newTime},get duration(){let e=null===E.calculatedDuration?o_(E):E.calculatedDuration;return iv(e)},get speed(){return y},set speed(newSpeed){if(newSpeed===y||!m)return;y=newSpeed,F.time=iv(L)},get state(){return S},play:N,pause:()=>{S="paused",k=L},stop:()=>{b=!0,"idle"!==S&&(S="idle",u&&u(),V())},cancel:()=>{null!==C&&R(C),V()},complete:()=>{S="finished"},sample:e=>(P=0,R(e))};return F}/**
 * A list of values that can be hardware-accelerated.
 */const o$=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),oH=(e,t)=>"spring"===t.type||"backgroundColor"===e||!function e(t){return!!(!t||"string"==typeof t&&iw[t]||ib(t)||Array.isArray(t)&&t.every(e))}(t.ease),oG={type:"spring",stiffness:500,damping:25,restSpeed:10},oK=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),oY={type:"keyframes",duration:.8},oq={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},oX=(e,{keyframes:t})=>t.length>2?oY:ip.has(e)?e.startsWith("scale")?oK(t[1]):oG:oq,oQ=(e,t)=>// If the list of keys tat might be non-animatable grows, replace with Set
    "zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&// It's animatable if we have a string
    (ow.test(t)||"0"===t)&&// And it contains numbers and/or colors
    !t.startsWith("url(")// Unless it starts with "url("
    ),oZ=new Set(["brightness","contrast","saturate","opacity"]);function oJ(e){let[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[r]=n.match(iU)||[];if(!r)return e;let i=n.replace(r,""),o=oZ.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const o0=/([a-z-]*)\(.*?\)/g,o1={...ow,getAnimatableNone:e=>{let t=e.match(o0);return t?t.map(oJ).join(" "):e}},o2={...iK,transform:Math.round},o3={// Border props
borderWidth:i5,borderTopWidth:i5,borderRightWidth:i5,borderBottomWidth:i5,borderLeftWidth:i5,borderRadius:i5,radius:i5,borderTopLeftRadius:i5,borderTopRightRadius:i5,borderBottomRightRadius:i5,borderBottomLeftRadius:i5,// Positioning props
width:i5,maxWidth:i5,height:i5,maxHeight:i5,size:i5,top:i5,right:i5,bottom:i5,left:i5,// Spacing props
padding:i5,paddingTop:i5,paddingRight:i5,paddingBottom:i5,paddingLeft:i5,margin:i5,marginTop:i5,marginRight:i5,marginBottom:i5,marginLeft:i5,// Transform props
rotate:i3,rotateX:i3,rotateY:i3,rotateZ:i3,scale:iq,scaleX:iq,scaleY:iq,scaleZ:iq,skew:i3,skewX:i3,skewY:i3,distance:i5,translateX:i5,translateY:i5,translateZ:i5,x:i5,y:i5,z:i5,perspective:i5,transformPerspective:i5,opacity:iY,originX:i7,originY:i7,originZ:i5,// Misc
zIndex:o2,// SVG
fillOpacity:iY,strokeOpacity:iY,numOctaves:o2},o4={...o3,color:oe,backgroundColor:oe,outlineColor:oe,fill:oe,stroke:oe,// Border props
borderColor:oe,borderTopColor:oe,borderRightColor:oe,borderBottomColor:oe,borderLeftColor:oe,filter:o1,WebkitFilter:o1},o5=e=>o4[e];function o6(e,t){let n=o5(e);// If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
return n!==o1&&(n=ow),n.getAnimatableNone?n.getAnimatableNone(t):void 0}/**
 * Check if the value is a zero value string like "0px" or "0%"
 */const o8=e=>/^0[^.\s]+$/.test(e);function o7(e,t){return e[t]||e.default||e}const o9=(e,t,n,r={})=>i=>{let o=o7(r,e)||{},a=o.delay||r.delay||0,{elapsed:s=0}=r;s-=ig(a);let l=function(e,t,n,r){let i,o;let a=oQ(t,n);i=Array.isArray(n)?[...n]:[null,n];let s=void 0!==r.from?r.from:e.get(),l=[];for(let e=0;e<i.length;e++){var u;null===i[e]&&(i[e]=0===e?s:i[e-1]),("number"==typeof(u=i[e])?0===u:null!==u?"none"===u||"0"===u||o8(u):void 0)&&l.push(e),"string"==typeof i[e]&&"none"!==i[e]&&"0"!==i[e]&&(o=i[e])}if(a&&l.length&&o)for(let e=0;e<l.length;e++){let n=l[e];i[n]=o6(t,o)}return i}(t,e,n,o),u=l[0],c=l[l.length-1],d=oQ(e,u),f=oQ(e,c);r6(d===f,`You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let p={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(!/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */function({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(o)&&(p={...p,...oX(e,p)}),p.duration&&(p.duration=ig(p.duration)),p.repeatDelay&&(p.repeatDelay=ig(p.repeatDelay)),!d||!f||iy.current||!1===o.type)/**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */return function({keyframes:e,delay:t,onUpdate:n,onComplete:r}){let i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:r6,pause:r6,stop:r6,then:e=>(e(),Promise.resolve()),cancel:r6,complete:r6});return t?oW({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}(p);/**
         * Animate via WAAPI if possible.
         */if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){let n=function(e,t,{onUpdate:n,onComplete:r,...i}){let o,a;let s=ik.waapi()&&o$.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type;if(!s)return!1;/**
     * TODO: Unify with js/index
     */let l=!1,u=()=>{a=new Promise(e=>{o=e})};// Create the first finished promise
    u();let{keyframes:c,duration:d=300,ease:f,times:p}=i;/**
     * If this animation needs pre-generated keyframes then generate.
     */if(oH(t,i)){let e=oW({...i,repeat:0,delay:0}),t={done:!1,value:c[0]},n=[],r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;p=void 0,c=n,d=r-10,f="linear"}let h=function(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){let u={[t]:n};l&&(u.offset=l);let c=function e(t){if(t)return ib(t)?ix(t):Array.isArray(t)?t.map(e):iw[t]}(s);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,c,{...i,duration:d,/**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */ease:f,times:p}),m=()=>h.cancel(),g=()=>{iu.update(m),o(),u()};/**
     * Animation interrupt callback.
     */return(/**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */h.onfinish=()=>{e.set(function(e,{repeat:t,repeatType:n="loop"}){let r=t&&"loop"!==n&&t%2==1?0:e.length-1;return e[r]}(c,i)),r&&r(),g()},{then:(e,t)=>a.then(e,t),get time(){return iv(h.currentTime||0)},set time(newTime){h.currentTime=ig(newTime)},get speed(){return h.playbackRate},set speed(newSpeed){h.playbackRate=newSpeed},get duration(){return iv(d)},play:()=>{l||(h.play(),ic(m))},pause:()=>h.pause(),stop:()=>{if(l=!0,"idle"===h.playState)return;/**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */let{currentTime:t}=h;if(t){let n=oW({...i,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}g()},complete:()=>h.finish(),cancel:g})}(t,e,p);if(n)return n}/**
         * If we didn't create an accelerated animation, create a JS animation
         */return oW(p)},ae=e=>!!(e&&e.getVelocity);function at(e){return!!(ae(e)&&e.add)}/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */const an=e=>/^\-?\d*\.?\d+$/.test(e),ar=e=>Array.isArray(e),ai=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),ao=e=>ar(e)?e[e.length-1]||0:e;function aa(e,t){-1===e.indexOf(t)&&e.push(t)}function as(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}class al{constructor(){this.subscriptions=[]}add(e){return aa(this.subscriptions,e),()=>as(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(1===r)/**
             * If there's only a single handler we can just call it without invoking a loop.
             */this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){/**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const au=e=>!isNaN(parseFloat(e));/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */class ac{/**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */constructor(e,t={}){/**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */this.version="10.12.16",/**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */this.timeDelta=0,/**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */this.lastUpdated=0,/**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */this.canTrackVelocity=!1,/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},this.updateAndNotify=(e,t=!0)=>{this.prev=this.current,this.current=e;// Update timestamp
let{delta:n,timestamp:r}=ie;this.lastUpdated!==r&&(this.timeDelta=n,this.lastUpdated=r,iu.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},/**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.scheduleVelocityCheck=()=>iu.postRender(this.velocityCheck),/**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.velocityCheck=({timestamp:e})=>{e!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=au(this.current),this.owner=t.owner}/**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new al);let n=this.events[e].add(t);return"change"===e?()=>{n(),iu.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}/**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}/**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}/**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}/**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */get(){return this.current}/**
     * @public
     */getPrevious(){return this.prev}/**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */getVelocity(){var e,t;// This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
return this.canTrackVelocity?(e=parseFloat(this.current)-parseFloat(this.prev),(t=this.timeDelta)?e*(1e3/t):0):0}/**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}/**
     * Stop the currently active animation.
     *
     * @public
     */stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}/**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}/**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ad(e,t){return new ac(e,t)}/**
 * Tests a provided value against a ValueType
 */const af=e=>t=>t.test(e),ap=[iK,i5,i4,i3,i8,i6,{test:e=>"auto"===e,parse:e=>e}],ah=e=>ap.find(af(e)),am=[...ap,oe,ow],ag=e=>am.find(af(e));function av(e,t,n,r={},i={}){return"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}function ay(e,t,n){let r=e.getProps();return av(r,t,void 0!==n?n:r.custom,/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}function ab(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t),l=e.getValue("willChange");r&&(o=r);let u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t),i=s[t];if(!r||void 0===i||c&&/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */function({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,r}(c,t))continue;let a={delay:n,elapsed:0,...o};/**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */if(window.HandoffAppearAnimations&&!r.hasAnimated){let n=e.getProps()[im];n&&(a.elapsed=window.HandoffAppearAnimations(n,t,r,iu))}r.start(o9(t,r,i,e.shouldReduceMotion&&ip.has(t)?{type:!1}:a));let d=r.animation;at(l)&&(l.add(t),d.then(()=>l.remove(t))),u.push(d)}return a&&Promise.all(u).then(()=>{a&&function(e,t){let n=ay(e,t),{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};for(let t in o={...o,...r}){let n=ao(o[t]);e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ad(n))}}(e,a)}),u}function ax(e){return e instanceof SVGElement&&"svg"!==e.tagName}const aw={};function aE(e,{layout:t,layoutId:n}){return ip.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!aw[e]||"opacity"===e)}function aS(e,t){let{style:n}=e,r={};for(let i in n)(ae(n[i])||t.style&&ae(t.style[i])||aE(i,e))&&(r[i]=n[i]);return r}function ak(e,t){let n=aS(e,t);for(let r in e)if(ae(e[r])||ae(t[r])){let t=-1!==id.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[t]=e[r]}return n}/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */const aP=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function aC(e,t,n=1){r6(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[r,i]=function(e){let t=aP.exec(e);if(!t)return[,];let[,n,r]=t;return[n,r]}(e);// No CSS variable detected
if(!r)return;// Attempt to read this CSS variable off the element
let o=window.getComputedStyle(t).getPropertyValue(r);return o?o.trim():of(i)?aC(i,t,n+1):i}const aT="undefined"!=typeof document,aA=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),aM=e=>aA.has(e),aL=e=>Object.keys(e).some(aM),aR=e=>e===iK||e===i5,aD=(e,t)=>parseFloat(e.split(", ")[t]),aV=(e,t)=>(n,{transform:r})=>{if("none"===r||!r)return 0;let i=r.match(/^matrix3d\((.+)\)$/);if(i)return aD(i[1],t);{let t=r.match(/^matrix\((.+)\)$/);return t?aD(t[1],e):0}},aO=new Set(["x","y","z"]),aN=id.filter(e=>!aO.has(e)),aF={// Dimensions
width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),// Transform
x:aV(4,13),y:aV(5,14)},aI=(e,t,n)=>{let r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),/**
     * Record origins before we render and update styles
     */n.forEach(e=>{s[e]=aF[e](r,o)}),// Apply the latest values (as set in checkAndConvertChangedValueTypes)
t.render();let l=t.measureViewportBox();return n.forEach(n=>{// Restore styles to their **calculated computed style**, not their actual
// originally set style. This allows us to animate between equivalent pixel units.
let r=t.getValue(n);r&&r.jump(s[n]),e[n]=aF[n](l,o)}),e},az=(e,t,n={},r={})=>{t={...t},r={...r};let i=Object.keys(t).filter(aM),o=[],a=!1,s=[];if(i.forEach(i=>{let l;let u=e.getValue(i);if(!e.hasValue(i))return;let c=n[i],d=ah(c),f=t[i];// TODO: The current implementation of this basically throws an error
// if you try and do value conversion via keyframes. There's probably
// a way of doing this but the performance implications would need greater scrutiny,
// as it'd be doing multiple resize-remeasure operations.
if(ar(f)){let e=f.length,t=null===f[0]?1:0;d=ah(c=f[t]);for(let n=t;/**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */n<e&&null!==f[n];n++)l?r6(ah(f[n])===l,"All keyframes must be of the same type"):r6((l=ah(f[n]))===d||aR(d)&&aR(l),"Keyframes must be of the same dimension as the current value")}else l=ah(f);if(d!==l){// If they're both just number or px, convert them both to numbers rather than
// relying on resize/remeasure to convert (which is wasteful in this situation)
if(aR(d)&&aR(l)){let e=u.get();"string"==typeof e&&u.set(parseFloat(e)),"string"==typeof f?t[i]=parseFloat(f):Array.isArray(f)&&l===i5&&(t[i]=f.map(parseFloat))}else(null==d?void 0:d.transform)&&(null==l?void 0:l.transform)&&(0===c||0===f)?0===c?u.set(l.transform(c)):t[i]=d.transform(f):(a||(o=function(e){let t=[];return aN.forEach(n=>{let r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),a=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],u.jump(f))}}),!s.length)return{target:t,transitionEnd:r};{let n=s.indexOf("height")>=0?window.pageYOffset:null,i=aI(t,e,s);return o.length&&o.forEach(([t,n])=>{e.getValue(t).set(n)}),// Reapply original values
e.render(),aT&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}},aj=(e,t,n,r)=>{var i,o;let a=/**
 * Resolve CSS variables from
 *
 * @internal
 */function(e,{...t},n){let r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};// Cycle through every target property and resolve CSS variables. Currently
// we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
for(let i in n&&(n={...n}),// Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
e.values.forEach(e=>{let t=e.get();if(!of(t))return;let n=aC(t,r);n&&e.set(n)}),t){let e=t[i];if(!of(e))continue;let o=aC(e,r);o&&(// Clone target if it hasn't already been
t[i]=o,n||(n={}),void 0===n[i]&&(n[i]=e))}return{target:t,transitionEnd:n}}(e,t,r);return t=a.target,r=a.transitionEnd,i=t,o=r,aL(i)?az(e,i,n,o):{target:i,transitionEnd:o}},aB=()=>({translate:0,scale:1,origin:0,originPoint:0}),a_=()=>({x:aB(),y:aB()}),aU=()=>({min:0,max:0}),aW=()=>({x:aU(),y:aU()});function a$(e){return"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}// Does this device prefer reduced motion? Returns `null` server-side.
const aH={current:null},aG={current:!1};function aK(){if(aG.current=!0,aT){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>aH.current=e.matches;e.addListener(t),t()}else aH.current=!1}}function aY(e){return"object"==typeof e&&"function"==typeof e.start}/**
 * Decides if the supplied variable is variant label
 */function aq(e){return"string"==typeof e||Array.isArray(e)}const aX=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],aQ=["initial",...aX];function aZ(e){return aY(e.animate)||aQ.some(t=>aq(e[t]))}function aJ(e){return!!(aZ(e)||e.variants)}const a0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},a1={};for(const e in a0)a1[e]={isEnabled:t=>a0[e].some(e=>!!t[e])};const a2=Object.keys(a1),a3=a2.length,a4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],a5=aQ.length;/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */class a6{constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,visualState:i},o={}){/**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */this.current=null,/**
         * A set containing references to this VisualElement's children.
         */this.children=new Set,/**
         * Determine what role this visual element should take in the variant tree.
         */this.isVariantNode=!1,this.isControllingVariants=!1,/**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */this.shouldReduceMotion=null,/**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */this.values=new Map,/**
         * Cleanup functions for active features (hover/tap/exit etc)
         */this.features={},/**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */this.valueSubscriptions=new Map,/**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */this.prevMotionValues={},/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},/**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>iu.render(this.render,!1,!0);let{latestValues:a,renderState:s}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=s,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=aZ(t),this.isVariantNode=aJ(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);/**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{});for(let e in u){let t=u[e];void 0!==a[e]&&ae(t)&&(t.set(a[e],!1),at(l)&&l.add(e))}}/**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,r7.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),aG.current||aK(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||aH.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in r7.delete(this.current),this.projection&&this.projection.unmount(),ic(this.notifyUpdate),ic(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){let n=ip.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&iu.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i()})}sortNodePosition(e){return(/**
         * If these nodes aren't even of the same type we can't compare their depth.
         */this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0)}loadFeatures({children:e,...t},n,r,i){let o,a;for(let e=0;e<a3;e++){let n=a2[e],{isEnabled:r,Feature:i,ProjectionNode:s,MeasureLayout:l}=a1[n];s&&(o=s),r(t)&&(!this.features[n]&&i&&(this.features[n]=new i(this)),l&&(a=l))}if(!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);let{layoutId:e,layout:n,drag:r,dragConstraints:a,layoutScroll:s,layoutRoot:l}=t;this.projection.setOptions({layoutId:e,layout:n,alwaysMeasureLayout:!!r||a&&a$(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),/**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */animationType:"string"==typeof n?n:"both",initialPromotionConfig:i,layoutScroll:s,layoutRoot:l})}return a}updateFeatures(){for(let e in this.features){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}/**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):aW()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}/**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */makeTargetAnimatable(e,t=!0){return this.makeTargetAnimatableFromInstance(e,this.props,t)}/**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;/**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */for(let t=0;t<a4.length;t++){let n=a4[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e["on"+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=function(e,t,n){let{willChange:r}=t;for(let i in t){let o=t[i],a=n[i];if(ae(o))/**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */e.addValue(i,o),at(r)&&r.add(i);else if(ae(a))/**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */e.addValue(i,ad(o,{owner:e})),at(r)&&r.remove(i);else if(a!==o){/**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */if(e.hasValue(i)){let t=e.getValue(i);// TODO: Only update values that aren't being animated or even looked at
t.hasAnimated||t.set(o)}else{let t=e.getStaticValue(i);e.addValue(i,ad(void 0!==t?t:o,{owner:e}))}}}// Handle removed values
for(let r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}/**
     * Returns the variant definition with a given name.
     */getVariant(e){return this.props.variants?this.props.variants[e]:void 0}/**
     * Returns the defined default transition on this component.
     */getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<a5;e++){let n=aQ[e],r=this.props[n];(aq(r)||!1===r)&&(t[n]=r)}return t}/**
     * Add a child visual element to our set of children.
     */addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}/**
     * Add a motion value and bind it to this visual element.
     */addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}/**
     * Remove a motion value and unbind any active subscriptions.
     */removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}/**
     * Check whether we have a motion value for this key
     */hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=ad(t,{owner:this}),this.addValue(e,n)),n}/**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */readValue(e){return void 0===this.latestValues[e]&&this.current?this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}/**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */setBaseTarget(e,t){this.baseTarget[e]=t}/**
     * Find the base target for a value thats been removed from all animation
     * props.
     */getBaseTarget(e){var t;let{initial:n}=this.props,r="string"==typeof n||"object"==typeof n?null===(t=av(this.props,n))||void 0===t?void 0:t[e]:void 0;/**
         * If this value still exists in the current initial variant, read that.
         */if(n&&void 0!==r)return r;/**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */let i=this.getBaseTargetFromProps(this.props,e);return void 0===i||ae(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new al),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class a8 extends a6{sortInstanceNodePosition(e,t){/**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...n},{transformValues:r},i){let o=function(e,t,n){let r={};for(let i in e){let e=function(e,t){if(!t)return;let n=t[e]||t.default||t;return n.from}(i,t);if(void 0!==e)r[i]=e;else{let e=n.getValue(i);e&&(r[i]=e.get())}}return r}(n,e||{},this);if(r&&(t&&(t=r(t)),n&&(n=r(n)),o&&(o=r(o))),i){!function(e,t,n){var r,i;let o=Object.keys(t).filter(t=>!e.hasValue(t)),a=o.length;if(a)for(let s=0;s<a;s++){let a=o[s],l=t[a],u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(i=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==i?i:t[a]),null!=u&&("string"==typeof u&&(an(u)||o8(u))?u=parseFloat(u):!ag(u)&&ow.test(l)&&(u=o6(a,l)),e.addValue(a,ad(u,{owner:e})),void 0===n[a]&&(n[a]=u),null!==u&&e.setBaseTarget(a,u))}}(this,n,o);let e=aj(this,n,o,t);t=e.transitionEnd,n=e.target}return{transition:e,transitionEnd:t,...n}}}const a7={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},a9=id.length,se=(e,t)=>t&&"number"==typeof e?t.transform(e):e;function st(e,t,n,r){let{style:i,vars:o,transform:a,transformOrigin:s}=e,l=!1,u=!1,c=!0;/**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */for(let e in t){let n=t[e];/**
         * If this is a CSS variable we don't do any further processing.
         */if(od(e)){o[e]=n;continue}// Convert the value to its default value type, ie 0 -> "0px"
let r=o3[e],d=se(n,r);if(ip.has(e)){// If we already know we have a non-default transform, early return
if(// If this is a transform, flag to enable further transform processing
l=!0,a[e]=d,!c)continue;n!==(r.default||0)&&(c=!1)}else e.startsWith("origin")?(// If this is a transform origin, flag and enable further transform-origin processing
u=!0,s[e]=d):i[e]=d}/**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */if(!t.transform&&(l||r?i.transform=/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */function(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){// The transform string we're going to build into.
let o="";/**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */for(let t=0;t<a9;t++){let n=id[t];if(void 0!==e[n]){let t=a7[n]||n;o+=`${t}(${e[n]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}(e.transform,n,c,r):i.transform&&/**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */(i.transform="none")),u){let{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}function sn(e,t,n){return"string"==typeof e?e:i5.transform(t+n*e)}const sr={offset:"stroke-dashoffset",array:"stroke-dasharray"},si={offset:"strokeDashoffset",array:"strokeDasharray"};/**
 * Build SVG visual attrbutes, like cx and style.transform
 */function so(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},c,d,f){/**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */if(st(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:p,style:h,dimensions:m}=e;p.transform&&(m&&(h.transform=p.transform),delete p.transform),m&&(void 0!==i||void 0!==o||h.transform)&&(h.transformOrigin=/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */function(e,t,n){let r=sn(t,e.x,e.width),i=sn(n,e.y,e.height);return`${r} ${i}`}(m,void 0!==i?i:.5,void 0!==o?o:.5)),void 0!==t&&(p.x=t),void 0!==n&&(p.y=n),void 0!==r&&(p.scale=r),void 0!==a&&/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */function(e,t,n=1,r=0,i=!0){// Normalise path length by setting SVG attribute pathLength to 1
e.pathLength=1;// We use dash case when setting attributes directly to the DOM node and camel case
// when defining props on a React component.
let o=i?sr:si;// Build the dash offset
e[o.offset]=i5.transform(-r);// Build the dash array
let a=i5.transform(t),s=i5.transform(n);e[o.array]=`${a} ${s}`}(p,a,s,l,!1)}/**
 * A set of attribute names that are always read/written as camel case.
 */const sa=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ss(e,{style:t,vars:n},r,i){// Loop over any CSS variables and assign those.
for(let o in Object.assign(e.style,t,i&&i.getProjectionStyles(r)),n)e.style.setProperty(o,n[o])}function sl(e,t,n,r){for(let n in ss(e,t,void 0,r),t.attrs)e.setAttribute(sa.has(n)?n:ih(n),t.attrs[n])}const su=e=>"string"==typeof e&&"svg"===e.toLowerCase();class sc extends a8{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ip.has(t)){let e=o5(t);return e&&e.default||0}return t=sa.has(t)?t:ih(t),e.getAttribute(t)}measureInstanceViewportBox(){return aW()}scrapeMotionValuesFromProps(e,t){return ak(e,t)}build(e,t,n,r){so(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){sl(e,t,n,r)}mount(e){this.isSVGTag=su(e.tagName),super.mount(e)}}/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */function sd({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function sf(e){return void 0===e||1===e}function sp({scale:e,scaleX:t,scaleY:n}){return!sf(e)||!sf(t)||!sf(n)}function sh(e){return sp(e)||sm(e)||e.z||e.rotate||e.rotateX||e.rotateY}function sm(e){var t,n;return(t=e.x)&&"0%"!==t||(n=e.y)&&"0%"!==n}/**
 * Applies a translate/scale delta to a point
 */function sg(e,t,n,r,i){return void 0!==i&&(e=r+i*(e-r)),r+n*(e-r)+t}/**
 * Applies a translate/scale delta to an axis
 */function sv(e,t=0,n=1,r,i){e.min=sg(e.min,t,n,r,i),e.max=sg(e.max,t,n,r,i)}/**
 * Applies a translate/scale delta to a box
 */function sy(e,{x:t,y:n}){sv(e.x,t.translate,t.scale,t.originPoint),sv(e.y,n.translate,n.scale,n.originPoint)}function sb(e){return Number.isInteger(e)?e:e>1.0000000000001||e<.999999999999?e:1}function sx(e,t){e.min=e.min+t,e.max=e.max+t}/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */function sw(e,t,[n,r,i]){let o=void 0!==t[i]?t[i]:.5,a=ot(e.min,e.max,o);// Apply the axis delta to the final axis
sv(e,t[n],t[r],a,t.scale)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const sE=["x","scaleX","originX"],sS=["y","scaleY","originY"];/**
 * Apply a transform to a box from the latest resolved motion values.
 */function sk(e,t){sw(e.x,t,sE),sw(e.y,t,sS)}function sP(e,t){return sd(/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */function(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}class sC extends a8{readValueFromInstance(e,t){if(ip.has(t)){let e=o5(t);return e&&e.default||0}{let n=window.getComputedStyle(e),r=(od(t)?n.getPropertyValue(t):n[t])||0;return"string"==typeof r?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return sP(e,t)}build(e,t,n,r){st(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return aS(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;ae(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){ss(e,t,n,r)}}function sT(e,t,n){let r=ae(e)?e:ad(e);return r.start(o9("",r,t,n)),r.animation}/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */function sA(e,t,n,r){var i;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(i=r.get(t))&&void 0!==i?i:e}const sM=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e};function sL(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function sR(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function sD(e,t){return t[e]||(t[e]=[]),t[e]}const sV=e=>"number"==typeof e,sO=e=>e.every(sV);function sN(e,t,n,r){let i=r8(e,r),o=i.length;r6(!!o,"No valid element provided.");let a=[];for(let e=0;e<o;e++){let r=i[e];r7.has(r)||function(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=ax(e)?new sc(t,{enableHardwareAcceleration:!1}):new sC(t,{enableHardwareAcceleration:!0});n.mount(e),r7.set(e,n)}(r);let s=r7.get(r),l={...n};"function"==typeof l.delay&&(l.delay=l.delay(e,o)),a.push(...ab(s,{...t,transition:l},{}))}return new r9(a)}const sF=e=>Array.isArray(e)&&Array.isArray(e[0]),sI=/**
     * Implementation
     */function(e,t,n){let i;return i=sF(e)?function(e,t,n){let r=[],i=function(e,{defaultTransition:t={},...n}={},r){let i=t.duration||.3,o=new Map,a=new Map,s={},l=new Map,u=0,c=0,d=0;/**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */for(let n=0;n<e.length;n++){let o=e[n];/**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */if("string"==typeof o){l.set(o,c);continue}if(!Array.isArray(o)){l.set(o.name,sA(c,o.at,u,l));continue}let[f,p,h={}]=o;/**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */void 0!==h.at&&(c=sA(c,h.at,u,l));/**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */let m=0,g=(e,n,r,o=0,a=0)=>{let s=Array.isArray(e)?e:[e],{delay:l=0,times:u=oR(s),type:f="keyframes",...p}=n,{ease:h=t.ease||"easeOut",duration:g}=n,v="function"==typeof l?l(o,a):l,y=s.length;if(y<=2&&"spring"===f){/**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */let e=100;if(2===y&&sO(s)){let t=s[1]-s[0];e=Math.abs(t)}let t={...p};void 0!==g&&(t.duration=ig(g));let n=/**
 * Create a progress => progress easing function from a generator.
 */function(e,t=100){let n=oz({keyframes:[0,t],...e}),r=Math.min(o_(n),2e4);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:iv(r)}}(t,e);h=n.ease,g=n.duration}null!=g||(g=i);let b=c+v,x=b+g;1===u.length&&0===u[0]&&(u[1]=1);/**
             * Fill out if offset if fewer offsets than keyframes
             */let w=u.length-s.length;w>0&&oL(u,w),/**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */1===s.length&&s.unshift(null),function(e,t,n,r,i,o){/**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */!function(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.at>t&&i.at<n&&(as(e,i),// If we remove this item we have to push the pointer back one
r--)}}(e,i,o);for(let s=0;s<t.length;s++){var a;e.push({value:t[s],at:ot(i,o,r[s]),easing:(a=s,iL(n)?n[sM(0,n.length,a)]:n)})}}(r,s,h,u,b,x),m=Math.max(v+g,m),d=Math.max(x,d)};if(ae(f)){let e=sR(f,a);g(p,h,sD("default",e))}else{/**
             * Find all the elements specified in the definition and parse value
             * keyframes from their timeline definitions.
             */let e=r8(f,r,s),t=e.length;/**
             * For every element in this segment, process the defined values.
             */for(let n=0;n<t;n++){let r=e[n],i=sR(r,a);for(let e in p)g(p[e],h[e]?{...h,...h[e]}:{...h},sD(e,i),n,t)}u=c,c+=m}}return(/**
     * For every element and value combination create a new animation.
     */a.forEach((e,r)=>{for(let i in e){let a=e[i];/**
             * Arrange all the keyframes in ascending time order.
             */a.sort(sL);let s=[],l=[],u=[];/**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */for(let e=0;e<a.length;e++){let{at:t,value:n,easing:r}=a[e];s.push(n),l.push(oT(0,d,t)),u.push(r||"easeOut")}0!==l[0]&&(l.unshift(0),s.unshift(s[0]),u.unshift("easeInOut")),1!==l[l.length-1]&&(l.push(1),s.push(null)),o.has(r)||o.set(r,{keyframes:{},transition:{}});let c=o.get(r);c.keyframes[i]=s,c.transition[i]={...t,duration:d,ease:u,times:l,...n}}}),o)}(e,t,n);return i.forEach(({keyframes:e,transition:t},n)=>{let i;i=ae(n)?sT(n,e.default,t.default):sN(n,e,t),r.push(i)}),new r9(r)}(e,t,r):"object"!=typeof t||Array.isArray(t)?sT(e,t,n):sN(e,t,n,r),r&&r.animations.push(i),i};var c=(u("e0W5i"),u("e0W5i"),u("e0W5i"),u("e0W5i"));const sz=aT?c.useLayoutEffect:c.useEffect;function sj(){let e=(0,c.useRef)(!1);return sz(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=(u("e0W5i"),u("e0W5i"));/**
 * @public
 */const sB=(0,c.createContext)(null);/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */function s_(e){let t=(0,c.useRef)(null);return null===t.current&&(t.current=e()),t.current}var c=(u("e0W5i"),u("e0W5i"));/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */class sU extends c.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}/**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */componentDidUpdate(){}render(){return this.props.children}}function sW({children:e,isPresent:t}){let n=(0,c.useId)(),r=(0,c.useRef)(null),i=(0,c.useRef)({width:0,height:0,top:0,left:0});return(/**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */(0,c.useInsertionEffect)(()=>{let{width:e,height:o,top:a,left:s}=i.current;if(t||!r.current||!e||!o)return;r.current.dataset.motionPopId=n;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),c.createElement(sU,{isPresent:t,childRef:r,sizeRef:i},c.cloneElement(e,{ref:r})))}const s$=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{let s=s_(sH),l=(0,c.useId)(),u=(0,c.useMemo)(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(s.set(e,!0),s.values()))if(!t)return;// can stop searching when any is incomplete
    r&&r()},register:e=>(s.set(e,!1),()=>s.delete(e))}),/**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */o?void 0:[n]);return(0,c.useMemo)(()=>{s.forEach((e,t)=>s.set(t,!1))},[n]),/**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */c.useEffect(()=>{n||s.size||!r||r()},[n]),"popLayout"===a&&(e=c.createElement(sW,{isPresent:n},e)),c.createElement(sB.Provider,{value:u},e)};function sH(){return new Map}var c=u("e0W5i");const sG=(0,c.createContext)({});var c=u("e0W5i");const sK=e=>e.key||"",sY=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{var s;r6(!i,"Replace exitBeforeEnter with mode='wait'");// We want to force a re-render once all exiting animations have finished. We
// either use a local forceRender function, or one from a parent context if it exists.
let l=(0,c.useContext)(sG).forceRender||function(){let e=sj(),[t,n]=(0,c.useState)(0),r=(0,c.useCallback)(()=>{e.current&&n(t+1)},[t]),i=(0,c.useCallback)(()=>iu.postRender(r),[r]);return[i,t]}()[0],u=sj(),d=function(e){let t=[];return(// We use forEach here instead of map as map mutates the component key by preprending `.$`
(0,c.Children).forEach(e,e=>{(0,c.isValidElement)(e)&&t.push(e)}),t)}(e),f=d,p=(0,c.useRef)(new Map).current,h=(0,c.useRef)(f),m=(0,c.useRef)(new Map).current,g=(0,c.useRef)(!0);if(sz(()=>{g.current=!1,function(e,t){e.forEach(e=>{let n=sK(e);t.set(n,e)})}(d,m),h.current=f}),s=()=>{g.current=!0,m.clear(),p.clear()},(0,c.useEffect)(()=>()=>s(),[]),g.current)return c.createElement(c.Fragment,null,f.map(e=>c.createElement(s$,{key:sK(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:o,mode:a},e)));// If this is a subsequent render, deal with entering and exiting children
f=[...f];// Diff the keys of the currently-present and target children to update our
// exiting list.
let v=h.current.map(sK),y=d.map(sK),b=v.length;for(let e=0;e<b;e++){let t=v[e];-1!==y.indexOf(t)||p.has(t)||p.set(t,void 0)}return"wait"===a&&p.size&&(f=[]),// Loop through all currently exiting components and clone them to overwrite `animate`
// with any `exit` prop they might have defined.
p.forEach((e,n)=>{// If this component is actually entering again, early return
if(-1!==y.indexOf(n))return;let i=m.get(n);if(!i)return;let s=v.indexOf(n),g=e;g||(g=c.createElement(s$,{key:sK(i),isPresent:!1,onExitComplete:()=>{m.delete(n),p.delete(n);// Remove this child from the present children
let e=h.current.findIndex(e=>e.key===n);// Defer re-rendering until all exiting children have indeed left
if(h.current.splice(e,1),!p.size){if(h.current=d,!1===u.current)return;l(),r&&r()}},custom:t,presenceAffectsLayout:o,mode:a},i),p.set(n,g)),f.splice(s,0,g)}),// Add `MotionContext` even to children that don't need it to ensure we're rendering
// the same tree between renders
f=f.map(e=>{let t=e.key;return p.has(t)?e:c.createElement(s$,{key:sK(e),isPresent:!0,presenceAffectsLayout:o,mode:a},e)}),c.createElement(c.Fragment,null,p.size?f:f.map(e=>(0,c.cloneElement)(e)))};var c=(u("e0W5i"),u("e0W5i"));/**
 * @public
 */const sq=(0,c.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});var c=u("e0W5i");const sX=(0,c.createContext)({});var c=(u("e0W5i"),u("e0W5i"));const sQ=(0,c.createContext)({strict:!1});function sZ(e){return Array.isArray(e)?e.join(" "):e}var c=(u("e0W5i"),u("e0W5i"),u("e0W5i"));/**
 * Internal, exported only for usage in Framer
 */const sJ=(0,c.createContext)({}),s0=Symbol.for("motionComponentSymbol"),s1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function s2(e){if(/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */"string"!=typeof e||/**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */e.includes("-"));else if(s1.indexOf(e)>-1||/**
         * If it contains a capital letter, it's an SVG component
         *//[A-Z]/.test(e))return!0;return!1}var c=(u("e0W5i"),u("e0W5i"));const s3=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function s4(e,t,n){for(let r in t)ae(t[r])||aE(r,n)||(e[r]=t[r])}function s5(e,t,n){// The `any` isn't ideal but it is the type of createElement props argument
let r={},i=function(e,t,n){let r=e.style||{},i={};return(/**
     * Copy non-Motion Values straight into style
     */s4(i,r,e),Object.assign(i,function({transformTemplate:e},t,n){return(0,c.useMemo)(()=>{let r=s3();return st(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),e.transformValues?e.transformValues(i):i)}(e,t,n);return e.drag&&!1!==e.dragListener&&(// Disable the ghost element when a user drags
r.draggable=!1,// Disable text selection
i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",// Disable scrolling on the draggable direction
i.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */const s6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */function s8(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||s6.has(e)}let s7=e=>!s8(e);/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */try{/**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */(i=u("i3Ghj").default)&&// Explicitly filter our events
(s7=e=>e.startsWith("on")?!s8(e):i(e))}catch(e){// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}var c=u("e0W5i");const s9=()=>({...s3(),attrs:{}});function le(e,t,n,r){let i=(0,c.useMemo)(()=>{let n=s9();return so(n,t,{enableHardwareAcceleration:!1},su(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};s4(t,e.style,e),i.style={...t,...i.style}}return i}var c=u("e0W5i");/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */function lt(e){let t=ae(e)?e.get():e;return ai(t)?t.toValue():t}const ln=e=>(t,n)=>{let r=(0,c.useContext)(sX),i=(0,c.useContext)(sB),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){let a={latestValues:function(e,t,n,r){let i={},o=r(e,{});for(let e in o)i[e]=lt(o[e]);let{initial:a,animate:s}=e,l=aZ(e),u=aJ(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===a;let d=c?s:a;if(d&&"boolean"!=typeof d&&!aY(d)){let t=Array.isArray(d)?d:[d];t.forEach(t=>{let n=av(e,t);if(!n)return;let{transitionEnd:r,transition:o,...a}=n;for(let e in a){let t=a[e];if(Array.isArray(t)){/**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */let e=c?t.length-1:0;t=t[e]}null!==t&&(i[e]=t)}for(let e in r)i[e]=r[e]})}return i}(r,i,o,e),renderState:t()};return n&&(a.mount=e=>n(r,e,a)),a})(e,t,r,i);return n?o():s_(o)},lr={useVisualState:ln({scrapeMotionValuesFromProps:ak,createRenderState:s9,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){// Most likely trying to measure an unrendered element under Firefox
n.dimensions={x:0,y:0,width:0,height:0}}so(n,r,{enableHardwareAcceleration:!1},su(t.tagName),e.transformTemplate),sl(t,n)}})},li={useVisualState:ln({scrapeMotionValuesFromProps:aS,createRenderState:s3})};function lo(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const la=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function ls(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const ll=e=>t=>la(t)&&e(t,ls(t));function lu(e,t,n,r){return lo(e,t,ll(n),r)}function lc(e){let t=null;return()=>null===t&&(t=e,()=>{t=null})}const ld=lc("dragHorizontal"),lf=lc("dragVertical");function lp(e){let t=!1;if("y"===e)t=lf();else if("x"===e)t=ld();else{let e=ld(),n=lf();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function lh(){// Check the gesture lock - if we get it, it means no drag gesture is active
// and we can safely fire the tap gesture.
let e=lp(!0);return!e||(e(),!1)}class lm{constructor(e){this.isMounted=!1,this.node=e}update(){}}function lg(e,t){let n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return lu(e.current,n,(n,i)=>{if("touch"===n.type||lh())return;let o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[r]&&iu.update(()=>o[r](n,i))},{passive:!e.getProps()[r]})}/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */const lv=(e,t)=>!!t&&(e===t||lv(e,t.parentElement));function ly(e,t){if(!t)return;let n=new PointerEvent("pointer"+e);t(n,ls(n))}/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */const lb=new WeakMap,lx=new WeakMap,lw=e=>{let t=lb.get(e.target);t&&t(e)},lE=e=>{e.forEach(lw)},lS={some:0,all:1};function lk(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function lP(e,t,n={}){let r=ay(e,t,n.custom),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);/**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */let o=r?()=>Promise.all(ab(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t,n=0,r=0,i=1,o){let a=[],s=(e.variantChildren.size-1)*r,l=1===i?(e=0)=>e*r:(e=0)=>s-e*r;return Array.from(e.variantChildren).sort(lC).forEach((e,r)=>{e.notify("AnimationStart",t),a.push(lP(e,t,{...o,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,o+r,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(!s)return Promise.all([o(),a(n.delay)]);{let[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then(()=>t())}}function lC(e,t){return e.sortNodePosition(t)}const lT=[...aX].reverse(),lA=aX.length;function lM(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let lL=0;const lR=(e,t)=>Math.abs(e-t);/**
 * @internal
 */class lD{constructor(e,t,{transformPagePoint:n}={}){// If we have more than one touch, don't start detecting this gesture
if(/**
         * @internal
         */this.startEvent=null,/**
         * @internal
         */this.lastMoveEvent=null,/**
         * @internal
         */this.lastMoveEventInfo=null,/**
         * @internal
         */this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=lN(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){// Multi-dimensional
let n=lR(e.x,t.x),r=lR(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=ie;this.history.push({...r,timestamp:i});let{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=lV(t,this.transformPagePoint),iu.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let{onEnd:n,onSessionEnd:r}=this.handlers,i=lN("pointercancel"===e.type?this.lastMoveEventInfo:lV(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,i),r&&r(e,i)},!la(e))return;this.handlers=t,this.transformPagePoint=n;let r=ls(e),i=lV(r,this.transformPagePoint),{point:o}=i,{timestamp:a}=ie;this.history=[{...o,timestamp:a}];let{onSessionStart:s}=t;s&&s(e,lN(i,this.history)),this.removeListeners=ou(lu(window,"pointermove",this.handlePointerMove),lu(window,"pointerup",this.handlePointerUp),lu(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ic(this.updatePoint)}}function lV(e,t){return t?{point:t(e.point)}:e}function lO(e,t){return{x:e.x-t.x,y:e.y-t.y}}function lN({point:e},t){return{point:e,delta:lO(e,lF(t)),offset:lO(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=lF(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ig(.1)));)n--;if(!r)return{x:0,y:0};let o=iv(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};let a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}(t,0)}}function lF(e){return e[e.length-1]}function lI(e){return e.max-e.min}function lz(e,t=0,n=.01){return Math.abs(e-t)<=n}function lj(e,t,n,r=.5){e.origin=r,e.originPoint=ot(t.min,t.max,e.origin),e.scale=lI(n)/lI(t),(lz(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ot(n.min,n.max,e.origin)-e.originPoint,(lz(e.translate)||isNaN(e.translate))&&(e.translate=0)}function lB(e,t,n,r){lj(e.x,t.x,n.x,r?r.originX:void 0),lj(e.y,t.y,n.y,r?r.originY:void 0)}function l_(e,t,n){e.min=n.min+t.min,e.max=e.min+lI(t)}function lU(e,t,n){e.min=t.min-n.min,e.max=e.min+lI(t)}function lW(e,t,n){lU(e.x,t.x,n.x),lU(e.y,t.y,n.y)}/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */function l$(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */function lH(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function lG(e,t,n){return{min:lK(e,t),max:lK(e,n)}}function lK(e,t){return"number"==typeof e?e:e[t]||0}function lY(e){return[e("x"),e("y")]}const lq=new WeakMap;/**
 *
 */// let latestPointerEvent: PointerEvent
class lX{constructor(e){// This is a reference to the global drag gesture lock, ensuring only one component
// can "capture" the drag of one or both axes.
// TODO: Look into moving this into pansession?
this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},/**
         * The permitted boundaries of travel, in pixels.
         */this.constraints=!1,this.hasMutatedConstraints=!1,/**
         * The per-axis resolved elastic values.
         */this.elastic=aW(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){/**
         * Don't start dragging if this component is exiting
         */let{presenceContext:n}=this.visualElement;n&&!1===n.isPresent||(this.panSession=new lD(e,{onSessionStart:e=>{// Stop any animations on both axis values immediately. This allows the user to throw and catch
// the component.
this.stopAnimation(),t&&this.snapToCursor(ls(e,"page").point)},onStart:(e,t)=>{// Attempt to grab the global drag gesture lock - maybe make this part of PanSession
let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=lp(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lY(e=>{let t=this.getAxisMotionValue(e).get()||0;/**
                 * If the MotionValue is a percentage value convert to px
                 */if(i4.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];if(r){let e=lI(r);t=e*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&iu.update(()=>i(e,t),!1,!0);let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{// latestPointerEvent = event
let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();// If we didn't successfully receive the gesture lock, early return.
if(!n&&!this.openGlobalLock)return;let{offset:a}=t;// Attempt to detect drag direction if directionLock is true
if(r&&null===this.currentDirection){this.currentDirection=/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */function(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}(a),null!==this.currentDirection&&i&&i(this.currentDirection);return}// Update each point with the latest position
this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),/**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */this.visualElement.render(),/**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t)},{transformPagePoint:this.visualElement.getTransformPagePoint()}))}stop(e,t){let n=this.isDragging;if(this.cancel(),!n)return;let{velocity:r}=t;this.startAnimation(r);let{onDragEnd:i}=this.getProps();i&&iu.update(()=>i(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){let{drag:r}=this.getProps();// If we're not dragging this axis, do an early return.
if(!n||!lQ(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */function(e,{min:t,max:n},r){return void 0!==t&&e<t?e=r?ot(t,e,r.min):Math.max(e,t):void 0!==n&&e>n&&(e=r?ot(n,e,r.max):Math.min(e,n)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),{layout:n}=this.visualElement.projection||{},r=this.constraints;e&&a$(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */function(e,{top:t,left:n,bottom:r,right:i}){return{x:l$(e.x,n,i),y:l$(e.y,t,r)}}(n.layoutBox,e):this.constraints=!1,this.elastic=/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:lG(e,"left","right"),y:lG(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&lY(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */function(e,t){let n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!a$(t))return!1;let r=t.current;r6(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:i}=this.visualElement;// TODO
if(!i||!i.layout)return!1;let o=function(e,t,n){let r=sP(e,n),{scroll:i}=t;return i&&(sx(r.x,i.offset.x),sx(r.y,i.offset.y)),r}(r,i.root,this.visualElement.getTransformPagePoint()),a={x:lH((e=i.layout.layoutBox).x,o.x),y:lH(e.y,o.y)};/**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */if(n){let e=n(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=sd(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=lY(a=>{if(!lQ(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});let u={type:"inertia",velocity:n?e[a]:0,bounceStiffness:r?200:1e6,bounceDamping:r?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};// If we're not animating on an externally-provided `MotionValue` we can use the
// component's animation controls which will handle interactions with whileHover (etc),
// otherwise we just have to animate the `MotionValue` itself.
return this.startAxisValueAnimation(a,u)});// Run all animations and then resolve the new drag constraints.
return Promise.all(l).then(a)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return n.start(o9(e,n,0,t))}stopAnimation(){lY(e=>this.getAxisMotionValue(e).stop())}/**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */getAxisMotionValue(e){let t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){lY(t=>{let{drag:n}=this.getProps();// If we're not dragging this axis, do an early return.
if(!lQ(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-ot(n,o,.5))}})}/**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!a$(t)||!n||!this.constraints)return;/**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */this.stopAnimation();/**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */let r={x:0,y:0};lY(e=>{let t=this.getAxisMotionValue(e);if(t){let n=t.get();r[e]=/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */function(e,t){let n=.5,r=lI(e),i=lI(t);return i>r?n=oT(t.min,t.max-r,e.min):r>i&&(n=oT(e.min,e.max-i,t.min)),iG(0,1,n)}({min:n,max:n},this.constraints[e])}});/**
         * Update the layout of this element and resolve the latest drag constraints
         */let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),lY(t=>{if(!lQ(t,e,null))return;/**
             * Calculate a new transform based on the previous box progress
             */let n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(ot(i,o,r[t]))})}addListeners(){if(!this.visualElement.current)return;lq.set(this.visualElement,this);let e=this.visualElement.current,t=lu(e,"pointerdown",e=>{let{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),n=()=>{let{dragConstraints:e}=this.getProps();a$(e)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),n();/**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */let o=lo(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(lY(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{o(),t(),i(),a&&a()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=.35,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function lQ(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const lZ=e=>(t,n)=>{e&&iu.update(()=>e(t,n))};var c=(u("e0W5i"),u("e0W5i"));/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */const lJ={/**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */hasAnimatedSinceResize:!0,/**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */hasEverUpdated:!1};function l0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */const l1={correct:(e,t)=>{if(!t.target)return e;/**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */if("string"==typeof e){if(!i5.test(e))return e;e=parseFloat(e)}/**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */let n=l0(e,t.target.x),r=l0(e,t.target.y);return`${n}% ${r}%`}};class l2 extends /*@__PURE__*/n(c).Component{/**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;Object.assign(aw,l4),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),lJ.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o&&(/**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent===i||(i?o.promote():o.relegate()||iu.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function l3(e){let[t,r]=/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */function(){let e=(0,c.useContext)(sB);if(null===e)return[!0,null];let{isPresent:t,onExitComplete:n,register:r}=e,i=(0,c.useId)();return(0,c.useEffect)(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}(),i=(0,c.useContext)(sG);return /*@__PURE__*/n(c).createElement(l2,{...e,layoutGroup:i,switchLayoutGroup:(0,c.useContext)(sJ),isPresent:t,safeToRemove:r})}const l4={borderRadius:{...l1,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:l1,borderTopRightRadius:l1,borderBottomLeftRadius:l1,borderBottomRightRadius:l1,boxShadow:{correct:(e,{treeScale:t,projectionDelta:n})=>{let r=ow.parse(e);// TODO: Doesn't support multiple shadows
if(r.length>5)return e;let i=ow.createTransformer(e),o="number"!=typeof r[0]?1:0,a=n.x.scale*t.x,s=n.y.scale*t.y;r[0+o]/=a,r[1+o]/=s;/**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */let l=ot(a,s,.5);return"number"==typeof r[2+o]&&(r[2+o]/=l),"number"==typeof r[3+o]&&(r[3+o]/=l),i(r)}}},l5=["TopLeft","TopRight","BottomLeft","BottomRight"],l6=l5.length,l8=e=>"string"==typeof e?parseFloat(e):e,l7=e=>"number"==typeof e||i5.test(e);function l9(e,t){return void 0!==e[t]?e[t]:e.borderRadius}// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const ue=un(0,.5,iO),ut=un(.5,.95,r6);function un(e,t,n){return r=>// Could replace ifs with clamp
    r<e?0:r>t?1:n(oT(e,t,r))}/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */function ur(e,t){e.min=t.min,e.max=t.max}/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */function ui(e,t){ur(e.x,t.x),ur(e.y,t.y)}/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */function uo(e,t,n,r,i){return e-=t,e=r+1/n*(e-r),void 0!==i&&(e=r+1/i*(e-r)),e}/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function ua(e,t,[n,r,i],o,a){!/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */function(e,t=0,n=1,r=.5,i,o=e,a=e){if(i4.test(t)){t=parseFloat(t);let e=ot(a.min,a.max,t/100);t=e-a.min}if("number"!=typeof t)return;let s=ot(o.min,o.max,r);e===o&&(s-=t),e.min=uo(e.min,t,n,s,i),e.max=uo(e.max,t,n,s,i)}(e,t[n],t[r],t[i],t.scale,o,a)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const us=["x","scaleX","originX"],ul=["y","scaleY","originY"];/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function uu(e,t,n,r){ua(e.x,t,us,n?n.x:void 0,r?r.x:void 0),ua(e.y,t,ul,n?n.y:void 0,r?r.y:void 0)}function uc(e){return 0===e.translate&&1===e.scale}function ud(e){return uc(e.x)&&uc(e.y)}function uf(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function up(e){return lI(e.x)/lI(e.y)}class uh{constructor(){this.members=[]}add(e){aa(this.members,e),e.scheduleRender()}remove(e){if(as(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let n=this.members.findIndex(t=>e===t);if(0===n)return!1;for(let e=n;e>=0;e--){let n=this.members[e];if(!1!==n.isPresent){t=n;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:r}=e.options;!1===r&&n.hide();/**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}/**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function um(e,t,n){let r="",i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(1!==t.x||1!==t.y)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}/**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */let a=e.x.scale*t.x,s=e.y.scale*t.y;return(1!==a||1!==s)&&(r+=`scale(${a}, ${s})`),r||"none"}const ug=(e,t)=>e.depth-t.depth;class uv{constructor(){this.children=[],this.isDirty=!1}add(e){aa(this.children,e),this.isDirty=!0}remove(e){as(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ug),this.isDirty=!1,this.children.forEach(e)}}const uy=["","X","Y","Z"];let ub=0;/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */const ux={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function uw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=null==t?void 0:t()){/**
             * A unique ID generated for every projection node.
             */this.id=ub++,/**
             * An id that represents a unique session instigated by startUpdate.
             */this.animationId=0,/**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */this.children=new Set,/**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */this.options={},/**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */this.isTreeAnimating=!1,this.isAnimationBlocked=!1,/**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */this.isLayoutDirty=!1,/**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */this.isProjectionDirty=!1,/**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */this.isSharedProjectionDirty=!1,/**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */this.isTransformDirty=!1,/**
             * Block layout updates for instant layout transitions throughout the tree.
             */this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,/**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */this.isUpdating=!1,/**
             * If this is an SVG element we currently disable projection transforms
             */this.isSVG=!1,/**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */this.needsReset=!1,/**
             * Flags whether this node should have its transform reset prior to measuring.
             */this.shouldResetTransform=!1,/**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */this.treeScale={x:1,y:1},/**
             *
             */this.eventHandlers=new Map,this.hasTreeAnimated=!1,// Note: Currently only running on root node
this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},/**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */this.updateProjection=()=>{/**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */ux.totalNodes=ux.resolvedTargetDeltas=ux.recalculatedProjection=0,this.nodes.forEach(uk),this.nodes.forEach(uR),this.nodes.forEach(uD),this.nodes.forEach(uP),window.MotionDebug&&window.MotionDebug.record(ux)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,/**
             * Shared layout
             */// TODO Only running on root node
this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new uv)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new al),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}/**
         * Lifecycles
         */mount(t,n=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ax(t),this.instance=t;let{layoutId:r,layout:i,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||r)&&(this.isLayoutDirty=!0),e){let n;let r=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=/**
 * Timeout defined in ms
 */function(e,t){let n=performance.now(),r=({timestamp:i})=>{let o=i-n;o>=t&&(ic(r),e(o-t))};return iu.read(r,!0),()=>ic(r)}(r,250),lJ.hasAnimatedSinceResize&&(lJ.hasAnimatedSinceResize=!1,this.nodes.forEach(uL))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&o&&(r||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}// TODO: Check here if an animation exists
let i=this.options.transition||o.getDefaultTransition()||uz,{onLayoutAnimationStart:a,onLayoutAnimationComplete:s}=o.getProps(),l=!this.targetLayout||!uf(this.targetLayout,r)||n,u=!t&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...o7(i,"layout"),onPlay:a,onComplete:s};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||uL(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ic(this.updateProjection)}// only on the root
blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}// Note: currently only running on root node
startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uV),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;let e=this.isUpdateBlocked();// When doing an instant transition, we skip the layout update,
// but should still clean up the measurements so that the next
// snapshot could be taken correctly.
if(e){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(uT);return}this.isUpdating||this.nodes.forEach(uA),this.isUpdating=!1,/**
             * Write
             */this.nodes.forEach(uM),/**
             * Read ==================
             */// Update layout measurements of updated children
this.nodes.forEach(uE),/**
             * Write
             */// Notify listeners that the layout is updated
this.nodes.forEach(uS),this.clearAllSnapshots();/**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */let t=performance.now();ie.delta=iG(0,1e3/60,t-ie.timestamp),ie.timestamp=t,ie.isProcessing=!0,io.update.process(ie),io.preRender.process(ie),io.render.process(ie),ie.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(uC),this.sharedNodes.forEach(uO)}scheduleUpdateProjection(){iu.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){iu.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}/**
         * Update measurements
         */updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(// TODO: Incorporate into a forwarded scroll offset
this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;/**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++){let t=this.path[e];t.updateScroll()}let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=aW(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!ud(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||sh(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let n=this.measurePageBox(),r=this.removeElementScroll(n);return e&&(r=this.removeTransform(r)),uj((t=r).x),uj(t.y),{animationId:this.root.animationId,measuredBox:n,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return aW();let t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(sx(t.x,n.offset.x),sx(t.y,n.offset.y)),t}removeElementScroll(e){let t=aW();ui(t,e);/**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:o}=r;if(r!==this.root&&i&&o.layoutScroll){/**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */if(i.isRoot){ui(t,e);let{scroll:n}=this.root;/**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */n&&(sx(t.x,-n.offset.x),sx(t.y,-n.offset.y))}sx(t.x,i.offset.x),sx(t.y,i.offset.y)}}return t}applyTransform(e,t=!1){let n=aW();ui(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&sk(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),sh(r.latestValues)&&sk(n,r.latestValues)}return sh(this.latestValues)&&sk(n,this.latestValues),n}removeTransform(e){let t=aW();ui(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!sh(n.latestValues))continue;sp(n.latestValues)&&n.updateSnapshot();let r=aW(),i=n.measurePageBox();ui(r,i),uu(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return sh(this.latestValues)&&uu(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ie.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,n,r,i;/**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let a=!!this.resumingFrom||this!==o,s=!(e||a&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget);if(s)return;let{layout:l,layoutId:u}=this.options;/**
             * If we have no layout, we can't perform projection, so early return
             */if(this.layout&&(l||u)){/**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */// TODO If this is unsuccessful this currently happens every frame
if(this.resolvedRelativeTargetAt=ie.timestamp,!this.targetDelta&&!this.relativeTarget){// TODO: This is a semi-repetition of further down this function, make DRY
let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=aW(),this.relativeTargetOrigin=aW(),lW(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */if(this.relativeTarget||this.targetDelta){/**
             * If we've been told to attempt to resolve a relative target, do so.
             */if((this.target||(this.target=aW(),this.targetWithTransforms=aW()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),n=this.target,r=this.relativeTarget,i=this.relativeParent.target,l_(n.x,r.x,i.x),l_(n.y,r.y,i.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ui(this.target,this.layout.layoutBox),sy(this.target,this.targetDelta)):ui(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=aW(),this.relativeTargetOrigin=aW(),lW(this.relativeTargetOrigin,this.target,e.target),ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * Increase debug counter for resolved target deltas
             */ux.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||sp(this.parent.latestValues)||sm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),n=!!this.resumingFrom||this!==t,r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===ie.timestamp&&(r=!1),r)return;let{layout:i,layoutId:o}=this.options;if(/**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||o))return;ui(this.layoutCorrected,this.layout.layoutBox);/**
             * Record previous tree scales before updating.
             */let a=this.treeScale.x,s=this.treeScale.y;!/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */function(e,t,n,r=!1){let i,o;let a=n.length;if(a){// Reset the treeScale
t.x=t.y=1;for(let s=0;s<a;s++){o=(i=n[s]).projectionDelta;/**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */let a=i.instance;(!a||!a.style||"contents"!==a.style.display)&&(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&sk(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(// Incoporate each ancestor's scale into a culmulative treeScale for this component
t.x*=o.x.scale,t.y*=o.y.scale,// Apply each ancestor's calculated delta into this component's recorded layout box
sy(e,o)),r&&sh(i.latestValues)&&sk(e,i.latestValues))}/**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */t.x=sb(t.x),t.y=sb(t.y)}}(this.layoutCorrected,this.treeScale,this.path,n),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox);let{target:l}=t;if(!l){/**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */this.projectionTransform&&(this.projectionDelta=a_(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=a_(),this.projectionDeltaWithTransform=a_());let u=this.projectionTransform;lB(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=um(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==a||this.treeScale.y!==s)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),/**
             * Increase debug counter for recalculated projections
             */ux.recalculatedProjection++}hide(){this.isVisible=!1;// TODO: Schedule render
}show(){this.isVisible=!0;// TODO: Schedule render
}scheduleRender(e=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e,t=!1){let n;let r=this.snapshot,i=r?r.latestValues:{},o={...this.latestValues},a=a_();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=aW(),l=r?r.source:void 0,u=this.layout?this.layout.source:void 0,c=l!==u,d=this.getStack(),f=!d||d.members.length<=1,p=!!(c&&!f&&!0===this.options.crossfade&&!this.path.some(uI));this.animationProgress=0,this.mixTargetDelta=t=>{var r,l;let u=t/1e3;uN(a.x,e.x,u),uN(a.y,e.y,u),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lW(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),r=this.relativeTarget,l=this.relativeTargetOrigin,uF(r.x,l.x,s.x,u),uF(r.y,l.y,s.y,u),n&&uf(this.relativeTarget,n)&&(this.isProjectionDirty=!1),n||(n=aW()),ui(n,this.relativeTarget)),c&&(this.animationValues=o,function(e,t,n,r,i,o){i?(e.opacity=ot(0,void 0!==n.opacity?n.opacity:1,ue(r)),e.opacityExit=ot(void 0!==t.opacity?t.opacity:1,0,ut(r))):o&&(e.opacity=ot(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));/**
     * Mix border radius
     */for(let i=0;i<l6;i++){let o=`border${l5[i]}Radius`,a=l9(t,o),s=l9(n,o);if(void 0===a&&void 0===s)continue;a||(a=0),s||(s=0);let l=0===a||0===s||l7(a)===l7(s);l?(e[o]=Math.max(ot(l8(a),l8(s),r),0),(i4.test(s)||i4.test(a))&&(e[o]+="%")):e[o]=s}/**
     * Mix rotation
     */(t.rotate||n.rotate)&&(e.rotate=ot(t.rotate||0,n.rotate||0,r))}(o,i,this.latestValues,u,p,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=u},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ic(this.pendingAnimation),this.pendingAnimation=void 0),/**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */this.pendingAnimation=iu.update(()=>{lJ.hasAnimatedSinceResize=!0,this.currentAnimation=sT(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){/**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */if(this!==e&&this.layout&&r&&uB(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||aW();let t=lI(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=lI(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}ui(t,n),sk(t,i),lB(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new uh);let n=this.sharedNodes.get(e);n.add(t);let r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){let{visualElement:e}=this.options;if(!e)return;// If there's no detected rotation values, we can early return without a forced render.
let t=!1,{latestValues:n}=e;// If there's no rotation values, we don't need to do any more.
if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;let r={};// Check the rotate value of all axes and reset to 0
for(let t=0;t<uy.length;t++){let i="rotate"+uy[t];// Record the rotation and then temporarily set it to 0
n[i]&&(r[i]=n[i],e.setStaticValue(i,0))}// Put back all the values we reset
for(let t in // Force a render of this element to apply the transform with all rotations
// set to 0.
e.render(),r)e.setStaticValue(t,r[t]);// Schedule a render for the next frame. This ensures we won't visually
// see the element with the reset rotate value applied.
e.scheduleRender()}getProjectionStyles(e={}){var t,n;// TODO: Return lifecycle-persistent object
let r={};if(!this.instance||this.isSVG)return r;if(!this.isVisible)return{visibility:"hidden"};r.visibility="";let i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=lt(e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;let o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=lt(e.pointerEvents)||""),this.hasProjected&&!sh(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}let a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=um(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));let{x:s,y:l}=this.projectionDelta;/**
             * Apply scale correction
             */for(let e in r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?/**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:/**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0,aw){if(void 0===a[e])continue;let{correct:t,applyTo:n}=aw[e],i="none"===r.transform?a[e]:t(a[e],o);if(n){let e=n.length;for(let t=0;t<e;t++)r[n[t]]=i}else r[e]=i}return this.options.layoutId&&(r.pointerEvents=o===this?lt(e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}// Only run on root
resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(uT),this.root.sharedNodes.clear()}}}function uE(e){e.updateLayout()}function uS(e){var t;let n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;// TODO Maybe we want to also resize the layout snapshot so we don't trigger
// animations for instance if layout="size" and an element has only changed position
"size"===i?lY(e=>{let r=o?n.measuredBox[e]:n.layoutBox[e],i=lI(r);r.min=t[e].min,r.max=r.min+i}):uB(i,n.layoutBox,t)&&lY(r=>{let i=o?n.measuredBox[r]:n.layoutBox[r],a=lI(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});let a=a_();lB(a,t,n.layoutBox);let s=a_();o?lB(s,e.applyTransform(r,!0),n.measuredBox):lB(s,t,n.layoutBox);let l=!ud(a),u=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();/**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */if(r&&!r.resumeFrom){let{snapshot:i,layout:o}=r;if(i&&o){let a=aW();lW(a,n.layoutBox,i.layoutBox);let s=aW();lW(s,t,o.layoutBox),uf(a,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}/**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */e.options.transition=void 0}function uk(e){/**
     * Increase debug counter for nodes encountered this frame
     */ux.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),/**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function uP(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function uC(e){e.clearSnapshot()}function uT(e){e.clearMeasurements()}function uA(e){e.isLayoutDirty=!1}function uM(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function uL(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uR(e){e.resolveTargetDelta()}function uD(e){e.calcProjection()}function uV(e){e.resetRotation()}function uO(e){e.removeLeadSnapshot()}function uN(e,t,n){e.translate=ot(t.translate,0,n),e.scale=ot(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function uF(e,t,n,r){e.min=ot(t.min,n.min,r),e.max=ot(t.max,n.max,r)}function uI(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const uz={duration:.45,ease:[.4,0,.1,1]};function uj(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function uB(e,t,n){return"position"===e||"preserve-aspect"===e&&!lz(up(t),up(n),.2)}const u_=uw({attachResizeListener:(e,t)=>lo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),uU={current:void 0},uW=uw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!uU.current){let e=new u_({});e.mount(window),e.setOptions({layoutScroll:!0}),uU.current=e}return uU.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position}),u$=(e,t)=>s2(e)?new sc(t,{enableHardwareAcceleration:!1}):new sC(t,{enableHardwareAcceleration:!0}),uH={animation:{Feature:class extends lm{/**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>(function(e,t,n={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t)){let i=t.map(t=>lP(e,t,n));r=Promise.all(i)}else if("string"==typeof t)r=lP(e,t,n);else{let i="function"==typeof t?ay(e,t,n.custom):t;r=Promise.all(ab(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))})(e,t,n))),n={animate:lM(!0),whileInView:lM(),whileHover:lM(),whileTap:lM(),whileDrag:lM(),whileFocus:lM(),exit:lM()},r=!0,i=(t,n)=>{let r=ay(e,n);if(r){let{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};/**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */function o(o,a){let s=e.getProps(),l=e.getVariantContext(!0)||{},u=[],c=new Set,d={},f=1/0;/**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */for(let t=0;t<lA;t++){var p;let h=lT[t],m=n[h],g=void 0!==s[h]?s[h]:l[h],v=aq(g),y=h===a?m.isActive:null;!1===y&&(f=t);/**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */let b=g===l[h]&&g!==s[h]&&v;// Check if we can skip analysing this prop early
if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),/**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */m.protectedKeys={...d},!m.isActive&&null===y||// If we didn't and don't have any defined prop for this animation type
!g&&!m.prevProp||aY(g)||"boolean"==typeof g)continue;/**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */let x=(p=m.prevProp,"string"==typeof g?g!==p:!!Array.isArray(g)&&!lk(g,p)),w=x||// If we're making this variant active, we want to always make it active
h===a&&m.isActive&&!b&&v||// If we removed a higher-priority variant (i is in reverse order)
t>f&&v,E=Array.isArray(g)?g:[g],S=E.reduce(i,{});!1===y&&(S={});/**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */let{prevResolvedValues:k={}}=m,P={...k,...S},C=e=>{w=!0,c.delete(e),m.needsAnimating[e]=!0};for(let e in P){let t=S[e],n=k[e];// If we've already handled this we can just skip ahead
d.hasOwnProperty(e)||(t!==n?ar(t)&&ar(n)?!lk(t,n)||x?C(e):/**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */m.protectedKeys[e]=!0:void 0!==t?C(e):c.add(e):void 0!==t&&c.has(e)?/**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */C(e):/**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */m.protectedKeys[e]=!0)}/**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */m.prevProp=g,m.prevResolvedValues=S,m.isActive&&(d={...d,...S}),r&&e.blockInitialAnimation&&(w=!1),w&&!b&&u.push(...E.map(e=>({animation:e,options:{type:h,...o}})))}/**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */if(c.size){let t={};c.forEach(n=>{let r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)}),u.push({animation:t})}let h=!!u.length;return r&&!1===s.initial&&!e.manuallyAnimateOnMount&&(h=!1),r=!1,h?t(u):Promise.resolve()}return{animateChanges:o,setActive:/**
     * Change whether a certain animation type is active.
     */function(t,r,i){var a;// If the active state hasn't changed, we can safely do nothing here
if(n[t].isActive===r)return Promise.resolve();null===// Propagate active change to children
(a=e.variantChildren)||void 0===a||a.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;let s=o(i,t);for(let e in n)n[e].protectedKeys={};return s},setAnimateFunction:/**
     * This just allows us to inject mocked animation functions
     * @internal
     */function(n){t=n(e)},getState:()=>n}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();this.unmount(),aY(e)&&(this.unmount=e.subscribe(this.node))}/**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends lm{constructor(){super(...arguments),this.id=lL++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;let i=this.node.animationState.setActive("exit",!e,{custom:null!=n?n:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends lm{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof r?r:lS[r]};return function(e,t,n){let r=function({root:e,...t}){let n=e||document;lx.has(n)||lx.set(n,{});let r=lx.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(lE,{root:e,...t})),r[i]}(t);return lb.set(e,n),r.observe(e),()=>{lb.delete(e),r.unobserve(e)}}(this.node.current,o,e=>{let{isIntersecting:t}=e;/**
             * If there's been no change in the viewport state, early return.
             */if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);/**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends lm{constructor(){super(...arguments),this.removeStartListeners=r6,this.removeEndListeners=r6,this.removeAccessibleListeners=r6,this.startPointerPress=(e,t)=>{if(this.removeEndListeners(),this.isPressing)return;let n=this.node.getProps(),r=lu(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;let{onTap:n,onTapCancel:r}=this.node.getProps();iu.update(()=>{/**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */lv(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)})},{passive:!(n.onTap||n.onPointerUp)}),i=lu(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=ou(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=lo(this.node.current,"keydown",e=>{"Enter"!==e.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=lo(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&ly("up",(e,t)=>{let{onTap:n}=this.node.getProps();n&&iu.update(()=>n(e,t))})}),ly("down",(e,t)=>{this.startPress(e,t)}))}),t=lo(this.node.current,"blur",()=>{this.isPressing&&ly("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=ou(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&iu.update(()=>n(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;let e=this.node.getProps();return e.whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!lh()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:n}=this.node.getProps();n&&iu.update(()=>n(e,t))}mount(){let e=this.node.getProps(),t=lu(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=lo(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ou(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends lm{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;/**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ou(lo(this.node.current,"focus",()=>this.onFocus()),lo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends lm{mount(){this.unmount=ou(lg(this.node,!0),lg(this.node,!1))}unmount(){}}},pan:{Feature:class extends lm{constructor(){super(...arguments),this.removePointerDownListener=r6}onPointerDown(e){this.session=new lD(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:lZ(e),onStart:lZ(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&iu.update(()=>r(e,t))}}}mount(){this.removePointerDownListener=lu(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends lm{constructor(e){super(e),this.removeGroupControls=r6,this.removeListeners=r6,this.controls=new lX(e)}mount(){// If we've been provided a DragControls for manual control over the drag gesture,
// subscribe this component to it on mount.
let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||r6}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:uW,MeasureLayout:l3},layout:{ProjectionNode:uW,MeasureLayout:l3}},uG=/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */function(e){function t(t,n={}){return(/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */function({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&function(e){for(let t in e)a1[t]={...a1[t],...e[t]}}(e);let o=(0,c.forwardRef)(function(o,a){var s;let l;let u={...(0,c.useContext)(sq),...o,layoutId:function({layoutId:e}){let t=(0,c.useContext)(sG).id;return t&&void 0!==e?t+"-"+e:e}(o)},{isStatic:d}=u,f=function(e){let{initial:t,animate:n}=function(e,t){if(aZ(e)){let{initial:t,animate:n}=e;return{initial:!1===t||aq(t)?t:void 0,animate:aq(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,c.useContext)(sX));return(0,c.useMemo)(()=>({initial:t,animate:n}),[sZ(t),sZ(n)])}(o),p=r(o,d);if(!d&&aT){/**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */f.visualElement=function(e,t,n,r){let{visualElement:i}=(0,c.useContext)(sX),o=(0,c.useContext)(sQ),a=(0,c.useContext)(sB),s=(0,c.useContext)(sq).reducedMotion,l=(0,c.useRef)();/**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:!!a&&!1===a.initial,reducedMotionConfig:s}));let u=l.current;(0,c.useInsertionEffect)(()=>{u&&u.update(n,a)}),sz(()=>{u&&u.render()}),(0,c.useEffect)(()=>{u&&u.updateFeatures()});/**
     * Ideally this function would always run in a useEffect.
     *
     * However, if we have optimised appear animations to handoff from,
     * it needs to happen synchronously to ensure there's no flash of
     * incorrect styles in the event of a hydration error.
     *
     * So if we detect a situtation where optimised appear animations
     * are running, we use useLayoutEffect to trigger animations.
     */let d=window.HandoffAppearAnimations?sz:c.useEffect;return d(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}(i,p,u,t);/**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */let n=(0,c.useContext)(sJ),r=(0,c.useContext)(sQ).strict;f.visualElement&&(l=f.visualElement.loadFeatures(u,r,e,n))}/**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */return c.createElement(sX.Provider,{value:f},l&&f.visualElement?c.createElement(l,{visualElement:f.visualElement,...u}):null,n(i,o,(s=f.visualElement,(0,c.useCallback)(e=>{e&&p.mount&&p.mount(e),s&&(e?s.mount(e):s.unmount()),a&&("function"==typeof a?a(e):a$(a)&&(a.current=e))},/**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */[s])),p,d,f.visualElement))});return o[s0]=i,o}(e(t,n)))}if("undefined"==typeof Proxy)return t;/**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */let n=new Map;return new Proxy(t,{/**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}((e,t)=>(function(e,{forwardMotionProps:t=!1},n,r){let i=s2(e)?lr:li;return{...i,preloadedFeatures:n,useRender:function(e=!1){return(t,n,r,{latestValues:i},o)=>{let a=s2(t)?le:s5,s=a(n,i,o,t),l=function(e,t,n){let r={};for(let i in e)/**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */("values"!==i||"object"!=typeof e.values)&&(s7(i)||!0===n&&s8(i)||!t&&!s8(i)||// If trying to use native HTML drag events, forward drag listeners
    e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"==typeof t,e),u={...l,...s,ref:r},{children:d}=n,f=(0,c.useMemo)(()=>ae(d)?d.get():d,[d]);return(0,c.createElement)(t,{...u,children:f})}}(t),createVisualElement:r,Component:e}})(e,t,uH,u$));/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */function uK(e){let t=s_(()=>ad(e)),{isStatic:n}=(0,c.useContext)(sq);if(n){let[,n]=(0,c.useState)(e);(0,c.useEffect)(()=>t.on("change",n),[])}return t}var c=(u("e0W5i"),u("e0W5i"));const uY=e=>"object"==typeof e&&e.mix,uq=e=>uY(e)?e.mix:void 0;function uX(e,t,n,r){let i="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=oM(i,o,{mixer:uq(o[0]),...a});return t?s(r):s}(t,n,r);return Array.isArray(e)?uQ(e,i):uQ([e],([e])=>i(e))}function uQ(e,t){let n=s_(()=>[]);return function(e,t){/**
     * Initialise the returned motion value. This remains the same between renders.
     */let n=uK(t()),r=()=>n.set(t());return(/**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */r(),sz(()=>{let t=()=>iu.update(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),ic(r)}}),n)}(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}var c=u("e0W5i");const uZ="calc(100% - env(safe-area-inset-top) - 34px)",uJ="undefined"==typeof window,u0={ease:"easeOut",duration:.2},u1={ease:"linear",duration:.01};function u2(e,t){let n=e[0],r=Math.abs(e[0]-t);for(let i=1;i<e.length;i++){let o=Math.abs(e[i]-t);o<r&&(n=e[i],r=o)}return n}function u3(e){let t=document.querySelector("body"),n=document.getElementById(e);n&&(// Start animating back
n.style.removeProperty("border-top-right-radius"),n.style.removeProperty("border-top-left-radius"),n.style.removeProperty("transform"),// Remove temp properties after animation is finished
n.addEventListener("transitionend",function e(){n.style.removeProperty("overflow"),n.style.removeProperty("will-change"),n.style.removeProperty("transition"),t.style.removeProperty("background-color"),n.removeEventListener("transitionend",e)}))}function u4({snapTo:e,sheetHeight:t}){return e<0&&console.warn(`Snap point is out of bounds. Sheet height is ${t} but snap point is ${t+Math.abs(e)}.`),Math.max(Math.round(e),0)}function u5(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):e&&(e.current=t)})}}const u6=uJ?c.useEffect:c.useLayoutEffect;function u8(e){let t=c.useRef();return c.useEffect(()=>{t.current=e}),t.current}function u7(e){let t=c.useRef();return u6(()=>{t.current=e}),c.useCallback((...e)=>{let n=t.current;return n?.(...e)},[])}// This is a hacky way to fix a bug in framer-motion where the drag
// constraints are not updated when window is resized.
// https://github.com/framer/motion/issues/1659
const u9={bottom:0,top:0,left:0,right:0};function ce(){let e=c.useRef(null),t=c.useCallback(()=>u9,[]);return{constraintsRef:e,onMeasureDragConstraints:t}}var c=u("e0W5i");const ct=/*#__PURE__*/c.createContext(void 0),cn=()=>{let e=c.useContext(ct);if(!e)throw Error("Sheet context error");return e},cr=/*#__PURE__*/c.createContext(void 0);function ci({children:e}){let t=cn(),[n,r]=c.useState(!!t.disableDrag);return/*#__PURE__*/(0,r5.jsx)(cr.Provider,{value:{disableDrag:n,setDragEnabled:function(){t.disableDrag||r(!1)},setDragDisabled:function(){n||r(!0)}},children:e})}const co=()=>{let e=c.useContext(cr);if(!e)throw Error("Sheet scroller context error");return e};var c=(u("e0W5i"),u("e0W5i"));/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule
// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const ca={prefix:String(Math.round(1e10*Math.random())),current:0};/*@__PURE__*/n(c).createContext(ca),/*@__PURE__*/n(c).createContext(!1),"undefined"!=typeof window&&window.document&&window.document.createElement,new WeakMap,/*@__PURE__*/n(c).useId;/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const cs="undefined"!=typeof window?/*@__PURE__*/n(c).useLayoutEffect:()=>{};/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//**
 * Calls all functions in the order they were chained with the same arguments.
 */function cl(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let cu=new Map,cc=new Set;function cd(){if("undefined"==typeof window)return;let e=t=>{// Remove property from list of transitioning properties.
let n=cu.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),cu.delete(t.target)),0===cu.size)){for(let e of cc)e();cc.clear()}};document.body.addEventListener("transitionrun",t=>{// Add the transitioning property to the list for this element.
let n=cu.get(t.target);n||(n=new Set,cu.set(t.target,n),// The transitioncancel event must be registered on the element itself, rather than as a global
// event. This enables us to handle when the node is deleted from the document while it is transitioning.
// In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function cf(e){for(cp(e)&&(e=e.parentElement);e&&!cp(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function cp(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function ch(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}"undefined"!=typeof document&&("loading"!==document.readyState?cd():document.addEventListener("DOMContentLoaded",cd)),"undefined"!=typeof window&&window.visualViewport;// @ts-ignore
const cm="undefined"!=typeof window&&window.visualViewport,cg=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let cv=0;// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function cy(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}// Adds an event listener to an element, and returns a function to remove it.
function cb(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function cx(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){// Find the parent scrollable element and adjust the scroll position if the target is not already in view.
let t=cf(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;r>n+e.clientHeight&&(t.scrollTop+=r-n)}e=t.parentElement}}function cw(e){return e instanceof HTMLInputElement&&!cg.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var cE={wrapper:{position:"fixed",top:0,bottom:0,left:0,right:0,overflow:"hidden",pointerEvents:"none"},backdrop:{zIndex:1,position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.2)",touchAction:"none",border:"none"},container:{zIndex:2,position:"absolute",left:0,bottom:0,width:"100%",backgroundColor:"#fff",borderTopRightRadius:"8px",borderTopLeftRadius:"8px",boxShadow:"0px -2px 16px rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",pointerEvents:"auto"},headerWrapper:{width:"100%"},header:{height:"40px",width:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},indicator:{width:"18px",height:"4px",borderRadius:"99px",backgroundColor:"#ddd"},content:{flexGrow:1,display:"flex",flexDirection:"column",minHeight:"0px",position:"relative"},scroller:{height:"100%",overflowY:"auto"}};const cS=/*#__PURE__*/c.forwardRef(({onOpenStart:t,onOpenEnd:n,onClose:r,onCloseStart:i,onCloseEnd:o,onSnap:a,children:s,disableScrollLocking:l=!1,isOpen:u,snapPoints:f,rootId:p,mountPoint:h,style:m,detent:g="full-height",initialSnap:v=0,disableDrag:y=!1,prefersReducedMotion:b=!1,tweenConfig:x=u0,...w},E)=>{let S=c.useRef(null),k=uK(0),P=function(){let[e,t]=c.useState(0);return u6(()=>{let e=()=>t(window.innerHeight);return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}(),C=/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */function(){/**
     * Lazy initialisation of prefersReducedMotion
     */aG.current||aK();let[e]=(0,c.useState)(aH.current);/**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */return e}(),T=!!(b||C),A={type:"tween",...T?u1:x},M=uK(0),L=uX(M,e=>e>=P?-1:9999999),R=uX(M,e=>e>=P?"hidden":"visible"),D=c.useRef({onOpenStart:t,onOpenEnd:n,onCloseStart:i,onCloseEnd:o});u6(()=>{D.current={onOpenStart:t,onOpenEnd:n,onCloseStart:i,onCloseEnd:o}}),f&&console.assert(function(e){for(let t=0;t<e.length;t++)if(e[t+1]>e[t])return!1;return!0}(// Convert negative / percentage snap points to absolute values
f=f.map(e=>// Percentage values e.g. between 0.0 and 1.0
    e>0&&e<=1?Math.round(e*P):e<0?P+e:e))||0===P,`Snap points need to be in descending order got: [${f}]`);let V=u7((e,{delta:t})=>{// Update drag indicator rotation based on drag velocity
let n=M.getVelocity();n>0&&k.set(10),n<0&&k.set(-10),// Make sure user cannot drag beyond the top of the sheet
M.set(Math.max(M.get()+t.y,0))}),O=u7((e,{velocity:t})=>{if(t.y>500)r();else{let e=S.current,t=e.getBoundingClientRect().height,n=M.get(),i=0;if(f){let e=f.map(e=>t-Math.min(e,t));"content-height"!==g||e.includes(0)||e.unshift(0),// Get the closest snap point
i=u2(e,n)}else n/t>.6&&(i=t);if(sI(M,i=u4({snapTo:i,sheetHeight:t}),A),f&&a){let e=Math.abs(Math.round(f[0]-i)),t=f.indexOf(u2(f,e));a(t)}let o=Math.round(t),s=i>=o;s&&r()}// Reset indicator rotation after dragging
k.set(0)});// Trigger onSnap callback when sheet is opened or closed
c.useEffect(()=>{if(!f||!a)return;let e=u?v:f.length-1;a(e)},[u]),c.useImperativeHandle(E,()=>({y:M,snapTo:e=>{let t=S.current;if(f&&void 0!==f[e]&&null!==t){let n=t.getBoundingClientRect().height,i=f[e],o=u4({snapTo:n-i,sheetHeight:n});sI(M,o,A),a&&a(e),o>=n&&r()}}})),function(e,t){let n=u8(e);// Automatically apply the iOS modal effect to the body when sheet opens/closes
c.useEffect(()=>{t&&!n&&e?function(e){let t=document.querySelector("body"),n=document.querySelector(`#${e}`);if(n){let e=window.innerHeight;t.style.backgroundColor="#000",n.style.overflow="hidden",n.style.willChange="transform",n.style.transition="transform 200ms ease-in-out, border-radius 200ms linear",n.style.transform=`translateY(calc(env(safe-area-inset-top) + 12px)) scale(${(e-24)/e})`,n.style.borderTopRightRadius="10px",n.style.borderTopLeftRadius="10px"}}(t):t&&!e&&n&&u3(t)},[e,n]),// Make sure to cleanup modal styles on unmount
c.useEffect(()=>()=>{t&&e&&u3(t)},[e])}(u,p),function(t={}){let{isDisabled:n}=t;cs(()=>{if(!n){let t,n,r,i,o,a;return 1==++cv&&(e=ch(/^iPhone/i)||ch(/^iPad/i)||// iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
ch(/^Mac/i)&&navigator.maxTouchPoints>1?(n=0,r=window.pageXOffset,i=window.pageYOffset,o=cl(cy(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),cy(document.documentElement,"overflow","hidden"),cy(document.body,"marginTop",`-${i}px`)),// Scroll to the top. The negative margin on the body will make this appear the same.
window.scrollTo(0,0),a=cl(cb(document,"touchstart",e=>{(// Store the nearest scrollable parent element from the element that the user touched.
(t=cf(e.target))!==document.documentElement||t!==document.body)&&(n=e.changedTouches[0].pageY)},{passive:!1,capture:!0}),cb(document,"touchmove",e=>{// Prevent scrolling the window.
if(t===document.documentElement||t===document.body){e.preventDefault();return}// Prevent scrolling up when at the top and scrolling down when at the bottom
// of a nested scrollable area, otherwise mobile Safari will start scrolling
// the window instead. Unfortunately, this disables bounce scrolling when at
// the top but it's the best we can do.
let r=e.changedTouches[0].pageY,i=t.scrollTop,o=t.scrollHeight-t.clientHeight;// Fix for: https://github.com/adobe/react-spectrum/pull/3780/files
0!==o&&((i<=0&&r>n||i>=o&&r<n)&&e.preventDefault(),n=r)},{passive:!1,capture:!0}),cb(document,"touchend",e=>{let t=e.target;// Apply this change if we're not already focused on the target element
cw(t)&&t!==document.activeElement&&(e.preventDefault(),// Apply a transform to trick Safari into thinking the input is at the top of the page
// so it doesn't try to scroll it into view. When tapping on an input, this needs to
// be done before the "focus" event, so we have to focus the element ourselves.
t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),cb(document,"focus",e=>{let t=e.target;cw(t)&&(// Transform also needs to be applied in the focus event in cases where focus moves
// other than tapping on an input directly, e.g. the next/previous buttons in the
// software keyboard. In these cases, it seems applying the transform in the focus event
// is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",cm&&(cm.height<window.innerHeight?// to wait for the transform to be removed.
requestAnimationFrame(()=>{cx(t)}):// measure the correct position to scroll to.
cm.addEventListener("resize",()=>cx(t),{once:!0}))}))},!0),cb(window,"scroll",()=>{// Last resort. If the window scrolled, scroll it back to the top.
// It should always be at the top because the body will have a negative margin (see below).
window.scrollTo(0,0)})),()=>{// Restore styles and scroll the page back to where it was.
o(),a(),window.scrollTo(r,i)}):cl(cy(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),cy(document.documentElement,"overflow","hidden"))),()=>{0==--cv&&e()}}},[n])}({isDisabled:!0===l||!u});let N=c.useMemo(()=>y?void 0:{drag:"y",dragElastic:0,dragMomentum:!1,dragPropagation:!1,onDrag:V,onDragEnd:O},[y]),F={y:M,sheetRef:S,isOpen:u,initialSnap:v,snapPoints:f,detent:g,indicatorRotation:k,callbacks:D,dragProps:N,windowHeight:P,animationOptions:A,reduceMotion:T,disableDrag:y},I=/*#__PURE__*/(0,r5.jsx)(ct.Provider,{value:F,children:/*#__PURE__*/(0,r5.jsx)(uG.div,{...w,ref:E,style:{...cE.wrapper,zIndex:L,visibility:R,...m},children:/*#__PURE__*/(0,r5.jsx)(sY,{children:u?/*#__PURE__*/(0,r5.jsx)(ci,{children:c.Children.map(s,(e,t)=>/*#__PURE__*/c.cloneElement(e,{key:`sheet-child-${t}`}))}):null})})});// eslint-disable-line
return uJ?I:/*#__PURE__*/d.createPortal(I,h??document.body)});var c=u("e0W5i");const ck=/*#__PURE__*/c.forwardRef(({children:e,style:t={},className:n="",...r},i)=>{let{y:o,isOpen:a,callbacks:s,snapPoints:l,initialSnap:u=0,sheetRef:d,windowHeight:f,detent:p,animationOptions:h,reduceMotion:m}=cn(),{handleAnimationComplete:g}=function(e,t){let n=u8(e),r=c.useRef(!1),i=c.useCallback(()=>{r.current?(t.current.onCloseEnd?.(),r.current=!1):(t.current.onOpenEnd?.(),r.current=!0)},[e,n]);return c.useEffect(()=>{!n&&e?t.current.onOpenStart?.():!e&&n&&t.current.onCloseStart?.()},[e,n]),{handleAnimationComplete:i}}(a,s),v=l?l[0]-l[u]:0,y=l?l[0]:null,b=null!==y?`min(${y}px, ${uZ})`:uZ;return/*#__PURE__*/(0,r5.jsx)(uG.div,{...r,ref:u5([d,i]),className:`react-modal-sheet-container ${n}`,style:{...cE.container,...t,..."full-height"===p&&{height:b},..."content-height"===p&&{maxHeight:b},y:o},initial:!m&&{y:f},animate:{y:v,transition:h},exit:{y:f,transition:h},onAnimationComplete:g,children:e})});var c=u("e0W5i");const cP=/*#__PURE__*/c.forwardRef(({children:e,style:t,disableDrag:n,className:r="",...i},o)=>{let a=cn(),s=co(),{constraintsRef:l,onMeasureDragConstraints:u}=ce(),c=n||s.disableDrag?void 0:a.dragProps;return/*#__PURE__*/(0,r5.jsx)(uG.div,{...i,ref:u5([o,l]),className:`react-modal-sheet-content ${r}`,style:{...cE.content,...t},...c,dragConstraints:l,onMeasureDragConstraints:u,children:e})});var c=u("e0W5i");const cC=/*#__PURE__*/c.forwardRef(({children:e,style:t,disableDrag:n,...r},i)=>{let{indicatorRotation:o,dragProps:a}=cn(),{constraintsRef:s,onMeasureDragConstraints:l}=ce(),u=n?void 0:a,c=uX(o,e=>`translateX(2px) rotate(${e}deg)`),d=uX(o,e=>`translateX(-2px) rotate(${-1*e}deg)`);return/*#__PURE__*/(0,r5.jsx)(uG.div,{...r,ref:u5([i,s]),style:{...cE.headerWrapper,...t},...u,dragConstraints:s,onMeasureDragConstraints:l,children:e||/*#__PURE__*/(0,r5.jsxs)("div",{className:"react-modal-sheet-header",style:cE.header,children:[/*#__PURE__*/(0,r5.jsx)(uG.span,{className:"react-modal-sheet-drag-indicator",style:{...cE.indicator,transform:c}}),/*#__PURE__*/(0,r5.jsx)(uG.span,{className:"react-modal-sheet-drag-indicator",style:{...cE.indicator,transform:d}})]})})});var c=u("e0W5i");const cT=e=>!!e.onClick||!!e.onTap,cA=/*#__PURE__*/c.forwardRef(({style:e={},className:t="",...n},r)=>{let i=cT(n)?uG.button:uG.div,o=cT(n)?"auto":"none";return/*#__PURE__*/(0,r5.jsx)(i,{...n,ref:r,className:`react-modal-sheet-backdrop ${t}`,style:{...cE.backdrop,...e,pointerEvents:o},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})});var c=u("e0W5i");const cM=/*#__PURE__*/c.forwardRef(({draggableAt:e="top",children:t,style:n,className:r="",...i},o)=>{let a=co();function s(t){let{scrollTop:n,scrollHeight:r,clientHeight:i}=t;if(!(r>i))return;let o=n<=0,s=r-n===i;"top"===e&&o||"bottom"===e&&s||"both"===e&&(o||s)?a.setDragEnabled():a.setDragDisabled()}let l="undefined"!=typeof window&&("ontouchstart"in window||navigator.maxTouchPoints>0)?{onScroll:function(e){s(e.currentTarget)},onTouchStart:function(e){s(e.currentTarget)}}:void 0;return/*#__PURE__*/(0,r5.jsx)("div",{...i,ref:o,className:`react-modal-sheet-scroller ${r}`,style:{...cE.scroller,...n},...l,children:t})});cS.Container=ck,cS.Header=cC,cS.Content=cP,cS.Backdrop=cA,cS.Scroller=cM;var c=u("e0W5i");function cL({when:e=!0,from:t,to:n}){c.useLayoutEffect(()=>{let r=document.querySelector('meta[name="theme-color"]');if(!r)return;let i=t||r.getAttribute("content");if(e)return r.setAttribute("content",n),()=>{r.setAttribute("content",i)}},[e])}const cR=[-50,.5,200,0],cD=rM.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`,cV=rM.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;var cO=()=>{let e=c.useRef(),[t,n]=c.useState(!1),[r,i]=c.useState(1),o=t=>e.current?.snapTo(t),a=()=>n(!1);return c.useEffect(()=>{console.log("> Current snap point",r)},[r]),cL({when:t,from:"#fff",to:"#000"}),/*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>n(!0)},"Bottom Sheet with Snap Points"),/*#__PURE__*/c.createElement(cS,{ref:e,isOpen:t,onClose:a,onSnap:i,snapPoints:cR,initialSnap:1,rootId:"root"},/*#__PURE__*/c.createElement(cS.Container,null,/*#__PURE__*/c.createElement(cS.Content,null,/*#__PURE__*/c.createElement(cD,null,/*#__PURE__*/c.createElement(cV,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>o(0)},"Snap to -50 (from top)"),/*#__PURE__*/c.createElement(r2,{onClick:()=>o(1)},"Snap to 50%"),/*#__PURE__*/c.createElement(r2,{onClick:()=>o(2)},"Snap to 200"),/*#__PURE__*/c.createElement(r2,{onClick:()=>o(3)},"Snap to 0 (close)"))))),/*#__PURE__*/c.createElement(cS.Backdrop,{onTap:a})))},c=u("e0W5i");const cN=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`,cF=rM.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;var cI=()=>{let[e,t]=c.useState(!1);return /*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>t(!0)},"Scrollable Bottom Sheet"),/*#__PURE__*/c.createElement(cS,{isOpen:e,onClose:()=>t(!1)},/*#__PURE__*/c.createElement(cS.Container,null,/*#__PURE__*/c.createElement(cS.Header,null),/*#__PURE__*/c.createElement(cS.Content,null,/*#__PURE__*/c.createElement(cS.Scroller,null,/*#__PURE__*/c.createElement(cN,null,Array.from({length:50}).fill(1).map((e,t)=>/*#__PURE__*/c.createElement(cF,{key:t},t)))))),/*#__PURE__*/c.createElement(cS.Backdrop,null)))},c=u("e0W5i");const cz={name:"Gamification Burn Rate",year:"2020",artist:"Niche Market",genre:"Indie Techno",image:"https://source.unsplash.com/WDuVbCMMlSg/400x400",songs:["Gamification investor seed money","Gen-z iPad","Bandwidth influencer","Paradigm shift","Buzz entrepreneur","Android disruptive","Marketing rockstar","Focus","Gen-z return","Accelerator ownership","Termsheet iteration incubator","Pivot seed"]};// This is for better animation perf on Safari
(()=>{let e=document.createElement("link");e.rel="preload",e.as="image",e.href=cz.image,document.head.appendChild(e)})();var c=(u("e0W5i"),u("e0W5i"),u("e0W5i"));/**
 * @public
 */const cj=(0,c.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});var c=u("e0W5i");const cB=(0,c.createContext)({});var c=(u("e0W5i"),u("e0W5i"));/**
 * @public
 */const c_=(0,c.createContext)(null);var c=u("e0W5i");const cU="undefined"!=typeof document,cW=cU?c.useLayoutEffect:c.useEffect;var c=u("e0W5i");const c$=(0,c.createContext)({strict:!1});function cH(e){return"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}var c=(u("e0W5i"),u("e0W5i"));/**
 * Decides if the supplied variable is variant label
 */function cG(e){return"string"==typeof e||Array.isArray(e)}function cK(e){return"object"==typeof e&&"function"==typeof e.start}const cY=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cq=["initial",...cY];function cX(e){return cK(e.animate)||cq.some(t=>cG(e[t]))}function cQ(e){return!!(cX(e)||e.variants)}function cZ(e){return Array.isArray(e)?e.join(" "):e}const cJ={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},c0={};for(const e in cJ)c0[e]={isEnabled:t=>cJ[e].some(e=>!!t[e])};var c=u("e0W5i");const c1=(0,c.createContext)({});var c=u("e0W5i");/**
 * Internal, exported only for usage in Framer
 */const c2=(0,c.createContext)({}),c3=Symbol.for("motionComponentSymbol"),c4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function c5(e){if(/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */"string"!=typeof e||/**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */e.includes("-"));else if(c4.indexOf(e)>-1||/**
         * If it contains a capital letter, it's an SVG component
         *//[A-Z]/.test(e))return!0;return!1}var c=(u("e0W5i"),u("e0W5i"));const c6={},c8=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],c7=new Set(c8);function c9(e,{layout:t,layoutId:n}){return c7.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!c6[e]||"opacity"===e)}const de=e=>!!(e&&e.getVelocity),dt={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dn=c8.length,dr=e=>t=>"string"==typeof t&&t.startsWith(e),di=dr("--"),da=dr("var(--"),ds=(e,t)=>t&&"number"==typeof e?t.transform(e):e,dl=(e,t,n)=>Math.min(Math.max(n,e),t),du={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},dc={...du,transform:e=>dl(0,1,e)},dd={...du,default:1},df=e=>Math.round(1e5*e)/1e5,dp=/(-)?([\d]*\.?[\d])+/g,dh=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,dm=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function dg(e){return"string"==typeof e}const dv=e=>({test:t=>dg(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),dy=dv("deg"),db=dv("%"),dx=dv("px"),dw=dv("vh"),dE=dv("vw"),dS={...db,parse:e=>db.parse(e)/100,transform:e=>db.transform(100*e)},dk={...du,transform:Math.round},dP={// Border props
borderWidth:dx,borderTopWidth:dx,borderRightWidth:dx,borderBottomWidth:dx,borderLeftWidth:dx,borderRadius:dx,radius:dx,borderTopLeftRadius:dx,borderTopRightRadius:dx,borderBottomRightRadius:dx,borderBottomLeftRadius:dx,// Positioning props
width:dx,maxWidth:dx,height:dx,maxHeight:dx,size:dx,top:dx,right:dx,bottom:dx,left:dx,// Spacing props
padding:dx,paddingTop:dx,paddingRight:dx,paddingBottom:dx,paddingLeft:dx,margin:dx,marginTop:dx,marginRight:dx,marginBottom:dx,marginLeft:dx,// Transform props
rotate:dy,rotateX:dy,rotateY:dy,rotateZ:dy,scale:dd,scaleX:dd,scaleY:dd,scaleZ:dd,skew:dy,skewX:dy,skewY:dy,distance:dx,translateX:dx,translateY:dx,translateZ:dx,x:dx,y:dx,z:dx,perspective:dx,transformPerspective:dx,opacity:dc,originX:dS,originY:dS,originZ:dx,// Misc
zIndex:dk,// SVG
fillOpacity:dc,strokeOpacity:dc,numOctaves:dk};function dC(e,t,n,r){let{style:i,vars:o,transform:a,transformOrigin:s}=e,l=!1,u=!1,c=!0;/**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */for(let e in t){let n=t[e];/**
         * If this is a CSS variable we don't do any further processing.
         */if(di(e)){o[e]=n;continue}// Convert the value to its default value type, ie 0 -> "0px"
let r=dP[e],d=ds(n,r);if(c7.has(e)){// If we already know we have a non-default transform, early return
if(// If this is a transform, flag to enable further transform processing
l=!0,a[e]=d,!c)continue;n!==(r.default||0)&&(c=!1)}else e.startsWith("origin")?(// If this is a transform origin, flag and enable further transform-origin processing
u=!0,s[e]=d):i[e]=d}/**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */if(!t.transform&&(l||r?i.transform=/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */function(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){// The transform string we're going to build into.
let o="";/**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */for(let t=0;t<dn;t++){let n=c8[t];if(void 0!==e[n]){let t=dt[n]||n;o+=`${t}(${e[n]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}(e.transform,n,c,r):i.transform&&/**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */(i.transform="none")),u){let{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const dT=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dA(e,t,n){for(let r in t)de(t[r])||c9(r,n)||(e[r]=t[r])}function dM(e,t,n){// The `any` isn't ideal but it is the type of createElement props argument
let r={},i=function(e,t,n){let r=e.style||{},i={};return(/**
     * Copy non-Motion Values straight into style
     */dA(i,r,e),Object.assign(i,function({transformTemplate:e},t,n){return(0,c.useMemo)(()=>{let r=dT();return dC(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),e.transformValues?e.transformValues(i):i)}(e,t,n);return e.drag&&!1!==e.dragListener&&(// Disable the ghost element when a user drags
r.draggable=!1,// Disable text selection
i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",// Disable scrolling on the draggable direction
i.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */const dL=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */function dR(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||dL.has(e)}let dD=e=>!dR(e);/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */try{/**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */(o=u("7dGEo").default)&&// Explicitly filter our events
(dD=e=>e.startsWith("on")?!dR(e):o(e))}catch(e){// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}var c=u("e0W5i");function dV(e,t,n){return"string"==typeof e?e:dx.transform(t+n*e)}const dO={offset:"stroke-dashoffset",array:"stroke-dasharray"},dN={offset:"strokeDashoffset",array:"strokeDasharray"};/**
 * Build SVG visual attrbutes, like cx and style.transform
 */function dF(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},c,d,f){/**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */if(dC(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:p,style:h,dimensions:m}=e;p.transform&&(m&&(h.transform=p.transform),delete p.transform),m&&(void 0!==i||void 0!==o||h.transform)&&(h.transformOrigin=/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */function(e,t,n){let r=dV(t,e.x,e.width),i=dV(n,e.y,e.height);return`${r} ${i}`}(m,void 0!==i?i:.5,void 0!==o?o:.5)),void 0!==t&&(p.x=t),void 0!==n&&(p.y=n),void 0!==r&&(p.scale=r),void 0!==a&&/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */function(e,t,n=1,r=0,i=!0){// Normalise path length by setting SVG attribute pathLength to 1
e.pathLength=1;// We use dash case when setting attributes directly to the DOM node and camel case
// when defining props on a React component.
let o=i?dO:dN;// Build the dash offset
e[o.offset]=dx.transform(-r);// Build the dash array
let a=dx.transform(t),s=dx.transform(n);e[o.array]=`${a} ${s}`}(p,a,s,l,!1)}const dI=()=>({...dT(),attrs:{}}),dz=e=>"string"==typeof e&&"svg"===e.toLowerCase();function dj(e,t,n,r){let i=(0,c.useMemo)(()=>{let n=dI();return dF(n,t,{enableHardwareAcceleration:!1},dz(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};dA(t,e.style,e),i.style={...t,...i.style}}return i}/**
 * Convert camelCase to dash-case properties.
 */const dB=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function d_(e,{style:t,vars:n},r,i){// Loop over any CSS variables and assign those.
for(let o in Object.assign(e.style,t,i&&i.getProjectionStyles(r)),n)e.style.setProperty(o,n[o])}/**
 * A set of attribute names that are always read/written as camel case.
 */const dU=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dW(e,t,n,r){for(let n in d_(e,t,void 0,r),t.attrs)e.setAttribute(dU.has(n)?n:dB(n),t.attrs[n])}function d$(e,t){let{style:n}=e,r={};for(let i in n)(de(n[i])||t.style&&de(t.style[i])||c9(i,e))&&(r[i]=n[i]);return r}function dH(e,t){let n=d$(e,t);for(let r in e)if(de(e[r])||de(t[r])){let t=-1!==c8.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[t]=e[r]}return n}function dG(e,t,n,r={},i={}){return"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}var c=(u("e0W5i"),u("e0W5i"));const dK=e=>Array.isArray(e),dY=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),dq=e=>dK(e)?e[e.length-1]||0:e;/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */function dX(e){let t=de(e)?e.get():e;return dY(t)?t.toValue():t}const dQ=e=>(t,n)=>{let r=(0,c.useContext)(cB),i=(0,c.useContext)(c_),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){let a={latestValues:function(e,t,n,r){let i={},o=r(e,{});for(let e in o)i[e]=dX(o[e]);let{initial:a,animate:s}=e,l=cX(e),u=cQ(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===a;let d=c?s:a;if(d&&"boolean"!=typeof d&&!cK(d)){let t=Array.isArray(d)?d:[d];t.forEach(t=>{let n=dG(e,t);if(!n)return;let{transitionEnd:r,transition:o,...a}=n;for(let e in a){let t=a[e];if(Array.isArray(t)){/**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */let e=c?t.length-1:0;t=t[e]}null!==t&&(i[e]=t)}for(let e in r)i[e]=r[e]})}return i}(r,i,o,e),renderState:t()};return n&&(a.mount=e=>n(r,e,a)),a})(e,t,r,i);return n?o():/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */function(e){let t=(0,c.useRef)(null);return null===t.current&&(t.current=e()),t.current}(o)},dZ={useVisualState:dQ({scrapeMotionValuesFromProps:dH,createRenderState:dI,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){// Most likely trying to measure an unrendered element under Firefox
n.dimensions={x:0,y:0,width:0,height:0}}dF(n,r,{enableHardwareAcceleration:!1},dz(t.tagName),e.transformTemplate),dW(t,n)}})},dJ={useVisualState:dQ({scrapeMotionValuesFromProps:d$,createRenderState:dT})};function d0(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const d1=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function d2(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const d3=e=>t=>d1(t)&&e(t,d2(t));function d4(e,t,n,r){return d0(e,t,d3(n),r)}/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */const d5=(e,t)=>n=>t(e(n)),d6=(...e)=>e.reduce(d5);function d8(e){let t=null;return()=>null===t&&(t=e,()=>{t=null})}const d7=d8("dragHorizontal"),d9=d8("dragVertical");function fe(e){let t=!1;if("y"===e)t=d9();else if("x"===e)t=d7();else{let e=d7(),n=d9();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function ft(){// Check the gesture lock - if we get it, it means no drag gesture is active
// and we can safely fire the tap gesture.
let e=fe(!0);return!e||(e(),!1)}class fn{constructor(e){this.isMounted=!1,this.node=e}update(){}}const fr={delta:0,timestamp:0,isProcessing:!1};let fi=!0,fo=!1;const fa=["read","update","preRender","render","postRender"],fs=fa.reduce((e,t)=>(e[t]=function(e){/**
     * We create and reuse two arrays, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */let t=[],n=[],r=0,i=!1,o=!1,a=new WeakSet,s={/**
         * Schedule a process to run on the next frame.
         */schedule:(e,o=!1,s=!1)=>{let l=s&&i,u=l?t:n;return o&&a.add(e),-1===u.indexOf(e)&&(u.push(e),l&&i&&(r=t.length)),e},/**
         * Cancel the provided callback from running on the next frame.
         */cancel:e=>{let t=n.indexOf(e);-1!==t&&n.splice(t,1),a.delete(e)},/**
         * Execute all schedule callbacks.
         */process:l=>{/**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */if(i){o=!0;return}if(i=!0,[t,n]=[n,t],// Clear the next frame list
    n.length=0,// Execute this frame
    r=t.length)for(let n=0;n<r;n++){let r=t[n];r(l),a.has(r)&&(s.schedule(r),e())}i=!1,o&&(o=!1,s.process(l))}};return s}(()=>fo=!0),e),{}),fl=e=>fs[e].process(fr),fu=e=>{fo=!1,fr.delta=fi?1e3/60:Math.max(Math.min(e-fr.timestamp,40),1),fr.timestamp=e,fr.isProcessing=!0,fa.forEach(fl),fr.isProcessing=!1,fo&&(fi=!1,requestAnimationFrame(fu))},fc=()=>{fo=!0,fi=!0,fr.isProcessing||requestAnimationFrame(fu)},fd=fa.reduce((e,t)=>{let n=fs[t];return e[t]=(e,t=!1,r=!1)=>(fo||fc(),n.schedule(e,t,r)),e},{});function ff(e){fa.forEach(t=>fs[t].cancel(e))}function fp(e,t){let n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return d4(e.current,n,(n,i)=>{if("touch"===n.type||ft())return;let o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[r]&&fd.update(()=>o[r](n,i))},{passive:!e.getProps()[r]})}/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */const fh=(e,t)=>!!t&&(e===t||fh(e,t.parentElement)),fm=e=>e;function fg(e,t){if(!t)return;let n=new PointerEvent("pointer"+e);t(n,d2(n))}/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */const fv=new WeakMap,fy=new WeakMap,fb=e=>{let t=fv.get(e.target);t&&t(e)},fx=e=>{e.forEach(fb)},fw={some:0,all:1};function fE(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function fS(e,t,n){let r=e.getProps();return dG(r,t,void 0!==n?n:r.custom,/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}const fk="data-"+dB("framerAppearId"),fP=e=>1e3*e,fC=e=>e/1e3,fT={current:!1},fA=e=>Array.isArray(e)&&"number"==typeof e[0],fM=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,fL={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fM([0,.65,.55,1]),circOut:fM([.55,0,1,.45]),backIn:fM([.31,.01,.66,-.59]),backOut:fM([.33,1.53,.69,.99])},fR={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},fD={},fV={};/**
 * Generate features tests that cache their results.
 */for(const e in fR)fV[e]=()=>(void 0===fD[e]&&(fD[e]=fR[e]()),fD[e]);/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const fO=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function fN(e,t,n,r){// If this is a linear gradient, return linear easing
if(e===t&&n===r)return fm;let i=t=>(function(e,t,n,r,i){let o,a;let s=0;do(o=fO(a=t+(n-t)/2,r,i)-e)>0?n=a:t=a;while(Math.abs(o)>1e-7&&++s<12)return a})(t,0,1,e,n);// If animation is at start/end, return t without easing
return e=>0===e||1===e?e:fO(i(e),t,r)}const fF=fN(.42,0,1,1),fI=fN(0,0,.58,1),fz=fN(.42,0,.58,1),fj=e=>Array.isArray(e)&&"number"!=typeof e[0],fB=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,f_=e=>t=>1-e(1-t),fU=e=>1-Math.sin(Math.acos(e)),fW=f_(fU),f$=fB(fW),fH=fN(.33,1.53,.69,.99),fG=f_(fH),fK=fB(fG),fY={linear:fm,easeIn:fF,easeInOut:fz,easeOut:fI,circIn:fU,circInOut:f$,circOut:fW,backIn:fG,backInOut:fK,backOut:fH,anticipate:e=>(e*=2)<1?.5*fG(e):.5*(2-Math.pow(2,-10*(e-1)))},fq=e=>{if(Array.isArray(e)){fm(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,n,r,i]=e;return fN(t,n,r,i)}return"string"==typeof e?(fm(void 0!==fY[e],`Invalid easing type '${e}'`),fY[e]):e},fX=(e,t)=>n=>!!(dg(n)&&dm.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),fQ=(e,t,n)=>r=>{if(!dg(r))return r;let[i,o,a,s]=r.match(dp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},fZ=e=>dl(0,255,e),fJ={...du,transform:e=>Math.round(fZ(e))},f0={test:fX("rgb","red"),parse:fQ("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+fJ.transform(e)+", "+fJ.transform(t)+", "+fJ.transform(n)+", "+df(dc.transform(r))+")"},f1={test:fX("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:f0.transform},f2={test:fX("hsl","hue"),parse:fQ("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+db.transform(df(t))+", "+db.transform(df(n))+", "+df(dc.transform(r))+")"},f3={test:e=>f0.test(e)||f1.test(e)||f2.test(e),parse:e=>f0.test(e)?f0.parse(e):f2.test(e)?f2.parse(e):f1.parse(e),transform:e=>dg(e)?e:e.hasOwnProperty("red")?f0.transform(e):f2.transform(e)},f4=(e,t,n)=>-n*e+n*t+e;// Adapted from https://gist.github.com/mjackson/5311256
function f5(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const f6=(e,t,n)=>{let r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},f8=[f1,f0,f2],f7=e=>f8.find(t=>t.test(e));function f9(e){let t=f7(e);fm(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===f2&&(n=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100;let i=0,o=0,a=0;if(t/=100){let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=f5(s,r,e+1/3),o=f5(s,r,e),a=f5(s,r,e-1/3)}else i=o=a=n;return{red:Math.round(255*i),green:Math.round(255*o),blue:Math.round(255*a),alpha:r}}(n)),n}const pe=(e,t)=>{let n=f9(e),r=f9(t),i={...n};return e=>(i.red=f6(n.red,r.red,e),i.green=f6(n.green,r.green,e),i.blue=f6(n.blue,r.blue,e),i.alpha=f4(n.alpha,r.alpha,e),f0.transform(i))},pt={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:fm},pn={regex:dh,countKey:"Colors",token:"${c}",parse:f3.parse},pr={regex:dp,countKey:"Numbers",token:"${n}",parse:du.parse};function pi(e,{regex:t,countKey:n,token:r,parse:i}){let o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function po(e){let t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&pi(n,pt),pi(n,pn),pi(n,pr),n}function pa(e){return po(e).values}function ps(e){let{values:t,numColors:n,numVars:r,tokenised:i}=po(e),o=t.length;return e=>{let t=i;for(let i=0;i<o;i++)t=i<r?t.replace(pt.token,e[i]):i<r+n?t.replace(pn.token,f3.transform(e[i])):t.replace(pr.token,df(e[i]));return t}}const pl=e=>"number"==typeof e?0:e,pu={test:function(e){var t,n;return isNaN(e)&&dg(e)&&((null===(t=e.match(dp))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(dh))||void 0===n?void 0:n.length)||0)>0},parse:pa,createTransformer:ps,getAnimatableNone:function(e){let t=pa(e),n=ps(e);return n(t.map(pl))}},pc=(e,t)=>n=>`${n>0?t:e}`;function pd(e,t){return"number"==typeof e?n=>f4(e,t,n):f3.test(e)?pe(e,t):e.startsWith("var(")?pc(e,t):ph(e,t)}const pf=(e,t)=>{let n=[...e],r=n.length,i=e.map((e,n)=>pd(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},pp=(e,t)=>{let n={...e,...t},r={};for(let i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=pd(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}},ph=(e,t)=>{let n=pu.createTransformer(t),r=po(e),i=po(t),o=r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers;return o?d6(pf(r.values,i.values),n):(fm(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),pc(e,t))},pm=(e,t,n)=>{let r=t-e;return 0===r?1:(n-e)/r},pg=(e,t)=>n=>f4(e,t,n);/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */function pv(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let o=e.length;/**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */if(fm(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,n){let r=[],i=n||function(e){if("number"==typeof e);else if("string"==typeof e)return f3.test(e)?pe:ph;else if(Array.isArray(e))return pf;else if("object"==typeof e)return pp;return pg}(e[0]),o=e.length-1;for(let n=0;n<o;n++){let o=i(e[n],e[n+1]);if(t){let e=Array.isArray(t)?t[n]||fm:t;o=d6(e,o)}r.push(o)}return r}(t,r,i),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);let r=pm(e[n],e[n+1],t);return a[n](r)};return n?t=>l(dl(e[0],e[o-1],t)):l}function py({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){/**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */let i=fj(r)?r.map(fq):fq(r),o={done:!1,value:t[0]},a=// TODO Maybe we should warn here if there's a length mismatch
(n&&n.length===t.length?n:function(e){let t=[0];return function(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=pm(0,t,r);e.push(f4(n,1,i))}}(t,e.length-1),t}(t)).map(t=>t*e),s=pv(a,t,{ease:Array.isArray(i)?i:t.map(()=>i||fz).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(o.value=s(t),o.done=t>=e,o)}}function pb(e,t,n){var r,i;let o=Math.max(t-5,0);return r=n-e(o),(i=t-o)?r*(1e3/i):0}function px(e,t){return e*Math.sqrt(1-t*t)}const pw=["duration","bounce"],pE=["stiffness","damping","mass"];function pS(e,t){return t.some(t=>void 0!==e[t])}function pk({keyframes:e,restDelta:t,restSpeed:n,...r}){let i;let o=e[0],a=e[e.length-1],s={done:!1,value:o},{stiffness:l,damping:u,mass:c,velocity:d,duration:f,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};// stiffness/damping/mass overrides duration/bounce
if(!pS(e,pE)&&pS(e,pw)){let n=function({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;fm(e<=fP(10),"Spring duration must be 10 seconds or less");let a=1-t;/**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */a=dl(.05,1,a),e=dl(.01,10,fC(e)),a<1?(/**
         * Underdamped spring
         */i=t=>{let r=t*a,i=r*e,o=px(t,a);return .001-(r-n)/o*Math.exp(-i)},o=t=>{let r=t*a,o=r*e,s=Math.pow(a,2)*Math.pow(t,2)*e,l=px(Math.pow(t,2),a),u=-i(t)+.001>0?-1:1;return u*((o*n+n-s)*Math.exp(-o))/l}):(/**
         * Critically-damped spring
         */i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return -.001+r*i},o=t=>{let r=Math.exp(-t*e),i=(n-t)*(e*e);return r*i});let s=5/e,l=function(e,t,n){let r=n;for(let n=1;n<12;n++)r-=e(r)/t(r);return r}(i,o,s);if(e=fP(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(l,2)*r;return{stiffness:t,damping:2*a*Math.sqrt(r*t),duration:e}}}(e);(t={...t,...n,velocity:0,mass:1}).isResolvedFromDuration=!0}return t}(r),h=d?-fC(d):0,m=u/(2*Math.sqrt(l*c)),g=a-o,v=fC(Math.sqrt(l/c)),y=5>Math.abs(g);if(n||(n=y?.01:2),t||(t=y?.005:.5),m<1){let e=px(v,m);// Underdamped spring
i=t=>{let n=Math.exp(-m*v*t);return a-n*((h+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)i=e=>a-Math.exp(-v*e)*(g+(h+v*g)*e);else{// Overdamped spring
let e=v*Math.sqrt(m*m-1);i=t=>{let n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((h+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:p&&f||null,next:e=>{let r=i(e);if(p)s.done=e>=f;else{let o=h;0!==e&&(o=m<1?pb(i,e,r):0);let l=Math.abs(o)<=n,u=Math.abs(a-r)<=t;s.done=l&&u}return s.value=s.done?a:r,s}}}function pP({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:c}){let d,f;let p=e[0],h={done:!1,value:p},m=e=>void 0!==s&&e<s||void 0!==l&&e>l,g=e=>void 0===s?l:void 0===l?s:Math.abs(s-e)<Math.abs(l-e)?s:l,v=n*t,y=p+v,b=void 0===a?y:a(y);b!==y&&(v=b-p);let x=e=>-v*Math.exp(-e/r),w=e=>b+x(e),E=e=>{let t=x(e),n=w(e);h.done=Math.abs(t)<=u,h.value=h.done?b:n},S=e=>{m(h.value)&&(d=e,f=pk({keyframes:[h.value,g(h.value)],velocity:pb(w,e,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:e=>{/**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */let t=!1;return(/**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */(f||void 0!==d||(t=!0,E(e),S(e)),void 0!==d&&e>d)?f.next(e-d):(t||E(e),h))}}}const pC=e=>{let t=({timestamp:t})=>e(t);return{start:()=>fd.update(t,!0),stop:()=>ff(t),/**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */now:()=>fr.isProcessing?fr.timestamp:performance.now()}};function pT(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const pA={decay:pP,inertia:pP,tween:py,keyframes:py,spring:pk};/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */function pM({autoplay:e=!0,delay:t=0,driver:n=pC,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:s="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let p,h,m,g,v,y=1,b=!1,x=()=>{p&&p(),h=new Promise(e=>{p=e})};// Create the first finished promise
x();let w=pA[i]||py;w!==py&&"number"!=typeof r[0]&&(g=pv([0,100],r,{clamp:!1}),r=[0,100]);let E=w({...f,keyframes:r});"mirror"===s&&(v=w({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let S="idle",k=null,P=null,C=null;/**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */null===E.calculatedDuration&&o&&(E.calculatedDuration=pT(E));let{calculatedDuration:T}=E,A=1/0,M=1/0;null!==T&&(M=(A=T+a)*(o+1)-a);let L=0,R=e=>{if(null===P)return;y>0&&(P=Math.min(P,e)),L=null!==k?k:(e-P)*y;// Rebase on delay
let n=L-t,i=n<0;L=Math.max(n,0),"finished"===S&&null===k&&(L=M);let l=L,u=E;if(o){/**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */let e=L/A,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,o+1);/**
             * Reverse progress if we're not running in "normal" direction
             */let r=!!(t%2);r&&("reverse"===s?(n=1-n,a&&(n-=a/A)):"mirror"===s&&(u=v));let i=dl(0,1,n);L>M&&(i="reverse"===s&&r?1:0),l=i*A}/**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */let c=i?{done:!1,value:r[0]}:u.next(l);g&&(c.value=g(c.value));let{done:f}=c;i||null===T||(f=L>=M);let p=null===k&&("finished"===S||"running"===S&&f||y<0&&L<=0);return d&&d(c.value),p&&O(),c},D=()=>{m&&m.stop(),m=void 0},V=()=>{S="idle",D(),x(),P=C=null},O=()=>{S="finished",c&&c(),D(),x()},N=()=>{if(b)return;m||(m=n(R));let e=m.now();l&&l(),null!==k?P=e-k:P&&"finished"!==S||(P=e),C=P,k=null,/**
         * Set playState to running only after we've used it in
         * the previous logic.
         */S="running",m.start()};e&&N();let F={then:(e,t)=>h.then(e,t),get time(){return fC(L)},set time(newTime){L=newTime=fP(newTime),null===k&&m&&0!==y?P=m.now()-newTime/y:k=newTime},get duration(){let e=null===E.calculatedDuration?pT(E):E.calculatedDuration;return fC(e)},get speed(){return y},set speed(newSpeed){if(newSpeed===y||!m)return;y=newSpeed,F.time=fC(L)},get state(){return S},play:N,pause:()=>{S="paused",k=L},stop:()=>{b=!0,"idle"!==S&&(S="idle",u&&u(),V())},cancel:()=>{null!==C&&R(C),V()},complete:()=>{S="finished"},sample:e=>(P=0,R(e))};return F}/**
 * A list of values that can be hardware-accelerated.
 */const pL=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),pR=(e,t)=>"spring"===t.type||"backgroundColor"===e||!function e(t){return!!(!t||"string"==typeof t&&fL[t]||fA(t)||Array.isArray(t)&&t.every(e))}(t.ease),pD={type:"spring",stiffness:500,damping:25,restSpeed:10},pV=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),pO={type:"keyframes",duration:.8},pN={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pF=(e,{keyframes:t})=>t.length>2?pO:c7.has(e)?e.startsWith("scale")?pV(t[1]):pD:pN,pI=(e,t)=>// If the list of keys tat might be non-animatable grows, replace with Set
    "zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&// It's animatable if we have a string
    (pu.test(t)||"0"===t)&&// And it contains numbers and/or colors
    !t.startsWith("url(")// Unless it starts with "url("
    ),pz=new Set(["brightness","contrast","saturate","opacity"]);function pj(e){let[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[r]=n.match(dp)||[];if(!r)return e;let i=n.replace(r,""),o=pz.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const pB=/([a-z-]*)\(.*?\)/g,p_={...pu,getAnimatableNone:e=>{let t=e.match(pB);return t?t.map(pj).join(" "):e}},pU={...dP,color:f3,backgroundColor:f3,outlineColor:f3,fill:f3,stroke:f3,// Border props
borderColor:f3,borderTopColor:f3,borderRightColor:f3,borderBottomColor:f3,borderLeftColor:f3,filter:p_,WebkitFilter:p_},pW=e=>pU[e];function p$(e,t){let n=pW(e);// If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
return n!==p_&&(n=pu),n.getAnimatableNone?n.getAnimatableNone(t):void 0}/**
 * Check if the value is a zero value string like "0px" or "0%"
 */const pH=e=>/^0[^.\s]+$/.test(e);function pG(e,t){return e[t]||e.default||e}const pK=(e,t,n,r={})=>i=>{let o=pG(r,e)||{},a=o.delay||r.delay||0,{elapsed:s=0}=r;s-=fP(a);let l=function(e,t,n,r){let i,o;let a=pI(t,n);i=Array.isArray(n)?[...n]:[null,n];let s=void 0!==r.from?r.from:e.get(),l=[];for(let e=0;e<i.length;e++){var u;null===i[e]&&(i[e]=0===e?s:i[e-1]),("number"==typeof(u=i[e])?0===u:null!==u?"none"===u||"0"===u||pH(u):void 0)&&l.push(e),"string"==typeof i[e]&&"none"!==i[e]&&"0"!==i[e]&&(o=i[e])}if(a&&l.length&&o)for(let e=0;e<l.length;e++){let n=l[e];i[n]=p$(t,o)}return i}(t,e,n,o),u=l[0],c=l[l.length-1],d=pI(e,u),f=pI(e,c);fm(d===f,`You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let p={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(!/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */function({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(o)&&(p={...p,...pF(e,p)}),p.duration&&(p.duration=fP(p.duration)),p.repeatDelay&&(p.repeatDelay=fP(p.repeatDelay)),!d||!f||fT.current||!1===o.type)/**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */return function({keyframes:e,delay:t,onUpdate:n,onComplete:r}){let i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:fm,pause:fm,stop:fm,then:e=>(e(),Promise.resolve()),cancel:fm,complete:fm});return t?pM({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}(p);/**
         * Animate via WAAPI if possible.
         */if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){let n=function(e,t,{onUpdate:n,onComplete:r,...i}){let o,a;let s=fV.waapi()&&pL.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type;if(!s)return!1;/**
     * TODO: Unify with js/index
     */let l=!1,u=()=>{a=new Promise(e=>{o=e})};// Create the first finished promise
    u();let{keyframes:c,duration:d=300,ease:f,times:p}=i;/**
     * If this animation needs pre-generated keyframes then generate.
     */if(pR(t,i)){let e=pM({...i,repeat:0,delay:0}),t={done:!1,value:c[0]},n=[],r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;p=void 0,c=n,d=r-10,f="linear"}let h=function(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){let u={[t]:n};l&&(u.offset=l);let c=function e(t){if(t)return fA(t)?fM(t):Array.isArray(t)?t.map(e):fL[t]}(s);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,c,{...i,duration:d,/**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */ease:f,times:p}),m=()=>h.cancel(),g=()=>{fd.update(m),o(),u()};/**
     * Animation interrupt callback.
     */return(/**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */h.onfinish=()=>{e.set(function(e,{repeat:t,repeatType:n="loop"}){let r=t&&"loop"!==n&&t%2==1?0:e.length-1;return e[r]}(c,i)),r&&r(),g()},{then:(e,t)=>a.then(e,t),get time(){return fC(h.currentTime||0)},set time(newTime){h.currentTime=fP(newTime)},get speed(){return h.playbackRate},set speed(newSpeed){h.playbackRate=newSpeed},get duration(){return fC(d)},play:()=>{l||(h.play(),ff(m))},pause:()=>h.pause(),stop:()=>{if(l=!0,"idle"===h.playState)return;/**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */let{currentTime:t}=h;if(t){let n=pM({...i,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}g()},complete:()=>h.finish(),cancel:g})}(t,e,p);if(n)return n}/**
         * If we didn't create an accelerated animation, create a JS animation
         */return pM(p)};function pY(e){return!!(de(e)&&e.add)}/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */const pq=e=>/^\-?\d*\.?\d+$/.test(e);function pX(e,t){-1===e.indexOf(t)&&e.push(t)}function pQ(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}class pZ{constructor(){this.subscriptions=[]}add(e){return pX(this.subscriptions,e),()=>pQ(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(1===r)/**
             * If there's only a single handler we can just call it without invoking a loop.
             */this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){/**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const pJ=e=>!isNaN(parseFloat(e));/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */class p0{/**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */constructor(e,t={}){/**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */this.version="10.12.16",/**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */this.timeDelta=0,/**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */this.lastUpdated=0,/**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */this.canTrackVelocity=!1,/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},this.updateAndNotify=(e,t=!0)=>{this.prev=this.current,this.current=e;// Update timestamp
let{delta:n,timestamp:r}=fr;this.lastUpdated!==r&&(this.timeDelta=n,this.lastUpdated=r,fd.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},/**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.scheduleVelocityCheck=()=>fd.postRender(this.velocityCheck),/**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.velocityCheck=({timestamp:e})=>{e!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=pJ(this.current),this.owner=t.owner}/**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new pZ);let n=this.events[e].add(t);return"change"===e?()=>{n(),fd.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}/**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}/**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}/**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}/**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */get(){return this.current}/**
     * @public
     */getPrevious(){return this.prev}/**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */getVelocity(){var e,t;// This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
return this.canTrackVelocity?(e=parseFloat(this.current)-parseFloat(this.prev),(t=this.timeDelta)?e*(1e3/t):0):0}/**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}/**
     * Stop the currently active animation.
     *
     * @public
     */stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}/**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}/**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function p1(e,t){return new p0(e,t)}/**
 * Tests a provided value against a ValueType
 */const p2=e=>t=>t.test(e),p3=[du,dx,db,dy,dE,dw,{test:e=>"auto"===e,parse:e=>e}],p4=e=>p3.find(p2(e)),p5=[...p3,f3,pu],p6=e=>p5.find(p2(e));function p8(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t),l=e.getValue("willChange");r&&(o=r);let u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t),i=s[t];if(!r||void 0===i||c&&/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */function({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,r}(c,t))continue;let a={delay:n,elapsed:0,...o};/**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */if(window.HandoffAppearAnimations&&!r.hasAnimated){let n=e.getProps()[fk];n&&(a.elapsed=window.HandoffAppearAnimations(n,t,r,fd))}r.start(pK(t,r,i,e.shouldReduceMotion&&c7.has(t)?{type:!1}:a));let d=r.animation;pY(l)&&(l.add(t),d.then(()=>l.remove(t))),u.push(d)}return a&&Promise.all(u).then(()=>{a&&function(e,t){let n=fS(e,t),{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};for(let t in o={...o,...r}){let n=dq(o[t]);e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,p1(n))}}(e,a)}),u}function p7(e,t,n={}){let r=fS(e,t,n.custom),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);/**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */let o=r?()=>Promise.all(p8(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t,n=0,r=0,i=1,o){let a=[],s=(e.variantChildren.size-1)*r,l=1===i?(e=0)=>e*r:(e=0)=>s-e*r;return Array.from(e.variantChildren).sort(p9).forEach((e,r)=>{e.notify("AnimationStart",t),a.push(p7(e,t,{...o,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,o+r,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(!s)return Promise.all([o(),a(n.delay)]);{let[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then(()=>t())}}function p9(e,t){return e.sortNodePosition(t)}const he=[...cY].reverse(),ht=cY.length;function hn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let hr=0;const hi=(e,t)=>Math.abs(e-t);/**
 * @internal
 */class ho{constructor(e,t,{transformPagePoint:n}={}){// If we have more than one touch, don't start detecting this gesture
if(/**
         * @internal
         */this.startEvent=null,/**
         * @internal
         */this.lastMoveEvent=null,/**
         * @internal
         */this.lastMoveEventInfo=null,/**
         * @internal
         */this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=hl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){// Multi-dimensional
let n=hi(e.x,t.x),r=hi(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=fr;this.history.push({...r,timestamp:i});let{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ha(t,this.transformPagePoint),fd.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let{onEnd:n,onSessionEnd:r}=this.handlers,i=hl("pointercancel"===e.type?this.lastMoveEventInfo:ha(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,i),r&&r(e,i)},!d1(e))return;this.handlers=t,this.transformPagePoint=n;let r=d2(e),i=ha(r,this.transformPagePoint),{point:o}=i,{timestamp:a}=fr;this.history=[{...o,timestamp:a}];let{onSessionStart:s}=t;s&&s(e,hl(i,this.history)),this.removeListeners=d6(d4(window,"pointermove",this.handlePointerMove),d4(window,"pointerup",this.handlePointerUp),d4(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ff(this.updatePoint)}}function ha(e,t){return t?{point:t(e.point)}:e}function hs(e,t){return{x:e.x-t.x,y:e.y-t.y}}function hl({point:e},t){return{point:e,delta:hs(e,hu(t)),offset:hs(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=hu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>fP(.1)));)n--;if(!r)return{x:0,y:0};let o=fC(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};let a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}(t,0)}}function hu(e){return e[e.length-1]}function hc(e){return e.max-e.min}function hd(e,t=0,n=.01){return Math.abs(e-t)<=n}function hf(e,t,n,r=.5){e.origin=r,e.originPoint=f4(t.min,t.max,e.origin),e.scale=hc(n)/hc(t),(hd(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=f4(n.min,n.max,e.origin)-e.originPoint,(hd(e.translate)||isNaN(e.translate))&&(e.translate=0)}function hp(e,t,n,r){hf(e.x,t.x,n.x,r?r.originX:void 0),hf(e.y,t.y,n.y,r?r.originY:void 0)}function hh(e,t,n){e.min=n.min+t.min,e.max=e.min+hc(t)}function hm(e,t,n){e.min=t.min-n.min,e.max=e.min+hc(t)}function hg(e,t,n){hm(e.x,t.x,n.x),hm(e.y,t.y,n.y)}/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */function hv(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */function hy(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function hb(e,t,n){return{min:hx(e,t),max:hx(e,n)}}function hx(e,t){return"number"==typeof e?e:e[t]||0}const hw=()=>({translate:0,scale:1,origin:0,originPoint:0}),hE=()=>({x:hw(),y:hw()}),hS=()=>({min:0,max:0}),hk=()=>({x:hS(),y:hS()});function hP(e){return[e("x"),e("y")]}/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */function hC({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function hT(e){return void 0===e||1===e}function hA({scale:e,scaleX:t,scaleY:n}){return!hT(e)||!hT(t)||!hT(n)}function hM(e){return hA(e)||hL(e)||e.z||e.rotate||e.rotateX||e.rotateY}function hL(e){var t,n;return(t=e.x)&&"0%"!==t||(n=e.y)&&"0%"!==n}/**
 * Applies a translate/scale delta to a point
 */function hR(e,t,n,r,i){return void 0!==i&&(e=r+i*(e-r)),r+n*(e-r)+t}/**
 * Applies a translate/scale delta to an axis
 */function hD(e,t=0,n=1,r,i){e.min=hR(e.min,t,n,r,i),e.max=hR(e.max,t,n,r,i)}/**
 * Applies a translate/scale delta to a box
 */function hV(e,{x:t,y:n}){hD(e.x,t.translate,t.scale,t.originPoint),hD(e.y,n.translate,n.scale,n.originPoint)}function hO(e){return Number.isInteger(e)?e:e>1.0000000000001||e<.999999999999?e:1}function hN(e,t){e.min=e.min+t,e.max=e.max+t}/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */function hF(e,t,[n,r,i]){let o=void 0!==t[i]?t[i]:.5,a=f4(e.min,e.max,o);// Apply the axis delta to the final axis
hD(e,t[n],t[r],a,t.scale)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const hI=["x","scaleX","originX"],hz=["y","scaleY","originY"];/**
 * Apply a transform to a box from the latest resolved motion values.
 */function hj(e,t){hF(e.x,t,hI),hF(e.y,t,hz)}function hB(e,t){return hC(/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */function(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const h_=new WeakMap;/**
 *
 */// let latestPointerEvent: PointerEvent
class hU{constructor(e){// This is a reference to the global drag gesture lock, ensuring only one component
// can "capture" the drag of one or both axes.
// TODO: Look into moving this into pansession?
this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},/**
         * The permitted boundaries of travel, in pixels.
         */this.constraints=!1,this.hasMutatedConstraints=!1,/**
         * The per-axis resolved elastic values.
         */this.elastic=hk(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){/**
         * Don't start dragging if this component is exiting
         */let{presenceContext:n}=this.visualElement;n&&!1===n.isPresent||(this.panSession=new ho(e,{onSessionStart:e=>{// Stop any animations on both axis values immediately. This allows the user to throw and catch
// the component.
this.stopAnimation(),t&&this.snapToCursor(d2(e,"page").point)},onStart:(e,t)=>{// Attempt to grab the global drag gesture lock - maybe make this part of PanSession
let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=fe(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hP(e=>{let t=this.getAxisMotionValue(e).get()||0;/**
                 * If the MotionValue is a percentage value convert to px
                 */if(db.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];if(r){let e=hc(r);t=e*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&fd.update(()=>i(e,t),!1,!0);let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{// latestPointerEvent = event
let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();// If we didn't successfully receive the gesture lock, early return.
if(!n&&!this.openGlobalLock)return;let{offset:a}=t;// Attempt to detect drag direction if directionLock is true
if(r&&null===this.currentDirection){this.currentDirection=/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */function(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}(a),null!==this.currentDirection&&i&&i(this.currentDirection);return}// Update each point with the latest position
this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),/**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */this.visualElement.render(),/**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t)},{transformPagePoint:this.visualElement.getTransformPagePoint()}))}stop(e,t){let n=this.isDragging;if(this.cancel(),!n)return;let{velocity:r}=t;this.startAnimation(r);let{onDragEnd:i}=this.getProps();i&&fd.update(()=>i(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){let{drag:r}=this.getProps();// If we're not dragging this axis, do an early return.
if(!n||!hW(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */function(e,{min:t,max:n},r){return void 0!==t&&e<t?e=r?f4(t,e,r.min):Math.max(e,t):void 0!==n&&e>n&&(e=r?f4(n,e,r.max):Math.min(e,n)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),{layout:n}=this.visualElement.projection||{},r=this.constraints;e&&cH(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */function(e,{top:t,left:n,bottom:r,right:i}){return{x:hv(e.x,n,i),y:hv(e.y,t,r)}}(n.layoutBox,e):this.constraints=!1,this.elastic=/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:hb(e,"left","right"),y:hb(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&hP(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */function(e,t){let n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!cH(t))return!1;let r=t.current;fm(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:i}=this.visualElement;// TODO
if(!i||!i.layout)return!1;let o=function(e,t,n){let r=hB(e,n),{scroll:i}=t;return i&&(hN(r.x,i.offset.x),hN(r.y,i.offset.y)),r}(r,i.root,this.visualElement.getTransformPagePoint()),a={x:hy((e=i.layout.layoutBox).x,o.x),y:hy(e.y,o.y)};/**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */if(n){let e=n(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=hC(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=hP(a=>{if(!hW(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});let u={type:"inertia",velocity:n?e[a]:0,bounceStiffness:r?200:1e6,bounceDamping:r?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};// If we're not animating on an externally-provided `MotionValue` we can use the
// component's animation controls which will handle interactions with whileHover (etc),
// otherwise we just have to animate the `MotionValue` itself.
return this.startAxisValueAnimation(a,u)});// Run all animations and then resolve the new drag constraints.
return Promise.all(l).then(a)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return n.start(pK(e,n,0,t))}stopAnimation(){hP(e=>this.getAxisMotionValue(e).stop())}/**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */getAxisMotionValue(e){let t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){hP(t=>{let{drag:n}=this.getProps();// If we're not dragging this axis, do an early return.
if(!hW(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-f4(n,o,.5))}})}/**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!cH(t)||!n||!this.constraints)return;/**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */this.stopAnimation();/**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */let r={x:0,y:0};hP(e=>{let t=this.getAxisMotionValue(e);if(t){let n=t.get();r[e]=/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */function(e,t){let n=.5,r=hc(e),i=hc(t);return i>r?n=pm(t.min,t.max-r,e.min):r>i&&(n=pm(e.min,e.max-i,t.min)),dl(0,1,n)}({min:n,max:n},this.constraints[e])}});/**
         * Update the layout of this element and resolve the latest drag constraints
         */let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),hP(t=>{if(!hW(t,e,null))return;/**
             * Calculate a new transform based on the previous box progress
             */let n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(f4(i,o,r[t]))})}addListeners(){if(!this.visualElement.current)return;h_.set(this.visualElement,this);let e=this.visualElement.current,t=d4(e,"pointerdown",e=>{let{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),n=()=>{let{dragConstraints:e}=this.getProps();cH(e)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),n();/**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */let o=d0(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(hP(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{o(),t(),i(),a&&a()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=.35,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function hW(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const h$=e=>(t,n)=>{e&&fd.update(()=>e(t,n))};var c=(u("e0W5i"),u("e0W5i"));/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */const hH={/**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */hasAnimatedSinceResize:!0,/**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */hasEverUpdated:!1};function hG(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */const hK={correct:(e,t)=>{if(!t.target)return e;/**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */if("string"==typeof e){if(!dx.test(e))return e;e=parseFloat(e)}/**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */let n=hG(e,t.target.x),r=hG(e,t.target.y);return`${n}% ${r}%`}};class hY extends /*@__PURE__*/n(c).Component{/**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;Object.assign(c6,hX),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),hH.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o&&(/**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent===i||(i?o.promote():o.relegate()||fd.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hq(e){let[t,r]=/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */function(){let e=(0,c.useContext)(c_);if(null===e)return[!0,null];let{isPresent:t,onExitComplete:n,register:r}=e,i=(0,c.useId)();return(0,c.useEffect)(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}(),i=(0,c.useContext)(c1);return /*@__PURE__*/n(c).createElement(hY,{...e,layoutGroup:i,switchLayoutGroup:(0,c.useContext)(c2),isPresent:t,safeToRemove:r})}const hX={borderRadius:{...hK,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hK,borderTopRightRadius:hK,borderBottomLeftRadius:hK,borderBottomRightRadius:hK,boxShadow:{correct:(e,{treeScale:t,projectionDelta:n})=>{let r=pu.parse(e);// TODO: Doesn't support multiple shadows
if(r.length>5)return e;let i=pu.createTransformer(e),o="number"!=typeof r[0]?1:0,a=n.x.scale*t.x,s=n.y.scale*t.y;r[0+o]/=a,r[1+o]/=s;/**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */let l=f4(a,s,.5);return"number"==typeof r[2+o]&&(r[2+o]/=l),"number"==typeof r[3+o]&&(r[3+o]/=l),i(r)}}},hQ=["TopLeft","TopRight","BottomLeft","BottomRight"],hZ=hQ.length,hJ=e=>"string"==typeof e?parseFloat(e):e,h0=e=>"number"==typeof e||dx.test(e);function h1(e,t){return void 0!==e[t]?e[t]:e.borderRadius}// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const h2=h4(0,.5,fW),h3=h4(.5,.95,fm);function h4(e,t,n){return r=>// Could replace ifs with clamp
    r<e?0:r>t?1:n(pm(e,t,r))}/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */function h5(e,t){e.min=t.min,e.max=t.max}/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */function h6(e,t){h5(e.x,t.x),h5(e.y,t.y)}/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */function h8(e,t,n,r,i){return e-=t,e=r+1/n*(e-r),void 0!==i&&(e=r+1/i*(e-r)),e}/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function h7(e,t,[n,r,i],o,a){!/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */function(e,t=0,n=1,r=.5,i,o=e,a=e){if(db.test(t)){t=parseFloat(t);let e=f4(a.min,a.max,t/100);t=e-a.min}if("number"!=typeof t)return;let s=f4(o.min,o.max,r);e===o&&(s-=t),e.min=h8(e.min,t,n,s,i),e.max=h8(e.max,t,n,s,i)}(e,t[n],t[r],t[i],t.scale,o,a)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const h9=["x","scaleX","originX"],me=["y","scaleY","originY"];/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function mt(e,t,n,r){h7(e.x,t,h9,n?n.x:void 0,r?r.x:void 0),h7(e.y,t,me,n?n.y:void 0,r?r.y:void 0)}function mn(e){return 0===e.translate&&1===e.scale}function mr(e){return mn(e.x)&&mn(e.y)}function mi(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function mo(e){return hc(e.x)/hc(e.y)}class ma{constructor(){this.members=[]}add(e){pX(this.members,e),e.scheduleRender()}remove(e){if(pQ(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let n=this.members.findIndex(t=>e===t);if(0===n)return!1;for(let e=n;e>=0;e--){let n=this.members[e];if(!1!==n.isPresent){t=n;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:r}=e.options;!1===r&&n.hide();/**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}/**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ms(e,t,n){let r="",i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(1!==t.x||1!==t.y)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}/**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */let a=e.x.scale*t.x,s=e.y.scale*t.y;return(1!==a||1!==s)&&(r+=`scale(${a}, ${s})`),r||"none"}const ml=(e,t)=>e.depth-t.depth;class mu{constructor(){this.children=[],this.isDirty=!1}add(e){pX(this.children,e),this.isDirty=!0}remove(e){pQ(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ml),this.isDirty=!1,this.children.forEach(e)}}const mc=["","X","Y","Z"];let md=0;/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */const mf={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function mp({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=null==t?void 0:t()){/**
             * A unique ID generated for every projection node.
             */this.id=md++,/**
             * An id that represents a unique session instigated by startUpdate.
             */this.animationId=0,/**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */this.children=new Set,/**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */this.options={},/**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */this.isTreeAnimating=!1,this.isAnimationBlocked=!1,/**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */this.isLayoutDirty=!1,/**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */this.isProjectionDirty=!1,/**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */this.isSharedProjectionDirty=!1,/**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */this.isTransformDirty=!1,/**
             * Block layout updates for instant layout transitions throughout the tree.
             */this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,/**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */this.isUpdating=!1,/**
             * If this is an SVG element we currently disable projection transforms
             */this.isSVG=!1,/**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */this.needsReset=!1,/**
             * Flags whether this node should have its transform reset prior to measuring.
             */this.shouldResetTransform=!1,/**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */this.treeScale={x:1,y:1},/**
             *
             */this.eventHandlers=new Map,this.hasTreeAnimated=!1,// Note: Currently only running on root node
this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},/**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */this.updateProjection=()=>{/**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */mf.totalNodes=mf.resolvedTargetDeltas=mf.recalculatedProjection=0,this.nodes.forEach(mg),this.nodes.forEach(mS),this.nodes.forEach(mk),this.nodes.forEach(mv),window.MotionDebug&&window.MotionDebug.record(mf)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,/**
             * Shared layout
             */// TODO Only running on root node
this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new mu)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new pZ),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}/**
         * Lifecycles
         */mount(t,n=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=t instanceof SVGElement&&"svg"!==t.tagName,this.instance=t;let{layoutId:r,layout:i,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||r)&&(this.isLayoutDirty=!0),e){let n;let r=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=/**
 * Timeout defined in ms
 */function(e,t){let n=performance.now(),r=({timestamp:i})=>{let o=i-n;o>=t&&(ff(r),e(o-t))};return fd.read(r,!0),()=>ff(r)}(r,250),hH.hasAnimatedSinceResize&&(hH.hasAnimatedSinceResize=!1,this.nodes.forEach(mE))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&o&&(r||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}// TODO: Check here if an animation exists
let i=this.options.transition||o.getDefaultTransition()||mL,{onLayoutAnimationStart:a,onLayoutAnimationComplete:s}=o.getProps(),l=!this.targetLayout||!mi(this.targetLayout,r)||n,u=!t&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...pG(i,"layout"),onPlay:a,onComplete:s};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||mE(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ff(this.updateProjection)}// only on the root
blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}// Note: currently only running on root node
startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mP),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;let e=this.isUpdateBlocked();// When doing an instant transition, we skip the layout update,
// but should still clean up the measurements so that the next
// snapshot could be taken correctly.
if(e){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(mb);return}this.isUpdating||this.nodes.forEach(mx),this.isUpdating=!1,/**
             * Write
             */this.nodes.forEach(mw),/**
             * Read ==================
             */// Update layout measurements of updated children
this.nodes.forEach(mh),/**
             * Write
             */// Notify listeners that the layout is updated
this.nodes.forEach(mm),this.clearAllSnapshots();/**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */let t=performance.now();fr.delta=dl(0,1e3/60,t-fr.timestamp),fr.timestamp=t,fr.isProcessing=!0,fs.update.process(fr),fs.preRender.process(fr),fs.render.process(fr),fr.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(my),this.sharedNodes.forEach(mC)}scheduleUpdateProjection(){fd.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){fd.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}/**
         * Update measurements
         */updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(// TODO: Incorporate into a forwarded scroll offset
this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;/**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++){let t=this.path[e];t.updateScroll()}let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=hk(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!mr(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||hM(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let n=this.measurePageBox(),r=this.removeElementScroll(n);return e&&(r=this.removeTransform(r)),mR((t=r).x),mR(t.y),{animationId:this.root.animationId,measuredBox:n,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return hk();let t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(hN(t.x,n.offset.x),hN(t.y,n.offset.y)),t}removeElementScroll(e){let t=hk();h6(t,e);/**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:o}=r;if(r!==this.root&&i&&o.layoutScroll){/**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */if(i.isRoot){h6(t,e);let{scroll:n}=this.root;/**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */n&&(hN(t.x,-n.offset.x),hN(t.y,-n.offset.y))}hN(t.x,i.offset.x),hN(t.y,i.offset.y)}}return t}applyTransform(e,t=!1){let n=hk();h6(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&hj(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),hM(r.latestValues)&&hj(n,r.latestValues)}return hM(this.latestValues)&&hj(n,this.latestValues),n}removeTransform(e){let t=hk();h6(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!hM(n.latestValues))continue;hA(n.latestValues)&&n.updateSnapshot();let r=hk(),i=n.measurePageBox();h6(r,i),mt(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return hM(this.latestValues)&&mt(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==fr.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,n,r,i;/**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let a=!!this.resumingFrom||this!==o,s=!(e||a&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget);if(s)return;let{layout:l,layoutId:u}=this.options;/**
             * If we have no layout, we can't perform projection, so early return
             */if(this.layout&&(l||u)){/**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */// TODO If this is unsuccessful this currently happens every frame
if(this.resolvedRelativeTargetAt=fr.timestamp,!this.targetDelta&&!this.relativeTarget){// TODO: This is a semi-repetition of further down this function, make DRY
let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=hk(),this.relativeTargetOrigin=hk(),hg(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),h6(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */if(this.relativeTarget||this.targetDelta){/**
             * If we've been told to attempt to resolve a relative target, do so.
             */if((this.target||(this.target=hk(),this.targetWithTransforms=hk()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),n=this.target,r=this.relativeTarget,i=this.relativeParent.target,hh(n.x,r.x,i.x),hh(n.y,r.y,i.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):h6(this.target,this.layout.layoutBox),hV(this.target,this.targetDelta)):h6(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=hk(),this.relativeTargetOrigin=hk(),hg(this.relativeTargetOrigin,this.target,e.target),h6(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * Increase debug counter for resolved target deltas
             */mf.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||hA(this.parent.latestValues)||hL(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),n=!!this.resumingFrom||this!==t,r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===fr.timestamp&&(r=!1),r)return;let{layout:i,layoutId:o}=this.options;if(/**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||o))return;h6(this.layoutCorrected,this.layout.layoutBox);/**
             * Record previous tree scales before updating.
             */let a=this.treeScale.x,s=this.treeScale.y;!/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */function(e,t,n,r=!1){let i,o;let a=n.length;if(a){// Reset the treeScale
t.x=t.y=1;for(let s=0;s<a;s++){o=(i=n[s]).projectionDelta;/**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */let a=i.instance;(!a||!a.style||"contents"!==a.style.display)&&(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&hj(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(// Incoporate each ancestor's scale into a culmulative treeScale for this component
t.x*=o.x.scale,t.y*=o.y.scale,// Apply each ancestor's calculated delta into this component's recorded layout box
hV(e,o)),r&&hM(i.latestValues)&&hj(e,i.latestValues))}/**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */t.x=hO(t.x),t.y=hO(t.y)}}(this.layoutCorrected,this.treeScale,this.path,n),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox);let{target:l}=t;if(!l){/**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */this.projectionTransform&&(this.projectionDelta=hE(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=hE(),this.projectionDeltaWithTransform=hE());let u=this.projectionTransform;hp(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=ms(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==a||this.treeScale.y!==s)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),/**
             * Increase debug counter for recalculated projections
             */mf.recalculatedProjection++}hide(){this.isVisible=!1;// TODO: Schedule render
}show(){this.isVisible=!0;// TODO: Schedule render
}scheduleRender(e=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e,t=!1){let n;let r=this.snapshot,i=r?r.latestValues:{},o={...this.latestValues},a=hE();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=hk(),l=r?r.source:void 0,u=this.layout?this.layout.source:void 0,c=l!==u,d=this.getStack(),f=!d||d.members.length<=1,p=!!(c&&!f&&!0===this.options.crossfade&&!this.path.some(mM));this.animationProgress=0,this.mixTargetDelta=t=>{var r,l;let u=t/1e3;mT(a.x,e.x,u),mT(a.y,e.y,u),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hg(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),r=this.relativeTarget,l=this.relativeTargetOrigin,mA(r.x,l.x,s.x,u),mA(r.y,l.y,s.y,u),n&&mi(this.relativeTarget,n)&&(this.isProjectionDirty=!1),n||(n=hk()),h6(n,this.relativeTarget)),c&&(this.animationValues=o,function(e,t,n,r,i,o){i?(e.opacity=f4(0,void 0!==n.opacity?n.opacity:1,h2(r)),e.opacityExit=f4(void 0!==t.opacity?t.opacity:1,0,h3(r))):o&&(e.opacity=f4(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));/**
     * Mix border radius
     */for(let i=0;i<hZ;i++){let o=`border${hQ[i]}Radius`,a=h1(t,o),s=h1(n,o);if(void 0===a&&void 0===s)continue;a||(a=0),s||(s=0);let l=0===a||0===s||h0(a)===h0(s);l?(e[o]=Math.max(f4(hJ(a),hJ(s),r),0),(db.test(s)||db.test(a))&&(e[o]+="%")):e[o]=s}/**
     * Mix rotation
     */(t.rotate||n.rotate)&&(e.rotate=f4(t.rotate||0,n.rotate||0,r))}(o,i,this.latestValues,u,p,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=u},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ff(this.pendingAnimation),this.pendingAnimation=void 0),/**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */this.pendingAnimation=fd.update(()=>{hH.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){let r=de(e)?e:p1(e);return r.start(pK("",r,1e3,n)),r.animation}(0,0,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){/**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */if(this!==e&&this.layout&&r&&mD(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||hk();let t=hc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=hc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}h6(t,n),hj(t,i),hp(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ma);let n=this.sharedNodes.get(e);n.add(t);let r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){let{visualElement:e}=this.options;if(!e)return;// If there's no detected rotation values, we can early return without a forced render.
let t=!1,{latestValues:n}=e;// If there's no rotation values, we don't need to do any more.
if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;let r={};// Check the rotate value of all axes and reset to 0
for(let t=0;t<mc.length;t++){let i="rotate"+mc[t];// Record the rotation and then temporarily set it to 0
n[i]&&(r[i]=n[i],e.setStaticValue(i,0))}// Put back all the values we reset
for(let t in // Force a render of this element to apply the transform with all rotations
// set to 0.
e.render(),r)e.setStaticValue(t,r[t]);// Schedule a render for the next frame. This ensures we won't visually
// see the element with the reset rotate value applied.
e.scheduleRender()}getProjectionStyles(e={}){var t,n;// TODO: Return lifecycle-persistent object
let r={};if(!this.instance||this.isSVG)return r;if(!this.isVisible)return{visibility:"hidden"};r.visibility="";let i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=dX(e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;let o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=dX(e.pointerEvents)||""),this.hasProjected&&!hM(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}let a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=ms(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));let{x:s,y:l}=this.projectionDelta;/**
             * Apply scale correction
             */for(let e in r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?/**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:/**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0,c6){if(void 0===a[e])continue;let{correct:t,applyTo:n}=c6[e],i="none"===r.transform?a[e]:t(a[e],o);if(n){let e=n.length;for(let t=0;t<e;t++)r[n[t]]=i}else r[e]=i}return this.options.layoutId&&(r.pointerEvents=o===this?dX(e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}// Only run on root
resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(mb),this.root.sharedNodes.clear()}}}function mh(e){e.updateLayout()}function mm(e){var t;let n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;// TODO Maybe we want to also resize the layout snapshot so we don't trigger
// animations for instance if layout="size" and an element has only changed position
"size"===i?hP(e=>{let r=o?n.measuredBox[e]:n.layoutBox[e],i=hc(r);r.min=t[e].min,r.max=r.min+i}):mD(i,n.layoutBox,t)&&hP(r=>{let i=o?n.measuredBox[r]:n.layoutBox[r],a=hc(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});let a=hE();hp(a,t,n.layoutBox);let s=hE();o?hp(s,e.applyTransform(r,!0),n.measuredBox):hp(s,t,n.layoutBox);let l=!mr(a),u=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();/**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */if(r&&!r.resumeFrom){let{snapshot:i,layout:o}=r;if(i&&o){let a=hk();hg(a,n.layoutBox,i.layoutBox);let s=hk();hg(s,t,o.layoutBox),mi(a,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}/**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */e.options.transition=void 0}function mg(e){/**
     * Increase debug counter for nodes encountered this frame
     */mf.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),/**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function mv(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function my(e){e.clearSnapshot()}function mb(e){e.clearMeasurements()}function mx(e){e.isLayoutDirty=!1}function mw(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function mE(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function mS(e){e.resolveTargetDelta()}function mk(e){e.calcProjection()}function mP(e){e.resetRotation()}function mC(e){e.removeLeadSnapshot()}function mT(e,t,n){e.translate=f4(t.translate,0,n),e.scale=f4(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function mA(e,t,n,r){e.min=f4(t.min,n.min,r),e.max=f4(t.max,n.max,r)}function mM(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const mL={duration:.45,ease:[.4,0,.1,1]};function mR(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function mD(e,t,n){return"position"===e||"preserve-aspect"===e&&!hd(mo(t),mo(n),.2)}const mV=mp({attachResizeListener:(e,t)=>d0(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),mO={current:void 0},mN=mp({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!mO.current){let e=new mV({});e.mount(window),e.setOptions({layoutScroll:!0}),mO.current=e}return mO.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position}),mF=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function mI(e,t,n=1){fm(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[r,i]=function(e){let t=mF.exec(e);if(!t)return[,];let[,n,r]=t;return[n,r]}(e);// No CSS variable detected
if(!r)return;// Attempt to read this CSS variable off the element
let o=window.getComputedStyle(t).getPropertyValue(r);return o?o.trim():da(i)?mI(i,t,n+1):i}const mz=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),mj=e=>mz.has(e),mB=e=>Object.keys(e).some(mj),m_=e=>e===du||e===dx,mU=(e,t)=>parseFloat(e.split(", ")[t]),mW=(e,t)=>(n,{transform:r})=>{if("none"===r||!r)return 0;let i=r.match(/^matrix3d\((.+)\)$/);if(i)return mU(i[1],t);{let t=r.match(/^matrix\((.+)\)$/);return t?mU(t[1],e):0}},m$=new Set(["x","y","z"]),mH=c8.filter(e=>!m$.has(e)),mG={// Dimensions
width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),// Transform
x:mW(4,13),y:mW(5,14)},mK=(e,t,n)=>{let r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),/**
     * Record origins before we render and update styles
     */n.forEach(e=>{s[e]=mG[e](r,o)}),// Apply the latest values (as set in checkAndConvertChangedValueTypes)
t.render();let l=t.measureViewportBox();return n.forEach(n=>{// Restore styles to their **calculated computed style**, not their actual
// originally set style. This allows us to animate between equivalent pixel units.
let r=t.getValue(n);r&&r.jump(s[n]),e[n]=mG[n](l,o)}),e},mY=(e,t,n={},r={})=>{t={...t},r={...r};let i=Object.keys(t).filter(mj),o=[],a=!1,s=[];if(i.forEach(i=>{let l;let u=e.getValue(i);if(!e.hasValue(i))return;let c=n[i],d=p4(c),f=t[i];// TODO: The current implementation of this basically throws an error
// if you try and do value conversion via keyframes. There's probably
// a way of doing this but the performance implications would need greater scrutiny,
// as it'd be doing multiple resize-remeasure operations.
if(dK(f)){let e=f.length,t=null===f[0]?1:0;d=p4(c=f[t]);for(let n=t;/**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */n<e&&null!==f[n];n++)l?fm(p4(f[n])===l,"All keyframes must be of the same type"):fm((l=p4(f[n]))===d||m_(d)&&m_(l),"Keyframes must be of the same dimension as the current value")}else l=p4(f);if(d!==l){// If they're both just number or px, convert them both to numbers rather than
// relying on resize/remeasure to convert (which is wasteful in this situation)
if(m_(d)&&m_(l)){let e=u.get();"string"==typeof e&&u.set(parseFloat(e)),"string"==typeof f?t[i]=parseFloat(f):Array.isArray(f)&&l===dx&&(t[i]=f.map(parseFloat))}else(null==d?void 0:d.transform)&&(null==l?void 0:l.transform)&&(0===c||0===f)?0===c?u.set(l.transform(c)):t[i]=d.transform(f):(a||(o=function(e){let t=[];return mH.forEach(n=>{let r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),a=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],u.jump(f))}}),!s.length)return{target:t,transitionEnd:r};{let n=s.indexOf("height")>=0?window.pageYOffset:null,i=mK(t,e,s);return o.length&&o.forEach(([t,n])=>{e.getValue(t).set(n)}),// Reapply original values
e.render(),cU&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}},mq=(e,t,n,r)=>{var i,o;let a=/**
 * Resolve CSS variables from
 *
 * @internal
 */function(e,{...t},n){let r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};// Cycle through every target property and resolve CSS variables. Currently
// we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
for(let i in n&&(n={...n}),// Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
e.values.forEach(e=>{let t=e.get();if(!da(t))return;let n=mI(t,r);n&&e.set(n)}),t){let e=t[i];if(!da(e))continue;let o=mI(e,r);o&&(// Clone target if it hasn't already been
t[i]=o,n||(n={}),void 0===n[i]&&(n[i]=e))}return{target:t,transitionEnd:n}}(e,t,r);return t=a.target,r=a.transitionEnd,i=t,o=r,mB(i)?mY(e,i,n,o):{target:i,transitionEnd:o}},mX={current:null},mQ={current:!1},mZ=new WeakMap,mJ=Object.keys(c0),m0=mJ.length,m1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],m2=cq.length;/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */class m3{constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,visualState:i},o={}){/**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */this.current=null,/**
         * A set containing references to this VisualElement's children.
         */this.children=new Set,/**
         * Determine what role this visual element should take in the variant tree.
         */this.isVariantNode=!1,this.isControllingVariants=!1,/**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */this.shouldReduceMotion=null,/**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */this.values=new Map,/**
         * Cleanup functions for active features (hover/tap/exit etc)
         */this.features={},/**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */this.valueSubscriptions=new Map,/**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */this.prevMotionValues={},/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},/**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>fd.render(this.render,!1,!0);let{latestValues:a,renderState:s}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=s,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=cX(t),this.isVariantNode=cQ(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);/**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{});for(let e in u){let t=u[e];void 0!==a[e]&&de(t)&&(t.set(a[e],!1),pY(l)&&l.add(e))}}/**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,mZ.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),mQ.current||function(){if(mQ.current=!0,cU){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>mX.current=e.matches;e.addListener(t),t()}else mX.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||mX.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in mZ.delete(this.current),this.projection&&this.projection.unmount(),ff(this.notifyUpdate),ff(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){let n=c7.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&fd.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i()})}sortNodePosition(e){return(/**
         * If these nodes aren't even of the same type we can't compare their depth.
         */this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0)}loadFeatures({children:e,...t},n,r,i){let o,a;for(let e=0;e<m0;e++){let n=mJ[e],{isEnabled:r,Feature:i,ProjectionNode:s,MeasureLayout:l}=c0[n];s&&(o=s),r(t)&&(!this.features[n]&&i&&(this.features[n]=new i(this)),l&&(a=l))}if(!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);let{layoutId:e,layout:n,drag:r,dragConstraints:a,layoutScroll:s,layoutRoot:l}=t;this.projection.setOptions({layoutId:e,layout:n,alwaysMeasureLayout:!!r||a&&cH(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),/**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */animationType:"string"==typeof n?n:"both",initialPromotionConfig:i,layoutScroll:s,layoutRoot:l})}return a}updateFeatures(){for(let e in this.features){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}/**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):hk()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}/**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */makeTargetAnimatable(e,t=!0){return this.makeTargetAnimatableFromInstance(e,this.props,t)}/**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;/**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */for(let t=0;t<m1.length;t++){let n=m1[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e["on"+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=function(e,t,n){let{willChange:r}=t;for(let i in t){let o=t[i],a=n[i];if(de(o))/**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */e.addValue(i,o),pY(r)&&r.add(i);else if(de(a))/**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */e.addValue(i,p1(o,{owner:e})),pY(r)&&r.remove(i);else if(a!==o){/**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */if(e.hasValue(i)){let t=e.getValue(i);// TODO: Only update values that aren't being animated or even looked at
t.hasAnimated||t.set(o)}else{let t=e.getStaticValue(i);e.addValue(i,p1(void 0!==t?t:o,{owner:e}))}}}// Handle removed values
for(let r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}/**
     * Returns the variant definition with a given name.
     */getVariant(e){return this.props.variants?this.props.variants[e]:void 0}/**
     * Returns the defined default transition on this component.
     */getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<m2;e++){let n=cq[e],r=this.props[n];(cG(r)||!1===r)&&(t[n]=r)}return t}/**
     * Add a child visual element to our set of children.
     */addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}/**
     * Add a motion value and bind it to this visual element.
     */addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}/**
     * Remove a motion value and unbind any active subscriptions.
     */removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}/**
     * Check whether we have a motion value for this key
     */hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=p1(t,{owner:this}),this.addValue(e,n)),n}/**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */readValue(e){return void 0===this.latestValues[e]&&this.current?this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}/**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */setBaseTarget(e,t){this.baseTarget[e]=t}/**
     * Find the base target for a value thats been removed from all animation
     * props.
     */getBaseTarget(e){var t;let{initial:n}=this.props,r="string"==typeof n||"object"==typeof n?null===(t=dG(this.props,n))||void 0===t?void 0:t[e]:void 0;/**
         * If this value still exists in the current initial variant, read that.
         */if(n&&void 0!==r)return r;/**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */let i=this.getBaseTargetFromProps(this.props,e);return void 0===i||de(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new pZ),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class m4 extends m3{sortInstanceNodePosition(e,t){/**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...n},{transformValues:r},i){let o=function(e,t,n){let r={};for(let i in e){let e=function(e,t){if(!t)return;let n=t[e]||t.default||t;return n.from}(i,t);if(void 0!==e)r[i]=e;else{let e=n.getValue(i);e&&(r[i]=e.get())}}return r}(n,e||{},this);if(r&&(t&&(t=r(t)),n&&(n=r(n)),o&&(o=r(o))),i){!function(e,t,n){var r,i;let o=Object.keys(t).filter(t=>!e.hasValue(t)),a=o.length;if(a)for(let s=0;s<a;s++){let a=o[s],l=t[a],u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(i=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==i?i:t[a]),null!=u&&("string"==typeof u&&(pq(u)||pH(u))?u=parseFloat(u):!p6(u)&&pu.test(l)&&(u=p$(a,l)),e.addValue(a,p1(u,{owner:e})),void 0===n[a]&&(n[a]=u),null!==u&&e.setBaseTarget(a,u))}}(this,n,o);let e=mq(this,n,o,t);t=e.transitionEnd,n=e.target}return{transition:e,transitionEnd:t,...n}}}class m5 extends m4{readValueFromInstance(e,t){if(c7.has(t)){let e=pW(t);return e&&e.default||0}{let n=window.getComputedStyle(e),r=(di(t)?n.getPropertyValue(t):n[t])||0;return"string"==typeof r?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return hB(e,t)}build(e,t,n,r){dC(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return d$(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;de(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){d_(e,t,n,r)}}class m6 extends m4{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(c7.has(t)){let e=pW(t);return e&&e.default||0}return t=dU.has(t)?t:dB(t),e.getAttribute(t)}measureInstanceViewportBox(){return hk()}scrapeMotionValuesFromProps(e,t){return dH(e,t)}build(e,t,n,r){dF(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){dW(e,t,n,r)}mount(e){this.isSVGTag=dz(e.tagName),super.mount(e)}}const m8=(e,t)=>c5(e)?new m6(t,{enableHardwareAcceleration:!1}):new m5(t,{enableHardwareAcceleration:!0}),m7={animation:{Feature:class extends fn{/**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>(function(e,t,n={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t)){let i=t.map(t=>p7(e,t,n));r=Promise.all(i)}else if("string"==typeof t)r=p7(e,t,n);else{let i="function"==typeof t?fS(e,t,n.custom):t;r=Promise.all(p8(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))})(e,t,n))),n={animate:hn(!0),whileInView:hn(),whileHover:hn(),whileTap:hn(),whileDrag:hn(),whileFocus:hn(),exit:hn()},r=!0,i=(t,n)=>{let r=fS(e,n);if(r){let{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};/**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */function o(o,a){let s=e.getProps(),l=e.getVariantContext(!0)||{},u=[],c=new Set,d={},f=1/0;/**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */for(let t=0;t<ht;t++){var p;let h=he[t],m=n[h],g=void 0!==s[h]?s[h]:l[h],v=cG(g),y=h===a?m.isActive:null;!1===y&&(f=t);/**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */let b=g===l[h]&&g!==s[h]&&v;// Check if we can skip analysing this prop early
if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),/**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */m.protectedKeys={...d},!m.isActive&&null===y||// If we didn't and don't have any defined prop for this animation type
!g&&!m.prevProp||cK(g)||"boolean"==typeof g)continue;/**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */let x=(p=m.prevProp,"string"==typeof g?g!==p:!!Array.isArray(g)&&!fE(g,p)),w=x||// If we're making this variant active, we want to always make it active
h===a&&m.isActive&&!b&&v||// If we removed a higher-priority variant (i is in reverse order)
t>f&&v,E=Array.isArray(g)?g:[g],S=E.reduce(i,{});!1===y&&(S={});/**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */let{prevResolvedValues:k={}}=m,P={...k,...S},C=e=>{w=!0,c.delete(e),m.needsAnimating[e]=!0};for(let e in P){let t=S[e],n=k[e];// If we've already handled this we can just skip ahead
d.hasOwnProperty(e)||(t!==n?dK(t)&&dK(n)?!fE(t,n)||x?C(e):/**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */m.protectedKeys[e]=!0:void 0!==t?C(e):c.add(e):void 0!==t&&c.has(e)?/**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */C(e):/**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */m.protectedKeys[e]=!0)}/**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */m.prevProp=g,m.prevResolvedValues=S,m.isActive&&(d={...d,...S}),r&&e.blockInitialAnimation&&(w=!1),w&&!b&&u.push(...E.map(e=>({animation:e,options:{type:h,...o}})))}/**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */if(c.size){let t={};c.forEach(n=>{let r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)}),u.push({animation:t})}let h=!!u.length;return r&&!1===s.initial&&!e.manuallyAnimateOnMount&&(h=!1),r=!1,h?t(u):Promise.resolve()}return{animateChanges:o,setActive:/**
     * Change whether a certain animation type is active.
     */function(t,r,i){var a;// If the active state hasn't changed, we can safely do nothing here
if(n[t].isActive===r)return Promise.resolve();null===// Propagate active change to children
(a=e.variantChildren)||void 0===a||a.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;let s=o(i,t);for(let e in n)n[e].protectedKeys={};return s},setAnimateFunction:/**
     * This just allows us to inject mocked animation functions
     * @internal
     */function(n){t=n(e)},getState:()=>n}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();this.unmount(),cK(e)&&(this.unmount=e.subscribe(this.node))}/**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends fn{constructor(){super(...arguments),this.id=hr++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;let i=this.node.animationState.setActive("exit",!e,{custom:null!=n?n:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends fn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof r?r:fw[r]};return function(e,t,n){let r=function({root:e,...t}){let n=e||document;fy.has(n)||fy.set(n,{});let r=fy.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(fx,{root:e,...t})),r[i]}(t);return fv.set(e,n),r.observe(e),()=>{fv.delete(e),r.unobserve(e)}}(this.node.current,o,e=>{let{isIntersecting:t}=e;/**
             * If there's been no change in the viewport state, early return.
             */if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);/**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends fn{constructor(){super(...arguments),this.removeStartListeners=fm,this.removeEndListeners=fm,this.removeAccessibleListeners=fm,this.startPointerPress=(e,t)=>{if(this.removeEndListeners(),this.isPressing)return;let n=this.node.getProps(),r=d4(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;let{onTap:n,onTapCancel:r}=this.node.getProps();fd.update(()=>{/**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */fh(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)})},{passive:!(n.onTap||n.onPointerUp)}),i=d4(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=d6(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=d0(this.node.current,"keydown",e=>{"Enter"!==e.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=d0(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&fg("up",(e,t)=>{let{onTap:n}=this.node.getProps();n&&fd.update(()=>n(e,t))})}),fg("down",(e,t)=>{this.startPress(e,t)}))}),t=d0(this.node.current,"blur",()=>{this.isPressing&&fg("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=d6(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&fd.update(()=>n(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;let e=this.node.getProps();return e.whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ft()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:n}=this.node.getProps();n&&fd.update(()=>n(e,t))}mount(){let e=this.node.getProps(),t=d4(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=d0(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=d6(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends fn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;/**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=d6(d0(this.node.current,"focus",()=>this.onFocus()),d0(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends fn{mount(){this.unmount=d6(fp(this.node,!0),fp(this.node,!1))}unmount(){}}},pan:{Feature:class extends fn{constructor(){super(...arguments),this.removePointerDownListener=fm}onPointerDown(e){this.session=new ho(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:h$(e),onStart:h$(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&fd.update(()=>r(e,t))}}}mount(){this.removePointerDownListener=d4(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends fn{constructor(e){super(e),this.removeGroupControls=fm,this.removeListeners=fm,this.controls=new hU(e)}mount(){// If we've been provided a DragControls for manual control over the drag gesture,
// subscribe this component to it on mount.
let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fm}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:mN,MeasureLayout:hq},layout:{ProjectionNode:mN,MeasureLayout:hq}},m9=/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */function(e){function t(t,n={}){return(/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */function({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&function(e){for(let t in e)c0[t]={...c0[t],...e[t]}}(e);let o=(0,c.forwardRef)(function(o,a){var s;let l;let u={...(0,c.useContext)(cj),...o,layoutId:function({layoutId:e}){let t=(0,c.useContext)(c1).id;return t&&void 0!==e?t+"-"+e:e}(o)},{isStatic:d}=u,f=function(e){let{initial:t,animate:n}=function(e,t){if(cX(e)){let{initial:t,animate:n}=e;return{initial:!1===t||cG(t)?t:void 0,animate:cG(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,c.useContext)(cB));return(0,c.useMemo)(()=>({initial:t,animate:n}),[cZ(t),cZ(n)])}(o),p=r(o,d);if(!d&&cU){/**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */f.visualElement=function(e,t,n,r){let{visualElement:i}=(0,c.useContext)(cB),o=(0,c.useContext)(c$),a=(0,c.useContext)(c_),s=(0,c.useContext)(cj).reducedMotion,l=(0,c.useRef)();/**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:!!a&&!1===a.initial,reducedMotionConfig:s}));let u=l.current;(0,c.useInsertionEffect)(()=>{u&&u.update(n,a)}),cW(()=>{u&&u.render()}),(0,c.useEffect)(()=>{u&&u.updateFeatures()});/**
     * Ideally this function would always run in a useEffect.
     *
     * However, if we have optimised appear animations to handoff from,
     * it needs to happen synchronously to ensure there's no flash of
     * incorrect styles in the event of a hydration error.
     *
     * So if we detect a situtation where optimised appear animations
     * are running, we use useLayoutEffect to trigger animations.
     */let d=window.HandoffAppearAnimations?cW:c.useEffect;return d(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}(i,p,u,t);/**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */let n=(0,c.useContext)(c2),r=(0,c.useContext)(c$).strict;f.visualElement&&(l=f.visualElement.loadFeatures(u,r,e,n))}/**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */return c.createElement(cB.Provider,{value:f},l&&f.visualElement?c.createElement(l,{visualElement:f.visualElement,...u}):null,n(i,o,(s=f.visualElement,(0,c.useCallback)(e=>{e&&p.mount&&p.mount(e),s&&(e?s.mount(e):s.unmount()),a&&("function"==typeof a?a(e):cH(a)&&(a.current=e))},/**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */[s])),p,d,f.visualElement))});return o[c3]=i,o}(e(t,n)))}if("undefined"==typeof Proxy)return t;/**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */let n=new Map;return new Proxy(t,{/**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}((e,t)=>(function(e,{forwardMotionProps:t=!1},n,r){let i=c5(e)?dZ:dJ;return{...i,preloadedFeatures:n,useRender:function(e=!1){return(t,n,r,{latestValues:i},o)=>{let a=c5(t)?dj:dM,s=a(n,i,o,t),l=function(e,t,n){let r={};for(let i in e)/**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */("values"!==i||"object"!=typeof e.values)&&(dD(i)||!0===n&&dR(i)||!t&&!dR(i)||// If trying to use native HTML drag events, forward drag listeners
    e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"==typeof t,e),u={...l,...s,ref:r},{children:d}=n,f=(0,c.useMemo)(()=>de(d)?d.get():d,[d]);return(0,c.createElement)(t,{...u,children:f})}}(t),createVisualElement:r,Component:e}})(e,t,m7,m8));var c=u("e0W5i");const ge=()=>/*#__PURE__*/c.createElement(gt,null,/*#__PURE__*/c.createElement(rj,{size:16})),gt=rM.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #135843;
  color: #73ffd3;
  display: flex;
  align-items: center;
  justify-content: center;
`,gn=rM.div`
  position: relative;
  width: 100%;
  height: 100%;
`,gr=rM.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: max(16px, env(safe-area-inset-top));
  padding-bottom: 56px;
  background-color: #111;
`,gi=rM.div`
  display: flex;
  padding-bottom: 16px;
`,go=rM.div`
  width: 160px;
  height: 160px;
`,ga=rM.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`,gs=rM.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 1.6;
`,gl=rM.span`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`,gu=rM.span`
  font-size: 14px;
  color: #73ffd3;
`,gc=rM.span`
  font-size: 14px;
  color: #888;
`,gd=rM.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 0px -16px;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;

  & > button:first-of-type {
    margin-right: 16px;
  }
`,gf=rM.button`
  flex: 1;
  border: none;
  background-color: #222;
  color: #73ffd3;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  outline: none;

  &:active {
    background-color: #333;
  }

  & > span {
    margin-left: 8px;
  }
`,gp=rM.ul`
  padding: 0;
  margin: 0;
  flex: 1;
  overflow: auto;
  margin: 0px -16px;
`,gh=rM.li`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 16px;

  & > span {
    display: inline-flex;
    color: #888;
    padding-left: 4px;
    padding-right: 8px;
  }

  & > div {
    color: #fff;
    flex: 1;
    border-bottom: 1px solid #222;
    padding: 16px;
    padding-left: 0px;
  }
`,gm=rM.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`,gg=rM(m9.button)`
  max-width: 680px;
  outline: none;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  padding-bottom: max(8px, env(safe-area-inset-bottom));
  color: #fff;
  background-color: #222;
  box-shadow: -4px 0px 12px rgba(0, 0, 0, 0.5);

  &:active {
    background-color: #333;
  }
`,gv=rM.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
`,gy=rM.div`
  flex: 1;
  margin: 0px 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  text-align: left;
`;var gb=({album:e,currentSong:t,isPlayerOpen:n,onSongClick:r,onMiniPlayerClick:i})=>/*#__PURE__*/c.createElement(gn,null,/*#__PURE__*/c.createElement(gr,null,/*#__PURE__*/c.createElement(gi,null,/*#__PURE__*/c.createElement(go,null,/*#__PURE__*/c.createElement(ga,{src:e.image})),/*#__PURE__*/c.createElement(gs,null,/*#__PURE__*/c.createElement(gl,null,e.name),/*#__PURE__*/c.createElement(gu,null,e.artist),/*#__PURE__*/c.createElement(gc,null,e.genre," \xb7 ",e.year),/*#__PURE__*/c.createElement("div",{style:{flex:1}}),/*#__PURE__*/c.createElement(ge,null))),/*#__PURE__*/c.createElement(gd,null,/*#__PURE__*/c.createElement(gf,null,/*#__PURE__*/c.createElement(r$,{size:12}),/*#__PURE__*/c.createElement("span",null,"Play")),/*#__PURE__*/c.createElement(gf,null,/*#__PURE__*/c.createElement(rG,{size:14}),/*#__PURE__*/c.createElement("span",null,"Shuffle"))),/*#__PURE__*/c.createElement(gp,null,e.songs.map((e,t)=>/*#__PURE__*/c.createElement(gh,{key:e,onClick:()=>r(e)},/*#__PURE__*/c.createElement("span",null,t+1),/*#__PURE__*/c.createElement("div",null,e))))),!n&&/*#__PURE__*/c.createElement(gm,null,/*#__PURE__*/c.createElement(gg,{onClick:i},/*#__PURE__*/c.createElement(gv,{src:e.image}),/*#__PURE__*/c.createElement(gy,null,t),/*#__PURE__*/c.createElement(r$,{size:20}),/*#__PURE__*/c.createElement("div",{style:{width:24}}),/*#__PURE__*/c.createElement(r_,{size:20})))),c=u("e0W5i");const gx=rM.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 24px 16px 24px;
`,gw=rM.div`
  display: flex;
  flex-direction: column;
  flex: none;
`,gE=rM.div`
  position: relative;
  margin-bottom: 40px;
  flex: 1;
`,gS=rM.div`
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,gk=rM.img`
  display: block;
  height: 100%;
  max-height: 300px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.3);
  z-index: 999;
`,gP=rM.div`
  display: flex;
  align-items: center;
`,gC=rM.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.4;
`,gT=rM.span`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
`,gA=rM.div`
  font-size: 18px;
  color: #73ffd3;
`,gM=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
`,gL=rM.div`
  width: 100%;
  height: 3px;
  background-color: #333;
  margin-bottom: 4px;
  position: relative;
  border-radius: 1px;

  &:before {
    content: ' ';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: -2px;
    background-color: #666;
  }
`,gR=rM.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666;
  font-size: 12px;
`,gD=rM.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`,gV=rM.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: #fff;
  outline: none;

  &:active {
    background-color: #444;
  }
`,gO=rM.div`
  display: flex;
  align-items: center;
  color: #666;
`,gN=rM.input`
  appearance: none;
  width: 100%;
  height: 34px;
  flex: 1;
  margin: 0px 12px;
  padding: 32px 0px;
  background: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    background: #444;
    border-radius: 1px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    margin-top: -9px;
  }
`,gF=rM.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`;var gI=({song:e,album:t})=>/*#__PURE__*/c.createElement(gx,null,/*#__PURE__*/c.createElement(gE,null,/*#__PURE__*/c.createElement(gS,null,/*#__PURE__*/c.createElement(gk,{src:t.image}))),/*#__PURE__*/c.createElement(gw,null,/*#__PURE__*/c.createElement(gP,null,/*#__PURE__*/c.createElement(gC,null,/*#__PURE__*/c.createElement(gT,null,e),/*#__PURE__*/c.createElement(gA,null,t.artist)),/*#__PURE__*/c.createElement(ge,null)),/*#__PURE__*/c.createElement(gM,null,/*#__PURE__*/c.createElement(gL,null),/*#__PURE__*/c.createElement(gR,null,/*#__PURE__*/c.createElement("span",null,"0.00"),/*#__PURE__*/c.createElement("span",null,"-4.00"))),/*#__PURE__*/c.createElement(gD,null,/*#__PURE__*/c.createElement(gV,{onClick:()=>console.log("Prev song")},/*#__PURE__*/c.createElement(rz,{size:32})),/*#__PURE__*/c.createElement(gV,{onClick:()=>console.log("Play / Pause")},/*#__PURE__*/c.createElement(r$,{size:32})),/*#__PURE__*/c.createElement(gV,{onClick:()=>console.log("Next song")},/*#__PURE__*/c.createElement(r_,{size:32}))),/*#__PURE__*/c.createElement(gO,null,/*#__PURE__*/c.createElement(rY,{size:12}),/*#__PURE__*/c.createElement(gN,{type:"range"}),/*#__PURE__*/c.createElement(rq,{size:12})),/*#__PURE__*/c.createElement(gF,null,/*#__PURE__*/c.createElement(rB,{size:20,color:"#333"}),/*#__PURE__*/c.createElement(rH,{size:20,color:"#73ffd3"}),/*#__PURE__*/c.createElement(rU,{size:20,color:"#73ffd3"}))));const gz=rM.div`
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
`,gj=rM(cS)`
  margin: 0 auto;
  max-width: 680px;

  .react-modal-sheet-container {
    background-color: #222 !important;
  }

  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }

  .react-modal-sheet-drag-indicator {
    background-color: #666 !important;
  }
`;var gB=()=>{let[e,t]=c.useState(!1),[n,r]=c.useState(cz.songs[0]);return cL({when:e,from:"#111",to:"#000"}),cL({to:"#111"}),/*#__PURE__*/c.createElement(gz,null,/*#__PURE__*/c.createElement(gb,{album:cz,currentSong:n,isPlayerOpen:e,onMiniPlayerClick:()=>t(!0),onSongClick:r}),/*#__PURE__*/c.createElement(gj,{isOpen:e,onClose:()=>t(!1),rootId:"root"},/*#__PURE__*/c.createElement(cS.Container,null,/*#__PURE__*/c.createElement(cS.Header,null),/*#__PURE__*/c.createElement(cS.Content,null,/*#__PURE__*/c.createElement(gI,{album:cz,song:n}))),/*#__PURE__*/c.createElement(cS.Backdrop,null)))};function g_(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(e)}function gU(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function gW(e){return(0,rR.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function g$(e){let[t,n]=/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function(e,t,n){let[r,i]=(0,c.useState)(e||t),o=(0,c.useRef)(void 0!==e),a=void 0!==e;(0,c.useEffect)(()=>{let e=o.current;e!==a&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`),o.current=a},[a]);let s=a?e:r,l=(0,c.useCallback)((e,...t)=>{let r=(e,...t)=>{n&&!Object.is(s,e)&&n(e,...t),a||// We do not use a ref for this because we specifically _do_ want the value to
// reset every render, and assigning to a ref in render breaks aborted suspended renders.
// eslint-disable-next-line react-hooks/exhaustive-deps
(s=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((n,...i)=>{let o=e(a?s:n,...i);return(r(o,...t),a)?n:o})):(a||i(e),r(e,...t))},[a,s,n]);return[s,l]}(e.isOpen,e.defaultOpen||!1,e.onOpenChange),r=(0,c.useCallback)(()=>{n(!0)},[n]),i=(0,c.useCallback)(()=>{n(!1)},[n]),o=(0,c.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:r,close:i,toggle:o}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function gH(e,t){let n,{elementType:r="button",isDisabled:i,onPress:o,onPressStart:a,onPressEnd:s,onPressChange:l,preventFocusOnPress:u,allowFocusWhenDisabled:d,onClick:f,href:p,target:h,rel:m,type:g="button"}=e;n="button"===r?{type:g,disabled:i}:{role:"button",tabIndex:i?void 0:0,href:"a"===r&&i?void 0:p,target:"a"===r?h:void 0,type:"input"===r?g:void 0,disabled:"input"===r?i:void 0,"aria-disabled":i&&"input"!==r?i:void 0,rel:"a"===r?m:void 0};let{pressProps:v,isPressed:y}=eV({onPressStart:a,onPressEnd:s,onPressChange:l,onPress:o,isDisabled:i,preventFocusOnPress:u,ref:t}),{focusableProps:b}=function(e,t){let{focusProps:n}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e,o=(0,c.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0},[r,i]),a=e$(o),s=(0,c.useCallback)(e=>{// Double check that document.activeElement actually matches e.target in case a previously chained
// focus handler already moved focus somewhere else.
e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),i&&i(!0),a(e))},[i,n,a]);return{focusProps:{onFocus:!t&&(n||i||r)?s:void 0,onBlur:!t&&(r||i)?o:void 0}}}(e),{keyboardProps:r}={keyboardProps:e.isDisabled?{}:{onKeyDown:e4(e.onKeyDown),onKeyUp:e4(e.onKeyUp)}},i=J(n,r),o=function(e){let t=(0,c.useContext)(tp)||{};ey(t,e);// eslint-disable-next-line
let{ref:n,...r}=t;return r}(t),a=e.isDisabled?{}:o,s=(0,c.useRef)(e.autoFocus);return(0,c.useEffect)(()=>{s.current&&t.current&&e5(t.current),s.current=!1},[t]),{focusableProps:J({...i,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},a)}}(e,t);d&&(b.tabIndex=i?-1:b.tabIndex);let x=J(b,v,ei(e,{labelable:!0}));return{isPressed:y,buttonProps:J(n,x,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{f&&(f(e),console.warn("onClick is deprecated, please use onPress"))}})}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *//*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function gG(e,t){let n,r,{role:i="dialog"}=e,o=function(e=[]){let t=function(e){let[t,n]=(0,c.useState)(void 0),r=(0,c.useRef)(null),i=H(t),o=(0,c.useCallback)(e=>{r.current=e},[]);return Z.set(i,o),X(()=>()=>{Z.delete(i)},[i]),(0,c.useEffect)(()=>{let e=r.current;e&&(r.current=null,n(e))}),i}(),[n,r]=function(e){let[t,n]=(0,c.useState)(e),r=(0,c.useRef)(null),i=Q(()=>{// Run the generator to the next yield.
let e=r.current.next();// If the generator is done, reset the effect.
if(e.done){r.current=null;return}// If the value is the same as the current value,
// then continue to the next yield. Otherwise,
// set the value in state and wait for the next layout effect.
t===e.value?i():n(e.value)});X(()=>{// If there is an effect currently running, continue to the next yield.
r.current&&i()});let o=Q(e=>{r.current=e(t),i()});return[t,o]}(t),i=(0,c.useCallback)(()=>{r(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,r]);return X(i,[t,i,...e]),n}();o=e["aria-label"]?void 0:o;let a=(0,c.useRef)(!1);// We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
// on mount when inside an iframe, no matter which element we programmatically focus.
// See https://bugs.webkit.org/show_bug.cgi?id=211934.
// useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
// even without aria-modal on the dialog itself.
return(0,c.useEffect)(()=>{if(t.current&&!t.current.contains(document.activeElement)){e5(t.current);// Safari on iOS does not move the VoiceOver cursor to the dialog
// or announce that it has opened until it has rendered. A workaround
// is to wait for half a second, then blur and re-focus the dialog.
let e=setTimeout(()=>{document.activeElement===t.current&&(a.current=!0,t.current.blur(),e5(t.current),a.current=!1)},500);return()=>{clearTimeout(e)}}},[t]),X(()=>{null==r||r(!0)},[r=null==(n=(0,c.useContext)(tw))?void 0:n.setContain]),{dialogProps:{...ei(e,{labelable:!0}),role:i,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||o,// Prevent blur events from reaching useOverlay, which may cause
// popovers to close. Since focus is contained within the dialog,
// we don't want this to occur due to the above useEffect.
onBlur:e=>{a.current&&e.stopPropagation()}},titleProps:{id:o}}}var c=(u("e0W5i"),u("e0W5i"),u("e0W5i"),u("e0W5i"));const gK=rM.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: #fff;
  position: relative;
`,gY=rM.button`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`,gq=rM.span`
  font-weight: 600;
  font-size: 16px;
`;var gX=({sheetState:e,titleProps:t})=>{let n=c.useRef(null),r=gH({onPress:e.close,"aria-label":"Close bottom sheet"},n);return /*#__PURE__*/c.createElement(gK,null,/*#__PURE__*/c.createElement(gY,{...r.buttonProps,ref:n},/*#__PURE__*/c.createElement(gW,{size:24,color:"#fff"})),/*#__PURE__*/c.createElement(gq,t,"New Message"))},c=u("e0W5i");const gQ=["john","hannah","trevor","greg","mary","gigi","kendal","mark","fiona","herman","juno","beatrice"].map((e,t)=>({id:t,name:e,// Use index to randomize the returned image
    image:e=>`https://source.unsplash.com/collection/1602384/${100+e}x${100+e}?crop=faces`// prettier-ignore
    })),gZ=rM.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,gJ=rM.label`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 16px;
`,g0=rM.span`
  color: #888;
  margin-right: 16px;
`,g1=rM.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: #fff;

  &::placeholder {
    color: #444;
  }
`,g2=rM.ul`
  list-style: none;
  margin: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,g3=rM.li`
  display: flex;
  align-items: center;
  outline: none;

  &:focus {
    background-color: #333;
    border-radius: 6px;
  }

  & > * + * {
    margin-left: 16px;
  }
`,g4=rM.img`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #111;
`,g5=rM.span`
  color: ${e=>e.dimmed?"#888":"#fff"};
  font-weight: ${e=>e.dimmed?400:600};
`,g6=rM.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${e=>e.online?"green":"#888"};
  background-color: ${e=>e.online?"green":"transparent"};
`;var g8=({inputRef:e})=>/*#__PURE__*/c.createElement(gZ,null,/*#__PURE__*/c.createElement(gJ,null,/*#__PURE__*/c.createElement(g0,null,"To:"),/*#__PURE__*/c.createElement(g1,{ref:e,placeholder:"Search for a channel or conversation"})),/*#__PURE__*/c.createElement(cS.Scroller,null,/*#__PURE__*/c.createElement(g2,null,gQ.map(({id:e,name:t,image:n})=>/*#__PURE__*/c.createElement(g3,{key:e,tabIndex:0},/*#__PURE__*/c.createElement(g4,{src:n(e),alt:`Profile picture for ${t}`}),/*#__PURE__*/c.createElement(g5,null,t),/*#__PURE__*/c.createElement(g6,{online:e%2==0}),/*#__PURE__*/c.createElement(g5,{dimmed:!0},t))))));const g7=({sheetState:e,inputRef:t})=>{let n=c.useRef(null),r=gG({},n),i=tm({onClose:e.close,isOpen:!0,isDismissable:!0},n);// HACK: some props from React Aria need to be cast to `any`
// since they conflict with the Framer Motion props
return tx(),/*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(cS.Container,{...i.overlayProps,...r.dialogProps,ref:n},/*#__PURE__*/c.createElement(cS.Header,null,/*#__PURE__*/c.createElement(gX,{sheetState:e,titleProps:r.titleProps})),/*#__PURE__*/c.createElement(cS.Content,null,/*#__PURE__*/c.createElement(g8,{inputRef:t}))),/*#__PURE__*/c.createElement(cS.Backdrop,null))},g9=rM.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  max-width: 680px;
`,ve=rM.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: max(16px, env(safe-area-inset-top));
  padding-bottom: 56px;
  background-color: #333;
`,vt=rM.div`
  width: 100%;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: #fff;
`,vn=rM.div`
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background-color: slategray;
`,vr=rM.h1`
  font-weight: 700;
  font-size: 16px;
`,vi=rM.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
`,vo=rM(cS)`
  margin: 0 auto;
  max-width: 680px;

  .react-modal-sheet-container {
    background-color: #222 !important;
  }

  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }

  .react-modal-sheet-drag-indicator {
    background-color: #666 !important;
  }
`;var va=()=>{let e=g$({}),t=c.useRef(null),n=c.useRef(null),r=gH({onPress:e.open},n);return cL({when:e.isOpen,from:"#111",to:"#000"}),cL({to:"#111"}),/*#__PURE__*/c.createElement(g9,null,/*#__PURE__*/c.createElement(vt,null,/*#__PURE__*/c.createElement(vn,null),/*#__PURE__*/c.createElement(vr,null,"A11y Workspace"),/*#__PURE__*/c.createElement(gU,{size:20})),/*#__PURE__*/c.createElement(ve,null,/*#__PURE__*/c.createElement(vi,{...r.buttonProps,ref:n},/*#__PURE__*/c.createElement(g_,{size:20,color:"#fff"}))),/*#__PURE__*/c.createElement(vo,{isOpen:e.isOpen,onOpenEnd:()=>t.current?.focus(),onClose:e.close,rootId:"root"},/*#__PURE__*/c.createElement(tb,null,/*#__PURE__*/c.createElement(e7,{contain:!0,autoFocus:!1,restoreFocus:!0},/*#__PURE__*/c.createElement(g7,{sheetState:e,inputRef:t})))))},c=(u("e0W5i"),u("e0W5i"));const vs=({state:e,label:t,children:n})=>{let r=vl(e,t);return /*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(cS.Container,r,/*#__PURE__*/c.createElement(cS.Header,null),/*#__PURE__*/c.createElement(cS.Content,null,n)),/*#__PURE__*/c.createElement(cS.Backdrop,null))},vl=(e,t)=>{let n=c.useRef(null),r=gG({"aria-label":t},n),i=tm({onClose:e.close,isOpen:!0,isDismissable:!0},n);return tx(),{ref:n,...i.overlayProps,...r.dialogProps};// HACK: fix type conflicts with Framer Motion
},vu=rM(({state:e,label:t,children:n,...r})=>/*#__PURE__*/c.createElement(cS,{...r,isOpen:e.isOpen,onClose:e.close},/*#__PURE__*/c.createElement(tb,null,/*#__PURE__*/c.createElement(e7,{contain:!0,autoFocus:!0,restoreFocus:!0},/*#__PURE__*/c.createElement(vs,{state:e,label:t},n)))))`
  margin: 0 auto;
  max-width: 680px;
`,vc=rM.div`
  text-align: center;
  padding-top: 24px;
`;var vd=()=>{let e=g$({}),t=c.useRef(null),n=gH({onPress:e.open},t);return /*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(r2,{...n.buttonProps,ref:t},"Simple A11y Bottom Sheet"),/*#__PURE__*/c.createElement(vu,{state:e,label:"Accessible bottom sheet"},/*#__PURE__*/c.createElement(vc,null,/*#__PURE__*/c.createElement("strong",null,"This is a simple a11y sheet \uD83E\uDDBE"),/*#__PURE__*/c.createElement("p",null,"Your content goes here..."))))},c=u("e0W5i");const vf=()=>{let[e,t]=c.useState(!1),n=c.useRef();return{onScroll:()=>{t(!0),clearTimeout(n.current),n.current=setTimeout(()=>t(!1),150)},isScrolling:e}},vp=rM.div`
  padding: 16px;
`,vh=rM.div`
  width: 100%;
  display: flex;
  padding: 24px 0px;
  overflow-x: auto;
`,vm=rM.div`
  flex-shrink: 0;
  background-color: #eee;
  border-radius: 12px;
  width: 200px;
  height: 200px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;var vg=()=>{let{isScrolling:e,onScroll:t}=vf(),[n,r]=c.useState(!1);return /*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>r(!0)},"Disable drag for horizontal scroll"),/*#__PURE__*/c.createElement(cS,{isOpen:n,onClose:()=>r(!1)},/*#__PURE__*/c.createElement(cS.Container,null,/*#__PURE__*/c.createElement(cS.Header,null),/*#__PURE__*/c.createElement(cS.Content,{disableDrag:e},/*#__PURE__*/c.createElement(vp,null,/*#__PURE__*/c.createElement("div",null,e?"Scrolling (drag disabled)":"Not scrolling (drag enabled)"),/*#__PURE__*/c.createElement(vh,{onScroll:t},Array.from({length:20}).fill(1).map((e,t)=>/*#__PURE__*/c.createElement(vm,{key:t},t)))))),/*#__PURE__*/c.createElement(cS.Backdrop,null)))},c=u("e0W5i");const vv=[-50,.5,200,0],vy=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`,vb=rM.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`,vx=rM.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`;var vw=()=>{let e=c.useRef(),[t,n]=c.useState(!1),r=t=>e.current?.snapTo(t);return /*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>n(!0)},"Scrollable + Snap points"),/*#__PURE__*/c.createElement(cS,{ref:e,isOpen:t,onClose:()=>n(!1),snapPoints:vv,initialSnap:1},/*#__PURE__*/c.createElement(cS.Container,null,/*#__PURE__*/c.createElement(cS.Header,null),/*#__PURE__*/c.createElement(cS.Content,{style:{paddingBottom:e.current?.y}},/*#__PURE__*/c.createElement(cS.Scroller,{draggableAt:"both"},/*#__PURE__*/c.createElement(vy,null,/*#__PURE__*/c.createElement(vx,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>r(0)},"Snap to -50 (from top)"),/*#__PURE__*/c.createElement(r2,{onClick:()=>r(1)},"Snap to 50%"),/*#__PURE__*/c.createElement(r2,{onClick:()=>r(2)},"Snap to 200"),/*#__PURE__*/c.createElement(r2,{onClick:()=>r(3)},"Snap to 0 (close)")),Array.from({length:20}).fill(1).map((e,t)=>/*#__PURE__*/c.createElement(vb,{key:t},t+1)))))),/*#__PURE__*/c.createElement(cS.Backdrop,null)))},c=u("e0W5i");const vE=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`,vS=rM.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;var vk=()=>{let[e,t]=c.useState(!1),[n,r]=c.useState([0,1]),i=c.useRef(),o=()=>t(!1),a=e=>i.current?.snapTo(e);return /*#__PURE__*/c.createElement(c.Fragment,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>t(!0)},"Bottom Sheet Height of Content"),/*#__PURE__*/c.createElement(cS,{ref:i,isOpen:e,onClose:o,initialSnap:0,snapPoints:[-50,100,0],detent:"content-height"},/*#__PURE__*/c.createElement(cS.Container,null,/*#__PURE__*/c.createElement(cS.Header,null),/*#__PURE__*/c.createElement(cS.Content,null,/*#__PURE__*/c.createElement(cS.Scroller,null,/*#__PURE__*/c.createElement(vE,null,/*#__PURE__*/c.createElement(r2,{onClick:()=>a(0)},"Snap to top"),/*#__PURE__*/c.createElement(r2,{onClick:()=>a(1)},"Snap to bottom"),n.map((e,t)=>/*#__PURE__*/c.createElement(vS,{key:t,onClick:()=>r(e=>[...e,t+1])},t," (click to create new boxes )")))))),/*#__PURE__*/c.createElement(cS.Backdrop,{onTap:o})))};const vP=()=>/*#__PURE__*/c.createElement(vC,null,/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"snap-points"},/*#__PURE__*/c.createElement(rJ,{size:48}),/*#__PURE__*/c.createElement("span",null,"Snap points"))),/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"content-height"},/*#__PURE__*/c.createElement(rZ,{size:48}),/*#__PURE__*/c.createElement("span",null,"Use Content Height"))),/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"scrollable"},/*#__PURE__*/c.createElement(rK,{size:48}),/*#__PURE__*/c.createElement("span",null,"Scrollable"))),/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"scrollable-snap-points"},/*#__PURE__*/c.createElement(rK,{size:48}),/*#__PURE__*/c.createElement("span",null,"Scrollable (with snap points)"))),/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"disable-drag"},/*#__PURE__*/c.createElement(rW,{size:48}),/*#__PURE__*/c.createElement("span",null,"Disable drag"))),/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"apple-music"},/*#__PURE__*/c.createElement(rQ,{size:48}),/*#__PURE__*/c.createElement("span",null,"Apple Music"))),/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"slack-message"},/*#__PURE__*/c.createElement(r0,{size:48}),/*#__PURE__*/c.createElement("span",null,"Slack Message"))),/*#__PURE__*/c.createElement("li",null,/*#__PURE__*/c.createElement(vT,{to:"a11y"},/*#__PURE__*/c.createElement(rX,{size:48}),/*#__PURE__*/c.createElement("span",null,"Accessible Sheet")))),vC=rM.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  max-width: 800px;
  padding: 16px;
`,vT=rM(j)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 48px;
  text-align: center;
  background-color: aliceblue;
  color: mediumslateblue;
  border: 1px solid mediumslateblue;
  border-radius: 12px;

  span {
    font-weight: 500;
    font-size: 18px;
  }

  & > * + * {
    margin-top: 16px;
  }
`;var vA=()=>/*#__PURE__*/c.createElement(A,null,/*#__PURE__*/c.createElement(C,{path:"/",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(vP,null))}),/*#__PURE__*/c.createElement(C,{path:"snap-points/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(cO,null))}),/*#__PURE__*/c.createElement(C,{path:"scrollable-snap-points/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(vw,null))}),/*#__PURE__*/c.createElement(C,{path:"scrollable/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(cI,null))}),/*#__PURE__*/c.createElement(C,{path:"content-height/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(vk,null))}),/*#__PURE__*/c.createElement(C,{path:"apple-music/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(gB,null),/*#__PURE__*/c.createElement(r4,null))}),/*#__PURE__*/c.createElement(C,{path:"slack-message/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(va,null),/*#__PURE__*/c.createElement(r4,null))}),/*#__PURE__*/c.createElement(C,{path:"a11y/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(vd,null))}),/*#__PURE__*/c.createElement(C,{path:"disable-drag/*",element:/*#__PURE__*/c.createElement(r3,{bg:"light"},/*#__PURE__*/c.createElement(vg,null))}));d.render(/*#__PURE__*/c.createElement(()=>/*#__PURE__*/c.createElement(z,null,/*#__PURE__*/c.createElement(tb,null,/*#__PURE__*/c.createElement(vA,null))),null),document.getElementById("root"));//# sourceMappingURL=index.ecb1a69a.js.map

//# sourceMappingURL=index.ecb1a69a.js.map
