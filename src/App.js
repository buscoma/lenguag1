import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "./Components/Auth";
import PrivateRoute from "./PrivateRoute";
import { createBrowserHistory } from "history";
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router history={createBrowserHistory()}>
          <Switch>
            {routes.map((route) =>
              route.public ? (
                <Route
                  key={route.key}
                  name={route.name}
                  exact={route.exact}
                  path={route.path}
                  component={route.main}
                />
              ) : (
                <PrivateRoute
                  key={route.key}
                  name={route.name}
                  exact={route.exact}
                  path={route.path}
                  component={route.main}
                />
              )
            )}
          </Switch>
        </Router>
      </AuthProvider>
      </ThemeProvider>
    );
  }
}

export default App;
