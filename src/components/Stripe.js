import React from "react"

const Stripe = (props) => {
  return (
    <div className='score-stripe' style={{ backgroundImage: `url(${props.backgroundImage})`, color: props.color }}>
      {props.children}
    </div>
  )
}

export default Stripe