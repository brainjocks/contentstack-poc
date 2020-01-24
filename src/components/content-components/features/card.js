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
        <BtnGroup
          children={
            item.call_to_action &&
            item.call_to_action.button &&
            item.call_to_action.button.map((innerItem, index) => {
              return (
                <Btn
                  key={index}
                  styleName={innerItem.style}
                  href={innerItem.link && innerItem.link.href}
                  text={innerItem.text}
                />
              )
            })
          }
        />
      </Highlight>
    </StyleBox>
  )
}

Card.proptype = {
  item: PropTypes.node,
}

export default Card
