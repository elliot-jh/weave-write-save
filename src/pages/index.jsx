/* eslint-disable import/no-unresolved */
import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import SEO from '@common/SEO';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Navbar />
    <Header />
    <About />
    <Brands />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
