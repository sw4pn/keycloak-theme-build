"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[5741],{1533:function(s,e,c){c.d(e,{a:function(){return t}});var o=c(6055),l=c(969);function t(s){var e=s.defaultClasses;return{useGetClassName:function(s){var c=s.classes;return{getClassName:(0,l.O)((function(s){return(0,o.W)(s,e[s],null===c||void 0===c?void 0:c[s])}))}}}}},7107:function(s,e,c){c.d(e,{v:function(){return o}});var o=(0,c(1533).a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcInputGroup:"pf-c-input-group",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},5741:function(s,e,c){c.r(e),c.d(e,{default:function(){return a}});var o=c(184),l=c(6055),t=c(7107);function a(s){var e=s.kcContext,c=s.i18n,a=s.doUseDefaultCss,i=s.Template,n=s.classes,r=(0,t.v)({doUseDefaultCss:a,classes:n}).getClassName,f=e.url,u=e.client,p=e.logoutConfirm,k=c.msg,d=c.msgStr;return(0,o.jsx)(i,Object.assign({},{kcContext:e,i18n:c,doUseDefaultCss:a,classes:n},{displayMessage:!1,headerNode:k("logoutConfirmTitle")},{children:(0,o.jsxs)("div",Object.assign({id:"kc-logout-confirm",className:"content-area"},{children:[(0,o.jsx)("p",Object.assign({className:"instruction"},{children:k("logoutConfirmHeader")})),(0,o.jsxs)("form",Object.assign({className:"form-actions",action:f.logoutConfirmAction,method:"POST"},{children:[(0,o.jsx)("input",{type:"hidden",name:"session_code",value:p.code}),(0,o.jsxs)("div",Object.assign({className:r("kcFormGroupClass")},{children:[(0,o.jsx)("div",Object.assign({id:"kc-form-options"},{children:(0,o.jsx)("div",{className:r("kcFormOptionsWrapperClass")})})),(0,o.jsx)("div",Object.assign({id:"kc-form-buttons",className:r("kcFormGroupClass")},{children:(0,o.jsx)("input",{tabIndex:4,className:(0,l.W)(r("kcButtonClass"),r("kcButtonPrimaryClass"),r("kcButtonBlockClass"),r("kcButtonLargeClass")),name:"confirmLogout",id:"kc-logout",type:"submit",value:d("doLogout")})}))]}))]})),(0,o.jsx)("div",Object.assign({id:"kc-info-message"},{children:!p.skipLink&&u.baseUrl&&(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:u.baseUrl,dangerouslySetInnerHTML:{__html:d("backToApplication")}})})}))]}))}))}},6055:function(s,e,c){c.d(e,{W:function(){return a}});var o=c(2982),l=c(4849),t=c(2778),a=function s(){for(var e=arguments.length,c=0,a="";c<e;c++){var i=c<0||arguments.length<=c?void 0:arguments[c];if(null!=i){var n=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))n=s.apply(void 0,(0,o.Z)(i));else for(var r in(0,l.h)(!(0,t.z)(i,!1)),n="",i)i[r]&&r&&(n&&(n+=" "),n+=r);break;default:n=i}n&&(a&&(a+=" "),a+=n)}}return a}},2778:function(s,e,c){function o(s,e){return e}c.d(e,{z:function(){return o}})}}]);
//# sourceMappingURL=5741.412020e4.chunk.js.map