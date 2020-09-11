/**
 * Author: Ajay Shrestha <ajay.shrestha@fusemachines.com>
 * Redux store and middlewares
 */
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import history from '../utils/history';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

/* const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

/**
 * Middlewares for redux
 * For intercepting and dispatching navigation actions
 */

const historyMiddleware = routerMiddleware(history);
const middlewares = applyMiddleware(thunk, historyMiddleware);
const store: any = createStore(rootReducer(history), composeWithDevTools(middlewares));

export { history };
export default store;
