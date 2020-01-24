import React from 'react'
import PageColumn2Equal from '../page-structures/score-column2-equal-page'
import Hero from '../content-components/heroes/hero'

const HeroLeft = props => {
  if (!props) {
    return null
  }
  return (
    <PageColumn2Equal
      left={
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
export default HeroLeft
