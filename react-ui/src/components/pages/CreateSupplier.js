import React, { useState } from 'react';
import '../../App.css';
import SupplierService from '../../services/SupplierService';
import './SearchButtons.css';

function CreateSupplier() {
    const [supplierName, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [supplierEmail, setEmail] = useState('');
    const [supplierTelephone, setTelephone] = useState();
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState();

    const handleClick = (e) => {
        e.preventDefault()

        const supplier = { supplierName, industry, supplierEmail, supplierTelephone, street, city, country, postalCode }
        console.log(supplier);

        SupplierService.createSupplier(supplier)
        .then(
            alert("Supplier Created Successfully")
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
                    <button className="btn btn-secondary float-right search-btns" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default CreateSupplier