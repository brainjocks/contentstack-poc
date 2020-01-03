import React from "react"

const PageColumn1FullWidth = (props) => {
  return (
    <div className='container full-width'>
      <div className='score-column1'>
        <div className="score-center">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PageColumn1FullWidth