var circles = document.querySelectorAll('.cricle--animated');

for (let i = 0; i < circles.length; i++){
    window.addEventListener('scroll', function () {
        if(checkvisible(circles[i])){
            var blur = 140 - (-1 * (scrollY(circles[i]) - posY(circles[i])) / 5) + '%';
            console.log(blur);
            circles[i].style.setProperty('--a', blur);
        }
    });
}

function posY(elm) {
    var test = elm, top = 0;

    while (!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if (!!window.innerWidth) { return window.innerHeight; }
    else if (de && !isNaN(de.clientHeight)) { return de.clientHeight; }

    return 0;
}

function scrollY() {
    if (window.pageYOffset) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkvisible(elm) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return (y < (vpH + st));
}