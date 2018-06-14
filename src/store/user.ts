import { combineReducers } from 'redux';
import { RootState } from './rootReducer';

// Actions
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const STORE_SESSION_ID = 'STORE_SESSION_ID';
export const AVAILABLE_LOGIN_ACCOUNTS = 'AVAILABLE_LOGIN_ACCOUNTS';

export interface Actions {
  SELECT_ACCOUNT: {
    type: typeof SELECT_ACCOUNT;
    payload: string;
  };
  STORE_SESSION_ID: {
    type: typeof STORE_SESSION_ID;
    payload: string;
  };
  AVAILABLE_LOGIN_ACCOUNTS: {
    type: typeof AVAILABLE_LOGIN_ACCOUNTS;
    payload: string[];
  };
}

export const actionCreators = {
  selectAccount: (account: string): Actions[typeof SELECT_ACCOUNT] => ({
    payload: account,
    type: SELECT_ACCOUNT,
  }),
  storeSessionId: (sessionId: string): Actions[typeof STORE_SESSION_ID] => ({
    payload: sessionId,
    type: STORE_SESSION_ID,
  }),
  setAvailableLoginAccounts: (
    availableLoginAccounts: string[]
  ): Actions[typeof AVAILABLE_LOGIN_ACCOUNTS] => ({
    type: AVAILABLE_LOGIN_ACCOUNTS,
    payload: availableLoginAccounts,
  }),
};

// Reducers
export interface State {
  readonly account: string;
  readonly sessionId: string; 
  availableLoginAccounts: string[];
}

export const reducer = combineReducers<State>({
  account: (state = '', action) => {
    switch (action.type) {
      case SELECT_ACCOUNT:
        return action.payload;
      default:
        return state;
    }
  },
  sessionId: (state = '', action) => {
    switch (action.type) {
      case STORE_SESSION_ID:
        return action.payload;
      default:
        return state;
    }
  },
  availableLoginAccounts: (state = [], action) => {
    switch (action.type) {
      case AVAILABLE_LOGIN_ACCOUNTS:
        return action.payload;
      default:
        return state;
    }
  },
});

// Selectors
export const getUserAccount = (state: RootState) => state.user.account;


export default reducer;