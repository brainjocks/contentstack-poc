import React from 'react'
import Stripe from '../components/stripe'
import '../scss/main.scss'
import Layout from '../components/layout'
import Card from '../components/content-components/features/card'
import SectionHero from '../components/content-components/heroes/sectionHero'
import Highlight from '../components/content-components/features/highlights'
import PageColumn1 from '../components/page-structures/score-column1-page'
import CenterText from '../components/content-components/panels/score-center-text'
import InnerColumn1 from '../components/inner-structures/score-column1-inner'
import Btn from '../components/content-components/buttons/score-button'
import BtnGroup from '../components/content-components/buttons/score-button-group'
import Head from '../components/head'
import HeroLeft from '../components/section-components/hero-left'
import SectionHeroCenter from '../components/section-components/section-hero-center'
import SectionHeroRight from '../components/section-components/section-hero-right'
import StickySectionRight from '../components/section-components/sticky-section-right'
import StickySectionLeft from '../components/section-components/sticky-section-left'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const dataSet = useStaticQuery(graphql`
    query {
      contentstackHomePage2 {
        title
        seo {
          meta_title
          meta_description
          meta_keywords
        }
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
        stripe_sticky_sections {
          stripe_sticky_section_block {
            stripe_background_color
            hero_h3
            hero_body
            hero_image {
              url
            }
            orientation
            stripe_sticky_section_highlights {
              title_body {
                title
                body
              }
              full_highlight {
                image {
                  url
                  description
                }
                title
                body
                call_to_action {
                  button {
                    style
                    text
                    link {
                      href
                      title
                    }
                  }
                  image_button {
                    style
                    image {
                      url
                      description
                    }
                    link {
                      href
                      title
                    }
                  }
                }
              }
              background_body {
                background {
                  url
                }
                body
              }
            }
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
          button_text
          button_link {
            href
          }
          button_style
        }
        career_hero_section {
          background_color
          background_image {
            url
          }
          h2
          body
          button_1_text
          button_1_link {
            href
          }
          button_1_style
          button_2_text
          button_2_link {
            href
          }
          button_2_style
        }
      }
    }
  `)
  return (
    <Layout>
      <Head
        title={dataSet.contentstackHomePage2.title}
        metaTitle={dataSet.contentstackHomePage2.seo.meta_title}
        metaDescription={dataSet.contentstackHomePage2.seo.meta_description}
        metaKeywords={dataSet.contentstackHomePage2.seo.meta_keywords}
      />
      <Stripe
        styleName={dataSet.contentstackHomePage2.hero_section.style}
        backgroundImage={
          dataSet.contentstackHomePage2.hero_section.background_image.url
        }
        backgroundColor={
          dataSet.contentstackHomePage2.hero_section.background_color
        }
      >
        <HeroLeft
          h1={dataSet.contentstackHomePage2.hero_section.h1}
          h2={dataSet.contentstackHomePage2.hero_section.h2}
          body={dataSet.contentstackHomePage2.hero_section.body}
          children={
            <Btn
              text={dataSet.contentstackHomePage2.hero_section.button_text}
              href={dataSet.contentstackHomePage2.hero_section.button_link.href}
              styleName={
                dataSet.contentstackHomePage2.hero_section.button_style
              }
            />
          }
        />
      </Stripe>
      <Stripe
        backgroundColor={
          dataSet.contentstackHomePage2.center_hero_section.background_color
        }
        color={dataSet.contentstackHomePage2.center_hero_section.color}
      >
        <SectionHeroCenter
          styleName={
            dataSet.contentstackHomePage2.center_hero_section.hero_style
          }
          h3={dataSet.contentstackHomePage2.center_hero_section.h3}
          body={dataSet.contentstackHomePage2.center_hero_section.body}
        />
      </Stripe>
      {dataSet.contentstackHomePage2.stripe_sticky_sections.map(
        (item, index) => {
          return (
            <Stripe
              key={index}
              styleName={`sticky-parent`}
              backgroundColor={
                item.stripe_sticky_section_block.stripe_background_color
              }
            >
              {item.stripe_sticky_section_block.orientation === 'Right' ? (
                <StickySectionRight
                  h3={item.stripe_sticky_section_block.hero_h3}
                  body={item.stripe_sticky_section_block.hero_body}
                  src={item.stripe_sticky_section_block.hero_image.url}
                  cards={item.stripe_sticky_section_block.stripe_sticky_section_highlights.map(
                    (innerItem, innerIndex) => {
                      return <Card item={innerItem} key={innerIndex} />
                    }
                  )}
                />
              ) : (
                <StickySectionLeft
                  h3={item.stripe_sticky_section_block.hero_h3}
                  body={item.stripe_sticky_section_block.hero_body}
                  src={item.stripe_sticky_section_block.hero_image.url}
                  cards={item.stripe_sticky_section_block.stripe_sticky_section_highlights.map(
                    (innerItem, innerIndex) => {
                      return <Card item={innerItem} key={innerIndex} />
                    }
                  )}
                />
              )}
            </Stripe>
          )
        }
      )}
      <Stripe
        backgroundColor={
          dataSet.contentstackHomePage2.services_stripe.background_color
        }
        color={dataSet.contentstackHomePage2.services_stripe.color}
        styleName={`flex-two`}
      >
        <PageColumn1>
          <CenterText>
            <SectionHero
              h2={dataSet.contentstackHomePage2.services_stripe.hero_h2}
              body={dataSet.contentstackHomePage2.services_stripe.hero_body}
            />
          </CenterText>
          <InnerColumn1
            children={[
              dataSet.contentstackHomePage2.services_stripe.services_highlights.map(
                (item, index) => {
                  return (
                    <Highlight
                      styleName={`left-energy-bar active`}
                      heading={item.heading}
                      key={index}
                      body={item.body}
                    />
                  )
                }
              ),
              <CenterText key={`b152c7f8-5dee-40ed-8876-253608d1c5f9`}>
                <Btn
                  text={
                    dataSet.contentstackHomePage2.services_stripe.button_text
                  }
                  href={
                    dataSet.contentstackHomePage2.services_stripe.button_link
                      .href
                  }
                  styleName={
                    dataSet.contentstackHomePage2.services_stripe.button_style
                  }
                />
              </CenterText>,
            ]}
          />
        </PageColumn1>
      </Stripe>
      <Stripe
        styleName={dataSet.contentstackHomePage2.career_hero_section.style}
        backgroundImage={
          dataSet.contentstackHomePage2.career_hero_section.background_image.url
        }
        color={
          dataSet.contentstackHomePage2.career_hero_section.background_color
        }
      >
        <SectionHeroRight
          h2={dataSet.contentstackHomePage2.career_hero_section.h2}
          body={dataSet.contentstackHomePage2.career_hero_section.body}
          children={
            <BtnGroup
              children={[
                <Btn
                  key={`29a77d0f-3c15-44c5-a688-c82a2ee3b2e4`}
                  text={
                    dataSet.contentstackHomePage2.career_hero_section
                      .button_1_text
                  }
                  href={
                    dataSet.contentstackHomePage2.career_hero_section
                      .button_1_link.href
                  }
                  styleName={
                    dataSet.contentstackHomePage2.career_hero_section
                      .button_1_style
                  }
                />,
                <Btn
                  key={`305947cc-ec93-4ca7-93fa-c0992c209ff2`}
                  text={
                    dataSet.contentstackHomePage2.career_hero_section
                      .button_2_text
                  }
                  href={
                    dataSet.contentstackHomePage2.career_hero_section
                      .button_2_link.href
                  }
                  styleName={
                    dataSet.contentstackHomePage2.career_hero_section
                      .button_2_style
                  }
                />,
              ]}
            />
          }
        />
      </Stripe>
    </Layout>
  )
}
