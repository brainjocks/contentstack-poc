import React from "react"

const PageColumn4EqualInner = (props) => {
  return (
    <div className='container'>
      <div className='score-column2'>
        <div className="score-left">
          {props.children}
        </div>
        <div className="score-center">
          {props.children}
        </div>
        <div className="score-center2">
          {props.children}
        </div>
        <div className="score-right">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PageColumn4EqualInner

