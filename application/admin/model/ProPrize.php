<?php

namespace app\admin\model;

use app\common\constant\Game;
use app\common\constant\Prize;
use app\common\constant\YesOrNo;
use think\Model;


class ProPrize extends Model
{
    // 表名
    protected $table = 'pro_prize';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'GameName',
        'StatusName',
        'IsDefaultName'
    ];
    
    public function getGameNameAttr($value, $data)
    {
        return Game::$game[$data['GameId']];
    }

    public function getStatusNameAttr($value, $data)
    {
        return Prize::$status[$data['Status']];
    }

    public function getIsDefaultNameAttr($value, $data)
    {
        return YesOrNo::$yesOrNo[$data['IsDefault']];
    }
}
