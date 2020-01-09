import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const SectionHero = (props) => {
  return (
    <div className={classnames('score-section-hero', props.styleName)}>
      <div className='score-hero-image'>
        <img src={props.src} alt={props.alt}/>
      </div>
      <h2>{props.h2}</h2>
      <h3>{props.h3}</h3>
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

SectionHero.proptype = {
  styleName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  h2: PropTypes.string,
  h3: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node
}

export default SectionHero