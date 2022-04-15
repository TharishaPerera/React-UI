import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './ProductsSuppliers.css';

import SupplierService from '../../services/SupplierService';

class Supplier extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            suppliers: []
        }
    }

    componentDidMount() {
        SupplierService.getAllSuppliers().then((response) =>{
            this.setState({ suppliers: response.data })
        });
    }

    // function Products() {
    render() {
        return (
            <div className='container-fluid product-container'>
                <div className='row'>
                    <div className='col-3 left-col'>
                        <div className='row'>
                            <h3 className='text-center'>Supplier Dashboard</h3>
                        </div>
                        <div className='row'>
                            <Link to="/search-supplier" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Search Suppliers</Link>
                        </div>
                        <div className='row'>
                            <Link to="/create-supplier" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Create Supllier</Link>
                        </div>
                        <div className='row'>
                            <Link to="/update-supplier" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Update Supplier</Link>
                        </div>
                        <div className='row'>
                            <Link to="/delete-supplier" className='align-items-center btn btn-light d-grid gap-2 mt-3 links'>Delete Supplier</Link>
                        </div>
                    </div>

                    <div className='col-9 right-col'>
                        <div className='table-responsive'>
                            <table className='table table-sm table-striped table-hover mt-3'>
                                <thead className='thead-light align-middle head'>
                                    <th>Supplier ID</th>
                                    <th>Name</th>
                                    <th>Industry</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                    <th>Street</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Postal Code</th>
                                </thead>
                                <tbody className='body'>
                                    {
                                        this.state.suppliers.map(
                                            supplier =>
                                                <tr key={supplier.supplierId}>
                                                    <td>{supplier.supplierId}</td>
                                                    <td>{supplier.supplierName}</td>
                                                    <td>{supplier.industry}</td>
                                                    <td>{supplier.supplierEmail}</td>
                                                    <td>{supplier.supplierTelephone}</td>
                                                    <td>{supplier.street}</td>
                                                    <td>{supplier.city}</td>
                                                    <td>{supplier.country}</td>
                                                    <td>{supplier.postalCode}</td>
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

export default Supplier;