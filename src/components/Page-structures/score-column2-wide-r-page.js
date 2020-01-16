import React from 'react'

const PageColumn2WideRight = props => {
  return (
    <div className="container">
      <div className="score-column2 wide-right">
        <div className="score-left">{props.left}</div>
        <div className="score-right">{props.right}</div>
      </div>
    </div>
  )
}

export default PageColumn2WideRight
