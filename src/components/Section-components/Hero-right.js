import React from 'react'
import PageColumn2Equal from '../Page-structures/score-column2-equal-page'
import Hero from '../Content-components/Heroes/Hero'

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
