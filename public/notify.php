<?php
//$amount = 100;
//$mchId = '977977801';
//$mchOrderNo = '161175921213333';
//$merRetMsg = '';
//$orderDate = '2021-01-27 22:53:32';
//$orderNo = '1234567';
//$oriAmount = 100;
//$tradeResult = 1;
//$key = '9a99a8f74b82405e91a93f597231603e';
//$signStr = "";
//$signStr = $signStr."amount=".$amount."&";
//$signStr = $signStr."mchId=".$mchId."&";
//$signStr = $signStr."mchOrderNo=".$mchOrderNo."&";
//$signStr = $signStr."merRetMsg=".$merRetMsg."&";
//$signStr = $signStr."orderDate=".$orderDate."&";
//$signStr = $signStr."orderNo=".$orderNo."&";
//$signStr = $signStr."oriAmount=".$oriAmount."&";
//$signStr = $signStr."tradeResult=".$tradeResult."&";
//$signStr = $signStr."key=".$key;
//echo $signStr.'<br/>';

$signStr = "amount=100.00&mchId=977977801&mchOrderNo=161200261044532&orderDate=2021-01-30 18:29:43&orderNo=600456144&oriAmount=100.00&tradeResult=1&key=9a99a8f74b82405e91a93f597231603e";
//7666bd19a1283aa76d7aea00dc63833b
//7666bd19a1283aa76d7aea00dc63833
//6a1091c390ed6539347d593809817723
echo md5($signStr);