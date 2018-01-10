require(["config"], function(){
	require(["jquery", "template","load"], function($,template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/index.json", function(data){
			var _user = $.cookie("user")||[];
				console.log(_user)


			// 准备渲染数据
			var renderData = {products : data.res_body.data};

			// 渲染行
			var html = template("content1_template", renderData);
			$(".content").html(html);
		
			//渲染行内容，循环添加
			$(".box").each(function(i){				
				var renderData = {products: data.res_body}.products;
				var date = "data";				
				date+=i;
				var renderData = {products:renderData[date]};
				var html = template("content2_template", renderData);
				$(this).addClass(`id${i}`).html(html);
			});					
		});
		
		
		/***********************/


		/*****弹出登录界面*****/
		


		/**********************/
		
	});
});


/*******模拟数据注册*******/
/*$.getJSON("/mock/login.json",function(date){
	var user = date.res_body.data;
	// console.log(user[0].username)
	$("btn").click(function(){
		
		location="html/register.html";
	})
	$.each(user,function(i,attr){
		var name= $("#recipient-name").val();
		if(name=attr.username){
		}else{
			console.log("未注册")
		}
		

	})	
});*/
/********************/