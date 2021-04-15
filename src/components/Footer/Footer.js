import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../index.scss'

function Footer () {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Ecommerce-Shop</Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
