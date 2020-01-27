import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import '../scss/main.scss'
import HeroLeft from '../components/section-components/hero-left'
import Stripe from '../components/stripe'
import { graphql, useStaticQuery } from 'gatsby'

const Success = () => {
  const data = useStaticQuery(graphql`
    query SuccessPage {
      contentstackFormSuccessPage {
        background_color
        text_color
        h1_text
        h2_text
        body_text
      }
    }
  `)
  return (
    <Layout>
      <Head title="Success Page" />
      <meta name="description" content="Success Page" />
      <Stripe
        styleName={`small-spacing-bottom cover`}
        backgroundColor={data.contentstackFormSuccessPage.background_color}
        children={
          <HeroLeft
            color={data.contentstackFormSuccessPage.text_color}
            h1={data.contentstackFormSuccessPage.h1_text}
            body={data.contentstackFormSuccessPage.body_text}
          />
        }
      />
    </Layout>
  )
}

export default Success
