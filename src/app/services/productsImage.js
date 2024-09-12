import axios from 'axios';
import { API_URL } from './config';


// Get user Voitures
const createProductsImage = async (userData) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

  const response = await axios.post(`${API_URL}/productImage`, userData);

  return response.data;
};

//getById
const getProductsImageById = async (id) => {
  const response = await axios.get(`${API_URL}/productImage/` + id);
  return response.data;
};

const getAllProductsImage = async()=> {
  const response = await axios.get(`${API_URL}/productImage`);
  return response.data;
};

const DeleteProductsImage = async (id) => {
  const response = await axios.delete(`${API_URL}/productImage/` + id);
  return response.data;
};


const ProductsImageService = {
  getAllProductsImage,
  createProductsImage,
  getProductsImageById,
  DeleteProductsImage,
};

export default ProductsImageService;
