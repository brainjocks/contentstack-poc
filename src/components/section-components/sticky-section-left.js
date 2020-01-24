import React from 'react'
import PageColumn2WideRightFullWidth from '../page-structures/score-column2-wide-r-full-width'
import SectionHero from '../content-components/heroes/sectionHero'

const StickySectionLeft = props => {
  if (!props) {
    return null
  }
  return (
    <PageColumn2WideRightFullWidth
      right={
        <SectionHero
          styleName={`sticky-header`}
          src={props.src}
          alt={props.alt}
          h2={props.h2}
          h3={props.h3}
          body={props.body}
          children={props.children}
        />
      }
      left={props.cards}
    />
  )
}
export default StickySectionLeft
