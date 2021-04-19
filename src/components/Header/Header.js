import React, { Fragment } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import react route bootstrap to utilize LinkContainer to stop page from reloading
import { LinkContainer } from 'react-router-bootstrap'
import '../../index.scss'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link href="#create-product">Add Products</Nav.Link>
    <Nav.Link href="#products">Products</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>Ecommerce Store</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
          <LinkContainer to="/cart">
            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
