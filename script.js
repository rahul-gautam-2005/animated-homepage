function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    opacity:0,
    y:-30,
    delay:0.5,
    duration:0.7,
    stagger:0.2
})
tl.from(".center-part2 img",{
    x:50,
    opacity:0,
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,
})
tl.from(".center-part1 p",{
    y:100,
    opacity:0,
    duration:0.4,
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
})
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})

}


function page2Animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section1bottom",
        scroller:"body",
        start:"top 80%",
        end:"top -20%",
        scrub:2,
    }
})
tl2.from(".services",{
    y:-50,
    opacity:0,
    duration:0.6,
})
tl2.from(".card.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
},"line1card")
tl2.from(".card.line1.right",{
    x:300,
    opacity:0,
    duration:1,
},"line1card")
tl2.from(".card.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
},"line2card")
tl2.from(".card.line2.right",{
    x:300,
    opacity:0,
    duration:1,
},"line2card")
}

page1Animation();
page2Animation();