import axios from 'axios'

const baseUrl = 'https://gp-super-store-api.herokuapp.com/'

const getAllItems = async () => {
    const response = await axios.get(`${baseUrl}item/list`)
    return response.data
}

const getDeals = async (query) => {
    const response = await axios.get(`${baseUrl}item/list/?${query}`)
    return response.data
}

const services = { getAllItems, getDeals }

export default services