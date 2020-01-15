import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const Stripe = props => {
  return (
    <section
      className={classnames("score-stripe", props.styleName)}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.children}
    </section>
  )
}
Stripe.proptype = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  styleName: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
}

export default Stripe
