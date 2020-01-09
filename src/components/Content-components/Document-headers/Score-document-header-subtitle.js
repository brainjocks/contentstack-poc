import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const ScoreDocumentHeaderSubtitle = (props) => {
  return (
    <div className={classnames('score-document-header-with-subtitle', props.styleName)}>
      <div className='score-header-image'>
        <img src={props.src} alt=""/>
      </div>
      <h1>{props.h1}</h1>
      <small>{props.subTitle}</small>
      <h2>{props.h2}</h2>
    </div>
  )
}

ScoreDocumentHeaderSubtitle.proptype = {
  styleName: PropTypes.string,
  src: PropTypes.string,
  h1: PropTypes.string,
  subTitle: PropTypes.string,
  h2: PropTypes.string
}

export default ScoreDocumentHeaderSubtitle