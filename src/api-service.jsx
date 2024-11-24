import axios from 'axios';

const api = axios.create({
  baseURL: 'https://admin.mypal.lk/api',
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer 25|kIurpOdV8GrbR1I80GuJnmnYtWz54g5qRC33nnfd1dfd184e`;
  return config;
});

export const getCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getOffers = async (categoryId) => {
  try {
    const response = await api.get('/offers', {
      params: { category_id: categoryId },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching offers:', error);
    throw error;
  }
};
