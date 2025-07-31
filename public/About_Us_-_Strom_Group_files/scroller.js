var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,t,i,r,u){return jQuery.easing[jQuery.easing.def](n,t,i,r,u)},easeInQuad:function(n,t,i,r,u){return r*(t/=u)*t+i},easeOutQuad:function(n,t,i,r,u){return-r*(t/=u)*(t-2)+i},easeInOutQuad:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t+i:-r/2*(--t*(t-2)-1)+i},easeInCubic:function(n,t,i,r,u){return r*(t/=u)*t*t+i},easeOutCubic:function(n,t,i,r,u){return r*((t=t/u-1)*t*t+1)+i},easeInOutCubic:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t+i:r/2*((t-=2)*t*t+2)+i},easeInQuart:function(n,t,i,r,u){return r*(t/=u)*t*t*t+i},easeOutQuart:function(n,t,i,r,u){return-r*((t=t/u-1)*t*t*t-1)+i},easeInOutQuart:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t+i:-r/2*((t-=2)*t*t*t-2)+i},easeInQuint:function(n,t,i,r,u){return r*(t/=u)*t*t*t*t+i},easeOutQuint:function(n,t,i,r,u){return r*((t=t/u-1)*t*t*t*t+1)+i},easeInOutQuint:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t*t+i:r/2*((t-=2)*t*t*t*t+2)+i},easeInSine:function(n,t,i,r,u){return-r*Math.cos(t/u*(Math.PI/2))+r+i},easeOutSine:function(n,t,i,r,u){return r*Math.sin(t/u*(Math.PI/2))+i},easeInOutSine:function(n,t,i,r,u){return-r/2*(Math.cos(Math.PI*t/u)-1)+i},easeInExpo:function(n,t,i,r,u){return t==0?i:r*Math.pow(2,10*(t/u-1))+i},easeOutExpo:function(n,t,i,r,u){return t==u?i+r:r*(-Math.pow(2,-10*t/u)+1)+i},easeInOutExpo:function(n,t,i,r,u){return t==0?i:t==u?i+r:(t/=u/2)<1?r/2*Math.pow(2,10*(t-1))+i:r/2*(-Math.pow(2,-10*--t)+2)+i},easeInCirc:function(n,t,i,r,u){return-r*(Math.sqrt(1-(t/=u)*t)-1)+i},easeOutCirc:function(n,t,i,r,u){return r*Math.sqrt(1-(t=t/u-1)*t)+i},easeInOutCirc:function(n,t,i,r,u){return(t/=u/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+i:r/2*(Math.sqrt(1-(t-=2)*t)+1)+i},easeInElastic:function(n,t,i,r,u){var f=1.70158,e=0,o=r;return t==0?i:(t/=u)==1?i+r:(e||(e=u*.3),o<Math.abs(r)?(o=r,f=e/4):f=e/(2*Math.PI)*Math.asin(r/o),-(o*Math.pow(2,10*(t-=1))*Math.sin((t*u-f)*2*Math.PI/e))+i)},easeOutElastic:function(n,t,i,r,u){var f=1.70158,e=0,o=r;return t==0?i:(t/=u)==1?i+r:(e||(e=u*.3),o<Math.abs(r)?(o=r,f=e/4):f=e/(2*Math.PI)*Math.asin(r/o),o*Math.pow(2,-10*t)*Math.sin((t*u-f)*2*Math.PI/e)+r+i)},easeInOutElastic:function(n,t,i,r,u){var f=1.70158,e=0,o=r;return t==0?i:(t/=u/2)==2?i+r:(e||(e=u*.3*1.5),o<Math.abs(r)?(o=r,f=e/4):f=e/(2*Math.PI)*Math.asin(r/o),t<1)?-.5*o*Math.pow(2,10*(t-=1))*Math.sin((t*u-f)*2*Math.PI/e)+i:o*Math.pow(2,-10*(t-=1))*Math.sin((t*u-f)*2*Math.PI/e)*.5+r+i},easeInBack:function(n,t,i,r,u,f){return f==undefined&&(f=1.70158),r*(t/=u)*t*((f+1)*t-f)+i},easeOutBack:function(n,t,i,r,u,f){return f==undefined&&(f=1.70158),r*((t=t/u-1)*t*((f+1)*t+f)+1)+i},easeInOutBack:function(n,t,i,r,u,f){return(f==undefined&&(f=1.70158),(t/=u/2)<1)?r/2*t*t*(((f*=1.525)+1)*t-f)+i:r/2*((t-=2)*t*(((f*=1.525)+1)*t+f)+2)+i},easeInBounce:function(n,t,i,r,u){return r-jQuery.easing.easeOutBounce(n,u-t,0,r,u)+i},easeOutBounce:function(n,t,i,r,u){return(t/=u)<1/2.75?r*7.5625*t*t+i:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+i:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+i:r*(7.5625*(t-=2.625/2.75)*t+.984375)+i},easeInOutBounce:function(n,t,i,r,u){return t<u/2?jQuery.easing.easeInBounce(n,t*2,0,r,u)*.5+i:jQuery.easing.easeOutBounce(n,t*2-u,0,r,u)*.5+r*.5+i}});$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")});$(function(){$("a.page-scroll").bind("click",function(n){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo");n.preventDefault()})})

}
/*
     FILE ARCHIVED ON 16:56:38 Nov 20, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:50:14 Jul 21, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.582
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 20.201
  LoadShardBlock: 162.621 (3)
  PetaboxLoader3.datanode: 266.504 (5)
  load_resource: 377.646 (2)
  PetaboxLoader3.resolve: 258.073 (2)
*/