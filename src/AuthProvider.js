import { createAuthProvider } from "react-token-auth";

export const [useAuth, authFetch, login, logout] = createAuthProvider({
    accessTokenKey: "accessToken",
    onUpdateToken: (token) =>
        fetch(
            "https://backendlenguamaticag1.herokuapp.com/api/player/refresh",
            {
                method: "GET",
                redirect: "follow",
                headers: { Authorization: "Bearer " + token.refreshToken },
            }
        ).then((r) => r.json()),
});
