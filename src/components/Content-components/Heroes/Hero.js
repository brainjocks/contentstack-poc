import React from "react"
import classnames from "classnames"

const Hero = (props) => {
  return (
    <div className={classnames("score-hero", props.styleName)}>
      <div className='score-hero-image'>
        <img src={props.src} alt={props.alt}/>
      </div>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
      <div className='score-hero-body'>
        <p>
          {props.body}
        </p>
      </div>
      <div className='score-call-to-action'>
        {props.children}
      </div>
    </div>
  )
}

export default Hero