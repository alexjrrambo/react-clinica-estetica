import React from 'react';
import { useSelector } from 'react-redux';

import { getPeriodProfit } from '../../../services/plots';
import Line from '../Types/Line';

const PeriodProfit = () => {
  const { currencyType } = useSelector(state => state.user.data);
  const apiRequestPeriodProfit = async year => {
    const response = await getPeriodProfit(year);

    const monthTotalProfit = [];
    for (let i = 1; i <= 12; i++) {
      const monthProfitData = response.filter(
        data => data.month === i,
      );

      if (monthProfitData.length > 0) {
        monthTotalProfit.push(monthProfitData[0].totalProfit.toFixed(2));
      } else {
        monthTotalProfit.push(0);
      }
    }

    const returnObject = {
      values: [],
      registers: 0,
    };

    if (response.length > 0) {
      returnObject.values = monthTotalProfit;
    }

    returnObject.registers = response.length;

    return returnObject;
  };

  return (
    <div>
      <Line
        title="Lucratividade por período"
        hoverDescription={`Valor em ${currencyType || 'R$'}`}
        dataRequest={apiRequestPeriodProfit}
      />
    </div>
  );
};

export default PeriodProfit;
