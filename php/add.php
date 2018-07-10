<?php
    header('Content-type:text/html;charset=UTF-8');
    $json=file_get_contents('php://input');
    $json = json_decode($json);
    $username=$json->username;
    $password=$json->password;
    $connect=new mysqli('localhost','root','','db_student','3306');
    $connect->query("SET CHARACTER SET 'utf8");
    $connect->query("SET NAMES 'utf8'");
    $sql="INSERT into media (username,password) VALUES('$username','$password')";
    $result=$connect->query($sql);
    if($result){
        $array = array("code"=>"0", "msg"=> "注册成功", "data"=>'');
      } else {
        $array = array("code"=>"100", "msg"=> "注册失败");
      }
      echo json_encode($array);
    $connect->close();
?>