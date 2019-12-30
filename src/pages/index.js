import React from "react"
import Stripe from "../components/Stripe"
import Background from "../img/holiday-hero.jpg"
import "../scss/main.scss"
import Layout from "../components/Layout"
import PageColumn2Equal from "../components/page-structures/score-column2-equal-page"
import Hero from "../components/content-components/Heroes/Hero"

let stripeColor = "#FFFFFF";

export default props =>
  (
    <Layout>
      <Stripe backgroundImage={Background} color={stripeColor}>
        <PageColumn2Equal>
          <div className='score-left'>
          </div>
          <div className='score-right'>
            <Hero h1={`Hello World`} h2={`H2 text`}
                  body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}>
              <a href="https://brainjocks.com/client-stories/sage" className='score-button over-dark'>Read the Sage
                Story</a>
            </Hero>
          </div>
        </PageColumn2Equal>
      </Stripe>
    </Layout>
  )