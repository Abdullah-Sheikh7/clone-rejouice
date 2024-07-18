



function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
loco()

function cursor() {
    let pgcontent = document.querySelector(".pg-content ")
let cursor = document.querySelector(".cursor")

pgcontent.addEventListener("mousemove",function(pointer){
     gsap.to(cursor,{
         x:pointer.x,
         y:pointer.y,
     })

})
pgcontent.addEventListener("mouseenter",function(){
gsap.to(cursor,{
    scale:1,
    opacity:1,
})
})

pgcontent.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0,
    })
})



}
cursor()

function pg2() {
    gsap.from(".elem h1 ", {
      y:100,
      opacity:0,
      stagger:0.2,
      duration:0.5,

        scrollTrigger: {
          trigger: "#pg2",
          scroller: "#main",
          start: "top 47%",
          end: "top 46%",
        //   markers: true,
          scrub: 2
        }
      });
}
pg2()

function cursor2() {
  let pgcontent2 = document.querySelector(".pg-con");
  let cursor2 = document.querySelector(".cursor2");
  

  pgcontent2.addEventListener("mousemove",function(pointer){
    gsap.to(cursor2,{
        x:pointer.x,
        y:pointer.y,
    })

})
pgcontent2.addEventListener("mouseenter",function(){
gsap.to(cursor2,{
   scale:1,
   opacity:1,
})
})

pgcontent2.addEventListener("mouseleave",function(){
   gsap.to(cursor2,{
       scale:0,
       opacity:0,
   })
})


}
cursor2();

function swiper() {
  
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    }
});
}

swiper()
function textwrapper() {
    gsap.from(".text_box ", {
       y:100,
      opacity:0,
      stagger:0.2,
      duration:0.5,
      scrollTrigger: {
        trigger: "#pg4",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        // markers: true,
        scrub: 2
      }
    });

}
textwrapper()

// cursor.style.left = pointer.x+"px"
//  cursor.style.top = pointer.y +"px"

var time =gsap.timeline()

time.from(".loadr h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.2,

})
time.to(".loadr h3",{
opacity:0,
x:-10,
duration:1,
stagger:0.1,
})
time.to(".loadr",{
  opacity:0,
})
time.to(".loadr",{
  display:"none",
})
time.from(".pg-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.2,
  duration:0.5,
})
function flow() {
  gsap.from(".elem4-5 h1 ", {
    y:100,
   opacity:0,
   stagger:0.2,
   duration:0.5,
   scrollTrigger: {
     trigger: "#pg4",
     scroller: "#main",
     start: "top 47%",
     end: "top 46%",
     // markers: true,
     scrub: 2
   }
 });
}
flow()