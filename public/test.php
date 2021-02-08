<?php
$param = [
    'mch_id' => '977977801',
    'notify_url' => 'http://localhost/Notify/Wodtian',
    'page_url' => 'http://localhost/#/pay/payok',
    'mch_order_no' => '161175884518779',
    'pay_type' => '102',
    'trade_amount' => '100',
    'order_date' => '2021-01-27 22:47:25',
    'goods_name' => '充值',
//    'mch_return_msg' => '',
//    'bank_code' => 'IDPT0001'
];

ksort($param);
$md5str = "";
foreach ($param as $key => $val) {
    $md5str = $md5str . $key . "=" . $val . "&";
}
//$md5str = rtrim($md5str, '&');
$md5str = $md5str.'key=9a99a8f74b82405e91a93f597231603e';
//echo $md5str.'<br/>';
$sign = md5($md5str);
echo $sign;exit;
$tjurl = 'https://pay.sepropay.com/sepro/pay/web';

$param['sign'] = $sign;
$param['sign_type'] = 'MD5';
//$param['goods_name'] = '充值';
//$param['pay_type'] = '102';
var_dump($param);
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>支付Demo</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container">
    <div class="row" style="margin:15px;0;">
        <div class="col-md-12">
            <form class="form-inline" method="post" action="<?php echo $tjurl; ?>">
                <?php
                foreach ($param as $key => $val) {
                    echo '<input type="hidden" name="' . $key . '" value="' . $val . '">';
                }
                ?>
                <button type="submit" class="btn btn-success btn-lg">扫码支付(金额：<?php echo 10; ?>元)</button>
            </form>
        </div>
    </div>
</div>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
</body>
</html>