import React from "react";
import Home from "./Containers/Home.js";
import LandingPage from "./Containers/LandingPage.js";
import RankingPage from "./Containers/RankingPage.js";
import LengGameOne from "./Containers/LengGameOne.js";
import PalabrasPerdidas from "./Containers/PalabrasPerdidas.js";
import JuegoNumAPalabra from "./Containers/JuegoNumAPalabra";
import ComprensionLectora from "./Containers/ComprensionLectora"

const routes = [
  { key: 1, public: true, name: "Home", path: "/", exact: true, main: () => <Home /> },
  { key: 2, public: false, name: "LandingPage", path: "/landing_page", exact: true, main: () => <LandingPage /> },
  { key: 3, public: false, name: "LengGameOne", path: "/leng_game_one", exact: true, main: () => <LengGameOne /> },
  { key: 4, public: false, name: "RankingPage", path: "/ranking_page", exact: true, main: () => <RankingPage /> },
  { key: 5, public: false, name: "PalabrasPerdidas", path: "/palabras_perdidas", exact: true, main: () => <PalabrasPerdidas /> },
  { key: 6, public: false, name: "NumeroAPalabra", path: "/numero_a_palabra", exact: true, main: () => <JuegoNumAPalabra /> },
  { key: 7, public: true, name: "ComprensionLectora", path: "/comprension_lectora", exact: true, main: () => <ComprensionLectora /> }
];

export default routes;