window.addEventListener('scroll', function() {
    var arrow = document.getElementById('scrollArrow');
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
    var scrollTop = window.scrollY || window.pageYOffset;

    if (scrollTop + windowHeight >= bodyHeight) {
        arrow.style.display = 'none';
    } else {
        arrow.style.display = 'block';
    }
});