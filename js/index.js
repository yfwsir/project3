
var index = (function(){
    var index = 0;
    var timer = null ;
    return{
        init(){
            this.check();
            this.header();
            this.banner();
            this.autoplay(index);
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
            //头部的icon的鼠标移入显示移出隐藏
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
        },
        banner(){
            var _this = this;
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

            $('.uubox li').on('click',function(){
                index = $(this).index()
                $(this).addClass('checked').siblings().removeClass('checked')
                $('.imgbox a').eq(index).fadeIn().siblings().fadeOut() ;
                _this.autoplay(index)
            })

        },
        autoplay(index){
            clearInterval(timer);
            timer = setInterval(function(){
                index++ ;
                if(index == $('.imgbox a').length){
                    index = 0
                }
                $('.uubox li').eq(index).addClass('checked').siblings().removeClass('checked')
                $('.imgbox a').eq(index).fadeIn().siblings().fadeOut() ;
            },2000)
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