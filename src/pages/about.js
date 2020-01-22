import React from 'react'
import '../scss/main.scss'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stripe from '../components/Stripe'
import HeroRight from '../components/Section-components/Hero-right'
import HeroLeft from '../components/Section-components/Hero-left'
import Btn from '../components/Content-components/Buttons/Score-button'
import YoutubeVideo from '../components/Content-components/Score-youtube-video'
import { graphql, useStaticQuery } from 'gatsby'
import StyleBox from '../components/Content-components/Panels/Score-style-box'
import Highlight from '../components/Content-components/Features/Highlights'
import PageColumn1 from '../components/Page-structures/score-column1-page'

export default () => {
  const page = useStaticQuery(graphql`
    query {
      contentstackContentPage {
        heroes {
          background_image {
            url
            description
          }
          section_style
          hero_right {
            background_color
            h1_text
            h2_text
            hero_body_text
            btn_text
            button_link {
              href
              title
            }
            button_style
          }
          hero_left {
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
            highlight_image {
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
      <Head title="About" />
      <Stripe
        styleName={hero.section_style}
        backgroundImage={hero.background_image.url}
        backgroundColor={``}
        color={`white`}
        children={[
          <HeroLeft
            key={1}
            h1={hero.hero_left.h1_text}
            h2={hero.hero_left.h2_text}
            body={hero.hero_left.hero_body_text}
            children={
              <Btn
                text={hero.hero_left.btn_text}
                href={hero.hero_left.button_link.href}
                styleName={hero.hero_left.button_style}
              />
            }
          />,
          <HeroRight
            key={2}
            h1={hero.hero_right.h1_text}
            h2={hero.hero_right.h2_text}
            body={hero.hero_right.hero_body_text}
            children={
              <Btn
                text={hero.hero_right.btn_text}
                href={hero.hero_right.button_link.href}
                styleName={hero.hero_right.button_style}
              />
            }
          />,
        ]}
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
                    src={`item.highlight_image.url`}
                    alt={`item.highlight_image.description`}
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
