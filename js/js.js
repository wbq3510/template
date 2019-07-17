let burger = document.querySelector('.burger');
let show = document.querySelector('.fa-bars');
let showX = document.querySelector('.fa-times');
let menu = document.querySelector('aside');
let none = document.querySelector('.none')

burger.addEventListener('click', function(){
    show.classList.toggle('active')
    showX.classList.toggle('active')
    menu.classList.toggle('show')
})

// $('.fa-chevron-up').on('click', function(){
//     $('body, html').animate({
//         scrollTop: $('.launch').offset().top
//     })
// })

$(window).scroll(function() {
    if ($(this).scrollTop() > 500 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})