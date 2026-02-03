import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getSongs = () => api.get('/songs');
export const getSong = (id) => api.get(`/songs/${id}`);
export const createSong = (song) => api.post('/songs', song);
export const updateSong = (id, song) => api.put(`/songs/${id}`, song);
export const deleteSong = (id) => api.delete(`/songs/${id}`);

export default api;
