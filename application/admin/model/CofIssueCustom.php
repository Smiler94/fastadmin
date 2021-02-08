<?php

namespace app\admin\model;

use app\common\constant\Game;
use think\Model;


class CofIssueCustom extends Model
{
    // 表名
    protected $table = 'cof_issue_custom';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'GameName'
    ];

    public function getGameNameAttr($value, $data)
    {
        return Game::$game[$data['GameId']];
    }
    







}
