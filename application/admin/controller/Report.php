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
//        if ($this->request->isAjax()) {
            $list = $this->service->teamProfitAndLoss();
            return json([
                "total" => $list->total(), "rows" => $list->items()
            ]);
//        }
//        return view('team_profit_and_loss');
    }
}