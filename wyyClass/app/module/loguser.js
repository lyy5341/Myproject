define(function(){
	//console.log($);
	function loguser(){
	}

	loguser.prototype.testlog = function(){
			var _this = this; 
			this.form = $(".form")[0];
			this.phone = $("#phone");
			this.password = $("#pas1");
			this.obtn= $("#btn");		

			var arr = [false,false];//保存每一个input的验证状态
			/*console.log(arr);*/
			this.phone.blur(function(){
				var str = _this.phone.val();
				var reg = /0?(13|14|15|17|18|19)[0-9]{9}/;
				/*console.log(str);*/
				if(reg.test(str)){
					arr[0] = true;
					$("#test1").css("display","none");
					_this.tel = str;
				}else{
					arr[0] = false;
					$("#test1").css("display","block");
				}
			})
				
		
			this.password.blur(function(){
				var str1 = _this.password.val();
				var reg = /^.{4,20}$/;
				if(reg.test(str1)){
					arr[1] = true;
					$("#test2").css("display","none");
					_this.pas = str1;
					/*console.log(arr);*/
				}else{
					arr[1] = false;
					$("#test2").css("display","block");
				}
			})

			
			this.obtn.click(function(){
			/*console.log("xixi");*/
			var isTrue = arr.every(function(item){
				return item == true;
				})
			isTrue == true?_this.getuser():console.log("no")
			})
	}
	loguser.prototype.getuser = function(){
			var _this = this;
			$.ajax({
			url:"http://localhost/wyyClass/app/api/vi/login.php",
			method:"GET",
			data:{
				"phone": _this.tel,
				"password":_this.pas
			},
			dataType:"json",
			success:function(data){
				/*console.log("yes");
				console.log(data.status);*/
				if(data.status == 0){
					alert("登录成功");
					window.location.href="/index.html";
				}else{				
					alert("手机号密码错误");
				}
			},
			error:function(err){
				console.log(err);
				console.log("wrong");
				}
			})
		}
	return new loguser();
})

