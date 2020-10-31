import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import CssBaseLine  from '@material-ui/core/CssBaseLine'
import GlobalStyle from '../src/commons/styles/global-style'
import Main from './containers/Main'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseLine />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
