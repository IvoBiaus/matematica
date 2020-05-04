class Api {

    exsiteUsuario(nombreUsuario, resultadoUsuario) {

        const url = 'http://localhost:3001/';
        const method= "user/";

        const endpoint = `${url}${method}${nombreUsuario}`;
            fetch(endpoint
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.existe;
                resultadoUsuario(results, null);
            }).catch(error => {
                resultadoUsuario(null, error);
            });
    }

    getPuntajes(resultPuntajes) {
        const url = 'http://localhost:3001/';
        const method= "puntajes"

        const endpoint = `${url}${method}`;
            fetch(endpoint
            ).then ((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.status);    
            }).then (responseData => {
                // console.log("respuesta bruta",responseData);
                //Obtengo resultados
                const results = responseData.sort((a, b) => a.puntos - b.puntos);
                
                resultPuntajes(results, null);
            }).catch(error => {
                resultPuntajes(null, error);
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

}
export default new Api();