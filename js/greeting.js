
// Greeting Effect
$(`document`).ready(function(){
    setTimeout(function(){
        var typed = new Typed('#greeting-typed', {
            strings: ['Hello!'],
            typeSpeed: 100,
            showCursor: true,
            onComplete: function (self){
                self.cursor.remove()
            }
        })
    },450);
})