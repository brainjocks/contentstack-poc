import React from "react"
import SectionHero from "../Content-components/Heroes/SectionHero"
import PageColumn3Wide from "../Page-structures/score-column3-wide"

const SectionHeroCenter = (props) => {
  return (
    <PageColumn3Wide
      center={
        <SectionHero styleName={props.styleName}
                     h2={props.h2}
                     h3={props.h3}
                     body={props.body}
                     children={props.children}/>}
    />
  )
}
export default SectionHeroCenter