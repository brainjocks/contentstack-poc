import React from "react"

const ScoreDocumentHeaderSubtitle = (props) => {
  return (
    <div className="score-document-header-with-subtitle (custom class)">
      <div className='score-header-image'>
        <img src={props.src} alt=""/>
      </div>
      <h1>{props.h1}</h1>
      <small>{props.subTitle}</small>
      <h2>{props.h2}</h2>
    </div>
  )
}

export default ScoreDocumentHeaderSubtitle