"use strict";!function(s){var n={en:{day:"day",hour:"hour",minute:"minute",second:"second",days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"},fr:{day:"jour",hour:"heure",minute:"minute",second:"seconde",days:"jours",hours:"heures",minutes:"minutes",seconds:"secondes"}};s.fn.durationPicker=function(a){var e={lang:"en",showSeconds:!1,showDays:!0},t=s.extend({},e,a);this.each(function(a,e){function o(s){return"string"==typeof t.lang?n[t.lang][s]:t.lang[s]}function d(n,a,e){var t=s("<input>",{class:"form-control input-sm",type:"number",min:0,value:0,disabled:v}).change(l);e&&t.attr("max",e),c[n]=t;var d=s("<div>",{id:"bdp-"+n+"-label",text:o(n)});return h[n]=d,s("<div>",{class:"bdp-block "+(a?"hidden":""),html:[t,d]})}function r(s,n){var a=1===s?n.substring(0,n.length-1):n;h[n].text(o(a))}function u(){var s=b+60*p+60*y*60+24*m*60*60;e.val(s),e.change(),r(m,"days"),r(y,"hours"),r(p,"minutes"),r(b,"seconds"),c.days.val(m),c.hours.val(y),c.minutes.val(p),c.seconds.val(b),"function"==typeof t.onChanged&&t.onChanged(e.val())}function i(){""===e.val()&&e.val(0);var s=parseInt(e.val(),10);b=s%60,s=Math.floor(s/60),p=s%60,s=Math.floor(s/60),t.showDays?(y=s%24,m=Math.floor(s/24)):(y=s,m=0),u()}function l(){m=parseInt(c.days.val(),10)||0,y=parseInt(c.hours.val(),10)||0,p=parseInt(c.minutes.val(),10)||0,b=parseInt(c.seconds.val(),10)||0,u()}if(e=s(e),"1"!==e.data("bdp")){var c=[],h=[],v=e.hasClass("disabled")||"disabled"===e.attr("disabled"),f=s("<div>",{class:"bdp-input",html:[d("days",!t.showDays),d("hours",!1,t.showDays?23:99999),d("minutes",!1,59),d("seconds",!t.showSeconds,59)]});e.after(f).hide().data("bdp","1");var m=0,y=0,p=0,b=0;i()}})}}(jQuery);
