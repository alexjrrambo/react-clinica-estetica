import api from './api';

const header = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
});

export const getOperationalProfit = async (dateFrom, dateTo, limit) => {
  let path = '/operationalprofit';

  path = `${path}?limit=${limit || 10}`;

  if (dateFrom) {
    path = `${path}&date_from=${dateFrom}`;
  }

  if (dateTo) {
    path = `${path}&date_to=${dateTo}`;
  }

  const capitalData = await api.get(path, header());

  return capitalData.data;
};

export const getPeriodProfit = async year => {
  let path = '/periodprofit';

  if (year) {
    path = `${path}?year=${year}`;
  }

  const capitalData = await api.get(path, header());

  return capitalData.data;
};

export const getMostWinOperational = async (dateFrom, dateTo, limit) => {
  let path = '/mostwinoperational';

  path = `${path}?limit=${limit || 10}`;

  if (dateFrom) {
    path = `${path}&date_from=${dateFrom}`;
  }

  if (dateTo) {
    path = `${path}&date_to=${dateTo}`;
  }

  const capitalData = await api.get(path, header());

  return capitalData.data;
};

export const getOperationPercentage = async (dateFrom, dateTo) => {
  let path = '/operationpercentage';

  if (dateFrom) {
    path = `${path}&date_from=${dateFrom}`;
  }

  if (dateTo) {
    path = `${path}&date_to=${dateTo}`;
  }

  const capitalData = await api.get(path, header());

  return capitalData.data;
};
