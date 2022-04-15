import React, { useState } from 'react';
import '../../App.css';
import ProductService from '../../services/ProductService';
import './SearchButtons.css';

function DeleteProducts() {

    const [productId, setProductId] = useState();

    const handleDelete = (productId) =>{
        console.log("product deleted successfully");
        ProductService.deleteProduct(productId)
        .then(response =>{
            console.log("Product deleted successfully")
        })
        .catch(error =>{
            console.log("Error", error)
        })
    }

    const handleReset = () => {
        setProductId(()=>"")
    }

    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="row g-3">
                    <div className="col-md-6">
                        <form className="col-md-4">
                            <label for="productId" className="form-label">Enter Product ID:</label>
                            <input type="number" min="1" className="form-control" id="productId" />
                            <div className="mt-3">
                                <button type="submit" className="btn btn-danger btn-sm search-btns" onClick={() => handleDelete(productId)}>Delete</button>
                                <button type="reset" className="btn btn-secondary btn-sm search-btns" onClick={handleReset}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6 mt-5">
                        <div>
                            <label for="deleteAllBtn">Do you want tot delete all products:</label>
                        </div>
                        <div>
                            <form>
                                <button id="deleteAllBtn" className="btn btn-danger btn-sm px-5 py-2 my-3 search-btns">Delete All</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteProducts