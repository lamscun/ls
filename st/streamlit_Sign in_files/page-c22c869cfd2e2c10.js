(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5514,6024,1284,7870,9428],{94096:function(e,o,n){Promise.resolve().then(n.bind(n,94362)),Promise.resolve().then(n.bind(n,55128)),Promise.resolve().then(n.bind(n,3466)),Promise.resolve().then(n.bind(n,40314)),Promise.resolve().then(n.bind(n,42751)),Promise.resolve().then(n.bind(n,93301)),Promise.resolve().then(n.bind(n,49653)),Promise.resolve().then(n.bind(n,95883)),Promise.resolve().then(n.bind(n,84684)),Promise.resolve().then(n.bind(n,33462)),Promise.resolve().then(n.bind(n,58474)),Promise.resolve().then(n.bind(n,20796)),Promise.resolve().then(n.bind(n,69275)),Promise.resolve().then(n.bind(n,40886)),Promise.resolve().then(n.bind(n,36890)),Promise.resolve().then(n.bind(n,31641)),Promise.resolve().then(n.bind(n,34208)),Promise.resolve().then(n.bind(n,67158)),Promise.resolve().then(n.bind(n,15806)),Promise.resolve().then(n.bind(n,69279)),Promise.resolve().then(n.bind(n,82087)),Promise.resolve().then(n.bind(n,36744)),Promise.resolve().then(n.bind(n,95758)),Promise.resolve().then(n.bind(n,9734)),Promise.resolve().then(n.bind(n,40134)),Promise.resolve().then(n.bind(n,82685)),Promise.resolve().then(n.bind(n,65704)),Promise.resolve().then(n.t.bind(n,36568,23)),Promise.resolve().then(n.bind(n,78314)),Promise.resolve().then(n.bind(n,78795)),Promise.resolve().then(n.bind(n,84834)),Promise.resolve().then(n.bind(n,3920))},31818:function(e,o,n){"use strict";n.d(o,{m:function(){return l}});var t=n(77029);n(3206);var i=n(74898),r=(0,i.$)("5866019b490452a127db78f40180a1e9084db4e4"),s=(0,i.$)("bdb9166f8ef479b1d7c5982c001292096a9d93df");async function l(e){let{useBrowserAutofill:o=!1,onAutofillSelected:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{challengeId:i,options:l}=await r(),a=await (0,t.oz)(l,o);return n&&n(),e.set("passkey_authentication_options",JSON.stringify(a)),e.set("passkey_challenge_id",i),s(e)}},78795:function(e,o,n){"use strict";n.r(o),n.d(o,{SignInForm:function(){return v}});var t=n(64759),i=n(67120),r=n(43537),s=n(77029),l=n(76109),a=n(16350),h=n(19599),u=n(96487),d=n(24015),c=n(70518),m=n(80040),b=n(61830),f=n(31818);let v=e=>{let{children:o,initialEmail:n,authMethods:v,initialServerErrors:g,googleOAuthRoute:p,microsoftOAuthRoute:P,githubOAuthRoute:j,appleOAuthRoute:x,signInAction:C}=e,[O,w]=l.useState(!1),_=O?"disabled":"normal",k=O&&"email"!==O,[y,A]=l.useState({email:!1,password:!1,...g}),B=(0,h.E)({onError:e=>A(o=>({...o,email:e}))}),E=(0,b.x)(),{magic_codes:S,google_oauth:F,microsoft_oauth:N,github_oauth:R,apple_oauth:W,password:U,passkey:$,sso:z}=v,G="supported"===E&&$;l.useEffect(()=>{if(G)return(async()=>{if(!B?.formRef.current)return;let e=B.formRef.current,o=new FormData(e);try{let e=await (0,f.m)(o,{useBrowserAutofill:!0,onAutofillSelected:()=>w("passkey")});e&&(w(!1),A({email:e.message}),B.reset(e))}catch{}})(),()=>s.ef.cancelCeremony()},[G,B]);let I={emailForm:U||S||$||z},M=Object.values(I).some(Boolean),q={googleOAuthButton:F,microsoftOAuthButton:N,githubOAuthButton:R,appleOAuthButton:W},D=Object.values(q).some(Boolean),H=Object.values(q).filter(Boolean).length,J=H<3;return(0,t.jsxs)(i.fC,{ref:B?.formRef,action:B?.guard(async e=>{let o=await C(e);w("email"),o&&(w(!1),A({email:o.message}),B.reset(o))}),onClearServerErrors:()=>A({email:!1}),children:[o,(0,t.jsxs)(r.kC,{direction:"column",gap:"5",children:[y.email&&(0,t.jsx)(d.p,{children:y.email}),M&&(0,t.jsx)(r.kC,{direction:"column",gap:"4",children:I.emailForm&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.s,{autoFocus:!0,required:!0,autofillWebAuthn:G,defaultValue:n,name:"email",readOnly:k,onChange:()=>A(e=>({...e,email:!1}))}),(0,t.jsx)(c.M,{disabled:k,children:"Continue"})]})}),M&&D&&(0,t.jsx)(m.S,{}),D&&(0,t.jsxs)(r.rj,{gap:"3",columns:J?void 0:String(H),children:[q.googleOAuthButton&&(0,t.jsx)(a.f,{href:p,icon:"google",state:"google"===O?"loading":_,onClick:()=>w("google"),children:J&&"Continue with Google"}),q.microsoftOAuthButton&&(0,t.jsx)(a.f,{href:P,icon:"microsoft",state:"microsoft"===O?"loading":_,onClick:()=>w("microsoft"),children:J&&"Continue with Microsoft"}),q.githubOAuthButton&&(0,t.jsx)(a.f,{href:j,icon:"github",state:"github"===O?"loading":_,onClick:()=>w("github"),children:J&&"Continue with GitHub"}),q.appleOAuthButton&&(0,t.jsx)(a.f,{href:x,icon:"apple",state:"apple"===O?"loading":_,onClick:()=>w("apple"),children:J&&"Continue with Apple"})]})]})]})}},24015:function(e,o,n){"use strict";n.d(o,{p:function(){return l}});var t=n(64759),i=n(43537),r=n(76109),s=n(43690);let l=r.forwardRef((e,o)=>{let{children:n,...r}=e;return(0,t.jsxs)(i.UW.Root,{color:"red",size:"2",...r,ref:o,children:[(0,t.jsx)(i.UW.Icon,{children:(0,t.jsx)(s.$O,{})}),(0,t.jsx)(i.UW.Text,{children:n})]})});l.displayName="ErrorCallout"}},function(e){e.O(0,[8083,6568,7120,2208,5556,1185,4023,3139,1744],function(){return e(e.s=94096)}),_N_E=e.O()}]);