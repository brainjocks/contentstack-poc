import React from "react"

const PageColumn2WideRight = (props) => {
  return (
    <div className='container'>
      <div className='score-column2 wide-right'>
          {props.children}
      </div>
    </div>
  )
}

export default PageColumn2WideRight

