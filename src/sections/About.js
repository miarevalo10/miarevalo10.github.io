import React from "react";
import Triangle from "../components/Triangle";
import styled from "styled-components";
import Section from "../components/Section";
import { Box, Image, Flex } from "rebass/styled-components";
import Fade from "react-reveal/Fade";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["20vh", "40vh"]}
      width={["75vw", "70vw"]}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container
    id={useIntl().formatMessage({ id: "about-me-title" })}
    Background={Background}
  >
    <Section.Header
      name={useIntl().formatMessage({ id: "about-me-title" })}
      icon="👩🏻"
      label="person"
    />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} lineHeight={2} fontSize={18}>
        <Fade bottom>
          <FormattedMessage id="about-me-description" />
        </Fade>
      </Box>

      <Box width={[1, 1, 2 / 6]} style={{ maxWidth: "300px", margin: "auto" }}>
        <Fade right>
          <ProfilePicture
            src="profilePic.jpg"
            alt="Profile picture"
            mt={[4, 4, 0]}
            ml={[0, 0, 1]}
          />
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);

export default About;
