<?php

namespace app\admin\model;

use app\common\constant\Pay;
use think\Model;


class TraPay extends Model
{

    

    

    // 表名
    protected $table = 'tra_pay';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'PayTypeName',
        'StatusName',
        'SourceTypeName',
        'User'
    ];
    
    public function getPayTypeNameAttr($v, $data)
    {
        return Pay::$type[$data['PayType']];
    }

    public function getStatusNameAttr($v, $data)
    {
        return Pay::$status[$data['Status']];
    }

    public function getSourceTypeNameAttr($v, $data)
    {
        return Pay::$sourceType[$data['SourceType']];
    }

    public function getUserAttr($v, $data)
    {
        return UseUser::find($data['UserId']);
    }




}
