function scroll_tab(o){
    var lis = o.find('li');
    lis.click(function(){
        //使scrollTop,兼容ie、firefox
        var body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var me = $(this),
            id = me.data('id'),
            st = $('#'+ id).offset().top - 50;
        active(me);
        $(body).stop(true, true).animate({scrollTop:st}, 300);
    });
    var active = function(li){
        li.find('a').addClass('on');
        li.siblings().find('a').removeClass('on');
    };
    $(window).scroll(function(){
        var wst = $(window).scrollTop();
        var li0 = lis.eq(0), li1 = null, li2 = null;
        lis.each(function (i) {
            var me = $(this);
            li1 = $('#'+ me.data('id'));
            li2 = $('#'+ me.next().data('id'));
            var st1 = li1.offset().top - 400;
            if(li2.length > 0){
                var st2 = li2.offset().top - 400;
                if(wst > st1 && wst < st2){
                    li0 = me;
                    return false;
                }
            }else if(wst > st1){
                li0 = me;
                return false;
            }
        });
        active(li0);
    });
}
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
function app_desc(o){
    var lis = o.find('li'), obj = o.siblings('.detail'), h2 = obj.find('h2'), p = obj.find('p');
    lis.mouseover(function(){
        var id = $(this).data('id');
        lis.each(function(){
            var me = $(this), _id = me.data('id'), img = me.find('img');;
            if(id == _id){
                img.attr('src', 'images/app'+ _id +'on.png');
                h2.text(img.attr('alt'));
                p.text(img.attr('data-desc'));
            }else{
                img.attr('src', 'images/app'+ _id +'.png');
            }
        });
    });
}
function get_height(v, x){
    return v * x / 1920;
}
$(window).resize(function(){
    var top = $('.top-bg'), center = $('.center-bg'), bottom = $('.bottom-bg'), w = $(window).width();
    top.css('height', get_height(1598, w) +'px');
    center.css('height', get_height(1552, w) +'px');
    bottom.css('height', get_height(2278, w) +'px');
});