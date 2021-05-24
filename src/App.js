//import { render } from "@testing-library/react";
import React from "react";
import data from "./data.json";
import Products from "./components/Products"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
   }
  render() {
    return (                                  // href link should point to home
      <div className="grid-container">
          <header>
            <a href="/">Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Products products={this.state.products}></Products>
              </div>
              <div className="sidebar">Cart Items</div>
            </div>
          </main>
        <footer>All right is reserved</footer>
      </div>
    );
  }
  
}

export default App;
