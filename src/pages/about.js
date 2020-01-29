import React from 'react'
import '../scss/main.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import Stripe from '../components/stripe'
import Btn from '../components/content-components/buttons/score-button'
import YoutubeVideo from '../components/content-components/score-youtube-video'
import { graphql, useStaticQuery } from 'gatsby'
import StyleBox from '../components/content-components/panels/score-style-box'
import Highlight from '../components/content-components/features/highlights'
import PageColumn1 from '../components/page-structures/score-column1-page'
import PageColumn2Equal from '../components/page-structures/score-column2-equal-page'
import Hero from '../components/content-components/heroes/hero'

export default () => {
  const page = useStaticQuery(graphql`
    query AboutUsPageQuery {
      contentstackContentPage {
        title
        seo {
          meta_title
          meta_description
          meta_keywords
        }
        heroes {
          background_image {
            url
            description
          }
          section_style
          hero_style {
            key
          }
          hero {
            background_color
            h1_text
            h2_text
            hero_body_text
            button_text
            button_link {
              href
              title
            }
            button_style
          }
        }
        video_highlight {
          video_stripe_color
          video_section_text
          highlights {
            image {
              url
              description
            }
            highlight_heading
            highlight_body
            youtube {
              videoId
              description
            }
            youtube_video_auto_play
          }
        }
      }
    }
  `)

  const hero = page.contentstackContentPage.heroes
  const video = page.contentstackContentPage.video_highlight
  return (
    <Layout>
      <Head
        title={page.contentstackContentPage.title}
        metaTitle={page.contentstackContentPage.seo.meta_title}
        metaDescription={page.contentstackContentPage.seo.meta_description}
        metaKeywords={page.contentstackContentPage.seo.meta_keywords}
      />
      <Stripe
        styleName={hero.section_style}
        backgroundImage={hero.background_image.url}
        backgroundColor={``}
        color={`white`}
        children={
          <PageColumn2Equal
            styleName={hero.hero_style[0].key}
            right={
              <Hero
                key={1}
                h1={hero.hero.h1_text}
                h2={hero.hero.h2_text}
                body={hero.hero.hero_body_text}
                children={
                  <Btn
                    text={hero.hero.button_text}
                    href={hero.hero.button_link.href}
                    styleName={hero.hero.button_style}
                  />
                }
              />
            }
            left={
              <Hero
                key={1}
                h1={hero.hero.h1_text}
                h2={hero.hero.h2_text}
                body={hero.hero.hero_body_text}
                children={
                  <Btn
                    text={hero.hero.button_text}
                    href={hero.hero.button_link.href}
                    styleName={hero.hero.button_style}
                  />
                }
              />
            }
          />
        }
      />
      <Stripe
        backgroundColor={video.video_stripe_color}
        color={video.video_section_text}
        styleName={`flex-two`}
        children={
          <PageColumn1
            children={video.highlights.map((item, index) => {
              return (
                <StyleBox styleName={`white`} key={index}>
                  <Highlight
                    src={!item.image ? '' : item.image.url}
                    alt={!item.image ? '' : item.image.description}
                    heading={item.highlight_heading}
                    body={item.highlight_body}
                  />
                  <YoutubeVideo
                    title={item.youtube.description}
                    videoId={item.youtube.videoId}
                    autoPlay={item.youtube_video_auto_play}
                  />
                </StyleBox>
              )
            })}
          />
        }
      />
    </Layout>
  )
}
