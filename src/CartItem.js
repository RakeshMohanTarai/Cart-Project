import React from "react";
import './app.css'

//export class CartItem extends React.Component {  //here we use some components of react library
 
export const CartItem = (props) => {

    // increaseQuantity = () => {    // here we can use these arrow syntax to bind 
    //    // console.log('this', this.state);
    //     this.setState({   // we use setState which is a function of React.Component to update the value on render
    //         qty: this.state.qty + 1
    //     }, () => {  //cause setState is asyncronous so we need this callback funtion which is provided by the react to update the current data
    //     // console.log('this.state', this.state);
    //     });
    // }

    // // Note :- if we use setState than the last setState will be render cause it uses asyncronous but if we use prevState which is another
    // // form of use setState, than it will be work as syncronous means it will update the data first than move to next one.

    // decreaseQuantity = () => {    // here we can use these arrow syntax to bind 
    // const { qty } = this.state;
    //     if(qty === 0){
    //         return;
    //     }
    //     //console.log('this', this.state);
    //     this.setState({   //cause setState is asyncronous so we need this callback funtion which is provided by the react to update the current data
    //         qty: this.state.qty - 1
    //     }, () => { // react give us a option as callback funtion for update the current data
    //     // console.log('this.state', this.state);
    //     });
    // }
        
    // render() {
    // console.log('this.pros', this.props); // props is used to render the data of each and every product 
        const { price, title, qty } = props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={style.image} src= {product.img} alt="product-img" />  {/* here we can also use the className to done the style like we did with the button divs */}
            </div>
            <div className="right-block">
                <div style={ {fontSize: 25} }>  { price } </div>
                <div style={ {color: '#777'} }> { title } </div>
                <div style={ {color: '#777'} }> { qty } </div>
                <div className="cart-item-actions">
                    {/* {buttons} */}
                    <img alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" 
                    // cause here now we don't use this so here we have to pass the value directly instead of using this.state.onIncreaseQuantity
                    onClick={() => { onIncreaseQuantity(product) }}/> 

                    <img alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/9068/9068779.png" 
                    // cause here now we don't use this so here we have to pass the value directly instead of using this.state.onDecreaseQuantity
                    onClick={() => { onDecreaseQuantity(product) }}/>

                    <img alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" 
                    // cause here now we don't use this so here we have to pass the value directly instead of using this.state.onDeleteProduct
                    onClick={() => { onDeleteProduct(product.id) }}/>
                    
                </div>
            </div>
        </div>
        );
    }


const style = {
    image: {
        height: 110,
        width: 110,
        borderRadious: 4,
        background: '#ccc'
    }
}

