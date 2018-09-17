<?php
	header("Access-Control-Allow-Origin:*");
	$pageCount = $_GET['pageCount'];
	$index = $_GET["index"];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db('wyyclass');
	$sql = "SELECT * FROM shopcar LIMIT ".($index-1)*$pageCount.",".$pageCount;
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql);    //资源数据 每一页得到数据
	//查询总数量，根据总数量计算总页数
	$sql1 = "SELECT COUNT(*)  as AllNum FROM shopcar";  //把数据的总数量存储在AllNum里面
	$num = mysql_query($sql1);   //  $num = AllNum => 5 资源数据
	$num = mysql_fetch_assoc($num);	// 函数从结果集中取得一行作为关联数组 $num = AllNum => 5
	//echo json_encode($num);

	//存放所有查询到数据的数组
	$topArr = array();
	while ($arr = mysql_fetch_array($result)) {
		array_push($topArr, $arr);			//把每一条关系数组存在$topArr里面
	}

	
	$json = array("allNum" => $num['AllNum'] , "data" => $topArr);
	echo json_encode($json);
	mysql_close();
?>