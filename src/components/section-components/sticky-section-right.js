import React from 'react'
import SectionHero from '../content-components/heroes/sectionHero'
import PageColumn2WideLeftFullWidth from '../page-structures/score-column2-wide-l-full-width'

const StickySectionRight = props => {
  if (!props) {
    return null
  }
  return (
    <PageColumn2WideLeftFullWidth
      left={
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
      right={props.cards}
    />
  )
}
export default StickySectionRight
