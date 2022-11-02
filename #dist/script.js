
var r = document.querySelector(".top-section__images-container");


console.log(document.documentElement.scrollTop)

var rs = getComputedStyle(r);

let startScroll = document.documentElement.scrollTop;
window.addEventListener('scroll', function () {
  let startScroll = document.documentElement.scrollTop;
  console.log(document.documentElement.scrollTop);
  r.style.setProperty('--scroll-bias', startScroll / 3 + 'px');
});
