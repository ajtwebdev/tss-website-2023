import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "./layoutComponents"

const Wrapper = styled.div`
  // background: url("../../images/clients-bg-pink.jpg"), rgba(0, 0, 0, 0.3);
  background: #F0889F;
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
  display: grid;
  place-items: center;
  min-height: 600px;
  position: relative; //added this line
`

const Text = styled.div`
  // margin-top: auto;
  // margin-bottom: auto;
  position: relative;
  z-index: 2;
`
const LogosContainer = styled(GridAuto)`
  grid-template-columns: repeat(8, 2fr);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  z-index: 1 ; 
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr); 
  }

`

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 100%; /* Adjust the max-width for smaller screens */
  }
`
const ImgStyle = {}

export default function Clients() {
  return (
    <div className="spacing-lg">
      <Wrapper>
        <Section>
          <Container className="spacing center">
            <LogosContainer className="center spacing">
              <Logo style={ImgStyle} src="../../images/2.png" loading="lazy" />
              <Logo style={ImgStyle} src="../../images/4.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/5.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/6.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/7.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/8.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/KIA.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/Mr. Prime Rib.png" loading="lazy"/>

              <Logo style={ImgStyle} src="../../images/2.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/4.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/5.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/6.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/7.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/8.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/KIA.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/Mr. Prime Rib.png" loading="lazy"/>

              <Logo style={ImgStyle} src="../../images/2.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/4.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/5.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/6.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/7.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/8.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/KIA.png" loading="lazy"/>
              <Logo style={ImgStyle} src="../../images/Mr. Prime Rib.png" loading="lazy"/>
            </LogosContainer>
            <Text>
              <p className="body--large caps">trusted by</p>
              <h2 className="title upper bold">200+ businesses</h2>
              <p>
                Amazing things happen when you choose the right marketing
                company
              </p>
            </Text>
          </Container>
        </Section>
      </Wrapper>

      {/* <Container className="center spacing">
        <h3 className="body--large caps bold">
          We've also had the pleasure of working closely with:
        </h3>
        <GridAuto>
          <StaticImage
            style={ImgStyle}
            src="../images/lululemon-marketing-client.svg"
            alt="sudbury social media marketing client"
          />
          <StaticImage
            style={ImgStyle}
            src="../images/levi-marketing-client.svg"
            alt="sudbury social media marketing client"
          />
          <StaticImage
            style={ImgStyle}
            src="../images/beyond-wireless-marketing-client.svg"
            alt="sudbury social media marketing client"
          />
        </GridAuto>
      </Container> */}
    </div>
  )
}
