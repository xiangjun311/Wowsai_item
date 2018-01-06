require(["config"], function(){
	require(["jquery", "template","load"], function($, template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/list.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
			// 渲染数据
			var html = template("list_template", renderData);
			$(".main").html(html);
			
			//利用事件委派，绑定点击事件
			$(".list_buy").delegate(".add","click",function(event){
				//获取当前购物车父级节点元素
				var _box =$(this).parent();
				//将选购商品保存到对象中
				var prod = {
					id:_box.children(".id").text(),
					title:_box.children(".title").text(),
					wasai:_box.children(".wasai").text(),
					price:_box.children(".price").text(),
					amount:1,
					youhui:_box.children(".youhui").text(),
					img:_box.children(".img").attr("src")
				};
				console.log(prod);
				//查找cookie中已有购物车结构
				$.cookie.json = true;
				var _products = $.cookie("products")||[];
				console.log(_products);
				//判查找id 断是否存在已选购商品，有则自增数量
				var index = exist(prod.id,_products);
				if (index === -1) {
					_products.push(prod);
				}else{
					_products[index].amount++;
				}
				//将数组存回cookie中
				var x = $.cookie("products", _products ,{expires:7,path:"/"});
				// console.log("x")

			});
			/************事件****************/
			//通过id查找所在商品是否存在products中 
			function exist(id,products) {
				var idx = -1;
				$.each(products,function(index,element){
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