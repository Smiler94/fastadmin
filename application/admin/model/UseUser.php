<?php

namespace app\admin\model;

use think\Model;


class UseUser extends Model
{
    // 表名
    protected $table = 'use_user';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    
    public function getTypeAttr($value)
    {
        return \app\common\constant\User::$type[$value];
    }

    public function getStatusAttr($value)
    {
        return \app\common\constant\User::$status[$value];
    }

    public function getSexAttr($value)
    {
        return \app\common\constant\User::$sex[$value];
    }





}
