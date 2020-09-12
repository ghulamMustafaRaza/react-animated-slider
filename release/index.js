module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.r(t),n.d(t,"HORIZONTAL",(function(){return v})),n.d(t,"VERTICAL",(function(){return y}));var i=n(0),o=n.n(i);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="previous",f="next",v="horizontal",y="vertical",h={previousButton:"previousButton",nextButton:"nextButton",buttonDisabled:"disabled",track:"track",slide:"slide",hidden:"hidden",previous:"previous",current:"current",next:"next",animateIn:"animateIn",animateOut:"animateOut"},E=2e3,b={up:"rotate(90 10 15)",down:"rotate(270 10 15)",left:"rotate(180 10 15)",right:"rotate(0 10 15)"};function P(e){var t=e.direction,n=void 0===t?"right":t;return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"30",viewBox:"0 0 20 30"},o.a.createElement("polygon",{fill:"#000",points:"20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30",transform:b[n]}))}var g=function(e){function t(e){var n,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,s=l(t).call(this,e),n=!s||"object"!==r(s)&&"function"!=typeof s?c(i):s,d(c(n),"updateChilds",(function(e,t){var i=o.a.Children.count(e.children),r={};if(t.currentSlideIndex>=i&&(r.currentSlideIndex=0),t.cp!=e.children){var s="function"==typeof e.children;r.children=s?e.children({onMouseOver:n.handleMouseOver,onMouseOut:n.handleMouseOut}):e.children,r.cp=e.children}n.setState(r)})),d(c(n),"setupAutoplay",(function(){n.props.autoplay&&!n.isMouseOver&&(n.stopAutoplay(),n.autoplayTimerId=setInterval(n.next,parseInt(n.props.autoplay,10)))})),d(c(n),"stopAutoplay",(function(){n.autoplayTimerId&&clearInterval(n.autoplayTimerId)})),d(c(n),"onAnimationEnd",(function(){n.setState({currentSlideIndex:n.nextSlideIndex,animating:!1,animation:void 0}),n.setupAutoplay(),"function"==typeof n.props.onSlideChange&&n.props.onSlideChange({slideIndex:n.nextSlideIndex})})),d(c(n),"isDisabled",(function(){return n.slideCount<2||n.state.animating||n.props.disabled})),d(c(n),"isInfinite",(function(){return n.slideCount>2&&!1!==n.props.infinite})),d(c(n),"canGoPrevious",(function(){return n.isInfinite()||n.state.currentSlideIndex>0})),d(c(n),"canGoNext",(function(){return n.isInfinite()||n.state.currentSlideIndex<n.slideCount-1})),d(c(n),"goTo",(function(e,t){if(console.log(e,t),!n.isDisabled()){console.log(e,t),n.nextSlideIndex=e,n.setState({animating:!0,animation:t});var i=n.props.duration||E;n.animationTimerId=setTimeout(n.onAnimationEnd,i)}})),d(c(n),"previous",(function(){if(n.canGoPrevious()){var e=n.state.currentSlideIndex-1,t=e>=0?e:n.slideCount-1;n.goTo(t,m)}})),d(c(n),"next",(function(){if(n.canGoNext()){var e=(n.state.currentSlideIndex+1)%n.slideCount;n.goTo(e,f)}})),d(c(n),"getSlideClass",(function(e){var t=n.state,i=t.currentSlideIndex,o=t.animation,r=n.getClassNames(),s=n.slideCount-1;return e===i?o?"".concat(r.animateOut," ").concat(r[o]):r.current:2===n.slideCount?o?"".concat(r.animateIn," ").concat(r[o]):e<i?r.previous:r.next:e===i-1||0===i&&e===s?o===m?"".concat(r.animateIn," ").concat(r.previous):o===f?r.hidden:r.previous:e===i+1||0===e&&i===s?o===f?"".concat(r.animateIn," ").concat(r.next):o===m?r.hidden:r.next:r.hidden})),d(c(n),"isSwiping",!1),d(c(n),"sliderRef",void 0),d(c(n),"pageStartPosition",void 0),d(c(n),"currentElement",void 0),d(c(n),"currentElementStartPosition",void 0),d(c(n),"currentElementPosition",void 0),d(c(n),"previousElement",void 0),d(c(n),"previousElementStartPosition",void 0),d(c(n),"previousElementPosition",void 0),d(c(n),"nextElement",void 0),d(c(n),"nextElementStartPosition",void 0),d(c(n),"nextElementPosition",void 0),d(c(n),"handleTouchStart",(function(e){if(!n.isDisabled()){n.stopAutoplay();var t=n.getClassNames(),i=t.current,o=t.previous,r=t.next,s=e.touches[0];n.isSwiping=!0,n.pageStartPosition=s[n.swipeEventProperty],n.currentElement=n.sliderRef.getElementsByClassName(i)[0],n.previousElement=n.sliderRef.getElementsByClassName(o)[0],n.nextElement=n.sliderRef.getElementsByClassName(r)[0];var a=n.currentElement.getBoundingClientRect()[n.swipeProperty];n.currentElementStartPosition=0,n.currentElementPosition=0,n.currentElement.style.transition="none",n.previousElement&&(n.previousElement.style.transition="none",n.previousElement.style.visibility="visible",n.previousElementStartPosition=n.previousElement.getBoundingClientRect()[n.swipeProperty]-a),n.nextElement&&(n.nextElement.style.visibility="visible",n.nextElement.style.transition="none",n.nextElementStartPosition=n.nextElement.getBoundingClientRect()[n.swipeProperty]-a)}})),d(c(n),"animating",!1),d(c(n),"handleTouchMove",(function(e){e.preventDefault(),n.animating=n.animating||requestAnimationFrame((function(){if(n.isSwiping){var t=e.touches[0][n.swipeEventProperty]-n.pageStartPosition;n.currentElementPosition=n.currentElementStartPosition+t,n.currentElement.style[n.swipeProperty]="".concat(n.currentElementPosition,"px"),n.previousElement&&(n.previousElementPosition=n.previousElementStartPosition+t,n.previousElement.style[n.swipeProperty]="".concat(n.previousElementPosition,"px")),n.nextElement&&(n.nextElementPosition=n.nextElementStartPosition+t,n.nextElement.style[n.swipeProperty]="".concat(n.nextElementPosition,"px")),n.animating=!1}else n.animating=!1}))})),d(c(n),"handleTouchEnd",(function(){n.animating=!1,n.isSwiping=!1,n.currentElement.style.removeProperty(n.swipeProperty),n.currentElement.style.removeProperty("transition"),n.previousElement&&(n.previousElement.style.removeProperty("visibility"),n.previousElement.style.removeProperty("transition"),n.previousElement.style.removeProperty(n.swipeProperty)),n.nextElement&&(n.nextElement.style.removeProperty("visibility"),n.nextElement.style.removeProperty("transition"),n.nextElement.style.removeProperty(n.swipeProperty));var e=n.currentElementStartPosition-n.currentElementPosition,t=n.props.minSwipeOffset||15;Math.abs(e)>t?e<0?n.previous():n.next():n.setupAutoplay()})),d(c(n),"getClassNames",(function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h,{},n.props.classNames)})),d(c(n),"initTouchEvents",(function(e){!n.isDisabled()&&e&&(n.sliderRef=e,n.sliderRef.addEventListener("touchstart",n.handleTouchStart),n.sliderRef.addEventListener("touchmove",n.handleTouchMove,{passive:!1}),n.sliderRef.addEventListener("touchend",n.handleTouchEnd))})),d(c(n),"handleMouseOver",(function(){n.isMouseOver=!0,n.stopAutoplay()})),d(c(n),"handleMouseOut",(function(){n.isMouseOver=!1,n.setupAutoplay()}));var u=n.props,p=u.slideIndex,y=void 0===p?0:p,b=u.direction,P=void 0===b?v:b;return n.state={currentSlideIndex:y,animating:!1,children:null,cp:null},n.direction=P,n.swipeProperty=P===v?"left":"top",n.swipeEventProperty=P===v?"clientX":"clientY",n}var n,i,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){this.setupAutoplay()}},{key:"componentWillUnmount",value:function(){this.stopAutoplay(),this.animationTimerId&&clearTimeout(this.animationTimerId)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.updateChilds(e,this.state)}},{key:"UNSAFE_componentWillMount",value:function(){this.updateChilds(this.props,this.state)}},{key:"render",value:function(){var e=this;this.slideCount=o.a.Children.count(this.state.children);var t=this.props,n=t.children,i=t.className,r=void 0===i?"slider":i,a=t.previousButton,u=void 0===a?o.a.createElement(P,{direction:this.direction===v?"left":"down"}):a,l=t.nextButton,c=void 0===l?o.a.createElement(P,{direction:this.direction===v?"right":"up"}):l,p=t.touchDisabled,d=t.autoplay,m=this.getClassNames(),f=this.isDisabled(),y=d&&{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},h="function"==typeof n;return o.a.createElement("div",s({className:m.slider||r},!p&&{ref:this.initTouchEvents},!h&&y),o.a.createElement("a",s({},h&&y,{onClick:this.previous,className:"".concat(m.previousButton).concat(f||!this.canGoPrevious()?" ".concat(m.buttonDisabled):"")}),u),o.a.createElement("a",s({},h&&y,{onClick:this.next,className:"".concat(m.nextButton).concat(f||!this.canGoNext()?" ".concat(m.buttonDisabled):"")}),c),o.a.createElement("div",{className:m.track},o.a.Children.map(this.state.children,(function(t,n){return o.a.cloneElement(t,{key:n,className:[m.slide,e.getSlideClass(n),t.props.className].filter((function(e){return e})).join(" ")})}))))}}])&&u(n.prototype,i),y&&u(n,y),t}(o.a.PureComponent);t.default=g}]);