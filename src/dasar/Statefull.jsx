import React, { Component } from 'react'
import Stateless from './Stateless'
import Button from './components/Button'

export default class Statefull extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Traning React JS",
            nama: "Fahrul"
        }
    }

    submitHandler() {
        console.log('button clicked')
    }

    render() {
        return (
            <div>
                Statefull Component
                <p>{this.state.title}</p>
                <button onClick={this.submitHandler} >Submit</button>
                <Stateless job="Developer" />
                <Button>damn</Button>
            </div>
        )
    }
}
