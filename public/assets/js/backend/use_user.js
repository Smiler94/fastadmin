define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'use_user/index' + location.search,
                    add_url: 'use_user/add',
                    edit_url: 'use_user/edit',
                    del_url: 'use_user/del',
                    multi_url: 'use_user/multi',
                    import_url: 'use_user/import',
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
                        {checkbox: true},
                        {field: 'UserId', title: __('Userid')},
                        {field: 'UserName', title: __('Username'), operate: 'LIKE'},
                        {field: 'Type', title: __('Type')},
                        {field: 'NickName', title: __('Nickname'), operate: 'LIKE'},
                        {field: 'Icon', title: __('Icon'), operate: 'LIKE', formatter: Table.api.formatter.icon},
                        {field: 'Mobile', title: __('Mobile'), operate: 'LIKE'},
                        {field: 'Password', title: __('Password'), operate: 'LIKE'},
                        {field: 'RealName', title: __('Realname'), operate: 'LIKE'},
                        {field: 'IdCard', title: __('Idcard'), operate: 'LIKE'},
                        {field: 'Sex', title: __('Sex')},
                        {field: 'ReferrerId', title: __('Referrerid')},
                        {field: 'ReferrerTime', title: __('Referrertime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'Status', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'FullReferrerId', title: __('Fullreferrerid')},
                        {field: 'AgentId', title: __('Agentid')},
                        {field: 'FullAgentId', title: __('Fullagentid'), operate: 'LIKE'},
                        {field: 'Balance', title: __('Balance'), operate:'BETWEEN'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});