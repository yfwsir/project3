// =================鼠标经过图片效果
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