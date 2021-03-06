import React from 'react'
import '../scss/main.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import Stripe from '../components/stripe'
import Btn from '../components/content-components/buttons/score-button'
import PageColumn3Wide from '../components/page-structures/score-column3-wide'
import { graphql, useStaticQuery } from 'gatsby'
import renderHTML from 'react-render-html'
import PageColumn2Equal from '../components/page-structures/score-column2-equal-page'
import Hero from '../components/content-components/heroes/hero'

export default () => {
  const page = useStaticQuery(graphql`
    query ContactQuery {
      contentstackContactUsPage {
        title
        seo {
          meta_title
          meta_description
          meta_keywords
        }
        hero {
          background_style_name
          background_image {
            url
          }
          background_color
          text_color
          hero_style {
            key
          }
          h1_text
          h2_text
          hero_body_text
          button_link {
            href
            title
          }
          button_style_name
        }
        form {
          form_heading
          form_subheading
          second_form_subheading
          input_fields {
            input_type
            input_label_text
            input_placeholder_text
          }
          privacy_policy
        }
      }
    }
  `)

  const heroData = page.contentstackContactUsPage.hero
  const formData = page.contentstackContactUsPage.form
  return (
    <Layout>
      <Head
        title={page.contentstackContactUsPage.title}
        metaTitle={page.contentstackContactUsPage.seo.meta_title}
        metaDescription={page.contentstackContactUsPage.seo.meta_description}
        metaKeywords={page.contentstackContactUsPage.seo.meta_keywords}
      />
      <Stripe
        backgroundImage={heroData.background_image.url}
        color={heroData.text_color}
        styleName={heroData.background_style_name}
        children={
          <PageColumn2Equal
            styleName={heroData.hero_style[0].key}
            left={
              <Hero
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
            }
            right={
              <Hero
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
            }
          />
        }
      />
      <PageColumn3Wide
        center={
          <form
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <h2>{formData.form_heading}</h2>
            <h3>{formData.form_subheading}</h3>
            <h3>{formData.second_form_subheading}</h3>
            {formData.input_fields.map((item, index) => {
              if (item.input_type === 'Text Area') {
                return (
                  <div className="form-group" key={index}>
                    <textarea
                      type="text"
                      rows="4"
                      placeholder={item.input_placeholder_text}
                      spellCheck="false"
                      maxLength="240"
                      name={item.input_label_text}
                    />
                  </div>
                )
              }
              return (
                <div className="form-group" key={index}>
                  <input
                    required="required"
                    type={item.input_type}
                    placeholder={item.input_placeholder_text}
                    maxLength="100"
                    name={item.input_label_text}
                  />
                </div>
              )
            })}
            <div className="form-group privacy">
              <label>
                <input type="checkbox" value="true" required="required" />
              </label>
              {renderHTML(formData.privacy_policy)}
            </div>
            <input value="send" type="submit" />
          </form>
        }
      />
    </Layout>
  )
}
