<?php

namespace app\admin\model;

use app\common\constant\Wealth;
use think\Model;


class TraWealth extends Model
{

    

    

    // 表名
    protected $table = 'tra_wealth';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'SourceTypeName',
        'User'
    ];
    
    public function getSourceTypeNameAttr($v, $data)
    {
        return Wealth::$sourceType[$data['SourceType']];
    }
    
    public function getUserAttr($v, $data)
    {
        return UseUser::find($data['UserId']);
    }





}
