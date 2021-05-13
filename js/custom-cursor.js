// Credit to https://codepen.io/nickforthewin/pen/QWLzVjY

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

// On mouse move, update the cursor location
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
  TweenMax.to(cursor, .5, {
    x: x,
    y: y
  })
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
    TweenMax.to(".cursor", .2, {css: {
      border: "3.5px solid #EE964B",
      width: "50px",
      height: "50px",
    }})
    cursorinner.classList.add('inner-hover')
  });
  item.addEventListener('mouseleave', () => {
    TweenMax.to(".cursor", .2, {css: {
      width: "40px",
      height: "40px",
      border: "2px solid #cc2255"
    }})
    cursorinner.classList.remove('inner-hover')
  });
})

// Changing cursor color when on modal content to make it visible
$(function() {
    $('.modal-content').hover(function() {
      $('.cursor2').css('background-color', '#1f1f1f');
    }, function() {
      // on mouseout, reset the background colour
      $('.cursor2').css('background-color', '');
    });
  });