// Credit to https://codepen.io/nickforthewin/pen/QWLzVjY

let cursor = document.querySelector('.follower');
let cursorinner = document.querySelector('.cursor');
let followtext = document.querySelector('.follow-text');
let followtextcontent = document.querySelector('.follow-text-content');
let a = document.querySelectorAll('a');
let mouseMoved = false;

// On mouse move, update the cursor location
document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  let fx = e.clientX - 50;
  let fy = e.clientY + 40;
  
  //main cursor
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
  
  // follow ring cursor
  TweenMax.to(cursor, 0.5, {
    x: x,
    y: y
  })

  // follow text
  TweenMax.to(followtext, 0.5, {
    x: fx,
    y: fy
  })

  if (mouseMoved == false) {
    TweenMax.to(".cursor", .2, {css: {
      "background-color": "white"
    }})
    mouseMoved = true;
  }
});

// Add cursor-click style when mousedown
document.addEventListener('mousedown', function(){
  cursorinner.classList.add('cursor-click')
});

// Remove cursor-click style when mouseup
document.addEventListener('mouseup', function(){
  cursorinner.classList.remove('cursor-click')
});

// Cursor styling when hovering over a, buttons, i, and .close
document.querySelectorAll('a, button, i, .close').forEach(item => {
  item.addEventListener('mouseover', () => {
    TweenMax.to(".follower", .2, {css: {
      border: "3.5px solid #EE964B",
      width: "50px",
      height: "50px",
    }})
    cursorinner.classList.add('inner-hover')
  });
  item.addEventListener('mouseleave', () => {
    TweenMax.to(".follower", .2, {css: {
      width: "40px",
      height: "40px",
      border: "2px solid #cc2255"
    }})
    cursorinner.classList.remove('inner-hover')
  });
})

// Change text to drag me on zdog
// document.querySelectorAll('.zdog-canvas').forEach(item => {
//   item.addEventListener('mouseover', () => {
//     TweenMax.to(followtext, 0.7, {css: {
//       opacity: 1,
//     }})
//     followtextcontent.innerHTML = "drag me";
//   });
//   item.addEventListener('mouseleave', () => {
//     TweenMax.to(followtext, 0.7, {css: {
//       opacity: 0,
//     }})
//     followtextcontent.innerHTML = "";
//   });
// })

// Change text to "new tab" for buttons and anchors
document.querySelectorAll('a, button').forEach(item => {
  item.addEventListener('mouseover', () => {
    TweenMax.to(followtext, 0.7, {css: {
      opacity: 1,
    }})
    followtextcontent.innerHTML = "NEW TAB";
  });
  item.addEventListener('mouseleave', () => {
    TweenMax.to(followtext, 0.7, {css: {
      opacity: 0,
    }})
    followtextcontent.innerHTML = "";
  });
})





// Changing cursor color when on modal content to make it visible
$(function() {
    $('.modal-content').hover(function() {
      $('.cursor').css('background-color', '#1f1f1f');
    }, function() {
      // on mouseout, reset the background colour
      $('.cursor').css('background-color', '');
    });
  });