import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const BtnGroup = props => {
  return (
    <div className={classnames('score-button-group', props.styleName)}>
      {props.children}
    </div>
  )
}

BtnGroup.proptype = {
  styleName: PropTypes.string,
  children: PropTypes.node,
}

export default BtnGroup
