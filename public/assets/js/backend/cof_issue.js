define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'cof_issue/index' + location.search,
                    table: 'cof_issue',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'IssueId',
                sortName: 'AddTime',
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