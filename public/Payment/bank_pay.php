<? header("content-Type: text/html; charset=UTF-8");?>
<?php
	include ('phpqrcode.php');
	include ('signapi.php');

	////////////////////////////////////Request parameter////////////////////////////////////////////////
			
	$result = null;//Return result
	
	$merchant_key ="9a99a8f74b82405e91a93f597231603e";
	
	$mch_id = $_POST["mch_id"];

	$notify_url = $_POST["notify_url"];

	$page_url = $_POST["page_url"];

	$mch_order_no = $_POST["mch_order_no"];

	$pay_type =$_POST["pay_type"];

	$trade_amount = $_POST["trade_amount"];
	
	$order_date = $_POST["order_date"];
	
	$bank_code = $_POST["bank_code"];

	$goods_name = $_POST["goods_name"];

	$sign_type = $_POST["sign_type"];

	$mch_return_msg = $_POST["mch_return_msg"];


 /////////////////////////////   Parameter assembly  /////////////////////////////////
	$signStr = "";

	$signStr = $signStr."bank_code=".$bank_code."&";
	
	if($goods_name != ""){
		$signStr = $signStr."goods_name=".$goods_name."&";
	}

	$signStr = $signStr."mch_id=".$mch_id."&";	

	$signStr = $signStr."mch_order_no=".$mch_order_no."&";

	$signStr = $signStr."mch_return_msg=".$mch_return_msg."&";
	
	$signStr = $signStr."notify_url=".$notify_url."&";	

	$signStr = $signStr."order_date=".$order_date."&";

	$signStr = $signStr."page_url=".$page_url."&";

	$signStr = $signStr."pay_type=".$pay_type."&";

	$signStr = $signStr."trade_amount=".$trade_amount;
	echo $signStr."<br/>";
	$signAPI = new signapi();

	$sign = $signAPI->sign($signStr,$merchant_key);
	echo $sign;exit;
?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	</head>	
	<body>
		<form name="yqfForm" method="post" action="https://pay.sepropay.com/sepro/pay/web">
			<input type="hidden" name="sign" value="<?php echo $sign ?>" />
			<input type="hidden" name="mch_id" value="<?php echo $mch_id ?>" />
			<input type="hidden" name="bank_code" value="<?php echo $bank_code ?>" />	
			<input type="hidden" name="sign_type" value="<?php echo $sign_type ?>" />	
			<input type="hidden" name="notify_url" value="<?php echo $notify_url ?>" />
            <input type="hidden" name="page_url" value="<?php echo $page_url ?>" />				
			<input type="hidden" name="mch_order_no" value="<?php echo $mch_order_no ?>" />	
			<input type="hidden" name="pay_type" value="<?php echo $pay_type ?>" />	
			<input type="hidden" name="trade_amount" value="<?php echo $trade_amount ?>" />
			<input type="hidden" name="order_date" value="<?php echo $order_date ?>" /></br>	
			<input type="hidden" name="goods_name" value="<?php echo $goods_name ?>" />
			<input type="hidden" name="mch_return_msg" value="<?php echo $mch_return_msg ?>" />
            <button type="submit" class="btn btn-success btn-lg">支付</button>
		</form>
	</body>
</html>