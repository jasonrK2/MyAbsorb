!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,u={f:c&&!a.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:a},s=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,l=function(t){return f.call(t).slice(8,-1)},p="".split,d=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,h=function(t){return d(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},v=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(t,e){return m.call(t,e)},b=r.document,w=y(b)&&y(b.createElement),j=function(t){return w?b.createElement(t):{}},E=!i&&!o((function(){return 7!=Object.defineProperty(j("div"),"a",{get:function(){return 7}}).a})),S=Object.getOwnPropertyDescriptor,N={f:i?S:function(t,e){if(t=h(t),e=v(e,!0),E)try{return S(t,e)}catch(t){}if(g(t,e))return s(!u.f.call(t,e),t[e])}},P=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},x=Object.defineProperty,I={f:i?x:function(t,e,n){if(P(t),e=v(e,!0),P(n),E)try{return x(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},O=i?function(t,e,n){return I.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t},T=function(t,e){try{O(r,t,e)}catch(n){r[t]=e}return e},C=r["__core-js_shared__"]||T("__core-js_shared__",{}),A=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(t){return A.call(t)});var D,M,k,L,_=C.inspectSource,F=r.WeakMap,z="function"==typeof F&&/native code/.test(_(F)),U=e((function(t){(t.exports=function(t,e){return C[t]||(C[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),R=0,G=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++R+G).toString(36)},W=U("keys"),B={},H=r.WeakMap;if(z){var K=new H,J=K.get,V=K.has,X=K.set;D=function(t,e){return X.call(K,t,e),e},M=function(t){return J.call(K,t)||{}},k=function(t){return V.call(K,t)}}else{var Y=W[L="state"]||(W[L]=q(L));B[Y]=!0,D=function(t,e){return O(t,Y,e),e},M=function(t){return g(t,Y)?t[Y]:{}},k=function(t){return g(t,Y)}}var Q={set:D,get:M,has:k,enforce:function(t){return k(t)?M(t):D(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=M(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=Q.get,n=Q.enforce,o=String(String).split("String");(t.exports=function(t,e,i,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,s=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||g(i,"name")||O(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(c?!s&&t[e]&&(u=!0):delete t[e],u?t[e]=i:O(t,e,i)):u?t[e]=i:T(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||_(this)}))})),$=r,tt=function(t){return"function"==typeof t?t:void 0},et=function(t,e){return arguments.length<2?tt($[t])||tt(r[t]):$[t]&&$[t][e]||r[t]&&r[t][e]},nt=Math.ceil,rt=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?rt:nt)(t)},it=Math.min,at=function(t){return t>0?it(ot(t),9007199254740991):0},ct=Math.max,ut=Math.min,st=function(t){return function(e,n,r){var o,i=h(e),a=at(i.length),c=function(t,e){var n=ot(t);return n<0?ct(n+e,0):ut(n,e)}(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},ft={includes:st(!0),indexOf:st(!1)}.indexOf,lt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=h(t),o=0,i=[];for(n in r)!g(B,n)&&g(r,n)&&i.push(n);for(;e.length>o;)g(r,n=e[o++])&&(~ft(i,n)||i.push(n));return i}(t,lt)}},dt={f:Object.getOwnPropertySymbols},ht=et("Reflect","ownKeys")||function(t){var e=pt.f(P(t)),n=dt.f;return n?e.concat(n(t)):e},yt=function(t,e){for(var n=ht(e),r=I.f,o=N.f,i=0;i<n.length;i++){var a=n[i];g(t,a)||r(t,a,o(e,a))}},vt=/#|\.prototype\./,mt=function(t,e){var n=bt[gt(t)];return n==jt||n!=wt&&("function"==typeof e?o(e):!!e)},gt=mt.normalize=function(t){return String(t).replace(vt,".").toLowerCase()},bt=mt.data={},wt=mt.NATIVE="N",jt=mt.POLYFILL="P",Et=mt,St=N.f,Nt=function(t,e){var n,o,i,a,c,u=t.target,s=t.global,f=t.stat;if(n=s?r:f?r[u]||T(u,{}):(r[u]||{}).prototype)for(o in e){if(a=e[o],i=t.noTargetGet?(c=St(n,o))&&c.value:n[o],!Et(s?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;yt(a,i)}(t.sham||i&&i.sham)&&O(a,"sham",!0),Z(n,o,a,t)}},Pt=r.Promise,xt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),It=xt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ot=U("wks"),Tt=r.Symbol,Ct=It?Tt:Tt&&Tt.withoutSetter||q,At=function(t){return g(Ot,t)||(xt&&g(Tt,t)?Ot[t]=Tt[t]:Ot[t]=Ct("Symbol."+t)),Ot[t]},Dt=I.f,Mt=At("toStringTag"),kt=At("species"),Lt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},_t={},Ft=At("iterator"),zt=Array.prototype,Ut=function(t,e,n){if(Lt(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Rt={};Rt[At("toStringTag")]="z";var Gt="[object z]"===String(Rt),qt=At("toStringTag"),Wt="Arguments"==l(function(){return arguments}()),Bt=Gt?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),qt))?n:Wt?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},Ht=At("iterator"),Kt=function(t,e,n,r){try{return r?e(P(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&P(o.call(t)),e}},Jt=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var a,c,u,s,f,l,p,d,h=Ut(n,r,o?2:1);if(i)a=t;else{if("function"!=typeof(c=function(t){if(null!=t)return t[Ht]||t["@@iterator"]||_t[Bt(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(d=c)&&(_t.Array===d||zt[Ft]===d)){for(u=0,s=at(t.length);s>u;u++)if((f=o?h(P(p=t[u])[0],p[1]):h(t[u]))&&f instanceof e)return f;return new e(!1)}a=c.call(t)}for(l=a.next;!(p=l.call(a)).done;)if("object"==typeof(f=Kt(a,h,p.value,o))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Vt=At("iterator"),Xt=!1;try{var Yt=0,Qt={next:function(){return{done:!!Yt++}},return:function(){Xt=!0}};Qt[Vt]=function(){return this},Array.from(Qt,(function(){throw 2}))}catch(t){}var Zt,$t,te,ee=At("species"),ne=et("document","documentElement"),re=et("navigator","userAgent")||"",oe=/(iphone|ipod|ipad).*applewebkit/i.test(re),ie=r.location,ae=r.setImmediate,ce=r.clearImmediate,ue=r.process,se=r.MessageChannel,fe=r.Dispatch,le=0,pe={},de=function(t){if(pe.hasOwnProperty(t)){var e=pe[t];delete pe[t],e()}},he=function(t){return function(){de(t)}},ye=function(t){de(t.data)},ve=function(t){r.postMessage(t+"",ie.protocol+"//"+ie.host)};ae&&ce||(ae=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return pe[++le]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Zt(le),le},ce=function(t){delete pe[t]},"process"==l(ue)?Zt=function(t){ue.nextTick(he(t))}:fe&&fe.now?Zt=function(t){fe.now(he(t))}:se&&!oe?(te=($t=new se).port2,$t.port1.onmessage=ye,Zt=Ut(te.postMessage,te,1)):!r.addEventListener||"function"!=typeof postMessage||r.importScripts||o(ve)?Zt="onreadystatechange"in j("script")?function(t){ne.appendChild(j("script")).onreadystatechange=function(){ne.removeChild(this),de(t)}}:function(t){setTimeout(he(t),0)}:(Zt=ve,r.addEventListener("message",ye,!1)));var me,ge,be,we,je,Ee,Se,Ne,Pe={set:ae,clear:ce},xe=N.f,Ie=Pe.set,Oe=r.MutationObserver||r.WebKitMutationObserver,Te=r.process,Ce=r.Promise,Ae="process"==l(Te),De=xe(r,"queueMicrotask"),Me=De&&De.value;Me||(me=function(){var t,e;for(Ae&&(t=Te.domain)&&t.exit();ge;){e=ge.fn,ge=ge.next;try{e()}catch(t){throw ge?we():be=void 0,t}}be=void 0,t&&t.enter()},Ae?we=function(){Te.nextTick(me)}:Oe&&!oe?(je=!0,Ee=document.createTextNode(""),new Oe(me).observe(Ee,{characterData:!0}),we=function(){Ee.data=je=!je}):Ce&&Ce.resolve?(Se=Ce.resolve(void 0),Ne=Se.then,we=function(){Ne.call(Se,me)}):we=function(){Ie.call(r,me)});var ke,Le,_e=Me||function(t){var e={fn:t,next:void 0};be&&(be.next=e),ge||(ge=e,we()),be=e},Fe=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Lt(e),this.reject=Lt(n)},ze={f:function(t){return new Fe(t)}},Ue=function(t,e){if(P(t),y(e)&&e.constructor===t)return e;var n=ze.f(t);return(0,n.resolve)(e),n.promise},Re=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Ge=r.process,qe=Ge&&Ge.versions,We=qe&&qe.v8;We?Le=(ke=We.split("."))[0]+ke[1]:re&&(!(ke=re.match(/Edge\/(\d+)/))||ke[1]>=74)&&(ke=re.match(/Chrome\/(\d+)/))&&(Le=ke[1]);var Be,He,Ke,Je,Ve,Xe,Ye,Qe=Le&&+Le,Ze=Pe.set,$e=At("species"),tn="Promise",en=Q.get,nn=Q.set,rn=Q.getterFor(tn),on=Pt,an=r.TypeError,cn=r.document,un=r.process,sn=et("fetch"),fn=ze.f,ln=fn,pn="process"==l(un),dn=!!(cn&&cn.createEvent&&r.dispatchEvent),hn=Et(tn,(function(){if(!(_(on)!==String(on))){if(66===Qe)return!0;if(!pn&&"function"!=typeof PromiseRejectionEvent)return!0}if(Qe>=51&&/native code/.test(on))return!1;var t=on.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[$e]=e,!(t.then((function(){}))instanceof e)})),yn=hn||!function(t,e){if(!e&&!Xt)return!1;var n=!1;try{var r={};r[Vt]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){on.all(t).catch((function(){}))})),vn=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},mn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;_e((function(){for(var o=e.value,i=1==e.state,a=0;r.length>a;){var c,u,s,f=r[a++],l=i?f.ok:f.fail,p=f.resolve,d=f.reject,h=f.domain;try{l?(i||(2===e.rejection&&jn(t,e),e.rejection=1),!0===l?c=o:(h&&h.enter(),c=l(o),h&&(h.exit(),s=!0)),c===f.promise?d(an("Promise-chain cycle")):(u=vn(c))?u.call(c,p,d):p(c)):d(o)}catch(t){h&&!s&&h.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&bn(t,e)}))}},gn=function(t,e,n){var o,i;dn?((o=cn.createEvent("Event")).promise=e,o.reason=n,o.initEvent(t,!1,!0),r.dispatchEvent(o)):o={promise:e,reason:n},(i=r["on"+t])?i(o):"unhandledrejection"===t&&function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},bn=function(t,e){Ze.call(r,(function(){var n,r=e.value;if(wn(e)&&(n=Re((function(){pn?un.emit("unhandledRejection",r,t):gn("unhandledrejection",t,r)})),e.rejection=pn||wn(e)?2:1,n.error))throw n.value}))},wn=function(t){return 1!==t.rejection&&!t.parent},jn=function(t,e){Ze.call(r,(function(){pn?un.emit("rejectionHandled",t):gn("rejectionhandled",t,e.value)}))},En=function(t,e,n,r){return function(o){t(e,n,o,r)}},Sn=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,mn(t,e,!0))},Nn=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw an("Promise can't be resolved itself");var o=vn(n);o?_e((function(){var r={done:!1};try{o.call(n,En(Nn,t,r,e),En(Sn,t,r,e))}catch(n){Sn(t,r,n,e)}})):(e.value=n,e.state=1,mn(t,e,!1))}catch(n){Sn(t,{done:!1},n,e)}}};hn&&(on=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,on,tn),Lt(t),Be.call(this);var e=en(this);try{t(En(Nn,this,e),En(Sn,this,e))}catch(t){Sn(this,e,t)}},(Be=function(t){nn(this,{type:tn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Z(t,r,e[r],n);return t}(on.prototype,{then:function(t,e){var n,r,o,i=rn(this),a=fn((n=on,void 0===(o=P(this).constructor)||null==(r=P(o)[ee])?n:Lt(r)));return a.ok="function"!=typeof t||t,a.fail="function"==typeof e&&e,a.domain=pn?un.domain:void 0,i.parent=!0,i.reactions.push(a),0!=i.state&&mn(this,i,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),He=function(){var t=new Be,e=en(t);this.promise=t,this.resolve=En(Nn,t,e),this.reject=En(Sn,t,e)},ze.f=fn=function(t){return t===on||t===Ke?new He(t):ln(t)},"function"==typeof Pt&&(Je=Pt.prototype.then,Z(Pt.prototype,"then",(function(t,e){var n=this;return new on((function(t,e){Je.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof sn&&Nt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return Ue(on,sn.apply(r,arguments))}}))),Nt({global:!0,wrap:!0,forced:hn},{Promise:on}),Xe=tn,Ye=!1,(Ve=on)&&!g(Ve=Ye?Ve:Ve.prototype,Mt)&&Dt(Ve,Mt,{configurable:!0,value:Xe}),function(t){var e=et(t),n=I.f;i&&e&&!e[kt]&&n(e,kt,{configurable:!0,get:function(){return this}})}(tn),Ke=et(tn),Nt({target:tn,stat:!0,forced:hn},{reject:function(t){var e=fn(this);return e.reject.call(void 0,t),e.promise}}),Nt({target:tn,stat:!0,forced:hn},{resolve:function(t){return Ue(this,t)}}),Nt({target:tn,stat:!0,forced:yn},{all:function(t){var e=this,n=fn(e),r=n.resolve,o=n.reject,i=Re((function(){var n=Lt(e.resolve),i=[],a=0,c=1;Jt(t,(function(t){var u=a++,s=!1;i.push(void 0),c++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=fn(e),r=n.reject,o=Re((function(){var o=Lt(e.resolve);Jt(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}}),metadata={systemName:"Absorb Sandbox API - Departments",displayName:"Absorb Sandbox API Broker",description:"An example broker pulls in the Departments list from Absorb LMS."},ondescribe=async function(){postSchema({objects:{departments:{displayName:"AbsorbDepartments",description:"Manages the Departments list",properties:{Id:{displayName:"Department Id",type:"string"},Name:{displayName:"Name",type:"string"},UseDepartmentContactDetails:{displayName:"Use Department Contact Details",type:"boolean"},CompanyName:{displayName:"Company Name",type:"string"},PhoneNumber:{displayName:"Phone Number",type:"string"},EmailAddress:{displayName:"Email Address",type:"string"},ExternalId:{displayName:"External Id",type:"string"},ParentId:{displayName:"Parent Id",type:"string"},CurrencyId:{displayName:"Currency Id",type:"string"},Authorization:{displayName:"Authorization",type:"string"}},methods:{getList:{displayName:"Get Departments",type:"list",inputs:["Name"],outputs:["Id","Name","UseDepartmentContactDetails","CompanyName","PhoneNumber","EmailAddress","ExternalId","ParentId","CurrencyId"]}}}}})},onexecute=function(t,e,n,r){switch(t){case"departments":!function(t,e,n){switch(t){case"getList":(r=new XMLHttpRequest).onreadystatechange=function(){if(4===r.readyState){if(200!==r.status)throw new Error("Failed with status "+r.status);var t=JSON.parse(r.responseText);for(var e in t)postResult({Id:t[e].Id,Name:t[e].Name,UseDepartmentContactDetails:t[e].UseDepartmentContactDetails,CompanyName:t[e].CompanyName,PhoneNumber:t[e].PhoneNumber,EmailAddress:t[e].EmailAddress,ExternalId:t[e].ExternalId,ParentId:t[e].ParentId,CurrencyId:t[e].CurrencyId})}},r.open("GET","https://k2.sandbox.myabsorb.com/api/rest/v1/departments/"),r.withCredentials=!1,r.send();break;default:throw new Error("The method "+t+" is not supported.")}var r}(e);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
