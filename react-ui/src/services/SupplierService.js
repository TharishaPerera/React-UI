import httpClient from "../http-common-supplier";

const getAllSuppliers = () => {
    return httpClient.get('/suppliers');
}

const createSupplier = supplier =>{
    return httpClient.post("/suppliers", supplier);
} 

const deleteSupplier = supplierId =>{
    return httpClient.delete(`/suppliers/${supplierId}`);
}



export default {getAllSuppliers, createSupplier, deleteSupplier}