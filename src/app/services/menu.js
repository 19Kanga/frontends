import axios from 'axios';
import { API_URL } from './config';


// Get user Voitures
const createMenus = async (userData) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

  const response = await axios.post(`${API_URL}/menu`, userData);

  return response.data;
};

//getById
const getMenusById = async (id) => {
  const response = await axios.get(`${API_URL}/menu` + id);
  return response.data;
};

const getAllMenus = async()=> {
  const response = await axios.get(`${API_URL}/menu`);
  return response.data;
};

const DeleteMenus = async (id) => {
  const response = await axios.delete(`${API_URL}/menu` + id);
  return response.data;
};


const MenusService = {
  getAllMenus,
  createMenus,
  getMenusById,
  DeleteMenus,
};

export default MenusService;
