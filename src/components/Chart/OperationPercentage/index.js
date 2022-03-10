import React from 'react';

import { getOperationPercentage } from '../../../services/plots';
import Donut from '../Types/Donut';

const OperationPercentage = () => {
  const apiRequestOperationPercentage = async (dateFrom, dateTo) => {
    const response = await getOperationPercentage(
      dateFrom,
      dateTo,
    );

    let returnObject = {};

    if (response.length > 0) {
      const total = response[0].totalWins + response[0].totalLosses;
      const winsPercent = ((100 * response[0].totalWins) / total).toFixed(2);
      const lossesPercent = ((100 * response[0].totalLosses) / total).toFixed(2);

      returnObject = {
        values: [parseFloat(winsPercent), parseFloat(lossesPercent)],
        registers: 0,
      };

      returnObject.registers = response.length;
    }

    return returnObject;
  };

  return (
    <div>
      <Donut
        title="Acertividade das suas operações"
        dataRequest={apiRequestOperationPercentage}
      />
    </div>
  );
};

export default OperationPercentage;
