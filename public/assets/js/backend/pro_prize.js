define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'pro_prize/index' + location.search,
                    add_url: 'pro_prize/add',
                    edit_url: 'pro_prize/edit',
                    del_url: 'pro_prize/del',
                    multi_url: 'pro_prize/multi',
                    import_url: 'pro_prize/import',
                    table: 'pro_prize',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'PrizeId',
                sortName: 'PrizeId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'PrizeId', title: __('Prizeid')},
                        {field: 'GameName', title: __('Gameid')},
                        {field: 'PrizeName', title: __('Prizename'), operate: 'LIKE'},
                        {field: 'TotalSycee', title: __('Totalsycee'), operate:'BETWEEN'},
                        {field: 'IsDefaultName', title: __('Isdefault')},
                        {field: 'StatusName', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
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