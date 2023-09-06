import axios from 'axios';

export const fetchApiData = async () => {
    const apiUrl = 'https://restcountries.com/v3.1/all';
    try {
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};