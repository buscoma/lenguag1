// Librerias
import React from "react";
<<<<<<< HEAD
import Home from "./Containers/Home.js";
import LandingPage from "./Containers/LandingPage.js";
import RankingPage from "./Containers/RankingPage.js";
import LengGameOne from "./Containers/LengGameOne.js";
import PalabrasPerdidas from "./Containers/PalabrasPerdidas.js";
import JuegoNumAPalabra from "./Containers/JuegoNumAPalabra";
import ComprensionLectora from "./Containers/ComprensionLectora";
=======

// Miscelaneos
import Home from "./Views/Home";
import RankingPage from "./Views/RankingPage";
import LandingPage from "./Views/LandingPage";

// Lengua

import ComprensionLectora from "./Views/ComprensionLectora";
import PalabrasCorrectas from "./Views/PalabrasCorrectas";
import PalabrasPerdidas from "./Views/PalabrasPerdidas";

// Matemática
import JuegoNumAPalabra from "./Views/JuegoNumAPalabra";
import BurgerBuilder from "./Views/BurgerBuilder";
import SecuenciaNumeros from "./Views/SecuenciaNumeros";
>>>>>>> develop

const routes = [
  {
    key: 1,
    public: true,
    name: "Home",
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    key: 2,
    public: false,
<<<<<<< HEAD
    name: "LandingPage",
    path: "/landing_page",
    exact: true,
    main: () => <LandingPage />,
=======
    name: "RankingPage",
    path: "/ranking_page",
    exact: true,
    main: () => <RankingPage />,
>>>>>>> develop
  },
  {
    key: 3,
    public: false,
<<<<<<< HEAD
    name: "LengGameOne",
    path: "/leng_game_one",
    exact: true,
    main: () => <LengGameOne />,
  },
  {
    key: 4,
    public: false,
    name: "RankingPage",
    path: "/ranking_page",
    exact: true,
    main: () => <RankingPage />,
=======
    name: "LandingPage",
    path: "/landing_page",
    exact: true,
    main: () => <LandingPage />,
  },

  {
    key: 4,
    public: false,
    name: "ComprensionLectora",
    path: "/comprension_lectora",
    exact: true,
    main: () => <ComprensionLectora />,
>>>>>>> develop
  },
  {
    key: 5,
    public: false,
<<<<<<< HEAD
=======
    name: "PalabrasCorrectas",
    path: "/palabras_correctas",
    exact: true,
    main: () => <PalabrasCorrectas />,
  },
  {
    key: 6,
    public: false,
>>>>>>> develop
    name: "PalabrasPerdidas",
    path: "/palabras_perdidas",
    exact: true,
    main: () => <PalabrasPerdidas />,
  },
<<<<<<< HEAD
  {
    key: 6,
=======

  {
    key: 7,
>>>>>>> develop
    public: false,
    name: "NumeroAPalabra",
    path: "/numero_a_palabra",
    exact: true,
    main: () => <JuegoNumAPalabra />,
  },
<<<<<<< HEAD
  {
    key: 7,
    public: true,
    name: "ComprensionLectora",
    path: "/comprension_lectora",
    exact: true,
    main: () => <ComprensionLectora />,
=======

  {
    key: 8,
    public: false,
    name: "BurgerBuilder",
    path: "/burger_builder",
    exact: true,
    main: () => <BurgerBuilder />,
  },

  {
    key: 9,
    public: false,
    name: "Secuencia números",
    path: "/secuencia_numeros",
    exact: true,
    main: () => <SecuenciaNumeros />,
>>>>>>> develop
  },
];

export default routes;
