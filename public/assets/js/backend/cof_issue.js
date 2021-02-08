define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'cof_issue/index' + location.search,
                    add_url: 'cof_issue/add',
                    edit_url: 'cof_issue/edit',
                    del_url: 'cof_issue/del',
                    multi_url: 'cof_issue/multi',
                    import_url: 'cof_issue/import',
                    table: 'cof_issue',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'IssueId',
                sortName: 'IssueId',
                columns: [
                    [
                        {field: 'IssueId', title: __('Issueid')},
                        {field: 'GameId', title: __('Gameid')},
                        {field: 'OpenCode', title: __('Opencode'), operate: 'LIKE'},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false}
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