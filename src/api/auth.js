const api=axios.create({
    baseURL:'http://localhost:3000',
});
export const login  = (credentials) => api.post('/api/login', credentials);
