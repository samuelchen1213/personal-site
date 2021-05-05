// Greeting Effect
$(`document`).ready(function(){
    setTimeout(function(){
        var typed = new Typed('#greeting-typed', {
            strings: ['Hello!'],
            typeSpeed: 75,
            showCursor: true,
            onComplete: function (self){
                self.cursor.remove()
            }
        })
    },450);
})

function greetingAnimation() {
    setTimeout(function () {
        var typed = new Typed('#typed', {
            strings:[
                'and I love to learn',
                'and I love to create',
                'and I love to lead',
                'and here\'s my site'
            ],
            backSpeed: 55,
            typeSpeed: 75,
            smartBackspace: true,
            backDelay: 1500
        })
    }, 300)
}

tl = gsap.timeline({onComplete: greetingAnimation});
tl.to("body", 2.5, {
        delay: 1,
        backgroundColor: '#15203C',
        ease: Power2.easeInOut}, 1)
    .from('#intro', 2.5, {
        delay: 0.6, 
        // y: 15, 
        opacity:0, 
        ease: Power4.easeOut}, 1)
    .to('#intro', 2.5, {
        delay: 0.6, 
        ease: Power4.easeOut, 
        opacity: 1}, 1)
    .from(".copyright-footer, .logo, #infoicon", 2, {
        delay: - 2,
        opacity: 0,
        ease: Power2.easeInOut})
    .to(".copyright-footer, .logo, #infoicon", 2, {
        delay: - 2,
        opacity: 1,
        ease: Power2.easeInOut
    });

let baseDelay = 1.7;

TweenMax.from("#p1", 2.5, {
    delay: baseDelay,
    // y: 15, 
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#p1", 2.5, {
    delay: baseDelay,
    opacity: 1,
    ease: Power2.easeInOut
});

TweenMax.from("#p2", 2.5, {
    delay: baseDelay + 0.2,
    // y: 15, 
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#p2", 2.5, {
    delay: baseDelay + 0.2,
    opacity: 1,
    ease: Power2.easeInOut
});

TweenMax.from("#p3, .zdog-container", 2.5, {
    delay: baseDelay + 0.4,
    // y: 15, 
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#p3, .zdog-container", 2.5, {
    delay: baseDelay + 0.4,
    opacity: 1,
    ease: Power2.easeInOut
});

TweenMax.from("#learn", 3, {
    delay: baseDelay + 0.6,
    // y: 15, 
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#learn", 3, {
    delay: baseDelay + 0.6,
    opacity: 1,
    ease: Power2.easeInOut
})


TweenMax.from("#item1", 1, {
    delay: baseDelay + 1.5,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item1", 1, {
    delay: baseDelay + 1.5,
    opacity: 1,
    ease: Power2.easeInOut
})
TweenMax.from("#item2", 1, {
    delay: baseDelay + 1.7,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item2", 1, {
    delay: baseDelay + 1.7,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item3", 1, {
    delay: baseDelay + 1.9,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item3", 1, {
    delay: baseDelay + 1.9,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item4", 1, {
    delay: baseDelay + 2.1,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item4", 1, {
    delay: baseDelay + 2.1,
    opacity: 1,
    ease: Power2.easeInOut
});
TweenMax.from("#item5", 1, {
    delay: baseDelay + 2.3,
    opacity: 0,
    ease: Power2.easeInOut
});
TweenMax.to("#item5", 1, {
    delay: baseDelay + 2.3,
    opacity: 1,
    ease: Power2.easeInOut
});

