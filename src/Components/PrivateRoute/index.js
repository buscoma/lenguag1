import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../NavBar";

class PrivateRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <div>
                <Route
                    {...rest}
                    render={(props) =>
                        this.props.authenticated ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to={"/"} />
                        )
                    }
                />
            </div>
        );
    }
}

export default PrivateRoute;
