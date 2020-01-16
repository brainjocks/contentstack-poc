import React from 'react'

const InnerColumn3Equal = props => {
  return (
    <div className="score-column3 equal">
      <div className="score-left">{props.left}</div>
      <div className="score-center">{props.center}</div>
      <div className="score-right">{props.right}</div>
    </div>
  )
}

export default InnerColumn3Equal
