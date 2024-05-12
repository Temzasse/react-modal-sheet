let e;function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var r,i,o,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},l={},u=a.parcelRequired98c;null==u&&((u=function(e){if(e in s)return s[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},a.parcelRequired98c=u),u.register("1b2ls",function(e,n){t(e.exports,"Fragment",()=>r,e=>r=e),t(e.exports,"jsx",()=>i,e=>i=e),t(e.exports,"jsxs",()=>o,e=>o=e);var r,i,o,a=u("acw62"),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,i={},o=null,a=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!f.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:d.current}}r=l,i=p,o=p}),u.register("acw62",function(e,t){e.exports=u("2pUnB")}),u.register("2pUnB",function(e,n){t(e.exports,"Children",()=>r,e=>r=e),t(e.exports,"Component",()=>i,e=>i=e),t(e.exports,"Fragment",()=>o,e=>o=e),t(e.exports,"Profiler",()=>a,e=>a=e),t(e.exports,"PureComponent",()=>s,e=>s=e),t(e.exports,"StrictMode",()=>l,e=>l=e),t(e.exports,"Suspense",()=>u,e=>u=e),t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),t(e.exports,"cloneElement",()=>d,e=>d=e),t(e.exports,"createContext",()=>f,e=>f=e),t(e.exports,"createElement",()=>p,e=>p=e),t(e.exports,"createFactory",()=>h,e=>h=e),t(e.exports,"createRef",()=>m,e=>m=e),t(e.exports,"forwardRef",()=>g,e=>g=e),t(e.exports,"isValidElement",()=>v,e=>v=e),t(e.exports,"lazy",()=>y,e=>y=e),t(e.exports,"memo",()=>b,e=>b=e),t(e.exports,"startTransition",()=>x,e=>x=e),t(e.exports,"unstable_act",()=>w,e=>w=e),t(e.exports,"useCallback",()=>S,e=>S=e),t(e.exports,"useContext",()=>k,e=>k=e),t(e.exports,"useDebugValue",()=>E,e=>E=e),t(e.exports,"useDeferredValue",()=>P,e=>P=e),t(e.exports,"useEffect",()=>C,e=>C=e),t(e.exports,"useId",()=>T,e=>T=e),t(e.exports,"useImperativeHandle",()=>j,e=>j=e),t(e.exports,"useInsertionEffect",()=>R,e=>R=e),t(e.exports,"useLayoutEffect",()=>M,e=>M=e),t(e.exports,"useMemo",()=>L,e=>L=e),t(e.exports,"useReducer",()=>A,e=>A=e),t(e.exports,"useRef",()=>N,e=>N=e),t(e.exports,"useState",()=>D,e=>D=e),t(e.exports,"useSyncExternalStore",()=>O,e=>O=e),t(e.exports,"useTransition",()=>z,e=>z=e),t(e.exports,"version",()=>F,e=>F=e);var r,i,o,a,s,l,u,c,d,f,p,h,m,g,v,y,b,x,w,S,k,E,P,C,T,j,R,M,L,A,N,D,O,z,F,I=Symbol.for("react.element"),_=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),q=Symbol.iterator,Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Z={};function J(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||Q}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||Q}J.prototype.isReactComponent={},J.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},J.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=J.prototype;var en=et.prototype=new ee;en.constructor=et,X(en,J.prototype),en.isPureReactComponent=!0;var er=Array.isArray,ei=Object.prototype.hasOwnProperty,eo={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,i={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)ei.call(t,r)&&!ea.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:I,type:e,key:o,ref:a,props:i,_owner:eo.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===I}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ed(e,t,n){if(null==e)return e;var r=[],i=0;return function e(t,n,r,i,o){var a,s,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case I:case _:c=!0}}if(c)return o=o(c=t),t=""===i?"."+ec(c,0):i,er(o)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(o,n,r,"",function(e){return e})):null!=o&&(el(o)&&(a=o,s=r+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+t,o={$$typeof:I,type:a.type,key:s,ref:a.ref,props:a.props,_owner:a._owner}),n.push(o)),1;if(c=0,i=""===i?".":i+":",er(t))for(var d=0;d<t.length;d++){var f=i+ec(u=t[d],d);c+=e(u,n,r,f,o)}else if("function"==typeof(f=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=q&&l[q]||l["@@iterator"])?l:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=i+ec(u=u.value,d++),c+=e(u,n,r,f,o);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,i++)}),r}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ed,forEach:function(e,t,n){ed(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=J,o=V,a=$,s=et,l=B,u=K,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:eo},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),i=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=eo.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ei.call(t,l)&&!ea.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:I,type:e.type,key:i,ref:o,props:r,_owner:a}},f=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:U,_context:e},e.Consumer=e},p=es,h=function(e){var t=es.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:W,render:e}},v=el,y=function(e){return{$$typeof:Y,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:G,type:e,compare:void 0===t?null:t}},x=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},w=function(){throw Error("act(...) is not supported in production builds of React.")},S=function(e,t){return ep.current.useCallback(e,t)},k=function(e){return ep.current.useContext(e)},E=function(){},P=function(e){return ep.current.useDeferredValue(e)},C=function(e,t){return ep.current.useEffect(e,t)},T=function(){return ep.current.useId()},j=function(e,t,n){return ep.current.useImperativeHandle(e,t,n)},R=function(e,t){return ep.current.useInsertionEffect(e,t)},M=function(e,t){return ep.current.useLayoutEffect(e,t)},L=function(e,t){return ep.current.useMemo(e,t)},A=function(e,t,n){return ep.current.useReducer(e,t,n)},N=function(e){return ep.current.useRef(e)},D=function(e){return ep.current.useState(e)},O=function(e,t,n){return ep.current.useSyncExternalStore(e,t,n)},z=function(){return ep.current.useTransition()},F="18.2.0"}),u.register("Xw6Mv",function(e,n){t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>U,e=>U=e),t(e.exports,"createPortal",()=>H,e=>H=e),t(e.exports,"createRoot",()=>W,e=>W=e),t(e.exports,"findDOMNode",()=>K,e=>K=e),t(e.exports,"flushSync",()=>G,e=>G=e),t(e.exports,"hydrate",()=>Y,e=>Y=e),t(e.exports,"hydrateRoot",()=>q,e=>q=e),t(e.exports,"render",()=>Q,e=>Q=e),t(e.exports,"unmountComponentAtNode",()=>X,e=>X=e),t(e.exports,"unstable_batchedUpdates",()=>Z,e=>Z=e),t(e.exports,"unstable_renderSubtreeIntoContainer",()=>J,e=>J=e),t(e.exports,"version",()=>ee,e=>ee=e);var r,i,o,a,s,l,c=u("acw62"),d=u("fO90s");function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,h={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(h[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),y=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function S(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new S(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}function C(e,t,n,r){var i,o=k.hasOwnProperty(t)?k[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?(i=t,(!!y.call(w,i)||!y.call(x,i)&&(b.test(i)?w[i]=!0:(x[i]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,P);k[t]=new S(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,P);k[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,P);k[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});var T=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),R=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),_=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var V=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var B=Symbol.iterator;function $(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=B&&e[B]||e["@@iterator"])?e:null}var U,H,W,K,G,Y,q,Q,X,Z,J,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function eo(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s)break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=es(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=es(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ef(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ea(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=ea(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ev=Array.isArray;function ey(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(i=0,n=""+ea(n),t=null;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(f(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ex(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(f(92));if(ev(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ea(n)}}function ew(e,t){var n=ea(t.value),r=ea(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function eS(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ek(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eE(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ek(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eP,eC,eT=(eP=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eC=eC||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eC.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eP(e,t,n,r)})}:eP);function ej(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eR={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eM=["Webkit","ms","Moz","O"];function eL(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eR.hasOwnProperty(e)&&eR[e]?(""+t).trim():t+"px"}function eA(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=eL(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(eR).forEach(function(e){eM.forEach(function(t){eR[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eR[e]})});var eN=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eD(e,t){if(t){if(eN[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(f(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(f(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(f(62))}}function eO(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ez=null;function eF(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eI=null,e_=null,eV=null;function eB(e){if(e=rq(e)){if("function"!=typeof eI)throw Error(f(280));var t=e.stateNode;t&&(t=rX(t),eI(e.stateNode,e.type,t))}}function e$(e){e_?eV?eV.push(e):eV=[e]:e_=e}function eU(){if(e_){var e=e_,t=eV;if(eV=e_=null,eB(e),t)for(e=0;e<t.length;e++)eB(t[e])}}function eH(e,t){return e(t)}function eW(){}var eK=!1;function eG(e,t,n){if(eK)return e(t,n);eK=!0;try{return eH(e,t,n)}finally{eK=!1,(null!==e_||null!==eV)&&(eW(),eU())}}function eY(e,t){var n=e.stateNode;if(null===n)return null;var r=rX(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(f(231,t,typeof n));return n}var eq=!1;if(v)try{var eQ={};Object.defineProperty(eQ,"passive",{get:function(){eq=!0}}),window.addEventListener("test",eQ,eQ),window.removeEventListener("test",eQ,eQ)}catch(e){eq=!1}function eX(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eZ=!1,eJ=null,e0=!1,e1=null,e2={onError:function(e){eZ=!0,eJ=e}};function e3(e,t,n,r,i,o,a,s,l){eZ=!1,eJ=null,eX.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e6(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e5(e){if(e4(e)!==e)throw Error(f(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return e5(i),e;if(o===r)return e5(i),t;o=o.sibling}throw Error(f(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(3!==n.tag)throw Error(f(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e7=d.unstable_scheduleCallback,e9=d.unstable_cancelCallback,te=d.unstable_shouldYield,tt=d.unstable_requestPaint,tn=d.unstable_now,tr=d.unstable_getCurrentPriorityLevel,ti=d.unstable_ImmediatePriority,to=d.unstable_UserBlockingPriority,ta=d.unstable_NormalPriority,ts=d.unstable_LowPriority,tl=d.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/tp|0)|0},tf=Math.log,tp=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tv(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=tg(s):0!=(o&=a)&&(r=tg(o))}else 0!=(a=n&~i)?r=tg(a):0!==o&&(r=tg(o));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!=(4194240&o)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-td(t)),r|=e[n],t&=~i;return r}function ty(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tx(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tw(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=n}function tS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-td(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var tk=0;function tE(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tP,tC,tT,tj,tR,tM=!1,tL=[],tA=null,tN=null,tD=null,tO=new Map,tz=new Map,tF=[],tI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function t_(e,t){switch(e){case"focusin":case"focusout":tA=null;break;case"dragenter":case"dragleave":tN=null;break;case"mouseover":case"mouseout":tD=null;break;case"pointerover":case"pointerout":tO.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tz.delete(t.pointerId)}}function tV(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&null!==(t=rq(t))&&tC(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function tB(e){var t=rY(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e6(n))){e.blockedOn=t,tR(e.priority,function(){tT(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function t$(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tJ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rq(n))&&tC(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ez=r,n.target.dispatchEvent(r),ez=null,t.shift()}return!0}function tU(e,t,n){t$(e)&&n.delete(t)}function tH(){tM=!1,null!==tA&&t$(tA)&&(tA=null),null!==tN&&t$(tN)&&(tN=null),null!==tD&&t$(tD)&&(tD=null),tO.forEach(tU),tz.forEach(tU)}function tW(e,t){e.blockedOn===t&&(e.blockedOn=null,tM||(tM=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,tH)))}function tK(e){function t(t){return tW(t,e)}if(0<tL.length){tW(tL[0],e);for(var n=1;n<tL.length;n++){var r=tL[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tA&&tW(tA,e),null!==tN&&tW(tN,e),null!==tD&&tW(tD,e),tO.forEach(t),tz.forEach(t),n=0;n<tF.length;n++)(r=tF[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tF.length&&null===(n=tF[0]).blockedOn;)tB(n),null===n.blockedOn&&tF.shift()}var tG=T.ReactCurrentBatchConfig,tY=!0;function tq(e,t,n,r){var i=tk,o=tG.transition;tG.transition=null;try{tk=1,tX(e,t,n,r)}finally{tk=i,tG.transition=o}}function tQ(e,t,n,r){var i=tk,o=tG.transition;tG.transition=null;try{tk=4,tX(e,t,n,r)}finally{tk=i,tG.transition=o}}function tX(e,t,n,r){if(tY){var i=tJ(e,t,n,r);if(null===i)rx(e,t,r,tZ,n),t_(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return tA=tV(tA,e,t,n,r,i),!0;case"dragenter":return tN=tV(tN,e,t,n,r,i),!0;case"mouseover":return tD=tV(tD,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return tO.set(o,tV(tO.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,tz.set(o,tV(tz.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(t_(e,r),4&t&&-1<tI.indexOf(e)){for(;null!==i;){var o=rq(i);if(null!==o&&tP(o),null===(o=tJ(e,t,n,r))&&rx(e,t,r,tZ,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else rx(e,t,r,null,n)}}var tZ=null;function tJ(e,t,n,r){if(tZ=null,null!==(e=rY(e=eF(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e6(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tZ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case ti:return 1;case to:return 4;case ta:case ts:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,i="value"in t1?t1.value:t1.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return t3=i.slice(e,1<t?1-t:void 0)}function t6(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t5(){return!0}function t8(){return!1}function t7(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?t5:t8,this.isPropagationStopped=t8,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t5)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t5)},persist:function(){},isPersistent:t5}),t}var t9,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t7(nn),ni=en({},nn,{view:0,detail:0}),no=t7(ni),na=en({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nv,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t9=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t9=0,nt=e),t9)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),ns=t7(na),nl=t7(en({},na,{dataTransfer:0})),nu=t7(en({},ni,{relatedTarget:0})),nc=t7(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nd=t7(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nf=t7(en({},nn,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function nv(){return ng}var ny=t7(en({},ni,{key:function(e){if(e.key){var t=np[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t6(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nv,charCode:function(e){return"keypress"===e.type?t6(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t6(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nb=t7(en({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nx=t7(en({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nv})),nw=t7(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nS=t7(en({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nk=[9,13,27,32],nE=v&&"CompositionEvent"in window,nP=null;v&&"documentMode"in document&&(nP=document.documentMode);var nC=v&&"TextEvent"in window&&!nP,nT=v&&(!nE||nP&&8<nP&&11>=nP),nj=!1;function nR(e,t){switch(e){case"keyup":return -1!==nk.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nM(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nL=!1,nA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nN(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nA[e.type]:"textarea"===t}function nD(e,t,n,r){e$(r),0<(t=rS(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nO=null,nz=null;function nF(e){rh(e,0)}function nI(e){if(eu(rQ(e)))return e}function n_(e,t){if("change"===e)return t}var nV=!1;if(v){if(v){var nB="oninput"in document;if(!nB){var n$=document.createElement("div");n$.setAttribute("oninput","return;"),nB="function"==typeof n$.oninput}r=nB}else r=!1;nV=r&&(!document.documentMode||9<document.documentMode)}function nU(){nO&&(nO.detachEvent("onpropertychange",nH),nz=nO=null)}function nH(e){if("value"===e.propertyName&&nI(nz)){var t=[];nD(t,nz,e,eF(e)),eG(nF,t)}}function nW(e,t,n){"focusin"===e?(nU(),nO=t,nz=n,nO.attachEvent("onpropertychange",nH)):"focusout"===e&&nU()}function nK(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nI(nz)}function nG(e,t){if("click"===e)return nI(t)}function nY(e,t){if("input"===e||"change"===e)return nI(t)}var nq="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nQ(e,t){if(nq(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!y.call(t,i)||!nq(e[i],t[i]))return!1}return!0}function nX(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nZ(e,t){var n,r=nX(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nX(r)}}function nJ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=v&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n6=!1;function n5(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n6||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nQ(n4,r)||(n4=r,0<(r=rS(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n8(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n7={animationend:n8("Animation","AnimationEnd"),animationiteration:n8("Animation","AnimationIteration"),animationstart:n8("Animation","AnimationStart"),transitionend:n8("Transition","TransitionEnd")},n9={},re={};function rt(e){if(n9[e])return n9[e];if(!n7[e])return e;var t,n=n7[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n9[e]=n[t];return e}v&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n7.animationend.animation,delete n7.animationiteration.animation,delete n7.animationstart.animation),"TransitionEvent"in window||delete n7.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ri=rt("animationstart"),ro=rt("transitionend"),ra=new Map,rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rl(e,t){ra.set(e,t),m(t,[e])}for(var ru=0;ru<rs.length;ru++){var rc=rs[ru];rl(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rl(rn,"onAnimationEnd"),rl(rr,"onAnimationIteration"),rl(ri,"onAnimationStart"),rl("dblclick","onDoubleClick"),rl("focusin","onFocus"),rl("focusout","onBlur"),rl(ro,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(rd));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,a,s,l){if(e3.apply(this,arguments),eZ){if(eZ){var u=eJ;eZ=!1,eJ=null}else throw Error(f(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;rp(i,s,u),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;rp(i,s,u),o=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rW];void 0===n&&(n=t[rW]=new Set);var r=e+"__bubble";n.has(r)||(rb(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),rb(n,e,r,t)}var rv="_reactListening"+Math.random().toString(36).slice(2);function ry(e){if(!e[rv]){e[rv]=!0,p.forEach(function(t){"selectionchange"!==t&&(rf.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rv]||(t[rv]=!0,rg("selectionchange",!1,t))}}function rb(e,t,n,r){switch(t0(t)){case 1:var i=tq;break;case 4:i=tQ;break;default:i=tX}n=i.bind(null,t,n,e),i=void 0,eq&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rx(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=rY(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}eG(function(){var r=o,i=eF(n),a=[];e:{var s=ra.get(e);if(void 0!==s){var l=nr,u=e;switch(e){case"keypress":if(0===t6(n))break e;case"keydown":case"keyup":l=ny;break;case"focusin":u="focus",l=nu;break;case"focusout":u="blur",l=nu;break;case"beforeblur":case"afterblur":l=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nx;break;case rn:case rr:case ri:l=nc;break;case ro:l=nw;break;case"scroll":l=no;break;case"wheel":l=nS;break;case"copy":case"cut":case"paste":l=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=nb}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eY(h,f))&&c.push(rw(h,m,p))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,n,i),a.push({event:s,listeners:c}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(s&&n!==ez&&(u=n.relatedTarget||n.fromElement)&&(rY(u)||u[rH]))&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,null!==(u=u?rY(u):null)&&(d=e4(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=ns,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nb,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:rQ(l),p=null==u?s:rQ(u),(s=new c(m,h+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,rY(i)===r&&((c=new c(f,h+"enter",u,n,i)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)t:{for(c=l,f=u,h=0,p=c;p;p=rk(p))h++;for(p=0,m=f;m;m=rk(m))p++;for(;0<h-p;)c=rk(c),h--;for(;0<p-h;)f=rk(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break t;c=rk(c),f=rk(f)}c=null}else c=null;null!==l&&rE(a,s,l,c,!1),null!==u&&null!==d&&rE(a,d,u,c,!0)}e:{if("select"===(l=(s=r?rQ(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g,v=n_;else if(nN(s)){if(nV)v=nY;else{v=nK;var y=nW}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(v=nG);if(v&&(v=v(e,r))){nD(a,v,n,i);break e}y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&eg(s,"number",s.value)}switch(y=r?rQ(r):window,e){case"focusin":(nN(y)||"true"===y.contentEditable)&&(n2=y,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n6=!0;break;case"contextmenu":case"mouseup":case"dragend":n6=!1,n5(a,n,i);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n5(a,n,i)}if(nE)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nL?nR(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(nT&&"ko"!==n.locale&&(nL||"onCompositionStart"!==b?"onCompositionEnd"===b&&nL&&(g=t4()):(t2="value"in(t1=i)?t1.value:t1.textContent,nL=!0)),0<(y=rS(r,b)).length&&(b=new nf(b,e,null,n,i),a.push({event:b,listeners:y}),g?b.data=g:null!==(g=nM(n))&&(b.data=g))),(g=nC?function(e,t){switch(e){case"compositionend":return nM(t);case"keypress":if(32!==t.which)return null;return nj=!0," ";case"textInput":return" "===(e=t.data)&&nj?null:e;default:return null}}(e,n):function(e,t){if(nL)return"compositionend"===e||!nE&&nR(e,t)?(e=t4(),t3=t2=t1=null,nL=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nT&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rS(r,"onBeforeInput")).length&&(i=new nf("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=g)}rh(a,t)})}function rw(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rS(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=eY(e,n))&&r.unshift(rw(e,o,i)),null!=(o=eY(e,t))&&r.push(rw(e,o,i))),e=e.return}return r}function rk(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rE(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=eY(n,o))&&a.unshift(rw(n,l,s)):i||null!=(l=eY(n,o))&&a.push(rw(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var rP=/\r\n?/g,rC=/\u0000|\uFFFD/g;function rT(e){return("string"==typeof e?e:""+e).replace(rP,"\n").replace(rC,"")}function rj(e,t,n){if(t=rT(t),rT(e)!==t&&n)throw Error(f(425))}function rR(){}var rM=null,rL=null;function rA(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rN="function"==typeof setTimeout?setTimeout:void 0,rD="function"==typeof clearTimeout?clearTimeout:void 0,rO="function"==typeof Promise?Promise:void 0,rz="function"==typeof queueMicrotask?queueMicrotask:void 0!==rO?function(e){return rO.resolve(null).then(e).catch(rF)}:rN;function rF(e){setTimeout(function(){throw e})}function rI(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType){if("/$"===(n=i.data)){if(0===r){e.removeChild(i),tK(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=i}while(n)tK(t)}function r_(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rV(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rB=Math.random().toString(36).slice(2),r$="__reactFiber$"+rB,rU="__reactProps$"+rB,rH="__reactContainer$"+rB,rW="__reactEvents$"+rB,rK="__reactListeners$"+rB,rG="__reactHandles$"+rB;function rY(e){var t=e[r$];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rH]||n[r$]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rV(e);null!==e;){if(n=e[r$])return n;e=rV(e)}return t}n=(e=n).parentNode}return null}function rq(e){return(e=e[r$]||e[rH])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rQ(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(f(33))}function rX(e){return e[rU]||null}var rZ=[],rJ=-1;function r0(e){return{current:e}}function r1(e){0>rJ||(e.current=rZ[rJ],rZ[rJ]=null,rJ--)}function r2(e,t){rZ[++rJ]=e.current,e.current=t}var r3={},r4=r0(r3),r6=r0(!1),r5=r3;function r8(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function r7(e){return null!=(e=e.childContextTypes)}function r9(){r1(r6),r1(r4)}function ie(e,t,n){if(r4.current!==r3)throw Error(f(168));r2(r4,t),r2(r6,n)}function it(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(f(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case M:return"Fragment";case R:return"Portal";case A:return"Profiler";case L:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case D:return(t.displayName||"Context")+".Consumer";case N:return(t._context.displayName||"Context")+".Provider";case O:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case I:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case _:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return en({},n,r)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r5=r4.current,r2(r4,e),r2(r6,r6.current),!0}function ii(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=it(e,t,r5),r.__reactInternalMemoizedMergedChildContext=e,r1(r6),r1(r4),r2(r4,e)):r1(r6),r2(r6,n)}var io=null,ia=!1,is=!1;function il(e){null===io?io=[e]:io.push(e)}function iu(){if(!is&&null!==io){is=!0;var e=0,t=tk;try{var n=io;for(tk=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}io=null,ia=!1}catch(t){throw null!==io&&(io=io.slice(e+1)),e7(ti,iu),t}finally{tk=t,is=!1}}return null}var ic=[],id=0,ip=null,ih=0,im=[],ig=0,iv=null,iy=1,ib="";function ix(e,t){ic[id++]=ih,ic[id++]=ip,ip=e,ih=t}function iw(e,t,n){im[ig++]=iy,im[ig++]=ib,im[ig++]=iv,iv=e;var r=iy;e=ib;var i=32-td(r)-1;r&=~(1<<i),n+=1;var o=32-td(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,iy=1<<32-td(t)+i|n<<i|r,ib=o+e}else iy=1<<o|n<<i|r,ib=e}function iS(e){null!==e.return&&(ix(e,1),iw(e,1,0))}function ik(e){for(;e===ip;)ip=ic[--id],ic[id]=null,ih=ic[--id],ic[id]=null;for(;e===iv;)iv=im[--ig],im[ig]=null,ib=im[--ig],im[ig]=null,iy=im[--ig],im[ig]=null}var iE=null,iP=null,iC=!1,iT=null;function ij(e,t){var n=s7(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function iR(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,iE=e,iP=r_(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,iE=e,iP=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==iv?{id:iy,overflow:ib}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=s7(18,null,null,0)).stateNode=t,n.return=e,e.child=n,iE=e,iP=null,!0);default:return!1}}function iM(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iL(e){if(iC){var t=iP;if(t){var n=t;if(!iR(e,t)){if(iM(e))throw Error(f(418));t=r_(n.nextSibling);var r=iE;t&&iR(e,t)?ij(r,n):(e.flags=-4097&e.flags|2,iC=!1,iE=e)}}else{if(iM(e))throw Error(f(418));e.flags=-4097&e.flags|2,iC=!1,iE=e}}}function iA(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;iE=e}function iN(e){if(e!==iE)return!1;if(!iC)return iA(e),iC=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rA(e.type,e.memoizedProps)),t&&(t=iP)){if(iM(e))throw iD(),Error(f(418));for(;t;)ij(e,t),t=r_(t.nextSibling)}if(iA(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(f(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){iP=r_(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}iP=null}}else iP=iE?r_(e.stateNode.nextSibling):null;return!0}function iD(){for(var e=iP;e;)e=r_(e.nextSibling)}function iO(){iP=iE=null,iC=!1}function iz(e){null===iT?iT=[e]:iT.push(e)}var iF=T.ReactCurrentBatchConfig;function iI(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var i_=r0(null),iV=null,iB=null,i$=null;function iU(){i$=iB=iV=null}function iH(e){var t=i_.current;r1(i_),e._currentValue=t}function iW(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function iK(e,t){iV=e,i$=iB=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(aw=!0),e.firstContext=null)}function iG(e){var t=e._currentValue;if(i$!==e){if(e={context:e,memoizedValue:t,next:null},null===iB){if(null===iV)throw Error(f(308));iB=e,iV.dependencies={lanes:0,firstContext:e}}else iB=iB.next=e}return t}var iY=null;function iq(e){null===iY?iY=[e]:iY.push(e)}function iQ(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,iq(t)):(n.next=i.next,i.next=n),t.interleaved=n,iX(e,r)}function iX(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var iZ=!1;function iJ(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function i1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i2(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&sl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,iX(e,n)}return null===(i=r.interleaved)?(t.next=t,iq(r)):(t.next=i.next,i.next=t),r.interleaved=t,iX(e,n)}function i3(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tS(e,n)}}function i4(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n)null===o?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function i6(e,t,n,r){var i=e.updateQueue;iZ=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?o=u:a.next=u,a=l;var c=e.alternate;null!==c&&(s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l)}if(null!==o){var d=i.baseState;for(a=0,c=u=l=null,s=o;;){var f=s.lane,p=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=en({},d,f);break e;case 2:iZ=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do a|=i.lane,i=i.next;while(i!==t)}else null===o&&(i.shared.lanes=0);sg|=a,e.lanes=a,e.memoizedState=d}}function i5(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(f(191,i));i.call(r)}}}var i8=(new c.Component).refs;function i7(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var i9={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=sD(),i=sO(e),o=i1(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=i2(e,o,i))&&(sz(t,e,i,r),i3(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=sD(),i=sO(e),o=i1(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=i2(e,o,i))&&(sz(t,e,i,r),i3(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=sD(),r=sO(e),i=i1(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=i2(e,i,r))&&(sz(t,e,r,n),i3(t,e,r))}};function oe(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||!nQ(n,r)||!nQ(i,o)}function ot(e,t,n){var r=!1,i=r3,o=t.contextType;return"object"==typeof o&&null!==o?o=iG(o):(i=r7(t)?r5:r4.current,o=(r=null!=(r=t.contextTypes))?r8(e,i):r3),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=i9,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function on(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&i9.enqueueReplaceState(t,t.state,null)}function or(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=i8,iJ(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=iG(o):(o=r7(t)?r5:r4.current,i.context=r8(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(i7(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&i9.enqueueReplaceState(i,i.state,null),i6(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function oi(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=i.refs;t===i8&&(t=i.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function oo(e,t){throw Error(f(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oa(e){return(0,e._init)(e._payload)}function os(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?(t=li(n,e.mode,r)).return=e:(t=i(t,n)).return=e,t}function l(e,t,n,r){var o=n.type;return o===M?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===_&&oa(o)===t.type)?(r=i(t,n.props)).ref=oi(e,t,n):(r=lt(n.type,n.key,n.props,null,e.mode,r)).ref=oi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=lo(n,e.mode,r)).return=e:(t=i(t,n.children||[])).return=e,t}function c(e,t,n,r,o){return null===t||7!==t.tag?(t=ln(n,e.mode,r,o)).return=e:(t=i(t,n)).return=e,t}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=li(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case j:return(n=lt(t.type,t.key,t.props,null,e.mode,n)).ref=oi(e,null,t),n.return=e,n;case R:return(t=lo(t,e.mode,n)).return=e,t;case _:return d(e,(0,t._init)(t._payload),n)}if(ev(t)||$(t))return(t=ln(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case j:return n.key===i?l(e,t,n,r):null;case R:return n.key===i?u(e,t,n,r):null;case _:return p(e,t,(i=n._init)(n._payload),r)}if(ev(n)||$(n))return null!==i?null:c(e,t,n,r,null);oo(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case j:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case R:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case _:return h(e,t,n,(0,r._init)(r._payload),i)}if(ev(r)||$(r))return c(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}return function s(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===M&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case j:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===M){if(7===v.tag){n(l,v.sibling),(u=i(v,c.props.children)).return=l,l=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===_&&oa(g)===v.type){n(l,v.sibling),(u=i(v,c.props)).ref=oi(l,v,c),u.return=l,l=u;break e}n(l,v);break}t(l,v),v=v.sibling}c.type===M?((u=ln(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=lt(c.type,c.key,c.props,null,l.mode,m)).ref=oi(l,u,c),m.return=l,l=m)}return a(l);case R:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=lo(c,l.mode,m)).return=l,l=u}return a(l);case _:return s(l,u,(v=c._init)(c._payload),m)}if(ev(c))return function(i,a,s,l){for(var u=null,c=null,f=a,m=a=0,g=null;null!==f&&m<s.length;m++){f.index>m?(g=f,f=null):g=f.sibling;var v=p(i,f,s[m],l);if(null===v){null===f&&(f=g);break}e&&f&&null===v.alternate&&t(i,f),a=o(v,a,m),null===c?u=v:c.sibling=v,c=v,f=g}if(m===s.length)return n(i,f),iC&&ix(i,m),u;if(null===f){for(;m<s.length;m++)null!==(f=d(i,s[m],l))&&(a=o(f,a,m),null===c?u=f:c.sibling=f,c=f);return iC&&ix(i,m),u}for(f=r(i,f);m<s.length;m++)null!==(g=h(f,i,m,s[m],l))&&(e&&null!==g.alternate&&f.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&f.forEach(function(e){return t(i,e)}),iC&&ix(i,m),u}(l,u,c,m);if($(c))return function(i,a,s,l){var u=$(s);if("function"!=typeof u)throw Error(f(150));if(null==(s=u.call(s)))throw Error(f(151));for(var c=u=null,m=a,g=a=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(i,m,y.value,l);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),a=o(b,a,g),null===c?u=b:c.sibling=b,c=b,m=v}if(y.done)return n(i,m),iC&&ix(i,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=d(i,y.value,l))&&(a=o(y,a,g),null===c?u=y:c.sibling=y,c=y);return iC&&ix(i,g),u}for(m=r(i,m);!y.done;g++,y=s.next())null!==(y=h(m,i,g,y.value,l))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),a=o(y,a,g),null===c?u=y:c.sibling=y,c=y);return e&&m.forEach(function(e){return t(i,e)}),iC&&ix(i,g),u}(l,u,c,m);oo(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l):(n(l,u),(u=li(c,l.mode,m)).return=l),a(l=u)):n(l,u)}}var ol=os(!0),ou=os(!1),oc={},od=r0(oc),of=r0(oc),op=r0(oc);function oh(e){if(e===oc)throw Error(f(174));return e}function om(e,t){switch(r2(op,t),r2(of,e),r2(od,oc),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eE(null,"");break;default:t=eE(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(od),r2(od,t)}function og(){r1(od),r1(of),r1(op)}function ov(e){oh(op.current);var t=oh(od.current),n=eE(t,e.type);t!==n&&(r2(of,e),r2(od,n))}function oy(e){of.current===e&&(r1(od),r1(of))}var ob=r0(0);function ox(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ow=[];function oS(){for(var e=0;e<ow.length;e++)ow[e]._workInProgressVersionPrimary=null;ow.length=0}var ok=T.ReactCurrentDispatcher,oE=T.ReactCurrentBatchConfig,oP=0,oC=null,oT=null,oj=null,oR=!1,oM=!1,oL=0,oA=0;function oN(){throw Error(f(321))}function oD(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nq(e[n],t[n]))return!1;return!0}function oO(e,t,n,r,i,o){if(oP=o,oC=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ok.current=null===e||null===e.memoizedState?al:au,e=n(r,i),oM){o=0;do{if(oM=!1,oL=0,25<=o)throw Error(f(301));o+=1,oj=oT=null,t.updateQueue=null,ok.current=ac,e=n(r,i)}while(oM)}if(ok.current=as,t=null!==oT&&null!==oT.next,oP=0,oj=oT=oC=null,oR=!1,t)throw Error(f(300));return e}function oz(){var e=0!==oL;return oL=0,e}function oF(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===oj?oC.memoizedState=oj=e:oj=oj.next=e,oj}function oI(){if(null===oT){var e=oC.alternate;e=null!==e?e.memoizedState:null}else e=oT.next;var t=null===oj?oC.memoizedState:oj.next;if(null!==t)oj=t,oT=e;else{if(null===e)throw Error(f(310));e={memoizedState:(oT=e).memoizedState,baseState:oT.baseState,baseQueue:oT.baseQueue,queue:oT.queue,next:null},null===oj?oC.memoizedState=oj=e:oj=oj.next=e}return oj}function o_(e,t){return"function"==typeof t?t(e):t}function oV(e){var t=oI(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=oT,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((oP&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=d,a=r):l=l.next=d,oC.lanes|=c,sg|=c}u=u.next}while(null!==u&&u!==o)null===l?a=r:l.next=s,nq(r,t.memoizedState)||(aw=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do o=i.lane,oC.lanes|=o,sg|=o,i=i.next;while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oB(e){var t=oI(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i)nq(o,t.memoizedState)||(aw=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function o$(){}function oU(e,t){var n=oC,r=oI(),i=t(),o=!nq(r.memoizedState,i);if(o&&(r.memoizedState=i,aw=!0),r=r.queue,o1(oK.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==oj&&1&oj.memoizedState.tag){if(n.flags|=2048,oQ(9,oW.bind(null,n,r,i,t),void 0,null),null===su)throw Error(f(349));0!=(30&oP)||oH(n,t,i)}return i}function oH(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oC.updateQueue)?(t={lastEffect:null,stores:null},oC.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function oW(e,t,n,r){t.value=n,t.getSnapshot=r,oG(t)&&oY(e)}function oK(e,t,n){return n(function(){oG(t)&&oY(e)})}function oG(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nq(e,n)}catch(e){return!0}}function oY(e){var t=iX(e,1);null!==t&&sz(t,e,1,-1)}function oq(e){var t=oF();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o_,lastRenderedState:e},t.queue=e,e=e.dispatch=ar.bind(null,oC,e),[t.memoizedState,e]}function oQ(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oC.updateQueue)?(t={lastEffect:null,stores:null},oC.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function oX(){return oI().memoizedState}function oZ(e,t,n,r){var i=oF();oC.flags|=e,i.memoizedState=oQ(1|t,n,void 0,void 0===r?null:r)}function oJ(e,t,n,r){var i=oI();r=void 0===r?null:r;var o=void 0;if(null!==oT){var a=oT.memoizedState;if(o=a.destroy,null!==r&&oD(r,a.deps)){i.memoizedState=oQ(t,n,o,r);return}}oC.flags|=e,i.memoizedState=oQ(1|t,n,o,r)}function o0(e,t){return oZ(8390656,8,e,t)}function o1(e,t){return oJ(2048,8,e,t)}function o2(e,t){return oJ(4,2,e,t)}function o3(e,t){return oJ(4,4,e,t)}function o4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function o6(e,t,n){return n=null!=n?n.concat([e]):null,oJ(4,4,o4.bind(null,t,e),n)}function o5(){}function o8(e,t){var n=oI();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&oD(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function o7(e,t){var n=oI();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&oD(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function o9(e,t,n){return 0==(21&oP)?(e.baseState&&(e.baseState=!1,aw=!0),e.memoizedState=n):(nq(n,t)||(n=tb(),oC.lanes|=n,sg|=n,e.baseState=!0),t)}function ae(e,t){var n=tk;tk=0!==n&&4>n?n:4,e(!0);var r=oE.transition;oE.transition={};try{e(!1),t()}finally{tk=n,oE.transition=r}}function at(){return oI().memoizedState}function an(e,t,n){var r=sO(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ai(e)?ao(t,n):null!==(n=iQ(e,t,n,r))&&(sz(n,e,r,sD()),aa(n,t,r))}function ar(e,t,n){var r=sO(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ai(e))ao(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,nq(s,a)){var l=t.interleaved;null===l?(i.next=i,iq(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(n=iQ(e,t,i,r))&&(sz(n,e,r,i=sD()),aa(n,t,r))}}function ai(e){var t=e.alternate;return e===oC||null!==t&&t===oC}function ao(e,t){oM=oR=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function aa(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tS(e,n)}}var as={readContext:iG,useCallback:oN,useContext:oN,useEffect:oN,useImperativeHandle:oN,useInsertionEffect:oN,useLayoutEffect:oN,useMemo:oN,useReducer:oN,useRef:oN,useState:oN,useDebugValue:oN,useDeferredValue:oN,useTransition:oN,useMutableSource:oN,useSyncExternalStore:oN,useId:oN,unstable_isNewReconciler:!1},al={readContext:iG,useCallback:function(e,t){return oF().memoizedState=[e,void 0===t?null:t],e},useContext:iG,useEffect:o0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,oZ(4194308,4,o4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oZ(4194308,4,e,t)},useInsertionEffect:function(e,t){return oZ(4,2,e,t)},useMemo:function(e,t){var n=oF();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=oF();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=an.bind(null,oC,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},oF().memoizedState=e},useState:oq,useDebugValue:o5,useDeferredValue:function(e){return oF().memoizedState=e},useTransition:function(){var e=oq(!1),t=e[0];return e=ae.bind(null,e[1]),oF().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oC,i=oF();if(iC){if(void 0===n)throw Error(f(407));n=n()}else{if(n=t(),null===su)throw Error(f(349));0!=(30&oP)||oH(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,o0(oK.bind(null,r,o,e),[e]),r.flags|=2048,oQ(9,oW.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=oF(),t=su.identifierPrefix;if(iC){var n=ib,r=iy;t=":"+t+"R"+(n=(r&~(1<<32-td(r)-1)).toString(32)+n),0<(n=oL++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=oA++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},au={readContext:iG,useCallback:o8,useContext:iG,useEffect:o1,useImperativeHandle:o6,useInsertionEffect:o2,useLayoutEffect:o3,useMemo:o7,useReducer:oV,useRef:oX,useState:function(){return oV(o_)},useDebugValue:o5,useDeferredValue:function(e){return o9(oI(),oT.memoizedState,e)},useTransition:function(){return[oV(o_)[0],oI().memoizedState]},useMutableSource:o$,useSyncExternalStore:oU,useId:at,unstable_isNewReconciler:!1},ac={readContext:iG,useCallback:o8,useContext:iG,useEffect:o1,useImperativeHandle:o6,useInsertionEffect:o2,useLayoutEffect:o3,useMemo:o7,useReducer:oB,useRef:oX,useState:function(){return oB(o_)},useDebugValue:o5,useDeferredValue:function(e){var t=oI();return null===oT?t.memoizedState=e:o9(t,oT.memoizedState,e)},useTransition:function(){return[oB(o_)[0],oI().memoizedState]},useMutableSource:o$,useSyncExternalStore:oU,useId:at,unstable_isNewReconciler:!1};function ad(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1);case 11:return e=eo(e.type.render,!1);case 1:return e=eo(e.type,!0);default:return""}}(r),r=r.return;while(r)var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function af(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ap(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ah="function"==typeof WeakMap?WeakMap:Map;function am(e,t,n){(n=i1(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sE||(sE=!0,sP=r),ap(e,t)},n}function ag(e,t,n){(n=i1(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ap(e,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){ap(e,t),"function"!=typeof r&&(null===sC?sC=new Set([this]):sC.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function av(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ah;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s3.bind(null,e,t,n),t.then(e,e))}function ay(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ab(e,t,n,r,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=i1(-1,1)).tag=2,i2(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=i),e}var ax=T.ReactCurrentOwner,aw=!1;function aS(e,t,n,r){t.child=null===e?ou(t,null,n,r):ol(t,e.child,n,r)}function ak(e,t,n,r,i){n=n.render;var o=t.ref;return(iK(t,i),r=oO(e,t,n,r,o,i),n=oz(),null===e||aw)?(iC&&n&&iS(t),t.flags|=1,aS(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,a$(e,t,i))}function aE(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||s9(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=lt(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,aP(e,t,o,r,i))}if(o=e.child,0==(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:nQ)(a,r)&&e.ref===t.ref)return a$(e,t,i)}return t.flags|=1,(e=le(o,r)).ref=t.ref,e.return=t,t.child=e}function aP(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(nQ(o,r)&&e.ref===t.ref){if(aw=!1,t.pendingProps=r=o,0==(e.lanes&i))return t.lanes=e.lanes,a$(e,t,i);0!=(131072&e.flags)&&(aw=!0)}}return aj(e,t,n,r,i)}function aC(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(sp,sf),sf|=n;else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(sp,sf),sf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,r2(sp,sf),sf|=r}}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,r2(sp,sf),sf|=r;return aS(e,t,i,n),t.child}function aT(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aj(e,t,n,r,i){var o=r7(n)?r5:r4.current;return(o=r8(t,o),iK(t,i),n=oO(e,t,n,r,o,i),r=oz(),null===e||aw)?(iC&&r&&iS(t),t.flags|=1,aS(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,a$(e,t,i))}function aR(e,t,n,r,i){if(r7(n)){var o=!0;ir(t)}else o=!1;if(iK(t,i),null===t.stateNode)aB(e,t),ot(t,n,r),or(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;u="object"==typeof u&&null!==u?iG(u):r8(t,u=r7(n)?r5:r4.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==u)&&on(t,a,r,u),iZ=!1;var f=t.memoizedState;a.state=f,i6(t,r,a,i),l=t.memoizedState,s!==r||f!==l||r6.current||iZ?("function"==typeof c&&(i7(t,n,c,r),l=t.memoizedState),(s=iZ||oe(t,n,s,r,f,l,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,i0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:iI(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l="object"==typeof(l=n.contextType)&&null!==l?iG(l):r8(t,l=r7(n)?r5:r4.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||f!==l)&&on(t,a,r,l),iZ=!1,f=t.memoizedState,a.state=f,i6(t,r,a,i);var h=t.memoizedState;s!==d||f!==h||r6.current||iZ?("function"==typeof p&&(i7(t,n,p,r),h=t.memoizedState),(u=iZ||oe(t,n,u,r,f,h,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return aM(e,t,n,r,o,i)}function aM(e,t,n,r,i,o){aT(e,t);var a=0!=(128&t.flags);if(!r&&!a)return i&&ii(t,n,!1),a$(e,t,o);r=t.stateNode,ax.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=ol(t,e.child,null,o),t.child=ol(t,null,s,o)):aS(e,t,s,o),t.memoizedState=r.state,i&&ii(t,n,!0),t.child}function aL(e){var t=e.stateNode;t.pendingContext?ie(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ie(e,t.context,!1),om(e,t.containerInfo)}function aA(e,t,n,r,i){return iO(),iz(i),t.flags|=256,aS(e,t,n,r),t.child}var aN={dehydrated:null,treeContext:null,retryLane:0};function aD(e){return{baseLanes:e,cachePool:null,transitions:null}}function aO(e,t,n){var r,i=t.pendingProps,o=ob.current,a=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(o|=1),r2(ob,1&o),null===e)return(iL(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=s):a=lr(s,i,0,null),e=ln(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aD(n),t.memoizedState=aN,e):az(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,a){if(n)return 256&t.flags?(t.flags&=-257,aF(e,t,a,r=af(Error(f(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=lr({mode:"visible",children:r.children},i,0,null),o=ln(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!=(1&t.mode)&&ol(t,e.child,null,a),t.child.memoizedState=aD(a),t.memoizedState=aN,o);if(0==(1&t.mode))return aF(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,aF(e,t,a,r=af(o=Error(f(419)),r,void 0))}if(s=0!=(a&e.childLanes),aw||s){if(null!==(r=su)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|a))?0:i)&&i!==o.retryLane&&(o.retryLane=i,iX(e,i),sz(r,e,i,-1))}return sq(),aF(e,t,a,r=af(Error(f(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=s6.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,iP=r_(i.nextSibling),iE=t,iC=!0,iT=null,null!==e&&(im[ig++]=iy,im[ig++]=ib,im[ig++]=iv,iy=e.id,ib=e.overflow,iv=t),t=az(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,o,n);if(a){a=i.fallback,s=t.mode,r=(o=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=le(o,l)).subtreeFlags=14680064&o.subtreeFlags,null!==r?a=le(r,a):(a=ln(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=null===(s=e.child.memoizedState)?aD(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=aN,i}return e=(a=e.child).sibling,i=le(a,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function az(e,t){return(t=lr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function aF(e,t,n,r){return null!==r&&iz(r),ol(t,e.child,null,n),e=az(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aI(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),iW(e.return,t,n)}function a_(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function aV(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(aS(e,t,r.children,n),0!=(2&(r=ob.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aI(e,n,t);else if(19===e.tag)aI(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ob,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===ox(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),a_(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ox(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}a_(t,!0,n,null,o);break;case"together":a_(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aB(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function a$(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),sg|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(f(153));if(null!==t.child){for(n=le(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=le(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function aU(e,t){if(!iC)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function aH(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}i=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},o=function(){},a=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,oh(od.current);var o,a=null;switch(n){case"input":i=ed(e,i),r=ed(e,r),a=[];break;case"select":i=en({},i,{value:void 0}),r=en({},r,{value:void 0}),a=[];break;case"textarea":i=eb(e,i),r=eb(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=rR)}for(u in eD(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u]){if("style"===u){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(h.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in r){var l=r[u];if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s)){if("style"===u){if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(h.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&rm("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},s=function(e,t,n,r){n!==r&&(t.flags|=4)};var aW=!1,aK=!1,aG="function"==typeof WeakSet?WeakSet:Set,aY=null;function aq(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){s2(e,t,n)}else n.current=null}}function aQ(e,t,n){try{n()}catch(n){s2(e,t,n)}}var aX=!1;function aZ(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&aQ(t,n,o)}i=i.next}while(i!==r)}}function aJ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function a0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function a1(e){return 5===e.tag||3===e.tag||4===e.tag}function a2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var a3=null,a4=!1;function a6(e,t,n){for(n=n.child;null!==n;)a5(e,t,n),n=n.sibling}function a5(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:aK||aq(n,t);case 6:var r=a3,i=a4;a3=null,a6(e,t,n),a3=r,a4=i,null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):a3.removeChild(n.stateNode));break;case 18:null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?rI(e.parentNode,n):1===e.nodeType&&rI(e,n),tK(e)):rI(a3,n.stateNode));break;case 4:r=a3,i=a4,a3=n.stateNode.containerInfo,a4=!0,a6(e,t,n),a3=r,a4=i;break;case 0:case 11:case 14:case 15:if(!aK&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!=(2&o)?aQ(n,t,a):0!=(4&o)&&aQ(n,t,a)),i=i.next}while(i!==r)}a6(e,t,n);break;case 1:if(!aK&&(aq(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){s2(n,t,e)}a6(e,t,n);break;case 21:default:a6(e,t,n);break;case 22:1&n.mode?(aK=(r=aK)||null!==n.memoizedState,a6(e,t,n),aK=r):a6(e,t,n)}}function a8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new aG),t.forEach(function(t){var r=s5.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function a7(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:a3=a.stateNode,a4=!1;break e;case 3:case 4:a3=a.stateNode.containerInfo,a4=!0;break e}a=a.return}if(null===a3)throw Error(f(160));a5(e,o,i),a3=null,a4=!1;var s=i.alternate;null!==s&&(s.return=null),i.return=null}catch(e){s2(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)a9(t,e),t=t.sibling}function a9(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a7(t,e),se(e),4&r){try{aZ(3,e,e.return),aJ(3,e)}catch(t){s2(e,e.return,t)}try{aZ(5,e,e.return)}catch(t){s2(e,e.return,t)}}break;case 1:a7(t,e),se(e),512&r&&null!==n&&aq(n,n.return);break;case 5:if(a7(t,e),se(e),512&r&&null!==n&&aq(n,n.return),32&e.flags){var i=e.stateNode;try{ej(i,"")}catch(t){s2(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,a=null!==n?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===o.type&&null!=o.name&&ep(i,o),eO(s,a);var u=eO(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];"style"===c?eA(i,d):"dangerouslySetInnerHTML"===c?eT(i,d):"children"===c?ej(i,d):C(i,c,d,u)}switch(s){case"input":eh(i,o);break;case"textarea":ew(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ey(i,!!o.multiple,h,!1):!!o.multiple!==p&&(null!=o.defaultValue?ey(i,!!o.multiple,o.defaultValue,!0):ey(i,!!o.multiple,o.multiple?[]:"",!1))}i[rU]=o}catch(t){s2(e,e.return,t)}}break;case 6:if(a7(t,e),se(e),4&r){if(null===e.stateNode)throw Error(f(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(t){s2(e,e.return,t)}}break;case 3:if(a7(t,e),se(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tK(t.containerInfo)}catch(t){s2(e,e.return,t)}break;case 4:default:a7(t,e),se(e);break;case 13:a7(t,e),se(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,o&&(null===i.alternate||null===i.alternate.memoizedState)&&(sw=tn())),4&r&&a8(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(aK=(u=aK)||c,a7(t,e),aK=u):a7(t,e),se(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(aY=e,c=e.child;null!==c;){for(d=aY=c;null!==aY;){switch(h=(p=aY).child,p.tag){case 0:case 11:case 14:case 15:aZ(4,p,p.return);break;case 1:aq(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){s2(r,n,e)}}break;case 5:aq(p,p.return);break;case 22:if(null!==p.memoizedState){sn(d);continue}}null!==h?(h.return=p,aY=h):sn(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?(o=i.style,"function"==typeof o.setProperty?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,a=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=eL("display",a))}catch(t){s2(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){s2(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:a7(t,e),se(e),4&r&&a8(e);case 21:}}function se(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(a1(n)){var r=n;break e}n=n.return}throw Error(f(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(ej(i,""),r.flags&=-33);var o=a2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=a2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rR));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,s,a);break;default:throw Error(f(161))}}catch(t){s2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function st(e){for(;null!==aY;){var t=aY;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:aK||aJ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!aK){if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:iI(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;null!==o&&i5(t,o,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}i5(t,a,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tK(d)}}}break;default:throw Error(f(163))}aK||512&t.flags&&a0(t)}catch(e){s2(t,t.return,e)}}if(t===e){aY=null;break}if(null!==(n=t.sibling)){n.return=t.return,aY=n;break}aY=t.return}}function sn(e){for(;null!==aY;){var t=aY;if(t===e){aY=null;break}var n=t.sibling;if(null!==n){n.return=t.return,aY=n;break}aY=t.return}}function sr(e){for(;null!==aY;){var t=aY;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aJ(4,t)}catch(e){s2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){s2(t,i,e)}}var o=t.return;try{a0(t)}catch(e){s2(t,o,e)}break;case 5:var a=t.return;try{a0(t)}catch(e){s2(t,a,e)}}}catch(e){s2(t,t.return,e)}if(t===e){aY=null;break}var s=t.sibling;if(null!==s){s.return=t.return,aY=s;break}aY=t.return}}var si=Math.ceil,so=T.ReactCurrentDispatcher,sa=T.ReactCurrentOwner,ss=T.ReactCurrentBatchConfig,sl=0,su=null,sc=null,sd=0,sf=0,sp=r0(0),sh=0,sm=null,sg=0,sv=0,sy=0,sb=null,sx=null,sw=0,sS=1/0,sk=null,sE=!1,sP=null,sC=null,sT=!1,sj=null,sR=0,sM=0,sL=null,sA=-1,sN=0;function sD(){return 0!=(6&sl)?tn():-1!==sA?sA:sA=tn()}function sO(e){return 0==(1&e.mode)?1:0!=(2&sl)&&0!==sd?sd&-sd:null!==iF.transition?(0===sN&&(sN=tb()),sN):0!==(e=tk)?e:e=void 0===(e=window.event)?16:t0(e.type)}function sz(e,t,n,r){if(50<sM)throw sM=0,sL=null,Error(f(185));tw(e,n,r),(0==(2&sl)||e!==su)&&(e===su&&(0==(2&sl)&&(sv|=n),4===sh&&sB(e,sd)),sF(e,r),1===n&&0===sl&&0==(1&t.mode)&&(sS=tn()+500,ia&&iu()))}function sF(e,t){var n,r,i,o=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-td(o),s=1<<a,l=i[a];-1===l?(0==(s&n)||0!=(s&r))&&(i[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var a=tv(e,e===su?sd:0);if(0===a)null!==o&&e9(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=o&&e9(o),1===t)0===e.tag?(i=s$.bind(null,e),ia=!0,il(i)):il(s$.bind(null,e)),rz(function(){0==(6&sl)&&iu()}),o=null;else{switch(tE(a)){case 1:o=ti;break;case 4:o=to;break;case 16:default:o=ta;break;case 536870912:o=tl}o=e7(o,sI.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function sI(e,t){if(sA=-1,sN=0,0!=(6&sl))throw Error(f(327));var n=e.callbackNode;if(s0()&&e.callbackNode!==n)return null;var r=tv(e,e===su?sd:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=sQ(e,r);else{t=r;var i=sl;sl|=2;var o=sY();for((su!==e||sd!==t)&&(sk=null,sS=tn()+500,sK(e,t));;)try{(function(){for(;null!==sc&&!te();)sX(sc)})();break}catch(t){sG(e,t)}iU(),so.current=o,sl=i,null!==sc?t=0:(su=null,sd=0,t=sh)}if(0!==t){if(2===t&&0!==(i=ty(e))&&(r=i,t=s_(e,i)),1===t)throw n=sm,sK(e,0),sB(e,r),sF(e,tn()),n;if(6===t)sB(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nq(o(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=sQ(e,r))&&0!==(o=ty(e))&&(r=o,t=s_(e,o)),1===t))throw n=sm,sK(e,0),sB(e,r),sF(e,tn()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(f(345));case 2:case 5:sJ(e,sx,sk);break;case 3:if(sB(e,r),(130023424&r)===r&&10<(t=sw+500-tn())){if(0!==tv(e,0))break;if(((i=e.suspendedLanes)&r)!==r){sD(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rN(sJ.bind(null,e,sx,sk),t);break}sJ(e,sx,sk);break;case 4:if(sB(e,r),(4194240&r)===r)break;for(i=-1,t=e.eventTimes;0<r;){var a=31-td(r);o=1<<a,(a=t[a])>i&&(i=a),r&=~o}if(r=i,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*si(r/1960))-r)){e.timeoutHandle=rN(sJ.bind(null,e,sx,sk),r);break}sJ(e,sx,sk);break;default:throw Error(f(329))}}}return sF(e,tn()),e.callbackNode===n?sI.bind(null,e):null}function s_(e,t){var n=sb;return e.current.memoizedState.isDehydrated&&(sK(e,t).flags|=256),2!==(e=sQ(e,t))&&(t=sx,sx=n,null!==t&&sV(t)),e}function sV(e){null===sx?sx=e:sx.push.apply(sx,e)}function sB(e,t){for(t&=~sy,t&=~sv,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-td(t),r=1<<n;e[n]=-1,t&=~r}}function s$(e){if(0!=(6&sl))throw Error(f(327));s0();var t=tv(e,0);if(0==(1&t))return sF(e,tn()),null;var n=sQ(e,t);if(0!==e.tag&&2===n){var r=ty(e);0!==r&&(t=r,n=s_(e,r))}if(1===n)throw n=sm,sK(e,0),sB(e,t),sF(e,tn()),n;if(6===n)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sJ(e,sx,sk),sF(e,tn()),null}function sU(e,t){var n=sl;sl|=1;try{return e(t)}finally{0===(sl=n)&&(sS=tn()+500,ia&&iu())}}function sH(e){null!==sj&&0===sj.tag&&0==(6&sl)&&s0();var t=sl;sl|=1;var n=ss.transition,r=tk;try{if(ss.transition=null,tk=1,e)return e()}finally{tk=r,ss.transition=n,0==(6&(sl=t))&&iu()}}function sW(){sf=sp.current,r1(sp)}function sK(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rD(n)),null!==sc)for(n=sc.return;null!==n;){var r=n;switch(ik(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r9();break;case 3:og(),r1(r6),r1(r4),oS();break;case 5:oy(r);break;case 4:og();break;case 13:case 19:r1(ob);break;case 10:iH(r.type._context);break;case 22:case 23:sW()}n=n.return}if(su=e,sc=e=le(e.current,null),sd=sf=t,sh=0,sm=null,sy=sv=sg=0,sx=sb=null,null!==iY){for(t=0;t<iY.length;t++)if(null!==(r=(n=iY[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}iY=null}return e}function sG(e,t){for(;;){var n=sc;try{if(iU(),ok.current=as,oR){for(var r=oC.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}oR=!1}if(oP=0,oj=oT=oC=null,oM=!1,oL=0,sa.current=null,null===n||null===n.return){sh=1,sm=t,sc=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=sd,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ay(a);if(null!==h){h.flags&=-257,ab(h,a,s,o,t),1&h.mode&&av(o,u,t),t=h,l=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){av(o,u,t),sq();break e}l=Error(f(426))}else if(iC&&1&s.mode){var v=ay(a);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),ab(v,a,s,o,t),iz(ad(l,s));break e}}o=l=ad(l,s),4!==sh&&(sh=2),null===sb?sb=[o]:sb.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=am(o,l,t);i4(o,y);break e;case 1:s=l;var b=o.type,x=o.stateNode;if(0==(128&o.flags)&&("function"==typeof b.getDerivedStateFromError||null!==x&&"function"==typeof x.componentDidCatch&&(null===sC||!sC.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=ag(o,s,t);i4(o,w);break e}}o=o.return}while(null!==o)}sZ(n)}catch(e){t=e,sc===n&&null!==n&&(sc=n=n.return);continue}break}}function sY(){var e=so.current;return so.current=as,null===e?as:e}function sq(){(0===sh||3===sh||2===sh)&&(sh=4),null===su||0==(268435455&sg)&&0==(268435455&sv)||sB(su,sd)}function sQ(e,t){var n=sl;sl|=2;var r=sY();for((su!==e||sd!==t)&&(sk=null,sK(e,t));;)try{(function(){for(;null!==sc;)sX(sc)})();break}catch(t){sG(e,t)}if(iU(),sl=n,so.current=r,null!==sc)throw Error(f(261));return su=null,sd=0,sh}function sX(e){var t=l(e.alternate,e,sf);e.memoizedProps=e.pendingProps,null===t?sZ(e):sc=t,sa.current=null}function sZ(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(ik(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aH(t),null;case 1:case 17:return r7(t.type)&&r9(),aH(t),null;case 3:return r=t.stateNode,og(),r1(r6),r1(r4),oS(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(iN(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==iT&&(sV(iT),iT=null))),o(e,t),aH(t),null;case 5:oy(t);var l=oh(op.current);if(n=t.type,null!==e&&null!=t.stateNode)a(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(f(166));return aH(t),null}if(e=oh(od.current),iN(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[r$]=t,r[rU]=u,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(l=0;l<rd.length;l++)rm(rd[l],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ef(r,u),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},rm("invalid",r);break;case"textarea":ex(r,u),rm("invalid",r)}for(var c in eD(n,u),l=null,u)if(u.hasOwnProperty(c)){var d=u[c];"children"===c?"string"==typeof d?r.textContent!==d&&(!0!==u.suppressHydrationWarning&&rj(r.textContent,d,e),l=["children",d]):"number"==typeof d&&r.textContent!==""+d&&(!0!==u.suppressHydrationWarning&&rj(r.textContent,d,e),l=["children",""+d]):h.hasOwnProperty(c)&&null!=d&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":el(r),em(r,u,!0);break;case"textarea":el(r),eS(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rR)}r=l,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ek(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[r$]=t,e[rU]=r,i(e,t,!1,!1),t.stateNode=e;e:{switch(c=eO(n,r),n){case"dialog":rm("cancel",e),rm("close",e),l=r;break;case"iframe":case"object":case"embed":rm("load",e),l=r;break;case"video":case"audio":for(l=0;l<rd.length;l++)rm(rd[l],e);l=r;break;case"source":rm("error",e),l=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),l=r;break;case"details":rm("toggle",e),l=r;break;case"input":ef(e,r),l=ed(e,r),rm("invalid",e);break;case"option":default:l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":ex(e,r),l=eb(e,r),rm("invalid",e)}for(u in eD(n,l),d=l)if(d.hasOwnProperty(u)){var p=d[u];"style"===u?eA(e,p):"dangerouslySetInnerHTML"===u?null!=(p=p?p.__html:void 0)&&eT(e,p):"children"===u?"string"==typeof p?("textarea"!==n||""!==p)&&ej(e,p):"number"==typeof p&&ej(e,""+p):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(h.hasOwnProperty(u)?null!=p&&"onScroll"===u&&rm("scroll",e):null!=p&&C(e,u,p,c))}switch(n){case"input":el(e),em(e,r,!1);break;case"textarea":el(e),eS(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ea(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ey(e,!!r.multiple,u,!1):null!=r.defaultValue&&ey(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=rR)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return aH(t),null;case 6:if(e&&null!=t.stateNode)s(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(f(166));if(n=oh(op.current),oh(od.current),iN(t)){if(r=t.stateNode,n=t.memoizedProps,r[r$]=t,(u=r.nodeValue!==n)&&null!==(e=iE))switch(e.tag){case 3:rj(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rj(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[r$]=t,t.stateNode=r}return aH(t),null;case 13:if(r1(ob),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(iC&&null!==iP&&0!=(1&t.mode)&&0==(128&t.flags))iD(),iO(),t.flags|=98560,u=!1;else if(u=iN(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(f(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(f(317));u[r$]=t}else iO(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aH(t),u=!1}else null!==iT&&(sV(iT),iT=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ob.current)?0===sh&&(sh=3):sq())),null!==t.updateQueue&&(t.flags|=4),aH(t),null;case 4:return og(),o(e,t),null===e&&ry(t.stateNode.containerInfo),aH(t),null;case 10:return iH(t.type._context),aH(t),null;case 19:if(r1(ob),null===(u=t.memoizedState))return aH(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)aU(u,!1);else{if(0!==sh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=ox(e))){for(t.flags|=128,aU(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ob,1&ob.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>sS&&(t.flags|=128,r=!0,aU(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=ox(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),aU(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!iC)return aH(t),null}else 2*tn()-u.renderingStartTime>sS&&1073741824!==n&&(t.flags|=128,r=!0,aU(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=ob.current,r2(ob,r?1&n|2:1&n),t;return aH(t),null;case 22:case 23:return sW(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&sf)&&(aH(t),6&t.subtreeFlags&&(t.flags|=8192)):aH(t),null;case 24:case 25:return null}throw Error(f(156,t.tag))}(n,t,sf))){sc=n;return}}else{if(null!==(n=function(e,t){switch(ik(t),t.tag){case 1:return r7(t.type)&&r9(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return og(),r1(r6),r1(r4),oS(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return oy(t),null;case 13:if(r1(ob),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(f(340));iO()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ob),null;case 4:return og(),null;case 10:return iH(t.type._context),null;case 22:case 23:return sW(),null;default:return null}}(n,t))){n.flags&=32767,sc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sh=6,sc=null;return}}if(null!==(t=t.sibling)){sc=t;return}sc=t=e}while(null!==t)0===sh&&(sh=5)}function sJ(e,t,n){var r=tk,i=ss.transition;try{ss.transition=null,tk=1,function(e,t,n,r){do s0();while(null!==sj)if(0!=(6&sl))throw Error(f(327));n=e.finishedWork;var i=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-td(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,o),e===su&&(sc=su=null,sd=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||sT||(sT=!0,a=ta,s=function(){return s0(),null},e7(a,s)),o=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||o){o=ss.transition,ss.transition=null;var a,s,l,u,c,d=tk;tk=1;var p=sl;sl|=4,sa.current=null,function(e,t){if(rM=tY,n0(e=nJ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i,o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==r&&3!==p.nodeType||(u=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(i=p.firstChild);)h=p,p=i;for(;;){if(p===e)break t;if(h===n&&++c===o&&(l=s),h===a&&++d===r&&(u=s),null!==(i=p.nextSibling))break;h=(p=h).parentNode}p=i}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rL={focusedElem:e,selectionRange:n},tY=!1,aY=t;null!==aY;)if(e=(t=aY).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,aY=e;else for(;null!==aY;){t=aY;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:iI(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(f(163))}}catch(e){s2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,aY=e;break}aY=t.return}m=aX,aX=!1}(e,n),a9(n,e),function(e){var t=nJ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nZ(n,o);var a=nZ(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rL),tY=!!rM,rL=rM=null,e.current=n,l=n,u=e,c=i,aY=l,function e(t,n,r){for(var i=0!=(1&t.mode);null!==aY;){var o=aY,a=o.child;if(22===o.tag&&i){var s=null!==o.memoizedState||aW;if(!s){var l=o.alternate,u=null!==l&&null!==l.memoizedState||aK;l=aW;var c=aK;if(aW=s,(aK=u)&&!c)for(aY=o;null!==aY;)u=(s=aY).child,22===s.tag&&null!==s.memoizedState?sr(o):null!==u?(u.return=s,aY=u):sr(o);for(;null!==a;)aY=a,e(a,n,r),a=a.sibling;aY=o,aW=l,aK=c}st(t,n,r)}else 0!=(8772&o.subtreeFlags)&&null!==a?(a.return=o,aY=a):st(t,n,r)}}(l,u,c),tt(),sl=p,tk=d,ss.transition=o}else e.current=n;if(sT&&(sT=!1,sj=e,sR=i),0===(o=e.pendingLanes)&&(sC=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),sF(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((i=t[n]).value,{componentStack:i.stack,digest:i.digest});if(sE)throw sE=!1,e=sP,sP=null,e;0!=(1&sR)&&0!==e.tag&&s0(),0!=(1&(o=e.pendingLanes))?e===sL?sM++:(sM=0,sL=e):sM=0,iu()}}(e,t,n,r)}finally{ss.transition=i,tk=r}return null}function s0(){if(null!==sj){var e=tE(sR),t=ss.transition,n=tk;try{if(ss.transition=null,tk=16>e?16:e,null===sj)var r=!1;else{if(e=sj,sj=null,sR=0,0!=(6&sl))throw Error(f(331));var i=sl;for(sl|=4,aY=e.current;null!==aY;){var o=aY,a=o.child;if(0!=(16&aY.flags)){var s=o.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(aY=u;null!==aY;){var c=aY;switch(c.tag){case 0:case 11:case 15:aZ(8,c,o)}var d=c.child;if(null!==d)d.return=c,aY=d;else for(;null!==aY;){var p=(c=aY).sibling,h=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[r$],delete n[rU],delete n[rW],delete n[rK],delete n[rG]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){aY=null;break}if(null!==p){p.return=h,aY=p;break}aY=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}aY=o}}if(0!=(2064&o.subtreeFlags)&&null!==a)a.return=o,aY=a;else for(;null!==aY;){if(o=aY,0!=(2048&o.flags))switch(o.tag){case 0:case 11:case 15:aZ(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,aY=y;break}aY=o.return}}var b=e.current;for(aY=b;null!==aY;){var x=(a=aY).child;if(0!=(2064&a.subtreeFlags)&&null!==x)x.return=a,aY=x;else for(a=b;null!==aY;){if(s=aY,0!=(2048&s.flags))try{switch(s.tag){case 0:case 11:case 15:aJ(9,s)}}catch(e){s2(s,s.return,e)}if(s===a){aY=null;break}var w=s.sibling;if(null!==w){w.return=s.return,aY=w;break}aY=s.return}}if(sl=i,iu(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tk=n,ss.transition=t}}return!1}function s1(e,t,n){t=am(e,t=ad(n,t),1),e=i2(e,t,1),t=sD(),null!==e&&(tw(e,1,t),sF(e,t))}function s2(e,t,n){if(3===e.tag)s1(e,e,n);else for(;null!==t;){if(3===t.tag){s1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sC||!sC.has(r))){e=ag(t,e=ad(n,e),1),t=i2(t,e,1),e=sD(),null!==t&&(tw(t,1,e),sF(t,e));break}}t=t.return}}function s3(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=sD(),e.pingedLanes|=e.suspendedLanes&n,su===e&&(sd&n)===n&&(4===sh||3===sh&&(130023424&sd)===sd&&500>tn()-sw?sK(e,0):sy|=n),sF(e,t)}function s4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=sD();null!==(e=iX(e,t))&&(tw(e,t,n),sF(e,n))}function s6(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),s4(e,n)}function s5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(f(314))}null!==r&&r.delete(t),s4(e,n)}function s8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s7(e,t,n,r){return new s8(e,t,n,r)}function s9(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var n=e.alternate;return null===n?((n=s7(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lt(e,t,n,r,i,o){var a=2;if(r=e,"function"==typeof e)s9(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case M:return ln(n.children,i,o,t);case L:a=8,i|=8;break;case A:return(e=s7(12,n,t,2|i)).elementType=A,e.lanes=o,e;case z:return(e=s7(13,n,t,i)).elementType=z,e.lanes=o,e;case F:return(e=s7(19,n,t,i)).elementType=F,e.lanes=o,e;case V:return lr(n,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case N:a=10;break e;case D:a=9;break e;case O:a=11;break e;case I:a=14;break e;case _:a=16,r=null;break e}throw Error(f(130,null==e?e:typeof e,""))}return(t=s7(a,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return(e=s7(7,e,r,t)).lanes=n,e}function lr(e,t,n,r){return(e=s7(22,e,r,t)).elementType=V,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return(e=s7(6,e,null,t)).lanes=n,e}function lo(e,t,n){return(t=s7(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function la(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tx(0),this.expirationTimes=tx(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tx(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,n,r,i,o,a,s,l){return e=new la(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=s7(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iJ(o),e}function ll(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(f(171))}if(1===e.tag){var n=e.type;if(r7(n))return it(e,n,t)}return t}function lu(e,t,n,r,i,o,a,s,l){return(e=ls(n,r,!0,e,i,o,a,s,l)).context=ll(null),n=e.current,(o=i1(r=sD(),i=sO(n))).callback=null!=t?t:null,i2(n,o,i),e.current.lanes=i,tw(e,i,r),sF(e,r),e}function lc(e,t,n,r){var i=t.current,o=sD(),a=sO(i);return n=ll(n),null===t.context?t.context=n:t.pendingContext=n,(t=i1(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=i2(i,t,a))&&(sz(e,i,a,o),i3(e,i,a)),a}function ld(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function lp(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}l=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r6.current)aw=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return aw=!1,function(e,t,n){switch(t.tag){case 3:aL(t),iO();break;case 5:ov(t);break;case 1:r7(t.type)&&ir(t);break;case 4:om(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;r2(i_,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ob,1&ob.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return aO(e,t,n);return r2(ob,1&ob.current),null!==(e=a$(e,t,n))?e.sibling:null}r2(ob,1&ob.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return aV(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),r2(ob,ob.current),!r)return null;break;case 22:case 23:return t.lanes=0,aC(e,t,n)}return a$(e,t,n)}(e,t,n);aw=0!=(131072&e.flags)}}else aw=!1,iC&&0!=(1048576&t.flags)&&iw(t,ih,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;aB(e,t),e=t.pendingProps;var i=r8(t,r4.current);iK(t,n),i=oO(null,t,r,e,i,n);var o=oz();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r7(r)?(o=!0,ir(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,iJ(t),i.updater=i9,t.stateNode=i,i._reactInternals=t,or(t,r,e,n),t=aM(null,t,r,!0,o,n)):(t.tag=0,iC&&o&&iS(t),aS(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(aB(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return s9(e)?1:0;if(null!=e){if((e=e.$$typeof)===O)return 11;if(e===I)return 14}return 2}(r),e=iI(r,e),i){case 0:t=aj(null,t,r,e,n);break e;case 1:t=aR(null,t,r,e,n);break e;case 11:t=ak(null,t,r,e,n);break e;case 14:t=aE(null,t,r,iI(r.type,e),n);break e}throw Error(f(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iI(r,i),aj(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iI(r,i),aR(e,t,r,i,n);case 3:e:{if(aL(t),null===e)throw Error(f(387));r=t.pendingProps,i=(o=t.memoizedState).element,i0(e,t),i6(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){i=ad(Error(f(423)),t),t=aA(e,t,r,n,i);break e}if(r!==i){i=ad(Error(f(424)),t),t=aA(e,t,r,n,i);break e}for(iP=r_(t.stateNode.containerInfo.firstChild),iE=t,iC=!0,iT=null,n=ou(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(iO(),r===i){t=a$(e,t,n);break e}aS(e,t,r,n)}t=t.child}return t;case 5:return ov(t),null===e&&iL(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,rA(r,i)?a=null:null!==o&&rA(r,o)&&(t.flags|=32),aT(e,t),aS(e,t,a,n),t.child;case 6:return null===e&&iL(t),null;case 13:return aO(e,t,n);case 4:return om(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ol(t,null,r,n):aS(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iI(r,i),ak(e,t,r,i,n);case 7:return aS(e,t,t.pendingProps,n),t.child;case 8:case 12:return aS(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,r2(i_,r._currentValue),r._currentValue=a,null!==o){if(nq(o.value,a)){if(o.children===i.children&&!r6.current){t=a$(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){a=o.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===o.tag){(l=i1(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),iW(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===o.tag)a=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(a=o.return))throw Error(f(341));a.lanes|=n,null!==(s=a.alternate)&&(s.lanes|=n),iW(a,n,t),a=o.sibling}else a=o.child;if(null!==a)a.return=o;else for(a=o;null!==a;){if(a===t){a=null;break}if(null!==(o=a.sibling)){o.return=a.return,a=o;break}a=a.return}o=a}}aS(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,iK(t,n),r=r(i=iG(i)),t.flags|=1,aS(e,t,r,n),t.child;case 14:return i=iI(r=t.type,t.pendingProps),i=iI(r.type,i),aE(e,t,r,i,n);case 15:return aP(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iI(r,i),aB(e,t),t.tag=1,r7(r)?(e=!0,ir(t)):e=!1,iK(t,n),ot(t,r,i),or(t,r,i,n),aM(null,t,r,!0,e,n);case 19:return aV(e,t,n);case 22:return aC(e,t,n)}throw Error(f(156,t.tag))};var lh="function"==typeof reportError?reportError:function(e){console.error(e)};function lm(e){this._internalRoot=e}function lg(e){this._internalRoot=e}function lv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ly(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lb(){}function lx(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"==typeof i){var s=i;i=function(){var e=ld(a);s.call(e)}}lc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=ld(a);o.call(e)}}var a=lu(t,r,e,0,null,!1,!1,"",lb);return e._reactRootContainer=a,e[rH]=a.current,ry(8===e.nodeType?e.parentNode:e),sH(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=ld(l);s.call(e)}}var l=ls(e,0,!1,null,null,!1,!1,"",lb);return e._reactRootContainer=l,e[rH]=l.current,ry(8===e.nodeType?e.parentNode:e),sH(function(){lc(t,l,n,r)}),l}(n,t,e,i,r);return ld(a)}lg.prototype.render=lm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(f(409));lc(e,t,null,null)},lg.prototype.unmount=lm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;sH(function(){lc(null,e,null,null)}),t[rH]=null}},lg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tj();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tF.length&&0!==t&&t<tF[n].priority;n++);tF.splice(n,0,e),0===n&&tB(e)}},tP=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tS(t,1|n),sF(t,tn()),0==(6&sl)&&(sS=tn()+500,iu()))}break;case 13:sH(function(){var t=iX(e,1);null!==t&&sz(t,e,1,sD())}),lp(e,1)}},tC=function(e){if(13===e.tag){var t=iX(e,134217728);null!==t&&sz(t,e,134217728,sD()),lp(e,134217728)}},tT=function(e){if(13===e.tag){var t=sO(e),n=iX(e,t);null!==n&&sz(n,e,t,sD()),lp(e,t)}},tj=function(){return tk},tR=function(e,t){var n=tk;try{return tk=e,t()}finally{tk=n}},eI=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=rX(r);if(!i)throw Error(f(90));eu(r),eh(r,i)}}}break;case"textarea":ew(e,n);break;case"select":null!=(t=n.value)&&ey(e,!!n.multiple,t,!1)}},eH=sU,eW=sH;var lw={findFiberByHostInstance:rY,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lS={bundleType:lw.bundleType,version:lw.version,rendererPackageName:lw.rendererPackageName,rendererConfig:lw.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:lw.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lk.isDisabled&&lk.supportsFiber)try{tu=lk.inject(lS),tc=lk}catch(e){}}U={usingClientEntryPoint:!1,Events:[rq,rQ,rX,e$,eU,sU]},H=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lv(t))throw Error(f(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:R,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},W=function(e,t){if(!lv(e))throw Error(f(299));var n=!1,r="",i=lh;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,n,!1,r,i),e[rH]=t.current,ry(8===e.nodeType?e.parentNode:e),new lm(t)},K=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(f(188));throw Error(f(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},G=function(e){return sH(e)},Y=function(e,t,n){if(!ly(t))throw Error(f(200));return lx(null,e,t,!0,n)},q=function(e,t,n){if(!lv(e))throw Error(f(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",a=lh;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=lu(t,null,e,1,null!=n?n:null,i,!1,o,a),e[rH]=t.current,ry(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lg(t)},Q=function(e,t,n){if(!ly(t))throw Error(f(200));return lx(null,e,t,!1,n)},X=function(e){if(!ly(e))throw Error(f(40));return!!e._reactRootContainer&&(sH(function(){lx(null,null,e,!1,function(){e._reactRootContainer=null,e[rH]=null})}),!0)},Z=sU,J=function(e,t,n,r){if(!ly(n))throw Error(f(200));if(null==e||void 0===e._reactInternals)throw Error(f(38));return lx(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),u.register("fO90s",function(e,t){e.exports=u("gcnCG")}),u.register("gcnCG",function(e,n){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,n))u<i&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else if(u<i&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t(e.exports,"unstable_now",()=>s,e=>s=e),t(e.exports,"unstable_IdlePriority",()=>l,e=>l=e),t(e.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),t(e.exports,"unstable_LowPriority",()=>c,e=>c=e),t(e.exports,"unstable_NormalPriority",()=>d,e=>d=e),t(e.exports,"unstable_Profiling",()=>f,e=>f=e),t(e.exports,"unstable_UserBlockingPriority",()=>p,e=>p=e),t(e.exports,"unstable_cancelCallback",()=>h,e=>h=e),t(e.exports,"unstable_continueExecution",()=>m,e=>m=e),t(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),t(e.exports,"unstable_getCurrentPriorityLevel",()=>v,e=>v=e),t(e.exports,"unstable_getFirstCallbackNode",()=>y,e=>y=e),t(e.exports,"unstable_next",()=>b,e=>b=e),t(e.exports,"unstable_pauseExecution",()=>x,e=>x=e),t(e.exports,"unstable_requestPaint",()=>w,e=>w=e),t(e.exports,"unstable_runWithPriority",()=>S,e=>S=e),t(e.exports,"unstable_scheduleCallback",()=>k,e=>k=e),t(e.exports,"unstable_shouldYield",()=>E,e=>E=e),t(e.exports,"unstable_wrapCallback",()=>P,e=>P=e),"object"==typeof performance&&"function"==typeof performance.now){var s,l,u,c,d,f,p,h,m,g,v,y,b,x,w,S,k,E,P,C,T=performance;s=function(){return T.now()}}else{var j=Date,R=j.now();s=function(){return j.now()-R}}var M=[],L=[],A=1,N=null,D=3,O=!1,z=!1,F=!1,I="function"==typeof setTimeout?setTimeout:null,_="function"==typeof clearTimeout?clearTimeout:null,V="undefined"!=typeof setImmediate?setImmediate:null;function B(e){for(var t=i(L);null!==t;){if(null===t.callback)o(L);else if(t.startTime<=e)o(L),t.sortIndex=t.expirationTime,r(M,t);else break;t=i(L)}}function $(e){if(F=!1,B(e),!z){if(null!==i(M))z=!0,J(U);else{var t=i(L);null!==t&&ee($,t.startTime-e)}}}function U(e,t){z=!1,F&&(F=!1,_(K),K=-1),O=!0;var n=D;try{for(B(t),N=i(M);null!==N&&(!(N.expirationTime>t)||e&&!q());){var r=N.callback;if("function"==typeof r){N.callback=null,D=N.priorityLevel;var a=r(N.expirationTime<=t);t=s(),"function"==typeof a?N.callback=a:N===i(M)&&o(M),B(t)}else o(M);N=i(M)}if(null!==N)var l=!0;else{var u=i(L);null!==u&&ee($,u.startTime-t),l=!1}return l}finally{N=null,D=n,O=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,W=null,K=-1,G=5,Y=-1;function q(){return!(s()-Y<G)}function Q(){if(null!==W){var e=s();Y=e;var t=!0;try{t=W(!0,e)}finally{t?C():(H=!1,W=null)}}else H=!1}if("function"==typeof V)C=function(){V(Q)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=Q,C=function(){Z.postMessage(null)}}else C=function(){I(Q,0)};function J(e){W=e,H||(H=!0,C())}function ee(e,t){K=I(function(){e(s())},t)}l=5,u=1,c=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){z||O||(z=!0,J(U))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<e?Math.floor(1e3/e):5},v=function(){return D},y=function(){return i(M)},b=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},x=function(){},w=function(){},S=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},k=function(e,t,n){var o=s();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?o+n:o,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:A++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>o?(e.sortIndex=n,r(L,e),null===i(M)&&e===i(L)&&(F?(_(K),K=-1):F=!0,ee($,n-o))):(e.sortIndex=a,r(M,e),z||O||(z=!0,J(U))),e},E=q,P=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}});var c={};c=u("1b2ls"),u("acw62");var d={};function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),p=(d=u("Xw6Mv")).createRoot,d.hydrateRoot;var p,h,m=h||(h={});m.Pop="POP",m.Push="PUSH",m.Replace="REPLACE";var g=function(e){return e};function v(e){e.preventDefault(),e.returnValue=""}function y(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(e){return e!==t})}},call:function(t){e.forEach(function(e){return e&&e(t)})}}}function b(e){var t=e.pathname,n=e.search;return(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}function x(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var w=u("acw62");function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var k=function(e){return e};function E(e,t){if(!e)throw Error(t)}var P=(0,w.createContext)({static:!1}),C=(0,w.createContext)({outlet:null,params:k({}),pathname:"",route:null});function T(){return(0,w.useContext)(C).outlet}function j(e){return void 0===(e=e.element)?(0,w.createElement)(T,null):e}function R(e){var t=e.children;t=void 0===t?null:t;var n=e.action;n=void 0===n?h.Pop:n;var r=e.location,i=e.navigator;return e=void 0!==(e=e.static)&&e,L()&&E(!1),(0,w.createElement)(P.Provider,{children:t,value:{action:n,location:r,navigator:i,static:e}})}function M(e){var t,n,r,i,o,a,s,l=e.basename;return l=void 0===l?"":l,t=e=function e(t){var n=[];return(0,w.Children).forEach(t,function(t){if((0,w.isValidElement)(t)){if(t.type===w.Fragment)n.push.apply(n,e(t.props.children));else{var r={path:t.props.path||"/",caseSensitive:!0===t.props.caseSensitive,element:t};t.props.children&&(t=e(t.props.children)).length&&(r.children=t),n.push(r)}}}),n}(e.children),void 0===(n=l)&&(n=""),i=(r=(0,w.useContext)(C)).route,o=r.pathname,a=r.params,n=n?F([o,n]):o,s=A(),(i=(0,w.useMemo)(function(){return function(e,t,n){if(void 0===n&&(n=""),"string"==typeof t&&(t=x(t)),t=t.pathname||"/",n){if(n=n.replace(/^\/*/,"/").replace(/\/+$/,""),!t.startsWith(n))return null;t=t===n?"/":t.slice(n.length)}i=(r=e=function e(t,n,r,i,o){return void 0===n&&(n=[]),void 0===r&&(r=""),void 0===i&&(i=[]),void 0===o&&(o=[]),t.forEach(function(t,a){var s=F([r,t.path]),l=i.concat(t);a=o.concat(a),t.children&&e(t.children,n,s,l,a),n.push([s,l,a])}),n}(e)).reduce(function(e,t){var n,r;return e[t=t[0]]=(r=(n=(n=t).split("/")).length,n.some(O)&&(r+=-2),n.filter(function(e){return!O(e)}).reduce(function(e,t){return e+(D.test(t)?2:""===t?1:10)},r)),e},{}),function(e,t){var n=e.slice(0);e.sort(function(e,r){return t(e,r)||n.indexOf(e)-n.indexOf(r)})}(r,function(e,t){var n=e[2];e=i[e[0]];var r=t[2];return e!==(t=i[t[0]])?t-e:n.length===r.length&&n.slice(0,-1).every(function(e,t){return e===r[t]})?n[n.length-1]-r[r.length-1]:0});var r,i,o=null;for(n=0;null==o&&n<e.length;++n)e:{o=t;for(var a=e[n][1],s="/",l={},u=[],c=0;c<a.length;++c){var d=a[c],f="/"===s?o:o.slice(s.length)||"/";if(!(f=function(e,t){"string"==typeof e&&(e={path:e});var n=e;e=n.path;var r=n.caseSensitive;if(r=(n=function(e,t,n){var r=[],i="^("+e.replace(/^\/*/,"/").replace(/\/?\*?$/,"").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,function(e,t){return r.push(t),"([^\\/]+)"})+")";return e.endsWith("*")?(e.endsWith("/*")&&(i+="\\/?"),r.push("*"),i+="(.*)"):n&&(i+="\\/?"),n&&(i+="$"),[new RegExp(i,t?void 0:"i"),r]}(e,void 0!==r&&r,void 0===(n=n.end)||n))[1],!(n=t.match(n[0])))return null;t=n[1];var i=n.slice(2);return{path:e,pathname:t,params:r=r.reduce(function(e,t,n){n=i[n];try{var r=decodeURIComponent(n.replace(/\+/g," "))}catch(e){r=n}return e[t]=r,e},{})}}({path:d.path,caseSensitive:d.caseSensitive,end:c===a.length-1},f))){o=null;break e}s=F([s,f.pathname]),l=S({},l,{},f.params),u.push({route:d,pathname:s,params:k(l)})}o=u}return o}(t,s,n)},[s,t,n]))?i.reduceRight(function(e,t){var r=t.pathname,i=t.route;return(0,w.createElement)(C.Provider,{children:i.element,value:{outlet:e,params:k(S({},a,{},t.params)),pathname:F([n,r]),route:i}})},null):null}function L(){return null!=(0,w.useContext)(P).location}function A(){return L()||E(!1),(0,w.useContext)(P).location}function N(e){var t=(0,w.useContext)(C).pathname;return(0,w.useMemo)(function(){return z(e,t)},[e,t])}var D=/^:\w+$/;function O(e){return"*"===e}function z(e,t){void 0===t&&(t="/");var n,r,i="string"==typeof e?x(e):e;e=i.pathname;var o=i.search;return o=void 0===o?"":o,i=void 0===(i=i.hash)?"":i,{pathname:e?(n=e,r=(e.startsWith("/")?"/":t).replace(/\/+$/,"").replace(/\/\/+/g,"/").split("/"),n.replace(/\/\/+/g,"/").split("/").forEach(function(e){".."===e?1<r.length&&r.pop():"."!==e&&r.push(e)}),1<r.length?F(r):"/"):t,search:o,hash:i}}function F(e){return e.join("/").replace(/\/\/+/g,"/")}var w=u("acw62");function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r={},i=Object.keys(e);for(n=0;n<i.length;n++){var o=i[n];0<=t.indexOf(o)||(r[o]=e[o])}return r}function V(e){var t=e.children;e=e.window;var n=(0,w.useRef)();null==n.current&&(n.current=function(e){function t(){var e=x(s.location.hash.substr(1)),t=e.pathname,n=e.search;e=e.hash;var r=l.state||{};return[r.idx,g({pathname:void 0===t?"/":t,search:void 0===n?"":n,hash:void 0===e?"":e,state:r.usr||null,key:r.key||"default"})]}function n(){if(u)w.call(u),u=null;else{var e=h.Pop,n=t(),r=n[0];if(n=n[1],w.length){if(null!=r){var i=d-r;i&&(u={action:e,location:n,retry:function(){a(-1*i)}},a(i))}}else o(e)}}function r(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=-1===(n=(t=s.location.href).indexOf("#"))?t:t.slice(0,n)),n+"#"+("string"==typeof e?e:b(e))}function i(e,t){return void 0===t&&(t=null),g(f({},p,{},"string"==typeof e?x(e):e,{state:t,key:Math.random().toString(36).substr(2,8)}))}function o(e){c=e,d=(e=t())[0],p=e[1],m.call({action:c,location:p})}function a(e){l.go(e)}void 0===e&&(e={});var s=void 0===(e=e.window)?document.defaultView:e,l=s.history,u=null;s.addEventListener("popstate",n),s.addEventListener("hashchange",function(){b(t()[1])!==b(p)&&n()});var c=h.Pop,d=(e=t())[0],p=e[1],m=y(),w=y();return null==d&&(d=0,l.replaceState(f({},l.state,{idx:d}),"")),{get action(){return c},get location(){return p},createHref:r,push:function e(t,n){var a=h.Push,u=i(t,n);if(!w.length||(w.call({action:a,location:u,retry:function(){e(t,n)}}),0)){var c=[{usr:u.state,key:u.key,idx:d+1},r(u)];u=c[0],c=c[1];try{l.pushState(u,"",c)}catch(e){s.location.assign(c)}o(a)}},replace:function e(t,n){var a=h.Replace,s=i(t,n);w.length&&(w.call({action:a,location:s,retry:function(){e(t,n)}}),1)||(s=[{usr:s.state,key:s.key,idx:d},r(s)],l.replaceState(s[0],"",s[1]),o(a))},go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(e){return m.push(e)},block:function(e){var t=w.push(e);return 1===w.length&&s.addEventListener("beforeunload",v),function(){t(),w.length||s.removeEventListener("beforeunload",v)}}}}({window:e}));var r=n.current;n=(e=(0,w.useReducer)(function(e,t){return t},{action:r.action,location:r.location}))[0];var i=e[1];return(0,w.useLayoutEffect)(function(){return r.listen(i)},[r]),(0,w.createElement)(R,{children:t,action:n.action,location:n.location,navigator:r})}var B=(0,w.forwardRef)(function(e,t){var n,r,i,o,a,s=e.onClick,l=e.replace,u=void 0!==l&&l,c=e.state,d=e.target,f=e.to;e=_(e,["onClick","replace","state","target","to"]),n=f,L()||E(!1),r=(0,w.useContext)(P).navigator,n=N(n),l=r.createHref(n);var p=(L()||E(!1),i=(0,w.useContext)(P).navigator,o=(0,w.useContext)(C).pathname,a=(0,w.useRef)(!1),(0,w.useEffect)(function(){a.current=!0}),(0,w.useCallback)(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?i.go(e):(e=z(e,o),(t.replace?i.replace:i.push)(e,t.state)))},[i,o])),h=A(),m=N(f);return(0,w.createElement)("a",Object.assign({},e,{href:l,onClick:function(e){s&&s(e),e.defaultPrevented||0!==e.button||d&&"_self"!==d||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),p(f,{replace:e=!!u||b(h)===b(m),state:c}))},ref:t,target:d}))});/*
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
 */function $(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function U(e,t){let n=window.getComputedStyle(e),r=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return r&&t&&(r=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),r}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function H(e,t){let n=e;for(U(n,t)&&(n=n.parentElement);n&&!U(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function W(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function K(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function G(){return K(/^Mac/i)}function Y(){return K(/^iPad/i)||// iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
G()&&navigator.maxTouchPoints>1}function q(){return K(/^iPhone/i)||Y()}function Q(){return W(/Android/i)}(0,w.forwardRef)(function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=void 0===(n=e.activeClassName)?"active":n;n=e.activeStyle;var o=e.caseSensitive,a=void 0!==o&&o,s=void 0===(o=e.className)?"":o,l=void 0!==(o=e.end)&&o,u=e.style;o=e.to,e=_(e,"aria-current activeClassName activeStyle caseSensitive className end style to".split(" "));var c=A(),d=N(o);return c=c.pathname,d=d.pathname,a||(c=c.toLowerCase(),d=d.toLowerCase()),r=(a=l?c===d:c.startsWith(d))?r:void 0,i=[s,a?i:null].filter(Boolean).join(" "),n=I({},u,{},a?n:null),(0,w.createElement)(B,Object.assign({},e,{"aria-current":r,className:i,ref:t,style:n,to:o}))});var w=(u("acw62"),u("acw62"));/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const X="undefined"!=typeof document?/*@__PURE__*/n(w).useLayoutEffect:()=>{};/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function Z(e){let t=(0,w.useRef)(null);// @ts-ignore
return X(()=>{t.current=e},[e]),(0,w.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}var w=(u("acw62"),u("acw62"),u("acw62"),u("acw62"));/*
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
const J={prefix:String(Math.round(1e10*Math.random())),current:0},ee=/*@__PURE__*/n(w).createContext(J),et=/*@__PURE__*/n(w).createContext(!1);let en=!!("undefined"!=typeof window&&window.document&&window.document.createElement),er=new WeakMap;const ei="function"==typeof /*@__PURE__*/n(w).useId?function(e){// @ts-ignore
let t=/*@__PURE__*/n(w).useId(),[r]=(0,w.useState)(// In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
"function"==typeof /*@__PURE__*/n(w).useSyncExternalStore?/*@__PURE__*/n(w).useSyncExternalStore(es,eo,ea):(0,w.useContext)(et)),i=r?"react-aria":`react-aria${J.prefix}`;return e||`${i}-${t}`}:function(e){let t=(0,w.useContext)(ee);// If we are rendering in a non-DOM environment, and there's no SSRProvider,
// provide a warning to hint to the developer to add one.
t!==J||en||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=function(e=!1){let t=(0,w.useContext)(ee),r=(0,w.useRef)(null);// eslint-disable-next-line rulesdir/pure-render
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
let e=null===(o=/*@__PURE__*/n(w).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o?void 0:null===(i=o.ReactCurrentOwner)||void 0===i?void 0:i.current;if(e){let n=er.get(e);null==n?er.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(// On the second render, the memoizedState gets reset by React.
// Reset the counter, and remove from the weak map so we don't
// do this for subsequent useId calls.
t.current=n.id,er.delete(e))}// eslint-disable-next-line rulesdir/pure-render
r.current=++t.current}// eslint-disable-next-line rulesdir/pure-render
return r.current}(!!e),i=`react-aria${t.prefix}`;return e||`${i}-${r}`};function eo(){return!1}function ea(){return!0}// eslint-disable-next-line @typescript-eslint/no-unused-vars
function es(e){// noop
return()=>{}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let el=!!("undefined"!=typeof window&&window.document&&window.document.createElement),eu=new Map;var ec=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(n=0;n<o;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r)}else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(r&&(r+=" "),r+=t);return r};/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function ed(...e){// Start with a base clone of the first argument. This is a lot faster than starting
// with an empty object and adding properties as we go.
let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];// Chain events
"function"==typeof n&&"function"==typeof i&&// This is a lot faster than a regex.
"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=/* 'A' */65&&/* 'Z' */90>=e.charCodeAt(2)?t[e]=$(n,i):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof i?t[e]=ec(n,i):"id"===e&&n&&i?t.id=function(e,t){if(e===t)return e;let n=eu.get(e);if(n)return n(t),t;let r=eu.get(t);return r?(r(e),e):t}(n,i):t[e]=void 0!==i?i:n}}return t}var w=(u("acw62"),u("acw62"),u("acw62"));try{// @ts-ignore
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
const ef=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),ep=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);!/*
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
let t=new Intl.Locale(e).maximize().script;return ef.has(t)}// If not, just guess by the language (first part of the locale)
let t=e.split("-")[0];ep.has(t)})(e)}(),/*@__PURE__*/n(w).createContext(null),new WeakMap;var w=u("acw62");/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function eh(e){if(function(){if(null==em){em=!1;try{document.createElement("div").focus({get preventScroll(){return em=!0,!0}})}catch(e){// Ignore
}}return em}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let em=null,eg=new Map,ev=new Set;function ey(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;// Remove property from list of transitioning properties.
let r=eg.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),eg.delete(n.target)),0===eg.size)){for(let e of ev)e();ev.clear()}};document.body.addEventListener("transitionrun",n=>{if(!e(n)||!n.target)return;// Add the transitioning property to the list for this element.
let r=eg.get(n.target);r||(r=new Set,eg.set(n.target,r),// The transitioncancel event must be registered on the element itself, rather than as a global
// event. This enables us to handle when the node is deleted from the document while it is transitioning.
// In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)}),document.body.addEventListener("transitionend",t)}function eb(e){// Wait one frame to see if an animation starts, e.g. a transition on mount.
requestAnimationFrame(()=>{// If no transitions are running, call the function immediately.
// Otherwise, add it to a list of callbacks to run at the end of the animation.
0===eg.size?e():ev.add(e)})}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function ex(e,t){X(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function ew(e){return(// JAWS/NVDA with Firefox.
0===e.mozInputSource&&!!e.isTrusted||(Q()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType))}"undefined"!=typeof document&&("loading"!==document.readyState?ey():document.addEventListener("DOMContentLoaded",ey));var w=u("acw62");function eS(e,t,n=!0){var r,i;let{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}=t;W(/Firefox/i)&&(null===(i=window.event)||void 0===i?void 0:null===(r=i.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(G()?o=!0:a=!0);// WebKit does not support firing click events with modifier keys, but does support keyboard events.
// https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
let u=W(/AppleWebKit/i)&&!W(/Chrome/i)&&G()&&!Y()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:o,ctrlKey:a,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:o,ctrlKey:a,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});eS.isOpening=n,eh(e),e.dispatchEvent(u),eS.isOpening=!1}(0,w.createContext)({isNative:!0,open:function(e,t){!function(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}(e,e=>eS(e,t))},useHref:e=>e}),// https://github.com/parcel-bundler/parcel/issues/8724
eS.isOpening=!1;var w=(u("acw62"),u("acw62"),u("acw62"),u("acw62"));function ek(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function eE(e,t,n){var r=ek(e,t,"set");return!function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)// always strict and private fields can only be used inside
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
let eP="default",eC="",eT=new WeakMap;function ej(e){q()?("default"===eP&&(eC=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),eP="disabled"):(e instanceof HTMLElement||e instanceof SVGElement)&&(// If not iOS, store the target's original user-select and change to user-select: none
// Ignore state since it doesn't apply for non iOS
eT.set(e,e.style.userSelect),e.style.userSelect="none")}function eR(e){if(q())// If the state is already default, there's nothing to do.
// If it is restoring, then there's no need to queue a second restore.
"disabled"===eP&&(eP="restoring",// There appears to be a delay on iOS where selection still might occur
// after pointer up, so wait a bit before removing user-select.
setTimeout(()=>{eb(()=>{// Avoid race conditions
"restoring"===eP&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=eC||""),eC="",eP="default")})},300));else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&eT.has(e)){let t=eT.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),eT.delete(e)}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const eM=/*@__PURE__*/n(w).createContext(null);eM.displayName="PressResponderContext";var eL=/*#__PURE__*/new WeakMap;class eA{continuePropagation(){eE(this,eL,!1)}get shouldStopPropagation(){var e;return(e=ek(this,eL,"get")).get?e.get.call(this):e.value}constructor(e,t,n){!function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,eL),eL.set(this,{writable:!0,value:void 0}),eE(this,eL,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}const eN=Symbol("linkClicked");function eD(e){let t,n,r,i,{onPress:o,onPressChange:a,onPressStart:s,onPressEnd:l,onPressUp:u,isDisabled:c,isPressed:d,preventFocusOnPress:f,shouldCancelOnPointerExit:p,allowTextSelectionOnPress:h,ref:m,...g}=function(e){// Consume context from <PressResponder> and merge with props.
let t=(0,w.useContext)(eM);if(t){let{register:n,...r}=t;e=ed(r,e),n()}return ex(t,e.ref),e}(e),[v,y]=(0,w.useState)(!1),b=(0,w.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:x,removeAllGlobalListeners:S}=(t=(0,w.useRef)(new Map),n=(0,w.useCallback)((e,n,r,i)=>{// Make sure we remove the listener after it is called with the `once` option.
let o=(null==i?void 0:i.once)?(...e)=>{t.current.delete(r),r(...e)}:r;t.current.set(r,{type:n,eventTarget:e,fn:o,options:i}),e.addEventListener(n,r,i)},[]),r=(0,w.useCallback)((e,n,r,i)=>{var o;let a=(null===(o=t.current.get(r))||void 0===o?void 0:o.fn)||r;e.removeEventListener(n,a,i),t.current.delete(r)},[]),i=(0,w.useCallback)(()=>{t.current.forEach((e,t)=>{r(e.eventTarget,e.type,t,e.options)})},[r]),(0,w.useEffect)(()=>i,[i]),{addGlobalListener:n,removeGlobalListener:r,removeAllGlobalListeners:i}),k=Z((e,t)=>{let n=b.current;if(c||n.didFirePressStart)return;let r=!0;if(n.isTriggeringEvent=!0,s){let n=new eA("pressstart",t,e);s(n),r=n.shouldStopPropagation}return a&&a(!0),n.isTriggeringEvent=!1,n.didFirePressStart=!0,y(!0),r}),E=Z((e,t,n=!0)=>{let r=b.current;if(!r.didFirePressStart)return;r.ignoreClickAfterPress=!0,r.didFirePressStart=!1,r.isTriggeringEvent=!0;let i=!0;if(l){let n=new eA("pressend",t,e);l(n),i=n.shouldStopPropagation}if(a&&a(!1),y(!1),o&&n&&!c){let n=new eA("press",t,e);o(n),i&&(i=n.shouldStopPropagation)}return r.isTriggeringEvent=!1,i}),P=Z((e,t)=>{let n=b.current;if(!c){if(u){n.isTriggeringEvent=!0;let r=new eA("pressup",t,e);return u(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0}}),C=Z(e=>{let t=b.current;t.isPressed&&(t.isOverTarget&&E(eI(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,S(),h||eR(t.target))}),T=Z(e=>{p&&C(e)}),j=(0,w.useMemo)(()=>{let e=b.current,t={onKeyDown(t){if(ez(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){eB(t.target,t.key)&&t.preventDefault();// If the event is repeating, it may have started on a different element
// after which focus moved to the current element. Ignore these events and
// only handle the first key down event.
let r=!0;e.isPressed||t.repeat||(e.target=t.currentTarget,e.isPressed=!0,r=k(t,"keyboard"),// Focus may move before the key up event, so register the event on the document
// instead of the same element where the key down event occurred.
x(document,"keyup",n,!1)),r&&t.stopPropagation(),t.metaKey&&G()&&e.metaKeyEvents.set(t.key,t.nativeEvent)}else"Meta"===t.key&&(e.metaKeyEvents=new Map)},onKeyUp(t){ez(t.nativeEvent,t.currentTarget)&&!t.repeat&&t.currentTarget.contains(t.target)&&P(eI(e.target,t),"keyboard")},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button&&!e.isTriggeringEvent&&!eS.isOpening){let n=!0;// If triggered from a screen reader or by using element.click(),
// trigger as if it were a keyboard click.
if(c&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&("virtual"===e.pointerType||ew(t.nativeEvent))){// Ensure the element receives focus (VoiceOver on iOS does not do this)
c||f||eh(t.currentTarget);let e=k(t,"virtual"),r=P(t,"virtual"),i=E(t,"virtual");n=e&&r&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{var n,r;if(e.isPressed&&ez(t,e.target)){eB(t.target,t.key)&&t.preventDefault();let n=t.target,i=E(eI(e.target,t),"keyboard",e.target.contains(n));S(),i&&t.stopPropagation(),"Enter"!==t.key&&eO(e.target)&&e.target.contains(n)&&!t[eN]&&(// Store a hidden property on the event so we only trigger link click once,
// even if there are multiple usePress instances attached to the element.
t[eN]=!0,eS(e.target,t,!1)),e.isPressed=!1,null===(r=e.metaKeyEvents)||void 0===r||r.delete(t.key)}else if("Meta"===t.key&&(null===(n=e.metaKeyEvents)||void 0===n?void 0:n.size)){// If we recorded keydown events that occurred while the Meta key was pressed,
// and those haven't received keyup events already, fire keyup events ourselves.
// See comment above for more info about the macOS bug causing this.
let t=e.metaKeyEvents;for(let n of(e.metaKeyEvents=null,t.values()))e.target.dispatchEvent(new KeyboardEvent("keyup",n))}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{var o;// Only handle left clicks, and ignore events that bubbled through portals.
if(0!==t.button||!t.currentTarget.contains(t.target))return;// iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
// Ignore and let the onClick handler take care of it instead.
// https://bugs.webkit.org/show_bug.cgi?id=222627
// https://bugs.webkit.org/show_bug.cgi?id=223202
if(o=t.nativeEvent,!Q()&&0===o.width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail&&"mouse"===o.pointerType){e.pointerType="virtual";return}eV(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let a=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,c||f||eh(t.currentTarget),h||ej(e.target),a=k(t,e.pointerType),x(document,"pointermove",n,!1),x(document,"pointerup",r,!1),x(document,"pointercancel",i,!1)),a&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(eV(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{// iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&e_(t,t.currentTarget)&&P(t,e.pointerType||t.pointerType)};// Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
// Use pointer move events instead to implement our own hit testing.
// See https://bugs.webkit.org/show_bug.cgi?id=199803
let n=t=>{t.pointerId===e.activePointerId&&(e_(t,e.target)?e.isOverTarget||(e.isOverTarget=!0,k(eI(e.target,t),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,E(eI(e.target,t),e.pointerType,!1),T(t)))},r=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(e_(t,e.target)?E(eI(e.target,t),e.pointerType):e.isOverTarget&&E(eI(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,S(),h||eR(e.target))},i=e=>{C(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&// Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
C(e)}}else{t.onMouseDown=t=>{// Only handle left clicks
if(0===t.button&&t.currentTarget.contains(t.target)){if(eV(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents){t.stopPropagation();return}e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=ew(t.nativeEvent)?"virtual":"mouse",c||f||eh(t.currentTarget),k(t,e.pointerType)&&t.stopPropagation(),x(document,"mouseup",n,!1)}},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,n=k(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,n=E(t,e.pointerType,!1),T(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&!e.ignoreEmulatedMouseEvents&&0===t.button&&P(t,e.pointerType||"mouse")};let n=t=>{// Only handle left clicks
if(0===t.button){if(e.isPressed=!1,S(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}e_(t,e.target)?E(eI(e.target,t),e.pointerType):e.isOverTarget&&E(eI(e.target,t),e.pointerType,!1),e.isOverTarget=!1}};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",c||f||eh(t.currentTarget),h||ej(e.target),k(t,e.pointerType)&&t.stopPropagation(),x(window,"scroll",r,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let n=eF(t.nativeEvent,e.activePointerId),r=!0;n&&e_(n,t.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,r=k(t,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,r=E(t,e.pointerType,!1),T(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let n=eF(t.nativeEvent,e.activePointerId),r=!0;n&&e_(n,t.currentTarget)?(P(t,e.pointerType),r=E(t,e.pointerType)):e.isOverTarget&&(r=E(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,h||eR(e.target),S()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&C(t))};let r=t=>{e.isPressed&&t.target.contains(e.target)&&C({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&C(e)}}return t},[x,c,f,S,h,C,T,E,k,P]);return(0,w.useEffect)(()=>()=>{h||eR(b.current.target)},[h]),{isPressed:d||v,pressProps:ed(g,j)}}function eO(e){return"A"===e.tagName&&e.hasAttribute("href")}function ez(e,t){let{key:n,code:r}=e,i=t.getAttribute("role");// Accessibility for keyboards. Space and Enter only.
// "Spacebar" is for IE 11
return("Enter"===n||" "===n||"Spacebar"===n||"Space"===r)&&!(t instanceof HTMLInputElement&&!eU(t,n)||t instanceof HTMLTextAreaElement||t.isContentEditable)&&// Links should only trigger with Enter key
!(("link"===i||!i&&eO(t))&&"Enter"!==n)}function eF(e,t){let n=e.changedTouches;for(let e=0;e<n.length;e++){let r=n[e];if(r.identifier===t)return r}return null}function eI(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function e_(e,t){let n,r,i=t.getBoundingClientRect(),o=(n=e.width/2||e.radiusX||0,r=e.height/2||e.radiusY||0,{top:e.clientY-r,right:e.clientX+n,bottom:e.clientY+r,left:e.clientX-n});return!(i.left>o.right)&&!(o.left>i.right)&&!(i.top>o.bottom)&&!(o.top>i.bottom)}function eV(e){// We cannot prevent default if the target is a draggable element.
return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function eB(e,t){return e instanceof HTMLInputElement?!eU(e,t):e instanceof HTMLButtonElement?"submit"!==e.type&&"reset"!==e.type:!eO(e)}const e$=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function eU(e,t){// Only space should toggle checkboxes and radios, not enter.
return"checkbox"===e.type||"radio"===e.type?" "===t:e$.has(e.type)}/*@__PURE__*/n(w).forwardRef(({children:e,...t},r)=>{let i=(0,w.useRef)();r=null!=r?r:i;let{pressProps:o}=eD({...t,ref:r}),a=/*@__PURE__*/n(w).Children.only(e);return /*@__PURE__*/n(w).cloneElement(a,{ref:r,...ed(a.props,o)})}),/*@__PURE__*/n(w).forwardRef(({children:e,...t},r)=>{let i=(0,w.useRef)(!1),o=(0,w.useContext)(eM),a=ed(o||{},{...t,ref:r||(null==o?void 0:o.ref),register(){i.current=!0,o&&o.register()}});return ex(o,r),(0,w.useEffect)(()=>{i.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),i.current=!0)},[]),/*@__PURE__*/n(w).createElement(eM.Provider,{value:a},e)});/*
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
 */class eH{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function eW(e){let t=(0,w.useRef)({isFocused:!1,observer:null});X(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=Z(t=>{null==e||e(t)});// This function is called during a React onFocus event.
return(0,w.useCallback)(e=>{// React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
// Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
// MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
// For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new eH("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){t.current.observer.disconnect();let e=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:e})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:e}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}/*
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
let eK=null,eG=new Set,eY=!1,eq=!1,eQ=!1;function eX(e,t){for(let n of eG)n(e,t)}function eZ(e){eq=!0,e.metaKey||!G()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(eK="keyboard",eX("keyboard",e))}function eJ(e){eK="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(eq=!0,eX("pointer",e))}function e0(e){ew(e)&&(eq=!0,eK="virtual")}function e1(e){// Firefox fires two extra focus events when the user first clicks into an iframe:
// first on the window, then on the document. We ignore these events so they don't
// cause keyboard focus rings to appear.
e.target!==window&&e.target!==document&&(eq||eQ||(eK="virtual",eX("virtual",e)),eq=!1,eQ=!1)}function e2(){// When the window is blurred, reset state. This is necessary when tabbing out of the window,
// for example, since a subsequent focus event won't be fired.
eq=!1,eQ=!0}/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */function e3(){if("undefined"==typeof window||eY)return;// Programmatic focus() calls shouldn't affect the current input modality.
// However, we need to detect other cases when a focus event occurs without
// a preceding user event (e.g. screen reader focus). Overriding the focus
// method on HTMLElement.prototype is a bit hacky, but works.
let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){eq=!0,e.apply(this,arguments)},document.addEventListener("keydown",eZ,!0),document.addEventListener("keyup",eZ,!0),document.addEventListener("click",e0,!0),// Register focus events on the window so they are sure to happen
// before React's event listeners (registered on the document).
window.addEventListener("focus",e1,!0),window.addEventListener("blur",e2,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",eJ,!0),document.addEventListener("pointermove",eJ,!0),document.addEventListener("pointerup",eJ,!0)):(document.addEventListener("mousedown",eJ,!0),document.addEventListener("mousemove",eJ,!0),document.addEventListener("mouseup",eJ,!0)),eY=!0}function e4(e,t){if(e.button>0)return!1;if(e.target){// if the event target is no longer in the document, ignore
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
 */function e6(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&n.stopPropagation()}}/*
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
if("virtual"===eK){let t=document.activeElement;eb(()=>{// If focus did not move and the element is still in the document, focus it.
document.activeElement===t&&document.contains(e)&&eh(e)})}else eh(e)}"undefined"!=typeof document&&("loading"!==document.readyState?e3():document.addEventListener("DOMContentLoaded",e3));const e8=/*@__PURE__*/n(w).createContext(null);let e7=null;function e9(e){var t,r,i;let o,a,{children:s,contain:l,restoreFocus:u,autoFocus:c}=e,d=(0,w.useRef)(),f=(0,w.useRef)(),p=(0,w.useRef)([]),{parentNode:h}=(0,w.useContext)(e8)||{},m=(0,w.useMemo)(()=>new tf({scopeRef:p}),[p]);X(()=>{// If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
// use the active scope as the parent instead of the parent from context. Layout effects run bottom
// up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
// that is being added should get the activeScope as its parent.
let e=h||tp.root;if(tp.getTreeNode(e.scopeRef)&&e7&&!ts(e7,e.scopeRef)){let t=tp.getTreeNode(e7);t&&(e=t)}// Add the node to the parent, and to the tree.
e.addChild(m),tp.addNode(m)},[m,h]),X(()=>{tp.getTreeNode(p).contain=l},[l]),X(()=>{// Find all rendered nodes between the sentinels and add them to the scope.
let e=d.current.nextSibling,t=[];for(;e&&e!==f.current;)t.push(e),e=e.nextSibling;p.current=t},[s]),X(()=>{if(r||i)return;let e=t.current,n=e=>{let n=e.target;to(n,t.current)?e7=t:ta(n)||(e7=null)};return document.addEventListener("focusin",n,!1),e.forEach(e=>e.addEventListener("focusin",n,!1)),()=>{document.removeEventListener("focusin",n,!1),e.forEach(e=>e.removeEventListener("focusin",n,!1))}},[t=p,r=u,i=l]),o=(0,w.useRef)(),a=(0,w.useRef)(null),X(()=>{let e=p.current;if(!l){// if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
a.current&&(cancelAnimationFrame(a.current),a.current=null);return}// Handle the Tab key to contain focus within the scope
let t=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!ti(p))return;let t=document.activeElement,n=p.current;if(!to(t,n))return;let r=tc(tr(n),{tabbable:!0},n);r.currentNode=t;let i=e.shiftKey?r.previousNode():r.nextNode();i||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,i=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),i&&tl(i,!0)},n=e=>{// If focusing an element in a child scope of the currently active scope, the child becomes active.
// Moving out of the active scope to an ancestor is not allowed.
(!e7||ts(e7,p))&&to(e.target,p.current)?(e7=p,o.current=e.target):ti(p)&&!ta(e.target,p)?o.current?o.current.focus():e7&&tu(e7.current):ti(p)&&(o.current=e.target)},r=e=>{a.current&&cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>{// Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
ti(p)&&!ta(document.activeElement,p)&&(e7=p,document.body.contains(e.target)?(o.current=e.target,o.current.focus()):e7&&tu(e7.current))})};return document.addEventListener("keydown",t,!1),document.addEventListener("focusin",n,!1),e.forEach(e=>e.addEventListener("focusin",n,!1)),e.forEach(e=>e.addEventListener("focusout",r,!1)),()=>{document.removeEventListener("keydown",t,!1),document.removeEventListener("focusin",n,!1),e.forEach(e=>e.removeEventListener("focusin",n,!1)),e.forEach(e=>e.removeEventListener("focusout",r,!1))}},[p,l]),X(()=>()=>{a.current&&cancelAnimationFrame(a.current)},[a]),function(e,t,n){// create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
let r=(0,w.useRef)("undefined"!=typeof document?document.activeElement:null);X(()=>{let r=e.current;if(!t||n)return;let i=()=>{// If focusing an element in a child scope of the currently active scope, the child becomes active.
// Moving out of the active scope to an ancestor is not allowed.
(!e7||ts(e7,e))&&to(document.activeElement,e.current)&&(e7=e)};return document.addEventListener("focusin",i,!1),r.forEach(e=>e.addEventListener("focusin",i,!1)),()=>{document.removeEventListener("focusin",i,!1),r.forEach(e=>e.removeEventListener("focusin",i,!1))};// eslint-disable-next-line react-hooks/exhaustive-deps
},[e,n]),X(()=>{if(!t)return;// Handle the Tab key so that tabbing out of the scope goes to the next element
// after the node that had focus when the scope mounted. This is important when
// using portals for overlays, so that focus goes to the expected element when
// tabbing out of the overlay.
let r=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!ti(e))return;let n=document.activeElement;if(!to(n,e.current))return;let r=tp.getTreeNode(e).nodeToRestore,i=tc(document.body,{tabbable:!0});// Find the next tabbable element after the currently focused element
i.currentNode=n;let o=t.shiftKey?i.previousNode():i.nextNode();// If there is no next element, or it is outside the current scope, move focus to the
// next element after the node to restore to instead.
if(document.body.contains(r)&&r!==document.body||(r=null,tp.getTreeNode(e).nodeToRestore=null),(!o||!to(o,e.current))&&r){i.currentNode=r;// Skip over elements within the scope, in case the scope immediately follows the node to restore.
do o=t.shiftKey?i.previousNode():i.nextNode();while(to(o,e.current))(t.preventDefault(),t.stopPropagation(),o)?tl(o,!0):ta(r)?tl(r,!0):n.blur()}};return n||document.addEventListener("keydown",r,!0),()=>{n||document.removeEventListener("keydown",r,!0)}},[e,t,n]),X(()=>{if(t)return tp.getTreeNode(e).nodeToRestore=r.current,()=>{let n=tp.getTreeNode(e).nodeToRestore;// if we already lost focus to the body and this was the active scope, then we should attempt to restore
if(t&&n&&// eslint-disable-next-line react-hooks/exhaustive-deps
(to(document.activeElement,e.current)||document.activeElement===document.body&&function(e){let t=tp.getTreeNode(e7);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){// freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
let t=tp.clone();requestAnimationFrame(()=>{// Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
if(document.activeElement===document.body){// look up the tree starting with our scope to find a nodeToRestore still in the DOM
let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&document.body.contains(n.nodeToRestore)){tl(n.nodeToRestore);return}n=n.parent}for(// If no nodeToRestore was found, focus the first element in the nearest
// ancestor scope that is still in the tree.
n=t.getTreeNode(e);n;){if(n.scopeRef&&tp.getTreeNode(n.scopeRef)){tu(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(p,u,l),function(e,t){let r=/*@__PURE__*/n(w).useRef(t);(0,w.useEffect)(()=>{r.current&&(e7=e,to(document.activeElement,e7.current)||tu(e.current)),r.current=!1},[e])}(p,c),(0,w.useEffect)(()=>{if(p){let e=document.activeElement,t=null;// In strict mode, active scope is incorrectly updated since cleanup will run even though scope hasn't unmounted.
// To fix this, we need to update the actual activeScope here
if(to(e,p.current)){// Since useLayoutEffect runs for children first, we need to traverse the focusScope tree and find the bottom most scope that
// contains the active element and set that as the activeScope
for(let n of tp.traverse())to(e,n.scopeRef.current)&&(t=n);t===tp.getTreeNode(p)&&(e7=t.scopeRef)}return()=>{// Scope may have been re-parented.
let e=tp.getTreeNode(p).parent.scopeRef;(p===e7||ts(p,e7))&&(!e||tp.getTreeNode(e))&&(e7=e),tp.removeTreeNode(p)}}},[p]);let g=(0,w.useMemo)(()=>({focusNext(e={}){let t=p.current,{from:n,tabbable:r,wrap:i,accept:o}=e,a=n||document.activeElement,s=t[0].previousElementSibling,l=tc(tr(t),{tabbable:r,accept:o},t);l.currentNode=to(a,t)?a:s;let u=l.nextNode();return!u&&i&&(l.currentNode=s,u=l.nextNode()),u&&tl(u,!0),u},focusPrevious(e={}){let t=p.current,{from:n,tabbable:r,wrap:i,accept:o}=e,a=n||document.activeElement,s=t[t.length-1].nextElementSibling,l=tc(tr(t),{tabbable:r,accept:o},t);l.currentNode=to(a,t)?a:s;let u=l.previousNode();return!u&&i&&(l.currentNode=s,u=l.previousNode()),u&&tl(u,!0),u},focusFirst(e={}){let t=p.current,{tabbable:n,accept:r}=e,i=tc(tr(t),{tabbable:n,accept:r},t);i.currentNode=t[0].previousElementSibling;let o=i.nextNode();return o&&tl(o,!0),o},focusLast(e={}){let t=p.current,{tabbable:n,accept:r}=e,i=tc(tr(t),{tabbable:n,accept:r},t);i.currentNode=t[t.length-1].nextElementSibling;let o=i.previousNode();return o&&tl(o,!0),o}}),[]),v=(0,w.useMemo)(()=>({focusManager:g,parentNode:m}),[m,g]);return /*@__PURE__*/n(w).createElement(e8.Provider,{value:v},/*@__PURE__*/n(w).createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:d}),s,/*@__PURE__*/n(w).createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:f}))}const te=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],tt=te.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";te.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const tn=te.join(':not([hidden]):not([tabindex="-1"]),');function tr(e){return e[0].parentElement}function ti(e){let t=tp.getTreeNode(e7);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function to(e,t){return t.some(t=>t.contains(e))}function ta(e,t=null){// If the element is within a top layer element (e.g. toasts), always allow moving focus there.
if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;// node.contains in isElementInScope covers child scopes that are also DOM children,
// but does not cover child scopes in portals.
for(let{scopeRef:n}of tp.traverse(tp.getTreeNode(t)))if(to(e,n.current))return!0;return!1}function ts(e,t){var n;let r=null===(n=tp.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function tl(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){// ignore
}}else try{e5(e)}catch(e){// ignore
}}function tu(e,t=!0){let n=e[0].previousElementSibling,r=tc(tr(e),{tabbable:t},e);r.currentNode=n;let i=r.nextNode();t&&!i&&((r=tc(tr(e),{tabbable:!1},e)).currentNode=n,i=r.nextNode()),tl(i)}function tc(e,t,n){let r=(null==t?void 0:t.tabbable)?tn:tt,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var i;return(// Skip nodes inside the starting node.
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
 */function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:i}=t(e);r="none"!==n&&"hidden"!==i&&"collapse"!==i}return r}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||to(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)}});return(null==t?void 0:t.from)&&(i.currentNode=t.from),i}class td{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null),i=new tf({scopeRef:e});r.addChild(i),i.parent=r,this.fastMap.set(e,i),n&&(i.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){// never remove the root
if(null===e)return;let t=this.fastMap.get(e),n=t.parent;// when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
// if we are, then replace the siblings restore with the restore from the scope we're removing
for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef.current&&to(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n.removeChild(t),r.size>0&&r.forEach(e=>n.addChild(e)),this.fastMap.delete(t.scopeRef)}// Pre Order Depth First
*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){let e=new td;for(let t of this.traverse())e.addTreeNode(t.scopeRef,t.parent.scopeRef,t.nodeToRestore);return e}constructor(){this.fastMap=new Map,this.root=new tf({scopeRef:null}),this.fastMap.set(null,this.root)}}class tf{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let tp=new td,th=/*@__PURE__*/n(w).createContext(null);/*@__PURE__*/n(w).forwardRef(/**
 * Provides DOM props to the nearest focusable child.
 */function(e,t){let{children:r,...i}=e,o={...i,ref:t};return /*@__PURE__*/n(w).createElement(th.Provider,{value:o},r)});var w=u("acw62");"undefined"!=typeof document&&window.visualViewport,new WeakMap,"undefined"!=typeof document&&window.visualViewport;/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const tm=[];function tg(e,t){let{onClose:n,shouldCloseOnBlur:r,isOpen:i,isDismissable:o=!1,isKeyboardDismissDisabled:a=!1,shouldCloseOnInteractOutside:s}=e;(0,w.useEffect)(()=>(i&&tm.push(t),()=>{let e=tm.indexOf(t);e>=0&&tm.splice(e,1)}),[i,t]);// Only hide the overlay when it is the topmost visible overlay in the stack.
let l=()=>{tm[tm.length-1]===t&&n&&n()};!/*
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
function(e){let{ref:t,onInteractOutside:n,isDisabled:r,onInteractOutsideStart:i}=e,o=(0,w.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),a=Z(e=>{n&&e4(e,t)&&(i&&i(e),o.current.isPointerDown=!0)}),s=Z(e=>{n&&n(e)});(0,w.useEffect)(()=>{let e=o.current;if(!r){// Use pointer events if available. Otherwise, fall back to mouse and touch events.
if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&e4(n,t)&&s(n),e.isPointerDown=!1};return(// changing these to capture phase fixed combobox
document.addEventListener("pointerdown",a,!0),document.addEventListener("pointerup",n,!0),()=>{document.removeEventListener("pointerdown",a,!0),document.removeEventListener("pointerup",n,!0)})}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&e4(n,t)&&s(n),e.isPointerDown=!1},r=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&e4(n,t)&&s(n),e.isPointerDown=!1};return document.addEventListener("mousedown",a,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",r,!0),()=>{document.removeEventListener("mousedown",a,!0),document.removeEventListener("mouseup",n,!0),document.removeEventListener("touchstart",a,!0),document.removeEventListener("touchend",r,!0)}}}},[t,r,a,s])}({ref:t,onInteractOutside:o?e=>{(!s||s(e.target))&&(tm[tm.length-1]===t&&(e.stopPropagation(),e.preventDefault()),l())}:null,onInteractOutsideStart:e=>{(!s||s(e.target))&&tm[tm.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:u}=/*
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
function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:i}=e,o=(0,w.useRef)({isFocusWithin:!1}),a=(0,w.useCallback)(e=>{// We don't want to trigger onBlurWithin and then immediately onFocusWithin again
// when moving focus inside the element. Only trigger if the currentTarget doesn't
// include the relatedTarget (where focus is moving).
o.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(o.current.isFocusWithin=!1,n&&n(e),i&&i(!1))},[n,i,o]),s=eW(a),l=(0,w.useCallback)(e=>{// Double check that document.activeElement actually matches e.target in case a previously chained
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
!(!e.relatedTarget||ta(e.relatedTarget,e7))&&(!s||s(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||a||(e.stopPropagation(),e.preventDefault(),l())},...u},underlayProps:{onPointerDown:e=>{// fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
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
 */const tv=/*@__PURE__*/n(w).createContext(null);function ty(e){let{children:t}=e,r=(0,w.useContext)(tv),[i,o]=(0,w.useState)(0),a=(0,w.useMemo)(()=>({parent:r,modalCount:i,addModal(){o(e=>e+1),r&&r.addModal()},removeModal(){o(e=>e-1),r&&r.removeModal()}}),[r,i]);return /*@__PURE__*/n(w).createElement(tv.Provider,{value:a},t)}/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */function tb(e){let t;let{modalProviderProps:r}={modalProviderProps:{"aria-hidden":!!(t=(0,w.useContext)(tv))&&t.modalCount>0||null}};return /*@__PURE__*/n(w).createElement("div",{"data-overlay-container":!0,...e,...r})}function tx(e){return /*@__PURE__*/n(w).createElement(ty,null,/*@__PURE__*/n(w).createElement(tb,e))}function tw(e){// Add aria-hidden to all parent providers on mount, and restore on unmount.
let t=(0,w.useContext)(tv);if(!t)throw Error("Modal is not contained within a provider");return(0,w.useEffect)(()=>{if((null==e||!e.isDisabled)&&t&&t.parent)return(// The immediate context is from the provider containing this modal, so we only
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
 */const tS=/*@__PURE__*/n(w).createContext(null);u("acw62");/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */var tk=function(){return(tk=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function tE(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var w=u("acw62"),tP={};//
tP=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;// Test for A's keys different from B.
for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0};var tC="-ms-",tT="-moz-",tj="-webkit-",tR="comm",tM="rule",tL="decl",tA="@keyframes",tN=Math.abs,tD=String.fromCharCode,tO=Object.assign;function tz(e,t){return(e=t.exec(e))?e[0]:e}function tF(e,t,n){return e.replace(t,n)}function tI(e,t){return e.indexOf(t)}function t_(e,t){return 0|e.charCodeAt(t)}function tV(e,t,n){return e.slice(t,n)}function tB(e){return e.length}function t$(e,t){return t.push(e),e}function tU(e,t){return e.filter(function(e){return!tz(e,t)})}var tH=1,tW=1,tK=0,tG=0,tY=0,tq="";function tQ(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:tH,column:tW,length:a,return:"",siblings:s}}function tX(e,t){return tO(tQ("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tZ(e){for(;e.root;)e=tX(e.root,{children:[e]});t$(e,e.siblings)}function tJ(){return tY=tG<tK?t_(tq,tG++):0,tW++,10===tY&&(tW=1,tH++),tY}function t0(){return t_(tq,tG)}function t1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t2(e){var t,n;return(t=tG-1,n=function e(t){for(;tJ();)switch(tY){case t:return tG;case 34:case 39:34!==t&&39!==t&&e(tY);break;case 40:41===t&&e(t);break;case 92:tJ()}return tG}(91===e?e+2:40===e?e+1:e),tV(tq,t,n)).trim()}function t3(e,t,n,r,i,o,a,s,l,u,c,d){for(var f=i-1,p=0===i?o:[""],h=p.length,m=0,g=0,v=0;m<r;++m)for(var y=0,b=tV(e,f+1,f=tN(g=a[m])),x=e;y<h;++y)(x=(g>0?p[y]+" "+b:tF(b,/&\f/g,p[y])).trim())&&(l[v++]=x);return tQ(e,t,n,0===i?tM:s,l,u,c,d)}function t4(e,t,n,r,i){return tQ(e,t,n,tL,tV(e,0,r),tV(e,r+1,-1),r,i)}function t6(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function t5(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case tL:return e.return=e.return||e.value;case tR:return"";case tA:return e.return=e.value+"{"+t6(e.children,r)+"}";case tM:if(!tB(e.value=e.props.join(",")))return""}return tB(n=t6(e.children,r))?e.return=e.value+"{"+n+"}":""}function t8(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tL:e.return=function e(t,n,r){var i;switch(i=n,45^t_(t,0)?(((i<<2^t_(t,0))<<2^t_(t,1))<<2^t_(t,2))<<2^t_(t,3):0){case 5103:return tj+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tj+t+t;case 4789:return tT+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tj+t+tT+t+tC+t+t;case 5936:switch(t_(t,n+11)){case 114:return tj+t+tC+tF(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tj+t+tC+tF(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tj+t+tC+tF(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return tj+t+tC+t+t;case 6165:return tj+t+tC+"flex-"+t+t;case 5187:return tj+t+tF(t,/(\w+).+(:[^]+)/,tj+"box-$1$2"+tC+"flex-$1$2")+t;case 5443:return tj+t+tC+"flex-item-"+tF(t,/flex-|-self/g,"")+(tz(t,/flex-|baseline/)?"":tC+"grid-row-"+tF(t,/flex-|-self/g,""))+t;case 4675:return tj+t+tC+"flex-line-pack"+tF(t,/align-content|flex-|-self/g,"")+t;case 5548:return tj+t+tC+tF(t,"shrink","negative")+t;case 5292:return tj+t+tC+tF(t,"basis","preferred-size")+t;case 6060:return tj+"box-"+tF(t,"-grow","")+tj+t+tC+tF(t,"grow","positive")+t;case 4554:return tj+tF(t,/([^-])(transform)/g,"$1"+tj+"$2")+t;case 6187:return tF(tF(tF(t,/(zoom-|grab)/,tj+"$1"),/(image-set)/,tj+"$1"),t,"")+t;case 5495:case 3959:return tF(t,/(image-set\([^]*)/,tj+"$1$`$1");case 4968:return tF(tF(t,/(.+:)(flex-)?(.*)/,tj+"box-pack:$3"+tC+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tj+t+t;case 4200:if(!tz(t,/flex-|baseline/))return tC+"grid-column-align"+tV(t,n)+t;break;case 2592:case 3360:return tC+tF(t,"template-","")+t;case 4384:case 3616:if(r&&r.some(function(e,t){return n=t,tz(e.props,/grid-\w+-end/)}))return~tI(t+(r=r[n].value),"span")?t:tC+tF(t,"-start","")+t+tC+"grid-row-span:"+(~tI(r,"span")?tz(r,/\d+/):+tz(r,/\d+/)-+tz(t,/\d+/))+";";return tC+tF(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(e){return tz(e.props,/grid-\w+-start/)})?t:tC+tF(tF(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return tF(t,/(.+)-inline(.+)/,tj+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tB(t)-1-n>6)switch(t_(t,n+1)){case 109:if(45!==t_(t,n+4))break;case 102:return tF(t,/(.+:)(.+)-([^]+)/,"$1"+tj+"$2-$3$1"+tT+(108==t_(t,n+3)?"$3":"$2-$3"))+t;case 115:return~tI(t,"stretch")?e(tF(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return tF(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,n,r,i,o,a,s){return tC+n+":"+r+s+(i?tC+n+"-span:"+(o?a:+a-+r)+s:"")+t});case 4949:if(121===t_(t,n+6))return tF(t,":",":"+tj)+t;break;case 6444:switch(t_(t,45===t_(t,14)?18:11)){case 120:return tF(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tj+(45===t_(t,14)?"inline-":"")+"box$3$1"+tj+"$2$3$1"+tC+"$2box$3")+t;case 100:return tF(t,":",":"+tC)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return tF(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,n);return;case tA:return t6([tX(e,{value:tF(e.value,"@","@"+tj)})],r);case tM:if(e.length)return(n=e.props).map(function(t){switch(tz(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tZ(tX(e,{props:[tF(t,/:(read-\w+)/,":"+tT+"$1")]})),tZ(tX(e,{props:[t]})),tO(e,{props:tU(n,r)});break;case"::placeholder":tZ(tX(e,{props:[tF(t,/:(plac\w+)/,":"+tj+"input-$1")]})),tZ(tX(e,{props:[tF(t,/:(plac\w+)/,":"+tT+"$1")]})),tZ(tX(e,{props:[tF(t,/:(plac\w+)/,tC+"input-$1")]})),tZ(tX(e,{props:[t]})),tO(e,{props:tU(n,r)})}return""}).join("")}}var t7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},t9={},ne=t9={};function nt(){throw Error("setTimeout has not been defined")}function nn(){throw Error("clearTimeout has not been defined")}function nr(e){if(nP===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((nP===nt||!nP)&&setTimeout)return nP=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return nP(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return nP.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return nP.call(this,e,0)}}}!function(){try{nP="function"==typeof setTimeout?setTimeout:nt}catch(e){nP=nt}try{nC="function"==typeof clearTimeout?clearTimeout:nn}catch(e){nC=nn}}();var ni=[],no=!1,na=-1;function ns(){no&&nT&&(no=!1,nT.length?ni=nT.concat(ni):na=-1,ni.length&&nl())}function nl(){if(!no){var e=nr(ns);no=!0;for(var t=ni.length;t;){for(nT=ni,ni=[];++na<t;)nT&&nT[na].run();na=-1,t=ni.length}nT=null,no=!1,function(e){if(nC===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((nC===nn||!nC)&&clearTimeout)return nC=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
nC(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return nC.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return nC.call(this,e)}}}(e)}}// v8 likes predictible objects
function nu(e,t){this.fun=e,this.array=t}function nc(){}ne.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ni.push(new nu(e,t)),1!==ni.length||no||nr(nl)},nu.prototype.run=function(){this.fun.apply(null,this.array)},ne.title="browser",ne.browser=!0,ne.env={},ne.argv=[],ne.version="",ne.versions={},ne.on=nc,ne.addListener=nc,ne.once=nc,ne.off=nc,ne.removeListener=nc,ne.removeAllListeners=nc,ne.emit=nc,ne.prependListener=nc,ne.prependOnceListener=nc,ne.listeners=function(e){return[]},ne.binding=function(e){throw Error("process.binding is not supported")},ne.cwd=function(){return"/"},ne.chdir=function(e){throw Error("process.chdir is not supported")},ne.umask=function(){return 0};var nd=(void 0!==t9&&t9.env,"data-styled"),nf="undefined"!=typeof window&&"HTMLElement"in window,np=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:(void 0!==t9&&t9.env,void 0!==t9&&t9.env,!1)),nh={},nm=Object.freeze([]),ng=Object.freeze({});function nv(e,t,n){return void 0===n&&(n=ng),e.theme!==n.theme&&e.theme||t||n.theme}var ny=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nx=/(^-|-$)/g;function nw(e){return e.replace(nb,"-").replace(nx,"")}var nS=/(a)(d)/gi,nk=function(e){return String.fromCharCode(e+(e>25?39:97))};function nE(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nk(t%52)+n;return(nk(t%52)+n).replace(nS,"$1-$2")}var nP,nC,nT,nj,nR=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nM=function(e){return nR(5381,e)};function nL(e){return"string"==typeof e}var nA="function"==typeof Symbol&&Symbol.for,nN=nA?Symbol.for("react.memo"):60115,nD=nA?Symbol.for("react.forward_ref"):60112,nO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nz={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nF={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nI=((nj={})[nD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nj[nN]=nF,nj);function n_(e){return("type"in e&&e.type.$$typeof)===nN?nF:"$$typeof"in e?nI[e.$$typeof]:nO}var nV=Object.defineProperty,nB=Object.getOwnPropertyNames,n$=Object.getOwnPropertySymbols,nU=Object.getOwnPropertyDescriptor,nH=Object.getPrototypeOf,nW=Object.prototype;function nK(e){return"function"==typeof e}function nG(e){return"object"==typeof e&&"styledComponentId"in e}function nY(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nq(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function nQ(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nX(e,t){Object.defineProperty(e,"toString",{value:t})}function nZ(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nJ=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw nZ(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat("/*!sc*/\n");return t},e}(),n0=new Map,n1=new Map,n2=1,n3=function(e){if(n0.has(e))return n0.get(e);for(;n1.has(n2);)n2++;var t=n2++;return n0.set(e,t),n1.set(t,e),t},n4=function(e,t){n0.set(e,t),n1.set(t,e)},n6="style[".concat(nd,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),n5=new RegExp("^".concat(nd,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),n8=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},n7=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(n5);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(n4(c,u),n8(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function n9(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var re=function(e){var t,n=document.head,r=e||n,i=document.createElement("style"),o=(t=Array.from(r.querySelectorAll("style[".concat(nd,"]"))))[t.length-1],a=void 0!==o?o.nextSibling:null;i.setAttribute(nd,"active"),i.setAttribute("data-styled-version","6.0.8");var s=n9();return s&&i.setAttribute("nonce",s),r.insertBefore(i,a),i},rt=function(){function e(e){this.element=re(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw nZ(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),rn=function(){function e(e){this.element=re(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),rr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ri=nf,ro={isServer:!nf,useCSSOMInjection:!np},ra=function(){function e(e,t,n){void 0===e&&(e=ng),void 0===t&&(t={});var r=this;this.options=tk(tk({},ro),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nf&&ri&&(ri=!1,function(e){for(var t=document.querySelectorAll(n6),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(nd)&&(n7(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this)),nX(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++)(function(n){var i=n1.get(n);if(void 0!==i){var o=e.names.get(i),a=t.getGroup(n);if(void 0!==o&&0!==a.length){var s="".concat(nd,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat("/*!sc*/\n")}}})(i);return r}(r)})}return e.registerId=function(e){return n3(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(tk(tk({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,n,r;return this.tag||(this.tag=(n=(t=this.options).useCSSOMInjection,r=t.target,e=t.isServer?new rr(r):n?new rt(r):new rn(r),new nJ(e)))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(n3(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(n3(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(n3(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rs=/&/g,rl=/^\s*\/\/.*$/gm;function ru(e){var t,n,r,i=void 0===e?ng:e,o=i.options,a=void 0===o?ng:o,s=i.plugins,l=void 0===s?nm:s,u=function(e,r,i){return i===n||i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===tM&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(rs,n).replace(r,u))}),a.prefix&&c.push(t8),c.push(t5);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=RegExp("\\".concat(n,"\\b"),"g");var l,u,d,f,p,h=e.replace(rl,""),m=(p=function e(t,n,r,i,o,a,s,l,u){for(var c,d=0,f=0,p=s,h=0,m=0,g=0,v=1,y=1,b=1,x=0,w="",S=o,k=a,E=i,P=w;y;)switch(g=x,x=tJ()){case 40:if(108!=g&&58==t_(P,p-1)){-1!=tI(P+=tF(t2(x),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:P+=t2(x);break;case 9:case 10:case 13:case 32:P+=function(e){for(;tY=t0();)if(tY<33)tJ();else break;return t1(e)>2||t1(tY)>3?"":" "}(g);break;case 92:P+=function(e,t){for(var n;--t&&tJ()&&!(tY<48)&&!(tY>102)&&(!(tY>57)||!(tY<65))&&(!(tY>70)||!(tY<97)););return n=tG+(t<6&&32==t0()&&32==tJ()),tV(tq,e,n)}(tG-1,7);continue;case 47:switch(t0()){case 42:case 47:t$(tQ(c=function(e,t){for(;tJ();)if(e+tY===57)break;else if(e+tY===84&&47===t0())break;return"/*"+tV(tq,t,tG-1)+"*"+tD(47===e?e:tJ())}(tJ(),tG),n,r,tR,tD(tY),tV(c,2,-2),0,u),u);break;default:P+="/"}break;case 123*v:l[d++]=tB(P)*b;case 125*v:case 59:case 0:switch(x){case 0:case 125:y=0;case 59+f:-1==b&&(P=tF(P,/\f/g,"")),m>0&&tB(P)-p&&t$(m>32?t4(P+";",i,r,p-1,u):t4(tF(P," ","")+";",i,r,p-2,u),u);break;case 59:P+=";";default:if(t$(E=t3(P,n,r,d,f,o,l,w,S=[],k=[],p,a),a),123===x){if(0===f)e(P,n,E,E,S,a,p,l,k);else switch(99===h&&110===t_(P,3)?100:h){case 100:case 108:case 109:case 115:e(t,E,E,i&&t$(t3(t,E,E,0,0,o,l,w,o,S=[],p,k),k),o,k,p,l,i?S:k);break;default:e(P,E,E,E,[""],k,0,l,k)}}}d=f=m=0,v=b=1,w=P="",p=s;break;case 58:p=1+tB(P),m=g;default:if(v<1){if(123==x)--v;else if(125==x&&0==v++&&125==(tY=tG>0?t_(tq,--tG):0,tW--,10===tY&&(tW=1,tH--),tY))continue}switch(P+=tD(x),x*v){case 38:b=f>0?1:(P+="\f",-1);break;case 44:l[d++]=(tB(P)-1)*b,b=1;break;case 64:45===t0()&&(P+=t2(tJ())),h=t0(),f=p=tB(w=P+=function(e){for(;!t1(t0());)tJ();return tV(tq,e,tG)}(tG)),x++;break;case 45:45===g&&2==tB(P)&&(v=0)}}return a}("",null,null,null,[""],(f=d=o||i?"".concat(o," ").concat(i," { ").concat(h," }"):h,tH=tW=1,tK=tB(tq=f),tG=0,d=[]),0,[0],d),tq="",p);a.namespace&&(m=function e(t,n){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(e){return"".concat(n," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,n)),t})}(m,a.namespace));var g=[];return t6(m,(u=(l=c.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,g.push(t))})).length,function(e,t,n,r){for(var i="",o=0;o<u;o++)i+=l[o](e,t,n,r)||"";return i})),g};return d.hash=l.length?l.reduce(function(e,t){return t.name||nZ(15),nR(e,t.name)},5381).toString():"",d}var rc=new ra,rd=ru(),rf=/*@__PURE__*/n(w).createContext({shouldForwardProp:void 0,styleSheet:rc,stylis:rd}),rp=(rf.Consumer,/*@__PURE__*/n(w).createContext(void 0));function rh(){return(0,w.useContext)(rf)}function rm(e){var t=(0,w.useState)(e.stylisPlugins),r=t[0],i=t[1],o=rh().styleSheet,a=(0,w.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,w.useMemo)(function(){return ru({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,w.useEffect)(function(){/*@__PURE__*/n(tP)(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,w.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return /*@__PURE__*/n(w).createElement(rf.Provider,{value:l},/*@__PURE__*/n(w).createElement(rp.Provider,{value:s},e.children))}var rg=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=rd);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,nX(this,function(){throw nZ(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=rd),this.name+e.hash},e}();function rv(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;r>="A"&&r<="Z"?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ry=function(e){return null==e||!1===e||""===e},rb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!ry(r)&&(Array.isArray(r)&&r.isCss||nK(r)?t.push("".concat(rv(n),":"),r,";"):nQ(r)?t.push.apply(t,tE(tE(["".concat(n," {")],rb(r),!1),["}"],!1)):t.push("".concat(rv(n),": ").concat(null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in t7||n.startsWith("--")?String(r).trim():"".concat(r,"px"),";")))}return t};function rx(e,t,n,r){return ry(e)?[]:nG(e)?[".".concat(e.styledComponentId)]:nK(e)?!nK(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:rx(e(t),t,n,r):e instanceof rg?n?(e.inject(n,r),[e.getName(r)]):[e]:nQ(e)?rb(e):Array.isArray(e)?Array.prototype.concat.apply(nm,e.map(function(e){return rx(e,t,n,r)})):[e.toString()]}function rw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(nK(n)&&!nG(n))return!1}return!0}var rS=nM("6.0.8"),rk=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&rw(e),this.componentId=t,this.baseHash=nR(rS,t),this.baseStyle=n,ra.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=nY(r,this.staticRulesId);else{var i=nq(rx(this.rules,e,t,n)),o=nE(nR(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=nY(r,o),this.staticRulesId=o}}else{for(var s=nR(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=nq(rx(c,e,t,n));s=nR(s,d+u),l+=d}}if(l){var f=nE(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=nY(r,f)}}return r},e}(),rE=/*@__PURE__*/n(w).createContext(void 0);rE.Consumer;var rP={};function rC(e,t,r){var i,o,a,s,l=nG(e),u=!nL(e),c=t.attrs,d=void 0===c?nm:c,f=t.componentId,p=void 0===f?(i=t.displayName,o=t.parentComponentId,rP[a="string"!=typeof i?"sc":nw(i)]=(rP[a]||0)+1,s="".concat(a,"-").concat(nE(nM("6.0.8"+a+rP[a])>>>0)),o?"".concat(o,"-").concat(s):s):f,h=(void 0===t.displayName&&(nL(e)||e.displayName||e.name),t.displayName&&t.componentId?"".concat(nw(t.displayName),"-").concat(t.componentId):t.componentId||p),m=l&&e.attrs?e.attrs.concat(d).filter(Boolean):d,g=t.shouldForwardProp;if(l&&e.shouldForwardProp){var v=e.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var b=new rk(r,h,l?e.componentStyle:void 0),x=/*@__PURE__*/n(w).forwardRef(function(e,t){return function(e,t,r){var i,o=e.attrs,a=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,u=e.styledComponentId,c=e.target,d=/*@__PURE__*/n(w).useContext(rE),f=rh(),p=e.shouldForwardProp||f.shouldForwardProp,h=function(e,t,n){for(var r,i=tk(tk({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=nK(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?nY(i[s],a[s]):"style"===s?tk(tk({},i[s]),a[s]):a[s]}return t.className&&(i.className=nY(i.className,t.className)),i}(o,t,nv(t,d,s)||ng),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v||("forwardedAs"===v?g.as=h.forwardedAs:p&&!p(v,m)||(g[v]=h[v]));var y=(i=rh(),a.generateAndInjectStyles(h,i.styleSheet,i.stylis)),b=nY(l,u);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[nL(m)&&!ny.has(m)?"class":"className"]=b,g.ref=r,(0,w.createElement)(m,g)}(x,e,t)});return x.attrs=m,x.componentStyle=b,x.shouldForwardProp=g,x.foldedComponentIds=l?nY(e.foldedComponentIds,e.styledComponentId):"",x.styledComponentId=h,x.target=l?e.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=l?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++)(function e(t,n,r){if(void 0===r&&(r=!1),!r&&!nQ(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)t[i]=e(t[i],n[i]);else if(nQ(n))for(var i in n)t[i]=e(t[i],n[i]);return t})(e,t[r],!0);return e}({},e.defaultProps,t):t}}),nX(x,function(){return".".concat(x.styledComponentId)}),u&&function e(t,n,r){if("string"!=typeof n){if(nW){var i=nH(n);i&&i!==nW&&e(t,i,r)}var o=nB(n);n$&&(o=o.concat(n$(n)));for(var a=n_(t),s=n_(n),l=0;l<o.length;++l){var u=o[l];if(!(u in nz||r&&r[u]||s&&u in s||a&&u in a)){var c=nU(n,u);try{nV(t,u,c)}catch(e){}}}}return t}(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function rT(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var rj=function(e){return Object.assign(e,{isCss:!0})};function rR(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return nK(e)||nQ(e)?rj(rx(rT(nm,tE([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?rx(e):rj(rx(rT(e,t)))}var rM=function(e){return function e(t,n,r){if(void 0===r&&(r=ng),!n)throw nZ(1,n);var i=function(e){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return t(n,r,rR.apply(void 0,tE([e],i,!1)))};return i.attrs=function(i){return e(t,n,tk(tk({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return e(t,n,tk(tk({},r),i))},i}(rC,e)};ny.forEach(function(e){rM[e]=rM(e)});var rL=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=rw(e),ra.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(nq(rx(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&ra.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=n9(),r=nq([n&&'nonce="'.concat(n,'"'),"".concat(nd,'="true"'),"".concat("data-styled-version",'="').concat("6.0.8",'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw nZ(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw nZ(2);var t,r=((t={})[nd]="",t["data-styled-version"]="6.0.8",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),i=n9();return i&&(r.nonce=i),[/*@__PURE__*/n(w).createElement("style",tk({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ra({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw nZ(2);return /*@__PURE__*/n(w).createElement(rm,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw nZ(3)}}();var rA={};t(rA,"GenIcon",()=>rF);var w=(u("acw62"),u("acw62")),rN={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rD=/*@__PURE__*/n(w).createContext&&/*@__PURE__*/n(w).createContext(rN),rO=function(){return(rO=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},rz=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function rF(e){return function(t){return /*@__PURE__*/n(w).createElement(rI,rO({attr:rO({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return /*@__PURE__*/n(w).createElement(t.tag,rO({key:r},t.attr),e(t.child))})}(e.child))}}function rI(e){var t=function(t){var r,i=e.attr,o=e.size,a=e.title,s=rz(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),/*@__PURE__*/n(w).createElement("svg",rO({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:rO(rO({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&/*@__PURE__*/n(w).createElement("title",null,a),e.children)};return void 0!==rD?/*@__PURE__*/n(w).createElement(rD.Consumer,null,function(e){return t(e)}):t(rN)}function r_(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(e)}function rV(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"}}]})(e)}function rB(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"}}]})(e)}function r$(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(e)}function rU(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(e)}function rH(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function rW(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function rK(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M267.429 488.563C262.286 507.573 242.858 512 224 512c-18.857 0-38.286-4.427-43.428-23.437C172.927 460.134 160 388.898 160 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM156.867 288.554c-18.693-18.308-29.958-44.173-28.784-72.599 2.054-49.724 42.395-89.956 92.124-91.881C274.862 121.958 320 165.807 320 220c0 26.827-11.064 51.116-28.866 68.552-2.675 2.62-2.401 6.986.628 9.187 9.312 6.765 16.46 15.343 21.234 25.363 1.741 3.654 6.497 4.66 9.449 1.891 28.826-27.043 46.553-65.783 45.511-108.565-1.855-76.206-63.595-138.208-139.793-140.369C146.869 73.753 80 139.215 80 220c0 41.361 17.532 78.7 45.55 104.989 2.953 2.771 7.711 1.77 9.453-1.887 4.774-10.021 11.923-18.598 21.235-25.363 3.029-2.2 3.304-6.566.629-9.185zM224 0C100.204 0 0 100.185 0 224c0 89.992 52.602 165.647 125.739 201.408 4.333 2.118 9.267-1.544 8.535-6.31-2.382-15.512-4.342-30.946-5.406-44.339-.146-1.836-1.149-3.486-2.678-4.512-47.4-31.806-78.564-86.016-78.187-147.347.592-96.237 79.29-174.648 175.529-174.899C320.793 47.747 400 126.797 400 224c0 61.932-32.158 116.49-80.65 147.867-.999 14.037-3.069 30.588-5.624 47.23-.732 4.767 4.203 8.429 8.535 6.31C395.227 389.727 448 314.187 448 224 448 100.205 347.815 0 224 0zm0 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z"}}]})(e)}function rG(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(e)}function rY(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"}}]})(e)}function rq(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"}}]})(e)}function rQ(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}function rX(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"}}]})(e)}function rZ(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"}}]})(e)}function rJ(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 0 0-11.3 0L403.6 366.3a7.23 7.23 0 0 0 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]})(e)}function r0(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z"}}]})(e)}function r1(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3-14.4-14.4-34-22.5-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5 42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z"}}]})(e)}const r2=rR`
  min-height: 100vh;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`;rR`
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;const r3=rM.button`
  padding: 6px 16px;
  background-color: aliceblue;
  color: mediumslateblue;
  border: none;
  font-weight: 500;
  border-radius: 999px;
  text-align: center;
  margin: 8px 0px;
`,r4=rM.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${e=>"dark"===e.bg?"#000":"#fff"};
  ${r2}

  & > button {
    margin: 16px 0px;
  }
`,r6=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=rR.apply(void 0,tE([e],t,!1)),o="sc-global-".concat(nE(nM(JSON.stringify(i))>>>0)),a=new rL(i,o),s=function(e){var t=rh(),r=/*@__PURE__*/n(w).useContext(rE),i=/*@__PURE__*/n(w).useRef(t.styleSheet.allocateGSInstance(o)).current;return t.styleSheet.server&&l(i,e,t.styleSheet,r,t.stylis),/*@__PURE__*/n(w).useLayoutEffect(function(){if(!t.styleSheet.server)return l(i,e,t.styleSheet,r,t.stylis),function(){return a.removeStyles(i,t.styleSheet)}},[i,e,t.styleSheet,r,t.stylis]),null};function l(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,nh,n,i);else{var o=tk(tk({},t),{theme:nv(t,r,s.defaultProps)});a.renderStyles(e,o,n,i)}}return /*@__PURE__*/n(w).memo(s)})`
  body {
    background-color: #000;
    color: #fff;
  }
`;var w=(u("acw62"),u("acw62"));const r5=e=>e;function r8(e,t,n){var r;if("string"==typeof e){let i=document;t&&(r5(!!t.current,"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);/**
     * Return an empty array
     */return Array.from(e||[])}const r7=new WeakMap,r9={skipAnimations:!1,useManualTiming:!1};class ie{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){let t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const it=["read","resolveKeyframes","update","preRender","render","postRender"];function ir(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},o=it.reduce((e,t)=>(e[t]=function(e){/**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */let t=new ie,n=new ie,r=0,i=!1,o=!1,a=new WeakSet,s={/**
         * Schedule a process to run on the next frame.
         */schedule:(e,o=!1,s=!1)=>{let l=s&&i,u=l?t:n;return o&&a.add(e),u.add(e)&&l&&i&&(r=t.order.length),e},/**
         * Cancel the provided callback from running on the next frame.
         */cancel:e=>{n.remove(e),a.delete(e)},/**
         * Execute all schedule callbacks.
         */process:l=>{/**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */if(i){o=!0;return}if(i=!0,[t,n]=[n,t],// Clear the next frame queue
    n.clear(),// Execute this frame
    r=t.order.length)for(let n=0;n<r;n++){let r=t.order[n];a.has(r)&&(s.schedule(r),e()),r(l)}i=!1,o&&(o=!1,s.process(l))}};return s}(()=>n=!0),e),{}),a=e=>{o[e].process(i)},s=()=>{let o=r9.useManualTiming?i.timestamp:performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,it.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=()=>{n=!0,r=!0,i.isProcessing||e(s)},u=it.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||l(),r.schedule(e,t,i)),e},{});return{schedule:u,cancel:e=>it.forEach(t=>o[t].cancel(e)),state:i,steps:o}}const{schedule:ii,cancel:io,state:ia,steps:is}=ir("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:r5,!0);function il(e){let t;return()=>(void 0===t&&(t=e()),t)}const iu=il(()=>void 0!==window.ScrollTimeline);class ic{constructor(e){this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}/**
     * TODO: Filter out cancelled or stopped animations before returning
     */getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>{if(!iu()||!t.attachTimeline)return t.pause(),function(e,t){let n;let r=()=>{let{currentTime:r}=t,i=null===r?0:r.value,o=i/100;n!==o&&e(o),n=o};return ii.update(r,!0),()=>io(r)}(e=>{t.time=t.duration*e},e);t.attachTimeline(e)});return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}/**
 * Generate a list of every possible transform key.
 */const id=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ip=new Set(id),ih=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),im="data-"+ih("framerAppearId"),ig=e=>1e3*e,iv=e=>e/1e3,iy={type:"spring",stiffness:500,damping:25,restSpeed:10},ib=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),ix={type:"keyframes",duration:.8},iw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},iS=(e,{keyframes:t})=>t.length>2?ix:ip.has(e)?e.startsWith("scale")?ib(t[1]):iy:iw;function ik(e,t){return e[t]||e.default||e}const iE={current:!1},iP=e=>null!==e;function iC(e,{repeat:t,repeatType:n="loop"},r){let i=e.filter(iP),o=t&&"loop"!==n&&t%2==1?0:i.length-1;return o&&void 0!==r?r:i[o]}function iT(){e=void 0}/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */const ij={now:()=>(void 0===e&&ij.set(ia.isProcessing||r9.useManualTiming?ia.timestamp:performance.now()),e),set:t=>{e=t,queueMicrotask(iT)}},iR=e=>/^0[^.\s]+$/u.test(e),iM=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),iL=e=>t=>"string"==typeof t&&t.startsWith(e),iA=iL("--"),iN=iL("var(--"),iD=e=>{let t=iN(e);return!!t&&iO.test(e.split("/*")[0].trim())},iO=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,iz=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,iF=(e,t,n)=>n>t?t:n<e?e:n,iI={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},i_={...iI,transform:e=>iF(0,1,e)},iV={...iI,default:1},iB=e=>Math.round(1e5*e)/1e5,i$=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,iU=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,iH=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function iW(e){return"string"==typeof e}const iK=e=>({test:t=>iW(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),iG=iK("deg"),iY=iK("%"),iq=iK("px"),iQ=iK("vh"),iX=iK("vw"),iZ={...iY,parse:e=>iY.parse(e)/100,transform:e=>iY.transform(100*e)},iJ=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),i0=e=>e===iI||e===iq,i1=(e,t)=>parseFloat(e.split(", ")[t]),i2=(e,t)=>(n,{transform:r})=>{if("none"===r||!r)return 0;let i=r.match(/^matrix3d\((.+)\)$/u);if(i)return i1(i[1],t);{let t=r.match(/^matrix\((.+)\)$/u);return t?i1(t[1],e):0}},i3=new Set(["x","y","z"]),i4=id.filter(e=>!i3.has(e)),i6={// Dimensions
width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),// Transform
x:i2(4,13),y:i2(5,14)};// Alias translate longform names
i6.translateX=i6.x,i6.translateY=i6.y;/**
 * Tests a provided value against a ValueType
 */const i5=e=>t=>t.test(e),i8=[iI,iq,iY,iG,iX,iQ,{test:e=>"auto"===e,parse:e=>e}],i7=e=>i8.find(i5(e)),i9=new Set;let oe=!1,ot=!1;function on(){if(ot){let e=Array.from(i9).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;/**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */t.forEach(e=>{let t=function(e){let t=[];return i4.forEach(n=>{let r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e);t.length&&(n.set(e,t),e.render())}),// Read
e.forEach(e=>e.measureInitialState()),// Write
t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{var r;null===(r=e.getValue(t))||void 0===r||r.set(n)})}),// Read
e.forEach(e=>e.measureEndState()),// Write
e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}ot=!1,oe=!1,i9.forEach(e=>e.complete()),i9.clear()}function or(){i9.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ot=!0)})}class oi{constructor(e,t,n,r,i,o=!1){/**
         * Track whether this resolver has completed. Once complete, it never
         * needs to attempt keyframe resolution again.
         */this.isComplete=!1,/**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */this.isAsync=!1,/**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */this.needsMeasurement=!1,/**
         * Track whether this resolver is currently scheduled to resolve
         * to allow it to be cancelled and resumed externally.
         */this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(i9.add(this),oe||(oe=!0,ii.read(or),ii.resolveKeyframes(on))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;/**
         * If a keyframe is null, we hydrate it either by reading it from
         * the instance, or propagating from previous keyframes.
         */for(let i=0;i<e.length;i++)if(null===e[i]){/**
                 * If the first keyframe is null, we need to find its value by sampling the element
                 */if(0===i){let i=null==r?void 0:r.get(),o=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){let r=n.readValue(t,o);null!=r&&(e[0]=r)}void 0===e[0]&&(e[0]=o),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),i9.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,i9.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */const oo=(e,t)=>n=>!!(iW(n)&&iH.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),oa=(e,t,n)=>r=>{if(!iW(r))return r;let[i,o,a,s]=r.match(i$);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},os=e=>iF(0,255,e),ol={...iI,transform:e=>Math.round(os(e))},ou={test:oo("rgb","red"),parse:oa("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ol.transform(e)+", "+ol.transform(t)+", "+ol.transform(n)+", "+iB(i_.transform(r))+")"},oc={test:oo("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:ou.transform},od={test:oo("hsl","hue"),parse:oa("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+iY.transform(iB(t))+", "+iY.transform(iB(n))+", "+iB(i_.transform(r))+")"},of={test:e=>ou.test(e)||oc.test(e)||od.test(e),parse:e=>ou.test(e)?ou.parse(e):od.test(e)?od.parse(e):oc.parse(e),transform:e=>iW(e)?e:e.hasOwnProperty("red")?ou.transform(e):od.transform(e)},op="number",oh="color",om=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function og(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],o=0,a=t.replace(om,e=>(of.test(e)?(r.color.push(o),i.push(oh),n.push(of.parse(e))):e.startsWith("var(")?(r.var.push(o),i.push("var"),n.push(e)):(r.number.push(o),i.push(op),n.push(parseFloat(e))),++o,"${}")),s=a.split("${}");return{values:n,split:s,indexes:r,types:i}}function ov(e){return og(e).values}function oy(e){let{split:t,types:n}=og(e),r=t.length;return e=>{let i="";for(let o=0;o<r;o++)if(i+=t[o],void 0!==e[o]){let t=n[o];t===op?i+=iB(e[o]):t===oh?i+=of.transform(e[o]):i+=e[o]}return i}}const ob=e=>"number"==typeof e?0:e,ox={test:function(e){var t,n;return isNaN(e)&&iW(e)&&((null===(t=e.match(i$))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(iU))||void 0===n?void 0:n.length)||0)>0},parse:ov,createTransformer:oy,getAnimatableNone:function(e){let t=ov(e),n=oy(e);return n(t.map(ob))}},ow=new Set(["brightness","contrast","saturate","opacity"]);function oS(e){let[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[r]=n.match(i$)||[];if(!r)return e;let i=n.replace(r,""),o=ow.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const ok=/\b([a-z-]*)\(.*?\)/gu,oE={...ox,getAnimatableNone:e=>{let t=e.match(ok);return t?t.map(oS).join(" "):e}},oP={...iI,transform:Math.round},oC={// Border props
borderWidth:iq,borderTopWidth:iq,borderRightWidth:iq,borderBottomWidth:iq,borderLeftWidth:iq,borderRadius:iq,radius:iq,borderTopLeftRadius:iq,borderTopRightRadius:iq,borderBottomRightRadius:iq,borderBottomLeftRadius:iq,// Positioning props
width:iq,maxWidth:iq,height:iq,maxHeight:iq,size:iq,top:iq,right:iq,bottom:iq,left:iq,// Spacing props
padding:iq,paddingTop:iq,paddingRight:iq,paddingBottom:iq,paddingLeft:iq,margin:iq,marginTop:iq,marginRight:iq,marginBottom:iq,marginLeft:iq,// Transform props
rotate:iG,rotateX:iG,rotateY:iG,rotateZ:iG,scale:iV,scaleX:iV,scaleY:iV,scaleZ:iV,skew:iG,skewX:iG,skewY:iG,distance:iq,translateX:iq,translateY:iq,translateZ:iq,x:iq,y:iq,z:iq,perspective:iq,transformPerspective:iq,opacity:i_,originX:iZ,originY:iZ,originZ:iq,// Misc
zIndex:oP,backgroundPositionX:iq,backgroundPositionY:iq,// SVG
fillOpacity:i_,strokeOpacity:i_,numOctaves:oP},oT={...oC,color:of,backgroundColor:of,outlineColor:of,fill:of,stroke:of,// Border props
borderColor:of,borderTopColor:of,borderRightColor:of,borderBottomColor:of,borderLeftColor:of,filter:oE,WebkitFilter:oE},oj=e=>oT[e];function oR(e,t){let n=oj(e);// If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
return n!==oE&&(n=ox),n.getAnimatableNone?n.getAnimatableNone(t):void 0}/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */const oM=new Set(["auto","none","0"]);class oL extends oi{constructor(e,t,n,r){super(e,t,n,r,null==r?void 0:r.owner,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t.current)return;super.readKeyframes();/**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */for(let n=0;n<e.length;n++){let r=e[n];if("string"==typeof r&&iD(r)){let i=function e(t,n,r=1){r5(r<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);let[i,o]=function(e){let t=iz.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${null!=n?n:r}`,i]}(t);// No CSS variable detected
if(!i)return;// Attempt to read this CSS variable off the element
let a=window.getComputedStyle(n).getPropertyValue(i);if(a){let e=a.trim();return iM(e)?parseFloat(e):e}return iD(o)?e(o,n,r+1):o}(r,t.current);void 0!==i&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}/**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */if(/**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */this.resolveNoneKeyframes(),!iJ.has(n)||2!==e.length)return;let[r,i]=e,o=i7(r),a=i7(i);/**
         * Either we don't recognise these value types or we can animate between them.
         */if(o!==a){/**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */if(i0(o)&&i0(a))for(let t=0;t<e.length;t++){let n=e[t];"string"==typeof n&&(e[t]=parseFloat(n))}else /**
             * Else, the only way to resolve this is by measuring the element.
             */this.needsMeasurement=!0}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++){var r;("number"==typeof(r=e[t])?0===r:null===r||"none"===r||"0"===r||iR(r))&&n.push(t)}n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){let t=e[i];"string"!=typeof t||oM.has(t)||(r=e[i]),i++}if(r&&n)for(let i of t)e[i]=oR(n,r)}(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=i6[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;// Set final key frame to measure after next render
let r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){var e;let{element:t,name:n,unresolvedKeyframes:r}=this;if(!t.current)return;let i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);let o=r.length-1,a=r[o];r[o]=i6[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach(([e,n])=>{t.getValue(e).set(n)}),this.resolveNoneKeyframes()}}/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */const oA=(e,t)=>// If the list of keys tat might be non-animatable grows, replace with Set
    "zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&// It's animatable if we have a string
    (ox.test(e)||"0"===e)&&// And it contains numbers and/or colors
    !e.startsWith("url(")// Unless it starts with "url("
    );class oN{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o="loop",...a}){// Track whether the animation has been stopped. Stopped animations won't restart.
this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:o,...a},this.updateFinishedPromise()}/**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */get resolved(){return this._resolved||this.hasAttemptedResolve||(or(),on()),this._resolved}/**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */onKeyframesResolved(e,t){this.hasAttemptedResolve=!0;let{name:n,type:r,velocity:i,delay:o,onComplete:a,onUpdate:s,isGenerator:l}=this.options;/**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */if(!l&&!function(e,t,n,r){/**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */let i=e[0];if(null===i)return!1;let o=e[e.length-1],a=oA(i,t),s=oA(o,t);return(// Always skip if any of these are true
r5(a===s,`You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`),!!a&&!!s&&(function(e){let t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||"spring"===n&&r))}(e,n,r,i)){// Finish immediately
if(iE.current||!o){null==s||s(iC(e,this.options,t)),null==a||a(),this.resolveFinishedPromise();return}this.options.duration=0}let u=this.initPlayback(e,t);!1!==u&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}/**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */then(e,t){return this.currentFinishedPromise.then(e,t)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function oD(e,t,n){var r,i;let o=Math.max(t-5,0);return r=n-e(o),(i=t-o)?r*(1e3/i):0}function oO(e,t){return e*Math.sqrt(1-t*t)}const oz=["duration","bounce"],oF=["stiffness","damping","mass"];function oI(e,t){return t.some(t=>void 0!==e[t])}function o_({keyframes:e,restDelta:t,restSpeed:n,...r}){let i;let o=e[0],a=e[e.length-1],s={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};// stiffness/damping/mass overrides duration/bounce
if(!oI(e,oF)&&oI(e,oz)){let n=function({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;r5(e<=ig(10),"Spring duration must be 10 seconds or less");let a=1-t;/**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */a=iF(.05,1,a),e=iF(.01,10,iv(e)),a<1?(/**
         * Underdamped spring
         */i=t=>{let r=t*a,i=r*e,o=oO(t,a);return .001-(r-n)/o*Math.exp(-i)},o=t=>{let r=t*a,o=r*e,s=Math.pow(a,2)*Math.pow(t,2)*e,l=oO(Math.pow(t,2),a),u=-i(t)+.001>0?-1:1;return u*((o*n+n-s)*Math.exp(-o))/l}):(/**
         * Critically-damped spring
         */i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return -.001+r*i},o=t=>{let r=Math.exp(-t*e),i=(n-t)*(e*e);return r*i});let s=5/e,l=function(e,t,n){let r=n;for(let n=1;n<12;n++)r-=e(r)/t(r);return r}(i,o,s);if(e=ig(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(l,2)*r;return{stiffness:t,damping:2*a*Math.sqrt(r*t),duration:e}}}(e);(t={...t,...n,mass:1}).isResolvedFromDuration=!0}return t}({...r,velocity:-iv(r.velocity||0)}),h=f||0,m=u/(2*Math.sqrt(l*c)),g=a-o,v=iv(Math.sqrt(l/c)),y=5>Math.abs(g);if(n||(n=y?.01:2),t||(t=y?.005:.5),m<1){let e=oO(v,m);// Underdamped spring
i=t=>{let n=Math.exp(-m*v*t);return a-n*((h+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)i=e=>a-Math.exp(-v*e)*(g+(h+v*g)*e);else{// Overdamped spring
let e=v*Math.sqrt(m*m-1);i=t=>{let n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((h+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:p&&d||null,next:e=>{let r=i(e);if(p)s.done=e>=d;else{let o=h;0!==e&&(o=m<1?oD(i,e,r):0);let l=Math.abs(o)<=n,u=Math.abs(a-r)<=t;s.done=l&&u}return s.value=s.done?a:r,s}}}function oV({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:c}){let d,f;let p=e[0],h={done:!1,value:p},m=e=>void 0!==s&&e<s||void 0!==l&&e>l,g=e=>void 0===s?l:void 0===l?s:Math.abs(s-e)<Math.abs(l-e)?s:l,v=n*t,y=p+v,b=void 0===a?y:a(y);b!==y&&(v=b-p);let x=e=>-v*Math.exp(-e/r),w=e=>b+x(e),S=e=>{let t=x(e),n=w(e);h.done=Math.abs(t)<=u,h.value=h.done?b:n},k=e=>{m(h.value)&&(d=e,f=o_({keyframes:[h.value,g(h.value)],velocity:oD(w,e,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return k(0),{calculatedDuration:null,next:e=>{/**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */let t=!1;return(/**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */(f||void 0!==d||(t=!0,S(e),k(e)),void 0!==d&&e>=d)?f.next(e-d):(t||S(e),h))}}}/*
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
const oB=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function o$(e,t,n,r){// If this is a linear gradient, return linear easing
if(e===t&&n===r)return r5;let i=t=>(function(e,t,n,r,i){let o,a;let s=0;do(o=oB(a=t+(n-t)/2,r,i)-e)>0?n=a:t=a;while(Math.abs(o)>1e-7&&++s<12)return a})(t,0,1,e,n);// If animation is at start/end, return t without easing
return e=>0===e||1===e?e:oB(i(e),t,r)}const oU=o$(.42,0,1,1),oH=o$(0,0,.58,1),oW=o$(.42,0,.58,1),oK=e=>Array.isArray(e)&&"number"!=typeof e[0],oG=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,oY=e=>t=>1-e(1-t),oq=e=>1-Math.sin(Math.acos(e)),oQ=oY(oq),oX=oG(oq),oZ=o$(.33,1.53,.69,.99),oJ=oY(oZ),o0=oG(oJ),o1={linear:r5,easeIn:oU,easeInOut:oW,easeOut:oH,circIn:oq,circInOut:oX,circOut:oQ,backIn:oJ,backInOut:o0,backOut:oZ,anticipate:e=>(e*=2)<1?.5*oJ(e):.5*(2-Math.pow(2,-10*(e-1)))},o2=e=>{if(Array.isArray(e)){r5(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,n,r,i]=e;return o$(t,n,r,i)}return"string"==typeof e?(r5(void 0!==o1[e],`Invalid easing type '${e}'`),o1[e]):e},o3=(e,t)=>n=>t(e(n)),o4=(...e)=>e.reduce(o3),o6=(e,t,n)=>{let r=t-e;return 0===r?1:(n-e)/r},o5=(e,t,n)=>e+(t-e)*n;// Adapted from https://gist.github.com/mjackson/5311256
function o8(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const o7=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},o9=[oc,ou,od],ae=e=>o9.find(t=>t.test(e));function at(e){let t=ae(e);r5(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===od&&(n=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100;let i=0,o=0,a=0;if(t/=100){let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=o8(s,r,e+1/3),o=o8(s,r,e),a=o8(s,r,e-1/3)}else i=o=a=n;return{red:Math.round(255*i),green:Math.round(255*o),blue:Math.round(255*a),alpha:r}}(n)),n}const an=(e,t)=>{let n=at(e),r=at(t),i={...n};return e=>(i.red=o7(n.red,r.red,e),i.green=o7(n.green,r.green,e),i.blue=o7(n.blue,r.blue,e),i.alpha=o5(n.alpha,r.alpha,e),ou.transform(i))};function ar(e,t){return n=>n>0?t:e}function ai(e,t){return n=>o5(e,t,n)}function ao(e){return"number"==typeof e?ai:"string"==typeof e?iD(e)?ar:of.test(e)?an:al:Array.isArray(e)?aa:"object"==typeof e?of.test(e)?an:as:ar}function aa(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>ao(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function as(e,t){let n={...e,...t},r={};for(let i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=ao(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}const al=(e,t)=>{let n=ox.createTransformer(t),r=og(e),i=og(t),o=r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length;return o?o4(aa(function(e,t){var n;let r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){let a=t.types[o],s=e.indexes[a][i[a]],l=null!==(n=e.values[s])&&void 0!==n?n:0;r[o]=l,i[a]++}return r}(r,i),i.values),n):(r5(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),ar(e,t))};function au(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return o5(e,t,n);let r=ao(e);return r(e,t)}/**
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
 */function ac(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let o=e.length;/**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */if(r5(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];if(2===o&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,n){let r=[],i=n||au,o=e.length-1;for(let n=0;n<o;n++){let o=i(e[n],e[n+1]);if(t){let e=Array.isArray(t)?t[n]||r5:t;o=o4(e,o)}r.push(o)}return r}(t,r,i),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);let r=o6(e[n],e[n+1],t);return a[n](r)};return n?t=>l(iF(e[0],e[o-1],t)):l}function ad(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=o6(0,t,r);e.push(o5(n,1,i))}}function af(e){let t=[0];return ad(t,e.length-1),t}function ap({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){/**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */let i=oK(r)?r.map(o2):o2(r),o={done:!1,value:t[0]},a=// TODO Maybe we should warn here if there's a length mismatch
(n&&n.length===t.length?n:af(t)).map(t=>t*e),s=ac(a,t,{ease:Array.isArray(i)?i:t.map(()=>i||oW).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(o.value=s(t),o.done=t>=e,o)}}function ah(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const am=e=>{let t=({timestamp:t})=>e(t);return{start:()=>ii.update(t,!0),stop:()=>io(t),/**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */now:()=>ia.isProcessing?ia.timestamp:ij.now()}},ag={decay:oV,inertia:oV,tween:ap,keyframes:ap,spring:o_},av=e=>e/100;/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */class ay extends oN{constructor({KeyframeResolver:e=oi,...t}){super(t),/**
         * The time at which the animation was paused.
         */this.holdTime=null,/**
         * The time at which the animation was started.
         */this.startTime=null,/**
         * The time at which the animation was cancelled.
         */this.cancelTime=null,/**
         * The current time of the animation.
         */this.currentTime=0,/**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */this.playbackSpeed=1,/**
         * The state of the animation to apply when the animation is resolved. This
         * allows calls to the public API to control the animation before it is resolved,
         * without us having to resolve it first.
         */this.pendingPlayState="running",this.state="idle",/**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();let{onStop:e}=this.options;e&&e()};let{name:n,motionValue:r,keyframes:i}=this.options,o=(e,t)=>this.onKeyframesResolved(e,t);n&&r&&r.owner?this.resolver=r.owner.resolveKeyframes(i,o,n,r):this.resolver=new e(i,o,n,r),this.resolver.scheduleResolve()}initPlayback(e){let t,n;let{type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:s=0}=this.options,l=ag[r]||ap;l!==ap&&"number"!=typeof e[0]&&(t=o4(av,au(e[0],e[1])),e=[0,100]);let u=l({...this.options,keyframes:e});"mirror"===a&&(n=l({...this.options,keyframes:[...e].reverse(),velocity:-s})),null===u.calculatedDuration&&(u.calculatedDuration=ah(u));let{calculatedDuration:c}=u,d=c+o;return{generator:u,mirroredGenerator:n,mapPercentToKeyframes:t,calculatedDuration:c,resolvedDuration:d,totalDuration:d*(i+1)-o}}onPostResolved(){let{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e,t=!1){let{resolved:n}=this;// If the animations has failed to resolve, return the final keyframe.
if(!n){let{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}let{finalKeyframe:r,generator:i,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:s,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=n;if(null===this.startTime)return i.next(0);let{delay:d,repeat:f,repeatType:p,repeatDelay:h,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:// 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
// example.
this.currentTime=Math.round(e-this.startTime)*this.speed;// Rebase on delay
let g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let y=this.currentTime,b=i;if(f){/**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */let e=Math.min(this.currentTime,u)/c,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,f+1);/**
             * Reverse progress if we're not running in "normal" direction
             */let r=!!(t%2);r&&("reverse"===p?(n=1-n,h&&(n-=h/c)):"mirror"===p&&(b=o)),y=iF(0,1,n)*c}/**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */let x=v?{done:!1,value:s[0]}:b.next(y);a&&(x.value=a(x.value));let{done:w}=x;v||null===l||(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);let S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&void 0!==r&&(x.value=iC(s,this.options,r)),m&&m(x.value),S&&this.finish(),x}get duration(){let{resolved:e}=this;return e?iv(e.calculatedDuration):0}get time(){return iv(this.currentTime)}set time(e){e=ig(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=iv(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;let{driver:e=am,onPlay:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),t&&t();let n=this.driver.now();null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime&&"finished"!==this.state||(this.startTime=n),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,/**
         * Set playState to running only after we've used it in
         * the previous logic.
         */this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";let{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const ab=e=>Array.isArray(e)&&"number"==typeof e[0],ax=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,aw={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ax([0,.65,.55,1]),circOut:ax([.55,0,1,.45]),backIn:ax([.31,.01,.66,-.59]),backOut:ax([.33,1.53,.69,.99])};function aS(e){return ak(e)||aw.easeOut}function ak(e){if(e)return ab(e)?ax(e):Array.isArray(e)?e.map(aS):aw[e]}const aE=il(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),aP=new Set(["opacity","clipPath","filter","transform"]);class aC extends oN{constructor(e){super(e);let{name:t,motionValue:n,keyframes:r}=this.options;this.resolver=new oL(r,(e,t)=>this.onKeyframesResolved(e,t),t,n),this.resolver.scheduleResolve()}initPlayback(e,t){var n,r;let{duration:i=300,times:o,ease:a,type:s,motionValue:l,name:u}=this.options;/**
         * If element has since been unmounted, return false to indicate
         * the animation failed to initialised.
         */if(!(null===(n=l.owner)||void 0===n?void 0:n.current))return!1;/**
         * If this animation needs pre-generated keyframes then generate.
         */if("spring"===(r=this.options).type||"backgroundColor"===r.name||!function e(t){return!!(!t||"string"==typeof t&&t in aw||ab(t)||Array.isArray(t)&&t.every(e))}(r.ease)){let{onComplete:t,onUpdate:n,motionValue:r,...l}=this.options,u=function(e,t){/**
     * Create a main-thread animation to pregenerate keyframes.
     * We sample this at regular intervals to generate keyframes that we then
     * linearly interpolate between.
     */let n=new ay({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0}),r={done:!1,value:e[0]},i=[],o=0;for(;!r.done&&o<2e4;)i.push((r=n.sample(o)).value),o+=10;return{times:void 0,keyframes:i,duration:o-10,ease:"linear"}}(e,l);1===(e=u.keyframes).length&&(e[1]=e[0]),i=u.duration,o=u.times,a=u.ease,s="keyframes"}let c=function(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){let u={[t]:n};l&&(u.offset=l);let c=ak(s);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(l.owner.current,u,e,{...this.options,duration:i,times:o,ease:a});return(// Override the browser calculated startTime with one synchronised to other JS
// and WAAPI animations starting this event loop.
c.startTime=ij.now(),this.pendingTimeline?(c.timeline=this.pendingTimeline,this.pendingTimeline=void 0):/**
             * Prefer the `onfinish` prop as it's more widely supported than
             * the `finished` promise.
             *
             * Here, we synchronously set the provided MotionValue to the end
             * keyframe. If we didn't, when the WAAPI animation is finished it would
             * be removed from the element which would then revert to its old styles.
             */c.onfinish=()=>{let{onComplete:n}=this.options;l.set(iC(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:o,type:s,ease:a,keyframes:e})}get duration(){let{resolved:e}=this;if(!e)return 0;let{duration:t}=e;return iv(t)}get time(){let{resolved:e}=this;if(!e)return 0;let{animation:t}=e;return iv(t.currentTime||0)}set time(e){let{resolved:t}=this;if(!t)return;let{animation:n}=t;n.currentTime=ig(e)}get speed(){let{resolved:e}=this;if(!e)return 1;let{animation:t}=e;return t.playbackRate}set speed(e){let{resolved:t}=this;if(!t)return;let{animation:n}=t;n.playbackRate=e}get state(){let{resolved:e}=this;if(!e)return"idle";let{animation:t}=e;return t.playState}/**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */attachTimeline(e){if(this._resolved){let{resolved:t}=this;if(!t)return r5;let{animation:n}=t;n.timeline=e,n.onfinish=null}else this.pendingTimeline=e;return r5}play(){if(this.isStopped)return;let{resolved:e}=this;if(!e)return;let{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){let{resolved:e}=this;if(!e)return;let{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;let{resolved:e}=this;if(!e)return;let{animation:t,keyframes:n,duration:r,type:i,ease:o,times:a}=e;if("idle"!==t.playState&&"finished"!==t.playState){/**
         * WAAPI doesn't natively have any interruption capabilities.
         *
         * Rather than read commited styles back out of the DOM, we can
         * create a renderless JS animation and sample it twice to calculate
         * its current value, "previous" value, and therefore allow
         * Motion to calculate velocity for any subsequent animation.
         */if(this.time){let{motionValue:e,onUpdate:t,onComplete:s,...l}=this.options,u=new ay({...l,keyframes:n,duration:r,type:i,ease:o,times:a,isGenerator:!0}),c=ig(this.time);e.setWithVelocity(u.sample(c-10).value,u.sample(c).value,10)}this.cancel()}}complete(){let{resolved:e}=this;e&&e.animation.finish()}cancel(){let{resolved:e}=this;e&&e.animation.cancel()}static supports(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:a}=e;return aE()&&n&&aP.has(n)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&/**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */!t.owner.getProps().onUpdate&&!r&&"mirror"!==i&&0!==o&&"inertia"!==a}}const aT=(e,t,n,r={},i,o)=>a=>{let s=ik(r,e)||{},l=s.delay||r.delay||0,{elapsed:u=0}=r;u-=ig(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};!/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */function({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(s)&&(c={...c,...iS(e,c)}),c.duration&&(c.duration=ig(c.duration)),c.repeatDelay&&(c.repeatDelay=ig(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;/**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(c.duration=0,0!==c.delay||(d=!0)),(iE.current||r9.skipAnimations)&&(d=!0,c.duration=0,c.delay=0),d&&!o&&void 0!==t.get()){let e=iC(c.keyframes,s);if(void 0!==e){ii.update(()=>{c.onUpdate(e),c.onComplete()});return}}return(/**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */!o&&aC.supports(c)?new aC(c):new ay(c))},aj=e=>!!(e&&e.getVelocity);function aR(e){return!!(aj(e)&&e.add)}const aM=e=>Array.isArray(e),aL=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),aA=e=>aM(e)?e[e.length-1]||0:e;function aN(e,t){-1===e.indexOf(t)&&e.push(t)}function aD(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}class aO{constructor(){this.subscriptions=[]}add(e){return aN(this.subscriptions,e),()=>aD(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(1===r)/**
             * If there's only a single handler we can just call it without invoking a loop.
             */this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){/**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const az=e=>!isNaN(parseFloat(e)),aF={current:void 0};/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */class aI{/**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */constructor(e,t={}){/**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */this.version="11.1.9",/**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */this.canTrackVelocity=!1,/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},this.updateAndNotify=(e,t=!0)=>{let n=ij.now();this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=az(this.current),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ij.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}/**
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
     */onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new aO);let n=this.events[e].add(t);return"change"===e?()=>{n(),ii.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}/**
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
     */set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}/**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}/**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */get(){return aF.current&&aF.current.push(this),this.current}/**
     * @public
     */getPrevious(){return this.prev}/**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */getVelocity(){var e;let t=ij.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let n=Math.min(this.updatedAt-this.prevUpdatedAt,30);// Casts because of parseFloat's poor typing
return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),n?e*(1e3/n):0}/**
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
     */destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function a_(e,t){return new aI(e,t)}function aV(e,t,n,r={},i={}){return"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}function aB(e,t,n){let r=e.getProps();return aV(r,t,void 0!==n?n:r.custom,/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}function a$(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t,u=e.getValue("willChange");r&&(a=r);let c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in l){let r=e.getValue(t,null!==(o=e.latestValues[t])&&void 0!==o?o:null),i=l[t];if(void 0===i||d&&/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */function({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,r}(d,t))continue;let s={delay:n,elapsed:0,...ik(a||{},t)},f=!1;if(window.HandoffAppearAnimations){let n=e.getProps(),r=n[im];if(r){let e=window.HandoffAppearAnimations(r,t);null!==e&&(s.elapsed=e,f=!0)}}r.start(aT(t,r,i,e.shouldReduceMotion&&ip.has(t)?{type:!1}:s,e,f));let p=r.animation;p&&(aR(u)&&(u.add(t),p.then(()=>u.remove(t))),c.push(p))}return s&&Promise.all(c).then(()=>{ii.update(()=>{s&&function(e,t){let n=aB(e,t),{transitionEnd:r={},transition:i={},...o}=n||{};for(let t in o={...o,...r}){let n=aA(o[t]);e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,a_(n))}}(e,s)})}),c}function aU(e){return e instanceof SVGElement&&"svg"!==e.tagName}const aH={};function aW(e,{layout:t,layoutId:n}){return ip.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!aH[e]||"opacity"===e)}function aK(e,t,n){var r;let{style:i}=e,o={};for(let a in i)(aj(i[a])||t.style&&aj(t.style[a])||aW(a,e)||(null===(r=null==n?void 0:n.getValue(a))||void 0===r?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function aG(e,t,n){let r=aK(e,t,n);for(let n in e)if(aj(e[n])||aj(t[n])){let t=-1!==id.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[t]=e[n]}return r}const aY=()=>({translate:0,scale:1,origin:0,originPoint:0}),aq=()=>({x:aY(),y:aY()}),aQ=()=>({min:0,max:0}),aX=()=>({x:aQ(),y:aQ()});function aZ(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const aJ="undefined"!=typeof document,a0={current:null},a1={current:!1};function a2(){if(a1.current=!0,aJ){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>a0.current=e.matches;e.addListener(t),t()}else a0.current=!1}}function a3(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}/**
 * Decides if the supplied variable is variant label
 */function a4(e){return"string"==typeof e||Array.isArray(e)}const a6=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],a5=["initial",...a6];function a8(e){return a3(e.animate)||a5.some(t=>a4(e[t]))}function a7(e){return!!(a8(e)||e.variants)}const a9={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},se={};for(const e in a9)se[e]={isEnabled:t=>a9[e].some(e=>!!t[e])};/**
 * A list of all ValueTypes
 */const st=[...i8,of,ox],sn=e=>st.find(i5(e)),sr=Object.keys(se),si=sr.length,so=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],sa=a5.length;/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */class ss{/**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:o},a={}){this.resolveKeyframes=(e,// resolution is a microtask and we want to retain the ability to force
// the resolution of keyframes synchronously.
t,n,r)=>new this.KeyframeResolver(e,t,n,r,this),/**
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
         */this.values=new Map,this.KeyframeResolver=oi,/**
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
         */this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ii.render(this.render,!1,!0);let{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!i,this.isControllingVariants=a8(t),this.isVariantNode=a7(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);/**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */let{willChange:u,...c}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in c){let t=c[e];void 0!==s[e]&&aj(t)&&(t.set(s[e],!1),aR(u)&&u.add(e))}}mount(e){this.current=e,r7.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),a1.current||a2(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||a0.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){var e;for(let e in r7.delete(this.current),this.projection&&this.projection.unmount(),io(this.notifyUpdate),io(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let t in this.features)null===(e=this.features[t])||void 0===e||e.unmount();this.current=null}bindToMotionValue(e,t){let n=ip.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&ii.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i(),t.owner&&t.stop()})}sortNodePosition(e){return(/**
         * If these nodes aren't even of the same type we can't compare their depth.
         */this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0)}loadFeatures({children:e,...t},n,r,i){let o,a;for(let e=0;e<si;e++){let n=sr[e],{isEnabled:r,Feature:i,ProjectionNode:s,MeasureLayout:l}=se[n];s&&(o=s),r(t)&&(!this.features[n]&&i&&(this.features[n]=new i(this)),l&&(a=l))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&o){this.projection=new o(this.latestValues,function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(this.parent));let{layoutId:e,layout:n,drag:r,dragConstraints:a,layoutScroll:s,layoutRoot:l}=t;this.projection.setOptions({layoutId:e,layout:n,alwaysMeasureLayout:!!r||a&&aZ(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),/**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */animationType:"string"==typeof n?n:"both",initialPromotionConfig:i,layoutScroll:s,layoutRoot:l})}return a}updateFeatures(){for(let e in this.features){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}/**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):aX()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}/**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;/**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */for(let t=0;t<so.length;t++){let n=so[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r="on"+n,i=e[r];i&&(this.propEventSubscriptions[n]=this.on(n,i))}this.prevMotionValues=function(e,t,n){let{willChange:r}=t;for(let i in t){let o=t[i],a=n[i];if(aj(o))/**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */e.addValue(i,o),aR(r)&&r.add(i);else if(aj(a))/**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */e.addValue(i,a_(o,{owner:e})),aR(r)&&r.remove(i);else if(a!==o){/**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */if(e.hasValue(i)){let t=e.getValue(i);!0===t.liveStyle?t.jump(o):t.hasAnimated||t.set(o)}else{let t=e.getStaticValue(i);e.addValue(i,a_(void 0!==t?t:o,{owner:e}))}}}// Handle removed values
for(let r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}/**
     * Returns the variant definition with a given name.
     */getVariant(e){return this.props.variants?this.props.variants[e]:void 0}/**
     * Returns the defined default transition on this component.
     */getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<sa;e++){let n=a5[e],r=this.props[n];(a4(r)||!1===r)&&(t[n]=r)}return t}/**
     * Add a child visual element to our set of children.
     */addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}/**
     * Add a motion value and bind it to this visual element.
     */addValue(e,t){// Remove existing value if it exists
let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}/**
     * Remove a motion value and unbind any active subscriptions.
     */removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}/**
     * Check whether we have a motion value for this key
     */hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=a_(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}/**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */readValue(e,t){var n;let r=void 0===this.latestValues[e]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,e))&&void 0!==n?n:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return null!=r&&("string"==typeof r&&(iM(r)||iR(r))?r=parseFloat(r):!sn(r)&&ox.test(t)&&(r=oR(e,t)),this.setBaseTarget(e,aj(r)?r.get():r)),aj(r)?r.get():r}/**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */setBaseTarget(e,t){this.baseTarget[e]=t}/**
     * Find the base target for a value thats been removed from all animation
     * props.
     */getBaseTarget(e){var t;let n;let{initial:r}=this.props;if("string"==typeof r||"object"==typeof r){let i=aV(this.props,r,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);i&&(n=i[e])}/**
         * If this value still exists in the current initial variant, read that.
         */if(r&&void 0!==n)return n;/**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */let i=this.getBaseTargetFromProps(this.props,e);return void 0===i||aj(i)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new aO),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class sl extends ss{constructor(){super(...arguments),this.KeyframeResolver=oL}sortInstanceNodePosition(e,t){/**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}}const su={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sc=id.length,sd=(e,t)=>t&&"number"==typeof e?t.transform(e):e;function sf(e,t,n,r){let{style:i,vars:o,transform:a,transformOrigin:s}=e,l=!1,u=!1,c=!0;/**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */for(let e in t){let n=t[e];/**
         * If this is a CSS variable we don't do any further processing.
         */if(iA(e)){o[e]=n;continue}// Convert the value to its default value type, ie 0 -> "0px"
let r=oC[e],d=sd(n,r);if(ip.has(e)){// If we already know we have a non-default transform, early return
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
     */for(let t=0;t<sc;t++){let n=id[t];if(void 0!==e[n]){let t=su[n]||n;o+=`${t}(${e[n]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}(e.transform,n,c,r):i.transform&&/**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */(i.transform="none")),u){let{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}function sp(e,t,n){return"string"==typeof e?e:iq.transform(t+n*e)}const sh={offset:"stroke-dashoffset",array:"stroke-dasharray"},sm={offset:"strokeDashoffset",array:"strokeDasharray"};/**
 * Build SVG visual attrbutes, like cx and style.transform
 */function sg(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},c,d,f){/**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */if(sf(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:p,style:h,dimensions:m}=e;p.transform&&(m&&(h.transform=p.transform),delete p.transform),m&&(void 0!==i||void 0!==o||h.transform)&&(h.transformOrigin=/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */function(e,t,n){let r=sp(t,e.x,e.width),i=sp(n,e.y,e.height);return`${r} ${i}`}(m,void 0!==i?i:.5,void 0!==o?o:.5)),void 0!==t&&(p.x=t),void 0!==n&&(p.y=n),void 0!==r&&(p.scale=r),void 0!==a&&/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */function(e,t,n=1,r=0,i=!0){// Normalise path length by setting SVG attribute pathLength to 1
e.pathLength=1;// We use dash case when setting attributes directly to the DOM node and camel case
// when defining props on a React component.
let o=i?sh:sm;// Build the dash offset
e[o.offset]=iq.transform(-r);// Build the dash array
let a=iq.transform(t),s=iq.transform(n);e[o.array]=`${a} ${s}`}(p,a,s,l,!1)}/**
 * A set of attribute names that are always read/written as camel case.
 */const sv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sy(e,{style:t,vars:n},r,i){// Loop over any CSS variables and assign those.
for(let o in Object.assign(e.style,t,i&&i.getProjectionStyles(r)),n)e.style.setProperty(o,n[o])}function sb(e,t,n,r){for(let n in sy(e,t,void 0,r),t.attrs)e.setAttribute(sv.has(n)?n:ih(n),t.attrs[n])}const sx=e=>"string"==typeof e&&"svg"===e.toLowerCase();class sw extends sl{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ip.has(t)){let e=oj(t);return e&&e.default||0}return t=sv.has(t)?t:ih(t),e.getAttribute(t)}measureInstanceViewportBox(){return aX()}scrapeMotionValuesFromProps(e,t,n){return aG(e,t,n)}build(e,t,n,r){sg(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){sb(e,t,n,r)}mount(e){this.isSVGTag=sx(e.tagName),super.mount(e)}}/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */function sS({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function sk(e){return void 0===e||1===e}function sE({scale:e,scaleX:t,scaleY:n}){return!sk(e)||!sk(t)||!sk(n)}function sP(e){return sE(e)||sC(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function sC(e){var t,n;return(t=e.x)&&"0%"!==t||(n=e.y)&&"0%"!==n}/**
 * Applies a translate/scale delta to a point
 */function sT(e,t,n,r,i){return void 0!==i&&(e=r+i*(e-r)),r+n*(e-r)+t}/**
 * Applies a translate/scale delta to an axis
 */function sj(e,t=0,n=1,r,i){e.min=sT(e.min,t,n,r,i),e.max=sT(e.max,t,n,r,i)}/**
 * Applies a translate/scale delta to a box
 */function sR(e,{x:t,y:n}){sj(e.x,t.translate,t.scale,t.originPoint),sj(e.y,n.translate,n.scale,n.originPoint)}function sM(e){return Number.isInteger(e)?e:e>1.0000000000001||e<.999999999999?e:1}function sL(e,t){e.min=e.min+t,e.max=e.max+t}/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */function sA(e,t,[n,r,i]){let o=void 0!==t[i]?t[i]:.5,a=o5(e.min,e.max,o);// Apply the axis delta to the final axis
sj(e,t[n],t[r],a,t.scale)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const sN=["x","scaleX","originX"],sD=["y","scaleY","originY"];/**
 * Apply a transform to a box from the latest resolved motion values.
 */function sO(e,t){sA(e.x,t,sN),sA(e.y,t,sD)}function sz(e,t){return sS(/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */function(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}class sF extends sl{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(ip.has(t)){let e=oj(t);return e&&e.default||0}{let n=window.getComputedStyle(e),r=(iA(t)?n.getPropertyValue(t):n[t])||0;return"string"==typeof r?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return sz(e,t)}build(e,t,n,r){sf(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return aK(e,t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;aj(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){sy(e,t,n,r)}}function sI(e,t,n){let r=aj(e)?e:a_(e);return r.start(aT("",r,t,n)),r.animation}/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */function s_(e,t,n,r){var i;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(i=r.get(t))&&void 0!==i?i:e}const sV=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e};function sB(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function s$(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function sU(e,t){return t[e]||(t[e]=[]),t[e]}const sH=e=>"number"==typeof e,sW=e=>e.every(sH);function sK(e,t,n,r){let i=r8(e,r),o=i.length;r5(!!o,"No valid element provided.");let a=[];for(let e=0;e<o;e++){let r=i[e];r7.has(r)||function(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=aU(e)?new sw(t,{enableHardwareAcceleration:!1}):new sF(t,{enableHardwareAcceleration:!0});n.mount(e),r7.set(e,n)}(r);let s=r7.get(r),l={...n};"function"==typeof l.delay&&(l.delay=l.delay(e,o)),a.push(...a$(s,{...t,transition:l},{}))}return new ic(a)}const sG=e=>Array.isArray(e)&&Array.isArray(e[0]),sY=/**
     * Implementation
     */function(e,t,n){let i;return i=sG(e)?function(e,t,n){let r=[],i=function(e,{defaultTransition:t={},...n}={},r){let i=t.duration||.3,o=new Map,a=new Map,s={},l=new Map,u=0,c=0,d=0;/**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */for(let n=0;n<e.length;n++){let o=e[n];/**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */if("string"==typeof o){l.set(o,c);continue}if(!Array.isArray(o)){l.set(o.name,s_(c,o.at,u,l));continue}let[f,p,h={}]=o;void 0!==h.at&&(c=s_(c,h.at,u,l));/**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */let m=0,g=(e,n,r,o=0,a=0)=>{let s=Array.isArray(e)?e:[e],{delay:l=0,times:u=af(s),type:f="keyframes",...p}=n,{ease:h=t.ease||"easeOut",duration:g}=n,v="function"==typeof l?l(o,a):l,y=s.length;if(y<=2&&"spring"===f){/**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */let e=100;if(2===y&&sW(s)){let t=s[1]-s[0];e=Math.abs(t)}let t={...p};void 0!==g&&(t.duration=ig(g));let n=/**
 * Create a progress => progress easing function from a generator.
 */function(e,t=100){let n=o_({keyframes:[0,t],...e}),r=Math.min(ah(n),2e4);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:iv(r)}}(t,e);h=n.ease,g=n.duration}null!=g||(g=i);let b=c+v,x=b+g;1===u.length&&0===u[0]&&(u[1]=1);/**
             * Fill out if offset if fewer offsets than keyframes
             */let w=u.length-s.length;w>0&&ad(u,w),/**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */1===s.length&&s.unshift(null),function(e,t,n,r,i,o){/**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */!function(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.at>t&&i.at<n&&(aD(e,i),// If we remove this item we have to push the pointer back one
r--)}}(e,i,o);for(let s=0;s<t.length;s++){var a;e.push({value:t[s],at:o5(i,o,r[s]),easing:(a=s,oK(n)?n[sV(0,n.length,a)]:n)})}}(r,s,h,u,b,x),m=Math.max(v+g,m),d=Math.max(x,d)};if(aj(f)){let e=s$(f,a);g(p,h,sU("default",e))}else{/**
             * Find all the elements specified in the definition and parse value
             * keyframes from their timeline definitions.
             */let e=r8(f,r,s),t=e.length;/**
             * For every element in this segment, process the defined values.
             */for(let n=0;n<t;n++){let r=e[n],i=s$(r,a);for(let e in p)g(p[e],h[e]?{...h,...h[e]}:{...h},sU(e,i),n,t)}}u=c,c+=m}return(/**
     * For every element and value combination create a new animation.
     */a.forEach((e,r)=>{for(let i in e){let a=e[i];/**
             * Arrange all the keyframes in ascending time order.
             */a.sort(sB);let s=[],l=[],u=[];/**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */for(let e=0;e<a.length;e++){let{at:t,value:n,easing:r}=a[e];s.push(n),l.push(o6(0,d,t)),u.push(r||"easeOut")}0!==l[0]&&(l.unshift(0),s.unshift(s[0]),u.unshift("easeInOut")),1!==l[l.length-1]&&(l.push(1),s.push(null)),o.has(r)||o.set(r,{keyframes:{},transition:{}});let c=o.get(r);c.keyframes[i]=s,c.transition[i]={...t,duration:d,ease:u,times:l,...n}}}),o)}(e,t,n);return i.forEach(({keyframes:e,transition:t},n)=>{let i;i=aj(n)?sI(n,e.default,t.default):sK(n,e,t),r.push(i)}),new ic(r)}(e,t,r):"object"!=typeof t||Array.isArray(t)?sI(e,t,n):sK(e,t,n,r),r&&r.animations.push(i),i};var w=(u("acw62"),u("acw62"),u("acw62"),u("acw62"));const sq=aJ?w.useLayoutEffect:w.useEffect;function sQ(){let e=(0,w.useRef)(!1);return sq(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var w=(u("acw62"),u("acw62"));/**
 * @public
 */const sX=(0,w.createContext)(null);/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */function sZ(e){let t=(0,w.useRef)(null);return null===t.current&&(t.current=e()),t.current}var w=(u("acw62"),u("acw62"),u("acw62"));/**
 * @public
 */const sJ=(0,w.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */class s0 extends w.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}/**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */componentDidUpdate(){}render(){return this.props.children}}function s1({children:e,isPresent:t}){let n=(0,w.useId)(),r=(0,w.useRef)(null),i=(0,w.useRef)({width:0,height:0,top:0,left:0}),{nonce:o}=(0,w.useContext)(sJ);return(/**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */(0,w.useInsertionEffect)(()=>{let{width:e,height:a,top:s,left:l}=i.current;if(t||!r.current||!e||!a)return;r.current.dataset.motionPopId=n;let u=document.createElement("style");return o&&(u.nonce=o),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),(0,c.jsx)(s0,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})}))}const s2=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{let s=sZ(s3),l=(0,w.useId)(),u=(0,w.useMemo)(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(s.set(e,!0),s.values()))if(!t)return;// can stop searching when any is incomplete
    r&&r()},register:e=>(s.set(e,!1),()=>s.delete(e))}),/**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */o?[Math.random()]:[n]);return(0,w.useMemo)(()=>{s.forEach((e,t)=>s.set(t,!1))},[n]),/**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */w.useEffect(()=>{n||s.size||!r||r()},[n]),"popLayout"===a&&(e=(0,c.jsx)(s1,{isPresent:n,children:e})),(0,c.jsx)(sX.Provider,{value:u,children:e})};function s3(){return new Map}var w=u("acw62");const s4=(0,w.createContext)({});var w=u("acw62");const s6=e=>e.key||"",s5=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{var s;r5(!i,"Replace exitBeforeEnter with mode='wait'");// We want to force a re-render once all exiting animations have finished. We
// either use a local forceRender function, or one from a parent context if it exists.
let l=(0,w.useContext)(s4).forceRender||function(){let e=sQ(),[t,n]=(0,w.useState)(0),r=(0,w.useCallback)(()=>{e.current&&n(t+1)},[t]),i=(0,w.useCallback)(()=>ii.postRender(r),[r]);return[i,t]}()[0],u=sQ(),d=function(e){let t=[];return(// We use forEach here instead of map as map mutates the component key by preprending `.$`
(0,w.Children).forEach(e,e=>{(0,w.isValidElement)(e)&&t.push(e)}),t)}(e),f=d,p=(0,w.useRef)(new Map).current,h=(0,w.useRef)(f),m=(0,w.useRef)(new Map).current,g=(0,w.useRef)(!0);if(sq(()=>{g.current=!1,function(e,t){e.forEach(e=>{let n=s6(e);t.set(n,e)})}(d,m),h.current=f}),s=()=>{g.current=!0,m.clear(),p.clear()},(0,w.useEffect)(()=>()=>s(),[]),g.current)return(0,c.jsx)(c.Fragment,{children:f.map(e=>(0,c.jsx)(s2,{isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:o,mode:a,children:e},s6(e)))});// If this is a subsequent render, deal with entering and exiting children
f=[...f];// Diff the keys of the currently-present and target children to update our
// exiting list.
let v=h.current.map(s6),y=d.map(s6),b=v.length;for(let e=0;e<b;e++){let t=v[e];-1!==y.indexOf(t)||p.has(t)||p.set(t,void 0)}return"wait"===a&&p.size&&(f=[]),// Loop through all currently exiting components and clone them to overwrite `animate`
// with any `exit` prop they might have defined.
p.forEach((e,n)=>{// If this component is actually entering again, early return
if(-1!==y.indexOf(n))return;let i=m.get(n);if(!i)return;let s=v.indexOf(n),g=e;g||(g=(0,c.jsx)(s2,{isPresent:!1,onExitComplete:()=>{// clean up the exiting children map
p.delete(n);// compute the keys of children that were rendered once but are no longer present
// this could happen in case of too many fast consequent renderings
// @link https://github.com/framer/motion/issues/2023
let e=Array.from(m.keys()).filter(e=>!y.includes(e));// Defer re-rendering until all exiting children have indeed left
if(// clean up the all children map
e.forEach(e=>m.delete(e)),// make sure to render only the children that are actually visible
h.current=d.filter(t=>{let r=s6(t);return r===n||// filter out the leftover children
e.includes(r)}),!p.size){if(!1===u.current)return;l(),r&&r()}},custom:t,presenceAffectsLayout:o,mode:a,children:i},s6(i)),p.set(n,g)),f.splice(s,0,g)}),// Add `MotionContext` even to children that don't need it to ensure we're rendering
// the same tree between renders
f=f.map(e=>{let t=e.key;return p.has(t)?e:(0,c.jsx)(s2,{isPresent:!0,presenceAffectsLayout:o,mode:a,children:e},s6(e))}),(0,c.jsx)(c.Fragment,{children:p.size?f:f.map(e=>(0,w.cloneElement)(e))})};var w=(u("acw62"),u("acw62"));const s8=(0,w.createContext)({});var w=(u("acw62"),u("acw62"));const s7=(0,w.createContext)({strict:!1}),{schedule:s9,cancel:le}=ir(queueMicrotask,!1);function lt(e){return Array.isArray(e)?e.join(" "):e}var w=(u("acw62"),u("acw62"),u("acw62"));/**
 * Internal, exported only for usage in Framer
 */const ln=(0,w.createContext)({}),lr=Symbol.for("motionComponentSymbol"),li=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lo(e){if(/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */"string"!=typeof e||/**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */e.includes("-"));else if(li.indexOf(e)>-1||/**
         * If it contains a capital letter, it's an SVG component
         *//[A-Z]/u.test(e))return!0;return!1}var w=(u("acw62"),u("acw62"));const la=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ls(e,t,n){for(let r in t)aj(t[r])||aW(r,n)||(e[r]=t[r])}function ll(e,t,n){// The `any` isn't ideal but it is the type of createElement props argument
let r={},i=function(e,t,n){let r=e.style||{},i={};return(/**
     * Copy non-Motion Values straight into style
     */ls(i,r,e),Object.assign(i,function({transformTemplate:e},t,n){return(0,w.useMemo)(()=>{let r=la();return sf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),i)}(e,t,n);return e.drag&&!1!==e.dragListener&&(// Disable the ghost element when a user drags
r.draggable=!1,// Disable text selection
i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",// Disable scrolling on the draggable direction
i.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */const lu=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */function lc(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||lu.has(e)}let ld=e=>!lc(e);/**
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
     */(i=$05db6db4ebcdf5f1$import$c6bce8c37c642938$2e2bcd8739ae039)&&// Explicitly filter our events
(ld=e=>e.startsWith("on")?!lc(e):i(e))}catch(e){// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}var w=u("acw62");const lf=()=>({...la(),attrs:{}});function lp(e,t,n,r){let i=(0,w.useMemo)(()=>{let n=lf();return sg(n,t,{enableHardwareAcceleration:!1},sx(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};ls(t,e.style,e),i.style={...t,...i.style}}return i}var w=u("acw62");/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */function lh(e){let t=aj(e)?e.get():e;return aL(t)?t.toValue():t}const lm=e=>(t,n)=>{let r=(0,w.useContext)(s8),i=(0,w.useContext)(sX),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){let a={latestValues:function(e,t,n,r){let i={},o=r(e,{});for(let e in o)i[e]=lh(o[e]);let{initial:a,animate:s}=e,l=a8(e),u=a7(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===a;let d=c?s:a;if(d&&"boolean"!=typeof d&&!a3(d)){let t=Array.isArray(d)?d:[d];t.forEach(t=>{let n=aV(e,t);if(!n)return;let{transitionEnd:r,transition:o,...a}=n;for(let e in a){let t=a[e];if(Array.isArray(t)){/**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */let e=c?t.length-1:0;t=t[e]}null!==t&&(i[e]=t)}for(let e in r)i[e]=r[e]})}return i}(r,i,o,e),renderState:t()};return n&&(a.mount=e=>n(r,e,a)),a})(e,t,r,i);return n?o():sZ(o)},lg={useVisualState:lm({scrapeMotionValuesFromProps:aG,createRenderState:lf,onMount:(e,t,{renderState:n,latestValues:r})=>{ii.read(()=>{try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){// Most likely trying to measure an unrendered element under Firefox
n.dimensions={x:0,y:0,width:0,height:0}}}),ii.render(()=>{sg(n,r,{enableHardwareAcceleration:!1},sx(t.tagName),e.transformTemplate),sb(t,n)})}})},lv={useVisualState:lm({scrapeMotionValuesFromProps:aK,createRenderState:la})};function ly(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const lb=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function lx(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const lw=e=>t=>lb(t)&&e(t,lx(t));function lS(e,t,n,r){return ly(e,t,lw(n),r)}function lk(e){let t=null;return()=>null===t&&(t=e,()=>{t=null})}const lE=lk("dragHorizontal"),lP=lk("dragVertical");function lC(e){let t=!1;if("y"===e)t=lP();else if("x"===e)t=lE();else{let e=lE(),n=lP();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function lT(){// Check the gesture lock - if we get it, it means no drag gesture is active
// and we can safely fire the tap gesture.
let e=lC(!0);return!e||(e(),!1)}class lj{constructor(e){this.isMounted=!1,this.node=e}update(){}}function lR(e,t){let n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd";return lS(e.current,n,(n,i)=>{if("touch"===n.pointerType||lT())return;let o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t);let a=o[r];a&&ii.postRender(()=>a(n,i))},{passive:!e.getProps()[r]})}/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */const lM=(e,t)=>!!t&&(e===t||lM(e,t.parentElement));function lL(e,t){if(!t)return;let n=new PointerEvent("pointer"+e);t(n,lx(n))}/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */const lA=new WeakMap,lN=new WeakMap,lD=e=>{let t=lA.get(e.target);t&&t(e)},lO=e=>{e.forEach(lD)},lz={some:0,all:1};function lF(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function lI(e,t,n={}){var r;let i=aB(e,t,"exit"===n.type?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0),{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);/**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */let a=i?()=>Promise.all(a$(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:i=0,staggerChildren:a,staggerDirection:s}=o;return function(e,t,n=0,r=0,i=1,o){let a=[],s=(e.variantChildren.size-1)*r,l=1===i?(e=0)=>e*r:(e=0)=>s-e*r;return Array.from(e.variantChildren).sort(l_).forEach((e,r)=>{e.notify("AnimationStart",t),a.push(lI(e,t,{...o,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,i+r,a,s,n)}:()=>Promise.resolve(),{when:l}=o;if(!l)return Promise.all([a(),s(n.delay)]);{let[e,t]="beforeChildren"===l?[a,s]:[s,a];return e().then(()=>t())}}function l_(e,t){return e.sortNodePosition(t)}const lV=[...a6].reverse(),lB=a6.length;function l$(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let lU=0;const lH=(e,t)=>Math.abs(e-t);/**
 * @internal
 */class lW{constructor(e,t,{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}={}){// If we have more than one touch, don't start detecting this gesture
if(/**
         * @internal
         */this.startEvent=null,/**
         * @internal
         */this.lastMoveEvent=null,/**
         * @internal
         */this.lastMoveEventInfo=null,/**
         * @internal
         */this.handlers={},/**
         * @internal
         */this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=lY(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){// Multi-dimensional
let n=lH(e.x,t.x),r=lH(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=ia;this.history.push({...r,timestamp:i});let{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=lK(t,this.transformPagePoint),ii.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=lY("pointercancel"===e.type?this.lastMoveEventInfo:lK(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!lb(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;let o=lx(e),a=lK(o,this.transformPagePoint),{point:s}=a,{timestamp:l}=ia;this.history=[{...s,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,lY(a,this.history)),this.removeListeners=o4(lS(this.contextWindow,"pointermove",this.handlePointerMove),lS(this.contextWindow,"pointerup",this.handlePointerUp),lS(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),io(this.updatePoint)}}function lK(e,t){return t?{point:t(e.point)}:e}function lG(e,t){return{x:e.x-t.x,y:e.y-t.y}}function lY({point:e},t){return{point:e,delta:lG(e,lq(t)),offset:lG(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=lq(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ig(.1)));)n--;if(!r)return{x:0,y:0};let o=iv(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};let a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}(t,0)}}function lq(e){return e[e.length-1]}function lQ(e){return e.max-e.min}function lX(e,t=0,n=.01){return Math.abs(e-t)<=n}function lZ(e,t,n,r=.5){e.origin=r,e.originPoint=o5(t.min,t.max,e.origin),e.scale=lQ(n)/lQ(t),(lX(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=o5(n.min,n.max,e.origin)-e.originPoint,(lX(e.translate)||isNaN(e.translate))&&(e.translate=0)}function lJ(e,t,n,r){lZ(e.x,t.x,n.x,r?r.originX:void 0),lZ(e.y,t.y,n.y,r?r.originY:void 0)}function l0(e,t,n){e.min=n.min+t.min,e.max=e.min+lQ(t)}function l1(e,t,n){e.min=t.min-n.min,e.max=e.min+lQ(t)}function l2(e,t,n){l1(e.x,t.x,n.x),l1(e.y,t.y,n.y)}/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */function l3(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */function l4(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function l6(e,t,n){return{min:l5(e,t),max:l5(e,n)}}function l5(e,t){return"number"==typeof e?e:e[t]||0}function l8(e){return[e("x"),e("y")]}// Fixes https://github.com/framer/motion/issues/2270
const l7=({current:e})=>e?e.ownerDocument.defaultView:null,l9=new WeakMap;/**
 *
 */// let latestPointerEvent: PointerEvent
class ue{constructor(e){// This is a reference to the global drag gesture lock, ensuring only one component
// can "capture" the drag of one or both axes.
// TODO: Look into moving this into pansession?
this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},/**
         * The permitted boundaries of travel, in pixels.
         */this.constraints=!1,this.hasMutatedConstraints=!1,/**
         * The per-axis resolved elastic values.
         */this.elastic=aX(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){/**
         * Don't start dragging if this component is exiting
         */let{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;let{dragSnapToOrigin:r}=this.getProps();this.panSession=new lW(e,{onSessionStart:e=>{let{dragSnapToOrigin:n}=this.getProps();// Stop or pause any animations on both axis values immediately. This allows the user to throw and catch
// the component.
n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(lx(e,"page").point)},onStart:(e,t)=>{// Attempt to grab the global drag gesture lock - maybe make this part of PanSession
let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=lC(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),l8(e=>{let t=this.getAxisMotionValue(e).get()||0;/**
                 * If the MotionValue is a percentage value convert to px
                 */if(iY.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];if(r){let e=lQ(r);t=e*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&ii.postRender(()=>i(e,t));let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{// latestPointerEvent = event
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
             */o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>l8(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:l7(this.visualElement)})}stop(e,t){let n=this.isDragging;if(this.cancel(),!n)return;let{velocity:r}=t;this.startAnimation(r);let{onDragEnd:i}=this.getProps();i&&ii.postRender(()=>i(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){let{drag:r}=this.getProps();// If we're not dragging this axis, do an early return.
if(!n||!ut(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */function(e,{min:t,max:n},r){return void 0!==t&&e<t?e=r?o5(t,e,r.min):Math.max(e,t):void 0!==n&&e>n&&(e=r?o5(n,e,r.max):Math.min(e,n)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;let{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&aZ(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */function(e,{top:t,left:n,bottom:r,right:i}){return{x:l3(e.x,n,i),y:l3(e.y,t,r)}}(r.layoutBox,t):this.constraints=!1,this.elastic=/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:l6(e,"left","right"),y:l6(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&l8(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */function(e,t){let n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!aZ(t))return!1;let r=t.current;r5(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:i}=this.visualElement;// TODO
if(!i||!i.layout)return!1;let o=function(e,t,n){let r=sz(e,n),{scroll:i}=t;return i&&(sL(r.x,i.offset.x),sL(r.y,i.offset.y)),r}(r,i.root,this.visualElement.getTransformPagePoint()),a={x:l4((e=i.layout.layoutBox).x,o.x),y:l4(e.y,o.y)};/**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */if(n){let e=n(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=sS(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=l8(a=>{if(!ut(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});let u={type:"inertia",velocity:n?e[a]:0,bounceStiffness:r?200:1e6,bounceDamping:r?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};// If we're not animating on an externally-provided `MotionValue` we can use the
// component's animation controls which will handle interactions with whileHover (etc),
// otherwise we just have to animate the `MotionValue` itself.
return this.startAxisValueAnimation(a,u)});// Run all animations and then resolve the new drag constraints.
return Promise.all(l).then(a)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return n.start(aT(e,n,0,t,this.visualElement))}stopAnimation(){l8(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){l8(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}/**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){l8(t=>{let{drag:n}=this.getProps();// If we're not dragging this axis, do an early return.
if(!ut(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-o5(n,o,.5))}})}/**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!aZ(t)||!n||!this.constraints)return;/**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */this.stopAnimation();/**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */let r={x:0,y:0};l8(e=>{let t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){let n=t.get();r[e]=/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */function(e,t){let n=.5,r=lQ(e),i=lQ(t);return i>r?n=o6(t.min,t.max-r,e.min):r>i&&(n=o6(e.min,e.max-i,t.min)),iF(0,1,n)}({min:n,max:n},this.constraints[e])}});/**
         * Update the layout of this element and resolve the latest drag constraints
         */let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),l8(t=>{if(!ut(t,e,null))return;/**
             * Calculate a new transform based on the previous box progress
             */let n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(o5(i,o,r[t]))})}addListeners(){if(!this.visualElement.current)return;l9.set(this.visualElement,this);let e=this.visualElement.current,t=lS(e,"pointerdown",e=>{let{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),n=()=>{let{dragConstraints:e}=this.getProps();aZ(e)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),n();/**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */let o=ly(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(l8(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{o(),t(),i(),a&&a()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=.35,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function ut(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const un=e=>(t,n)=>{e&&ii.postRender(()=>e(t,n))};var w=(u("acw62"),u("acw62"));/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */const ur={/**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */hasAnimatedSinceResize:!0,/**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */hasEverUpdated:!1};function ui(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */const uo={correct:(e,t)=>{if(!t.target)return e;/**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */if("string"==typeof e){if(!iq.test(e))return e;e=parseFloat(e)}/**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */let n=ui(e,t.target.x),r=ui(e,t.target.y);return`${n}% ${r}%`}};class ua extends w.Component{/**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;Object.assign(aH,ul),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),ur.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o&&(/**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent===i||(i?o.promote():o.relegate()||ii.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),s9.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function us(e){let[t,n]=/**
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
 */function(){let e=(0,w.useContext)(sX);if(null===e)return[!0,null];let{isPresent:t,onExitComplete:n,register:r}=e,i=(0,w.useId)();return(0,w.useEffect)(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}(),r=(0,w.useContext)(s4);return(0,c.jsx)(ua,{...e,layoutGroup:r,switchLayoutGroup:(0,w.useContext)(ln),isPresent:t,safeToRemove:n})}const ul={borderRadius:{...uo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:uo,borderTopRightRadius:uo,borderBottomLeftRadius:uo,borderBottomRightRadius:uo,boxShadow:{correct:(e,{treeScale:t,projectionDelta:n})=>{let r=ox.parse(e);// TODO: Doesn't support multiple shadows
if(r.length>5)return e;let i=ox.createTransformer(e),o="number"!=typeof r[0]?1:0,a=n.x.scale*t.x,s=n.y.scale*t.y;r[0+o]/=a,r[1+o]/=s;/**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */let l=o5(a,s,.5);return"number"==typeof r[2+o]&&(r[2+o]/=l),"number"==typeof r[3+o]&&(r[3+o]/=l),i(r)}}},uu=["TopLeft","TopRight","BottomLeft","BottomRight"],uc=uu.length,ud=e=>"string"==typeof e?parseFloat(e):e,uf=e=>"number"==typeof e||iq.test(e);function up(e,t){return void 0!==e[t]?e[t]:e.borderRadius}// /**
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
const uh=ug(0,.5,oQ),um=ug(.5,.95,r5);function ug(e,t,n){return r=>// Could replace ifs with clamp
    r<e?0:r>t?1:n(o6(e,t,r))}/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */function uv(e,t){e.min=t.min,e.max=t.max}/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */function uy(e,t){uv(e.x,t.x),uv(e.y,t.y)}/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */function ub(e,t,n,r,i){return e-=t,e=r+1/n*(e-r),void 0!==i&&(e=r+1/i*(e-r)),e}/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function ux(e,t,[n,r,i],o,a){!/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */function(e,t=0,n=1,r=.5,i,o=e,a=e){if(iY.test(t)){t=parseFloat(t);let e=o5(a.min,a.max,t/100);t=e-a.min}if("number"!=typeof t)return;let s=o5(o.min,o.max,r);e===o&&(s-=t),e.min=ub(e.min,t,n,s,i),e.max=ub(e.max,t,n,s,i)}(e,t[n],t[r],t[i],t.scale,o,a)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const uw=["x","scaleX","originX"],uS=["y","scaleY","originY"];/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function uk(e,t,n,r){ux(e.x,t,uw,n?n.x:void 0,r?r.x:void 0),ux(e.y,t,uS,n?n.y:void 0,r?r.y:void 0)}function uE(e){return 0===e.translate&&1===e.scale}function uP(e){return uE(e.x)&&uE(e.y)}function uC(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function uT(e){return lQ(e.x)/lQ(e.y)}class uj{constructor(){this.members=[]}add(e){aN(this.members,e),e.scheduleRender()}remove(e){if(aD(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let n=this.members.findIndex(t=>e===t);if(0===n)return!1;for(let e=n;e>=0;e--){let n=this.members[e];if(!1!==n.isPresent){t=n;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:r}=e.options;!1===r&&n.hide();/**
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
     */removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function uR(e,t,n){let r="",i=e.x.translate/t.x,o=e.y.translate/t.y,a=(null==n?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(1!==t.x||1!==t.y)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:o,skewX:a,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),o&&(r+=`rotateY(${o}deg) `),a&&(r+=`skewX(${a}deg) `),s&&(r+=`skewY(${s}deg) `)}/**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */let s=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==s||1!==l)&&(r+=`scale(${s}, ${l})`),r||"none"}const uM=(e,t)=>e.depth-t.depth;class uL{constructor(){this.children=[],this.isDirty=!1}add(e){aN(this.children,e),this.isDirty=!0}remove(e){aD(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(uM),this.isDirty=!1,this.children.forEach(e)}}const uA=["","X","Y","Z"],uN={visibility:"hidden"};let uD=0;/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */const uO={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function uz(e,t,n,r){let{latestValues:i}=t;// Record the distorting transform and then temporarily set it to 0
i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function uF({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=null==t?void 0:t()){/**
             * A unique ID generated for every projection node.
             */this.id=uD++,/**
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
this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},/**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */this.updateProjection=()=>{this.projectionUpdateScheduled=!1,/**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */uO.totalNodes=uO.resolvedTargetDeltas=uO.recalculatedProjection=0,this.nodes.forEach(uV),this.nodes.forEach(uG),this.nodes.forEach(uY),this.nodes.forEach(uB),window.MotionDebug&&window.MotionDebug.record(uO)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,/**
             * Shared layout
             */// TODO Only running on root node
this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new uL)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new aO),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}/**
         * Lifecycles
         */mount(t,n=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=aU(t),this.instance=t;let{layoutId:r,layout:i,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||r)&&(this.isLayoutDirty=!0),e){let n;let r=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=/**
 * Timeout defined in ms
 */function(e,t){let n=ij.now(),r=({timestamp:i})=>{let o=i-n;o>=t&&(io(r),e(o-t))};return ii.read(r,!0),()=>io(r)}(r,250),ur.hasAnimatedSinceResize&&(ur.hasAnimatedSinceResize=!1,this.nodes.forEach(uK))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&o&&(r||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}// TODO: Check here if an animation exists
let i=this.options.transition||o.getDefaultTransition()||u0,{onLayoutAnimationStart:a,onLayoutAnimationComplete:s}=o.getProps(),l=!this.targetLayout||!uC(this.targetLayout,r)||n,u=!t&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...ik(i,"layout"),onPlay:a,onComplete:s};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||uK(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,io(this.updateProjection)}// only on the root
blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}// Note: currently only running on root node
startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uq),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;let e=this.isUpdateBlocked();// When doing an instant transition, we skip the layout update,
// but should still clean up the measurements so that the next
// snapshot could be taken correctly.
if(e){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(uU);return}this.isUpdating||this.nodes.forEach(uH),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(uW),/**
             * Read ==================
             */// Update layout measurements of updated children
this.nodes.forEach(uI),/**
             * Write
             */// Notify listeners that the layout is updated
this.nodes.forEach(u_),this.clearAllSnapshots();/**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */let t=ij.now();ia.delta=iF(0,1e3/60,t-ia.timestamp),ia.timestamp=t,ia.isProcessing=!0,is.update.process(ia),is.preRender.process(ia),is.render.process(ia),ia.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,s9.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(u$),this.sharedNodes.forEach(uQ)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ii.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ii.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}/**
         * Update measurements
         */updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(// TODO: Incorporate into a forwarded scroll offset
this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;/**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++){let t=this.path[e];t.updateScroll()}let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=aX(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!uP(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||sP(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let n=this.measurePageBox(),r=this.removeElementScroll(n);return e&&(r=this.removeTransform(r)),u3((t=r).x),u3(t.y),{animationId:this.root.animationId,measuredBox:n,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return aX();let t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(sL(t.x,n.offset.x),sL(t.y,n.offset.y)),t}removeElementScroll(e){let t=aX();uy(t,e);/**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:o}=r;if(r!==this.root&&i&&o.layoutScroll){/**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */if(i.isRoot){uy(t,e);let{scroll:n}=this.root;/**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */n&&(sL(t.x,-n.offset.x),sL(t.y,-n.offset.y))}sL(t.x,i.offset.x),sL(t.y,i.offset.y)}}return t}applyTransform(e,t=!1){let n=aX();uy(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&sO(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),sP(r.latestValues)&&sO(n,r.latestValues)}return sP(this.latestValues)&&sO(n,this.latestValues),n}removeTransform(e){let t=aX();uy(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!sP(n.latestValues))continue;sE(n.latestValues)&&n.updateSnapshot();let r=aX(),i=n.measurePageBox();uy(r,i),uk(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return sP(this.latestValues)&&uk(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ia.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,n,r,i;/**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let a=!!this.resumingFrom||this!==o,s=!(e||a&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget);if(s)return;let{layout:l,layoutId:u}=this.options;/**
             * If we have no layout, we can't perform projection, so early return
             */if(this.layout&&(l||u)){/**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */if(this.resolvedRelativeTargetAt=ia.timestamp,!this.targetDelta&&!this.relativeTarget){let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=aX(),this.relativeTargetOrigin=aX(),l2(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),uy(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */if(this.relativeTarget||this.targetDelta){/**
             * If we've been told to attempt to resolve a relative target, do so.
             */if((this.target||(this.target=aX(),this.targetWithTransforms=aX()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),n=this.target,r=this.relativeTarget,i=this.relativeParent.target,l0(n.x,r.x,i.x),l0(n.y,r.y,i.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):uy(this.target,this.layout.layoutBox),sR(this.target,this.targetDelta)):uy(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=aX(),this.relativeTargetOrigin=aX(),l2(this.relativeTargetOrigin,this.target,e.target),uy(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * Increase debug counter for resolved target deltas
             */uO.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||sE(this.parent.latestValues)||sC(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),n=!!this.resumingFrom||this!==t,r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===ia.timestamp&&(r=!1),r)return;let{layout:i,layoutId:o}=this.options;if(/**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||o))return;uy(this.layoutCorrected,this.layout.layoutBox);/**
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
         */let a=i.instance;(!a||!a.style||"contents"!==a.style.display)&&(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&sO(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(// Incoporate each ancestor's scale into a culmulative treeScale for this component
t.x*=o.x.scale,t.y*=o.y.scale,// Apply each ancestor's calculated delta into this component's recorded layout box
sR(e,o)),r&&sP(i.latestValues)&&sO(e,i.latestValues))}/**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */t.x=sM(t.x),t.y=sM(t.y)}}(this.layoutCorrected,this.treeScale,this.path,n),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=aX());let{target:l}=t;if(!l){/**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */this.projectionTransform&&(this.projectionDelta=aq(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=aq(),this.projectionDeltaWithTransform=aq());let u=this.projectionTransform;lJ(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=uR(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==a||this.treeScale.y!==s)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),/**
             * Increase debug counter for recalculated projections
             */uO.recalculatedProjection++}hide(){this.isVisible=!1;// TODO: Schedule render
}show(){this.isVisible=!0;// TODO: Schedule render
}scheduleRender(e=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e,t=!1){let n;let r=this.snapshot,i=r?r.latestValues:{},o={...this.latestValues},a=aq();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=aX(),l=r?r.source:void 0,u=this.layout?this.layout.source:void 0,c=l!==u,d=this.getStack(),f=!d||d.members.length<=1,p=!!(c&&!f&&!0===this.options.crossfade&&!this.path.some(uJ));this.animationProgress=0,this.mixTargetDelta=t=>{let r=t/1e3;if(uX(a.x,e.x,r),uX(a.y,e.y,r),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var l,u,d,h;l2(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d=this.relativeTarget,h=this.relativeTargetOrigin,uZ(d.x,h.x,s.x,r),uZ(d.y,h.y,s.y,r),n&&(l=this.relativeTarget,u=n,l.x.min===u.x.min&&l.x.max===u.x.max&&l.y.min===u.y.min&&l.y.max===u.y.max)&&(this.isProjectionDirty=!1),n||(n=aX()),uy(n,this.relativeTarget)}c&&(this.animationValues=o,function(e,t,n,r,i,o){i?(e.opacity=o5(0,void 0!==n.opacity?n.opacity:1,uh(r)),e.opacityExit=o5(void 0!==t.opacity?t.opacity:1,0,um(r))):o&&(e.opacity=o5(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));/**
     * Mix border radius
     */for(let i=0;i<uc;i++){let o=`border${uu[i]}Radius`,a=up(t,o),s=up(n,o);if(void 0===a&&void 0===s)continue;a||(a=0),s||(s=0);let l=0===a||0===s||uf(a)===uf(s);l?(e[o]=Math.max(o5(ud(a),ud(s),r),0),(iY.test(s)||iY.test(a))&&(e[o]+="%")):e[o]=s}/**
     * Mix rotation
     */(t.rotate||n.rotate)&&(e.rotate=o5(t.rotate||0,n.rotate||0,r))}(o,i,this.latestValues,r,p,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(io(this.pendingAnimation),this.pendingAnimation=void 0),/**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */this.pendingAnimation=ii.update(()=>{ur.hasAnimatedSinceResize=!0,this.currentAnimation=sI(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){/**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */if(this!==e&&this.layout&&r&&u4(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||aX();let t=lQ(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=lQ(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}uy(t,n),sO(t,i),lJ(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new uj);let n=this.sharedNodes.get(e);n.add(t);let r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;// If there's no detected skew or rotation values, we can early return without a forced render.
let t=!1,{latestValues:n}=e;// If there's no distorting values, we don't need to do any more.
if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&uz("z",e,r,this.animationValues);// Check the skew and rotate value of all axes and reset to 0
for(let t=0;t<uA.length;t++)uz(`rotate${uA[t]}`,e,r,this.animationValues),uz(`skew${uA[t]}`,e,r,this.animationValues);// Put back all the values we reset
for(let t in // Force a render of this element to apply the transform with all skews and rotations
// set to 0.
e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);// Schedule a render for the next frame. This ensures we won't visually
// see the element with the reset rotate value applied.
e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return uN;let r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=lh(null==e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;let o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=lh(null==e?void 0:e.pointerEvents)||""),this.hasProjected&&!sP(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}let a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=uR(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));let{x:s,y:l}=this.projectionDelta;/**
             * Apply scale correction
             */for(let e in r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?/**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:/**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0,aH){if(void 0===a[e])continue;let{correct:t,applyTo:n}=aH[e],i="none"===r.transform?a[e]:t(a[e],o);if(n){let e=n.length;for(let t=0;t<e;t++)r[n[t]]=i}else r[e]=i}return this.options.layoutId&&(r.pointerEvents=o===this?lh(null==e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}// Only run on root
resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(uU),this.root.sharedNodes.clear()}}}function uI(e){e.updateLayout()}function u_(e){var t;let n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;// TODO Maybe we want to also resize the layout snapshot so we don't trigger
// animations for instance if layout="size" and an element has only changed position
"size"===i?l8(e=>{let r=o?n.measuredBox[e]:n.layoutBox[e],i=lQ(r);r.min=t[e].min,r.max=r.min+i}):u4(i,n.layoutBox,t)&&l8(r=>{let i=o?n.measuredBox[r]:n.layoutBox[r],a=lQ(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});let a=aq();lJ(a,t,n.layoutBox);let s=aq();o?lJ(s,e.applyTransform(r,!0),n.measuredBox):lJ(s,t,n.layoutBox);let l=!uP(a),u=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();/**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */if(r&&!r.resumeFrom){let{snapshot:i,layout:o}=r;if(i&&o){let a=aX();l2(a,n.layoutBox,i.layoutBox);let s=aX();l2(s,t,o.layoutBox),uC(a,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}/**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */e.options.transition=void 0}function uV(e){/**
     * Increase debug counter for nodes encountered this frame
     */uO.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),/**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function uB(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function u$(e){e.clearSnapshot()}function uU(e){e.clearMeasurements()}function uH(e){e.isLayoutDirty=!1}function uW(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function uK(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uG(e){e.resolveTargetDelta()}function uY(e){e.calcProjection()}function uq(e){e.resetSkewAndRotation()}function uQ(e){e.removeLeadSnapshot()}function uX(e,t,n){e.translate=o5(t.translate,0,n),e.scale=o5(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function uZ(e,t,n,r){e.min=o5(t.min,n.min,r),e.max=o5(t.max,n.max,r)}function uJ(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const u0={duration:.45,ease:[.4,0,.1,1]},u1=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),u2=u1("applewebkit/")&&!u1("chrome/")?Math.round:r5;function u3(e){// Round to the nearest .5 pixels to support subpixel layouts
e.min=u2(e.min),e.max=u2(e.max)}function u4(e,t,n){return"position"===e||"preserve-aspect"===e&&!lX(uT(t),uT(n),.2)}const u6=uF({attachResizeListener:(e,t)=>ly(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),u5={current:void 0},u8=uF({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!u5.current){let e=new u6({});e.mount(window),e.setOptions({layoutScroll:!0}),u5.current=e}return u5.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});var w=u("acw62");const u7=(e,t)=>lo(e)?new sw(t,{enableHardwareAcceleration:!1}):new sF(t,{allowProjection:e!==w.Fragment,enableHardwareAcceleration:!0}),u9={animation:{Feature:class extends lj{/**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>(function(e,t,n={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t)){let i=t.map(t=>lI(e,t,n));r=Promise.all(i)}else if("string"==typeof t)r=lI(e,t,n);else{let i="function"==typeof t?aB(e,t,n.custom):t;r=Promise.all(a$(e,i,n))}return r.then(()=>{ii.postRender(()=>{e.notify("AnimationComplete",t)})})})(e,t,n))),n={animate:l$(!0),whileInView:l$(),whileHover:l$(),whileTap:l$(),whileDrag:l$(),whileFocus:l$(),exit:l$()},r=!0,i=t=>(n,r)=>{var i;let o=aB(e,r,"exit"===t?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);if(o){let{transition:e,transitionEnd:t,...r}=o;n={...n,...r,...t}}return n};/**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */function o(o){let a=e.getProps(),s=e.getVariantContext(!0)||{},l=[],u=new Set,c={},d=1/0;/**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */for(let t=0;t<lB;t++){var f;let p=lV[t],h=n[p],m=void 0!==a[p]?a[p]:s[p],g=a4(m),v=p===o?h.isActive:null;!1===v&&(d=t);/**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */let y=m===s[p]&&m!==a[p]&&g;// Check if we can skip analysing this prop early
if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),/**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */h.protectedKeys={...c},!h.isActive&&null===v||// If we didn't and don't have any defined prop for this animation type
!m&&!h.prevProp||a3(m)||"boolean"==typeof m)continue;/**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */let b=(f=h.prevProp,"string"==typeof m?m!==f:!!Array.isArray(m)&&!lF(m,f)),x=b||// If we're making this variant active, we want to always make it active
p===o&&h.isActive&&!y&&g||// If we removed a higher-priority variant (i is in reverse order)
t>d&&g,w=!1,S=Array.isArray(m)?m:[m],k=S.reduce(i(p),{});!1===v&&(k={});/**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */let{prevResolvedValues:E={}}=h,P={...E,...k},C=t=>{x=!0,u.has(t)&&(w=!0,u.delete(t)),h.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in P){let t=k[e],n=E[e];// If we've already handled this we can just skip ahead
if(!c.hasOwnProperty(e))(aM(t)&&aM(n)?lF(t,n):t===n)?void 0!==t&&u.has(e)?/**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */C(e):/**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */h.protectedKeys[e]=!0:null!=t?C(e):u.add(e)}/**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */h.prevProp=m,h.prevResolvedValues=k,h.isActive&&(c={...c,...k}),r&&e.blockInitialAnimation&&(x=!1),x&&(!y||w)&&l.push(...S.map(e=>({animation:e,options:{type:p}})))}/**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */if(u.size){let t={};u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),// @ts-expect-error - @mattgperry to figure if we should do something here
t[n]=null!=r?r:null}),l.push({animation:t})}let p=!!l.length;return r&&(!1===a.initial||a.initial===a.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:o,setActive:/**
     * Change whether a certain animation type is active.
     */function(t,r){var i;// If the active state hasn't changed, we can safely do nothing here
if(n[t].isActive===r)return Promise.resolve();null===// Propagate active change to children
(i=e.variantChildren)||void 0===i||i.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;let a=o(t);for(let e in n)n[e].protectedKeys={};return a},setAnimateFunction:/**
     * This just allows us to inject mocked animation functions
     * @internal
     */function(n){t=n(e)},getState:()=>n}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();this.unmount(),a3(e)&&(this.unmount=e.subscribe(this.node))}/**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends lj{constructor(){super(...arguments),this.id=lU++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends lj{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof r?r:lz[r]};return function(e,t,n){let r=function({root:e,...t}){let n=e||document;lN.has(n)||lN.set(n,{});let r=lN.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(lO,{root:e,...t})),r[i]}(t);return lA.set(e,n),r.observe(e),()=>{lA.delete(e),r.unobserve(e)}}(this.node.current,o,e=>{let{isIntersecting:t}=e;/**
             * If there's been no change in the viewport state, early return.
             */if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);/**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends lj{constructor(){super(...arguments),this.removeStartListeners=r5,this.removeEndListeners=r5,this.removeAccessibleListeners=r5,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();let n=this.node.getProps(),r=lS(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;let{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps(),o=i||lM(this.node.current,e.target)?n:r;o&&ii.update(()=>o(e,t))},{passive:!(n.onTap||n.onPointerUp)}),i=lS(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=o4(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=ly(this.node.current,"keydown",e=>{"Enter"!==e.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=ly(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&lL("up",(e,t)=>{let{onTap:n}=this.node.getProps();n&&ii.postRender(()=>n(e,t))})}),lL("down",(e,t)=>{this.startPress(e,t)}))}),t=ly(this.node.current,"blur",()=>{this.isPressing&&lL("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=o4(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&ii.postRender(()=>n(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;let e=this.node.getProps();return e.whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!lT()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:n}=this.node.getProps();n&&ii.postRender(()=>n(e,t))}mount(){let e=this.node.getProps(),t=lS(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=ly(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=o4(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends lj{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;/**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=o4(ly(this.node.current,"focus",()=>this.onFocus()),ly(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends lj{mount(){this.unmount=o4(lR(this.node,!0),lR(this.node,!1))}unmount(){}}},pan:{Feature:class extends lj{constructor(){super(...arguments),this.removePointerDownListener=r5}onPointerDown(e){this.session=new lW(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:l7(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:un(e),onStart:un(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&ii.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=lS(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends lj{constructor(e){super(e),this.removeGroupControls=r5,this.removeListeners=r5,this.controls=new ue(e)}mount(){// If we've been provided a DragControls for manual control over the drag gesture,
// subscribe this component to it on mount.
let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||r5}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:u8,MeasureLayout:us},layout:{ProjectionNode:u8,MeasureLayout:us}},ce=/**
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
 */function({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&function(e){for(let t in e)se[t]={...se[t],...e[t]}}(e);let o=(0,w.forwardRef)(function(o,a){var s;let l;let u={...(0,w.useContext)(sJ),...o,layoutId:function({layoutId:e}){let t=(0,w.useContext)(s4).id;return t&&void 0!==e?t+"-"+e:e}(o)},{isStatic:d}=u,f=function(e){let{initial:t,animate:n}=function(e,t){if(a8(e)){let{initial:t,animate:n}=e;return{initial:!1===t||a4(t)?t:void 0,animate:a4(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,w.useContext)(s8));return(0,w.useMemo)(()=>({initial:t,animate:n}),[lt(t),lt(n)])}(o),p=r(o,d);if(!d&&aJ){/**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */f.visualElement=function(e,t,n,r){let{visualElement:i}=(0,w.useContext)(s8),o=(0,w.useContext)(s7),a=(0,w.useContext)(sX),s=(0,w.useContext)(sJ).reducedMotion,l=(0,w.useRef)();/**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:!!a&&!1===a.initial,reducedMotionConfig:s}));let u=l.current;(0,w.useInsertionEffect)(()=>{u&&u.update(n,a)});/**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */let c=(0,w.useRef)(!!(n[im]&&!window.HandoffComplete));return sq(()=>{u&&(s9.postRender(u.render),c.current&&u.animationState&&u.animationState.animateChanges())}),(0,w.useEffect)(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,// This ensures all future calls to animateChanges() will run in useEffect
window.HandoffComplete=!0))}),u}(i,p,u,t);/**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */let n=(0,w.useContext)(ln),r=(0,w.useContext)(s7).strict;f.visualElement&&(l=f.visualElement.loadFeatures(u,r,e,n))}/**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */return(0,c.jsxs)(s8.Provider,{value:f,children:[l&&f.visualElement?(0,c.jsx)(l,{visualElement:f.visualElement,...u}):null,n(i,o,(s=f.visualElement,(0,w.useCallback)(e=>{e&&p.mount&&p.mount(e),s&&(e?s.mount(e):s.unmount()),a&&("function"==typeof a?a(e):aZ(a)&&(a.current=e))},/**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */[s])),p,d,f.visualElement)]})});return o[lr]=i,o}(e(t,n)))}if("undefined"==typeof Proxy)return t;/**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */let n=new Map;return new Proxy(t,{/**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}((e,t)=>(function(e,{forwardMotionProps:t=!1},n,r){let i=lo(e)?lg:lv;return{...i,preloadedFeatures:n,useRender:function(e=!1){return(t,n,r,{latestValues:i},o)=>{let a=lo(t)?lp:ll,s=a(n,i,o,t),l=function(e,t,n){let r={};for(let i in e)/**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */("values"!==i||"object"!=typeof e.values)&&(ld(i)||!0===n&&lc(i)||!t&&!lc(i)||// If trying to use native HTML drag events, forward drag listeners
    e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"==typeof t,e),u=t!==w.Fragment?{...l,...s,ref:r}:{},{children:c}=n,d=(0,w.useMemo)(()=>aj(c)?c.get():c,[c]);return(0,w.createElement)(t,{...u,children:d})}}(t),createVisualElement:r,Component:e}})(e,t,u9,u7));/**
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
 */function ct(e){let t=sZ(()=>a_(e)),{isStatic:n}=(0,w.useContext)(sJ);if(n){let[,n]=(0,w.useState)(e);(0,w.useEffect)(()=>t.on("change",n),[])}return t}var w=(u("acw62"),u("acw62"));const cn=e=>e&&"object"==typeof e&&e.mix,cr=e=>cn(e)?e.mix:void 0;function ci(e,t){/**
     * Initialise the returned motion value. This remains the same between renders.
     */let n=ct(t()),r=()=>n.set(t());return(/**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */r(),sq(()=>{let t=()=>ii.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),io(r)}}),n)}function co(e,t,n,r){if("function"==typeof e)return function(e){aF.current=[],e();let t=ci(aF.current,e);return aF.current=void 0,t}(e);let i="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=ac(i,o,{mixer:cr(o[0]),...a});return t?s(r):s}(t,n,r);return Array.isArray(e)?ca(e,i):ca([e],([e])=>i(e))}function ca(e,t){let n=sZ(()=>[]);return ci(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}// src/sheet.tsx
// src/constants.ts
var cs="calc(100% - env(safe-area-inset-top) - 34px)",cl="undefined"==typeof window,cu={ease:"easeOut",duration:.2},cc={ease:"linear",duration:.01};// src/utils.ts
function cd(e,t){let n=e[0],r=Math.abs(e[0]-t);for(let i=1;i<e.length;i++){let o=Math.abs(e[i]-t);o<r&&(n=e[i],r=o)}return n}function cf(e){let t=document.querySelector("body"),n=document.getElementById(e);n&&(n.style.removeProperty("border-top-right-radius"),n.style.removeProperty("border-top-left-radius"),n.style.removeProperty("transform"),n.addEventListener("transitionend",function e(){n.style.removeProperty("overflow"),n.style.removeProperty("will-change"),n.style.removeProperty("transition"),t.style.removeProperty("background-color"),n.removeEventListener("transitionend",e)}))}function cp({snapTo:e,sheetHeight:t}){return e<0&&console.warn(`Snap point is out of bounds. Sheet height is ${t} but snap point is ${t+Math.abs(e)}.`),Math.max(Math.round(e),0)}function ch(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):e&&(e.current=t)})}}// src/hooks.tsx
var cm=cl?w.useEffect:w.useLayoutEffect;function cg(e){let t=(0,w.useRef)();return(0,w.useEffect)(()=>{t.current=e}),t.current}function cv(e){let t=(0,w.useRef)();return cm(()=>{t.current=e}),(0,w.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}var cy={bottom:0,top:0,left:0,right:0};function cb(){let e=(0,w.useRef)(null),t=(0,w.useCallback)(()=>cy,[]);return{constraintsRef:e,onMeasureDragConstraints:t}}var cx=/*#__PURE__*/(0,w.createContext)(void 0),cw=()=>{let e=(0,w.useContext)(cx);if(!e)throw Error("Sheet context error");return e},cS=/*#__PURE__*/(0,w.createContext)(void 0);function ck({children:e}){let t=cw(),[r,i]=(0,w.useState)(!!t.disableDrag);return /*@__PURE__*/n(w).createElement(cS.Provider,{value:{disableDrag:r,setDragEnabled:function(){t.disableDrag||i(!1)},setDragDisabled:function(){r||i(!0)}}},e)}var cE=()=>{let e=(0,w.useContext)(cS);if(!e)throw Error("Sheet scroller context error");return e},cP="undefined"!=typeof window?window.visualViewport:void 0,cC=/* @__PURE__ */new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),cT=0;function cj(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function cR(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function cM(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=H(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;r>n+e.clientHeight&&(t.scrollTop+=r-n)}e=t.parentElement}}function cL(e){return e instanceof HTMLInputElement&&!cC.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var cA={wrapper:{position:"fixed",top:0,bottom:0,left:0,right:0,overflow:"hidden",pointerEvents:"none"},backdrop:{zIndex:1,position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.2)",touchAction:"none",// Disable iOS body scrolling
border:"none"},container:{zIndex:2,position:"absolute",left:0,bottom:0,width:"100%",backgroundColor:"#fff",borderTopRightRadius:"8px",borderTopLeftRadius:"8px",boxShadow:"0px -2px 16px rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",pointerEvents:"auto"},headerWrapper:{width:"100%"},header:{height:"40px",width:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},indicator:{width:"18px",height:"4px",borderRadius:"99px",backgroundColor:"#ddd"},content:{flexGrow:1,display:"flex",flexDirection:"column",minHeight:"0px",position:"relative"},scroller:{height:"100%",overflowY:"auto"}},cN=/*#__PURE__*/(0,w.forwardRef)(({onOpenStart:e,onOpenEnd:t,onClose:r,onCloseStart:i,onCloseEnd:a,onSnap:s,children:l,disableScrollLocking:u=!1,isOpen:c,snapPoints:f,rootId:p,mountPoint:h,style:m,detent:g="full-height",initialSnap:v=0,disableDrag:y=!1,prefersReducedMotion:b=!1,tweenConfig:x=cu,...S},k)=>{let E=(0,w.useRef)(null),P=(0,w.useRef)(null),C=ct(0),{height:T}=function(){let[e,t]=(0,w.useState)({height:0,width:0});return cm(()=>{let e=()=>{t({height:window.innerHeight,width:window.innerWidth})};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),e}(),j=/**
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
     */a1.current||a2();let[e]=(0,w.useState)(a0.current);/**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */return e}(),R=!!(b||j),M={type:"tween",...R?cc:x},L=ct(0),A=co(L,e=>e>=T?-1:9999999),N=co(L,e=>e>=T?"hidden":"visible"),D=(0,w.useRef)({onOpenStart:e,onOpenEnd:t,onCloseStart:i,onCloseEnd:a});cm(()=>{D.current={onOpenStart:e,onOpenEnd:t,onCloseStart:i,onCloseEnd:a}}),f&&console.assert(function(e){for(let t=0;t<e.length;t++)if(e[t+1]>e[t])return!1;return!0}(f=f.map(e=>e>0&&e<=1?Math.round(e*T):e<0?T+e:e))||0===T,`Snap points need to be in descending order got: [${f.join(", ")}]`);let O=cv((e,{delta:t})=>{let n=L.getVelocity();n>0&&C.set(10),n<0&&C.set(-10),L.set(Math.max(L.get()+t.y,0))}),z=cv((e,{velocity:t})=>{if(t.y>500)r();else{let e=E.current,t=e.getBoundingClientRect().height,n=L.get(),i=0;if(f){let e=f.map(e=>t-Math.min(e,t));"content-height"!==g||e.includes(0)||e.unshift(0),i=cd(e,n)}else n/t>.6&&(i=t);if(sY(L,i=cp({snapTo:i,sheetHeight:t}),M),f&&s){let e=Math.abs(Math.round(f[0]-i)),t=f.indexOf(cd(f,e));s(t)}let o=Math.round(t),a=i>=o;a&&r()}C.set(0)});(0,w.useEffect)(()=>{if(!f||!s)return;let e=c?v:f.length-1;s(e)},[c]),(0,w.useImperativeHandle)(k,()=>({y:L,snapTo:e=>{let t=E.current;if((null==f?void 0:f[e])!==void 0&&null!==t){let n=t.getBoundingClientRect().height,i=f[e],o=cp({snapTo:n-i,sheetHeight:n});sY(L,o,M),s&&s(e),o>=n&&r()}}})),function(e,t){let n=cg(e);(0,w.useEffect)(()=>{t&&!n&&e?function(e){let t=document.querySelector("body"),n=document.querySelector(`#${e}`);if(n){let e=window.innerHeight;t.style.backgroundColor="#000",n.style.overflow="hidden",n.style.willChange="transform",n.style.transition="transform 200ms ease-in-out, border-radius 200ms linear",n.style.transform=`translateY(calc(env(safe-area-inset-top) + 12px)) scale(${(e-24)/e})`,n.style.borderTopRightRadius="10px",n.style.borderTopLeftRadius="10px"}}(t):t&&!e&&n&&cf(t)},[e,n]),(0,w.useEffect)(()=>()=>{t&&e&&cf(t)},[e])}(c,p),function(e={}){let{isDisabled:t}=e;X(()=>{if(!t)return 1==++cT&&(o=q()?function(){let e;let t=0,n=window.pageXOffset,r=window.pageYOffset,i=$(cj(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),cj(document.documentElement,"overflow","hidden"),cj(document.body,"marginTop",`-${r}px`));window.scrollTo(0,0);let o=$(cR(document,"touchstart",n=>{((e=H(n.target))!==document.documentElement||e!==document.body)&&(t=n.changedTouches[0].pageY)},{passive:!1,capture:!0}),cR(document,"touchmove",n=>{if(void 0===e)return;if(e===document.documentElement||e===document.body){n.preventDefault();return}let r=n.changedTouches[0].pageY,i=e.scrollTop,o=e.scrollHeight-e.clientHeight;0!==o&&((i<=0&&r>t||i>=o&&r<t)&&n.preventDefault(),t=r)},{passive:!1,capture:!0}),cR(document,"touchend",e=>{let t=e.target;cL(t)&&t!==document.activeElement&&(e.preventDefault(),t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),cR(document,"focus",e=>{let t=e.target;cL(t)&&(t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",cP&&(cP.height<window.innerHeight?requestAnimationFrame(()=>{cM(t)}):cP.addEventListener("resize",()=>{cM(t)},{once:!0}))}))},!0),cR(window,"scroll",()=>{window.scrollTo(0,0)}));return()=>{i(),o(),window.scrollTo(n,r)}}():$(cj(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),cj(document.documentElement,"overflow","hidden"))),()=>{0==--cT&&o()}},[t])}({isDisabled:u||!c});let F=(0,w.useMemo)(()=>y?void 0:{drag:"y",dragElastic:0,dragMomentum:!1,dragPropagation:!1,onDrag:O,onDragEnd:z},[y,T]),I={y:L,sheetRef:E,isOpen:c,initialSnap:v,snapPoints:f,detent:g,indicatorRotation:C,callbacks:D,dragProps:F,windowHeight:T,animationOptions:M,reduceMotion:R,disableDrag:y},_=/*@__PURE__*/n(w).createElement(cx.Provider,{value:I},/*@__PURE__*/n(w).createElement(ce.div,{...S,ref:ch([k,P]),style:{...cA.wrapper,zIndex:A,visibility:N,...m}},/*@__PURE__*/n(w).createElement(s5,null,c?/*@__PURE__*/n(w).createElement(ck,null,(0,w.Children).map(l,(e,t)=>/*#__PURE__*/(0,w.cloneElement)(e,{key:`sheet-child-${t}`}))):null)));return cl?_:/*#__PURE__*/(0,d.createPortal)(_,h??document.body)});cN.displayName="Sheet";var cD=/*#__PURE__*/(0,w.forwardRef)(({children:e,style:t={},className:r="",...i},o)=>{let{y:a,isOpen:s,callbacks:l,snapPoints:u,initialSnap:c=0,sheetRef:d,windowHeight:f,detent:p,animationOptions:h,reduceMotion:m}=cw(),{handleAnimationComplete:g}=function(e,t){let n=cg(e),r=(0,w.useRef)(!1),i=(0,w.useCallback)(()=>{var e,n,i,o;r.current?(null==(o=(i=t.current).onCloseEnd)||o.call(i),r.current=!1):(null==(n=(e=t.current).onOpenEnd)||n.call(e),r.current=!0)},[e,n]);return(0,w.useEffect)(()=>{var r,i,o,a;!n&&e?null==(i=(r=t.current).onOpenStart)||i.call(r):!e&&n&&(null==(a=(o=t.current).onCloseStart)||a.call(o))},[e,n]),{handleAnimationComplete:i}}(s,l),v=u?u[0]-u[c]:0,y=u?u[0]:null,b=null!==y?`min(${y}px, ${cs})`:cs;return /*@__PURE__*/n(w).createElement(ce.div,{...i,ref:ch([d,o]),className:`react-modal-sheet-container ${r}`,style:{...cA.container,...t,..."full-height"===p&&{height:b},..."content-height"===p&&{maxHeight:b},y:a},initial:!m&&{y:f},animate:{y:v,transition:h},exit:{y:f,transition:h},onAnimationComplete:g},e)});cD.displayName="SheetContainer";var cO=/*#__PURE__*/(0,w.forwardRef)(({children:e,style:t,disableDrag:r,className:i="",...o},a)=>{let s=cw(),l=cE(),{constraintsRef:u,onMeasureDragConstraints:c}=cb(),d=r||l.disableDrag?void 0:s.dragProps;return /*@__PURE__*/n(w).createElement(ce.div,{...o,ref:ch([a,u]),className:`react-modal-sheet-content ${i}`,style:{...cA.content,...t},...d,dragConstraints:u,onMeasureDragConstraints:c},e)});cO.displayName="SheetContent";var cz=/*#__PURE__*/(0,w.forwardRef)(({children:e,style:t,disableDrag:r,...i},o)=>{let{indicatorRotation:a,dragProps:s}=cw(),{constraintsRef:l,onMeasureDragConstraints:u}=cb(),c=r?void 0:s,d=co(a,e=>`translateX(2px) rotate(${e}deg)`),f=co(a,e=>`translateX(-2px) rotate(${-1*e}deg)`);return /*@__PURE__*/n(w).createElement(ce.div,{...i,ref:ch([o,l]),style:{...cA.headerWrapper,...t},...c,dragConstraints:l,onMeasureDragConstraints:u},e||/*@__PURE__*/n(w).createElement("div",{className:"react-modal-sheet-header",style:cA.header},/*@__PURE__*/n(w).createElement(ce.span,{className:"react-modal-sheet-drag-indicator",style:{...cA.indicator,transform:d}}),/*@__PURE__*/n(w).createElement(ce.span,{className:"react-modal-sheet-drag-indicator",style:{...cA.indicator,transform:f}})))});cz.displayName="SheetHeader";var cF=e=>!!e.onClick||!!e.onTap,cI=/*#__PURE__*/(0,w.forwardRef)(({style:e={},className:t="",...r},i)=>{let o=cF(r)?ce.button:ce.div,a=cF(r)?"auto":"none";return /*@__PURE__*/n(w).createElement(o,{...r,ref:i,className:`react-modal-sheet-backdrop ${t}`,style:{...cA.backdrop,...e,pointerEvents:a},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})});cI.displayName="SheetBackdrop";var c_=/*#__PURE__*/(0,w.forwardRef)(({draggableAt:e="top",children:t,style:r,className:i="",...o},a)=>{let s=cE();function l(t){let{scrollTop:n,scrollHeight:r,clientHeight:i}=t;if(!(r>i))return;let o=n<=0,a=r-n===i;"top"===e&&o||"bottom"===e&&a||"both"===e&&(o||a)?s.setDragEnabled():s.setDragDisabled()}let u="undefined"!=typeof window&&("ontouchstart"in window||navigator.maxTouchPoints>0)?{onScroll:function(e){l(e.currentTarget)},onTouchStart:function(e){l(e.currentTarget)}}:void 0;return /*@__PURE__*/n(w).createElement("div",{...o,ref:a,className:`react-modal-sheet-scroller ${i}`,style:{...cA.scroller,...r},...u},t)});c_.displayName="SheetScroller",cN.Container=cD,cN.Header=cz,cN.Content=cO,cN.Backdrop=cI,cN.Scroller=c_;//# sourceMappingURL=out.js.map
var w=u("acw62");function cV({when:e=!0,from:t,to:n}){w.useLayoutEffect(()=>{let r=document.querySelector('meta[name="theme-color"]');if(!r)return;let i=t||r.getAttribute("content");if(e)return r.setAttribute("content",n),()=>{r.setAttribute("content",i)}},[e])}const cB=[-50,.5,200,0],c$=rM.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`,cU=rM.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;var cH=()=>{let e=w.useRef(),[t,n]=w.useState(!1),[r,i]=w.useState(1),o=t=>e.current?.snapTo(t),a=()=>n(!1);return w.useEffect(()=>{console.log("> Current snap point",r)},[r]),cV({when:t,from:"#fff",to:"#000"}),/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>n(!0),children:"Bottom Sheet with Snap Points"}),/*#__PURE__*/(0,c.jsxs)(cN,{ref:e,isOpen:t,onClose:a,onSnap:i,snapPoints:cB,initialSnap:1,rootId:"root",children:[/*#__PURE__*/(0,c.jsx)(cN.Container,{children:/*#__PURE__*/(0,c.jsx)(cN.Content,{children:/*#__PURE__*/(0,c.jsx)(c$,{children:/*#__PURE__*/(0,c.jsxs)(cU,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>o(0),children:"Snap to -50 (from top)"}),/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>o(1),children:"Snap to 50%"}),/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>o(2),children:"Snap to 200"}),/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>o(3),children:"Snap to 0 (close)"})]})})})}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{onTap:a})]})]})},w=u("acw62");const cW=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`,cK=rM.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;var cG=()=>{let[e,t]=w.useState(!1);return/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>t(!0),children:"Scrollable Bottom Sheet"}),/*#__PURE__*/(0,c.jsxs)(cN,{isOpen:e,onClose:()=>t(!1),children:[/*#__PURE__*/(0,c.jsxs)(cN.Container,{children:[/*#__PURE__*/(0,c.jsx)(cN.Header,{}),/*#__PURE__*/(0,c.jsx)(cN.Content,{children:/*#__PURE__*/(0,c.jsx)(cN.Scroller,{children:/*#__PURE__*/(0,c.jsx)(cW,{children:Array.from({length:50}).fill(1).map((e,t)=>/*#__PURE__*/(0,c.jsx)(cK,{children:t},t))})})})]}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{})]})]})},w=u("acw62");const cY={name:"Gamification Burn Rate",year:"2020",artist:"Niche Market",genre:"Indie Techno",image:"https://source.unsplash.com/WDuVbCMMlSg/400x400",songs:["Gamification investor seed money","Gen-z iPad","Bandwidth influencer","Paradigm shift","Buzz entrepreneur","Android disruptive","Marketing rockstar","Focus","Gen-z return","Accelerator ownership","Termsheet iteration incubator","Pivot seed"]};// This is for better animation perf on Safari
(()=>{let e=document.createElement("link");e.rel="preload",e.as="image",e.href=cY.image,document.head.appendChild(e)})(),u("acw62"),u("acw62");const cq=()=>/*#__PURE__*/(0,c.jsx)(cQ,{children:/*#__PURE__*/(0,c.jsx)(rV,{size:16})}),cQ=rM.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #135843;
  color: #73ffd3;
  display: flex;
  align-items: center;
  justify-content: center;
`,cX=rM.div`
  position: relative;
  width: 100%;
  height: 100%;
`,cZ=rM.div`
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
`,cJ=rM.div`
  display: flex;
  padding-bottom: 16px;
`,c0=rM.div`
  width: 160px;
  height: 160px;
`,c1=rM.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`,c2=rM.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 1.6;
`,c3=rM.span`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`,c4=rM.span`
  font-size: 14px;
  color: #73ffd3;
`,c6=rM.span`
  font-size: 14px;
  color: #888;
`,c5=rM.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 0px -16px;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;

  & > button:first-of-type {
    margin-right: 16px;
  }
`,c8=rM.button`
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
`,c7=rM.ul`
  padding: 0;
  margin: 0;
  flex: 1;
  overflow: auto;
  margin: 0px -16px;
`,c9=rM.li`
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
`,de=rM.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`,dt=rM(ce.button)`
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
`,dn=rM.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
`,dr=rM.div`
  flex: 1;
  margin: 0px 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  text-align: left;
`;var di=({album:e,currentSong:t,isPlayerOpen:n,onSongClick:r,onMiniPlayerClick:i})=>/*#__PURE__*/(0,c.jsxs)(cX,{children:[/*#__PURE__*/(0,c.jsxs)(cZ,{children:[/*#__PURE__*/(0,c.jsxs)(cJ,{children:[/*#__PURE__*/(0,c.jsx)(c0,{children:/*#__PURE__*/(0,c.jsx)(c1,{src:e.image})}),/*#__PURE__*/(0,c.jsxs)(c2,{children:[/*#__PURE__*/(0,c.jsx)(c3,{children:e.name}),/*#__PURE__*/(0,c.jsx)(c4,{children:e.artist}),/*#__PURE__*/(0,c.jsxs)(c6,{children:[e.genre," \xb7 ",e.year]}),/*#__PURE__*/(0,c.jsx)("div",{style:{flex:1}}),/*#__PURE__*/(0,c.jsx)(cq,{})]})]}),/*#__PURE__*/(0,c.jsxs)(c5,{children:[/*#__PURE__*/(0,c.jsxs)(c8,{children:[/*#__PURE__*/(0,c.jsx)(rW,{size:12}),/*#__PURE__*/(0,c.jsx)("span",{children:"Play"})]}),/*#__PURE__*/(0,c.jsxs)(c8,{children:[/*#__PURE__*/(0,c.jsx)(rG,{size:14}),/*#__PURE__*/(0,c.jsx)("span",{children:"Shuffle"})]})]}),/*#__PURE__*/(0,c.jsx)(c7,{children:e.songs.map((e,t)=>/*#__PURE__*/(0,c.jsxs)(c9,{onClick:()=>r(e),children:[/*#__PURE__*/(0,c.jsx)("span",{children:t+1}),/*#__PURE__*/(0,c.jsx)("div",{children:e})]},e))})]}),!n&&/*#__PURE__*/(0,c.jsx)(de,{children:/*#__PURE__*/(0,c.jsxs)(dt,{onClick:i,children:[/*#__PURE__*/(0,c.jsx)(dn,{src:e.image}),/*#__PURE__*/(0,c.jsx)(dr,{children:t}),/*#__PURE__*/(0,c.jsx)(rW,{size:20}),/*#__PURE__*/(0,c.jsx)("div",{style:{width:24}}),/*#__PURE__*/(0,c.jsx)(r$,{size:20})]})})]});u("acw62");const da=rM.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 24px 16px 24px;
`,ds=rM.div`
  display: flex;
  flex-direction: column;
  flex: none;
`,dl=rM.div`
  position: relative;
  margin-bottom: 40px;
  flex: 1;
`,du=rM.div`
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,dc=rM.img`
  display: block;
  height: 100%;
  max-height: 300px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.3);
  z-index: 999;
`,dd=rM.div`
  display: flex;
  align-items: center;
`,df=rM.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.4;
`,dp=rM.span`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
`,dh=rM.div`
  font-size: 18px;
  color: #73ffd3;
`,dm=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
`,dg=rM.div`
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
`,dv=rM.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666;
  font-size: 12px;
`,dy=rM.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`,db=rM.button`
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
`,dx=rM.div`
  display: flex;
  align-items: center;
  color: #666;
`,dw=rM.input`
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
`,dS=rM.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`;var dk=({song:e,album:t})=>/*#__PURE__*/(0,c.jsxs)(da,{children:[/*#__PURE__*/(0,c.jsx)(dl,{children:/*#__PURE__*/(0,c.jsx)(du,{children:/*#__PURE__*/(0,c.jsx)(dc,{src:t.image})})}),/*#__PURE__*/(0,c.jsxs)(ds,{children:[/*#__PURE__*/(0,c.jsxs)(dd,{children:[/*#__PURE__*/(0,c.jsxs)(df,{children:[/*#__PURE__*/(0,c.jsx)(dp,{children:e}),/*#__PURE__*/(0,c.jsx)(dh,{children:t.artist})]}),/*#__PURE__*/(0,c.jsx)(cq,{})]}),/*#__PURE__*/(0,c.jsxs)(dm,{children:[/*#__PURE__*/(0,c.jsx)(dg,{}),/*#__PURE__*/(0,c.jsxs)(dv,{children:[/*#__PURE__*/(0,c.jsx)("span",{children:"0.00"}),/*#__PURE__*/(0,c.jsx)("span",{children:"-4.00"})]})]}),/*#__PURE__*/(0,c.jsxs)(dy,{children:[/*#__PURE__*/(0,c.jsx)(db,{onClick:()=>console.log("Prev song"),children:/*#__PURE__*/(0,c.jsx)(r_,{size:32})}),/*#__PURE__*/(0,c.jsx)(db,{onClick:()=>console.log("Play / Pause"),children:/*#__PURE__*/(0,c.jsx)(rW,{size:32})}),/*#__PURE__*/(0,c.jsx)(db,{onClick:()=>console.log("Next song"),children:/*#__PURE__*/(0,c.jsx)(r$,{size:32})})]}),/*#__PURE__*/(0,c.jsxs)(dx,{children:[/*#__PURE__*/(0,c.jsx)(rq,{size:12}),/*#__PURE__*/(0,c.jsx)(dw,{type:"range"}),/*#__PURE__*/(0,c.jsx)(rQ,{size:12})]}),/*#__PURE__*/(0,c.jsxs)(dS,{children:[/*#__PURE__*/(0,c.jsx)(rB,{size:20,color:"#333"}),/*#__PURE__*/(0,c.jsx)(rK,{size:20,color:"#73ffd3"}),/*#__PURE__*/(0,c.jsx)(rU,{size:20,color:"#73ffd3"})]})]})]});const dE=rM.div`
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
`,dP=rM(cN)`
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
`;var dC=()=>{let[e,t]=w.useState(!1),[n,r]=w.useState(cY.songs[0]);return cV({when:e,from:"#111",to:"#000"}),cV({to:"#111"}),/*#__PURE__*/(0,c.jsxs)(dE,{children:[/*#__PURE__*/(0,c.jsx)(di,{album:cY,currentSong:n,isPlayerOpen:e,onMiniPlayerClick:()=>t(!0),onSongClick:r}),/*#__PURE__*/(0,c.jsxs)(dP,{isOpen:e,onClose:()=>t(!1),rootId:"root",children:[/*#__PURE__*/(0,c.jsxs)(cN.Container,{children:[/*#__PURE__*/(0,c.jsx)(cN.Header,{}),/*#__PURE__*/(0,c.jsx)(cN.Content,{children:/*#__PURE__*/(0,c.jsx)(dk,{album:cY,song:n})})]}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{})]})]})};function dT(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(e)}function dj(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function dR(e){return(0,rA.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}var w=(u("acw62"),u("acw62"),u("acw62"));/*
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
 */function dM(e){let[t,n]=/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function(e,t,n){let[r,i]=(0,w.useState)(e||t),o=(0,w.useRef)(void 0!==e),a=void 0!==e;(0,w.useEffect)(()=>{let e=o.current;e!==a&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`),o.current=a},[a]);let s=a?e:r,l=(0,w.useCallback)((e,...t)=>{let r=(e,...t)=>{n&&!Object.is(s,e)&&n(e,...t),a||// We do not use a ref for this because we specifically _do_ want the value to
// reset every render, and assigning to a ref in render breaks aborted suspended renders.
// eslint-disable-next-line react-hooks/exhaustive-deps
(s=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((n,...i)=>{let o=e(a?s:n,...i);return(r(o,...t),a)?n:o})):(a||i(e),r(e,...t))},[a,s,n]);return[s,l]}(e.isOpen,e.defaultOpen||!1,e.onOpenChange),r=(0,w.useCallback)(()=>{n(!0)},[n]),i=(0,w.useCallback)(()=>{n(!1)},[n]),o=(0,w.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:r,close:i,toggle:o}}/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */const dL=new Set(["id"]),dA=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),dN=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),dD=/^(data-.*)$/;function dO(e,t={}){let{labelable:n,isLink:r,propNames:i}=t,o={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(dL.has(t)||n&&dA.has(t)||r&&dN.has(t)||(null==i?void 0:i.has(t))||dD.test(t))&&(o[t]=e[t]);return o}/*
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
 */function dz(e,t){let n,{elementType:r="button",isDisabled:i,onPress:o,onPressStart:a,onPressEnd:s,onPressChange:l,preventFocusOnPress:u,allowFocusWhenDisabled:c,onClick:d,href:f,target:p,rel:h,type:m="button"}=e;n="button"===r?{type:m,disabled:i}:{role:"button",tabIndex:i?void 0:0,href:"a"===r&&i?void 0:f,target:"a"===r?p:void 0,type:"input"===r?m:void 0,disabled:"input"===r?i:void 0,"aria-disabled":i&&"input"!==r?i:void 0,rel:"a"===r?h:void 0};let{pressProps:g,isPressed:v}=eD({onPressStart:a,onPressEnd:s,onPressChange:l,onPress:o,isDisabled:i,preventFocusOnPress:u,ref:t}),{focusableProps:y}=function(e,t){let{focusProps:n}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e,o=(0,w.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0},[r,i]),a=eW(o),s=(0,w.useCallback)(e=>{// Double check that document.activeElement actually matches e.target in case a previously chained
// focus handler already moved focus somewhere else.
e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),i&&i(!0),a(e))},[i,n,a]);return{focusProps:{onFocus:!t&&(n||i||r)?s:void 0,onBlur:!t&&(r||i)?o:void 0}}}(e),{keyboardProps:r}={keyboardProps:e.isDisabled?{}:{onKeyDown:e6(e.onKeyDown),onKeyUp:e6(e.onKeyUp)}},i=ed(n,r),o=function(e){let t=(0,w.useContext)(th)||{};ex(t,e);// eslint-disable-next-line
let{ref:n,...r}=t;return r}(t),a=e.isDisabled?{}:o,s=(0,w.useRef)(e.autoFocus);return(0,w.useEffect)(()=>{s.current&&t.current&&e5(t.current),s.current=!1},[t]),{focusableProps:ed({...i,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},a)}}(e,t);c&&(y.tabIndex=i?-1:y.tabIndex);let b=ed(y,g,dO(e,{labelable:!0}));return{isPressed:v,buttonProps:ed(n,b,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{d&&(d(e),console.warn("onClick is deprecated, please use onPress"))}})}}/*
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
 */function dF(e,t){let n,r,{role:i="dialog"}=e,o=function(e=[]){let t=function(e){let[t,n]=(0,w.useState)(void 0),r=(0,w.useRef)(null),i=ei(t),o=(0,w.useCallback)(e=>{r.current=e},[]);return el&&eu.set(i,o),X(()=>()=>{eu.delete(i)},[i]),(0,w.useEffect)(()=>{let e=r.current;e&&(r.current=null,n(e))}),i}(),[n,r]=/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */function(e){let[t,n]=(0,w.useState)(e),r=(0,w.useRef)(null),i=Z(()=>{if(!r.current)return;// Run the generator to the next yield.
let e=r.current.next();// If the generator is done, reset the effect.
if(e.done){r.current=null;return}// If the value is the same as the current value,
// then continue to the next yield. Otherwise,
// set the value in state and wait for the next layout effect.
t===e.value?i():n(e.value)});X(()=>{// If there is an effect currently running, continue to the next yield.
r.current&&i()});let o=Z(e=>{r.current=e(t),i()});return[t,o]}(t),i=(0,w.useCallback)(()=>{r(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,r]);return X(i,[t,i,...e]),n}();o=e["aria-label"]?void 0:o;let a=(0,w.useRef)(!1);// We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
// on mount when inside an iframe, no matter which element we programmatically focus.
// See https://bugs.webkit.org/show_bug.cgi?id=211934.
// useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
// even without aria-modal on the dialog itself.
return(0,w.useEffect)(()=>{if(t.current&&!t.current.contains(document.activeElement)){e5(t.current);// Safari on iOS does not move the VoiceOver cursor to the dialog
// or announce that it has opened until it has rendered. A workaround
// is to wait for half a second, then blur and re-focus the dialog.
let e=setTimeout(()=>{document.activeElement===t.current&&(a.current=!0,t.current.blur(),e5(t.current),a.current=!1)},500);return()=>{clearTimeout(e)}}},[t]),X(()=>{null==r||r(!0)},[r=null==(n=(0,w.useContext)(tS))?void 0:n.setContain]),{dialogProps:{...dO(e,{labelable:!0}),role:i,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||o,// Prevent blur events from reaching useOverlay, which may cause
// popovers to close. Since focus is contained within the dialog,
// we don't want this to occur due to the above useEffect.
onBlur:e=>{a.current&&e.stopPropagation()}},titleProps:{id:o}}}var w=(u("acw62"),u("acw62"));const dI=rM.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: #fff;
  position: relative;
`,d_=rM.button`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`,dV=rM.span`
  font-weight: 600;
  font-size: 16px;
`;var dB=({sheetState:e,titleProps:t})=>{let n=w.useRef(null),r=dz({onPress:e.close,"aria-label":"Close bottom sheet"},n);return/*#__PURE__*/(0,c.jsxs)(dI,{children:[/*#__PURE__*/(0,c.jsx)(d_,{...r.buttonProps,ref:n,children:/*#__PURE__*/(0,c.jsx)(dR,{size:24,color:"#fff"})}),/*#__PURE__*/(0,c.jsx)(dV,{...t,children:"New Message"})]})};u("acw62");const d$=["john","hannah","trevor","greg","mary","gigi","kendal","mark","fiona","herman","juno","beatrice"].map((e,t)=>({id:t,name:e,// Use index to randomize the returned image
    image:e=>`https://source.unsplash.com/collection/1602384/${100+e}x${100+e}?crop=faces`// prettier-ignore
    })),dU=rM.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,dH=rM.label`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 16px;
`,dW=rM.span`
  color: #888;
  margin-right: 16px;
`,dK=rM.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: #fff;

  &::placeholder {
    color: #444;
  }
`,dG=rM.ul`
  list-style: none;
  margin: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,dY=rM.li`
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
`,dq=rM.img`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #111;
`,dQ=rM.span`
  color: ${e=>e.dimmed?"#888":"#fff"};
  font-weight: ${e=>e.dimmed?400:600};
`,dX=rM.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${e=>e.online?"green":"#888"};
  background-color: ${e=>e.online?"green":"transparent"};
`;var dZ=({inputRef:e})=>/*#__PURE__*/(0,c.jsxs)(dU,{children:[/*#__PURE__*/(0,c.jsxs)(dH,{children:[/*#__PURE__*/(0,c.jsx)(dW,{children:"To:"}),/*#__PURE__*/(0,c.jsx)(dK,{ref:e,placeholder:"Search for a channel or conversation"})]}),/*#__PURE__*/(0,c.jsx)(cN.Scroller,{children:/*#__PURE__*/(0,c.jsx)(dG,{children:d$.map(({id:e,name:t,image:n})=>/*#__PURE__*/(0,c.jsxs)(dY,{tabIndex:0,children:[/*#__PURE__*/(0,c.jsx)(dq,{src:n(e),alt:`Profile picture for ${t}`}),/*#__PURE__*/(0,c.jsx)(dQ,{children:t}),/*#__PURE__*/(0,c.jsx)(dX,{online:e%2==0}),/*#__PURE__*/(0,c.jsx)(dQ,{dimmed:!0,children:t})]},e))})})]});const dJ=({sheetState:e,inputRef:t})=>{let n=w.useRef(null),r=dF({},n),i=tg({onClose:e.close,isOpen:!0,isDismissable:!0},n);// HACK: some props from React Aria need to be cast to `any`
// since they conflict with the Framer Motion props
return tw(),/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsxs)(cN.Container,{...i.overlayProps,...r.dialogProps,ref:n,children:[/*#__PURE__*/(0,c.jsx)(cN.Header,{children:/*#__PURE__*/(0,c.jsx)(dB,{sheetState:e,titleProps:r.titleProps})}),/*#__PURE__*/(0,c.jsx)(cN.Content,{children:/*#__PURE__*/(0,c.jsx)(dZ,{inputRef:t})})]}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{})]})},d0=rM.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  max-width: 680px;
`,d1=rM.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: max(16px, env(safe-area-inset-top));
  padding-bottom: 56px;
  background-color: #333;
`,d2=rM.div`
  width: 100%;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: #fff;
`,d3=rM.div`
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background-color: slategray;
`,d4=rM.h1`
  font-weight: 700;
  font-size: 16px;
`,d6=rM.button`
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
`,d5=rM(cN)`
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
`;var d8=()=>{let e=dM({}),t=w.useRef(null),n=w.useRef(null),r=dz({onPress:e.open},n);return cV({when:e.isOpen,from:"#111",to:"#000"}),cV({to:"#111"}),/*#__PURE__*/(0,c.jsxs)(d0,{children:[/*#__PURE__*/(0,c.jsxs)(d2,{children:[/*#__PURE__*/(0,c.jsx)(d3,{}),/*#__PURE__*/(0,c.jsx)(d4,{children:"A11y Workspace"}),/*#__PURE__*/(0,c.jsx)(dj,{size:20})]}),/*#__PURE__*/(0,c.jsx)(d1,{children:/*#__PURE__*/(0,c.jsx)(d6,{...r.buttonProps,ref:n,children:/*#__PURE__*/(0,c.jsx)(dT,{size:20,color:"#fff"})})}),/*#__PURE__*/(0,c.jsx)(d5,{isOpen:e.isOpen,onOpenEnd:()=>t.current?.focus(),onClose:e.close,rootId:"root",children:/*#__PURE__*/(0,c.jsx)(tx,{children:/*#__PURE__*/(0,c.jsx)(e9,{contain:!0,autoFocus:!1,restoreFocus:!0,children:/*#__PURE__*/(0,c.jsx)(dJ,{sheetState:e,inputRef:t})})})})]})},w=(u("acw62"),u("acw62"));const d7=({state:e,label:t,children:n})=>{let r=d9(e,t);return/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsxs)(cN.Container,{...r,children:[/*#__PURE__*/(0,c.jsx)(cN.Header,{}),/*#__PURE__*/(0,c.jsx)(cN.Content,{children:n})]}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{})]})},d9=(e,t)=>{let n=w.useRef(null),r=dF({"aria-label":t},n),i=tg({onClose:e.close,isOpen:!0,isDismissable:!0},n);return tw(),{ref:n,...i.overlayProps,...r.dialogProps};// HACK: fix type conflicts with Framer Motion
},fe=rM(({state:e,label:t,children:n,...r})=>/*#__PURE__*/(0,c.jsx)(cN,{...r,isOpen:e.isOpen,onClose:e.close,children:/*#__PURE__*/(0,c.jsx)(tx,{children:/*#__PURE__*/(0,c.jsx)(e9,{contain:!0,autoFocus:!0,restoreFocus:!0,children:/*#__PURE__*/(0,c.jsx)(d7,{state:e,label:t,children:n})})})}))`
  margin: 0 auto;
  max-width: 680px;
`,ft=rM.div`
  text-align: center;
  padding-top: 24px;
`;var fn=()=>{let e=dM({}),t=w.useRef(null),n=dz({onPress:e.open},t);return/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsx)(r3,{...n.buttonProps,ref:t,children:"Simple A11y Bottom Sheet"}),/*#__PURE__*/(0,c.jsx)(fe,{state:e,label:"Accessible bottom sheet",children:/*#__PURE__*/(0,c.jsxs)(ft,{children:[/*#__PURE__*/(0,c.jsx)("strong",{children:"This is a simple a11y sheet \uD83E\uDDBE"}),/*#__PURE__*/(0,c.jsx)("p",{children:"Your content goes here..."})]})})]})},w=u("acw62");const fr=()=>{let[e,t]=w.useState(!1),n=w.useRef();return{onScroll:()=>{t(!0),clearTimeout(n.current),n.current=setTimeout(()=>t(!1),150)},isScrolling:e}},fi=rM.div`
  padding: 16px;
`,fo=rM.div`
  width: 100%;
  display: flex;
  padding: 24px 0px;
  overflow-x: auto;
`,fa=rM.div`
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
`;var fs=()=>{let{isScrolling:e,onScroll:t}=fr(),[n,r]=w.useState(!1);return/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>r(!0),children:"Disable drag for horizontal scroll"}),/*#__PURE__*/(0,c.jsxs)(cN,{isOpen:n,onClose:()=>r(!1),children:[/*#__PURE__*/(0,c.jsxs)(cN.Container,{children:[/*#__PURE__*/(0,c.jsx)(cN.Header,{}),/*#__PURE__*/(0,c.jsx)(cN.Content,{disableDrag:e,children:/*#__PURE__*/(0,c.jsxs)(fi,{children:[/*#__PURE__*/(0,c.jsx)("div",{children:e?"Scrolling (drag disabled)":"Not scrolling (drag enabled)"}),/*#__PURE__*/(0,c.jsx)(fo,{onScroll:t,children:Array.from({length:20}).fill(1).map((e,t)=>/*#__PURE__*/(0,c.jsx)(fa,{children:t},t))})]})})]}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{})]})]})},w=u("acw62");const fl=[-50,.5,200,0],fu=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`,fc=rM.div`
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
`,fd=rM.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`;var ff=()=>{let e=w.useRef(),[t,n]=w.useState(!1),r=t=>e.current?.snapTo(t);return/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>n(!0),children:"Scrollable + Snap points"}),/*#__PURE__*/(0,c.jsxs)(cN,{ref:e,isOpen:t,onClose:()=>n(!1),snapPoints:fl,initialSnap:1,children:[/*#__PURE__*/(0,c.jsxs)(cN.Container,{children:[/*#__PURE__*/(0,c.jsx)(cN.Header,{}),/*#__PURE__*/(0,c.jsx)(cN.Content,{style:{paddingBottom:e.current?.y},children:/*#__PURE__*/(0,c.jsx)(cN.Scroller,{draggableAt:"both",children:/*#__PURE__*/(0,c.jsxs)(fu,{children:[/*#__PURE__*/(0,c.jsxs)(fd,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>r(0),children:"Snap to -50 (from top)"}),/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>r(1),children:"Snap to 50%"}),/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>r(2),children:"Snap to 200"}),/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>r(3),children:"Snap to 0 (close)"})]}),Array.from({length:20}).fill(1).map((e,t)=>/*#__PURE__*/(0,c.jsx)(fc,{children:t+1},t))]})})})]}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{})]})]})},w=u("acw62");const fp=rM.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`,fh=rM.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;var fm=()=>{let[e,t]=w.useState(!1),[n,r]=w.useState([0,1]),i=w.useRef(),o=()=>t(!1),a=e=>i.current?.snapTo(e);return/*#__PURE__*/(0,c.jsxs)(c.Fragment,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>t(!0),children:"Bottom Sheet Height of Content"}),/*#__PURE__*/(0,c.jsxs)(cN,{ref:i,isOpen:e,onClose:o,initialSnap:0,snapPoints:[-50,100,0],detent:"content-height",children:[/*#__PURE__*/(0,c.jsxs)(cN.Container,{children:[/*#__PURE__*/(0,c.jsx)(cN.Header,{}),/*#__PURE__*/(0,c.jsx)(cN.Content,{children:/*#__PURE__*/(0,c.jsx)(cN.Scroller,{children:/*#__PURE__*/(0,c.jsxs)(fp,{children:[/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>a(0),children:"Snap to top"}),/*#__PURE__*/(0,c.jsx)(r3,{onClick:()=>a(1),children:"Snap to bottom"}),n.map((e,t)=>/*#__PURE__*/(0,c.jsxs)(fh,{onClick:()=>r(e=>[...e,t+1]),children:[t," (click to create new boxes )"]},t))]})})})]}),/*#__PURE__*/(0,c.jsx)(cN.Backdrop,{onTap:o})]})]})};const fg=()=>/*#__PURE__*/(0,c.jsxs)(fv,{children:[/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"snap-points",children:[/*#__PURE__*/(0,c.jsx)(r0,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Snap points"})]})}),/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"content-height",children:[/*#__PURE__*/(0,c.jsx)(rJ,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Use Content Height"})]})}),/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"scrollable",children:[/*#__PURE__*/(0,c.jsx)(rY,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Scrollable"})]})}),/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"scrollable-snap-points",children:[/*#__PURE__*/(0,c.jsx)(rY,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Scrollable (with snap points)"})]})}),/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"disable-drag",children:[/*#__PURE__*/(0,c.jsx)(rH,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Disable drag"})]})}),/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"apple-music",children:[/*#__PURE__*/(0,c.jsx)(rZ,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Apple Music"})]})}),/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"slack-message",children:[/*#__PURE__*/(0,c.jsx)(r1,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Slack Message"})]})}),/*#__PURE__*/(0,c.jsx)("li",{children:/*#__PURE__*/(0,c.jsxs)(fy,{to:"a11y",children:[/*#__PURE__*/(0,c.jsx)(rX,{size:48}),/*#__PURE__*/(0,c.jsx)("span",{children:"Accessible Sheet"})]})})]}),fv=rM.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  max-width: 800px;
  padding: 16px;
`,fy=rM(B)`
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
`;var fb=()=>/*#__PURE__*/(0,c.jsxs)(M,{children:[/*#__PURE__*/(0,c.jsx)(j,{path:"/",element:/*#__PURE__*/(0,c.jsx)(r4,{bg:"light",children:/*#__PURE__*/(0,c.jsx)(fg,{})})}),/*#__PURE__*/(0,c.jsx)(j,{path:"snap-points/*",element:/*#__PURE__*/(0,c.jsx)(r4,{bg:"light",children:/*#__PURE__*/(0,c.jsx)(cH,{})})}),/*#__PURE__*/(0,c.jsx)(j,{path:"scrollable-snap-points/*",element:/*#__PURE__*/(0,c.jsx)(r4,{bg:"light",children:/*#__PURE__*/(0,c.jsx)(ff,{})})}),/*#__PURE__*/(0,c.jsx)(j,{path:"scrollable/*",element:/*#__PURE__*/(0,c.jsx)(r4,{bg:"light",children:/*#__PURE__*/(0,c.jsx)(cG,{})})}),/*#__PURE__*/(0,c.jsx)(j,{path:"content-height/*",element:/*#__PURE__*/(0,c.jsx)(r4,{bg:"light",children:/*#__PURE__*/(0,c.jsx)(fm,{})})}),/*#__PURE__*/(0,c.jsx)(j,{path:"apple-music/*",element:/*#__PURE__*/(0,c.jsxs)(r4,{bg:"light",children:[/*#__PURE__*/(0,c.jsx)(dC,{}),/*#__PURE__*/(0,c.jsx)(r6,{})]})}),/*#__PURE__*/(0,c.jsx)(j,{path:"slack-message/*",element:/*#__PURE__*/(0,c.jsxs)(r4,{bg:"light",children:[/*#__PURE__*/(0,c.jsx)(d8,{}),/*#__PURE__*/(0,c.jsx)(r6,{})]})}),/*#__PURE__*/(0,c.jsx)(j,{path:"a11y/*",element:/*#__PURE__*/(0,c.jsx)(r4,{bg:"light",children:/*#__PURE__*/(0,c.jsx)(fn,{})})}),/*#__PURE__*/(0,c.jsx)(j,{path:"disable-drag/*",element:/*#__PURE__*/(0,c.jsx)(r4,{bg:"light",children:/*#__PURE__*/(0,c.jsx)(fs,{})})})]});// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const fx=p(document.getElementById("root"));fx.render(/*#__PURE__*/(0,c.jsx)(()=>/*#__PURE__*/(0,c.jsx)(V,{children:/*#__PURE__*/(0,c.jsx)(tx,{children:/*#__PURE__*/(0,c.jsx)(fb,{})})}),{}));//# sourceMappingURL=index.3b7edada.js.map

//# sourceMappingURL=index.3b7edada.js.map
