import axios from 'axios';
const API_BASE = process.env.REACT_APP_SERVER_API_URL;
export const getProfile = async () => {
    const response = await axios.get(`${API_BASE}/profile`);
    // return response.data;
    return response;
};  