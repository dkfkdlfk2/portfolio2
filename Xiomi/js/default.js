$(function(){

var status = 0;
var latestWs = -1;
var op = 0;
var fadeop = 1;
var sca = 0; 
var act = 0; 
var lateH = 0;
var lateX = 0;
var scc = 1;
var prevScrollTop = 0;
var nowScrollTop = 0;

function wheelDelta(){
  return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
};
$(window).on('scroll',function(e){  
  var ws = $(this).scrollTop();
  var offset = $('.header').offset().top;
  var imgs = $('.imgcontainer img'); 
  var Hcompare = $('.fix_box').offset().top;
  var imgvalue = imgs.css("transform","scale");

// div.imgcontainer - img, img
// img[0] = image/index-01-phone1-2.png
// img[1] = image/index-01-phone2.png
  if(wheelDelta() == 'down'){
    if(ws >=150 && ws < 600){
      $('.fix_box').css({ height:'210vh', width:'100%'});
      $('.f_content_txt').fadeIn(500);
      $('.f_content_txt').css({display:'block',top:'60px'})
      $('.f_content').css({position:'fixed', top:'60px', left:0, width:'100%',zIndex:9999});
       status = 1; 
       scc++;
       op += 0.11; 
       act += 0.8;
       lateX += 0.3;
       sca += 0.0042;
       lateH += -0.4;
       fadeop += 0.001;
       latestWs = ws;
       if(imgvalue <= "scale(-1)"){
         imgs.eq(0).css({ opacity:0.7*fadeop, transform:'translate('+ lateH +'%, ' + lateH +'%) scale('+ (3-sca) +')' }) 
         imgs.eq(1).css({ opacity:op, transform:'translateX(' +  act +'%)'});
       }
     } else {
      //올라갈때
      /*imgs.eq(1).css({ opacity:op, transform:'translateX(' +  0 +'%)'});
      imgs.eq(0).css({ opacity:1*fadeop, transform:'translate('+ -50 +'%, '+ 100 +'%) scale('+ 3 +')' });*/
      $('.fix_box').css({ height:'0', width:'100%' });
      $('.f_content_txt').fadeIn(500);
      $('.f_content_txt').css({display:'block',top:'60px'})
      $('.f_content').css({position:'relative', top:'0', left:0, width:'100%'});
     }
  if(wheelDelta() == 'up'){
    if(ws >= 600 && ws < 150){
      op += 0.11; 
      act += 0.8;
      lateX += 0.3;
      sca += 0.042;
      lateH += -0.4;
      fadeop += 0.001;
      latestWs = ws;
      $('.fix_box').css({ height:'210vh', width:'100%' ,background:'image_3/kv-bg.jpg'});
      $('.f_content_txt').fadeIn(500);
      $('.f_content_txt').css({display:'block',top:'60px'})
      $('.f_content').css({position:'fixed', top:'60px', left:0, width:'100%',zIndex:9999});
      if(imgvalue >= "scale(1)"){
        imgs.eq(0).css({ opacity:(1*(-fadeop)), transform:'translate('+ (-lateH) +'%, ' + (-lateH) +'%) scale('+ sca +')' }) 
        imgs.eq(1).css({ opacity:op, transform:'translateX(' +  (-act) +'%)'});
      }
    }else {
      //올라갈때
      /*imgs.eq(1).css({ opacity:op, transform:'translateX(' +  0 +'%)'});
      imgs.eq(0).css({ opacity:1*fadeop, transform:'translate('+ -50 +'%, '+ 100 +'%) scale('+ 3 +')' }) */
      $('.fix_box').css({ height:'0', width:'100%' });
      $('.f_content_txt').fadeIn(500);
      $('.f_content_txt').css({display:'block',top:'60px'})
      $('.f_content').css({position:'relative', top:'0', left:0, width:'100%'});
     }
  }
  prevScrollTop = nowScrollTop;
 }
  // if(ws < 1850) {
  //    $('.img-container img:first-child').css({opacity:})
  //    $('.img-container img:first-child')

  // } else if(ws >= 1850) {
  //   $('.f_content').css({ position:'relative'});
  // }
  
  


  if(ws >= $('.header').offset().top - $(window).height()/2){
    $('.f_content_txt').fadeIn(500);
    $('.f_content_txt').css({display:'block',top:'60px'})
    $('.s_nav').css({position:'fixed',top:0,left:0,zIndex:999999,margin:0,opacity:0.8});       
  }
  if(ws <= $('.header').offset().top){
    $('.s_nav').css({position:'static',opacity:1});       
  }
  if(ws >= $('.Camera').offset().top - $(window).height()/2){
    $('.cameratext').fadeIn(500);
    $('.Camera h2').fadeIn(500);
    $('.cameratext').css({display:'block',top:'10%'})
  }
  if(ws >= $('.welcome').offset().top - $(window).height()/2){
    $('.welcome p').fadeIn(500);
    $('.welcome p').css({top:'50%'})
  }
  if(ws >= $('.displayBox').offset().top - $(window).height()/2){
    $('.displayTxt').fadeIn(500);
    $('.displayTxt2').fadeIn(500);
    $('.displayTxt').css({marginLeft:'20%'});
    $('.displayTxt2').css({top:'50%'});
    $('.displayBox').fadeIn().css({background:'url(image_2/index-11-img01.png)no-repeat center'});
  }
  if(ws >= $('.graph').offset().top - $(window).height()/2){
    $('.graph1 span').css({width:'250px'})
    $('.graph span').css({width:'300px'});
    $('span.secline').css({width:'360px'});
  }
  if(ws >= $('.promotion').offset().top - $(window).height()/2){
    $('.promotion1Txt p, .promotion2Txt p, .promotion3Txt p').fadeIn(600)
    $('.promotion1Txt p, .promotion2Txt p, .promotion3Txt p').css({margin:'12.49px 28.415px'});
    $('span.secline').css({width:'360px'});
  }
  if(ws >= $('.finger').offset().top - $(window).height()/2){
    $('.fingerTxt').fadeIn()
    $('.fingerTxt').css({paddingTop:'5%'})
    $('.finger img').fadeIn();
    $('.finger img').css({marginBottom:'30px'})
  }
  if(ws >= $('.charging').offset().top - $(window).height()/2){
    $('.chargingTxt').fadeIn();
    $('.chargingTxt').css({marginTop:'0%'})
    $('.grayTxt').fadeIn();
    $('.grayTxt').css({bottom:'20px'})
  }
});

function slidephone(){
  $('.slidephoneBox').animate({marginLeft:'-100%'},1000,function(){
    $('.slidephoneBox img:first').appendTo('.slidephoneBox');
    $('.slidephoneBox').css('margin-left',0);
    var idx = $(this).index();
    $('.slidedots span').eq(idx).css({background:'#fff'});
    $('.slidedots span').eq(idx).siblings().css({background:'transparent'});
  }); 
}
setInterval(slidephone, 5000)

function slide(){
  $('.E_slide').animate({marginLeft:'-1041.44px'},1000,function(){
    $('.E_slide li:first').appendTo('.E_slide');
    $('.E_slide').css('margin-left',0)
  }); 
}
setInterval(slide, 5000)

$('.camera_f').mouseover(function(){
  var idx = $(this).index(); console.log(idx)
  $(this).css({color:'#fff'});
  $(this).siblings().css({color:'#757575'});
  $(this).parent('.cameratext').siblings('.skill').eq(idx).children('img:nth-child(2)').css({transform:'translateX(-15px)',opacity:'1'})
  $(this).parent('.cameratext').siblings('.skill').eq(idx).children('img:nth-child(3)').css({transform:'translateX(-30px)',opacity:'1'})
  $(this).parent('.cameratext').siblings('.skill').eq(idx).children('img:nth-child(4)').css({transform:'translateX(-45px)',opacity:'1'})
  $(this).parent('.cameratext').siblings('.skill').eq(idx).children('img:nth-child(5)').css({transform:'translateX(-65px)',opacity:'1'})
  $(this).parent('.cameratext').siblings('.skill').eq(idx).children('img:nth-child(6)').css({transform:'translateX(-85px)',opacity:'1'})
  $(this).parent('.cameratext').siblings('.skill').eq(idx).children('img:nth-child(7)').css({transform:'translateX(-105px)',opacity:'1'})
  $(this).parent('.cameratext').siblings('.skill').eq(idx).siblings().children('img').attr('style','');

});
var img = [];
   for(var i=1; i<130; i++){
     if(i < 10){   
            img[i] = 'image_3/MIUI11_00' + i + '.png';
          } else if(i<100) {
            img[i] = 'image_3/MIUI11_0' + i + '.png';
          } else {
            img[i] = 'image_3/MIUI11_' + i + '.png';
          }
   }
   
    var scroll = function (){
       var ws = $(window).scrollTop(); 
       
       var section = $('.MIUI'); 
       if(ws >= 16220 && ws <17097 ) {
        $('.empty1').css({height:'1500px'})
          section.css({
            position: 'fixed',
            top: '0',
            height:'2000px',
            zIndex:'9999' 
          });
          
          // $(window).off('scroll', scroll);
          //wheelEv(section);
       } else {
          section.css({
            position:'relative',
            top:0,
            height:'100%'
          });
       }
       if(ws >= 17100){
        $('.empty1').css({height:0})
        
       }
    } 
  // console.log(img)     
  // $('.img').html('<img src="' + img[1] + '".png" >');
  $(window).on('scroll', scroll);
  var cnt = 0;
  /* function wheelEv(ele){
         console.log(img);
         ele.css({paddingBottom: '42%', height:'100%'});
         
         
           // $(window).on('scroll', function(){
         setTimeout( function(){ 
         
          cnt++;
          if(cnt >= 130) {
            cnt = 0;
            return
          } else{
            $('.img').html('<img src="' + img[cnt] + '">');
          }
         }, 100);

           // })    
        
   }*/ 
    function jj(){ 
      $(window).scroll(function(e){
      e.preventDefault()
     })
    }

    $(".MIUI").on('mousewheel',function(e){
     var wheel = e.originalEvent.wheelDelta;
     var ws = $(window).scrollTop(); 
     jj();
     
     //스크롤값을 가져온다.
     if(wheel<0){
     //스크롤 올릴때
     console.log(cnt)
       cnt++;
          if(cnt >= 129) {
            cnt = 130;
            

          } else{
            $('.img').html('<img src="' + img[cnt] + '">');
            e.preventDefault();
          }
     } else {
     //스크롤 내릴때
       cnt--;
          if(cnt < 1) {
            cnt = 1;
            
          } else{
            $('.img').html('<img src="' + img[cnt] + '">');
            e.preventDefault();
          }
     }
});



});