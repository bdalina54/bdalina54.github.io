(function (w,d)
{
    //'use_strict';
    d.documentElement.classList.remove("no-js");
    var site_email = d.querySelector('.site-email');
    var site_number = d.querySelector('.site-number');
    if(site_email){
        site_email.addEventListener("mouseover", function(){
            this.setAttribute("href","mailto: bdalina54@gmail.com");
        }, false);
        site_email.addEventListener("mouseout", function(){
            this.setAttribute("href","");
        }, false);
    }
    if(site_number){
        site_number.addEventListener("mouseover", function(){
            this.setAttribute("href","tel: 639264482952");
        }, false);
        site_number.addEventListener("mouseout", function(){
            this.setAttribute("href","");
        }, false);
    }

    var expander = d.getElementById("expander");
    var ulist = d.querySelectorAll("div.row > ul");
    for(let i =0; i < ulist.length; i++){
        ulist[i].setAttribute("data-maxheight",ulist[i].offsetHeight+"px");
        ulist[i].style.maxHeight=ulist[i].offsetHeight+"px";
    }
    if(expander){
        expander.addEventListener("click", function(){
            function animate(el, show=false, counter=0, delay=1000){
                if(counter < el.length){
                    if(!show){
                        el[counter].classList.remove("show");
                        el[counter].style.maxHeight='0px';
                        el[counter].classList.add("hide");
                    }
                    else{
                        el[counter].classList.add("show");
                        el[counter].style.maxHeight= el[counter].getAttribute("data-maxheight");
                        el[counter].classList.remove("hide");
                    }
                    counter++;
                    setTimeout(function(){animate(el, show, counter)}, delay+500);
                }
            }

            if(this.classList.contains("show-all")){
                this.classList.add("fa-chevron-down");
                this.classList.remove("fa-chevron-up");
                this.classList.remove("show-all");
                this.classList.add("hide-all");
                if(ulist){
                    animate(ulist, false, 0);
                }
            }
            else{
                this.classList.add("fa-chevron-up");
                this.classList.remove("fa-chevron-down");
                this.classList.add("show-all");
                this.classList.remove("hide-all");
                if(ulist){
                    animate(ulist, true, 0);
                }
            }
        }, false);
    }

    var viewImage = d.getElementsByClassName("view-image");
    var imageViewer = d.getElementById("image-viewer");
    if(viewImage){
        for(let i =0; i < viewImage.length; i++){
            viewImage[i].addEventListener("click", function(e){
                e.preventDefault();
                let webp_src = "images/"+this.getAttribute("href")+".webp";
                let jpg_src = "images/"+this.getAttribute("href")+".jpg";
                let pictureObj = imageViewer.querySelector("picture");
                let imageCaption = imageViewer.querySelector(".caption-content > p");
                imageCaption.innerHTML = this.getAttribute("href").replace(/-/gim, " ");
                let closeViewer = d.getElementById('close-viewer');
                if(closeViewer){
                    closeViewer.addEventListener("click", function(){
                        imageViewer.style.display="none";
                        imageViewer.style.backgroundColor="transparent";
                        imageViewer.classList.remove("active");

                        pictureObj.childNodes[0].setAttribute("srcset", "");
                        pictureObj.childNodes[1].setAttribute("srcset", "");
                        pictureObj.childNodes[2].setAttribute("src", "");
                        imageCaption.innerHTML="";
                    });
                }

                if(imageViewer){
                    imageViewer.addEventListener("click", function(e){
                        if(e.target == this){
                            imageViewer.style.display="none";
                            imageViewer.style.backgroundColor="transparent";
                            imageViewer.classList.remove("active");

                            pictureObj.childNodes[0].setAttribute("srcset", "");
                            pictureObj.childNodes[1].setAttribute("srcset", "");
                            pictureObj.childNodes[2].setAttribute("src", "");
                            imageCaption.innerHTML="";
                        }
                    });
                    imageViewer.classList.add("active");
                    imageViewer.style.display="flex";
                    imageViewer.style.backgroundColor="rgba(0,0,0,0.80)";
                    pictureObj.childNodes[0].setAttribute("srcset", webp_src);
                    pictureObj.childNodes[1].setAttribute("srcset", jpg_src);
                    pictureObj.childNodes[2].setAttribute("src", jpg_src);
                }
            });
        }
    }

    var slideul = d.getElementsByClassName("slide-ul");
    if(slideul){
        for(let i =0; i < slideul.length; i++){
            slideul[i].addEventListener("click", function(){
                let parent = this.parentElement;
                let childul = parent.querySelector("ul");
                if(childul.classList.contains("hide")){
                    childul.classList.add("show");
                    childul.style.maxHeight= childul.getAttribute("data-maxheight");
                    childul.classList.remove("hide");
                }else{
                    childul.classList.remove("show");
                    childul.style.maxHeight= "0px";;
                    childul.classList.add("hide");
                }
            });
        }
    }

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
