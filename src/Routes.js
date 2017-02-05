import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import LaMaquinita from './components/LaMaquinita/LaMaquinita';
import configStore from './store/storeConfig';
import CounterContainer from './containers/CounterContainer';

const store = configStore();

function Routes () {
    return (
        <Provider store={store}>
            <Router history={ browserHistory }>
                <Route path="/" component={ LaMaquinita } >
                    <IndexRoute to="/" component={CounterContainer} />
                </Route>
            </Router>
        </Provider>
    );
}

export default Routes;
