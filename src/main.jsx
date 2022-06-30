import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { MoviePreview } from './pages/MoviePreview';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>
)
