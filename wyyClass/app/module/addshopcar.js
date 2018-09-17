define(function(){
	//console.log($);
	function addshopcar(){
	}
	addshopcar.prototype.setcourse = function(ele){
		var _this = this;
		this.ele = ele.box;
		this.pricebox = ele.pricebox;
		this.index = 1;
		this.pageCount = 5;
		
		$.ajax({
			url:"http://localhost/wyyClass/app/api/vi/shopcar.php",
			method:"GET",
			data:{
				"pageCount": _this.pageCount,
				"index": _this.index
			},
			dataType:"json",
			success:function(data1){
			var data = data1.data;
			// data1 = ecvl(data1);
			var str = "";
			var allprice = 0;
			for(var i = 0; i < data.length; i++){
				str+= `<div class="course" id="${data[i].id}"><p><img src="${data[i].url}" alt=""></p><p>${data[i].til}</p>
				<p>永久有效</p><p>￥${data[i].price}</p><p class="removeb" id="${data[i].id}"></p></div>`;
				// console.log(data[i].til);
				//console.log(data[i].price);
				allprice += parseInt(data[i].price);
			}
			_this.pricebox.html(allprice);
			_this.ele.html(str);
			_this.removecourse();
			},
			error:function(err){
				console.log(err);
			}
		});
	}

	addshopcar.prototype.removecourse = function(){
		var _this = this;
		this.removebox = this.ele.children().children(".removeb");
		/*console.log(_this.ele.children().length);
		console.log("haaaas");
		console.log(_this.removebox[1]);
		console.log(_this.removebox.eq(1).attr("id"));*/
		for(let i = 0; i<_this.ele.children().length; i++){
			this.removebox.eq(i).click(function(){
			_this.courseID = _this.removebox.eq(i).attr("id");
			/*console.log(_this.courseID);*/
			if(confirm("你确定要删除吗？")){
					$.ajax({
					url:"http://localhost/wyyClass/app/api/vi/delete.php",
					method:"GET",
					data:{
						"id":_this.courseID
					},
					dataType:"json",
					success:function(data){
						/*console.log(_this.courseID);*/
						if(data.code){
							location.reload();
						}
					},
					error:function(err){
						console.log(err);
					}
					});
				}
			})
		}
	}
	return new addshopcar();
})