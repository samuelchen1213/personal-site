let myorange = '#EE964B';

// Hover over icons effect
function changeText(el) {
    let text;
    if (el == 'resume') text = "work experience!";
    if (el == 'linkedin') text = "mandatory linkedin information.";
    if (el == 'notion') text = "the books that I am reading!";
    if (el == 'email') text = "uh, nevermind let's just have a chat!";
    document.getElementById("description").innerText = text;
    document.getElementById("description").style.color= myorange;
    document.getElementById("description").style.transition = "all 1s"
}
function changeOriginal() {
    document.getElementById("description").innerText = "...";
    document.getElementById("description").style.color="white"
}