import axios from 'axios'

const baseUrl = 'https://gp-super-store-api.herokuapp.com/'

const getAllItems = async () => {
    const response = await axios.get(baseUrl+'item/list')
    return response.data
}

const services = { getAllItems }

export default services