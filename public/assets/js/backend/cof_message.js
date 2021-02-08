define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'cof_message/index' + location.search,
                    add_url: 'cof_message/add',
                    edit_url: 'cof_message/edit',
                    del_url: 'cof_message/del',
                    multi_url: 'cof_message/multi',
                    import_url: 'cof_message/import',
                    table: 'cof_message',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'MesId',
                sortName: 'MesId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'MesId', title: __('Mesid')},
                        {field: 'Type', title: __('Type')},
                        {field: 'UserGroup', title: __('Usergroup')},
                        {field: 'UserIds', title: __('Userids'), operate: 'LIKE'},
                        {field: 'Title', title: __('Title'), operate: 'LIKE'},
                        {field: 'Icon', title: __('Icon'), operate: 'LIKE', formatter: Table.api.formatter.icon},
                        {field: 'Content', title: __('Content'), operate: 'LIKE'},
                        {field: 'Indexs', title: __('Indexs')},
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