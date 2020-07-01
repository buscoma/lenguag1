import { authFetch } from "../../../AuthProvider";

export const obtenerNivel = async (level) => {
    return authFetch(
        "https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel=" +
            level
    )
        .then((response) => response.json())
        .then((result) => {
            return result.data;
        })
        .catch((error) => console.log("error", error));
};
