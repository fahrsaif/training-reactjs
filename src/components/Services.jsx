import React, { Component } from 'react'
// import Card from './Card'
import data from '../utils/data'
import { Fade } from 'react-reveal'

export default class Services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cardData: data
    }
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <h1 className="text-center">Our Services</h1>
          <div className="row mt-4">
            {this.state.cardData.map((data, index) => {
              return (
                <Fade key={index} delay={data.delay}>
                  {/* <Card
                    title={data.title}
                    imgPath={data.imgPath}
                    text={data.text}
                  /> */}
                  <div className="col-md-4 mt-3">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="text-center">{data.title}</h2>
                        <img src={data.imgPath} alt="" className="img-thumbnail rounded-circle" style={{ width: "100%" }} />
                        <p className="mt-3 text-center">{data.text}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}
