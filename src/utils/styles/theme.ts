import styled, { CreateStyled } from '@emotion/styled'

export const theme = {
  breakpoints: {
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
  },
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    bgColor: {
      primary: '#fff',
      secondary: '#efefef',
      dark: '#091622',
    },
    txtColor: {
      primary: '#333',
      secondary: '#aaa',
      sub: '#fff',
      linkColor: '#777',
    },
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
}

type Theme = {
  breakpoints: {
    s: number
    m: number
    l: number
    xl: number
  }
  palette: {
    primary: {
      light: string
      main: string
      dark: string
      contrastText: string
    }
    secondary: {
      light: string
      main: string
      dark: string
      contrastText: string
    }
    bgColor: {
      primary: string
      secondary: string
      dark: string
    }
    txtColor: {
      primary: string
      secondary: string
      sub: string
      linkColor: string
    }
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
