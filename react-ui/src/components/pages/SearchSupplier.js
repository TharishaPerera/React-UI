import React from 'react';
import '../../App.css';
import './SearchButtons.css';

function SearchSupplier() {
    return (
        <div className='container'>
            <div classNameName="row mt-3">
                <div className="row g-3">
                    <form className="col-md-4 mt-5">
                        <label for="productId" className="form-label">Enter Supplier ID:</label>
                        <input type="number" min="1" className="form-control" id="productId" />
                        <div className="mt-3">
                            <button type="submit" className="btn btn-primary btn-sm search-btns">Search</button>
                            <button type="reset" className="btn btn-secondary btn-sm search-btns">Reset</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-5" >
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="productName" className="form-label">Supplier Name</label>
                        <input type="text" className="form-control" id="productName" readonly />
                    </div>
                    <div className="col-6">
                        <label for="description" className="form-label">Industry</label>
                        <input type="text" className="form-control" id="description" readonly />
                    </div>
                    <div className="col-12">
                        <label for="type" className="form-label">Supplier Email</label>
                        <input type="text" className="form-control" id="type" readonly />
                    </div>
                    <div className="col-md-6">
                        <label for="unitPrice" className="form-label">Supplier Telephone</label>
                        <input type="number" className="form-control" id="unitPrice" readonly />
                    </div>                    
                    <div className="col-md-6">
                        <label for="productId" className="form-label">Postal Code</label>
                        <input type="number" className="form-control" id="productId" readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="availablity" className="form-label">Street</label>
                        <input type="text" className="form-control" id="availablity" readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="quantity" className="form-label">City</label>
                        <input type="text" className="form-control" id="quantity" readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="supplierId" className="form-label">Country</label>
                        <input type="text" className="form-control" id="supplierId" readonly />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SearchSupplier;