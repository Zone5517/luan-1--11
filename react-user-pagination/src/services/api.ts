import axios from 'axios';

const API_URL = 'https://api.example.com/users'; // Substitua pela URL da sua API

export const fetchUsers = async (page = 1, limit = 10) => {
    try {
        const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar usuários: ' + error.message);
    }
};

export const fetchUserCount = async () => {
    try {
        const response = await axios.get(`${API_URL}/count`);
        return response.data.count;
    } catch (error) {
        throw new Error('Erro ao buscar contagem de usuários: ' + error.message);
    }
};