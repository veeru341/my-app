import React from 'react';
import "./Home.css";
import { Contextstore } from "./Context"

const Cart = () => {
    const { state: { cart }, dispatch }  =  Contextstore()
     return (
        <div className="home3">
            <div className='cartname'>
                <h2>Cart</h2>
            </div>
            <div className='num'>
                {
                    cart.map((item) => (
                            <div className='cartdetails'>
                                <img className="cartimages" src={item.image} />
                                <h4>{item.name}</h4>
                                <button className='buttonremove1' onClick={()=>dispatch({type: "REMOVE_FROM_CART", payload:item})}>Remove From Cart</button>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Cart