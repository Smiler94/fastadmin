<?php


namespace app\admin\service;


use app\admin\model\CofCurrency;

class Currency extends Base
{
    private $currencyList = ["INR", 'CNY'];
    public function update()
    {
        $rateList = $this->getRateList();

        if ($rateList) {
            foreach($rateList as $rate) {
                CofCurrency::insert($rate, true);
            }
        }
    }

    public function getRateList()
    {
        $res = [];
        foreach($this->currencyList as $currency)
        {
            if ($rate = $this->getRateFromApi('USD', $currency)) {
                $res[] = [
                    'CurrencyCode' => $currency,
                    'Rate' => $rate,
                    'AddTime' => date('Y-m-d H:i:s')
                ];
            }
        }

        return $res;
    }

    public function getRateFromApi($from, $to)
    {
        $url = "http://api.tianapi.com/txapi/fxrate/index?key=df2adc98aa1b8889f19b43612ae011c9&fromcoin={$from}&tocoin={$to}&money=1";

        if ($data = file_get_contents($url)) {
            $data = json_decode($data, true);
            if ($data['code'] == 200) {
                return $data['newslist'][0]['money'];
            }
        }

        return 0;
    }
}