import React, {useContext} from "react";
import ShopContext from "../Contaxt/ShopContex";
import { useParams } from "react-router-dom";
import Bredcum from "../Components/Bredcum/Bredcum";
import ProductDispaly from "../Components/ProductDispaly/ProductDispaly";
import all_product from "../Components/Assets/Frontend_Assets/all_product";

const Product = (props) => {
  // const {all_product}= useContext(ShopContext);
 const {productId}=useParams();
 const product=all_product.find((e)=> e.id === Number(productId));
  return <div>
   
    <Bredcum product={product}/>
    <ProductDispaly product={product}/>

<h1>{product.name}</h1>
<img src={product.image} alt=""/>
  </div>;
};

export default Product;
