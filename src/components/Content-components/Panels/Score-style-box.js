import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"


const StyleBox = (props) => {
  return (
    <div className={classnames('score-style-box', props.styleName)} style={{ backgroundImage: `url(${props.backgroundImage})`, color: props.color, backgroundColor: props.backgroundColor }}>
      {props.children}
    </div>
  )
}

StyleBox.proptype = {
  styleName: PropTypes.string,
  backgroundImage: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node
}

export default StyleBox