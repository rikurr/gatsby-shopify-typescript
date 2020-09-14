import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { AllShopifyQuery } from '../../../types/graphql-types'
import { Img } from '../../utils/styles/styles'

export const ProductGrid: React.FC = () => {
  const { allShopifyProduct } = useStaticQuery<AllShopifyQuery>(
    graphql`
      query AllShopify {
        allShopifyProduct(sort: { fields: [title] }) {
          edges {
            node {
              title
              images {
                originalSrc
              }
              shopifyId
              description
              availableForSale
              priceRange {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(allShopifyProduct)
  return (
    <>
      <h1>Products</h1>
      <ul>
        {allShopifyProduct.edges.map(({ node }) => (
          <li key={node.shopifyId}>
            <h3>
              <p>{node.title}</p>
              {' - '}${node.priceRange?.minVariantPrice?.amount}
            </h3>
            <p>{node.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
