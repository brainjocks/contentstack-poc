import React from 'react'

const InnerColumn3Wide = props => {
  return (
    <div className="score-column3 wide-middle">
      <div className="score-left">{props.left}</div>
      <div className="score-center">{props.center}</div>
      <div className="score-right">{props.right}</div>
    </div>
  )
}

export default InnerColumn3Wide
