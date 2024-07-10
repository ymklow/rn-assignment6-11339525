// api.js
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export async function getProductsFromApi() {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function getProductDetailsFromApi(productId) {
    try {
        const response = await axios.get(`${API_URL}/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}
