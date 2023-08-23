const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;

function circlechaptka(){
    var xscale=1;
    var yscale=1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){
        this.clearTimeout(timeout);
        var xdiff= dets.clientX - xprev;
        var ydiff= dets.clientY - yprev;

        xscale=gsap.utils.clamp(.8,1.2,xdiff);
        yscale=gsap.utils.clamp(.8,1.2,ydiff);

        xprev=dets.clientX;
        yprev=dets.clientY;
       
        circleMouseFollower(xscale,yscale);
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`

        },100)

    });
}
circlechaptka();

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
})
}

function firstpageAnima(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y: '-10',
        opacity:0,
        duration: 2,
        ease: Expo

    })
    .to(".hi",{
        y: '0',
       ease: Expo.easeInOut,
       duration:2,
       stagger:.2,
       delay:-1
    })
    .from("#herofooter",{
        y: '-10',
        opacity :0,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut 
       
    })

}



circleMouseFollower();
firstpageAnima();



document.querySelectorAll(".element").forEach(function (element) {
    var rotate = 0;
    var diffX = 0;
    element.addEventListener("mouseleave", function (details) {
        gsap.to(element.querySelector("img"), {
          opacity: 0,
          ease: "power3",
          duration:0.5,
        });
      });
  
    element.addEventListener("mousemove", function (details) {
      var diffY = details.clientY - element.getBoundingClientRect().top;
      diffX = details.clientX - rotate;
      rotate = details.clientX;
  
      gsap.to(element.querySelector("img"), {
        opacity: 1,
        ease: "power3",
        top: diffY,
        left: details.clientX,
        rotation: gsap.utils.clamp(-20, 20, diffX*0.5),
      });
    });
  });
  