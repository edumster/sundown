const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



var vcovered =document.querySelector(".vcover")
var play= document.querySelector(".play")
vcovered.addEventListener("mouseenter",function(){
    gsap.to(play,{
        opacity:1,
        scale:1,
       
    })
})
vcovered.addEventListener("mouseleave",function(){
    gsap.to(play,{
        opacity:0,
       scale:0
    })
})
vcovered.addEventListener("mousemove",function(dets){
     gsap.to(play,{
         left:dets.x,
         top:dets.y

     })
})


gsap.from("h4",{
    left:"30%",
    duration:2.5,
ease: "circ.out",
})
gsap.from(".page1 h1",{
    x:"100%",
    duration:2.5,
ease: "circ.out",
})
gsap.from(".page1  p",{
    y:"-100%",
    duration:1.5,
    ease: "circ.out",
})



var backimage = document.querySelector(".p5right")
document.querySelector(".heading").addEventListener("mouseenter",function(){
  
})

var headings = document.querySelectorAll(".h-con")
headings.forEach(function(e){

e.addEventListener("mouseenter",function(){

    var images = e.getAttribute("data-image")
    console.log(images)
   backimage.style.backgroundImage=`url(${images})`


})

    

})






var par = document.querySelector(".para")

var headings = document.querySelectorAll(".h-con")
headings.forEach(function(e){

e.addEventListener("mouseenter",function(){

    var paragraph = e.getAttribute("data-p")
    console.log(paragraph)
    par.innerHTML=`${paragraph}`
   

})

    

})



































var fixed = document.querySelector(".fixed-image")
 document.querySelector(".elem-container").addEventListener("mouseenter", function(){
    fixed.style.display="block";
    
 })
 document.querySelector(".elem-container").addEventListener("mouseleave", function(){
     fixed.style.display="none";
 })

 var elem1 = document.querySelector("#elem1")
 
//  elem1.addEventListener("mouseenter" ,function(){
//     var image = elem1.getAttribute("data-image") 
  
//     fixed.style.backgroundImage =`url(${image})`;
//  })


var elems = document.querySelectorAll(".elem")

elems.forEach(function(e){

   e.addEventListener("mouseenter",function(){
   
    var image = e.getAttribute("data-image") 
  
         fixed.style.backgroundImage =`url(${image})`;
         
   })



})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    
  });