import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { productIndex } from '../../api/product'
// import Product component
import Product from './../Product/Product.js'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }
  componentDidMount () {
    const { user } = this.props
    console.log('user prop data: ', user)

    productIndex(user)
      .then(res => this.setState({ products: res.data.products }))
      // .then(() => msgAlert({
      //   heading: 'Loaded Products Successfully',
      //   message: 'All surveys retrieved. Click on one to go to its page.',
      //   variant: 'success'
      // }))
      // .catch(error => {
      //   msgAlert({
      //     heading: 'Failed to Load Surveys!',
      //     message: 'Could not load surveys with error: ' + error.message,
      //     variant: 'danger'
      //   })
      // })
  }
  render () {
    const { products } = this.state
    return (
      <div>
        <h1>Lastest Products</h1>
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
export default Home
