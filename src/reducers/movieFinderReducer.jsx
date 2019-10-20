import {MOVIEACTION} from '../actions/action.jsx'

const initialState = {
  movieList : {}
}

const movieFinderReducer = (state = initialState, action) => {
  switch(action.type){
    case MOVIEACTION.FETCH_MOVIE_DETAILS:
    return {
      ...state,
      movieList: action.data
    }
    default:
      return state;
  }
}

export default movieFinderReducer;