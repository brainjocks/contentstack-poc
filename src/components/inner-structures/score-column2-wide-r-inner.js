import React from "react"

const PageColumn2WideRightInner = (props) => {
  return (
    <div className='score-column2'>
      <div className="score-left">
        {props.children}
      </div>
      <div className="score-right">
        {props.children}
      </div>
    </div>

  )
}

export default PageColumn2WideRightInner

