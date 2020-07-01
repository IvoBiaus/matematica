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
                //Guardo Token y nombre
                localStorage.setItem("nombre", nombreUsuario);
                localStorage.setItem("token", responseData.token);
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
                resultPuntajes(results, juego, null);
            }).catch(error => {
                resultPuntajes(null, null, error);
            });
    }

    obtenerNivelTablas(nivel, resultTablas) {
        const url = 'http://localhost:4000/';
        const method= "api/math/Tablas/";


        const options = { 
            method: 'GET', 
            headers: new Headers({
              'x-access-token':  localStorage.getItem("token")
            })
        };

        const endpoint = `${url}${method}${nivel}`;
            fetch(endpoint, options
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                } 
                
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.data;
                resultTablas(results, nivel, null);
            }).catch(error => {
                resultTablas(null, nivel, error);
            });
    }

    obtenerNivelSumas(nivel, resultSumas) {
        const url = 'http://localhost:4000/';
        const method= "api/sumsExercise/Sumas/"

        const options = { 
            method: 'GET', 
            headers: new Headers({
              'x-access-token':  localStorage.getItem("token")
            })
        };

        const endpoint = `${url}${method}${nivel}`;
            fetch(endpoint, options
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                const results = responseData;
                
                resultSumas(results, nivel, null);
            }).catch(error => {
                resultSumas(null, nivel, error);
            });
    }

    async verificarTablas(nivel, resultados) {
        const url = 'http://localhost:4000/';
        const method= "api/math/verificarTablas/";


        const options = { 
            method: 'POST', 
            headers: new Headers({
              'x-access-token':  localStorage.getItem("token"),
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(resultados)
        };

        const endpoint = `${url}${method}${nivel}`;
        let puntaje = await fetch(endpoint, options
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                } 
                
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.data;
                
                return results;
            }).catch(error => {
                console.log("Error en verificacion de ejercicio");
            });
        return puntaje;
    }

    guardarPuntaje(nombre, puntaje) {
        const url = 'http://localhost:4000/';
        const method= "api/scores/score/"

        var request = {
            'name': nombre,
            'game': 'Tablas',
            'score': puntaje
        }

        const options = { 
            method: 'POST', 
            headers: new Headers({
              'x-access-token':  localStorage.getItem("token"),
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(request)
        };

        const endpoint = `${url}${method}`;
            fetch(endpoint, options
            ).then ((response) => {
                if (response.status === 201) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados                

            }).catch(error => {
                console.log("Error en guardar puntajes");
            });
    }

    guardarPuntajeSuma(nombre, puntaje) {
        const url = 'http://localhost:4000/';
        const method= "api/scores/score/"

        var request = {
            'name': nombre,
            'game': 'Sumas',
            'score': puntaje
        }

        const options = { 
            method: 'POST', 
            headers: new Headers({
              'x-access-token':  localStorage.getItem("token"),
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(request)
        };

        const endpoint = `${url}${method}`;
            fetch(endpoint, options
            ).then ((response) => {
                if (response.status === 201) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados                

            }).catch(error => {
                console.log("Error en guardar puntajes");
            });
    }
    
    guardarPuntajePorNivel(game, nombre, nivel, puntaje, state) {
        const url = 'http://localhost:4000/';
        const method= "api/scoreByLevel/scoreForLevel/"

        var request = {
            'name': nombre,
            'game': game,
            'lvl': nivel,
            'score': puntaje,
            'state': state
        }

        const options = { 
            method: 'POST', 
            headers: new Headers({
              'x-access-token':  localStorage.getItem("token"),
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(request)
        };

        const endpoint = `${url}${method}`;
            fetch(endpoint, options
            ).then ((response) => {
                if (response.status === 201) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados                

            }).catch(error => {
                console.log("Error en guardar puntajes");
            });
    }

    obtenerEstadoDeJuego(game, name, state, resultEstadoJuego) {
        const url = 'http://localhost:4000/';
        const method= "api/scoreByLevel/" + game + "/" + name + "/" + state

        const options = { 
            method: 'GET', 
            headers: new Headers({
              'x-access-token':  localStorage.getItem("token")
            })
        };

        const endpoint = `${url}${method}`;
            fetch(endpoint, options
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                const results = responseData;
                
                resultEstadoJuego(results, null);
            }).catch(error => {
                resultEstadoJuego(null, error);
            });
    }
}
export default new Api();