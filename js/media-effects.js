let myorange = '#EE964B';

// Hover over icons effect
function iconHover(el) {
    // Description change
    let text;
    if (el == '#item1') text = "work experience!";
    if (el == '#item2') text = "reading list, quotes, and notes!";
    if (el == '#item3') text = "mandatory linkedin information.";
    if (el == '#item4') text = "code and projects!";
    if (el == '#item5') text = "uh, nevermind let's just have a chat!";
    
    
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


    // Icon opacity change effect
    let elarr = $(".media").children().not(el);
    for (let i = 0; i < elarr.length; ++i) {
        elarr[i].style.opacity = 0.6;
    }
}

// Animations for hovering off media buttons
function iconHoverOff(el) {
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


    // Change opacity back
    let elarr = $(".media").children().not(el);
    for (let i = 0; i < elarr.length; ++i) {
        elarr[i].style.opacity = 1;
    }
}

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("infoicon");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}