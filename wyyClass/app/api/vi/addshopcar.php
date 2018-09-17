<?php
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf8");
	$til = $_GET['til'];
	$price = $_GET['price'];
	$url = $_GET['url'];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db('wyyclass');
	$sql1 ="SELECT * FROM shopcar WHERE til='$til' AND price='$price' AND url='$url'";
	$sql = "INSERT INTO shopcar (til,price,url) VALUES ('$til','$price','$url')";
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql1);
	if($row = mysql_fetch_array($result)){
		if($row[0] >= 1)
			echo '{"status":0,"message":"exist"}';
		else
			echo '{"status":1,"message":"not exist"}';
	}else{
		$isSuccess = mysql_query($sql);
		echo '{"status":-1,"message":"failed"}';
	}
	mysql_close();
?>