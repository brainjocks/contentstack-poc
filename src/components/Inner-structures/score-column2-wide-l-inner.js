import React from "react"

const InnerColumn2WideLeft = (props) => {
  return (
    <div className='score-column2 wide-left'>
      <div className="score-left">{props.left}</div>
      <div className="score-right">{props.right}</div>
    </div>

  )
}

export default InnerColumn2WideLeft