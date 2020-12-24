/* eslint-disable import/no-unresolved */
import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import SEO from '@common/SEO';

import CMS from 'netlify-cms-app';

// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
/* CMS.registerPreviewTemplate('my-template', MyTemplate); */

const Page = () => (
  <Layout>
    <SEO />
    <Navbar />
    <h1>This is a blank page.</h1>
  </Layout>
);

export default Page;
