import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getCepAddress = async cep => {
  const cepAddress = await api.get(`https://viacep.com.br/ws/${cep}/json/`);

  return cepAddress.data;
};

export default api;
