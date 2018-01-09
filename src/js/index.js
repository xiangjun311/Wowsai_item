require(["config"], function(){
	require(["jquery", "template","load"], function($,template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/index.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
			// console.log(renderData)

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
		/**************/
		$.getJSON("/mock/login.json",function(date){
			var user = date.res_body.data;
			// console.log(user[0].username)
			$("btn").click(function(){
				console.log("this");
				location="html/register.html";
			})
			$.each(user,function(i,attr){
				// console.log(i);
				console.log(attr.username);
				var name= $("#recipient-name").val();
				if(name=attr.username){
					console.log("x")
				}else{
					console.log("未注册")
				}
				

			})






			//通过id查找下标
			function exist(id,arry) {
				var idx = -1;
				$.each(arry,function(index,element){
					if (element.id==id) {
						idx = index;
						return false;
					}
				});
				return idx;
			}
		});
		
	});
});