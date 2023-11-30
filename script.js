let cr=document.querySelector("#cursor");
let a=document.querySelectorAll("a");
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
window.addEventListener("mousemove",function(detail){
    detail.clientX;
    detail.clientY;
    this.setTimeout(function () {
        cr.style.top=detail.y +"px";
        cr.style.left=detail.x +"px";
      },100)
});

function toggleMenu() {
    menu.classList.toggle('show');
}
hamburger.addEventListener('click', toggleMenu);

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        menu.classList.remove('show');
    }
});

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('show');
    }
});
gsap.to("#nav",{
    backgroundColor:"#fff",
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
    }
});
gsap.from(".img1",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:60,
})
gsap.from(".img2",{
    opacity:0,
    duration:1,
    delay:0.4,
    x:60,
})
gsap.from(".img3",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:-60,
})
gsap.from("#hero h1",{
    opacity:0,
    duration:1,
    delay:0.4,
})
gsap.from("#herobtn",{
    y:30,
    opacity:0,
    duration:1,
    delay:0.4,
})
gsap.from("#about h5",{
    opacity:0,
    y:30,
    duration:1,
    scrollTrigger:{
        trigger:"#about h5",
        scroller:"body",
    }
})
gsap.from("#about h1",{
    opacity:0,
    y:30,
    delay:0.2,
    duration:1,
    scrollTrigger:{
        trigger:"#about h1",
        scroller:"body",
    }
})
gsap.from("#aboutbtn",{
    opacity:0,
    y:30,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#about button",
        scroller:"body",
    }
})