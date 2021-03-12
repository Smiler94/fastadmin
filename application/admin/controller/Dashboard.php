<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use think\Config;
use app\admin\model\UseUser;
use app\admin\model\TraRecharge;
use app\admin\model\TraWealth;
/**
 * 控制台
 *
 * @icon fa fa-dashboard
 * @remark 用于展示当前系统中的统计数据、统计报表及重要实时数据
 */
class Dashboard extends Backend
{

    /**
     * 查看
     */
    public function index()
    {
//        $seventtime = \fast\Date::unixtime('day', -7);
//        $paylist = $createlist = [];
//        for ($i = 0; $i < 7; $i++)
//        {
//            $day = date("Y-m-d", $seventtime + ($i * 86400));
//            $createlist[$day] = mt_rand(20, 200);
//            $paylist[$day] = mt_rand(1, mt_rand(1, $createlist[$day]));
//        }
//        $hooks = config('addons.hooks');
//        $uploadmode = isset($hooks['upload_config_init']) && $hooks['upload_config_init'] ? implode(',', $hooks['upload_config_init']) : 'local';
//        $addonComposerCfg = ROOT_PATH . '/vendor/karsonzhang/fastadmin-addons/composer.json';
//        Config::parse($addonComposerCfg, "json", "composer");
//        $config = Config::get("composer");
//        $addonVersion = isset($config['version']) ? $config['version'] : __('Unknown');
        $todayTime = date('Y-m-d');
        $todayRegister = UseUser::where("AddTime > '{$todayTime}'")->count();
        $totalRegister = UseUser::count();
        $todayRecharge = TraRecharge::where("AddTime > '{$todayTime}'")->distinct('UserId')->count();
        $totalRecharge = count(TraRecharge::distinct('UserId')->field('UserId')->select());
        $todayDirectRecharge = TraWealth::where("SourceType = 7 and AddTime > '{$todayTime}'")->sum('Total');

        $this->view->assign([
            'todayRegister' => $todayRegister,
            'todayRecharge' => $todayRecharge,
            'totalRegister' => $totalRegister,
            'totalRecharge' => $totalRecharge,
            'todayDirectRecharge' => $todayDirectRecharge
        ]);

        return $this->view->fetch();
    }

}
