import axios from 'axios';
import { API_URL } from './config';


// Get user Voitures
const createProducts = async (userData) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

  const response = await axios.post(`${API_URL}/products`, userData);

  return response.data;
};

//getById
const getProductsById = async (id) => {
  const response = await axios.get(`${API_URL}/products/` + id);
  return response.data;
};

const getAllProducts = async()=> {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

const DeleteProducts = async (id) => {
  const response = await axios.delete(`${API_URL}/products/` + id);
  return response.data;
};


const productsService = {
  getAllProducts,
  createProducts,
  getProductsById,
  DeleteProducts,
};

export default productsService;
