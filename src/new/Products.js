import React from 'react';
import { Contextstore } from "./Context"
import "./Home.css"


function Products({data}){
    const { state : { cart }, dispatch } = Contextstore();
    return (
        <div className='products'>
            {
                data.map((item) => (
                        <div className='cartmain'>
                            <img className="image" src={item.image} />
                            <div className="productname">
                            <h4>{item.name} {item.price}</h4>
                            {cart.some((p)=>p._id===item._id) ? (
                            <button className='buttonremove' onClick={()=>dispatch({type: "REMOVE_FROM_CART", payload:item})}>Remove From Cart</button>)
                            :
                            (<button className='buttonadd' onClick={()=>dispatch({type: "ADD_TO_CART", payload:item})}>Add To Cart</button>)
                            }
                        </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Products
