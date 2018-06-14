import { routerReducer as router, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as user, State as UserState } from './user';

export interface RootState {
  user: UserState;
  router: RouterState;
}

export const rootReducer = combineReducers<RootState>({
  user,
  router
});

export default rootReducer;