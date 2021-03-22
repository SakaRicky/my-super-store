import axios from 'axios'

const baseUrl = 'https://gp-super-store-api.herokuapp.com/'
const PAGES_SIZE = 6

const getAllItems = async () => {
    const response = await axios.get(`${baseUrl}item/list`)
    return response.data
}

const getPageItems = async (page) => {
    const query = `from=${page}&size=${PAGES_SIZE}`
    const response = await axios.get(`${baseUrl}item/list/?${query}`)
    return response.data
}

const getItem = async (id) => {
    const response = await axios.get(`${baseUrl}item/${id}`)
    return response.data
}

const getDeals = async (query) => {
    const response = await axios.get(`${baseUrl}item/list/?${query}`)
    return response.data
}

const getSearchedItem = async (query) => {
    console.log('query:', `${baseUrl}item/list/?${query}`);
    const response = await axios.get(`${baseUrl}item/list/?${query}`)
    return response.data
}

const services = { getAllItems, getDeals, getItem, getSearchedItem, getPageItems }

export default services