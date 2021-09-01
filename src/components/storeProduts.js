import React, { Component } from 'react';
import Product from './product';
import StoreCart from './storeCart';
import './storeProduct.css'

const products = [
    {
        id: 'jhgfds',
        name: 'X-Box',
        description: 'number one console in the world!!!',
        price: '$ 259.99'
    },
    {
        id: 'strga',
        name: 'Sony-PS',
        description: 'number one console in the world!!!',
        price: '$ 289.99'
    },
    {
        id: 'nbfdhs',
        name: 'Smsung PRO',
        description: 'number one console in the world!!!',
        price: '$ 229.99'
    },
    {
        id: 'ASDJH',
        name: 'iPhone 30',
        description: 'number one console in the world!!!',
        price: '$ 499.99'
    },
];

class StoreProducts extends Component {
    state = {
        cartProducts: [],
    }

    addToCart = info => {
        let { cartProducts } = this.state;

        cartProducts.push(info);
        this.setState({ cartProducts });
    }

    removProduct = info => {
        let { cartProducts } = this.state;

        cartProducts = cartProducts.filter(p => p.id !== info.id)
        this.setState({cartProducts})
    }


    render() {
        let { cartProducts } = this.state;
        return (
            <div className='storProduct'>
                {products.map(p => <Product key={p.id} product={p} textButton='Add to cart' handleCart={this.addToCart} />)}
                <div>
                    <StoreCart cartProducts={cartProducts} textButton='Remove from cart' handleCart={this.removProduct}/>
                </div>
            </div>

        );
    }
}

export default StoreProducts;