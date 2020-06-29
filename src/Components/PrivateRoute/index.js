import React from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        let player = JSON.parse(sessionStorage.getItem("User"));
        return (
            <div>
                <Route
                    {...rest}
                    render={(props) =>
                        this.props.authenticated ? (
                            <Component points={player ? player.points : 0} {...props } />
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
