class Api {

    exsiteUsuario(nombreUsuario, resultadoUsuario) {

        const url = 'http://demo9269423.mockable.io/';
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
        const url = 'http://demo9269423.mockable.io/';
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

}
export default new Api();