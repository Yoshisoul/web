var poemName = $(".main__poem-name").toArray();
var poem = $(".main__poem").toArray();
var description = $(".main__description").toArray();

TweenMax.staggerFrom(poemName, 1, {
    x:"100px",
    rotation:-45,         
    ease: Bounce.easeOut
}, .3)

TweenMax.staggerFrom(poem, 1, {
    top:"-100px", ease: Bounce.easeOut
}, .3)

TweenMax.staggerFrom(description, 1, {
    top:"-100px", ease: Bounce.easeOut
}, .3)