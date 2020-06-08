import React from "react";
import PropTypes from "prop-types";
import { Image, Text, Flex, Box } from "rebass/styled-components";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {useIntl } from "gatsby-plugin-intl";

import Section from "../components/Section";
import Triangle from "../components/Triangle";
import SocialLink from "../components/SocialLink";
import Hide from "../components/Hide";
import { CardContainer, Card } from '../components/Card';
import ImageSubtitle from "../components/ImageSubtitle";

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={["80vh", "80vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="background"
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertX
    />
       
    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />

  </div>
);

const CARD_HEIGHT = "200px";

const MEDIA_QUERY_SMALL = "@media (max-width: 400px)";

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;
const Project = ({
  name,
  description,
  url,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: "auto" }} color="text">
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={logo.src} alt={logo.title} />
        <ProjectTag>
          <Flex
            style={{
              float: "right",
            }}
          >
            {repositoryUrl && <Box mx={1} fontSize={5}>
              <SocialLink
                name="Check repository"
                fontAwesomeIcon="github"
                url={repositoryUrl}
              />
            </Box>}
            <Box mx={3} fontSize={5}>
              <SocialLink
                name="See website"
                fontAwesomeIcon="globe"
                url={url}
              />
            </Box>
          </Flex>
          <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{publishedDate}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const experience = [
  { 
    id:"1",
    name:"Polyglot SAS",
    description:"Placeholder text",
    url:"https://polyglot.site/",
    repositoryUrl:"",
    type:"WEB & Mobile",
    publishedDate:"2018-2020",
    logo: {
      src:"logoPolyglot.svg",
      title:"Polyglot"
    }
  },
  { 
    id:"2",
    name:"Placeholder",
    description:"Placeholder text",
    url:"",
    repositoryUrl:"",
    type:"WEB & Mobile",
    publishedDate:"2018-2020",
    logo: {
      src:"logoPolyglot.svg",
      title:"Polyglot"
    }
  },
  { 
    id:"3",
    name:"Placeholder",
    description:"Placeholder text",
    url:"",
    repositoryUrl:"",
    type:"WEB & Mobile",
    publishedDate:"2018-2020",
    logo: {
      src:"logoPolyglot.svg",
      title:"Polyglot"
    }
  },
];


const Experience = () => {
  return (
    <Section.Container id={useIntl().formatMessage({ id: "experience-title" })}Background={Background}>
      <Section.Header name={useIntl().formatMessage({ id: "experience-title" })} icon="💻" label="notebook" />
      <CardContainer minWidth="350px">
          {experience.map((exp, i) => (
            <Fade bottom delay={i * 200} key={exp.id}>
              <Project {...exp} />
            </Fade>
          ))}
        </CardContainer>
    </Section.Container>
  );
};

export default Experience;
