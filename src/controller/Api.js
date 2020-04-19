class Api {

    exsiteUsuario(nombreUsuario, resultadoUsuario) {

        const url = 'http://demo9269423.mockable.io/';
        const method= "user/";

        const endpoint = `${url}${method}${nombreUsuario}`;
            // console.log("URL",endpoint);
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
                // console.log("ERROR" + error)
                //    browserHistory.push("/my404page");
                resultadoUsuario(null, error);
            });
    }

}
export default new Api();