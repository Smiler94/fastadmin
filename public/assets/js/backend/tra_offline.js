define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'tra_offline/index' + location.search,
                    add_url: 'tra_offline/add',
                    edit_url: 'tra_offline/edit',
                    del_url: 'tra_offline/del',
                    multi_url: 'tra_offline/multi',
                    import_url: 'tra_offline/import',
                    table: 'tra_offline',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'OfflineId',
                sortName: 'OfflineId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'OfflineId', title: __('Offlineid')},
                        {field: 'RechargeId', title: __('Rechargeid')},
                        {field: 'RealName', title: __('Realname'), operate: 'LIKE'},
                        {field: 'BankId', title: __('Bankid')},
                        {field: 'BankName', title: __('Bankname'), operate: 'LIKE'},
                        {field: 'CardNo', title: __('Cardno'), operate: 'LIKE'},
                        {field: 'WayId', title: __('Wayid')},
                        {field: 'WayName', title: __('Wayname'), operate: 'LIKE'},
                        {field: 'Status', title: __('Status')},
                        {field: 'Remark', title: __('Remark'), operate: 'LIKE'},
                        {field: 'Replay', title: __('Replay'), operate: 'LIKE'},
                        {field: 'PayTime', title: __('Paytime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'UserId', title: __('Userid')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'LastTime', title: __('Lasttime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
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