$(function(){
  var menupos = $('.nav').offset().top;
  $(window).scroll(function(){
  	if($(window).scrollTop() >= menupos) {
  	  $('header').css("position", "fixed");
  	  $('header').css("top", "0");
  	} else {
  		$('header').css("position", "relative");
  		$('header').css("top","");
  	}
  })
  function slideShow(){
    $('.slide').animate({marginLeft:'-100%'}, 2000, 'linear',
      function(){
        $('.slideShow:first').appendTo('.slide')
        $('.slide').css('margin-left',0);
      })
  }
  setInterval(slideShow, 3000);
  $('.pre_btn').click(function(){
    $('.slide').stop().animate({marginLeft: '-100%'},1000 ,
      function(){
        $('.slideShow:first').appendTo('.slide')
        $('.slide').css('margin-left', 0);
      });
  });
  $('.next_btn').click(function(){
    $('.slideShow:last').prependTo('.slide')
    $('.slide').css('margin-left', '-100%');
    $('.slide').stop().animate({marginLeft: 0},1000)
  });
  
})