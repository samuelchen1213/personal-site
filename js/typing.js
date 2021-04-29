
// Greeting Effect
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
            'and I love to learn',
            'and I love to create',
            'and I love to lead',
            'and here\'s my site'
        ],
        backSpeed: 40,
        typeSpeed: 55,
        smartBackspace: true,
        backDelay: 1000
    })
}, 6400)

