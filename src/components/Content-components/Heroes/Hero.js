import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Hero = props => {
  if (!props) {
    return null
  }
  return (
    <div className={classnames('score-hero', props.styleName)}>
      <div className="score-hero-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
      <div className="score-hero-body">
        <p>{props.body}</p>
      </div>
      <div className="score-call-to-action">{props.children}</div>
    </div>
  )
}

Hero.proptype = {
  styleName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
}

export default Hero
