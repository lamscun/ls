(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1185],{16350:function(e,t,r){"use strict";r.d(t,{f:function(){return d}});var n=r(64759),i=r(43537),s=r(76109),l=r(24913),u=r(57070),a=r.n(u),c=r(19599),o=r(43690);let d=s.forwardRef((e,t)=>{let{icon:r,state:s,children:u,href:d,className:h,...f}=e,{pending:x}=(0,l.useFormStatus)(),m=c.E()?.state==="pending",v=!!u;return(0,n.jsx)(i.zx,{ref:t,asChild:!0,highContrast:!0,className:a().AuthMethodButton,color:"gray",disabled:x||m||"normal"!==s,size:"3",variant:"surface",...f,children:(0,n.jsxs)("a",{href:d,children:[r&&(0,n.jsx)(i.kC,{align:"center",height:"16px",justify:"center",ml:v?"-2":void 0,width:"16px",children:"loading"===s?(0,n.jsx)(i.$j,{}):(0,n.jsxs)(n.Fragment,{children:["google"===r&&(0,n.jsx)(o._8,{}),"microsoft"===r&&(0,n.jsx)(o.Dg,{}),"github"===r&&(0,n.jsx)(o.fy,{}),"apple"===r&&(0,n.jsx)(o.qw,{}),"email"===r&&(0,n.jsx)(o._X,{}),"passkey"===r&&(0,n.jsx)(o.xK,{})]})}),v&&(0,n.jsx)(i.xv,{ml:r?void 0:"-2",mr:"-2",size:{initial:"2",xs:"3"},children:u})]})})});d.displayName="AuthMethodButton"},84834:function(e,t,r){"use strict";r.r(t),r.d(t,{BotCheckTokenInput:function(){return s}});var n=r(64759),i=r(19599);let s=()=>{let e=(0,i.E)();return e?.token===void 0?null:(0,n.jsx)("input",{name:"bot_detection_token",type:"hidden",value:e.token})}},3920:function(e,t,r){"use strict";r.r(t),r.d(t,{BotCheckClient:function(){return o},CF_TEST_SITE_KEY_INTERACTIVE_PREVIEW:function(){return v}});var n=r(64759),i=r(97106),s=r(43537),l=r(76109),u=r(24913);let a="bot_detection_token_missing";var c=r(19599);let o=e=>{let{children:t,clearanceAvailable:r=!1,cleared:i=!1,siteKey:s,theme:l}=e;return null===s?(0,n.jsx)(d,{children:t}):(0,n.jsx)(h,{clearanceAvailable:r,cleared:i,siteKey:s,theme:l,children:t})},d=e=>{let{children:t}=e,r=l.useRef(null),i=l.useRef(null),s=l.useCallback(()=>{},[]),u=l.useCallback(e=>e,[]),a=l.useCallback(()=>{},[]),o=l.useMemo(()=>({formRef:r,onSubmit:s,submitter:null,state:"idle",guard:u,reset:a,onErrorRef:i}),[s,u,a]);return(0,n.jsx)(c.v.Provider,{value:o,children:t})},h=e=>{let{children:t,cleared:r=!1,clearanceAvailable:o=!1,siteKey:d,theme:h}=e,j=l.useRef(null),p=l.useRef(null),y=l.useRef(!1),g=l.useRef(null),b=l.useRef(null),[C,_]=l.useState(null),E=l.useRef(null),[k,S]=l.useState("idle"),[R,w]=l.useState(void 0),[B,T]=l.useState(r),z=l.useMemo(()=>B?e=>{S("idle"),y.current=!1,e?.code===a&&(u.flushSync(()=>T(!1)),E.current?.(""),g.current?.requestSubmit())}:e=>{S("idle"),y.current=!1,o&&e?.code!==a&&e?.code!=="bot_detection_failed"?(p.current?.remove(),u.flushSync(()=>{T(!0),w(void 0)})):p.current?.reset()},[o,B]),I=d===v,M=I||"interactive"===k;l.useEffect(()=>{M&&j.current?.querySelector("iframe")?.focus()},[M]);let F=l.useCallback(e=>async function(t){if(y.current=!0,"error-next"===k){E.current?.(x),S("error");return}if("error"===k){S("pending"),E.current?.(""),p.current?.reset();return}if("interactive-next"===k){S("interactive");return}if(!B&&!t.get("bot_detection_token")){S("pending");return}await e(t)},[B,k]),N=l.useCallback(e=>{let t=e.nativeEvent?.submitter;t&&(b.current=t,u.flushSync(()=>_(t)))},[]),A=l.useMemo(()=>({formRef:g,onSubmit:N,submitter:C,state:k,guard:F,reset:z,token:R,onErrorRef:E}),[N,C,k,F,z,R]);return(0,n.jsxs)(c.v.Provider,{value:A,children:[(0,n.jsx)("div",{...M?f:{style:{display:"contents"}},children:t}),(0,n.jsx)(s.xu,{mx:"auto",width:"min-content",...M?{}:f,children:(0,n.jsx)(s.Zb,{size:{initial:"4",xs:"5"},children:(0,n.jsxs)(s.kC,{direction:"column",gap:"5",children:[(0,n.jsx)(s.xv,{as:"p",trim:"start",children:"Before continuing, we need to be sure you are human."}),(0,n.jsx)(s.xu,{ref:j,style:{width:298,height:63,overflow:"hidden",borderRadius:"var(--radius-3)",border:"1px solid rgba(128, 128, 128, 0.3)"},children:!B&&(0,n.jsx)(i.Nc,{ref:p,style:{marginLeft:-1,marginTop:-1},options:{size:"normal",appearance:"interaction-only",theme:h,responseField:!1,retry:"never"},siteKey:I?m:d,onBeforeInteractive:()=>{y.current?S("interactive"):S("interactive-next")},onError:()=>{y.current?(E.current?.(x),S("error")):S("error-next")},onExpire:()=>{S("idle")},onSuccess:e=>{u.flushSync(()=>w(e)),y.current&&g.current?.requestSubmit(b.current??void 0)}})})]})})})]})},f={inert:!0,"aria-hidden":!0,style:{position:"fixed",top:0,left:0,pointerEvents:"none",opacity:0}},x="Can‘t verify the user is human. Please try again.",m="3x00000000000000000000FF",v="CF_TEST_SITE_KEY_INTERACTIVE_PREVIEW"},96487:function(e,t,r){"use strict";r.d(t,{s:function(){return d}});var n=r(64759),i=r(67120),s=r(43537),l=r(76109),u=r(24913),a=r(19599),c=r(75576);let o="Please enter your email",d=l.forwardRef((e,t)=>{let{autofillWebAuthn:r=!1,readOnly:l,children:d,label:h="Email",name:f,serverError:x,...m}=e,{pending:v}=(0,u.useFormStatus)(),j=a.E()?.state==="pending",p=x===o,y=["username",r?"webauthn":void 0].filter(Boolean).join(" ");return(0,n.jsx)(i.gN,{asChild:!0,name:f,serverInvalid:!!x,children:(0,n.jsxs)(s.kC,{direction:"column",gap:"2",children:[(0,n.jsx)(s.kC,{children:(0,n.jsx)(i.__,{asChild:!0,children:(0,n.jsx)(s.xv,{as:"label",size:"2",trim:"start",weight:"bold",children:h})})}),(0,n.jsx)(i.oT,{asChild:!0,children:(0,n.jsx)(s.nv.Root,{ref:t,autoCapitalize:"off",autoComplete:y,placeholder:"Your email address",readOnly:v||j||l,size:"3",type:"email",...m})}),!l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.v0,{asChild:!0,forceMatch:p,match:"valueMissing",children:(0,n.jsx)(c.B,{mb:"1",children:o})}),(0,n.jsx)(i.v0,{asChild:!0,match:"typeMismatch",children:(0,n.jsx)(c.B,{mb:"1",children:"Please provide a valid email"})}),x&&!p&&(0,n.jsx)(i.v0,{asChild:!0,children:(0,n.jsx)(c.B,{mb:"1",children:x})})]}),d]})})});d.displayName="EmailField"},75576:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var n=r(64759),i=r(43537);let s=r(76109).forwardRef((e,t)=>(0,n.jsx)(i.xv,{as:"div",color:"red",size:"2",...e,ref:t}));s.displayName="ErrorMessage"},80040:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var n=r(64759),i=r(43537);r(76109);let s=e=>{let{children:t="OR",...r}=e;return(0,n.jsxs)(i.kC,{align:"center",justify:"center",...r,children:[(0,n.jsx)(i.Z0,{size:"4"}),(0,n.jsx)(i.kC,{flexShrink:"0",children:(0,n.jsx)(i.xv,{color:"gray",mx:"3",size:"1",style:{userSelect:"none",cursor:"default"},children:t})}),(0,n.jsx)(i.Z0,{size:"4"})]})}},61830:function(e,t,r){"use strict";r.d(t,{x:function(){return l}});var n=r(77029),i=r(76109);let s="checking",l=()=>{let[e,t]=i.useState(s);return i.useEffect(()=>{"checking"===s&&(async()=>{try{s=await (0,n.x6)()?"supported":"unsupported"}catch{s="unsupported"}t(s)})()},[]),e}},57070:function(e){e.exports={AuthMethodButton:"auth-method-button_AuthMethodButton__irESX"}}}]);