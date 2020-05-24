class Api {

    login(nombreUsuario, password, resultadoUsuario) {

        const url = 'http://localhost:4000/';
        const method= "api/users/login/";

        const endpoint = `${url}${method}`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({ name: nombreUsuario, password: password })
        };
            fetch(endpoint, requestOptions)
            .then ((response) => {
                if (response.status === 201) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.token;
                resultadoUsuario(results, null);
            }).catch(error => {
                resultadoUsuario(null, error);
            });
    }

    registro(nombreUsuario, password, resultadoUsuario) {

        const url = 'http://localhost:4000/';
        const method= "api/users/registration/";

        const endpoint = `${url}${method}`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({ name: nombreUsuario, password: password })
        };
            fetch(endpoint, requestOptions)
            .then ((response) => {
                if (response.status === 201) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.token;
                resultadoUsuario(results, null);
            }).catch(error => {
                resultadoUsuario(null, error);
            });
    }

    getPuntajes(juego, resultPuntajes) {
        const url = 'http://localhost:4000/';
        const method= "api/scores/" + juego;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json'}
        };

        const endpoint = `${url}${method}`;
            fetch(endpoint, requestOptions)
            .then ((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.data;
                console.log(results);
                resultPuntajes(results, juego, null);
            }).catch(error => {
                resultPuntajes(null, null, error);
            });
    }

    obtenerNivelTablas(nivel, resultTablas) {
        const url = 'http://localhost:3001/';
        const method= "matematica/tablas/"

        const endpoint = `${url}${method}${nivel}`;
            fetch(endpoint
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData;
                
                resultTablas(results, nivel, null);
            }).catch(error => {
                resultTablas(null, nivel, error);
            });
    }

    obtenerNivelSumas(nivel, resultSumas) {
        const url = 'http://localhost:3001/';
        const method= "matematica/sumas/"

        const endpoint = `${url}${method}${nivel}`;
            fetch(endpoint
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData;
                
                resultSumas(results, nivel, null);
            }).catch(error => {
                resultSumas(null, nivel, error);
            });
    }

}
export default new Api();