function fixed_tab(o){
    var go2fixed = function () {
        var st = $(window).scrollTop();
        if(st > 0){
            o.addClass('fixed');
        }else{
            o.removeClass('fixed');
        }
    };
    go2fixed();
    $(window).scroll(function(){
        go2fixed();
    });
}
function get_height(v, x){
    return v * x / 750;
}
function viewport(){
    var w = $(window).width(), w = w > 750 ? 750 : w;
    $('.top-bg').css('height', get_height(1598, w) +'px');
    $('.center-bg').css('height', get_height(1552, w) +'px');
    $('.bottom-bg').css('height', get_height(2278, w) +'px');
    var h_btn = get_height(90, w) +'px';
    $('.btn').css({'height':h_btn, 'line-height':h_btn});
    var h_btn2 = get_height(81, w) +'px';
    $('.btn2').css({'height':h_btn2, 'line-height':h_btn2});
    var w_btn3 = $('.btn3').width();
    $('.btn3').css({'height':w_btn3 +'px', 'width':w_btn3 +'px'});
    var h_btn4 = get_height(80, w) +'px';
    $('.btn4').css({'height':h_btn4, 'line-height':h_btn4});
    var w_slide = $('.apps').width();
    $('.apps').css({'height':w_slide +'px!important', 'width':w_slide +'px!important'});
}
function menu(){
    $('.menu').show().removeClass('fadeOut').addClass('fadeInDown');
}
function closed(obj){
    $('.menu').removeClass('fadeInDown').addClass('fadeOut').hide();
    if(obj == '' || obj == undefined){
        return;
    }
    window.location.hash = obj;
}
function prev(){
    $('.swiper-button-prev').click();
}
function next(){
    $('.swiper-button-next').click();
}
$(window).resize(function(){
    viewport();
});