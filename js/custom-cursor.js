// Credit to https://codepen.io/nickforthewin/pen/QWLzVjY

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

// $(document).ready(function() {
//     var x = instanceOfMouseEvent.clientX;
//     var y = instanceOfMouseEvent.clientY;
//     cursorinner.style.left = x + 'px';
//     cursorinner.style.top = y + 'px';
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// });
    


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
  TweenMax.to(cursor, .5, {
    x: e.pageX,
    y: e.pageY
  })
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

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

$(function() {
    $('.modal-content').hover(function() {
      $('.cursor2').css('background-color', '#1f1f1f');
    }, function() {
      // on mouseout, reset the background colour
      $('.cursor2').css('background-color', '');
    });
  });