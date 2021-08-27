import { Button } from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <>
        <Button variant="danger" onClick={this.props.handleMinus}> - </Button>{' '}
        <Button variant="success"> {this.props.order} </Button>{' '}
        <Button variant="warning" onClick={this.props.handlePlus}> + </Button>{' '}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "ADD_ORDER" }),
    handleMinus: () => dispatch({ type: "SUBSTRACT_ORDER" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)