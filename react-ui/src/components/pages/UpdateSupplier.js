import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';
import SupplierService from '../../services/SupplierService';
import './SearchButtons.css';

function UpdateSupplier() {
    const { supplierId } = useParams();

    const [supplierName, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [supplierEmail, setEmail] = useState('');
    const [supplierTelephone, setTelephone] = useState();
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState();

    useEffect(() => {
        SupplierService.getSupplierById(supplierId).then((response) => {
            setName(response.data.supplierName)
            setIndustry(response.data.industry)
            setEmail(response.data.supplierEmail)
            setTelephone(response.data.supplierTelephone)
            setStreet(response.data.street)
            setCity(response.data.city)
            setCountry(response.data.country)
            setPostalCode(response.data.postalCode)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const handleClick = (e) => {
        e.preventDefault()

        const supplier = { supplierName, industry, supplierEmail, supplierTelephone, street, city, country, postalCode }
        console.log(supplier);

        SupplierService.updateSupplier(supplierId, supplier)
            .then(
                alert("Supplier Updated Successfully")
            ).then(
                handleReset
            )
    }

    const handleReset = () => {
        setName(() => "")
        setIndustry(() => "")
        setEmail(() => "")
        setTelephone(() => "")
        setStreet(() => "")
        setCity(() => "")
        setCountry(() => "")
        setPostalCode(() => "")
    }

    return (
        <div className='container'>
            {/* <div classNameName="row mt-3">
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
            </div> */}

            <div className="mt-5" >
                <form className="row g-3 mt-5">
                    <div className="col-12">
                        <label for="supplierName" className="form-label">Supplier Name</label>
                        <input name="supplierName" type="text" className="form-control" id="supplierName"
                            value={supplierName} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="industry" className="form-label">Industry</label>
                        {/* <input name="productType" type="text" className="form-control" id="type" /> */}
                        <select className='form-control' value={industry} onChange={(e) => setIndustry(e.target.value)}>
                            <option >Select Industry</option>
                            <option value="Automobile">Automobile</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Food">Food</option>
                            <option value="Health">Health</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label for="email" className="form-label">Supplier Email</label>
                        <input name="supplierEmail" type="text" className="form-control" id="email"
                            value={supplierEmail} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="supplierTelephone" className="form-label">Telephone</label>
                        <input name="supplierTelephone" type="number" className="form-control" id="supplierTelephone"
                            value={supplierTelephone} onChange={(e) => setTelephone(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="street" className="form-label">Street</label>
                        <input name="street" type="text" className="form-control" id="street"
                            value={street} onChange={(e) => setStreet(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label for="city" className="form-label">City</label>
                        <input name="city" type="text" className="form-control" id="city"
                            value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label for="country" className="form-label">Country</label>
                        <input name="country" type="text" className="form-control" id="country"
                            value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label for="postalCode" className="form-label">Postal Code</label>
                        <input name="postalCode" type="number" className="form-control" id="postalCode"
                            value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
                    <div className="col-12 mt-4">
                        <button className="btn btn-primary float-right search-btns" onClick={handleClick}>Submit</button>
                        {/* <button className="btn btn-secondary float-right search-btns" onClick={handleReset}>Reset</button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateSupplier