import React from "react"
import classnames from "classnames"

const BtnGroup = (props) => {
  return (
    <div className={classnames('score-button-group', props.styleName)}>
      {props.children}
    </div>
  )
}

export default BtnGroup