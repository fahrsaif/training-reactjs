import React, { Component } from 'react'

export default class Lifecycle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 1
    }
    console.log("constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    console.log("render")
    return (
      <div>
        <button>Component Button {this.state.count}</button>
        <hr />
        <p>Total Order</p>
      </div>
    )
  }
}
