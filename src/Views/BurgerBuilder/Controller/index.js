import { authFetch } from "../../../AuthProvider";

export const obtenerNivel = (dificultad) => {
    return authFetch(
        "https://backendlenguamaticag1.herokuapp.com/api/games/burgerBuilder?nivel=" +
            dificultad
    )
        .then((res) => res.json())
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            console.log("error", error);
        });
};

export const obtenerOperacion = (dificultad) => {
    return authFetch(
        "https://backendlenguamaticag1.herokuapp.com/api/games/burgerBuilder/operacion?nivel=" +
            dificultad
    )
        .then((res) => res.json())
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            console.log("error", error);
        });
};

export const getPoints = (nivel) => {
    return authFetch(
        "https://backendlenguamaticag1.herokuapp.com/api/player/levelUp?game=burgerBuilder&level=" +
            nivel
    )
    .catch((error) => console.log("error", error));
};


export const playerDetails = () => {
    return authFetch(
        "https://backendlenguamaticag1.herokuapp.com/api/player/details"
    )
        .then((res) => res.json())
        .then((userResult) => {
            return userResult.data;
        })
        .catch((error) => console.log("error", error));
};