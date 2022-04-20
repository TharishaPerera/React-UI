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

    const getProductBySupplierId = supplierId =>{ 
        return httpClient.get(`/products/supplierId?supplierId=${supplierId}`);
    }

    const getProductByCategory = productType =>{
        return httpClient.get(`/products/productType?productType=${productType}`);
    }
    
    const getProductByAvailability = isAvailable =>{
        return httpClient.get(`/products/isAvailable?isAvailable=${isAvailable}`);
    }

    const updateProduct = (productId, product) => {
        return httpClient.put(`/products/${productId}`, product);
    }

    const deleteProduct = productId => {
        return httpClient.delete(`/products/${productId}`);
    }

    const deleteAllProducts = () => {
        return httpClient.delete('/products');
    }

export default {getAllProducts, createProduct, updateProduct, getProductById, deleteProduct, deleteAllProducts, getProductBySupplierId, getProductByCategory, getProductByAvailability}