(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{1654:function(t){t.exports={style:{fontFamily:"'__Inter_d52593', '__Inter_Fallback_d52593'",fontStyle:"normal"},className:"__className_d52593"}},622:function(t,e,s){"use strict";var i=s(2265),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,s){var i,r={},h=null,c=null;for(i in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,i)&&!u.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===r[i]&&(r[i]=e[i]);return{$$typeof:n,type:t,key:h,ref:c,props:r,_owner:o.current}}e.Fragment=r,e.jsx=h,e.jsxs=h},7437:function(t,e,s){"use strict";t.exports=s(622)},9198:function(t,e,s){"use strict";s.d(e,{j:function(){return r}});var i=s(2996),n=s(300),r=new class extends i.l{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!n.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){let e=this.#t!==t;e&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},7987:function(t,e,s){"use strict";s.d(e,{V:function(){return n}});var i=s(300),n=function(){let t=[],e=0,s=t=>{t()},n=t=>{t()},r=n=>{e?t.push(n):(0,i.A4)(()=>{s(n)})},a=()=>{let e=t;t=[],e.length&&(0,i.A4)(()=>{n(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{n=t}}}()},436:function(t,e,s){"use strict";s.d(e,{N:function(){return r}});var i=s(2996),n=s(300),r=new class extends i.l{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!n.sk&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){let e=this.#i!==t;e&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}}},4654:function(t,e,s){"use strict";s.d(e,{S:function(){return m}});var i=s(300),n=s(7987),r=s(1640),a=class{#n;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#n=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.sk?1/0:3e5))}clearGcTimeout(){this.#n&&(clearTimeout(this.#n),this.#n=void 0)}},o=class extends a{constructor(t){super(),this.#r=!1,this.#a=t.defaultOptions,this.#o(t.options),this.#u=[],this.#h=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#c=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#c,this.scheduleGc()}#c;#l;#h;#d;#f;#u;#a;#r;get meta(){return this.options.meta}#o(t){this.options={...this.#a,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#u.length||"idle"!==this.state.fetchStatus||this.#h.remove(this)}setData(t,e){let s=(0,i.oE)(this.state.data,t,this.options);return this.#p({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#p({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#d;return this.#f?.cancel(t),e?e.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#c)}isActive(){return this.#u.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#u.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,i.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.#u.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#f?.continue()}onOnline(){let t=this.#u.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#f?.continue()}addObserver(t){this.#u.includes(t)||(this.#u.push(t),this.clearGcTimeout(),this.#h.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#u.includes(t)&&(this.#u=this.#u.filter(e=>e!==t),this.#u.length||(this.#f&&(this.#r?this.#f.cancel({revert:!0}):this.#f.cancelRetry()),this.scheduleGc()),this.#h.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#u.length}invalidate(){this.state.isInvalidated||this.#p({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#d)return this.#f?.continueRetry(),this.#d}if(t&&this.#o(t),!this.options.queryFn){let t=this.#u.find(t=>t.options.queryFn);t&&this.#o(t.options)}let s=new AbortController,i={queryKey:this.queryKey,meta:this.meta},n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#r=!0,s.signal)})};n(i);let a={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.#r=!1,this.options.persister)?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};n(a),this.options.behavior?.onFetch(a,this),this.#l=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#p({type:"fetch",meta:a.fetchOptions?.meta});let o=t=>{(0,r.DV)(t)&&t.silent||this.#p({type:"error",error:t}),(0,r.DV)(t)||(this.#h.config.onError?.(t,this),this.#h.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#f=(0,r.Mz)({fn:a.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){o(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#h.config.onSuccess?.(t,this),this.#h.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:o,onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode}),this.#d=this.#f.promise,this.#d}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:(0,r.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,r.DV)(s)&&s.revert&&this.#l)return{...this.#l,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.V.batch(()=>{this.#u.forEach(t=>{t.onQueryUpdate()}),this.#h.notify({query:this,type:"updated",action:t})})}},u=s(2996),h=class extends u.l{constructor(t={}){super(),this.config=t,this.#y=new Map}#y;build(t,e,s){let n=e.queryKey,r=e.queryHash??(0,i.Rm)(n,e),a=this.get(r);return a||(a=new o({cache:this,queryKey:n,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(n)}),this.add(a)),a}add(t){this.#y.has(t.queryHash)||(this.#y.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#y.get(t.queryHash);e&&(t.destroy(),e===t&&this.#y.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#y.get(t)}getAll(){return[...this.#y.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,i._x)(t,e)):e}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},c=class extends a{constructor(t){super(),this.mutationId=t.mutationId,this.#a=t.defaultOptions,this.#m=t.mutationCache,this.#u=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}#u;#a;#m;#f;setOptions(t){this.options={...this.#a,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#u.includes(t)||(this.#u.push(t),this.clearGcTimeout(),this.#m.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#u=this.#u.filter(e=>e!==t),this.scheduleGc(),this.#m.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#u.length||("pending"===this.state.status?this.scheduleGc():this.#m.remove(this))}continue(){return this.#f?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#p({type:"pending",variables:t}),await this.#m.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#p({type:"pending",context:e,variables:t})}let s=await (this.#f=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#f.promise);return await this.#m.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#m.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#p({type:"success",data:s}),s}catch(e){try{throw await this.#m.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#m.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#p({type:"error",error:e})}}}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,r.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#u.forEach(e=>{e.onMutationUpdate(t)}),this.#m.notify({mutation:this,type:"updated",action:t})})}},l=class extends u.l{constructor(t={}){super(),this.config=t,this.#v=[],this.#b=0}#v;#b;#g;build(t,e,s){let i=new c({mutationCache:this,mutationId:++this.#b,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#v.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#v=this.#v.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){n.V.batch(()=>{this.#v.forEach(t=>{this.remove(t)})})}getAll(){return this.#v}find(t){let e={exact:!0,...t};return this.#v.find(t=>(0,i.X7)(e,t))}findAll(t={}){return this.#v.filter(e=>(0,i.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#g=(this.#g??Promise.resolve()).then(()=>{let t=this.#v.filter(t=>t.state.isPaused);return n.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(i.ZT)),Promise.resolve()))}).then(()=>{this.#g=void 0}),this.#g}},d=s(9198),f=s(436);function p(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}function y(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}var m=class{#w;#m;#a;#C;#O;#q;#S;#F;constructor(t={}){this.#w=t.queryCache||new h,this.#m=t.mutationCache||new l,this.#a=t.defaultOptions||{},this.#C=new Map,this.#O=new Map,this.#q=0}mount(){this.#q++,1===this.#q&&(this.#S=d.j.subscribe(()=>{d.j.isFocused()&&(this.resumePausedMutations(),this.#w.onFocus())}),this.#F=f.N.subscribe(()=>{f.N.isOnline()&&(this.resumePausedMutations(),this.#w.onOnline())}))}unmount(){this.#q--,0===this.#q&&(this.#S?.(),this.#S=void 0,this.#F?.(),this.#F=void 0)}isFetching(t){return this.#w.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#m.findAll({...t,status:"pending"}).length}getQueryData(t){return this.#w.find({queryKey:t})?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return void 0!==e?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>{let s=e.data;return[t,s]})}setQueryData(t,e,s){let n=this.#w.find({queryKey:t}),r=n?.state.data,a=(0,i.SE)(e,r);if(void 0===a)return;let o=this.defaultQueryOptions({queryKey:t});return this.#w.build(this,o).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return n.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){return this.#w.find({queryKey:t})?.state}removeQueries(t){let e=this.#w;n.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#w,i={type:"active",...t};return n.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e},r=n.V.batch(()=>this.#w.findAll(t).map(t=>t.cancel(s)));return Promise.all(r).then(i.ZT).catch(i.ZT)}invalidateQueries(t={},e={}){return n.V.batch(()=>{if(this.#w.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0},r=n.V.batch(()=>this.#w.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(i.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}));return Promise.all(r).then(i.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#w.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let n=async()=>{let s;let n=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},c=t.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`))),l=async(e,s,n)=>{if(u)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:s,direction:n?"backward":"forward",meta:t.options.meta};h(r);let a=await c(r),{maxPages:o}=t.options,l=n?i.Ht:i.VX;return{pages:l(e.pages,a,o),pageParams:l(e.pageParams,s,o)}};if(r&&a.length){let t="backward"===r,e=t?y:p,i={pages:a,pageParams:o},u=e(n,i);s=await l(i,u,t)}else{s=await l({pages:[],pageParams:[]},o[0]??n.initialPageParam);let t=e??a.length;for(let e=1;e<t;e++){let t=p(n,s);s=await l(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(n,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=n}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return this.#m.resumePausedMutations()}getQueryCache(){return this.#w}getMutationCache(){return this.#m}getDefaultOptions(){return this.#a}setDefaultOptions(t){this.#a=t}setQueryDefaults(t,e){this.#C.set((0,i.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#C.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#O.set((0,i.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#O.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t?._defaulted)return t;let e={...this.#a.queries,...t?.queryKey&&this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,i.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),void 0===e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#a.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#w.clear(),this.#m.clear()}}},1640:function(t,e,s){"use strict";s.d(e,{DV:function(){return h},Kw:function(){return o},Mz:function(){return c}});var i=s(9198),n=s(436),r=s(300);function a(t){return Math.min(1e3*2**t,3e4)}function o(t){return(t??"online")!=="online"||n.N.isOnline()}var u=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof u}function c(t){let e,s,h,c=!1,l=0,d=!1,f=new Promise((t,e)=>{s=t,h=e}),p=()=>!i.j.isFocused()||"always"!==t.networkMode&&!n.N.isOnline(),y=i=>{d||(d=!0,t.onSuccess?.(i),e?.(),s(i))},m=s=>{d||(d=!0,t.onError?.(s),e?.(),h(s))},v=()=>new Promise(s=>{e=t=>{let e=d||!p();return e&&s(t),e},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),b=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(d)return;let s=t.retry??(r.sk?0:3),i=t.retryDelay??a,n="function"==typeof i?i(l,e):i,o=!0===s||"number"==typeof s&&l<s||"function"==typeof s&&s(l,e);if(c||!o){m(e);return}l++,t.onFail?.(l,e),(0,r._v)(n).then(()=>{if(p())return v()}).then(()=>{c?m(e):b()})})}};return o(t.networkMode)?b():v().then(b),{promise:f,cancel:e=>{d||(m(new u(e)),t.abort?.())},continue:()=>{let t=e?.();return t?f:Promise.resolve()},cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},2996:function(t,e,s){"use strict";s.d(e,{l:function(){return i}});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},300:function(t,e,s){"use strict";s.d(e,{A4:function(){return b},Ht:function(){return C},Kp:function(){return o},PN:function(){return a},Rm:function(){return c},SE:function(){return r},VS:function(){return f},VX:function(){return w},X7:function(){return h},Ym:function(){return l},ZT:function(){return n},_v:function(){return v},_x:function(){return u},oE:function(){return g},sk:function(){return i},to:function(){return d}});var i="undefined"==typeof window||"Deno"in window;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){let{type:s="all",exact:i,fetchStatus:n,predicate:r,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==c(a,e.options))return!1}else if(!d(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(void 0===n||n===e.state.fetchStatus)&&(!r||!!r(e))}function h(t,e){let{exact:s,status:i,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(s){if(l(e.options.mutationKey)!==l(r))return!1}else if(!d(e.options.mutationKey,r))return!1}return(!i||e.state.status===i)&&(!n||!!n(e))}function c(t,e){let s=e?.queryKeyHashFn||l;return s(t)}function l(t){return JSON.stringify(t,(t,e)=>y(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!d(t[s],e[s]))}function f(t,e){if(t&&!e||e&&!t)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function p(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function y(t){if(!m(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(m(s)&&s.hasOwnProperty("isPrototypeOf"))}function m(t){return"[object Object]"===Object.prototype.toString.call(t)}function v(t){return new Promise(e=>{setTimeout(e,t)})}function b(t){v(0).then(t)}function g(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?function t(e,s){if(e===s)return e;let i=p(e)&&p(s);if(i||y(e)&&y(s)){let n=i?e.length:Object.keys(e).length,r=i?s:Object.keys(s),a=r.length,o=i?[]:{},u=0;for(let n=0;n<a;n++){let a=i?n:r[n];o[a]=t(e[a],s[a]),o[a]===e[a]&&u++}return n===a&&u===n?e:o}return s}(t,e):e}function w(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function C(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}},8038:function(t,e,s){"use strict";s.d(e,{NL:function(){return r},aH:function(){return a}});var i=s(2265),n=i.createContext(void 0),r=t=>{let e=i.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},a=({client:t,children:e})=>(i.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),i.createElement(n.Provider,{value:t},e))}}]);