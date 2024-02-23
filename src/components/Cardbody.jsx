import React, { useState } from 'react';
import './style/Cardbody.css'

const Cardbody = ({item, setCartCount}) => {
    const[cartStatus, setCartStatus]=useState(true)
    const CartAdd = () => {
        setCartStatus(false)
        setCartCount((pval) => pval + 1)
    }

    const CartRemove = () => {
        setCartStatus(true)
        setCartCount((pval) => pval - 1)
    }

    return (
        <div key={item}>
             <div class="col mb-5"  id="card">
                <div class="card"  id="cards">
                    <img src={item.image} class="card-img-top" id='card-img' alt="..."></img>
                    <div class="card-body p-4">
                        <div class="text-center">
                          {/* <!-- Product name--> */}
                          <h5 class="fw-bolder">{item.name}</h5>
                            {item.rating ? (

                                <div className="text-warning  text-center mb-2 small">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            ) : (
                                <></>
                            )}
                            {/* <!-- Product price--> */}
                            <p class="card-price text-center" id="original-price">{item.price}</p>
                            <p class="card-price text-muted" id="del-price">{item.delprice}</p>

                            {/* <p class="card-price text-muted text-center"><del>{item.delPrice}</del></p> */}
                        </div>
                        </div>
                    
                    <div class="card-footer text-center" id="btn-div">
                        {cartStatus ? <button class="btn btn-success" id="btn" onClick={CartAdd}>Add to Cart</button>
                            : <button class="btn btn-danger" id="btn" onClick={CartRemove}>Remove from Cart</button>}
                    </div>
                    
                </div>
            </div>
            </div>
            
        
    );
};

export default Cardbody;