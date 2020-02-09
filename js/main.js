// スライドショー
$('.fade').slick({
    autoplay: true, //自動再生
    dots: false, //ドットのナビゲーションを表示
    infinite: true, //スライドのループ有効化
    speed: 1000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
  });

// navi固定
  $(function() {
    var $win = $(window),
        $main = $('main'),
        $nav = $('nav'),
        navHeight = $nav.outerHeight(),
        navPos = $nav.offset().top,
        fixedClass = 'navi-fixed';
  
    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > navPos ) {
        $nav.addClass(fixedClass);
        $main.css('margin-top', navHeight);
      } else {
        $nav.removeClass(fixedClass);
        $main.css('margin-top', '0');
      }
    });
  });


  // Tab(横)
  $(document).ready(function(){
    demoClickAction();
  });
  
  function demoClickAction(){
    $('#demo_headline li').click(function() {
      $('#demo_story li').hide();
      $('#demo_headline li').removeClass('current');
      $(this).addClass('current');
      index = $("#demo_headline li").index(this) + 1;
    $('#demo_story li:nth-child('+index+')').removeClass('current');
    $('#demo_story li:nth-child('+index+')').fadeIn();
    $('#demo_story li:nth-child('+index+')').addClass('current');
    });
  }

  
//  Tab(縦)
$(document).ready(function(){
  demo2_clickAction();
});

function demo2_clickAction(){
  $('#demo2_headline li').click(function() {
    $('#demo2_story li').hide();
    $('#demo2_headline li').removeClass('current');
    $(this).addClass('current');
    index = $("#demo2_headline li").index(this) + 1;
	$('#demo2_story li:nth-child('+index+')').removeClass('current');
	$('#demo2_story li:nth-child('+index+')').fadeIn();
	$('#demo2_story li:nth-child('+index+')').addClass('current');
  });
}

// トッップへ戻る
$(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
});