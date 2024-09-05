import axios from 'axios';
import { API_URL } from './config';


// Get user Voitures
const createProductsOption = async (userData) => {
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    const response = await axios.post(`${API_URL}/product_options`, userData);

    return response.data;
};

//getById
const getProductsOptionById = async (id) => {
    const response = await axios.get(`${API_URL}/product_options` + id);
    return response.data;
};

const getAllProductsOption = async () => {
    const response = await axios.get(`${API_URL}/product_options`);
    return response.data;
};

const DeleteProductsOption = async (id) => {
    const response = await axios.delete(`${API_URL}/product_options` + id);
    return response.data;
};


const ProductsOptionService = {
    getAllProductsOption,
    createProductsOption,
    getProductsOptionById,
    DeleteProductsOption,
};

export default ProductsOptionService;
