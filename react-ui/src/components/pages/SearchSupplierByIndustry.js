import React, { useState } from 'react';
import '../../App.css';
import './SearchButtons.css';

function SearchSupplierByIndustry() {
    const [industry, setIndustry] = useState('');

  return (
    <div className='container'>
            <div classNameName="row mt-3">
                <div className="row g-3">
                    <form className="col-md-4 mt-5">
                        <label for="industry" className="form-label" >Select Industry:</label>
                        <select className='form-control' value={industry} onChange={(e) => setIndustry(e.target.value)}>
                            <option >Select Industry</option>
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

            <div className="mt-3" >
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

export default SearchSupplierByIndustry