import axios from 'axios';
import { API_URL } from './config';


// Get user Voitures
const createAttribute = async (userData) => {
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    const response = await axios.post(`${API_URL}/attribute`, userData);

    return response.data;
};

//getById
const getAttributeById = async (id) => {
    const response = await axios.get(`${API_URL}/attribute` + id);
    return response.data;
};

const getAllAttribute = async () => {
    const response = await axios.get(`${API_URL}/attribute`);
    return response.data;
};

const DeleteAttribute = async (id) => {
    const response = await axios.delete(`${API_URL}/attribute` + id);
    return response.data;
};


const attributeService = {
    getAllAttribute,
    createAttribute,
    getAttributeById,
    DeleteAttribute,
};

export default attributeService;
