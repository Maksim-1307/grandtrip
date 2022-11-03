var textpath = document.querySelector("#text-path");
var textcontainer = document.querySelector("#text-container")
var boddy = document.querySelector("body")

var scrollSelf = textcontainer.scrollTop + 800;

window.addEventListener('scroll', function () {
    textpath.setAttribute('startOffset', scrollSelf - document.documentElement.scrollTop);
    document.querySelector(".line-section").style.bottom = -(document.documentElement.scrollTop - (scrollSelf - 800)) / 5 + 'px';
});
