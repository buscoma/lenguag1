import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Avatar from "@material-ui/core/Avatar";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

// Componentes internos
import { useStyles } from "./Styles";

import { authFetch, logout } from "../../AuthProvider";

function NavBar(props) {
    const classes = useStyles();
    const mediaQueryMatch = useMediaQuery("(min-width:600px)");
    
    const initUser = async () => {
      await authFetch("https://backendlenguamaticag1.herokuapp.com/api/player/details")
      .then((res) => res.json())
      .then((data) => sessionStorage.setItem("User", JSON.stringify(data.data)));
    }

    initUser();

    useEffect(() => {
        initUser();
    });

    const handleBack = () => {
      logout();
    };

    const handleHome = () => {
        console.log("handleHomeClicked");
    };


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.mainBkg}>
                <Toolbar>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleBack}
                        color="inherit"
                    >
                        <ExitToAppRoundedIcon />
                    </IconButton>
                    {props.handleShowPanel ? (
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={props.handleShowPanel}
                            color="inherit"
                        >
                            <ArrowBackIosRoundedIcon />
                        </IconButton>
                    ) : (
                        ""
                    )}
                    <Typography variant="subtitle1" className={classes.title}>
                        {props.AppName}
                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleHome}
                        color="inherit"
                    >
                        <HomeRoundedIcon className={classes.homeIcon} />
                    </IconButton>

                    <div>
                        <Avatar
                            alt="avatar"
                            src={
                                sessionStorage.getItem("User")
                                    ? JSON.parse(sessionStorage.getItem("User"))
                                          .avatar
                                    : ""
                            }
                        />
                        {mediaQueryMatch ? (
                            <span className={classes.usuario}>
                                {sessionStorage.getItem("User")
                                    ? JSON.parse(sessionStorage.getItem("User"))
                                          .name
                                    : ""}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(NavBar);
