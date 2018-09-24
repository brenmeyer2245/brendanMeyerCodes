import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {UserHome} from './components'
import SingleProject from './components/SingleProject';
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
        <Route exact path="/" component={UserHome} />
        <Route path="/project/:projectId" component={SingleProject} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */

export default Routes

