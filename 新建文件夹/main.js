$(function() {
    $(window).resize();
    $("#block-nav").css("z-index", 1);

    // 导航条固定顶部
    $("#block-nav").navFixed();
    // <script src="lib/navFixed-1.0.1.min.js"></script>
    // /.fn.navFixed=function(){
    //       $_this=$(this);
    //       $_this_prev_marginBottom=parseInt($_this.prev().css("margin-bottom").substring(0,$_this.prev().css("margin-bottom").length-2));
    //       $_this_next_marginTop=parseInt($_this.next().css("margin-top").substring(0,$_this.next().css("margin-top").length-2));
    //       _topPosition=$(document).scrollTop();
    //       _navPosition=$_this.prev().outerHeight(true);
    //       a();
    //       $(document).scroll(function(){
    //            _topPosition=$(document).scrollTop();a()});
    //       $(window).resize(function(){
    //            _navPosition=$_this.prev().outerHeight(true);a()});
    //       function a(){
    //            if(_topPosition>=_navPosition){$_this.css("position","fixed");
    //       $_this.next().css("margin-top",$_this_prev_marginBottom+$_this.outerHeight()+$_this_next_marginTop+"px")}else{
    //            $_this.css("position","relative");
    //            $_this.next().css("margin-top",$_this_next_marginTop+"px")

    //         }
    //     }
    //  };


    //平滑滚动导航
    $('#fstPage-down a, nav a, #logo').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 52 }, 600);
        event.preventDefault();
    });
});

$(window).resize(function() {

    //首页满屏
    $("#block-firstPage").css("height", $(window).height());
    //首页文字效果
    $('.blockTitle').stop().fadeIn("normal").animate({
        "top": ($(window).height() - $('.blockTitle').outerHeight()) / 2
    }, 500);

    $("#block-wantMore").css("height", $(window).height() - 52 + "px");
    $('#block-wantMore>p').css("top", ($("#block-wantMore").outerHeight(true) -
        $('#block-wantMore>p').outerHeight()) / 2 + "px");
});
