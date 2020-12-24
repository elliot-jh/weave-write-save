/* eslint-disable import/no-unresolved */
import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import SEO from '@common/SEO';

import Header from '@sections/Header.jsx';
import About from '@sections/About.jsx';
import Brands from '@sections/Brands.jsx';
import Team from '@sections/Team.jsx';
import Faq from '@sections/Faq.jsx';
import Booking from '@sections/Booking.jsx';
import Footer from '@sections/Footer.jsx';

const IndexPage = () => (
  <Layout>
    <head><script src="https://identity.netlify.com/v1/netlify-identity-widget.js" /></head>
    <SEO />
    <Navbar />
    <Header />
    <About />
    <Brands />
    <Team />
    <Faq />
    <Booking />
    <Footer />
  </Layout>
);

export default IndexPage;
