import React from 'react'
import '../scss/main.scss'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stripe from '../components/Stripe'
import background from '../img/chamelion.jpg'
import HeroRight from '../components/Section-components/Hero-right'
import Btn from '../components/Content-components/Buttons/Score-button'

export default () => {
  const modular =
    [
       {
        heroRight: {
          h1: "We Approach MarTech, Thoughtfully",
          h2: "",
          body: "",
          btnText: "Learn More",
          btnHref: "#",
          btnStyle: "over-dark"
        }
    },
      {
        heroLeft: {
          h1: "",
          h2: "",
          body: "",
          btnText: "",
          btnHref: "",
          btnStyle: ""
        }
    }
      ]

  return (
  <Layout>
    <Head title="About" />
    <Stripe
      styleName={`picture-field-720-left`}
      backgroundImage={background}
      color={`white`}
    >
      <HeroRight
        h1={modular.heroRight.h1}
        h2={modular.heroRight.h2}
        body={modular.heroRight.body}
        children={
          <Btn text={modalar.heroRight.btnText} href={modular.heroRight.btnHref} styleName={modular.heroRight.btnStyle} />
        }
      />
    </Stripe>
  </Layout>
)}
