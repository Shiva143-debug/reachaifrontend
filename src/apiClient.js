import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-api.com',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

export const fetchData = async () => {
    try {
        const response = await apiClient.get('/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
