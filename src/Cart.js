import React from "react";
import { CartItem } from "./CartItem";

export const Cart = (props) => {  //here we use some components of react library
  
    const { products } = props;
    
    return(
        <div className="cart">
        {products.map((product) => {
            return  <CartItem 
            product ={product} 
            key={product.id}
            onIncreaseQuantity = { props.onIncreaseQuantity }
            onDecreaseQuantity = { props.onDecreaseQuantity }
            onDeleteProduct = { props.onDeleteProduct } /> 
        // this layout called props whcich is help us to render each and every product with in the cart
        })}
        </div>
    )
}



