import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>

    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))