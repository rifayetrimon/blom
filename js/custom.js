$(function(){
    //back to top
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

    if(scrolling > 400){
        $('.back-to-top').fadeIn(300);
    }
    else{
        $('.back-to-top').fadeOut(300);
    }
    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else{
        $('.navbar').removeClass('bg');
    }
    });

        //animation scroll js
        var html_body = $('html, body');
        $('collapse a').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    html_body.animate({
                        scrollTop: target.offset().top - 0
                    }, 1500);
                    return false;
                }
            }
        });



});