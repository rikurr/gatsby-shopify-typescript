import React from 'react'
import styled from '../../utils/styles/theme'

export const Footer: React.FC = () => {
  return (
    <FooterWrap>
      <FooterInner>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </FooterInner>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  background: ${p => p.theme.palette.primary.light};
  color: ${p => p.theme.palette.primary.contrastText};
`

const FooterInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem 0;
`
