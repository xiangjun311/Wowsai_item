<?php
	header("Access-Control-Allow-Origin:*");
	
	$username = $_GET["username"];
	$password = $_GET["password"];
	
	
	
	
	mysql_connect("localhost:3306","root","");
	mysql_select_db("test");
	$sql = "INSERT INTO `test`.`users`(`username`,`password`)VALUES('$username','$password')";
	$re = mysql_query($sql);
	if($re){
		echo '<meta charset="UTF-8">';
		echo "成功";
	}else{
		echo '<meta charset="UTF-8">';
		echo "失败";
	}
	
	
?>