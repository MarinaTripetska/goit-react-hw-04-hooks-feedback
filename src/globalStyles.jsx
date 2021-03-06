import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  box-sizing: border-box;
  margin:0;
  }

    p,
    h1,
    h2,
    h3 {
  margin: 0;
  padding: 0;
    }

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
`

export default GlobalStyle
