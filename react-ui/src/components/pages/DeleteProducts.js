import React, { useState } from 'react';
import '../../App.css';
import ProductService from '../../services/ProductService';
import './SearchButtons.css';

function DeleteProducts() {

    const [productId, setProductId] = useState();

    const handleDelete = (productId) => {
        if (window.confirm("Do you want to delete product id: " + productId)) {
            ProductService.deleteProduct(productId)
                .then(response => {
                    alert("Product deleted successfully")
                    console.log("Product deleted successfully")
                })
                .catch(error => {
                    console.log("Error", error)
                })
        }
    }

    const handleDeleteAll = () =>{
        if(window.confirm("Do you want to delete all products?")){
            ProductService.deleteAllProducts()
                .then(response => {
                    alert("All products deleted successfully")
                    console.log("All products are deleted successfully")
                })
                .catch(error => {
                    console.log("Error", error)
                })
        }
    }

    const handleReset = () => {
        setProductId(() => "")
    }

    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="row g-3">
                    <div className="col-md-6">
                        <form className="col-md-4">
                            <label for="productId" className="form-label">Enter Product ID:</label>
                            <input type="number" min="1" className="form-control" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} />
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
                            <label for="deleteAllBtn">Do you want to delete all products:</label>
                        </div>
                        <div>
                            <form>
                                <button id="deleteAllBtn" className="btn btn-danger btn-sm px-5 py-2 my-3 search-btns" onClick={handleDeleteAll}>Delete All</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteProducts