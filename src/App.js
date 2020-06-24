import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { useAuth } from "./AuthProvider";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
    let [logged] = useAuth();

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
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
                                authenticated={logged}
                            />
                        )
                    )}
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
