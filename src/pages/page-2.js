import React from "react"
import { Link } from "gatsby"

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import SEO from "@common/SEO"
import Checkout from "@components/checkout"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Navbar />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Checkout />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage
