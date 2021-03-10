<?php


namespace app\admin\controller;


use app\common\controller\Backend;

class Report extends Backend
{

    protected $service = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->service = new \app\admin\service\Report;
    }

    public function teamProfitAndLoss()
    {
        if ($this->request->isAjax()) {
            $filter = $this->request->get('filter', '');
            $filter = json_decode($filter, true);
            $userId = isset($filter['UserId']) ? $filter['UserId'] : 0;
            $startTime = '';
            $endTime = '';
            if (isset($filter['AddTime'])) {
                $time = explode(' - ', $filter['AddTime']);
                $startTime = $time[0];
                $endTime = $time[1];
            }
            $list = $this->service->teamProfitAndLoss($userId, $startTime, $endTime);
            return json([
                "total" => count($list), "rows" => $list, "extend" => [
                    "TeamName" => $userId ? \app\admin\model\UseUser::where("UserId={$userId}")->value('NickName')."的团队" : "所有团队",
                    'ProfitTotal' => array_sum(array_column($list, 'ProfitTotal')),
                    'BetTotal' => array_sum(array_column($list, 'BetTotal')),
                    'BonusTotal' => array_sum(array_column($list, 'BonusTotal')),
                    'RebateTotal' => array_sum(array_column($list, 'RebateTotal')),
                    'RechargeTotal' => array_sum(array_column($list, 'RechargeTotal')),
                    'DirectRechargeTotal' => array_sum(array_column($list, 'DirectRechargeTotal'))
                ]
            ]);
        }
        return view('team_profit_and_loss');
    }
}