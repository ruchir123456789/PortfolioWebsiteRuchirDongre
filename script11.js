const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnimation(){
    var t1 = gsap.timeline();

    t1.from(".logo",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .from(".text",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut,
        scrub:true
    })
    .from(".mid",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:0.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut

    })
}

 

firstPageAnimation();