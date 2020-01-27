import React from 'react'
import Btn from '../buttons/score-button'
import ImageBtn from '../buttons/score-image-button'
import PropTypes from 'prop-types'

const CardBtn = props => {
  if (!props || !props.action) {
    return null
  }

  const item = props.action.button
    ? props.action.button
    : props.action.image_button
    ? props.action.image_button
    : null

  if (!item) {
    return null
  }

  if (props.action.button)
    return (
      <Btn
        styleName={item.style}
        href={item.link && item.link.href}
        text={item.text}
      />
    )

  if (props.action.image_button)
    return (
      <ImageBtn
        styleName={item.style}
        href={item.link && item.link.href}
        src={item.image && item.image.url}
        alt={item.image && item.image.description}
      />
    )
}

CardBtn.proptype = {
  action: PropTypes.node,
}

export default CardBtn
