<?php

namespace app\admin\model;

use app\common\constant\Recharge;
use think\Model;


class TraRecharge extends Model
{

    

    

    // 表名
    protected $table = 'tra_recharge';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'StatusName',
        'User'
    ];

    public function getStatusNameAttr($v, $data)
    {
        return Recharge::$status[$data['Status']];
    }

    public function getUserAttr($v, $data)
    {
        return UseUser::find($data['UserId']);
    }
}
