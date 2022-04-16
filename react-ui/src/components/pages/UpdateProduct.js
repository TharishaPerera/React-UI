import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';
import ProductService from '../../services/ProductService';
import './SearchButtons.css';

function UpdateProduct() {

    const { productId } = useParams();

    const [productName, setName] = useState('');
    const [productDescription, setDescription] = useState('');
    const [productType, setType] = useState('');
    const [unitPrice, setUnitPrice] = useState();
    const [isAvailable, setAvailable] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState(0);
    const [supplierId, setSupplierId] = useState();

    useEffect(() => {
        ProductService.getProductById(productId).then((response) => {
            setName(response.data.productName)
            setDescription(response.data.productDescription)
            setType(response.data.productType)
            setUnitPrice(response.data.unitPrice)
            setAvailable(response.data.isAvailable)
            setAvailableQuantity(response.data.availableQuantity)
            setSupplierId(response.data.supplierId)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const handleClick = (e) => {
        e.preventDefault()

        const product = { productName, productDescription, productType, unitPrice, isAvailable, availableQuantity, supplierId }
        console.log(product);

        ProductService.updateProduct(productId, product)
            .then(
                alert("Product Updated Successfully")
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
            {/* <div classNameName="row mt-3">                
            <div className="row g-3">
                <form className="col-md-4 mt-5">
                    <label for="productId" className="form-label">Enter Product ID:</label>
                    <input type="number" min="1" className="form-control" id="productId" />
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary btn-sm search-btns">Search</button>
                        <button type="reset" className="btn btn-secondary btn-sm search-btns">Reset</button>
                    </div>
                </form>
            </div>
        </div> */}

            <div className="mt-5" >
                <form className="row g-3">
                    <div className="col-md-12">
                        <label for="productName" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label for="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={productDescription} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label for="type" className="form-label">Product Type</label>
                        {/* <input type="text" className="form-control" id="type"  /> */}
                        <select className='form-control' value={productType} onChange={(e) => setType(e.target.value)} >
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
                        <input type="text" className="form-control" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label for="availablity" className="form-label">Availability</label>
                        {/* <input type="text" className="form-control" id="availablity"  /> */}
                        <select className='form-control' value={isAvailable} onChange={(e) => setAvailable(e.target.value)} >
                            <option >Select Availability</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label for="quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity" value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label for="supplierId" className="form-label">Supplier ID</label>
                        <input type="text" className="form-control" id="supplierId" value={supplierId} onChange={(e) => setSupplierId(e.target.value)} />
                    </div>
                    <div className="col-12 mt-4">
                        <button className="btn btn-primary float-right search-btns" type="submit" onClick={handleClick} >Update</button>
                        {/* <button className="btn btn-secondary float-right search-btns" type="reset" onClick={handleReset} >Reset</button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct