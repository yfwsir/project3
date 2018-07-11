
var login = (function(){

    return {
        init(){
            this.changestate();
            this.loginin();
        },
        changestate(){
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
        },
        loginin(){
            var sign_phone = /^1[3,5,7,8,9]\d{9}$/ ;
            var sign_pwd = /^\w{6,11}$/
            var $inp_phone = document.querySelector('.input_phone') ;
            var $phone_tip = document.querySelector('.phone_tip') ;
            var $btn_phone = document.querySelector('.btn_phone') ;
            var $inp_pwd = document.querySelector('.inp_pwd') ;
            var $inp_pwd2 = document.querySelector('.inp_pwd2') ;
            var $btn_sign = document.querySelector('.btn_sign') ;
            $btn_phone.onclick = function(){
                if(sign_phone.test($inp_phone.value)){
                    $phone_tip.innerHTML = ''
                }else{
                    $phone_tip.innerHTML = '请输入正确的手机号码'
                }
            }
            $inp_pwd.onchange = function(){
                if(sign_pwd.test($inp_pwd.value)){
                    $inp_pwd.nextElementSibling.innerHTML = ''
                }else{
                    $inp_pwd.nextElementSibling.innerHTML = '请输入正确的密码格式'
                }
            }
            $inp_pwd2.onchange = function(){
                if(sign_pwd.test($inp_pwd2.value)&&$inp_pwd.value==$inp_pwd2.value){
                    $inp_pwd2.nextElementSibling.innerHTML = ''
                }else{
                    $inp_pwd2.nextElementSibling.innerHTML = '两次输入的密码要一致'
                }
            }
            $btn_sign.onclick = function(){
                $btn_phone.onclick();
                $inp_pwd.onchange();
                $inp_pwd2.onchange();
                if(sign_phone.test($inp_phone.value)&&sign_pwd.test($inp_pwd.value)&&$inp_pwd.value==$inp_pwd2.value){
                    var xhr = new XMLHttpRequest()
                    xhr.open('post','../php/add.php',true)
                    var params = {
                        username:$inp_phone.value,
                        password:$inp_pwd.value
                    }
                    params = JSON.stringify(params)
                    xhr.send(params)
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState ==4 && xhr.status == 200){
                            var json = JSON.parse(xhr.responseText)
                            if(json.code == 0){
                                console.log(json)
                                alert(json.msg);
                                // window.location.href = '../index.html' ;
                            }else{
                                alert(json.msg);
                            }
                        }
                    }
                }
            }
            var $check_phone = document.querySelector('.check_phone') ;
            var $check_pwd = document.querySelector('.check_pwd') ;
            var $btn_login = document.querySelector('.btn_login') ;
            $check_phone.onchange = function(){
                if(sign_phone.test($check_phone.value)){
                    $check_phone.nextElementSibling.innerHTML = ''
                }else{
                    $check_phone.nextElementSibling.innerHTML = '请输入正确的手机号码格式'
                }
            }
            $check_pwd.onchange = function(){
                if(sign_pwd.test($check_pwd.value)){
                    $check_pwd.nextElementSibling.innerHTML = ''
                }else{
                    $check_pwd.nextElementSibling.innerHTML = '密码格式不正确'
                }
            }
            $btn_login.onclick = function(){
                $check_phone.onchange();
                $check_pwd.onchange();
                if(sign_pwd.test($check_pwd.value)&&sign_phone.test($check_phone.value)){
                    
                    var xhr = new XMLHttpRequest()
                    xhr.open('post','../php/login.php',true)
                    var params = {
                        username:$check_phone.value,
                        password:$check_pwd.value
                    }
                    params = JSON.stringify(params)
                    xhr.send(params)
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState ==4 && xhr.status == 200){
                            var json = JSON.parse(xhr.responseText)
                            if(json.code == 0){
                                // console.log(json.data.username)
                                window.sessionStorage.setItem("username", json.data.username);
                                window.location.href = '../index.html' ;
                            }else{
                                alert(json.msg);
                            }
                        }
                    }
                }
            }
        }
    }
})()

login.init();