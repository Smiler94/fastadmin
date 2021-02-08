<?php

namespace app\admin\model;

use app\common\constant\Game;
use app\common\constant\Order;
use think\Model;


class TraOrder extends Model
{

    // 表名
    protected $table = 'tra_order';
    
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
        'GameTypeName',
        'User'
    ];

    public function getGameNameAttr($v, $data)
    {
        return Game::$game[$data['GameId']];
    }

    public function getStatusNameAttr($v, $data)
    {
        return Order::$status[$data['Status']];
    }
    
    public function getGameTypeNameAttr($v, $data)
    {
        return Game::$type[$data['GameType']];
    }

    public function getUserAttr($v, $data)
    {
        return UseUser::find($data['UserId']);
    }




}
