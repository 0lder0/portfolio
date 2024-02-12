window.addEventListener('load', (event) => {
    setTimeout(() => {
        gsap.to('.cards', { opacity: 1, duration: 0.5 });
    }, 500);

    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('scrollY', window.scrollY);
    });

    const scrollY = sessionStorage.getItem('scrollY');

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let timeln = gsap.timeline({
        scrollTrigger: {
            trigger: ".cards",
            pin: true,
            pinSpacing: true,
            start: "left-=10px top-=120px",
            end: "+=2000",
            scrub: 4
        }
    });

    timeln.addLabel('card1');
    timeln.to('.card-1', {
        xPercent: 0,
        opacity: 1
    });

    timeln.from('.card-2', {
        xPercent: 75,
        opacity: 0
    });
    timeln.addLabel("card2");

    timeln.to(".card-1", {
        scale: 0.95,
        xPercent: -0.5,
        opacity: 0.5
    }, "-=0.3");

    timeln.to('.card-2', {
        xPercent: 0,
        opacity: 1
    });

    timeln.from('.card-3', {
        xPercent: 75,
        opacity: 0
    });
    timeln.addLabel('card3');

    timeln.to(".card-2", {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6
    }, "-=0.3");

    timeln.to(".card-3", {
        xPercent: 0,
        opacity: 1
    });

    timeln.from('.card-4', {
        xPercent: 75,
        opacity: 0
    });
    timeln.addLabel('card4');

    timeln.to(".card-3", {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6
    }, "-=0.3");

    timeln.to(".card-4", {
        xPercent: 0,
        opacity: 1
    });

    timeln.from('.card-5', {
        xPercent: 75,
        opacity: 0
    });
    timeln.addLabel('card5');

    timeln.to(".card-4", {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6
    }, "-=0.3");

    timeln.to(".card-5", {
        xPercent: 0,
        opacity: 1
    });

    timeln.to('.card-5', {});

    timeln.to('.card-5', {
        scale: 1,
        xPercent: 0,
        opacity: 1
    });

    if (scrollY) {
        window.scrollTo(5, scrollY);
    }
});