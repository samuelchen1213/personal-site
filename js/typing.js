


// // Greeting effect
// const Typewriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// Typewriter.prototype.type = function() {
//     // Current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get full text of current word
//     const fullTxt = this.words[current];
//     // Check if deleting
//     if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1)
//     } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1)
//     }
//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
//     setTimeout(() => this.type(), 300)
// }

// document.addEventListener('DOMContentLoaded', bufferinit);

// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     // Init Typewriter
//     new Typewriter(txtElement, words, wait);
// }

// function bufferinit() {
//     setTimeout(init, 500);
// }


$(`document`).ready(function(){
    setTimeout(function(){
        var typed = new Typed('#greeting-typed', {
            strings: ['Hello!'],
            typeSpeed: 110,
            showCursor: true,
            onComplete: function (self){
                self.cursor.remove()
            }
        })
    },450);
})



// Intro Effect
setTimeout(function greetingAnimation() {
    var typed = new Typed('#typed', {
        strings:[
            'and I love to ideate',
            'and I love to learn', 
            'and I love to create'],
        backSpeed: 70,
        typeSpeed: 80,
        smartBackspace: true,
        backDelay: 1000
    })
}, 7000)

