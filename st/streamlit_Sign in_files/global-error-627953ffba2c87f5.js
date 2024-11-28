(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6470],{84948:function(t,e,o){Promise.resolve().then(o.bind(o,22206))},95781:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.withDefaultBranding=e.DEFAULT_BRANDING=void 0;let n=o(13601).__importDefault(o(46880));e.DEFAULT_BRANDING={theme:"System",radius:"Medium",logoIconFit:"Contain",lightButtonBackgroundColor:"#000000",lightButtonForegroundColor:"#FFFFFF",lightLinkColor:"#5753C6",lightPageBackgroundColor:"#FCFCFC",darkButtonBackgroundColor:"#FFFFFF",darkButtonForegroundColor:"#000000",darkLinkColor:"#B1A9FF",darkPageBackgroundColor:"#000000",authkitLogoStyle:"Icon",authkitSignInLayout:"OneColumn",authkitSignInContentPanelAlignment:"Right",authkitSignInCustomCss:"",authkitSignInCustomHtml:"",authkitSignInHeadingText:"Sign in",authkitSignUpLinkText:"Sign up",authkitSignInContentPanelHiddenOnMobile:!1,authkitSignInTermsOfServiceUrl:"",authkitSignInPrivacyPolicyUrl:"",authkitSignUpLayout:"OneColumn",authkitSignUpContentPanelAlignment:"Right",authkitSignUpCustomCss:"",authkitSignUpCustomHtml:"",authkitSignUpHeadingText:"Sign up",authkitSignUpActionLinkText:"Sign in",authkitSignUpContentPanelHiddenOnMobile:!1,authkitSignUpShowNameFields:!0,authkitSignUpTermsOfServiceUrl:"",authkitSignUpPrivacyPolicyUrl:""},e.withDefaultBranding=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return t??(t={}),{...f(t),theme:g(t.theme)?t.theme:e.DEFAULT_BRANDING.theme,lightLinkColor:t.lightLinkColor||e.DEFAULT_BRANDING.lightLinkColor,darkLinkColor:t.darkLinkColor||e.DEFAULT_BRANDING.darkLinkColor,radius:d(t.radius)?t.radius:e.DEFAULT_BRANDING.radius,logoIconFit:h(t.logoIconFit)?t.logoIconFit:e.DEFAULT_BRANDING.logoIconFit,lightButtonBackgroundColor:t.lightButtonBackgroundColor||e.DEFAULT_BRANDING.lightButtonBackgroundColor,lightButtonForegroundColor:t.lightButtonForegroundColor||e.DEFAULT_BRANDING.lightButtonForegroundColor,lightPageBackgroundColor:t.lightPageBackgroundColor||e.DEFAULT_BRANDING.lightPageBackgroundColor,darkButtonBackgroundColor:t.darkButtonBackgroundColor||e.DEFAULT_BRANDING.darkButtonBackgroundColor,darkButtonForegroundColor:t.darkButtonForegroundColor||e.DEFAULT_BRANDING.darkButtonForegroundColor,darkPageBackgroundColor:t.darkPageBackgroundColor||e.DEFAULT_BRANDING.darkPageBackgroundColor,authkitLogoStyle:s(t.authkitLogoStyle)?t.authkitLogoStyle:e.DEFAULT_BRANDING.authkitLogoStyle,lightLogoPath:S(o,t.lightLogoPath),lightLogoIconPath:S(o,t.lightLogoIconPath),lightFaviconPath:S(o,t.lightFaviconPath),darkLogoPath:S(o,t.darkLogoPath),darkLogoIconPath:S(o,t.darkLogoIconPath),darkFaviconPath:S(o,t.darkFaviconPath),authkitSignInLayout:m(t.authkitSignInLayout)?t.authkitSignInLayout:e.DEFAULT_BRANDING.authkitSignInLayout,authkitSignInContentPanelAlignment:k(t.authkitSignInContentPanelAlignment)?t.authkitSignInContentPanelAlignment:e.DEFAULT_BRANDING.authkitSignInContentPanelAlignment,authkitSignInCustomCss:t.authkitSignInCustomCss??e.DEFAULT_BRANDING.authkitSignInCustomCss,authkitSignInCustomHtml:t.authkitSignInCustomHtml??e.DEFAULT_BRANDING.authkitSignInCustomHtml,authkitSignInHeadingText:t.authkitSignInHeadingText??e.DEFAULT_BRANDING.authkitSignInHeadingText,authkitSignUpLinkText:t.authkitSignUpLinkText||e.DEFAULT_BRANDING.authkitSignUpLinkText,authkitSignInContentPanelHiddenOnMobile:"boolean"==typeof t.authkitSignInContentPanelHiddenOnMobile?t.authkitSignInContentPanelHiddenOnMobile:e.DEFAULT_BRANDING.authkitSignInContentPanelHiddenOnMobile,authkitSignInTermsOfServiceUrl:t.authkitSignInTermsOfServiceUrl??e.DEFAULT_BRANDING.authkitSignInTermsOfServiceUrl,authkitSignInPrivacyPolicyUrl:t.authkitSignInPrivacyPolicyUrl??e.DEFAULT_BRANDING.authkitSignInPrivacyPolicyUrl,authkitSignUpLayout:m(t.authkitSignUpLayout)?t.authkitSignUpLayout:e.DEFAULT_BRANDING.authkitSignUpLayout,authkitSignUpContentPanelAlignment:k(t.authkitSignUpContentPanelAlignment)?t.authkitSignUpContentPanelAlignment:e.DEFAULT_BRANDING.authkitSignUpContentPanelAlignment,authkitSignUpCustomCss:t.authkitSignUpCustomCss??e.DEFAULT_BRANDING.authkitSignUpCustomCss,authkitSignUpCustomHtml:t.authkitSignUpCustomHtml??e.DEFAULT_BRANDING.authkitSignUpCustomHtml,authkitSignUpHeadingText:t.authkitSignUpHeadingText??e.DEFAULT_BRANDING.authkitSignUpHeadingText,authkitSignUpActionLinkText:t.authkitSignUpActionLinkText||e.DEFAULT_BRANDING.authkitSignUpActionLinkText,authkitSignUpContentPanelHiddenOnMobile:"boolean"==typeof t.authkitSignUpContentPanelHiddenOnMobile?t.authkitSignUpContentPanelHiddenOnMobile:e.DEFAULT_BRANDING.authkitSignUpContentPanelHiddenOnMobile,authkitSignUpShowNameFields:"boolean"==typeof t.authkitSignUpShowNameFields?t.authkitSignUpShowNameFields:e.DEFAULT_BRANDING.authkitSignUpShowNameFields,authkitSignUpTermsOfServiceUrl:t.authkitSignUpTermsOfServiceUrl??e.DEFAULT_BRANDING.authkitSignUpTermsOfServiceUrl,authkitSignUpPrivacyPolicyUrl:t.authkitSignUpPrivacyPolicyUrl??e.DEFAULT_BRANDING.authkitSignUpPrivacyPolicyUrl}};let a=["Dark","Light","System"],r=["Icon","Logo"],i=["Contain","Cover"],l=["None","Small","Medium","Large","Full"],u=["OneColumn","TwoColumn"],c=["Left","Right"],d=t=>p(l,String(t)),g=t=>p(a,String(t)),s=t=>p(r,String(t)),h=t=>p(i,String(t)),m=t=>p(u,String(t)),k=t=>p(c,String(t)),p=(t,e)=>t.includes(e),f=t=>{let e={};for(let[o,n]of Object.entries(t))null!==n&&(e[o]=n);return e};function S(t,e){return e?.startsWith("http")||e?.startsWith("blob")?e:t&&e?(0,n.default)(t,e):void 0}},89768:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.generateBrandColors=void 0;let n=o(13601),a=n.__importStar(o(44037)),r=n.__importDefault(o(17141)),i=["gray","mauve","slate","sage","olive","sand"],l=[...i,"tomato","red","ruby","crimson","pink","plum","purple","violet","iris","indigo","blue","cyan","teal","jade","green","grass","brown","orange","sky","mint","lime","yellow","amber"],u=Object.fromEntries(l.map(t=>[t,Object.values(a[t]).map(t=>new r.default(t).to("oklch"))])),c=Object.fromEntries(l.map(t=>[t,Object.values(a[`${t}Dark`]).map(t=>new r.default(t).to("oklch"))])),d=Object.fromEntries(i.map(t=>[t,Object.values(a[t]).map(t=>new r.default(t).to("oklch"))])),g=Object.fromEntries(i.map(t=>[t,Object.values(a[`${t}Dark`]).map(t=>new r.default(t).to("oklch"))]));function s(t,e){let[o,n,a]=t.coords,i=o>.4&&!isNaN(a)?.93*n+0:n,l=new r.default("oklch",[o>.4?o-.03/(o+.1):o+.03/(o+.1),i,a]),u=l,c=1/0;return e.forEach(t=>{for(let e of t){let t=l.deltaEOK(e);t<c&&(c=t,u=e)}}),l.coords[1]=u.coords[1],l.coords[2]=u.coords[2],l}e.generateBrandColors=t=>{var e;let{appearance:o,...n}=t,a="light"===o?u:c,i=new r.default(n.linkForeground).to("oklch"),l=new r.default(n.pageBackground).to("oklch"),p=new r.default(n.buttonBackground).to("oklch"),f=new r.default(n.buttonForeground).to("oklch"),y=[i,l,p,f].sort((t,e)=>{let o=isNaN(t.coords[2])?0:t.coords[1];return(isNaN(e.coords[2])?0:e.coords[1])-o}),b=y.indexOf(p),A=y.indexOf(f)<b?f:p,$=m(A,a),U=m(y[0],a),N=y.filter(t=>t.coords[0]>1e-4&&t.coords[0]<.999&&t.coords[1]<.08).reverse()[0]?.clone();N=N??new r.default("oklch",[.5,0,0]);let I="light"===o?m(N,"light"===o?d:g):function(t){let e=isNaN(t.coords[2])||t.coords[1]?g.gray:g.slate,o=t.coords[0]/e[0].coords[0],n=t.coords[1]/e[0].coords[1];return e.map((a,r)=>{let i=a.clone(),l=a.coords[0],u=a.coords[1],c=e[1].coords[0];return i.coords[0]=Math.max(Math.min(2*l,r/11*l+l*o*((11-r)/11)),r>0?Math.max(c,.75*l):0),i.coords[1]=Math.min(.028,r/11*u+u*n*((11-r)/11)),i.coords[2]=t.coords[2],i})}(l),B="light"===o?new r.default("#FFFFFF").to("oklch"):I[0],F=B.to("srgb").toString({format:"hex"});k($[7],I[7])&&($=I.map(t=>t.clone()));let[L,v]=(e=$,100*A.deltaEOK(l)<20?[e[11].clone(),function(t){let[e,o,n]=t.coords;return e>.6?new r.default("oklch",[.2,.05*o,n]):new r.default("oklch",[1,0,0])}(e[11])]:[A,f]);$[8]=L,$[9]=s(L,[$,I]);let D=new r.default(i);D.alpha=.4,k(D,I[8])&&((D=I[8].clone()).alpha=.6);let x=s(p,[$,I]),P=h(p,[$,I]),_=$.map(t=>t.to("srgb").toString({format:"hex"})),T=_.map(t=>S(t,F)),j=_.map(t=>C(t,F)),w=v.to("srgb").toString({format:"hex"}),E=I.map(t=>t.to("srgb").toString({format:"hex"})),O=E.map(t=>S(t,F)),R=E.map(t=>C(t,F)),G=U.map(t=>t.to("srgb").toString({format:"hex"})),M=G.map(t=>S(t,F)),H=G.map(t=>C(t,F));return{accentScale:_,accentScaleAlpha:T,accentScaleAlphaWideGamut:j,accentContrast:w,grayScale:E,grayScaleAlpha:O,grayScaleAlphaWideGamut:R,graySurface:"light"===o?"#ffffffcc":"rgba(0, 0, 0, 0.05)",focusScale:G,focusScaleAlpha:M,focusScaleAlphaWideGamut:H,page:{backgroundColor:n.pageBackground},button:{backgroundColor:n.buttonBackground,foregroundColor:n.buttonForeground,hoverColor:x.to("srgb").toString({format:"hex"}),pressedColor:P.to("srgb").toString({format:"hex"}),borderColor:function(t,e,o){let n;let a=100*t.deltaEOK(e);if(a<3.5&&(n=o[2]),a<3&&(n=o[3]),a<2.5&&(n=o[4]),a<2&&(n=o[5]),a<1&&(n=o[6]),!n)return"transparent";let i=new r.default(n).alpha,l=r.default.mix(t,new r.default(n),i);return new r.default(l).to("srgb").toString({format:"hex"})}(p,B,O)},link:{foregroundColor:n.linkForeground,underlineColor:D.to("srgb").toString({format:"hex"})}}};let h=(t,e)=>s(s(t,e),e);function m(t,e){let o,n=t,a=1/0;if(Object.values(e).forEach(e=>{for(let r of e){let i=t.deltaEOK(r);i<a&&(a=i,n=r,o=e)}}),!o)throw Error("Could not find base scale");let r=Math.min(1.5,t.coords[1]/n.coords[1]);return o.map(e=>{let o=e.clone();return o.coords[1]=e.coords[1]*r,o.coords[2]=t.coords[2],o})}let k=(t,e)=>isNaN(t.coords[2])&&!isNaN(e.coords[2])||t.coords[1]<e.coords[1];function p(t,e,o,n,a){var r;let[i,l,u]=t.map(t=>Math.round(t*o)),[c,d,g]=e.map(t=>Math.round(t*o));if(void 0===i||void 0===l||void 0===u||void 0===c||void 0===d||void 0===g)throw Error("Color is undefined");let s=0;i>c?s=o:l>d?s=o:u>g&&(s=o);let h=(i-c)/(s-c),m=(l-d)/(s-d),k=(u-g)/(s-g),p=[h,m,k].every(t=>t===h);if(!a&&p){let t=s/o;return[t,t,t,h]}let S=t=>isNaN(t)?0:Math.min(o,Math.max(0,t)),C=(isNaN(r=Math.ceil((a??Math.max(h,m,k))*n))?0:Math.min(n,Math.max(0,r)))/n,y=S(-((c*(1-C)-i)/C*1)),b=S(-((d*(1-C)-l)/C*1)),A=S(-((g*(1-C)-u)/C*1));y=Math.ceil(y),b=Math.ceil(b),A=Math.ceil(A);let $=f(y,C,c),U=f(b,C,d),N=f(A,C,g);return 0===s&&(i<=c&&i!==$&&(y=i>$?y+1:y-1),l<=d&&l!==U&&(b=l>U?b+1:b-1),u<=g&&u!==N&&(A=u>N?A+1:A-1)),s===o&&(i>=c&&i!==$&&(y=i>$?y+1:y-1),l>=d&&l!==U&&(b=l>U?b+1:b-1),u>=g&&u!==N&&(A=u>N?A+1:A-1)),[y/=o,b/=o,A/=o,C]}function f(t,e,o){let n=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return n?Math.round(o*(1-e))+Math.round(t*e):o*(1-e)+t*e}function S(t,e,o){let[n,a,i,l]=p(new r.default(t).to("srgb").coords,new r.default(e).to("srgb").coords,255,255,o);return function(t){if(!t.startsWith("#"))return t;if(4===t.length){let e=t.charAt(0),o=t.charAt(1),n=t.charAt(2),a=t.charAt(3);return e+o+o+n+n+a+a}if(5===t.length){let e=t.charAt(0),o=t.charAt(1),n=t.charAt(2),a=t.charAt(3),r=t.charAt(4);return e+o+o+n+n+a+a+r+r}return t}(new r.default("srgb",[n,a,i],l).toString({format:"hex"}))}function C(t,e,o){let[n,a,i,l]=p(new r.default(t).to("p3").coords,new r.default(e).to("p3").coords,255,1e3,o);return new r.default("p3",[n,a,i],l).toString({precision:4}).replace("color(p3 ","color(display-p3 ")}},79057:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getBaseBrandedStyles=e.getBrandedStyles=void 0,e.getBrandedStyles=t=>{let{selector:o,lightBrandColors:n,darkBrandColors:a}=t,r=o?`${o}:not(.dark, .dark-theme), ${o}:is(.light, .light-theme)`:":root, .light, .light-theme",i=o?`:is(.dark, .dark-theme) ${o}:not(.light, .light-theme), ${o}:is(.dark, .dark-theme)`:".dark, .dark-theme",l=o||".radix-themes",u=`${l}:not(.dark, .dark-theme), ${l}:is(.light, .light-theme)`,c=`${l}:is(.dark, .dark-theme), :is(.dark, .dark-theme) ${l}:not(.light, .light-theme)`;return`
${(0,e.getBaseBrandedStyles)(l)}

${r} {
  --branded-link-color: ${n.link.foregroundColor};
  --branded-link-text-decoration-color: ${n.link.underlineColor};
  --branded-button-color: ${n.button.foregroundColor};
  --branded-button-background: ${n.button.backgroundColor};
  --branded-button-hover-background: ${n.button.hoverColor};
  --branded-button-active-background: ${n.button.pressedColor};
  --branded-button-box-shadow-color: ${n.button.borderColor};
  --branded-page-background: ${n.page.backgroundColor};
}

${i} {
  --branded-link-color: ${a.link.foregroundColor};
  --branded-link-text-decoration-color: ${a.link.underlineColor};
  --branded-button-color: ${a.button.foregroundColor};
  --branded-button-background: ${a.button.backgroundColor};
  --branded-button-hover-background: ${a.button.hoverColor};
  --branded-button-active-background: ${a.button.pressedColor};
  --branded-button-box-shadow-color: ${a.button.borderColor};
  --branded-page-background: ${a.page.backgroundColor};
}

${u} {
  ${n.accentScale.map((t,e)=>`--accent-${e+1}: ${t};`).join("\n  ")}

  ${n.accentScaleAlpha.map((t,e)=>`--accent-a${e+1}: ${t};`).join("\n  ")}

  ${n.grayScale.map((t,e)=>`--gray-${e+1}: ${t};`).join("\n  ")}

  ${n.grayScaleAlpha.map((t,e)=>`--gray-a${e+1}: ${t};`).join("\n  ")}

  --accent-track: var(--accent-9);
  --accent-indicator: var(--accent-9);
  --accent-contrast: ${n.accentContrast};
  --gray-surface: ${n.graySurface};
}

${u}, :where(${u}) [data-accent-color] {
  ${n.focusScale.map((t,e)=>`--focus-${e+1}: ${t};`).join("\n  ")}

  ${n.focusScaleAlpha.map((t,e)=>`--focus-a${e+1}: ${t};`).join("\n  ")}
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    ${l}:not(.dark, .dark-theme),
    ${l}:is(.light, .light-theme) {
      ${n.accentScaleAlphaWideGamut.map((t,e)=>`--accent-a${e+1}: ${t};`).join("\n      ")}

      ${n.grayScaleAlphaWideGamut.map((t,e)=>`--gray-a${e+1}: ${t};`).join("\n      ")}
    }

    ${u}, :where(${u}) [data-accent-color] {
      ${n.focusScaleAlphaWideGamut.map((t,e)=>`--focus-a${e+1}: ${t};`).join("\n      ")}
    }
  }
}

:is(.dark, .dark-theme) ${l}:not(.light, .light-theme) {
  ${a.accentScale.map((t,e)=>`--accent-${e+1}: ${t};`).join("\n  ")}

  ${a.accentScaleAlpha.map((t,e)=>`--accent-a${e+1}: ${t};`).join("\n  ")}

  ${a.grayScale.map((t,e)=>`--gray-${e+1}: ${t};`).join("\n  ")}

  ${a.grayScaleAlpha.map((t,e)=>`--gray-a${e+1}: ${t};`).join("\n  ")}

  --accent-track: var(--accent-9);
  --accent-indicator: var(--accent-9);
  --accent-contrast: ${a.accentContrast};
  --gray-surface: ${a.graySurface};
}

${c}, :where(${c}) [data-accent-color] {
  ${a.focusScale.map((t,e)=>`--focus-${e+1}: ${t};`).join("\n  ")}

  ${a.focusScaleAlpha.map((t,e)=>`--focus-a${e+1}: ${t};`).join("\n  ")}
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    :is(.dark, .dark-theme) ${l}:not(.light, .light-theme) {
      ${a.accentScaleAlphaWideGamut.map((t,e)=>`--accent-a${e+1}: ${t};`).join("\n      ")}

      ${a.grayScaleAlphaWideGamut.map((t,e)=>`--gray-a${e+1}: ${t};`).join("\n      ")}
    }

    ${c}, :where(${c}) [data-accent-color] {
      ${a.focusScaleAlphaWideGamut.map((t,e)=>`--focus-a${e+1}: ${t};`).join("\n      ")}
    }
  }
}
`},e.getBaseBrandedStyles=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radix-themes";return`
${t} {
  --cursor-button: pointer;
  --cursor-disabled: default;
  --cursor-link: pointer;
  --cursor-menu-item: pointer;
  --cursor-slider-thumb: pointer;
  --cursor-slider-thumb-active: pointer;
  --cursor-switch: pointer;

  --system-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  --default-font-family: Inter, var(--system-font-family);
  --heading-font-family: InterDisplay, var(--system-font-family);
  --font-weight-bold: 600;

  --code-padding-top: 0em;
  --code-padding-bottom: 0.075em;
  --code-font-family: 'IBM Plex Mono', 'Menlo', monospace, 'Apple Color Emoji',
    'Segoe UI Emoji';

  --marker-font-size-adjust: 0.97222;
  --marker-font-weight: 500;

  font-feature-settings: 'liga' 1, 'calt' 1;
}

@supports (font-variation-settings: normal) {
  ${t} {
    --default-font-family: InterVariable, var(--system-font-family);
    --heading-font-family: InterVariable, var(--system-font-family);
  }
}
`}},334:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getThemeRadius=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.toLowerCase();if(n(e))return e};let o=["none","small","medium","large","full"],n=t=>o.includes(t)},91119:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let n=o(13601);n.__exportStar(o(95781),e),n.__exportStar(o(89768),e),n.__exportStar(o(79057),e),n.__exportStar(o(334),e)},22206:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return u},metadata:function(){return c}});var n=o(64759),a=o(43537),r=o(91119),i=o(71897),l=o(69388);function u(){return(0,n.jsx)("html",{suppressHydrationWarning:!0,lang:"en",children:(0,n.jsxs)("body",{children:[(0,n.jsx)("link",{href:"https://rsms.me/",rel:"preconnect"}),(0,n.jsx)("link",{href:"https://rsms.me/inter/inter.css",rel:"stylesheet"}),(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:`
              ${(0,r.getBaseBrandedStyles)()}
              body {
                margin: 0;
              }
            `}}),(0,n.jsx)(a.Q2,{asChild:!0,accentColor:"gray",grayColor:"gray",children:(0,n.jsx)(l.X,{children:(0,n.jsxs)(i.J,{children:[(0,n.jsx)(a.X6,{align:"center",size:"6",children:"Server Error"}),(0,n.jsx)(a.Zb,{size:{initial:"4",xs:"5"},children:(0,n.jsx)(a.xv,{align:"center",as:"p",size:"3",children:"Please reload the page or try again later."})})]})})})]})})}let c={title:"Error"}},71897:function(t,e,o){"use strict";o.d(e,{J:function(){return r}});var n=o(64759),a=o(43537);let r=o(76109).forwardRef((t,e)=>{let{style:o,...r}=t;return(0,n.jsx)(a.kC,{ref:e,direction:"column",gap:"5",pb:"9",pt:"4",style:{gridRowStart:2,...o},...r})});r.displayName="PageContent"},69388:function(t,e,o){"use strict";o.d(e,{X:function(){return i}});var n=o(64759),a=o(43537),r=o(76109);let i=r.forwardRef((t,e)=>{let{children:o,layout:r="OneColumn",secondaryPanelAlignment:i="Right",secondaryPanelCss:u,secondaryPanelHtml:c,hideSecondaryPanelOnSmallScreens:d,...g}=t,s="320px",h="100dvh";return(c||(r="OneColumn"),"OneColumn"===r)?(0,n.jsx)(l,{ref:e,minHeight:h,minWidth:s,p:"4",...g,children:o}):(0,n.jsxs)(a.rj,{ref:e,columns:{initial:"1fr",md:"1fr 1fr"},minHeight:h,minWidth:s,areas:{initial:'"primary" "secondary"',md:"Left"===i?'"secondary primary"':'"primary secondary"'},rows:d?"1fr":{initial:"auto 1fr",md:"1fr"},...g,children:[(0,n.jsx)(l,{gridArea:"primary",p:"4",children:o}),(0,n.jsxs)(n.Fragment,{children:[u&&(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:u}}),(0,n.jsx)(a.xu,{dangerouslySetInnerHTML:{__html:c},"data-hak-custom-html":"",gridArea:"secondary",height:"100%",position:"relative",style:{isolation:"isolate"},display:{initial:d?"none":"block",md:"block"}})]})]})}),l=r.forwardRef((t,e)=>{let{style:o,...r}=t;return(0,n.jsx)(a.rj,{ref:e,align:"center",columns:"minmax(0, 440px)",justify:"center",rows:"repeat(3, min-content)",style:{alignContent:"space-between",...o},...r})});l.displayName="PageLayoutPrimaryPanel",i.displayName="PageLayout"}},function(t){t.O(0,[8350,8083,9706,4023,3139,1744],function(){return t(t.s=84948)}),_N_E=t.O()}]);