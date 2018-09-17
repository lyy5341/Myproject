define(function(){
	//console.log($);
	function reguser(){
	}

	reguser.prototype.createCode = function(){
			var _this = this;
			this.code = '';
		    this.codeLength = 4;
		    this.codebox = $("#codebox");
	        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
	        for(var i = 0; i < this.codeLength; i++){ //循环codeLength 我设置的4就是循环4次   
	             var index = Math.floor(Math.random()*36); //设置随机数范围,这设置为0 ~ 36  
	             _this.code += random[index];  //字符串拼接 将每次随机的字符 进行拼接
	    }	
	    	
	        this.codebox.text(this.code);
	}

	reguser.prototype.clickcreateCode = function(){
			var _this = this;
			this.codebox.on("click",function(){
				_this.createCode();
				console.log("123");
			})
	}
	reguser.prototype.testuser = function(){
			this.createCode();
			this.clickcreateCode();
			var _this = this; 
			this.form = $(".form")[0];
			this.phone = $("#phone");
			this.password = $("#pas1");
			this.testword = $("#pas2");
			this.obtn= $("#btn");		

			var arr = [false,false,false];//保存每一个input的验证状态
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
				}else{
					arr[1] = false;
					$("#test2").css("display","block");
				}
			})

			this.testword.blur(function(){
				var str2 = _this.testword.val();
				if(str2.toUpperCase() == _this.code){
					arr[2] = true;
					$("#yzm").css("display","none");
				}else{
					arr[2] = false;
					$("#yzm").css("display","block");
				}
			})
			
			this.obtn.click(function(){
			/*console.log("xixi");*/
			var isTrue = arr.every(function(item){
				return item == true;
				})
			isTrue == true?_this.setuser():console.log("no")
			})
	}
	reguser.prototype.setuser = function(){
			var _this = this;
			$.ajax({
			url:"http://localhost/wyyClass/app/api/vi/adduser.php",
			method:"GET",
			data:{
				"phone": _this.tel,
				"password": _this.pas
			},
			dataType:"json",
			success:function(data){
				alert("注册成功,点击确定登录");
				window.location.href="/html/login.html";
			},
			error:function(err){
				console.log("err");
				}
			})
	}
	/*reguser.prototype.golog = function(){
		alert("注册成功");
		window.location.href="/html/login.html";
	}*/
	return new reguser();
})

