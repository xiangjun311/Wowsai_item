<?php 
	// 获取请求中用户传递的用户名与密码
	header("Access-Control-Allow-Origin:*");
	$username = $_POST["username"];
	$password = $_POST["password"];

	/* 将用户名与密码保存到数据库中 */
	// 连接数据库服务器
	mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("test");
	// 编写插入数据的SQL语句
	$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
	// 执行SQL语句
	$result = mysql_query($sql);
	// 返回值为 true 表示执行成功，否则表示执行失败
	if ($result) {
		echo "<script>location='success.html';</script>";
	} else {
		echo "<script>location='register.html';</script>";
	}
	// 关闭数据库连接
	mysql_close();
 ?>