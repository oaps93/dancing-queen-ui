import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Update base URL 

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const getData = async () => {
  try {
    const response = await apiClient.get('/classes'); // '/classes' API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data from /classes endpoint:', error);
    throw error;
  }
};

export const setClass = async (input) => {

  try {
    const response = await apiClient.post('/classes', input);
    console.log(response); 
  } catch (error) {
    console.error(error);
  }
}
