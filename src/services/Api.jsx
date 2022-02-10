import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const setParams = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: '23313503-fe93316d6899b77e3854f09dc',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  });

export const getImg = (q = 'car', page = 1) => {
  setParams({ q, page });
  return axios
    .get('api/')
    .then(res => {
      if (!res.data.hits.length) {
        throw new Error('Not found  =(');
      }

      return res.data.hits;
    })
    .catch(err => {
      throw err;
    });
};
