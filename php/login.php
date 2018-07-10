<?php
    header('Content-Type:text/html;charset=UTF-8');
    $json=file_get_contents('php://input');
    $json = json_decode($json);
    $username=$json->username;
    $password=$json->password;
    $connect=new mysqli('localhost','root','','db_student','3306');
    $sql="SELECT * from media WHERE username = '$username' and password = '$password'";
    $connect->query("SET CHARACTER SET 'utf8'");
    $connect->query("SET NAMES 'utf8'");
    $result=$connect->query($sql);
    $row=$result->fetch_assoc();
    if($row) {
        $arr = array("id" => $row["id"], "username"=> $row["username"]);
        // 返回用户基本信息
        $array = array("code"=>"0", "msg"=> "", "data"=>  $arr);
        
      } else {
        $array = array("code"=>"100", "msg"=> "账号或者用户名错误！！");
      }
      echo json_encode($array);
    $connect->close();
?>

