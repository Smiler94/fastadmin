<?php

namespace app\admin\model;

use app\common\constant\Game;
use think\Model;


class CofIssue extends Model
{

    

    

    // 表名
    protected $table = 'cof_issue';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    
    public function getGameIdAttr($value)
    {
        return Game::$game[$value];
    }







}
