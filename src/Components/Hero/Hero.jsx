import React from "react";
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
import './Hero.css'
const Hero = () => {
  return <div>
    <div className="container-fluid background-color">
  <div className="row ">
    <div className="col MT-5">
      <div className="margin">
      <b> NEW ARRIVALS ONLY</b>
      <h1>New <img src={hand_icon} alt="" style={{width:'50px',height:'50px'}}/> <br/>
      Collections <br/>
      For everyone
      </h1>
      <button className="btn btn-danger">Latest Collection</button>
      </div>

    </div>
    
    <div className="col mt-5">
      <img src={hero_image} alt="" style={{width:'500px',height:'500px'}}/>
    </div>
  </div>
</div>
  </div>;
};

export default Hero;
