(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48],{6421:function(n,e,t){Promise.resolve().then(t.bind(t,6660))},2894:function(n,e,t){"use strict";t.d(e,{S:function(){return o}});var r=t(230),u=t(787);function i(){let n=(0,r._)(["\n  width: 60%;\n  height: 3rem;\n  border: 0;\n  border-radius: 0.8rem;\n  background-color: #9fd5b9;\n  cursor: pointer;\n\n  &:active {\n    transform-origin: center;\n    transform: scale(1.01);\n  }\n"]);return i=function(){return n},n}let o=u.Z.button(i())},6132:function(n,e,t){"use strict";t.d(e,{M:function(){return g}});var r=t(7437),u=t(8397),i=t(2475),o=t(4033),s=t(6704),c=t(105);s.kL.register(s.qi,s.u,s.De);let l=n=>{let{numOfCorrectAnswer:e,numOfWrongAnswer:t}=n;return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"정 오답에 대한 비율 차트: "}),(0,r.jsx)(c.by,{data:{labels:["정답","오답"],datasets:[{data:[e,t],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]}})]})};var a=t(230),d=t(787);function f(){let n=(0,a._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  font-size: 1.4rem;\n  width: 60%;\n  margin-bottom: 1.8rem;\n\n  & > p:first-of-type {\n    font-size: 2rem;\n    margin-bottom: 0.6rem;\n  }\n"]);return f=function(){return n},n}let m=d.Z.div(f()),h=n=>{let e=n/1e3,t=Math.floor(e/60)+"",r=Math.round(e)%60+"";return 0!=+t?"".concat(t,"분 ").concat(r,"초"):"".concat(r,"초")},g=n=>{let{id:e}=n,t=(0,u.O)(),s=(0,i.Wg)(e);if(!t)return;s||(0,o.notFound)();let{durationMs:c,numOfCorrectAnswer:a,numOfWrongAnswer:d}=s;return(0,r.jsxs)(m,{children:[(0,r.jsx)("p",{children:"퀴즈 결과"}),(0,r.jsxs)("p",{children:["퀴즈를 맞칠 때까지 소요된 시간: ",h(c)]}),(0,r.jsxs)("p",{children:["정답개수: ",a]}),(0,r.jsxs)("p",{children:["오답 수: ",d]}),(0,r.jsx)(l,{numOfCorrectAnswer:a,numOfWrongAnswer:d})]})}},3766:function(n,e,t){"use strict";t.d(e,{X:function(){return u}});var r=t(4033);let u=()=>{let n=(0,r.useSearchParams)(),e=n.get("id");return e}},8397:function(n,e,t){"use strict";t.d(e,{O:function(){return u}});var r=t(2265);let u=()=>{let[n,e]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{e(!0)},[]),n}},5215:function(n,e,t){"use strict";t.d(e,{P:function(){return o}});var r=t(230),u=t(787);function i(){let n=(0,r._)(["\n  max-width: 76.8rem;\n  min-width: 48rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin: 0 auto;\n  margin-top: 2rem;\n"]);return i=function(){return n},n}let o=u.Z.main(i())},6660:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(7437),u=t(2894),i=t(6132),o=t(3766),s=t(4033),c=t(5215);function l(){var n;let e=null!==(n=(0,o.X)())&&void 0!==n?n:"",t=(0,s.useRouter)();return(0,r.jsxs)(c.P,{children:[(0,r.jsx)(i.M,{id:+e}),(0,r.jsx)(u.S,{onClick:()=>{t.replace("/")},children:"처음으로 돌아가기"})]})}},6601:function(n,e,t){"use strict";t.d(e,{j:function(){return u},p:function(){return r}});let r=new Set,u=()=>{r.forEach(n=>{n()})}},2475:function(n,e,t){"use strict";t.d(e,{Ky:function(){return d},Wg:function(){return h},fv:function(){return f},py:function(){return m}});var r=t(2265),u=t(5995);let i=(0,r.createContext)(null);var o=t(4810),s=t(3979),c=t(6601);let l=(n=>{let e={review:{}};return(0,s.M)()((0,o.tJ)(n=>(c.p.add(()=>n(e)),{...e,addReview:e=>n(n=>{let{review:t}=n;return{review:{[e.startTime]:e,...t}}})}),{name:"review-storage",storage:(0,o.FL)(()=>sessionStorage)}))})(),a=(n,e)=>{var t;let o=null!==(t=(0,r.useContext)(i))&&void 0!==t?t:l;return(0,u.s)(o,n,e)},d=()=>a(n=>{let{addReview:e}=n;return e}),f=()=>a(n=>{let{review:e}=n;return Object.keys(e)}),m=n=>a(e=>{let{review:t}=e;return t[n]?t[n].reviewNotes:null}),h=n=>a(e=>{let{review:t}=e,r=t[n];return r?{durationMs:r.endTime-r.startTime,numOfCorrectAnswer:r.numOfQuiz-r.reviewNotes.length,numOfWrongAnswer:r.reviewNotes.length}:null})}},function(n){n.O(0,[674,540,38,531,971,472,744],function(){return n(n.s=6421)}),_N_E=n.O()}]);