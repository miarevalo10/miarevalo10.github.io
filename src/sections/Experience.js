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

const CARD_HEIGHT = "300px";

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
        <Text
          width={[1]}
          style={{ overflow: "auto" }}
          color="text"
          dangerouslySetInnerHTML={createMarkup(description)}
        ></Text>
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

const createMarkup = (htmlText) => ({ __html: htmlText });

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

const experienceEn = [
  {
    id: "1",
    name: "Polyglot SAS",
    description:
      "As a Full stack developer I helped to build custom web platforms using web frameworks such as <strong> Angular 4+, Nest.js, Django, Ionic and Flutter </strong>.  We also used SCRUM framework for developing said products.",
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
      'The data that was gathered with the "Muévelo App" was stored in a NoSQL DB. I implemented an ETL in <strong>python</strong> to process the data, according to the requirements, and load it into a PostgreSQL DB. Finally, I developed a web application built with Flash and Dash to visualize and interact with the data.',
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
      'Developed an android application to track location of participants from the TrUST study for the Faculty of Medicine from <a target="_blank" style="text-decoration: none" href="https://uniandes.edu.co/en"> Universidad de Los Andes</a>. The app was build with Kotlin and was connected to Firebase to store its data in a NoSQL database. It had an special focus on compatibility in a wide range of devices as well as battery optimization.',
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
      "As an IT intern, I was in charge of tracking reports on IT's team development and timing. I was also in charge of keeping an eye on task distribution and bug fixes. In addition, I made tests and small adjustments to a product under development built with Angular 2 and Java. All this using the SCRUM methodology.",
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

const experienceEs = [
  {
    id: "1",
    name: "Polyglot SAS",
    description:
      "Como desarrolladora  Full stack, ayudé a construir plataformas web personalizadas usando frameworks web como Angular 4+, Nest.js, Django, Ionic y Flutter. También utilizamos el framework SCRUM para desarrollar dichos productos.",
    url: "https://polyglot.site/",
    urlName: "Ver sitio",
    type: "WEB & Móvil",
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
      'Los datos que se recopilaron con la aplicación  "Muévelo" se almacenaron en una base de datos NoSQL. Implementé un ETL para procesar los datos, de acuerdo con los requisitos, y cargarlos en una base de datos PostgreSQL. Finalmente, desarrollé una aplicación web creada con Flash y Dash para visualizar e interactuar con los datos.',
    url: "https://www.frontiersin.org/articles/10.3389/fpubh.2020.00064/full",
    urlName: "Ver estudio",
    type: "WEB & análisis de datos",
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
      'Desarrollé una aplicación Android para rastrear la ubicación de los participantes del estudio TrUST para la Facultad de Medicina de la <a target="_blank" style="text-decoration: none" href="https://uniandes.edu.co/en"> Universidad de Los Andes</a>. La aplicación se creó con Kotlin y se conectó a Firebase para almacenar sus datos en una base de datos NoSQL. Tenía un enfoque especial en la compatibilidad en una amplia gama de dispositivos, así como en la optimización de la batería.',
    url: "https://www.frontiersin.org/articles/10.3389/fpubh.2020.00064/full",
    urlName: "Ver estudio",
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
      "Como pasante de TI, estaba a cargo de hacer informes de seguimiento sobre el desarrollo y los tiempos del equipo de TI. Junto a esto, también me encargaba de estar pendiente de distribución de tareas y solución de bugs. Además, hacía pruebas y ajustes pequeños a un producto en desarrollo construido con Angular 2. Todo esto usando la metodología SCRUM",
    url: "https://www.acsendo.com/",
    urlName: "Ver sitio",
    type: "Web",
    publishedDate: "2017",
    logo: {
      src: "logoAcsendo.jpg",
      title: "Acsendo",
    },
  },
];

const Experience = () => {
  const intl = useIntl();
  const experience = intl.locale === "en" ? experienceEn : experienceEs;
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
