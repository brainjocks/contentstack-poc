import React from "react"

const PageColumn2WideLeft = (props) => {
  return (
    <div className='container'>
      <div className='score-column2 wide-left'>
          {props.children}
      </div>
    </div>
  )
}

export default PageColumn2WideLeft