"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[5406],{2682:function(e,s,t){t.r(s),t.d(s,{default:function(){return b}});var a=t(2791),c=t(1698),r=(0,c.Lv)({en:{alphanumericalCharsOnly:"Only alphanumerical characters",gender:"Gender",doForgotPassword:"I forgot my password",invalidUserMessage:"Invalid username or password. (this message was overwrite in the theme)"},fr:{alphanumericalCharsOnly:"Caract\xe8re alphanum\xe9rique uniquement",gender:"Genre",doForgotPassword:"J'ai oubli\xe9 mon mot de passe",invalidUserMessage:"Nom d'utilisateur ou mot de passe invalide. (ce message a \xe9t\xe9 \xe9cras\xe9 dans le th\xe8me)"}}).useI18n,n=t(8258),l=t(6055),o=t(7747),i=t(7107),d=window.kcContext.url.resourcesPath + "/build/static/media/keycloakify-logo.6d217eea715da1475d08.png",u=t(3036),p=function(){var e=void 0!==u.H||void 0!==u.H?u.H:void 0;return void 0===e?"":"".concat(e.url.resourcesPath,"/build")}(),f=t(184);function m(e){var s=e.displayInfo,t=void 0!==s&&s,c=e.displayMessage,r=void 0===c||c,u=e.displayRequiredFields,m=void 0!==u&&u,k=e.displayWide,h=void 0!==k&&k,C=e.showAnotherWayIfPresent,g=void 0===C||C,v=e.headerNode,y=e.showUsernameNode,x=void 0===y?null:y,j=e.infoNode,b=void 0===j?null:j,w=e.kcContext,N=e.i18n,F=e.doUseDefaultCss,I=e.classes,A=e.children,L=(0,i.v)({doUseDefaultCss:F,classes:I}).getClassName,W=N.msg,S=N.changeLocale,T=N.labelBySupportedLanguageTag,H=N.currentLanguageTag,U=w.realm,D=w.locale,E=w.auth,P=w.url,B=w.message,z=w.isAppInitiatedAction,_=(0,o.M)({doFetchDefaultThemeResources:F,styles:["".concat(P.resourcesCommonPath,"/node_modules/patternfly/dist/css/patternfly.min.css"),"".concat(P.resourcesCommonPath,"/node_modules/patternfly/dist/css/patternfly-additions.min.css"),"".concat(P.resourcesCommonPath,"/lib/zocial/zocial.css"),"".concat(P.resourcesPath,"/css/login.css")],htmlClassName:L("kcHtmlClass"),bodyClassName:L("kcBodyClass")}).isReady;return(0,a.useState)((function(){document.title=N.msgStr("loginTitle",w.realm.displayName)})),_?(0,f.jsxs)("div",{className:L("kcLoginClass"),children:[(0,f.jsx)("div",{id:"kc-header",className:L("kcHeaderClass"),children:(0,f.jsxs)("div",{id:"kc-header-wrapper",className:L("kcHeaderWrapperClass"),style:{fontFamily:'"Work Sans"'},children:[(0,f.jsx)("img",{src:"".concat(p,"/keycloakify-logo.png"),alt:"Keycloakify logo",width:50}),W("loginTitleHtml",U.displayNameHtml),"!!!",(0,f.jsx)("img",{src:d,alt:"Keycloakify logo",width:50})]})}),(0,f.jsxs)("div",{className:(0,l.W)(L("kcFormCardClass"),h&&L("kcFormCardAccountClass")),children:[(0,f.jsxs)("header",{className:L("kcFormHeaderClass"),children:[U.internationalizationEnabled&&((0,n.h)(void 0!==D),!0)&&D.supported.length>1&&(0,f.jsx)("div",{id:"kc-locale",children:(0,f.jsx)("div",{id:"kc-locale-wrapper",className:L("kcLocaleWrapperClass"),children:(0,f.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,f.jsx)("a",{href:"#",id:"kc-current-locale-link",children:T[H]}),(0,f.jsx)("ul",{children:D.supported.map((function(e){var s=e.languageTag;return(0,f.jsx)("li",{className:"kc-dropdown-item",children:(0,f.jsx)("a",{href:"#",onClick:function(){return S(s)},children:T[s]})},s)}))})]})})}),void 0===E||!E.showUsername||E.showResetCredentials?m?(0,f.jsxs)("div",{className:L("kcContentWrapperClass"),children:[(0,f.jsx)("div",{className:(0,l.W)(L("kcLabelWrapperClass"),"subtitle"),children:(0,f.jsxs)("span",{className:"subtitle",children:[(0,f.jsx)("span",{className:"required",children:"*"}),W("requiredFields")]})}),(0,f.jsx)("div",{className:"col-md-10",children:(0,f.jsx)("h1",{id:"kc-page-title",children:v})})]}):(0,f.jsx)("h1",{id:"kc-page-title",children:v}):m?(0,f.jsxs)("div",{className:L("kcContentWrapperClass"),children:[(0,f.jsx)("div",{className:(0,l.W)(L("kcLabelWrapperClass"),"subtitle"),children:(0,f.jsxs)("span",{className:"subtitle",children:[(0,f.jsx)("span",{className:"required",children:"*"})," ",W("requiredFields")]})}),(0,f.jsxs)("div",{className:"col-md-10",children:[x,(0,f.jsx)("div",{className:L("kcFormGroupClass"),children:(0,f.jsxs)("div",{id:"kc-username",children:[(0,f.jsx)("label",{id:"kc-attempted-username",children:null===E||void 0===E?void 0:E.attemptedUsername}),(0,f.jsx)("a",{id:"reset-login",href:P.loginRestartFlowUrl,children:(0,f.jsxs)("div",{className:"kc-login-tooltip",children:[(0,f.jsx)("i",{className:L("kcResetFlowIcon")}),(0,f.jsx)("span",{className:"kc-tooltip-text",children:W("restartLoginTooltip")})]})})]})})]})]}):(0,f.jsxs)(f.Fragment,{children:[x,(0,f.jsx)("div",{className:L("kcFormGroupClass"),children:(0,f.jsxs)("div",{id:"kc-username",children:[(0,f.jsx)("label",{id:"kc-attempted-username",children:null===E||void 0===E?void 0:E.attemptedUsername}),(0,f.jsx)("a",{id:"reset-login",href:P.loginRestartFlowUrl,children:(0,f.jsxs)("div",{className:"kc-login-tooltip",children:[(0,f.jsx)("i",{className:L("kcResetFlowIcon")}),(0,f.jsx)("span",{className:"kc-tooltip-text",children:W("restartLoginTooltip")})]})})]})})]})]}),(0,f.jsx)("div",{id:"kc-content",children:(0,f.jsxs)("div",{id:"kc-content-wrapper",children:[r&&void 0!==B&&("warning"!==B.type||!z)&&(0,f.jsxs)("div",{className:(0,l.W)("alert","alert-".concat(B.type)),children:["success"===B.type&&(0,f.jsx)("span",{className:L("kcFeedbackSuccessIcon")}),"warning"===B.type&&(0,f.jsx)("span",{className:L("kcFeedbackWarningIcon")}),"error"===B.type&&(0,f.jsx)("span",{className:L("kcFeedbackErrorIcon")}),"info"===B.type&&(0,f.jsx)("span",{className:L("kcFeedbackInfoIcon")}),(0,f.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:B.summary}})]}),A,void 0!==E&&E.showTryAnotherWayLink&&g&&(0,f.jsx)("form",{id:"kc-select-try-another-way-form",action:P.loginAction,method:"post",className:(0,l.W)(h&&L("kcContentWrapperClass")),children:(0,f.jsx)("div",{className:(0,l.W)(h&&[L("kcFormSocialAccountContentClass"),L("kcFormSocialAccountClass")]),children:(0,f.jsxs)("div",{className:L("kcFormGroupClass"),children:[(0,f.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,f.jsx)("a",{href:"#",id:"try-another-way",onClick:function(){return document.forms["kc-select-try-another-way-form"].submit(),!1},children:W("doTryAnotherWay")})]})})}),t&&(0,f.jsx)("div",{id:"kc-info",className:L("kcSignUpClass"),children:(0,f.jsx)("div",{id:"kc-info-wrapper",className:L("kcInfoAreaWrapperClass"),children:b})})]})})]})]}):null}var k=(0,a.lazy)((function(){return t.e(5738).then(t.bind(t,5738))})),h=(0,a.lazy)((function(){return t.e(579).then(t.bind(t,579))})),C=(0,a.lazy)((function(){return t.e(4726).then(t.bind(t,4726))})),g=(0,a.lazy)((function(){return Promise.all([t.e(2597),t.e(6475)]).then(t.bind(t,6202))})),v=(0,a.lazy)((function(){return t.e(7697).then(t.bind(t,637))})),y=(0,a.lazy)((function(){return t.e(121).then(t.bind(t,121))})),x=(0,a.lazy)((function(){return t.e(2444).then(t.bind(t,2444))})),j={kcHtmlClass:"my-root-class",kcHeaderWrapperClass:"my-color my-font"};function b(e){var s=e.kcContext,n=r({kcContext:s});return null===n?null:(0,f.jsx)(a.Suspense,{children:function(){switch(s.pageId){case"login.ftl":return(0,f.jsx)(k,{kcContext:s,i18n:n,Template:m,classes:j,doUseDefaultCss:!0});case"register.ftl":return(0,f.jsx)(h,{kcContext:s,i18n:n,Template:m,classes:j,doUseDefaultCss:!0});case"register-user-profile.ftl":return(0,f.jsx)(C,{kcContext:s,i18n:n,Template:m,classes:j,doUseDefaultCss:!0});case"terms.ftl":return(0,f.jsx)(g,{kcContext:s,i18n:n,Template:m,classes:j,doUseDefaultCss:!0});case"my-extra-page-1.ftl":return(0,f.jsx)(v,{kcContext:s,i18n:n,Template:m,classes:j,doUseDefaultCss:!0});case"my-extra-page-2.ftl":return(0,f.jsx)(y,{kcContext:s,i18n:n,Template:m,classes:j,doUseDefaultCss:!0});case"info.ftl":return(0,f.jsx)(x,{kcContext:s,i18n:n,classes:j,Template:(0,a.lazy)((function(){return t.e(3870).then(t.bind(t,3870))})),doUseDefaultCss:!0});default:return(0,f.jsx)(c.ZP,{kcContext:s,i18n:n,classes:j,Template:m,doUseDefaultCss:!0})}}()})}},1533:function(e,s,t){t.d(s,{a:function(){return r}});var a=t(6055),c=t(969);function r(e){var s=e.defaultClasses;return{useGetClassName:function(e){var t=e.classes;return{getClassName:(0,c.O)((function(e){return(0,a.W)(e,s[e],null===t||void 0===t?void 0:t[e])}))}}}}},7747:function(e,s,t){t.d(s,{M:function(){return u}});var a=t(4165),c=t(2982),r=t(7762),n=t(5861),l=t(885),o=t(2791),i=t(1630),d=t(6055);function u(e){var s=e.doFetchDefaultThemeResources,t=e.styles,d=void 0===t?[]:t,u=e.scripts,f=void 0===u?[]:u,m=e.htmlClassName,k=e.bodyClassName,h=(0,o.useReducer)((function(){return!0}),!s),C=(0,l.Z)(h,2),g=C[0],v=C[1];return(0,o.useEffect)((function(){if(s){var e=!1,t=[];return(0,n.Z)((0,a.Z)().mark((function s(){var n,l,o,u,p,f;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:n=(0,r.Z)((0,c.Z)(d).reverse()),s.prev=1,n.s();case 3:if((l=n.n()).done){s.next=13;break}return o=l.value,u=(0,i.t)({type:"css",position:"prepend",href:o}),p=u.prLoaded,f=u.remove,t.push(f),s.next=9,p;case 9:if(!e){s.next=11;break}return s.abrupt("return");case 11:s.next=3;break;case 13:s.next=18;break;case 15:s.prev=15,s.t0=s.catch(1),n.e(s.t0);case 18:return s.prev=18,n.f(),s.finish(18);case 21:v();case 22:case"end":return s.stop()}}),s,null,[[1,15,18,21]])})))(),f.forEach((function(e){var s=(0,i.t)({type:"javascript",src:e}).remove;t.push(s)})),function(){e=!0,t.forEach((function(e){return e()}))}}}),[]),p({target:"html",className:m}),p({target:"body",className:k}),{isReady:g}}function p(e){var s=e.target,t=e.className;(0,o.useEffect)((function(){if(void 0!==t){var e=document.getElementsByTagName(s)[0].classList,a=(0,d.W)(t).split(" ");return e.add.apply(e,(0,c.Z)(a)),function(){e.remove.apply(e,(0,c.Z)(a))}}}),[t])}},7107:function(e,s,t){t.d(s,{v:function(){return a}});var a=(0,t(1533).a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcInputGroup:"pf-c-input-group",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},4943:function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(e){if("string"===typeof e)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(e,this.firstChild)})},8258:function(e,s,t){t.d(s,{h:function(){return a.h}});var a=t(4849)},6055:function(e,s,t){t.d(s,{W:function(){return n}});var a=t(2982),c=t(4849),r=t(2778),n=function e(){for(var s=arguments.length,t=0,n="";t<s;t++){var l=t<0||arguments.length<=t?void 0:arguments[t];if(null!=l){var o=void 0;switch(typeof l){case"boolean":break;case"object":if(Array.isArray(l))o=e.apply(void 0,(0,a.Z)(l));else for(var i in(0,c.h)(!(0,r.z)(l,!1)),o="",l)l[i]&&i&&(o&&(o+=" "),o+=i);break;default:o=l}o&&(n&&(n+=" "),n+=o)}}return n}},1630:function(e,s,t){t.d(s,{t:function(){return c}});t(4943);var a=t(9595);function c(e){var s=document.createElement(function(){switch(e.type){case"css":return"link";case"javascript":return"script"}}()),t=new a.Deferred;return s.addEventListener("load",(function(){return t.resolve()})),Object.assign(s,function(){switch(e.type){case"css":return{href:e.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:e.src,type:"text/javascript"}}}()),document.getElementsByTagName("head")[0][function(){switch(e.type){case"javascript":return"appendChild";case"css":return function(){switch(e.position){case"append":return"appendChild";case"prepend":return"prepend"}}()}}()](s),{prLoaded:t.pr,remove:function(){return s.remove()}}}},2778:function(e,s,t){function a(e,s){return s}t.d(s,{z:function(){return a}})}}]);
//# sourceMappingURL=5406.1c8c9139.chunk.js.map