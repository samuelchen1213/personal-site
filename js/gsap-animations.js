// Intro animation
TweenMax.from("#intro", 2, {
    delay: 2.8,
    y: -40,
    ease: Power4.easeOut
});
TweenMax.to("#intro", 2, {
    delay: 2.8,
    opacity: 1,
    ease: Power4.easeInOut
});


TweenMax.from(".logo, #infoicon", 1.5, {
    delay: 3.7,
    y: -40,
    ease: Power4.easeInOut
});
TweenMax.to(".logo, #infoicon", 1.5, {
    delay: 3.7,
    opacity: 1,
    ease: Power4.easeInOut
});


TweenMax.from(".info-contact, .zdog-container", 2.5, {
    delay: 3.7,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to(".info-contact, .zdog-container", 2.5, {
    delay: 3.7,
    opacity: 1,
    ease: Power2.easeInOut
});

TweenMax.from(".copyright", 2.5, {
    delay: 3.7,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to(".copyright", 2.5, {
    delay: 3.7,
    opacity: 1,
    ease: Power2.easeInOut
});