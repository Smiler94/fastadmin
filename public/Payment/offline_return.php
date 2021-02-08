<?php
include ('signapi.php');

	$merchant_key = "";

	$amount = $_POST["amount"];	
	
	$mchId = $_POST["mchId"];

	$mchOrderNo = $_POST["mchOrderNo"];

	$merRetMsg = $_POST["merRetMsg"];

	$orderDate = $_POST["orderDate"];

	$orderNo = $_POST["orderNo"];	

	$oriAmount = $_POST["oriAmount"];

	$tradeResult = $_POST["tradeResult"];

	$signType = $_POST["signType"];

	$sign = $_POST["sign"];

	
	$signStr = "";
	$signStr = $signStr."amount=".$amount."&";
	$signStr = $signStr."mchId=".$mchId."&";
	$signStr = $signStr."mchOrderNo=".$mchOrderNo."&";
	$signStr = $signStr."merRetMsg=".$merRetMsg."&";
	$signStr = $signStr."orderDate=".$orderDate."&";
	$signStr = $signStr."orderNo=".$orderNo."&";
	$signStr = $signStr."oriAmount=".$oriAmount."&";
	$signStr = $signStr."tradeResult=".$tradeResult."&";
	
	$signAPI = new signapi();
	$flag = $signAPI->validateSignByKey($signStr,$merchant_key,$sign);

	if($flag){						
		echo "success";						
	}else{
		echo "Signature error";  
	}
?>