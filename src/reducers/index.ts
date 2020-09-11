import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { connectRouter, RouterState as ConnectedReactRouterState } from 'connected-react-router';


const rootReducer = (history: any) => {
    return combineReducers<IApplicationState>({
      router: connectRouter(history),
    });
};

export interface IApplicationState {
    router: ConnectedReactRouterState;
}

export default rootReducer;
