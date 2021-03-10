define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'use_user/index' + location.search,
                    add_url: 'use_user/add',
                    edit_url: 'use_user/edit',
                    balance_url: 'use_user/balance',
                    table: 'use_user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'UserId',
                sortName: 'UserId',
                columns: [
                    [
                        {field: 'UserId', title: __('Userid')},
                        {field: 'UserName', title: __('Username'), operate: 'LIKE'},
                        {field: 'Type', title: __('Type')},
                        {field: 'NickName', title: __('Nickname'), operate: 'LIKE'},
                        {field: 'Mobile', title: __('Mobile'), operate: 'LIKE'},
                        {field: 'RealName', title: __('Realname'), operate: false},
                        {field: 'IdCard', title: __('Idcard'), operate: false},
                        {field: 'Sex', title: __('Sex'), operate: false},
                        {field: 'ReferrerTime', title: __('Referrertime'), operate:false, addclass:'datetimerange', autocomplete:false},
                        {field: 'Status', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'ReferrerId', title: __('Referrerid'), operate: false},
                        {field: 'FullReferrerId', title: __('Fullreferrerid'), operate: false},
                        {field: 'AgentId', title: __('Agentid'), operate: false},
                        {field: 'FullAgentId', title: __('Fullagentid'), operate: 'LIKE'},
                        {field: 'Balance', title: __('Balance'), operate: false},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate,
                            buttons: [
                                {
                                    name: 'detail',
                                    title: __('直充'),
                                    classname: 'btn btn-xs btn-primary btn-dialog',
                                    icon: 'fa fa-yen',
                                    url: 'use_user/balance',
                                    callback: function (data) {
                                        Layer.alert("接收到回传数据：" + JSON.stringify(data), {title: "回传数据"});
                                    }
                                }
                            ]}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        balance: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});