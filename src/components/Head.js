import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta property="og:site_name" content="Brainjocks | A MarTech Innovations Agency"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Brainjocks | A MarTech Innovations Agency"/>
      <meta property="og:image"
            content="https://brainjocks.com:443/-/media/Images/Brainjocks/Campaigns/pages%20of%20brainjockscom.png?rev=c0348c33727c442db83ce76a35d224c2"/>
      <meta property="og:image:type" content="image/png"/>
      <meta property="og:image:width" content="1623"/>
      <meta property="og:image:height" content="911"/>
      <meta name="keywords" content="Brainjocks,Customer Experience,CMS"/>
      <meta property="og:description"
            content="At Brainjocks, we create digital innovations that deliver engaging experiences through technology to enable and empower business."/>
      <meta name="description"
            content="At Brainjocks, we create digital innovations that deliver engaging experiences through technology to enable and empower business."/>
      <meta property="og:url" content="https://brainjocks.com/"/>
    </Helmet>
  )
}

export default Head
