define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        teamprofitandloss: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'report/teamProfitAndLoss' + location.search,
                    table: 'team_profit_and_loss',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'Id',
                sortName: 'Id',
                columns: [
                    [
                        {field: 'Id', title: __('Id'), operate: false},
                        {field: 'Username', title: __('Username'), operate: 'LIKE'},
                        {field: 'BetTotal', title: __('BetTotal'), operate: false},
                        {field: 'BonusTotal', title: __('BonusTotal'), operate: false},
                        {field: 'RebateTotal', title: __('RebateTotal'), operate: false},
                        {field: 'ProfitTotal', title: __('ProfitTotal'), operate: false},
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});