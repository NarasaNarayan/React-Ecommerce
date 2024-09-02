import React from "react";

const Item = (props) => {
  return (<div>
<div class="container">
    <div class="row ">
        {
            props.data_product.map((item,index)=>(
                <div className='col-md-3 '> 
                <img className="img-fluid" src={item.image} alt=""/>
                <p>{item.name}</p>
                </div>
            ))
        }
    </div>
</div>

  </div>
)}; 

export default Item;
