import React from 'react'
import StyleBox from '../../Content-components/Panels/Score-style-box'
import Highlight from '../../Content-components/Features/Highlights'
import Btn from '../../Content-components/Buttons/Score-button'
import BtnGroup from '../../Content-components/Buttons/Score-button-group'
import PropTypes from 'prop-types'

const Card = props => {
  if (!props) {
    return null
  }

  return (
    <StyleBox styleName={`white cover`}>
      <Highlight
        src={props.item.image && props.item.image.url}
        alt={props.item.image && props.item.image.description}
        heading={props.item.title}
        body={props.item.body}
      >
        <BtnGroup>
          <Btn
            href={props.item.button_1_link && props.item.button_1_link.href}
            text={props.item.button_1_text}
          />
          <Btn
            styleName={`hollow`}
            href={props.item.button_2_link && props.item.button_2_link.href}
            text={props.item.button_2_text}
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
