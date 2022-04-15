import React, { useState } from 'react';
import '../../App.css';
import SupplierService from '../../services/SupplierService';
import './SearchButtons.css';

function DeleteSupplier() {

    const [supplierId, setSupplierId] = useState();

    const handleDelete = (supplierId) =>{
        console.log("Supplier deleted successfully");
        SupplierService.deleteSupplier(supplierId)
        .then(response =>{
            console.log("Supplier deleted successfully")
        })
        .catch(error =>{
            console.log("Error", error)
        })
    }

    const handleReset = () => {
        setSupplierId(()=>"")
    }

    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="row g-3">
                    <div className="col-md-6">
                        <form className="col-md-4">
                            <label for="supplierId" className="form-label">Enter Supplier ID:</label>
                            <input type="number" min="1" className="form-control" id="supplierId" />
                            <div className="mt-3">
                                <button type="submit" className="btn btn-danger btn-sm search-btns" onClick={() => handleDelete(supplierId)}>Delete</button>
                                <button type="reset" className="btn btn-secondary btn-sm search-btns" onClick={handleReset}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteSupplier