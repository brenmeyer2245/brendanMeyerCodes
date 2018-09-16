import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <div>
        <h3 style={{color: 'white'}}>Welcome to Brendan Meyer Codes</h3>
      </div>
      <div>
        <svg>
          <ellipse cx="100" cy="80" rx="60" ry="80" fill="red" />
          <ellipse cx="110" cy="105" rx="65" ry="57" fill="" />
        </svg>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */

export default connect(null)(UserHome)
