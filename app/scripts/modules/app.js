import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Paige Keenan</h1>
        <h2>Front End Developer</h2>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }
})