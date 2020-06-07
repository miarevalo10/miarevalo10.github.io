import React, { Fragment } from "react";
import Triangle from "../components/Triangle";
import Section from "../components/Section";
import { Heading, Text, Flex, Box } from "rebass/styled-components";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import TextLoop from "react-text-loop";
import SocialLink from "../components/SocialLink";
import { SectionLink } from "react-scroll-section";
import MouseIcon from '../components/MouseIcon';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="secondary"
      height={["38vh", "80vh"]}
      width={["50vw", "35vw"]}
    />

    <Triangle
      color="primaryDark"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };
const socialLinks = [
  {
    fontAwesomeIcon: "github",
    id: "1",
    name: "Github",
    url: "https://github.com/miarevalo10",
  },
  {
    fontAwesomeIcon: "linkedin",
    id: "2",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maria-arevalo-01/",
  },
  {
    fontAwesomeIcon: "twitter",
    id: "3",
    name: "Twitter",
    url: "https://twitter.com/miarevalo10",
  }
];

const LandingPage = () => {
  const intl = useIntl();
  const rolesIntl = JSON.parse(intl.formatMessage({ id: "roles" }));

  return (
    <Section.Container id="home" Background={Background}>
      <Fragment>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[6, 7]}
          mb={[3, 4, 5]}
        >
          <FormattedMessage id="hello" />
        </Heading>
        <Heading
          as="h2"
          color="primary"
          fontSize={[5, 6]}
          mb={[3, 5]}
          textAlign="center"
          style={centerHorizontally}
        >
          <TextLoop interval={1500}>
            {rolesIntl
              .sort(() => Math.random() - 0.5)
              .map((text) => (
                <Text width={[300, 500]} key={text}>
                  {text}
                </Text>
              ))}
          </TextLoop>
        </Heading>
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          {socialLinks.map(({ id, ...rest }) => (
            <Box mx={3} fontSize={[5, 6, 6]} key={id}>
              <SocialLink {...rest} />
            </Box>
          ))}
        </Flex>
        <SectionLink section="about">
          {({ onClick }) => <MouseIcon onClick={onClick} />}
        </SectionLink>
      </Fragment>
    </Section.Container>
  );
};

export default LandingPage;
