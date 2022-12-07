(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",u="day",a="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,o=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:a,d:u,D:d,h:o,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",S={};S[g]=v;var D=function(t){return t instanceof x},M=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();S[s]&&(i=s),n&&(S[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var u=e.name;S[u]=e,i=u}return!r&&i&&(g=i),i||!r&&g},_=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=y;w.l=M,w.i=D,w.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function v(t){this.$L=M(t.locale,null,!0),this.parse(t)}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return _(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<_(t)},p.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!w.u(e)||e,l=w.p(t),h=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case c:return r?h(1,v):h(0,v+1);case a:var g=this.$locale().weekStart||0,S=($<g?$+7:$)-g;return h(r?p-S:p+(6-S),v);case u:case d:return m(y+"Hours",0);case o:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,a=w.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[u]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[o]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[a],m=a===u?this.$D+(e-this.$W):e;if(a===c||a===f){var $=this.clone().set(d,1);$.$d[h](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[w.p(t)]()},p.add=function(r,l){var d,h=this;r=Number(r);var m=w.p(l),$=function(t){var e=_(h);return w.w(e.date(e.date()+Math.round(t*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===u)return $(1);if(m===a)return $(7);var v=(d={},d[s]=e,d[o]=n,d[i]=t,d)[m]||1,p=this.$d.getTime()+r*v;return w.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,o=this.$m,u=this.$M,a=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return w.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:w.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,a,2),ddd:l(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:w.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,h){var m,$=w.p(d),v=_(r),p=(v.utcOffset()-this.utcOffset())*e,y=this-v,g=w.m(this,v);return g=(m={},m[f]=g/12,m[c]=g,m[l]=g/3,m[a]=(y-p)/6048e5,m[u]=(y-p)/864e5,m[o]=y/n,m[s]=y/e,m[i]=y/t,m)[$]||y,h?g:w.a(g)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return S[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),b=x.prototype;return _.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",u],["$M",c],["$y",f],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,x,_),t.$i=!0),_},_.locale=M,_.isDayjs=D,_.unix=function(t){return _(1e3*t)},_.en=S[g],_.Ls=S,_.p={},_}()},9133:function(t){t.exports=function(){"use strict";return function(t,e,n){e.prototype.isTomorrow=function(){var t="YYYY-MM-DD",e=n().add(1,"day");return this.format(t)===e.format(t)}}}()},8186:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/golinge",function(){return n(7398)}])},7398:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e),n.d(e,{__N_SSG:function(){return _},default:function(){return w}});var s=n(5893),o=n(7296),u=n.n(o),a=function(t){var e=t.id,n=t.delayValue,r=t.fnUpdateSelection;return(0,s.jsx)("div",{className:u().selector,children:(0,s.jsx)("input",{type:"number",id:e,value:n,min:"0",max:"24",step:"1",onChange:function(t){return r(t.target.value)}})})},c=n(9345),l=n.n(c),f=function(t){var e=t.id,n=t.timeValue,r=t.fnUpdateSelection;return(0,s.jsx)("div",{className:l().selector,children:(0,s.jsx)("input",{type:"time",id:e,value:n,onChange:function(t){return r(t.target.value)}})})},d=n(310),h=n.n(d),m=function(t){var e=t.text;return(0,s.jsx)("div",{children:(0,s.jsx)("h2",{className:h().subtitle,children:e})})},$=n(693),v=n.n($),p=function(){return(0,s.jsx)("div",{children:(0,s.jsx)("h1",{className:v().title,children:"Go Linge !"})})},y=n(7294),g=n(7484),S=n.n(g),D=n(9133),M=n.n(D),_=!0,w=function(t){t.programs;var e=S()(new Date).format("HH:mm"),n=(0,y.useState)(e),r=n[0],o=n[1],u=(0,y.useState)("01:30"),c=u[0],l=u[1],d=(0,y.useState)(),h=d[0],$=d[1],v=(0,y.useState)(),g=v[0],D=v[1],_=function(){S().extend(M());var t=S()(new Date),e=i(r.split(":"),2),n=e[0],s=e[1];console.log("startDateHours",n,"startDateMinutes",s),t=t.set("hour",n).set("minute",s),console.log("startDate is now:",t);var o=S()(t);o=o.add(x,"hour");var u=i(c.split(":"),2),a=u[0],l=u[1];o=o.add(a,"hour").add(l,"minutes"),console.log("endDate is now:",o),g=o.format("HH:mm"),console.log("endTimeFormatted",g),$(void 0),o.isTomorrow()&&($("demain"),console.log("endDate isTomorrow")),D(g)},w=(0,y.useState)(0),x=w[0],b=w[1];return(0,y.useEffect)((function(){_()}),[]),(0,s.jsx)("div",{children:(0,s.jsxs)(y.StrictMode,{children:[(0,s.jsx)(p,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"startTime",children:"Modifier l'heure de d\xe9marrage"}),(0,s.jsx)(f,{id:"startTime",timeValue:r,fnUpdateSelection:function(t){r=t,console.log("handleStartTimeChange from home",r),_(),o(r)}})]}),(0,s.jsx)(m,{text:"Programme sur-mesure"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"duration",children:"Dur\xe9e du programme sur-mesure"}),(0,s.jsx)(f,{id:"duration",timeValue:c,fnUpdateSelection:function(t){c=t,console.log("durationFormatted from home",c),_(),l(c)}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"delay",children:"D\xe9part diff\xe9r\xe9 dans "}),(0,s.jsx)(a,{id:"delay",delayValue:x,fnUpdateSelection:function(t){x=t,console.log("delayFormatted",x),_(),b(x)}})," heures"]}),(0,s.jsxs)("div",{id:"endTime",children:["Fin du programme ",h," \xe0 ",g]})]})})}},7296:function(t){t.exports={selector:"delay-input_selector__DDCKs"}},9345:function(t){t.exports={selector:"hour-selector_selector__ZkwzD"}},310:function(t){t.exports={subtitle:"subtitle_subtitle__WKz5F"}},693:function(t){t.exports={title:"title_title__0531T"}}},function(t){t.O(0,[774,888,179],(function(){return e=8186,t(t.s=e);var e}));var e=t.O();_N_E=e}]);