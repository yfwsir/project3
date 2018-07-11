var showList = (function(){
    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);
    
    return {
        init(){
            this.insertData(shopList) ;
            this.events();
            $('.total_price').html($('.item_total').html())
        },
        insertData(shopList){
            str = '' ;
            for(var i =0;i<shopList.length;i++){
                var div = `<ul class="car_item" id="${shopList[i].id}">
            <li>
                <input type="checkbox" class="car_choose">
            </li>
            <li>
                <img src="../images/buycar/car_list.jpg" alt="">
                <a href="../html/detial.html">${shopList[i].name}</a>
            </li>
            <li>
                <p>${shopList[i].color}</p>
                <p>${shopList[i].weight}</p>
            </li>
            <li>
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
                
                $('.car_item_box').html(div);
        },
        events(){
            var $num = $('.buynum')
            var $add = $('.icon-add')
            var $dec = $('.icon-dec')
            $add.click(function(){
                var value = $num.val();
                value++
                $num.val(value)
                var item_price = Number($num.val()) * shopList[0].price
                $('.item_total').html(item_price)
                $('.total_price').html($('.item_total').html())
            })
            $dec.click(function(){
                var value = $num.val();
                if(value<=1){
                    $num.val('1')
                }else{
                    value--
                    $num.val(value)
                }
                var item_price = Number($num.val()) * shopList[0].price
                $('.item_total').html(item_price)
                $('.total_price').html($('.item_total').html())  
            })
            $('.car_item_box').on('click','.btn_del',function(){
                var ul = $(this).closest('ul');
                shopList.splice(ul.index(), 1);
                localStorage.shopList = JSON.stringify(shopList);
                ul.remove();
            })
        }
    }
})()
showList.init();

