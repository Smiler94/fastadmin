<html>
  <head>
  	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  	 
  <body>
  <table>
		<tr>
  			<td>
			<form method="post" action="bank_pay.php" target="_blank">
				<br>mch_id：<input Type="text" Name="mch_id" value=""> *
				<br>bank_code：
				<select name="bank_code">
					<option value="IDPT0001">Canara Bank</option>
				</select> *			
				<br>sign_type：
				<select name="sign_type">
					<option value="MD5">MD5</option>
				</select> *			
				<br>notify_url：<input Type="text" Name="notify_url" value="http://local.admin.cn/Payment/offline_notify.php"> *
				<br>page_url：<input Type="text" Name="page_url" value="http://local.admin.cn/Payment/offline_return.php"> *
				<br>mch_order_no：<input Type="text" Name="mch_order_no" value="<?=date("YmdHis");?>"> *		
				<br>pay_type：
  						<select name="pay_type" id="pay_type">
							<option value="120">India Online Banking B2C</option>					
							<option value="121">India Paytm</option>
							<option value="102">India UPI</option>
							<option value="123">Indian online bank transfer</option>
						</select> *
				<br>trade_amount：<input Type="text" Name="trade_amount" value="10000"> *
				<br>order_date：<input Type="text" Name="order_date" value="<?=date('Y-m-d H:i:s');?>"/> *
				<br>goods_name：<input Type="text" Name="goods_name" value="iPhone">	
				<br>mch_return_msg：<input Type="text" Name="mch_return_msg" value="test">	
				<br>
				<br><input Type="submit" Name="submit" value="Submit payment parameters">
			</form>
  			</td>
		</tr>
	</table>
	</body>
</html>