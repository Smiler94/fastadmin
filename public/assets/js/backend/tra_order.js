define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'tra_order/index' + location.search,
                    add_url: 'tra_order/add',
                    edit_url: 'tra_order/edit',
                    del_url: 'tra_order/del',
                    multi_url: 'tra_order/multi',
                    import_url: 'tra_order/import',
                    table: 'tra_order',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'OrderId',
                sortName: 'OrderId',
                columns: [
                    [
                        {field: 'OrderId', title: __('Orderid'), operate: false},
                        {field: 'useUser.UserName', title: __('Userid'), operate: 'LIKE'},
                        {field: 'OrderNo', title: __('Orderno'), operate: 'LIKE'},
                        {field: 'GameName', title: __('Gameid')},
                        {field: 'GameTypeName', title: __('Gametype'),  operate: false},
                        {field: 'IssueId', title: __('Issueid')},
                        {field: 'BetType', title: __('Bettype')},
                        {field: 'BetNos', title: __('Betnos'), operate: 'LIKE'},
                        {field: 'Multiple', title: __('Multiple')},
                        {field: 'Cost', title: __('Cost'), operate:'BETWEEN'},
                        {field: 'Bonus', title: __('Bonus'), operate:'BETWEEN'},
                        {field: 'StatusName', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'LastTime', title: __('Lasttime'), operate: false, addclass:'datetimerange', autocomplete:false},
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