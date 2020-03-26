$(document).ready(function(){


$(".first-icon").click(function()
{

    $(this).toggleClass('fa-bars').toggleClass('fa-close')
})
$(".first-icon").click(function(){
    if($(this).hasClass("fa-close"))
     {
        $(".nav").slideDown();
        
     }
     else{
        $(".nav").slideUp();
 
 
     }
 })
 
 $(".sp1 , .sp2 , .sp3").click(function(){
    $(this).addClass("activespan").siblings().removeClass("activespan")
});
$(".sp1").click(function(){
  
    $(" .third").fadeIn();
    $(".second").fadeOut();
    $(".first").fadeOut();
    //addClass("visible").siblings().removeClass("visible")

})
$(".sp3").click(function(){
  
    $(" .third").fadeOut();
    $(".second").fadeOut();
    $(".first").fadeIn();    
    //addClass("visible").siblings().removeClass("visible")

})
$(".sp2").click(function(){
    $(" .first").fadeOut();
    $(".second").fadeIn();
    $(".third").fadeOut(); 
    //addClass("visible").siblings().removeClass("visible")

})
   /*start initialization WOW animation jquery*/
   new WOW().init();
//fire fancybox blugin
   $(".fancybox").fancybox();

    $(".right-solution h3").click(function(){
        $(this).next().slideToggle(300);
        $(".right-solution p").not($(this).next()).slideUp(300)
    })
    $('.timer').countTo();
    var mixer = mixitup('.recent-body',{
        animation:{
            effectsOut : 'fade translateX(-100%)'
        }
    })
  
    $(".recent-flex button").click(function(){
        $(".recent-flex button").removeClass("active");
        $(this).addClass("active"); 
    }) 
   /*fire nicescroll plugin */
$("html").niceScroll({
    cursorcolor:"#524B76",
    cursorwidth:"11px",
    cursorheight:"200px",
    cursorborder:"2px",
    cursorborderradius:"none",
    background:"#fff",
});     

   

})

 /*to top button*/
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    
    $("html,body").animate({scrollTop:0},'500')
}

