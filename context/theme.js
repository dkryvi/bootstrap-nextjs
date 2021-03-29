import React from 'react';
import PropTypes from 'prop-types';
import {StylesProvider} from '@material-ui/core/styles';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from 'theme';

function ThemeProvider({children}) {
  return (
    <StylesProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StylesProvider>
  );
}

ThemeProvider.propTypes = {
  configuration: PropTypes.object,
  children: PropTypes.any.isRequired,
};

ThemeProvider.defaultProps = {};

export {ThemeProvider};
