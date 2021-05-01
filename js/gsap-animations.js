function greetingAnimation() {
    setTimeout(function () {
        var typed = new Typed('#typed', {
            strings:[
                'and I love to learn',
                'and I love to create',
                'and I love to lead',
                'and here\'s my site'
            ],
            backSpeed: 40,
            typeSpeed: 55,
            smartBackspace: true,
            backDelay: 1000
        })
    }, 300)
}

tl = gsap.timeline({onComplete: greetingAnimation});
tl.to("#overlay", 2.5, {
        delay: 1.6,
        opacity: 0,
        ease: Power2.easeInOut}, 1)
    .from('#intro', 2.5, {
        delay: 1.5, 
        y: 15, 
        opacity:0, 
        ease: Power4.easeOut}, 1)
    .to('#intro', 2.5, {
        delay: 1.5, 
        ease: Power4.easeOut, 
        opacity: 1}, 1)
    .from(".copyright-footer, .logo, .header-right", 2, {
        delay: - 1.5,
        opacity: 0,
        ease: Power2.easeInOut})
    .to(".copyright-footer, .logo, .header-right", 2, {
        delay: - 1.5,
        opacity: 1,
        ease: Power2.easeInOut
    });

let baseDelay = 2.5;

TweenMax.from("#information, .zdog-container", 2.5, {
    delay: baseDelay + 1,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#information, .zdog-container", 2.5, {
    delay: baseDelay + 1,
    opacity: 1,
    ease: Power2.easeInOut
});

TweenMax.from("#learn", 3, {
    delay: baseDelay + 1.5,
    // y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#learn", 3, {
    delay: baseDelay + 1.5,
    opacity: 1,
    ease: Power2.easeInOut
})


TweenMax.from("#item1", 2, {
    delay: baseDelay + 1.5,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item1", 2, {
    delay: baseDelay + 1.5,
    opacity: 1,
    ease: Power2.easeInOut
})
TweenMax.from("#item2", 2, {
    delay: baseDelay + 1.7,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item2", 2, {
    delay: baseDelay + 1.7,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item3", 2, {
    delay: baseDelay + 1.9,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item3", 2, {
    delay: baseDelay + 1.9,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item4", 2, {
    delay: baseDelay + 2.1,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item4", 2, {
    delay: baseDelay + 2.1,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item5", 2, {
    delay: baseDelay + 2.3,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item5", 2, {
    delay: baseDelay + 2.3,
    opacity: 1,
    ease: Power2.easeInOut
});

