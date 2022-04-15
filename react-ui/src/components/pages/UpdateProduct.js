import React from 'react'

function UpdateProduct() {
  return (
    <div className='container'>
        <div classNameName="row mt-3">                
            <div className="row g-3">
                <form className="col-md-4 mt-5">
                    <label for="productId" className="form-label">Enter Product ID:</label>
                    <input type="number" min="1" className="form-control" id="productId" />
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary btn-sm search-btns">Search</button>
                        <button type="reset" className="btn btn-secondary btn-sm search-btns">Reset</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="mt-5" >
            <form className="row g-3">
                <div className="col-md-12">
                    <label for="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName" />
                </div>
                <div className="col-12">
                    <label for="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description"  />
                </div>
                <div className="col-6">
                    <label for="type" className="form-label">Product Type</label>
                    {/* <input type="text" className="form-control" id="type"  /> */}
                    <select className='form-control' onChange={(e) =>{
                        
                    }}>
                        <option >Select Category</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Food">Food</option>
                        <option value="Health">Health</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="unitPrice" className="form-label">Unit Price</label>
                    <input type="text" className="form-control" id="unitPrice"  />
                </div>
                <div className="col-md-4">
                    <label for="availablity" className="form-label">Availability</label>
                    {/* <input type="text" className="form-control" id="availablity"  /> */}
                    <select className='form-control' onChange={(e) =>{
                        
                    }}>
                        <option >Select Availability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="quantity" className="form-label">Quantity</label>
                    <input type="text" className="form-control" id="quantity"  />
                </div>
                <div className="col-md-4">
                    <label for="supplierId" className="form-label">Supplier ID</label>
                    <input type="text" className="form-control" id="supplierId"  />
                </div>
                <div className="col-12 mt-4">
                    <button className="btn btn-primary float-right search-btns" type="submit">Update</button>
                    <button className="btn btn-secondary float-right search-btns" type="reset">Reset</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateProduct