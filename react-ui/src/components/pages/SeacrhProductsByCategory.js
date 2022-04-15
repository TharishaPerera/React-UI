import React, { useState } from 'react';
import '../../App.css';
import './SearchButtons.css';

function SeacrhProductsByCategory() {

    const [productType, setType] = useState('');

    return (
        <div className='container'>
            <div classNameName="row mt-3">
                <div className="row g-3">
                    <form className="col-md-4 mt-5">
                        <label for="productId" className="form-label" >Select Product Category:</label>
                        <select className='form-control' value={productType} onChange={(e) => setType(e.target.value)}>
                            <option >Select Category</option>
                            <option value="Automobile">Automobile</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Food">Food</option>
                            <option value="Health">Health</option>
                        </select>

                        <div className="mt-3">
                            <button type="submit" className="btn btn-primary btn-sm search-btns">Search</button>
                            <button type="reset" className="btn btn-secondary btn-sm search-btns">Reset</button>
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
                        <input type="text" className="form-control" id="productName" readonly />
                    </div>
                    <div className="col-12">
                        <label for="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" readonly />
                    </div>
                    <div className="col-6">
                        <label for="type" className="form-label">Product Type</label>
                        <input type="text" className="form-control" id="type" readonly />
                    </div>
                    <div className="col-md-6">
                        <label for="unitPrice" className="form-label">Unit Price</label>
                        <input type="text" className="form-control" id="unitPrice" readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="availablity" className="form-label">Availability</label>
                        <input type="text" className="form-control" id="availablity" readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity" readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="supplierId" className="form-label">Supplier ID</label>
                        <input type="text" className="form-control" id="supplierId" readonly />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SeacrhProductsByCategory