import httpClient from "../http-common-supplier";

const getAllSuppliers = () => {
    return httpClient.get('/suppliers');
}

const getSupplierById = supplierId =>{
    return httpClient.get(`/suppliers/${supplierId}`);
}

const createSupplier = supplier =>{
    return httpClient.post("/suppliers", supplier);
} 

const updateSupplier = (supplierId, supplier) =>{
    return httpClient.put(`/suppliers/${supplierId}`, supplier);
}

const deleteSupplier = supplierId =>{
    return httpClient.delete(`/suppliers/${supplierId}`);
}



export default {getAllSuppliers, getSupplierById, createSupplier, deleteSupplier, updateSupplier}