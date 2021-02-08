<?php


namespace app\common\constant;


class User
{
    public static $status = [
        0 => '正常',
        -1 => '冻结'
    ];

    public static $type = [
        0 => '会员',
        1 => '代理'
    ];

    public static $sex = [
        0 => '未知',
        1 => '男',
        2 => '女'
    ];
}