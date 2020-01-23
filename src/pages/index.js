import React from 'react'
import Stripe from '../components/Stripe'
import heroImageSectionTwo from '../img/dogs-on-motocycle-900.png'
import pressbox from '../img/pressbox-tile-image.jpg'
import brainjuice from '../img/brainjuice-tile-image.jpg'
import jocks from '../img/jocks-to-the-core-tile-image.jpg'
import lastSectionHero from '../img/careers-shoe-background.jpg'
import '../scss/main.scss'
import Layout from '../components/Layout'
import PageColumn3Wide from '../components/Page-structures/score-column3-wide'
import SectionHero from '../components/Content-components/Heroes/SectionHero'
import StyleBox from '../components/Content-components/Panels/Score-style-box'
import Highlight from '../components/Content-components/Features/Highlights'
import PageColumn1 from '../components/Page-structures/score-column1-page'
import CenterText from '../components/Content-components/Panels/Score-center-text'
import InnerColumn1 from '../components/Inner-structures/score-column1-inner'
import Btn from '../components/Content-components/Buttons/Score-button'
import InnerColumn3Wide from '../components/Inner-structures/score-column3-wide-inner'
import BtnGroup from '../components/Content-components/Buttons/Score-button-group'
import PageColumn3Equal from '../components/Page-structures/score-column3-equal'
import Head from '../components/Head'
import HeroLeft from '../components/Section-components/Hero-left'
import SectionHeroCenter from '../components/Section-components/Section-hero-center'
import SectionHeroRight from '../components/Section-components/Section-hero-right'
import StickySectionRight from '../components/Section-components/Sticky-section-right'
import StickySectionLeft from '../components/Section-components/Sticky-section-left'
import { graphql, useStaticQuery } from 'gatsby'
import data from '../data/data.json'

let heroStripeColor = '#FFFFFF'
let section2Color = '#EEEEEE'

export default () => {
  const dataSet = useStaticQuery(graphql`
    query {
      contentstackHomePage {
        hero_section {
          style
          h1
          h2
          body
          background_color
          background_image {
            url
          }
          button_text
          button_link {
            href
          }
          button_style
        }
        center_hero_section {
          background_color
          color
          hero_style
          h2
          h3
          body
          button_text
          button_link {
            href
          }
          button_style
        }
        stripe_sticky_section_right {
          stripe_background_color
          hero_h3
          hero_body
          hero_image {
            url
          }
        }
        services_stripe {
          background_color
          color
          hero_h2
          hero_body
          services_highlights {
            heading
            body
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <Stripe
        styleName={dataSet.contentstackHomePage.hero_section.style}
        backgroundImage={
          dataSet.contentstackHomePage.hero_section.background_image.url
        }
        backgroundColor={
          dataSet.contentstackHomePage.hero_section.background_color
        }
      >
        <HeroLeft
          h1={dataSet.contentstackHomePage.hero_section.h1}
          h2={dataSet.contentstackHomePage.hero_section.h2}
          body={dataSet.contentstackHomePage.hero_section.body}
          children={
            <Btn
              text={dataSet.contentstackHomePage.hero_section.button_text}
              href={dataSet.contentstackHomePage.hero_section.button_link.href}
              styleName={dataSet.contentstackHomePage.hero_section.button_style}
            />
          }
        />
      </Stripe>
      <Stripe
        backgroundColor={
          dataSet.contentstackHomePage.center_hero_section.background_color
        }
        color={dataSet.contentstackHomePage.center_hero_section.color}
      >
        <SectionHeroCenter
          styleName={
            dataSet.contentstackHomePage.center_hero_section.hero_style
          }
          h3={dataSet.contentstackHomePage.center_hero_section.h3}
          body={dataSet.contentstackHomePage.center_hero_section.body}
        />
      </Stripe>
      <Stripe
        styleName={`sticky-parent`}
        backgroundColor={
          dataSet.contentstackHomePage.stripe_sticky_section_right
            .stripe_background_color
        }
      >
        <StickySectionRight
          h3={dataSet.contentstackHomePage.stripe_sticky_section_right.hero_h3}
          body={
            dataSet.contentstackHomePage.stripe_sticky_section_right.hero_body
          }
          src={
            dataSet.contentstackHomePage.stripe_sticky_section_right.hero_image
              .url
          }
          cards={data.cards.map((item, index) => {
            return (
              <StyleBox
                styleName={`white cover`}
                backgroundImage={item.background}
                key={index}
              >
                <Highlight
                  src={item.img}
                  alt={item.imgAlt}
                  heading={item.title}
                  body={item.body}
                >
                  <BtnGroup>
                    <Btn href={item.buttonLink} text={item.buttonText} />
                    <Btn
                      styleName={`hollow`}
                      href={item.buttonLink2}
                      text={item.buttonText2}
                    />
                  </BtnGroup>
                </Highlight>
              </StyleBox>
            )
          })}
        />
      </Stripe>
      <Stripe styleName={`sticky-parent`} backgroundColor={section2Color}>
        <StickySectionLeft
          h3={`Section Hero`}
          body={`What makes Brainjocks unique? We don't just build great
              experiences, we partner with our clients and enable them to make the most of their
              platform and digital assets. Our approach provides the architecture and the
              operational transformation needed for your team to be efficient, empowered and most
              importantly, effective.`}
          src={heroImageSectionTwo}
          cards={data.cards.map((item, index) => {
            return (
              <StyleBox
                styleName={`white cover`}
                backgroundImage={item.background}
                key={index}
              >
                <Highlight
                  src={item.img}
                  alt={item.imgAlt}
                  heading={item.title}
                  body={item.body}
                >
                  <BtnGroup>
                    <Btn href={item.buttonLink} text={item.buttonText} />
                    <Btn
                      styleName={`hollow`}
                      href={item.buttonLink2}
                      text={item.buttonText2}
                    />
                  </BtnGroup>
                </Highlight>
              </StyleBox>
            )
          })}
        />
      </Stripe>
      <Stripe
        backgroundColor={
          dataSet.contentstackHomePage.services_stripe.background_color
        }
        color={dataSet.contentstackHomePage.services_stripe.color}
        styleName={`flex-two`}
      >
        <PageColumn1>
          <CenterText>
            <SectionHero
              h2={dataSet.contentstackHomePage.services_stripe.hero_h2}
              body={dataSet.contentstackHomePage.services_stripe.hero_body}
            />
          </CenterText>
          <InnerColumn1
            children={dataSet.contentstackHomePage.services_stripe.services_highlights.map(
              (item, index) => {
                return (
                  <Highlight
                    styleName={`left-energy-bar active`}
                    heading={item.heading}
                    key={'' + index}
                    body={item.body}
                  />
                )
              }
            )}
          />
        </PageColumn1>
      </Stripe>
      <Stripe>
        <PageColumn1>
          <InnerColumn3Wide
            center={
              <CenterText>
                <SectionHero
                  h2={`Brands We Serve`}
                  body={`We enjoy creating innovations for companies of all sizes across the globe. Each of these brands represents relationships we value and partnerships made through collaboration.`}
                />
              </CenterText>
            }
          />
        </PageColumn1>
      </Stripe>
      <Stripe backgroundColor={section2Color}>
        <PageColumn3Wide
          center={
            <CenterText>
              <SectionHero
                h2={`Jocks out and About`}
                body={`There’s a lot going on and we have a lot to share. Check out our latest news and industry expert blogs.`}
              />
            </CenterText>
          }
        />
        <PageColumn3Equal
          styleName={`flex`}
          left={
            <Highlight
              styleName={`news`}
              alt={`press box logo image`}
              src={pressbox}
              heading={`Brainjocks Unveils Innovative Content Localization Approach at Symposium`}
              body={`Today, Brainjocks announces its annual sponsorship of Sitecore Symposium in Orlando, where they will also unveil an innovative content localization approach. Symposium is being...`}
            >
              <Btn styleName={`btn-link`} text={`read more`} href={`#`} />
            </Highlight>
          }
          center={
            <Highlight
              styleName={`news`}
              alt={`brainjuice logo image`}
              src={brainjuice}
              heading={`V is for Voice of the Customer`}
              body={`Establishing a VoC program will help you ensure that you are meeting customer needs and expectations. From a definition standpoint, when we talk about Voice of the Customer...`}
            >
              <Btn styleName={`btn-link`} text={`read more`} href={`#`} />
            </Highlight>
          }
          right={
            <Highlight
              styleName={`news`}
              alt={`jocks to the core logo image`}
              src={jocks}
              heading={`7 Steps to create lower environments with Sitecore Commerce`}
              body={`When dealing with live websites, it is desired to have lower environments that mirror production as closely as possible. Why?`}
            >
              <Btn styleName={`btn-link`} text={`read more`} href={`#`} />
            </Highlight>
          }
        />
      </Stripe>
      <Stripe backgroundImage={lastSectionHero} color={heroStripeColor}>
        <SectionHeroRight
          h2={`Interested in a career at Brainjocks?`}
          body={`Phenomenal benefits, great culture, and a career innovating with digital technologies... there are many reasons why becoming a Jock is a no brainer! Learn more about why it’s great to be a Brainjock and browse our job listings while you're here.`}
          children={
            <BtnGroup
              children={[
                <Btn
                  key={`29a77d0f-3c15-44c5-a688-c82a2ee3b2e4`}
                  text={`Learn More`}
                  href={`#`}
                  styleName={`over-dark`}
                />,
                <Btn
                  key={`305947cc-ec93-4ca7-93fa-c0992c209ff2`}
                  text={`See all open jobs`}
                  href={`#`}
                  styleName={`over-dark-hollow`}
                />,
              ]}
            />
          }
        />
      </Stripe>
    </Layout>
  )
}
