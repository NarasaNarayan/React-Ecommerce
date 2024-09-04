import React from "react";
import './NewsLetter.css'
const NewsLetter = () => {
  return <div className="background-color newsletter">
 <h1 className="text-center">Get Exclusive Offers On Your Email</h1>
 <p className="text-center">Subcribe to our newsletter and stay updated</p>
  <div className="d-flex justify-content-center align-items-center email">
 <input type="email" name="" id="" placeholder="Your email id"/>
   <button className="btn btn-dark rounded-5">Subscribe</button>
  </div>

  </div>;
};

export default NewsLetter;
