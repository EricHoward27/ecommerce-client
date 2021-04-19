import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter to use the match router prop
import { withRouter, Redirect, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { showProduct, deleteProduct } from '../../api/product'

class ShowProduct extends Component {
  constructor (props) {
    super(props)

    // data will be null until fetch from api
    this.state = {
      product: {
        name: '',
        brand: '',
        category: '',
        description: '',
        price: ''
      },
      deleted: false
    }
  }
  componentWillMount () {
    const { match, msgAlert, user } = this.props

    // make a request for a survey
    showProduct(match.params.id, user)
    // set the survey state to the data that return from api call
      .then(res => this.setState({ product: res.data.product }))
      .then(() => msgAlert({
        heading: 'Product Fetched Succesfully',
        message: 'Product is being viewed.',
        variant: 'success'
      }))
      // .then(res => console.log('this is the product data: ', res.data))
      .catch(error => {
        msgAlert({
          heading: 'Showing Product Failed',
          message: 'Failed to show product with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  handleDelete = event => {
    // call for props
    const { user, msgAlert, match } = this.props
    // make a fetch request for deleted
    deleteProduct(user, match.params.id)
    // set deleted var to true, and redirect to the homepage
      .then(() => this.setState({ deleted: true }))
      .then(res => msgAlert({
        heading: 'Deleted Product Succesfully',
        message: 'Survey has been Deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Delete Product',
          message: 'Could not delete survey with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { product, deleted } = this.state
    // console.log('this is the product state data:', product)
    // console.log('response data is: ', survey.responses)
    // if we don't have survey
    if (!product) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    if (deleted) {
      // redirect to the homepage
      return <Redirect to="/products" />
    }
    // const productJsx = product.responses.map(response => (
    //   // // console.log('this is the response data: ', response.response)
    //   <div key={response.description}>
    //     <li>{response.description}</li>
    //   </div>
    // ))
    return (
      <div>
        <h3>{product.name}</h3>
        <h4>Brand: {product.brand}</h4>
        <h4>Category: {product.category}</h4>
        <h4>Price: {product.price}</h4>
        <h4>Description: {product.description} </h4>
        {(this.props.user.id === product.owner) ? (
          <div>
            <Button onClick={this.handleDelete}>Delete Product</Button>
            <Link to={`/products/${product.id}/update`}>
              <Button >
                Update
              </Button>
            </Link>
          </div>
        ) : ''}
      </div>
    )
  }
}
export default withRouter(ShowProduct)
