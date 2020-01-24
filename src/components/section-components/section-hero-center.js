import React from 'react'
import SectionHero from '../content-components/heroes/sectionHero'
import PageColumn3Wide from '../page-structures/score-column3-wide'

const SectionHeroCenter = props => {
  if (!props) {
    return null
  }
  return (
    <PageColumn3Wide
      center={
        <SectionHero
          styleName={props.styleName}
          h2={props.h2}
          h3={props.h3}
          body={props.body}
          children={props.children}
        />
      }
    />
  )
}
export default SectionHeroCenter
