COMSCORE.SiteRecruit.Broker.config={sv:"scor",cddsDomains:"microsoftstore.com|xbox.com|office.com",cddsInProgress:"cddsinprogress",domainSwitch:"tracking3p",domainMatch:"([\\da-z.-]+.com)",delay:0,cddsIntervalMax:10,crossDomainCheck:function(){if(this.cddsIntervalMax>1){this.cddsIntervalMax--;if(COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(this.cddsInProgress)!==false){setInterval(function(){COMSCORE.SiteRecruit.DDKeepAlive.setDDTrackerCookie()},1e3);COMSCORE.SiteRecruit._halt=true;COMSCORE.SiteRecruit.Utils.UserPersistence.createCookie("srCDDS","1",{path:"/",domain:COMSCORE.SiteRecruit.Broker.config.cookie.domain,duration:"s"});this.clearCrossDomainCheck()}}else{this.clearCrossDomainCheck()}},clearCrossDomainCheck:function(){window.clearInterval(crossDomainInterval)},isolateDomain:function(a){a=a.substring(a.indexOf("//")+2,a.length);a=a.substring(0,a.indexOf("/"));return a},addEventDelay:1e3,isWindowOpener:!0,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,expireDate:""},tracker:{std:"http://www.microsoft.com/library/svy/SiteRecruit_Tracker.htm",ssl:"https://www.microsoft.com/library/svy/SiteRecruit_Tracker.htm"},mobile:{match:"iphone|ipad|ipod|android|opera mini|blackberry|windows (phone|ce)|iemobile|htc|nokia|bb10|mobile safari|mobile|silk",halt:true},graceIncr:{name:"graceIncr",initDelay:0,clickDelay:5e3,match:"https://(account|accounts|billing|commerce|login|live).(microsoft|live|xbox).(com)",altTag:"class",htmlMatch:"sign in"},prefixUrl:"",mapping:[{m:"//[\\w\\.-]+/en-(au|ca|eg|hk|in|ie|my|nz|pk|ph|sa|sg|za|gb|us)/learning/.*",c:"inv_c_Learning-2342.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/en-us/(cloud-platform$|cloud-platform/.*)",c:"inv_c_p218292485-3105.js",f:0.0,p:0,halt:true},{m:"www.microsoft.com/(en-us$|en-us/$)",c:"inv_c_p347624415-3365.js",f:0.0,p:0,halt:true},{m:"www.microsoft.com/(en-us$|en-us/$)",c:"inv_c_p347624415-US-M.js",f:0.0,p:3,halt:true,prereqs:{content:[],cookie:[{name:"srMOB",value:"1"}]}},{m:"/en-us/ai/empowering-innovation.*(20718571|620863|65739|_sem_|620867|21364843|21358882|21406323|8405299|21747986)",c:"inv_c_p347374788-3326.js",f:0.4,p:2},{m:"/en-us/ai/empowering-innovation",c:"inv_c_p347374788-3326.js",f:0.015,p:1},{m:"/en-us/ai/empowering-innovation.*(20718571|620863|65739|_sem_|620867|21364843|21358882|21406323|21747986)",c:"inv_c_p347374788-3337-M.js",f:0.4,p:3,prereqs:{content:[],cookie:[{name:"srMOB",value:"1"}]}},{m:"/en-us/ai/empowering-innovation",c:"inv_c_p347374788-3337-M.js",f:0.015,p:3,prereqs:{content:[],cookie:[{name:"srMOB",value:"1"}]}},{m:"int_cle.htm.+/en-us/ai/empowering-innovation.*site=3337",c:"inv_c_p347374788-3326-CLE.js",f:1,p:3},{m:"int_cle.htm.+/en-us/ai/empowering-innovation.*site=3337",c:"inv_c_p347374788-CLE-M.js",f:1,p:4,prereqs:{content:[],cookie:[{name:"srMOB",value:"1"}]}},{m:"//[\\w\\.-]+/en-us/dynamics365(?!(crm-(sales|sales2)\\.aspx|contact-us|building-world-class-sales-organization|ray-wang-webinar|how-to-crush-your-sales-quota|how-to-crush-your-sales-quota-(2|3|whitepaper)))",c:"inv_c_p329946460-14.js",f:.5,p:0},{m:"//[\\w\\.-]+/en-us/evalcenter",c:"inv_c_p246609455-3128.js",f:.16,p:1},{m:"//[\\w\\.-]+/en-us/internet-of-things",c:"inv_c_p347116648-3197.js",f:0.0,p:1,halt:true},{m:"//[\\w\\.-]+/en-us/licensing/(?!(servicecenter|licensewise/|mla/))",c:"inv_c_Licensing-43.js",f:0.0,p:0,halt:true},{m:"//[\\w\\.-]+/en-us/security",c:"inv_c_p346424086-3198.js",f:0.0,p:1,halt:true},{m:"//[\\w\\.-]+/en-us/server-cloud/",c:"inv_c_p218292485-2197.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/en-us/server-cloud/(sql-|products/sql-server)",c:"inv_c_p218292485-2198.js",f:.5,p:1},{m:"//[\\w\\.-]+/en-us/sql-server",c:"inv_c_p218292485-2198.js",f:.5,p:1},{m:"//[\\w\\.-]+/en-us/trustcenter",c:"inv_c_p346424086.js",f:0.0,p:0,halt:true},{m:"/en-us/windows/pc-offers-48973018.*(20981350|644969|20968765|20972077|656968|84046118|21529649|21527198)",c:"inv_c_p347130577-US.js",f:0.0,p:1,halt:true},{m:"/en-us/windows/pc-offers-48973018",c:"inv_c_p347130577-US.js",f:0.0,p:1,halt:true},{m:"int_cle.htm.+/en-us/windows/pc-offers-48973018.*site=3367",c:"inv_c_p347130577-CLE-M.js",f:100,p:4,prereqs:{content:[],cookie:[{name:"srMOB",value:"2|3"}]}},{m:"/en-us/windows/pc-offers-48973018.*(20981350|644969|20968765|20972077|656968|84046118|21529649|21527198)",c:"inv_c_p347130577-US-M.js",f:0.0,p:4,halt:true,prereqs:{content:[],cookie:[{name:"srMOB",value:"2"}]}},{m:"/en-us/windows/pc-offers-48973018.*(20981350|644969|20968765|20972077|656968|84046118|21529649|21527198)",c:"inv_c_p347130577-US-M.js",f:0.0,halt:true,p:4,prereqs:{content:[],cookie:[{name:"srMOB",value:"3"}]}},{m:"/en-us/windows/pc-offers-48973018",c:"inv_c_p347130577-US-M.js",f:0.0,p:3,halt:true,prereqs:{content:[],cookie:[{name:"srMOB",value:"2|3"}]}},{m:"int_cle.htm.+/en-us/windows/pc-offers-48973018.*site=3367",c:"inv_c_p347130577-CLE.js",f:100,p:3},{m:"//[\\w\\.-]+/en-au/windows/windows-10-pcs",c:"inv_c_p347130577-AU.js",f:0.0,p:1,halt:true},{m:"int_cle.htm.+/en-au/windows/windows-10-pcs.*site=3321",c:"inv_c_p347130577-AU-CLE.js",f:1,p:3},{m:"(//[\\w\\.-]+/sql/experience/(Default\\.aspx\\?loc=en)|(html/Default\\.aspx\\?loc=en)|(html/Events\\.aspx\\?loc=en)|(LearnSQL\\.aspx\\?h=t&loc=en)|(LearnSQL\\.aspx\\?loc=en)|(Events\\.aspx\\?loc=en)|(.*\\.wmv))|(/learning/en/us/(s|S)yndication(p|P)age\\.aspx)",c:"inv_c_blank.js",f:0,p:3,halt:true},{m:'dynamics.microsoft.com/en-us',c:'inv_c_p329946460-3204.js',f:.5,p:0},{m:"microsoft.com/en-us/microsoft-365/business",c:"inv_c_p347412467-3353.js",f:1.0,p:4},{m:"microsoft.com/en-us/quantum/",c:"inv_c_p347586526-3360.js",f:0.5,p:2},{m:"microsoft.com/en-us/(ignite$|ignite/.*)",c:"inv_c_p347586431-3359.js",f:0.5,p:2}],Events:{beforeRecruit:function(){var csbc=COMSCORE.SiteRecruit.Broker.config;var csuu=COMSCORE.SiteRecruit.Utils.UserPersistence;var msc=unescape(csuu.getCookieValue(csbc.cookie.name));if(/idle/i.test(msc)){csuu.createCookie(csbc.cookie.name,msc,csbc.cookie);}if(csuu.getCookieValue(csbc.domainSwitch)!=false){csuu.createCookie(csbc.domainSwitch,"",{path:"/",domain:csbc.cookie.domain,duration:-1})}if(/en-us\/ai\/empowering-innovation/i.test(window.location)){if(!(/20718571|620863|65739|_sem_|620867|21364843|21358882|21406323|8405299|21747986|int_cle/i.test(window.location))&&/microsoft\.com|products\.office\.com|xbox\.com/i.test(document.referrer)){COMSCORE.SiteRecruit._halt=true}if(COMSCORE.SiteRecruit.device.type>1){csuu.createCookie("srMOB","1",{path:"/",domain:csbc.cookie.domain,duration:"s"});COMSCORE.SiteRecruit.Broker.config.mobile.halt=false}}if(/en-us\/windows\/pc-offers-48973018/i.test(window.location)&&COMSCORE.SiteRecruit.device.type>1){csuu.createCookie("srMOB",COMSCORE.SiteRecruit.device.type,{path:"/",domain:csbc.cookie.domain,duration:"s"});COMSCORE.SiteRecruit.Broker.config.mobile.halt=false}if(/www\.microsoft\.com\/(en-us$|en-us\/$)/i.test(window.location)&&COMSCORE.SiteRecruit.device.type>1){csuu.createCookie("srMOB","1",{path:"/",domain:csbc.cookie.domain,duration:"s"});COMSCORE.SiteRecruit.Broker.config.mobile.halt=false}COMSCORE.SiteRecruit.Broker.custom={captLinks:function(u){var v=csuu.getCookieValue("captLinks");var c="";if(v==false){c=escape(u)+";"}else{if(c.length+v.length<1440){c=v+escape(u)+";"}}if(c!=""){csuu.createCookie("captLinks",c,{path:"/",domain:csbc.cookie.domain,duration:"s"})}},allTags:function(x,x1,y,z){if(x=="class"){if(/msie (8|7)/i.test(navigator.userAgent)){return}var aTags=document.getElementsByClassName(x1)}else{var aTags=document.getElementsByTagName(x)}var sr_r=new RegExp(y,"i");for(var i=0;i<aTags.length;i++){if(x=="a"&&sr_r.test(aTags[i].href)||x=="class"&&sr_r.test(aTags[i].innerHTML)){if(aTags[i].addEventListener){this.href=aTags[i].href;if(z==1){aTags[i].addEventListener("click",function(event){if(sr_r.test(this.href)){csuu.createCookie(csbc.domainSwitch,this.href,{path:"/",domain:csbc.cookie.domain,duration:"s"})}},false)}else if(z==2){aTags[i].addEventListener("click",function(event){csuu.createCookie("graceIncr",1,{path:"/",domain:csbc.cookie.domain,duration:"s"})},false)}else if(z==3&&COMSCORE.isDDInProgress()){aTags[i].addEventListener("click",function(event){COMSCORE.SiteRecruit.Broker.custom.captLinks(this.href)},false)}}else if(aTags[i].attachEvent){if(z==1){aTags[i].attachEvent("onclick",function(e){if(sr_r.test(e.srcElement)){csuu.createCookie(csbc.domainSwitch,e.srcElement,{path:"/",domain:csbc.cookie.domain,duration:"s"})}})}else if(z==2){aTags[i].attachEvent("onclick",function(){csuu.createCookie("graceIncr",1,{path:"/",domain:csbc.cookie.domain,duration:"s"})})}else if(z==3&&COMSCORE.isDDInProgress()){aTags[i].attachEvent("onclick",function(){COMSCORE.SiteRecruit.Broker.custom.captLinks(e.srcElement)})}}else{}}}},checkClickTaleData:function(){if(intMax>0){intMax--;try{if(ClickTaleGetPID()&&ClickTaleGetSID()&&ClickTaleGetUID()){COMSCORE.SiteRecruit.clickTaleData=ClickTaleGetPID()+","+ClickTaleGetSID()+","+ClickTaleGetUID();var c="sr_CT="+COMSCORE.SiteRecruit.clickTaleData+"; path=/"+"; domain="+COMSCORE.SiteRecruit.Broker.config.cookie.domain;document.cookie=c;COMSCORE.SiteRecruit.Broker.custom.clearClickTaleData()}}catch(err){}}else{COMSCORE.SiteRecruit.Broker.custom.clearClickTaleData()}},clearClickTaleData:function(){window.clearInterval(CTDInterval)}};COMSCORE.SiteRecruit.clickTaleData="";if(/en-us\/windows\/10/i.test(document.location.toString())&&document.cookie.indexOf("sr_CT")==-1){var intMax=15;var CTDInterval=window.setInterval("COMSCORE.SiteRecruit.Broker.custom.checkClickTaleData()","1000")}var gIdelay=0;if(COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("graceIncr")==1){gIdelay=5e3}setTimeout(function(){COMSCORE.SiteRecruit.Utils.UserPersistence.createCookie("graceIncr",0,{path:"/",domain:csbc.cookie.domain,duration:"s"})},gIdelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags(csbc.graceIncr.altTag,"msame_Header_name msame_TxtTrunc",csbc.graceIncr.htmlMatch,2)},csbc.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags("a","",csbc.cddsDomains,1)},csbc.addEventDelay);setTimeout(function(){COMSCORE.SiteRecruit.Broker.custom.allTags("a","",csbc.graceIncr.match,2)},csbc.addEventDelay)}}};var crossDomainInterval=window.setInterval("COMSCORE.SiteRecruit.Broker.config.crossDomainCheck()","1000");if(COMSCORE.SiteRecruit.Broker.delayConfig==true||(/en-us\/ai\/empowering-innovation/i.test(window.location)&&COMSCORE.SiteRecruit.device.type>1)){COMSCORE.SiteRecruit.Broker.config.delay=0}window.setTimeout("COMSCORE.SiteRecruit.Broker.run()",COMSCORE.SiteRecruit.Broker.config.delay);