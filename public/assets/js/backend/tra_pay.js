define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'tra_pay/index' + location.search,
                    add_url: 'tra_pay/add',
                    edit_url: 'tra_pay/edit',
                    del_url: 'tra_pay/del',
                    multi_url: 'tra_pay/multi',
                    import_url: 'tra_pay/import',
                    table: 'tra_pay',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'PayId',
                sortName: 'PayId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'PayId', title: __('Payid')},
                        {field: 'PayNo', title: __('Payno'), operate: 'LIKE'},
                        {field: 'User.UserName', title: __('Userid')},
                        {field: 'PayTypeName', title: __('Paytype')},
                        {field: 'Total', title: __('Total'), operate:'BETWEEN'},
                        {field: 'StatusName', title: __('Status')},
                        {field: 'SourceTypeName', title: __('Sourcetype')},
                        {field: 'SourceId', title: __('Sourceid')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'LastTime', title: __('Lasttime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false}
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