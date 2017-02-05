require('es6-promise').polyfill();
require ('isomorphic-fetch');

const onSuccess = (response) => {
    response.json()
    .then( responseParsed => {
            return responseParsed;
        }
    )
}

const onError = (error) => {
    throw new Error("Bad response from server", error);
}

const get = (URL) => {
    fetch(URL)
        .then((response) => {
            onSuccess(response)
        })
        .catch(function(error) {
            onError(error);
        })
}

export default get;
