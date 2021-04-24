// Hover over icons effect
function changeText(el) {
    let text;
    if (el == 'resume') text = "work experience!";
    if (el == 'linkedin') text = "work experience, but on linkedin!";
    if (el == 'notion') text = "reading adventure!";
    if (el == 'email') text = "uh, nevermind let's just have a chat!";
    document.getElementById("description").innerText = text;
    document.getElementById("description").style.color="orange"
    document.getElementById("description").style.transition = "all 1s"
}
function changeOriginal() {
    document.getElementById("description").innerText = "...";
    document.getElementById("description").style.color="white"
}


// Typewriter effect
const Typewriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

Typewriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() => this.type(), 300)
}

document.addEventListener('DOMContentLoaded', bufferinit);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init Typewriter
    new Typewriter(txtElement, words, wait);
}

function bufferinit() {
    setTimeout(init, 500);
}