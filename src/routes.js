// Librerias
import React from "react";

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

//Layout
import ExampleLayout from "./Components/Layout/Example/Example";

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
    name: "RankingPage",
    path: "/ranking_page",
    exact: true,
    main: () => <RankingPage />,
  },
  {
    key: 3,
    public: false,
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
  },
  {
    key: 5,
    public: false,
    name: "PalabrasCorrectas",
    path: "/palabras_correctas",
    exact: true,
    main: () => <PalabrasCorrectas />,
  },
  {
    key: 6,
    public: false,
    name: "PalabrasPerdidas",
    path: "/palabras_perdidas",
    exact: true,
    main: () => <PalabrasPerdidas />,
  },

  {
    key: 7,
    public: false,
    name: "NumeroAPalabra",
    path: "/numero_a_palabra",
    exact: true,
    main: () => <JuegoNumAPalabra />,
  },

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
  },
  {
    key: 10,
    public: false,
    name: "Secuencia números",
    path: "/example_rapa",
    exact: true,
    main: () => <ExampleLayout />,
  },
];

export default routes;
