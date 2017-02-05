//Require babel before running tests.
require('babel-register')();

//Disable CSS requests.
require.extensions['.css'] = () => {};

//Disable images request.
require.extensions['.png'] = () => {
    return null;
};

//Disable less request.
require.extensions['.less'] = () => {
    return null;
};
