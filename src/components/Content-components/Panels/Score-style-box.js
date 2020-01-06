import React from "react"
import classnames from "classnames"


const StyleBox = (props) => {
  return (
    <div className={classnames('score-style-box', props.styleName)} style={{ backgroundImage: `url(${props.backgroundImage})`, color: props.color, backgroundColor: props.backgroundColor }}>
      {props.children}
    </div>
  )
}

export default StyleBox