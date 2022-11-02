var textpath = document.querySelector("#text-path");
var textcontainer = document.querySelector("#text-container")

var scrollSelf = textcontainer.scrollTop + 800;

window.addEventListener('scroll', function () {
    textpath.setAttribute('startOffset', scrollSelf - document.documentElement.scrollTop);
    document.querySelector(".line-section").style.bottom = -(document.documentElement.scrollTop - (scrollSelf - 800)) / 5 + 'px';
});

var r = document.querySelector(".top-section__images-container");

window.addEventListener('scroll', function () {
  r.style.setProperty('--scroll-bias', document.documentElement.scrollTop / 3 + 'px');
});
