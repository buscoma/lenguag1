import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Abc, Math, Ranking } from "./Assets";
import { ContainerCenter, TitleH3, TextWhiteShadow, TextBold } from "./Styles";

const imagesLeng = [
  {
    url: Abc,
    title: "Palabras Correctas",
    width: "100%",
    href: "/palabras_correctas",
  },
  {
    url: Abc,
    title: "Palabras Perdidas",
    width: "100%",
    href: "/palabras_perdidas",
  },
  {
    url: Abc,
    title: "Comprensión Lectora",
    width: "100%",
    href: "/comprension_lectora",
  },
  {
    url: Ranking,
    title: "Ranking",
    width: "100%",
    href: "/ranking_page",
  },
];

const imagesMath = [
  {
    url: Math,
    title: "Secuencia Números",
    width: "100%",
    href: "/secuencia_numeros",
  },
  {
    url: Math,
    title: "Burger Builder",
    width: "100%",
    href: "/burger_builder",
  },
  {
    url: Math,
    title: "Numero a Palabra",
    width: "100%",
    href: "/numero_a_palabra",
  },
  {
    url: Ranking,
    title: "Ranking",
    width: "100%",
    href: "/ranking_page",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    verticalAlign: "center",
  },
  ContainerCenter,
  TitleH3,
  TextBold,
  TextWhiteShadow,
  image: {
    position: "relative",
    height: 100,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 70,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },

    },
  },

  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },

  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center %",
  },

  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },

  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
      }px`,
  },


}));

export default function CuadrupleBoton(props) {
  const classes = useStyles();

  return (

    <Grid container spacing={2} justify="center" alignItems="center">
      {(props.type === 'leng' ? imagesLeng : imagesMath).map((image) => (
        <Grid item xs={6} md={5}>
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
            href={image.href}
          >
            <span
              className={classes.imageSrc}
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={
                  classes.imageTitle +
                  " " +
                  classes.TitleH2 +
                  " " +
                  classes.TextBold +
                  " " +
                  classes.TextWhiteShadow
                }
              >
                {image.title}
              </Typography>
            </span>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>

  );
}
