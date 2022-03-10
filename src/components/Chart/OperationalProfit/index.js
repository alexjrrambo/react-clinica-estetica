import React from 'react';
import { useSelector } from 'react-redux';

import { getOperationalProfit } from '../../../services/plots';
import Bar from '../Types/Bar/Horizontal';

const OperationalProfit = () => {
  const { currencyType } = useSelector(state => state.user.data);
  const apiRequestOperationalProfit = async (dateFrom, dateTo, limit) => {
    const response = await getOperationalProfit(
      dateFrom,
      dateTo,
      limit,
    );

    const returnObject = {
      categories: [],
      values: [],
      registers: 0,
    };

    if (response.length > 0) {
      returnObject.categories = response.map(operational => operational.operationalDescription);
      returnObject.values = response.map(faturamento => faturamento.totalProfit);
      returnObject.registers = response.length;
    }

    return returnObject;
  };

  return (
    <div>
      <Bar
        title="Estratégias com maior lucro"
        hoverDescription={`Valor em ${currencyType || 'R$'}`}
        dataRequest={apiRequestOperationalProfit}
      />
    </div>
  );
};

export default OperationalProfit;
