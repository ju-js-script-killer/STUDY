this.MSA=this.MSA||{},this.MSA.MeControl=this.MSA.MeControl||{},this.MSA.MeControl.WebBoot=function(e,S,N){"use strict";N=N&&N.hasOwnProperty("default")?N.default:N;var t,n,i,r=navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase(),C=(t="msie",n="8.0",(i=/(msie) ([\w.]+)/.exec(r))&&i[1]===t&&i[2]===n||!1);var a="data-mc-m";function I(e,t,n,i){return a+"='"+o(e,t,n,i)+"'"}function w(e){var t,n,i=function(e){if(e&&e.getAttribute&&e.hasAttribute&&!t){if(e.hasAttribute(a))try{t=JSON.parse(e.getAttribute(a)||"")}catch(e){}e.hasAttribute("href")&&(n=e.getAttribute("href")||void 0),i(e.parentNode)}};return i(e),{content:{id:(t=t||{}).id,area:t.aN,type:t.cT,slot:t.sN},targetUrl:n}}function o(e,t,n,i){var r={id:e,aN:t,cT:n,sN:i};return JSON.stringify(r,function(e,t){return null==t?void 0:t})}var s=/\{\d+\}/g,l=/[\{\}]/g,c=/[^\w .,-]/g,m={};function u(e){S.assign(m,e)}function M(e,t){var n=m[e]||A("ERROR: {0}",e);return t?y(n):n}function p(e,t){return e.substr(0,t.length)===t}function A(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return e.replace(s,function(e){var t=n[parseInt(e.replace(l,""),10)];return null==t&&(t=""),t})}function y(e){if(!e)return"";var i={c:0,s:-1};return e.replace(c,function(e,t,n){return function(e,t,n){var i=n.s===t;if(!i){t=t||0;var r=e.charCodeAt(t),a=void 0,o=void 0;n.s=-1,r<55296||57343<r?n.c=r:r<=56319?(a=r,o=e.charCodeAt(t+1),n.c=1024*(a-55296)+(o-56320)+65536,n.s=t+1):(n.c=-1,i=!0)}return!i}(n,t,i)?["&#",i.c,";"].join(""):""})}var d="uictx",f="me",v="([&?]{0}=)([^&#]*)";function g(e,t){if(!e)return"";var n=[];for(var i in t)U(e,i)?e=E(e,i,t[i]):n.push(i+"="+(t[i]?t[i]:""));return 0===n.length?e:e+(-1===e.indexOf("?")?"?":"&")+n.join("&")}function h(e,t){return(t=t||{})[d]=f,g(e,t)}function U(e,t){return!!e&&null!=b(e,t)}function b(e,t){var n=A(v,t),i=new RegExp(n,"i").exec(e);return i?i[2]||"":null}function E(e,t,n){var i=A(v,t),r=new RegExp(i,"i");if(r.test(e))return e.replace(r,"$1"+n);var a={};return a[t]=n,g(e,a)}function T(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}var _="https://storage.live{1}.com/users/0x{0}/myprofile/expressionprofile/profilephoto:Win8Static,UserTileMedium,UserTileStatic/MeControlXXLUserTile?ck={2}&ex=24",x="https://account.microsoft.com/profile/edit/picture?ref=MeControl",k="https://account.microsoft.com/profile/edit-name?ref=MeControl",P="https://account.microsoft.com/?ref=MeControl",H={firstName:"",lastName:"",displayName:"",smallTileUrl:"",authenticatedState:""},D={msaInfo:{signInUrl:"",signOutUrl:"",meUrl:""},preferredIdp:"msa"},R="msame_asi",L={},O={};L.msa="wreply",O.msa="checkda";var V=100,B=44;function F(i){(i=i||{}).events=i.events||{},i.mobileBreakpoints=i.mobileBreakpoints||{};var r,a,o,t,e=!1,n=!0,s=S.assign({},H,i.userData),l=i.rpData,c=i.urlBase||"",m=-1,u={options:i||{},pawnImgUrls:{MsaEnabled:f("msa_enabled.png"),MsaDisabled:f("msa_disabled.png"),AadEnabled:f("aad_enabled.png"),AadDisabled:f("aad_disabled.png")},imageUrl:f,isValid:function(){return n},isReady:function(){return!(!n||!o)},mobileState:function(e){if("number"==typeof e&&-1<=e&&e<=2&&(m=e),-1!==m)return m;var t=i.mobileBreakpoints;if(t){if(t.mobile&&t.mobile>=S.w.innerWidth)return 2;if(t.shortHeader&&t.shortHeader>=S.w.innerWidth)return 1}return 0},hasActiveUser:function(){return s&&1==s.authenticatedState},setActiveUser:function(e){e&&(s=e,d())},getProfilePictureUrl:function(e){var t="";switch((e=e||{}).idp){case"msa":t=v(e);break;case"aad":var n=e;t=n.largeTileUrl||n.smallTileUrl||n.tileUrl||p(e===s?void 0:e);break;case"msaFed":if(e.cid)t=v(e);else{var i=e;t=i.largeTileUrl||i.smallTileUrl||i.tileUrl||p()}}return t},getDisplayName:function(e){var t=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),A(S.ME.Loc.lf?"{1} {0}":"{0} {1}",e,t)},n="";switch((e=e||{}).idp){case"msa":n=t(e.firstName,e.lastName);break;case"aad":case"msaFed":n=e.displayName||t(e.firstName,e.lastName)}return n.trim&&(n=n.trim()),n},headerData:function(){var e,t=s.nickName||(S.ME.Loc.lf?s.lastName||s.firstName:s.firstName||s.lastName)||"";switch(s.idp){case"msa":e=t;break;case"aad":case"msaFed":e=s.displayName||t}e=e||s.memberName;var n=i.headerHeight;return n="number"==typeof n?Math.max(B,Math.min(V,n)):0,{displayName:e,displayNameMobile:this.getDisplayName(s),nickName:s.nickName,tileUrl:this.getProfilePictureUrl(s),memberName:s.memberName||"",authenticatedState:s.authenticatedState,errorImgUrl:p(),chevronImgUrl:f("Chevronpng.png"),height:n,mobileState:this.mobileState(),chevHtml:i.custom&&i.custom.chevHtml}},activeAccountData:function(){return{idp:s.idp,firstName:s.firstName||"",lastName:s.lastName||"",nickName:s.nickName||"",displayName:this.getDisplayName(s),orgName:s.orgName||"",roleName:s.roleName||"",memberName:s.memberName||"",tileUrl:this.getProfilePictureUrl(s),isCustomTileUrl:!!s.tileUrl,errorImgUrl:p(),openLinkInNewTab:i.openLinksInNewTab,getEditPictureUrl:function(){return g(x,{lang:i.market||"",ru:encodeURIComponent(S.w.location.href),partnerId:S.ME.Config.ptn,partnerDomain:encodeURIComponent(S.w.location.hostname)})},getEditNameUrl:function(){return g(k,{lang:i.market||"",ru:encodeURIComponent(S.w.location.href),partnerId:S.ME.Config.ptn,partnerDomain:encodeURIComponent(S.w.location.hostname)})}}},getAccountItemData:function(n){var i=this;return{tileUrl:this.getProfilePictureUrl(n),displayName:this.getDisplayName(n),authenticatedState:n.authenticatedState,memberName:n.memberName,errorImgUrl:p(n),enabled:o&&o.isIdpEnabled(n.idp),onSwitchUser:function(){i.switchToUser(n)},onSignOutUser:function(e,t){i.signOutUser(n,e,t)},removeImgUrl:a}},userData:function(){return s},rpData:function(){return l},authStateModel:function(e){return!o&&e&&(o=e,this.hasActiveUser()&&o.setActiveUser(s),o.getUserState(function(e){})),o},rewardsStateModel:function(e){return e&&(t=e),t},extensibleLinks:function(e){if(e){for(var t=e instanceof Array,n=0;t&&n<e.length;n++)(e[n].string||e[n].label)&&(e[n].onClick||e[n].url)&&(!e[n].onClick||e[n].onClick instanceof Function)||(t=!1);t&&(r=e),S.logQos("SetExtensibleLinks",t,0)}return r},dispose:function(){e||(o&&o.dispose(),l=s=o=null,e=!0)},signOut:function(){if(o){var e;S.logEvent("SignOutAll",{userCount:o.currentState().length,currentUser:this.hasActiveUser()?s.idp:"none"}),l.msaInfo&&i.autoSignIn&&(e=A("{0}=1; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT",R),document.cookie=e);var t=!0;if(!0===i.derivedFromV2ConfigObject){if(i&&i.events&&i.events.onBeforeSignOut){var n={currentAccount:s?S.remapV1UserToV2Account(s):void 0};t=!i.events.onBeforeSignOut(n)}}else i.events&&i.events.onBeforeSignOut&&(i.events.onBeforeSignOut(s),t=!0);t&&(S.w.location.href=o.getSignOutUrl(s))}},signIn:function(){S.logEvent("SignIn",{userCount:o&&o.currentState().length});var e,t=!0;if(!0===i.derivedFromV2ConfigObject?i&&i.events&&i.events.onSignIn&&(t=!i.events.onSignIn()):i.events&&i.events.onSignIn&&(i.events.onSignIn(),t=!1),t){l.msaInfo&&i.autoSignIn&&(e=A("{0}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",R),document.cookie=e);var n;(n=o?h(o.getSignInUrl(void 0,2===this.mobileState())):"msa"==l.preferredIdp?l.msaInfo&&l.msaInfo.signInUrl:l.aadInfo&&l.aadInfo.signInUrl)&&(S.w.location.href=n)}},switchToUser:function(e){S.logEvent("SwitchUser",{userCount:o.currentState().length,idp:e&&e.idp,currentUser:this.hasActiveUser()?s.idp:"none"}),S.w.location.href=o.getSwitchToUrl(e)},signOutUser:function(e,t,n){S.logEvent("RemoveUser",{userCount:o.currentState().length,idp:e&&e.idp,currentUser:this.hasActiveUser()?s.idp:"none"}),o.signOutUser(e,t,n)}};return d(),u;function d(){if(n=!0,u.hasActiveUser()){if(s.firstName=N.trim(s.firstName),s.lastName=N.trim(s.lastName),s.memberName=N.trim(s.memberName),n=!(!s.memberName||!s.idp),"msa"===s.idp||"msaFed"===s.idp){var e=s;"msa"===s.idp&&(n=!(!n||!e.cid)),e.cid=e.cid&&e.cid.toLowerCase()}u.isReady()&&o.setActiveUser(s)}s=S.assign({},H,s),n=!(!n||!l||!l.msaInfo&&!l.aadInfo);var t=(l=N.extend(!0,{},D,l)).msaInfo;t&&(t.accountSettingsUrl=g(P,{lang:i.market||"",partnerId:S.ME.Config.ptn,partnerDomain:encodeURIComponent(location.hostname)})),a=f("cross.png"),u.extensibleLinks(i.extensibleLinks),function(){if(n&&!u.hasActiveUser()&&l.msaInfo&&i.autoSignIn&&l.msaInfo.signInUrl&&i.autoSignInReturnUrl&&!T(R)){var e=N('<iframe class="msame_auto_frame">');e.attr("src",function(){var e=l.msaInfo&&l.msaInfo.signInUrl||"",t=encodeURIComponent(i.autoSignInReturnUrl||"");e=E(e,L.msa,t);var n={};U(e,O.msa)||(n[O.msa]="1");return h(e,n)}()),N(document.body).append(e)}}(),S.ME.$model=u}function f(e){return A("{0}/MeControl/{1}/{2}",c,S.ME.Version,e)}function p(e){var t=!e||o&&o.isIdpEnabled(e.idp);return e=e||s,t?"msa"===e.idp||"msaFed"===e.idp?u.pawnImgUrls.MsaEnabled:u.pawnImgUrls.AadEnabled:"msa"===e.idp||"msaFed"===e.idp?u.pawnImgUrls.MsaDisabled:u.pawnImgUrls.AadDisabled}function v(e){var t=e.tileUrl;return t||(t=A(_,e.cid,i.isINT?"-int":"",T("upck")||"1")),t}}var Q={},W="https://";function $(e){return Q[e]&&Q[e].succeeded}function j(l,c,n,m){var u,t=!1,i=!1,r=!1,a={activate:function(){l&&!t&&(i=t=!0,u=S.perfNow(),l.prop("src")===c?o():(l.on("load",o),l.on("error",f),c&&p(c.toLowerCase(),W)?l.prop("src",c):l.prop("src",n)))},deactivate:function(){i&&!r&&(i=!1,l&&l.off())},reset:function(e){i&&!r&&(e&&(c=e),this.deactivate(),t=!1,this.activate())},dispose:function(){r||(this.deactivate(),r=!(l=null))}};return a;function d(){var e=l&&l.prop("src")||c;return Q[e]||(Q[e]={succeeded:!1,instances:[]}),Q[e]}function o(){try{!function(){var e=d();if(!e.succeeded&&(e.succeeded=!0,0<e.instances.length)){S.logQos("TileLoad",!1,S.perfNow()-u,"ImageRestored: "+c,{url:c});for(var t=0,n=e.instances;t<n.length;t++)n[t].reset()}S.logQos("TileLoad",!0,S.perfNow()-u,void 0,{url:c})}();var e=l[0].naturalWidth,t=l[0].naturalHeight,n=0,i=l.css("width"),r=l.css("height");if(1==e&&1==t||"1px"==i&&"1px"==r)return void f();var a=Math.round;if(e&&t&&e!=t)if(t<e){var o=parseInt(r,10),s=parseInt(i,10);n=-a((a(e*(o/t))-s)/2),l.css({width:"auto","max-width":"none","margin-left":n+"px"})}else l.css({height:"auto","max-height":"none"});l.css("visibility",""),m&&m(!0)}catch(e){S.logEvent("TileLoadError",{message:e.message})}}function f(){var e;try{d().instances.push(a),e=l.parent(),l.remove();var t=n;l.attr("src")!=t&&(S.logQos("TileLoad",!0,S.perfNow()-u,"ImageFailed: "+c,{url:c,clientError:!0}),setTimeout(function(){l&&(l.on("load",o),l.on("error",f),l.attr("src",t).css("visibility",""))},0))}catch(e){S.logEvent("TileLoadError",{message:e.message})}finally{null!=e&&e.append(l),m&&m(!1)}}}var J='<div><div class="msame_Header" role="button" tabIndex="0" aria-label="{2}" title="{2}" {3} {4}" ><span class="msame_screen_reader">{2}</span><div aria-hidden="true" role="presentation"><div class="msame_Header_name msame_TxtTrunc">{0}</div>{1}<div class="msame_Header_chev"></div></div></div></div>',z='<div class="msame_TxtTrunc msame_Header_fullName">{0}</div><div class="msame_TxtTrunc msame_Header_nickName">{1}</div><div class="msame_TxtTrunc msame_Header_email">{2}</div>',G='<div class="msame_Header_pic"><div class="msame_Header_piccont"><div class="msame_Header_picframe"><img role="presentation" src="{0}" alt=""/></div></div></div>',q=".msameheader",K=48,X=70,Y=34,Z=36,ee=28,te=N(window);function ne(l){var t,i,r,n,a,e,o=!1,s=!1,c=l,m=!1,u=!1,d=1==c.authenticatedState,f={elements:function(){return{anchor:i}},setMobileState:function(e){c.mobileState!==e&&(c.mobileState=e,p())},setUserPicture:function(e){t&&t.reset(e)},render:function(){var e="",t=M("signin"),n=M("signinlabel"),i="";if(d){var r=$(c.tileUrl)?c.tileUrl:"";e=A(G,r),t=c.displayName,n=M("headerlabel"),i='aria-expanded="false" aria-haspopup="true"'}n=n.replace(/ /g,"&nbsp;");var a=I("headerClick","Me Control Header","Button"),o=A(J,y(t),e,n,a,i);if(0<l.height){var s=N("<div>").append(o);return v(N(".msame_Header",s)),s.html()}return o},activate:function(){o||s||(o=!0,i=N(".msame_Header"),r=N(".msame_Header_pic",i),n=N(".msame_Header_name",i),a=N(".msame_Header_chev",i),e=N(".msame_Header_pic img",i),i.on("click",U),i.on("keydown",b),i.on("blur",S),i.on("mousedown",h),i.on("touchstart",h),i.toggleClass("msame_unauth",!d),te.on("resize"+q,g),C&&i.addClass("msaie8"),t||(t=j(e,c.tileUrl,c.errorImgUrl)),0!==c.mobileState&&p(),setTimeout(t.activate,0))},deactivate:function(){o&&!s&&(o=!1,te.off("resize"+q),i.off(),t&&t.deactivate())},dispose:function(){s||(this.deactivate(),t&&(t.dispose(),t=null),i.remove(),c=l=null,e=i=null,s=!0)}};return f;function p(){if(o&&!s){var e=2===c.mobileState,t=1===c.mobileState;if(i.toggleClass("msame_Mobile",e),i.toggleClass("msame_Short",t),i.toggleClass("msame_3row",!!c.nickName),v(i),1==c.authenticatedState){var n=N(".msame_Header_name",i);n.show(),t?n.hide():e?(n.remove(),n.html(A(z,y(c.displayNameMobile),c.nickName?y(c.nickName):"",y(c.memberName))),n.insertAfter(r),u||(c.chevHtml?a.append(c.chevHtml):a.append(A('<img src="{0}">',c.chevronImgUrl)),u=!0)):(n.remove(),n.text(c.displayName),n.insertBefore(r))}g()}}function v(e){var t="",n=0,i=0;if(!(2===c.mobileState)&&0<l.height){if(l.height>X)t=l.height-ee+"px";else{var r=l.height<K?Y:Z;t=r+"px",i=(l.height-r)/2}n=l.height}N(".msame_Header_picframe, .msame_Header_picframe img",e).css({height:t,width:t}),N(".msame_Header_name",e).css("line-height",n?n+"px":""),N(".msame_Header_piccont",e).css({paddingTop:i,paddingBottom:i}),e.css("height",n)}function g(){if(!s){if(!i.is(":visible"))return void(m||(m=!0,setTimeout(function(){m=!1,g()},500)));var e=void 0;2===c.mobileState&&(e=i.outerWidth()-r.outerWidth()-a.outerWidth()-5),n.css("max-width",e||"")}}function h(){i.css("outline-style","none")}function U(e,t){e&&(e.preventDefault(),e.stopPropagation()),N(f).trigger("click",{isKeyboard:t,originalEvent:e})}function b(e){!e||32!==e.which&&13!==e.which||U(e,!0)}function S(){i.css("outline-style","")}}var ie=".msame",re=N(S.w);function ae(t){var n,i,r,a,o=!1,s=t,l=!1,c=N("#"+s.containerId);s.telemetryCv&&S.setTelemetryCv(s.telemetryCv);var e={setActiveUser:function(e){!o&&i&&(i.setActiveUser(e),i.isValid()?(S.logQos("SetActiveUser",!0,0),m(),u(),d(),p()):S.logQos("SetActiveUser",!1,0,"MissingData"))},setExtensibleLinks:function(e){!o&&i&&(i.extensibleLinks(e),a&&a.updateExtensibleLinks())},refreshUserPicture:function(){if(!o&&i){var e=i.getProfilePictureUrl(i.userData());this.setUserPicture(e)}},setUserPicture:function(e){!o&&e&&(r&&r.setUserPicture(e),a&&a.setUserPicture(e))},setMobileState:function(e){!o&&i&&(i.mobileState(e),b())},openCloseDropdown:function(e){!o&&a&&(e?a.show():a.hide(!0))},reinit:function(e){console&&console.warn&&console.warn("WARNING: MeController method reinit() is deprecated, please avoid using it"),S.logTelemetryEvent("PartnerApiCall",{method:"reinit",params:e}),this.dispose(),function(e,t){e.events&&e.events.onEventLog&&S.setLogEvent(e.events.onEventLog);e.urlBase=t.urlBase,ae(e=S.assign({},t,e))}(e,s)},dispose:function(){if(!o){m(),u(),i&&i.dispose(),i=null;var e=oe();e&&e.disposeIFrame(),re.off(ie),o=!0}},hasActiveUser:function(){return i.hasActiveUser()}};return setTimeout(function(){if(i=F(s),n=i.mobileState(),!i.isValid())return void S.logQos("modelValidate",!1,0,"MissingData");re.on("resize",b),setTimeout(function(){S.publicProxy.setController(e),S.logEvent("$MeControlReady",{duration:S.perfNow()-S.getStartTime()})},0),d(),p()},0),re.on("unload"+ie,e.dispose),e;function m(){r&&(N(r).off(),r.dispose()),r=null}function u(){a&&(N(a).off(),a.dispose()),a=null}function d(){r||v(S.ME.CssmeBoot,function(){r=ne(i.headerData()),c.html(r.render()),r.activate(),N(r).on("click",h),S.logEvent("HeaderReady",{duration:Date.now()-S.getStartTime()}),g()})}function f(){if(!oe())return e.dispose(),void S.showHeaderNoJs();o||a||v(S.ME.CssmeCore,function(){g()})}function p(){var e=S.getJsUrl("meCore");if(oe())f();else{if(l)return;l=!0;var t=function(){S.loadScript(e,"meCore",function(){l=!1,f()},function(){})};"complete"===document.readyState?t():N(S.w).on("load",t)}}function v(i,r){function e(){var e=document,t=e.head||e.getElementsByTagName("head")[0],n=e.createElement("style");n.type="text/css",t.appendChild(n),C&&n.styleSheet?n.styleSheet.cssText=i:n.appendChild(document.createTextNode(i)),setTimeout(function(){r&&r()},0)}i&&(S.w.requestAnimationFrame?S.w.requestAnimationFrame(e):e())}function g(){var e=oe();e&&r&&!a&&(e.initIFrame(),i.authStateModel(e.createAuthStateModel(i.rpData(),S.ME.Config.aad,S.ME.Config.pxy,s.isINT||!1,t)),i.rewardsStateModel(e.createRewardsStateModel(S.ME.Config.ptn,S.ME.Config.mkt,S.ME.Config.rwd&&i.hasActiveUser()&&"msa"===i.userData().idp)),a=e.createMeDropdownControl(i,r.elements()),N("body").append(a.render()),a.activate(),N(a).on("visible",U),S.logEvent("DropdownReady",{duration:S.perfNow()-S.getStartTime()}),S.logTelemetryEvent("PageView",{pageName:"Initial Collapsed",hasActiveUser:i.hasActiveUser()}))}function h(e,t){var n=w(t.originalEvent&&t.originalEvent.target);if(n.hasActiveUser=i.hasActiveUser(),!(i.hasActiveUser()||i.isReady()&&0!==i.authStateModel().currentState().length))return n.content.id="headerSignIn",S.logTelemetryEvent("PageAction",n),void i.signIn();S.logTelemetryEvent("PageAction",n),a&&a.toggle(t&&t.isKeyboard)}function U(e,t){c.toggleClass("msame_open",t||t.visible)}function b(){if(!o){var e=i.mobileState();n!==e&&(n=e,r&&r.setMobileState(n),a&&a.setMobileState(n))}}}function oe(){return S.ME.WebCore}var se=jQuery(S.w);S.extendMe({Strings:{addStrings:u}});var le,ce,me,ue,de=S.getOptions();if(de&&ae(de),S.optionsAreDerivedFromV2Config()){var fe=S.getOptionsV2();fe&&(ce=!1,me=fe,ue={setActiveAccount:function(e){if(!ce&&le){var t=S.remapV2AccountToV1User(e);window.MSA.MeControl.API.setActiveUser(t)}},setCommands:function(e){if(!ce&&le){var t=S.remapV2CommandsToV1ExtensibleLinks(e);window.MSA.MeControl.API.setExtensibleLinks(t)}},setProfilePicture:function(e){},refreshProfilePicture:function(){},setThemeName:function(e){},dispose:function(){ce||(le&&le.dispose(),le=null,se.off(".msame"),ce=!0)}},setTimeout(function(){var e,t,n;(e=me,t=!0,n={options:e||{},isValid:function(){return t},isReady:function(){return t},dispose:function(){}},t=!0,le=S.ME.$modelV2=n).isValid()?setTimeout(function(){S.publicProxyV2.setController(ue),S.logEvent("$MeControlReady",{duration:S.perfNow()-S.getStartTime()})},0):S.logQos("modelValidate",!1,0,"MissingData")},0),se.on("unload.msame",ue.dispose))}return e.addStrings=u,e.getString=M,e.startsWith=p,e.format=A,e.encodeHtml=y,e.appendQueryParams=g,e.appendContextParam=h,e.hasQueryParam=U,e.getQueryParam=b,e.setQueryParam=E,e.getCookie=T,e.buildBiAttrib=I,e.getBiParams=w,e.getContentBlob=o,e.isIE8=C,e.createMeHeaderControl=ne,e.createMeControlModel=F,e.isImgCached=$,e.createPictureLoader=j,e.createMeController=ae,e}({},MSA.MeControl.WebInline,window.MejQuery);;(function(){var ME=window.MSA.MeControl;ME.Loc={rtl:false,lf:false};ME.Strings.addStrings({
"youraccountmessage":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438",
"updatephotoa11y":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u043b\u0438 \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",
"signout":"\u0412\u044b\u0439\u0442\u0438",
"signin":"\u0412\u043e\u0439\u0442\u0438",
"headerlabel":"\u0412\u0430\u0448\u0430 \u0443\u0447\u0435\u0442\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c",
"dismissdialog":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e",
"signinlabel":"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"});ME.CssmeBoot='.msame_TxtTrunc\x7bwhite-space\x3anowrap\x3btext-overflow\x3aellipsis\x3boverflow\x3ahidden\x3bword-break\x3abreak-all\x7d.msame_Header\x7bdisplay\x3ainline-block\x3bcursor\x3apointer\x3bfont-size\x3a14px\x3bborder-width\x3a1px\x3bborder-style\x3asolid\x3bborder-bottom-style\x3anone\x3bborder-color\x3atransparent\x3bwidth\x3a100\x25\x7d.msame_Header .msame_screen_reader\x7boverflow\x3ahidden\x3bdisplay\x3ainline-block\x3bwidth\x3a1px\x3bheight\x3a1px\x3bposition\x3aabsolute\x7d.msame_Header_name\x7bpadding-left\x3a12px\x3bmax-width\x3a160px\x3bdisplay\x3ainline-block\x3bline-height\x3a64px\x3bvertical-align\x3atop\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bfont-size\x3a86\x25\x3bcolor\x3a\x23505050\x7d.msame_unauth .msame_Header_name\x7bpadding-right\x3a12px\x7d.msame_unauth .msame_Header_name\x3ahover\x7bcolor\x3a\x230078d7\x7d.msame_Drop_AI_pic,.msame_Drop_active_pic,.msame_Header_pic\x7bdisplay\x3ainline-block\x7d.msame_Header_piccont\x7bpadding-top\x3a14px\x3bpadding-bottom\x3a14px\x3bpadding-right\x3a12px\x3bpadding-left\x3a8px\x7d.msame_Mobile .msame_Header_piccont\x7bpadding-top\x3a10px\x3bpadding-bottom\x3a10px\x7d.msame_Short .msame_Header_piccont\x7bpadding-left\x3a12px\x7d.msame_Header_picframe\x7bwidth\x3a36px\x3bheight\x3a36px\x3bborder-radius\x3a50\x25\x3boverflow\x3ahidden\x7d.msame_Mobile .msame_Header_picframe\x7bwidth\x3a48px\x3bheight\x3a48px\x7d.msame_open .msame_Header_picframe\x7bz-index\x3a3000001\x3bposition\x3arelative\x7d.msame_Header_chev\x7bdisplay\x3anone\x7d.msame_Mobile .msame_Header_piccont\x7bpadding-right\x3a8px\x3bpadding-left\x3a10px\x7d.msame_Mobile .msame_Header_name\x7bline-height\x3a3\x3bfont-size\x3a114\x25\x3bpadding-left\x3a10px\x3bpadding-right\x3a10px\x3bdisplay\x3ainline-block\x3bvertical-align\x3atop\x3bpadding-top\x3a14px\x7d.msame_Mobile.msame_3row .msame_Header_name\x7bpadding-top\x3a6px\x7d.msame_Mobile .msame_Header_chev\x7bdisplay\x3ainline-block\x3bline-height\x3a64px\x3bvertical-align\x3atop\x3bpadding-right\x3a16px\x3bpadding-left\x3a8px\x3bfloat\x3aright\x7d.msame_open .msame_Header_chev img\x7b-moz-transform\x3ascaleY\x28-1\x29\x3b-o-transform\x3ascaleY\x28-1\x29\x3b-webkit-transform\x3ascaleY\x28-1\x29\x3btransform\x3ascaleY\x28-1\x29\x3bfilter\x3aFlipV\x3b-ms-filter\x3aFlipV\x7d.msame_Drop_root .msame_Drop_AI\x3afocus,.msame_Drop_root .msame_Drop_AI_remove\x3afocus,.msame_Drop_root a\x3afocus,.msame_Header\x3afocus\x7bborder-style\x3adashed\x3bborder-color\x3a\x23000\x3bborder-width\x3a1px\x7d.msame_Header .msame_Header_piccont img\x7bwidth\x3a36px\x3bheight\x3a36px\x3bline-height\x3anormal\x3bvertical-align\x3abaseline\x7d.msame_Mobile .msame_Header_piccont img\x7bwidth\x3a48px\x3bheight\x3a48px\x7d.msame_Mobile .msame_Header_fullName\x7bfont-size\x3a100\x25\x3bcolor\x3a\x23000\x3bline-height\x3a1.333\x7d.msame_Drop_AI_email,.msame_Drop_AI_status,.msame_Mobile .msame_Header_email,.msame_Mobile .msame_Header_nickName\x7bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bfont-size\x3a86\x25\x3bcolor\x3argba\x280,0,0,.54\x29\x3bline-height\x3a1.333333\x7d.msaie8 .msame_Drop_AI_pic,.msaie8 .msame_Drop_AI_right,.msaie8 .msame_Drop_active_pic,.msaie8 .msame_Drop_active_right,.msaie8 .msame_Header,.msaie8 .msame_Header_name,.msaie8 .msame_Header_pic\x7bzoom\x3a1\x7d';ME.Loader.scriptLoaded('meBoot');})();