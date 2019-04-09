//Scrolling functions
$(window).scroll(function() {


    if ($(this).scrollTop() <= $('#blockA').offset().top - 25) {
        $( "nav" ).fadeOut(500);
    }

    ///Block A
    if ($(this).scrollTop() >= $('#blockA').offset().top - 25) {
        $( "nav" ).fadeIn(500);
        $( ".bioImg" ).removeClass('invis').addClass('vis popped');
       $('nav a').stop().removeClass('active');
       $('nav a:eq(0)').stop().addClass('active');
    }

    ///Block B
    if ($(this).scrollTop() >= $('#blockB').offset().top - 25) {
      $('nav a').stop().removeClass('active');
      $('nav a:eq(1)').stop().addClass('active');
      $( ".projectA, .projectB, .projectC, .projectD" ).removeClass('invis').addClass('vis popped');
      $('#barB').stop().animate({ left: '0px' });
  } else {
      $('#barB').stop().animate({ left: '-1000px' });
  }


    ///Block C
    if ($(this).scrollTop() >= $('#blockC').offset().top - 25) {
      $('nav a').removeClass('active');
      $('nav a:eq(2)').addClass('active');
      $('#barC').stop().animate({ left: '0px' });
      $("#bye, #hold").show();
  } else {
        $('#barC').stop().animate({ left: '-1000px' });
        $('#bye, #hold').hide();
    }

    ///Block D
    if ($(this).scrollTop() >= $('#blockD').offset().top - 25) {
      $('nav a').removeClass('active');
      $('nav a:eq(3)').addClass('active');
  } else {

  }
});



///Clix
$(function() {
    $(".heading").on("click", "#scrollButt", function() {
        $('html, body').animate({
            scrollTop: $("#blockA").offset().top }, 1000);
        })

    $("nav").on("click", "a", function () {
        event.preventDefault();
    })

    $("nav").on("click", "a:eq(0)", function() {
        $('html, body').animate({
            scrollTop: $("#blockA").offset().top }, 1000);
        });

    $("nav").on("click", "a:eq(1)", function() {
        $('html, body').animate({
            scrollTop: $("#blockB").offset().top }, 1000);
        });

    $("nav").on("click", "a:eq(2)", function() {
        $('html, body').animate({
            scrollTop: $("#blockC").offset().top }, 1000);
        });

    $("nav").on("click", "a:eq(3)", function() {
        $('html, body').animate({
            scrollTop: $("#blockD").offset().top }, 1000);
        });


var windowHeight = $(window).height();
$('#nope, #blockD').height(windowHeight + 50);


    });
