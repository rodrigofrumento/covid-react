import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import CssBaseLine  from '@material-ui/core/CssBaseLine'
import GlobalStyle from '../src/commons/styles/global-style'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseLine />
      <GlobalStyle />
      <div>
        Teste
      </div>
    </StylesProvider>
  );
}

export default App;
