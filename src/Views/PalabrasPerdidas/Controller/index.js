const Controller = async (level) => {

    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMwNjlkMzczZjRjMDAxODE3MWZlMyIsImlhdCI6MTU5MjYwMzczNSwiZXhwIjoxNTkyNjkwMTM1fQ.unOU6Qs-jhEbBjYyipgfro8b8jeEteV7AOlcli8hxio");
    let token = localStorage.getItem("token");

    var requestOptions = {
        headers: {
            'Authorization': 'token ' + token
        },
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel="+level, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log( JSON.parse(result).data['0'].frases);

            return JSON.parse(result).data['0'].frases ;    // JSON con las frases del nivel 1
        })
        .catch(error => console.log('error', error));
};

export default Controller;