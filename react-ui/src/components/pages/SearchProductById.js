import React, { useState, useEffect } from 'react';
import '../../App.css';
import ProductService from '../../services/ProductService';
import './SearchButtons.css';

function SearchProductById() {

    const [productId, setProductId] = useState();

    const [productName, setName] = useState('');
    const [productDescription, setDescription] = useState('');
    const [productType, setType] = useState('');
    const [unitPrice, setUnitPrice] = useState();
    const [isAvailable, setAvailable] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState(0);
    const [supplierId, setSupplierId] = useState();

    useEffect(() => {
        ProductService.getProductById(productId).then((response) =>{
            setName(response.data.productName)
            setDescription(response.data.productDescription)
            setType(response.data.productType)
            setUnitPrice(response.data.unitPrice)
            setAvailable(response.data.isAvailable)
            setAvailableQuantity(response.data.availableQuantity)
            setSupplierId(response.data.supplierId)
        }).catch(error =>{
            console.log(error);
        })

    }, [])

    const handleReset = () => {
        setProductId(() => "")
    }

    return (
        <div className='container'>
            <div classNameName="row mt-3">
                <div className="row g-3">
                    <form className="col-md-4 mt-5">
                        <label for="productId" className="form-label" >Enter Product ID:</label>
                        <input type="number" min="1" className="form-control" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} />
                        <div className="mt-3">
                            <button type="button" className="btn btn-primary btn-sm search-btns"  >Search</button>
                            <button type="reset" className="btn btn-secondary btn-sm search-btns" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-5" >
                <form className="row g-3">
                    {/* <div className="col-md-6">
                    <label for="productId" className="form-label">Product ID</label>
                    <input type="number" className="form-control" id="productId" readonly />
                </div> */}
                    <div className="col-md-12">
                        <label for="productName" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="productName" value={productName} readonly />
                    </div>
                    <div className="col-12">
                        <label for="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={productDescription} readonly />
                    </div>
                    <div className="col-6">
                        <label for="type" className="form-label">Product Type</label>
                        <input type="text" className="form-control" id="type" value={productType} readonly />
                    </div>
                    <div className="col-md-6">
                        <label for="unitPrice" className="form-label">Unit Price</label>
                        <input type="text" className="form-control" id="unitPrice" value={unitPrice} readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="availablity" className="form-label">Availability</label>
                        <input type="text" className="form-control" id="availablity" value={isAvailable} readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity" value={availableQuantity} readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="supplierId" className="form-label">Supplier ID</label>
                        <input type="text" className="form-control" id="supplierId" value={supplierId} readonly />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchProductById