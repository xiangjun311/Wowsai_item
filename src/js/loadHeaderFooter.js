 // 定义模块，加载头部、尾部资源
define(["jquery", "cookie"], function($){
	// 将 header.html 加载显示，绑定交互效果
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		$.cookie.json = true;
		var numx = $.cookie("products")||[];
		var num=numx.length;
		var num = $(".buy_num").text(num);//设置购物车件数v
		// 绑定查找的键盘按键事件,输入提示选项
		$(".search").keyup(function(){
			var url = "https://suggest.taobao.com/sug?code=utf-8&q="+ $(this).val() +"&callback=?";
			$.getJSON(url, function(data){
				var html = "";
				data.result.forEach(function(curr){
					html += "<div>"+ curr[0] +"</div>"
				});
				$(".info").html(html);
			});
		});

		/*********登录事件*********/
		
		$(".close").click(function(){//点击隐藏
			$(".bg").hide();
			$(".body_login").hide();
		})
		$(".bt").click(function(){
			$(".bg").show();
			$(".body_login").show();
			/******跨域请求连接服务器*********/			
			$("#formLogin").submit(function(e){
				$.cookie.json = true;
			e.preventDefault();
			var email = $("#email").val(),
				username = $("#username").val(),
				pass = $("#password").val();

				console.log(username,pass)		
				$.ajax({
					url: "http://10.7.187.96/wowsai_php/login.php",
					data:{
						email:email,
						username:username,
						password:pass
					},
					type: "post",
					dataType:"json",
					success:function(data){//请求成功
						location="/index.html"
						// console.log("登录成功")
						console.log(data.status)
						// var x = {data:data};
						// console.log(x)
						// $(".bg").hide();
						// $(".body_login").hide();

																			
					},
					error:function(msg){//请求失败
	             		console.log("请求失败") 
	             		$(".bg").show();
						$(".body_login").show();      
	  				}
				});
		    });		
			/*******跨域请求连接服务器***********/
		})
		/**************************/
	}).done(function(){
		// 如果有用户登录成功，则显示欢迎信息
		var user = $.cookie("loginUser");
		if (user){
			$(".log_reg").html("<a href='http://localhost:8080/html/personal.html'>"+ user +"</a>")
			$(".bt").hide();
			$(".reg").hide();
		}
	});

	// 将 footer.html 加载显示到 div.footer 中
	$(".footer").load("/html/include/footer.html");

	// 将 left.html 加载显示到 div.container 中
	$(".container .left").load("/html/include/left.html");
});