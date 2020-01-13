!function(a){var b={},c={};c.attachEvent=function(a,b,c){return a.addEventListener(b,c,!1)},c.fireFakeEvent=function(a,b){return a.target.dispatchEvent(c.createEvent(b))},c.createEvent=function(b){var c=a.document.createEvent("HTMLEvents");return c.initEvent(b,!0,!0),c.eventName=b,c},c.getRealEvent=function(a){return a.originalEvent&&a.originalEvent.touches&&a.originalEvent.touches.length?a.originalEvent.touches[0]:a.touches&&a.touches.length?a.touches[0]:a};var d=[{test:("propertyIsEnumerable"in a||"hasOwnProperty"in document)&&(a.propertyIsEnumerable("ontouchstart")||document.hasOwnProperty("ontouchstart")),events:{start:"touchstart",move:"touchmove",end:"touchend"}},{test:a.navigator.msPointerEnabled,events:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},{test:a.navigator.pointerEnabled,events:{start:"pointerdown",move:"pointermove",end:"pointerup"}}];b.options={eventName:"tap",fingerMaxOffset:11};var e,f,g,h,i={};e=function(a){return c.attachEvent(document.body,h[a],g[a])},g={start:function(a){a=c.getRealEvent(a),i.start=[a.pageX,a.pageY],i.offset=[0,0]},move:function(a){return i.start||i.move?(a=c.getRealEvent(a),i.move=[a.pageX,a.pageY],void(i.offset=[Math.abs(i.move[0]-i.start[0]),Math.abs(i.move[1]-i.start[1])])):!1},end:function(d){if(d=c.getRealEvent(d),i.offset[0]<b.options.fingerMaxOffset&&i.offset[1]<b.options.fingerMaxOffset&&!c.fireFakeEvent(d,b.options.eventName)){if(a.navigator.msPointerEnabled||a.navigator.pointerEnabled){var e=function(a){a.preventDefault(),d.target.removeEventListener("click",e)};d.target.addEventListener("click",e,!1)}d.preventDefault()}i={}},click:function(a){return c.fireFakeEvent(a,b.options.eventName)?void 0:a.preventDefault()}},f=function(){for(var a=0,b=d.length;b>a;a++)if(d[a].test)return h=d[a].events,e("start"),e("move"),e("end"),!1;return c.attachEvent(document.body,"click",g.click)},"addEventListener"in a&&c.attachEvent(a,"load",f),a.Tap=b}(window);
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map
(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(value,names[index]);value=value[names[index++]]}}else{value=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,originalTemplate);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="2.3.0";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});

// Google Map properties

function initialize() {
  var officeLatLng = new google.maps.LatLng(59.93632276, 30.32106467);
  var mapOptions = {
    zoom: 16,
    center: officeLatLng,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Some circle marker properties
  new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 13,
      fillOpacity: 100,
      fillColor: '#d22856',
      strokeWeight: 10,
      strokeColor: 'white'
    }
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(officeLatLng);
  });
}

window.addEventListener('load', function() {
  contactsMap.id = 'map-canvas';
  contactsMap.classList.add('contacts__map--js');
});

google.maps.event.addDomListener(window, 'load', initialize);

// Review slider script
(function() {

  var reviews = document.querySelector('.review');

  function reviewSlider(container) {
    var buttonPrev = container.querySelector('.slider__review-toggle--prev'),
        buttonNext = container.querySelector('.slider__review-toggle--next'),
        slides = container.querySelectorAll('.slider__slide'),
        slidesQuantity = slides.length,
        dotsContainer = container.querySelector('.slider__toggle'),
        SlideList, activeSlide, activeSlideIndex, speed, i, swipeArea, newDot, allDots, DotList;

    slides[0].classList.add('slider__slide--active');

    SlideList = Array.prototype.slice.call(slides);
    activeSlide = container.getElementsByClassName('slider__slide--active');
    activeSlideIndex = SlideList.indexOf(activeSlide[0]);
    swipeArea = new Hammer(container);
    speed = 5000;

    function removeMovingClasses() {
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider__slide--forward-out');
        slides[i].classList.remove('slider__slide--forward-in');
        slides[i].classList.remove('slider__slide--backward-out');
        slides[i].classList.remove('slider__slide--backward-in');
        slides[i].classList.remove('slider__slide--active');
      } // one by one class removal is used for IE support
    }

    function moveForward() {
      removeMovingClasses();
      if (activeSlideIndex >= (slidesQuantity - 1)) {
        slides[0].classList.add('slider__slide--forward-in');
        slides[slidesQuantity - 1].classList.add('slider__slide--forward-out');
        activeSlideIndex = 0;
      }
      else {
        activeSlideIndex = activeSlideIndex + 1;
        slides[activeSlideIndex].classList.add('slider__slide--forward-in');
        slides[activeSlideIndex - 1].classList.add('slider__slide--forward-out');
      }
      slides[activeSlideIndex].classList.add('slider__slide--active');
    }

    function moveBackward() {
      removeMovingClasses();
      if (activeSlideIndex <= 0) {
        activeSlideIndex = activeSlideIndex + (slidesQuantity - 1);
        slides[0].classList.add('slider__slide--backward-out');
      }
      else {
        slides[activeSlideIndex].classList.add('slider__slide--backward-out');
        activeSlideIndex = activeSlideIndex - 1;
      }
      slides[activeSlideIndex].classList.add('slider__slide--active');
      slides[activeSlideIndex].classList.add('slider__slide--backward-in');
      // one by one class adding is used for IE support
    }

    function setActiveDot() {
      var dotsQuantity = dotsContainer.querySelectorAll('span').length,
          activeSlide = container.getElementsByClassName('slider__slide--active'),
          activeSlideIndex = SlideList.indexOf(activeSlide[0]);
      for (i = 0; i < dotsQuantity; i++) {
        allDots[i].classList.remove('slider__button--active');
      }
      allDots[activeSlideIndex].classList.add('slider__button--active');
    }

    function autoCycle() {
      var autoForward = window.setInterval(moveForward, speed);

      window.setInterval(setActiveDot, speed);
      swipeArea.on('swipe', function(event) {
        clearInterval(autoForward);
      }, false); // stop autoCycle on mobile devices

      container.addEventListener('mouseover', function() {
        clearInterval(autoForward);
      }, false); // pause autoCycle on hover
      container.addEventListener('mouseout', function() {
        autoForward = window.setInterval(moveForward, speed);
        window.setInterval(setActiveDot, speed);
      }, false); // restart autoCycle
    }
    // end of functions

    buttonPrev.classList.add('slider__review-toggle--prev--visible');
    buttonNext.classList.add('slider__review-toggle--next--visible');

    for (i = 0; i < slidesQuantity; i++) {
      slides[i].classList.add('slider__slide--js');
      newDot = document.createElement('span');
      newDot.className = 'slider__button';
      dotsContainer.appendChild(newDot);
    } // create dot for each slide

    allDots = dotsContainer.querySelectorAll('span');
    DotList = Array.prototype.slice.call(allDots);
    setActiveDot(); // set initial active dot
    autoCycle(); // launch slides autocycle

    buttonNext.addEventListener('tap', function() {
      removeMovingClasses();
      moveForward();
      setActiveDot();
    }, false);

    buttonPrev.addEventListener('tap', function() {
      removeMovingClasses();
      moveBackward();
      setActiveDot();
    }, false);

    // dots navigation
    for (i = 0; i < allDots.length; i++) {
      allDots[i].addEventListener('tap', function(event) {
        var activeDot = dotsContainer.getElementsByClassName('slider__button--active'), // getting index of active dot
            activeDotIndex = DotList.indexOf(activeDot[0]),
            clickedDotIndex = DotList.indexOf(this); // getting index of clicked dot

        removeMovingClasses();
        if (clickedDotIndex > activeDotIndex) {
          slides[activeSlideIndex].classList.add('slider__slide--forward-out');
          slides[clickedDotIndex].classList.add('slider__slide--forward-in');
        }
        else if (clickedDotIndex < activeDotIndex) {
          slides[activeSlideIndex].classList.add('slider__slide--backward-out');
          slides[clickedDotIndex].classList.add('slider__slide--backward-in');
        }

        activeSlideIndex = clickedDotIndex;
        activeDotIndex = clickedDotIndex;
        slides[activeSlideIndex].classList.add('slider__slide--active');
        setActiveDot();
      }, false);
    }

    swipeArea.on('swiperight', function(event) {
      moveBackward();
      setActiveDot();
    }, false);
    swipeArea.on('swipeleft', function(event) {
      moveForward();
      setActiveDot();
    }, false);
  }

  reviewSlider(reviews);

})();

// Price slider script
(function(){

  var prices = document.querySelector('.price'),
      prevWidth = window.innerWidth,
      i;

  function priceSlider(container) {

    var priceItems = container.querySelectorAll('.slider__price-item'),
        priceItemsQuantity = priceItems.length,
        dotsContainer = container.querySelector('.slider__toggle'),
        swipeArea = new Hammer(container),
        itemList, activeItem, activeItemIndex;

    priceItems[1].classList.add('slider__price-item--active');

    itemList = Array.prototype.slice.call(priceItems);
    activeItem = container.getElementsByClassName('slider__price-item--active');
    activeItemIndex = itemList.indexOf(activeItem[0]);

    function setActiveDot() {
      var dots = dotsContainer.querySelectorAll('span'),
          dotsQuantity = dots.length;
      for (i = 0; i < dotsQuantity; i++) {
        dots[i].classList.remove('slider__button--active');
      }
      dots[activeItemIndex].classList.add('slider__button--active');
    }

    function removeMovingClasses() {
      for (i = 0; i < priceItems.length; i++) {
        priceItems[i].classList.remove('slider__slide--forward-out');
        priceItems[i].classList.remove('slider__slide--forward-in');
        priceItems[i].classList.remove('slider__slide--backward-out');
        priceItems[i].classList.remove('slider__slide--backward-in');
        priceItems[i].classList.remove('slider__price-item--active');
      } // one by one class removal is used for IE support
    }

    function moveBackward() {
      removeMovingClasses();
      if (activeItemIndex <= 0) {
        priceItems[0].classList.add('slider__price-item--active');
      }
      else {
        priceItems[activeItemIndex].classList.add('slider__slide--backward-out');
        priceItems[activeItemIndex].style.left = '100%';
        activeItemIndex = activeItemIndex - 1;

        if (activeItemIndex > 0) {
          priceItems[activeItemIndex - 1].style.left = '-100%';
        }
      }
      priceItems[activeItemIndex].classList.add('slider__price-item--active');
      priceItems[activeItemIndex].classList.add('slider__slide--backward-in');
      priceItems[activeItemIndex].style.left = '0';
    } // one by one class adding is used for IE support

    function moveForward() {
      removeMovingClasses();
      if (activeItemIndex >= (priceItemsQuantity - 1)) {
        priceItems[priceItemsQuantity - 1].classList.add('slider__price-item--active');
      }
      else {
        activeItemIndex = activeItemIndex + 1;
        priceItems[activeItemIndex].classList.add('slider__slide--forward-in');
        priceItems[activeItemIndex - 1].classList.add('slider__slide--forward-out');
        priceItems[activeItemIndex - 1].style.left = '-100%';

        if (activeItemIndex + 1 < priceItemsQuantity) {
          priceItems[activeItemIndex + 1].style.left = '100%';
        }
      }
      priceItems[activeItemIndex].classList.add('slider__price-item--active');
      priceItems[activeItemIndex].style.left = '0';
    }

    function activateSlider() {
      for (i = 0; i < priceItemsQuantity; i++) {
        priceItems[i].classList.add('slider__price-item--js');
        if (activeItemIndex > 0) { priceItems[activeItemIndex - 1].style.left = '-100%' };
        if (activeItemIndex + 1 < priceItemsQuantity) { priceItems[activeItemIndex + 1].style.left = '100%' };
      }
      setActiveDot();
    }

    function deactivateSlider() {
      for (i = 0; i < priceItemsQuantity; i++) {
        priceItems[i].classList.remove('slider__price-item--js');
        priceItems[i].style.left = '0';
      }
    }

    function makeDots() {
      var newDot;
      for (i = 0; i < priceItemsQuantity; i++) {
        newDot = document.createElement('span');
        newDot.className = 'slider__button';
        dotsContainer.appendChild(newDot);
      } // create dot for each slide
    }

    function moveOnSwipe() {
      swipeArea.on('swiperight', function(event) {
        moveBackward();
        setActiveDot();
      }, false);
      swipeArea.on('swipeleft', function(event) {
        moveForward();
        setActiveDot();
      }, false);
    }

    function moveOnDotClick() {
      var dots = dotsContainer.querySelectorAll('span'),
          DotList = Array.prototype.slice.call(dots),
          dotsQuantity = dots.length,
          activeDot, activeDotIndex, clickedDotIndex;

      for (i = 0; i < dotsQuantity; i++) {
        dots[i].addEventListener('tap', function(event) {
          for (i = 0; i < priceItemsQuantity; i++) {
            priceItems[i].style.left = '0';
          }

          activeDot = dotsContainer.getElementsByClassName('slider__button--active'); // getting index of active dot
          activeDotIndex = DotList.indexOf(activeDot[0]);
          clickedDotIndex = DotList.indexOf(this); // getting index of clicked dot

          removeMovingClasses();

          if (clickedDotIndex > activeDotIndex) {
            priceItems[activeItemIndex].classList.add('slider__slide--forward-out');
            priceItems[clickedDotIndex].classList.add('slider__slide--forward-in');

            if (clickedDotIndex + 1 < priceItemsQuantity) {
              priceItems[clickedDotIndex + 1].style.left = '100%';
            }
            priceItems[activeItemIndex].style.left = '-100%';
          }

          else if (clickedDotIndex < activeDotIndex) {
            priceItems[activeItemIndex].classList.add('slider__slide--backward-out');
            priceItems[clickedDotIndex].classList.add('slider__slide--backward-in');

            if (clickedDotIndex > 0) {
              priceItems[clickedDotIndex - 1].style.left = '-100%';
            }
            priceItems[activeItemIndex].style.left = '100%';
          }

          activeItemIndex = clickedDotIndex;
          activeDotIndex = clickedDotIndex;
          priceItems[activeItemIndex].classList.add('slider__price-item--active');
          priceItems[activeItemIndex].style.left = '0';
          setActiveDot();

        }, false);
      }
    }
    // end of functions

    makeDots();
    activateSlider();
    moveOnSwipe();
    moveOnDotClick();

    if (window.matchMedia('(min-width: 700px)').matches) {
      deactivateSlider();
    }

    window.addEventListener('resize', function() {
      if (window.innerWidth > prevWidth && (window.matchMedia("(min-width: 700px)").matches)) {
        deactivateSlider();
        prevWidth = window.innerWidth;
      }
      else if (window.innerWidth < prevWidth && (window.matchMedia("(max-width: 700px)").matches)) {
        activateSlider();
        prevWidth = window.innerWidth;
      }
    });
  }

  priceSlider(prices);

})();

// Toggling menu on mobile devices
(function() {
  var menuButton, navigationMenu, menuHeader, navigationList;
    menuButton = document.querySelector('.main-nav__button');
    navigationMenu = document.querySelector('.main-nav');
    menuHeader = document.querySelector('.main-nav__menu-header');
    navigationList = document.querySelector('.main-nav__list');

  if (window.matchMedia("(max-width: 1200px)").matches) {
    window.onload = function() {
      navigationMenu.classList.add('main-nav--overlap');
      menuHeader.classList.add('main-nav__menu-header--closed-menu');
      navigationList.classList.add('main-nav__list--closed');
    }
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth > prevWidth && (window.matchMedia("(min-width: 1200px)").matches)) {
      navigationMenu.classList.remove('main-nav--overlap');
      navigationList.classList.remove('main-nav__list--closed');
      menuHeader.classList.remove('main-nav__menu-header--closed-menu');
      menuButton.classList.remove('main-nav__button--close');
    }
    else if (window.innerWidth < prevWidth && (window.matchMedia("(max-width: 1200px)").matches)) {
      navigationMenu.classList.add('main-nav--overlap');
      menuHeader.classList.add('main-nav__menu-header--closed-menu');
      navigationList.classList.add('main-nav__list--closed');
    }
  });

  menuButton.addEventListener('tap', function(event) {
    event.preventDefault();
      menuButton.classList.toggle('main-nav__button--close');
      menuHeader.classList.toggle('main-nav__menu-header--closed-menu');
      navigationList.classList.toggle('main-nav__list--closed');
  });
})();

// Smooth scrolling from menu
(function() {
  var links = document.querySelectorAll('a[href^="#"]'),
      i;

  for (i = 0; i<links.length; i++) {
    links[i].addEventListener('tap', function(event) {
      var timer = 0,
          attrName = this.getAttribute('href').slice(1),
          currentPos = this.parentNode.parentNode.offsetTop + this.offsetTop,
          stopPos = document.getElementById(attrName).offsetTop,
          distance = stopPos - pageYOffset,
          step = Math.round(distance / 50),
          nextStep = 0;

      event.preventDefault();
      for (i = nextStep; i <= stopPos; i+=step) {
        setTimeout(function(){ window.scrollTo(0, nextStep+=step); }, timer * 8);
        timer++;
      }
    }, false);
  }
})();

// Bugfix for Chrome and Opera

var contactsMap = document.querySelector('.contacts__map');
var offer = document.querySelector('.offer');
var review = document.querySelector('.review');
var prevWidth = window.innerWidth;
var prevHeight = window.innerHeight;

window.addEventListener('resize', function() {
  function removeClass() {
    contactsMap.classList.remove('contacts__map--width-fix');
    offer.classList.remove('offer--width-fix');
    review.classList.remove('offer--width-fix');
  }

  if (prevHeight < prevWidth && innerHeight > innerWidth) {
    contactsMap.classList.add('contacts__map--width-fix');
    offer.classList.add('offer--width-fix');
    review.classList.add('offer--width-fix');
    setTimeout(removeClass, 100);
  }
  else if (prevHeight > prevWidth && innerHeight < innerWidth) {
    contactsMap.classList.add('contacts__map--width-fix');
    offer.classList.add('offer--width-fix');
    review.classList.add('offer--width-fix');
    setTimeout(removeClass, 100); // add class only when orientation is changed
  }
  prevWidth = innerWidth;
  prevHeight = innerHeight;
});
