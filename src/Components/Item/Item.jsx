import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {props.data_product.map((item, index) => (
            <div className="col-md-3" key={index}>
             <Link to={`/product/${item.id}`}> <img className="img-fluid" src={item.image} alt={item.name} /></Link>
              <p>{item.name}</p>
              <p>
                ${item.new_price} 
                <s className="mx-2 text-bg-light">${item.old_price}</s>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
