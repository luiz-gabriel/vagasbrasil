jQuery(document).ready(function(e){(document.documentMode||/Edge/.test(navigator.userAgent))&&jQuery(".featured-box-img-cover").each(function(){var e=jQuery(this),n="url("+e.attr("src")+")",t=e.parent(),a=jQuery("<div></div>");t.append(a),a.css({height:"290","background-size":"cover","background-repeat":"no-repeat","background-position":"50% 20%","background-image":n}),e.hide()}),e(document).scroll(function(){e(this).scrollTop()>280?e(".alertbar").fadeIn():e(".alertbar").fadeOut()}),e(function(){function n(n){(n=n.length?n:e("[name="+this.hash.slice(1)+"]")).length&&e("html,body").animate({scrollTop:n.offset().top},1e3)}setTimeout(function(){location.hash&&(window.scrollTo(0,0),n(e("#"+(target=location.hash.split("#"))[1])))},1),e("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname)return n(e(this.hash)),!1})});var n,t=0,a=e("nav").outerHeight();e(window).scroll(function(e){n=!0}),setInterval(function(){n&&(function n(){var o=e(this).scrollTop();5>=Math.abs(t-o)||(o>t&&o>a?(e("nav").removeClass("nav-down").addClass("nav-up"),e(".nav-up").css("top",-e("nav").outerHeight()+"px")):o+e(window).height()<e(document).height()&&(e("nav").removeClass("nav-up").addClass("nav-down"),e(".nav-up, .nav-down").css("top","0px")),t=o)}(),n=!1)},250),e(".site-content").css("margin-top",e("header").outerHeight()+"px"),e(document).on("click",".spoiler",function(){e(this).removeClass("spoiler")})});