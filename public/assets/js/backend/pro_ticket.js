define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'pro_ticket/index' + location.search,
                    add_url: 'pro_ticket/add',
                    edit_url: 'pro_ticket/edit',
                    del_url: 'pro_ticket/del',
                    multi_url: 'pro_ticket/multi',
                    import_url: 'pro_ticket/import',
                    table: 'pro_ticket',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'TicketId',
                sortName: 'TicketId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'TicketId', title: __('Ticketid')},
                        {field: 'TicketName', title: __('Ticketname'), operate: 'LIKE'},
                        {field: 'Icon', title: __('Icon'), operate: 'LIKE', formatter: Table.api.formatter.icon},
                        {field: 'Total', title: __('Total'), operate:'BETWEEN'},
                        {field: 'Price', title: __('Price'), operate:'BETWEEN'},
                        {field: 'Indexs', title: __('Indexs')},
                        {field: 'Status', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'Remark', title: __('Remark'), operate: 'LIKE'},
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