import React from 'react'

const PageColumn2WideLeftFullWidth = props => {
  return (
    <div className="container full-width">
      <div className="score-column2 wide-left">
        <div className="score-left">{props.left}</div>
        <div className="score-right">{props.right}</div>
      </div>
    </div>
  )
}

export default PageColumn2WideLeftFullWidth
