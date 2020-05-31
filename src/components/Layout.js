/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ScrollingProvider } from 'react-scroll-section';
import {useIntl } from "gatsby-plugin-intl"

import config from "react-reveal/globals";
import colors from "../../colors";
import preset from "@rebass/preset";
import SEO from "./Seo";

// TODO: Check the Typography plugin to try new fonts
// This is a css-in-js implementation with styled components
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
  }
`;

// This makes the components have a "reveal" animation with the
// help of the react-reveal library
config({ ssrFadeout: true });

// Appends an external js script
const loadScript = (src) => {
  const tag = document.createElement("script");
  tag.src = src;
  tag.defer = true;
  document.getElementsByTagName("body")[0].appendChild(tag);
};

const theme = {
  ...preset,
  colors,
  fonts: {
    body: "Cabin, Open Sans, sans-serif",
    heading: "inherit",
    monospace: "monospace",
  },
};

const Layout = ({ children }) => {
  // TODO: research what this does
  useEffect(() => {
    loadScript("https://use.fontawesome.com/fd58d214b9.js");
  }, []);
  const intl = useIntl()

  return (
    <main>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ScrollingProvider>
          <SEO title={intl.formatMessage({ id: "title" })} lang={intl.locale} />
          {children}
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
