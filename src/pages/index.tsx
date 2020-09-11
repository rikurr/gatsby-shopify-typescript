import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/layout'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="こんにちは" />
    <h1>Hi people</h1>
    <p style={{ fontSize: 16 }}>Welcome to your new Gatsby site.</p>
    <p style={{ fontSize: '1.6rem' }}>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
