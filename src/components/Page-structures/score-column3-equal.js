import React from "react"
import classnames from "classnames"

const PageColumn3Equal = (props) => {
  return (
    <div className='container'>
      <div className={classnames('score-column3 equal', props.styleName)}>
          {props.children}
      </div>
    </div>
  )
}

export default PageColumn3Equal

