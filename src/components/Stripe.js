import React from "react"
import classnames from 'classnames';

const Stripe = (props) => {
  return (
    <div className={classnames('score-stripe', props.styleName)} style={{ backgroundImage: `url(${props.backgroundImage})`, color: props.color, backgroundColor: props.backgroundColor }}>
      {props.children}
    </div>
  )
}

export default Stripe