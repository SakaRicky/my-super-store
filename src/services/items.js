import axios from 'axios'
import constants from '../utils/constants'

export const getItem = async (id) => {
    const response = await axios.get(`https://gp-super-store-api.herokuapp.com/item/${id}`)
    return response.data
}

 function fetchItemList({ from, size, sortField, sortDir, isOnSale, q } = {}) {

  console.log('params: ', from, size, sortField, sortDir, isOnSale, q);

  return axios
      .get('https://gp-super-store-api.herokuapp.com/item/list', {
        params: {
          from,
          size: constants.PAGE_SIZE,
          sortField,
          sortDir,
          isOnSale,
          q,
        },
      })
      .then((response) => response.data);
  }

export default fetchItemList