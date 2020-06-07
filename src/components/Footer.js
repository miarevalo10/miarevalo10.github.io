import React from "react";
import styled from "styled-components";
import { Text, Box, Link, Flex } from "rebass/styled-components";
import Fade from "react-reveal/Fade";
import SocialLink from "./SocialLink";
const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.background};

  & a {
    color: ${(props) => props.theme.colors.background};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

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
  },
];
const Footer = () => (
  <Box p={[2, 3]} backgroundColor="primaryDark" as="footer">
    <FooterContainer>
      <Fade left>
        <TextFooter fontSize={[2, 3]}>
          <span>{`María's Portfolio - Powered by `}</span>
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </TextFooter>
      </Fade>
      <Flex>
        <Fade center>
          <TextFooter fontSize={[2, 3]}>
            <span>{`Contact me at: `}</span>
            <Link target="_blank" href="mailto: marisarevalo97@gmail.com">
              marisarevalo97@gmail.com
            </Link>
          </TextFooter>
        </Fade>
      </Flex>
      <Flex>
        <Fade right>
          {socialLinks.map(({ id, ...rest }) => (
            <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
              <SocialLink {...rest} color="background" />
            </Box>
          ))}
        </Fade>
      </Flex>
    </FooterContainer>
  </Box>
);

export default Footer;
