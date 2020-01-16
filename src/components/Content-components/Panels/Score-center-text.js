import React from 'react'
import PropTypes from 'prop-types'

const CenterText = props => {
  return <div className="score-center-text">{props.children}</div>
}

CenterText.proptype = {
  children: PropTypes.node,
}

export default CenterText
