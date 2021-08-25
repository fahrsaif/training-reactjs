import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Redirect to="/" />
        </Switch>
      </>
    )
  }
}