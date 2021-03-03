define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init();

            //绑定事件
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var panel = $($(this).attr("href"));
                if (panel.size() > 0) {
                    Controller.table[panel.attr("id")].call(this);
                    $(this).on('click', function (e) {
                        $($(this).attr("href")).find(".btn-refresh").trigger("click");
                    });
                }
                //移除绑定的事件
                $(this).unbind('shown.bs.tab');
            });

            //必须默认触发shown.bs.tab事件
            $('ul.nav-tabs li.active a[data-toggle="tab"]').trigger("shown.bs.tab");
        },
        table: {
            first: function () {
                // 表格1
                var table1 = $("#table1");
                table1.bootstrapTable({
                    url: 'cof_issue_custom/index' + location.search,
                    toolbar: '#toolbar1',
                    search: false,
                    pk: 'IssueCustomId',
                    sortName: 'IssueCustomId',
                    columns: [
                        [
                            {checkbox: true},
                            {field: 'IssueCustomId', title: __('IssueCustomid')},
                            {field: 'IssueId', title: __('Issueid')},
                            {field: 'OpenCode', title: __('Opencode'), operate: 'LIKE'},
                            {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                            {field: 'operate', title: __('Operate'), table: table1, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                        ]
                    ],
                    queryParams: function(params) {
                        params.filter = JSON.stringify({GameId: 7});
                        params.op = JSON.stringify({GameId: "="});
                        return params;
                    }
                });

                // 为表格1绑定事件
                Table.api.bindevent(table1);
            },
            second: function () {
                // 表格2
                var table2 = $("#table2");
                table2.bootstrapTable({
                    url: 'cof_issue_custom/index' + location.search,
                    toolbar: '#toolbar2',
                    sortName: 'id',
                    search: false,
                    pk: 'IssueCustomId',
                    sortName: 'IssueCustomId',
                    columns: [
                        [
                            {checkbox: true},
                            {field: 'IssueCustomId', title: __('IssueCustomid')},
                            {field: 'IssueId', title: __('Issueid')},
                            {field: 'OpenCode', title: __('Opencode'), operate: 'LIKE'},
                            {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                            {field: 'operate', title: __('Operate'), table: table2, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                        ]
                    ],
                    queryParams: function(params) {
                        params.filter = JSON.stringify({GameId: 8});
                        params.op = JSON.stringify({GameId: "="});
                        return params;
                    }
                });

                // 为表格2绑定事件
                Table.api.bindevent(table2);
            }
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