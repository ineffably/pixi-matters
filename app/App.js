import React, { Component } from 'react';
import Home from './components/Home';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const theme = createMuiTheme();
const styles = (theme) => {
  return {
    app: {
      marginLeft: theme.spacing.unit,
      marginTop: theme.spacing.unit
    }
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    console.log('=- App Render -=');
    const state = { ...this.state };
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className={this.props.classes.app}>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...state} {...props} />} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
