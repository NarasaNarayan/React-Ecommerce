import React from 'react'
import all_product from '../Components/Assets/Frontend_Assets/all_product';
import { Link } from "react-router-dom";


 const ShopCategory = (props) => {
  return (
    <div className='container mt-4'>
<div className='mb-5'>
  <img src={props.banner} alt="some" style={{width:'100%'}}/>
</div>
  <div className='row'>
 
 {
  all_product.map((item,index)=>{
    if(props.category===item.category){

      return <div key={item.id} className='col-md-4 '> 
     <Link to={`/product/${item.id}`}> <img className="img-fluid" src={item.image} alt=""/></Link>
      <p>{item.name}</p>
      <p>${item.new_price}  <s className="mx-2 text-bg-light">${item.old_price}</s></p>

      </div>
    }
  })
  
 }
  </div>

    </div>
  )
}
export default ShopCategory;
