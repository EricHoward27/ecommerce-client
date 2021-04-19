import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { updateProduct, showProduct } from '../../api/product'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

class UpdateProduct extends Component {
  constructor () {
    super()

    this.state = {
      product: null,
      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a survey
    showProduct(match.params.id, user)
    // set the survey state to the data that return from api call
      .then(res => this.setState({ product: res.data }))
      .then(() => msgAlert({
        heading: 'Product Fetched Succesfully',
        message: 'Product is being viewed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Product Failed',
          message: 'Failed to show product with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { product } = this.state

    updateProduct(user, product, match.params.id)
      .then(res => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Updated Product Successfully',
          variant: 'success',
          message: 'Product has been updated.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Updating Product Failed',
          variant: 'danger',
          message: 'Product was not updated due to error: ' + err.message
        })
      })
  }

  handleChange = event => {
    this.setState({ product: { ...this.state.product, [event.target.name]: event.target.value } })
  }

  render () {
    const { product, updated } = this.state

    // if we don't have a survey yet
    if (!product) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    if (updated) {
      return <Redirect to={`/products/${this.props.match.params.id}`} />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Change Product</h2>
        <Form.Group>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={product.name}
            placeholder="Enter product name"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand:</Form.Label>
          <Form.Control
            required
            name="brand"
            value={product.brand}
            type="text"
            placeholder="Enter product brand"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            required
            name="price"
            value={product.price}
            type="float"
            placeholder="Enter price for product"
            onChange={this.handleChange}
          />
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

export default withRouter(UpdateProduct)
