import React from ''
import PageColumn2Equal from '../page-structures/score-column2-equal-page'
import Hero from '../content-components/heroes/hero'

const HeroSection = () => {
  return <PageColumn2Equal left={<Hero />} right={<Hero />} />
}

export default HeroSection
