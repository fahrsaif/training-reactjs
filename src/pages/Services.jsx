import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateProduct from '../components/api/CreateProduct'

class Services extends Component {
  render() {
    return (
      <div>
        <CreateProduct />
        <hr />
        <h3>{this.props.order}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.totalOrder
})

export default connect(mapStateToProps)(Services)