import React, { useState } from 'react';
import '../../App.css';
import './SearchButtons.css';

function SearchProductsByAvailability() {
    const [availability, setAvailability] = useState('');
  return (
    <div className='container'>
            <div classNameName="row mt-3">
                <div className="row g-3">
                    <form className="col-md-4 mt-5">
                        <label for="productId" className="form-label" >Select Availability:</label>
                        <select className='form-control' value={availability} onChange={(e) => setAvailability(e.target.value)}>
                            <option >Select Availability</option>
                            <option value="Available">Available</option>
                            <option value="Not-Available">Not-Available</option>
                        </select>

                        <div className="mt-3">
                            <button type="submit" className="btn btn-primary btn-sm search-btns">Search</button>
                            <button type="reset" className="btn btn-secondary btn-sm search-btns">Reset</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-3" >
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
                        </thead>
                        <tbody className='body'>
                            {
                                // this.state.products.map(
                                //     product =>
                                <tr >
                                    <td>dadwda</td>
                                    <td>dadwda</td>
                                    <td>dadwda</td>
                                    <td>dadwda</td>
                                    <td>dadwda</td>
                                    <td>dadwda</td>
                                    <td>dadwda</td>
                                    <td>dadwda</td>
                                </tr>
                                // )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default SearchProductsByAvailability