import React from "react";
import PropTypes from "prop-types";
import { Image, Text, Flex, Box } from "rebass/styled-components";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useIntl } from "gatsby-plugin-intl";

import Section from "../components/Section";
import Triangle from "../components/Triangle";
import SocialLink from "../components/SocialLink";
import { CardContainer, Card } from "../components/Card";
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
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const CARD_HEIGHT = "260px";

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
  width: 60%;
`;

const ProjectImage = styled(Image)`
  padding: 20%;
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT / 2});
    height: calc(${CARD_HEIGHT / 2}* 0.7);
    margin-top: calc(${CARD_HEIGHT / 2} / 8);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  height: ${CARD_HEIGHT};
  width: 40%;
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
  urlName,
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
      <ProjectTag>
        <Flex>
          <Box mx={3} fontSize={5}>
            <SocialLink name={urlName} fontAwesomeIcon="globe" url={url} />
          </Box>
        </Flex>
        <ImageSubtitle bg="backgroundDark" y="top" x="right">
          {publishedDate}
        </ImageSubtitle>
        <ProjectImage src={logo.src} alt={logo.title} />
        <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
          {type}
        </ImageSubtitle>
      </ProjectTag>
    </Flex>
  </Card>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlName: PropTypes.string.isRequired,
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
    id: "1",
    name: "Polyglot SAS",
    description:
      "As a Full stack developer I helped to build custom web platforms using web frameworks such as Angular 4+, Nest.js, Django, Ionic and Flutter.  We also used SCRUM framework for developing said products.",
    url: "https://polyglot.site/",
    urlName: "See website",
    type: "WEB & Mobile",
    publishedDate: "2018-2020",
    logo: {
      src: "logoPolyglot.svg",
      title: "Polyglot",
    },
  },
  {
    id: "2",
    name: "Muevelo dashboard",
    description:
      'The data that was gathered with the "Muévelo App" was stored in a NoSQL DB. I implemented an ETL to process the data, according to the requirements, and load it into a PostgreSQL DB. Finally, I developed a web application built with Flash and Dash to visualize and interact with the data. ',
    url: "https://www.frontiersin.org/articles/10.3389/fpubh.2020.00064/full",
    urlName: "See study",
    type: "WEB & data analysis",
    publishedDate: "2019",
    logo: {
      src: "logoMuevelo.png",
      title: "Muevelo",
    },
  },
  {
    id: "3",
    name: "Múevelo App",
    description:
      "Developed an android application to track location of participants of a study for the Faculty of Medicine.",
    url: "https://www.frontiersin.org/articles/10.3389/fpubh.2020.00064/full",
    urlName: "See study",
    type: "Mobile",
    publishedDate: "2019",
    logo: {
      src: "logoMuevelo.png",
      title: "Muevelo",
    },
  },
  {
    id: "4",
    name: "Acsendo",
    description:
      "As an IT Intern I was in charge of doing follow-up reports on the team developments and times. Management of SCRUM methodology and technologies such as Angular2 and java.",
    url: "https://www.acsendo.com/",
    urlName: "See website",
    type: "Web",
    publishedDate: "2017",
    logo: {
      src: "logoAcsendo.jpg",
      title: "Acsendo",
    },
  },
];

const Experience = () => {
  return (
    <Section.Container
      id={useIntl().formatMessage({ id: "experience-title" })}
      Background={Background}
    >
      <Section.Header
        name={useIntl().formatMessage({ id: "experience-title" })}
        icon="💻"
        label="notebook"
      />
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
