define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'tra_recharge/index' + location.search,
                    add_url: 'tra_recharge/add',
                    edit_url: 'tra_recharge/edit',
                    del_url: 'tra_recharge/del',
                    multi_url: 'tra_recharge/multi',
                    import_url: 'tra_recharge/import',
                    table: 'tra_recharge',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'RechargeId',
                sortName: 'RechargeId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'RechargeId', title: __('Rechargeid')},
                        {field: 'RechargeNo', title: __('Rechargeno'), operate: 'LIKE'},
                        {field: 'Product.ProName', title: __('Proid')},
                        {field: 'Price', title: __('Price'), operate:'BETWEEN'},
                        {field: 'Qty', title: __('Qty')},
                        {field: 'Total', title: __('Total'), operate:'BETWEEN'},
                        {field: 'TotalSycee', title: __('Totalsycee'), operate:'BETWEEN'},
                        {field: 'GiveSycee', title: __('Givesycee'), operate:'BETWEEN'},
                        {field: 'FreezeSycee', title: __('Freezesycee'), operate:'BETWEEN'},
                        {field: 'User.UserName', title: __('Userid')},
                        {field: 'StatusName', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'LastTime', title: __('Lasttime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'Remark', title: __('Remark'), operate: 'LIKE'},
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