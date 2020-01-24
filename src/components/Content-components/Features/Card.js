import React from 'react'
import StyleBox from '../../Content-components/Panels/Score-style-box'
import Highlight from '../../Content-components/Features/Highlights'
import Btn from '../../Content-components/Buttons/Score-button'
import BtnGroup from '../../Content-components/Buttons/Score-button-group'
import PropTypes from 'prop-types'

const Card = props => {
  const item = props.item.title_body
    ? props.item.title_body
    : props.item.full_highlight
    ? props.item.full_highlight
    : null

  if (!props || !item) {
    return null
  }

  return (
    <StyleBox styleName={`white cover`}>
      <Highlight
        src={item.image && item.image.url}
        alt={item.image && item.image.description}
        heading={item.title}
        body={item.body}
      >
        <BtnGroup>
          <Btn
            href={item.button_1_link && item.button_1_link.href}
            text={item.button_1_text}
          />
          <Btn
            styleName={`hollow`}
            href={item.button_2_link && item.button_2_link.href}
            text={item.button_2_text}
          />
        </BtnGroup>
      </Highlight>
    </StyleBox>
  )
}

Card.proptype = {
  item: PropTypes.node,
}

export default Card
