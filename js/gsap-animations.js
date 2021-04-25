let baseDelay = 2.5;

// Intro animation
TweenMax.from("#intro", 2, {
    delay: baseDelay,
    y: 30,
    ease: Power4.easeOut
});
TweenMax.to("#intro", 2, {
    delay: baseDelay,
    opacity: 1,
    ease: Power4.easeInOut
});


TweenMax.from(".logo, #infoicon", 1.5, {
    delay: baseDelay + 0.5,
    y: 20,
    ease: Power4.easeInOut
});
TweenMax.to(".logo, #infoicon", 1.5, {
    delay: baseDelay + 0.5,
    opacity: 1,
    ease: Power4.easeInOut
});


TweenMax.from("#information, .zdog-container", 2.5, {
    delay: baseDelay + 0.5,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#information, .zdog-container", 2.5, {
    delay: baseDelay + 0.5,
    opacity: 1,
    ease: Power2.easeInOut
});

TweenMax.from("#learn", 2.5, {
    delay: baseDelay + 1,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#learn", 2.5, {
    delay: baseDelay + 1,
    opacity: 1,
    ease: Power2.easeInOut
})

TweenMax.from("#item1", 2.5, {
    delay: baseDelay + 1.5,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item1", 2.5, {
    delay: baseDelay + 1.5,
    opacity: 1,
    ease: Power2.easeInOut
})
TweenMax.from("#item2", 2.5, {
    delay: baseDelay + 1.8,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item2", 2.5, {
    delay: baseDelay + 1.8,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item3", 2.5, {
    delay: baseDelay + 2.1,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item3", 2.5, {
    delay: baseDelay + 2.1,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item4", 2.5, {
    delay: baseDelay + 2.4,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item4", 2.5, {
    delay: baseDelay + 2.4,
    opacity: 1,
    ease: Power2.easeInOut
});


TweenMax.from(".copyright", 2.5, {
    delay: baseDelay + 2.7,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to(".copyright", 2.5, {
    delay: baseDelay + 2.7,
    opacity: 1,
    ease: Power2.easeInOut
});