// header section starts

const header = document.querySelector('.header')
for (var i = 0; i<= 100; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    header.appendChild(blocks);
}

function animateBlocks(){
    anime({
        targets: '.block',
        translateX: function() {
            return anime.random(-700,700);
        },
        translateY: function() {
            return anime.random(-500,500);
        },
        scale: function() {
            return anime.random(1,5);
        },
        easing: 'linear',
        duraation: 5000,
        delay: anime.stagger(30),
    })
}

animateBlocks();

// gsap section

gsap.from('#logo', {
    duration: 1,
    opacity: 0,
    y: -100
})

gsap.from('nav ul li', {
    duration: 1,
    opacity: 0,
    y: -100,
    stagger: .2
})

gsap.from('header .block', {
    duration: 2,
    opacity: 0,
    y: -100,
})

gsap.from('header .h1 ,header p, header .btn', {
    duration: 2.5,
    opacity: 0,
    x: -500,
})

// scroll animation

const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
});
r.init();


AOS.init({
    duration: 1500
    
});