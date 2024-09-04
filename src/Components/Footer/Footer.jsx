import React from "react";
import logo from '../Assets/Frontend_Assets/logo.png'

const Footer = () => {
  return (
    <div className="container pb-5 mt-5">
        <div className="d-flex justify-content-center align-items-center">
            <img src={logo} alt=""/> <h1>SHOPPER</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-2">
            <ul className="d-flex justify-content-center align-items-center mt-2" style={{ listStyleType: 'none' }}>
                <li><a href=""></a>Company</li>
                <li><a href=""></a>Products</li>
                <li><a href=""></a>Offices</li>
                <li><a href=""></a>About</li>

            </ul>
           {/* <h5 className="mx-2">Company</h5>
           <h5 className="mx-2">Products</h5>
           <h5 className="mx-2">Offices</h5>
           <h5 className="mx-2">About</h5>
           <h5 className="mx-2">About</h5> */}

        </div>

    </div>
  )
};

export default Footer;
