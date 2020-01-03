import React from "react"

const InnerColumn1 = (props) => {
  return (
      <div className='score-column1'>
        <div className="score-center">
          {props.children}
        </div>
      </div>
  )
}

export default InnerColumn1