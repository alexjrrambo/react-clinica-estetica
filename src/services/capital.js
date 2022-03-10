import api from './api';

const header = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
});

export const createCapital = async capital => {
  const capitalData = await api.post('/capital', capital, header());

  return capitalData.data;
};

export const getCapital = async capitalDate => {
  const capitalData = await api.get(`/capital?date=${capitalDate}`, header());

  return capitalData.data;
};

export const updateCapital = async capital => {
  const { _id, ...updatedCapital } = capital;
  const capitalData = await api.put(`/capital/${_id}`, updatedCapital, header());

  return capitalData.data;
};
