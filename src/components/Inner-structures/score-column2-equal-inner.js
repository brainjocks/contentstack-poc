import React from "react"
import classnames from "classnames"

const InnerColumn2Equal = (props) => {
  return (
    <div className={classnames('score-column2 equal', props.styleName)}>
      {props.children}
    </div>
  )
}

export default InnerColumn2Equal