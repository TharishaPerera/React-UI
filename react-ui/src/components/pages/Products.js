import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './ProductsSuppliers.css';

import ProductService from '../../services/ProductService';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        ProductService.getAllProducts().then((response) => {
            this.setState({products: response.data})
        });
    }

    // function Products() {
    render() {
        return (
            <div className='container-fluid product-container'>
                <div className='row'>
                    <div className='col-3 left-col'>
                        <div className='row'>
                            <h3 className='text-center'>Product Dashboard</h3>
                        </div>
                        <div className='row'>
                            <Link to="/search-product-by-id" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Search Products By ID</Link>
                        </div>
                        <div className='row'>
                            <Link to="/search-product-by-category" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Search Products By Category</Link>
                        </div>
                        <div className='row'>
                            <Link to="/search-product-by-availability" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Search Products By Availability</Link>
                        </div>
                        <div className='row'>
                            <Link to="/create-product" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Create Product</Link>
                        </div>
                        {/* <div className='row'>
                            <Link to="/update-product" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Update Product</Link>
                        </div> */}
                        <div className='row'>
                            <Link to="/delete-product" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Delete Products</Link>
                        </div>
                    </div>

                    <div className='col-9 right-col'>
                        <div className='table-responsive'>
                            <table className='table table-sm table-striped table-hover mt-3'>
                                <thead className='thead-light align-middle head'>
                                    <th>Product ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Unit Price</th>
                                    <th>Availability</th>
                                    <th>Quantity</th>
                                    <th>Supplier ID</th>
                                    <th>Action</th>
                                </thead>
                                <tbody className='body'>
                                    {
                                        this.state.products.map(
                                            product =>
                                            <tr key={product.productId}>
                                                <td>{product.productId}</td>
                                                <td>{product.productName}</td>
                                                <td>{product.productDescription}</td>
                                                <td>{product.productType}</td>
                                                <td>{product.unitPrice}</td>
                                                <td>{product.isAvailable}</td>
                                                <td>{product.availableQuantity}</td>
                                                <td>{product.supplierId}</td>
                                                <td>
                                                    <Link to={`/update-product/${product.productId}`} className='align-items-center btn btn-dark btn-sm'>Update</Link>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
// export default Products;