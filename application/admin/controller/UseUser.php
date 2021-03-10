<?php

namespace app\admin\controller;

use app\common\constant\User;
use app\common\controller\Backend;
use think\Db;
use think\Exception;
use think\exception\PDOException;

/**
 * 
 *
 * @icon fa fa-circle-o
 */
class UseUser extends Backend
{
    
    /**
     * UseUser模型对象
     * @var \app\admin\model\UseUser
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\UseUser;
        $this->assign('sexData', User::$sex);
        $this->assign('statusData', User::$status);
        $this->assign('typeData', User::$type);

    }

    public function import()
    {
        parent::import();
    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */

    public function all()
    {
        return json($this->model->column('*'));
    }

    public function types()
    {
        return json(User::$type);
    }

    public function balance($ids = null)
    {
        if ($this->request->isPost()) {
            $balance = $this->request->post("Balance");
            $id = $this->request->post('id');
            $user = $this->model->get($id);
            if ($balance > 0 && !is_null($user)) {
                Db::startTrans();
                try {
                    $user->setInc('Balance', $balance);
                    $wealth = new \app\admin\model\TraWealth([
                        'UserId' => $id,
                        'Total' => $balance,
                        'Balance' => $user->Balance + $balance,
                        'SourceType' => 7,
                        'SourceId' => 0,
                        'Remark' => '直充',
                        'AddTime' => date('Y-m-d H:i:s')
                    ]);
                    $wealth->save();
                    Db::commit();
                } catch (PDOException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }catch (Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                $this->success();
            } else {
                $this->error(__('Parameter %s can not be empty', ''));
            }
        }
        $this->view->assign('id', $ids);
        return $this->view->fetch('add_balance');
    }
}
