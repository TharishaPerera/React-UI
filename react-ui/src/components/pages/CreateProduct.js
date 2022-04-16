import React, { useState } from 'react'
import '../../App.css';
import ProductService from '../../services/ProductService';
import './SearchButtons.css';

function CreateProduct() {
    const [productName, setName] = useState('');
    const [productDescription, setDescription] = useState('');
    const [productType, setType] = useState('');
    const [unitPrice, setUnitPrice] = useState();
    const [isAvailable, setAvailable] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState(0);
    const [supplierId, setSupplierId] = useState();

    const handleClick = (e) => {
        e.preventDefault()

        const product = { productName, productDescription, productType, unitPrice, isAvailable, availableQuantity, supplierId }
        console.log(product);

        ProductService.createProduct(product)
        .then(
            alert("Product Created Successfully")
        ).then(
            handleReset
        )
    }

    const handleReset = () => {
        setName(()=>"")
        setDescription(()=>"")
        setType(()=>"")
        setUnitPrice(()=>"")
        setAvailable(()=>"")
        setAvailableQuantity(()=>"")
        setSupplierId(()=>"")
    }

    return (
        <div className='container'>
            <form className="row g-3 mt-5">
                <div className="col-12">
                    <label for="productName" className="form-label">Product Name</label>
                    <input name="productName" type="text" className="form-control" id="productName"
                        value={productName} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-12">
                    <label for="description" className="form-label">Description</label>
                    <input name="productDescription" type="text" className="form-control" id="description"
                        value={productDescription} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label for="type" className="form-label">Product Category</label>
                    {/* <input name="productType" type="text" className="form-control" id="type" /> */}
                    <select className='form-control' value={productType} onChange={(e) => setType(e.target.value)}>
                        <option >Select Category</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Food">Food</option>
                        <option value="Health">Health</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="unitPrice" className="form-label">Unit Price</label>
                    <input name="unitPrice" type="text" className="form-control" id="unitPrice"
                        value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label for="availablity" className="form-label">Availability</label>
                    {/* <input name="isAvailable" type="text" className="form-control" id="availablity" /> */}
                    <select className='form-control' value={isAvailable} onChange={(e) => setAvailable(e.target.value)}>
                        <option >Select Availability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="quantity" className="form-label">Quantity</label>
                    <input name="availableQuantity" type="number" className="form-control" id="quantity"
                        value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label for="supplierId" className="form-label">Supplier ID</label>
                    <input name="supplierId" type="number" className="form-control" id="supplierId"
                        value={supplierId} onChange={(e) => setSupplierId(e.target.value)} />
                </div>
                <div className="col-12 mt-4">
                    <button className="btn btn-primary float-right search-btns" onClick={handleClick}>Submit</button>
                    <button className="btn btn-secondary float-right search-btns" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct