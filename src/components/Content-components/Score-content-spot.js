import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const ContentSpot = (props) => {
  return (
    <div className={classnames('score-content-spot', props.styleName)}>
      {props.children}
    </div>
  )
}

ContentSpot.proptype = {
  children: PropTypes.node
}

export default ContentSpot