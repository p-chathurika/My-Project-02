let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose= document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll =() =>{
   searchBtn.classList.remove('fa-times');
   searchBar.classList.remove('active'); 
   menu.classList.remove('fa-times');
   
   navbar.classList.remove('active');
   loginform.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    
    navbar.classList.toggle('active');
}
);


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
}
);





formBtn.addEventListener('click', () =>{
    
    loginform.classList.add('active');
    
    
}
);

formclose.addEventListener('click',() =>{
    
    loginform.classList.remove('active');
}
);


videoBtn.forEach(btn =>{
  btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active'); 
      btn. classList.add('active');  
      let src =btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;
  });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },
});

function render(data) {
    var html ="<div class='commentsBox'><div class='leftpanelImg'><img src='https://via.placeholder.com/70x71'></div><div class='rightpanel'><span><b>"+data.name+" </b></span><div class='date'><b> "+data.date+"</b></div><p><b><br>"+data.body+"</b></p></br></div><div class='clear'></div></div>";
    $('#container').append(html);
}
$(document).ready(function(){

    var comments = [];

    if(!localStorage.commentsData){
       localStorage.commentsData =[];
    }else{
        comments =JSON.parse( localStorage.commentsData);
    } 
    
    
    
      for(var i=0;i<comments.length;i++){
        render(comments[i]);
         
         
      }

    $('#addComment').click(function(){
         var addobj ={
           "name" : $('#name').val(),
           "date" : $('#date').val(),
           "body" : $('#bodyText').val()
         };
         console.log(addobj);
         localStorage.commentsData = JSON.stringify(comments);
         comments.push(addobj);
         render(addobj);
    });

    $('addComment').click(function(){
        button.add('active');
    });
    
});



