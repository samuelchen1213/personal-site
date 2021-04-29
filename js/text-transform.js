let myorange = '#EE964B';

// Hover over icons effect
function changeText(el) {
    let text;
    if (el == 'resume') text = "work experience!";
    if (el == 'linkedin') text = "mandatory linkedin information.";
    if (el == 'notion') text = "the books that I am reading!";
    if (el == 'email') text = "uh, nevermind let's just have a chat!";
    if (el == 'github') text = "code and projects!";
    
    
    TweenMax.from("#description", 0.5, {
        opacity: 0,
        ease: Power2.easeInOut
    });
    TweenMax.to("#description", 0.5, {
        opacity: 1,
        ease: Power2.easeInOut
    });

    document.getElementById("description").innerText = text;
    document.getElementById("description").style.color= myorange;
    // document.getElementById("description").style.transition = "all 1s"
}

function changeOriginal() {
    TweenMax.from("#description", 0.5, {
        opacity: 1,
        ease: Power2.easeInOut
    });
    TweenMax.to("#description", 0.5, {
        opacity: 0,
        ease: Power2.easeInOut
    });

    document.getElementById("description").innerText = "...";
    document.getElementById("description").style.color="white"
    TweenMax.from("#description", 0.5, {
        opacity: 0,
        ease: Power2.easeInOut
    });
}

// Temporary
function deleteVanta() {
    TweenMax.to("#overlay", 1, {
        opacity: 1,
        ease: Power2.easeInOut
    });
    setTimeout(function() {
        $(".vanta-canvas").remove();
    }, 1000)
}