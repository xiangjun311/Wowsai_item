

require(["config"], function(){
	require(["jquery", "template","load"], function($,template){
		$.cookie.json = true;
		//读取cookie中保存的商品数据
		var _product = $.cookie("product");
					console.log(_product)
		var renderData = {products :_product};
			// console.log(renderData)
			// 渲染数据
			var html = template("detail_template", renderData);
			$(".right").html(html);

		//利用事件委派，绑定点击事件
		$(".commodity").delegate(".add","click",function(event){
			//获取当前购物车父级节点元素
			// console.log(this)
			var _box =$(this).parents(".commodity");
			// console.log(_box)
			//将选购商品保存到对象中
			var prod = {
				id:_box.find(".id").text(),
				title:_box.find(".title").text(),
				wasai:_box.find(".wasai").text(),
				price:_box.find(".price").text(),
				amount:1,
				youhui:_box.find(".youhui").text(),
				img:_box.find(".img").attr("src")
			};
			console.log(prod)
			//查找cookie中已有购物车结构
			$.cookie.json = true;
			var _products = $.cookie("products")||[];
			// console.log(_products)
			//判查找id 断是否存在已选购商品，有则自增数量
			var index = exist(prod.id,_products);
			
			if (index === -1) {
				_products.push(prod);
			}else{
				_products[index].amount++;
			}
			//将数组存回cookie中
			$.cookie("products", _products ,{expires:7,path:"/"});
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
		/*****************************************/
	});
});