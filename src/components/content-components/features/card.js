import React from 'react'
import renderHTML from 'react-render-html'

import StyleBox from '../panels/score-style-box'
import Highlight from './highlights'
import Btn from '../buttons/score-button'
import BtnGroup from '../buttons/score-button-group'
import PropTypes from 'prop-types'

const Card = props => {
  const item = props.item.title_body
    ? props.item.title_body
    : props.item.full_highlight
    ? props.item.full_highlight
    : props.item.background_body
    ? props.item.background_body
    : null

  if (!props || !item) {
    return null
  }

  return (
    <StyleBox
      styleName={`white cover`}
      backgroundImage={item.background && item.background.url}
    >
      <Highlight
        src={item.image && item.image.url}
        alt={item.image && item.image.description}
        heading={item.title}
        body={renderHTML(item.body)}
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
