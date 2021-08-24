import React, { Component } from 'react'
import { Card, Button, Container } from 'react-bootstrap'

export default class CardProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nama: "Cafe Latte",
      desc: "Finest beans grinded composed with some of the best milk from the best cow farm. Served for you",
      harga: 25000,
      order: 0
    }
  }

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1
      })
    }
  }

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1
      },
      () => {
        this.sendOrderUp(this.state.order)
      }
    );
  }

  sendOrderUp = (newValue) => {
    this.props.onCounterChange(newValue)
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
              <Button variant="danger" onClick={this.handleMinus}> - </Button>{' '}
              <Button variant="success"> {this.state.order} </Button>{' '}
              <Button variant="warning" onClick={this.handlePlus}> + </Button>{' '}
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}
