import React, { Component } from 'react'
import { createProduct } from '../../api/product'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

class CreateProduct extends Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {
        name: '',
        brand: '',
        category: '',
        description: '',
        price: ''
      },
      productId: null
    }
  }
  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props

    // create survey, pass it the survey data and the user for the token
    createProduct(user, this.state.product)
    // set the createdId to the id of the survey that was just created
      .then(res => {
        this.setState({ productId: res.data.id })
        // pass the response to the .then so we can show survey title
        // // console.log(res.data.survey)
        return res
      })
      // .then(res => console.log('this is product data:  ', res.data.id))
      .then(res => msgAlert({
        heading: 'Created Product Succesfully',
        message: `Product has been created successfully. The Product ${res.data.name}`,
        variant: 'success'
      }))
      // .then(() => history.push(`/products/${this.state.productId}`))
      .catch(error => {
        // this.setState({ name: '', brand: '', category: '', description: '', price: '', productId: '' })
        msgAlert({
          heading: 'Failed to Create Product',
          message: 'Could not create product with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  // when an input changes, update the state that corresponds with input's name
  handleChange = event => {
    // using event.persist to ensure props are not set to null
    event.persist()

    this.setState(state => {
    // return the state change
      return {
      // set the survey state to what it used to be(..state.survey)
      // but replace the prop with `name` to its cureent `value`
      // name could be title or question
        product: { ...state.product, [event.target.name]: event.target.value }
      }
    })
  }
  render () {
    // destructure survey and createId state
    const { productId } = this.state
    // if the survey been created, set its id
    if (productId) {
      // redirect to the survey show page, (show page finish will add correct endpoint)
      return <Redirect to={`/products/${productId}/`} />
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Product Creation</h2>
        <Form.Group>
          <Form.Label>Product</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={this.state.product.name}
            placeholder="Enter Product Name"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            required
            name="brand"
            value={this.state.product.brand}
            type="text"
            placeholder="Enter your product brand"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            required
            name="category"
            value={this.state.product.category}
            type="text"
            placeholder="Enter product category"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            name="description"
            value={this.state.product.description}
            type="text"
            placeholder="Enter a product description"
            onChange={this.handleChange}
          />
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              name="price"
              value={this.state.product.price}
              type="number"
              placeholder="Enter product price"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
        Submit</Button>
      </Form>
    )
  }
}
export default CreateProduct
