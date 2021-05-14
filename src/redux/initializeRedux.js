import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducer';

const sagaMiddleware = createSagaMiddleware()
//const cookies = new Cookies();

const allStoreEnhancers = compose
  (
    applyMiddleware(sagaMiddleware),
  );

const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

// Start the sagas
//sagaMiddleware.run(watchTechnicianRequests);



// Create the redux store
export default store;
