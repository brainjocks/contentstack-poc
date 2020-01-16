import React from 'react'
import classnames from 'classnames'

const PageColumn3Equal = props => {
  return (
    <div className="container">
      <div className={classnames('score-column3 equal', props.styleName)}>
        <div className="score-left">{props.left}</div>
        <div className="score-center">{props.center}</div>
        <div className="score-right">{props.right}</div>
      </div>
    </div>
  )
}

export default PageColumn3Equal
