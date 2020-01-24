import React from 'react'
import PageColumn2Equal from '../page-structures/score-column2-equal-page'
import SectionHero from '../content-components/heroes/sectionHero'

const SectionHeroRight = props => {
  if (!props) {
    return null
  }
  return (
    <PageColumn2Equal
      left={
        <SectionHero
          src={props.src}
          alt={props.alt}
          h2={props.h2}
          h3={props.h3}
          body={props.body}
          children={props.children}
        />
      }
    />
  )
}
export default SectionHeroRight
