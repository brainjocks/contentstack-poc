import React from 'react'

const InnerColumn4Equal = props => {
  return (
    <div className="score-column4 equal">
      <div className="score-left">{props.left}</div>
      <div className="score-center">{props.center}</div>
      <div className="score-center2">{props.center2}</div>
      <div className="score-right">{props.right}</div>
    </div>
  )
}

export default InnerColumn4Equal
