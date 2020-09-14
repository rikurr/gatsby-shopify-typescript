/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import { SiteTitleQuery } from '../../../types/graphql-types'
import { Header } from '../Header'
import { GlobalStyles } from '../../utils/styles/global-styles'
import { Footer } from '../Footer'
import { theme } from '../../utils/styles/theme'

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<SiteTitleQuery>(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Header siteTitle={data.site?.siteMetadata?.title} />
      <Main>
        <LayoutWrap>{children}</LayoutWrap>
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

const Main = styled.main``

const LayoutWrap = styled.div``
