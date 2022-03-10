import React from 'react';
import { useSelector } from 'react-redux';

import { getMostWinOperational } from '../../../services/plots';
import VerticalBar from '../Types/Bar/Vertical';

const MostWinOperational = () => {
  const { currencyType } = useSelector(state => state.user.data);
  const apiRequestMostWinOperational = async (dateFrom, dateTo, limit, percentage = true) => {
    const response = await getMostWinOperational(
      dateFrom,
      dateTo,
      limit,
    );

    // [{"operationalDescription":"","totalWins":0,"totalLosses":0},{"operationalDescription":"Starkgold","totalWins":27,"totalLosses":18},{"operationalDescription":"Berman 2.0","totalWins":20,"totalLosses":10}]

    const winsArray = response.map(total => total.totalWins);
    const lossesArray = response.map(total => total.totalLosses);
    const categories = response.map(operational => (operational.operationalDescription ? operational.operationalDescription : 'Sem estratégia'));

    const winsPercent = [];
    const lossesPercent = [];
    for (let index = 0; index < categories.length; index++) {
      const wins = winsArray[index];
      const losses = lossesArray[index];
      const total = wins + losses;

      winsPercent.push(((100 * wins) / total).toFixed(2));
      lossesPercent.push(((100 * losses) / total).toFixed(2));
    }

    const returnObject = {
      categories,
      values: [{
        name: 'Vitórias %',
        data: percentage ? winsPercent : winsArray,
      },
      {
        name: 'Derrotas %',
        data: percentage ? lossesPercent : lossesArray,
      }],
      registers: 0,
    };

    if (response.length > 0) {
      returnObject.registers = response.length;
    }

    return returnObject;
  };

  return (
    <div>
      <VerticalBar
        title="Acertividade das suas estratégias"
        hoverDescription={`Valor em ${currencyType}`}
        dataRequest={apiRequestMostWinOperational}
      />
    </div>
  );
};

export default MostWinOperational;
