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
		/******跨域请求连接服务器注册用户*********/	
		$.cookie.json = true;
		$("#formLogin").submit(function(e){
		e.preventDefault();
		var email = $("#email").val(),
			username = $("#username").val(),
			pass = $("#password").val();
			console.log($("#email"))		
			console.log(email)		
			console.log(username)		
			console.log(pass)		
			$.ajax({
				url: "http://10.7.187.96/wowsai_php/register.php",
				data:{
					email:email,
					username:username,
					password:pass
				},
				type: "post",
				datatype:"json",
				success:function(data){
					console.log(data)
					// 将用户信息存入cookie中
					$.cookie("loginUser", username ,{expires:7,path:"/"});
					//跳转提示登录成功
					location="/html/success.html"
					
													
				}

			});
	    });
		
		
		
		/*******跨域请求连接服务器***********/
		
		
	});
});