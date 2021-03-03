<?php


namespace app\api\controller;

use app\common\controller\Api;
use think\Request;

class Currency extends Api
{
    protected $service = null;

    public function __construct(Request $request = null)
    {
        parent::__construct($request);
        $this->service = new \app\admin\service\Currency();
    }

    public function update()
    {
        $this->service->update();
    }
}