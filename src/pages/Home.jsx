import React, { Component } from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'

export default class Home extends Component {
  render() {
    return (
      <>
        <Banner />
        <Services />
      </>
    )
  }
}
