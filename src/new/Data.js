import React, { useState, useEffect } from 'react';
import products from "./Productslist";
import Products from './Products';
import "./Home.css";


const Data = () => {
    return(
        <div className='home'>
            <h2>Products List</h2>
            <Products data={products} key={products.id} />
        </div>
    )
}

export default Data