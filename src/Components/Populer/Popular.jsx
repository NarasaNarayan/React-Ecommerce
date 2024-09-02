import React from "react";
import data_product from '../Assets/Frontend_Assets/data'
import Item from "../Item/Item";

const Popular = () => {
  return <div>
    <h1 className="text-center">Popular in women</h1>
    <hr className="" style={{width:'20%',height:'4px', alignItems:'center', alignContent:'center',marginLeft:'40%'}}/>
    <div>
       <Item data_product={data_product}/>
    </div>

  </div>;
};

export default Popular;
