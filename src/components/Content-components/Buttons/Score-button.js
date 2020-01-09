import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const Btn = (props) => {
  return (
    <a className={classnames('score-button', props.styleName)} href={props.href}>
      {props.text}
    </a>
  )
}

Btn.proptype = {
  styleName: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string
}

export default Btn