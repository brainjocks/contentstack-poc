import React from "react"

const PageColumn1Inner = (props) => {
  return (
      <div className='score-column1'>
        <div className="score-center">
          {props.children}
        </div>
      </div>
  )
}

export default PageColumn1Inner