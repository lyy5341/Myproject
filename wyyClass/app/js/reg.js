//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","tab","toast","template","url","reguser"],function($,tab,toast,template,url,reguser){
		//使用tab和toast完成两个模块的功能

		/*$.get( url.url +"/api/v1/login.php",function(data){
			var html = template("list",{data: data});
			$("#content").html(html);
		},"json");*/
		reguser.testuser();
	})
})