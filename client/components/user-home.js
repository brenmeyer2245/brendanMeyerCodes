import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <h3>Welcome to Brendan Meyer Codes</h3>
    </div>
  )
}

/**
 * CONTAINER
 */

export default connect(null)(UserHome)
