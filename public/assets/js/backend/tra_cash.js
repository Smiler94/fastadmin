define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'tra_cash/index' + location.search,
                    add_url: 'tra_cash/add',
                    edit_url: 'tra_cash/edit',
                    del_url: 'tra_cash/del',
                    multi_url: 'tra_cash/multi',
                    import_url: 'tra_cash/import',
                    table: 'tra_cash',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'CashId',
                sortName: 'CashId',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'CashId', title: __('Cashid')},
                        {field: 'CashNo', title: __('Cashno'), operate: 'LIKE'},
                        {field: 'UserId', title: __('Userid')},
                        {field: 'TicketId', title: __('Ticketid')},
                        {field: 'Price', title: __('Price'), operate:'BETWEEN'},
                        {field: 'Qty', title: __('Qty')},
                        {field: 'Total', title: __('Total'), operate:'BETWEEN'},
                        {field: 'ChannelId', title: __('Channelid')},
                        {field: 'RealName', title: __('Realname'), operate: 'LIKE'},
                        {field: 'ChannelType', title: __('Channeltype')},
                        {field: 'ChannelNumber', title: __('Channelnumber'), operate: 'LIKE'},
                        {field: 'ChannelRemark', title: __('Channelremark'), operate: 'LIKE'},
                        {field: 'ChannelImgUrl', title: __('Channelimgurl'), operate: 'LIKE', formatter: Table.api.formatter.url},
                        {field: 'Remark', title: __('Remark'), operate: 'LIKE'},
                        {field: 'Status', title: __('Status')},
                        {field: 'AddTime', title: __('Addtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'LastTime', title: __('Lasttime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
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