import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Populer/Popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import Offer from "../Components/Offers/Offer";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return <div>

    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
  </div>;
};

export default Shop;
