define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'tra_wealth/index' + location.search,
                    add_url: 'tra_wealth/add',
                    edit_url: 'tra_wealth/edit',
                    del_url: 'tra_wealth/del',
                    multi_url: 'tra_wealth/multi',
                    import_url: 'tra_wealth/import',
                    table: 'tra_wealth',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'WealthId',
                sortName: 'WealthId',
                columns: [
                    [
                        {field: 'WealthId', title: __('Wealthid')},
                        {field: 'User.UserName', title: __('Userid'), formatter: Table.api.formatter.search},
                        {field: 'Total', title: __('Total'), operate:'BETWEEN'},
                        {field: 'Balance', title: __('Balance'), operate:'BETWEEN'},
                        {field: 'SourceTypeName', title: __('Sourcetype')},
                        {field: 'SourceId', title: __('Sourceid')},
                        {field: 'Remark', title: __('Remark'), operate: 'LIKE'},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
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