import styled, { CreateStyled } from '@emotion/styled'

export const theme = {
  color: {
    primary: '#178B8D',
    secondary: '#FBAA0B',
    sub: '#729994',
  },
  backGroundColor: {
    primary: '#fff',
    secondary: '#efefef',
    dark: '#091622',
  },
  textColor: {
    primary: '#333',
    secondary: '#aaa',
    sub: "#fff",
    linkColor: '#777'
  },
  layout: {
    width: 960,
  },
  FONT: {
    XXXLARGE: 3.2,
    XXLARGE: 2.4,
    XLARGE: 1.8,
    LARGE: 1.6,
    MEDIUM: 1.4,
    BASE: 1.2,
    SMALL: 1.1,
    XSMALL: 1.0,
    TINY: 0.8,
  },
} as const

type Theme = {
  color: {
    primary: string
    sub: string
    secondary: string
  }
  backGroundColor: {
    primary: string
    secondary: string
    dark: string
  }
  textColor: {
    primary: string
    secondary: string
    sub: string
    linkColor: string
  }
  layout: {
    width: number
  }
  FONT: {
    XXXLARGE: number
    XXLARGE: number
    XLARGE: number
    LARGE: number
    MEDIUM: number
    BASE: number
    SMALL: number
    XSMALL: number
    TINY: number
  }
}

export default styled as CreateStyled<Theme>
