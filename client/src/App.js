import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class ProductForm extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: '',
            shortDescription: '',
            description: '',
            img: '',
            price: 0,
            qty: 0,

        }
    }
    componentDidMount(){
        if(this.props.product){
            this.setState({
                name: this.props.product.name,
                shortDescription: this.props.product.shortDescription,
                description: this.props.product.description,
                img: this.props.product.img,
                price: this.props.product.price,
                qty: this.props.product.qty,

            })
        }
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.state)
    }
    render(){
        return   <div className="form-container">

                    <form onSubmit={this.handleSubmit}>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Name:</div>
                            <input
                                type="text"
                                className="siimple-input siimple-input--fluid"
                                id="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Short Description:</div>
                            <input
                                type="text"
                                className="siimple-input siimple-input--fluid"
                                id="shortDescription"
                                onChange={this.handleChange}
                                value={this.state.shortDescription}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Description:</div>
                            <textarea
                                type="text"
                                className="siimple-textarea siimple-textarea--fluid"
                                id="description"
                                onChange={this.handleChange}
                                value={this.state.description}>
                            </textarea>
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Image URL:</div>
                            <input
                                type="text"
                                className="siimple-input siimple-input--fluid"
                                id="img"
                                onChange={this.handleChange}
                                value={this.state.img}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Price:</div>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                className="siimple-input siimple-input--fluid"
                                id="price"
                                onChange={this.handleChange}
                                value={this.state.price}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Quantity:</div>
                            <input
                                type="number"
                                min="0"
                                className="siimple-input siimple-input--fluid"
                                id="qty"
                                onChange={this.handleChange}
                                value={this.state.qty}
                            />
                        </div>

                        <div className="btn-container">
                            <button type="submit" className="siimple-btn siimple-btn--navy">Submit</button>

                            <button
                                className="siimple-btn siimple-btn--grey"
                                onClick={()=>this.props.toggleState('addProductIsVisible', 'productsListIsVisible')}
                                >Cancel</button>
                        </div>


                    </form>
                </div>
    }
}


class  EditProductForm extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: '',
            shortDescription: '',
            description: '',
            img: '',
            price: 0,
            qty: 0
        }
    }
    componentDidMount(){
        if(this.props.product){
            this.setState({
                name: this.props.product.name,
                shortDescription: this.props.product.shortDescription,
                description: this.props.product.description,
                img: this.props.product.img,
                price: this.props.product.price,
                qty: this.props.product.qty,
                _id: this.props.product._id
            })
        }
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.state)
    }
    render(){
        return   <div className="form-container">

                    <form onSubmit={this.handleSubmit}>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Name:</div>
                            <input
                                type="text"
                                className="siimple-input siimple-input--fluid"
                                id="name"
                                onChange={this.handleChange}
                                placeholder={this.props.product.name}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Short Description:</div>
                            <input
                                type="text"
                                className="siimple-input siimple-input--fluid"
                                id="shortDescription"
                                onChange={this.handleChange}
                                placeholder={this.props.product.shortDescription}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Description:</div>
                            <textarea
                                type="text"
                                className="siimple-textarea siimple-textarea--fluid"
                                id="description"
                                onChange={this.handleChange}
                                placeholder={this.props.product.description}>
                            </textarea>
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Image URL:</div>
                            <input
                                type="text"
                                className="siimple-input siimple-input--fluid"
                                id="img"
                                onChange={this.handleChange}
                                placeholder={this.props.product.img}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Price:</div>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                className="siimple-input siimple-input--fluid"
                                id="price"
                                onChange={this.handleChange}
                                placeholder={this.props.product.price}
                            />
                        </div>
                        <div className="siimple-form-field">
                            <div className="siimple-form-field-label">Quantity:</div>
                            <input
                                type="number"
                                min="0"
                                className="siimple-input siimple-input--fluid"
                                id="qty"
                                onChange={this.handleChange}
                                placeholder={this.props.product.qty}
                            />
                        </div>

                        <div className="btn-container">
                            <input className="siimple-btn siimple-btn--navy" type="submit"/>

                            <button
                                className="siimple-btn siimple-btn--grey"
                                onClick={()=>this.props.toggleState('editProductIsVisible', 'productIsVisible')}
                                >Cancel</button>
                        </div>


                    </form>
                </div>
    }
}

class Product extends Component {

    render(){
        return  <div>
                    <button className="siimple-close" onClick={()=>this.props.toggleState('productIsVisible', 'productsListIsVisible')}></button>

                    <div className="show-container">
                        <h3 className="siimple-h3">{this.props.product.name}</h3>
                        <div className="img-container">
                            <img src={this.props.product.img}/>
                        </div>
                        <p className="short">{this.props.product.shortDescription}</p>
                        <p className="desc">{this.props.product.description}</p>
                        {this.props.product.qty ? <p className="qty">{this.props.product.qty} in stock</p> : <p className="qty">Out of stock</p>}
                        <p className="price">Price: ${this.props.product.price}</p>

                        <div className="buttons-container">
                            <button
                                className="siimple-btn siimple-btn--navy edit"
                                onClick={()=>{ this.props.toggleState('productIsVisible', 'editProductIsVisible')
                                this.props.getProduct(this.props.product)}}
                            >Edit</button>

                            <button
                                className="siimple-btn siimple-btn--grey remove"
                                onClick={()=>
                                     {this.props.deleteProduct(this.props.product); this.props.toggleState('productIsVisible', 'productsListIsVisible')}}
                            >Delete</button>
                        </div>
                    </div>
                </div>
    }
}
class ProductsList extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render(){
        console.log(this.props);
        return  <div>
                    <h2 className="siimple-h2">Products</h2>
                    <div className="scroll-wrapper">
                        {this.props.products.map(product => {

                            return  <div className="product-card" key={product._id}>
                                        <h5 className="siimple-h5">{product.name}</h5>
                                        <img
                                            src={product.img}
                                            onClick={()=>
                                            {this.props.getProduct(product); this.props.toggleState('productsListIsVisible', 'productIsVisible')}}/>
                                        <h5 className="siimple-h5">${product.price}</h5>
                                    </div>
                        })}

                    </div>
                </div>
    }
}

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            productsListIsVisible: true,
            addProductIsVisible: false,
            productIsVisible: false,
            editProductIsVisible: false,
            products: [],
            product: {},
        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.getProduct = this.getProduct.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.toggleState = this.toggleState.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    }


  componentDidMount() {
      this.getProducts();
  }

  getProducts(){
      fetch('/api/products')
       .then(res => res.json())
       .then(data => {
           this.setState({
               products: data
           })
       }).catch(error => console.log(error))
  }

  deleteProduct(product, index){
      fetch('/api/products/' + product._id,
        {
            method: 'DELETE'
        })
        .then(data => {
            let index
            for (let i = 0; i < this.state.products.length; i++) {
                console.log(this.state.products[i]);
                if (this.state.products[i]._id == product._id) {
                    index = this.state.products[i]
                }
            }
            this.setState({
                products: [
                    ...this.state.products.slice(0, index),
                    ...this.state.products.slice(index + 1)
                ]
            })
        })
        console.log(this.state);
  }

  getProduct(product){
      console.log('from product:', product);
      this.setState({
          product: product,

        })

  }

  toggleState(st1, st2){
      this.setState({
          [st1]: !this.state[st1],
          [st2]: !this.state[st2]
      })
  }

  handleCreate(product){
      const updatedProducts = this.state.products
      updatedProducts.unshift(product)
      this.setState( {products: updatedProducts} )
  }

  handleCreateSubmit(product){
      fetch('/api/products', {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          }
      })
      .then(jsonedProduct => {
          this.handleCreate(jsonedProduct)
          this.getProducts()
          this.toggleState('addProductIsVisible', 'productsListIsVisible')
      })
  }

  handleUpdateSubmit(product){
      console.log(product._id);
      console.log('hello!');
      fetch('/api/products/' + product._id, {
          method: 'PUT',
          body: JSON.stringify(product),
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          }
      })
      .then(updatedProduct => {

          return updatedProduct.json()
      })
      .then(jsonedProduct => {
          
          this.setState({
              product: product
          })
          this.toggleState('editProductIsVisible', 'productIsVisible')
      })
      .catch(error => console.log(error))
  }



  render(){
      return   <div>

                {this.state.productsListIsVisible ?
                    <button
                        className="siimple-btn siimple-btn--navy"
                        onClick={()=>this.toggleState('addProductIsVisible', 'productsListIsVisible')}
                        >Add a Product
                    </button> : ''
                }

                {this.state.productsListIsVisible ?
                    <ProductsList
                        getProducts={this.getProducts}
                        toggleState={this.toggleState}
                        products={this.state.products}
                        getProduct={this.getProduct}
                        deleteProduct={this.deleteProduct}
                        handleUpdateSubmit={this.handleUpdateSubmit}
                    /> : ''

                }

                {this.state.addProductIsVisible ?
                    <ProductForm
                        toggleState={this.toggleState}
                        handleCreate={this.handleCreate}
                        handleSubmit={this.handleCreateSubmit}
                    /> : ''
                }

                {this.state.productIsVisible ?
                    <Product
                        toggleState={this.toggleState}
                        product={this.state.product}
                        products={this.state.products}
                        getProduct={this.getProduct}
                        deleteProduct={this.deleteProduct}
                    /> : ''
                }

                {this.state.editProductIsVisible ?
                    <EditProductForm
                        toggleState={this.toggleState}
                        handleSubmit={this.handleUpdateSubmit}
                        product={this.state.product}
                    /> : ''
                }

                </div>

  }
}

class Header extends Component {
    render() {
        return <div className="section">
              <div className="hero-image">
              <div className="hero-text">
                  <h1 className="title siimple-h1">Leaf and Bean</h1>
              </div>
              </div>
              </div>
    }
}
class App extends Component {
      render() {
          return (
                <div className="App">
                    <Header />
                    <Products />

                </div>
          )

      }
  }


export default App;
