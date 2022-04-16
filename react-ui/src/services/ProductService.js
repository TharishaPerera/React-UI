// import axios from "axios";
import httpClient from "../http-common-product";

// const GET_ALL_PRODUCTS_URL = 'http://localhost:8081/products';
// const GET_ALL_PRODUCTS_BY_ID_URL = 'http://localhost:8081/products';
// const CREATE_PRODUCT_URL = 'http://localhost:8081/products';

// class ProductService {
    // getAllProducts() {
    //     return axios.get(GET_ALL_PRODUCTS_URL);
    // }

    const getAllProducts = () =>{
        return httpClient.get('/products');
    }

    const createProduct = product =>{
        return httpClient.post("/products", product);
    } 

    const getProductById = productId =>{
        return httpClient.get(`/products/${productId}`);
    }

    // const getProductByCategory = productType =>{

    // }

    const updateProduct = product => {
        return httpClient.put('/products', product);
    }

    const deleteProduct = productId => {
        return httpClient.delete(`/products/${productId}`);
    }

    const deleteAllProducts = () => {
        return httpClient.delete('/products');
    }

export default {getAllProducts, createProduct, updateProduct, getProductById, deleteProduct, deleteAllProducts}