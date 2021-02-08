<? header("content-Type: text/html; charset=UTF-8");?>
<?php
	include ('signapi.php');	
	
	$reqUrl = "";//Query request address
	
	$result = null;
	
	$merchant_key = "";

	$mch_id = $_POST["mch_id"];

	$mch_order_no = $_POST["mch_order_no"];

	$sign_type = $_POST["sign_type"];		


	$signStr = "";

	$signStr = $signStr."mch_id=".$mch_id."&";

	$signStr = $signStr."mch_order_no=".$mch_order_no;

	$signAPI = new signapi();
	$sign = $signAPI->sign($signStr,$merchant_key);	

	$postdata=array(
	'mch_id'=>$mch_id,
	'mch_order_no'=>$mch_order_no,
	'sign_type'=>$sign_type,
	'sign'=>$sign);
	
	$ch = curl_init();	
	curl_setopt($ch,CURLOPT_URL,$reqUrl);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
	curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postdata));  
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	
	$response=curl_exec($ch);

	curl_close($ch);
	
	echo $response;
?>



