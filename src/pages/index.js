import React from "react"
import Stripe from "../components/Stripe"
import background from "../img/holiday-hero.jpg"
import heroImage from "../img/turtle-on-back-900.png"
import heroImageSectionTwo from "../img/dogs-on-motocycle-900.png"
import "../scss/main.scss"
import Layout from "../components/Layout"
import PageColumn2Equal from "../components/Page-structures/score-column2-equal-page"
import Hero from "../components/Content-components/Heroes/Hero"
import PageColumn3Wide from "../components/Page-structures/score-column3-wide"
import SectionHero from "../components/Content-components/Heroes/SectionHero"
import PageColumn1FullWidth from "../components/Page-structures/score-column1-full-width"
import InnerColumn2WideLeft from "../components/Inner-structures/score-column2-wide-l-inner"
import StyleBox from "../components/Content-components/Panels/Score-style-box"
import Highlight from "../components/Content-components/Features/Highlights"
import InnerColumn2WideRight from "../components/Inner-structures/score-column2-wide-r-inner"
import PageColumn1 from "../components/Page-structures/score-column1-page"
import CenterText from "../components/Content-components/Panels/Score-center-text"
import InnerColumn2Equal from "../components/Inner-structures/score-column2-equal-inner"
import InnerColumn1 from "../components/Inner-structures/score-column1-inner"
import Btn from "../components/Content-components/Buttons/Score-button"
import InnerColumn3Wide from "../components/Inner-structures/score-column3-wide-inner"

let heroStripeColor = "#FFFFFF"
let stripeColor = "#FFFFFF"
let sectionColor = "#0C2F41"
let section2Color = "#EEEEEE"
export default props =>
  (
    <Layout>
      <Stripe backgroundImage={background} color={heroStripeColor}>
        <PageColumn2Equal>
          <div className='score-left'>
          </div>
          <div className='score-right'>
            <Hero h1={`Hello World`} h2={`H2 text`}
                  body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}>
              <Btn text={`Read the sage story`} src={`#`} styleName={`over-dark`}/>
            </Hero>
          </div>
        </PageColumn2Equal>
      </Stripe>
      <Stripe backgroundColor={sectionColor} color={stripeColor}>
        <PageColumn3Wide>
          <div className='score-left'></div>
          <div className='score-center'>
            <SectionHero styleName={`left-energy-bar active`} h3={`Section Hero`} body={`What makes Brainjocks unique? We don't just build great
              experiences, we partner with our clients and enable them to make the most of their
              platform and digital assets. Our approach provides the architecture and the
              operational transformation needed for your team to be efficient, empowered and most
              importantly, effective.`} />
          </div>
          <div className='score-right'></div>
        </PageColumn3Wide>
      </Stripe>
      <Stripe styleName={`sticky-parent`} backgroundColor={section2Color}>
        <PageColumn1FullWidth>
          <InnerColumn2WideLeft>
            <div className='score-left'>
              <SectionHero styleName={`sticky-header`} h3={`Section Hero`} body={`What makes Brainjocks unique? We don't just build great
              experiences, we partner with our clients and enable them to make the most of their
              platform and digital assets. Our approach provides the architecture and the
              operational transformation needed for your team to be efficient, empowered and most
              importantly, effective.`} src={heroImage} />
            </div>
            <div className='score-right'>
              <StyleBox styleName={`white`}>
                <Highlight>
                </Highlight>
              </StyleBox>
            </div>
          </InnerColumn2WideLeft>
        </PageColumn1FullWidth>
      </Stripe>
      <Stripe styleName={`sticky-parent`} backgroundColor={section2Color}>
        <PageColumn1FullWidth>
          <InnerColumn2WideRight>
            <div className='score-left'>
              <StyleBox styleName={`white`}>
                <Highlight>
                </Highlight>
              </StyleBox>
            </div>
            <div className='score-right'>
              <SectionHero styleName={`sticky-header`} h3={`Section Hero`} body={`What makes Brainjocks unique? We don't just build great
              experiences, we partner with our clients and enable them to make the most of their
              platform and digital assets. Our approach provides the architecture and the
              operational transformation needed for your team to be efficient, empowered and most
              importantly, effective.`} src={heroImageSectionTwo} />
            </div>
          </InnerColumn2WideRight>
        </PageColumn1FullWidth>
      </Stripe>
      <Stripe backgroundColor={sectionColor} color={stripeColor}>
        <PageColumn1>
          <CenterText>
            <SectionHero h2={`Services`} body={`Brainjocks innovation comes through an array of solution services.`} />
          </CenterText>
          <InnerColumn2Equal styleName={`wide-gutters`}>
            <div className="score-left">
              <Highlight styleName={`left-energy-bar active`} heading={`MarTech Consulting`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`} />
            </div>
            <div className="score-right">
              <Highlight styleName={`left-energy-bar active`} heading={`Software development`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`} />
            </div>
          </InnerColumn2Equal>
          <InnerColumn2Equal styleName={`wide-gutters`}>
            <div className="score-left">
              <Highlight styleName={`left-energy-bar active`} heading={`MarTech Consulting`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`} />
            </div>
            <div className="score-right">
              <Highlight styleName={`left-energy-bar active`} heading={`Software development`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`} />
            </div>
          </InnerColumn2Equal>
          <InnerColumn1>
            <CenterText>
              <Btn text={`View all Services`} src={`#`} styleName={`over-dark`} />
            </CenterText>
          </InnerColumn1>
        </PageColumn1>
      </Stripe>
      <Stripe>
        <PageColumn1>
          <InnerColumn3Wide>
            <CenterText>
              <SectionHero h2={`Brands We Serve`} body={`We enjoy creating innovations for companies of all sizes across the globe. Each of these brands represents relationships we value and partnerships made through collaboration.`} />
            </CenterText>
          </InnerColumn3Wide>
        </PageColumn1>
      </Stripe>

    </Layout>
  )