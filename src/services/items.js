import axios from 'axios'
import constants from '../utils/constants'

// const getAllItems = async () => {
//     const response = await axios.get(`${baseUrl}item/list`)
//     return response.data
// }

// const getPageItems = async (page) => {
//     const query = `from=${page}&size=${PAGES_SIZE}`
//     const response = await axios.get(`${baseUrl}item/list/?${query}`)
//     return response.data
// }

// const getItem = async (id) => {
//     const response = await axios.get(`${baseUrl}item/${id}`)
//     return response.data
// }

// const getDeals = async (query) => {
//     const response = await axios.get(`${baseUrl}item/list/?${query}`)
//     return response.data
// }

// const getSearchedItem = async (query) => {
//     console.log('query:', `${baseUrl}item/list/?${query}`);
//     const response = await axios.get(`${baseUrl}item/list/?${query}`)
//     return response.data
// }

// const services = { getAllItems, getDeals, getItem, getSearchedItem, getPageItems }

 function fetchItemList({ from, size, sortField, sortDir, isOnSale, q } = {}) {
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