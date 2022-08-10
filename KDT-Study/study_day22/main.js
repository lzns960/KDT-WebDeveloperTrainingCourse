const slide1 = gsap.timeline();

slide1.from(".s1-slogan1", {
    delay: .5,
    scale: 3,
    duration: 1.5,
    opacity: 0,
}).from(".s1-slogan2", {
    scale: 3,
    duration: 1.5,
    opacity: 0,
});

ScrollTrigger.create({
    animation: slide1,
    trigger: ".slide1",
    start: "top top ",
    // end: "bottom 20%",
    end: "+=5000",
    scrub: 2,
    markers: true,
    pin: true,
});

const slide2 = gsap.timeline();

slide2.to(".plane", {
    x: "95vw",
    y: "-25vh",
    scale: 0.6,
});

ScrollTrigger.create({
    animation: slide2,
    trigger: ".slide2",
    start: "top 0%",
    end: "bottom 20%",
    scrub: 2,
    markers: true,
});

const slide3 = gsap.timeline();

ScrollTrigger.create({
    animation: slide3,
    trigger: ".slide3",
    start: "20% top",
    end: "+=5000",
    pin: true,
    scrub: 2,
    markers: true,
});


slide3.to(".s3-slogan1", {
    opacity: 1,
    scale: 0.5,
}, 1).to(".s3-slogan2", {
    rotation: 360,
    scale: 0.5,
    opacity: 1,
}, 1).to(".s3-slogan3", {
    scale: 0.5,
    opacity: 1,
}, 1).to(".s3-slogan1", {
    x: 1000,
    opacity: 0,
}, 2).to(".s3-slogan2", {
    x: -1000,
    opacity: 0,
}, 2).to(".s3-slogan2", {
    opacity: 0,
}, 2).to(".s3-slogan3", {
    opacity: 0,
}, 1);

const slide4 = gsap.timeline();

ScrollTrigger.create({
    animation: slide4,
    trigger: ".slide4",
    start: "30% top",
    end: "+=5000",
    pin: true,
    scrub: 2,
    markers: true,
});

slide4.to(".tree-left", {
    scale: 1.5,
}).to(".tree-right", {
    scale: 1.5,
}, "<").to(".tree-left", {
    x: -500,
    scale: 1.3,
}).to(".tree-right", {
    x: 500,
    scale: 1.3,
}, "<").to(".beach", {
    scale: 0.7,
}, "<").from(".text", {
    scale: 2,
    y: -300,
}, "<");


const slide5 = gsap.timeline();

ScrollTrigger.create({
    animation: slide5,
    trigger: ".slide5",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 2,
    markers: true,
})

slide5.from(".s5-slogan1", {
    scale: 4,
    opacity: 0,
}).to(".s5-slogan1", {
    scale: 4,
    opacity: 0,
});