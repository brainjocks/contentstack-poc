import React from 'react'

const PageColumn1 = props => {
  if (!props) {
    return null
  }
  return (
    <div className="container">
      <div className="score-column1">
        <div className="score-center">{props.children}</div>
      </div>
    </div>
  )
}

export default PageColumn1
