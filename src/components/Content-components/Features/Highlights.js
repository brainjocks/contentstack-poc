import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Highlight = props => {
  return (
    <div className={classnames('score-highlight', props.styleName)}>
      <img src={props.src} alt={props.alt} />
      <div className="caption">
        <h2>{props.heading}</h2>
        <div className="score-highlight-body">
          <p>{props.body}</p>
        </div>
        <div className="score-call-to-action">{props.children}</div>
      </div>
    </div>
  )
}

Highlight.proptype = {
  styleName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  heading: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
}

export default Highlight
