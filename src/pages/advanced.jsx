/* eslint-disable import/no-unresolved */
import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import SEO from '@common/SEO';

import Products from '@components/Products/Products';

const AdvancedExamplePage = () => (
  <Layout>
    <Navbar />
    <SEO title="Advanced Example" />
    <h1>This is the advanced example</h1>
    <Products />
  </Layout>
);

export default AdvancedExamplePage;
