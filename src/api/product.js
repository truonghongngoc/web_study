import axios from "axios";

export const getProduct=()=>{
    return axios.get('/api/products');

};
export const createProduct=(data)=>{
    return axios.post('/api/products',data)
}