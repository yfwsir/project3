
var showData = (function(){
    var shopList = localStorage.shopList || '[]' ;
        shopList = JSON.parse(shopList);
    return {
        init(){
            this.header();
            this.expandImg();
            this.events();
            this.getJson();
        },
        header(){
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
            $('.toLogin').click(function(){
                window.location.href = 'html/login.html' ;    
            })
        },
        expandImg(){
            var $showImg = $('.showImg')
            var $showCase = $('.showcase')
            $showImg.on('mouseenter',function(){
            $showCase.css('display','block');
            $('.showBigImg').css('display','block');
            })
            $showImg.on('mouseleave',function(){
            $showCase.css('display','none');
            $('.showBigImg').css('display','none');
            })
            $showImg.on('mousemove',function(event){
            var left = event.clientX - $showImg.offset().left - $showCase.width()/2 ;
            var top = event.clientY-$showImg.offset().top-$showCase.height()/2+$(window).scrollTop()
            // console.log($(window).scrollTop())
            if(left<0){
            left = 0;
            }else if(left>$showImg.width()-$showCase.width()){
            left = $showImg.width()-$showCase.width();
            }
            if(top<0){
            top = 0;
            }else if(top>$showImg.height()-$showCase.height()){
            top = $showImg.height()-$showCase.height()
            }
            $showCase.css('left',left)
            $showCase.css('top',top)
            $('.showBigImg img').css('left',-2*left)
            $('.showBigImg img').css('top',-2*top)
            })
            $('.product_list li').on('click',function(){
            $(this).addClass('product_list_checked').siblings().removeClass('product_list_checked') ;
            var src = $(this).children(1).attr('src');
            $showImg.children('img').attr('src',src.replace('small',''))
            $('.showBigImg').children('img').attr('src',src.replace('small','big'))
            })
        },
        getJson(){
            $.get('../json/carlist.json',this.insertData, "json")
        },
        insertData(json){
            var url = window.location.search ;
            var id = url.split('=')[1] ;
            console.log(id)
            var div = `<h1 class="product_name" id="${json[id].id}">${json[id].name}</h1>
            <h5>${json[id].int}</h5>
            <div class="act">
                <span><i class="iconfont icon-time"></i>距活动结束：05天09小时38分37秒</span>
            </div>
            <div class="price">
                <span class="new_price">${json[id].price}</span>
                <del class="old_price">￥<span>${json[id].oldprice}</span></del>
                <span class="act_name">清凉节</span>
            </div>   
            <div class="product_desc">
                <div class="onsale">
                    <h3>优惠</h3>
                    <div class="onsale_list">
                        <span>送积分</span>
                        <span>最高送199积分</span>
                    </div>
                </div>
                <div class="getsale">
                    <h3>领券</h3>
                    <div class="getsale_list">
                        <span>满8000减300</span>
                        <span>领取</span>
                    </div>
                </div>
                <div class="evasale">
                    <h3>评价</h3>
                    <div class="evasale_list">
                        <span>很赞</span>
                        <span>物流很快</span>
                    </div>
                </div>
            </div>     
            <div class="sku">
                <div class="sku_color">
                    <h3>颜色</h3>
                    <div class="color">
                        <img src="../images/detial/skucolor.webp" alt="">
                        <span class="product_color">${json[id].color}</span>
                    </div>
                </div>
                <div class="sku_spec">
                    <h3>规格</h3>
                    <span class="product_weight">${json[id].weight}</span>
                </div>
            </div>`
            $('.product_right_insert').html(div);
            $('.expandimg').attr('src',json[id].img1)
            $('.showBigImgexpand').attr('src',json[id].img1)
            $('.showImgsmall').attr('src',json[id].img2)
        },
        addshop(obj){
            var shopList = localStorage.shopList || '[]' ;
            shopList = JSON.parse(shopList);
            var add = true;
            for(var i = 0;i<shopList.length;i++){
                // add = true ;
                if(obj.id == shopList[i].id){
                    add = false ;
                    shopList[i].count += obj.count;
                    break;
                }
            }
            if(add){
                shopList.push(obj);
            }
            console.log(shopList)
            localStorage.shopList= JSON.stringify(shopList);
            console.log(shopList)
        },
        events(){
            var _this = this ;
            var $btn_car = $('.car') ;
            var $num = $('.sku_num_total input')
            var $add = $('.icon-add')
            var $dec = $('.icon-dec')
            $add.click(function(){
                var value = $num.val();
                // console.log(value)
                value++
                $num.val(value)
            })
            $dec.click(function(){
                var value = $num.val();
                if(value<=1){
                    $num.val('1')
                }else{
                    value--
                    $num.val(value)
                }   
            })
            $btn_car.on('click',function(){
                var obj = {
                    id:$('.product_name').attr('id'),
                    name:$('.product_name').html(),
                    color:$('.product_color').html(),
                    weight:$('.product_weight').html(),
                    price:$('.new_price').html(),
                    count:Number($('.sku_num_total input').val()),
                    listimg:$('.showImgsmall').attr('src')
                }
                console.log(obj)
                _this.addshop(obj)
            })
        }
    }
})()
showData.init();


