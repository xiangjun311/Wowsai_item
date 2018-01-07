require(["config"], function(){
	require(["jquery", "template","load"], function($,template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/index.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
		

			// 渲染行
			var html = template("content1_template", renderData);
			$(".content").html(html);
		
			//渲染行内容
			$(".box").each(function(i){				
				var renderData = {products: data.res_body}.products;
				var date = "data";				
				date+=i;
				var renderData = {products:renderData[date]};
				var html = template("content2_template", renderData);
				$(this).addClass(`id${i}`).html(html);
			});
				
					
		});
		/**************/
		
	});
});