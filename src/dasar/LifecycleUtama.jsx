import React, { Component } from 'react'

export default class LifecycleUtama extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nilai: 5
    }
  }

  componentDidMount() {
    document.title = `title change : ${this.state.nilai}`
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = `title change : ${this.state.nilai}`
  }

  componentWillUnmount() {
    document.title = "Inixindo"
  }

  onUpdate = () => {
    this.setState({
      nilai: this.state.nilai + 1
    })
  }

  render() {
    return (
      <div>
        <p>Nilai saat ini adalah : {this.state.nilai}</p>
        <button onClick={this.onUpdate}>Update Nilai</button>
      </div>
    )
  }
}
