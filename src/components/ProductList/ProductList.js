// import React, { Component } from 'react'
// import { Button, Icon, Image, Item, Label, Container, Segment, Loader, Dimmer } from 'semantic-ui-react'
// import { productIndex } from '../../api/product'

// class ProductList extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       loading: false,
//       data: []

//     }
//   }
//   componentDidMount () {
//     const { user } = this.props
//     this.setState({ loading: true })
//     productIndex(user)
//       .then((res) => {
//         this.setState({ data: res.data.products, loading: false })
//       })
//   }
// //   handleAddToCart = slug => {
// //     const { user } = this.props
// //     this.setState({ loading: true })
// //     addToCart(slug, user)
// //       .then(() => {
// //         this.setState({ loading: false })
// //       })
// //   }
//   render () {
//     const { loading, data } = this.state
//     return (
//       <Container>
//         { loading && (
//           <Segment>
//             <Dimmer active inverted>
//               <Loader inverted>Loading</Loader>
//             </Dimmer>

//             <Image src='/images/wireframe/short-paragraph.png' />
//           </Segment>
//         )}
//         <Item.Group divided>
//           {data.map(product => {
//             return <Item key={product.id}>
//               <Item.Image src= {product.image} />

//               <Item.Content>
//                 <Item.Header as='a'>{product.name}</Item.Header>
//                 <Item.Meta>
//                   <span className='cinema'>{product.category}</span>
//                 </Item.Meta>
//                 <Item.Description>{product.description}</Item.Description>
//                 <Item.Extra>
//                   <Button primary floated='right' icon labelPosition="right" >
//                     Add To Cart
//                     <Icon name='plus cart' />
//                   </Button>
//                   <Label>{product.price}</Label>
//                 </Item.Extra>
//               </Item.Content>
//             </Item>
//           })}
//         </Item.Group>
//       </Container>
//     )
//   }
// }

// export default ProductList
