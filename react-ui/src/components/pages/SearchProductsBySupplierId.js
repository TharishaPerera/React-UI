import React, { useState } from 'react';
import '../../App.css';
import './SearchButtons.css';
import ProductService from '../../services/ProductService';

function SearchProductsBySupplierId() {

    const [supplierId, setSupplierId] = useState('');

    const [products, setProducts] = useState([]);

    const handleSearch = (supplierId) => {
        const data = ProductService.getProductBySupplierId(supplierId);
        console.log(data);

        setProducts(data.data)
    }

    // const handleReset = () => {
    //     setProductId(()=>"")
    // }

    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="row g-3">
                    <form className="col-md-4 mt-5">
                        <label htmlFor="supplierId" className="form-label" >Enter Supplier ID:</label>
                        <input type="number" min="1" className="form-control" id="supplierId" value={supplierId} onChange={(e) => setSupplierId(e.target.value)} />

                        <div className="mt-3">
                            <button type="button" className="btn btn-primary btn-sm search-btns" onClick={() => handleSearch(supplierId)} >Search</button>
                            <button type="reset" className="btn btn-secondary btn-sm search-btns"  >Reset</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-3" >
                <div className='table-responsive'>
                    <table className='table table-sm table-striped table-hover mt-3'>
                        <thead className='thead-light align-middle head'>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Unit Price</th>
                                <th>Availability</th>
                                <th>Quantity</th>
                                <th>Supplier ID</th>
                            </tr>
                        </thead>
                        <tbody className='body'>
                            {
                                products.map((product) => {
                                    return (
                                        <tr key={product.productId}>
                                            <td>{product.productId}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productDescription}</td>
                                            <td>{product.productType}</td>
                                            <td>{product.unitPrice}</td>
                                            <td>{product.isAvailable}</td>
                                            <td>{product.availableQuantity}</td>
                                            <td>{product.supplierId}</td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchProductsBySupplierId