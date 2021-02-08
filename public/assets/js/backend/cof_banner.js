define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'cof_banner/index' + location.search,
                    add_url: 'cof_banner/add',
                    edit_url: 'cof_banner/edit',
                    del_url: 'cof_banner/del',
                    multi_url: 'cof_banner/multi',
                    import_url: 'cof_banner/import',
                    table: 'cof_banner',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'BannerId',
                sortName: 'BannerId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'BannerId', title: __('Bannerid')},
                        {field: 'Title', title: __('Title'), operate: 'LIKE'},
                        {field: 'Image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'Url', title: __('Url'), operate: 'LIKE', formatter: Table.api.formatter.url},
                        {field: 'Indexs', title: __('Indexs'), operate: 'LIKE'},
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