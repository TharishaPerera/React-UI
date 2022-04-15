import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src="" autoPlay loop muted></video> */}
        <h1>Inventory Management <br/>System</h1>
        <p><b>We help you manage & store your products, and suppliers.</b></p>
        <div className="hero-btns">
          <Link to="/products" className='btn-product btn btn-light btn-lg'>Products</Link>
          <Link to="/suppliers" className='btn-supplier btn btn-light btn-lg'>Suppliers</Link>
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer</Button> */}
        </div>
    </div>
  )
}

export default HeroSection