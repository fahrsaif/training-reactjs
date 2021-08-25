import React, { Component } from 'react'
import Card from './Card'

export default class Services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cardData: [
        {
          title: "Go-Food",
          imgPath: "gofood.jpg",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nihil perferendis laudantium omnis culpa excepturi."
        },
        {
          title: "GrabFood",
          imgPath: "grabfood.png",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nihil perferendis laudantium omnis culpa excepturi."
        },
        {
          title: "Shopee Food",
          imgPath: "shopeefood.jpg",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nihil perferendis laudantium omnis culpa excepturi."
        },
      ]
    }
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <h1 className="text-center">Our Services</h1>
          <div className="row mt-4">
            {this.state.cardData.map(data => {
              return (
                <Card
                  title={data.title}
                  imgPath={data.imgPath}
                  text={data.text}
                />
              )
            })}
          </div>
        </div>
      </>
    )
  }
}
