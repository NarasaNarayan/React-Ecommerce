import React from "react";
import new_collections from '../Assets/Frontend_Assets/new_collections'
import Item from "../Item/Item";

const NewCollections = () => {
  return <div>
 <h1 className="text-center">New Collections</h1>
 <hr className="" style={{width:'20%',height:'4px', alignItems:'center', alignContent:'center',marginLeft:'40%'}}/>
<Item  data_product={ new_collections}/>
  </div>;
};

export default NewCollections;
