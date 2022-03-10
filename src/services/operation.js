import api from './api';

const header = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
});

export const createOperation = async operation => {
  const operationData = await api.post('/operation', operation, header());

  return operationData.data;
};

export const getOperation = async ({ filterDateFrom, filterDateTo }) => {
  const operationData = await api.get(`/operation?date_from=${filterDateFrom}&date_to=${filterDateTo}`, header());

  return operationData.data;
};

export const getAllOperations = async () => {
  const operationData = await api.get('/operation', header());

  return operationData.data;
};

export const updateOperation = async operation => {
  const { _id, ...updatedoperation } = operation;
  const operationData = await api.put(`/operation/${_id}`, updatedoperation, header());

  return operationData.data;
};

export const deleteDetailedOperation = async (operationId, detailedId) => {
  const operationData = await api.delete(`/operation/detailed/${operationId}/${detailedId}`, header());

  return operationData.data;
};
