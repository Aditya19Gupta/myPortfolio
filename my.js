$(document).ready(function(){
    
    let menuIcon=document.querySelector('#menu-icon');
    let navBar=document.querySelector('.navbarex');

    menuIcon.onclick = () =>{
        menuIcon.classList.toggle('bx-x');
        navBar.classList.toggle('active');
    }

    $('.logo').click(function(){
        $('.home').show();
    })

    $("#active").click(function(e){
        $(".home").fadeIn(2000);
        $(".home").show();
        $('#active').css("color","#0ef");
        showContent(e.currentTarget.hash.slice(1));
        e.preventDefault();
        // $(".about").hide();
        // $(".skills").hide();
        // $(".contact").hide();
        $('#about').css("color","#fff");
        $('#skills').css("color","#fff");
        $('#contact').css("color","#fff");
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');
    });
    $("#about").click(function(){
        $(".about").fadeIn(2000);
        
        //$(".home").hide();
        $(".about").show();
        // $(".skills").hide();
        // $(".contact").hide();
        $('#about').css("color","#0ef");
        $('#active').css("color","#fff");
        $('#contact').css("color","#fff");
        $('#skills').css("color","#fff");
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');
    });
    $("#skills").click(function(){
        $(".skills").fadeIn(2000);
        // $(".home").hide();
        // $(".about").hide();
        $(".skills").show();
        //$(".contact").hide();
        $('#skills').css("color","#0ef");
        $('#active').css("color","#fff");
        $('#about').css("color","#fff");
        $('#contact').css("color","#fff");
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');
    });
    $("#contact").click(function(){
        $(".contact").fadeIn(2000);
        // $(".home").hide();
        // $(".about").hide();
        // $(".skills").hide();
        $(".contact").show();
        $('#contact').css("color","#0ef");
        $('#active').css("color","#fff");
        $('#about').css("color","#fff");
        $('#skills').css("color","#fff");
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');
    });


});

//this is for typing letter animation
const typed= new Typed('.multiple-text',{
    strings:['Java Developer','Frontend Developer','Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
