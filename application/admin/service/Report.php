<?php


namespace app\admin\service;


use app\admin\model\UseUser;
use app\common\constant\User;

class Report extends Base
{
    public function teamProfitAndLoss($userId, $addTimeStart, $addTimeEnd)
    {
        $whereTime = '';
        if ($addTimeStart && $addTimeEnd) {
            $whereTime = "c.AddTime >= '{$addTimeStart}' AND c.AddTime <= '{$addTimeEnd}'";
        }
        if ($userId) {
            $whereUser = "find_in_set({$userId}, a.FullAgentId) OR a.UserId={$userId}";
            $model = UseUser::alias('a')->join('tra_wealth c', 'a.UserId=c.UserId')
                ->where($whereUser);
            if ($whereTime) $model = $model->where($whereTime);
            $list = $model->field('a.UserId,a.UserName,a.NickName,a.Type,c.SourceType,sum(c.Total) as total')
                ->group('a.UserId,c.SourceType')->select();
        } else {
            $whereUser = "a.Type=1";
            $model = UseUser::alias('a')->join('use_user b', 'find_in_set(a.UserId, b.FullAgentId) OR a.UserId=b.UserId')
                ->join('tra_wealth c', 'b.UserId = c.UserId')
                ->where($whereUser);
            if ($whereTime) $model = $model->where($whereTime);
            $list = $model->field('a.UserId,a.UserName,a.NickName,a.Type,c.SourceType,sum(c.Total) as total')
                ->group('a.UserId,c.SourceType')->select();
        }

        $list = $this->formatList($list);

        return array_values($list);
    }

    public function formatList($list)
    {
        $formatList = [];
        foreach($list as $l) {
            if (!isset($formatList[$l['UserId']])) {
                $formatList[$l['UserId']] = [
                    'UserId' => $l['UserId'],
                    'NickName' => $l['NickName'],
                    'Type' => $l['Type'],
                    'ProfitTotal' => 0,
                    'BonusTotal' => 0,
                    'BetTotal' => 0,
                    'RechargeTotal' => 0,
                    'RebateTotal' => 0,
                    'DirectRechargeTotal' => 0
                ];
            }
            switch($l['SourceType']) {
                case 3:
                case 5:
                    $formatList[$l['UserId']]['BetTotal'] += -1 * $l['total'];
                    break;
                case 4:
                    $formatList[$l['UserId']]['BonusTotal'] += $l['total'];
                    break;
                case 2:
                    $formatList[$l['UserId']]['RebateTotal'] += $l['total'];
                    break;
                case 1:
                    $formatList[$l['UserId']]['RechargeTotal'] += $l['total'];
                    break;
                case 6:
                    $formatList[$l['UserId']]['CashTotal'] += -1 * $l['total'];
                    break;
                case 7:
                    $formatList[$l['UserId']]['DirectRechargeTotal'] += $l['total'];
                    break;
            }
        }
        foreach($formatList as $k => $v) {
            $formatList[$k]['ProfitTotal'] = $v['BonusTotal'] + $v['RebateTotal'] - $v['BetTotal'];
        }
        return $formatList;
    }
}