import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import '../scss/main.scss'
import HeroLeft from '../components/section-components/hero-left'
import Stripe from '../components/stripe'

const Success = () => (
  <Layout>
    <Head title="Success Page" />
    <meta name="description" content="Success Page" />
    <Stripe
      styleName={`small-spacing-bottom cover`}
      backgroundColor={`#eeeeee`}
      children={
        <HeroLeft
          color={`black`}
          h1={`Thank you for you interest`}
          body={`We will be in touch soon.`}
        />
      }
    />
  </Layout>
)

export default Success
