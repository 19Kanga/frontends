import axios from 'axios';
import {API_URL} from './config'

// const API_URL = 'http://localhost:5000/api/user/';

// Register user
const register = async userData => {
  const response = await axios.post(`${API_URL}/user/register`, userData);
  return response.data;
};


// Login user
const login = async userData => {
  const response = await axios.post(`${API_URL}/user/login`, userData);
  return response.data;
};

// // Logout user
// const logout = () => {
//   localStorage.removeItem ('user');
//   localStorage.clear ();
// };

const userServices = {
  register,
  login,
};

export default userServices;
