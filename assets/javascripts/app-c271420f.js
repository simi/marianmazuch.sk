/*! responsive-nav.js 1.0.32
 * https://github.com/viljamis/responsive-nav.js
 * http://responsive-nav.com
 *
 * Copyright (c) 2014 @viljamis
 * Available under the MIT license
 */
!function(e,t,n){"use strict";var i=function(i,s){var o=!!t.getComputedStyle;o||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var a,r,l,c,h,u,v=function(e,t,n,i){if("addEventListener"in e)try{e.addEventListener(t,n,i)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},p=function(e,t,n,i){if("removeEventListener"in e)try{e.removeEventListener(t,n,i)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},d=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},f=function(e,t){for(var n in t)e.setAttribute(n,t[n])},g=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},y=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},m=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])},E=e.createElement("style"),b=e.documentElement,T=function(t,n){var i;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in n)this.options[i]=n[i];if(g(b,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=d(this.wrapper),r=this.options,a=this.wrapper,this._init(this)};return T.prototype={destroy:function(){this._removeStyles(),y(a,"closed"),y(a,"opened"),y(a,r.navClass),y(a,r.navClass+"-"+this.index),y(b,r.navActiveClass),a.removeAttribute("style"),a.removeAttribute("aria-hidden"),p(t,"resize",this,!1),p(e.body,"touchmove",this,!1),p(l,"touchstart",this,!1),p(l,"touchend",this,!1),p(l,"mouseup",this,!1),p(l,"keyup",this,!1),p(l,"click",this,!1),r.customToggle?l.removeAttribute("aria-hidden"):l.parentNode.removeChild(l)},toggle:function(){c===!0&&(u?this.close():this.open())},open:function(){u||(y(a,"closed"),g(a,"opened"),g(b,r.navActiveClass),g(l,"active"),a.style.position=r.openPos,f(a,{"aria-hidden":"false"}),u=!0,r.open())},close:function(){u&&(g(a,"closed"),y(a,"opened"),y(b,r.navActiveClass),y(l,"active"),f(a,{"aria-hidden":"true"}),r.animate?(c=!1,setTimeout(function(){a.style.position="absolute",c=!0},r.transition+10)):a.style.position="absolute",u=!1,r.close())},resize:function(){"none"!==t.getComputedStyle(l,null).getPropertyValue("display")?(h=!0,f(l,{"aria-hidden":"false"}),a.className.match(/(^|\s)closed(\s|$)/)&&(f(a,{"aria-hidden":"true"}),a.style.position="absolute"),this._createStyles(),this._calcHeight()):(h=!1,f(l,{"aria-hidden":"true"}),f(a,{"aria-hidden":"false"}),a.style.position=r.openPos,this._removeStyles())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"resize":this.resize(n)}},_init:function(){this.index=n++,g(a,r.navClass),g(a,r.navClass+"-"+this.index),g(a,"closed"),c=!0,u=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var i=this;setTimeout(function(){i.resize()},20),v(t,"resize",this,!1),v(e.body,"touchmove",this,!1),v(l,"touchstart",this,!1),v(l,"touchend",this,!1),v(l,"mouseup",this,!1),v(l,"keyup",this,!1),v(l,"click",this,!1),r.init()},_createStyles:function(){E.parentNode||(E.type="text/css",e.getElementsByTagName("head")[0].appendChild(E))},_removeStyles:function(){E.parentNode&&E.parentNode.removeChild(E)},_createToggle:function(){if(r.customToggle){var t=r.customToggle.replace("#","");if(e.getElementById(t))l=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");l=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=r.label,f(n,{href:"#","class":"nav-toggle"}),"after"===r.insert?a.parentNode.insertBefore(n,a.nextSibling):a.parentNode.insertBefore(n,a),l=n}},_closeOnNavClick:function(){if(r.closeOnNavClick&&"querySelectorAll"in e){var t=a.querySelectorAll("a"),n=this;m(t,function(e){v(t[e],"click",function(){h&&n.toggle()},!1)})}},_preventDefault:function(e){e.preventDefault?(e.preventDefault(),e.stopPropagation()):e.returnValue=!1},_onTouchStart:function(t){t.stopPropagation(),"after"===r.insert&&g(e.body,"disable-pointer-events"),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY,this.touchHasMoved=!1,p(l,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(n){if(this._preventDefault(n),!this.touchHasMoved){if("touchend"===n.type)return this.toggle(),"after"===r.insert&&setTimeout(function(){y(e.body,"disable-pointer-events")},r.transition+300),void 0;var i=n||t.event;3!==i.which&&2!==i.button&&this.toggle()}},_onKeyUp:function(e){var n=e||t.event;13===n.keyCode&&this.toggle()},_transitions:function(){if(r.animate){var e=a.style,t="max-height "+r.transition+"ms";e.WebkitTransition=t,e.MozTransition=t,e.OTransition=t,e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<a.inner.length;t++)e+=a.inner[t].offsetHeight;var n="."+r.jsClass+" ."+r.navClass+"-"+this.index+".opened{max-height:"+e+"px !important}";E.styleSheet?E.styleSheet.cssText=n:E.innerHTML=n,n=""}},new T(i,s)};t.responsiveNav=i}(document,window,0);var nav=responsiveNav(".nav-collapse",{customToggle:"#toggle",openPos:"static"});nav.open();