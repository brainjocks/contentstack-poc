import React from 'react'
import '../scss/main.scss'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stripe from '../components/Stripe'
import background from '../img/chamelion.jpg'
import HeroRight from '../components/Section-components/Hero-right'
import HeroLeft from '../components/Section-components/Hero-left'
import Btn from '../components/Content-components/Buttons/Score-button'
import YoutubeVideo from '../components/Content-components/Score-youtube-video'
import { graphql, useStaticQuery } from 'gatsby'
import PageColumn2Equal from '../components/Page-structures/score-column2-equal-page'
import StyleBox from '../components/Content-components/Panels/Score-style-box'
import Highlight from '../components/Content-components/Features/Highlights'

const modularRight = {
  heroRight: {
    h1: 'We Approach MarTech, Thoughtfully',
    h2: '',
    body: '',
    btnText: 'Learn More',
    btnHref: '#',
    btnStyle: 'over-dark',
  },
}

const modularLeft = {
  heroLeft: {
    h1: '',
    h2: '',
    body: '',
    btnText: '',
    btnHref: '',
    btnStyle: '',
  },
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackContentPage {
        test_color_picker
        stripe_color
        youtube_test {
          title
          videoId
        }
        youtube_video_auto_play
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <Head title="About" />
      <Stripe
        styleName={`picture-field-720-left`}
        backgroundImage={background}
        backgroundColor={data.contentstackContentPage.test_color_picker}
        color={`white`}
        children={[
          <HeroLeft
            key={1}
            h1={modularLeft.heroLeft.h1}
            h2={modularLeft.heroLeft.h2}
            body={modularLeft.heroLeft.body}
            children={
              <Btn
                text={modularLeft.heroLeft.btnText}
                href={modularLeft.heroLeft.btnHref}
                styleName={modularLeft.heroLeft.btnStyle}
              />
            }
          />,
          <HeroRight
            key={2}
            h1={modularRight.heroRight.h1}
            h2={modularRight.heroRight.h2}
            body={modularRight.heroRight.body}
            children={
              <Btn
                text={modularRight.heroRight.btnText}
                href={modularRight.heroRight.btnHref}
                styleName={modularRight.heroRight.btnStyle}
              />
            }
          />,
        ]}
      />
      <Stripe
        backgroundColor={data.contentstackContentPage.test_color_picker}
        color={data.contentstackContentPage.stripe_color}
        children={
          <PageColumn2Equal
            right={
              <StyleBox styleName={`white`}>
                <Highlight
                  heading={`Our culture is the difference and great culture is made by awesome people.`}
                  body={`Long time Brainjock Ken Forst shares how he feels about our culture and our people. We love that our people love working together!`}
                />
                <YoutubeVideo
                  title={data.contentstackContentPage.youtube_test.title}
                  videoId={data.contentstackContentPage.youtube_test.videoId}
                  autoPlay={
                    data.contentstackContentPage.youtube_video_auto_play
                  }
                />
              </StyleBox>
            }
          />
        }
      />
    </Layout>
  )
}
