import React from "react"
import Stripe from "../components/Stripe"
import background from "../img/holiday-hero.jpg"
import heroImage from "../img/turtle-on-back-900.png"
import heroImageSectionTwo from "../img/dogs-on-motocycle-900.png"
import pressbox from "../img/pressbox-tile-image.jpg"
import brainjuice from "../img/brainjuice-tile-image.jpg"
import jocks from "../img/jocks-to-the-core-tile-image.jpg"
import lastSectionHero from "../img/careers-shoe-background.jpg"
import "../scss/main.scss"
import Layout from "../components/Layout"
import PageColumn2Equal from "../components/Page-structures/score-column2-equal-page"
import Hero from "../components/Content-components/Heroes/Hero"
import PageColumn3Wide from "../components/Page-structures/score-column3-wide"
import SectionHero from "../components/Content-components/Heroes/SectionHero"
import customerQuote from "../img/quotation-mark.png"
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
import sage from "../img/sage_logo.png"
import procter from "../img/procter_and_gamble-logo.png"
import BtnGroup from "../components/Content-components/Buttons/Score-button-group"
import PageColumn3Equal from "../components/Page-structures/score-column3-equal"
import Head from "../components/Head"

let heroStripeColor = "#FFFFFF"
let stripeColor = "#FFFFFF"
let sectionColor = "#0C2F41"
let section2Color = "#EEEEEE"
const cards = [
  {
    title: "MarTech Enablement",
    body: "Living in a tech focused world? No need to treat marketing as a side kick! Get your campaigns rolling with a seamlessly integrated MarTech solution from Brainjocks. With our enablement approach, your content assemblers and marketers are empowered to drive campaign after campaign, all the way to success!",
  },
  {
    img: procter,
    imgAlt: "procter gamble logo",
    title: "Deliver Content at Scale",
    body: "Learn how Brainjocks drastically improved the content authoring experience for Procter &amp; Gamble and allowed them to deliver global content at scale, quickly and efficiently.",
    buttonText: "Learn More",
    buttonLInk: "https://brainjocks.com",
    buttonText2: "Find out More",
    buttonLInk2: "https://brainjocks.com",
  }, {
    background: customerQuote,
    body: "Brainjocks has addressed a number of marketing pain points. Content teams can now create, share and repurpose content globally — saving us time, money and frustration.",
  },
  {
    img: sage,
    imgAlt: "sage gamble logo",
    title: "Silos Block Innovation and Slow Delivery—So Tear Them Down!",
    body: "Brainjocks worked with Sage to define a seamless, cross functional operational model. The creation of a mastersite of core content also accelerated delivery while also facilitating consistency in brand and messaging across the markets. Read more about this \"follow the sun\" approach to digital transformation.",
  },
]
export default (props) =>
  (
    <Layout>
      <Head title="Home"/>
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
              importantly, effective.`}/>
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
              importantly, effective.`} src={heroImage}/>
            </div>
            <div className='score-right'>
              {cards.map((item, index) => {
                return (
                  <StyleBox styleName={`white cover`} backgroundImage={item.background} key={index}>
                    <Highlight src={item.img} alt={item.imgAlt} heading={item.title} body={item.body}>
                      <BtnGroup>
                        <Btn href={item.buttonLink} text={item.buttonText}/>
                        <Btn styleName={`hollow`} href={item.buttonLink2} text={item.buttonText2}/>
                      </BtnGroup>
                    </Highlight>
                  </StyleBox>
                )
              })}
            </div>
          </InnerColumn2WideLeft>
        </PageColumn1FullWidth>
      </Stripe>
      <Stripe styleName={`sticky-parent`} backgroundColor={section2Color}>
        <PageColumn1FullWidth>
          <InnerColumn2WideRight>
            <div className='score-left'>
              {cards.map((item, index) => {
                return (
                  <StyleBox styleName={`white cover`} backgroundImage={item.background} key={index}>
                    <Highlight src={item.img} alt={item.imgAlt} heading={item.title} body={item.body}>
                      <BtnGroup>
                        <Btn href={item.buttonLink} text={item.buttonText}/>
                        <Btn styleName={`hollow`} href={item.buttonLink2} text={item.buttonText2}/>
                      </BtnGroup>
                    </Highlight>
                  </StyleBox>
                )
              })}
            </div>
            <div className='score-right'>
              <SectionHero styleName={`sticky-header`} h3={`Section Hero`} body={`What makes Brainjocks unique? We don't just build great
              experiences, we partner with our clients and enable them to make the most of their
              platform and digital assets. Our approach provides the architecture and the
              operational transformation needed for your team to be efficient, empowered and most
              importantly, effective.`} src={heroImageSectionTwo}/>
            </div>
          </InnerColumn2WideRight>
        </PageColumn1FullWidth>
      </Stripe>
      <Stripe backgroundColor={sectionColor} color={stripeColor}>
        <PageColumn1>
          <CenterText>
            <SectionHero h2={`Services`} body={`Brainjocks innovation comes through an array of solution services.`}/>
          </CenterText>
          <InnerColumn2Equal styleName={`wide-gutters`}>
            <div className="score-left">
              <Highlight styleName={`left-energy-bar active`} heading={`MarTech Consulting`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`}/>
            </div>
            <div className="score-right">
              <Highlight styleName={`left-energy-bar active`} heading={`Software development`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`}/>
            </div>
          </InnerColumn2Equal>
          <InnerColumn2Equal styleName={`wide-gutters`}>
            <div className="score-left">
              <Highlight styleName={`left-energy-bar active`} heading={`MarTech Consulting`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`}/>
            </div>
            <div className="score-right">
              <Highlight styleName={`left-energy-bar active`} heading={`Software development`}
                         body={`Working together to understand your business, stated goals, company roadmap and operational model to select right-fit solutions.`}/>
            </div>
          </InnerColumn2Equal>
          <InnerColumn1>
            <CenterText>
              <Btn text={`View all Services`} src={`#`} styleName={`over-dark`}/>
            </CenterText>
          </InnerColumn1>
        </PageColumn1>
      </Stripe>
      <Stripe>
        <PageColumn1>
          <InnerColumn3Wide>
            <div className="score-left">
            </div>
            <div className="score-center">
              <CenterText>
                <SectionHero h2={`Brands We Serve`}
                             body={`We enjoy creating innovations for companies of all sizes across the globe. Each of these brands represents relationships we value and partnerships made through collaboration.`}/>
              </CenterText>
            </div>
            <div className="score-right">
            </div>
          </InnerColumn3Wide>
        </PageColumn1>
      </Stripe>
      <Stripe backgroundColor={section2Color}>
        <PageColumn3Wide>
          <div className="score-left">
          </div>
          <div className="score-center">
            <CenterText>
              <SectionHero h2={`Jocks out and About`}
                           body={`There’s a lot going on and we have a lot to share. Check out our latest news and industry expert blogs.`}/>
            </CenterText>
          </div>
          <div className="score-right">
          </div>
        </PageColumn3Wide>
        <PageColumn3Equal styleName={`flex`}>
          <div className="score-left">
            <Highlight styleName={`news`} alt={`press box logo image`} src={pressbox}
                       heading={`Brainjocks Unveils Innovative Content Localization Approach at Symposium`}
                       body={`Today, Brainjocks announces its annual sponsorship of Sitecore Symposium in Orlando, where they will also unveil an innovative content localization approach. Symposium is being...`}>
              <Btn styleName={`btn-link`} text={`read more`} href={`#`}/>
            </Highlight>
          </div>
          <div className="score-center">
            <Highlight styleName={`news`} alt={`brainjuice logo image`} src={brainjuice}
                       heading={`V is for Voice of the Customer`}
                       body={`Establishing a VoC program will help you ensure that you are meeting customer needs and expectations. From a definition standpoint, when we talk about Voice of the Customer...`}>
              <Btn styleName={`btn-link`} text={`read more`} href={`#`}/>
            </Highlight>
          </div>
          <div className="score-right">
            <Highlight styleName={`news`} alt={`jocks to the core logo image`} src={jocks}
                       heading={`7 Steps to create lower environments with Sitecore Commerce`}
                       body={`When dealing with live websites, it is desired to have lower environments that mirror production as closely as possible. Why?`}>
              <Btn styleName={`btn-link`} text={`read more`} href={`#`}/>
            </Highlight>
          </div>
        </PageColumn3Equal>
      </Stripe>
      <Stripe backgroundImage={lastSectionHero} color={heroStripeColor}>
        <PageColumn2Equal>
          <div className="score-left">
          </div>
          <div className="score-right">
            <SectionHero h2={`Interested in a career at Brainjocks?`}
                         body={`Phenomenal benefits, great culture, and a career innovating with digital technologies... there are many reasons why becoming a Jock is a no brainer! Learn more about why it’s great to be a Brainjock and browse our job listings while you're here.`}>
              <BtnGroup>
                <Btn styleName={`over-dark`} src={`https://brainjocks.com/careers`} text={`Benefits to being a Jock`}/>
                <Btn styleName={`over-dark-hollow`} src={`https://brainjocks.com/careers`} text={`See all open Jobs`}/>
              </BtnGroup>
            </SectionHero>
          </div>
        </PageColumn2Equal>
      </Stripe>
    </Layout>
  )