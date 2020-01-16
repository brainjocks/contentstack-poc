import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const CompositeBtn = props => {
  return (
    <a
      className={classnames('score-composite-link', props.styleName)}
      href={props.href}
    >
      <span>{props.text}</span>
    </a>
  )
}

CompositeBtn.proptype = {
  styleName: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
}

export default CompositeBtn
