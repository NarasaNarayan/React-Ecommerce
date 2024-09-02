import React from 'react'
import all_product from '../Components/Assets/Frontend_Assets/all_product';

 const ShopCategory = ({category}) => {
  return (
    <div className='container mt-4'>
  <div className='row'>

 {
  all_product.map((item,index)=>{
    if(category===item.category){
      return <div key={item.id} className='col-md-4 '> 
      <img className="img-fluid" src={item.image} alt=""/>
      <p>{item.name}</p>
      </div>
    }
  })
 }
  </div>

    </div>
  )
}
export default ShopCategory;
