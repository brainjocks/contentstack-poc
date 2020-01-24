import React from 'react'
import '../scss/main.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import HeroLeft from '../components/section-components/hero-left'
import Stripe from '../components/stripe'
import Btn from '../components/content-components/buttons/score-button'
import PageColumn3Wide from '../components/page-structures/score-column3-wide'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const heroSection = useStaticQuery(graphql`
    query ContactHeroQuery {
      contentstackContactUsPage {
        hero {
          background_style_name
          background_image {
            url
          }
          background_color
          text_color
          hero_content
          h1_text
          h2_text
          hero_body_text
          button_link {
            href
            title
          }
          button_style_name
        }
      }
    }
  `)

  const heroData = heroSection.contentstackContactUsPage.hero

  return (
    <Layout>
      <Head title="Contact Us" />
      <Stripe
        backgroundImage={heroData.background_image.url}
        color={heroData.text_color}
        styleName={heroData.background_style_name}
      >
        <HeroLeft
          h1={heroData.h1_text}
          h2={heroData.h2_text}
          body={heroData.hero_body_text}
          children={
            <Btn
              text={heroData.button_link.title}
              href={heroData.button_link.href}
              styleName={heroData.button_style_name}
            />
          }
        />
      </Stripe>
      <PageColumn3Wide
        center={
          <form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <h2>Let's innovate together</h2>
            <h3>770.924.6444</h3>
            <h3>
              Give us a call or complete the following and we will be in touch
              very soon.
            </h3>
            <div className="form-group">
              <input type="text" placeholder="First Name*" maxLength="40" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name*" maxLength="40" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone*" maxLength="140" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email*" maxLength="140" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company Name*" maxLength="140" />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                rows="4"
                placeholder="What would you like to be contacted about?"
                spellCheck="false"
                maxLength="240"
              />
            </div>
            <div className="form-group privacy">
              <label>
                <input type="checkbox" value="true" is required />
              </label>
              Yes, I understand and accept Brainjocks{' '}
              <a href="/" target="_new">
                Privacy Policy{' '}
              </a>
              and consent to sharing my information.
            </div>
            <input value="send" type="submit" />
          </form>
        }
      />
    </Layout>
  )
}
