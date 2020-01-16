import React from "react"
import PageColumn1 from "./Page-structures/score-column1-page"
import InnerColumn3Wide from "./Inner-structures/score-column3-wide-inner"
import ImageBtn from "./Content-components/Buttons/Score-image-button"
import Logo from "../img/brainjocks-icon.svg"
import CenterText from "./Content-components/Panels/Score-center-text"
import BtnGroup from "./Content-components/Buttons/Score-button-group"
import Twitter from "../img/twitter-icon.svg"
import Facebook from "../img/facebook-icon.svg"
import Linkedin from "../img/linkedin-icon.svg"
import Youtube from "../img/youtube-icon svg.svg"
import Instagram from "../img/instagram-icon.svg"
import CompositeBtn from "./Content-components/Buttons/Score-composite-link"
import ContentSpot from "./Content-components/Score-content-spot"

const socialButton = [
  {
    imgSrc: Twitter,
    href: "https://twitter.com/BrainJocks",
    alt: "twitter logo",
  },
  {
    imgSrc: Facebook,
    href: "https://www.facebook.com/brainjocks/",
    alt: "facebook logo",
  },
  {
    imgSrc: Linkedin,
    href: "https://www.linkedin.com/company/brainjocks",
    alt: "linkedin logo",
  },
  {
    imgSrc: Youtube,
    href: "https://www.youtube.com/channel/UCUyyk_pBFlpEmpA_erHurvg",
    alt: "youtube logo",
  },
  {
    imgSrc: Instagram,
    href: "https://www.instagram.com/brainjocks/?hl=en",
    alt: "instagram logo",
  },
]

const Footer = () => {
  return (
    <footer>
      <PageColumn1>
        <InnerColumn3Wide
          left={<ImageBtn href={`#`} src={Logo} alt={`logo image`} />}
          center={
            <CenterText>
              <BtnGroup>
                {socialButton.map((item, index) => {
                  return (
                    <ImageBtn
                      href={item.href}
                      src={item.imgSrc}
                      alt={item.alt}
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
              children={
                <p>
                  13560 Morris Road, Suite 3300,
                  <br />
                  Alpharetta, GA 30004
                  <br />
                  Phone:
                  <a href="tel:770-924-6444" className="mobile-visible"></a>
                  <span className="desktop-visible">770-924-6444</span>
                </p>
              }
            />,
            <CompositeBtn
              key={`8c0e90fd-bc1a-4e84-906c-6274b290c697`}
              href={`https://brainjocks.com/contact-us`}
              text={`Contact Us`}
            />,
            <ContentSpot
              key={`59c412f0-73a5-4553-8d30-8b598fdbcd2e`}
              children={<p>© Brainjocks. All rights reserved.</p>}
            />,
            <CompositeBtn
              key={`173bc51d-6f9e-4d16-85ba-2b5ba658a517`}
              href={`https://brainjocks.com/privacy`}
              text={`Privacy Policy`}
            />,
          ]}
        />
      </PageColumn1>
    </footer>
  )
}

export default Footer
