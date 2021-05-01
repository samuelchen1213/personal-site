let myorange = '#EE964B';

// Hover over icons effect
function iconHover(el) {
    // Description change
    let text;
    if (el == '#item1') text = "work experience!";
    if (el == '#item2') text = "the books that I am reading!";
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
        elarr[i].style.opacity = 0.5;
    }
}

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


// Delete and injecting vantaNet for user's performance
let el;
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    if ($(`.vanta-canvas`).length) {
        $(`#overlay`).css('background-color', '#15203C');
        TweenMax.to("#overlay", 1, {
        opacity: 1,
        ease: Power2.easeInOut
        });
        
        setTimeout(function() {
            el = $(".vanta-canvas").detach();
            console.log(el)
        }, 1000)
    } else {
        TweenMax.to("#overlay", 1, {
        opacity: 0,
        ease: Power2.easeInOut
        });
        
        $('#vantaNet').append(el)
    }
})


// Disabled button submition for a while
// Prevents bug where vantaNet is banished forever 
let enableSubmit = function(ele) {
    $(ele).removeAttr("disabled");
}

$("#checkbox").click(function() {
    var that = this;
    $(this).attr("disabled", true);
    setTimeout(function() { enableSubmit(that) }, 1100);
});
