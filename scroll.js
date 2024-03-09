window.addEventListener('scroll', function() {
    var arrow = document.getElementById('mouse-scroll');
    var footer = document.querySelector('footer');
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
    var scrollTop = window.scrollY || window.pageYOffset;

    if (scrollTop + windowHeight >= bodyHeight || scrollTop + windowHeight >= footer.offsetTop) {
        arrow.style.display = 'none';
    } else {
        arrow.style.display = 'block';
    }
});
