$(function(){
	$('.gnb > li').hover(function(){
    $('.header').css({background:'#fff'})
    $('.header>h1>a>img').attr("src","img/logo_on.png")
    $('.gnb > li > a').css({color:'#000'});
    $(this).children('a').css({color:'#07348c'})
    $('.button_form > a').css({color:'#000',border:'1px solid #000'})
    $('.btn_openWrap').css({background:'#07348c'})
    $(this).children('.sub_wrap').show();
	},function(){
		$('.header').css({background:'transparent'})
    $('.header>h1>a>img').attr("src","img/logo_off.png")
    $('.gnb > li > a').css({color:'#fff'});
    $('.button_form > a').css({color:'#fff',border:'1px solid #fff'})
    $('.btn_openWrap').css({background:'transparent'})
    $(this).children('.sub_wrap').hide();
	});
	$('.sub > li > a').hover(function(){
    $(this).css({color:'#07348c', borderBottom:'1px solid #07348c'})
	},function(){
    $(this).css({color:'#000',  borderBottom:'1px solid #000'})
	})

  $('.slideimg li:first').css('opacity',1);
	
		var cnt = 0;
		function show() {
			cnt++;

			if(cnt < $('.slideimg li').length) {
				slide(cnt);
			}else {
				cnt=0;
				slide(cnt);
			}
		}
		function slide(cnt) {
			$('.slideimg li').css('opacity',0);
			$('.slideimg li').eq(cnt).css('opacity', 1);
		}
    setInterval(show,4000);
	
});//end