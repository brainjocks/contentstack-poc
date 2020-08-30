import React from "react"
import "../src/css/main.css"
import Stripe from "../src/components/stripe"
import PageColumn1 from "../src/components/page-structures/score-column1-page"
import PageColumn2Equal from "../src/components/page-structures/score-column2-equal-page"
import Btn from "../src/components/content-components/buttons/score-button"
import SectionHero from "../src/components/content-components/heroes/sectionHero"

export default {
  title: "Section Hero",
  component: SectionHero,
}

export const Default = () => (
  <Stripe
    children={
      <PageColumn1
        children={
          <SectionHero
            h2={`Test Title Area`}
            h3={`Subtitle h3`}
            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Neque convallis a cras semper auctor neque vitae tempus. Massa vitae tortor condimentum lacinia quis. Vulputate eu scelerisque felis imperdiet. Volutpat odio facilisis mauris sit. Non tellus orci ac auctor augue. Dolor purus non enim praesent elementum facilisis. Accumsan lacus vel facilisis volutpat est velit egestas dui. Tortor consequat id porta nibh venenatis cras. Mi proin sed libero enim sed. Viverra orci sagittis eu volutpat odio facilisis mauris.`}
            src={"https://picsum.photos/300/300"}
            children={<Btn text={`Read More button`} styleName={`hollow`} />}
          />
        }
      />
    }
  />
)

export const TwoColumnEqual = () => (
  <Stripe
    children={
      <PageColumn2Equal
        left={
          <SectionHero
            h2={`Test Title Area`}
            h3={`Subtitle h3`}
            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Neque convallis a cras semper auctor neque vitae tempus. Massa vitae tortor condimentum lacinia quis. Vulputate eu scelerisque felis imperdiet. Volutpat odio facilisis mauris sit. Non tellus orci ac auctor augue. Dolor purus non enim praesent elementum facilisis. Accumsan lacus vel facilisis volutpat est velit egestas dui. Tortor consequat id porta nibh venenatis cras. Mi proin sed libero enim sed. Viverra orci sagittis eu volutpat odio facilisis mauris.`}
            src={"https://picsum.photos/300/300"}
            children={<Btn text={`Read More button`} styleName={`hollow`} />}
          />
        }
        right={
          <SectionHero
            h2={`Test Title Area`}
            h3={`Subtitle h3`}
            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Neque convallis a cras semper auctor neque vitae tempus. Massa vitae tortor condimentum lacinia quis. Vulputate eu scelerisque felis imperdiet. Volutpat odio facilisis mauris sit. Non tellus orci ac auctor augue. Dolor purus non enim praesent elementum facilisis. Accumsan lacus vel facilisis volutpat est velit egestas dui. Tortor consequat id porta nibh venenatis cras. Mi proin sed libero enim sed. Viverra orci sagittis eu volutpat odio facilisis mauris.`}
            src={"https://picsum.photos/300/300"}
            children={<Btn text={`Read More button`} styleName={`hollow`} />}
          />
        }
      />
    }
  />
)
