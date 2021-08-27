import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Services from './pages/Services'
import ReactHooks from './pages/ReactHooks'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/hooks" exact>
            <ReactHooks />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
    )
  }
}