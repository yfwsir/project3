
//#region 头部移入移出 

$('.header_right li').eq(1).on('mouseenter',function(){
    $('.car_login').css('display','block');
})
$('.header_right li').eq(1).on('mouseleave',function(){
    $('.car_login').css('display','none');
})
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

//#endregion

//#region 商品数量加减 

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

//#endregion
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