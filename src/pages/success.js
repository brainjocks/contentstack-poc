import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Head from '../components/head'

const Success = props => (
  <Layout>
    <Helmet>
      <Head title="Success Page" />
      <meta name="description" content="Success Page" />
    </Helmet>
  </Layout>
)

export default Success
