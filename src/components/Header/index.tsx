import { Link } from 'gatsby'
import React from 'react'
import styled from '../../utils/styles/theme'

type Props = {
  siteTitle?: string
}

export const Header: React.FC<Props> = ({ siteTitle }) => (
  <HeaderWrap>
    <HeaderInner>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </HeaderInner>
  </HeaderWrap>
)

const HeaderWrap = styled.header`
  background: ${p => p.theme.palette.primary.main};
`

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem 0;
`
