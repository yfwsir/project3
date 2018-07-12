var showList = (function(){
    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);
    var sum =0;
    return {
        init(){
            this.header();
            this.insertData(shopList) ;
            this.events();
            $('.item_total').each(function(index,item){
                sum += Number($(item).html())
                return sum
            })
            $('.total_price').html(sum)
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
        insertData(shopList){
            str = '' ;
            for(var i =0;i<shopList.length;i++){
                var div = `<ul class="car_item" id="${shopList[i].id}">
            <li>
                <input type="checkbox" class="car_choose">
            </li>
            <li>
                <img src="${shopList[i].listimg}" alt="">
                <a href="../html/detial.html?id=${shopList[i].id}">${shopList[i].name}</a>
            </li>
            <li>
                <p>${shopList[i].color}</p>
                <p>${shopList[i].weight}</p>
            </li>
            <li class="priceone">
                ${shopList[i].price}
            </li>
            <li>
                <i class="iconfont icon-dec"></i>
                <input type="text" value="${shopList[i].count}" class="buynum">
                <i class="iconfont icon-add"></i>
            </li>
            <li class="item_total">${shopList[i].price*shopList[i].count}</li>
            <li>
                <p>移入收藏夹</p>
                <p class="btn_del">删除</p>
            </li>
            </ul>`
                str += div ;
            }
                
                $('.car_item_box').html(str);
        },
        events(){
            $('.car_item_box').on('click','.icon-add',function(){
                var value = Number($(this).prev('.buynum').val());
                value++
                // console.log(value)
                $(this).prev('.buynum').val(value)
                var priceone = $(this).closest('li').prev('.priceone').html();
                $(this).closest('li').next('.item_total').html(value * priceone)
                // console.log($('.item_total').html())
                sum = 0 ;
                $('.item_total').each(function(index,item){
                    sum += Number($(item).html())
                    return sum
                })
                $('.total_price').html(sum)
            })
         
            $('.car_item_box').on('click','.icon-dec',function(){
                var value = Number($(this).next('.buynum').val());
                
                if(value<=1){
                    $(this).next('.buynum').val(1)
                }else{
                    value = value - 1 ;
                    $(this).next('.buynum').val(value)
                }   
                // console.log(value)
                
                var priceone = Number($(this).closest('li').prev('.priceone').html());
                // console.log(priceone)
                $(this).closest('li').next('.item_total').html(value * priceone)

                sum = 0 ;
                $('.item_total').each(function(index,item){
                    sum += Number($(item).html())
                    return sum
                })
                $('.total_price').html(sum)
            })
            $('.car_item_box').on('click','.btn_del',function(){
                var ul = $(this).closest('ul');
                shopList.splice(ul.index(), 1);
                localStorage.shopList = JSON.stringify(shopList);
                ul.remove();
                sum = 0 ;
                $('.item_total').each(function(index,item){
                    sum += Number($(item).html())
                    return sum
                })
                $('.total_price').html(sum)
            })
        }
    }
})()
showList.init();

