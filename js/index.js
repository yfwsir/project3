
$('.uubox li').on('click',function(){
    $(this).addClass('checked').siblings().removeClass('checked');
    $('.imgbox').animate({left:-1200 * $(this).index()},500);
})


var index = (function(){
    return{
        init(){
            this.check();
            this.header();
            this.banner();
            this.img();
        },
        check(){
            var username = window.sessionStorage.username;
            if(username){
                $('.toLogin').html('');
                $('.toLogin').html(username);
            }else {
                $('.toLogin').html('');
                $('.toLogin').html('登录');
                $('.header_right li').eq(1).on('mouseenter',function(){
                    $('.car_login').css('display','block');
                })
                $('.header_right li').eq(1).on('mouseleave',function(){
                    $('.car_login').css('display','none');
                })
            }
        },
        header(){
            $('.car_login').on('mouseenter',function(){
                $('.car_login').css('display','block');
            })
            $('.car_login').on('mouseleave',function(){
                $('.car_login').css('display','none');
            })
            $('.header_right li').eq(2).on('mouseenter',function(){
                $('.appscan').css('display','block');
            })
            $('.header_right li').eq(2).on('mouseleave',function(){
                $('.appscan').css('display','none');
            })
            $('.appscan').on('mouseenter',function(){
                $('.appscan').css('display','block');
            })
            $('.appscan').on('mouseleave',function(){
                $('.appscan').css('display','none');
            })
            $('.header_right li').eq(3).on('mouseenter',function(){
                $('.header_seach').css('display','block');
            })
            $('body').click(function(){
                $('.header_seach').css('display','none');
            })
            $('.header_seach').click(function(event){
                event.stopPropagation();
            })
            // $('.toLogin').click(function(){
            //     window.location.href = 'html/login.html' ;    
            // })
        },
        banner(){
            $('.list_first').on('mouseenter',function(){
                $('.wm').css('display','block');
            })
            $('.wm').on('mouseenter',function(){
                $('.wm').css('display','block');
            })
            $('.list_first').on('mouseleave',function(){
                $('.wm').css('display','none');
            })
            $('.wm').on('mouseleave',function(){
                $('.wm').css('display','none');
            })
        },
        img(){
            $('ul.list li img').on('mouseenter',function(){
                $(this).animate({top:-5},200);
            })
            
            $('ul.list li img').on('mouseleave',function(){
                $(this).animate({top:0},200);
            })
            $('.product li img').on('mouseenter',function(){
                $(this).animate({top:-5},200);
            })
            $('.product li img').on('mouseleave',function(){
                $(this).animate({top:0},200);
            })
            $('.join li img').on('mouseenter',function(){
                $(this).animate({top:-5},200);
            })
            $('.join li img').on('mouseleave',function(){
                $(this).animate({top:0},200);
            })
        }
    }
})()

index.init();