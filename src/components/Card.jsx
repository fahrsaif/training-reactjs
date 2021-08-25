import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">{this.props.title}</h2>
            <img src={this.props.imgPath} alt="" className="img-thumbnail rounded-circle" style={{ width: "100%" }} />
            <p className="mt-3 text-center">{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}
