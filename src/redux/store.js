import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    // Add redux devtools extension if needed
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;