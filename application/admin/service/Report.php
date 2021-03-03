<?php


namespace app\admin\service;


use app\admin\model\UseUser;

class Report extends Base
{
    public function teamProfitAndLoss()
    {
        $filter = 'FullAgentId';
        $list = UseUser::alias('a')->join('use_user b', 'find_in_set(a.UserId, b.FullAgentId) OR (a.UserId = b.UserId)')
                ->join('tra_wealth c', 'b.UserId=c.UserId')
                ->field('a.UserId,
                    a.UserName,a.NickName,
                    a.Type,
                    c.SourceType,
                    sum(c.Total)')
                ->group('a.UserId,c.SourceType')->select();
        $team = [];
        foreach($list as $l) {
            if (!isset($team[$l['UserId']]))
            switch($l['sourceType']) {


            }
        }
    }
}