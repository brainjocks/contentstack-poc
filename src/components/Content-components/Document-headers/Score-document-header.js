import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ScoreDocumentHeader = props => {
  return (
    <div className={classnames('score-document-header', props.styleName)}>
      <div className="score-header-image">
        <img src={props.src} alt="" />
      </div>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
    </div>
  )
}

ScoreDocumentHeader.proptype = {
  styleName: PropTypes.string,
  src: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
}

export default ScoreDocumentHeader
