(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48],{6421:function(n,e,t){Promise.resolve().then(t.bind(t,6660))},2894:function(n,e,t){"use strict";t.d(e,{S:function(){return o}});var r=t(230),i=t(787);function u(){let n=(0,r._)(["\n  width: 60%;\n  height: 3rem;\n  border: 0;\n  border-radius: 0.8rem;\n  background-color: #9fd5b9;\n  cursor: pointer;\n\n  &:active {\n    transform-origin: center;\n    transform: scale(1.01);\n  }\n"]);return u=function(){return n},n}let o=i.Z.button(u())},6132:function(n,e,t){"use strict";t.d(e,{M:function(){return h}});var r=t(7437),i=t(8397),u=t(2475),o=t(4033),c=t(6704),s=t(105);c.kL.register(c.qi,c.u,c.De);let l=n=>{let{numOfCorrectAnswer:e,numOfWrongAnswer:t}=n,i={labels:["정답 (".concat((e/(e+t)*100).toFixed(1),"%)"),"오답 (".concat((t/(e+t)*100).toFixed(1),"%)")],datasets:[{data:[e,t],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"정 오답에 대한 비율 차트: "}),(0,r.jsx)(s.by,{data:i})]})};var a=t(230),d=t(787);function f(){let n=(0,a._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  font-size: 1.4rem;\n  width: 60%;\n  margin-bottom: 1.8rem;\n\n  & > p:first-of-type {\n    font-size: 2rem;\n    margin-bottom: 0.6rem;\n  }\n"]);return f=function(){return n},n}let m=d.Z.div(f()),g=n=>{let e=n/1e3,t=Math.floor(e/60)+"",r=Math.round(e)%60+"";return 0!=+t?"".concat(t,"분 ").concat(r,"초"):"".concat(r,"초")},h=n=>{let{id:e}=n,t=(0,i.O)(),c=(0,u.Wg)(e);if(!t)return;c||(0,o.notFound)();let{durationMs:s,numOfCorrectAnswer:a,numOfWrongAnswer:d}=c;return(0,r.jsxs)(m,{children:[(0,r.jsx)("p",{children:"퀴즈 결과"}),(0,r.jsxs)("p",{children:["퀴즈를 마칠 때까지 소요된 시간: ",g(s)]}),(0,r.jsxs)("p",{children:["정답 개수: ",a]}),(0,r.jsxs)("p",{children:["오답 수: ",d]}),(0,r.jsx)(l,{numOfCorrectAnswer:a,numOfWrongAnswer:d})]})}},3766:function(n,e,t){"use strict";t.d(e,{X:function(){return i}});var r=t(4033);let i=()=>{let n=(0,r.useSearchParams)(),e=n.get("id");return e}},8397:function(n,e,t){"use strict";t.d(e,{O:function(){return i}});var r=t(2265);let i=()=>{let[n,e]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{e(!0)},[]),n}},5215:function(n,e,t){"use strict";t.d(e,{P:function(){return o}});var r=t(230),i=t(787);function u(){let n=(0,r._)(["\n  max-width: 76.8rem;\n  min-width: 48rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 auto;\n  margin-top: 2rem;\n"]);return u=function(){return n},n}let o=i.Z.main(u())},6660:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(7437),i=t(2894),u=t(6132),o=t(3766),c=t(4033),s=t(5215);function l(){var n;let e=null!==(n=(0,o.X)())&&void 0!==n?n:"",t=(0,c.useRouter)();return(0,r.jsxs)(s.P,{children:[(0,r.jsx)(u.M,{id:+e}),(0,r.jsx)(i.S,{onClick:()=>{t.replace("/")},children:"처음으로 돌아가기"})]})}},6601:function(n,e,t){"use strict";t.d(e,{p:function(){return r}});let r=new Set},2475:function(n,e,t){"use strict";t.d(e,{Ky:function(){return d},Wg:function(){return g},fv:function(){return f},py:function(){return m}});var r=t(2265),i=t(5995);let u=(0,r.createContext)(null);var o=t(4810),c=t(3979),s=t(6601);let l=(n=>{let e={review:{}};return(0,c.M)()((0,o.tJ)(n=>(s.p.add(()=>n(e)),{...e,addReview:e=>n(n=>{let{review:t}=n;return{review:{[e.startTime]:e,...t}}})}),{name:"review-storage",storage:(0,o.FL)(()=>sessionStorage)}))})(),a=(n,e)=>{var t;let o=null!==(t=(0,r.useContext)(u))&&void 0!==t?t:l;return(0,i.s)(o,n,e)},d=()=>a(n=>{let{addReview:e}=n;return e}),f=()=>a(n=>{let{review:e}=n;return Object.keys(e)}),m=n=>a(e=>{let{review:t}=e;return t[n]?t[n].reviewNotes:null}),g=n=>a(e=>{let{review:t}=e,r=t[n];return r?{durationMs:r.endTime-r.startTime,numOfCorrectAnswer:r.numOfQuiz-r.reviewNotes.length,numOfWrongAnswer:r.reviewNotes.length}:null})}},function(n){n.O(0,[674,540,38,531,971,472,744],function(){return n(n.s=6421)}),_N_E=n.O()}]);