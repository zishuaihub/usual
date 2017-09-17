//rem
!function(n) {
    var e = n.document,
    t = e.documentElement,
    i = 640,
    d = i / 100,
    o = "orientationchange" in n ? "orientationchange": "resize",
    a = function() {
        var n = t.clientWidth || 320;
        n > 640 && (n = 640),
        t.style.fontSize = n / d + "px"
    };
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
} (window);


    $(function() {
        //通用导航栏
        var ww = $('body').width(), wh = $(window).height(), ih = wh-$('#item_nav').height()-$(".newHead").height();
        $(".fixed-menu").css({width:ww, left:-ww});
        $(".return").css("height", "65px");
        $(".project_content_box").css({width:ww, height:wh});
        $(".project_nav").css({height:ih});
        $(".project_item").css({height:ih});
        $(".project_main .project_item .item_box").first().show().siblings().hide();
        $(".project_nav li").click(function () {
            var i = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $(".project_main .project_item .item_box").eq(i).show().siblings().hide();
        });

        function swi(c){
            var mySwiper = new Swiper(c, {
                spaceBetween: 0,
                slidesPerView: 4,
                touchRatio: 0.3,
                freeMode : true,
                loop: false,
                loopedSlides: 4,
                slideToClickedSlide: false
            });
        }

        /*顶部项目导航*/

        $('.navBtn').click(function(){
            $('.fixed-menu').css({animation:'showit 0.6s 0.1s ease both'});
            $('.fixed-menu').animate({left:0});
        });
        $(".return i").click(function(){
            $('.fixed-menu').css({animation:'hideit 0.6s 0.1s ease both'});
            $('.fixed-menu').animate({left:'-1000px'});
        });
    });
    /*首页项目随机翻转*/
    var lh = 0;
    function fz(){
            var leng = $(".project_hot a").length;
                $('.news_nav li').removeClass('on');
                $('.news_nav li').eq(lh).addClass("on");
                lh++;
                if(lh==6)lh=0;
    }
    $(document).ready(function(){
        set = setInterval('fz()',3000);
        $(".news_nav li").hover(function(){
            $('.news_nav li').removeClass('on');
            $(this).addClass("on");
            set = clearTimeout(set);
        },function(){
            set = setInterval('fz()',3000);
        });
    })
