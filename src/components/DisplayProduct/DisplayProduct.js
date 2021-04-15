import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
// import Rating from '../Rating/Rating'
import products from '../../products'

function DisplayProduct ({ match }) {
  const product = products.find(p => p._id === match.params.id)
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(DisplayProduct)
