import axios from 'axios';
import { API_URL } from './config';


// Get user Voitures
const createCategories = async (userData) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

  const response = await axios.post(`${API_URL}/categories`, userData);

  return response.data;
};

//getById
const getCategoriesById = async (id) => {
  const response = await axios.get(`${API_URL}/categories` + id);
  return response.data;
};

const getAllCategories = async()=> {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

const DeleteCategories = async (id) => {
  const response = await axios.delete(`${API_URL}/categories` + id);
  return response.data;
};


const categoriesService = {
  getAllCategories,
  createCategories,
  getCategoriesById,
  DeleteCategories,
};

export default categoriesService;
