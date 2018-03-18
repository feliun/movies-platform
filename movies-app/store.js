import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const startupState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  movies: [],
};

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  UPDATE_MOVIES: 'UPDATE_MOVIES',
};

// REDUCERS
export const reducer = (state = startupState, payload) => {
  switch (payload.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: payload.ts, light: !!payload.light });
    case actionTypes.ADD:
      return Object.assign({}, state, { count: state.count + 1 });
    case actionTypes.UPDATE_MOVIES:
      return Object.assign({}, state, { light: !!payload.light, movies: payload.movies });
    default: return state;
  }
};

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });

export const updateMovies = ({ movies, isServer }) => dispatch => dispatch({ type: actionTypes.UPDATE_MOVIES, light: !isServer, movies });

export const startClock = () => dispatch => setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 1000);

export const addCount = () => dispatch => dispatch({ type: actionTypes.ADD });

export const initStore = (initialState = startupState) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
