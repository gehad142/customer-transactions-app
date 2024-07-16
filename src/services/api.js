import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const getCustomers = () => axios.get(`${API_BASE_URL}/customers`);
export const getTransactions = () => axios.get(`${API_BASE_URL}/transactions`);