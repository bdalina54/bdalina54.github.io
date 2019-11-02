(function (w,d)
{
    //'use_strict';

    // Modernizr.on('webp', function (result) {
    //     if (result) {
    //       // supported
    //     } else {
    //       // not-supported
    //     }
    // });
    document.documentElement.classList.remove("no-js");
    function init() {
        // quit if this function has already been called
        if (arguments.callee.done) return;
        // flag this function so we don't do the same thing twice
        arguments.callee.done = true;

        setTimeout(function(){d.body.classList.add('loaded'); d.querySelector('html').removeAttribute('style'); }, 3000);

        setTimeout(function(){
            var fbroot = d.getElementById("fb-root");
            var fbscript =  d.createElement("script");
                            fbscript.setAttribute("language","javascript");
                            fbscript.type = "text/javascript";
                            fbscript.setAttribute("rel","nofollow");
                            fbscript.setAttribute("defer","defer");
                            fbscript.innerHTML = ""+
                                                    "window.fbAsyncInit = function() {"+
                                                      "FB.init({"+
                                                        "xfbml            : true,"+
                                                        "version          : 'v4.0'"+
                                                    "});"+
                                                "};"+
                                                ""+
                                                    "(function(d, s, id) {"+
                                                    "var js, fjs = d.getElementsByTagName(s)[0];"+
                                                    "if (d.getElementById(id)) return;"+
                                                    "js = d.createElement(s); js.id = id;"+
                                                    "js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';"+
                                                    "fjs.parentNode.insertBefore(js, fjs);"+
                                                "}(document, 'script', 'facebook-jssdk'));";
                            fbroot.appendChild(fbscript);
        }, 10000);

        d.getElementById('font-awesome-css').setAttribute('rel', 'stylesheet');
        d.getElementById('bradley-dalina-css').setAttribute('rel', 'stylesheet');
    }
    if (d.addEventListener) {
        d.addEventListener("DOMContentLoaded", init, false);
    }
    w.onload = init;
    /*@cc_on @*/
    /*@if (@_win32)
      document.write('<link id="font-awesome-css" rel="stylesheet" href="assets/css/font-awesome.min.css" as="style" type="text/css" defer media="all">');
      document.write('<link id="bradley-dalina-css" rel="stylesheet" href="/css/bradley-dalina.css" as="style" type="text/css" defer media="all">');
    /*@end @*/
})(window, document);
