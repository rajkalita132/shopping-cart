import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
              <ul className="products">
                  {this.props.products.map(product => ( // I need to get the list of products as a prop from the parent component
                      <li key={product._id}>
                         <div className="product">
                             <a href={"#" + product._id}>
                                <img src={product.image} alt={product.title}></img>
                                <p>{product.title}</p>
                             </a>
                             <div className="info">
                                 <div className="product-price">${product.price}</div>
                                <button className="button-primary">Add To Cart</button>
                             </div>
                         </div>
                      </li>
                  ))}  
              </ul>  
            </div>
        )
    }
}

