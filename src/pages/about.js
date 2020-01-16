import React from 'react'
import '../scss/main.scss'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stripe from '../components/Stripe'
import background from '../img/chamelion.jpg'
import HeroRight from '../components/Section-components/Hero-right'
import Btn from '../components/Content-components/Buttons/Score-button'

export default () => (
  <Layout>
    <Head title="About" />
    <Stripe
      styleName={`picture-field-720-left`}
      backgroundImage={background}
      color={`white`}
    >
      <HeroRight
        h1={`This is the H1`}
        h2={`H2 text`}
        body={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`}
        children={
          <Btn text={`Learn More`} href={`#`} styleName={`over-dark`} />
        }
      />
    </Stripe>
  </Layout>
)
