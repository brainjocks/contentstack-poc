import React from "react"
import classnames from "classnames"

const ImageBtn = (props) => {
  return (
    <a className={classnames('score-image-button', props.styleName)} href={props.href}>
      <img src={props.src} alt={props.alt} className="image-responsive"/>
    </a>
  )
}

export default ImageBtn