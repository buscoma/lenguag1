import { authFetch } from "../../../AuthProvider";

export const obtenerNivel = (dificultad) => {
    return authFetch(
        "https://backendlenguamaticag1.herokuapp.com/api/games/comprensionLectora?nivel=" +
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
