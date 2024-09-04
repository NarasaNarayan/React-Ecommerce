import React from "react";
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'

const Offer = () => {
    return (
        <div>
            <div className="container-fluid background-color">
                <div className="row ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 MT-5">
                        <div className="margin">
                            <b> NEW ARRIVALS ONLY</b>
                            <h1>New <br />
                                Collections <br />
                                For everyone
                            </h1>
                            <button className="btn btn-danger">Latest Collection</button>
                        </div>

                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                        <img className="img-fluid pb-4" src={exclusive_image } alt="" style={ { width: '400px', height: '400px' } } />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Offer;
