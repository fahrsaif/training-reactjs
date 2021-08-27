import React, { Component } from 'react'
import { Card, Breadcrumb } from 'react-bootstrap'
import CardProduct from './CardProduct'
import { connect } from 'react-redux'

class Product extends Component {
  render() {
    return (
      <div>
        <Card>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>Cart : {this.props.order}</Breadcrumb.Item>
          </Breadcrumb>
        </Card>
        <CardProduct />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  }
}

export default connect(mapStateToProps)(Product)