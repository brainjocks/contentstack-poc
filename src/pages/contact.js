import React from 'react'
import '../scss/main.scss'
import Layout from '../components/Layout'
import Head from '../components/Head'
import HeroLeft from '../components/Section-components/Hero-left'
import Stripe from '../components/Stripe'
import background from '../img/contact-us.jpg'
import Btn from '../components/Content-components/Buttons/Score-button'
import PageColumn3Wide from '../components/Page-structures/score-column3-wide'

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
    <PageColumn3Wide
      center={
        <form
          action="/contact-us"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
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
