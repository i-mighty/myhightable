import { create } from 'apisauce';

const api = create({
  baseURL: 'https://hightable-core.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
