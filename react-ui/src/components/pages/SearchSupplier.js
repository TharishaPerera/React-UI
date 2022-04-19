import React, { useState } from 'react';
import '../../App.css';
import './SearchButtons.css';
import SupplierService from '../../services/SupplierService';

function SearchSupplier() {
    const [supplierId, setSupplierId] = useState();

    const [supplierName, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [supplierEmail, setEmail] = useState('');
    const [supplierTelephone, setTelephone] = useState();
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState();

    const handleSearch = (supplierId) =>{
        SupplierService.getSupplierById(supplierId).then((response) =>{
            setName(response.data.supplierName)
            setIndustry(response.data.industry)
            setEmail(response.data.supplierEmail)
            setTelephone(response.data.supplierTelephone)
            setStreet(response.data.street)
            setCity(response.data.city)
            setCountry(response.data.country)
            setPostalCode(response.data.postalCode)
        })
    }

    const handleReset = () => {
        setSupplierId(()=>"")
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
            <div classNameName="row mt-3">
                <div className="row g-3">
                    <form className="col-md-4 mt-5">
                        <label for="productId" className="form-label">Enter Supplier ID:</label>
                        <input type="number" min="1" className="form-control" id="productId" value={supplierId} onChange={(e) => setSupplierId(e.target.value)} />
                        <div className="mt-3">
                            <button type="button" className="btn btn-primary btn-sm search-btns" onClick={() => handleSearch(supplierId)} >Search</button>
                            <button type="reset" className="btn btn-secondary btn-sm search-btns" onClick={handleReset} >Reset</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-5" >
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="supplierName" className="form-label">Supplier Name</label>
                        <input type="text" className="form-control" id="supplierName" value={supplierName} readonly />
                    </div>
                    <div className="col-6">
                        <label for="industry" className="form-label">Industry</label>
                        <input type="text" className="form-control" id="industry" value={industry} readonly />
                    </div>
                    <div className="col-12">
                        <label for="supplierEmail" className="form-label">Supplier Email</label>
                        <input type="text" className="form-control" id="supplierEmail" value={supplierEmail} readonly />
                    </div>
                    <div className="col-md-6">
                        <label for="supplierTelephone" className="form-label">Supplier Telephone</label>
                        <input type="number" className="form-control" id="supplierTelephone" value={supplierTelephone} readonly />
                    </div>                    
                    <div className="col-md-6">
                        <label for="postalCode" className="form-label">Postal Code</label>
                        <input type="number" className="form-control" id="postalCode" value={postalCode} readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="street" className="form-label">Street</label>
                        <input type="text" className="form-control" id="street" value={street} readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" value={city} readonly />
                    </div>
                    <div className="col-md-4">
                        <label for="country" className="form-label">Country</label>
                        <input type="text" className="form-control" id="country" value={country} readonly />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SearchSupplier;