//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","tab","toast","template","url","courseinf"],function($,tab,toast,template,url,courseinf){
		//使用tab和toast完成两个模块的功能

		/*$.get( url.url +"/api/v1/login.php",function(data){
			var html = template("list",{data: data});
			$("#content").html(html);
		},"json");*/
		tab.init({
			btn:$("#tab-l").children("ul").children("li"),
			show:$("#tab-l").children("ol").children("li")
		});
		courseinf.seturlID({
				box:$("#classbox")
		});
	})
})