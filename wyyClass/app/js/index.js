require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","url","carousel","addcourse","getwarp"],function($,url,carousel,addcourse,getwarp){
		//使用tab和toast完成两个模块的功能

		/*$.get( url.url +"/api/v1/login.php",function(data){
			var html = template("list",{data: data});
			$("#content").html(html);
		},"json");*/
		getwarp.showwrap();
		carousel.lunbo2();
		//console.log(addcourse);
		addcourse.findC({
				box:$("#classbox1")
			});
	})
})