import React, { createContext } from 'react';
import all_product from '../Components/Assets/Frontend_Assets/all_product';

const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const ContexValue = { all_product }
    return (

        <ShopContext.Provider value={ ContexValue }>
           { props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;