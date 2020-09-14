import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'

import SEO from '../components/seo'
import { ProductGrid } from '../components/ProductGrid'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" description="こんにちは" />
    <h1>Hi people</h1>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage