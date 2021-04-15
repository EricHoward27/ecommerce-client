import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './../Rating/Rating'
function Product ({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      {/* Product name */}
      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        {/* Product rating */}
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
          </div>
        </Card.Text>
        {/* Product price */}
        <Card.Text as="h3">
          {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default Product
