import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Suppliers from './components/pages/Suppliers';
import SearchProductById from './components/pages/SearchProductById';
import CreateProduct from './components/pages/CreateProduct';
import UpdateProduct from './components/pages/UpdateProduct';
import DeleteProducts from './components/pages/DeleteProducts';
import SearchSupplier from './components/pages/SearchSupplier';
import CreateSupplier from './components/pages/CreateSupplier';
import UpdateSupplier from './components/pages/UpdateSupplier';
import DeleteSupplier from './components/pages/DeleteSupplier';
import SeacrhProductsByCategory from './components/pages/SeacrhProductsByCategory';
import SearchProductsByAvailability from './components/pages/SearchProductsByAvailability';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/suppliers' element={<Suppliers />} />
            <Route path='/search-product-by-id' element={<SearchProductById />} />
            <Route path='/search-product-by-category' element={<SeacrhProductsByCategory />} />
            <Route path='/search-product-by-availability' element={<SearchProductsByAvailability />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/update-product/:productId' element={<UpdateProduct />} />
            <Route path='/delete-product' element={<DeleteProducts />} />
            <Route path='/search-supplier-by-id' element={<SearchSupplier />} />
            <Route path='/create-supplier' element={<CreateSupplier />} />
            <Route path='/update-supplier/:supplierId' element={<UpdateSupplier />} />
            <Route path='/delete-supplier' element={<DeleteSupplier />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
