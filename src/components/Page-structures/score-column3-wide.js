import React from "react"

const PageColumn3Wide = (props) => {
  return (
    <div className='container'>
      <div className='score-column3 wide-middle'>
        {props.children}
      </div>
    </div>
  )
}

export default PageColumn3Wide

