import { authfetch } from "../../../AuthProvider";

const Controller = async (level) => {
    authfetch(
        "https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel=" +
            level
    )
        .then((response) => response.text())
        .then((result) => {
            console.log(JSON.parse(result).data["0"].frases);

            return JSON.parse(result).data["0"].frases; // JSON con las frases del nivel 1
        })
        .catch((error) => console.log("error", error));
};

export default Controller;
