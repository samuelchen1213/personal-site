// Intro animation
TweenMax.from("#intro", 2, {
    delay: 2.3,
    opacity: 0,
    y: -20,
    ease: Power1.easeOut
});

TweenMax.from(".logo", 1.5, {
    delay: 3.2,
    opacity: 0,
    y: -40,
    ease: Power4.easeInOut
});

TweenMax.from("#infoicon", 1.5, {
    delay: 3.2,
    opacity: 0,
    y: -40,
    ease: Power4.easeInOut
});

TweenMax.from(".info-contact", 2.5, {
    delay: 3.2,
    opacity: 0,
    y: 40,
    ease: Power4.easeInOut
});