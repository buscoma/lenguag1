import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Avatar from "@material-ui/core/Avatar";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, Redirect } from "react-router-dom";

// Componentes internos
import { useStyles } from "./Styles";

import { authFetch, logout } from "../../AuthProvider";

function NavBar(props) {
  const classes = useStyles();
  const mediaQueryMatch = useMediaQuery("(min-width:600px)");
  const [user, setUser] = useState(null);

  const initUser = async () => {
    await authFetch(
      "https://backendlenguamaticag1.herokuapp.com/api/player/details"
    )
      .then((res) => res.json())
      .then((userResult) => {
        setUser(userResult.data);
        let userData = JSON.stringify(userResult.data);
        sessionStorage.setItem("User", userData);
      });
  };

  initUser();

  useEffect(() => {
    initUser();
  }, []);

  const handleBack = () => {
    logout();
    sessionStorage.clear();
  };

  const handleHome = () => {
    props.history.push("/landing_page");
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
            title="Salir"
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
            title="Ir a la Home" 
          >
            <HomeRoundedIcon className={classes.homeIcon} />
          </IconButton>

          <div className={classes.rightHold + " " + classes.flexbox}>
            <Avatar
              alt="avatar"
              src={
                user
                  ? "https://backendlenguamaticag1.herokuapp.com/images/" +
                    user.avatar
                  : ""
              }
            />
            {mediaQueryMatch ? <span className={classes.userspan}>{user ? user.name : ""}</span> : ""}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
