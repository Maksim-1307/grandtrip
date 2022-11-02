var r = document.querySelector(".top-section__images-container");

window.addEventListener('scroll', function () {
  r.style.setProperty('--scroll-bias', document.documentElement.scrollTop / 3 + 'px');
});
