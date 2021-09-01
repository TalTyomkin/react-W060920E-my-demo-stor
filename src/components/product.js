import React, { Component } from 'react';

class Product extends Component {
    state = {  }
    render() { 
        const {product,handleCart} = this.props;
        return (
            <div className = 'row'>
                <div className = 'product'>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <p className="card-text">{product.price}</p>
                          <button
                          onClick={() => handleCart(product)}
                          className="btn btn-primary">
                              {this.props.textButton}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Product;