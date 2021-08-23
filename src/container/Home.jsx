import React, { Component } from 'react'
import Stateless from '../dasar/Stateless';
import Statefull from "../dasar/Statefull";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Statefull />
                <Stateless />
            </div>
        )
    }
}
