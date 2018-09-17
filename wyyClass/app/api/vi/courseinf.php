<?php
	header("Access-Control-Allow-Origin:*");
	$id = $_GET["id"];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db('wyyclass');
	$sql = "SELECT * FROM course WHERE id = $id";
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql);
	$topArr = array();
	while ($arr = mysql_fetch_array($result)) {
		array_push($topArr,$arr);			//把每一条关系数组存在$topArr里面
	}
	$json = array("data" => $topArr);
	echo json_encode($json);
	mysql_close();
?>