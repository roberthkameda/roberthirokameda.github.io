$('.menu-toggle').click(function() {

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');

})


$('.menu-toggle-collapse ul li a').click(function(){
           $('.menu-toggle:visible').click();
})