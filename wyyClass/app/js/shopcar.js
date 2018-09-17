//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","tab","toast","template","url","addshopcar"],function($,tab,toast,template,url,addshopcar){
		//使用tab和toast完成两个模块的功能

		addshopcar.setcourse({
				box:$("#carbox"),
				pricebox:$("#allprice")
			});
	})
})