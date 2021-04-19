import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { indexProduct } from '../../api/product'
import { Card, Button, Row, Col } from 'react-bootstrap'

class IndexProduct extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: null
    }
  }

  // after we render the SurveyIndex component for the first time
  componentDidMount () {
    const { msgAlert, user } = this.props

    // make a request to get all of our surveys
    indexProduct(user)
      // set the surveys state, to the surveys we got back in the response's data
      .then(res => this.setState({ products: res.data.products }))
      .then(() => msgAlert({
        heading: 'Loaded Products Successfully',
        message: 'All products retrieved. Click on one to go to its page.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Products!',
          message: 'Could not load products with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    // destructure our surveys state
    const { products } = this.state

    // if we haven't fetched any surveys yet from the API
    if (!products) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const productsJsx = products.map(product => (
      <Card style={{ width: '18rem' }} key={product.id}>
        <Link to={`/products/${product.id}`}>
          <Card.Img variant="top" src={product.image}/>
        </Link>

        <Card.Body>
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card.Title>{product.name}</Card.Title>
          </Link>

          <Card.Text as="div">
            <div className="my-3">
              <strong>{product.description}</strong>
            </div>
          </Card.Text>

          <Card.Text as="h3">
            ${product.price}
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    ))

    return (
      <div>
        <h1>Latest Products</h1>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            {productsJsx}
          </Col>
        </Row>
      </div>
    )
  }
}

export default IndexProduct
