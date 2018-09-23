import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {UserHome} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    console.log("Welcome");
  }

  render() {

    return (
      <Switch>
        <Route path="/" component={UserHome} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */

export default Routes

