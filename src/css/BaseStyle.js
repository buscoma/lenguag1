const TitleH1 = {
  /* MOBILE */
  fontSize: "2.5rem",
  padding: "1rem",
  color: "white",
  textAlign: "center",
  textShadow: "3px 3px 3px black",
  /* TABLET */
  "@media (min-width: 768px)": {
    fontSize: "6rem",
    padding: "2rem",
  },
};

const TitleH2 = {
  fontSize: "2rem",
  padding: ".7rem",
  color: "white",
  textAlign: "center",
  textShadow: "2px 2px 2px black",
  "@media (min-width: 768px)": {
    fontSize: "5rem",
    padding: "1.5rem",
  },
};

const TitleH3 = {
  fontSize: "1.5rem",
  padding: ".5rem",
  color: "white",
  textAlign: "center",
  textShadow: "1px 1px 1px black",
  "@media (min-width: 768px)": {
    fontSize: "4rem",
    padding: "1rem",
  },
};

const TextWhiteShadow = {
  color: "white",
  textShadow: "4px 4px 4px black",
};

const TextBlackShadow = {
  color: "black",
  textShadow: "4px 4px 4px white",
};

const TextBold = {
  fontWeight: "bold",
};

const ButtomDefualt = {
  /* MOBILE */
  fontSize: "1.5rem",
  padding: "1rem",
  fontWeight: "bold",
  /* TABLET */
  "@media (min-width: 768px)": {
    fontSize: "2rem",
    padding: "1rem",
  },
};

const ContainerCenter = {
  /* MOBILE */
  alignSelf: "strech",
  justifyContent: "center",
  padding: "2rem",
  backgroundColor: "rgba(0, 0, 0, .1)",
  display: "flex",
  flexDirection: "column",
  /* TABLET */
  "@media (min-width: 768px)": {
    fontSize: "2rem",
    padding: "2rem",
  },
  "@media (min-width: 1000px)": {
    fontSize: "6rem",
    padding: "2rem",
    alignSelf: "Center",
    textAlign: "center",
    maxWidth: "900px",
  },
};

const progress = {};

const paper = {
  padding: "35px",
  marginBottom: "25px",
  fontSize: "22px",
  fontWeight: "bold",
  fontFamily: "inherit",
  backgroundColor: "white",
  color: "black",
  cursor: "pointer",
  opacity: "0.85",
  "&:hover": {
    backgroundColor: "white",
    opacity: "1",
    fontSize: "24px",
  },
  "&:focus": {
    backgroundColor: "white",
    opacity: "1",
    fontSize: "24px",
  },
};

const paperCorrecta = {
  padding: "35px",
  marginBottom: "25px",
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: "inherit",
  backgroundColor: "#e0da62",
  color: "white",
  cursor: "pointer",
  opacity: "1",
};

const paperIncorrecta = {
  padding: "35px",
  marginBottom: "25px",
  fontSize: "22px",
  fontWeight: "bold",
  fontFamily: "inherit",
  backgroundColor: "red",
  color: "black",
  cursor: "pointer",
  opacity: "0.85",
};

const paperNumero = {
  opacity: "0.85",
  borderRadius: "35px",
};

export {
  TitleH1,
  TitleH2,
  TitleH3,
  TextWhiteShadow,
  TextBlackShadow,
  TextBold,
  ButtomDefualt,
  ContainerCenter,
  progress,
  paper,
  paperCorrecta,
  paperIncorrecta,
  paperNumero,
};
