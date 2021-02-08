define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'cof_issue_custom/index' + location.search,
                    add_url: 'cof_issue_custom/add',
                    edit_url: 'cof_issue_custom/edit',
                    del_url: 'cof_issue_custom/del',
                    multi_url: 'cof_issue_custom/multi',
                    import_url: 'cof_issue_custom/import',
                    table: 'cof_issue_custom',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'IssueCustomId',
                sortName: 'IssueCustomId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'IssueCustomId', title: __('IssueCustomid')},
                        {field: 'IssueId', title: __('Issueid')},
                        {field: 'GameName', title: __('Gameid')},
                        {field: 'OpenCode', title: __('Opencode'), operate: 'LIKE'},
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