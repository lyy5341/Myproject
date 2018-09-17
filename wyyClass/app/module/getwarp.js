define(function(){
	//console.log($);
	function getwarp(){
	}

	getwarp.prototype.showwrap = function(){
		var _this = this;
	 	this.warp = $('#warp');
		$(window).scroll( function() {
        clearTimeout(TIMER);
        if( $(document).scrollTop() > 200 ){
            var TIMER = setTimeout(function(){
                _this.warp.addClass("abc");
                _this.warp.css("display","block");
                console.log($(document).scrollTop());
            },100);
        }else{
            TIMER = setTimeout(function(){
                _this.warp.removeClass("abc");
                _this.warp.css("display","none");
            },100);
        }
    });
		/*if(b.top<=c){
        a.css({'position':'fixed','top':'0px'})
        }else{
          a.css({'position':'absolute','top':'500px'})
        }
    }*/

	}
	return new getwarp();
})