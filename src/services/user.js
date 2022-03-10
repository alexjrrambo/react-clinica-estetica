import api from './api';

const header = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
});

export const createUser = async user => {
  const userData = await api.post('/user', user, header());

  return userData.data;
};

export const getUser = async () => {
  const userData = await api.get('/user', header());

  return userData.data;
};

export const updateUser = async user => {
  const { _id, ...updatedUser } = user;
  const userData = await api.put(`/user/${_id}`, updatedUser, header());

  return userData.data;
};
