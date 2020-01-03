import React from "react"
import classnames from "classnames"

const Btn = (props) => {
  return (
    <a className={classnames('score-button', props.styleName)} href={props.src}>
      {props.text}
    </a>
  )
}

export default Btn