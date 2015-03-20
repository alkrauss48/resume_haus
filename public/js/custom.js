$(document).ready(function(){
  $('a.examples').click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#examples").offset().top
    }, 800);
  });

  $('a.learn-more').click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#learn-more").offset().top
    }, 600);
  });
});
