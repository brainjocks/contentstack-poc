import React from "react"

const PageColumn2EqualFullWidth = (props) => {
  return (
    <div className='container full-width'>
      <div className='score-column2 equal'>
        <div className="score-left">{props.left}</div>
        <div className="score-right">{props.right}</div>
      </div>
    </div>
  )
}

export default PageColumn2EqualFullWidth