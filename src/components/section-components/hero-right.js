import React from 'react'
import PageColumn2Equal from '../page-structures/score-column2-equal-page'
import Hero from '../content-components/heroes/hero'

const HeroRight = props => {
  if (!props) {
    return null
  }
  return (
    <PageColumn2Equal
      right={
        <Hero
          h1={props.h1}
          h2={props.h2}
          body={props.body}
          children={props.children}
        />
      }
    />
  )
}
export default HeroRight
