<?php
	header("content-type:text/html;charset=utf8");
	header("Access-Control-Allow-Origin:*");
	$phone = $_GET['phone'];
	$password = $_GET['password'];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db('wyyclass');
	$sql ="SELECT * FROM user WHERE phone='$phone' AND password='$password'";
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql);
	if($row = mysql_fetch_array($result)){
		if($row[0] >= 1)
			echo '{"status":0,"message":"exist"}';
		else
			echo '{"status":1,"message":"not exist"}';
	}else{
		echo '{"status":-1,"message":"failed"}';
	}
	mysql_close();
?>