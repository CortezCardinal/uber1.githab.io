$(document).ready(function(){
/*	$(".logo__title").click(function( event ) {
  event.preventDefault(); 
});*/
	const associate__carousel = $('#associate-body__carousel');
    const left = $('#sliderLeft');
    const right = $('#sliderRight');
    const owl = $('.owl-carousel');

left.click(function(){
    associate__carousel.trigger('prev.owl.carousel');
})

right.click(function(){
associate__carousel.trigger('next.owl.carousel');
})
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:16,
    responsive:{
        0:{
            items:1
        },
        385:{
            items:1
        },
        900:{
            items:4
        }
    }
  	});
/*$( ".sub-menu__items a" ).click(function( e ){e.preventDefault();});*/
$( ".footer-body__description-item a" ).click(function( e ){e.preventDefault();});
$( ".footer-body__description-social a" ).click(function( e ){e.preventDefault();});
$(".sender-body__info-circle").click(function( event ) {
 $(".sender-body__info-circle").toggleClass("active-circle-circle");
$(".sender-body__info-title").toggleClass("active-circle");
 $(".send-body-form2").toggleClass("send-body-form2-active");
});
   $(".burger-menu").click(function( event ) {
   $(".burger-menu").addClass("burger-menu-active");
  $(".header__menu-bg").addClass("header__menu-bg-active");
 $(".menu-items").addClass("menu-items-active");
 $("body").addClass("body-active-menu");
  $(".menu-items__list-link").addClass("menu-items__list-link-active");
  $(".sub-menu__items").addClass("sub-menu__items-active");
  $(".menu-items__list-link-body").addClass("menu-items__list-link-body-active");
 
 });
   $(".menu-burger-cross").click(function( event ) {
$(".burger-menu").removeClass("burger-menu-active");
  $(".header__menu-bg").removeClass("header__menu-bg-active");
  $(".menu-items").removeClass("menu-items-active");
  $("body").removeClass("body-active-menu");
  $(".menu-items__list-link").removeClass("menu-items__list-link-active");
  $(".sub-menu__items-link").removeClass("sub-menu__items-active");
  $(".sub-menu__items").removeClass("sub-menu__items-active");
  $(".menu-items__list-link-body").removeClass("menu-items__list-link-body-active");
 });
});
 