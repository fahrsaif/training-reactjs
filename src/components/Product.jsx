import React, { Component } from 'react'
import { Card, Breadcrumb } from 'react-bootstrap'
import CardProduct from './CardProduct'

export default class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: 0
    }
  }

  handleCounterChange(newValue) {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <div>
        <Card>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>Cart : {this.state.order}</Breadcrumb.Item>
          </Breadcrumb>
        </Card>
        <CardProduct order={this.state.order} onCounterChange={(value) => this.handleCounterChange(value)} />
      </div>
    )
  }
}
