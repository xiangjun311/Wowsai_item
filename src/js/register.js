require(["config"], function(){
	require(["jquery","load"], function($){
		/**********************/
		$(function(){
			function generate(){
				var url = "http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7";
				var result = $.getJSON(url, function(data){
					// 设置图片的 src 属性，显示出验证码
					$(".vali").attr("src", data.showapi_res_body.image);
					// 缓存 sid 用于验证码校验
					$(".vali").data("sid", data.showapi_res_body.sid);
				});
			}

			generate();

			$(".vali").click(generate);

			$(".code").blur(function(){
				// 获取输入的字符串
				var _code = $(".code").val();
				// sid
				var _sid = $(".vali").data("sid");
				// url
				var url = `http://route.showapi.com/932-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&checkcode=${_code}&sid=${_sid}`;
				// getJSON
				$.getJSON(url, function(data){
					if(data.showapi_res_body.valid)
						$(".info").text("验证成功").css("color","green");
					else
						$(".info").text("输入验证码有误").css("color","red");
				})
			});
		});

		/**********************/
		$.cookie.json = true;
		$("#formLogin").submit(function(e){
		e.preventDefault();
		var  user = $("#userP").val(),
			 pass = $("#password").val();
		console.log(user);
		console.log(pass);
		var urls = `location:8080/do_register.php`;
			$.ajax({
				url:urls,
				type:"POST",
				data : `username=${user}&password=${pass}`,
				dataType:"jsonp",
				success:function(data){
					console.log(data);
					if(data.status==1){
						$.cookie("key",user,{expires:7,path:"/"});
						var loginuser=$.cookie('key');
						if(loginuser){
							$(".ss").html(loginuser);
						}
						$(".tui").show();
						location="/index.html";

						
					}else{

						$(".pw").text("密码错误");
					}									
				}

			});
	    });
		/***************/	
		
	});
});