import React from "react"
import "../scss/main.scss"
import Layout from "../components/Layout"
import Head from "../components/Head"
import HeroLeft from "../components/Section-components/Hero-left"
import Stripe from "../components/Stripe"
import background from "../img/contact-us.jpg"
import Btn from "../components/Content-components/Buttons/Score-button"

export default () => (
  <Layout>
    <Head title="Contact Us" />
    <Stripe backgroundImage={background} color={`#000000`}>
      <HeroLeft
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
