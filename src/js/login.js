/*$(function(){
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

	$("button").click(function(){
		// 获取输入的字符串
		var _input = $(".input").val();
		// sid
		var _sid = $(".vali").data("sid");
		// url
		var url = `http://route.showapi.com/932-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&checkcode=${_input}&sid=${_sid}`;
		// getJSON
		$.getJSON(url, function(data){
			if(data.showapi_res_body.valid)
				$(".info").text("验证成功");
			else
				$(".info").text("输入验证码有误");
		})
	});
});*/


require(["config"], function(){
	require(["jquery","cookie","load"], function($,cookie){
		$.cookie.json = true;
			$("#btn").click(function(e){
				console.log("dsjh")
			// e.preventDefault();
				var  user = $("#userP").val(),
					 pass = $("#password").val();
					 console.log(user,pass)
			// console.log(user);
			// console.log(pass);
			
		var urls = 	`http://10.7.187.96/php/login.php?username=${user}&password=${pass}`;
							//			console.log(user,pass,ema,ph)
										$.ajax({
											url: urls,
											type: "GET",
											datatype:"json",
											success:function(data){
												console.log(data)
											}



});
	    });
    });
});