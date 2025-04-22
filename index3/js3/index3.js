
let nav = document.querySelector(".navigation_wrap");
window.onscroll = function(){
     if(document.documentElement.scrollTop > 20){
       nav.classList.add("scroll-on");
     }else{
        nav.classList.remove("scroll-on");

     }
 }
 let navBar = document.querySelectorAll(".nav-link");
 let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
   a.addEventListener("click", function(){      navcollapse .classList.remove("show");
      
  })
})
