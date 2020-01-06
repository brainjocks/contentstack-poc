import React from "react"
import classnames from "classnames"

const CompositeBtn = (props) => {
  return (
    <a className={classnames("score-composite-link", props.styleName)} href={props.href}>
      <span>
        {props.text}
      </span>
    </a>
  )
}

export default CompositeBtn