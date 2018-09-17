define(function(){
	//console.log($);
	function addcourse(){
	}

	addcourse.prototype.findC = function(/*pageCount,index,*/ele){
		/*var pageCount = 3;//每页显示几条
		var index = 1;//当前页数
		var pageNum;//总页数
		var allNum;//数据库总条数*/

		var _this = this;
		this.ele = ele.box;
		this.index = 1;
		this.pageCount = 10;
		
		$.ajax({
			url:"http://localhost/wyyClass/app/api/vi/select.php",
			method:"GET",
			data:{
				"pageCount": _this.pageCount,
				"index": _this.index
			},
			dataType:"json",
			success:function(data1){
			var data;
			// data1 = ecvl(data1);
			data = data1.data;
			var str = "";
			for(var i = 0; i < 10; i++){
				str+= `<div class="class-m" #id=course"${i}"><a href="/html/course.html?id=${i}">
				<div class="photo"><img src="${data[i].url}" alt=""></div>
				<div class="html">
					<h4>${data[i].til}</h4>
					<span>${data[i].details}</span>
					<p>${data[i].score}分&nbsp&nbsp&nbsp&nbsp${data[i].collect}看过</p>
				</div></a>
				</div>`;
				// console.log(data[i].til);
			}
			_this.ele.html(str);
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	return new addcourse();
})