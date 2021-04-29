let baseDelay = 2.5;

// Removes element from html
function removeOverlay() {
    element = document.querySelector("#overlay");
    element.parentNode.removeChild(element);
}

tl = gsap.timeline({onComplete: removeOverlay});
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

TweenMax.from("#learn", 2.5, {
    delay: baseDelay + 1.3,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#learn", 2.5, {
    delay: baseDelay + 1.3,
    opacity: 1,
    ease: Power2.easeInOut
})


TweenMax.from("#item1", 2.3, {
    delay: baseDelay + 1.6,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item1", 2.3, {
    delay: baseDelay + 1.6,
    opacity: 1,
    ease: Power2.easeInOut
})
TweenMax.from("#item2", 2.3, {
    delay: baseDelay + 1.8,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item2", 2.3, {
    delay: baseDelay + 1.8,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item3", 2, {
    delay: baseDelay + 2,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item3", 2.3, {
    delay: baseDelay + 2,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item4", 2.3, {
    delay: baseDelay + 2.2,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item4", 2.3, {
    delay: baseDelay + 2.2,
    opacity: 1,
    ease: Power2.easeInOut
});


TweenMax.from(".copyright-footer, .logo, #infoicon", 2.5, {
    delay: baseDelay + 1.8,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to(".copyright-footer, .logo, #infoicon", 2.5, {
    delay: baseDelay + 1.8,
    opacity: 1,
    ease: Power2.easeInOut
});