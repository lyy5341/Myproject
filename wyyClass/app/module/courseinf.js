define(function(){
	//console.log($);
	function courseinf(){
	}
		courseinf.prototype.geturlID = function(id){
            var reg = new RegExp("(^|&)" + id + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }

       	courseinf.prototype.seturlID = function(ele){
       		var id = this.geturlID('id');
       		this.addifo(ele,id);
       	}
       	courseinf.prototype.addifo = function(ele,id){
       	var _this = this;
       	this.ele = ele.box;
		this.id = id;
		this.ids = parseInt(id)+1;
		/*console.log(this.ids);*/
		$.ajax({
			url:"http://localhost/wyyClass/app/api/vi/courseinf.php",
			method:"GET",
			dataType:"json",
			data:{"id": _this.ids},
			success:function(data1){
			var data = data1.data;
			/*console.log(_this.id);*/
			var str = "";
			str+= `<div class="course-l"><img src="${data[0].url}" alt=""></div>
			<div class="course-r">
			<h4>${data[0].til}</h4>
			<div class="c1"><p>${data[0].collect}收藏<span>${data[0].score}分</span></p></div>
			<div class="c2"><p>￥${data[0].price}</p></div>
			<div class="c3"><button>立即参加</button><span id="shop">加入购物车</span></div>
			</div>`;
			_this.ele.html(str);
			_this.addshop(data[0].til,data[0].price,data[0].url);
			},
			error:function(err){
				console.log(err);
			}
		});
	}
		courseinf.prototype.addshop = function(til,price,url){
			this.addbox = $("#shop");
			this.addbox.click(function(){
				console.log(til,price,url);
				$.ajax({
				url:"http://localhost/wyyClass/app/api/vi/addshopcar.php",
				method:"GET",
				dataType:"json",
				data:{
					"til": til,
					"price": price,
					"url":url
				},
				success:function(data){
				console.log(data);
				if(data.status == 0){
					alert("您已添加过这门课程");
				}else{				
					alert("添加成功");
				}
				/*console.log(_this.id);*/
				},
				error:function(err){
					console.log(err);
				}
			});
		})
	}	
	return new courseinf();
})