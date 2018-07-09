var $haveusername = document.querySelector('.haveusername');
var $sign_in = document.querySelector('.sign_in');
var $login = document.querySelector('.login');
var $sign_to = document.querySelector('.sign_to');
$haveusername.onclick = function(){
    $sign_in.style.display = 'none';
    $login.style.display = 'block';
    // console.log(1)
}
$sign_to.onclick = function(){
    $sign_in.style.display = 'block' ;
    $login.style.display = 'none';
    // console.log(2)
}