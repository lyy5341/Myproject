<?php
	header("Access-Control-Allow-Origin:*");
	$id = $_GET["id"];
	mysql_connect("localhost","root","");
	mysql_select_db("wyyClass");
	mysql_query("set names 'utf8'");
	$sql = "DELETE FROM shopcar WHERE id=".$id;
	$result = mysql_query($sql);
	if($result){
		echo '{"code": 1}';
	}else{
		echo '{"code": 0}';
	}
?>