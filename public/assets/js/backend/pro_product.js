define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'pro_product/index' + location.search,
                    add_url: 'pro_product/add',
                    edit_url: 'pro_product/edit',
                    del_url: 'pro_product/del',
                    multi_url: 'pro_product/multi',
                    import_url: 'pro_product/import',
                    table: 'pro_product',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'ProId',
                sortName: 'ProId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'ProId', title: __('Proid')},
                        {field: 'ProName', title: __('Proname'), operate: 'LIKE'},
                        {field: 'Icon', title: __('Icon'), operate: 'LIKE', formatter: Table.api.formatter.image},
                        {field: 'TotalSycee', title: __('Totalsycee'), operate:'BETWEEN'},
                        {field: 'GiveSycee', title: __('Givesycee'), operate:'BETWEEN'},
                        {field: 'Price', title: __('Price'), operate:'BETWEEN'},
                        {field: 'Indexs', title: __('Indexs')},
                        {field: 'Status', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
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