import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const startupState = { movies: [] };

export const actionTypes = { UPDATE_MOVIES: 'UPDATE_MOVIES' };

// REDUCERS
export const reducer = (state = startupState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_MOVIES:
      return Object.assign({}, state, { light: !!payload.light, movies: payload.movies });
    default: return state;
  }
};

// ACTIONS
export const updateMovies = ({ movies, isServer }) => dispatch => dispatch({ type: actionTypes.UPDATE_MOVIES, light: !isServer, movies });

export const initStore = (initialState = startupState) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
