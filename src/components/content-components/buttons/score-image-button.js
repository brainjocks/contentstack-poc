import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const ImageBtn = props => {
  return (
    <a
      className={classnames('score-image-button', props.styleName)}
      href={props.href}
    >
      <img src={props.src} alt={props.alt} className="image-responsive" />
    </a>
  )
}

ImageBtn.proptype = {
  styleName: PropTypes.string,
  src: PropTypes.string,
  href: PropTypes.string,
  alt: PropTypes.string,
}

export default ImageBtn
