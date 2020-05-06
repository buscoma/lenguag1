import React from "react";
import Home from "./Containers/Home.js";
import LandingPage from "./Containers/LandingPage.js";
import RankingPage from "./Containers/RankingPage.js";
import LengGameOne from "./Containers/LengGameOne.js";
import PalabrasPerdidas from "./Containers/PalabrasPerdidas.js";

const routes = [
  { key: 1, public: true, name: "Home", path: "/", exact: true, main: () => <Home /> },
  { key: 2, public: false, name: "LandingPage", path: "/landing_page", exact: true, main: () => <LandingPage /> },
  { key: 3, public: false, name: "LengGameOne", path: "/leng_game_one", exact: true, main: () => <LengGameOne /> },
  { key: 4, public: false, name: "RankingPage", path: "/ranking_page", exact: true, main: () => <RankingPage /> },
  { key: 5, public: false, name: "PalabrasPerdidas", path: "/palabras_perdidas", exact: true, main: () => <PalabrasPerdidas /> }
];

export default routes;