require(["config"], function(){
	require(["jquery", "template","load"], function($,template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/index.json", function(data){
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

			$(".dl_product").click(function(i){
				//将选中商品保存到对象中
				var prod = {
					id:$(this).find(".id").text(),
					title:$(this).find(".title").text(),					
					price:$(this).find(".price").text(),					
					img:$(this).find(".img").attr("src")
				};
				console.log(prod);

				$.cookie("product", [prod] ,{expires:7,path:"/"});
				
			})

		

		});//getJSON结束行
		
	});
});


