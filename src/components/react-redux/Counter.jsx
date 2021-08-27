import { Button } from 'react-bootstrap'
import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        <Button variant="danger" onClick={this.handleMinus}> - </Button>{' '}
        <Button variant="success"> {this.state.order} </Button>{' '}
        <Button variant="warning" onClick={this.handlePlus}> + </Button>{' '}
      </>
    )
  }
}