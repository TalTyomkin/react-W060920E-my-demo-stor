import React, { Component } from 'react';
import Product from './product';

class StoreCart extends Component {
    state = {}
    render() { 
        const {cartProducts,handleCart} = this.props;
        if(cartProducts.length === 0){
            return  <div>
                      <h2>this is my cart</h2>
                      <h4>No products in cart</h4>
                    </div>
        }
        return (
            <div>
                <h2>This is my cart</h2>
                {cartProducts.map(p => <Product
                    key={p.id}
                    handleCart={handleCart}
                    product={p}
                    textButton={this.props.textButton}/>)}
            </div>
        )
    }
}
 
export default StoreCart;