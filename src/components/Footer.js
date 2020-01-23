import React from 'react'
import PageColumn1 from './Page-structures/score-column1-page'
import InnerColumn3Wide from './Inner-structures/score-column3-wide-inner'
import ImageBtn from './Content-components/Buttons/Score-image-button'
import CenterText from './Content-components/Panels/Score-center-text'
import BtnGroup from './Content-components/Buttons/Score-button-group'
import CompositeBtn from './Content-components/Buttons/Score-composite-link'
import ContentSpot from './Content-components/Score-content-spot'
import renderHTML from 'react-render-html'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackFooter {
        logo_image {
          url
          description
        }
        social_icons {
          logo_image {
            url
            description
          }
          social_link {
            href
          }
        }
        contact_us_btn {
          title
          href
        }
        privacy_policy_link {
          title
          href
        }
        address
      }
    }
  `)
  const page = data.contentstackFooter
  return (
    <footer>
      <PageColumn1>
        <InnerColumn3Wide
          left={
            <ImageBtn
              href={`/`}
              src={!page.logo_image ? '' : page.logo_image.url}
              alt={!page.logo_image ? '' : page.logo_image.description}
            />
          }
          center={
            <CenterText>
              <BtnGroup>
                {page.social_icons.map((item, index) => {
                  return (
                    <ImageBtn
                      href={!item.social_link ? '' : item.social_link.href}
                      src={!item.logo_image ? '' : item.logo_image.url}
                      alt={!item.logo_image ? '' : item.logo_image.description}
                      key={index}
                    />
                  )
                })}
              </BtnGroup>
            </CenterText>
          }
          right={[
            <ContentSpot
              key={`ca0d4306-25da-4354-9076-2b52821aa75b`}
              children={renderHTML(page.address)}
            />,
            <CompositeBtn
              key={`8c0e90fd-bc1a-4e84-906c-6274b290c697`}
              href={page.contact_us_btn.href}
              text={page.contact_us_btn.title}
            />,
            <ContentSpot
              key={`59c412f0-73a5-4553-8d30-8b598fdbcd2e`}
              children={<p>© Brainjocks. All rights reserved.</p>}
            />,
            <CompositeBtn
              key={`173bc51d-6f9e-4d16-85ba-2b5ba658a517`}
              href={page.privacy_policy_link.href}
              text={page.privacy_policy_link.title}
            />,
          ]}
        />
      </PageColumn1>
    </footer>
  )
}

export default Footer
