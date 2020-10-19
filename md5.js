<html>
	<head>
		<script src="md5.js"></script>
		<script>
			function md5passwd(){
				passwd = document.getElementById("password").value;
				document.getElementById("password").value = hex_md5(passwd);
				return true;			
			}
		</script>
	</head>
 <form action="clock.jsp" method="post" onsubmit="return md5passwd()">
  <input type="text" name="username" id="username">
  <input type="password" name="password" id="password" value="">
  <input type="submit" id="submit" name="submit"> 
 </form>
