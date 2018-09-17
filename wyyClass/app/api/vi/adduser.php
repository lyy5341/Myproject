<?php
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf8");
	$phone = $_GET['phone'];
	$password = $_GET['password'];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db('wyyclass');
	$sql = "INSERT INTO user (phone,password) VALUES ('$phone','$password')";
	mysql_query("set names 'utf8'");
	$isSucc = mysql_query($sql);
	if($isSucc){
		echo $isSucc;
	}else{
		echo $isSucc;
	}

	mysql_close();
?>