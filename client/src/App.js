import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {products: []}

  componentDidMount() {

     fetch('/api/products/seed')
        .then(res => res.json())


    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));


  }

  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        {this.state.products.map(product =>
          <div key={product._id}>{product.name}</div>
        )}
      </div>
    );
  }
}

export default App;
