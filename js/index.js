// ===================头部显示隐藏===============
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
// =====================banner导航菜单显示隐藏======================
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
// =================鼠标经过图片效果========================
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