import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Landing from "../sections/Landing";
import About from "../sections/About";
import Experience from "../sections/Experience";

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Experience />
    <Footer />
  </Layout>
);

export default IndexPage;
