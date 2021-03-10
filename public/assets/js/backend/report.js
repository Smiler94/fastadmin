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

            table.on('load-success.bs.table', function (e, data) {
                //这里我们手动设置底部的值
                $("#BetTotal").text(data.extend.BetTotal);
                $("#BonusTotal").text(data.extend.BonusTotal);
                $("#ProfitTotal").text(data.extend.ProfitTotal);
                $("#RebateTotal").text(data.extend.RebateTotal);
                $("#RechargeTotal").text(data.extend.RechargeTotal);
                $("#TeamName").text(data.extend.TeamName);
                $("#DirectRechargeTotal").text(data.extend.DirectRechargeTotal);
            });
            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'Id',
                sortName: 'Id',
                searchFormVisible: true,
                searchFormTemplate: 'profit_loss_search',
                columns: [
                    [
                        {field: 'UserId', title: __('UserId'), operate: false,formatter: Table.api.formatter.search},
                        {field: 'NickName', title: __('NickName'), operate: 'LIKE'},
                        {field: 'Type', title: __('Type'), operate: false},
                        {field: 'BetTotal', title: __('BetTotal'), operate: false},
                        {field: 'RechargeTotal', title: __('RechargeTotal'), operate: false},
                        {field: 'BonusTotal', title: __('BonusTotal'), operate: false},
                        {field: 'RebateTotal', title: __('RebateTotal'), operate: false},
                        {field: 'ProfitTotal', title: __('ProfitTotal'), operate: false},
                        {field: 'DirectRechargeTotal', title: __('DirectRechargeTotal'), operate: false}
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