require(["config"], function(){
	require(["jquery","load"], function($){

	    /******跨域请求连接服务器*********/	
		
		$("#formLogin").submit(function(e){
			$.cookie.json = true;
		e.preventDefault();
		var email = $("#email").val(),
			username = $("#username").val(),
			pass = $("#password").val();

			console.log(email,pass)		
			$.ajax({
				url: "http://10.7.187.96/wowsai_php/login.php",
				data:{
					email:email,
					username:username,
					password:pass
				},
				type: "post",
				datatype:"json",
				success:function(data){
					// location="/index.html"
					console.log(data)

																		
				},
				error:function(msg){
             		console.log("dsjf") 
             		console.log(msg)       
  				}
			});
	    });		
		/*******跨域请求连接服务器***********/

		/**********************************/
		// $.ajax("/html/include/header.html").done(function(data){
		// 	$(".header").html(data);
		// }).done(function(){
		// 	console.log($(".login"))
		// });
    });
});