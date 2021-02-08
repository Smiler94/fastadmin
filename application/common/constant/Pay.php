<?php


namespace app\common\constant;


class Pay
{
    public static $type = [
        1 => '微信',
        2 => '支付宝',
        3 => '快捷支付',
        4 => '网银支付',
        5 => '线上支付',
        6 => '线下支付',
        11 => '平台直充'
    ];

    public static $status = [
        0 => '待支付',
        1 => '支付成功'
    ];

    public static $sourceType = [
        0 => '充值'
    ];
}