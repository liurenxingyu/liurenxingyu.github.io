/*2015-08-11 12:17:07*/!function(e){var t=2;if(!(e.ali_analytics&&e.ali_analytics.ua&&t<=e.ali_analytics.ua.version)){var a,n,o,r,i,s,c,l,d,m,_,u,p,g,f,h,b,v=window,y=document,w=location,E=(location.href,w.hostname,v.navigator),S=E.appVersion,M=E&&E.userAgent||"",P=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return 0==t++?".":""}))},T=function(e,t){var a,n;t[a="trident"]=.1,(n=e.match(/Trident\/([\d.]*)/))&&n[1]&&(t[a]=P(n[1])),t.core=a},A=function(e){var t,a;return(t=e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/))&&(a=t[1]||t[2])?P(a):0},O=function(e){return void 0==e||""==e?"other":e},I=function(e){function t(){for(var t=[["Windows NT 5.1","winXP"],["Windows NT 6.1","win7"],["Windows NT 6.0","winVista"],["Windows NT 6.2","win8"],["iPad","ios"],["iPhone;","ios"],["iPod","ios"],["Macintosh","mac"],["Android","android"],["Ubuntu","ubuntu"],["Linux","linux"],["Windows NT 5.2","win2003"],["Windows NT 5.0","win2000"],["Windows","winOther"],["rhino","rhino"]],a=0,n=t.length;n>a;++a)if(-1!=e.indexOf(t[a][0]))return t[a][1];return"other"}function a(e,t,a,n){var o,r=v.navigator.mimeTypes;try{for(var o in r)if(r[o][e]==t){if(void 0!==a&&n.test(r[o][a]))return!0;if(void 0===a)return!0}return!1}catch(i){return!1}}var n,o,r,i,s,c,l,d,m="",_=m,u=m,p=[6,9],g="{{version}}",f="<!--[if IE "+g+"]><s></s><![endif]-->",h=y&&y.createElement("div"),b=[],w={webkit:void 0,trident:void 0,gecko:void 0,presto:void 0,chrome:void 0,safari:void 0,firefox:void 0,ie:void 0,ieMode:void 0,opera:void 0,mobile:void 0,core:void 0,shell:void 0,phantomjs:void 0,os:void 0,ipad:void 0,iphone:void 0,ipod:void 0,ios:void 0,android:void 0,nodejs:void 0,extraName:void 0,extraVersion:void 0};if(h&&h.getElementsByTagName&&(h.innerHTML=f.replace(g,""),b=h.getElementsByTagName("s")),b.length>0){for(T(e,w),i=p[0],s=p[1];s>=i;i++)if(h.innerHTML=f.replace(g,i),b.length>0){w[u="ie"]=i;break}!w.ie&&(r=A(e))&&(w[u="ie"]=r)}else((o=e.match(/AppleWebKit\/*\s*([\d.]*)/i))||(o=e.match(/Safari\/([\d.]*)/)))&&o[1]?(w[_="webkit"]=P(o[1]),(o=e.match(/OPR\/(\d+\.\d+)/))&&o[1]?w[u="opera"]=P(o[1]):(o=e.match(/Chrome\/([\d.]*)/))&&o[1]?w[u="chrome"]=P(o[1]):(o=e.match(/\/([\d.]*) Safari/))&&o[1]?w[u="safari"]=P(o[1]):w.safari=w.webkit,/ Mobile\//.test(e)&&e.match(/iPad|iPod|iPhone/)?(w.mobile="apple",o=e.match(/OS ([^\s]*)/),o&&o[1]&&(w.ios=P(o[1].replace("_","."))),n="ios",o=e.match(/iPad|iPod|iPhone/),o&&o[0]&&(w[o[0].toLowerCase()]=w.ios)):/ Android/i.test(e)?(/Mobile/.test(e)&&(n=w.mobile="android"),o=e.match(/Android ([^\s]*);/),o&&o[1]&&(w.android=P(o[1]))):(o=e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))&&(w.mobile=o[0].toLowerCase()),(o=e.match(/PhantomJS\/([^\s]*)/))&&o[1]&&(w.phantomjs=P(o[1]))):(o=e.match(/Presto\/([\d.]*)/))&&o[1]?(w[_="presto"]=P(o[1]),(o=e.match(/Opera\/([\d.]*)/))&&o[1]&&(w[u="opera"]=P(o[1]),(o=e.match(/Opera\/.* Version\/([\d.]*)/))&&o[1]&&(w[u]=P(o[1])),(o=e.match(/Opera Mini[^;]*/))&&o?w.mobile=o[0].toLowerCase():(o=e.match(/Opera Mobi[^;]*/))&&o&&(w.mobile=o[0]))):(r=A(e))?(w[u="ie"]=r,T(e,w)):(o=e.match(/Gecko/))&&(w[_="gecko"]=.1,(o=e.match(/rv:([\d.]*)/))&&o[1]&&(w[_]=P(o[1]),/Mobile|Tablet/.test(e)&&(w.mobile="firefox")),(o=e.match(/Firefox\/([\d.]*)/))&&o[1]&&(w[u="firefox"]=P(o[1])));n||(n=t());var E,d,M;if(!a("type","application/vnd.chromium.remoting-viewer")){E="scoped"in y.createElement("style"),M="v8Locale"in v;try{d=v.external||void 0}catch(O){}if(o=e.match(/360SE/))c="360";else if(o=e.match(/SE\s([\d.]*)/)||d&&"SEVersion"in d)c="sougou",l=P(o[1])||.1;else if((o=e.match(/Maxthon(?:\/)+([\d.]*)/))&&d){c="maxthon";try{l=P(d.max_version||o[1])}catch(I){l=.1}}else E&&M?c="360se":E||M||!/Gecko\)\s+Chrome/.test(S)||w.opera||(c="360ee")}return(o=e.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/))?(c="tt",l=P(o[2])||.1):(o=e.match(/LBBROWSER/)||d&&"LiebaoGetVersion"in d)?c="liebao":(o=e.match(/TheWorld/))?(c="theworld",l=3):(o=e.match(/TaoBrowser\/([\d.]*)/))?(c="taobao",l=P(o[1])||.1):(o=e.match(/UCBrowser\/([\d.]*)/))&&(c="uc",l=P(o[1])||.1),w.os=n,w.core=w.core||_,w.shell=u,w.ieMode=w.ie&&y.documentMode||w.ie,w.extraName=c,w.extraVersion=l,w.resolution=v.screen.width+"x"+v.screen.height,w},R=function(e){function t(e){return Object.prototype.toString.call(e)}function a(e,a,n){if("[object Function]"==t(a)&&(a=a(n)),!a)return null;var o={name:e,version:""},r=t(a);if(a===!0)return o;if("[object String]"===r){if(-1!==n.indexOf(a))return o}else if(a.exec){var i=a.exec(n);if(i)return o.version=i.length>=2&&i[1]?i[1].replace(/_/g,"."):"",o}}var n={name:"other",version:""};e=(e||"").toLowerCase();for(var o=[["nokia",function(e){return-1!==e.indexOf("nokia ")?/\bnokia ([0-9]+)?/:/\bnokia([a-z0-9]+)?/}],["samsung",function(e){return-1!==e.indexOf("samsung")?/\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/:/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/}],["wp",function(e){return-1!==e.indexOf("windows phone ")||-1!==e.indexOf("xblwp")||-1!==e.indexOf("zunewp")||-1!==e.indexOf("windows ce")}],["pc","windows"],["ipad","ipad"],["ipod","ipod"],["iphone",/\biphone\b|\biph(\d)/],["mac","macintosh"],["mi",/\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],["hongmi",/\bhm[ \-]?([a-z0-9]+)/],["aliyun",/\baliyunos\b(?:[\-](\d+))?/],["meizu",function(e){return e.indexOf("meizu")>=0?/\bmeizu[\/ ]([a-z0-9]+)\b/:/\bm([0-9x]{1,3})\b/}],["nexus",/\bnexus ([0-9s.]+)/],["huawei",function(e){var t=/\bmediapad (.+?)(?= build\/huaweimediapad\b)/;return-1!==e.indexOf("huawei-huawei")?/\bhuawei\-huawei\-([a-z0-9\-]+)/:t.test(e)?t:/\bhuawei[ _\-]?([a-z0-9]+)/}],["lenovo",function(e){return-1!==e.indexOf("lenovo-lenovo")?/\blenovo\-lenovo[ \-]([a-z0-9]+)/:/\blenovo[ \-]?([a-z0-9]+)/}],["zte",function(e){return/\bzte\-[tu]/.test(e)?/\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/:/\bzte[ _\-]?([a-su-z0-9\+]+)/}],["vivo",/\bvivo(?: ([a-z0-9]+))?/],["htc",function(e){return/\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e)?/\bhtc[ _\-]?([a-z0-9 ]+(?= build))/:/\bhtc[ _\-]?([a-z0-9 ]+)/}],["oppo",/\boppo[_]([a-z0-9]+)/],["konka",/\bkonka[_\-]([a-z0-9]+)/],["sonyericsson",/\bmt([a-z0-9]+)/],["coolpad",/\bcoolpad[_ ]?([a-z0-9]+)/],["lg",/\blg[\-]([a-z0-9]+)/],["android",/\bandroid\b|\badr\b/],["blackberry",function(e){return e.indexOf("blackberry")>=0?/\bblackberry\s?(\d+)/:"bb10"}]],r=0;r<o.length;r++){var i=o[r][0],s=o[r][1],c=a(i,s,e);if(c){n=c;break}}return n},k=1;try{a=I(M),n=R(M),o=a.os,r=a.shell,i=a.core,s=a.resolution,c=a.extraName,l=a.extraVersion,d=n.name,m=n.version,u=o?o+(a[o]?a[o]:""):"",p=r?r+parseInt(a[r]):"",g=i,f=s,h=c?c+(l?parseInt(l):""):"",b=d+m}catch(C){}_={p:k,o:O(u),b:O(p),w:O(g),s:f,mx:h,ism:b},e.ali_analytics||(e.ali_analytics={}),e.ali_analytics.ua||(e.ali_analytics.ua={}),e.ali_analytics.ua={version:t,ua_info:_}}}(window),function(){function getBeaconSrc(e){if(isTerminal)return"m";if(is_in_iframe)return isContain(e,"wrating.com")?"k":"y";var t,a,n="o",o=[["ju.taobao.com","4"],["juhuasuan.com","4"],["alipay.com","f"],["china.alibaba.com","6"],["1688.com","6"],["alibaba.com","7"],["aliloan.com","8"],["cnzz.com","9"],["net.cn","a"],["hichina.com","a"],["phpwind.com","b"],["aliyun.com","c"],["tao123.com","d"],["alimama.com","e"],["taobao.com","1"],["tmall.com","2"],["tmall.hk","2"],["etao.com","3"],["*",n]],r=o.length;for(t=0;r>t;t++)if(a=o[t],isContain(e,a[0]))return a[1];return n}function isContain(e,t){return e.indexOf(t)>-1}function isStartWith(e,t){return 0==e.indexOf(t)}function isEndWith(e,t){var a=e.length,n=t.length;return a>=n&&e.indexOf(t)==a-n}function trim(e){return isString(e)?e.replace(/^\s+|\s+$/g,""):""}function tryToDecodeURIComponent(e,t){var a=t||"";if(e)try{a=decodeURIComponent(e)}catch(n){}return a}function obj2param(e){var t,a,n=[];for(t in e)e.hasOwnProperty(t)&&(a=""+e[t],n.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a)));return n.join("&")}function arr2param(e){var t,a,n,o=[],r=e.length;for(n=0;r>n;n++)t=e[n][0],a=e[n][1],o.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a));return o.join("&")}function arr2obj(e){var t,a,n,o={},r=e.length;for(n=0;r>n;n++)t=e[n][0],a=e[n][1],o[t]=a;return o}function objSimpleClone(e){var t,a={};for(t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}function objUpdate(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function param2obj(e){for(var t=e.split("&"),a=0,n=t.length,o={};n>a;a++){var r=t[a],i=r.indexOf("="),s=r.substring(0,i),c=r.substring(i+1);o[s]=tryToDecodeURIComponent(c)}return o}function isNumber(e){return"number"==typeof e}function isUnDefined(e){return"undefined"==typeof e}function isString(e){return"string"==typeof e}function isArray(e){return"[object Array]"===Object.prototype.toString.call(e)}function tryToGetAttribute(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function tryToGetHref(e){var t;try{t=trim(e.getAttribute("href",2))}catch(a){}return t||""}function getExParams(){var e=doc.getElementById("tb-beacon-aplus"),t=tryToGetAttribute(e,"exparams");if(!t)return t;var a,n,o=["taobao.com","tmall.com","etao.com","hitao.com","taohua.com","juhuasuan.com","alimama.com"];if(is_in_iframe){for(n=o.length,a=0;n>a;a++)if(isContain(hostsname,o[a]))return t;t=t.replace(/\buserid=\w*&?/,"")}return t=t.replace(/\buserid=/,"uidaplus=")}function getMetaTags(){return _head_node=_head_node||doc.getElementsByTagName("head")[0],_meta_nodes||(_head_node?_meta_nodes=_head_node.getElementsByTagName("meta"):[])}function parseMetaContent(e,t){var a,n,o=e.split(";"),r=o.length;for(a=0;r>a;a++)n=o[a].split("="),t[trim(n[0])||s_plain_obj]=tryToDecodeURIComponent(trim(n.slice(1).join("=")))}function getCookie(e){var t=doc.cookie.match(new RegExp("(?:^|;)\\s*"+e+"=([^;]+)"));return t?t[1]:""}function makeCacheNum(){return Math.floor(268435456*Math.random()).toString(16)}function init_getMetaMicroscopeData(){var e,t,a,n=getMetaTags(),o=n.length;for(e=0;o>e;e++)t=n[e],"microscope-data"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_microscope_data),is_head_has_meta_microscope_data=s_true);_microscope_data_params=obj2param(_microscope_data),ms_data_page_id=_microscope_data.pageId,ms_data_shop_id=_microscope_data.shopId,ms_data_instance_id=_microscope_data.siteInstanceId,ms_data_siteCategoryId=_microscope_data.siteCategory,ms_prototype_id=_microscope_data.prototypeId,site_instance_id_or_shop_id=ms_data_instance_id||ms_data_shop_id}function getMetaAtpData(){var e,t,a,n=getMetaTags(),o=n.length;for(e=0;o>e;e++)t=n[e],"atp-beacon"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_atp_beacon_data));_atp_beacon_data_params=obj2param(_atp_beacon_data)}function getMetaWaiting(){var e,t,a,n=getMetaTags(),o=n.length;for(e=0;o>e;e++)if(t=n[e],"aplus-waiting"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function getMetaTerminal(){var e,t,a,n=getMetaTags(),o=n.length;for(e=0;o>e;e++)if(t=n[e],"aplus-terminal"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function getMetaRateAhot(){var e,t,a,n=getMetaTags(),o=n.length;for(e=0;o>e;e++)if(t=n[e],"aplus-rate-ahot"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a=a?parseFloat(a):0}function getMetaAhot(){var e,t,a,n=getMetaTags(),o=n.length;for(e=0;o>e;e++)if(t=n[e],"ahot-aplus"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function isOnePage(){var e,t,a=getMetaTags(),n=a.length,o="-1";for(e=0;n>e;e++)if(t=a[e],"isonepage"==tryToGetAttribute(t,"name")){o=tryToGetAttribute(t,"content");break}return o}function getSPMProtocolFromMeta(){var e,t,a,n,o=getMetaTags();for(e=0,t=o.length;t>e;e++)a=o[e],n=tryToGetAttribute(a,"name"),n==s_SPM_ATTR_NAME&&(spm_protocol=tryToGetAttribute(a,s_SPM_DATA_PROTOCOL))}function getMetaSPMData(e){var t,a,n,o,r,i,s=getMetaTags();if(s)for(t=0,a=s.length;a>t;t++)if(o=s[t],r=tryToGetAttribute(o,"name"),r==e)return page_global_spm_id_origin=tryToGetAttribute(o,"content"),page_global_spm_id_origin.indexOf(":")>=0&&(n=page_global_spm_id_origin.split(":"),spm_protocol="i"==n[0]?"i":"u",page_global_spm_id_origin=n[1]),i=tryToGetAttribute(o,s_SPM_DATA_PROTOCOL),i&&(spm_protocol="i"==i?"i":"u"),page_global_is_wangpu=isStartWith(page_global_spm_id_origin,"110"),spm_ab=page_global_is_wangpu?default_ab:page_global_spm_id_origin,s_true;return s_false}function init_getGlobalSPMId(){if(!isUnDefined(spm_ab))return spm_ab;if(spm_a&&spm_b)return spm_a=spm_a.replace(/^{(\w+)}$/g,"$1"),spm_b=spm_b.replace(/^{(\w+)}$/g,"$1"),wh_in_page=s_true,spm_ab=spm_a+"."+spm_b,getSPMProtocolFromMeta(),goldlog.spm_ab=[spm_a,spm_b],spm_ab;{var e;doc.getElementsByTagName("head")[0]}if(getMetaSPMData(s_SPM_ATTR_NAME)||getMetaSPMData("spm-id"),spm_ab=spm_ab||default_ab,!spm_ab)return spm_ab;var t,a=doc.getElementsByTagName("body");return e=spm_ab.split("."),goldlog.spm_ab=e,a=a&&a.length?a[0]:null,a&&(t=tryToGetAttribute(a,s_SPM_ATTR_NAME),t?(spm_ab=e[0]+"."+t,goldlog.spm_ab=[e[0],t]):1==e.length&&(spm_ab=default_ab)),spm_ab}function makePVId(){function e(e){var t="0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ",a="0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";return 1==e?t.substr(Math.floor(60*Math.random()),1):2==e?a.substr(Math.floor(60*Math.random()),1):"0"}var t="g_aplus_pv_id",a="",n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",o=!1;if(!win[t]){for(;a.length<6;){var r=n.substr(Math.floor(62*Math.random()),1);!o&&a.length<=2&&("g"==r.toLowerCase()||"l"==r.toLowerCase())&&(0==a.length&&"g"==r.toLowerCase()?Math.random()<.5&&(r=e(1),o=!0):1==a.length&&"l"==r.toLowerCase()&&"g"==a.charAt(0).toLowerCase()&&(r=e(2),o=!0)),a+=r}win[t]=a}return win[t]}function makeChkSum(e){e=(e||"").split("#")[0].split("?")[0];var t=e.length,a=function(e){var t,a=e.length,n=0;for(t=0;a>t;t++)n=31*n+e.charCodeAt(t);return n};return t?a(t+"#"+e.charCodeAt(t-1)):-1}function init_aplusQueue(){var e,t=win[s_aplus_queue];t.push=e=function(){for(var e,a,n=0,o=arguments.length;o>n;n++)e=arguments[n],isString(e)?goldlog.send(hjlj_beacon_base+e):isArray(e)&&"push"!=(a=e[0])&&(t[a]=t[a]||[]).push(e.slice(1))};for(var a;a=t.shift();)e(a)}function onDOMReady(e){var t=win.KISSY;t?t.ready(e):win.jQuery?jQuery(doc).ready(e):"complete"===doc.readyState?e():addEventListener(win,"load",e)}function recordValInWindowName(){var e,t;!is_in_iframe&&is_https&&(is_login_page&&page_referrer?(e=page_referrer,t=nameStorage.getItem(KEY.NAME_STORAGE.REFERRER_PV_ID)):(e=page_url,t=pvid),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER,e),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER_PV_ID,t))}function addEventListener(e,t,a){e[onevent]((atta?"on":"")+t,function(e){e=e||win.event;var t=e.target||e.srcElement;a(e,t)},s_false)}function atp_inIframeException(){var e,t,a=["/theme/info/info","/promo/co_header.php","fast_buy.htm","/add_collection.htm","/taobao_digital_iframe","/promo/co_header_taoinfo.php","/list_forum","/theme/info/info"];for(e=0,t=a.length;t>e;e++)if(-1!=pathname.indexOf(a[e]))return s_true;var n=/^https?:\/\/[\w\.]+\.taobao\.com/i;return!n.test(page_referrer)}function processGoldlogQueue(){function e(){var e,t,a,n=win[s_GOLDMINER_QUEUE];if(n&&isArray(n)&&n.length)for(;e=n.shift();)if(e&&e.action&&isString(e.action)&&e.arguments&&isArray(e.arguments)){for(a=e.action.split("."),t=win;a.length;)if(t=t[a.shift()],!t)return;if("function"==typeof t)try{t.apply(t,e.arguments)}catch(o){}}}try{e()}catch(t){}}function init_watchGoldlogQueue(){var e=function(){try{processGoldlogQueue(),setTimeout(e,200)}catch(t){}};e(),addEventListener(win,"beforeunload",processGoldlogQueue)}function cleanParams(e){var t,a,n,o,r=[],i={};for(t=e.length-1;t>=0;t--)a=e[t],n=a[0],n!=s_plain_obj&&i.hasOwnProperty(n)||(o=a[1],("aplus"==n||""!=o)&&(r.unshift([n,o]),i[n]=1));return r}function cleanParamsForWindvane(e){var t,a,n,o,r=[],i={logtype:!0,cache:!0,scr:!0,"spm-cnt":!0};for(t=e.length-1;t>=0;t--)a=e[t],n=a[0],o=a[1],isStartWith(n,s_plain_obj)||i[n]||r.unshift([n,o]);return r}function tblogSend(e,t){var a,n;if(t){if(isWindVane&&isTerminal){n=cleanParamsForWindvane(cleanParams(t));var o,r={},i=(getSPMFromUrl(page_url),getSPMFromUrl(page_referrer)),s=isOnePage(),c=s.split("|"),l=c[0],d=c[1]?c[1]:"";try{var a=arr2obj(n);o=JSON.stringify(a),"{}"==o&&(o="")}catch(m){o=""}r.functype="2001",r.urlpagename=d,r.url=loc.href,r.spmcnt=(spm_ab||"0.0")+".0.0",r.spmpre=i||"",r.lzsid="",r.cna=acookie_cna||"",r.extendargs=o,r.isonepage=l,WindVane.call("WVTBUserTrack","toUT",r),win[s_goldlog].windVaneData=r}return isUseLSProxy()?useLSProxy({url:makeUrl(e,t),js:js_fdc_lsproxy,referrer:loc.href}):goldlog.send(e,t)}}function mkPlainKey(){return s_plain_obj+Math.random()}function wp_bucketId(e,t){var a,n=2146271213;for(a=0;a<e.length;a++)n=(n<<5)+n+e.charCodeAt(a);return(65535&n)%t}function getSPMFromUrl(e){var t,a=e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)"));return a&&(t=a[1])&&5==t.split(".").length?t:null}function ifAdd(e,t){var a,n,o,r,i=t.length;for(a=0;i>a;a++)n=t[a],o=n[0],r=n[1],r&&e.push([o,r])}function init_loadScripts(){Math.random()<1e-4&&addScriptFromFDC("sample.js?v=131028");var e="/alilog/mlog/??spm.js,spmact.js?v=141204";addScript("//g.alicdn.com"+e,"//g.alicdn.com"+e);var t="laiwang",a="ilw/a/lwlog.js?v=140709";isContain(loc.href.split("?")[0],t)&&addScript("//g.alicdn.com/"+a,"//g.alicdn.com/"+a);var n="alilog/mlog/xwj_heat.js?v=1503233",o=getMetaRateAhot()||CONFIG.RATE.AHOT_SAMPLING;(Math.random()<o||isAhot||CONFIG.DEBUG.AHOT)&&addScript("//g.alicdn.com/"+n,"//g.alicdn.com/"+n),ms_data_instance_id&&ms_prototype_id&&ms_prototype_id.match(/^[124]$/)&&ms_data_shop_id&&addScriptFromFDC("wp-beacon.js?v=131014"),onDOMReady(function(){setTimeout(function(){addScript("//g.alicdn.com/sd/data_sufei/1.4.5/aplus/index.js","//g.alicdn.com/sd/data_sufei/1.4.5/aplus/index.js")},1e3)})}function compareVersion(e,t){e=e.toString().split("."),t=t.toString().split(".");for(var a=0;a<e.length||a<t.length;a++){var n=parseInt(e[a],10),o=parseInt(t[a],10);if(window.isNaN(n)&&(n=0),window.isNaN(o)&&(o=0),o>n)return-1;if(n>o)return 1}return 0}function callback(e,t){isAndroid&&compareVersion(osVersion,"2.4.0")<0?setTimeout(function(){e&&e(t)},1):e&&e(t)}function init_windVane(){var WV_Core={call:function(e,t,a,n,o,r){var i,s;return lib.promise&&(lib.promise.deferred?s=lib.promise.deferred():lib.promise.defer&&(s=lib.promise.defer())),i=r>0?setTimeout(function(){WV_Core.onFailure(i,{ret:"TIMEOUT"})},r):WV_Private.getSid(),a.sid=i,WV_Private.registerCall(i,n,o,s),isAndroid?compareVersion(wvVersion,"2.7.0")>=0?WV_Private.callMethodByPrompt(e,t,WV_Private.buildParam(a),i+""):WindVane_Native&&WindVane_Native.callMethod&&WindVane_Native.callMethod(e,t,WV_Private.buildParam(a),i+""):isIOS&&WV_Private.callMethodByIframe(e,t,WV_Private.buildParam(a),i+""),s?s.promise():void 0},fireEvent:function(e,t){var a=doc.createEvent("HTMLEvents");a.initEvent(e,!1,!0),a.param=WV_Private.parseParam(t),doc.dispatchEvent(a)},getParam:function(e){return WV_Private.params[PARAM_PREFIX+e]||""},onSuccess:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),n=a.success,o=a.deferred,r=WV_Private.parseParam(t);callback(function(e){n&&n(e),o&&o.resolve(e)},r.value||r),WV_Private.onComplete(e)},onFailure:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),n=a.failure,o=a.deferred,r=WV_Private.parseParam(t);callback(function(e){n&&n(e),o&&o.reject(e)},r),WV_Private.onComplete(e)}},WV_Private={params:{},buildParam:function(e){return e&&"object"==typeof e?JSON.stringify(e):e||""},parseParam:function(str){if(str&&"string"==typeof str)try{obj=JSON.parse(str)}catch(e){obj=eval("("+str+")")}else obj=str||{};return obj},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+inc++},registerCall:function(e,t,a,n){t&&(callbackMap[SUCCESS_PREFIX+e]=t),a&&(callbackMap[FAILURE_PREFIX+e]=a),n&&(callbackMap[DEFERRED_PREFIX+e]=n)},unregisterCall:function(e){var t=SUCCESS_PREFIX+e,a=FAILURE_PREFIX+e,n=DEFERRED_PREFIX+e,o={success:callbackMap[t],failure:callbackMap[a],deferred:callbackMap[n]};return delete callbackMap[t],delete callbackMap[a],o.deferred&&delete callbackMap[n],o},useIframe:function(e,t){var a=IFRAME_PREFIX+e,n=iframePool.pop();n||(n=doc.createElement("iframe"),n.setAttribute("frameborder","0"),n.style.cssText="width:0;height:0;border:0;display:none;"),n.setAttribute("id",a),n.setAttribute("src",t),n.parentNode||setTimeout(function(){doc.body.appendChild(n)},5)},retrieveIframe:function(e){var t=IFRAME_PREFIX+e,a=doc.querySelector("#"+t);iframePool.length>=iframeLimit?doc.body.removeChild(a):iframePool.push(a)},callMethodByIframe:function(e,t,a,n){var o={"selfParam=1":1,sid:this.parseParam(a).sid},o=this.buildParam(o),r=LOCAL_PROTOCOL+"://"+e+":"+n+"/"+t+"?"+o;this.params[PARAM_PREFIX+n]=a,this.useIframe(n,r)},callMethodByPrompt:function(e,t,a,n){var o=LOCAL_PROTOCOL+"://"+e+":"+n+"/"+t+"?"+a,r=WV_PROTOCOL+":";this.params[PARAM_PREFIX+n]=a,window.prompt(o,r)},onComplete:function(e){isIOS&&this.retrieveIframe(e),delete this.params[PARAM_PREFIX+e]}};for(var key in WV_Core)win[s_goldlog][key]=WindVane[key]=WV_Core[key]}function addScript(e,t){var a=doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=is_https?t:e,doc.getElementsByTagName("head")[0].appendChild(a)}function addScriptFromFDC(e){var t="//assets.alicdn.com/s/fdc/",a="//assets.alicdn.com/s/fdc/";addScript(t+e,a+e)}function createIframe(e,t){var a=document.createElement("iframe");a.style.width="1px",a.style.height="1px",a.style.position="absolute",a.style.display="none",a.src=e,t&&(a.name=t);var n=document.getElementsByTagName("body")[0];return n.appendChild(a),a}function checkLS(){var e=!1;if("localStorage"in win&&null!=win.localStorage)try{localStorage.setItem("test","test"),localStorage.removeItem("test"),e=!0}catch(t){}return e}function isUseLSProxy(){if(CONFIG.DEBUG.LS_PROXY)return!0;var e=navigator.userAgent,t=e.split(" Safari/");return 2!=t.length?!1:checkLS()&&win.postMessage&&t[1].match(/[\d\.]+/)&&e.indexOf("AppleWebKit")>-1&&e.match(/\bVersion\/\d+/)&&!e.match(/\bChrome\/\d+/)&&!e.match(/TencentTraveler|QQBrowser/)&&!e.match(/UCBrowser|UCWEB/)}function useLSProxy(e){{var t="//mmstat.alicdn.com/aplus-proxy.html?v=20130115";createIframe(t,JSON.stringify(e))}win.addEventListener&&win.JSON&&win.addEventListener("message",function(e){function t(){var e=hostsname.split("."),t=e.length;return t>1?e[t-2]+"."+e[t-1]:hostsname}var a=e.data;try{a=JSON.parse(a)}catch(n){return}if(a[0]&&"cna"==a[0].k)for(var o,r,i,s=0,c=a.length;c>s;s++)o=a[s],i=o.k,r=encodeURIComponent(i)+"="+("cna"==i?o.v:encodeURIComponent(o.v))+"; domain=."+t()+"; path=/; expires="+new Date(o.t).toGMTString(),doc.cookie=r})}function makeUrl(e,t){var a=-1==e.indexOf("?")?"?":"&",n=t?isArray(t)?arr2param(t):obj2param(t):"";return n?e+a+n:e}function isDpp(){return isContain(getExParams(),"atp_isdpp")}function inAntiSpamWhiteList(){for(var e=!1,t=["item.taobao.com","detail.tmall.com","list.tmall.com","s.taobao.com","list.taobao.com","tw.taobao.com","detail.tmall.hk"],a=0;a<t.length;a++){var n=t[a];if(hostsname.indexOf(n)>-1){e=!0;break}}return isDpp()&&(e=!0),e}var win=window,doc=document,time_start=(new Date).getTime(),s_aplus_queue="_ap",_k="g_tb_aplus_loaded",_launch="g_tb_aplus_launch";if(win[s_aplus_queue]||(win[s_aplus_queue]=[]),!doc.getElementsByTagName("body").length)return setTimeout(arguments.callee,50),void 0;if(!win[_k]){win[_k]=1;var js_fdc_lsproxy="//g.alicdn.com/alilog/mlog/lsproxy.js?v=20150514",CONFIG={VERSION:{DEFAULT:"3",MANUAL:9,MANUAL_TIMEOUT:7},TIME:{MANUAL_TIMEOUT:6e3},RATE:{AHOT_SAMPLING:.1},DEBUG:{AHOT:location.search.indexOf("ap-debug-ahot")>-1,ANTI_SPAM:location.search.indexOf("ap-debug-antispam")>-1,LS_PROXY:location.search.indexOf("ap-debug-lsproxy")>-1}},KEY={NAME_STORAGE:{REFERRER:"wm_referrer",REFERRER_PV_ID:"refer_pv_id"}},VERSION=CONFIG.VERSION.DEFAULT,loc=location,loc_protocol=loc.protocol,is_https="https:"==loc_protocol,is_in_iframe=parent!==self,use_protocol=is_https?loc_protocol:"http:",default_ab="0.0",pathname=loc.pathname,hostsname=loc.hostname,isAhot=getMetaAhot(),isPad=/TB\-PD/i.test(navigator.userAgent),isTerminal=isPad?!0:getMetaTerminal(),tblog_beacon_base=use_protocol+"//log.mmstat.com/",hjlj_beacon_base=is_https?tblog_beacon_base:use_protocol+(isTerminal?"//wgo.mmstat.com/":"//gm.mmstat.com/"),tblog_beacon_url=tblog_beacon_base+getBeaconSrc(loc.hostname)+".gif",tblog_data=[["logtype",is_in_iframe?0:1]],tblog_extra_data=[],page_url=loc.href,loc_hash=loc.hash,page_referrer=doc.referrer,is_login_page=is_https&&(page_url.indexOf("login.taobao.com")>=0||page_url.indexOf("login.tmall.com")>=0),atta=!!doc.attachEvent,s_attachEvent="attachEvent",s_addEventListener="addEventListener",onevent=atta?s_attachEvent:s_addEventListener,s_false=!1,s_true=!0,s_plain_obj="::-plain-::",s_SPM_ATTR_NAME="data-spm",s_SPM_DATA_PROTOCOL="data-spm-protocol",s_GOLDMINER_QUEUE="goldlog_queue",refer_pv_id,pvid=makePVId(),_head_node,_meta_nodes,acookie_cna=getCookie("cna"),_microscope_data={},_microscope_data_params,_atp_beacon_data={},_atp_beacon_data_params,site_instance_id_or_shop_id,ms_data_shop_id,ms_data_instance_id,ms_data_page_id,ms_data_siteCategoryId,ms_prototype_id,wh_in_page=s_false,spm_a=win._SPM_a,spm_b=win._SPM_b,spm_protocol,spm_ab,page_global_spm_id_origin,page_global_is_wangpu,is_head_has_meta_microscope_data=s_false,goldlog,s_goldlog="goldlog",ua=navigator.userAgent,lib=win.lib||(win.lib={}),isIOS=/iPhone|iPad|iPod/i.test(ua),isAndroid=/Android/i.test(ua),isWindVane=/WindVane/i.test(ua),osVersion=ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),wvVersion=ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),hasOwnProperty=Object.prototype.hasOwnProperty,WindVane={},WindVane_Native=win.WindVane_Native,callbackMap={},inc=1,iframePool=[],iframeLimit=3,LOCAL_PROTOCOL="hybrid",WV_PROTOCOL="wv_hybrid",IFRAME_PREFIX="iframe_",SUCCESS_PREFIX="suc_",FAILURE_PREFIX="err_",DEFERRED_PREFIX="defer_",PARAM_PREFIX="param_",waitingMeta=getMetaWaiting(),hasWaitingMeta=1==waitingMeta,nameStorage=function(){function e(){var e,t=[],r=!0;for(var d in m)m.hasOwnProperty(d)&&(r=!1,e=m[d]||"",t.push(l(d)+s+l(e)));a.name=r?n:o+l(n)+i+t.join(c)}function t(e,t,a){e&&(e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,function(t){a.call(e,t)}))}var a=window;if(a.nameStorage)return a.nameStorage;var n,o="nameStorage:",r=/^([^=]+)(?:=(.*))?$/,i="?",s="=",c="&",l=encodeURIComponent,d=decodeURIComponent,m={},_={};return function(e){if(e&&0===e.indexOf(o)){var t=e.split(/[:?]/);t.shift(),n=d(t.shift())||"";for(var a,i,s,l=t.join(""),_=l.split(c),u=0,p=_.length;p>u;u++)a=_[u].match(r),a&&a[1]&&(i=d(a[1]),s=d(a[2])||"",m[i]=s)}else n=e||""}(a.name),_.setItem=function(t,a){t&&"undefined"!=typeof a&&(m[t]=String(a),e())},_.getItem=function(e){return m.hasOwnProperty(e)?m[e]:null},_.removeItem=function(t){m.hasOwnProperty(t)&&(m[t]=null,delete m[t],e())},_.clear=function(){m={},e()},_.valueOf=function(){return m},_.toString=function(){var e=a.name;return 0===e.indexOf(o)?e:o+e},t(a,"beforeunload",function(){e()}),_}();page_referrer=doc.referrer||nameStorage.getItem(KEY.NAME_STORAGE.REFERRER)||"",osVersion=osVersion?(osVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",wvVersion=wvVersion?(wvVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",goldlog={version:VERSION,pvid:pvid,referrer:page_referrer,_d:{},_microscope_data:_microscope_data,on:addEventListener,DOMReady:onDOMReady,getCookie:getCookie,tryToGetAttribute:tryToGetAttribute,tryToGetHref:tryToGetHref,isNumber:isNumber,nameStorage:nameStorage,send:function(e,t){var a=new Image,n="_img_"+Math.random(),o=makeUrl(e,t);return win[n]=a,a.onload=a.onerror=function(){win[n]=null},a.src=o,a=null,o},emit:function(e,t){var a,n="ued.1.1.2?type=9";return isArray(t)?a=[["_gm:id",e]].concat(t):(a=objSimpleClone(t),a["_gm:id"]=e),goldlog.send(hjlj_beacon_base+n,a)},trace:function(e,t,a,n){goldlog.record(e,t,a,n)},record:function(e,t,a,n){n=arguments[3]||"";var o,r,i="?",s=s_false,c="",l=(spm_ab||"0.0")+".0.0."+pvid,d="//ac.mmstat.com/";if("ac"==e)o=d+"1.gif",s=isStartWith(n,"A")&&n.substr(1)==makeChkSum(e);else if(isStartWith(e,"ac-"))o=d+e.substr(3),s=isStartWith(n,"A")&&n.substr(1)==makeChkSum(e);else if(isStartWith(e,"/"))s=isStartWith(n,"H")&&n.substr(1)==makeChkSum(e),o=hjlj_beacon_base+e.substr(1),r=s_true,c+="&spm-cnt="+l;else{if(!isEndWith(e,".gif"))return s_false;o=tblog_beacon_base+e}if(!s&&"%"!=n&&makeChkSum(page_url)!=n)return s_false;if(o+=i+"cache="+makeCacheNum()+"&gmkey="+encodeURIComponent(t)+"&gokey="+encodeURIComponent(a)+"&cna="+acookie_cna+"&isbeta="+VERSION+c,r&&(o+="&logtype=2"),isWindVane&&isTerminal){var m,_={},u={gmkey:t,gokey:a,isbeta:VERSION},p=isOnePage(),g=p.split("|"),f=g[0],h=g[1]?g[1]:"";try{m=JSON.stringify(u),"{}"==m&&(m="")}catch(b){m=""}_.functype="2101",_.logkey=e,_.logkeyargs=m,_.urlpagename=h,_.url=loc.href,_.cna=acookie_cna||"",_.extendargs="",_.isonepage=f,WindVane.call("WVTBUserTrack","toUT",_)}return isUseLSProxy()?useLSProxy({url:o,js:js_fdc_lsproxy,referrer:loc.href}):goldlog.send(o)},launch:function(e){if(!win[_launch]){win[_launch]=s_true;var t,a,n=VERSION,o=getExParams();hasWaitingMeta&&(n=CONFIG.VERSION.MANUAL,e&&e.isWait&&(n=CONFIG.VERSION.MANUAL_TIMEOUT));for(t in e)e.hasOwnProperty(t)&&(a=e[t])&&tblog_data.push([t,a]);if(tblog_data.push(["isbeta",n]),tblog_data.push([mkPlainKey(),o]),tblog_data=tblog_data.concat(tblog_extra_data),win.g_aplus_pv_req=tblogSend(tblog_beacon_url,tblog_data),inAntiSpamWhiteList()||CONFIG.DEBUG.ANTI_SPAM){var r=param2obj(o).asid,i=page_referrer,s=obj2param({asid:r,pre:i});goldlog.record("/ahot.1.9","",s,"H1733420")}}}},win[s_goldlog]=goldlog,win.goldminer={record:goldlog.emit},win[s_GOLDMINER_QUEUE]&&isArray(win[s_GOLDMINER_QUEUE])||(win[s_GOLDMINER_QUEUE]=[]),isTerminal||init_watchGoldlogQueue(),init_getMetaMicroscopeData(),init_getGlobalSPMId(),init_aplusQueue(),init_loadScripts(),isWindVane&&isTerminal&&init_windVane(),function(){var e,t,a,n=getCookie("tracknick"),o=getCookie("thw"),r=/\btanx\.com$/.test(hostsname)?getCookie("cnaui"):"",i=getSPMFromUrl(page_url),s=getSPMFromUrl(page_referrer),c=win.ali_analytics&&win.ali_analytics.ua&&win.ali_analytics.ua.ua_info||{};if(loc_hash&&0==loc_hash.indexOf("#")&&(loc_hash=loc_hash.substr(1)),!is_in_iframe||atp_inIframeException()){("3"==ms_prototype_id||"5"==ms_prototype_id)&&(t=getCookie("t"),a=t?wp_bucketId(t,20):""),e=[[mkPlainKey(),"title="+escape(doc.title)],["pre",page_referrer],["cache",makeCacheNum()],["scr",screen.width+"x"+screen.height]],acookie_cna&&e.push([mkPlainKey(),"cna="+acookie_cna]),n&&e.push([mkPlainKey(),"nick="+n]),ifAdd(e,[["wm_pageid",ms_data_page_id],["wm_prototypeid",ms_prototype_id],["wm_sid",ms_data_shop_id],["spm-url",i],["spm-pre",s],["cnaui",r]]),e.push(["spm-cnt",(spm_ab||"0.0")+".0.0."+pvid]),tblog_data=tblog_data.concat(e),ifAdd(tblog_extra_data,[["thw",o],["bucket_id",a],["urlokey",loc_hash],["wm_instanceid",ms_data_instance_id],["p",c.p],["o",c.o],["b",c.b],["s",c.s],["w",c.w],["mx",c.mx],["ism",c.ism]]),hasWaitingMeta?setTimeout(function(){goldlog.launch({isWait:!0})},CONFIG.TIME.MANUAL_TIMEOUT):goldlog.launch();var l=spm_ab.split(".")[0];is_in_iframe||isTerminal||"a21bo.7724922"!=spm_ab&&"2013"!=l&&"a220o"!=l||createIframe("//cookiemapping.wrating.com/link.html")}if(is_in_iframe){getMetaAtpData();var d,m=_atp_beacon_data.on,_="1"==m?"//ac.mmstat.com/y.gif":tblog_beacon_url,_=isContain(hostsname,"wrating.com")?tblog_beacon_url:_;"1"!=m&&"2"!=m||!(d=_atp_beacon_data.chksum)||d!==makeChkSum(page_url).toString()||tblogSend(_,tblog_data)}addEventListener(win,"beforeunload",function(){recordValInWindowName()})}();var time_end=(new Date).getTime();setTimeout(function(){Math.random()>1e-4||goldlog.emit("global_sample",{type:"timer",t:time_end-time_start})},1)}}();