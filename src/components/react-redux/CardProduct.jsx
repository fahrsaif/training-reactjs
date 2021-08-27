import React, { Component } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import Counter from './Counter'

export default class CardProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nama: "Cafe Latte",
      desc: "Finest beans grinded composed with some of the best milk from the best cow farm. Served for you",
      harga: 25000
    }
  }

  render() {
    return (
      <>
        <Container>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" src="coffee.jpg" />
            <Card.Body>
              <Card.Title>{this.state.nama}</Card.Title>
              <Card.Text>{this.state.desc}</Card.Text>
              <h3>Rp. {this.state.harga}</h3>
              <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}
