import React from "react"
import classnames from "classnames"


const StyleBox = (props) => {
  return (
    <div className={classnames('score-style-box', props.styleName)}>
      {props.children}
    </div>
  )
}

export default StyleBox