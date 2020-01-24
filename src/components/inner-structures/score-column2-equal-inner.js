import React from 'react'
import classnames from 'classnames'

const InnerColumn2Equal = props => {
  return (
    <div className={classnames('score-column2 equal', props.styleName)}>
      <div className="score-left">{props.left}</div>
      <div className="score-right">{props.right}</div>
    </div>
  )
}

export default InnerColumn2Equal
